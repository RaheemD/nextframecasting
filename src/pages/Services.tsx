import { motion } from "framer-motion";
import { Film, Users, ClipboardList, Monitor, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const services = [
  {
    icon: Film,
    title: "Casting Assistance",
    description:
      "Support to casting directors during casting processes including talent sourcing, shortlisting, and coordination.",
    details: [
      "Talent sourcing based on brief requirements",
      "Profile organization and presentation",
      "Communication with talent representatives",
      "Casting session coordination",
    ],
  },
  {
    icon: Users,
    title: "Talent Coordination",
    description:
      "Managing communication, availability, and organization of actors and artists.",
    details: [
      "Availability management",
      "Schedule coordination",
      "Communication liaison",
      "Documentation handling",
    ],
  },
  {
    icon: ClipboardList,
    title: "Actor Shortlisting",
    description:
      "Filtering talent profiles based on project requirements.",
    details: [
      "Profile screening and filtering",
      "Requirement matching",
      "Shortlist preparation",
      "Portfolio organization",
    ],
  },
  {
    icon: Monitor,
    title: "Casting Support for Ads, Short Films & OTT",
    description:
      "Providing structured casting support across multiple content formats.",
    details: [
      "Advertisements and commercials",
      "Short films and independent projects",
      "Digital and web content",
      "OTT series and features",
    ],
  },
];

const Services = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-20 md:py-28 overflow-hidden">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-3xl"
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4"
            >
              Services
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-6"
            >
              What We Offer
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Comprehensive casting support tailored to the needs of production teams and casting directors.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="space-y-12 md:space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.05, ease: "easeOut" }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <motion.div 
                  className={index % 2 === 1 ? "lg:order-2" : ""}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center"
                    >
                      <service.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                    </motion.div>
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                </motion.div>
                
                <motion.div 
                  className={`bg-secondary p-6 md:p-8 rounded-lg ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    Key Areas
                  </h3>
                  <motion.ul 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    {service.details.map((detail, detailIndex) => (
                      <motion.li 
                        key={detail} 
                        variants={itemVariants}
                        className="flex items-start gap-3 text-foreground"
                      >
                        <motion.span 
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + detailIndex * 0.1, type: "spring" }}
                          className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" 
                        />
                        {detail}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold mb-4"
            >
              Need Casting Support?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-primary-foreground/80 mb-8"
            >
              Get in touch to discuss how we can assist with your project's casting requirements.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="xl"
                className="bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
