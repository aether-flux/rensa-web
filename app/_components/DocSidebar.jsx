import { docHeads } from "@/data/docHeads";
import { slugify } from "@/lib/functions/slugify"
import Link from "next/link"
import { usePathname } from "next/navigation";

export const DocSidebar = () => {
  const titles = docHeads;
  const pathname = usePathname();

  return (
    <aside className="w-[250px] h-screen sticky overflow-scroll top-[00%] bg-[#242B2900] border-r border-primary-text/40 text-primary-text px-7 py-10">
      {titles.map((title, ind) => (
        <div key={ind} className="flex flex-col gap-2 mt-6">
          <h2 key={ind} className="uppercase text-xl text-secondary-text tracking-wide font-semibold">{title.category}</h2>
          <div className="flex flex-col gap-2">
            {title.headings.map((head, i) => (
              <Link key={i} href={`/docs/${slugify(head)}`} className={`text-lg/5 ${pathname.slice(6) === slugify(head) ? "text-primary" : "text-secondary-text/80"} font-medium transition-all cursor-pointer duration-300 hover:text-primary`}>{head}</Link>
            ))}
          </div>
        </div>
      ))}
    </aside>
  )
}
