import React from "react";
type Params = Promise<{ id: string }>;

const CourseDetailsPage = ({ params }: { params: Params }) => {
  const { id } = params;

  return <div>CourseDetailsPage for course ID : {id} </div>;
};

export default CourseDetailsPage;
