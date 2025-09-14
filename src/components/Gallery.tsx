// Gallery Component
// Generated: 2025-09-14T02:11:12.433Z
// Template: gallery-c001
// Context: Properties
// Position: pages.1.sections.1

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, X, Expand, Grid3x3, Bed, Bath, Square, MapPin, Wifi, Car, Waves, Users } from "lucide-react"

export default function Gallery() {
  const galleries = [
    {
      id: 1,
      title: "Ocean View Penthouse Suite",
      location: "South Beach, Miami Beach",
      mainImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop"
      ],
      specs: { beds: 3, baths: 2, sqft: 2800, guests: 6 },
      price: "$850/night",
      features: ["Direct Beach Access", "Ocean Balcony", "Premium Amenities"],
      type: "Beachfront Penthouse"
    },
    {
      id: 2,
      title: "Luxury Beachfront Penthouse",
      location: "Collins Avenue, Miami Beach",
      mainImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&h=600&fit=crop"
      ],
      specs: { beds: 4, baths: 3, sqft: 3200, guests: 8 },
      price: "$1,200/night",
      features: ["Private Terrace", "Panoramic Views", "Concierge Service"],
      type: "Beachfront Penthouse"
    },
    {
      id: 3,
      title: "Modern Downtown Loft",
      location: "Brickell Avenue, Miami",
      mainImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop"
      ],
      specs: { beds: 2, baths: 2, sqft: 1600, guests: 4 },
      price: "$425/night",
      features: ["City Views", "Modern Kitchen", "Near Nightlife"],
      type: "Downtown Loft"
    },
    {
      id: 4,
      title: "Stylish Downtown Loft",
      location: "Downtown Miami",
      mainImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=600&fit=crop"
      ],
      specs: { beds: 1, baths: 1, sqft: 1200, guests: 2 },
      price: "$325/night",
      features: ["Business District", "High-Speed WiFi", "Rooftop Access"],
      type: "Downtown Loft"
    },
    {
      id: 5,
      title: "Family Paradise Apartment",
      location: "Mid-Beach, Miami Beach",
      mainImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop"
      ],
      specs: { beds: 3, baths: 2, sqft: 2200, guests: 6 },
      price: "$550/night",
      features: ["Pool Access", "Family Friendly", "Beach Nearby"],
      type: "Family Apartment"
    },
    {
      id: 6,
      title: "Coastal Family Retreat",
      location: "North Miami Beach",
      mainImage: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop"
      ],
      specs: { beds: 2, baths: 2, sqft: 1800, guests: 5 },
      price: "$475/night",
      features: ["Resort Pool", "Kids Welcome", "Beach Access"],
      type: "Family Apartment"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Luxury Miami Beach Properties
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our exclusive collection of 6 premium vacation rentals, from beachfront penthouses to modern downtown lofts and family-friendly retreats
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleries.map((property) => (
            <Card key={property.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-muted hover:border-primary/20">
              {/* Main Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={property.mainImage}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay with Gallery Count */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute bottom-4 right-4 gap-2 bg-card/90 backdrop-blur-sm hover:bg-card"
                  >
                    <Grid3x3 className="size-4" />
                    {property.images.length} Photos
                  </Button>
                </div>

                {/* Quick View Button */}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-card/90 backdrop-blur-sm hover:bg-card"
                >
                  <Expand className="size-4" />
                </Button>

                {/* Price Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full shadow-lg">
                    <span className="font-semibold text-sm">{property.price}</span>
                  </div>
                </div>

                {/* Property Type Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-accent/90 text-accent-foreground px-2 py-1 rounded text-xs font-medium backdrop-blur-sm">
                    {property.type}
                  </div>
                </div>
              </div>

              {/* Property Info */}
              <div className="p-6">
                <h3 className="font-semibold text-xl text-foreground mb-2">
                  {property.title}
                </h3>
                <div className="flex items-center gap-1 text-muted-foreground mb-4">
                  <MapPin className="size-4 text-primary" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Property Specs */}
                <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Bed className="size-4 text-secondary" />
                    <span>{property.specs.beds} bedrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="size-4 text-secondary" />
                    <span>{property.specs.baths} bathrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="size-4 text-secondary" />
                    <span>{property.specs.sqft} sq ft</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="size-4 text-secondary" />
                    <span>Up to {property.specs.guests} guests</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {property.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Thumbnail Preview */}
                <div className="mb-4 grid grid-cols-4 gap-1">
                  {property.images.slice(0, 4).map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-square rounded overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border border-muted"
                    >
                      <img
                        src={img}
                        alt={`${property.title} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                    Check Availability
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center bg-muted/30 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Ready to Book Your Miami Beach Getaway?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Experience luxury accommodations with personalized concierge service. All properties are fully licensed and insured for your peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
              Schedule Property Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}