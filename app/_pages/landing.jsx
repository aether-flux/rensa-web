import { LandingNav } from "../_components/landingNav"

export const Landing = () => {
  return (
    <>
      {/* Navbar */}
      <LandingNav />

      {/* Hero Section */}
      <main>
        <div className="main-left">
          <h1 className="text-5xl/13 tracking-wide font-medium font-head text-primary-text">Turbocharge your <br/>Backend</h1>
          <p className="text-2xl font-regular font-sans">Built for developers, engineered for speed.</p>
        </div>
        <div className="main-right"></div>
      </main>
    </>
  )
}
