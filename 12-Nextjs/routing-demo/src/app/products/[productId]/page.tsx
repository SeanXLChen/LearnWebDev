import { Metadata } from "next";

type Props = {
    params: {
        productId: string;
    };
};

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Product Details: ${params.productId}`,
        description: `Details for product ${params.productId}`,
    };
}


export default function ProductDetails({ params, }: Props) {
    return (
        <div>
            <h1>Product Details</h1>
            <p>Product ID: {params.productId}</p>
        </div>
    );
}