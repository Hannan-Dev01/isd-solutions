import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Card, CardContent } from "./ui/card";
import { 
  Cloud, 
  Code, 
  Database, 
  Smartphone, 
  Settings,
  FileText,
  Calculator,
  Building2,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const services = [
  {
    id: "odoo-consultant",
    title: "Odoo Consultant",
    description: "Odoo serves as a centralized platform for managing key business functions, including customer relationship management (CRM), human resources, and more.",
    icon: Building2,
    features: [
      "CRM Implementation & Customization",
      "HR Management Systems",
      "Inventory & Supply Chain",
      "Financial Management",
      "E-commerce Integration",
      "Multi-company Setup"
    ],
    benefits: [
      "Centralized business management",
      "Improved operational efficiency",
      "Real-time data insights",
      "Scalable business solutions"
    ]
  },
  {
    id: "erp-next",
    title: "ERP Next",
    description: "Comprehensive ERP solutions to streamline your business processes and improve operational efficiency.",
    icon: FileText,
    features: [
      "Process Automation",
      "Resource Planning",
      "Business Intelligence",
      "Integration Services",
      "Custom Module Development",
      "Multi-location Management"
    ],
    benefits: [
      "Streamlined business processes",
      "Improved decision making",
      "Reduced operational costs",
      "Enhanced productivity"
    ]
  },
  {
    id: "fbr-digital-invoicing",
    title: "FBR Digital Invoicing",
    description: "Digital invoicing solutions compliant with Federal Board of Revenue requirements for seamless tax management.",
    icon: Calculator,
    features: [
      "FBR Compliance Integration",
      "Digital Invoice Generation",
      "Tax Calculation & Management",
      "Audit Trail & Reporting",
      "Real-time Tax Updates",
      "Multi-branch Support"
    ],
    benefits: [
      "FBR compliance assurance",
      "Automated tax calculations",
      "Reduced manual errors",
      "Simplified audit processes"
    ]
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to optimize your business operations.",
    icon: Cloud,
    features: [
      "AWS/Azure/GCP Migration",
      "Serverless Architecture",
      "Auto Scaling & Load Balancing",
      "Cost Optimization",
      "24/7 Cloud Monitoring",
      "Disaster Recovery"
    ],
    benefits: [
      "Reduce infrastructure costs by up to 40%",
      "Improve application performance",
      "Enhanced security and compliance",
      "Scalable and flexible solutions"
    ]
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Modern, responsive web applications built with cutting-edge technologies.",
    icon: Code,
    features: [
      "React/Next.js Applications",
      "Node.js Backend Development",
      "Responsive Design",
      "SEO Optimization",
      "E-commerce Solutions",
      "API Development & Integration"
    ],
    benefits: [
      "Fast and responsive user experience",
      "SEO-friendly architecture",
      "Scalable and maintainable code",
      "Cross-browser compatibility"
    ]
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
    features: [
      "React Native Development",
      "Flutter Applications",
      "Native iOS/Android",
      "App Store Publishing",
      "Push Notifications",
      "Offline Functionality"
    ],
    benefits: [
      "Cross-platform compatibility",
      "Native performance",
      "App store optimization",
      "Regular updates and maintenance"
    ]
  },
  {
    id: "application-bug-fixes",
    title: "Application Bug Fixes",
    description: "From priority bug-fixing, technical investigations and change requests, we'll support and maintain your software.",
    icon: Settings,
    features: [
      "Critical Bug Resolution",
      "Technical Investigations",
      "Change Request Implementation",
      "Software Maintenance",
      "Performance Optimization",
      "Code Refactoring"
    ],
    benefits: [
      "Improved application stability",
      "Enhanced user experience",
      "Reduced downtime",
      "Long-term software health"
    ]
  },
  {
    id: "oracle-ebs-upgrade",
    title: "Oracle EBS Upgrade",
    description: "Oracle E-Business Suite (EBS) upgrade is the process of transitioning an existing EBS installation to a newer version released by Oracle Corporation.",
    icon: Database,
    features: [
      "Version Migration Planning",
      "Data Migration & Validation",
      "System Testing & QA",
      "User Training & Documentation",
      "Performance Optimization",
      "Go-live Support"
    ],
    benefits: [
      "Access to latest features",
      "Enhanced security and compliance",
      "Improved performance",
      "Extended support lifecycle"
    ]
  }
];

export default function ServicesAccordion() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-red">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ERP, AI, software development, and digital transformation services
            designed to streamline operations and accelerate business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {/* Services Accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {services.map((service, index) => (
                <AccordionItem 
                  key={service.id} 
                  value={service.id}
                  className="border border-border rounded-lg overflow-hidden bg-card shadow-sm"
                >
                  <AccordionTrigger className="px-6 py-6 hover:bg-accent/50 transition-colors">
                    <div className="flex items-center space-x-4 min-w-0">
                      <div className="text-primary-red flex-shrink-0">
                        <service.icon size={28} />
                      </div>
                      <div className="text-left min-w-0 flex-1">
                        <h3 className="text-lg font-semibold text-foreground">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-8">
                      {/* Features */}
                      <div>
                        <h4 className="text-md font-semibold text-foreground mb-4 flex items-center">
                          <ArrowRight className="mr-2 text-primary-red" size={18} />
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <CheckCircle className="text-primary-red flex-shrink-0" size={18} />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="text-md font-semibold text-foreground mb-4 flex items-center">
                          <ArrowRight className="mr-2 text-primary-red" size={18} />
                          Business Benefits
                        </h4>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="text-sm text-muted-foreground flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary-red rounded-full mt-2 flex-shrink-0"></div>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Service Overview Card */}
          <div className="space-y-8">
            <Card className="bg-card border-border shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Why Choose Our Services?
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-primary-red" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-base mb-2">Expert Team</h4>
                      <p className="text-sm text-muted-foreground">
                        Experienced professionals with deep expertise across all technology domains.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-primary-red" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-base mb-2">Quality Assurance</h4>
                      <p className="text-sm text-muted-foreground">
                        Rigorous testing and quality control processes ensure reliable solutions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-primary-red" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-base mb-2">24/7 Support</h4>
                      <p className="text-sm text-muted-foreground">
                        Round-the-clock support to ensure your systems are always running smoothly.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-primary-red" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-base mb-2">Custom Solutions</h4>
                      <p className="text-sm text-muted-foreground">
                        Tailored solutions designed specifically for your business needs and goals.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="bg-card border-border shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Our Track Record
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient-red mb-3">150+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient-red mb-3">50+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient-red mb-3">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient-red mb-3">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
} 