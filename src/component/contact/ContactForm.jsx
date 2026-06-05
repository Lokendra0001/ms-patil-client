"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import Button from "@/component/CTA/Button";
import { contactInfo } from "@/data/layout/header";
import { MapPin, Building2, CheckCircle, ChevronDown } from "lucide-react";

const ContactForm = () => {
  const searchParams = useSearchParams();
  const isConsultationMode = searchParams.get("consultation") === "true";

  const offices = [
    {
      id: "pune",
      title: "DHULE HEAD OFFICE",
      address: "Dhule, Maharashtra, India",
      phone: contactInfo.phone,
      icon: <MapPin className="w-5 h-5 text-primary" />,
    },
    {
      id: "mumbai",
      title: "MUMBAI OPERATIONAL REACH",
      address: "Mumbai, Maharashtra, India",
      phone: contactInfo.fallback_phone,
      icon: <Building2 className="w-5 h-5 text-primary" />,
    },
  ];

  const inquiryOptions = [
    { value: "general", label: "General Inquiries" },
    { value: "consultation", label: "Request a Consultation" },
    { value: "infrastructure", label: "Infrastructure & Highway Tenders" },
    { value: "commercial", label: "Commercial Construction" },
    { value: "materials", label: "Materials & Logistics Partnership" },
    { value: "careers", label: "Careers & HR Division" },
  ];

  // react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiryType: isConsultationMode ? "consultation" : "general",
      subject: isConsultationMode ? "Request for Consultation" : "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Auto-fill inquiry type if consultation mode is active
  useEffect(() => {
    if (isConsultationMode) {
      reset({
        name: "",
        email: "",
        phone: "",
        inquiryType: "consultation",
        subject: "Request for Consultation",
        message: "",
      });
    }
  }, [isConsultationMode, reset]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: data.name,
          email: data.email,
          phone: data.phone,
          inquiry_type: data.inquiryType,
          subject: data.subject,
          message: data.message,
          from_name: "Ms Patil Construction - Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        reset({
          name: "",
          email: "",
          phone: "",
          inquiryType: "general",
          subject: "",
          message: "",
        });
      } else {
        alert(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting to Web3Forms:", error);
      alert("Failed to send message. Please check your network and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-white-background  select-text">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT COLUMN: CONTACT FORM (Col 7) */}
          <div className="lg:col-span-7 bg-white-background  border border-border-secondary p-8 sm:p-10 shadow-sm">
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-black text-primary uppercase mb-2">
                Submit Business Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-text-gray  font-normal">
                Please fill out the form below. Fields marked with{" "}
                <span className="text-text-red">*</span> are mandatory.
              </p>
            </div>

            {submitSuccess ? (
              <div className=" border border-border-primary p-8 text-center text-text-primary">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-medium tracking-wide text-primary uppercase mb-2">
                  Inquiry Submitted Successfully
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Thank you for reaching out to M/S Chetankumar Bhagwan
                  Suryawanshi. Your inquiry has been registered, and a regional
                  manager will follow up with you shortly.
                </p>
                <Button
                  type="submit"
                  variant="theme"
                  size="ct"
                  onClick={() => setSubmitSuccess(false)}
                  className="w-fit! flex items-center justify-center tracking-wide cursor-pointer text-xs py-4 h-auto font-black"
                >
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name & Email Group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-extrabold text-text-gray  uppercase tracking-wider mb-2">
                      Full Name <span className="text-text-red">*</span>
                    </label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 bg-slate-50 border text-sm focus:outline-none focus:bg-white-background  transition-all ${
                        errors.name
                          ? "border-red-400 focus:ring-1 focus:ring-red-100"
                          : "border-border-secondary focus:border-primary focus:ring-4 focus:ring-primary/5"
                      }`}
                      placeholder="John Doe"
                      {...register("name", {
                        required: "Full name is required",
                      })}
                    />
                    {errors.name && (
                      <p className="text-[10px] font-medium tracking-wide text-text-red mt-1.5">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold text-text-gray  uppercase tracking-wider mb-2">
                      Email Address <span className="text-text-red">*</span>
                    </label>
                    <input
                      type="email"
                      className={`w-full px-4 py-3 bg-slate-50 border text-sm focus:outline-none focus:bg-white-background  transition-all ${
                        errors.email
                          ? "border-red-400 focus:ring-1 focus:ring-red-100"
                          : "border-border-secondary focus:border-primary focus:ring-4 focus:ring-primary/5"
                      }`}
                      placeholder="john@example.com"
                      {...register("email", {
                        required: "Email address is required",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Please enter a valid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-[10px] font-medium tracking-wide text-text-red mt-1.5">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone & Inquiry Type Group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-extrabold text-text-gray  uppercase tracking-wider mb-2">
                      Contact Number <span className="text-text-red">*</span>
                    </label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 bg-slate-50 border text-sm focus:outline-none focus:bg-white-background  transition-all ${
                        errors.phone
                          ? "border-red-400 focus:ring-1 focus:ring-red-100"
                          : "border-border-secondary focus:border-primary focus:ring-4 focus:ring-primary/5"
                      }`}
                      placeholder={contactInfo.phone}
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^\+?[\d\s-]{10,}$/,
                          message:
                            "Please enter a valid phone number (min 10 digits)",
                        },
                      })}
                    />
                    {errors.phone && (
                      <p className="text-[10px] font-medium tracking-wide text-text-red mt-1.5">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold text-text-gray  uppercase tracking-wider mb-2">
                      Inquiry Type <span className="text-text-red">*</span>
                    </label>
                  <div className="relative">
                    <select
                      className="w-full px-4 py-3 pr-10 bg-slate-50 border border-border-secondary text-sm focus:outline-none focus:border-primary focus:bg-white-background focus:ring-4 focus:ring-primary/5 transition-all appearance-none cursor-pointer"
                      {...register("inquiryType")}
                    >
                      {inquiryOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                  </div>
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-[10px] font-extrabold text-text-gray  uppercase tracking-wider mb-2">
                    Subject <span className="text-text-red">*</span>
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 bg-slate-50 border text-sm focus:outline-none focus:bg-white-background  transition-all ${
                      errors.subject
                        ? "border-red-400 focus:ring-1 focus:ring-red-100"
                        : "border-border-secondary focus:border-primary focus:ring-4 focus:ring-primary/5"
                    }`}
                    placeholder="Project Proposal Inquiries"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                  />
                  {errors.subject && (
                    <p className="text-[10px] font-medium tracking-wide text-text-red mt-1.5">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-[10px] font-extrabold text-text-gray  uppercase tracking-wider mb-2">
                    Message <span className="text-text-red">*</span>
                  </label>
                  <textarea
                    rows={5}
                    className={`w-full px-4 py-3 bg-slate-50 border text-sm focus:outline-none focus:bg-white-background  transition-all resize-none ${
                      errors.message
                        ? "border-red-400 focus:ring-1 focus:ring-red-100"
                        : "border-border-secondary focus:border-primary focus:ring-4 focus:ring-primary/5"
                    }`}
                    placeholder="Provide brief details about your civil operations, highway segments, or site inquiries..."
                    {...register("message", {
                      required: "Message cannot be empty",
                    })}
                  />
                  {errors.message && (
                    <p className="text-[10px] font-medium tracking-wide text-text-red mt-1.5">
                      {errors.message.message}
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
                        className="animate-spin h-4 w-4 text-text-white "
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

          {/* RIGHT COLUMN: CORPORATE OFFICES (Col 5) */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-xl font-black text-primary uppercase tracking-wide mb-6">
                Regional Offices
              </h2>
              <div className="space-y-6">
                {offices.map((office) => (
                  <div
                    key={office.id}
                    className="border border-border-secondary/60 p-6 bg-slate-50 flex items-start gap-4"
                  >
                    <div className="text-primary mt-[3px] flex-shrink-0">
                      {office.icon}
                    </div>
                    <div>
                      <h4
                        className={`text-sm font-extrabold text-text-primary uppercase tracking-wide mb-1`}
                      >
                        {office.title}
                      </h4>
                      <p className="text-xs text-text-gray leading-relaxed font-normal mb-2">
                        {office.address}
                      </p>
                      <p className="text-xs font-semibold text-slate-700">
                        Phone:{" "}
                        <a
                          href={`tel:${office.phone.replace(/\s+/g, "")}`}
                          className="hover:text-primary-hover transition-colors duration-200"
                        >
                          {office.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
