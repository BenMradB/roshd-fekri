import React from "react";
type Params = Promise<{ id: string }>;

const CourseDetailsPage = async ({ params }: { params: Params }) => {
  const { id } = await params;

  return <div>CourseDetailsPage for course ID : {id} </div>;
};

export default CourseDetailsPage;
