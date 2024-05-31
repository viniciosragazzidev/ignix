export type TypeUser = {
  id: string;
  name?: string;
  surname?: string | null;
  image?: string | null;
  email: string;
  password?: string | null;
  emailVerified?: Date | null;
  role?: AppRole;

  Account?: TypeAccount[];
  Session?: TypeSession[];
  Authenticator?: TypeAuthenticator[];
  createdCompanies?: TypeCompany[];
  companies?: TypeCompany[];
  CompanyUser?: TypeCompanyUser[];
};

enum AppRole {
  VISITOR = 'VISITOR',
  MEMBER = 'MEMBER',
  ADMIN = 'ADMIN',
  OWNER = 'OWNER',
  BILLING = 'BILLING'
}

export type TypeAccount = {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string | null;
  access_token?: string | null;
  expires_at?: number | null;
  token_type?: string | null;
  scope?: string | null;
  id_token?: string | null;
  session_state?: string | null;
};

export type TypeSession = {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
};

export type TypeVerificationToken = {
  identifier: string;
  token: string;
  expires: Date;
};

export type TypeAuthenticator = {
  id: string;
  credentialID: string;
  userId: string;
  providerAccountId: string;
  credentialPublicKey: string;
  counter: number;
  credentialDeviceType: string;
  credentialBackedUp: boolean;
  transports?: string | null;
};

export type TypeCompany = {
  id: string;
  name: string;
  slugId: string;
  cnpj: string;
  address: string;
  city: string;
  state: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  deletedById?: string | null;

  creatorId: string;
  creator: TypeUser;
  users: TypeUser[];
  CompanyUser: TypeCompanyUser[];
};

export type TypeCompanyUser = {
  profileId: string;
  companyId: string;
  user: TypeUser;
  company: TypeCompany;
};
