
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1496307653780-42ee777d4833" 
          alt="Modern glass building" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      
      <div className="container relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-white mb-4">Let's Build Something Extraordinary</h2>
          <p className="text-white/90 mb-8 text-lg">
            Ready to transform your space with premium glass and aluminum solutions? 
            Contact our team today to discuss your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Request a Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
