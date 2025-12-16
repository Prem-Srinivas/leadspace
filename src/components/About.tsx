import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Layers, Wallet, Target } from "lucide-react";

const stats = [
  { value: "500+", label: "Cities Covered", icon: MapPin },
  { value: "50+", label: "Media Types", icon: Layers },
  { value: "1000+", label: "Campaigns", icon: Target },
  { value: "₹10K", label: "Starting Budget", icon: Wallet },
];

const features = [
  {
    icon: MapPin,
    title: "Nationwide Coverage",
    description: "Extensive network across all major cities and towns in India",
  },
  {
    icon: Layers,
    title: "All Media Types",
    description: "Complete range of outdoor advertising formats and solutions",
  },
  {
    icon: Wallet,
    title: "Budget-Friendly",
    description: "Flexible pricing to suit campaigns of all sizes",
  },
  {
    icon: Target,
    title: "Expert Planning",
    description: "Strategic placement for maximum impact and ROI",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.05),transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-8 md:p-12 mb-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-3 text-accent" />
                <div className="text-3xl md:text-5xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
              About LeadSpace
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Maximizing Brand
              <br />
              <span className="text-gradient">Visibility</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              LeadSpace is dedicated to maximizing your brand visibility through
              strategic outdoor advertising placements across India. We connect
              brands with their target audiences through innovative outdoor media
              solutions.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-accent font-medium hover:gap-4 transition-all duration-300"
            >
              Start Your Campaign
              <span className="w-8 h-0.5 bg-accent" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="group p-6 rounded-2xl bg-card hover:bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
