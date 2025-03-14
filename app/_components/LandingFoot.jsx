import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faCube } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"

export const LandingFooter = () => {
  return (
    <footer className="font-sans flex flex-col gap-20 py-10 px-15 border-t border-t-primary">
      <div className="flex flex-col gap-8">
        <Image src="/rensa_logo.svg" width={135} height={44} alt="Rensa Logo" />
        <div className="flex items-center gap-5">
          <Link href="/" className="transition-all duration-200 hover:text-primary"><FontAwesomeIcon icon={faGithub} className="w-8 h-8 text-xl" /></Link>
          <Link href="/" className="transition-all duration-200 hover:text-primary"><FontAwesomeIcon icon={faCube} className="w-8 h-8 text-xl" /></Link>
        </div>
        <div className="flex items-center gap-10 font-medium text-lg tracking-wide">
          <Link href="/" className="transition-all duration-200 hover:text-primary">Quick Start</Link>
          <Link href="/" className="transition-all duration-200 hover:text-primary">Docs</Link>
          <Link href="/" className="transition-all duration-200 hover:text-primary">Blog</Link>
        </div>
      </div>
      <div>
        <p className="text-[#888] font-semibold text-md tracking-wide">© 2025 RevvJS. Open Source & MIT Licensed.</p>
      </div>
    </footer>
  )
}
