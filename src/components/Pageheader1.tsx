// Pageheader1 Component
// Generated: 2025-09-14T02:11:12.433Z
// Template: page-header-l001
// Context: Booking
// Position: pages.2.sections.0

import { ChevronRight, Home, Calendar, MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function Pageheader1() {
  return (
    <section className="bg-background border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Home className="size-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="size-4" />
            <Link href="/properties" className="hover:text-foreground transition-colors">
              Properties
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-foreground font-medium">Book Your Stay</span>
          </nav>

          {/* Title and Description */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-3">
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Book Your Miami Beach Retreat
                </h1>
                <Badge className="bg-accent/10 text-accent border-accent/20">
                  <Star className="size-3 mr-1" />
                  4.9 Rating
                </Badge>
              </div>
              <p className="text-lg text-muted-foreground">
                Select your dates and choose from our collection of luxury beachfront penthouses, 
                modern downtown lofts, and family-friendly apartments. All properties include 
                concierge service and premium amenities.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <MapPin className="size-4" />
                View Map
              </Button>
              <Button className="gap-2">
                <Calendar className="size-4" />
                Check Availability
              </Button>
            </div>
          </div>

          {/* Booking Benefits */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Instant</span> Confirmation
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Free</span> Cancellation up to 48hrs
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">24/7</span> Concierge Support
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Best Price</span> Guarantee
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Premium</span> Welcome Package
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}