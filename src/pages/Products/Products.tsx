import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ProductCard from "../../components/ProductCard/ProductCard";
import Skeleton from "../../components/Loading/Skeleton";
import { useProducts } from "../../hooks/useProducts";

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

export default function Products() {
    const { data, isLoading, error } = useProducts()
    const products: ProductItem[] = data?.data ?? [];

    if (isLoading) {
        return (
            <>
                <Breadcrumb title="All Products" description="Track and manage your recent orders" items={[{ label: "Home", path: "/" }, { label: "Orders" }]} />
                <div className="container py-8">
                    <div className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-4">
                        {Array.from({ length: 8 }).map((_, index) => (
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
                </div>
            </>
        );
    }

    if (error) {
        return <h1>Something went wrong</h1>;
    }
    return (
        <>
            <Breadcrumb
                title="All Products"
                description="Track and manage your recent orders"
                items={[
                    { label: "Home", path: "/" },
                    { label: "Orders" },
                ]}
            />
            <div className="container  py-8">
                {/*  Products */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                    {products.map((product) => {
                        return <ProductCard key={product._id} product={product} />;
                    })}
                </div>
            </div>
        </>
    )
}
