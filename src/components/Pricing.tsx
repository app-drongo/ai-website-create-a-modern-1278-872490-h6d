// Pricing Component
// Generated: 2025-09-14T02:11:12.433Z
// Template: pricing-c001
// Context: Properties
// Position: pages.1.sections.2

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, MapPin, Users, Bed, Bath, Wifi, Car, Utensils, Waves } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Pricing() {
  const properties = [
    {
      name: "Beachfront Penthouse",
      description: "Luxury oceanfront penthouse with panoramic views",
      price: "$450",
      period: "/night",
      badge: null,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      features: [
        "3 bedrooms, 2 bathrooms",
        "Ocean view balcony",
        "Full kitchen & dining",
        "High-speed WiFi",
        "Beach access",
        "Concierge service",
        "Premium linens",
        "Smart TV & streaming"
      ],
      amenities: [Bed, Bath, Wifi, Waves, Utensils],
      cta: "Check Availability",
      popular: false,
      guests: "6 guests"
    },
    {
      name: "Downtown Luxury Loft",
      description: "Modern loft in the heart of Miami Beach nightlife",
      price: "$325",
      period: "/night",
      badge: "Most Booked",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
      features: [
        "2 bedrooms, 2 bathrooms",
        "City skyline views",
        "Designer furnishings",
        "High-speed WiFi",
        "Walking distance to restaurants",
        "24/7 concierge",
        "Luxury amenities",
        "Rooftop pool access"
      ],
      amenities: [Bed, Bath, Wifi, Car, Utensils],
      cta: "Book Now",
      popular: true,
      guests: "4 guests"
    },
    {
      name: "Family Beach House",
      description: "Spacious family retreat with pool and beach access",
      price: "$650",
      period: "/night",
      badge: "Premium",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      features: [
        "4 bedrooms, 3 bathrooms",
        "Private pool & patio",
        "Full gourmet kitchen",
        "High-speed WiFi",
        "Direct beach access",
        "Dedicated concierge",
        "Premium amenities",
        "BBQ & outdoor dining"
      ],
      amenities: [Bed, Bath, Wifi, Waves, Utensils],
      cta: "Reserve Property",
      popular: false,
      guests: "8 guests"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Properties
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Luxury Miami Beach
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Vacation Rentals
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Experience the finest beachfront and downtown accommodations in Miami Beach. 
            Each property offers luxury amenities and personalized concierge service.
          </p>
          
          {/* Season Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Peak Season
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Off Season
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 30%
              </Badge>
            </button>
          </div>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {properties.map((property, index) => (
            <Card 
              key={index}
              className={cn(
                "relative overflow-hidden transition-all duration-300 hover:shadow-lg",
                property.popular 
                  ? "border-primary/50 shadow-lg shadow-primary/10 scale-105" 
                  : "border-border/50 hover:border-primary/20"
              )}
            >
              {/* Popular Badge */}
              {property.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1">
                    <Star className="size-3 mr-1" />
                    {property.badge}
                  </Badge>
                </div>
              )}

              {/* Property Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    <Users className="size-3 mr-1" />
                    {property.guests}
                  </Badge>
                </div>
              </div>

              {/* Background Gradient */}
              {property.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative pb-4">
                {property.badge && !property.popular && (
                  <Badge variant="outline" className="mb-2 w-fit">
                    {property.badge}
                  </Badge>
                )}
                
                <CardTitle className="text-xl mb-2">{property.name}</CardTitle>
                <CardDescription className="text-sm mb-4">
                  {property.description}
                </CardDescription>
                
                <div className="flex items-end justify-between">
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold text-primary">{property.price}</span>
                    <span className="text-muted-foreground mb-1">{property.period}</span>
                  </div>
                  <div className="flex gap-1">
                    {property.amenities.slice(0, 4).map((Icon, idx) => (
                      <div key={idx} className="size-6 rounded bg-muted flex items-center justify-center">
                        <Icon className="size-3 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-2">
                  {property.features.slice(0, 6).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-2.5 text-primary" />
                      </div>
                      <span className="text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={cn(
                    "w-full text-sm py-5",
                    property.popular 
                      ? "bg-primary hover:bg-primary/90" 
                      : ""
                  )}
                  variant={property.popular ? "default" : "outline"}
                >
                  <MapPin className="size-4 mr-2" />
                  {property.cta}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Free cancellation • Instant booking confirmation
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">
            Need help choosing the perfect property?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our local Miami Beach experts are here to help you find the ideal accommodation 
            for your stay. Get personalized recommendations based on your preferences.
          </p>
          <Button variant="outline" size="lg">
            Speak with Concierge
          </Button>
        </div>
      </div>
    </section>
  )
}