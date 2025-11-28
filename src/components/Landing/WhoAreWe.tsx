import React from "react";
import { AnimatedList } from "@/components/ui/animated-list";
import { Heart, Sparkles, Target, Users } from "lucide-react";

const WhoAreWe = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Boutique Advisory",
      description:
        "Americo e Medico is a boutique advisory & solutions provider combining deep expertise in AI, automation and healthcare / pharma.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Market Specialization",
      description:
        "We specialise in bringing medical-tech innovations, pharma manufacturing, hospital management and supply-chain solutions to life — especially when launching or scaling in the U.S. market.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Full-Service Partnership",
      description:
        "We see ourselves as your full-service partner: from concept to launch, from compliance to operations — not merely an adviser, but a committed collaborator ensuring operational excellence and compliance.",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-8 md:px-16 overflow-hidden">
      {/* Main Wrapper */}
      <div className="relative max-w-6xl w-full mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-5 md:mb-6 shadow-lg">
            <Heart className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 mb-4">
            Who Are We?
          </h2>

          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Feature Cards */}
        <AnimatedList className="grid grid-cols-1 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Hover Gradient */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <div className="relative flex items-start gap-4 sm:gap-6">
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Corner Decoration */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${feature.color} opacity-5 rounded-bl-full`}
                ></div>
              </div>
            );
          })}
        </AnimatedList>

        {/* Bottom Caption */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-md border border-gray-100 text-sm md:text-base">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="font-medium text-gray-600">
              Your Committed Healthcare Partner
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
