import React, { useState } from "react";
import { supabase } from "../../lib/supabase";

const ReportIce = () => {
  const [address, setAddress] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.from("ice_events").insert({
      type: "user",
      location: address,
      description: info,
      verified: false,
    });

    if (error) {
      setError("Something went wrong. Please try again.");
    } else {
      setSuccess(true);
      setAddress("");
      setInfo("");
    }

    setLoading(false);
  };

  return (
    <div className="bg-card text-card-foreground shadow-sm border rounded-lg border-primary/30 mb-16">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="flex items-center gap-2 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-primary"
          >
            <path d="M20 10c0 5-5.5 10.2-7.4 11.8a1 1 0 0 1-1.2 0C9.5 20.2 4 15 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>

          <h3 className="font-semibold tracking-tight text-2xl">
            Submit ICE Activity Reports
          </h3>

          <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-yellow-500/10 text-yellow-600 animate-pulse">
            Beta
          </span>
        </div>

        <p className="text-muted-foreground text-base">
          Keep your community informed—report local ICE activity.
        </p>
      </div>

      <div className="p-6 pt-0">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-medium">Address</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              placeholder="Enter the address or location"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Additional Information
            </label>
            <textarea
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              placeholder="Provide details about the activity"
              className="w-full min-h-30 rounded-md border border-input bg-background px-3 py-2 text-sm resize-none"
            />
          </div>

          <div className="flex gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Reports are submitted anonymously and reviewed before appearing publicly.
            </p>
          </div>

          {success && (
            <p className="text-sm text-green-600">
              Report submitted successfully. Thank you.
            </p>
          )}

          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Report"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportIce;

