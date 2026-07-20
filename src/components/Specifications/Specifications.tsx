import React from 'react'

export default function Specifications({ product }) {
    const { brand, category, price, priceAfterDiscount,
        quantity,
        sold,
        ratingsAverage,
        ratingsQuantity,
        subcategory,
        id,
        createdAt,
    } = product;
    const specifications = [
        {
            label: "Brand",
            value: brand?.name,
        },
        {
            label: "Category",
            value: category?.name,
        },
        {
            label: "Price",
            value: `$${price}`,
        },
        {
            label: "Discount Price",
            value: priceAfterDiscount ? `$${priceAfterDiscount}` : "No Discount",
        },
        {
            label: "Stock",
            value: quantity,
        },
        {
            label: "Sold",
            value: sold,
        },
        {
            label: "Rating",
            value: `${ratingsAverage} (${ratingsQuantity} Reviews)`,
        },
        {
            label: "Subcategory",
            value: subcategory?.map((item) => item.name).join(", "),
        },
        {
            label: "Product ID",
            value: id,
        },
        {
            label: "Created At",
            value: new Date(createdAt).toLocaleDateString(),
        },
    ];
    return (
        <>
            <div className="rounded-[30px] border border-primary-100 h-fit bg-white p-6 shadow-sm sm:p-8">
                <h3 className="text-2xl font-semibold text-main">
                    Specifications
                </h3>

                <div className="mt-6 divide-y divide-slate-100">
                    {specifications.map((spec) => (
                        <div
                            key={spec.label}
                            className="group flex items-center justify-between gap-4 rounded-lg py-3.5 transition-colors first:pt-0 last:pb-0 hover:bg-primary-50/40 sm:px-2"
                        >
                            <span className="text-sm font-medium text-slate-500">
                                {spec.label}
                            </span>

                            <span className="text-right text-sm font-semibold text-main">
                                {spec.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}
