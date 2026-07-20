import { faHeart, faMinus, faPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';



export default function ProductInfo({ product }) {
    console.log(product);
    const { imageCover, reviews, description, category, images, price, priceAfterDiscount, ratingsAverage, title } = product

    return (
        <>
            <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
                {/* product images */}
                <div className="space-y-4">
                    <div className="overflow-hidden  block rounded-[32px] border border-primary-100 bg-gradient-to-br from-primary-50 to-white p-3 shadow-[0_20px_60px_-24px_rgba(3,8,31,0.25)]">
                        <img
                            src={imageCover}
                            alt="Featured product"
                            className="h-[420px]  w-full rounded-[24px] object-cover"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        {images.map((image, index) => (
                            <button
                                key={image}
                                type="button"
                                className={`overflow-hidden rounded-2xl border transition ${index === 0 ? 'border-primary-500 ring-2 ring-primary-100' : 'border-transparent'}`}
                            >
                                <img src={image} alt={`View ${index + 1}`} className="h-20 w-20 object-cover" />
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center justify-between rounded-2xl border border-primary-100 bg-white p-3 shadow-sm">
                        <button type="button" className="rounded-full bg-primary-50 p-3 text-primary-700 transition hover:bg-primary-100">
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <span className="text-sm font-semibold text-slate-500">Swipe through premium visuals</span>
                        <button type="button" className="rounded-full bg-primary-50 p-3 text-primary-700 transition hover:bg-primary-100">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>

                {/* product detalils */}
                <div className="space-y-6">
                    <div className="rounded-[30px]  border-primary-100 bg-white p-6 shadow-[0_20px_60px_-24px_rgba(3,8,31,0.2)] sm:p-8">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <span className="rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-700"> {category.name}</span>
                            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-600">In stock</span>
                        </div>

                        <h2 className="mt-4 text-3xl font-bold text-main sm:text-4xl">{title}</h2>
                        <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>


                        <div className="mt-5 flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-2 rounded-full bg-amber-50 px-3 py-2 text-amber-600">
                                <FontAwesomeIcon icon={faStar} />
                                <span className="font-semibold">{ratingsAverage}</span>
                                <span className="text-sm text-slate-500">( {reviews.length} reviews)</span>
                            </div>
                            <span className="text-sm font-medium text-primary-700">Free shipping over $120</span>
                        </div>

                        <div className="mt-6 flex flex-wrap items-end gap-4">
                            <div>
                                <p className="text-3xl font-bold text-primary-700">{priceAfterDiscount}</p>
                                <p className="text-lg text-slate-400 line-through">{price}</p>
                            </div>
                            <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700">Save 24%</span>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <div className="flex items-center rounded-full border border-slate-200 bg-slate-50 p-1">
                                <button type="button" className="rounded-full p-2 text-slate-600 transition hover:bg-white hover:text-primary-700">
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <span className="min-w-10 text-center font-semibold text-main">1</span>
                                <button type="button" className="rounded-full p-2 text-slate-600 transition hover:bg-white hover:text-primary-700">
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                            <button type="button" className="rounded-full bg-main px-5 py-3 font-semibold text-white transition hover:bg-primary-600">
                                Add to Cart
                            </button>
                            <button type="button" className="rounded-full border border-primary-200 bg-primary-50 px-5 py-3 font-semibold text-primary-700 transition hover:bg-primary-100">
                                Buy Now
                            </button>
                            <button type="button" className="rounded-full border border-slate-200 p-3 text-slate-600 transition hover:border-primary-200 hover:text-primary-700">
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                        </div>
                    </div>

                    <div className="rounded-[30px] border border-primary-100 bg-white p-6 shadow-sm sm:p-8">
                        <h3 className="text-xl font-semibold text-main">Description</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">Soft-touch lining, sculpted contours, and a lightweight frame bring everyday useful luxury in a compact silhouette.</p>

                        <h3 className="mt-6 text-xl font-semibold text-main">Key Features</h3>
                        <ul className="mt-3 space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary-500" />
                                <span>feature</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
