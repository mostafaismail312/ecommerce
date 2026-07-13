import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
interface BreadcrumbItem {
    label: string;
    path?: string;
}

interface BreadcrumbProps {
    title: string;
    description?: string;
    items: BreadcrumbItem[];
}
export default function Breadcrumb({
    title,
    description,
    items,
}: BreadcrumbProps) {

    return (
        <>
            <div className="bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 text-white">
                <div className="container mx-auto px-4 py-12 sm:py-16">
                    <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">

                        {/* Breadcrumb */}
                        {items.map((item, index) => (
                            <div key={item.label} className="flex items-center gap-2">
                                {item.path ? (
                                    <Link
                                        to={item.path}
                                        className="hover:text-white transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className="text-white font-medium">{item.label}</span>
                                )}

                                {index < items.length - 1 && (
                                    <span className="text-white/40">/</span>
                                )}
                            </div>
                        ))}
                    </nav>
                    {/* Header */}
                    <div className="flex items-center gap-5">
                        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
                            <FontAwesomeIcon className=" text-3xl " icon={faLayerGroup} />                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                                {title}
                            </h1>
                            {description && (
                                <p className="text-white/80 mt-1">
                                    {description}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
