

interface Props {
    category: Category;
    variant: "home" | "page";
}
export default function CategoryCard({ category, variant }: Props) {

    return (
        <>


            <a
                className={`bg-white rounded-lg   ${variant === "page" ? 'p-12' : 'p-4'} text-center shadow-sm hover:shadow-md transition group cursor-pointer`}

            >
                <div className={` ${variant === "page" ? 'h-50' : 'rounded-full h-20 w-20 '}  overflow-hidden bg-primary-100  flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-200 transition`}>
                    <img
                        alt={category.name}
                        loading="lazy"
                        width={300}
                        height={300}
                        decoding="async"
                        data-nimg={1}
                        className={`  ${variant === "page" ? '' : ''}`}
                        src={category.image}
                        style={{ color: "transparent" }}
                    />
                </div>
                <h3 className="font-medium">${category.name}</h3>
            </a >
            {/* {variant === "page" && (
                <span className="opacity-0 group-hover:opacity-100">
                    View Sup Categoties →
                </span>
            )
            } */}

        </>
    )
}
