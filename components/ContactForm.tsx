'use client';

import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  phone: z
    .string({ required_error: "Phone number is required" })
    .regex(/^\+?\d{10,15}$/, {
      message: "Enter a valid phone number",
    }),
  message: z.string().min(1, { message: "Message is required" }),
});

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [showMessage, setShowMessage] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);

      return () => clearTimeout(timer); 
    }
  }, [status]);

  useEffect(() => {
    const subscription = watch(() => {
      if (showMessage) {
        setShowMessage(false);
      }
    });

    return () => subscription.unsubscribe(); 
  }, [watch, showMessage]);

  const onSubmit = async (formData: { name: string; email: string; subject: string; phone?: string; message: string }) => {
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        reset();
        setShowMessage(true);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 md:p-10 rounded-2xl shadow-2xl border-2 border-gray-100">
      <div className="space-y-4 mb-8">
        <div className="inline-block px-4 py-2 bg-[#ED2228]/10 rounded-full border border-[#ED2228]/20">
          <span className="text-sm font-semibold text-[#ED2228] uppercase tracking-wider">Contact Us</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">Send Us an Email</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          For any query, please feel free to contact us by filling up the below
          mandatory fields and someone from our office shall contact you soon.
          Regards, Trans Trade Solution
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700">
            Your Name <span className="text-red-500 px-1">*</span>
            {errors.name && (
              <span id="name-error" className="text-red-500 text-xs ml-1" role="alert">
                {errors.name.message}
              </span>
            )}
            <input
              type="text"
              placeholder="Your Name"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={`p-3.5 rounded-lg border-2 transition-all duration-200 ${errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-gray-200 focus:border-[#ED2228] focus:ring-[#ED2228]/20"} w-full mt-2 focus:outline-none focus:ring-4 bg-gray-50 focus:bg-white`}
              {...register("name")}
            />
          </label>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700">
            Your Email <span className="text-red-500 px-1">*</span>
            {errors.email && (
              <span id="email-error" className="text-red-500 text-xs ml-1" role="alert">
                {errors.email.message}
              </span>
            )}
            <input
              type="email"
              placeholder="Your Email"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`p-3.5 rounded-lg border-2 transition-all duration-200 ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-gray-200 focus:border-[#ED2228] focus:ring-[#ED2228]/20"} w-full mt-2 focus:outline-none focus:ring-4 bg-gray-50 focus:bg-white`}
              {...register("email")}
            />
          </label>
        </div>
      </div>

      <div className="relative">
        <label className="block text-sm font-medium text-gray-700">
          Subject <span className="text-red-500 px-1">*</span>
          {errors.subject && (
            <span id="subject-error" className="text-red-500 text-xs ml-1" role="alert">
              {errors.subject.message}
            </span>
          )}
          <input
            type="text"
            placeholder="Subject"
            aria-invalid={errors.subject ? "true" : "false"}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className={`p-3.5 rounded-lg border-2 transition-all duration-200 ${errors.subject ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-gray-200 focus:border-[#ED2228] focus:ring-[#ED2228]/20"} w-full mt-2 focus:outline-none focus:ring-4 bg-gray-50 focus:bg-white`}
            {...register("subject")}
          />
        </label>
      </div>

      <div className="relative">
        <label className="block text-sm font-medium text-gray-700">
          Phone Number <span className="text-red-500 px-1">*</span>
          {errors.phone && (
            <span id="phone-error" className="text-red-500 text-xs ml-1" role="alert">
              {errors.phone.message}
            </span>
          )}
          <input
            type="tel"
            placeholder="Phone Number"
            inputMode="tel"
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            onPaste={(e) => {
              // Allow paste and clean the value
              const pastedText = e.clipboardData.getData('text');
              const cleaned = pastedText.replace(/[^\d+]/g, '');
              if (cleaned) {
                e.preventDefault();
                const input = e.currentTarget;
                const start = input.selectionStart || 0;
                const end = input.selectionEnd || 0;
                const value = input.value.substring(0, start) + cleaned + input.value.substring(end);
                input.value = value;
                input.setSelectionRange(start + cleaned.length, start + cleaned.length);
              }
            }}
            onKeyDown={(e) => {
              const allowedKeys = [
                "Backspace",
                "Delete",
                "ArrowLeft",
                "ArrowRight",
                "Tab",
                "+",
                "Enter",
              ];
              const isNumber = /^[0-9]$/.test(e.key);
              const isControl = e.ctrlKey || e.metaKey;
              // Allow Ctrl+V, Ctrl+C, Ctrl+X
              if ((e.key === 'v' || e.key === 'c' || e.key === 'x' || e.key === 'a') && isControl) {
                return;
              }
              if (!isNumber && !allowedKeys.includes(e.key)) {
                e.preventDefault();
              }
            }}
            className={`p-3.5 rounded-lg border-2 transition-all duration-200 ${errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-gray-200 focus:border-[#ED2228] focus:ring-[#ED2228]/20"} w-full mt-2 focus:outline-none focus:ring-4 bg-gray-50 focus:bg-white`}
            {...register("phone")}
          />
        </label>
      </div>

      <div className="relative">
        <label className="block text-sm font-medium text-gray-700">
          Your Message <span className="text-red-500 px-1">*</span>
          {errors.message && (
            <span id="message-error" className="text-red-500 text-xs ml-1" role="alert">
              {errors.message.message}
            </span>
          )}
          <textarea
            rows={6}
            placeholder="Your Message"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`p-3.5 rounded-lg border-2 transition-all duration-200 ${errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-gray-200 focus:border-[#ED2228] focus:ring-[#ED2228]/20"} w-full mt-2 focus:outline-none focus:ring-4 bg-gray-50 focus:bg-white resize-none`}
            {...register("message")}
          />
        </label>
      </div>

      <button
        type="submit"
        className={`w-full bg-[#ED2228] text-white font-bold py-4 px-8 rounded-lg hover:bg-[#c01f2e] transition-all duration-300 hover:shadow-2xl hover:shadow-[#ED2228]/30 hover:-translate-y-1 shadow-lg ${
          status === "loading" ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>

      {showMessage && status === "success" && (
        <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
          <p className="text-green-700 font-semibold text-sm flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Message sent successfully!
          </p>
        </div>
      )}
      {showMessage && status === "error" && (
        <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
          <p className="text-red-700 font-semibold text-sm flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Something went wrong. Please try again.
          </p>
        </div>
      )}
    </form>
  );
}
