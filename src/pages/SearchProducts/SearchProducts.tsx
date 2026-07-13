import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

export default function SearchProducts() {
  return (
    <>
      <Breadcrumb
        title="Search Products"
        description="Find the products you're looking for"
        items={[
          { label: "Home", path: "/" },
          { label: "Search" },
        ]}
      />
    </>
  )
}
