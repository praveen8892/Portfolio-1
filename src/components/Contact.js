import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: null }));
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required.';
    if (!formData.email) {
      tempErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Email is not valid.';
    }
    if (!formData.message) tempErrors.message = 'Message is required.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
        <form onSubmit={handleSubmit} noValidate className="max-w-xl mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Name</label>
            <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Email</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Message</label>
            <textarea id="message" value={formData.message} onChange={handleChange} rows="5" className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Message"></textarea>
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
