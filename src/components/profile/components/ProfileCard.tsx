import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faPen } from "@fortawesome/free-solid-svg-icons";

type ProfileCardProps = {
  user: {
    name: string;
    email: string;
    image: string;
  };
};

export default function ProfileCard({ user }: ProfileCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src={user.image || "https://i.pravatar.cc/400"}
            alt={user.name}
            className="h-40 w-40 rounded-full border-4 border-primary-100 object-cover"
          />

          <button className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg transition hover:bg-primary-700">
            <FontAwesomeIcon icon={faCamera} />
          </button>
        </div>

        <h2 className="mt-6 text-3xl font-bold text-slate-900">
          {user.name}
        </h2>

        <p className="mt-1 text-slate-500">{user.email}</p>

        <span className="mt-3 rounded-full bg-primary-100 px-4 py-1 text-sm font-semibold text-primary-600">
          Premium Customer
        </span>

        <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 py-3 font-semibold text-white transition hover:bg-primary-700">
          <FontAwesomeIcon icon={faPen} />
          Edit Profile
        </button>
      </div>
    </div>
  );
}