import React from 'react'
import { HyperText } from '../ui/hyper-text'

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center min-h-screen py-10 px-4 md:px-8">
      <div className="bg-white p-6 md:p-10 rounded-xl shadow-2xl w-full max-w-7xl min-h-[400px] md:min-h-[500px] flex items-center justify-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30 -mr-20 -mt-20 md:-mr-32 md:-mt-32"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 md:w-96 md:h-96 bg-cyan-100 rounded-full filter blur-3xl opacity-30 -ml-32 -mb-32 md:-ml-48 md:-mb-48"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl px-4 md:px-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            Technology-Driven Healthcare Solutions
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Transforming Healthcare
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Procurement & Supply Management
            </span>
          </h1>

          {/* Subheading */}
          <div className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 md:mb-10">
            <HyperText className="text-base sm:text-lg">
              Intelligent, cloud-based procurement software that simplifies purchasing,
              improves transparency, and ensures compliance across the medical supply chain.
            </HyperText>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-sm md:text-base">
              Get Started Today
            </button>
            <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-200 text-sm md:text-base">
              Learn More
            </button>
          </div>

          {/* Trust Badge */}
          <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-gray-200">
            <p className="text-xs sm:text-sm text-gray-500 mb-3">Trusted by healthcare organizations across the United States</p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 opacity-50">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">Hospital+</div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">ClinicCare</div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">MedSupply</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
