import React from "react";

const VerifyReport = () => {
  return (
    <div className="bg-gradient-to-b from-primary/5 to-background border-t-4 border-primary py-16 md:py-24 -mx-4 px-4 mb-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">
          The Process Behind Verified Reports
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Explore our three-step verification process to understand how we guarantee accuracy and reliability.
        </p>
        <div className="relative max-w-3xl mx-auto py-8">
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-border">
            <div
              className="absolute top-0 left-0 w-full bg-primary transition-all duration-700 ease-out"
              style={{height: "100%"}}
            ></div>
          </div>
          <div className="space-y-24 md:space-y-32">
            <div className="relative min-h-[200px] md:min-h-[240px]">
              <div className="absolute left-8 md:left-12 -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-4 transition-all duration-500 z-10 bg-primary border-primary">
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
                  className="lucide lucide-file-text w-7 h-7 md:w-9 md:h-9 transition-colors duration-500 text-primary-foreground"
                  aria-hidden="true"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
              </div>
              <div className="bg-card text-card-foreground shadow-sm border border-primary/30 rounded-lg ml-24 md:ml-36 transition-all duration-700 cursor-default hover:shadow-lg opacity-100 translate-y-0">
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-4">
                    <h3 className="text-2xl md:text-3xl font-semibold flex-1">
                      Report Successfully Submitted
                    </h3>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    A community member submits a report with specific details and a location.
                  </p>
                  <div className="mt-6 pt-6 border-t border-border transition-opacity duration-500 opacity-70">
                    <p className="text-sm text-muted-foreground">
                      Each report includes location, time, extra information, and photo evidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative min-h-[200px] md:min-h-[240px]">
              <div className="absolute left-8 md:left-12 -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-4 transition-all duration-500 z-10 bg-primary border-primary">
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
                  className="lucide lucide-users w-7 h-7 md:w-9 md:h-9 transition-colors duration-500 text-primary-foreground"
                  aria-hidden="true"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="bg-card text-card-foreground shadow-sm border border-primary/30 rounded-lg ml-24 md:ml-36 transition-all duration-700 cursor-default hover:shadow-lg opacity-100 translate-y-0">
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-4">
                    <h3 className="text-2xl md:text-3xl font-semibold flex-1">
                      Manually Reviewed
                    </h3>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Human Reviewed
                  </p>
                  <div className="mt-6 pt-6 border-t border-border transition-opacity duration-500 opacity-70">
                    <p className="text-sm text-muted-foreground">
                      Our verification team reviews information, identifies duplicates, and ensures its authenticity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative min-h-[200px] md:min-h-[240px]">
              <div className="absolute left-8 md:left-12 -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-4 transition-all duration-500 z-10 bg-primary border-primary">
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
                  className="lucide lucide-globe w-7 h-7 md:w-9 md:h-9 transition-colors duration-500 text-primary-foreground"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </div>
              <div className="bg-card text-card-foreground shadow-sm border border-primary/30 rounded-lg ml-24 md:ml-36 transition-all duration-700 cursor-default hover:shadow-lg opacity-100 translate-y-0">
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-4">
                    <h3 className="text-2xl md:text-3xl font-semibold flex-1">
                      Real-Time Visibility
                    </h3>
                    <span className="text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap bg-primary/10 text-primary animate-pulse">
                      Instant Updates
                    </span>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Track in Real Time
                  </p>
                  <div className="mt-6 pt-6 border-t border-border transition-opacity duration-500 opacity-70">
                    <p className="text-sm text-muted-foreground">
                      Verified reports are displayed on the map immediately, keeping communities informed and safe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyReport;
