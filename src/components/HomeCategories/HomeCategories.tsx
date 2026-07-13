import { useCategories } from "../../hooks/useCategories";
import CategoryCard from "../CategoryCard/CategoryCard";

export default function HomeCategories() {
    const { data, isLoading, error } = useCategories()
    const categories = data?.data ?? [];
    // console.log(categories[0].image);
    if (isLoading) {
        return <h1>Loading...</h1>;
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
                    {categories.map((cate) => {
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
