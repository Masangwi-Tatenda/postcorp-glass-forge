
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="section bg-secondary/50">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace" 
              alt="Postcorp Glass workshop" 
              className="rounded-lg shadow-lg w-full object-cover h-[400px] lg:h-[500px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded shadow-lg hidden md:block">
              <p className="font-semibold text-xl">20+ Years</p>
              <p className="text-sm">of industry excellence</p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="mb-6">About Postcorp Glass</h2>
            <p className="mb-4 text-lg">
              For over two decades, Postcorp Glass has been at the forefront of architectural glass and aluminum 
              solutions in Zimbabwe, delivering exceptional quality and craftsmanship to every project.
            </p>
            <p className="mb-6 text-muted-foreground">
              Our team combines technical expertise with innovative design to create stunning glass installations that 
              enhance the aesthetics and functionality of both commercial and residential spaces. From elegant facades 
              to practical interior partitions, we transform architectural visions into reality.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="mr-3 text-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-1">Quality Materials</h4>
                  <p className="text-sm text-muted-foreground">ISO-standard glass and aluminum</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-3 text-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-1">Expert Team</h4>
                  <p className="text-sm text-muted-foreground">Skilled professionals with years of experience</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-3 text-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-1">Nationwide Service</h4>
                  <p className="text-sm text-muted-foreground">Projects across all major cities in Zimbabwe</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-3 text-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-1">On-time Delivery</h4>
                  <p className="text-sm text-muted-foreground">Projects completed to schedule</p>
                </div>
              </div>
            </div>
            
            <Button size="lg">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
