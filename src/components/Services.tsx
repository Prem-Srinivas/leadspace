import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Billboards & Hoardings",
    description: "Large format displays for maximum visibility and impact across highways and city centers.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
    tag: "High Impact",
  },
  {
    title: "Metro Pillars",
    description: "Strategic placements in metro stations and platforms reaching millions daily.",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&h=400&fit=crop",
    tag: "Urban Reach",
  },
  {
    title: "Bus Shelters",
    description: "Transit advertising at bus stops and shelters for consistent brand exposure.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
    tag: "Street Level",
  },
  {
    title: "Pole Kiosks",
    description: "Street-level advertising on utility poles and kiosks in high-traffic areas.",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop",
    tag: "Hyperlocal",
  },
  {
    title: "Wall Paintings",
    description: "Creative wall murals and painted advertisements that become landmarks.",
    image: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=600&h=400&fit=crop",
    tag: "Creative",
  },
  {
    title: "Digital Screens",
    description: "Dynamic digital displays for modern, flexible campaign management.",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=600&h=400&fit=crop",
    tag: "Digital",
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Media <span className="text-gradient">Categories</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive outdoor advertising solutions for every campaign need
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-xs font-medium text-accent mb-2 uppercase tracking-wider">
                  {service.tag}
                </span>
                <h3 className="text-xl font-display font-bold mb-2 group-hover:text-gradient transition-all">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                  Learn More
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 rounded-3xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border hover:border-primary text-foreground font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All Services
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
