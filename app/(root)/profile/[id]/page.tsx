import Header from "@/components/Header";

const Page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <div className="wrapper page">
      <Header
        title="Hanif Hafizhan"
        subHeader="muhamadhanifhafizhan@gmail.com"
        userImg="/assets/images/dummy.jpg"
      />
      <h1 className="text-2xl font-karla">USER ID : {id}</h1>
    </div>
  );
};

export default Page;
