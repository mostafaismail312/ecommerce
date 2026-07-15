import { useCategories } from "../../hooks/useCategories";
import CategoryCard from "../CategoryCard/CategoryCard";
import Skeleton from "../Loading/Skeleton";

interface CategoryItem {
    _id?: string;
    name: string;
    image?: string;
}

interface CategoryItem {
    _id?: string;
    name: string;
    image?: string;
}

export default function HomeCategories() {
    const { data, isLoading, error } = useCategories()
    const categories: CategoryItem[] = (data?.data ?? []) as CategoryItem[];

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
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                            <Skeleton className="mx-auto mb-3 h-24 w-20" rounded="rounded-2xl" />
                            <Skeleton className="mx-auto h-4 w-20" />
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
        <>
            <section id="categories" className="py-10">
                {/* main title */}
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-3 my-8">
                        <div className="h-8 w-1.5 bg-linear-to-b from-primary-500 to-main/70 rounded-full" />
                        <h2 className="text-3xl font-bold text-main ">
                            Shop By <span className="text-primary-600">Category</span>
                        </h2>
                    </div>{" "}
                    <a
                        className="text-primary-600 hover:text-primary-700 font-medium flex items-center cursor-pointer"
                        href="categories"
                    >
                        View All Categories
                        <svg
                            data-prefix="fas"
                            data-icon="arrow-right"
                            className="svg-inline--fa fa-arrow-right ml-2"
                            role="img"
                            viewBox="0 0 512 512"
                            aria-hidden="true"
                        >
                            <path
                                fill="currentColor"
                                d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                            />
                        </svg>
                    </a>
                </div>

                {/* categories */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map((cate: CategoryItem) => {
                        return (
                            <CategoryCard
                                key={cate._id}
                                category={cate}
                                variant="home"
                            />
                        )
                    })}
                </div>

            </section>

        </>
    )
}
