// AppRole enum
enum AppRole {
  VISITOR = "VISITOR",
  MEMBER = "MEMBER",
  ADMIN = "ADMIN",
  OWNER = "OWNER",
  BILLING = "BILLING",
}

// User model
interface TypeUser {
  id: string;
  name: string;
  surname?: string;
  image?: string;
  email: string;
  password?: string;
  emailVerified?: Date;
  role: AppRole;
  profile?: TypeProfileUser;
  accounts: TypeAccount[];
  sessions: TypeSession[];
  authenticators: TypeAuthenticator[];
}

// ProfileUser model
interface TypeProfileUser {
  id: string;
  name: string;
  surname: string;
  email: string;
  image?: string;
  birthdate: Date;
  gender: string;
  cpf: string;
  phone: string;
  address?: string;
  userId: string;
  user: TypeUser;
  createdCompanies: TypeCompany[];
  companies: TypeCompany[];
  companyUsers: TypeCompanyUser[];
}

// Company model
interface TypeCompany {
  id: string;
  name: string;
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
  creator: TypeProfileUser;
  users: TypeProfileUser[];
  companyUsers: TypeCompanyUser[];
}

// CompanyUser model
interface TypeCompanyUser {
  profileId: string;
  companyId: string;
  user: TypeProfileUser;
  company: TypeCompany;
}

// Account model
interface TypeAccount {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string;
  access_token?: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;
  user: TypeUser;
}

// Session model
interface TypeSession {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
  user: TypeUser;
}

// Authenticator model
interface TypeAuthenticator {
  id: string;
  credentialID: string;
  userId: string;
  providerAccountId: string;
  credentialPublicKey: string;
  counter: number;
  credentialDeviceType: string;
  credentialBackedUp: boolean;
  transports?: string;
  user: TypeUser;
}
