import React from "react";

type Params = Promise<{ id: string }>;

const WatchCoursePage = async ({ params }: { params: Params }) => {
  const { id } = await params;

  console.log(id);

  return (
    <div>
      <h1>Watch Course Page</h1>
      <p>Course ID: {id}</p>
      <p>Video Player Component will go here</p>
      <p>Course Content will go here</p>
      <p>Comments Section will go here</p>
    </div>
  );
};

export default WatchCoursePage;
