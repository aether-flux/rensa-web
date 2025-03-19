"use client";

import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import { GradButton } from "./(ui)/Button"

export const LandingNav = ({ isDocs=false }) => {
  return (
    <nav className="flex justify-between items-center px-15 py-8 border-b border-b-[#888]">
      <Link href="/">
        <Image src="/rensa_logo.svg" width={162} height={44} alt="Rensa Logo" />
      </Link>

      <div className="flex items-center gap-10 font-medium">
        <Link href="/docs/installation" className={`transition-all duration-200 hover:text-primary ${isDocs ? "hidden" : "visible"}`}>Docs</Link>
        <Link href="/" className="transition-all duration-200 hover:text-primary">Blog</Link>
        <Link href="/docs/installation" className={`${isDocs ? "hidden" : "visible"}`}>
          <GradButton className="px-6 py-2 text-primary-text">
            Get Started
          </GradButton>
        </Link>
        <Link href="/" className="transition-all duration-200 hover:text-primary">
          <FontAwesomeIcon icon={faGithub} className="w-8 h-8 text-xl" />
        </Link>
      </div>
    </nav>
  )
}
