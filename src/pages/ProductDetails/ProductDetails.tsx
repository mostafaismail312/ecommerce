import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { useParams } from 'react-router-dom';
import { useProductDetails } from '../../hooks/useProductDetails';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import Reviews from '../../components/Reviews/Reviews';
import Specifications from '../../components/Specifications/Specifications';
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts';



export default function ProductDetails() {
  const { id } = useParams()
  const { isLoading, data, error } = useProductDetails(id)
  console.log(data?.data);
  if (isLoading) {
    return <div>is loading ......</div>
  }
  if (error) {
    return error

  }

  if (!data.data) {
    return <p>product not found </p>
  }
  const { imageCover, reviews, description, category, price, priceAfterDiscount, ratingsAverage, title } = data.data
  const currentProduct = data.data

  return (
    <>
      <Breadcrumb
        title={title}
        description="Product Details"
        items={[
          { label: 'Home', path: '/' },
          { label: 'Products', path: '/products' },
          { label: `${title}` },
        ]}
      />

      <section className="container mx-auto px-4 py-12 lg:py-16">

        <ProductInfo product={currentProduct} />


        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          {/* {Specifications} */}

          <Specifications product={currentProduct} />

          {/* {Reviews } */}
          <Reviews product={currentProduct} />

        </div>

        <RelatedProducts product={currentProduct} />
      </section>
    </>
  );
}

