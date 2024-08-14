/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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

export type AddProductInput = {
  name: Scalars['String']['input'];
};

export type AdminChangePasswordInput = {
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type AdminLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AdminLoginOutput = {
  __typename?: 'AdminLoginOutput';
  access_token: Scalars['String']['output'];
};

export type AdminSignUpInput = {
  email: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type AdminSignUpOutput = {
  __typename?: 'AdminSignUpOutput';
  email: Scalars['String']['output'];
};

export type AdminUpdatePasswordInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AdminUser = {
  admin_id: Scalars['Int']['input'];
  email: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addProduct?: Maybe<ProductsEntityOutput>;
  adminSignUp: AdminSignUpOutput;
};


export type MutationAddProductArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAdminSignUpArgs = {
  email: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type OrderEntityOutput = {
  __typename?: 'OrderEntityOutput';
  cogsUsd?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  itemsPurchased?: Maybe<Scalars['Int']['output']>;
  orderId?: Maybe<Scalars['Int']['output']>;
  priceUsd?: Maybe<Scalars['Float']['output']>;
  primaryProductId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  websiteSessionId?: Maybe<Scalars['Int']['output']>;
};

export type OrderItemEntityOutput = {
  __typename?: 'OrderItemEntityOutput';
  cogsUsd?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  isPrimaryItem?: Maybe<Scalars['Int']['output']>;
  orderId?: Maybe<OrderEntityOutput>;
  orderItemId?: Maybe<Scalars['Int']['output']>;
  priceUsd?: Maybe<Scalars['Int']['output']>;
  productId?: Maybe<ProductsEntityOutput>;
};

export type ProductSearchEntityOutput = {
  __typename?: 'ProductSearchEntityOutput';
  age?: Maybe<Scalars['String']['output']>;
  bottlePrice?: Maybe<Scalars['String']['output']>;
  bottleSize?: Maybe<Scalars['Int']['output']>;
  caseCost?: Maybe<Scalars['Float']['output']>;
  categoryName?: Maybe<Scalars['String']['output']>;
  innerPack?: Maybe<Scalars['Int']['output']>;
  itemDescription?: Maybe<Scalars['String']['output']>;
  itemNo: Scalars['Int']['output'];
  listDate?: Maybe<Scalars['String']['output']>;
  pack?: Maybe<Scalars['Int']['output']>;
  proof?: Maybe<Scalars['Int']['output']>;
  scc?: Maybe<Scalars['String']['output']>;
  shelfPrice?: Maybe<Scalars['Float']['output']>;
  upc?: Maybe<Scalars['String']['output']>;
  vendor?: Maybe<Scalars['Int']['output']>;
  vendorName?: Maybe<Scalars['String']['output']>;
};

export type ProductsEntityOutput = {
  __typename?: 'ProductsEntityOutput';
  createdAt?: Maybe<Scalars['String']['output']>;
  productId: Scalars['Int']['output'];
  productName?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  adminLogin: AdminLoginOutput;
  getOrderItems?: Maybe<Array<OrderItemEntityOutput>>;
  getProducts?: Maybe<Array<ProductsEntityOutput>>;
  searchProducts?: Maybe<Array<ProductSearchEntityOutput>>;
};


export type QueryAdminLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type QuerySearchProductsArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  productAdded?: Maybe<ProductsEntityOutput>;
};

export type TwoFaCredentialsOutput = {
  __typename?: 'TwoFaCredentialsOutput';
  totp_uri: Scalars['String']['output'];
};

export type AdminLoginQueryVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type AdminLoginQuery = { __typename?: 'Query', adminLogin: { __typename?: 'AdminLoginOutput', access_token: string } };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', getProducts?: Array<{ __typename?: 'ProductsEntityOutput', productName?: string | null, createdAt?: string | null }> | null };

export type AddProductMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type AddProductMutation = { __typename?: 'Mutation', addProduct?: { __typename?: 'ProductsEntityOutput', productName?: string | null, createdAt?: string | null } | null };


export const AdminLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"adminLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access_token"}}]}}]}}]} as unknown as DocumentNode<AdminLoginQuery, AdminLoginQueryVariables>;
export const GetProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetProductsQuery, GetProductsQueryVariables>;
export const AddProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<AddProductMutation, AddProductMutationVariables>;