import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Film, Users, ClipboardList, Mic } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Casting Assistance",
    description: "Support for casting directors during the entire casting process.",
  },
  {
    icon: Users,
    title: "Talent Coordination",
    description: "Managing communication and organization of actors and artists.",
  },
  {
    icon: ClipboardList,
    title: "Actor Shortlisting",
    description: "Filtering talent profiles based on project requirements.",
  },
  {
    icon: Mic,
    title: "Audition Support",
    description: "Structured casting support across multiple content formats.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-secondary overflow-hidden">
        {/* Background decoration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-foreground blur-3xl pointer-events-none"
        />
        
        <div className="container-main py-20 md:py-32 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4"
            >
              Next Frame Casting
            </motion.span>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight mb-6"
            >
              Casting & Talent<br />Coordination
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl"
            >
              Assistant casting support for films, ads, digital content & OTT platforms.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/submit-profile">
                    Submit Your Profile
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/contact">Work With Us</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Element */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-0 left-0 right-0 h-px bg-border origin-left" 
        />
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Bridging Talent & Opportunity
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Next Frame Casting is a casting and talent coordination initiative focused on 
              supporting casting directors and filmmakers by organizing, shortlisting, and 
              coordinating talent for various projects including short films, advertisements, 
              digital campaigns, and OTT content.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-secondary">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
              What We Do
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Our Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-background p-6 md:p-8 rounded-lg shadow-soft hover:shadow-large transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-8 h-8 text-foreground mb-4 group-hover:text-primary transition-colors" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-10"
          >
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Ready to Connect?
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Looking to submit your profile or collaborate on upcoming projects? 
              Submit your details and let us connect you with the right opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="xl"
                className="bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <Link to="/submit-profile">
                  Submit Your Profile
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-background bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
