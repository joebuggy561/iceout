import React from "react";
import campaign from "../../data/campaign.json";

const FundTable = () => {
  return (
    <section className="flex justify-center px-4 mt-16">
      <div className="w-full max-w-4xl">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Organizer
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Fundraiser Link
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {campaign.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-800">
                  {item.Organizer}
                </td>
                <td className="px-6 py-4 text-sm">
                  <a
                    href={item.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    View on GoFundMe →
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Find more link */}
        <div className="mt-6 text-center">
          <a
            href="https://www.gofundme.com/s?q=ICE+detention"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:underline"
          >
            Find more ICE detention fundraisers 🔍❤️
          </a>
        </div>

        {/* Disclaimer */}
        <p className="mt-4 text-xs text-gray-500 text-center max-w-2xl mx-auto">
          IceOut does not collect donations and is not affiliated with GoFundMe.
          Fundraiser information is community-sourced and links redirect to
          GoFundMe’s platform.
        </p>
      </div>
    </section>
  );
};

export default FundTable;
