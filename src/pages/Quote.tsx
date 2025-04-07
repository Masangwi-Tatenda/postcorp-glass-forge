
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, FileUp, CheckCircle } from 'lucide-react';

const quoteFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  company: z.string().optional(),
  projectType: z.string({
    required_error: "Please select a project type.",
  }),
  location: z.string().min(2, {
    message: "Project location is required.",
  }),
  timeframe: z.string({
    required_error: "Please select a timeframe.",
  }),
  budget: z.string({
    required_error: "Please select a budget range.",
  }),
  projectDetails: z.string().min(10, {
    message: "Project details must be at least 10 characters.",
  }),
  referralSource: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

const QuotePage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      location: "",
      timeframe: "",
      budget: "",
      projectDetails: "",
      referralSource: "",
    },
  });
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map(file => file.name);
      setUploadedFiles(prev => [...prev, ...newFiles]);
      toast.success(`${newFiles.length} file(s) uploaded successfully`);
    }
  };
  
  const removeFile = (fileName: string) => {
    setUploadedFiles(prev => prev.filter(file => file !== fileName));
  };
  
  const onSubmit = (data: QuoteFormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      console.log("Form submitted:", data);
      console.log("Uploaded files:", uploadedFiles);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };
  
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <section className="pt-32 pb-24">
          <div className="container max-w-3xl">
            <div className="bg-card rounded-lg p-12 text-center">
              <div className="mb-6 text-primary">
                <CheckCircle className="h-20 w-20 mx-auto" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Quote Request Received!</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for submitting your quote request. Our team will review your project details and get back to you within 24-48 business hours.
              </p>
              <p className="mb-10">
                A confirmation email has been sent to your email address with a summary of your request.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => window.location.href = '/'}>
                  Return to Homepage
                </Button>
                <Button variant="outline" onClick={() => window.location.href = '/projects'}>
                  Browse Our Projects
                </Button>
              </div>
            </div>
          </div>
        </section>
        
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
            src="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=1200" 
            alt="Glass building" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Request a Quote</h1>
          <p className="text-xl max-w-2xl font-light">
            Fill out the form below to receive a detailed quote for your glass and aluminum project.
          </p>
        </div>
      </section>
      
      {/* Quote Form Section */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Project Details</h2>
            <p className="text-muted-foreground mb-8">
              Please provide as much information as possible to help us understand your requirements.
              Fields marked with <span className="text-destructive">*</span> are required.
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Personal Information Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Contact Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name <span className="text-destructive">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address <span className="text-destructive">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="johndoe@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number <span className="text-destructive">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="+263 77 123 4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company (optional)" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                {/* Project Information Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Project Information</h3>
                  
                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Type <span className="text-destructive">*</span></FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="commercial">Commercial Building</SelectItem>
                            <SelectItem value="residential">Residential Property</SelectItem>
                            <SelectItem value="office">Office Interiors</SelectItem>
                            <SelectItem value="shopfront">Retail / Shopfront</SelectItem>
                            <SelectItem value="partition">Interior Partitions</SelectItem>
                            <SelectItem value="facade">Building Facade/Curtain Wall</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Location <span className="text-destructive">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="City, Area" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="timeframe"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Timeframe <span className="text-destructive">*</span></FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select timeframe" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="immediate">Immediate (1-2 weeks)</SelectItem>
                              <SelectItem value="soon">Soon (1-2 months)</SelectItem>
                              <SelectItem value="future">Future (3+ months)</SelectItem>
                              <SelectItem value="planning">Planning Phase Only</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Budget Range <span className="text-destructive">*</span></FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="under5k">Under $5,000</SelectItem>
                            <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                            <SelectItem value="15k-50k">$15,000 - $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="over100k">Over $100,000</SelectItem>
                            <SelectItem value="undecided">Undecided / Need Guidance</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="projectDetails"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Details <span className="text-destructive">*</span></FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please describe your project requirements, specifications, dimensions, and any other relevant details."
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                {/* File Upload Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Supporting Documents (Optional)</h3>
                  <p className="text-sm text-muted-foreground">
                    Upload any relevant files such as drawings, plans, or inspiration images.
                  </p>
                  
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <div className="mb-4 text-primary flex justify-center">
                      <FileUp className="h-12 w-12" />
                    </div>
                    <p className="mb-4">Drag and drop files here, or click to browse</p>
                    <input
                      type="file"
                      id="fileUpload"
                      className="hidden"
                      multiple
                      onChange={handleFileUpload}
                    />
                    <label htmlFor="fileUpload">
                      <Button type="button" variant="outline" className="cursor-pointer">
                        Browse Files
                      </Button>
                    </label>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Max 5 files. PDF, PNG, JPG (max 10MB each)
                    </p>
                  </div>
                  
                  {uploadedFiles.length > 0 && (
                    <div className="space-y-2">
                      <p className="font-medium">Uploaded Files:</p>
                      {uploadedFiles.map((file, index) => (
                        <div 
                          key={index} 
                          className="flex items-center justify-between bg-secondary/20 rounded p-3"
                        >
                          <span className="text-sm truncate max-w-[80%]">{file}</span>
                          <Button 
                            type="button" 
                            variant="ghost" 
                            size="sm"
                            onClick={() => removeFile(file)}
                          >
                            Remove
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Additional Information */}
                <FormField
                  control={form.control}
                  name="referralSource"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How did you hear about us?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="web-search">Web Search</SelectItem>
                          <SelectItem value="social-media">Social Media</SelectItem>
                          <SelectItem value="referral">Referral</SelectItem>
                          <SelectItem value="existing-customer">Existing Customer</SelectItem>
                          <SelectItem value="advertisement">Advertisement</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>This helps us understand how clients find our services.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="border-t pt-8">
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      "Submit Quote Request"
                    )}
                  </Button>
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default QuotePage;
