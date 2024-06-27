import { URL } from "../app/movies/page";

interface OnlyVideosProps {
  id: string;
}

const getMovie = async (id: string) => {
  const res = await fetch(`${URL}/${id}`);
  throw new Error('something happened')
  return res.json();
};

const OnlyMovieInfo = async ({ id }: OnlyVideosProps) => {
  const movie = await getMovie(id);
  return <div>{JSON.stringify(movie)}</div>;
};

export default OnlyMovieInfo;
