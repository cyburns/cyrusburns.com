import WorkPage from "@/components/work/WorkPage";
import React from "react";

const page = ({ params }: any) => {
  return (
    <div className="px-5">
      <WorkPage id={params.id} />
    </div>
  );
};

export default page;
