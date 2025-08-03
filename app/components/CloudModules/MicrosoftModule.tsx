import Image from "next/image";

const azureLicenses = [
  {
    id: 1,
    name: "Azure Virtual Machines",
    description: "Scalable computing capacity for all your workloads.",
    price: "$105",
    image: "/assets/icons/vm.png"
  },
  {
    id: 2,
    name: "Blob Storage",
    description: "Massively scalable object storage for all data types.",
    price: "$72",
    image: "/assets/icons/blob.png"
  },
  {
    id: 3,
    name: "Azure SQL Database",
    description: "Intelligent, scalable database with built-in intelligence.",
    price: "$125",
    image: "/assets/icons/sql.png"
  }
];

export default function MicrosoftModule() {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-100 to-purple-50 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        🧩 Microsoft Azure License Store
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {azureLicenses.map((license) => (
          <div
            key={license.id}
            className="relative bg-white/60 backdrop-blur-lg shadow-lg border border-gray-200 rounded-3xl p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-2 hover:shadow-purple-200"
          >
            {/* Azure Badge */}
                        <div className="absolute top-4 right-4 bg-indigo-100 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full shadow">
              AZURE
            </div>

            {/* Optional Image */}
            {/* <Image
              src={license.image}
              alt={license.name}
              width={80}
              height={80}
              className="mb-4 rounded-xl"
            /> */}

            <h3 className="text-xl font-bold text-gray-900 mt-2">{license.name}</h3>
            <p className="text-gray-600 mt-2 mb-4 text-sm px-2">{license.description}</p>
            <p className="text-purple-700 font-semibold text-lg">{license.price}</p>
            <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full font-medium transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
