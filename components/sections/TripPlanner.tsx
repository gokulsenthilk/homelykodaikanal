"use client";

import { useMemo, useState } from "react";
import { holidayPackages } from "@/data/site";
import { ContactSection } from "@/components/sections/ContactSection";

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

      <ContactSection status={inquiryStatus} selectedPackage={selectedPackage} />
    </>
  );
}
