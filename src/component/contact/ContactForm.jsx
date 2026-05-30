"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@/component/common/Button";

const ContactForm = () => {
  const searchParams = useSearchParams();
  const isConsultationMode = searchParams.get("consultation") === "true";

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: isConsultationMode ? "consultation" : "general",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Auto-fill inquiry type if consultation mode is active
  useEffect(() => {
    if (isConsultationMode) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: "consultation",
        subject: "Request for Consultation",
      }));
    }
  }, [isConsultationMode]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Full name is required";

    if (!formData.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number (min 10 digits)";
    }

    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message cannot be empty";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Mock API Call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "general",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-24 bg-white select-text">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT COLUMN: CONTACT FORM (Col 7) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-8 sm:p-10 shadow-sm">
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-black text-primary uppercase mb-2">
                Submit Business Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-normal">
                Please fill out the form below. Fields marked with{" "}
                <span className="text-red-500">*</span> are mandatory.
              </p>
            </div>

            {submitSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 p-8 text-center text-slate-800">
                <svg
                  className="w-12 h-12 text-emerald-500 mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h4 className="text-lg font-bold text-emerald-800 uppercase mb-2">
                  Inquiry Submitted Successfully
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Thank you for reaching out to M/S Chetankumar Bhagwan
                  Suryawanshi. Your inquiry has been registered, and a regional
                  manager will follow up with you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-2.5 bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Name & Email Group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-slate-50 border text-sm focus:outline-none focus:bg-white transition-all ${
                        formErrors.name
                          ? "border-red-400 focus:ring-1 focus:ring-red-100"
                          : "border-slate-200 focus:border-primary-light focus:ring-4 focus:ring-primary-light/5"
                      }`}
                      placeholder="John Doe"
                    />
                    {formErrors.name && (
                      <p className="text-[10px] font-bold text-red-500 mt-1.5">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-slate-50 border text-sm focus:outline-none focus:bg-white transition-all ${
                        formErrors.email
                          ? "border-red-400 focus:ring-1 focus:ring-red-100"
                          : "border-slate-200 focus:border-primary-light focus:ring-4 focus:ring-primary-light/5"
                      }`}
                      placeholder="john@example.com"
                    />
                    {formErrors.email && (
                      <p className="text-[10px] font-bold text-red-500 mt-1.5">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone & Inquiry Type Group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-2">
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-slate-50 border text-sm focus:outline-none focus:bg-white transition-all ${
                        formErrors.phone
                          ? "border-red-400 focus:ring-1 focus:ring-red-100"
                          : "border-slate-200 focus:border-primary-light focus:ring-4 focus:ring-primary-light/5"
                      }`}
                      placeholder="+91 98765 43210"
                    />
                    {formErrors.phone && (
                      <p className="text-[10px] font-bold text-red-500 mt-1.5">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-2">
                      Inquiry Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-primary-light focus:bg-white focus:ring-4 focus:ring-primary-light/5 transition-all"
                    >
                      <option value="general">General Inquiries</option>
                      <option value="consultation">
                        Request a Consultation
                      </option>
                      <option value="infrastructure">
                        Infrastructure & Highway Tenders
                      </option>
                      <option value="commercial">
                        Commercial Construction
                      </option>
                      <option value="materials">
                        Materials & Logistics Partnership
                      </option>
                      <option value="careers">Careers & HR Division</option>
                    </select>
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-50 border text-sm focus:outline-none focus:bg-white transition-all ${
                      formErrors.subject
                        ? "border-red-400 focus:ring-1 focus:ring-red-100"
                        : "border-slate-200 focus:border-primary-light focus:ring-4 focus:ring-primary-light/5"
                    }`}
                    placeholder="Project Proposal Inquiries"
                  />
                  {formErrors.subject && (
                    <p className="text-[10px] font-bold text-red-500 mt-1.5">
                      {formErrors.subject}
                    </p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-slate-50 border text-sm focus:outline-none focus:bg-white transition-all resize-none ${
                      formErrors.message
                        ? "border-red-400 focus:ring-1 focus:ring-red-100"
                        : "border-slate-200 focus:border-primary-light focus:ring-4 focus:ring-primary-light/5"
                    }`}
                    placeholder="Provide brief details about your civil operations, highway segments, or site inquiries..."
                  />
                  {formErrors.message && (
                    <p className="text-[10px] font-bold text-red-500 mt-1.5">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="theme"
                  size="ct"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center uppercase tracking-widest text-xs py-4 h-auto font-black"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Registering Inquiry...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* RIGHT COLUMN: CORPORATE OFFICES & FAQ (Col 5) */}
          <div className="lg:col-span-5 space-y-12">
            {/* Offices list */}
            <div>
              <h2 className="text-xl font-black text-primary uppercase tracking-wide mb-6">
                Regional Offices
              </h2>
              <div className="space-y-6">
                {/* Pune HQ */}
                <div className="border border-slate-200/60 p-6 bg-slate-50 flex gap-4">
                  <div className="text-primary-light mt-1 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-primary uppercase tracking-wide mb-1">
                      Pune Corporate Headquarters
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal mb-2">
                      Suite 405, Signature Towers, Senapati Bapat Road, Pune,
                      Maharashtra 411016
                    </p>
                    <p className="text-xs font-semibold text-slate-700">
                      Phone: +91 98765 43210
                    </p>
                  </div>
                </div>

                {/* Mumbai Liaison */}
                <div className="border border-slate-200/60 p-6 bg-slate-50 flex gap-4">
                  <div className="text-primary-light mt-1 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-primary uppercase tracking-wide mb-1">
                      Mumbai Regional Liaison
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal mb-2">
                      11th Floor, Nariman Point Commercial Hub, Marine Drive,
                      Mumbai, Maharashtra 400021
                    </p>
                    <p className="text-xs font-semibold text-slate-700">
                      Phone: +91 98765 43211
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
