import { notFound } from "next/navigation";

export default function ReviewDetail({ params }: { params: { productId: string, reviewId: string } }) {
    if (parseInt(params.reviewId) > 1000){
        notFound();
    }
    return (
        <div>
            <h1>Review Details</h1>
            <p>Product ID: {params.productId}</p>
            <p>Review ID: {params.reviewId}</p>
        </div>
    );
}