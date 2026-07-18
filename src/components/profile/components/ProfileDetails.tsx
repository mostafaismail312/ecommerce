import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ProfileDetailsProps = {
  user: {
    name: string;
    email: string;
    phone: string;
    address: string;
    joinedAt: string;
  };
};
const Item=({icon ,label,value
}:{icon:any, label:string ,value:string})=>
  (
   <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
       <FontAwesomeIcon icon={icon} />
     </div>

     <p className="text-sm text-slate-500">{label}</p>

    <p className="mt-1 font-semibold text-slate-900">
      {value}
    </p>

    </div>
  )


export default function ProfileDetails({
  user,
}: ProfileDetailsProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Account Information
          </h2>

          <p className="mt-1 text-slate-500">
            Manage your personal information.
          </p>
        </div>

        <button className="rounded-xl border border-primary-200 px-5 py-2 font-medium text-primary-600 transition hover:bg-primary-50">
          Update
        </button>
      </div>

       <div className="grid gap-5 md:grid-cols-2">
        <Item
          icon={faEnvelope}
          label="Email"
          value={user.email}
        />

        <Item
          icon={faPhone}
          label="Phone"
          value={user.phone}
        />

        <Item
          icon={faLocationDot}
          label="Address"
          value={user.address}
        />

        <Item
          icon={faCalendarDays}
          label="Member Since"
          value={user.joinedAt}
        />
       </div> 
    </div>
  );
}