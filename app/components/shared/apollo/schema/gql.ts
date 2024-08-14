/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query adminLogin($email: String!, $password: String!){\n  adminLogin(email: $email, password: $password) {\n    access_token\n  }\n}\n": types.AdminLoginDocument,
    "\n  query getProducts {\n    getProducts {\n        productName\n        createdAt\n  }\n}\n": types.GetProductsDocument,
    "\n  mutation addProduct($name: String, $description: String) {\n    addProduct(name:$name, description: $description) {\n        productName\n        createdAt\n  }\n}\n": types.AddProductDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query adminLogin($email: String!, $password: String!){\n  adminLogin(email: $email, password: $password) {\n    access_token\n  }\n}\n"): (typeof documents)["\n  query adminLogin($email: String!, $password: String!){\n  adminLogin(email: $email, password: $password) {\n    access_token\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getProducts {\n    getProducts {\n        productName\n        createdAt\n  }\n}\n"): (typeof documents)["\n  query getProducts {\n    getProducts {\n        productName\n        createdAt\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation addProduct($name: String, $description: String) {\n    addProduct(name:$name, description: $description) {\n        productName\n        createdAt\n  }\n}\n"): (typeof documents)["\n  mutation addProduct($name: String, $description: String) {\n    addProduct(name:$name, description: $description) {\n        productName\n        createdAt\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;