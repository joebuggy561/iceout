import React from "react";

const TwinWindows = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
      <div className="bg-card text-card-foreground shadow-sm border rounded-lg border-primary/20">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="flex items-center gap-2 mb-2">
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
            <h3 className="font-semibold tracking-tight text-xl">
              Documenting ICE Operations
            </h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Contribute to your community’s safety and awareness
          </p>
        </div>
        <div className="p-6 pt-0 space-y-4">
          <div className="flex gap-3">
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
              className="lucide lucide-map-pin w-5 h-5 text-primary shrink-0 mt-0.5"
              aria-hidden="true"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <div>
              <p className="font-medium text-sm mb-1">Things to Report</p>
              <p className="text-sm text-muted-foreground">
                Immigration enforcement vehicles, checkpoints, or detentions
              </p>
            </div>
          </div>
          <div className="flex gap-3">
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
              className="lucide lucide-map-pin w-5 h-5 text-primary shrink-0 mt-0.5"
              aria-hidden="true"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <div>
              <p className="font-medium text-sm mb-1">Location</p>
              <p className="text-sm text-muted-foreground">
                Use the Location bar to provide exact information, including addresses, intersections, or landmarks.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
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
              className="lucide lucide-clock w-5 h-5 text-primary shrink-0 mt-0.5"
              aria-hidden="true"
            >
              <path d="M12 6v6l4 2"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <div>
              <p className="font-medium text-sm mb-1">Timing</p>
              <p className="text-sm text-muted-foreground">
                Report immediately, but only when it’s safe.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
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
              className="lucide lucide-lock w-5 h-5 text-primary shrink-0 mt-0.5"
              aria-hidden="true"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <div>
              <p className="font-medium text-sm mb-1">Privacy</p>
              <p className="text-sm text-muted-foreground">
                We do not collect any identifying information—reports are anonymous.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-card text-card-foreground shadow-sm border rounded-lg border-primary/20">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="flex items-center gap-2 mb-2">
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
              className="lucide lucide-phone w-5 h-5 text-primary"
              aria-hidden="true"
            >
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
            </svg>
            <h3 className="font-semibold tracking-tight text-xl">
              Emergency Resources
            </h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Having important contacts easily accessible can help protect you and your loved ones during unexpected situations.
          </p>
        </div>
        <div className="p-6 pt-0 space-y-4">
          <div>
            <p className="font-medium text-sm mb-2">Legal Aid Phone Lines</p>
            <p className="text-sm text-muted-foreground">
              Have phone numbers for reliable immigration legal aid organizations on hand. They can inform you of your rights, link you to legal support, and assist during ICE encounters.
            </p>
          </div>
          <div>
            <p className="font-medium text-sm mb-2">Emergency Response Networks</p>
            <p className="text-sm text-muted-foreground">
              Locate nearby immigrant or rapid-response groups that assist in detentions, including on-the-ground support, advocacy, and access to bail or legal resources.
            </p>
          </div>
          <div>
            <p className="font-medium text-sm mb-2">Emergency Contacts</p>
            <p className="text-sm text-muted-foreground">
              Ensure at least one trusted friend or family member knows your location and can check in if needed.
            </p>
          </div>
          <div className="pt-3 border-t border-border/50">
            <p className="text-xs text-muted-foreground italic">
              Save these numbers in your phone, keep them in your wallet, or write them on a “Know Your Rights” card. Consider carrying a small paper list as a backup in case your phone is lost or taken.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwinWindows;
