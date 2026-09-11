import { ScrollTimeline } from "../lightswind/scroll-timeline";
import {Layers, Users, Globe } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "2023 – Present",
      title: "Senior Officer, Terminal Product Development",
      subtitle: "ABA Bank",
      description:
        "Own UAT-to-production testing and rollout for ATM/CRM systems, including EMV contactless (Visa, MasterCard, UPI) and numberless card projects. Design and implement ATM/CRM workflows based on business requirements, manage project timelines in Jira, and work closely with vendors to resolve issues on time.",
      icon: <Globe className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2021 – 2023",
      title: "Senior Officer, Terminal Support",
      subtitle: "ABA Bank",
      description:
        "Led troubleshooting and root-cause resolution for transactional errors across ATM, CRM, CDM, and CIM terminals nationwide. Tracked network connectivity and incidents through the ticketing system, coordinated cash replenishment schedules, and supported investigation cases with CCTV and dispute documentation.",
      icon: <Layers className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2019 – 2021",
      title: "Terminal Support Officer",
      subtitle: "ABA Bank",
      description:
        "Controlled and verified ATM/CRM cash balances, coordinating refill and collection schedules with branches. Handled complaint resolution, card collection, and machine status verification, building the operational foundation for terminal support across the bank's self-service network.",
      icon: <Users className="h-4 w-4 mr-2 text-primary" />,
    },
  ];
  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="An evolving path of leadership, innovation, and impact"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
