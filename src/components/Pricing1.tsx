// Pricing1 Component
// Generated: 2025-09-14T02:11:12.433Z
// Template: pricing-c001
// Context: Booking
// Position: pages.2.sections.1

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, MapPin, Wifi, Car } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Pricing1() {
  const plans = [
    {
      name: "Downtown Loft",
      description: "Modern urban retreat near restaurants and nightlife",
      price: "$189",
      period: "/night",
      badge: null,
      features: [
        "1-2 guests capacity",
        "City skyline views",
        "Walking distance to dining",
        "High-speed WiFi",
        "Modern kitchen",
        "24/7 concierge support",
        "Complimentary welcome package"
      ],
      cta: "Check Availability",
      popular: false,
      minStay: "2 nights minimum"
    },
    {
      name: "Beachfront Penthouse",
      description: "Luxury oceanfront living with panoramic views",
      price: "$349",
      period: "/night",
      badge: "Most Popular",
      features: [
        "4-6 guests capacity",
        "Direct ocean views",
        "Private balcony",
        "Premium amenities",
        "Gourmet kitchen",
        "Dedicated concierge",
        "Beach equipment included",
        "Complimentary parking",
        "Daily housekeeping available"
      ],
      cta: "Reserve Now",
      popular: true,
      minStay: "3 nights minimum"
    },
    {
      name: "Family Paradise",
      description: "Spacious retreat perfect for families with pool access",
      price: "$259",
      period: "/night",
      badge: "Family Favorite",
      features: [
        "6-8 guests capacity",
        "Pool and garden access",
        "Kid-friendly amenities",
        "Full kitchen & dining",
        "Washer/dryer included",
        "Game room access",
        "Beach toys provided",
        "Cribs & high chairs available",
        "Family concierge services"
      ],
      cta: "Book Family Stay",
      popular: false,
      minStay: "4 nights minimum"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            <MapPin className="size-3 mr-1" />
            Miami Beach Accommodations
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Luxury Beachfront
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Rental Rates
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Premium short-term rentals with personalized service and unmatched Miami Beach locations. 
            All rates include concierge support and welcome amenities.
          </p>
          
          {/* Season Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Peak Season
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Off Season
              <Badge variant="secondary" className="ml-2 text-xs bg-accent/20 text-accent">
                Save 25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={cn(
                "relative overflow-hidden transition-all duration-300 hover:shadow-lg",
                plan.popular 
                  ? "border-primary/50 shadow-lg shadow-primary/10 scale-105" 
                  : "border-border/50 hover:border-primary/20"
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-white px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit border-accent/30 text-accent">
                    {plan.badge}
                  </Badge>
                )}
                
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">
                  {plan.description}
                </CardDescription>
                
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground mb-1">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.minStay}</p>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={cn(
                    "w-full text-base py-6",
                    plan.popular 
                      ? "bg-primary hover:bg-primary/90" 
                      : "border-primary/20 hover:bg-primary/5"
                  )}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.popular && <Star className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.popular && (
                  <p className="text-center text-sm text-muted-foreground">
                    Instant booking • Flexible cancellation • Best rate guarantee
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">
            Planning an extended stay?
          </h3>
          <p className="text-muted-foreground mb-6">
            We offer special rates for weekly and monthly bookings, plus corporate packages 
            for business travelers. Contact our team for personalized pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
              <Wifi className="size-4 mr-2" />
              Request Corporate Rates
            </Button>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              <Car className="size-4 mr-2" />
              Plan Extended Stay
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}