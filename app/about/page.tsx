import { Key, Users, Award, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-muted-foreground">
              Discover how KeySmart revolutionized the way people carry keys and created a better everyday carry experience.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                KeySmart was founded in 2013 with a simple mission: eliminate the bulky key ring and create a better way for people to organize their keys.
              </p>
              <p className="text-muted-foreground mb-4">
                What started as a simple solution to an everyday problem has evolved into a complete line of innovative products designed to make your everyday carry more efficient and enjoyable.
              </p>
              <p className="text-muted-foreground">
                Today, KeySmart continues to push the boundaries of everyday carry, combining sleek design with smart technology to solve the problems you encounter every day.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="KeySmart team brainstorming"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <Key className="mx-auto h-12 w-12 mb-4 opacity-80" />
              <h3 className="text-4xl font-bold mb-2">2M+</h3>
              <p className="text-primary-foreground/80">Keys Organized</p>
            </div>
            <div className="p-6">
              <Users className="mx-auto h-12 w-12 mb-4 opacity-80" />
              <h3 className="text-4xl font-bold mb-2">500K+</h3>
              <p className="text-primary-foreground/80">Happy Customers</p>
            </div>
            <div className="p-6">
              <Award className="mx-auto h-12 w-12 mb-4 opacity-80" />
              <h3 className="text-4xl font-bold mb-2">15+</h3>
              <p className="text-primary-foreground/80">Design Awards</p>
            </div>
            <div className="p-6">
              <Clock className="mx-auto h-12 w-12 mb-4 opacity-80" />
              <h3 className="text-4xl font-bold mb-2">10+</h3>
              <p className="text-primary-foreground/80">Years of Innovation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground">
              Passionate individuals dedicated to creating innovative products that solve everyday problems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl overflow-hidden shadow-sm">
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Michael Peterson"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">Michael Peterson</h3>
                <p className="text-muted-foreground mb-4">Founder & CEO</p>
                <p className="text-sm text-muted-foreground">
                  A product designer with a vision to solve everyday problems through innovative solutions.
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden shadow-sm">
              <img
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Sarah Johnson"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">Sarah Johnson</h3>
                <p className="text-muted-foreground mb-4">Head of Product Design</p>
                <p className="text-sm text-muted-foreground">
                  With 15 years of experience in industrial design, Sarah leads our product innovation team.
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden shadow-sm">
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="David Chen"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">David Chen</h3>
                <p className="text-muted-foreground mb-4">Chief Technology Officer</p>
                <p className="text-sm text-muted-foreground">
                  David oversees all technology integration in our smart products and digital platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}