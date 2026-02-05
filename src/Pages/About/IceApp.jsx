import React from "react";

const IceApp = () => {
  return (
    <div
      id="app-coming-soon"
      className="bg-primary/5 border-t-4 border-primary py-12 md:py-16 -mx-4 px-4 mb-16"
    >
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
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
              className="lucide lucide-smartphone w-8 h-8 text-primary"
              aria-hidden="true"
            >
              <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
              <path d="M12 18h.01"></path>
            </svg>
          </div>
          <div className="flex items-center justify-center md:gap-4 mb-2 flex-col md:flex-row">
            <div className="hidden md:flex flex-1"></div>
            <h2 className="flex-1 text-3xl md:text-4xl font-bold mb-4 text-foreground text-center">
              Iceout App
            </h2>
            <div className="flex-1 flex justify-start">
              <span className="text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap bg-primary/20 text-primary border-primary/30 animate-pulse">
                Coming Soon!
              </span>
            </div>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed with real-time alerts sent directly to your phone.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="flex items-start gap-4 p-4 bg-background/50 rounded-xl border border-border/50">
            <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
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
                className="lucide lucide-bell w-5 h-5 text-primary"
                aria-hidden="true"
              >
                <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">
                Live Updates
              </h3>
              <p className="text-sm text-muted-foreground">
                Receive instant push notifications whenever ICE activity is reported in your area.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-background/50 rounded-xl border border-border/50">
            <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
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
                className="lucide lucide-map-pin w-5 h-5 text-primary"
                aria-hidden="true"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">
               Choose your Cities
              </h3>
              <p className="text-sm text-muted-foreground">
                Select the neighborhoods and cities you want to track and receive updates on
              </p>
            </div>
          </div>
        </div>
        <p className="text-center text-muted-foreground mt-8 text-sm">
          Available soon on iOS and Android
        </p>
      </div>
    </div>
  );
};

export default IceApp;
