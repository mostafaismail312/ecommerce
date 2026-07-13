import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

export default function Wishlist() {
  return (
    <>
      <Breadcrumb
        title="Wishlist"
        description="Save your favorite products for later"
        items={[
          { label: "Home", path: "/" },
          { label: "Wishlist" },
        ]}
      />
    </>
  )
}
