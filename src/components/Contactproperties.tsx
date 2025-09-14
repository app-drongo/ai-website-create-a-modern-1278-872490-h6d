// Contactproperties Component
// Generated: 2025-09-14T02:11:12.433Z
// Template: contact-c001
// Context: Properties
// Position: pages.1.sections.5

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Calendar,
  Home
} from "lucide-react"

export default function Contactproperties() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    property: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Inquiries",
      description: "Property questions & bookings",
      contact: "reservations@coastalretreats.com",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Direct",
      description: "Speak with our concierge",
      contact: "+1 (305) 555-BEACH",
      action: "Call Now"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Quick property assistance",
      contact: "Available 8AM-10PM EST",
      action: "Message Us"
    }
  ]

  const locations = [
    {
      area: "South Beach",
      address: "2 Beachfront Penthouses with Ocean Views",
      details: "Collins Avenue & Ocean Drive Area"
    },
    {
      area: "Downtown Miami Beach",
      address: "2 Modern Lofts Near Restaurants & Nightlife",
      details: "Lincoln Road & Washington Avenue"
    },
    {
      area: "Mid-Beach",
      address: "2 Family Apartments with Pool Access",
      details: "41st Street & Indian Creek Area"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Property Inquiries
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Questions About Our
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Miami Beach Properties?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our local concierge team is here to help you find the perfect luxury apartment 
            for your Miami Beach getaway. Get personalized recommendations and instant availability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="size-6 text-primary" />
                Property Inquiry Form
              </CardTitle>
              <CardDescription>
                Tell us about your ideal Miami Beach stay and we'll match you with the perfect property.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="property" className="block text-sm font-medium mb-2">
                    Property Interest
                  </label>
                  <select
                    id="property"
                    name="property"
                    value={formData.property}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Select property type</option>
                    <option value="beachfront-penthouse">Beachfront Penthouse</option>
                    <option value="downtown-loft">Downtown Loft</option>
                    <option value="family-apartment">Family Apartment with Pool</option>
                    <option value="any">Any Available Property</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell Us About Your Stay *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Check-in/out dates, number of guests, special requests, or any questions about our properties..."
                  />
                </div>

                <Button type="submit" className="w-full text-base py-6 group">
                  Send Property Inquiry
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Phone className="size-5 text-primary" />
                Contact Our Concierge
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <Card key={index} className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Property Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                Our Property Locations
              </h3>
              <div className="space-y-3">
                {locations.map((location, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">{location.area}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{location.address}</p>
                        <p className="text-xs text-muted-foreground mt-1">{location.details}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        <Home className="size-3 mr-1" />
                        2 Units
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Concierge Hours */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Concierge Availability
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Check-in Support</span>
                    <span>24/7 Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone Support</span>
                    <span>8:00 AM - 10:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Emergency Line</span>
                    <span>24/7 Available</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Calendar className="size-4" />
                    Same-day booking available for last-minute stays
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}