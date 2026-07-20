import {
  faBox,
  faChevronRight,
  faCircleCheck,
  faClock,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type OrderStatus = "Delivered" | "Shipping" | "Processing";

type Order = {
  id: string;
  date: string;
  total: number;
  items: number;
  status: OrderStatus;
};

const orders: Order[] = [
  {
    id: "#ORD-10245",
    date: "15 Jul 2026",
    total: 249.99,
    items: 3,
    status: "Delivered",
  },
  {
    id: "#ORD-10230",
    date: "10 Jul 2026",
    total: 89.5,
    items: 1,
    status: "Shipping",
  },
  {
    id: "#ORD-10195",
    date: "04 Jul 2026",
    total: 149.99,
    items: 2,
    status: "Processing",
  },
];

const statusStyles = {
  Delivered: {
    icon: faCircleCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  Shipping: {
    icon: faTruck,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  Processing: {
    icon: faClock,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
};

export default function OrdersTab() {
  return (
    <div className="space-y-5">
      {orders.map((order) => {
        const status = statusStyles[order.status];

        return (
          <div
            key={order.id}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              {/* Left */}
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
                  <FontAwesomeIcon icon={faBox} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {order.id}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Ordered on {order.date}
                  </p>

                  <p className="mt-2 text-sm text-slate-600">
                    {order.items} item{order.items > 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              {/* Center */}
              <div
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 ${status.bg}`}
              >
                <FontAwesomeIcon
                  icon={status.icon}
                  className={status.color}
                />

                <span className={`font-medium ${status.color}`}>
                  {order.status}
                </span>
              </div>

              {/* Right */}
              <div className="flex flex-col items-end gap-3">
                <h4 className="text-2xl font-bold text-primary-600">
                  ${order.total.toFixed(2)}
                </h4>

                <button className="flex items-center gap-2 rounded-xl bg-primary-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary-700">
                  View Details
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}