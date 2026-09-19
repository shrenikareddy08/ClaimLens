import React from 'react';
import { Camera, CheckCircle, Compass, HelpCircle } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      title: "Authenticity",
      desc: "Checks whether the media shows signs of synthetic generation or digital manipulation.",
      icon: Camera,
    },
    {
      title: "Claim Consistency",
      desc: "Checks whether the visual content is consistent with what the claim states.",
      icon: CheckCircle,
    },
    {
      title: "Context",
      desc: "Looks at available metadata, timestamps, and contextual clues where available.",
      icon: Compass,
    },
    {
      title: "Explainability",
      desc: "Shows users why a result was reached instead of only displaying an opaque score.",
      icon: HelpCircle,
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend Framework" },
    { name: "Tailwind CSS", category: "Styling & Design System" },
    { name: "FastAPI", category: "Backend REST API" },
    { name: "PyTorch", category: "Deep Learning Engine" },
    { name: "OpenCV", category: "Image Forensics & ELA" },
    { name: "CLIP", category: "Multimodal Semantic Alignment" },
    { name: "OCR", category: "Text Recognition" },
    { name: "EXIF", category: "Camera Metadata Inspection" },
  ];

  const team = [
    {
      name: "Shrenika Reddy",
      role: "Team Lead & System Architecture",
      initials: "SR"
    },
    {
      name: "Anvitha Reddy",
      role: "ML & Neural Model Training",
      initials: "AR"
    },
    {
      name: "Bhargavi",
      role: "Claim Decomposition & Evidence Fusion",
      initials: "BG"
    },
    {
      name: "Neeraj",
      role: "Backend API & Integration",
      initials: "NR"
    },
    {
      name: "Sharat Chandra",
      role: "Frontend Dashboard & Demo",
      initials: "SC"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-fadeIn">
      
      {/* Page Header */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          ABOUT CLAIMLENS
        </h1>
        <p className="text-brand-400 text-sm font-semibold tracking-wide">
          “Don’t just ask if it’s real. Ask if it proves the claim.”
        </p>
      </div>

      {/* Mission & Product Foundation */}
      <div className="product-card p-6 sm:p-8 space-y-5 border-slate-800">
        <h2 className="text-xl font-bold text-white">
          Beyond Simple Real/Fake Classification
        </h2>
        
        <p className="text-slate-200 text-base leading-relaxed">
          ClaimLens is an AI-powered evidence verification system designed to move beyond simple real/fake classification.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-[#0d131f] border border-slate-800 space-y-1.5">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Traditional Systems Ask:
            </span>
            <p className="text-sm font-semibold text-slate-300 italic">
              “Is this image fake?”
            </p>
          </div>

          <div className="p-4 rounded-xl bg-brand-950/20 border border-brand-500/30 space-y-1.5">
            <span className="text-xs font-bold text-brand-400 uppercase tracking-wider block">
              ClaimLens Asks:
            </span>
            <p className="text-sm font-bold text-white italic">
              “Does this evidence support the claim?”
            </p>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed pt-2">
          Real media can still tell a misleading story. An authentic photograph can be reused with the wrong date, location, event, or description. ClaimLens verifies whether an image or media item actually supports the specific claim associated with it.
        </p>
      </div>

      {/* The Four Areas */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">
          The Four Verification Areas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="product-card p-5 space-y-2.5 border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-brand-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Technology Section */}
      <div className="space-y-4">
        <div className="border-b border-slate-800 pb-2">
          <h2 className="text-xl font-bold text-white">
            Project Technology
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Technologies implemented in the ClaimLens architecture:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {technologies.map((tech, idx) => (
            <div key={idx} className="product-card p-4 space-y-1 border-slate-800">
              <span className="text-sm font-bold text-white block">
                {tech.name}
              </span>
              <span className="text-[11px] text-slate-400 block font-medium">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section Matching Requirement 17 */}
      <div className="space-y-4">
        <div className="border-b border-slate-800 pb-2">
          <h2 className="text-xl font-bold text-white">
            THE TEAM
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {team.map((member, idx) => (
            <div key={idx} className="product-card p-5 space-y-3 border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-brand-300">
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {member.name}
                  </h3>
                  <span className="text-xs text-slate-400 block mt-0.5 font-medium">
                    {member.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
