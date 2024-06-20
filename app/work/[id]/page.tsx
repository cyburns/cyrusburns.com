import WorkPage from "@/components/work/WorkPage";
import React from "react";

const page = ({ params }: any) => {
  return (
    <div className="">
      <WorkPage id={params.id} />
    </div>
  );
};

export default page;
