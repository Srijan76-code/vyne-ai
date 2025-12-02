import RemixHome from "./_components/RemixHome";


const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects/${id}`, {
    cache: "no-store",
    credentials: "include",
  });

  const project = await res.json();

  console.log(project);

  return <div>
    <RemixHome project={project}/>
  </div>;
};

export default page;
