import {
  faBox,
  faHeart,
  faRotateLeft,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ProfileStatsProps = {
  orders: number;
  wishlist: number;
  returns: number;
  reviews: number;
};

const stats = (
  orders: number,
  wishlist: number,
  returns: number,
  reviews: number
) => [
  {
    title: "Orders",
    value: orders,
    icon: faBox,
    bg: "bg-blue-50",
    color: "text-blue-600",
  },
  {
    title: "Wishlist",
    value: wishlist,
    icon: faHeart,
    bg: "bg-pink-50",
    color: "text-pink-600",
  },
  {
    title: "Returns",
    value: returns,
    icon: faRotateLeft,
    bg: "bg-orange-50",
    color: "text-orange-600",
  },
  {
    title: "Reviews",
    value: reviews,
    icon: faStar,
    bg: "bg-yellow-50",
    color: "text-yellow-600",
  },
];

export default function ProfileStats({
  orders,
  wishlist,
  returns,
  reviews,
}: ProfileStatsProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats(orders, wishlist, returns, reviews).map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
          >
            <FontAwesomeIcon
              icon={item.icon}
              className={`text-xl ${item.color}`}
            />
          </div>

          <h3 className="mt-5 text-3xl font-bold text-slate-900">
            {item.value}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}