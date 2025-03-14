"use client";

import { useState, useEffect, useRef } from 'react';
import { GradButton } from "./(ui)/Button"
import { CodeSnippet } from "./Snippet"
import { Application, Graphics, Text } from 'pixi.js';
import gsap from 'gsap';

export const RoutingAnimation = () => {
  const [path, setPath] = useState("");

  const pixiContainer = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !pixiContainer.current) return;

    // Create PIXI application
    const app = new Application({
      width: 600,
      height: 400,
      backgroundColor: 0xf0f0f0,
    });

    // Append PIXI canvas to the DOM
    pixiContainer.current.appendChild(app.view);
    appRef.current = app;

    // Hashmap box
    const hashmapBox = new Graphics();
    hashmapBox.beginFill(0x3498db);
    hashmapBox.drawRoundedRect(50, 50, 150, 80, 10);
    hashmapBox.endFill();
    app.stage.addChild(hashmapBox);

    // Trie box
    const trieBox = new Graphics();
    trieBox.beginFill(0xe74c3c);
    trieBox.drawRoundedRect(250, 50, 150, 80, 10);
    trieBox.endFill();
    app.stage.addChild(trieBox);

    // Labels
    const hashmapLabel = new Text("Hashmap", { fill: 0xffffff });
    hashmapLabel.x = 90;
    hashmapLabel.y = 80;
    app.stage.addChild(hashmapLabel);

    const trieLabel = new Text("Trie", { fill: 0xffffff });
    trieLabel.x = 310;
    trieLabel.y = 80;
    app.stage.addChild(trieLabel);

    return () => {
      app.destroy(true, { children: true, texture: true, baseTexture: true });
    };
  }, []);
  
  const runAnimation = () => {
    const app = appRef.current;
    if (!app) return;

    gsap.to(app.stage.children[0], {x: 300, duration: 1, ease: "power2.inOut"});
    gsap.to(app.stage.children[1], {x: 500, duration: 1, ease: "power2.inOut", delay: 1});
  }

  return (
    <div>
      <div className="flex items-end gap-10">
        <CodeSnippet language="try it:" copy_able={false}>
          <div className="text-primary-text flex">
            <span>http://localhost:3000/</span>
            <input type="text" name="path" value={path} onChange={(e) => setPath(e.target.value)} className="outline-none border-b border-b-primary-text" />
          </div>
        </CodeSnippet>
        <GradButton className="px-6 py-3 text-primary-text" onClick={runAnimation}>Run Animation</GradButton>
      </div>
      <div className="mt-4" ref={pixiContainer}></div>
    </div>
  )
}
