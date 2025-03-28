"use client";

import { docHeads } from "@/data/docHeads";
import { slugify } from "@/lib/functions/slugify"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState } from "react";

export const DocSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const titles = docHeads;
  const pathname = usePathname();

  return (
    <aside
      className={`h-full sticky overflow-scroll top-0 bg-[#242B2900] border-r border-primary-text/40 text-primary-text px-7 py-10 transition-all duration-300 ${
        collapsed ? "w-[10px] md:w-[60px] px-2" : "w-[150px] md:w-[250px]"
      }`}
    >
      {/* Collapse Button */}
      <button
        className={`absolute top-3 right-3 text-primary-text ${collapsed ? "p-2" : "p-2"} rounded-full`}
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4 md:w-8 md:h-8" /> : <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4 md:w-8 md:h-8" />}
      </button>

      {/* Sidebar Content */}
      {!collapsed &&
        titles.map((title, ind) => (
          <div key={ind} className="flex flex-col gap-2 mt-6">
            <h2 className="uppercase text-md md:text-xl text-secondary-text tracking-wide font-semibold">
              {title.category}
            </h2>
            <div className="flex flex-col gap-2">
              {title.headings.map((head, i) => (
                <Link
                  key={i}
                  href={`/docs/${slugify(head)}`}
                  className={`text-sm md:text-lg/5 ${
                    pathname.slice(6) === slugify(head)
                      ? "text-primary"
                      : "text-secondary-text/80"
                  } font-medium transition-all cursor-pointer duration-300 hover:text-primary`}
                >
                  {head}
                </Link>
              ))}
            </div>
          </div>
        ))}
    </aside>
  )
}
