import React from "react";

const LeagalAid = () => {
  return (
    <div className="w-full flex items-center justify-around mb-16">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground px-4 py-8">
        <div className="flex items-start md:items-center gap-2 ">
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
            className="lucide lucide-info w-4 h-4 flex-shrink-0 mt-0.5 md:mt-0"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
          <p>
            For immediate emergencies, call local emergency services. For immigration legal assistance, reach out to qualified legal aid organizations.
          </p>
        </div>
        <a
          href="https://www.aclu.org/know-your-rights/immigrants-rights/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline whitespace-nowrap"
        >
          Know Your Rights →
        </a>
      </div>
    </div>
  );
};

export default LeagalAid;
