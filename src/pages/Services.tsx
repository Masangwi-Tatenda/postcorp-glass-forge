
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      title: 'Glass & Aluminum',
      description: 'Expert design and installation of premium glass solutions for commercial and residential projects. We specialize in custom glass solutions including frameless shower enclosures, glass doors, mirrors, and more.',
      detailedDescription: 'Our premium glass and aluminum solutions include a variety of options suitable for modern architecture. We source high-quality materials and employ skilled craftsmen to ensure perfect execution of every project. From elegant glass balustrades to sturdy aluminum window frames, we deliver durability and aesthetic appeal.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      features: ['Custom sizing and specifications', 'Multiple glass types and thicknesses', 'Various finishes and colors', 'Professional installation']
    },
    {
      title: 'Curtain Walling',
      description: 'Modern, energy-efficient curtain wall systems designed for commercial buildings and facades.',
      detailedDescription: 'Curtain walling is an excellent solution for modern commercial buildings, providing both aesthetic appeal and practical benefits. Our curtain wall systems are designed to maximize natural light while maintaining energy efficiency. We offer various glass types including low-E, tinted, and solar control options to meet specific requirements.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="3" y1="15" x2="21" y2="15"></line>
          <line x1="9" y1="9" x2="9" y2="21"></line>
          <line x1="15" y1="9" x2="15" y2="21"></line>
        </svg>
      ),
      features: ['Energy-efficient designs', 'Weather-resistant materials', 'Sound insulation', 'UV protection options']
    },
    {
      title: 'Partitions',
      description: 'Interior glass partitions that combine style and functionality for office spaces and retail environments.',
      detailedDescription: 'Our interior glass partition solutions transform spaces by creating visual openness while maintaining practical separation. Perfect for modern office environments, these partitions maximize natural light flow while providing sound insulation. We offer various options including frameless, semi-framed, and fully framed designs with customizable privacy options.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="3" x2="12" y2="21"></line>
          <path d="M5.2 19.4L5 19.5C3.8 20 3 19.3 3 18V4c0-1.5 1.2-2 2-2c0.9 0 1.5 0.5 2 1l3.5 4"></path>
          <path d="M5 15V5c0-1.5 0.8-2 2-2c0.9 0 1.5 0.5 2 1l7 8"></path>
          <path d="M15 21v-8c0-1.3 0.8-2 2-2c0.9 0 1.5 0.5 2 1l3 4"></path>
        </svg>
      ),
      features: ['Sound insulation options', 'Privacy films and frosting', 'Integrated door systems', 'Multiple hardware finishes']
    },
    {
      title: 'Cladding',
      description: 'Innovative exterior cladding solutions that enhance building aesthetics and protection.',
      detailedDescription: 'Our exterior cladding systems provide both aesthetic enhancement and practical protection for buildings. We offer a variety of materials including aluminum composite panels, glass panels, and more. Our cladding solutions are designed to withstand Zimbabwe's climate conditions while maintaining visual appeal for years to come.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
          <path d="M3 9h18"></path>
          <path d="M3 15h18"></path>
        </svg>
      ),
      features: ['Weather resistance', 'Multiple material options', 'Custom color matching', 'Thermal insulation properties']
    },
    {
      title: 'Shopfronts',
      description: 'Attractive and functional shopfront systems designed to showcase your business.',
      detailedDescription: 'Create a lasting first impression with our premium shopfront solutions. We combine functionality with outstanding design to help businesses attract customers. Our shopfront systems include various door options, security features, and display capabilities to meet specific business requirements.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
          <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
          <path d="M12 3v6"></path>
        </svg>
      ),
      features: ['Security options', 'Display window configurations', 'Multiple door types', 'Integrated signage solutions']
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored architectural glass solutions for unique design requirements and specialized projects.',
      detailedDescription: 'When standard solutions don't meet your needs, our custom architectural glass services deliver precisely what you envision. We work closely with architects, designers, and property owners to create unique glass features that serve both functional and aesthetic purposes.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      ),
      features: ['Architectural consultation', 'Prototype development', 'Custom fabrication', 'Specialized installation']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200" 
            alt="Glass building facade" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl font-light">
            Comprehensive architectural glass and aluminum solutions tailored to your specific project requirements.
          </p>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Premium Glass & Aluminum Solutions</h2>
            <p className="text-lg text-muted-foreground">
              At Postcorp Glass, we offer a comprehensive range of architectural glass and aluminum services
              designed to meet the highest standards of quality and aesthetics.
            </p>
          </div>
          
          {/* Services List */}
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="bg-secondary/20 rounded-lg aspect-video flex items-center justify-center overflow-hidden">
                  <div className="w-1/2 h-1/2 flex items-center justify-center text-primary">
                    {service.icon}
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.detailedDescription}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-6 w-6 mr-2 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our glass and aluminum solutions can transform your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Request a Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
