import { motion } from "framer-motion";

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "ATM/CRM EMV Contactless Transaction",
      description: "Delivered on-us and off-us contactless transaction support across Visa, Mastercard, and UPI card schemes on ABA Bank's terminal network.",
      // Image showing a user interacting with an ATM terminal / card reader
      image: "/images/projects/emv-contactless.jpg",
      tags: ["Visa", "Mastercard", "UPI"],
    },
    {
      id: 2,
      title: "Numberless Card Project",
      description: "Enabled numberless card transactions across Visa, Mastercard, UPI, and CSS, adapting terminal workflows to support enhanced card security.",
      // Image showing a sleek, modern minimalist card concept
      image: "/images/projects/numberless-card.jpg",
      tags: ["Card Security", "Workflow Design"],
    },
    {
      id: 3,
      title: "Non-Magstripe Card Support",
      description: "Implemented ATM/CRM support for non-magstripe cards, testing and validating terminal read compatibility ahead of rollout.",
      // Close-up image highlighting microchips and secure card hardware
      image: "/images/projects/non-magstripe.jpg",
      tags: ["UAT", "Terminal Hardware"],
    },
    {
      id: 4,
      title: "Member Bank Integration",
      description: "Added CSS as a supported member bank scheme, integrating transaction flows into the existing ATM/CRM terminal network.",
      // Image representing secure banking, currency, and financial network connection
      image: "/images/projects/member-bank-integration.jpg",
      tags: ["CSS", "Card Scheme Integration"],
    },
  ];
  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center md:text-left">
          My <span className="text-gradient-primary">Achievements</span>
        </h2>
        <p className="text-muted-foreground text-center md:text-left max-w-2xl text-lg">
          Enterprise terminal developments, card scheme integrations, and transaction security projects executed at ABA Bank.
        </p>
      </motion.div>

      {/* Clean 2-Column Card Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="group rounded-[2rem] border border-border/80 bg-card/90 shadow-xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Image Container on Top */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-muted">
              <img 
                src={project.image} 
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content Container Below */}
            <div className="p-8 flex flex-col justify-between flex-1 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags / Pills at the bottom */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs font-semibold px-3.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;