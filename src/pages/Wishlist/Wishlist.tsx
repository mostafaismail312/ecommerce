import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useWishlist } from "../../hooks/useWishlit";

export default function Wishlist() {


    const {
    data,
    isLoading,
    isError,
    error,
  
  } = useWishlist();

  if (isLoading) {
    return <Loading/>
  }

  if (isError) {
    return   <Error message={error.message} />;
  }
  return (
    <>
      <Breadcrumb
        title="Wishlist"
        description="Save your favorite products for later"
        items={[
          { label: "Home", path: "/" },
          { label: "Wishlist" },
        ]}/>



                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
      {data?.data.map((product) => (
       <ProductCard 
       key={product._id}
      product={product}
       />
      ))}
    </div>
      
    </>
  )
}
