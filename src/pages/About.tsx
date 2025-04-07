
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, Clock, Users, Shield, Target, ThumbsUp } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      position: 'Managing Director',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      bio: 'With over 25 years of experience in the glass and aluminum industry, John leads Postcorp with a focus on innovation and quality.'
    },
    {
      name: 'Sarah Smith',
      position: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      bio: 'Sarah oversees all technical aspects of our projects, ensuring that designs meet engineering standards and client specifications.'
    },
    {
      name: 'Michael Brown',
      position: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
      bio: 'Michael ensures smooth execution of all projects, coordinating our skilled teams and maintaining our quality control processes.'
    },
    {
      name: 'Grace Moyo',
      position: 'Design Lead',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
      bio: 'Grace brings creative vision to our projects, translating client goals into innovative architectural glass solutions.'
    }
  ];

  const milestones = [
    {
      year: '1998',
      title: 'Company Founded',
      description: 'Postcorp Glass was established in Harare with a focus on quality glass installations.'
    },
    {
      year: '2005',
      title: 'Expansion to Commercial Projects',
      description: 'The company expanded its operations to include large-scale commercial projects across Zimbabwe.'
    },
    {
      year: '2010',
      title: 'Modern Manufacturing Facility',
      description: 'Opened a state-of-the-art manufacturing facility to enhance production capabilities.'
    },
    {
      year: '2015',
      title: 'ISO 9001 Certification',
      description: 'Achieved ISO 9001 certification for quality management systems.'
    },
    {
      year: '2020',
      title: 'Regional Expansion',
      description: 'Extended operations to neighboring countries with landmark projects in Zambia and Botswana.'
    },
    {
      year: '2023',
      title: 'Industry Leadership',
      description: 'Recognized as the leading architectural glass and aluminum solutions provider in Zimbabwe.'
    }
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Quality',
      description: 'We stand by the quality of our work, using only the finest materials and maintaining strict quality control processes.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We continuously seek innovative solutions to meet the evolving needs of modern architecture and construction.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaboration',
      description: 'We work closely with clients, architects, and contractors to ensure successful project outcomes.'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Timeliness',
      description: 'We understand the importance of project timelines and commit to delivering on schedule.'
    },
    {
      icon: <ThumbsUp className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from initial design to final installation.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Integrity',
      description: 'We conduct our business with the highest level of integrity and professionalism.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200" 
            alt="Modern office interior" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Postcorp Glass</h1>
          <p className="text-xl max-w-2xl font-light">
            Zimbabwe's leading provider of architectural glass and aluminum solutions for over 25 years.
          </p>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-6">
                Founded in 1998, Postcorp Glass has grown to become Zimbabwe's premier provider of architectural glass and aluminum solutions. For over two decades, we've been transforming spaces with innovative designs and premium installations.
              </p>
              <p className="mb-6">
                From humble beginnings as a small glazing workshop, we have evolved into a comprehensive architectural solutions company with a state-of-the-art manufacturing facility and a team of skilled professionals. Our commitment to quality and customer satisfaction has remained unwavering throughout our journey.
              </p>
              <p>
                Today, we're proud to have contributed to the Zimbabwe skyline with our work on numerous landmark buildings. We continue to push boundaries with innovative solutions that combine functionality, aesthetics, and sustainability.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1577041677443-8bbdfd8cce62?q=80&w=600" 
                alt="Glass manufacturing workshop" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-secondary/10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide our work ethic and approach to every project we undertake.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-lg p-8 hover:shadow-md transition-shadow">
                <div className="text-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Company Milestones */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones that have shaped our company's growth and evolution.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
            
            {/* Milestone Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2"></div>
                  <div className="hidden md:flex justify-center items-center">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-background"></div>
                    </div>
                  </div>
                  <div className="md:w-1/2 bg-card rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-secondary/10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals who lead our company to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden transition-transform hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements or to learn more about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg">
                Request a Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
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

export default AboutPage;
