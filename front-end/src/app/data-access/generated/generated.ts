import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type DemLoginResponse = {
  __typename?: 'LoginResponse';
  accessToken?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type DemMutation = {
  __typename?: 'Mutation';
  /** PATIENT */
  addPatient: DemPatient;
  /** STAFF */
  addStaffMember?: Maybe<DemUser>;
  addTreatment?: Maybe<DemTreatment>;
  /** TREATMENTS */
  deleteTreatment: Scalars['String']['output'];
  updateTreatment?: Maybe<DemTreatment>;
};


export type DemMutationAddPatientArgs = {
  patient: DemPatientInput;
};


export type DemMutationAddStaffMemberArgs = {
  staff: DemStaffInput;
};


export type DemMutationAddTreatmentArgs = {
  treatmentData: DemTreatmentInput;
};


export type DemMutationDeleteTreatmentArgs = {
  id: Scalars['String']['input'];
};


export type DemMutationUpdateTreatmentArgs = {
  id: Scalars['String']['input'];
};

export type DemPatient = {
  __typename?: 'Patient';
  address?: Maybe<Scalars['String']['output']>;
  cin?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  otherPhoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  treatments?: Maybe<Array<Maybe<DemTreatment>>>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type DemPatientInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  cinNumber?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  otherPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  treatment?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type DemProfile = {
  __typename?: 'Profile';
  bio?: Maybe<Scalars['String']['output']>;
  cin?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  otherPhoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type DemQuery = {
  __typename?: 'Query';
  getTreatmentById?: Maybe<DemTreatment>;
  /**  ROLES  */
  loadAllRoles: Array<Maybe<DemRole>>;
  /**  USERS  */
  loadAllStaffMembers?: Maybe<Array<Maybe<DemUser>>>;
  /** TREATMENTS */
  loadAllTreatments?: Maybe<Array<Maybe<DemTreatment>>>;
  /**  AUTH  */
  login?: Maybe<DemLoginResponse>;
};


export type DemQueryGetTreatmentByIdArgs = {
  id: Scalars['String']['input'];
};


export type DemQueryLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type DemRegisterAuthManager = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type DemRole = {
  __typename?: 'Role';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type DemStaffInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  cinNumber?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  otherPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type DemTreatment = {
  __typename?: 'Treatment';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<DemUser>;
  duration?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  sessions?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<DemUser>;
};

export type DemTreatmentInput = {
  duration?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  sessions?: InputMaybe<Scalars['Int']['input']>;
};

export type DemUser = {
  __typename?: 'User';
  firstLoginTime?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  profile?: Maybe<DemProfile>;
  roles?: Maybe<Array<Maybe<DemRole>>>;
  username?: Maybe<Scalars['String']['output']>;
};

export type DemLoginQueryVariables = Exact<{
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
}>;


export type DemLoginQuery = { __typename?: 'Query', login?: { __typename?: 'LoginResponse', accessToken?: string | null | undefined, message?: string | null | undefined } | null | undefined };

export type DemLoadAllRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type DemLoadAllRolesQuery = { __typename?: 'Query', loadAllRoles: Array<{ __typename?: 'Role', id?: string | null | undefined, name?: string | null | undefined } | null | undefined> };

export type DemAddStaffMemberMutationVariables = Exact<{
  staff: DemStaffInput;
}>;


export type DemAddStaffMemberMutation = { __typename?: 'Mutation', addStaffMember?: { __typename?: 'User', id?: string | null | undefined, username?: string | null | undefined, profile?: { __typename?: 'Profile', cin?: string | null | undefined, id?: string | null | undefined, phoneNumber?: string | null | undefined, fullName?: string | null | undefined, otherPhoneNumber?: string | null | undefined, city?: string | null | undefined, createdAt?: string | null | undefined, bio?: string | null | undefined, email?: string | null | undefined, updatedAt?: string | null | undefined } | null | undefined, roles?: Array<{ __typename?: 'Role', name?: string | null | undefined, id?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type DemLoadAllStaffMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type DemLoadAllStaffMembersQuery = { __typename?: 'Query', loadAllStaffMembers?: Array<{ __typename?: 'User', id?: string | null | undefined, username?: string | null | undefined, profile?: { __typename?: 'Profile', cin?: string | null | undefined, id?: string | null | undefined, phoneNumber?: string | null | undefined, fullName?: string | null | undefined, otherPhoneNumber?: string | null | undefined, city?: string | null | undefined, createdAt?: string | null | undefined, bio?: string | null | undefined, email?: string | null | undefined, updatedAt?: string | null | undefined } | null | undefined, roles?: Array<{ __typename?: 'Role', name?: string | null | undefined, id?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type DemAddTreatmentMutationVariables = Exact<{
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  duration: Scalars['String']['input'];
  sessions?: InputMaybe<Scalars['Int']['input']>;
}>;


export type DemAddTreatmentMutation = { __typename?: 'Mutation', addTreatment?: { __typename?: 'Treatment', name?: string | null | undefined, id?: string | null | undefined, price?: number | null | undefined, sessions?: number | null | undefined, createdAt?: string | null | undefined, updatedAt?: string | null | undefined, duration?: string | null | undefined, createdBy?: { __typename?: 'User', username?: string | null | undefined } | null | undefined, updatedBy?: { __typename?: 'User', username?: string | null | undefined } | null | undefined } | null | undefined };

export type DemLoadAllTreatmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type DemLoadAllTreatmentsQuery = { __typename?: 'Query', loadAllTreatments?: Array<{ __typename?: 'Treatment', name?: string | null | undefined, id?: string | null | undefined, price?: number | null | undefined, sessions?: number | null | undefined, updatedAt?: string | null | undefined, createdAt?: string | null | undefined, createdBy?: { __typename?: 'User', username?: string | null | undefined } | null | undefined, updatedBy?: { __typename?: 'User', username?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export const LoginDocument = gql`
    query login($password: String!, $username: String!) {
  login(password: $password, username: $username) {
    accessToken
    message
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DemLoginGQL extends Apollo.Query<DemLoginQuery, DemLoginQueryVariables> {
    override document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoadAllRolesDocument = gql`
    query loadAllRoles {
  loadAllRoles {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DemLoadAllRolesGQL extends Apollo.Query<DemLoadAllRolesQuery, DemLoadAllRolesQueryVariables> {
    override document = LoadAllRolesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddStaffMemberDocument = gql`
    mutation addStaffMember($staff: StaffInput!) {
  addStaffMember(staff: $staff) {
    id
    profile {
      cin
      id
      phoneNumber
      fullName
      phoneNumber
      otherPhoneNumber
      cin
      city
      createdAt
      bio
      email
      updatedAt
    }
    roles {
      name
      id
    }
    username
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DemAddStaffMemberGQL extends Apollo.Mutation<DemAddStaffMemberMutation, DemAddStaffMemberMutationVariables> {
    override document = AddStaffMemberDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoadAllStaffMembersDocument = gql`
    query loadAllStaffMembers {
  loadAllStaffMembers {
    id
    profile {
      cin
      id
      phoneNumber
      fullName
      phoneNumber
      otherPhoneNumber
      cin
      city
      createdAt
      bio
      email
      updatedAt
    }
    roles {
      name
      id
    }
    username
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DemLoadAllStaffMembersGQL extends Apollo.Query<DemLoadAllStaffMembersQuery, DemLoadAllStaffMembersQueryVariables> {
    override document = LoadAllStaffMembersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddTreatmentDocument = gql`
    mutation addTreatment($name: String!, $price: Int!, $duration: String!, $sessions: Int) {
  addTreatment(
    treatmentData: {sessions: $sessions, name: $name, price: $price, duration: $duration}
  ) {
    name
    id
    price
    sessions
    createdAt
    updatedAt
    duration
    createdBy {
      username
    }
    updatedBy {
      username
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DemAddTreatmentGQL extends Apollo.Mutation<DemAddTreatmentMutation, DemAddTreatmentMutationVariables> {
    override document = AddTreatmentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoadAllTreatmentsDocument = gql`
    query loadAllTreatments {
  loadAllTreatments {
    name
    id
    price
    sessions
    updatedAt
    createdAt
    createdBy {
      username
    }
    updatedBy {
      username
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DemLoadAllTreatmentsGQL extends Apollo.Query<DemLoadAllTreatmentsQuery, DemLoadAllTreatmentsQueryVariables> {
    override document = LoadAllTreatmentsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }