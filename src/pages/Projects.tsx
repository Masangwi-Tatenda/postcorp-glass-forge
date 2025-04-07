
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const projectCategories = ['All', 'Commercial', 'Residential', 'Interior', 'Facades'];

const projects = [
  {
    id: 1,
    title: 'Corporate Headquarters',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511',
    location: 'Harare, Zimbabwe',
    description: 'Modern curtain wall installation for a corporate headquarters building in the heart of Harare\'s business district.',
    client: 'ABC Corporation',
    year: '2023',
    services: ['Curtain Walling', 'Glass & Aluminum']
  },
  {
    id: 2,
    title: 'Luxury Residence',
    category: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
    location: 'Borrowdale, Zimbabwe',
    description: 'Custom glass installations including frameless shower enclosures, glass railings, and large floor-to-ceiling windows for maximum natural light.',
    client: 'Private Client',
    year: '2023',
    services: ['Glass & Aluminum', 'Custom Solutions']
  },
  {
    id: 3,
    title: 'Shopping Mall Interior',
    category: 'Interior',
    imageUrl: 'https://images.unsplash.com/photo-1439337153520-7082a56a81f4',
    location: 'Bulawayo, Zimbabwe',
    description: 'Complete interior glass solutions including partitions, railings, and custom display cases for a modern shopping complex.',
    client: 'Eastgate Shopping Centre',
    year: '2022',
    services: ['Partitions', 'Shopfronts']
  },
  {
    id: 4,
    title: 'Modern Facade',
    category: 'Facades',
    imageUrl: 'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a',
    location: 'Victoria Falls, Zimbabwe',
    description: 'Innovative facade design featuring custom aluminum cladding and strategic glass placement to maximize views while minimizing solar heat gain.',
    client: 'Victoria Hotel Group',
    year: '2022',
    services: ['Cladding', 'Glass & Aluminum']
  },
  {
    id: 5,
    title: 'Office Complex',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833',
    location: 'Harare, Zimbabwe',
    description: 'Multi-floor curtain wall installation with integrated sun-shading elements for a new office development.',
    client: 'Horizon Development Group',
    year: '2021',
    services: ['Curtain Walling', 'Cladding']
  },
  {
    id: 6,
    title: 'Residential Tower',
    category: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1551038247-3d9af20df552',
    location: 'Mutare, Zimbabwe',
    description: 'Complete glass and aluminum package for a luxury residential high-rise, including balcony railings, windows, and entrance systems.',
    client: 'Eastern Heights Development',
    year: '2021',
    services: ['Glass & Aluminum', 'Custom Solutions']
  },
  {
    id: 7,
    title: 'Financial District Office',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8',
    location: 'Harare, Zimbabwe',
    description: 'Sophisticated curtain wall system featuring reflective glass that complements the urban landscape while providing energy efficiency.',
    client: 'Wealth Management Partners',
    year: '2020',
    services: ['Curtain Walling', 'Glass & Aluminum']
  },
  {
    id: 8,
    title: 'Boutique Hotel Interior',
    category: 'Interior',
    imageUrl: 'https://images.unsplash.com/photo-1596436889106-be35e843f974',
    location: 'Nyanga, Zimbabwe',
    description: 'Interior glass features including decorative partitions and custom shower enclosures for an upscale boutique hotel.',
    client: 'Mountain View Hotels',
    year: '2020',
    services: ['Partitions', 'Custom Solutions']
  }
];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?q=80&w=1200" 
            alt="Modern architectural facade" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-2xl font-light">
            Explore our portfolio of architectural glass and aluminum installations across Zimbabwe.
          </p>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              Discover how our glass and aluminum solutions have transformed spaces across various industries and applications.
            </p>
          </div>
          
          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {projectCategories.map((category) => (
              <Button 
                key={category} 
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link to={`/projects/${project.id}`} key={project.id} className="group">
                <div className="relative overflow-hidden rounded-lg bg-foreground/5 aspect-[4/3]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                    <p className="text-white/80 text-sm">{project.location}</p>
                    <div className="mt-4">
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground">{project.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let us help you bring your vision to life with our expertise in glass and aluminum solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg">
                Request a Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
