"use client";

import { FormEvent, useEffect, useState } from "react";
import { contactHref, contactNumber } from "@/data/site";

type ContactSectionProps = {
  id?: string;
  title?: string;
  status: string;
  selectedPackage?: string | null;
};

export function ContactSection({
  id = "contact",
  title = "Plan your Kodaikanal trip",
  status,
  selectedPackage = null
}: ContactSectionProps) {
  const [inquiryStatus, setInquiryStatus] = useState(status);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setInquiryStatus(status);
  }, [status]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          guests: formData.get("guests"),
          name: formData.get("name"),
          selectedPackage,
          travelDate: formData.get("date")
        })
      });
      const result = (await response.json()) as { message?: string };

      setInquiryStatus(
        result.message ??
          "Thanks. Your Kodaikanal enquiry has been saved and is ready for follow up."
      );

      if (response.ok) {
        form.reset();
      }
    } catch {
      setInquiryStatus("The enquiry could not be submitted right now. Please check the Supabase connection details.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id={id} aria-labelledby={`${id}-title`}>
      <div>
        <h2 id={`${id}-title`}>{title}</h2>
        <p>{inquiryStatus}</p>
        <a className="contact-number" href={contactHref}>
          Call {contactNumber}
        </a>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          Travel date
          <input type="date" name="date" />
        </label>
        <label>
          Guests
          <select name="guests" defaultValue="2 guests">
            <option>2 guests</option>
            <option>3-5 guests</option>
            <option>6+ guests</option>
          </select>
        </label>
        <button className="button primary" type="submit">
          {isSubmitting ? "Sending..." : "Send Enquiry"}
        </button>
      </form>
    </section>
  );
}
