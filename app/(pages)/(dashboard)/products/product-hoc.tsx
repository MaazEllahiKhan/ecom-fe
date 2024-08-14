'use client'
import { ADD_PRODUCT, GET_PRODUCTS } from "@/app/components/shared/apollo/graphql/product/product.graphql"
import { PRODUCT_ADDED } from "@/app/components/shared/apollo/graphql/subscriptions/product.graphql";
import { ProductsEntityOutput } from "@/app/components/shared/apollo/schema/graphql";
// import { getClient } from "@/app/components/shared/apollo/lib/apolloServer";
import { useLazyQuery, useMutation, useQuery, useSubscription } from "@apollo/client"
import { useEffect, useState } from "react";

export const useProductHoc = () => {
    const [prodSubData, setProdSubData] = useState<ProductsEntityOutput[]>([])
    // const { data: getProductData, error: getProductError } = await getClient().query({query: GET_PRODUCTS});
    const { data: getProductData, error: getProductError, loading: getProductLoading } = useQuery(GET_PRODUCTS);
    const [addProductMutation, { data: addProductData, error: addProductError }] = useMutation(ADD_PRODUCT);
    const { data: subsData, loading: subsLoading } = useSubscription(PRODUCT_ADDED);

    const onSubmit = (e: any) => {
        addProductMutation({
            variables: {
                name: e.get('name'),
                description: e.get('description')
            }
        })
    }

    useEffect(() => {
        if (subsData && subsData.productAdded) {
            console.log('subsData', subsData)
            setProdSubData([...prodSubData, subsData.productAdded])
        }
    }, [subsData])

    return {
        onSubmit,
        validationError: addProductError?.message,
        productList: getProductData?.getProducts,
        getProductLoading,
        getProductError,
        addProductData: addProductData?.addProduct,
        subsData: prodSubData,
        subsLoading

    }


}