"use client";

import Image from "next/image"
import { LandingNav } from "../_components/landingNav"
import { CodeSnippet } from "../_components/Snippet"
import { GradButton } from "../_components/(ui)/Button";
import { LandingFooter } from "../_components/LandingFoot";
import { FeatureCard } from "../_components/FeatureCard";
import { ProjectCard } from "../_components/ProjectCard";

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
      <main className="p-10 md:px-40 md:py-28 flex flex-col md:flex-row items-start justify-center md:justify-center gap-16 md:gap-72">
        <div className="">
          <div>
            <h1 className="text-3xl md:text-5xl/13 tracking-wide font-medium font-head text-center md:text-left text-primary-text">Turbocharge your <br/>Backend</h1>
            <p className="text-md md:text-2xl font-regular font-sans text-center md:text-left mt-5 mb-10 md:mt-10 md:mb-20">Built for developers, engineered for speed.</p>
          </div>
          <CodeSnippet language="npm">
            $ npm install rensa
          </CodeSnippet>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-medium text-xl md:text-3xl text-center">Average requests/second</h1>
          <p className="text-sm md:text-lg text-center mb-6 mt-1">Benchmarked with <span className="font-semibold">autocannon</span></p>
          <Image src="/embed_benchmarks.svg" width={443} height={350} alt="Benchmarks graph" />
        </div>
      </main>

      {/* Features */}
      <section id="feats" className="py-10 md:py-20">
        <h1 className="font-head font-medium text-primary-text text-3xl md:text-5xl/10 text-center">A Backend That <span className="text-primary">Just Flows</span></h1>
        <FeatureCard />
      </section>

      {/* Projects */}
      <section id="projects" className="py-10 md:py-20">
        <h1 className="font-head font-medium text-primary-text text-3xl md:text-5xl/10 text-center">Built with <span className="text-primary">Rensa</span></h1>
        <ProjectCard />
      </section>

      {/* Rensa Core */}
      <section id="rensa-core" className="px-10 py-20 md:px-40 md:py-28 flex flex-col gap-16">
        <h1 className="font-head font-medium text-primary-text text-3xl md:text-5xl/10 text-center">Rensa <span className="text-primary">Core</span></h1>
        <div className="text-md md:text-xl flex flex-col gap-6 md:px-52">
          <p>Rensa is built using a hybrid Trie+Hashmap structure for near-instant route resolution, ensuring blazing fast lookups even with dynamic routes. Every request takes the shortest path possible, minimizing overhead and maximizing performance.</p>
          <p>Unlike traditional routing mechanisms that iterate through a list of routes, Rensa efficiently maps static segments in a Hashmap while handling dynamic parameters through an optimized Trie, making route resolution as fast as possible,</p>
          <p><a className="font-medium underline hover:no-underline" href="https://dev.to/aetherflux/the-hidden-complexity-of-routing-why-your-requests-take-longer-than-they-should-5bbf" target="_blank">Read more about the approach here.</a></p>
        </div>
      </section>

      {/* Footer */}
      <LandingFooter />
    </>
  )
}
