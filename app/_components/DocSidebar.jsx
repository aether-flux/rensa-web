import { docHeads } from "@/data/docHeads";
import { slugify } from "@/lib/functions/slugify"
import Link from "next/link"

export const DocSidebar = () => {
  const titles = docHeads;

  return (
    <aside className="w-[250px] h-[100%] bg-[#242B2900] border-r border-primary-text/40 text-primary-text px-7 py-10">
      {titles.map((title, ind) => (
        <div key={ind}>
          <h2 key={ind} className="uppercase text-xl tracking-wide font-medium mb-2">{title.category}</h2>
          {title.headings.map((head, i) => (
            <Link key={i} href={`/docs/${slugify(head)}`} className="mb-1 text-lg text-secondary-text transition-all cursor-pointer duration-300 hover:text-primary">{head}</Link>
          ))}
        </div>
      ))}
    </aside>
  )
}
