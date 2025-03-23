import React, { useState } from "react";
import wiping from "../assets/wiping.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "628117996868"; // Format nomor: 62 untuk Indonesia
    const message = `Halo, saya ingin menghubungi Anda.\n\n*Nama:* ${formData.name}\n*No HP:* ${formData.phone}\n*Email:* ${formData.email}\n*Subjek:* ${formData.subject}\n*Pesan:* ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    // Buka WhatsApp di tab baru
    window.open(whatsappURL, "_blank");

    // Kosongkan form setelah submit
    setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact">

        <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <div className="w-full bg-yellow-400 text-white text-center py-16">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="mt-2 text-lg">We're here to help you with any inquiries.</p>
        </div>

        {/* Contact Section - Full Width & Height */}
        <div className="flex-grow w-full grid grid-cols-1 md:grid-cols-2">
            {/* Gambar */}
            <div className="h-full">
            <img src={wiping} alt="Contact Illustration" className="w-full h-full object-cover" />
            </div>

            {/* Contact Form */}
            <div className="flex flex-col justify-center px-8 md:px-16 mb-8 mt-8">
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" className="border p-3 w-full" value={formData.name} onChange={handleChange} required />
                <input type="text" name="phone" placeholder="Phone" className="border p-3 w-full" value={formData.phone} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" className="border p-3 w-full" value={formData.email} onChange={handleChange} required />
                <input type="text" name="subject" placeholder="Subject" className="border p-3 w-full" value={formData.subject} onChange={handleChange} required />
                <textarea name="message" placeholder="Message" className="border p-3 w-full h-32" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit" className="w-full bg-yellow-600 text-white py-3 hover:bg-yellow-700 transition">Kirim via WhatsApp</button>
            </form>
            </div>
        </div>
        </div>
    </section>
  );
};

export default ContactUs;
