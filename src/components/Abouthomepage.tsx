// Abouthomepage Component
// Generated: 2025-09-14T02:11:12.433Z
// Template: about-c001
// Context: Homepage
// Position: pages.0.sections.4

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Users, 
  Award, 
  Shield,
  ArrowRight,
  Quote,
  Star,
  Home,
  Heart,
  Key
} from "lucide-react"

export default function Abouthomepage() {
  const values = [
    {
      icon: Key,
      title: "Local Expertise",
      description: "Born and raised in Miami Beach, we know every hidden gem, best restaurant, and perfect sunset spot to make your stay unforgettable."
    },
    {
      icon: Heart,
      title: "Personalized Service",
      description: "Unlike large booking platforms, we provide dedicated concierge services and personal attention to ensure every detail of your stay is perfect."
    },
    {
      icon: Shield,
      title: "Trust & Quality",
      description: "All our properties are personally inspected, professionally managed, and fully licensed. Your safety and satisfaction are our top priorities."
    },
    {
      icon: Home,
      title: "Luxury Standards",
      description: "Every apartment meets our strict luxury standards with premium amenities, stunning views, and prime locations throughout Miami Beach."
    }
  ]

  const stats = [
    { value: "2018", label: "Established", icon: Award },
    { value: "500+", label: "Happy Guests", icon: Users },
    { value: "4.9★", label: "Average Rating", icon: Star },
    { value: "6", label: "Premium Properties", icon: Home }
  ]

  const team = [
    {
      name: "Maria Gonzalez",
      role: "Founder & CEO",
      image: "MG",
      bio: "Miami Beach native with 15+ years in luxury hospitality and property management."
    },
    {
      name: "Carlos Rivera",
      role: "Property Manager", 
      image: "CR",
      bio: "Expert in luxury property maintenance and guest experience optimization."
    },
    {
      name: "Sofia Martinez",
      role: "Guest Relations",
      image: "SM",
      bio: "Bilingual concierge specialist ensuring every guest has an exceptional stay."
    },
    {
      name: "Alex Thompson",
      role: "Operations Director",
      image: "AT",
      bio: "Former hotel operations manager specializing in premium vacation rentals."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Coastal Retreats
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Your Gateway to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Miami Beach Luxury
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a boutique vacation rental company specializing in handpicked luxury apartments 
            throughout Miami Beach, offering personalized service that goes beyond ordinary stays.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2018 by Miami Beach locals, Coastal Retreats was born from a simple belief: 
                vacation rentals should offer more than just a place to sleep—they should provide unforgettable experiences.
              </p>
              <p>
                After years of seeing travelers struggle with impersonal booking platforms and cookie-cutter accommodations, 
                we curated a collection of just 6 exceptional properties, each offering something unique.
              </p>
              <p>
                Today, we're proud to have hosted over 500 guests from around the world, earning a 4.9-star 
                rating through our commitment to luxury, authenticity, and personalized Miami Beach experiences.
              </p>
            </div>
            <Button className="group">
              View Our Properties
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Every guest deserves to experience Miami Beach like a local, with luxury and authenticity."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Maria Gonzalez, Founder</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">What Sets Us Apart</h3>
            <p className="text-muted-foreground">
              The principles that guide our commitment to exceptional Miami Beach vacation experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Team</h3>
            <p className="text-muted-foreground">
              Local Miami Beach experts dedicated to making your vacation rental experience extraordinary.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              Contact Our Team
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Coastal Retreats exceeded every expectation. The penthouse was stunning, but their local 
                recommendations and personal touches made our Miami Beach vacation truly unforgettable."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  JW
                </div>
                <div className="text-left">
                  <div className="font-semibold">Jennifer Williams</div>
                  <div className="text-sm text-muted-foreground">Family Vacation, Chicago</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}