import React from "react";

const AdditionalResources = () => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-4">Supporting Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-card text-card-foreground shadow-sm border rounded-lg border-primary/20 hover:border-primary/50 transition-colors">
          <div className="flex flex-col space-y-1.5 p-6">
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
              className="lucide lucide-scale w-8 h-8 text-primary mb-2"
              aria-hidden="true"
            >
              <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
              <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
              <path d="M7 21h10"></path>
              <path d="M12 3v18"></path>
              <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
            </svg>
            <h3 className="font-semibold tracking-tight text-xl">
              Find Local Legal Services
            </h3>
            <p className="text-muted-foreground text-sm">
              Use the National Immigration Legal Services Directory to find free or low-cost legal aid organizations throughout the United States.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full gap-2">
              <a
                href="https://www.immigrationadvocates.org/nonprofit/legaldirectory/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find local legal services"
              >
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
                className="lucide lucide-external-link w-4 h-4"
                aria-hidden="true"
              >
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
              </a>
              Get Legal Help in Your Area
            </button>
          </div>
        </div>
        <div className="bg-card text-card-foreground shadow-sm border rounded-lg border-primary/20 hover:border-primary/50 transition-colors">
          <div className="flex flex-col space-y-1.5 p-6">
            <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Find legal help in your area"
            >
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
              className="lucide lucide-file-text w-8 h-8 text-primary mb-2"
              aria-hidden="true"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
            </svg>
            </a>
            <h3 className="font-semibold tracking-tight text-xl">
              Find Legal Help in Your Area
            </h3>
            <p className="text-muted-foreground text-sm">
              Use the National Immigration Legal Services Directory to find free or low-cost legal aid organizations throughout the U.S.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full gap-2">
              <a
              href="https://www.wehaverights.us/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download know your rights card"
              >
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
                  className="lucide lucide-external-link w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </a>
              Get Legal Help
            </button>
          </div>
        </div>
        <div className="bg-card text-card-foreground shadow-sm border rounded-lg border-primary/20 hover:border-primary/50 transition-colors">
          <div className="flex flex-col space-y-1.5 p-6">
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
              className="lucide lucide-shield w-8 h-8 text-primary mb-2"
              aria-hidden="true"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            </svg>
            <h3 className="font-semibold tracking-tight text-xl">
              Own Your Rights, Wherever You Go
            </h3>
            <p className="text-muted-foreground text-sm">
              Use the National Immigration Legal Services Directory to find free or low-cost immigration legal aid providers nationwide.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full gap-2">
              <a
              href="https://www.nilc.org/resources/know-your-rights-card/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download know your rights card"
              >
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
                className="lucide lucide-external-link w-4 h-4"
                aria-hidden="true"
              >
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
              </a>
              Download Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalResources;
