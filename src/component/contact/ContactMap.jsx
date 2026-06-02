"use client";

import React from "react";

const ContactMap = () => {
  return (
    <section className="max-w-[1540px] mb-30 mx-auto w-full h-[600px] relative border-t border-slate-200 select-text">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9979743781254!2d73.82782417604313!3d18.528956968715875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf7e4569a913%3A0xe21287c88bbfb7db!2sSenapati%20Bapat%20Rd%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1717080000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Corporate Headquarters Map"
      />
    </section>
  );
};

export default ContactMap;
