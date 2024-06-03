import Link from "next/link";
import { lustiana } from "./fonts";

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

export default function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  return (
    <div className="flex w-full items-center justify-between my-6 sticky z-10">
      <nav
        aria-label="breadcrumb"
        className={`mb-6 block ${lustiana.className}`}
      >
        <ol className="flex text-xl md:text-2xl">
          {breadcrumbs.map((breadcrumb, index) => (
            <li
              key={`${breadcrumb.href}-${index}`}
              className={`flex items-center ${
                breadcrumb.active ? "text-gray-900" : "text-gray-500"
              }`}
            >
              {breadcrumb.active ? (
                <span aria-current="page">{breadcrumb.label}</span>
              ) : (
                <Link
                  href={breadcrumb.href}
                  scroll={false}
                  className="hover:text-gray-700"
                >
                  {breadcrumb.label}
                </Link>
              )}
              {index < breadcrumbs.length - 1 && (
                <span className="mx-3 inline-block">/</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
