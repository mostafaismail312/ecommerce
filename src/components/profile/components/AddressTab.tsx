import {
  faHouse,
  faLocationDot,
  faPen,
  faTrash,
  faPlus,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Address = {
  id: number;
  title: string;
  name: string;
  phone: string;
  city: string;
  street: string;
  isDefault: boolean;
};

const addresses: Address[] = [
  {
    id: 1,
    title: "Home",
    name: "John Doe",
    phone: "+20 101 234 5678",
    city: "Cairo",
    street: "15 Salah Salem St.",
    isDefault: true,
  },
  {
    id: 2,
    title: "Office",
    name: "John Doe",
    phone: "+20 101 234 5678",
    city: "Giza",
    street: "Smart Village",
    isDefault: false,
  },
];

export default function AddressTab() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Saved Addresses
          </h2>
          <p className="mt-1 text-slate-500">
            Manage your shipping addresses.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-primary-600 px-5 py-3 font-semibold text-white transition hover:bg-primary-700">
          <FontAwesomeIcon icon={faPlus} />
          Add Address
        </button>
      </div>

      {/* Address Cards */}
      <div className="grid gap-6 lg:grid-cols-2">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
                  <FontAwesomeIcon icon={faHouse} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {address.title}
                  </h3>

                  {address.isDefault && (
                    <span className="mt-1 inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-600">
                      Default Address
                    </span>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-primary-200 hover:text-primary-600">
                  <FontAwesomeIcon icon={faPen} />
                </button>

                <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-200 text-red-500 transition hover:bg-red-50">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm text-slate-500">Recipient</p>
                <p className="font-semibold text-slate-900">
                  {address.name}
                </p>
              </div>

              <div className="flex items-center gap-3 text-slate-600">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-primary-600"
                />
                <span>{address.phone}</span>
              </div>

              <div className="flex items-start gap-3 text-slate-600">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="mt-1 text-primary-600"
                />
                <div>
                  <p>{address.street}</p>
                  <p>{address.city}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}