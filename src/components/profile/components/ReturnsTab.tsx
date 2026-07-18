import {
  faRotateLeft,
  faCircleCheck,
  faClock,
  faXmarkCircle,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ReturnStatus = "Approved" | "Pending" | "Rejected";

type ReturnOrder = {
  id: string;
  product: string;
  date: string;
  reason: string;
  refund: number;
  status: ReturnStatus;
};

const returns: ReturnOrder[] = [
  {
    id: "#RET-1001",
    product: "Wireless Headphones",
    date: "12 Jul 2026",
    reason: "Damaged Item",
    refund: 99,
    status: "Approved",
  },
  {
    id: "#RET-1002",
    product: "Running Shoes",
    date: "08 Jul 2026",
    reason: "Wrong Size",
    refund: 79,
    status: "Pending",
  },
  {
    id: "#RET-1003",
    product: "Gaming Mouse",
    date: "02 Jul 2026",
    reason: "Changed Mind",
    refund: 45,
    status: "Rejected",
  },
];

const statusStyles = {
  Approved: {
    icon: faCircleCheck,
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
  Pending: {
    icon: faClock,
    bg: "bg-amber-50",
    text: "text-amber-600",
  },
  Rejected: {
    icon: faXmarkCircle,
    bg: "bg-red-50",
    text: "text-red-600",
  },
};

export default function ReturnsTab() {
  return (
    <div className="space-y-5">
      {returns.map((item) => {
        const status = statusStyles[item.status];

        return (
          <div
            key={item.id}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              {/* Left */}
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
                  <FontAwesomeIcon icon={faRotateLeft} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.product}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Return ID: {item.id}
                  </p>

                  <p className="text-sm text-slate-500">
                    Requested on {item.date}
                  </p>

                  <p className="mt-2 text-sm">
                    <span className="font-semibold text-slate-700">
                      Reason:
                    </span>{" "}
                    {item.reason}
                  </p>
                </div>
              </div>

              {/* Status */}
              <div
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 ${status.bg}`}
              >
                <FontAwesomeIcon
                  icon={status.icon}
                  className={status.text}
                />

                <span className={`font-medium ${status.text}`}>
                  {item.status}
                </span>
              </div>

              {/* Right */}
              <div className="flex flex-col items-end gap-3">
                <div className="text-right">
                  <p className="text-sm text-slate-500">
                    Refund Amount
                  </p>

                  <h4 className="text-2xl font-bold text-primary-600">
                    ${item.refund}
                  </h4>
                </div>

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