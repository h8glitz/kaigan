import React, { useState } from 'react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your API
      console.log('Submitted email:', email);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset the submission status after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl mb-4 font-light tracking-wider uppercase">Join Our Newsletter</h2>
          <p className="mb-8 text-gray-600">
            Subscribe to receive updates on new arrivals, special offers and exclusive events.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-grow px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 transition-opacity hover:opacity-90"
            >
              {isSubmitted ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;