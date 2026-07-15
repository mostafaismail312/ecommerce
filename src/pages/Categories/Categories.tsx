import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Skeleton from "../../components/Loading/Skeleton";
import { useCategories } from "../../hooks/useCategories";


interface CategoryItem {
  _id?: string;
  name: string;
  image?: string;
}

export default function Categories() {
  const { data, isLoading, error } = useCategories()
  const categories: CategoryItem[] = (data?.data ?? []) as CategoryItem[];

  if (isLoading) {
    return (
      <>
        <Breadcrumb title="All Categories" description="Browse our wide range of product categories" items={[{ label: "Home", path: "/" }, { label: "Categories" }]} />
        <div className="container py-20">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <Skeleton className="mx-auto mb-3 h-32 w-32" rounded="rounded-2xl" />
                <Skeleton className="mx-auto h-4 w-24" />
              </div>
            ))}
          </div>
        </div>
      </>
    );
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
          {categories.map((cate: CategoryItem) => {
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
