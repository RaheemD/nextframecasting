import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About = () => {
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
              About Us
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-6"
            >
              Our Approach to Casting
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Professional casting support built on organization, communication, and attention to detail.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Next Frame Casting works as a casting support and talent coordination office. 
                  The focus is on assisting casting directors with talent sourcing, coordination, 
                  and shortlisting while maintaining organized talent data for efficient casting workflows.
                </p>
                <p>
                  The goal is to bridge the gap between talent and casting requirements through 
                  clear communication, professional coordination, and structured submissions.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-secondary p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To streamline the casting process by providing reliable coordination 
                  and organized talent management for production teams.
                </p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-secondary p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">Our Values</h3>
                <motion.ul 
                  variants={containerVariants}
                  className="space-y-2 text-muted-foreground"
                >
                  {[
                    "Professional communication at every step",
                    "Organized and structured workflows",
                    "Attention to casting requirements",
                    "Respect for talent and production teams"
                  ].map((value, index) => (
                    <motion.li 
                      key={value}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <motion.span 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + 0.1 * index, type: "spring" }}
                        className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" 
                      />
                      {value}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Info Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="container-main">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { label: "Short Films", value: "Films" },
              { label: "Advertisements", value: "Ads" },
              { label: "Digital Content", value: "Digital" },
              { label: "OTT Platforms", value: "OTT" },
            ].map((item, index) => (
              <motion.div 
                key={item.label} 
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="space-y-2 cursor-default"
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, type: "spring", stiffness: 200 }}
                  className="text-2xl md:text-3xl font-semibold"
                >
                  {item.value}
                </motion.div>
                <div className="text-sm text-primary-foreground/70">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
