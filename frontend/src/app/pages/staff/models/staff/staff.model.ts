import { role } from './role.model';
import { profile } from './profile.model';

export type staff = {
  id: string;
  username: string;
  profile: profile;
  roles: role[];
};
