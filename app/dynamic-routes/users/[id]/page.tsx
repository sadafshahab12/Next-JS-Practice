import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  // destructure id 
  const {id} = params;
  return (
    <div>
      <h1>User Detail Page {id}</h1>
    </div>
  );
};

export default Page;
