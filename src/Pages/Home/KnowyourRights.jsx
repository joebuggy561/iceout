import React from "react";

const KnowyourRights = () => {
  return (
    <div className="text-card-foreground shadow-sm border rounded-lg mb-16 border-primary/30 bg-primary/5">
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
            className="lucide lucide-scale w-6 h-6 text-primary"
            aria-hidden="true"
          >
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
            <path d="M7 21h10"></path>
            <path d="M12 3v18"></path>
            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
          </svg>
          <h3 className="font-semibold tracking-tight text-xl">What You Should Know About Your Rights</h3>
        </div>
        <p className="text-muted-foreground text-base">During an ICE Encounter</p>
      </div>
      <div className="p-6 pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              className="lucide lucide-user-x w-5 h-5 text-primary shrink-0 mt-0.5"
              aria-hidden="true"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <line x1="17" x2="22" y1="8" y2="13"></line>
              <line x1="22" x2="17" y1="8" y2="13"></line>
            </svg>
            <div>
              <p className="font-medium text-sm mb-1">You Have the Right to Remain Silent</p>
              <p className="text-sm text-muted-foreground">
                You are not required to answer questions about your immigration status, birthplace, or citizenship.
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
              className="lucide lucide-file-text w-5 h-5 text-primary shrink-0 mt-0.5"
              aria-hidden="true"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
            </svg>
            <div>
              <p className="font-medium text-sm mb-1">Legal Papers</p>
              <p className="text-sm text-muted-foreground">
                You do not need to show documents unless you are driving and required by law to present your license and registration.
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
              className="lucide lucide-search w-5 h-5 text-primary shrink-0 mt-0.5"
              aria-hidden="true"
            >
              <path d="m21 21-4.34-4.34"></path>
              <circle cx="11" cy="11" r="8"></circle>
            </svg>
            <div>
              <p className="font-medium text-sm mb-1">You Can Say No to Searches</p>
              <p className="text-sm text-muted-foreground">
                You have the right to refuse searches. You do not have to allow a search of yourself, your belongings, or your home without a warrant.
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
              className="lucide lucide-scale w-5 h-5 text-primary shrink-0 mt-0.5"
              aria-hidden="true"
            >
              <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
              <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
              <path d="M7 21h10"></path>
              <path d="M12 3v18"></path>
              <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
            </svg>
            <div>
              <p className="font-medium text-sm mb-1">Request Legal Representation</p>
              <p className="text-sm text-muted-foreground">
                You are entitled to speak with an attorney before responding to any questions.
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
              className="lucide lucide-ban w-5 h-5 text-primary shrink-0 mt-0.5"
              aria-hidden="true"
            >
              <path d="M4.929 4.929 19.07 19.071"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <div>
              <p className="font-medium text-sm mb-1">Refrain from signing anything.</p>
              <p className="text-sm text-muted-foreground">
                Never sign papers from ICE before speaking with an attorney.
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
              className="lucide lucide-phone w-5 h-5 text-primary shrink-0 mt-0.5"
              aria-hidden="true"
            >
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
            </svg>
            <div>
              <p className="font-medium text-sm mb-1">Right to Make a Phone Call</p>
              <p className="text-sm text-muted-foreground">
                If you are detained, you have the right to make a phone call to a lawyer or a trusted contact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowyourRights;
