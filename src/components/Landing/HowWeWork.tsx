import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons"
import { Users, Workflow, Globe, ListChecks } from "lucide-react"

import { cn } from "@/lib/utils"
import { AnimatedBeamMultipleOutputDemo } from "@/components/Landing/AnimatedMultipleOutput"
import { AnimatedListDemo } from "@/components/Landing/AniamtedListDemo"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { Marquee } from "@/components/ui/marquee"

const features = [
  {
    Icon: Users,
    name: "Holistic Expert Teams",
    description:
      "AI engineers, automation specialists, regulatory advisors, pharma consultants, and healthcare operations experts — working as a unified force.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 opacity-70 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
      >
        {["AI", "Automation", "Regulation", "Pharma", "Supply Chain"].map((item, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.08] bg-gray-950/[.02] hover:bg-gray-950/[.06]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <figcaption className="text-sm font-medium dark:text-white text-gray-700">
              {item}
            </figcaption>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: Workflow,
    name: "End-to-End Project Delivery",
    description:
      "We manage the full lifecycle: feasibility → compliance → automation → rollout → ongoing optimisation.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute top-4 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]" />
    ),
  },
  {
    Icon: ListChecks,
    name: "Customised Engagements",
    description:
      "Flexible solutions for hospitals, startups, manufacturers and large healthcare networks — tailored in scope, scale and complexity.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute top-4 right-2 h-[300px] border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]" />
    ),
  },
  {
    Icon: Globe,
    name: "Global Mindset, Local Execution",
    description:
      "Especially optimized for U.S. healthcare compliance — scalable systems ready for global standards and real-world adoption.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute top-4 right-2 h-[300px] border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]" />
    ),
  },
]

export function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  )
}
