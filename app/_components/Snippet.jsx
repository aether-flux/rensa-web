"use client";

import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const CodeSnippet = ({ language, copy_able=true, className="", children }) => {
  const [copied, setCopied] = useState(false);
  const lang = language === "js" ? "javascript" : language;

  useEffect(() => {
    Prism.highlightAll(); // Highlight when component loads
  }, []);

  const handleCopy = () => {
    if (language.toLowerCase() !== 'npm') {
      navigator.clipboard.writeText(children);
    } else {
      navigator.clipboard.writeText(children.slice(2));
    }

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className={`font-mono ${className}`}>
      <div className="px-6 py-3 bg-primary rounded-t-md max-w-32 flex justify-center">
        <span className="uppercase text-md font-bold">{language}</span>
      </div>
      <div className="flex items-start justify-between px-6 py-3 border border-primary rounded-b-md rounded-tr-md">
        <pre>
          <code className={`language-${lang}`}>{children}</code>
        </pre>
        {copy_able && 
          <span onClick={handleCopy}>
          {!copied ? <FontAwesomeIcon icon={faCopy} className="w-4 h-4 text-[#bbb] transition-all duration-200 cursor-pointer mr-3 mt-6" /> : <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-[#bbb] cursor-pointer mr-3 mt-6" />}
          </span>
        }
      </div>
    </div>
  )
}
