
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
          alt="Modern architectural glass building" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50 mix-blend-multiply" />
      </div>

      <div className="container relative z-10 text-center text-white">
        <div className="animate-fade-in [animation-delay:200ms] opacity-0">
          <h1 className="mb-4 font-bold tracking-tight">
            Framing the Future in Glass & Aluminum
          </h1>
          <p className="mb-8 max-w-2xl mx-auto text-lg font-light text-white/90">
            Premium architectural glass and aluminum solutions for modern construction projects across Zimbabwe.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-primary hover:text-white">
              View Our Work
            </Button>
            <Button size="lg" className="text-white bg-primary hover:bg-white hover:text-primary">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
