import { gql } from "@apollo/client";

const ADMIN_LOGIN = gql`
  query adminLogin($email: String!, $password: String!){
  adminLogin(email: $email, password: $password) {
    access_token
  }
}
`;

export default ADMIN_LOGIN;