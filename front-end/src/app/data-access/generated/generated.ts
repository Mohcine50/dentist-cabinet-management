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
  addStaffMember?: Maybe<DemUser>;
  addTreatment?: Maybe<DemTreatment>;
  /** TREATMENTS */
  deleteTreatment: Scalars['String']['output'];
  updateTreatment?: Maybe<DemTreatment>;
};


export type DemMutationAddStaffMemberArgs = {
  registerAuthManager: DemRegisterAuthManager;
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

export type DemProfile = {
  __typename?: 'Profile';
  bio?: Maybe<Scalars['Int']['output']>;
  cin?: Maybe<Scalars['Int']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<DemUser>;
  fullName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  otherPhoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<DemUser>;
  user?: Maybe<DemUser>;
};

export type DemQuery = {
  __typename?: 'Query';
  getTreatmentById?: Maybe<DemTreatment>;
  /**  ROLES  */
  loadAllRoles: Array<Maybe<DemRole>>;
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

export type DemStaff = {
  __typename?: 'Staff';
  bio?: Maybe<Scalars['Int']['output']>;
  cin?: Maybe<Scalars['Int']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<DemUser>;
  fullName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  otherPhoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<DemUser>;
  user?: Maybe<DemUser>;
};

export type DemTreatment = {
  __typename?: 'Treatment';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<DemUser>;
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
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type DemLoginQueryVariables = Exact<{
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
}>;


export type DemLoginQuery = { __typename?: 'Query', login?: { __typename?: 'LoginResponse', accessToken?: string | null | undefined, message?: string | null | undefined } | null | undefined };

export type DemLoadAllRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type DemLoadAllRolesQuery = { __typename?: 'Query', loadAllRoles: Array<{ __typename?: 'Role', id?: string | null | undefined, name?: string | null | undefined } | null | undefined> };

export type DemAddTreatmentMutationVariables = Exact<{
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  duration: Scalars['String']['input'];
  sessions?: InputMaybe<Scalars['Int']['input']>;
}>;


export type DemAddTreatmentMutation = { __typename?: 'Mutation', addTreatment?: { __typename?: 'Treatment', name?: string | null | undefined, id?: string | null | undefined, price?: number | null | undefined, sessions?: number | null | undefined, createdAt?: string | null | undefined, updatedAt?: string | null | undefined, createdBy?: { __typename?: 'User', username?: string | null | undefined } | null | undefined, updatedBy?: { __typename?: 'User', username?: string | null | undefined } | null | undefined } | null | undefined };

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