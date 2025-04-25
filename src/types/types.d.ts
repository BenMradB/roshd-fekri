export type TNavbarItem = {
  title: string;
  url: string;
  id: number;
};

export type TPrayer = {
  icon: string;
  prayer: string;
  time: string;
};

export type TUser = {
  _id: string;
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  userName?: string;
  avatar?: string;
  locked: boolean;
  banned: boolean;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};
