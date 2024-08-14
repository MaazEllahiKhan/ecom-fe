import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query getProducts {
    getProducts {
        productId
        productName
        createdAt
  }
}
`;

const ADD_PRODUCT = gql`
  mutation addProduct($name: String, $description: String) {
    addProduct(name:$name, description: $description) {
        productName
        createdAt
  }
}
`;


export { GET_PRODUCTS, ADD_PRODUCT };