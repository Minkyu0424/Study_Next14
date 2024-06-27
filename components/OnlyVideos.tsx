import { URL } from "../app/movies/page";

interface OnlyVideosProps {
  id: string;
}

const getVideos = async (id: string) => {
  const res = await fetch(`${URL}/${id}/videos`);
  return res.json();
};

const OnlyVideos = async ({ id }: OnlyVideosProps) => {
  const videos = await getVideos(id);
  return <div>{JSON.stringify(videos)}</div>;
};

export default OnlyVideos;
