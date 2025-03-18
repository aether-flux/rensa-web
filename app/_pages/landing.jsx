"use client";

import Image from "next/image"
import { LandingNav } from "../_components/landingNav"
import { CodeSnippet } from "../_components/Snippet"
import { GradButton } from "../_components/(ui)/Button";
import { RoutingAnimation } from "../_components/RoutingAnimation";
import { LandingFooter } from "../_components/LandingFoot";
import { FeatureCard } from "../_components/FeatureCard";

export const Landing = () => {
  const exampleCode = `import { Rensa } from 'rensa';

const app = new Rensa();

app.get("/user", (req, res) => {
  res.json({ route: "user" });
});

app.get("/user:id", (req, res) => {
  res.json({ route: "user:id", id: req.params.id });
});

app.listen(3000, () => {
  console.log("Server started on port 3000...");
});`;

  return (
    <>
      {/* Navbar */}
      <LandingNav />

      {/* Hero Section */}
      <main className="px-40 py-28 flex items-start justify-between">
        <div className="">
          <div>
            <h1 className="text-5xl/13 tracking-wide font-medium font-head text-primary-text">Turbocharge your <br/>Backend</h1>
            <p className="text-2xl font-regular font-sans mt-10 mb-20">Built for developers, engineered for speed.</p>
          </div>
          <CodeSnippet language="npm">
            $ npm install rensa
          </CodeSnippet>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-medium text-3xl text-center">Average requests/second</h1>
          <p className="text-lg text-center mb-6 mt-1">Benchmarked with <span className="font-semibold">autocannon</span></p>
          <Image src="/embed_benchmarks.svg" width={443} height={350} alt="Benchmarks graph" />
        </div>
      </main>

      {/* Features */}
      <section id="feats">
        <h1 className="font-head font-medium text-primary-text text-5xl/10 text-center">A Backend That Just Flows</h1>
        <FeatureCard />
      </section>

      {/* Rensa Core */}
      <section id="rensa-core" className="px-40 py-28 flex flex-col gap-16">
        <h1 className="font-head font-medium text-primary-text text-5xl/10 text-center">Rensa Core</h1>
        <div className="text-xl flex flex-col gap-6">
          <p>Rensa is built using a hybrid Trie+Hashmap structure for near-instant route resolution, ensuring blazing fast lookups even with dynamic routes. Every request takes the shortest path possible, minimizing overhead and maximizing performance.</p>
          <p>Unlike traditional routing mechanisms that iterate through a list of routes, Rensa efficiently maps static segments in a Hashmap while handling dynamic parameters through an optimized Trie, making route resolution as fast as possible,</p>
          <p><a className="font-medium underline hover:no-underline" href="https://dev.to/aetherflux/the-hidden-complexity-of-routing-why-your-requests-take-longer-than-they-should-5bbf" target="_blank">Read more about the approach here.</a></p>
          <p>Enter a route below and see RevvJS in action!</p>
        </div>
          <CodeSnippet language="js" className="w-1/2">
            {exampleCode}
          </CodeSnippet>

        {/*<RoutingAnimation />*/}

      </section>

      {/* Footer */}
      <LandingFooter />
    </>
  )
}
