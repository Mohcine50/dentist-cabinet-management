export type TProfile = {
  cin?: string | null;
  id?: string | null;
  phoneNumber?: string | null;
  fullName?: string | null;
  otherPhoneNumber?: string | null;
  city?: string | null;
  createdAt?: string | null;
  bio?: string | null;
  email?: string | null;
  updatedAt?: string | null;
};

export type TRole = {
  name?: string | null;
  id?: string | null;
};

export type TStaff = {
  id?: string | null;
  username?: string | null;
  profile?: TProfile | null;
  roles?: TRole[] | null;
};
