import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

export default function Brands() {
  return (
    <>
      <Breadcrumb
        title="All Brands"
        description="Explore products from your favorite brands"
        items={[
          { label: "Home", path: "/" },
          { label: "Brands" },
        ]}
      />
      <div>Brands</div>

    </>
  )
}
