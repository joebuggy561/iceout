import React from "react";

const Contact = () => {
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
            className="lucide lucide-mail w-7 h-7 text-primary"
            aria-hidden="true"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          </svg>
          Contact Us
        </h3>
      </div>
      <div className="p-6 pt-0 text-center px-6 md:px-12">
        <p className="text-base md:text-lg text-muted-foreground mb-4">
          Have questions or need guidance? Consult our legal team
        </p>
        <a
          href="mailto:support@iceinmyarea.org"
          className="text-lg md:text-xl font-medium text-primary hover:underline"
        >
          support@iceout.live
        </a>
      </div>
      <div className="flex items-center p-6 pt-0 text-base md:text-lg text-muted-foreground/80">
        For emergencies or urgent legal help, contact an immigration lawyer or legal aid organization directly.
      </div>
    </div>
  );
};

export default Contact;
