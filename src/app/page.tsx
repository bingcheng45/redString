import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RedString | Connect & Experience',
  description: 'Find your perfect match and unlock exclusive experiences together with RedString - where meaningful connections lead to memorable experiences.',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="container-section relative overflow-hidden bg-gradient-primary dark:bg-gradient-dark">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="font-heading text-5xl lg:text-6xl font-bold">
              <span className="text-primary">Connect</span> and{" "}
              <span className="text-accent">Experience</span>
            </h1>
            <p className="text-lg lg:text-xl max-w-lg">
              RedString brings people together through meaningful connections and unlocks exclusive experiences for you to enjoy together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Join the Waitlist
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            {/* Phone mockups will go here */}
            <div className="p-8 text-center">
              <p className="text-neutral-dark dark:text-neutral-light font-medium">
                App mockups coming soon
              </p>
            </div>
          </div>
        </div>
        {/* Red string animation will go here */}
      </section>

      {/* Value Proposition Section */}
      <section id="benefits" className="container-section bg-neutral-light dark:bg-neutral-dark">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose RedString?</h2>
          <p className="max-w-2xl mx-auto text-lg">
            Our unique approach combines meaningful connections with exclusive experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Value proposition cards will go here */}
          {[
            {
              title: "Quality Matches",
              description: "Connect with people who share your interests and values"
            },
            {
              title: "Exclusive Deals",
              description: "Unlock special offers at restaurants, activities, and more"
            },
            {
              title: "Shared Experiences",
              description: "Create lasting memories with exciting date ideas"
            },
          ].map((item, index) => (
            <div key={index} className="card p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deal Partners Showcase */}
      <section id="partners" className="container-section bg-secondary/10 dark:bg-primary/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Exclusive Experiences</h2>
          <p className="max-w-2xl mx-auto text-lg">
            When you match, you unlock special offers from our premium partners
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Partner logos will go here */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="aspect-video bg-neutral-light dark:bg-neutral-dark rounded-lg flex items-center justify-center">
              <p className="text-neutral-dark/30 dark:text-neutral-light/30">Partner Logo</p>
            </div>
          ))}
        </div>
      </section>

      {/* App Preview Section */}
      <section id="app-preview" className="container-section bg-neutral-light dark:bg-neutral-dark">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="max-w-2xl mx-auto text-lg">
            A simple journey from signing up to enjoying exclusive experiences
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            {/* App preview mockups will go here */}
            <div className="bg-neutral-light dark:bg-neutral-dark p-8 rounded-lg text-center">
              <p className="text-neutral-dark/30 dark:text-neutral-light/30">App Preview</p>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-8">
            {/* App features will go here */}
            {[
              {
                title: "Create Your Profile",
                description: "Sign up and tell us about yourself, your interests, and what you're looking for"
              },
              {
                title: "Connect with Matches",
                description: "Our algorithm finds quality matches based on compatibility and shared interests"
              },
              {
                title: "Unlock Exclusive Deals",
                description: "When you match, you'll unlock special offers for amazing experiences to enjoy together"
              },
            ].map((item, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Signup Component */}
      <section id="waitlist" className="container-section bg-primary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Join the Waitlist</h2>
          <p className="mb-8 text-lg">
            Be among the first to experience RedString when we launch. Early members will receive special perks!
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="input-field text-neutral-dark"
              required
            />
            <button
              type="submit"
              className="bg-accent text-white px-6 py-3 rounded-full font-medium hover:shadow-glow-accent transition-all duration-300 sm:whitespace-nowrap"
            >
              Join Now
            </button>
          </form>
          
          <p className="mt-4 text-sm opacity-80">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-dark text-neutral-light py-12">
        <div className="container-section">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">RedString</h3>
              <p className="opacity-80">
                Connecting people through meaningful relationships and shared experiences.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <p className="opacity-80">info@redstring.com</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="opacity-80 hover:opacity-100">Twitter</a>
                <a href="#" className="opacity-80 hover:opacity-100">Instagram</a>
                <a href="#" className="opacity-80 hover:opacity-100">Facebook</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-white/10 text-center">
            <p className="opacity-60">
              &copy; {new Date().getFullYear()} RedString. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
