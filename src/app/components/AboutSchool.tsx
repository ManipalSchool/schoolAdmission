"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";

// Dynamically import Lottie
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
import animationData from "../../animation/aboutSectionAnimation.json";

function AboutSchool() {
  const lottieRef = useRef(null);
  const isLottieInView = useInView(lottieRef, { once: true });

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="bg-white flex items-center">
      <div className="mx-4 md:mx-8 lg:mx-36 mt-16 md:mt-24 lg:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h1 className="text-[1.5rem] md:text-[2.5rem] font-bold leading-tight tracking-tight">
              <span className="text-[#FF5F1F]">Manipal School{" "}</span>
              <span className="text-[#1A1A1A]">
                is a premier institution dedicated to holistic education, blending academics, culture & technology to nurture well-rounded learners.
              </span>
            </h1>
          </motion.div>

          {/* Lottie Animation Section - only render when in view */}
          <div ref={lottieRef} className="w-full flex justify-center">
            {isLottieInView && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Lottie options={defaultOptions} height={300} width={300} />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSchool;