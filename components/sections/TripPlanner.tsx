"use client";

import { FormEvent, useMemo, useState } from "react";
import { contactHref, contactNumber, holidayPackages } from "@/data/site";

type PackageFilter = "all" | "family" | "couple";

const filterOptions: { label: string; value: PackageFilter }[] = [
  { label: "All", value: "all" },
  { label: "Family", value: "family" },
  { label: "Couple", value: "couple" }
];

export function TripPlanner() {
  const [activeFilter, setActiveFilter] = useState<PackageFilter>("all");
  const [inquiryStatus, setInquiryStatus] = useState(
    "Select a holiday package or tell us your dates. We will shape a simple itinerary around your group size, stay preference, and travel pace."
  );
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const visiblePackages = useMemo(() => {
    if (activeFilter === "all") {
      return holidayPackages;
    }

    return holidayPackages.filter((tourPackage) => tourPackage.audience === activeFilter);
  }, [activeFilter]);

  const handleInquiry = (packageName: string) => {
    setSelectedPackage(packageName);
    setInquiryStatus(
      `${packageName} selected. Share your dates, guest count, and stay preference so the itinerary can be tuned for your trip.`
    );
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
        setSelectedPackage(null);
      }
    } catch {
      setInquiryStatus("The enquiry could not be submitted right now. Please check the Supabase connection details.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="section package-section" id="holiday-packages" aria-labelledby="holiday-title">
        <div className="section-heading split-heading">
          <div>
            <span>Holiday packages for Kodaikanal</span>
            <h2 id="holiday-title">Trip plans that leave room to breathe.</h2>
          </div>
          <div className="segmented-control" aria-label="Filter holiday packages">
            {filterOptions.map((option) => (
              <button
                className={activeFilter === option.value ? "active" : ""}
                key={option.value}
                type="button"
                onClick={() => setActiveFilter(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="package-grid">
          {visiblePackages.map((tourPackage) => (
            <article className={["package-card", tourPackage.featured ? "featured" : ""].filter(Boolean).join(" ")} key={tourPackage.name}>
              <div className="package-top">
                <h3>{tourPackage.name}</h3>
                <span>{tourPackage.duration}</span>
              </div>
              <p>{tourPackage.description}</p>
              <ul>
                {tourPackage.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="price-row">
                <strong>{tourPackage.price}</strong>
                <button type="button" onClick={() => handleInquiry(tourPackage.name)}>
                  Enquire
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div>
          <h2 id="contact-title">Plan your Kodaikanal trip</h2>
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
    </>
  );
}
