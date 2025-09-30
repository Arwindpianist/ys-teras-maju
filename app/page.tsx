import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Building2,
  Cpu,
  Zap,
  Hammer,
  GraduationCap,
  Gamepad2,
  Factory,
  Utensils,
  Lightbulb,
  Network,
  Shield,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Award,
  Users,
  Target,
  TrendingUp,
  Clock,
  Wrench,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img 
                src="/ys-teras-maju-high-resolution-logo-removebg-preview.png" 
                alt="YS Teras Maju Logo" 
                className="h-10 w-auto"
              />
              <div className="text-lg font-bold text-primary">YS Teras Maju (M) Sdn Bhd</div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#services" className="text-sm text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#industries" className="text-sm text-foreground hover:text-primary transition-colors">
                Industries
              </a>
              <a href="#why-choose-us" className="text-sm text-foreground hover:text-primary transition-colors">
                Why Us
              </a>
              <a href="#contact" className="text-sm text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/modern-technology-circuit-board-abstract-dark-gree.jpg"
            alt="Technology background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center pt-16">
          <div className="flex justify-center mb-8">
            <img 
              src="/ys-teras-maju-high-resolution-logo.png" 
              alt="YS Teras Maju High Resolution Logo" 
              className="h-32 md:h-40 w-auto"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-primary text-balance">YS Teras Maju (M) Sdn Bhd</h1>
          <p className="text-lg md:text-xl font-medium mb-6 text-primary/70 text-balance italic">The smart solution path</p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
            Delivering comprehensive technology infrastructure, mechanical & electrical services, and civil engineering
            solutions across Malaysia's leading industries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6" asChild>
              <a href="#services">Explore Our Services</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 bg-transparent"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-foreground">About Us</h2>
            <p className="text-center text-lg text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
              Founded on 3rd July 2020, YS Teras Maju (M) Sdn Bhd has rapidly grown into a trusted solutions provider in
              IT, Electrical, and Civil works across Malaysia. We bring together decades of combined expertise in
              technology infrastructure, electrical engineering, and civil construction to serve diverse industries
              nationwide.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Company Overview */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Who We Are</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      YS Teras Maju (M) Sdn Bhd is a Malaysian-based integrated solutions provider specializing in IT
                      infrastructure, Mechanical & Electrical (M&E) services, and Civil Works. We serve as a one-stop
                      solution partner for businesses seeking reliable, innovative, and cost-effective project execution
                      across multiple disciplines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Our Expertise</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      With a team of certified engineers, technicians, and project managers, we bring deep technical
                      knowledge and hands-on experience to every project. Our multidisciplinary approach ensures
                      seamless integration of IT, electrical, and civil components for optimal performance and
                      efficiency.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Our Commitment</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We are committed to building long-term partnerships with our clients through consistent delivery
                      of quality workmanship, transparent communication, and responsive after-sales support. Your
                      success is our success, and we stand behind every project we undertake.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission, Vision, Values */}
              <div className="space-y-8">
                <Card className="bg-secondary border-secondary">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Target className="w-6 h-6 text-primary" />
                      <CardTitle className="text-2xl text-secondary-foreground">Our Mission</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary-foreground/90 leading-relaxed">
                      To deliver reliable, innovative, and cost-effective IT, Electrical, and Civil solutions tailored
                      to the evolving needs of our clients. We believe in building long-term partnerships based on
                      trust, quality, and excellence, while continuously adapting to technological advancements and
                      industry best practices.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-accent border-accent">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-6 h-6 text-primary" />
                      <CardTitle className="text-2xl text-accent-foreground">Our Vision</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-accent-foreground/90 leading-relaxed">
                      To become a leading integrated solutions provider in Malaysia and the region, recognized for our
                      unwavering commitment to quality, customer satisfaction, and innovation across multiple
                      industries. We aspire to be the first choice for businesses seeking comprehensive, reliable, and
                      future-ready infrastructure solutions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center text-foreground">Our Core Values</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "Professionalism & Integrity",
                    description: "Upholding the highest ethical standards in every interaction and project delivery",
                  },
                  {
                    icon: Lightbulb,
                    title: "Innovation & Technology",
                    description: "Embracing cutting-edge solutions and staying ahead of industry trends",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Customer-Centric Approach",
                    description:
                      "Prioritizing client needs and delivering customized solutions that exceed expectations",
                  },
                  {
                    icon: Award,
                    title: "Quality & Reliability",
                    description: "Ensuring excellence through rigorous quality control and proven methodologies",
                  },
                  {
                    icon: Network,
                    title: "End-to-End Solutions",
                    description: "Providing comprehensive services from consultation to implementation and support",
                  },
                  {
                    icon: Clock,
                    title: "Timely Delivery",
                    description: "Meeting deadlines and maintaining project schedules without compromising quality",
                  },
                ].map((value, index) => (
                  <Card
                    key={index}
                    className="bg-background border-border hover:border-primary transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="pt-6">
                      <value.icon className="w-10 h-10 mb-4 text-primary" />
                      <h4 className="font-bold text-foreground mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-foreground">Our Services</h2>
          <p className="text-center text-lg text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions across three core disciplines, designed to meet the complex infrastructure needs of
            modern businesses
          </p>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* IT Solutions */}
            <Card className="bg-card border-border hover:border-accent transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl text-accent mb-2">IT Solutions</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Complete technology infrastructure services from network design to ongoing IT management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Structured Cabling</p>
                      <p className="text-sm text-muted-foreground">
                        Cat6/Cat6a/Fiber optic cabling systems for data centers and office networks
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">IT Rack Solutions</p>
                      <p className="text-sm text-muted-foreground">
                        Server racks, cable management, and cooling solutions for optimal equipment performance
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Network & Server Infrastructure</p>
                      <p className="text-sm text-muted-foreground">
                        Supply, installation, and configuration of switches, routers, firewalls, and servers
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Managed IT Services</p>
                      <p className="text-sm text-muted-foreground">
                        24/7 monitoring, maintenance, and support for your IT infrastructure
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">IT Outsourcing</p>
                      <p className="text-sm text-muted-foreground">
                        Dedicated IT teams to handle your technology needs and strategic planning
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Application Solutions</p>
                      <p className="text-sm text-muted-foreground">
                        Custom software development, ERP implementation, and system integration
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* M&E Services */}
            <Card className="bg-card border-border hover:border-accent transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl text-accent mb-2">M&E Services</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Comprehensive mechanical and electrical engineering services for commercial and industrial facilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Electrical Supply & Installation</p>
                      <p className="text-sm text-muted-foreground">
                        Complete electrical systems including power distribution, wiring, and switchboards
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Air-Conditioning Systems</p>
                      <p className="text-sm text-muted-foreground">
                        HVAC design, installation, maintenance, and energy-efficient cooling solutions
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Lighting Solutions</p>
                      <p className="text-sm text-muted-foreground">
                        LED lighting systems, emergency lighting, and intelligent lighting controls
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">UPS & Power Backup</p>
                      <p className="text-sm text-muted-foreground">
                        Uninterruptible power supply systems and generators for critical operations
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">CCTV & Security Systems</p>
                      <p className="text-sm text-muted-foreground">
                        IP cameras, access control, and integrated security management platforms
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Fire Alarm & Safety Systems</p>
                      <p className="text-sm text-muted-foreground">
                        Fire detection, alarm systems, and compliance with safety regulations
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Building Automation</p>
                      <p className="text-sm text-muted-foreground">
                        Smart building systems for energy management and operational efficiency
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Civil Works */}
            <Card className="bg-card border-border hover:border-accent transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Hammer className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl text-accent mb-2">Civil Works</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Professional civil engineering and construction services for building infrastructure and renovations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Waterproofing Solutions</p>
                      <p className="text-sm text-muted-foreground">
                        Advanced waterproofing for roofs, basements, and external walls to prevent water damage
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Ceiling Works</p>
                      <p className="text-sm text-muted-foreground">
                        Suspended ceilings, acoustic panels, and decorative ceiling installations
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Roofing Services</p>
                      <p className="text-sm text-muted-foreground">
                        Roof installation, repair, and maintenance for commercial and industrial buildings
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Plastering & Finishing</p>
                      <p className="text-sm text-muted-foreground">
                        Professional plastering, skimming, and surface preparation for quality finishes
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Renovation & Refurbishment</p>
                      <p className="text-sm text-muted-foreground">
                        Complete renovation services for offices, retail spaces, and industrial facilities
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Structural Support</p>
                      <p className="text-sm text-muted-foreground">
                        Foundation work, structural repairs, and building reinforcement services
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section id="industries" className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-secondary-foreground">
            Industries We Serve
          </h2>
          <p className="text-center text-lg text-secondary-foreground/80 mb-16 max-w-3xl mx-auto leading-relaxed">
            Trusted by leading organizations across diverse sectors, delivering tailored solutions that address
            industry-specific challenges and requirements
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: GraduationCap,
                title: "Education",
                description:
                  "Supporting smart campuses with advanced IT infrastructure, digital classrooms, campus-wide WiFi, and integrated learning management systems for universities, colleges, and schools",
              },
              {
                icon: Gamepad2,
                title: "Gaming & Entertainment",
                description:
                  "High-performance networks, robust power systems, and specialized cooling solutions for gaming centers, esports arenas, and entertainment venues requiring 24/7 uptime",
              },
              {
                icon: Zap,
                title: "Utilities & Energy",
                description:
                  "Reliable infrastructure for critical operations including power distribution facilities, water treatment plants, and utility management centers with redundant systems and monitoring",
              },
              {
                icon: Factory,
                title: "Manufacturing",
                description:
                  "End-to-end IT and electrical solutions for production efficiency, including industrial automation, SCADA systems, power quality management, and facility infrastructure",
              },
              {
                icon: Utensils,
                title: "Hospitality",
                description:
                  "Creating comfortable, connected, and energy-efficient environments for hotels, resorts, and restaurants with guest WiFi, building automation, and integrated management systems",
              },
              {
                icon: Building2,
                title: "Commercial Real Estate",
                description:
                  "Comprehensive building services for office towers, shopping malls, and mixed-use developments including tenant fit-outs, facility management, and smart building solutions",
              },
            ].map((industry, index) => (
              <Card
                key={index}
                className="bg-background border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
              >
                <CardHeader>
                  <industry.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl text-foreground">{industry.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-foreground">Why Choose Us</h2>
          <p className="text-center text-lg text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
            Partner with a team that combines technical excellence, industry experience, and unwavering commitment to
            your success
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Wrench,
                title: "Expertise Across Disciplines",
                description:
                  "Our multidisciplinary team brings comprehensive knowledge in IT, M&E, and Civil Works, enabling seamless integration and coordination across all project phases",
              },
              {
                icon: Target,
                title: "Customized Solutions",
                description:
                  "We don't believe in one-size-fits-all. Every solution is tailored to your specific business needs, budget constraints, and long-term objectives",
              },
              {
                icon: Award,
                title: "Quality Assurance",
                description:
                  "Rigorous quality control standards and certified processes ensure excellence in every project, from initial design to final commissioning and handover",
              },
              {
                icon: Network,
                title: "End-to-End Services",
                description:
                  "Complete project lifecycle management from consultation and design through procurement, installation, testing, and ongoing maintenance support",
              },
              {
                icon: MapPin,
                title: "Local Presence & Knowledge",
                description:
                  "Deep understanding of Malaysian market dynamics, regulatory requirements, and local supplier networks for efficient project execution",
              },
              {
                icon: Clock,
                title: "Proven Track Record",
                description:
                  "Years of successful project delivery across multiple industries, with satisfied clients who trust us for repeat business and referrals",
              },
              {
                icon: Shield,
                title: "Safety & Compliance",
                description:
                  "Strict adherence to safety protocols, industry standards, and regulatory compliance including DOSH, CIDB, and relevant certifications",
              },
              {
                icon: Users,
                title: "Dedicated Support Team",
                description:
                  "Responsive customer service and technical support available throughout the project lifecycle and beyond, ensuring your operations run smoothly",
              },
              {
                icon: TrendingUp,
                title: "Future-Ready Solutions",
                description:
                  "We design with scalability and future growth in mind, ensuring your infrastructure can adapt to evolving business needs and technological advancements",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-card border-l-4 border-l-accent hover:border-l-primary transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <feature.icon className="w-8 h-8 text-primary mb-3" />
                  <CardTitle className="text-lg text-foreground">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Customers Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-foreground">Our Customers</h2>
          <p className="text-center text-lg text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
            Trusted by leading organizations across Malaysia to deliver reliable, innovative solutions
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto items-center">
            <div className="flex items-center justify-center p-6 bg-background rounded-lg border border-border hover:border-primary transition-all duration-300">
              <img
                src="/qi-services-logo.jpg"
                alt="Qi Services"
                className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-background rounded-lg border border-border hover:border-primary transition-all duration-300">
              <img
                src="/mamee-double-decker-logo.jpg"
                alt="Mamee-Double Decker (M) Sdn Bhd"
                className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-background rounded-lg border border-border hover:border-primary transition-all duration-300">
              <img
                src="/n-osairis-technology-solutions-logo.jpg"
                alt="N'osairis Technology Solutions"
                className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-background rounded-lg border border-border hover:border-primary transition-all duration-300">
              <img
                src="/columbia-asia-hospital-logo.jpg"
                alt="Columbia Asia"
                className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-background rounded-lg border border-border hover:border-primary transition-all duration-300">
              <img
                src="/mcdonalds-logo.png"
                alt="McDonald's"
                className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-secondary-foreground">
            Strategic Partners
          </h2>
          <p className="text-center text-lg text-secondary-foreground/80 mb-16 max-w-3xl mx-auto leading-relaxed">
            Collaborating with industry-leading technology providers to deliver world-class solutions
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto items-center">
            <div className="flex items-center justify-center p-6 bg-background rounded-lg border border-border hover:border-primary transition-all duration-300">
              <img
                src="/hp-hewlett-packard-logo.jpg"
                alt="HP"
                className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-background rounded-lg border border-border hover:border-primary transition-all duration-300">
              <img
                src="/hpe-aruba-networks-logo.jpg"
                alt="HPE Aruba"
                className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-background rounded-lg border border-border hover:border-primary transition-all duration-300">
              <img
                src="/tm-telekom-malaysia-logo.jpg"
                alt="TM"
                className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-background rounded-lg border border-border hover:border-primary transition-all duration-300">
              <img
                src="/time-dotcom-telecommunications-logo.jpg"
                alt="Time"
                className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-background rounded-lg border border-border hover:border-primary transition-all duration-300">
              <img
                src="/panduit-network-infrastructure-logo.jpg"
                alt="Panduit"
                className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-accent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-accent-foreground">Contact Us</h2>
            <p className="text-center text-lg text-accent-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to discuss your project? Get in touch with our team for a consultation and discover how we can help
              transform your infrastructure
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-accent-foreground mb-6">Get In Touch</h3>
                  <p className="text-accent-foreground/80 mb-6 leading-relaxed">
                    Whether you need a comprehensive infrastructure overhaul or specific technical services, our team is
                    ready to provide expert consultation and competitive quotations.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-accent-foreground mb-1">Head Office</p>
                      <p className="text-accent-foreground/80 leading-relaxed">
                        YS Teras Maju (M) Sdn Bhd
                        <br />
                        15-23A Menara Flexus
                        <br />
                        No 92 Off Jalan Kuching
                        <br />
                        51200 Kuala Lumpur
                        <br />
                        Malaysia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-accent-foreground mb-1">Phone</p>
                      <p className="text-accent-foreground/80">
                        Office: [Insert Office Phone]
                        <br />
                        Mobile: [Insert Mobile Phone]
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-accent-foreground mb-1">Email</p>
                      <p className="text-accent-foreground/80">
                        General: [Insert General Email]
                        <br />
                        Sales: [Insert Sales Email]
                        <br />
                        Support: [Insert Support Email]
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-accent-foreground mb-1">Business Hours</p>
                      <p className="text-accent-foreground/80">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 1:00 PM
                        <br />
                        Sunday & Public Holidays: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-background rounded-lg p-8 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-6">Send Us A Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="First Name *"
                        className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Last Name *"
                        className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address *"
                      className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Company Name"
                      className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Subject *"
                      className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Tell us about your project requirements *"
                      rows={5}
                      className="bg-card border-border text-foreground placeholder:text-muted-foreground resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
                  >
                    Send Message
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">YS Teras Maju (M) Sdn Bhd</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your trusted partner for integrated IT, M&E, and Civil solutions across Malaysia
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#industries" className="text-muted-foreground hover:text-primary transition-colors">
                    Industries
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2">
                <li className="text-muted-foreground">IT Solutions</li>
                <li className="text-muted-foreground">M&E Services</li>
                <li className="text-muted-foreground">Civil Works</li>
                <li className="text-muted-foreground">Managed Services</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} YS Teras Maju (M) Sdn Bhd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
