"use client";

import { useState, useRef } from "react";

const ProductDemo = () => {
  const [form, setForm] = useState({
    name: "",
    industry: "",
    revenue: "",
    team: "",
    problem: "",
    tools: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const responseRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.error) {
        setResult(`Error: ${data.error}`);
      } else {
        setResult(data.content || "No response");
        // Scroll to response smoothly
        if (responseRef.current) {
          responseRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } catch (err) {
      setResult("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Upper Half: Form Section */}
      <div className="w-full bg-[#04112d] text-[#FEFBF6] py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center shadow-2xl z-10 min-h-[50vh]">
        <div className="max-w-5xl w-full">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#FEFBF6]">
              AI Product Demo
            </h1>
            <p className="text-lg text-[#FEFBF6] opacity-80 max-w-2xl mx-auto">
              See how our AI can transform your business. Fill in the details below to generate a tailored action plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-sm font-medium tracking-wide opacity-90 text-[#FEFBF6]">Business Name</label>
                <input
                  name="name"
                  placeholder="e.g. Acme Corp"
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-[#FEFBF6] placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#FEFBF6] focus:bg-white/10 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium tracking-wide opacity-90 text-[#FEFBF6]">Industry</label>
                <input
                  name="industry"
                  placeholder="e.g. E-commerce"
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-[#FEFBF6] placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#FEFBF6] focus:bg-white/10 transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium tracking-wide opacity-90 text-[#FEFBF6]">Revenue</label>
                  <input
                    name="revenue"
                    placeholder="e.g. $1M-$5M"
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-[#FEFBF6] placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#FEFBF6] focus:bg-white/10 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium tracking-wide opacity-90 text-[#FEFBF6]">Team Size</label>
                  <input
                    name="team"
                    placeholder="e.g. 10-50"
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-[#FEFBF6] placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#FEFBF6] focus:bg-white/10 transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-5 flex flex-col pt-0 md:pt-0">
              <div className="space-y-1.5 flex-1">
                <label className="text-sm font-medium tracking-wide opacity-90 text-[#FEFBF6]">Biggest Problem</label>
                <textarea
                  name="problem"
                  placeholder="What is the main challenge holding you back?"
                  rows={3}
                  onChange={handleChange}
                  className="w-full h-[calc(100%-24px)] min-h-[100px] p-4 rounded-xl bg-white/5 border border-white/10 text-[#FEFBF6] placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#FEFBF6] focus:bg-white/10 transition-all resize-none"
                />
              </div>
              <div className="space-y-1.5 flex-1">
                <label className="text-sm font-medium tracking-wide opacity-90 text-[#FEFBF6]">Tools Used</label>
                <textarea
                  name="tools"
                  placeholder="e.g. Salesforce, HubSpot, Slack"
                  rows={3}
                  onChange={handleChange}
                  className="w-full h-[calc(100%-24px)] min-h-[100px] p-4 rounded-xl bg-white/5 border border-white/10 text-[#FEFBF6] placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#FEFBF6] focus:bg-white/10 transition-all resize-none"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <button 
              onClick={handleSubmit} 
              disabled={loading}
              className="w-full md:w-auto px-12 py-4 bg-[#FEFBF6] text-[#04112d] rounded-full font-bold text-lg hover:bg-white transition-all transform hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(254,251,246,0.4)] active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center gap-3"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-[#04112d]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing Data...
                </>
              ) : (
                <>
                  Get AI Action Plan
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Lower Half: Response Section */}
      <div 
        ref={responseRef}
        className="w-full flex-grow bg-[#FEFBF6] text-[#04112d] p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-center justify-start min-h-[50vh]"
      >
        <div className="max-w-5xl w-full">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#04112d] flex items-center justify-center text-[#FEFBF6] shadow-lg shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[#04112d]">Analysis Result</h2>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10 min-h-[350px] flex flex-col relative overflow-hidden">
            {!result && !loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-white to-[#FEFBF6]/30">
                <div className="w-24 h-24 mb-6 rounded-full bg-[#04112d]/5 flex items-center justify-center border border-[#04112d]/10">
                  <svg className="w-12 h-12 text-[#04112d]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#04112d] mb-3">Awaiting Data</h3>
                <p className="text-gray-500 max-w-md text-lg">Submit the form above to receive your customized business analysis and AI strategy.</p>
              </div>
            )}

            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-white/90 backdrop-blur-sm z-10 transition-all">
                <div className="relative w-24 h-24 mb-6">
                  <div className="absolute inset-0 border-4 border-[#04112d]/10 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-[#04112d] rounded-full border-t-transparent animate-spin"></div>
                </div>
                <h3 className="text-2xl font-bold text-[#04112d] mb-3 animate-pulse">Generating Insights</h3>
                <p className="text-gray-500 text-lg">Processing your business details...</p>
              </div>
            )}

            {result && !loading && (
              <div className="w-full h-full">
                <div className="prose prose-blue max-w-none">
                  <pre className="whitespace-pre-wrap font-sans text-gray-800 text-base md:text-lg leading-relaxed">{result}</pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDemo;
