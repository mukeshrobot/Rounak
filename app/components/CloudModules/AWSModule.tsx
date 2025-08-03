import Image from "next/image";

const awsLicenses = [
  {
    id: 1,
    name: "EC2 Compute Cloud",
    description: "Scalable virtual machines for modern applications.",
    price: "$99",
    image: "/assets/icons/ec2.png"
  },
  {
    id: 2,
    name: "S3 Object Storage",
    description: "Durable and secure object storage with high availability.",
    price: "$59",
    image: "/assets/icons/s3.png"
  },
  {
    id: 3,
    name: "RDS Database Service",
    description: "Managed relational databases with automatic backups.",
    price: "$119",
    image: "/assets/icons/rds.png"
  }
];

export default function AWSModule() {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-100 to-blue-50 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        🌩️ AWS Cloud License Store
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {awsLicenses.map((license) => (
          <div
            key={license.id}
            className="relative bg-white/40 backdrop-blur-xl shadow-2xl border border-gray-200 rounded-3xl p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-2 hover:shadow-indigo-200"
          >
            {/* Top Ribbon */}
            <div className="absolute top-4 right-4 bg-indigo-100 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full shadow">
              AWS
            </div>

            {/* Icon */}
            {/* <Image
              src={license.image}
              alt={license.name}
              width={80}
              height={80}
              className="mb-4 rounded-xl"
            /> */}

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900">{license.name}</h3>

            {/* Description */}
            <p className="text-gray-600 mt-2 mb-4 text-sm px-2">{license.description}</p>

            {/* Price */}
            <p className="text-indigo-700 font-semibold text-lg">{license.price}</p>

            {/* CTA Button */}
            <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full font-medium transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
