// Reviews Component
// Generated: 2025-09-14T02:11:12.433Z
// Template: reviews-l001
// Context: Properties
// Position: pages.1.sections.4

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ThumbsUp, Check, Filter, ChevronDown, MessageSquare, Award, MapPin, Users, Calendar } from "lucide-react"

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      author: "Jennifer Martinez",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      rating: 5,
      date: "1 week ago",
      property: "Ocean View Penthouse",
      verified: true,
      helpful: 32,
      title: "Absolutely breathtaking oceanfront experience!",
      content: "Our stay at the Ocean View Penthouse exceeded every expectation. Waking up to panoramic ocean views from the floor-to-ceiling windows was magical. The property is immaculate, luxuriously appointed, and the private terrace was perfect for morning coffee and sunset cocktails. Coastal Retreats' concierge service helped us secure dinner reservations at the best restaurants in Miami Beach.",
      pros: ["Stunning ocean views", "Luxury amenities", "Exceptional concierge service"],
      stayDate: "November 2024",
      guestType: "Couple",
      location: "Miami Beach Oceanfront"
    },
    {
      id: 2,
      author: "David Thompson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 5,
      date: "2 weeks ago",
      property: "Downtown Executive Loft",
      verified: true,
      helpful: 28,
      title: "Perfect for business travel and entertainment",
      content: "The Downtown Executive Loft was ideal for my extended business stay. The modern workspace, high-speed internet, and proximity to the financial district made work seamless. After hours, I could walk to world-class restaurants and nightlife. The property manager was incredibly responsive and even arranged airport transfers. This is luxury business accommodation at its finest.",
      pros: ["Prime business location", "Modern work facilities", "Walking distance to dining"],
      stayDate: "October 2024",
      guestType: "Business Traveler",
      location: "Downtown Miami"
    },
    {
      id: 3,
      author: "Lisa & Mark Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      rating: 5,
      date: "3 weeks ago",
      property: "Family Paradise Apartment",
      verified: true,
      helpful: 41,
      title: "Family vacation dreams come true!",
      content: "Our family of four had the most incredible week at the Family Paradise Apartment. The kids loved the pool access and the apartment was perfectly set up for families - safety features, games, and even beach toys provided. The location gave us easy access to family-friendly beaches and attractions. Coastal Retreats thought of everything to make our Miami Beach vacation unforgettable.",
      pros: ["Kid-friendly amenities", "Pool access", "Beach proximity"],
      stayDate: "October 2024",
      guestType: "Family with Children",
      location: "Miami Beach"
    },
    {
      id: 4,
      author: "Amanda Chen",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
      rating: 4,
      date: "1 month ago",
      property: "Beachfront Penthouse Suite",
      verified: true,
      helpful: 19,
      title: "Luxury with minor room for improvement",
      content: "The Beachfront Penthouse Suite is absolutely stunning with incredible views and top-tier amenities. The space is beautifully designed and the beach access is unbeatable. Only minor feedback would be that the air conditioning could be more responsive in the master bedroom. Overall, still an exceptional luxury experience that I'd definitely book again.",
      pros: ["Unbeatable beach access", "Luxury finishes", "Spacious layout"],
      stayDate: "September 2024",
      guestType: "Couple",
      location: "Miami Beach Oceanfront"
    }
  ];

  const stats = {
    average: 4.9,
    total: 287,
    distribution: [
      { stars: 5, count: 248 },
      { stars: 4, count: 31 },
      { stars: 3, count: 6 },
      { stars: 2, count: 1 },
      { stars: 1, count: 1 }
    ]
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Guest Reviews & Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why discerning travelers choose Coastal Retreats for their Miami Beach luxury accommodations
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Rating Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4 border-primary/20">
              <CardContent className="p-6">
                {/* Overall Rating */}
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stats.average}</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-5 ${
                          i < Math.floor(stats.average)
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Based on {stats.total} verified stays
                  </p>
                </div>

                {/* Rating Distribution */}
                <div className="space-y-2 mb-6">
                  {stats.distribution.map((item) => (
                    <div key={item.stars} className="flex items-center gap-2">
                      <span className="text-sm w-3">{item.stars}</span>
                      <Star className="size-4 fill-primary text-primary" />
                      <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all"
                          style={{ width: `${(item.count / stats.total) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-8 text-right">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Trust Badges */}
                <div className="space-y-3 border-t pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="size-4 text-accent" />
                    <span>All reviews verified</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="size-4 text-primary" />
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="size-4 text-secondary" />
                    <span>Local Miami experts</span>
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                  Book Your Stay
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-3 space-y-6">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-2 border-primary/20">
                  <Filter className="size-4" />
                  All Properties
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  Property Type
                  <ChevronDown className="size-4" />
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  Guest Type
                  <ChevronDown className="size-4" />
                </Button>
              </div>
              <Button variant="ghost" size="sm" className="gap-2">
                Most Recent
                <ChevronDown className="size-4" />
              </Button>
            </div>

            {/* Review Cards */}
            {reviews.map((review) => (
              <Card key={review.id} className="border-primary/10 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <Avatar className="border-2 border-primary/20">
                        <AvatarImage src={review.avatar} alt={review.author} />
                        <AvatarFallback className="bg-primary/10 text-primary">{review.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-foreground">{review.author}</h4>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs gap-1 bg-accent/10 text-accent border-accent/20">
                              <Check className="size-3" />
                              Verified Stay
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{review.date}</span>
                          <span>•</span>
                          <span>Stayed {review.stayDate}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Users className="size-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{review.guestType}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`size-4 ${
                            i < review.rating
                              ? "fill-primary text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Property & Location */}
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {review.property}
                    </Badge>
                    <Badge variant="outline" className="border-secondary/30 text-secondary gap-1">
                      <MapPin className="size-3" />
                      {review.location}
                    </Badge>
                  </div>

                  {/* Review Content */}
                  <h5 className="font-semibold mb-2 text-foreground">{review.title}</h5>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{review.content}</p>

                  {/* Pros */}
                  {review.pros && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {review.pros.map((pro, idx) => (
                        <Badge key={idx} variant="secondary" className="gap-1 bg-primary/10 text-primary border-primary/20">
                          <Check className="size-3" />
                          {pro}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Review Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                    <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
                      <ThumbsUp className="size-4" />
                      Helpful ({review.helpful})
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-secondary">
                      <MessageSquare className="size-4" />
                      Contact Host
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10">
                View All Guest Reviews
              </Button>
            </div>

            {/* Review CTA */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Ready to Create Your Own Miami Beach Memory?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Join hundreds of satisfied guests who've experienced luxury accommodations with personalized service
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button className="bg-primary hover:bg-primary/90">
                    Check Availability
                  </Button>
                  <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                    Schedule Property Tour
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}