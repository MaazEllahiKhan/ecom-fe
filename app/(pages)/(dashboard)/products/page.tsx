'use client'
import { ProductsEntityOutput } from "@/app/components/shared/apollo/schema/graphql"
import { useProductHoc } from "./product-hoc"
import { Suspense } from "react"

export default function Products() {
    const {
        onSubmit,
        validationError,
        productList,
        getProductLoading,
        getProductError,
        addProductData,
        subsData,
        subsLoading
    } = useProductHoc()
    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold">Product page</h1>
            <div className="grid grid-cols-2 gap-7">
                <div className="mt-16">
                    <h1 className="text-xl font-semibold">Add Product</h1>

                    <form className="flex flex-col space-y-8 text-center items-start mt-8" action={onSubmit}>
                        <label htmlFor="name" className="flex flex-col justify-center items-start gap-3">
                            <div className="mr-10">write product name:</div>

                            <input className="p-2 border-2 border-primary rounded-md" type="text" name="name" placeholder="Type product" required />
                        </label>
                        <label htmlFor="description" className="flex flex-col justify-center items-start gap-3">
                            <div className="mr-10">Write description:</div>
                            <textarea className="p-2 border-2 border-primary rounded-md" rows={4} name="description" placeholder="type discription" />
                        </label>
                        {validationError && <p className="text-red-600">{validationError}</p>}

                        <button className="bg-primary text-white p-2 rounded-md w-32" type="submit">Save</button>
                    </form>
                </div>
                <div>
                    <h1 className="text-xl font-semibold">Product List</h1>
                    <div className="container mx-auto p-4">
                        {/* <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className="mb-4 p-2 border border-gray-300 rounded"
                        /> */}
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">ID</th>
                                    <th className="py-2 px-4 border-b">Name</th>
                                    <th className="py-2 px-4 border-b">Email</th>
                                </tr>
                            </thead>
                            {/* <Suspense fallback={<h2>🌀 Loading...</h2>}> */}
                            <tbody>
                                {productList?.map((product: ProductsEntityOutput) => (
                                    <tr key={product.productId}>
                                        <td className="py-2 px-4 border-b">{product.productId}</td>
                                        <td className="py-2 px-4 border-b">{product.productName}</td>
                                        <td className="py-2 px-4 border-b">{product.createdAt}</td>
                                    </tr>
                                ))}
                            </tbody>
                            {/* </Suspense> */}

                        </table>
                    </div>

                </div>


            </div>
            <div>
                <h1 className="text-xl font-semibold">Product Subscription List</h1>
                <div className="container mx-auto p-4">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">ID</th>
                                <th className="py-2 px-4 border-b">Name</th>
                                <th className="py-2 px-4 border-b">Email</th>
                            </tr>
                        </thead>
                        {/* <Suspense fallback={<h2>🌀 Loading...</h2>}> */}
                        <tbody>
                            {subsData?.map((product: ProductsEntityOutput) => (
                                <tr key={product.productId}>
                                    <td className="py-2 px-4 border-b">{product.productId}</td>
                                    <td className="py-2 px-4 border-b">{product.productName}</td>
                                    <td className="py-2 px-4 border-b">{product.createdAt}</td>
                                </tr>
                            ))}
                        </tbody>
                        {/* </Suspense> */}

                    </table>
                </div>

            </div>
        </div >
    )
}