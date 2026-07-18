import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faHeart,
  faRotateLeft,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export type ProfileTab =
  | "orders"
  | "wishlist"
  | "returns"
  | "addresses";

type ProfileTabsProps = {
  activeTab: ProfileTab;
  onChange: (tab: ProfileTab) => void;
};

const tabs = [
  {
    id: "orders" as ProfileTab,
    label: "Orders",
    icon: faBox,
  },
  {
    id: "wishlist" as ProfileTab,
    label: "Wishlist",
    icon: faHeart,
  },
  {
    id: "returns" as ProfileTab,
    label: "Returns",
    icon: faRotateLeft,
  },
  {
    id: "addresses" as ProfileTab,
    label: "Addresses",
    icon: faLocationDot,
  },
];

export default function ProfileTabs({
  activeTab,
  onChange,
}: ProfileTabsProps) {
  return (
    <div className="overflow-x-auto">
      <div className="flex w-max gap-3 rounded-2xl bg-white p-2 shadow-sm border border-slate-200">
        {tabs.map((tab) => {
          const active = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                active
                  ? "bg-primary-600 text-white shadow-md"
                  : "text-slate-600 hover:bg-primary-50 hover:text-primary-600"
              }`}
            >
              <FontAwesomeIcon icon={tab.icon} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}