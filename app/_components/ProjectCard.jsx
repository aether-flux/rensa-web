"use client";

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Spinner } from "./(ui)/Spinner";
import Link from "next/link";
import { faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export const ProjectCard = () => {
  const [projData, setProjData] = useState([]);
  const [ind, setInd] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjData(data);
    }

    fetchData();
  }, []);

  if (!projData.length) return <div className="w-screen h-[50dvh] flex items-center justify-center"><Spinner className="w-6 h-6" /></div>

  const handlePrev = () => {
    if (ind === 0) {
      setInd(projData.length - 1);
      return;
    }

    setInd(prev => prev - 1);
  }

  const handleNext = () => {
    if (ind === projData.length - 1) {
      setInd(0);
      return;
    }

    setInd(prev => prev + 1);
  }

  return (
    <div className="px-40 pt-20 flex flex-col items-center gap-10">
      <div className="flex items-center gap-20">
        <FontAwesomeIcon icon={faChevronLeft} onClick={handlePrev} className="w-4 h-4 p-4 rounded-full hover:bg-primary/30 transition-all duration-300 cursor-pointer" />
        <Image src={"/images/project_url.png"} width={982} height={590} alt="Project image" />
        <FontAwesomeIcon icon={faChevronRight} onClick={handleNext} className="w-4 h-4 p-4 rounded-full hover:bg-primary/30 transition-all duration-300 cursor-pointer" />
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="font-sans font-medium text-3xl">{projData[ind].name}</h3>
        <p className="font-sans text-xl">{projData[ind].dev}</p>
        <div className="flex items-center gap-10">
          <Link href={projData[ind].linkedin} target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4 text-secondary-text transition-all duration-300 hover:text-primary" /></Link>
          <Link href={projData[ind].twitter} target="_blank"><FontAwesomeIcon icon={faXTwitter} className="w-4 h-4 text-secondary-text transition-all duration-300 hover:text-primary" /></Link>
        </div>
      </div>
    </div>
  )
}
