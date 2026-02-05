import React from "react";

const MissionStatement = () => {
  return (
    <div className="bg-card text-card-foreground shadow-sm border border-primary/30 rounded-lg max-w-4xl mx-auto mb-12">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="font-semibold tracking-tight text-2xl md:text-3xl text-center flex items-center justify-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-heart w-7 h-7 text-primary"
            aria-hidden="true"
          >
            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
          </svg>
          Mission
        </h3>
      </div>
      <div className="p-6 pt-0 text-center px-6 md:px-12">
        <p className="text-base md:text-lg leading-relaxed text-foreground/90">
          Iceout was founded out of our desire to use the education and opportunities we’ve been fortunate 
          to receive to give back in a meaningful way. Our goal is to support immigrants and Americans affected 
          by ICE by providing reliable information, resources, and guidance. Our mission is to help keep individuals 
          and families informed, connected, and safe, while fostering understanding and resilience in the 
          face of difficult circumstances. For us, this work is more than a project—it is a commitment to 
          uplift and protect those navigating challenging situations, and to offer practical support to those 
          who need it most. Through education, outreach, and care, we hope to make a positive impact and stand 
          alongside the people we aim to serve.
        </p>
      </div>
    </div>
  );
};

export default MissionStatement;
