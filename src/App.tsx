import { Header } from "./components/Header";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { ProductCategory } from "./components/ProductCategory";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Badge } from "./components/ui/badge";
import { 
  Leaf, 
  Shield, 
  Truck, 
  Award, 
  Droplets, 
  Flower2,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  LeafyGreen,
  Pipette,
  CheckCircle2,
  Moon,
  Heart,
  Globe,
  BadgeCheck
} from "lucide-react";
import essentialOilBottle from "figma:asset/8d31df03a7f28de22d0b56167eb673f40183f3e8.png";
import { useEffect } from "react";

export default function App() {
  const essentialOils = [
    "Anise Oil", "Basil Oil", "Citronella Oil", "Camphor Oil", "Cajeput Oil",
    "Cedarwood Oil", "Chamomile Oil", "Clary Sage Oil", "Calendula Oil", "Eucalyptus Oil",
    "Frankincense Oil", "Ginger Lily Oil", "Geranium Oil", "Jasmine Oil", "Juniper Berry Oil",
    "Lemongrass Oil", "Lemon Oil", "Lime Oil", "Lavender Oil", "Mandarin Oil",
    "Neroli Oil", "Orange Oil", "Oregano Oil", "Onion Oil", "Pine Oil",
    "Rosemary Oil", "Rose Oil", "Sandalwood Oil", "Sage Oil", "Tea Tree Oil",
    "Vetiver Oil", "Vanilla Oil", "Wintergreen Oil", "Ylang Ylang Oil"
  ];

  const mentholProducts = [
    "Mentha Arvensis Natural", "Menthol Bold Crystals", "Menthol Medium Crystals",
    "Menthol Powder Dry", "Liquid Menthol L-Menthol 75%", "Liquid Menthol L-Menthol 95%",
    "Mint Terpenes Natural 98%", "L-Menthol 38-40% TMC 55%", "Peppermint Oil De-Mentholised",
    "Crude Peppermint Oil"
  ];

  const carrierOils = [
    "Almond Oil", "Apricot Oil", "Argan Oil", "Arachis Oil", "Avocado Oil",
    "Aniseed Oil", "Black Seed Oil/Kalonji Oil", "Coconut Oil", "Castor Oil", "Carrot Seed Oil",
    "Cashew Nut Oil", "Cucumber Oil", "Corn Oil", "Evening Primrose Oil", "Flax Seed/Linseed Oil",
    "Grape Seed Oil", "Hemp Seed Oil", "Hazelnut Oil", "Jojoba Oil", "Jojoba Clear Oil",
    "Muskmelon Oil", "Moringa Seed Oil", "Neem Oil", "Olive Oil", "Pumpkin Seed Oil",
    "Rosehip Oil", "Saw Palmetto Oil", "Sea Buckthorn Oil", "Walnut Oil", "Watermelon Oil",
    "Wheat Germ Oil", "Brown Sesame Seed Oil", "White Sesame Seed Oil"
  ];

  const spiceOils = [
    "Ajwain Oil", "Black Pepper Oil", "Bay Leaf Oil", "Cardamom Oil", "Carrot Seed Oil",
    "Clove Oil", "Coriander Oil", "Cinnamon Oil", "Cinnamon Leaf Oil", "Caraway Oil",
    "Dill Oil", "Fennel Oil", "Fenugreek Oil", "Ginger Oil", "Garlic Oil",
    "Nutmeg Oil", "Turmeric Oil", "Thyme Oil"
  ];

  const productCategories = [
    {
      title: "Essential Oils",
      icon: Droplets,
      products: essentialOils
    },
    {
      title: "Menthol & Mint Products",
      icon: LeafyGreen,
      products: mentholProducts
    },
    {
      title: "Carrier Oils",
      icon: Pipette,
      products: carrierOils
    },
    {
      title: "Spice Oils",
      icon: Flower2,
      products: spiceOils
    }
  ];

  const certifications = [
    {
      icon: Award,
      title: "ISO 9001:2015",
      description: "Quality Management System ensuring consistent product excellence"
    },
    {
      icon: BadgeCheck,
      title: "GMP Certified",
      description: "Good Manufacturing Practice for safe and pure products"
    },
    {
      icon: Leaf,
      title: "100% Organic",
      description: "Environment-friendly, no harm to nature guarantee"
    }
  ];

  useEffect(() => {
    // Update document title
    document.title = "Hariom Chemicals - Premium Natural & Essential Oils | Chandausi, Uttar Pradesh";
    
    // Add structured data for SEO
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.hariomchemicals.com",
      "name": "Hariom Chemicals",
      "image": "https://www.hariomchemicals.com/og-image.png",
      "description": "Premium supplier of natural and essential oils, menthol products, carrier oils, and spice oils. ISO 9001:2015 and GMP certified.",
      "url": "https://www.hariomchemicals.com",
      "telephone": "+91-9412145106",
      "email": "hariomchemicalschd@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hapurwala Bagh, Sambhal Gate",
        "addressLocality": "Chandausi",
        "addressRegion": "Sambhal, Uttar Pradesh",
        "postalCode": "244412",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.4527",
        "longitude": "78.7810"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "priceRange": "$$",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      }
    };

    // Add schema script to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative pt-16">
        <div className="relative h-[600px] overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1656658686417-bdc953f610bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJiYWwlMjBwbGFudHMlMjBsYXZlbmRlciUyMGZpZWxkfGVufDF8fHx8MTc2MDE5MTE0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Natural Herbs Field"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-600/70"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-5xl md:text-6xl mb-6">Hariom Chemicals</h1>
                <p className="text-xl md:text-2xl mb-8">
                  Premium Natural & Essential Oils
                </p>
                <p className="text-lg mb-8 opacity-90">
                  Your trusted source for pure, high-quality essential oils, mint products, and natural aromatic solutions from Chandausi, Uttar Pradesh
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Explore Products
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-transparent border-white text-white hover:bg-white hover:text-green-600"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Features Ticker */}
      <div className="bg-gradient-to-r from-green-700 via-green-600 to-green-700 py-4 overflow-hidden">
        <div className="ticker-wrap">
          <div className="ticker flex items-center gap-12 animate-ticker">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 whitespace-nowrap">
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>100+ Products</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>GMP Certified</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>100% Organic & Natural</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Pan-India Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Premium Quality</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Therapeutic Grade Oils</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 text-green-700">About Hariom Chemicals</h2>
              <p className="mb-4 text-muted-foreground">
                Located in the heart of Chandausi, Uttar Pradesh, Hariom Chemicals has established itself as a leading supplier of premium natural and essential oils. We specialize in extracting and supplying the finest quality mint products, essential oils, carrier oils, and spice oils to industries across India and beyond.
              </p>
              <p className="mb-4 text-muted-foreground">
                Our expertise lies in maintaining the natural essence and therapeutic properties of every oil we produce. With stringent quality control measures and state-of-the-art extraction facilities, we ensure that each product retains its purity, aroma, and beneficial properties.
              </p>
              <p className="mb-4 text-muted-foreground">
                We take pride in sourcing the finest herbs and plants, working closely with local farmers to ensure sustainable and ethical practices. Our comprehensive product range serves diverse industries including pharmaceuticals, cosmetics, aromatherapy, and food & beverage.
              </p>
              <p className="text-muted-foreground">
                At Hariom Chemicals, we believe in the power of nature. Our commitment to quality, authenticity, and customer satisfaction has made us a preferred partner for businesses seeking genuine essential oils and natural products.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src={essentialOilBottle}
                alt="Premium Essential Oil with Rose Petals"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blissful Collection Section */}
      <section id="blissful" className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-purple-700">Blissful Collection</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Expertly-crafted aromatherapy blends to help you achieve inner calm and the ultimate in relaxation. Available in different concentrations for use as massage oil, diffusers, or roll-on applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="border-2 border-purple-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Moon className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-purple-700">Blissful Dreams Blend</CardTitle>
                </div>
                <CardDescription className="text-base">
                  This blend of lavender, chamomile, sandalwood, sweet marjoram, and ylang-ylang creates a calming environment to help one rest better at bedtime.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700">Lavender</Badge>
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700">Chamomile</Badge>
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700">Sandalwood</Badge>
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700">Sweet Marjoram</Badge>
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700">Ylang-Ylang</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-purple-700">Blissful Calm Blend</CardTitle>
                </div>
                <CardDescription className="text-base">
                  This blend of lavender, jasmine, basil, rose, chamomile, and clary sage invokes a sense of tranquility, allowing stresses and tension to melt away.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700">Lavender</Badge>
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700">Jasmine</Badge>
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700">Basil</Badge>
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700">Rose</Badge>
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700">Chamomile</Badge>
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700">Clary Sage</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXZlbmRlciUyMGFyb21hdGhlcmFweSUyMHJlbGF4YXRpb258ZW58MXx8fHwxNzYwMTkyNDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Lavender Aromatherapy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="mb-2">Sleep & Relaxation</h3>
                  <p className="text-sm opacity-90">Blissful Dreams for restful nights</p>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3NlbnRpYWwlMjBvaWwlMjBkaWZmdXNlciUyMGNhbG18ZW58MXx8fHwxNzYwMTkyNDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Essential Oil Diffuser"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="mb-2">Stress Relief</h3>
                  <p className="text-sm opacity-90">Blissful Calm for tranquility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Videos Showcase */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-green-700">Product Showcase</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See our premium menthol products in action - crystal clear quality you can trust
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Video 1: Isoborneol Flakes */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow border-2 border-green-100">
              <CardContent className="p-0">
                <div className="relative bg-gray-100 aspect-[9/16]">
                  {/* Placeholder for video - Replace with actual video once uploaded */}
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    poster="/videos/isoborneol-thumbnail.jpg"
                  >
                    <source src="/videos/isoborneol-flakes.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-green-700">Isoborneol Flakes</h3>
                  <p className="text-sm text-muted-foreground">
                    High-purity isoborneol flakes perfect for pharmaceutical and cosmetic applications. Witness the crystal-clear quality and perfect flake structure.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Video 2: Menthol Crystals */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow border-2 border-green-100">
              <CardContent className="p-0">
                <div className="relative bg-gray-100 aspect-[9/16]">
                  {/* Placeholder for video - Replace with actual video once uploaded */}
                <video 
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  poster="/videos/menthol-thumbnail.jpg"
                >
                  <source src="/videos/menthol-crystals.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-green-700">Menthol Crystals</h3>
                  <p className="text-sm text-muted-foreground">
                    Premium menthol bold crystals extracted from natural Mentha Arvensis. See the brilliant clarity and perfect crystalline structure of our product.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> These product videos showcase the quality and purity of our menthol products. Contact us for bulk orders and custom requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-green-700">Our Complete Product Range</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer an extensive collection of over 100+ natural and essential oils, carefully extracted to preserve their purity and potency
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <ProductCategory
                key={index}
                title={category.title}
                icon={category.icon}
                products={category.products}
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1667486769120-eba98111f363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW50JTIwcGxhbnRzJTIwbGVhdmVzJTIwbmF0dXJhbHxlbnwxfHx8fDE3NjAxOTExNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fresh Mint Leaves"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="mb-2">Fresh Natural Sources</h3>
                  <p className="text-sm opacity-90">Premium quality herbs and plants</p>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1622952750650-6b7be2d9f37c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljZXMlMjBhcm9tYXRoZXJhcHklMjBib3R0bGVzfGVufDF8fHx8MTc2MDE5MTE0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Spices and Aromatherapy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="mb-2">Aromatic Excellence</h3>
                  <p className="text-sm opacity-90">Pure essential and spice oils</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16 pt-12 border-t border-border">
            <div className="text-center mb-10">
              <h3 className="text-3xl mb-3 text-green-700">Our Certifications</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Quality assured products backed by international certifications
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-green-100">
                  <CardHeader>
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <cert.icon className="w-10 h-10 text-green-600" />
                    </div>
                    <CardTitle className="text-green-700">{cert.title}</CardTitle>
                    <CardDescription className="text-base">{cert.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Why Choose Hariom Chemicals?</h2>
            <p className="text-green-100 max-w-2xl mx-auto">
              Committed to delivering nature's best with uncompromising quality and authenticity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="mb-2">100% Natural</h3>
              <p className="text-green-100">Pure, natural essential oils extracted from premium quality herbs and plants</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="mb-2">Quality Assured</h3>
              <p className="text-green-100">ISO 9001:2015 & GMP certified ensuring the highest purity and therapeutic grade</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="mb-2">Reliable Delivery</h3>
              <p className="text-green-100">Efficient pan-India delivery network ensuring fresh products reach you on time</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="mb-2">Expert Solutions</h3>
              <p className="text-green-100">Custom blends and technical support from experienced aromatherapy professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-green-700">Applications & Industries</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our products serve a wide range of industries worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Pharmaceuticals</CardTitle>
                <CardDescription>Therapeutic grade oils for medicinal applications</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flower2 className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Cosmetics</CardTitle>
                <CardDescription>Natural ingredients for beauty and skincare products</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Aromatherapy</CardTitle>
                <CardDescription>Pure essential oils for wellness and relaxation</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Food & Beverage</CardTitle>
                <CardDescription>Food-grade flavoring and aromatic solutions</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-green-700">Get in Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about our natural and essential oils? Our team is ready to assist you with product inquiries, bulk orders, custom blends, and special requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="mb-1">Phone</h4>
                    <p className="text-muted-foreground">+91 9412145106</p>
                    <p className="text-muted-foreground">+91 9045883811</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="mb-1">Email</h4>
                    <p className="text-muted-foreground">hariomchemicalschd@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="mb-1">Website</h4>
                    <p className="text-muted-foreground">www.hariomchemicals.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      Hapurwala Bagh, Sambhal Gate<br />
                      Chandausi (Sambhal)<br />
                      Uttar Pradesh - 244412, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-8 rounded-lg overflow-hidden shadow-lg h-[200px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.5!2d78.78!3d28.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzAwLjAiTiA3OMKwNDYnNDguMCJF!5e0!3m2!1sen!2sin!4v1639999999999!5m2!1sen!2sin&q=Chandausi+Uttar+Pradesh+India"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hariom Chemicals Location - Chandausi, Uttar Pradesh"
                ></iframe>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you shortly</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Phone Number" />
                  </div>
                  <div>
                    <Input placeholder="Product of Interest" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message / Requirements" rows={5} />
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="mb-4 text-green-400">Hariom Chemicals</h3>
              <p className="text-gray-400 mb-4">
                Premium natural and essential oils from Chandausi, Uttar Pradesh. Your trusted source for purity and quality.
              </p>
              <div className="space-y-1 text-gray-400 text-sm">
                <p>ISO 9001:2015 Certified</p>
                <p>GMP Certified</p>
                <p>100% Organic</p>
              </div>
            </div>

            <div>
              <h4 className="mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-green-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-green-400 transition-colors">About Us</a></li>
                <li><a href="#products" className="hover:text-green-400 transition-colors">Products</a></li>
                <li><a href="#blissful" className="hover:text-green-400 transition-colors">Blissful Collection</a></li>
                <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Product Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#products" className="hover:text-green-400 transition-colors">Essential Oils</a></li>
                <li><a href="#products" className="hover:text-green-400 transition-colors">Menthol & Mint Products</a></li>
                <li><a href="#products" className="hover:text-green-400 transition-colors">Carrier Oils</a></li>
                <li><a href="#products" className="hover:text-green-400 transition-colors">Spice Oils</a></li>
                <li><a href="#blissful" className="hover:text-green-400 transition-colors">Aromatherapy Blends</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+91 9412145106</li>
                <li>+91 9045883811</li>
                <li>hariomchemicalschd@gmail.com</li>
                <li>www.hariomchemicals.com</li>
                <li>Chandausi, Uttar Pradesh</li>
                <li>India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Hariom Chemicals. All rights reserved. | Natural & Essential Oils</p>
          </div>
        </div>
      </footer>
    </div>
  );
}