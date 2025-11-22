import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import mainImage from "../assets/Capture_m1.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const flags = [
    { src: "🇮🇳", position: "top-1/4 left-1/4", delay: "0s" },
    { src: "🇮🇪", position: "top-1/3 left-1/3", delay: "0.5s" },
    { src: "🇺🇸", position: "top-1/4 right-1/4", delay: "1s" },
    { src: "🇬🇧", position: "bottom-1/3 left-1/4", delay: "1.5s" },
    { src: "🇧🇷", position: "bottom-1/4 right-1/3", delay: "2s" },
    { src: "🇨🇦", position: "top-1/2 right-1/4", delay: "2.5s" },
    { src: "🇨🇭", position: "bottom-1/2 left-1/3", delay: "3s" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animate each text element separately for more granular control
      const badge = textRef.current?.querySelector('.badge-section');
      const heading = textRef.current?.querySelector('h1');
      const headingLines = heading?.querySelectorAll('div, span');
      const description = textRef.current?.querySelector('p');

      // Badge with profile images
      tl.from(badge, {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Heading lines stagger
      if (headingLines) {
        tl.from(headingLines, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
        }, "-=0.4");
      }

      // Description
      tl.from(description, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      }, "-=0.3");

      // Buttons with stagger
      tl.from(buttonsRef.current?.children || [], {
        y: 30,
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        stagger: 0.15,
        ease: "back.out(1.4)",
      }, "-=0.2");

      // Image animation with rotation
      tl.from(imageRef.current, {
        scale: 0.7,
        opacity: 0,
        rotation: -10,
        duration: 1.3,
        ease: "back.out(1.5)",
      }, "-=0.8");

      // Scroll indicator entrance
      tl.from(scrollRef.current, {
        y: -30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      }, "-=0.5");

      // Continuous float animation for scroll indicator
      gsap.to(scrollRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // SVG wave animations in scroll indicator
      const waves = scrollRef.current?.querySelectorAll('svg');
      waves?.forEach((wave, index) => {
        gsap.to(wave, {
          opacity: 0.5,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.3,
        });
      });

      // Image hover effect
      const imageElement = imageRef.current?.querySelector('img');
      if (imageElement) {
        imageElement.addEventListener('mouseenter', () => {
          gsap.to(imageElement, {
            scale: 1.08,
            rotation: 5,
            duration: 0.4,
            ease: "power2.out",
          });
        });
        imageElement.addEventListener('mouseleave', () => {
          gsap.to(imageElement, {
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      }

      // Profile images individual animations
      const profileImages = badge?.querySelectorAll('.profile-image');
      if (profileImages) {
        gsap.from(profileImages, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(2)",
          delay: 0.3,
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className='relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden'>
      <div className='container mx-auto px-6'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div ref={textRef} className='text-left space-y-6'>
            <div className='badge-section inline-flex items-center gap-2 text-sm text-muted-foreground'>
             <div className="flex items-center">
  <div className="profile-image w-8 h-8 rounded-full overflow-hidden border-2 border-white">
    <img
      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&fit=crop"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="profile-image -ml-3 w-8 h-8 rounded-full overflow-hidden border-2 border-white">
    <img
      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&fit=crop"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="profile-image -ml-3 w-8 h-8 rounded-full overflow-hidden border-2 border-white">
    <img
      src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&fit=crop"
      className="w-full h-full object-cover"
    />
  </div>
</div>

              <span className='font-medium'><span className="text-primary">600+</span> People Like Our Services</span>
            </div>

            <h1 className='text-5xl lg:text-6xl  leading-tight text-foreground'>
              making your
              <div>journey beyond</div>
              <div>
                borders{" "}
                <span className="
  inline-flex items-center gap-2 px-4 py-2 
  border-2 border-primary text-primary 
  hover:bg-primary hover:text-white 
  rounded-full text-2xl align-middle
">
  EFFORTLESS 😊😊😊
</span>

              </div>
            </h1>

            <p className='text-lg text-muted-foreground max-w-xl'>
              From study and work visas to business and travel permits – we make
              global movement simple, secure, and stress-free.
            </p>

            <div ref={buttonsRef} className='flex gap-4 pt-4'>
              <Button
                size='lg'
                className='rounded-md bg-primary hover:bg-primary/90 text-white px-8'>
                Get Quote
              </Button>

              <Button
                size='lg'
                variant='outline'
                className='rounded-md border-2 border-foreground text-foreground hover:bg-foreground hover:text-background px-8'>
                Explore Visa
              </Button>
            </div>
          </div>

          <div ref={imageRef} className='relative flex items-center justify-center'>
            <div className='relative w-[400px] h-[400px]'>
              <div className=' bg-white rounded-full flex items-center justify-center overflow-hidden outline-none ring-0 focus:ring-0 focus:outline-none'>
                <img
                  src={mainImage}
                  alt='Logo'
                  className='w-full h-full object-cover outline-none ring-0 focus:ring-0 focus:outline-none'
                />
              </div>

              {/* {flags.map((flag, index) => (
                <div
                  key={index}
                  className={`absolute ${flag.position} text-5xl animate-float`}
                  style={{
                    animationDelay: flag.delay,
                  }}
                >
                  {flag.src}
                </div>
              ))} */}
              {/* 
              <div className="absolute top-0 right-0 text-4xl animate-pulse-slow">✨</div>
              <div className="absolute bottom-0 left-0 text-4xl animate-pulse-slow" style={{ animationDelay: "1s" }}>✨</div>
              <div className="absolute top-1/2 left-0 text-4xl animate-pulse-slow" style={{ animationDelay: "2s" }}>✨</div>
              <div className="absolute bottom-1/4 right-0 text-3xl animate-pulse-slow" style={{ animationDelay: "0.5s" }}>+</div> */}
            </div>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4'>
        <div className='w-full'>
          <svg
            viewBox='0 0 100 20'
            className='w-48 h-8 text-muted-foreground/30'>
            <path
              d='M 0 10 Q 25 0, 50 10 T 100 10'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            />
          </svg>
        </div>
        <span className='text-sm text-muted-foreground'>scroll down</span>
        <div className='w-full flex justify-center'>
          <svg
            viewBox='0 0 100 20'
            className='w-48 h-8 text-muted-foreground/30'>
            <path
              d='M 0 10 Q 25 20, 50 10 T 100 10'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
