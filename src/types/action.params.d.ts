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
