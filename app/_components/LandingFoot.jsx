import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faCube } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"

export const LandingFooter = () => {
  return (
    <footer className="font-sans flex flex-col gap-20 py-10 px-10 md:py-10 md:px-15 border-t border-t-primary">
      <div className="flex flex-col gap-8">
        <Image src="/rensa_logo.svg" width={135} height={44} className="w-1/2 md:w-[135px]" alt="Rensa Logo" />
        <div className="flex items-center gap-5">
          <Link href="https://github.com/aether-flux/rensa" className="transition-all duration-200 hover:text-primary"><FontAwesomeIcon icon={faGithub} className="w-5 h-5 md:w-8 md:h-8 text-xl" /></Link>
          <Link href="https://www.npmjs.com/package/rensa" className="transition-all duration-200 hover:text-primary"><FontAwesomeIcon icon={faCube} className="w-5 h-5 md:w-8 md:h-8 text-xl" /></Link>
        </div>
        <div className="flex items-center gap-6 md:gap-10 font-medium text-md md:text-lg tracking-wide">
          <Link href="/docs/manual-installation" className="transition-all duration-200 hover:text-primary">Quick Start</Link>
          <Link href="/docs/defining-routes" className="transition-all duration-200 hover:text-primary">Docs</Link>
        </div>
      </div>
      <div>
        <p className="text-[#888] font-semibold text-sm md:text-md tracking-wide">© 2025 RevvJS. Open Source & MIT Licensed.</p>
      </div>
    </footer>
  )
}
