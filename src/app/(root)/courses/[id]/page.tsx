import React from "react";

const CourseDetailsPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return <div>CourseDetailsPage for course ID : {id} </div>;
};

export default CourseDetailsPage;
