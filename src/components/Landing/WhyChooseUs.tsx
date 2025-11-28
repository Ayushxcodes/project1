import React from "react";
import { AnimatedList } from "@/components/ui/animated-list";
import { 
  Award,
  Target,
  Heart,
  Shield,
  Zap,
  TrendingUp,
  CheckCircle2,
  Sparkles
} from "lucide-react";

const WhyAmericoeMedico = () => {
  const values = [
    {
      icon: Zap,
      title: "Full Stack Approach",
      description:
        "We bring technology + domain + regulatory + business strategy — a full stack approach.",
      color: "from-blue-500 to-cyan-500",
      accentColor: "bg-blue-500",
    },
    {
      icon: Target,
      title: "Partnership Beyond Advisory",
      description:
        "We don't just advise — we partner, implement and ensure results, offering turnkey solutions.",
      color: "from-purple-500 to-pink-500",
      accentColor: "bg-purple-500",
    },
    {
      icon: Heart,
      title: "Our Mission",
      description:
        "Our mission is simple: to make healthcare and pharma operations smarter, safer, scalable and compliant, so our clients can focus on what matters: care, growth, impact.",
      color: "from-emerald-500 to-teal-500",
      accentColor: "bg-emerald-500",
    },
  ];

  const badges = [
    { icon: Shield, text: "Compliant" },
    { icon: TrendingUp, text: "Scalable" },
    { icon: Sparkles, text: "Smarter" },
    { icon: CheckCircle2, text: "Safer" },
  ];

  return (
    <section className="w-full py-20 md:py-24 px-4 md:px-16">
      <div className="max-w-6xl w-full mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mb-6 shadow-xl">
            <Award className="w-7 h-7 md:w-8 md:h-8 text-white" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 mb-4">
            Why Americo e Medico
          </h2>

          <div className="w-24 md:w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Value Cards */}
        <AnimatedList className="space-y-6 mb-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 overflow-hidden"
              >
                {/* Hover background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Corner accent */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br ${value.color} opacity-10 rounded-bl-full`}
                ></div>

                <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {value.title}
                    </h3>

                    <p className="text-gray-700 leading-relaxed text-md md:text-lg">
                      {value.description}
                    </p>
                  </div>

                  {/* Accent dot */}
                  <div
                    className={`absolute bottom-4 right-4 w-2 h-2 rounded-full ${value.accentColor} animate-pulse`}
                  ></div>
                </div>
              </div>
            );
          })}
        </AnimatedList>

        {/* Bottom Mission Statement */}
        <div className="relative mt-14 md:mt-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-white opacity-10 rounded-full blur-2xl"></div>

          <div className="relative text-center">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Healthcare Operations Made Simple
            </h3>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6 md:mb-8">
              {badges.map((badge, index) => {
                const BadgeIcon = badge.icon;
                return (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105"
                  >
                    <BadgeIcon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    <span className="text-white font-semibold text-sm md:text-base">
                      {badge.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
              Focus on what truly matters — delivering exceptional care, driving
              growth, and creating lasting impact
            </p>
          </div>
        </div>

        {/* CTA Badge */}
        <div className="mt-10 md:mt-12 text-center">
          <div className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-gray-900 to-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-700">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-white font-semibold text-base md:text-lg">
              Your Trusted Healthcare Partner
            </span>
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAmericoeMedico;
