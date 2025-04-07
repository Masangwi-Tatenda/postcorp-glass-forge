
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'Glass & Aluminum',
    description: 'Expert design and installation of premium glass solutions for commercial and residential projects.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    )
  },
  {
    title: 'Curtain Walling',
    description: 'Modern, energy-efficient curtain wall systems designed for commercial buildings and facades.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="3" y1="15" x2="21" y2="15"></line>
        <line x1="9" y1="9" x2="9" y2="21"></line>
        <line x1="15" y1="9" x2="15" y2="21"></line>
      </svg>
    )
  },
  {
    title: 'Partitions',
    description: 'Interior glass partitions that combine style and functionality for office spaces and retail environments.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="3" x2="12" y2="21"></line>
        <path d="M5.2 19.4L5 19.5C3.8 20 3 19.3 3 18V4c0-1.5 1.2-2 2-2c0.9 0 1.5 0.5 2 1l3.5 4"></path>
        <path d="M5 15V5c0-1.5 0.8-2 2-2c0.9 0 1.5 0.5 2 1l7 8"></path>
        <path d="M15 21v-8c0-1.3 0.8-2 2-2c0.9 0 1.5 0.5 2 1l3 4"></path>
      </svg>
    )
  },
  {
    title: 'Cladding',
    description: 'Innovative exterior cladding solutions that enhance building aesthetics and protection.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
        <path d="M3 9h18"></path>
        <path d="M3 15h18"></path>
      </svg>
    )
  },
  {
    title: 'Shopfronts',
    description: 'Attractive and functional shopfront systems designed to showcase your business.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
        <path d="M12 3v6"></path>
      </svg>
    )
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored architectural glass solutions for unique design requirements and specialized projects.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    )
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-3">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive architectural glass and aluminum solutions for modern construction needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-primary/10 text-primary mb-4">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
