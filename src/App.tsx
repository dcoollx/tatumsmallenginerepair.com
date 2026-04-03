import { Wrench, Phone, Mail, MapPin, Clock, Settings } from 'lucide-react';
import { ImageWithFallback } from './components/ImageWithFallback';
import { Logo } from './components/Logo';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const App = () => {

  const data = {
    name: 'Tatum\'s Small Engine Repair',
    ph_number: 6012496177,
    ph_number_alt: 4704211312,
    address: '5557 Big A Road Douglasville, GA 30135',
    mapLink: 'https://www.google.com/maps/place/5557+Big+A+Rd,+Douglasville,+GA+30135/@33.6535556,-84.7955664,17z/data=!3m1!4b1!4m6!3m5!1s0x88f4d7981fe3bb73:0x3ff5701e939c38ea!8m2!3d33.6535512!4d-84.7929915!16s%2Fg%2F11r49fvr97?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D', 
    email: 'tatumsmallengine@gmail.com'
  }
  function formatPhoneNumber(phone: string | number): string | null {
  // Remove all non-digit characters
  const cleaned = ('' + phone).replace(/\D/g, '');
  
  // Apply regex pattern for (XXX) XXX-XXXX
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return null;
}
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1689728071264-2645c8664f0d?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: '',
      photographer: 'Kenny Letsoin'
    },
    {
      url: 'https://images.unsplash.com/photo-1637640125496-31852f042a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pYyUyMHdvcmtzaG9wJTIwZ2FyYWdlfGVufDF8fHx8MTc3NTIzNDM3NHww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Wrenches and tools in box',
      photographer: 'Isabela Kronemberger'
    },
    {
      url: 'https://images.unsplash.com/photo-1708346061413-a3800ee639cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjaGFpbnNhdyUyMHRvb2xzJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3NTIzNDM3NHww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Chainsaw on log',
      photographer: 'Rk kuva'
    },
    {
      url: 'https://images.unsplash.com/photo-1596552254354-3ba557926c98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsYXduJTIwbW93ZXIlMjByZXBhaXIlMjBtZWNoYW5pY3xlbnwxfHx8fDE3NzUyMzQzNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Riding lawn mower',
      photographer: 'Richard Catabay'
    }
  ];


  const services = [
    {
      icon: Wrench,
      title: 'Lawn Mower Repair',
      description: 'Complete maintenance and repair for all types of lawn mowers, including riding and push mowers.'
    },
    {
      icon: Settings,
      title: 'Chainsaw Service',
      description: 'Expert chainsaw sharpening, maintenance, and repair to keep your equipment running smoothly.'
    },
    {
      icon: Wrench,
      title: 'Generator Repair',
      description: 'Reliable generator maintenance and repair services to ensure power when you need it most.'
    },
    {
      icon: Settings,
      title: 'Snow Blower Service',
      description: 'Pre-season tune-ups and repairs to prepare your snow blower for winter weather.'
    },
    {
      icon: Wrench,
      title: 'Pressure Washer Repair',
      description: 'Complete diagnostic and repair services for gas and electric pressure washers.'
    },
    {
      icon: Settings,
      title: 'Trimmer & Edger Service',
      description: 'Professional maintenance and repair for string trimmers, edgers, and brush cutters.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6 px-4 shadow-md">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <Logo width={48} height={48} />
            <h1 className="text-3xl">{data.name}</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1615467517177-3157c0cd7ff5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Mechanic working on engine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 text-white">
          <h2 className="text-5xl mb-4">Expert Small Engine Repair & Service</h2>
          <p className="text-2xl mb-6">
            Quality repairs for lawn mowers, chainsaws, generators, and more. Serving the community for over 20 years.
          </p>
          <div className="flex items-center justify-center gap-3 text-3xl">
            <Phone className="w-8 h-8" />
            <a href={`tel:${data.ph_number}`} className="hover:underline">
              {formatPhoneNumber(data.ph_number) ?? data.ph_number}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-accent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center mb-12">Our Workshop</h2>
          <h3 className=" text-center mb-12">ALL MAKES ALL MODELS</h3>
          <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={7000}>
            {galleryImages.map((image, index) => (
              <div key={index} className="px-2">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
            </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-secondary py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg mb-1">Phone</h3>
                  <a href={`tel:${data.ph_number}`} className="text-muted-foreground hover:underline">
                    {formatPhoneNumber(data.ph_number)}
                  </a>
                  <a href={`tel:${data.ph_number_alt}`} className="text-muted-foreground hover:underline">
                   {' '} ALT: {formatPhoneNumber(data.ph_number_alt)}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg mb-1">Email</h3>
                  <a href={`mailto:${data.email}`} className="text-muted-foreground hover:underline">
                    {data.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg mb-1">Address</h3>
                  <a href={data.mapLink} className="text-muted-foreground">
                   {data.address}
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg mb-3">Business Hours</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between gap-8">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 5:30 PM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Saturday:</span>
                      <span>8:00 AM - 3:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2026 {data.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}