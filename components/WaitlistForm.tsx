'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you! You\'re on the waitlist. We\'ll be in touch soon.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to join waitlist. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-4">
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email" 
          required
          disabled={status === 'loading'}
          className="flex-1 px-6 py-4 rounded-full text-navy focus:outline-none focus:ring-2 focus:ring-gold disabled:opacity-50"
        />
        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="btn-primary whitespace-nowrap disabled:opacity-50"
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </button>
      </form>
      
      {message && (
        <p className={`text-center mb-8 ${status === 'success' ? 'text-gold' : 'text-red-400'}`}>
          {message}
        </p>
      )}
    </div>
  );
}
