import React from "react";

const Steps = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
      <div className="bg-card text-card-foreground shadow-sm border border-primary/30 rounded-lg">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg">
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
                className="lucide lucide-users w-5 h-5 text-primary"
                aria-hidden="true"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
            </div>
            <h3 className="font-semibold tracking-tight text-xl">
              Prioritizing Community
            </h3>
          </div>
        </div>
        <div className="p-6 pt-0">
          <p className="text-sm text-muted-foreground">
            We believe in the strength of collective awareness, the power of mutual support, and the impact of standing together to keep everyone informed and safe.
          </p>
        </div>
      </div>
      <div className="bg-card text-card-foreground shadow-sm border border-primary/30 rounded-lg">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg">
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
                className="lucide lucide-shield w-5 h-5 text-primary"
                aria-hidden="true"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              </svg>
            </div>
            <h3 className="font-semibold tracking-tight text-xl">
              Your Safety and Privacy Matter
            </h3>
          </div>
        </div>
        <div className="p-6 pt-0">
          <p className="text-sm text-muted-foreground">
            We put your safety first, protect your privacy, and keep you updated on ICE-related information in your community.
          </p>
        </div>
      </div>
      <div className="bg-card text-card-foreground shadow-sm border border-primary/30 rounded-lg">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg">
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
                className="lucide lucide-heart w-5 h-5 text-primary"
                aria-hidden="true"
              >
                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
              </svg>
            </div>
            <h3 className="font-semibold tracking-tight text-xl">Building Stronger Communities Together</h3>
          </div>
        </div>
        <div className="p-6 pt-0">
          <p className="text-sm text-muted-foreground">
            Leveraging the education and opportunities we’ve received to protect and support the neighborhoods and families.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
