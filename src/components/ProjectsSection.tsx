
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const projectCategories = ['All', 'Commercial', 'Residential', 'Interior', 'Facades'];

const projects = [
  {
    id: 1,
    title: 'Corporate Headquarters',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511',
    location: 'Harare, Zimbabwe'
  },
  {
    id: 2,
    title: 'Luxury Residence',
    category: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
    location: 'Borrowdale, Zimbabwe'
  },
  {
    id: 3,
    title: 'Shopping Mall Interior',
    category: 'Interior',
    imageUrl: 'https://images.unsplash.com/photo-1439337153520-7082a56a81f4',
    location: 'Bulawayo, Zimbabwe'
  },
  {
    id: 4,
    title: 'Modern Facade',
    category: 'Facades',
    imageUrl: 'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a',
    location: 'Victoria Falls, Zimbabwe'
  },
  {
    id: 5,
    title: 'Office Complex',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833',
    location: 'Harare, Zimbabwe'
  },
  {
    id: 6,
    title: 'Residential Tower',
    category: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1551038247-3d9af20df552',
    location: 'Mutare, Zimbabwe'
  }
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-3">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our portfolio of architectural glass and aluminum installations across Zimbabwe.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg bg-foreground/5 aspect-[4/3]">
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
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button size="lg">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
