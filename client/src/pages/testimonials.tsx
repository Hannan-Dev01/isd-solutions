import React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { useScrollAnimation } from "../lib/scroll-animations";
import amazonAgri from "/assets/images/amazon-agri.png";
import pakistanHolstein from "/assets/images/pakistan-holsten-logo.jpg";
import enviro from "/assets/images/enviro-logo.png";
import vendorCity from "/assets/images/vendor_city_logo.jpg";
import qingdaoHound from "/assets/images/qhp-logo.jpg";
import treetCorp from "/assets/images/treet-logo.png";
import haier from "/assets/images/haier.png";
import foton from "/assets/images/forland-logo.jpg";
import mg from "/assets/images/mg.png";

export default function Testimonials() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation();
  const [logosRef, logosVisible] = useScrollAnimation();

  const fadeInUp = "opacity-0 translate-y-8 transition-all duration-700";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const slideInLeft = "opacity-0 -translate-x-8 transition-all duration-700";
  const slideInLeftVisible = "opacity-100 translate-x-0";

  const testimonials = [
    {
      id: 1,
      name: "Amazon Agri",
      position: "German",
      company: "Amazon Agri",
      content:
        "At Amazon Agri, we've had the privilege of partnering with ISD Solutions on several projects, and the experience has been truly remarkable. Their innovative solutions and unwavering commitment to excellence have had a transformative impact on our business. ISD Solutions doesn't just provide technology; they provide tailored solutions that align perfectly with our goals. Their team's deep expertise, professionalism, and dedication have not only solved complex challenges but have also elevated our projects to new heights.",
      rating: 5,
      avatar: amazonAgri,
    },
    {
      id: 2,
      name: "Pakistan Holstein Pvt Ltd",
      position: "Pakistan",
      company: "Pakistan Holstein Pvt Ltd",
      content:
        "Collaborating closely with ISD Solutions has been an outstanding journey. Their technical expertise and innovative perspectives have seamlessly merged with our vision, resulting in an app that surpasses our expectations. ISD Solution's commitment to precision, user experience, and creativity has enhanced every facet of the app's functionality. Their cooperative approach and punctual delivery have not only made the entire process efficient but also enjoyable.",
      rating: 5,
      avatar: pakistanHolstein,
    },
    {
      id: 3,
      name: "Enviro",
      position: "Pakistan",
      company: "Enviro",
      content:
        "Collaborating with ISD Solutions has been a transformative experience for Enviro. Their ability to craft innovative solutions that align seamlessly with our objectives has propelled our projects to new heights. ISD Solution's commitment to excellence and deep technical expertise have not only addressed our challenges but have also opened doors to new possibilities. With ISD Solutions as a partner, we've harnessed the power of technology to drive our success forward, and their contributions continue to shape our journey in remarkable ways.",
      rating: 5,
      avatar: enviro,
    },
    {
      id: 4,
      name: "JW Vendor City",
      position: "Pakistan",
      company: "JW Vendor City",
      content:
        "Working closely with ISD Solutions has been an exceptional journey. Their technical prowess and creative insights have seamlessly blended with our vision, resulting in an app that exceeds our expectations. ISD Solution's dedication to detail, user experience, and innovation has enriched every aspect of the app's functionality. Their collaborative approach and timely delivery have made the entire process not only efficient but also enjoyable and their partnership continues to be invaluable as we strive for excellence in the tech realm.",
      rating: 5,
      avatar: vendorCity,
    },
    {
      id: 5,
      name: "JW Sez",
      position: "Pakistan",
      company: "JW Sez",
      content:
        "ISD Solutions has been instrumental in transforming our business operations through their innovative ERP solutions. Their team's deep understanding of our industry needs and their ability to deliver customized solutions has exceeded our expectations. The implementation was smooth, and the results have been outstanding.",
      rating: 5,
      avatar: vendorCity,
    },
    {
      id: 6,
      name: "Qingdao Hound Pakistan (Pvt.) Ltd.",
      position: "Pakistan",
      company: "Qingdao Hound Pakistan (Pvt.) Ltd.",
      content:
        "Partnering with ISD Solutions for our digital transformation has been a game-changer. Their expertise in modern technologies and their commitment to understanding our unique business challenges has resulted in solutions that truly drive value. The team is professional, responsive, and delivers quality work consistently.",
      rating: 5,
      avatar: qingdaoHound,
    },
    {
      id: 7,
      name: "Treet Corporation Limited",
      position: "Pakistan",
      company: "Treet Corporation Limited",
      content:
        "ISD Solutions has consistently delivered exceptional results for our technology initiatives. Their comprehensive approach to project management and their technical expertise have made them a trusted partner in our digital journey. We highly recommend their services to any organization looking for reliable IT solutions.",
      rating: 5,
      avatar: treetCorp,
    },
    {
      id: 8,
      name: "Haier",
      position: "Pakistan",
      company: "Haier",
      content:
        "ISD Solutions supported Haier with FBR integration for seamless compliance. Our collaboration ensured smooth tax reporting and operational efficiency, enhancing overall business performance.",
      rating: 5,
      avatar: haier,
    },
    {
      id: 9,
      name: "Foton JW Auto Park",
      position: "Pakistan",
      company: "Foton JW Auto Park",
      content:
        "Partnering with ISD Solutions for FBR integration enabled Foton JW Auto Park to streamline tax processes effortlessly. Their technical expertise and timely support made the integration smooth and hassle-free.",
      rating: 5,
      avatar: foton,
    },
    {
      id: 10,
      name: "MG JW Automobile Pakistan",
      position: "Pakistan",
      company: "MG JW Automobile Pakistan",
      content:
        "With ISD Solutions handling our FBR integration, MG JW Automobile Pakistan experienced seamless compliance and accurate reporting. Their tailored solutions ensured reliability and efficiency.",
      rating: 5,
      avatar: mg,
    },
  ];

  const companyLogos = [
    "Amazon Agri",
    "Pakistan Holstein",
    "Enviro",
    "JW Vendor City",
    "JW Sez",
    "Qingdao Hound Pakistan",
    "Treet Corporation Limited",
    "ISD Solutions",
    "Haier",
    "Foton JW Auto Park",
    "MG JW Automobile Pakistan",
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={headerRef as any}
            className={`text-center mb-16 ${fadeInUp} ${
              headerVisible ? fadeInUpVisible : ""
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Client <span className="text-gradient-red">Testimonials</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about our services.
            </p>
          </div>

          <div
            ref={testimonialsRef as any}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ${slideInLeft} ${
              testimonialsVisible ? slideInLeftVisible : ""
            }`}
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="bg-card border-border card-hover group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex text-primary-red text-xl">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} fill="currentColor" size={20} />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed text-sm">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name} - ${testimonial.position}`}
                      className="w-12 h-12 rounded-full border-2 border-primary-red mr-4"
                    />
                    <div>
                      <h4 className="text-foreground font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Client Logos */}
          <div
            ref={logosRef as any}
            className={`mt-16 text-center ${fadeInUp} ${
              logosVisible ? fadeInUpVisible : ""
            }`}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
              {companyLogos.map((company, index) => (
                <div
                  key={company}
                  className="bg-muted h-12 rounded flex items-center justify-center text-muted-foreground font-bold text-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
