import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { useCategories } from "../../hooks/useCategories";


export default function Categories() {
  const { data, isLoading, error } = useCategories()
  const categories = data?.data ?? [];
  // console.log(categories[0].image);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong</h1>;
  }
  return (
    <>
      <Breadcrumb title="All Categories"
        description="Browse our wide range of product categories"
        items={[
          { label: "Home", path: "/" },
          { label: "Categories" },
        ]} />

      {/* categories */}
      <div className="container py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cate) => {
            return (
              <CategoryCard
                key={cate._id}
                category={cate}
                variant="page"
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
