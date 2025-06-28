"use client";

import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { GradButton } from "./(ui)/Button"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export const LandingNav = ({ isDocs=false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-b-[#888] md:px-15 md:py-8">
      <Link href="/">
        <Image src="/rensa_logo.svg" width={162} height={44} className="w-1/2 md:w-[162px]" alt="Rensa Logo" />
      </Link>
      
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FontAwesomeIcon icon={faXmark} className="w-8 h-8 transition-all duration-300 hover:text-primary cursor-pointer" /> : <FontAwesomeIcon icon={faBars} className="w-8 h-8 transition-all duration-300 hover:text-primary cursor-pointer" />}
      </button>

      <div className={`absolute md:static top-16 right-3 w-1/2 shadow-md md:shadow-none md:w-auto md:flex items-center gap-10 font-medium transition-all duration-300 ${isOpen ? "flex-col bg-[#2B3A37] rounded-md px-4 py-4 items-center justify-center" : "hidden"} md:flex-row`}>
        <Link href="https://github.com/aether-flux/rensa" id="hoverable" className={`block py-0 px-0 md:inline transition-all duration-200 hover:text-primary`}>
          <FontAwesomeIcon icon={faGithub} className="w-8 h-8 text-xl" />
        </Link>
        <Link href="/docs/defining-routes" id="hoverable" className={`block py-2 px-0 md:inline transition-all duration-200 hover:text-primary ${isDocs ? "hidden" : "visible"}`}>
          Docs
        </Link>
        <Link href="/docs/manual-installation" id="hoverable" className={`${isDocs ? "hidden" : "visible"} ${isOpen ? "mb-4" : ""}`}>
          <GradButton className={`block w-full px-4 py-2 text-primary-text md:inline`}>
            Get Started
          </GradButton>
        </Link>
        
      </div>
    </nav>
  )
}
