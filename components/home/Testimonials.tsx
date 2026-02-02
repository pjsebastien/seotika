import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ce qu'en disent nos membres
          </h2>
          <p className="text-lg text-muted-foreground">
            Des centaines de professionnels ont transformé leur approche du SEO
            grâce à nos formations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((testimonial) => (
            <Card key={testimonial.id} className="relative">
              <CardContent className="pt-6">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-muted-foreground/20" />

                {testimonial.rating && (
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                )}

                <p className="text-muted-foreground mb-6">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                      {testimonial.company && ` · ${testimonial.company}`}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
