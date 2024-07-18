const page = ({ params }) => {
  console.log(params)
  return (
    <div className="text-center m-20">this page params are {params.posts}</div>
  );
};

export default page;
