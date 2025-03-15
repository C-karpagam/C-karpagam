import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-teal-900/40 to-gray-900/40 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
          Handcrafted with Nature's Finest
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          Discover our collection of artisanal soaps and scented candles,
          made with pure natural ingredients and essential oils.
        </p>
        <Button
          size="lg"
          className="bg-teal-500/80 hover:bg-teal-500 text-white backdrop-blur-sm
            shadow-[0_0_15px_rgba(20,184,166,0.5)] transition-all duration-300
            hover:shadow-[0_0_25px_rgba(20,184,166,0.7)]"
        >
          Explore Products
        </Button>
      </motion.div>
    </section>
  );
}
