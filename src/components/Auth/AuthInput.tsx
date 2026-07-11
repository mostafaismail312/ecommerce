import type { ReactNode } from 'react';
import { useFormContext, type FieldError } from 'react-hook-form';

type AuthInputProps = {
    name: string,
    label: string;
    type?: string;
    placeholder: string;
    icon: ReactNode;
    value?: string;
    rules: {};
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function AuthInput({
    name,
    rules,
    label,
    type = 'text',
    placeholder,
    icon,
    value,
    onChange,
}: AuthInputProps) {
    const { register, formState: { errors } } = useFormContext()
    return (
        <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
            <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm transition focus-within:border-primary-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-primary-100/70">
                <span className="text-primary-500">{icon}</span>
                <input
                    {...register(name, rules)}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="ml-3 w-full border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
            </div>
            <p className="mt-2 flex items-center gap-2 text-sm font-medium text-red-500">{errors[name]?.message?.toString()}</p>
        </label>
    );
}
