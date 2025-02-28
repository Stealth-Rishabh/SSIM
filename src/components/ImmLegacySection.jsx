import { motion, useInView } from "framer-motion";
import { useEffect, useState, useMemo, useRef } from "react";

const ImmLegacySection = () => {
  const stats = useMemo(
    () => [
      {
        number: 350,
        suffix: "+",
        title: "Corporate",
        description: "Partners",
      },
      {
        number: 30,
        suffix: "+",
        title: "Years",
        description: "of Excellence",
      },
      {
        number: 5000,
        suffix: "+",
        title: "Alumni",
        description: "Network",
      },
      {
        number: 35,
        suffix: "+",
        title: "Full Time",
        description: "Faculty",
      },
    ],
    []
  );

  const [animatedNumbers, setAnimatedNumbers] = useState(stats.map(() => 0));

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    if (!isInView) return; // Only animate when the section is in view

    const duration = 2000; // Animation duration in ms
    const startTime = performance.now();

    const animate = () => {
      const elapsedTime = performance.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      setAnimatedNumbers(
        stats.map((stat) => Math.floor(progress * stat.number))
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, stats]);

  return (
    <section ref={sectionRef} className="w-full py-8 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-900 p-8 rounded-lg text-center hover:bg-blue-900 transition-all duration-300"
            >
              <h3 className="text-white text-4xl font-bold mb-2">
                {animatedNumbers[index]}
                {stat.suffix}
              </h3>
              <p className="text-white text-xl font-semibold mb-1">
                {stat.title}
              </p>
              <p className="text-white text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImmLegacySection;
