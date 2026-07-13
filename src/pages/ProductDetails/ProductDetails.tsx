import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

export default function ProductDetails() {
  return (
    <>
      <Breadcrumb
        title='my product'
        description="Product Details"
        items={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          // { label: product.title },
        ]}
      />
    </>
  )
}
