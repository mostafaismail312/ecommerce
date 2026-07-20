import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";
import { useRef } from "react";
export default function RelatedProducts({ product }) {
    // const { imageCover, reviews, description, category, images, price, priceAfterDiscount, ratingsAverage, title } = product
    const { data: relatedData } = useProducts({
        "category[in]": product.category._id,
        limit: 8,
    });
    console.log(relatedData);

    const relatedProducts =
        relatedData?.data.filter(
            (item) => item._id !== product._id
        ) ?? [];




    // ... inside your component

    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const { clientWidth } = scrollRef.current;
        scrollRef.current.scrollBy({
            left: direction === "left" ? -clientWidth * 0.8 : clientWidth * 0.8,
            behavior: "smooth",
        });
    };
    return (
        <>

            <div className="mt-12">
                <div className="mb-6 flex items-end justify-between gap-3">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-600">
                            You may also like
                        </p>
                        <h3 className="mt-1 text-2xl font-semibold text-main">
                            Related Products
                        </h3>
                    </div>

                    <div className="flex items-center gap-3">
                        {relatedProducts.length > 0 && (
                            <button
                                type="button"
                                className="text-sm font-semibold text-primary-700 transition hover:text-primary-600"
                            >
                                View all
                            </button>
                        )}

                        {relatedProducts.length > 3 && (
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => scroll("left")}
                                    aria-label="Previous products"
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-100 bg-white text-slate-500 shadow-sm transition hover:border-primary-300 hover:text-primary-700 hover:shadow active:scale-95"
                                >
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => scroll("right")}
                                    aria-label="Next products"
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-100 bg-white text-slate-500 shadow-sm transition hover:border-primary-300 hover:text-primary-700 hover:shadow active:scale-95"
                                >
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {relatedProducts.length > 0 ? (
                    <div
                        ref={scrollRef}
                        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {relatedProducts.map((product) => (
                            <div
                                key={product._id}
                                className="w-[75%] flex-shrink-0 snap-start sm:w-[45%] lg:w-[31%] xl:w-[23%]"
                            >
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="rounded-[30px] border border-dashed border-primary-100 bg-primary-50/40 p-10 text-center">
                        <p className="text-sm text-slate-500">No related products available right now.</p>
                    </div>
                )}
            </div>
        </>
    )
}
