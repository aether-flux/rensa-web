"use client";

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState, useEffect } from "react";

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

  if (!featData.length) return <p>Loading...</p>;

  return (
    <>
      <div className="flex items-center justify-between px-40 pt-20 gap-20">
        <div>
          <h3 className="font-sans font-semibold text-3xl">{featData[ind].name}</h3>
          <p className="font-sans text-xl w-2/3 mt-4">{featData[ind].desc}</p>
          <div className="flex items-center gap-4 mt-8">
            <FontAwesomeIcon icon={faChevronLeft} onClick={handlePrev} className="w-4 h-4 p-4 rounded-full hover:bg-primary/30 transition-all duration-300 cursor-pointer" />
            <FontAwesomeIcon icon={faChevronRight} onClick={handleNext} className="w-4 h-4 p-4 rounded-full hover:bg-primary/30 transition-all duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <Image src={featData[ind].image} width={670} height={462} alt="Feature image" />
        </div>
      </div>
    </>
  )
}
