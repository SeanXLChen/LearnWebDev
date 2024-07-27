
import { useRouter } from 'next/navigation';

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/');
        // router.replace('/');
        // router.back();
    }
    return (
        <div>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Go to Home</button>
        </div>
    )
}