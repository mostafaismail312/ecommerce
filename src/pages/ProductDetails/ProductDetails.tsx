import { faHeart, faMinus, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductGallery from '../../components/ProductGallery/ProductGallery';

const features = ['Premium leather finish', 'Water-resistant shell', 'All-day comfort cushioning', 'Fast charging support'];
const specs = [
  { label: 'Material', value: 'Italian Leather' },
  { label: 'Color', value: 'Midnight Black' },
  { label: 'Weight', value: '320g' },
  { label: 'Warranty', value: '2 Years' },
];

const relatedProducts = [
  {
    title: 'Aurora Tote Bag',
    category: 'Accessories',
    rating: 4.8,
    price: 79,
    oldPrice: 99,
    discount: '15% OFF',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Luna Smart Watch',
    category: 'Electronics',
    rating: 4.9,
    price: 189,
    oldPrice: 229,
    discount: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Nova Backpack',
    category: 'Travel',
    rating: 4.7,
    price: 64,
    oldPrice: 84,
    discount: 'Save 25%',
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80',
  },
];

export default function ProductDetails() {
  return (
    <>
      <Breadcrumb
        title="Aurora Signature Bag"
        description="Product Details"
        items={[
          { label: 'Home', path: '/' },
          { label: 'Products', path: '/products' },
          { label: 'Aurora Signature Bag' },
        ]}
      />

      <section className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ProductGallery />

          <div className="space-y-6">
            <div className="rounded-[30px] border border-primary-100 bg-white p-6 shadow-[0_20px_60px_-24px_rgba(3,8,31,0.2)] sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-700">Premium Edition</span>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-600">In stock</span>
              </div>

              <h2 className="mt-4 text-3xl font-bold text-main sm:text-4xl">Aurora Signature Bag</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">A refined everyday accessory crafted for modern movement, designed with soft structure and polished detailing.</p>

              <div className="mt-5 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 rounded-full bg-amber-50 px-3 py-2 text-amber-600">
                  <FontAwesomeIcon icon={faStar} />
                  <span className="font-semibold">4.8</span>
                  <span className="text-sm text-slate-500">(1.2k reviews)</span>
                </div>
                <span className="text-sm font-medium text-primary-700">Free shipping over $120</span>
              </div>

              <div className="mt-6 flex flex-wrap items-end gap-4">
                <div>
                  <p className="text-3xl font-bold text-primary-700">$128</p>
                  <p className="text-lg text-slate-400 line-through">$168</p>
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
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[30px] border border-primary-100 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-2xl font-semibold text-main">Specifications</h3>
            <div className="mt-6 space-y-4">
              {specs.map((spec) => (
                <div key={spec.label} className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-sm font-medium text-slate-500">{spec.label}</span>
                  <span className="text-sm font-semibold text-main">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-primary-100 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-2xl font-semibold text-main">Reviews</h3>
            <div className="mt-6 rounded-2xl bg-primary-50 p-5">
              <div className="flex items-center gap-2 text-amber-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FontAwesomeIcon key={star} icon={faStar} />
                ))}
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">“Beautiful craftsmanship and the fit feels premium. The color is rich and the detail is understated.”</p>
              <p className="mt-4 text-sm font-semibold text-main">Ava • Verified Buyer</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="mb-6 flex items-end justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-600">You may also like</p>
              <h3 className="text-2xl font-semibold text-main">Related Products</h3>
            </div>
            <button type="button" className="text-sm font-semibold text-primary-700 transition hover:text-primary-600">View all</button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

