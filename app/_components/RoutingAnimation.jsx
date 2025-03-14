"use client";

import { useState } from 'react';
import { GradButton } from "./(ui)/Button"
import { CodeSnippet } from "./Snippet"

export const RoutingAnimation = () => {
  const [path, setPath] = useState("");

  return (
    <div className="flex items-end gap-10">
      <CodeSnippet language="try it:" copy_able={false}>
        <div className="text-primary-text flex">
          <span>http://localhost:3000/</span>
          <input type="text" name="path" value={path} onChange={(e) => setPath(e.target.value)} className="outline-none border-b border-b-primary-text" />
        </div>
      </CodeSnippet>
      <GradButton className="px-6 py-3 text-primary-text">Run Animation</GradButton>
    </div>
  )
}
