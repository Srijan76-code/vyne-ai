import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const res = await fetch(`${process.env.BACKEND_URL}/api/projects/${id}`, {
    cache: "no-store",
  });

  const data = await res.json();

  console.log(data);

  return <div>page with id {id}</div>;
};

export default page;
