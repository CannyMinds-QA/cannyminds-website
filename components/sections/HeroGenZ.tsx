"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowForward as ArrowIcon,
  CheckCircle as CheckIcon,
} from "@mui/icons-material";

import dynamic from "next/dynamic";

const Hyperspeed = dynamic(() => import("@/components/ui/Hyperspeed/Hyperspeed"), {
  ssr: false,
});



export default function HeroGenZ() {
  return (
    <section className="relative bg-white pt-32 pb-20 overflow-hidden h-screen flex flex-col justify-center">
      {/* Hyperspeed Background */}
      <div className="absolute inset-0 z-0 mix-blend-multiply pointer-events-none">
        <Hyperspeed
          effectOptions={{
            distortion: "turbulentDistortion",
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 3,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0xffffff,
              islandColor: 0xffffff,
              background: 0xffffff,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3
            }
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">


          {/* Main Content - Tagline */}
          {/* Main Content - Tagline */}
          <div className="text-center mb-12 relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6"
            >
              <span className="sr-only">CannyMinds Technology Solutions - </span>
              Transform Your Business with
              <br />
              <span className="text-primary">Enterprise AI & Automation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Powering 500+ organizations globally with ISO-certified, FDA-compliant software solutions since 2003.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href="/contact">
              <button className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30">
                Get Started
                <ArrowIcon fontSize="small" />
              </button>
            </Link>
            <Link href="/#solutions">
              <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-primary hover:text-primary hover:shadow-md transition-all">
                Explore Solutions
              </button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600"
          >
            <div className="flex items-center gap-2">
              <CheckIcon className="text-green-600" fontSize="small" />
              <span className="font-medium">ISO 9001:2015</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="text-green-600" fontSize="small" />
              <span className="font-medium">FDA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="text-green-600" fontSize="small" />
              <span className="font-medium">20+ Years</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="text-green-600" fontSize="small" />
              <span className="font-medium">24/7 Support</span>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-sm text-gray-600">Active Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">20+</div>
              <div className="text-sm text-gray-600">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </motion.div> */}


      </div>
    </section>
  );
}
