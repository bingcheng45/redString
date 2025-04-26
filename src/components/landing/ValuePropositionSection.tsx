'use client';

import ScrollReveal from '../animations/ScrollReveal';

// Value proposition data
const benefitItems = [
  {
    title: "Quality Matches",
    description: "Connect with people who share your interests and values. Our algorithm focuses on compatibility and meaningful connections."
  },
  {
    title: "Exclusive Deals",
    description: "Unlock special offers at restaurants, activities, and more. Each match opens doors to new experiences you can enjoy together."
  },
  {
    title: "Shared Experiences",
    description: "Create lasting memories with exciting date ideas. Turn connections into adventures and stories worth telling."
  },
];

export default function ValuePropositionSection() {
  return (
    <section id="benefits" className="container-section bg-neutral-light dark:bg-neutral-dark">
      <ScrollReveal delay={0.1}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose RedString?</h2>
          <p className="max-w-2xl mx-auto text-lg">
            Our unique approach combines meaningful connections with exclusive experiences
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefitItems.map((item, index) => (
          <ScrollReveal
            key={index}
            delay={0.2 + index * 0.1}
            direction={index % 2 === 0 ? 'up' : 'down'}
          >
            <div className="card p-6 hover:shadow-xl transition-shadow h-full">
              <h3 className="text-xl font-bold mb-4 text-primary">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
} 