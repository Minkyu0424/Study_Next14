const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const res = await fetch(URL);
  const json = await res.json();
  return json;
}
export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      영화
      <div>{JSON.stringify(movies)}</div>
    </div>
  );
}
