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

      // Badge with profile images - POP effect
      const badge = textRef.current?.querySelector('.badge-section');
      tl.from(badge, {
        scale: 0,
        opacity: 0,
        rotation: -45,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
      });

      // Profile images - cascade pop
      const profileImages = badge?.querySelectorAll('.profile-image');
      if (profileImages) {
        tl.from(profileImages, {
          scale: 0,
          opacity: 0,
          rotation: 360,
          duration: 0.6,
          stagger: 0.08,
          ease: "back.out(3)",
        }, "-=0.4");
      }

      // Split heading into words for pop animation
      const heading = textRef.current?.querySelector('h1');
      if (heading) {
        const words = heading.innerText.split(' ');
        heading.innerHTML = words.map(word => `<span class="word-pop inline-block">${word}</span>`).join(' ');
        
        const wordElements = heading.querySelectorAll('.word-pop');
        tl.from(wordElements, {
          y: 100,
          opacity: 0,
          rotationX: -90,
          transformOrigin: "50% 50%",
          duration: 0.8,
          stagger: 0.05,
          ease: "back.out(2)",
        }, "-=0.3");
      }

      // Description - letter by letter reveal
      const description = textRef.current?.querySelector('p');
      if (description) {
        const letters = description.innerText.split('');
        description.innerHTML = letters.map(letter => 
          letter === ' ' ? ' ' : `<span class="letter-pop inline-block">${letter}</span>`
        ).join('');
        
        const letterElements = description.querySelectorAll('.letter-pop');
        tl.from(letterElements, {
          opacity: 0,
          y: 20,
          rotationY: 90,
          duration: 0.03,
          stagger: 0.01,
          ease: "power2.out",
        }, "-=0.5");
      }

      // Buttons - bounce and rotate in
      tl.from(buttonsRef.current?.children || [], {
        y: 50,
        opacity: 0,
        scale: 0,
        rotation: 180,
        duration: 0.8,
        stagger: 0.1,
        ease: "elastic.out(1, 0.6)",
      }, "-=0.4");

      // Image - WHEEL ROTATION effect
      tl.from(imageRef.current, {
        scale: 0.3,
        opacity: 0,
        rotation: 720,
        duration: 2,
        ease: "power4.out",
      }, "-=1.2");

      // Continuous rotation for image
      const imageElement = imageRef.current?.querySelector('img');
      if (imageElement) {
        gsap.to(imageElement, {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: "none",
        });

        // Image hover - speed up rotation
        imageElement.addEventListener('mouseenter', () => {
          gsap.to(imageElement, {
            rotation: "+=360",
            scale: 1.15,
            duration: 1,
            ease: "power2.out",
          });
        });
        imageElement.addEventListener('mouseleave', () => {
          gsap.to(imageElement, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      }

      // Scroll indicator - 3D flip in
      tl.from(scrollRef.current, {
        y: -50,
        opacity: 0,
        rotationX: -180,
        transformPerspective: 1000,
        duration: 1.2,
        ease: "back.out(1.7)",
      }, "-=1");

      // Continuous float animation for scroll indicator
      gsap.to(scrollRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // SVG wave animations - pulse effect
      const waves = scrollRef.current?.querySelectorAll('svg');
      waves?.forEach((wave, index) => {
        gsap.to(wave, {
          opacity: 0.5,
          scale: 1.1,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.3,
        });
      });
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
