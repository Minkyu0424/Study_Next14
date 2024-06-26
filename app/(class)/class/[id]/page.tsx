const page = ({ params }: { params: { id: string } }) => {
  console.log(params);

  return (
    <div>
      <h1>곧 수업이 시작해요</h1>
      <ul>
        <li>props안에는 params, searchParams가 들어있어</li>
        <li>url의 params는 변수처럼 사용 돼</li>
        <li>?로 시작하는건 searchParams임</li>
        <li>가져온 반은 {params.id}반</li>
      </ul>
    </div>
  );
};

export default page;
