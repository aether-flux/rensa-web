"use client";

import { Spinner } from "@/app/_components/(ui)/Spinner";
import { DocSidebar } from "@/app/_components/DocSidebar";
import { LandingFooter } from "@/app/_components/LandingFoot";
import { LandingNav } from "@/app/_components/landingNav";
import { mdxComponents } from "@/lib/MdxComponents";
import { MDXRemote } from "next-mdx-remote";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function DocsPage () {
  const { slug } = useParams();
  const [mdxSrc, setMdxSrc] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchMdx = async () => {
      try {
        const res = await fetch(`/api/docs/${slug}`);

        if (!res.ok) {
          throw new Error(`API Error: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();

        if (!data.mdxSource) {
          throw new Error("MDX content missing from API response");
        }

        setMdxSrc(data.mdxSource);
      } catch (err) {
        console.error("Error fetching MDX:", err);
        setError(err.message);
      }
    };

    fetchMdx();
  }, [slug]);

  if (!mdxSrc) return <div className="w-screen h-screen flex items-center justify-center"><Spinner className="w-8 h-8" /></div>;

  return (
    <>
      <LandingNav isDocs={true} />

      <div className="flex">
        <div className="">
          <DocSidebar />
        </div>
        <div className="py-10 px-20">
          <MDXRemote {...mdxSrc} components={mdxComponents} />
        </div>
      </div>

      <LandingFooter />
    </>
  )
} 
