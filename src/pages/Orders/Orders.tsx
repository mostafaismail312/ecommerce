import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

export default function Orders() {
  return (
    <>
      <Breadcrumb
        title="My Orders"
        description="Track and manage your recent orders"
        items={[
          { label: "Home", path: "/" },
          { label: "Orders" },
        ]}
      />
    </>
  )
}
