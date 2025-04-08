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
        <img src="/assets/images/logo.png" alt="" />
      ),
      features: ['Custom sizing and specifications', 'Multiple glass types and thicknesses', 'Various finishes and colors', 'Professional installation']
    },
    {
      title: 'Curtain Walling',
      description: 'Modern, energy-efficient curtain wall systems designed for commercial buildings and facades.',
      detailedDescription: 'Curtain walling is an excellent solution for modern commercial buildings, providing both aesthetic appeal and practical benefits. Our curtain wall systems are designed to maximize natural light while maintaining energy efficiency. We offer various glass types including low-E, tinted, and solar control options to meet specific requirements.',
      icon: (
        <img src="/assets/images/logo.png" alt="" />
      ),
      features: ['Energy-efficient designs', 'Weather-resistant materials', 'Sound insulation', 'UV protection options']
    },
    {
      title: 'Partitions',
      description: 'Interior glass partitions that combine style and functionality for office spaces and retail environments.',
      detailedDescription: 'Our interior glass partition solutions transform spaces by creating visual openness while maintaining practical separation. Perfect for modern office environments, these partitions maximize natural light flow while providing sound insulation. We offer various options including frameless, semi-framed, and fully framed designs with customizable privacy options.',
      icon: (
        <img src="/assets/images/logo.png" alt="" />
      ),
      features: ['Sound insulation options', 'Privacy films and frosting', 'Integrated door systems', 'Multiple hardware finishes']
    },
    {
      title: 'Cladding',
      description: 'Innovative exterior cladding solutions that enhance building aesthetics and protection.',
      detailedDescription: 'Our exterior cladding systems provide both aesthetic enhancement and practical protection for buildings. We offer a variety of materials including aluminum composite panels, glass panels, and more. Our cladding solutions are designed to withstand Zimbabwe\'s climate conditions while maintaining visual appeal for years to come.',
      icon: (
        <img src="/assets/images/logo.png" alt="" />
      ),
      features: ['Weather resistance', 'Multiple material options', 'Custom color matching', 'Thermal insulation properties']
    },
    {
      title: 'Shopfronts',
      description: 'Attractive and functional shopfront systems designed to showcase your business.',
      detailedDescription: 'Create a lasting first impression with our premium shopfront solutions. We combine functionality with outstanding design to help businesses attract customers. Our shopfront systems include various door options, security features, and display capabilities to meet specific business requirements.',
      icon: (
        <img src="/assets/images/logo.png" alt="" />
      ),
      features: ['Security options', 'Display window configurations', 'Multiple door types', 'Integrated signage solutions']
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored architectural glass solutions for unique design requirements and specialized projects.',
      detailedDescription: 'When standard solutions don\'t meet your needs, our custom architectural glass services deliver precisely what you envision. We work closely with architects, designers, and property owners to create unique glass features that serve both functional and aesthetic purposes.',
      icon: (
        <img src="/assets/images/logo.png" alt="" />
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
              <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white/10 hover:text-white">
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
