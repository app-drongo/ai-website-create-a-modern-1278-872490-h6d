// Map Component
// Generated: 2025-09-14T02:11:12.433Z
// Template: map-c001
// Context: Properties
// Position: pages.1.sections.3

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Home, Waves, Car, Utensils, ShoppingBag, Plane, Camera } from "lucide-react"

export default function Map() {
  const properties = [
    { id: 1, name: "Ocean Breeze Penthouse", price: "$1,250/night", type: "Beachfront Penthouse", lat: 25.7617, lng: -80.1918, status: "Available" },
    { id: 2, name: "Sunset Sky Suite", price: "$1,180/night", type: "Beachfront Penthouse", lat: 25.7717, lng: -80.1818, status: "Available" },
    { id: 3, name: "Downtown Luxe Loft", price: "$850/night", type: "Modern Loft", lat: 25.7517, lng: -80.2018, status: "Booked" },
    { id: 4, name: "Urban Elite Loft", price: "$795/night", type: "Modern Loft", lat: 25.7617, lng: -80.2118, status: "Available" },
    { id: 5, name: "Family Paradise Suite", price: "$680/night", type: "Family Apartment", lat: 25.7417, lng: -80.1718, status: "Available" },
    { id: 6, name: "Poolside Haven", price: "$720/night", type: "Family Apartment", lat: 25.7317, lng: -80.1618, status: "Available" }
  ];

  const amenities = [
    { icon: Waves, name: "Beach Access", count: 3 },
    { icon: Utensils, name: "Fine Dining", count: 24 },
    { icon: ShoppingBag, name: "Luxury Shopping", count: 12 },
    { icon: Car, name: "Valet Parking", count: 6 },
    { icon: Camera, name: "Photo Spots", count: 15 },
    { icon: Plane, name: "Airport Shuttle", count: 2 }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Prime Miami Beach Locations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our luxury properties strategically located near Miami Beach's finest attractions, dining, and entertainment
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="relative aspect-[16/10] bg-muted">
                {/* Miami Beach Map Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/20">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=750&fit=crop"
                    alt="Miami Beach aerial view"
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>

                {/* Property Markers */}
                <div className="absolute inset-0">
                  {/* Beachfront Penthouses */}
                  <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-3 bg-primary/30 rounded-full animate-pulse" />
                      <Button size="icon" className="rounded-full size-12 bg-primary hover:bg-primary/90 shadow-lg">
                        <Home className="size-6" />
                      </Button>
                      <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <Card className="p-3 whitespace-nowrap shadow-xl">
                          <p className="text-sm font-semibold text-primary">Ocean Breeze Penthouse</p>
                          <p className="text-xs text-muted-foreground">Beachfront • $1,250/night</p>
                          <Badge className="text-xs mt-1 bg-accent text-accent-foreground">Available</Badge>
                        </Card>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/3 left-1/3">
                    <div className="relative group">
                      <div className="absolute -inset-3 bg-primary/30 rounded-full animate-pulse" />
                      <Button size="icon" className="rounded-full size-12 bg-primary hover:bg-primary/90 shadow-lg">
                        <Home className="size-6" />
                      </Button>
                      <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <Card className="p-3 whitespace-nowrap shadow-xl">
                          <p className="text-sm font-semibold text-primary">Sunset Sky Suite</p>
                          <p className="text-xs text-muted-foreground">Beachfront • $1,180/night</p>
                          <Badge className="text-xs mt-1 bg-accent text-accent-foreground">Available</Badge>
                        </Card>
                      </div>
                    </div>
                  </div>

                  {/* Downtown Lofts */}
                  <div className="absolute top-1/2 right-1/3">
                    <div className="relative group">
                      <div className="absolute -inset-3 bg-secondary/30 rounded-full animate-pulse" />
                      <Button size="icon" className="rounded-full size-12 bg-secondary hover:bg-secondary/90 shadow-lg">
                        <Home className="size-6" />
                      </Button>
                    </div>
                  </div>

                  <div className="absolute bottom-1/2 right-1/4">
                    <div className="relative group">
                      <div className="absolute -inset-3 bg-primary/30 rounded-full animate-pulse" />
                      <Button size="icon" className="rounded-full size-12 bg-primary hover:bg-primary/90 shadow-lg">
                        <Home className="size-6" />
                      </Button>
                    </div>
                  </div>

                  {/* Family Apartments */}
                  <div className="absolute bottom-1/3 left-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-3 bg-accent/30 rounded-full animate-pulse" />
                      <Button size="icon" className="rounded-full size-12 bg-accent hover:bg-accent/90 shadow-lg">
                        <Home className="size-6" />
                      </Button>
                    </div>
                  </div>

                  <div className="absolute bottom-1/4 right-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-3 bg-accent/30 rounded-full animate-pulse" />
                      <Button size="icon" className="rounded-full size-12 bg-accent hover:bg-accent/90 shadow-lg">
                        <Home className="size-6" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Map Controls */}
                <div className="absolute top-4 right-4 space-y-2">
                  <Button size="icon" variant="secondary" className="shadow-lg backdrop-blur-sm">
                    <Navigation className="size-4" />
                  </Button>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="flex flex-wrap items-center gap-4 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="size-3 bg-primary rounded-full" />
                      <span className="text-card-foreground">Beachfront</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-3 bg-secondary rounded-full" />
                      <span className="text-card-foreground">Downtown</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-3 bg-accent rounded-full" />
                      <span className="text-card-foreground">Family</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Property List */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <MapPin className="size-5 text-primary" />
                  Our Miami Beach Properties
                </h3>
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {properties.map((property) => (
                    <div
                      key={property.id}
                      className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-sm text-foreground">{property.name}</p>
                        <p className="text-xs text-muted-foreground">{property.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-sm text-primary">{property.price}</p>
                        <Badge 
                          variant={property.status === "Available" ? "default" : "secondary"} 
                          className="text-xs"
                        >
                          {property.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Nearby Amenities */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4">Miami Beach Attractions</h3>
                <div className="space-y-3">
                  {amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <amenity.icon className="size-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{amenity.name}</span>
                      </div>
                      <Badge variant="outline" className="border-primary/20">{amenity.count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
              Check Availability
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}