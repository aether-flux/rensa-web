"use client";

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Spinner } from "./(ui)/Spinner";

export const FeatureCard = () => {
  const [featData, setFeatData] = useState([]);
  const [ind, setInd] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/features");
      const data = await res.json();
      setFeatData(data);
    }

    fetchData();
  }, []);

  const handlePrev = () => {
    if (ind === 0) {
      setInd(featData.length - 1);
      return;
    }

    setInd(prev => prev - 1);
  }

  const handleNext = () => {
    if (ind === featData.length - 1) {
      setInd(0);
      return;
    }

    setInd(prev => prev + 1);
  }

  if (!featData.length) return <div className="w-screen h-[50dvh] flex items-center justify-center"><Spinner className="w-6 h-6" /></div>;

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-10 md:px-40 md:pt-20 gap-2 md:gap-20">
        <div>
          <h3 className="font-sans font-semibold text-2xl md:text-3xl text-center md:text-left">{featData[ind].name}</h3>
          <p className="font-sans text-md md:text-xl w-2/3 text-center md:text-left w-screen px-6 md:w-auto md:px-0 mt-4">{featData[ind].desc}</p>
          <div className="flex items-center justify-center md:justify-start gap-4 mt-4 md:mt-8">
            <FontAwesomeIcon icon={faChevronLeft} onClick={handlePrev} id="hoverable" className="w-4 h-4 p-4 rounded-full hover:bg-primary/30 transition-all duration-300 cursor-pointer" />
            <FontAwesomeIcon icon={faChevronRight} onClick={handleNext} id="hoverable" className="w-4 h-4 p-4 rounded-full hover:bg-primary/30 transition-all duration-300 cursor-pointer" />
          </div>
        </div>
        <div className="mt-5 md:mt-0">
          <Image src={featData[ind].image} width={670} height={462} alt="Feature image" />
        </div>
      </div>
    </>
  )
}
