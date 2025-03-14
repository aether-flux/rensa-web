"use client";

import { useState } from "react";
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const CodeSnippet = ({ language, children }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (language.toLowerCase() !== 'npm') navigator.clipboard.writeText(children);

    navigator.clipboard.writeText(children.slice(2));

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="font-mono">
      <div className="px-6 py-3 bg-primary rounded-t-md max-w-1/4">
        <span className="uppercase text-md">{language}</span>
      </div>
      <div className="flex items-start justify-between px-6 py-3 border border-primary rounded-b-md rounded-tr-md">
        <span>
          {children}
        </span>
        <span onClick={handleCopy}>
          {!copied ? <FontAwesomeIcon icon={faCopy} className="w-4 h-4 text-[#bbb] transition-all duration-200 cursor-pointer" /> : <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-[#bbb] cursor-pointer" />}
        </span>
      </div>
    </div>
  )
}
