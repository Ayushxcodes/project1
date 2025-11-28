"use client";
import React, { useState } from "react";
import { AnimatedList } from "@/components/ui/animated-list";
import { 
  Brain, 
  Factory, 
  Package, 
  Rocket,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  Hospital,
  FileText,
  Database,
  LayoutDashboard,
  Settings,
  TrendingUp,
  Users,
  DollarSign,
  Globe,
  Shield
} from "lucide-react";

const WhatWeDeliver = () => {
  const [expandedCard, setExpandedCard] = useState<string | number | null>(null);
  const services = [
    {
      id: 1,
      icon: Brain,
      title: "AI-Powered Healthcare & Pharma Solutions",
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-50 to-cyan-50",
      items: [
        { icon: Sparkles, text: "AI-driven diagnostic tools" },
        { icon: Settings, text: "Workflow optimisation & automation" },
        { icon: Hospital, text: "Clinical decision-support systems for hospitals, clinics & labs" }
      ],
      subSections: [
        {
          title: "End-to-end EMR/EHR systems",
          icon: FileText,
          features: [
            "Smart coding & documentation",
            "Automated summarization",
            "Secure data storage"
          ]
        },
        {
          title: "Complete Hospital Management System (HMS)",
          icon: LayoutDashboard,
          features: [
            "Patient admission, OPD/IPD management",
            "Doctor scheduling",
            "Billing & insurance",
            "Pharmacy & lab integration",
            "HR, finance & admin modules",
            "Analytics dashboards"
          ]
        }
      ]
    },
    {
      id: 2,
      icon: Factory,
      title: "Pharma Manufacturing & Setup Support",
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-br from-purple-50 to-pink-50",
      items: [
        { icon: Factory, text: "Consulting for setting up generic or formulation-based pharma manufacturing units" },
        { icon: LayoutDashboard, text: "Facility design & layout planning" },
        { icon: Shield, text: "Guidance on GMP compliance, licensing & regulatory documentation" },
        { icon: Settings, text: "Equipment, machinery & automation recommendations" },
        { icon: TrendingUp, text: "End-to-end production workflow design" },
        { icon: CheckCircle2, text: "Full support in achieving regulatory & operational readiness" }
      ]
    },
    {
      id: 3,
      icon: Package,
      title: "Supply-Chain, Inventory & Payment Automation",
      color: "from-emerald-500 to-teal-500",
      gradient: "bg-gradient-to-br from-emerald-50 to-teal-50",
      items: [
        { icon: Database, text: "AI-based inventory tracking & stock optimisation" },
        { icon: TrendingUp, text: "Demand forecasting for hospitals, clinics & pharma units" },
        { icon: Sparkles, text: "Dynamic automatic reordering" },
        { icon: Users, text: "Automated vendor & supplier management" },
        { icon: DollarSign, text: "Automated payment follow-up systems" },
        { icon: LayoutDashboard, text: "Real-time dashboards for supply-chain monitoring" },
        { icon: CheckCircle2, text: "Reduced stock-outs, overstock, and operational delays" }
      ]
    },
    {
      id: 4,
      icon: Rocket,
      title: "USA Market Entry, Start-up Launch & Regulatory Support",
      color: "from-orange-500 to-red-500",
      gradient: "bg-gradient-to-br from-orange-50 to-red-50",
      items: [
        { icon: Rocket, text: "Support for medical / health-tech start-ups entering or expanding in the U.S." },
        { icon: Globe, text: "Market research & entry strategy" },
        { icon: Sparkles, text: "Brand positioning & marketing guidance" },
        { icon: Shield, text: "FDA, HIPAA & U.S. regulatory compliance support" },
        { icon: FileText, text: "Assistance with licensing & regulatory documentation" },
        { icon: TrendingUp, text: "Marketing & communication solutions designed for healthcare" },
        { icon: Users, text: "Stakeholder engagement & digital outreach support" }
      ]
    }
  ];

  const toggleCard = (id: string | number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="relative w-full py-24 px-6 md:px-16  overflow-hidden">
      {/* Background Decorative Elements */}

      <div className="relative max-w-7xl w-full mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">Our Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 mb-4">
            What We Deliver
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored for healthcare innovation and market success
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Service Cards */}
        <AnimatedList className="grid md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const isExpanded = expandedCard === service.id;
            
            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 ${
                  isExpanded ? 'md:col-span-2' : ''
                }`}
              >
                {/* Card Header - Clickable */}
                <div
                  onClick={() => toggleCard(service.id)}
                  className={`${service.gradient} p-6 cursor-pointer transition-all duration-300`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {isExpanded ? 'Click to collapse' : 'Click to explore details'}
                        </p>
                      </div>
                    </div>
                    <ChevronDown 
                      className={`w-6 h-6 text-gray-600 transition-transform duration-300 flex-shrink-0 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Card Content - Expandable */}
                <div
                  className={`bg-white transition-all duration-500 overflow-hidden ${
                    isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6">
                    {/* Main Items */}
                    <div className={`grid ${service.subSections ? 'md:grid-cols-1' : 'md:grid-cols-2'} gap-4 mb-6`}>
                      {service.items.map((item, idx) => {
                        const ItemIcon = item.icon;
                        return (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                          >
                            <ItemIcon className={`w-5 h-5 mt-0.5 flex-shrink-0 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`} style={{WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text'}} />
                            <span className="text-gray-700 text-sm leading-relaxed">
                              {item.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Sub-sections */}
                    {service.subSections && (
                      <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-gray-200">
                        {service.subSections.map((subSection, idx) => {
                          const SubIcon = subSection.icon;
                          return (
                            <div
                              key={idx}
                              className={`${service.gradient} rounded-xl p-5 border border-gray-200`}
                            >
                              <div className="flex items-center gap-3 mb-4">
                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shadow-sm`}>
                                  <SubIcon className="w-5 h-5 text-white" />
                                </div>
                                <h4 className="font-bold text-gray-900">
                                  {subSection.title}
                                </h4>
                              </div>
                              <ul className="space-y-2">
                                {subSection.features.map((feature, fIdx) => (
                                  <li key={fIdx} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                {/* Decorative gradient line */}
                <div className={`h-1 bg-gradient-to-r ${service.color}`}></div>
              </div>
            );
          })}
        </AnimatedList>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-white rounded-2xl shadow-lg border border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse"></div>
              <span className="text-lg font-semibold text-gray-800">Ready to Transform Your Healthcare Business?</span>
            </div>
            <p className="text-gray-600 max-w-2xl">
              Click on any service above to explore our comprehensive solutions in detail
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDeliver;