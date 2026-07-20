import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";
import Skeleton from "../Loading/Skeleton";
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

    if (isLoading) {
        return (
            <section id="categories" className="py-10">
                <div className="mb-8 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-1.5 rounded-full bg-linear-to-b from-primary-500 to-main/70" />
                        <Skeleton className="h-9 w-56" rounded="rounded-full" />
                    </div>
                    <Skeleton className="hidden h-6 w-36 md:block" rounded="rounded-full" />
                </div>
                <div className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-5">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm">
                            <Skeleton className="h-56 w-full" rounded="rounded-[24px]" />
                            <div className="mt-4 space-y-3">
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-6 w-3/4" />
                                <Skeleton className="h-4 w-full" />
                                <div className="flex items-center justify-between gap-3">
                                    <Skeleton className="h-8 w-20" />
                                    <Skeleton className="h-10 w-28" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
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
                    href="products"
                >
                    View All Products/

                </a>
            </div>

            {/*  Products */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
                {products.map((product) => {
                    return <ProductCard key={product._id} product={product} />;
                })}
            </div>

        </section>
    )
}
