import { motion } from "framer-motion";
import { Terminal, CreditCard, ShieldCheck, Cpu } from "lucide-react";
import { MagicCard } from "../lightswind/magic-card";

const services = [
  {
    icon: Terminal,
    title: "ATM/CRM System & Terminal Development",
    description: "Expertise in managing and supporting self-service terminals, designing functional workflows based on system layout requirements, and registering terminal configurations . Managing end-to-end modifications across UAT, Pre-Pro, Production, and simulation test environments .",
  },
  {
    icon: CreditCard,
    title: "Card Scheme Integration & UAT Testing",
    description: "Setting rigorous test case plans on UAT and migrating solutions to pre-production/production to ensure optimal ATM/CRM quality . Simulating card schemes including Visa, Mastercard, UPI, and CSS to deliver robust functionality for new projects .",
  },
  {
    icon: ShieldCheck,
    title: "Terminal Support, Investigation & Dispute Resolution",
    description: "Tracking terminal network connections and addressing issues on ATM, CRM, CDM, and CIM machines by logging system tickets . Confirming dispute root causes accurately, retrieving CCTV video records for investigations, and monitoring cash replenishment levels .",
  },
  {
    icon: Cpu,
    title: "Vendor Collaboration & Project Management",
    description: "Working closely with vendors for timely issue fixes, application workflow reporting, and software verification . Planning project timelines using Jira project management, tracking tasks, and aligning with internal teams on project milestones .",
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gradient-primary">
          What I Do
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Comprehensive terminal engineering, multi-environment deployments, and end-to-end financial transaction infrastructure management.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <MagicCard
                className="h-full p-8 rounded-[2rem] border border-border/80 bg-card/80"
                gradientSize={280}
                gradientColor="rgba(139, 92, 246, 0.12)"
                gradientFrom="#8b5cf6"
                gradientTo="#38bdf8"
              >
                <div className="flex flex-col h-full justify-between gap-6">
                  <div>
                    {/* Consistent Icon Styling with signature primary color */}
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;