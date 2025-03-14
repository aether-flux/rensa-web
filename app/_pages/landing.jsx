import Image from "next/image"
import { LandingNav } from "../_components/landingNav"
import { CodeSnippet } from "../_components/Snippet"

export const Landing = () => {
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
    </>
  )
}
