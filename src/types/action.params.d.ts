export type TCreateUserParams = {
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  userName?: string;
  avatar?: string;
  locked?: boolean;
  banned?: boolean;
  role?: string;
};

export type TCreateCourseParams = {
  owner: string;
  name: string;
  description: string;
  thumbnail?: string;
  startDate: Date;
  endDate: Date;
};
