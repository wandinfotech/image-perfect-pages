import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Plane, Building } from "lucide-react";
import { ArrowRight } from "lucide-react";
import start_icon from '../assets/service_icon1.png'
import hover from '../assets/service_icon-removebg.png'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading subtitle - letter pop animation
      const subtitle = headingRef.current?.querySelector('.subtitle') as HTMLElement;
      if (subtitle) {
        const letters = subtitle.innerText.split('');
        subtitle.innerHTML = letters.map(letter => 
          letter === ' ' ? ' ' : `<span class="inline-block">${letter}</span>`
        ).join('');
        
        gsap.from(subtitle.querySelectorAll('span'), {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: -30,
          rotationX: -90,
          stagger: 0.03,
          duration: 0.5,
          ease: "back.out(2)",
        });
      }

      // Title - word explosion effect
      const title = headingRef.current?.querySelector('h2');
      if (title) {
        const words = title.innerHTML.split(' ');
        title.innerHTML = words.map(word => 
          `<span class="inline-block" style="perspective: 1000px;">${word}</span>`
        ).join(' ');
        
        gsap.from(title.querySelectorAll('span'), {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          scale: 0,
          rotation: () => Math.random() * 360,
          x: () => (Math.random() - 0.5) * 200,
          y: () => (Math.random() - 0.5) * 200,
          stagger: 0.05,
          duration: 0.8,
          ease: "back.out(1.5)",
        });
      }

      // SHUFFLE & ROTATE CARD REVEAL
      const cards = cardsRef.current?.querySelectorAll('.service-card');
      cards?.forEach((card, index) => {
        const icon = card.querySelector('.service-icon');
        const title = card.querySelector('.service-title');
        const description = card.querySelector('.service-description');
        const button = card.querySelector('.service-button');

        // Card shuffle entrance - random positions converging
        const randomX = (Math.random() - 0.5) * 400;
        const randomY = (Math.random() - 0.5) * 400;
        const randomRotation = (Math.random() - 0.5) * 180;
        
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          x: randomX,
          y: randomY,
          rotation: randomRotation,
          opacity: 0,
          scale: 0.3,
          duration: 1.2,
          ease: "power3.out",
          delay: index * 0.1,
        });

        // Icon - wheel spin effect
        gsap.from(icon, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          scale: 0,
          rotation: 720,
          opacity: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
          delay: index * 0.1 + 0.3,
        });

        // Title - split and pop
        if (title) {
          const titleEl = title as HTMLElement;
          const chars = titleEl.innerText.split('');
          titleEl.innerHTML = chars.map(char => 
            char === ' ' ? ' ' : `<span class="inline-block">${char}</span>`
          ).join('');
          
          gsap.from(titleEl.querySelectorAll('span'), {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 50,
            rotationY: 180,
            stagger: 0.02,
            duration: 0.5,
            ease: "back.out(2)",
            delay: index * 0.1 + 0.5,
          });
        }

        // Description - wave reveal
        if (description) {
          const descEl = description as HTMLElement;
          const words = descEl.innerText.split(' ');
          descEl.innerHTML = words.map(word => 
            `<span class="inline-block">${word}</span>`
          ).join(' ');
          
          gsap.from(descEl.querySelectorAll('span'), {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 30,
            rotationX: -45,
            stagger: 0.02,
            duration: 0.4,
            ease: "power2.out",
            delay: index * 0.1 + 0.7,
          });
        }

        // Button - bounce explosion
        gsap.from(button, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          scale: 0,
          rotation: 360,
          opacity: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.6)",
          delay: index * 0.1 + 0.9,
        });

        // Card hover - 3D tilt and rotate
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -20,
            scale: 1.05,
            rotationY: 5,
            rotationX: 5,
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.to(icon, {
            scale: 1.2,
            rotation: 360,
            duration: 0.6,
            ease: "power2.out",
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      });

      // Bottom text - typewriter + pop effect
      const bottomText = sectionRef.current?.querySelector('.bottom-text');
      if (bottomText) {
        gsap.from(bottomText, {
          scrollTrigger: {
            trigger: bottomText,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          scale: 0.8,
          rotationX: -45,
          duration: 0.8,
          ease: "back.out(1.7)",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div ref={headingRef} className="text-center mb-16 space-y-4">
          <p className="subtitle text-sm uppercase tracking-wider text-muted-foreground font-medium">
            our services
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            expert help for every step<br />
            of your <span className="text-primary">global journey</span>
          </h2>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`service-card ${service.color} border-none shadow-card hover:shadow-card-hover transition-shadow duration-300 group ${
                service.featured ? "lg:scale-105" : ""
              }`}
            >
              <CardContent className="p-8 space-y-6">
                <div className={`service-icon w-14 h-14 flex items-center justify-center`}>
                  <img src={service.icon} alt={service.title}  />
                </div>

                <div className="space-y-3">
                  <h3 className={`service-title text-xl font-bold ${service.featured ? 'text-white' : 'text-foreground'}`}>
                    {service.title}
                  </h3>
                  <p className={`service-description text-sm leading-relaxed ${service.featured ? 'text-white/90' : 'text-muted-foreground'}`}>
                    {service.description}
                  </p>
                </div>

                <Button
                  variant="ghost"
                  className={`service-button w-10 h-10 rounded-full p-0 group-hover:scale-110 transition-transform ${
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

        <div className="bottom-text text-center mt-12">
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
