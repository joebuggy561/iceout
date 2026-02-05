import useIceEvents from "../hooks/useIceEvents";
import { supabase } from "../lib/supabase";

export default function Admin() {
  const { events } = useIceEvents();
  const pending = events.filter(e => !e.verified);

  const approve = async (id) => {
    await supabase
      .from("ice_events")
      .update({ verified: true })
      .eq("id", id);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Pending Reports</h1>

      {pending.map(e => (
        <div key={e.id} className="border p-4 rounded mb-4">
          <p className="font-medium">{e.location}</p>
          <p className="text-sm text-gray-600">{e.description}</p>

          <button
            onClick={() => approve(e.id)}
            className="mt-2 text-sm text-blue-600"
          >
            Approve
          </button>
        </div>
      ))}
    </div>
  );
}
