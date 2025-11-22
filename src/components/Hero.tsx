import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import mainImage from "../assets/Capture_m1.png";

const Hero = () => {
  const flags = [
    { src: "🇮🇳", position: "top-1/4 left-1/4", delay: "0s" },
    { src: "🇮🇪", position: "top-1/3 left-1/3", delay: "0.5s" },
    { src: "🇺🇸", position: "top-1/4 right-1/4", delay: "1s" },
    { src: "🇬🇧", position: "bottom-1/3 left-1/4", delay: "1.5s" },
    { src: "🇧🇷", position: "bottom-1/4 right-1/3", delay: "2s" },
    { src: "🇨🇦", position: "top-1/2 right-1/4", delay: "2.5s" },
    { src: "🇨🇭", position: "bottom-1/2 left-1/3", delay: "3s" },
  ];

  return (
    <section className='relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden'>
      <div className='container mx-auto px-6'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='text-left space-y-6 animate-in fade-in slide-in-from-left duration-700'>
            <div className='inline-flex items-center gap-2 text-sm text-muted-foreground'>
             <div className="flex items-center">
  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
    <img
      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&fit=crop"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="-ml-3 w-8 h-8 rounded-full overflow-hidden border-2 border-white">
    <img
      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&fit=crop"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="-ml-3 w-8 h-8 rounded-full overflow-hidden border-2 border-white">
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

            <div className='flex gap-4 pt-4'>
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

          <div className='relative flex items-center justify-center animate-in fade-in slide-in-from-right duration-700 delay-300'>
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

      <div className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce'>
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
