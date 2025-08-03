import Image from "next/image";

const gcpLicenses = [
  {
    id: 1,
    name: "Compute Engine",
    description: "Run virtual machines on Google’s global infrastructure.",
    price: "$89",
    image: "/assets/icons/compute.png"
  },
  {
    id: 2,
    name: "BigQuery",
    description: "Analyze large datasets using SQL and fast analytics.",
    price: "$129",
    image: "/assets/icons/bigquery.png"
  },
  {
    id: 3,
    name: "Cloud Storage",
    description: "Highly available object storage with global edge access.",
    price: "$69",
    image: "/assets/icons/storage.png"
  }
];

export default function GCPModule() {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-100 to-yellow-50 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        🔍 GCP Cloud License Store
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {gcpLicenses.map((license) => (
          <div
            key={license.id}
            className="relative bg-white/40 backdrop-blur-xl shadow-2xl border border-gray-200 rounded-3xl p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-2 hover:shadow-yellow-200"
          >
            <div className="absolute top-4 right-4 bg-yellow-100 text-yellow-600 text-xs font-semibold px-3 py-1 rounded-full shadow">
              GCP
            </div>

            {/* Uncomment if using icons */}
            {/* <Image
              src={license.image}
              alt={license.name}
              width={80}
              height={80}
              className="mb-4 rounded-xl"
            /> */}

            <h3 className="text-xl font-bold text-gray-900">{license.name}</h3>
            <p className="text-gray-600 mt-2 mb-4 text-sm px-2">{license.description}</p>
            <p className="text-yellow-700 font-semibold text-lg">{license.price}</p>
            <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-full font-medium transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
