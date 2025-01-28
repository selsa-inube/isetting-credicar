interface IUser {
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  name: string;
  nickname: string;
  picture: string;
  sub: string;
  updated_at: string;
  [key: string]: unknown;
}

export type { IUser };
