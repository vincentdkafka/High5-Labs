"use client";

import React from "react";

const Pricing = () => {
  const [industry, setIndustry] = React.useState("restaurant");

  const pricingData = {
    restaurant: [
      {
        name: "Starter",
        price: "10,000",
        description: "Automation for small restaurants and salons",
        features: [
          "WhatsApp booking bot",
          "Google review automation",
          "Basic CRM setup",
          "Menu / service catalog setup",
          "FAQ bot",
        ],
      },
      {
        name: "Growth",
        mostPopular: true,
        price: "20,000",
        description: "Perfect for growing restaurants",
        features: [
          "WhatsApp ordering system",
          "Table booking system",
          "Loyalty & coupon automation",
          "Customer database",
          "Review + feedback automation",
          "Birthday or Offer Message Automation",
        ],
      },
      {
        name: "Premium",
        price: "45,000",
        description: "Complete automation ecosystem",
        features: [
          "AI Receptionist",
          "Full order automation",
          "AI customer support",
          "Marketing automation",
          "Advanced analytics",
          "Advanced Dashboard",
          "Customer Segmentation",
        ],
      },
    ],

    hospital: [
      {
        name: "Starter",
        price: "20,000",
        description: "Basic clinic automation",
        features: [
          "Appointment booking bot",
          "Patient reminder system",
          "Basic patient database",
          "WhatsApp notifications",
        ],
      },
      {
        name: "Growth",
        mostPopular: true,
        price: "40,000",
        description: "Automation for growing clinics",
        features: [
          "Patient management system",
          "Prescription automation",
          "Follow-up reminders",
          "Doctor schedule automation",
          "Google Review Request automation",
        ],
      },
      {
        name: "Premium",
        price: "50,000",
        description: "Advanced hospital automation",
        features: [
          "Ai Receptionist",
          "AI appointment assistant",
          "Full CRM system",
          "Patient analytics",
          "Advanced automation workflows",
          "Clinical Analytics Dashboard",
        ],
      },
    ],

    professional: [
      {
        name: "Starter",
        price: "10,000",
        description: "Basic automation for freelancers",
        features: [
          "Lead capture system",
          "Email automation",
          "Basic CRM",
          "Landing page integration",
        ],
      },
      {
        name: "Growth",
        mostPopular: true,
        price: "25,000",
        description: "For agencies and consultants",
        features: [
          "Lead tracking dashboard",
          "AI chat assistant",
          "Sales automation",
          "Client pipeline tracking",
        ],
      },
      {
        name: "Premium",
        price: "40,000",
        description: "Full business automation",
        features: [
          "AI receptionnist",
          "Lead Scoring System",
          "Complete CRM system",
          "AI support agent",
          "Marketing automation",
          "Advanced analytics",
        ],
      },
    ],
  };

  return (
    <>
      <section className="flex bg-[#FEFBF6] items-center justify-center flex-col py-10 px-4">
        <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight">
          Flexible Pricing Plans
        </h1>
        <p className="text-base/7 text-gray-800 max-w-sm text-center mt-4">
          Choose a plan that supports your business growth and digital goals.
        </p>

        <div className="mt-6 flex gap-3 bg-zinc-100 p-2 rounded-full">
          <label className="cursor-pointer">
            <input
              type="radio"
              name="industry"
              value="restaurant"
              checked={industry === "restaurant"}
              onChange={(e) => setIndustry(e.target.value)}
              className="hidden peer"
            />
            <span
              className="px-4 py-2 text-s rounded-full transition
    peer-checked:bg-[#04112d] peer-checked:text-white
    text-zinc-600"
            >
              Local Businesses
            </span>
          </label>

          <label className="cursor-pointer">
            <input
              type="radio"
              name="industry"
              value="hospital"
              checked={industry === "hospital"}
              onChange={(e) => setIndustry(e.target.value)}
              className="hidden peer"
            />
            <span
              className="px-4 py-2 text-s rounded-full transition
    peer-checked:bg-[#04112d] peer-checked:text-white
    text-zinc-600"
            >
              Healthcare & Legal
            </span>
          </label>

          <label className="cursor-pointer">
            <input
              type="radio"
              name="industry"
              value="professional"
              checked={industry === "professional"}
              onChange={(e) => setIndustry(e.target.value)}
              className="hidden peer"
            />
            <span
              className="px-4 py-2 text-s rounded-full transition
    peer-checked:bg-[#04112d] peer-checked:text-white
    text-zinc-600"
            >
              Professional Services
            </span>
          </label>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingData[industry].map((item, index) => (
            <div
            
              key={index}
              className={`border  cursor-pointer border-zinc-200 rounded-2xl p-6 flex flex-col items-start max-w-md transition duration-300 hover:-translate-y-1 ${item.mostPopular ? "bg-gray-100" : ""}`}
            >
              <h1 className="font-medium text-3xl text-slate-800 mt-1">
                {item.name}
              </h1>
              <p className="text-sm text-zinc-500 mt-2">{item.description}</p>
              <h1 className="font-medium text-5xl text-slate-800 mt-6">
                ₹{item.price}
              </h1>
              <button
                className={`w-full px-4 py-3 rounded-full cursor-pointer bg-[#04112d] text-sm mt-8 ${item.mostPopular ? "bg-gray-800 hover:bg-gray-900 text-white" : "border border-zinc-300/80 bg-zinc-100 hover:bg-zinc-200/70"}`}
              >
                Get Started
              </button>
              <div className="w-full mt-8 space-y-2.5 pb-4">
                {item.features.map((feature, index) => (
                  <p
                    key={index}
                    className="flex items-center gap-3 text-sm text-zinc-500"
                  >
                    <span className="size-3 rounded-full bg-zinc-300 flex items-center justify-center shrink-0">
                      <span className="size-1.5 rounded-full bg-zinc-800" />
                    </span>
                    {feature}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Pricing;
