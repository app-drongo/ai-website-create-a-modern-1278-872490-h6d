// Footer Component
// Generated: 2025-09-14T02:11:12.433Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Shield,
  Award,
  Clock
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Properties",
      links: [
        { name: "Beachfront Penthouses", href: "/properties#penthouses" },
        { name: "Downtown Lofts", href: "/properties#lofts" },
        { name: "Family Apartments", href: "/properties#family" },
        { name: "All Properties", href: "/properties" },
        { name: "Availability", href: "/book" },
        { name: "Virtual Tours", href: "/tours" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Concierge Services", href: "/services" },
        { name: "Airport Transfers", href: "/services#transfers" },
        { name: "Local Experiences", href: "/experiences" },
        { name: "Extended Stays", href: "/extended-stays" },
        { name: "Corporate Bookings", href: "/corporate" },
        { name: "Event Planning", href: "/events" }
      ]
    },
    {
      title: "Guest Resources",
      links: [
        { name: "Check-in Guide", href: "/checkin" },
        { name: "Area Guide", href: "/area-guide" },
        { name: "Guest Reviews", href: "/reviews" },
        { name: "FAQ", href: "/faq" },
        { name: "Contact Support", href: "/support" },
        { name: "Emergency Info", href: "/emergency" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Story", href: "/story" },
        { name: "Careers", href: "/careers" },
        { name: "Press Kit", href: "/press" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/coastalretreats" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/coastalretreats" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/coastalretreats" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/coastalretreats" }
  ]

  return (
    <footer className="bg-secondary text-background">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <MapPin className="size-5 text-background" />
                </div>
                <span className="font-bold text-xl text-background">Coastal Retreats</span>
              </Link>
              <p className="text-background/80 text-sm leading-relaxed mb-6">
                Premium luxury vacation rentals in Miami Beach. Experience the perfect blend of 
                comfort, style, and personalized service in our carefully curated properties.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-background/80">stay@coastalretreats.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-background/80">+1 (305) 555-COAST</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-background/80">Miami Beach, Florida</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-background">Stay in the Loop</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 text-sm border border-primary/30 rounded-md bg-background/10 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                />
                <Button size="sm" className="px-3 bg-primary hover:bg-primary/90 text-background">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-background/70">
                Get exclusive offers and local Miami Beach tips. Unsubscribe anytime.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-xs text-background/80">
                <Shield className="size-4 text-primary" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-background/80">
                <Award className="size-4 text-accent" />
                <span>5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-background/80">
                <Clock className="size-4 text-primary" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-background">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-background/80 hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-background/80">
              <span>© 2024 Coastal Retreats. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Made with <Heart className="size-3 text-accent fill-current" /> in Miami Beach
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-background/80 mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-background/10 hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-background/80 group-hover:text-primary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-background/10">
            <Link href="/sitemap" className="text-xs text-background/70 hover:text-primary transition-colors">
              Sitemap
            </Link>
            <Link href="/accessibility" className="text-xs text-background/70 hover:text-primary transition-colors">
              Accessibility
            </Link>
            <Link href="/cookies" className="text-xs text-background/70 hover:text-primary transition-colors">
              Cookie Settings
            </Link>
            <Link href="/guest-portal" className="text-xs text-background/70 hover:text-primary transition-colors">
              Guest Portal
            </Link>
            <Link href="/owner-services" className="text-xs text-background/70 hover:text-primary transition-colors">
              Property Owners
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}