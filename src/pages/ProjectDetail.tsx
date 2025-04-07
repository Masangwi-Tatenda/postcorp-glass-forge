
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronLeft, MapPin, Calendar, Briefcase, Grid, Check } from 'lucide-react';

// This would typically come from an API or database
const projects = [
  {
    id: 1,
    title: 'Corporate Headquarters',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511',
    galleryImages: [
      'https://images.unsplash.com/photo-1460574283810-2aab119d8511',
      'https://images.unsplash.com/photo-1517581177684-8e3b28e6bc0a',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e'
    ],
    location: 'Harare, Zimbabwe',
    description: 'Modern curtain wall installation for a corporate headquarters building in the heart of Harare\'s business district.',
    client: 'ABC Corporation',
    year: '2023',
    services: ['Curtain Walling', 'Glass & Aluminum'],
    challenge: 'The client required a facade that would maximize natural light while minimizing solar heat gain, all while maintaining a sleek, modern appearance that would stand out in the cityscape.',
    solution: 'We implemented a custom curtain wall system using low-E glass with a subtle blue tint that reduces UV penetration while maintaining excellent visibility. The aluminum framing was designed to complement the building\'s architectural features while providing robust support for the glass panels.',
    result: 'The completed project has significantly reduced the building\'s energy consumption through improved thermal performance while creating a striking visual presence in Harare\'s skyline. The interior spaces benefit from abundant natural light without excessive heat, creating a comfortable working environment for employees.',
    testimonial: {
      quote: "Postcorp Glass delivered exactly what we envisioned for our headquarters. The quality of work and attention to detail exceeded our expectations.",
      author: "John Moyo",
      position: "Facilities Director, ABC Corporation"
    }
  },
  {
    id: 2,
    title: 'Luxury Residence',
    category: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
    galleryImages: [
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      'https://images.unsplash.com/photo-1600607687644-c7e47c73f26b'
    ],
    location: 'Borrowdale, Zimbabwe',
    description: 'Custom glass installations including frameless shower enclosures, glass railings, and large floor-to-ceiling windows for maximum natural light.',
    client: 'Private Client',
    year: '2023',
    services: ['Glass & Aluminum', 'Custom Solutions'],
    challenge: 'The homeowner wanted to maximize views of their garden and natural surroundings while maintaining privacy and optimizing energy efficiency in their luxury residence.',
    solution: 'We designed and installed custom floor-to-ceiling windows with specialized glazing that offers excellent thermal insulation. For the interior, we created frameless shower enclosures and glass railings that enhance the open feeling of the space while maintaining safety and functionality.',
    result: 'The completed residence features seamless transitions between indoor and outdoor spaces, with glass elements that highlight the architectural design while providing exceptional performance. The homeowner now enjoys panoramic views with privacy and comfort throughout the seasons.',
    testimonial: {
      quote: "The glass features in our home have transformed the living experience. Postcorp\'s attention to detail and quality craftsmanship is evident in every installation.",
      author: "Private Client",
      position: "Homeowner"
    }
  },
  // Add more projects here with the same structure
];

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id || '1');
  
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container pt-32 pb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
          <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.imageUrl}
            alt={project.title} 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        </div>
        <div className="container relative z-10 text-white">
          <Link to="/projects" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ChevronLeft size={20} className="mr-2" />
            Back to Projects
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="inline-flex items-center text-white/80">
              <MapPin size={18} className="mr-2" />
              {project.location}
            </span>
            <span className="inline-flex items-center text-white/80">
              <Calendar size={18} className="mr-2" />
              {project.year}
            </span>
            <span className="inline-flex items-center text-white/80">
              <Briefcase size={18} className="mr-2" />
              {project.client}
            </span>
            <span className="inline-flex items-center text-white/80">
              <Grid size={18} className="mr-2" />
              {project.category}
            </span>
          </div>
        </div>
      </section>
      
      {/* Project Details */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none mb-12">
                <h2>Project Overview</h2>
                <p className="text-lg">{project.description}</p>
                
                <h3>The Challenge</h3>
                <p>{project.challenge}</p>
                
                <h3>Our Solution</h3>
                <p>{project.solution}</p>
                
                <h3>The Result</h3>
                <p>{project.result}</p>
              </div>
              
              {/* Gallery */}
              <h3 className="text-2xl font-bold mb-6">Project Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {project.galleryImages.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg aspect-video">
                    <img 
                      src={image} 
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
              
              {/* Testimonial */}
              {project.testimonial && (
                <div className="bg-secondary/20 rounded-lg p-8 mb-12">
                  <blockquote className="text-lg italic mb-4">
                    "{project.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold">{project.testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{project.testimonial.position}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-secondary/10 rounded-lg p-8 sticky top-24">
                <h3 className="text-xl font-bold mb-6">Project Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Client</p>
                    <p>{project.client}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Location</p>
                    <p>{project.location}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Completion</p>
                    <p>{project.year}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Category</p>
                    <p>{project.category}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Services Provided</p>
                    <ul className="space-y-1 mt-2">
                      {project.services.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <Check size={16} className="mr-2 text-primary mt-1 flex-shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <Link to="/quote">
                    <Button className="w-full">Start Your Project</Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full">Contact Us</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
