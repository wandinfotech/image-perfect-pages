import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Plane, Building } from "lucide-react";
import { ArrowRight } from "lucide-react";
import start_icon from '../assets/service_icon1.png'
import hover from '../assets/service_icon-removebg.png'

const Services = () => {
  const services = [
    {
      icon: start_icon,
      title: "Student Visa",
      description: "From study and work visas to business and travel permits – we make global movement simple, secure, and stress-free.",
      color: "bg-secondary",
      iconColor: "text-primary",
    },
    {
      icon: hover,
      title: "Business Visa",
      description: "From study and work visas to business and travel permits – we make global movement simple, secure, and stress-free.",
      color: "bg-primary",
      iconColor: "text-white",
      featured: true,
    },
    {
      icon: start_icon,
      title: "Working Visa",
      description: "From study and work visas to business and travel permits – we make global movement simple, secure, and stress-free.",
      color: "bg-background",
      iconColor: "text-primary",
    },
    {
      icon: start_icon,
      title: "Tourist Visa",
      description: "From study and work visas to business and travel permits – we make global movement simple, secure, and stress-free.",
      color: "bg-background",
      iconColor: "text-primary",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
            our services
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            expert help for every step<br />
            of your <span className="text-primary">global journey</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`${service.color} border-none shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group ${
                service.featured ? "lg:scale-105" : ""
              }`}
            >
              <CardContent className="p-8 space-y-6">
                <div className={`w-14 h-14 flex items-center justify-center`}>
                  <img src={service.icon} alt={service.title}  />
                </div>

                <div className="space-y-3">
                  <h3 className={`text-xl font-bold ${service.featured ? 'text-white' : 'text-foreground'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${service.featured ? 'text-white/90' : 'text-muted-foreground'}`}>
                    {service.description}
                  </p>
                </div>

                <Button
                  variant="ghost"
                  className={`w-10 h-10 rounded-full p-0 group-hover:scale-110 transition-transform ${
                    service.featured 
                      ? 'bg-white/20 hover:bg-white/30 text-white' 
                      : 'bg-primary/10 hover:bg-primary/20 text-primary'
                  }`}
                >
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Need Visa & Immigration consultation?{" "}
            <a href="#contact" className="text-primary font-semibold hover:underline">
              Contact Now
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
