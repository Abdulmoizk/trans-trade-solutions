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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-gray-100 p-8 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold text-[#1850A0]">SEND US AN EMAIL</h2>
      <p className="text-sm text-gray-600">
        For any query, please feel free to contact us by filling up the below
        mandatory fields and someone from our office shall contact you soon.
        Regards, Trans Trade Solution
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700">
            Your Name <span className="text-red-500 px-1">*</span>
            {errors.name && (
              <span className="text-red-500 text-xs ml-1 ">
                {errors.name.message}
              </span>
            )}
            <input
              type="text"
              placeholder="Your Name"
              className={`p-3 rounded-md border ${errors.name ? "border-red-500" : "border-gray-300"} w-full mt-1`}
              {...register("name")}
            />
          </label>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700">
            Your Email <span className="text-red-500 px-1">*</span>
            {errors.email && (
              <span className="text-red-500 text-xs ml-1 ">
                {errors.email.message}
              </span>
            )}
            <input
              type="email"
              placeholder="Your Email"
              className={`p-3 rounded-md border ${errors.email ? "border-red-500" : "border-gray-300"} w-full mt-1`}
              {...register("email")}
            />
          </label>
        </div>
      </div>

      <div className="relative">
        <label className="block text-sm font-medium text-gray-700">
          Subject <span className="text-red-500 px-1">*</span>
          {errors.subject && (
            <span className="text-red-500 text-xs ml-1 ">
              {errors.subject.message}
            </span>
          )}
          <input
            type="text"
            placeholder="Subject"
            className={`p-3 rounded-md border ${errors.subject ? "border-red-500" : "border-gray-300"} w-full mt-1`}
            {...register("subject")}
          />
        </label>
      </div>

      <div className="relative">
        <label className="block text-sm font-medium text-gray-700">
          Phone Number <span className="text-red-500 px-1">*</span>
          {errors.phone && (
            <span className="text-red-500 text-xs ml-1 ">
              {errors.phone.message}
            </span>
          )}
          <input
            type="text"
            placeholder="Phone Number"
            inputMode="tel"
            pattern="^\+?\d{0,15}$"
            onKeyDown={(e) => {
              const allowedKeys = [
                "Backspace",
                "Delete",
                "ArrowLeft",
                "ArrowRight",
                "Tab",
                "+",
              ];
              const isNumber = /^[0-9]$/.test(e.key);
              if (!isNumber && !allowedKeys.includes(e.key)) {
                e.preventDefault();
              }
            }}
            className={`p-3 rounded-md border ${errors.phone ? "border-red-500" : "border-gray-300"
              } w-full mt-1`}
            {...register("phone")}
          />
        </label>
      </div>

      <div className="relative">
        <label className="block text-sm font-medium text-gray-700">
          Your Message <span className="text-red-500 px-1">*</span>
          {errors.message && (
            <span className="text-red-500 text-xs ml-1 ">
              {errors.message.message}
            </span>
          )}
          <textarea
            rows={6}
            placeholder="Your Message"
            className={`p-3 rounded-md border ${errors.message ? "border-red-500" : "border-gray-300"} w-full mt-1`}
            {...register("message")}
          />
        </label>
      </div>

      <button
        type="submit"
        className={`bg-[#1850A0] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#143d7a] transition ${
          status === "loading" ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {showMessage && status === "success" && (
        <p className="text-green-600 text-xs ml-1 ">Message sent successfully!</p>
      )}
      {showMessage && status === "error" && (
        <p className="text-red-500 text-xs ml-1 ">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
