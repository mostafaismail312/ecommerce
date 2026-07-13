import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

export default function Checkout() {
  return (
    <>
      <Breadcrumb
        title="Checkout"
        description="Complete your order securely"
        items={[
          { label: "Home", path: "/" },
          { label: "Cart", path: "/cart" },
          { label: "Checkout" },
        ]}
      />
    </>
  )
}
