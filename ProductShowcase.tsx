import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const products = {
  soaps: [
    {
      id: 1,
      name: "Lavender Dreams",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1549439602-43ebca2327af",
    },
    {
      id: 2,
      name: "Rose Garden",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1469796466635-455ede028aca",
    },
    {
      id: 3,
      name: "Ocean Breeze",
      price: "$13.99",
      image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd",
    },
  ],
  candles: [
    {
      id: 4,
      name: "Vanilla Twilight",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1599313804818-2eaba0b14cba",
    },
    {
      id: 5,
      name: "Forest Pine",
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1570823635306-250abb06d4b3",
    },
    {
      id: 6,
      name: "Citrus Grove",
      price: "$23.99",
      image: "https://images.unsplash.com/photo-1617041261380-15cf80c39f26",
    },
  ],
};

function ProductCard({ product, index }: { product: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="overflow-hidden bg-white/10 backdrop-blur-lg border-white/10 hover:bg-white/20 transition-colors">
        <CardContent className="p-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white">{product.name}</h3>
            <p className="text-teal-400 font-medium mt-1">{product.price}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ProductShowcase() {
  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Products
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Each product is carefully crafted using premium natural ingredients,
            ensuring the highest quality and a luxurious experience.
          </p>
        </div>

        <div className="space-y-12">
          {/* Soaps Section */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Handmade Soaps
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.soaps.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>

          {/* Candles Section */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Scented Candles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.candles.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
