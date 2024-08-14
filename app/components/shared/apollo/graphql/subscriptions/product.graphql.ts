import { gql } from "@apollo/client";

const PRODUCT_ADDED = gql`
  subscription productAdded {
    productAdded {
        productId
        productName
        createdAt
  }
}
`;
export { PRODUCT_ADDED };
