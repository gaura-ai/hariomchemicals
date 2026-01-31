import { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Play, X, Maximize2, Sparkles, LeafyGreen, Droplets, Flower2, Package, Image as ImageIcon } from 'lucide-react';
import { Badge } from './ui/badge';
import ReactMarkdown from 'react-markdown';

type MediaType = 'video' | 'image';

interface Product {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string; // Markdown content
  thumbnail: string;
  mediaUrl: string;
  mediaType: MediaType;
  icon: typeof Sparkles;
  category: string;
  specifications?: {
    purity?: string;
    cas?: string;
    origin?: string;
    packaging?: string[];
    [key: string]: any;
  };
}

export function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sample products with markdown descriptions
  const products: Product[] = [
    {
      id: 'isoborneol-flakes',
      title: 'Isoborneol Flakes',
      shortDescription: 'High-purity isoborneol flakes perfect for pharmaceutical and cosmetic applications.',
      fullDescription: `# Isoborneol Flakes - Premium Grade

## Product Overview
Our **Isoborneol Flakes** are crystalline compounds derived from natural sources, offering exceptional purity and quality for industrial and pharmaceutical applications.

## Key Features
- ✅ **99.5% Purity** - Laboratory tested and certified
- ✅ **Crystal Clear** - Perfect flake structure
- ✅ **Natural Source** - Extracted from Borneol
- ✅ **GMP Certified** - Manufactured in certified facilities

## Applications
- 🔬 Pharmaceutical intermediates
- 💄 Cosmetic formulations
- 🧪 Chemical synthesis
- 🌿 Aromatherapy products

## Technical Specifications
- **Appearance:** White crystalline flakes
- **Melting Point:** 212-214°C
- **Solubility:** Soluble in alcohol, ether
- **Storage:** Cool, dry place away from light

## Why Choose Our Isoborneol?
Our isoborneol flakes undergo rigorous quality testing to ensure:
1. Consistent crystalline structure
2. High purity levels
3. Free from contaminants
4. Optimal shelf life

> *"Perfect for pharmaceutical and cosmetic applications requiring high-purity compounds."*

## Packaging Available
- 1 kg HDPE containers
- 5 kg aluminum containers
- 25 kg fiber drums
- Custom bulk packaging

Contact us for bulk orders and custom requirements!`,
      thumbnail: '/videos/isoborneol-thumbnail.jpg',
      mediaUrl: '/videos/isoborneol-flakes.mp4',
      mediaType: 'video',
      icon: Sparkles,
      category: 'Menthol Products',
      specifications: {
        purity: '99.5%',
        cas: '124-76-5',
        origin: 'Natural Borneol Extract',
        packaging: ['1kg', '5kg', '25kg', 'Bulk']
      }
    },
    {
      id: 'menthol-crystals',
      title: 'Menthol Bold Crystals',
      shortDescription: 'Premium menthol bold crystals extracted from natural Mentha Arvensis.',
      fullDescription: `# Menthol Bold Crystals - Natural & Pure

## Product Description
Our **Menthol Bold Crystals** are 100% natural crystals extracted from *Mentha Arvensis* (Indian Mint), known for their cooling properties and therapeutic benefits.

## Key Benefits
- ❄️ **Natural Cooling Effect** - Intense, long-lasting cooling sensation
- 🌿 **100% Natural** - No synthetic additives
- 💎 **Bold Crystals** - Large, clear crystalline structure
- 🏆 **Premium Quality** - ISO 9001:2015 certified

## Common Applications
### Pharmaceutical Industry
- Pain relief balms and ointments
- Cough drops and lozenges
- Nasal decongestants
- Topical analgesics

### Food & Beverage
- Flavoring agent for confectionery
- Chewing gum production
- Beverages and soft drinks
- Oral care products

### Cosmetics & Personal Care
- Cooling creams and lotions
- Shampoos and conditioners
- Toothpaste and mouthwash
- Aromatherapy products

## Technical Details
- **Botanical Name:** *Mentha Arvensis*
- **Purity:** 99.9%+ (USP/BP Grade)
- **Appearance:** Clear, bold hexagonal crystals
- **Melting Point:** 42-44°C
- **Odor:** Characteristic minty aroma

## Quality Assurance
Each batch is tested for:
✓ Purity analysis  
✓ Heavy metal content  
✓ Microbial contamination  
✓ Residual pesticides  

## Storage Instructions
Store in a cool, dry place in tightly sealed containers. Keep away from heat and direct sunlight.

> *"The gold standard for natural menthol - trusted by pharmaceutical and food industries worldwide."*

## Available Packaging
- 500g glass jars
- 1kg HDPE bottles
- 5kg containers
- 25kg fiber drums
- Bulk quantities available

**Minimum Order:** 1kg  
**Lead Time:** 3-5 business days`,
      thumbnail: '/videos/menthol-thumbnail.jpg',
      mediaUrl: '/videos/menthol-crystals.mp4',
      mediaType: 'video',
      icon: LeafyGreen,
      category: 'Menthol Products',
      specifications: {
        purity: '99.9%+',
        cas: '2216-51-5',
        origin: 'Mentha Arvensis',
        packaging: ['500g', '1kg', '5kg', '25kg', 'Bulk']
      }
    },
    {
      id: 'thaal-kapoor',
      title: 'Thaal Kapoor (Slab Camphor)',
      shortDescription: 'Premium grade slab camphor (Thaal Kapoor) with characteristic aroma and exceptional purity.',
      fullDescription: `# Thaal Kapoor - Premium Slab Camphor

## Product Overview
Our **Thaal Kapoor** (Slab Camphor) is a high-quality crystalline substance with a strong, penetrating aroma. It is widely used in religious ceremonies, pharmaceutical formulations, and as a natural pest repellent.

## Key Features
- ✨ **Exceptional Purity** - Crystal clear appearance
- 🌬️ **Strong Aroma** - Characteristic refreshing scent
- 🕉️ **Religious Use** - Preferred for traditional ceremonies
- 🛡️ **Natural Repellent** - Effective against moths and insects

## Applications
- **Religious:** Traditional Indian rituals and Havans
- **Pharmaceutical:** Balms, ointments, and decongestants
- **Home Care:** Natural air freshener and moth repellent
- **Health:** Used in steam inhalation for respiratory relief

## Technical Specifications
- **Appearance:** Large translucent slabs/tiles
- **Sublimation:** Sublimates slowly at room temperature
- **Purity:** 99%+ pure camphor
- **Storage:** Store in airtight containers in a cool, dry place

## Why Choose Our Thaal Kapoor?
We provide camphor that is free from wax and other additives, ensuring it burns completely without leaving residue and provides the most authentic aroma.

> *"Traditional purity meeting modern quality standards for versatile applications."*

## Available Packaging
- 250g packs
- 500g containers
- 1kg boxes
- Bulk cartons (25kg)

**Contact us for wholesale pricing and bulk requirements.**`,
      thumbnail: '/videos/thaal-kapoor-thumbnail.png',
      mediaUrl: '/videos/thaal-kapoor.mp4',
      mediaType: 'video',
      icon: Sparkles,
      category: 'Camphor Products',
      specifications: {
        purity: '99%+',
        origin: 'Premium Distillation',
        packaging: ['250g', '500g', '1kg', 'Bulk']
      }
    },
    {
      id: 'peppermint-oil',
      title: 'Peppermint Essential Oil',
      shortDescription: '100% pure peppermint essential oil with refreshing minty aroma and therapeutic properties.',
      fullDescription: `# Peppermint Essential Oil - Therapeutic Grade

## Overview
Our **Peppermint Essential Oil** is steam-distilled from fresh *Mentha Piperita* leaves, delivering a pure, potent oil with a refreshing, minty aroma.

## Product Highlights
- 🌿 **100% Pure & Natural** - No additives or carriers
- 🔬 **Therapeutic Grade** - Highest quality standards
- 🍃 **Fresh Aroma** - Strong, refreshing mint scent
- 🏅 **GMP Certified** - Quality assured

## Therapeutic Benefits
### Physical Benefits
- Relieves headaches and migraines
- Eases muscle pain and tension
- Supports respiratory health
- Aids digestion
- Natural energizer

### Mental & Emotional
- Improves focus and concentration
- Reduces mental fatigue
- Alleviates stress
- Uplifts mood

## Uses & Applications

### Aromatherapy
Add 3-5 drops to a diffuser for:
- Mental clarity
- Respiratory support
- Energy boost
- Fresh environment

### Topical Application
Dilute with carrier oil (2-3%) for:
- Muscle massage
- Headache relief
- Cooling sensation
- Skin care

### Home & Personal Care
- Natural air freshener
- Cleaning products
- Dental care products
- Insect repellent

## Composition
**Main Constituents:**
- Menthol: 40-45%
- Menthone: 20-30%
- Menthyl Acetate: 5-10%
- 1,8-Cineole: 5-10%

## Safety Information
⚠️ **Important:**
- Always dilute before topical use
- Not for children under 6
- Avoid during pregnancy (first trimester)
- May cause skin sensitivity in some individuals
- Keep away from eyes and mucous membranes

## Product Specifications
- **Botanical Name:** *Mentha Piperita*
- **Extraction:** Steam Distillation
- **Part Used:** Fresh leaves
- **Color:** Clear to pale yellow
- **Consistency:** Thin
- **Aromatic:** Strong, fresh, minty

## Packaging Options
- 10ml amber glass bottles
- 30ml amber glass bottles
- 100ml aluminum bottles
- 1L HDPE containers
- 5L containers
- Bulk drums available

## Storage
Store in a cool, dark place. Keep tightly sealed. Use within 2 years of opening.

> *"A versatile essential oil that's a must-have in every aromatherapy collection."*

**Perfect for:** Personal use, aromatherapy practices, cosmetic formulation, and natural product manufacturing.`,
      thumbnail: '/videos/peppermint-oil.png',
      mediaUrl: '/videos/peppermint-oil.png',
      mediaType: 'image',
      icon: Droplets,
      category: 'Essential Oils',
      specifications: {
        purity: '100% Pure',
        cas: '8006-90-4',
        origin: 'Mentha Piperita',
        packaging: ['10ml', '30ml', '100ml', '1L', '5L']
      }
    },
    {
      id: 'lavender-oil',
      title: 'Lavender Essential Oil',
      shortDescription: 'Pure lavender essential oil known for its calming properties and beautiful floral aroma.',
      fullDescription: `# Lavender Essential Oil - Premium Quality

## Product Description
Our **Lavender Essential Oil** is carefully distilled from *Lavandula Angustifolia* flowers, renowned worldwide for its calming and therapeutic properties.

## Key Features
- 💜 **Premium Quality** - Single-source, high altitude lavender
- 🌸 **Sweet Floral Aroma** - Classic, soothing lavender scent
- 🧘 **Relaxation** - Promotes calm and peaceful sleep
- ✨ **Versatile** - Multiple applications

## Health Benefits

### Relaxation & Sleep
- Promotes restful sleep
- Reduces anxiety and stress
- Calms nervous system
- Eases restlessness

### Skin Care
- Soothes minor burns and cuts
- Reduces acne and blemishes
- Anti-inflammatory properties
- Promotes skin healing

### Pain Relief
- Relieves headaches
- Eases muscle tension
- Reduces joint pain
- Soothes insect bites

## Popular Uses

### For Sleep & Relaxation
1. Add 3-4 drops to a diffuser before bedtime
2. Mix with carrier oil for a calming massage
3. Add to bathwater for a relaxing soak
4. Spray on pillows and linens

### For Skin Care
1. Add 2-3 drops to moisturizer
2. Dilute for spot treatment
3. Mix with aloe vera for sunburn relief
4. Add to facial toner

### For Home
1. Natural air freshener
2. Linen spray
3. Cleaning solutions
4. Drawer sachets

## Blends Well With
- Chamomile
- Clary Sage
- Geranium
- Rose
- Bergamot
- Frankincense

## Technical Specifications
- **Botanical Name:** *Lavandula Angustifolia*
- **Origin:** High-altitude farms
- **Extraction Method:** Steam distillation
- **Part Used:** Flowering tops
- **Color:** Clear to pale yellow
- **Aroma:** Sweet, floral, herbaceous

## Chemical Composition
- Linalool: 25-38%
- Linalyl Acetate: 25-45%
- Camphor: 1%
- β-Caryophyllene: 3-7%

## Quality Certifications
✓ 100% Pure & Natural  
✓ Organic Certified  
✓ GC/MS Tested  
✓ No Additives or Fillers  

## Precautions
- Dilute before topical application
- May cause drowsiness
- Not recommended during pregnancy
- Keep out of reach of children
- Avoid contact with eyes

## Packaging Available
- 5ml glass vials (retail)
- 10ml amber bottles
- 30ml amber bottles
- 100ml bottles
- 500ml aluminum containers
- 1L+ bulk containers

## Storage Recommendations
Keep in a cool, dark place. Properly sealed, our lavender oil maintains potency for 3-4 years.

> *"The most versatile essential oil - perfect for beginners and experienced aromatherapists alike."*

**Ideal for:** Home use, spa treatments, cosmetic formulation, aromatherapy practices, and natural wellness products.

---

**Contact us** for wholesale pricing and custom formulations!`,
      thumbnail: '/videos/lavender-oil.png',
      mediaUrl: '/videos/lavender-oil.png',
      mediaType: 'image',
      icon: Flower2,
      category: 'Essential Oils',
      specifications: {
        purity: '100% Pure & Organic',
        cas: '8000-28-0',
        origin: 'Lavandula Angustifolia',
        packaging: ['5ml', '10ml', '30ml', '100ml', '500ml', '1L+']
      }
    },
    {
      id: 'tea-tree-oil',
      title: 'Tea Tree Essential Oil',
      shortDescription: 'Pure Australian tea tree oil with powerful antimicrobial and purifying properties.',
      fullDescription: `# Tea Tree Essential Oil - Australian Grade

## About This Product
Our **Tea Tree Essential Oil** is sourced from premium Australian *Melaleuca Alternifolia* trees, celebrated for its powerful antimicrobial, antifungal, and antiseptic properties.

## Key Benefits
- 🦠 **Antimicrobial** - Natural germ fighter
- 🌿 **Purifying** - Cleanses and protects
- 💪 **Potent** - Highly concentrated formula
- 🇦🇺 **Australian** - Authentic source

## Primary Uses

### Skin Care & Beauty
- **Acne Treatment:** Spot treatment for blemishes
- **Scalp Health:** Reduces dandruff and itchiness
- **Nail Care:** Treats fungal infections
- **Skin Infections:** Minor cuts and wounds

### Home Cleaning
- **Disinfectant:** Natural surface cleaner
- **Mold Remover:** Prevents and treats mold
- **Laundry Boost:** Adds freshness and kills bacteria
- **Air Purifier:** Eliminates airborne bacteria

### Personal Care
- **Oral Hygiene:** Mouthwash ingredient
- **Foot Care:** Treats athlete's foot
- **Hand Sanitizer:** Natural antibacterial
- **Deodorant:** Natural freshness

## How to Use

### For Acne (Topical)
1. Dilute 1-2 drops with carrier oil
2. Apply to affected area with cotton swab
3. Leave on overnight
4. Rinse in the morning

### For Cleaning
1. Mix 10-15 drops with water in spray bottle
2. Add 1 tsp white vinegar
3. Shake well before use
4. Spray and wipe surfaces

### For Aromatherapy
1. Add 3-5 drops to diffuser
2. Purifies air and promotes clear breathing
3. Creates a fresh, clean environment

## Product Specifications
- **Botanical Name:** *Melaleuca Alternifolia*
- **Origin:** Australia
- **Extraction:** Steam distillation
- **Part Used:** Leaves and twigs
- **Color:** Clear to pale golden
- **Aroma:** Fresh, medicinal, slightly camphorous

## Active Constituents
- Terpinen-4-ol: 38-45% (key antimicrobial agent)
- γ-Terpinene: 18-28%
- α-Terpinene: 8-13%
- 1,8-Cineole: <15%

## Research-Backed Benefits
Studies show tea tree oil is effective against:
- ✓ Staphylococcus aureus (bacteria)
- ✓ Candida albicans (yeast)
- ✓ Propionibacterium acnes (acne bacteria)
- ✓ Various fungal infections

## Quality Assurance
Every batch is:
- GC/MS tested for purity
- Tested for terpinen-4-ol content (minimum 38%)
- Free from pesticides and heavy metals
- Compliant with ISO 4730 standards

## Safety Guidelines
⚠️ **Important Safety Information:**
- **DO NOT ingest** - For external use only
- Always dilute before skin application (2-5% dilution)
- Patch test before first use
- Keep away from eyes and mucous membranes
- Not for use on pets (toxic to cats and dogs)
- Store away from children

## Recommended Dilution Rates
- **Facial use:** 1-2% (1-2 drops per 10ml carrier)
- **Body use:** 2-5% (2-5 drops per 10ml carrier)
- **Cleaning:** 10-15 drops per cup of water
- **Diffusion:** 3-5 drops per 100ml water

## Packaging Options
- 10ml amber glass dropper bottles
- 30ml amber glass bottles
- 100ml aluminum bottles
- 500ml HDPE containers
- 1L containers
- 5L+ bulk packaging

## Storage & Shelf Life
- Store in cool, dark place
- Keep tightly sealed
- Shelf life: 2-3 years when properly stored
- Refrigeration extends shelf life

> *"Nature's powerful antimicrobial - an essential addition to your natural wellness and cleaning arsenal."*

## Perfect For
- Natural skincare brands
- Aromatherapy practitioners
- Natural cleaning product manufacturers
- Personal care formulations
- Spa and wellness centers

---

**Bulk orders welcome!** Contact us for wholesale pricing and custom packaging options.`,
      thumbnail: '/videos/tea-tree-oil.png',
      mediaUrl: '/videos/tea-tree-oil.png',
      mediaType: 'image',
      icon: Package,
      category: 'Essential Oils',
      specifications: {
        purity: '100% Pure Australian',
        cas: '68647-73-4',
        origin: 'Melaleuca Alternifolia',
        packaging: ['10ml', '30ml', '100ml', '500ml', '1L', '5L+']
      }
    }
  ];

  const currentProduct = products[currentIndex];

  const handlePrevious = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    setIsPlaying(false);
  };

  const handleNext = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    setIsPlaying(false);
  };

  const handleProductSelect = (index: number) => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  const handleExpand = () => {
    setIsExpanded(true);
    if (currentProduct.mediaType === 'video') {
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
          setIsPlaying(true);
        }
      }, 100);
    }
  };

  const handleClose = () => {
    setIsExpanded(false);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handlePlayPause = () => {
    if (currentProduct.mediaType === 'video' && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  useEffect(() => {
    if (videoRef.current && currentProduct.mediaType === 'video') {
      videoRef.current.load();
    }
  }, [currentIndex, currentProduct.mediaType]);

  const renderMedia = (inExpanded: boolean = false) => {
    if (currentProduct.mediaType === 'video') {
      return (
        <div className="absolute inset-0">
          <video
            key={`bg-${currentProduct.id}`}
            ref={isExpanded ? null : videoRef}
            className="w-full h-full object-cover"
            controls={!isExpanded}
            playsInline
            poster={currentProduct.thumbnail}
            onPlay={() => setIsPlaying(true)}
            onPlaying={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            loop
            controlsList="nodownload"
          >
            <source src={currentProduct.mediaUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    } else {
      // Image
      return (
        <div className="absolute inset-0">
          <img
            src={currentProduct.mediaUrl}
            alt={currentProduct.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4">
            <Badge className="bg-green-600 flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              Product Image
            </Badge>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="relative">
      {/* Main Product Display */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Media Section - 2 columns */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden border-2 border-green-200 shadow-2xl">
              <CardContent className="p-0">
                <div className="relative bg-gradient-to-b from-green-100 to-green-50 aspect-video">
                  {renderMedia()}

                  {/* Expand Button */}
                  <button
                    onClick={handleExpand}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all z-10"
                    title="Expand fullscreen"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </button>

                  {/* Play Overlay for Video */}
                  {currentProduct.mediaType === 'video' && !isPlaying && (
                    <button
                      onClick={handlePlayPause}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all group z-10"
                    >
                      <div className="w-20 h-20 bg-green-600/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                        <Play className="w-10 h-10 text-white ml-1" fill="white" />
                      </div>
                    </button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Info Panel - 1 column */}
          <div className="lg:col-span-1">
            <Card className="h-full border-2 border-green-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <currentProduct.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-green-700 mb-1">{currentProduct.title}</h3>
                    <Badge variant="secondary">{currentProduct.category}</Badge>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  {currentProduct.shortDescription}
                </p>

                {/* Specifications */}
                {currentProduct.specifications && (
                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-medium text-green-700">Quick Specs</h4>
                    {currentProduct.specifications.purity && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Purity:</span>
                        <span className="font-medium">{currentProduct.specifications.purity}</span>
                      </div>
                    )}
                    {currentProduct.specifications.origin && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Source:</span>
                        <span className="font-medium">{currentProduct.specifications.origin}</span>
                      </div>
                    )}
                    {currentProduct.specifications.cas && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">CAS No:</span>
                        <span className="font-medium">{currentProduct.specifications.cas}</span>
                      </div>
                    )}
                  </div>
                )}

                <Button
                  onClick={handleExpand}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  View Full Details
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-6 flex items-center justify-between">
          <Button
            onClick={handlePrevious}
            variant="outline"
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          <div className="text-sm text-muted-foreground">
            {currentIndex + 1} / {products.length}
          </div>

          <Button
            onClick={handleNext}
            variant="outline"
            className="gap-2"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Thumbnails Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <Card
            key={product.id}
            className={`cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1 ${currentIndex === index
              ? 'ring-4 ring-green-500 shadow-xl'
              : 'hover:ring-2 hover:ring-green-300'
              }`}
            onClick={() => handleProductSelect(index)}
          >
            <CardContent className="p-0">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />

                {/* Media Type Icon */}
                <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-all flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    {product.mediaType === 'video' ? (
                      <Play className="w-6 h-6 text-green-600 ml-0.5" fill="currentColor" />
                    ) : (
                      <ImageIcon className="w-6 h-6 text-green-600" />
                    )}
                  </div>
                </div>

                {/* Current Indicator */}
                {currentIndex === index && (
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-green-600">Current</Badge>
                  </div>
                )}

                {/* Media Type Badge */}
                <div className="absolute bottom-2 left-2 right-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
              </div>

              <div className="p-3">
                <h4 className="text-sm line-clamp-2">{product.title}</h4>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Expanded Fullscreen Modal with Right Panel */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200 overflow-y-auto">
          <button
            onClick={handleClose}
            className="fixed top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-20"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="w-full max-w-7xl my-8">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Media Column - 2/3 width */}
              <div className="lg:col-span-2">
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                  {currentProduct.mediaType === 'video' ? (
                    <video
                      key={`fg-${currentProduct.id}`}
                      ref={videoRef}
                      className="w-full h-full"
                      controls
                      autoPlay
                      playsInline
                      poster={currentProduct.thumbnail}
                      onPlay={() => setIsPlaying(true)}
                      onPlaying={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onEnded={() => setIsPlaying(false)}
                    >
                      <source src={currentProduct.mediaUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={currentProduct.mediaUrl}
                      alt={currentProduct.title}
                      className="w-full h-full object-contain bg-black"
                    />
                  )}
                </div>

                {/* Navigation in Fullscreen */}
                <div className="flex items-center justify-between mt-6">
                  <Button
                    onClick={handlePrevious}
                    variant="secondary"
                    size="lg"
                    className="gap-2"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                  </Button>

                  <div className="text-white text-lg">
                    {currentIndex + 1} / {products.length}
                  </div>

                  <Button
                    onClick={handleNext}
                    variant="secondary"
                    size="lg"
                    className="gap-2"
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Description Panel - 1/3 width */}
              <div className="lg:col-span-1">
                <Card className="h-full max-h-[80vh] overflow-y-auto bg-white/95 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <currentProduct.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl text-green-700">{currentProduct.title}</h3>
                        <Badge variant="secondary" className="mt-1">{currentProduct.category}</Badge>
                      </div>
                    </div>

                    {/* Markdown Content */}
                    <div className="prose prose-sm prose-green max-w-none">
                      <ReactMarkdown
                        components={{
                          h1: ({ node, ...props }) => <h1 className="text-2xl font-medium text-green-700 mt-6 mb-3" {...props} />,
                          h2: ({ node, ...props }) => <h2 className="text-xl font-medium text-green-600 mt-5 mb-2" {...props} />,
                          h3: ({ node, ...props }) => <h3 className="text-lg font-medium text-green-600 mt-4 mb-2" {...props} />,
                          p: ({ node, ...props }) => <p className="text-sm text-gray-700 mb-3 leading-relaxed" {...props} />,
                          ul: ({ node, ...props }) => <ul className="text-sm space-y-1 mb-4 ml-4" {...props} />,
                          ol: ({ node, ...props }) => <ol className="text-sm space-y-1 mb-4 ml-4 list-decimal" {...props} />,
                          li: ({ node, ...props }) => <li className="text-gray-700" {...props} />,
                          blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-600 my-4" {...props} />,
                          code: ({ node, ...props }) => <code className="bg-green-50 px-1.5 py-0.5 rounded text-xs text-green-700" {...props} />,
                          strong: ({ node, ...props }) => <strong className="font-medium text-gray-900" {...props} />,
                        }}
                      >
                        {currentProduct.fullDescription}
                      </ReactMarkdown>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
