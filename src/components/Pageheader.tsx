// Pageheader Component
// Generated: 2025-09-14T02:11:12.433Z
// Template: page-header-l001
// Context: Properties
// Position: pages.1.sections.0

import { ChevronRight, Home, Search, Filter, MapPin, Calendar, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Pageheader() {
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
            <span className="text-foreground font-medium">Luxury Properties</span>
          </nav>

          {/* Title and Description */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Premium Miami Beach Vacation Rentals
              </h1>
              <p className="text-lg text-muted-foreground">
                Experience luxury at its finest with our curated collection of 6 exclusive beachfront accommodations. 
                From oceanfront penthouses to sophisticated downtown lofts, each property offers unparalleled comfort and style.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2 border-primary/20 hover:bg-primary/5">
                <Filter className="size-4" />
                Filter Properties
              </Button>
              <Button className="gap-2 bg-primary hover:bg-primary/90 text-white">
                <Calendar className="size-4" />
                Check Availability
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-muted">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">6</span> Luxury Properties
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Beachfront</span> & Downtown Locations
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="size-4 text-accent fill-accent" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">4.9★</span> Guest Rating
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">$225-$650</span> per night
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-primary">24/7</span> Concierge Service
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}