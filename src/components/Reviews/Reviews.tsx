import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Reviews({ product }) {
    const { reviews } = product
    const stars = reviews.rating
    console.log(stars);

    return (
        <>
            <div className="rounded-[30px] border border-primary-100 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold text-main">Reviews</h3>
                    <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-slate-500">
                        {reviews.length} {reviews.length === 1 ? "review" : "reviews"}
                    </span>
                </div>

                <div className="mt-6 space-y-4">
                    {reviews.map((review) => (
                        <div
                            key={review._id}
                            className="group rounded-2xl border border-transparent bg-primary-50 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-100 hover:bg-white hover:shadow-md sm:p-6"
                        >
                            {/* Rating */}
                            <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <FontAwesomeIcon
                                        key={index}
                                        icon={faStar}
                                        className={` w-3.5 transition-colors ${index < review.rating ? "text-amber-400" : "text-gray-200"
                                            }`}
                                    />
                                ))}
                                <span className="ml-2 text-xs font-medium text-slate-400">
                                    {review.rating.toFixed(1)}
                                </span>
                            </div>

                            {/* Review text */}
                            <p className="mt-2 text-sm leading-7 text-slate-600">
                                "{review.review}"
                            </p>

                            {/* Reviewer */}
                            <div className="mt-3 flex items-center gap-3 border-t border-slate-100 pt-4">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold uppercase text-primary-600">
                                    {review.user.name?.charAt(0)}
                                </div>
                                <p className="text-sm font-semibold text-main">
                                    {review.user.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}
