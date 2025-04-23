import React from "react";

const CourseDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  return <div>CourseDetailsPage for course ID : {id} </div>;
};

export default CourseDetailsPage;
