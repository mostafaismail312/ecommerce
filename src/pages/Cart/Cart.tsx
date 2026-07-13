import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

export default function Cart() {
  return (
    <>
      <Breadcrumb
        title="Shopping Cart"
        description="Review your selected items before checkout"
        items={[
          { label: "Home", path: "/" },
          { label: "Cart" },
        ]}
      />
    </>
  )
}
