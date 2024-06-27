import { Suspense } from "react";
import OnlyMovieInfo from "../../../components/OnlyMovieIndo";
import OnlyVideos from "../../../components/OnlyVideos";

const page = async ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <Suspense fallback={<h1>Now Loading Movie Info</h1>}>
        <h1>영화 정보</h1>
        <OnlyMovieInfo id={params.id} />
      </Suspense>
      <Suspense fallback={<h1>Now Loading Movie videos</h1>}>
        <h1>영화 비디오 정보</h1>
        <OnlyVideos id={params.id} />
      </Suspense>
    </div>
  );
};

export default page;
