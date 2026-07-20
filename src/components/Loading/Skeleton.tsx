interface SkeletonProps {
    className?: string;
    rounded?: string;
}

export default function Skeleton({ className = '', rounded = 'rounded-xl' }: SkeletonProps) {
    return <div className={`animate-pulse bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 bg-[length:200%_100%] ${rounded} ${className}`} />;
}
