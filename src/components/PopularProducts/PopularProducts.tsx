import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";
interface ProductItem {
    _id: string;
    id: string;
    title: string;
    slug: string;
    description: string;
    quantity: number;
    price: number;
    sold: number;
    ratingsQuantity: number;
    ratingsAverage: number;
    imageCover: string;
    images: string[];
    createdAt: string;
    updatedAt: string;
}
export default function PopularProducts() {
    const { data, isLoading, error } = useProducts()
    const products: ProductItem[] = data?.data ?? [];
    console.log(data);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Something went wrong</h1>;
    }
    return (
        <section id="categories" className="py-10">
            {/* main title */}
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3 my-8">
                    <div className="h-8 w-1.5 bg-linear-to-b from-primary-500 to-main/70 rounded-full" />
                    <h2 className="text-3xl font-bold text-main ">
                        Popular <span className="text-primary-600">Products</span>
                    </h2>
                </div>{" "}
                <a
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center cursor-pointer"
                    href="categories"
                >
                    View All Products/

                </a>
            </div>

            {/* categories */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {products.map((product) => {
                    return <ProductCard key={product._id} product={product} />;
                })}
            </div>

        </section>
    )
}
