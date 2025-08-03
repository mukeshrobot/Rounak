// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// export default function LoginPage() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [showPassword, setShowPassword] = useState(false);

//   const carouselImages = [
//     {
//       src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2070&q=80",
//       title: "Secure Cloud Solutions",
//       description: "Enterprise-grade security for your business",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2015&q=80",
//       title: "Analytics Dashboard",
//       description: "Real-time insights and reporting",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2070&q=80",
//       title: "Team Collaboration",
//       description: "Work together seamlessly",
//     },
//     {
//       src: "/rounak-company.jpg", // Use the public path as a string
//       title: "AI Retreat 2025",
//       description: "Innovating the future with AI leaders",
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
//   };

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* Left - Login Form */}
//       <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white  lg:px-24">
//         <div className="w-full max-w-md space-y-6">
//           {/* Welcome Message */}
  
//           <div className="text-center">
//             <Image src="/logo.png" alt="Logo" width={160} height={40} className="mx-auto mb-4" />
//             <h2 className="text-2xl  text-gray-600 font-bold">Welcome Back</h2>
//             <p className="text-sm text-gray-600">Sign in to your account to continue</p>
//           </div>

//           <form className="space-y-5">
//             {/* Email */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
//               <div className="relative mt-1">
//                 <input
//                   id="email"
//                   type="email"
//                   className="w-full px-10 py-2 border border-gray-300 rounded-md   text-gray-900"
//                   placeholder="Enter your email"
//                   required
//                 />
//                 <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//                   📧
//                 </span>
//               </div>
//             </div>

//             {/* Password */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//               <div className="relative mt-1">
//                 <input
//                   id="password"
//                   type={showPassword ? "text" : "password"}
//                   className="w-full px-10 py-2 border border-gray-300 rounded-md  text-gray-900"
//                   placeholder="Enter your password"
//                   required
//                 />
//                 <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">🔒</span>
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword((prev) => !prev)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                 >
//                   {showPassword ? (
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-5.5 0-10-4.5-10-7s4.5-7 10-7c2.1 0 4 .7 5.625 1.875M9.88 9.88A3 3 0 0012 15a3 3 0 002.12-.88M15 12a3 3 0 00-3-3M3 3l18 18" />
//                     </svg>
//                   ) : (
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5c5.5 0 10 4.5 10 7s-4.5 7-10 7-10-4.5-10-7 4.5-7 10-7zM12 15a3 3 0 100-6 3 3 0 000 6z" />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Options */}
//             <div className="flex justify-between items-center text-sm">
//               <label className="flex items-center gap-2 text-gray-700">
//                 <input type="checkbox" className="accent-blue-500" />
//                 Remember me
//               </label>
//               <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-transform duration-300 hover:scale-105"
//             >
//               Sign In
//               <span className="inline-block transform transition-transform group-hover:translate-x-1">➡️</span>
//             </button>
//           </form>

//           <div className="text-center text-sm text-gray-500">or</div>

//           {/* Google Button */}
//           <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-100">
//             <svg width="20" height="20" fill="currentColor" viewBox="0 0 48 48">
//               <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.9 30.2 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.2 0 6.1 1.2 8.3 3.2l6.2-6.2C34.2 5.6 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 20-9 20-20 0-1.3-.1-2.7-.5-4z" />
//             </svg>
//             Continue with Google
//           </button>

//           <p className="text-center text-sm text-gray-700">
//             Don’t have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
//           </p>
//         </div>
//       </div>

//       {/* Right - Carousel */}
//       <div className="hidden md:block relative w-1/2 h-full">
//         {carouselImages.map((image, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
//             }`}
//             style={{
//               backgroundImage: `url(${image.src})`,
//               backgroundSize: "contain",           // <-- show full image
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",       // <-- prevent tiling
//             }}
//           >
//             <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-10 text-white">
//               <h2 className="text-3xl font-bold">{image.title}</h2>
//               <p className="text-lg">{image.description}</p>
//             </div>
//           </div>
//         ))}

//         {/* Nav Buttons */}
//         <button
//           onClick={prevImage}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full"
//         >
//           ←
//         </button>
//         <button
//           onClick={nextImage}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full"
//         >
//           →
//         </button>

//         {/* Indicators */}
//         <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
//           {carouselImages.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentImageIndex(i)}
//               className={`w-3 h-3 rounded-full ${
//                 i === currentImageIndex ? "bg-blue-500" : "bg-white/50"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2070&q=80",
      title: "Secure Cloud Solutions",
      description: "Enterprise-grade security for your business",
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2015&q=80",
      title: "Analytics Dashboard",
      description: "Real-time insights and reporting",
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2070&q=80",
      title: "Team Collaboration",
      description: "Work together seamlessly",
    },
    {
      src: "/rounak-company.jpg",
      title: "AI Retreat 2025",
      description: "Innovating the future with AI leaders",
    },
  ];

  useEffect(() => {
    document.documentElement.classList.add("overflow-hidden");
    document.body.classList.add("overflow-hidden");

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (email === "Rounak@gmail.com" && password === "Rounak@1234") {
    setError("");
    router.push("/dashboard"); // ✅ navigate to SideNav or Dashboard
  } else {
    setError("Invalid email or password");
  }
};


  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Left - Login Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white lg:px-24 px-6">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <Image src="/logo.png" alt="Logo" width={160} height={40} className="mx-auto mb-4" />
            <h2 className="text-2xl text-gray-600 font-bold">Welcome Back</h2>
            <p className="text-sm text-gray-600">Sign in to your account to continue</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <div className="relative mt-1">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-10 py-2 border border-gray-300 rounded-md text-gray-900"
                  placeholder="Enter your email"
                  required
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">📧</span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative mt-1">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-10 py-2 border border-gray-300 rounded-md text-gray-900"
                  placeholder="Enter your password"
                  required
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">🔒</span>
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.5 0-10-4.5-10-7s4.5-7 10-7c2.1 0 4 .7 5.625 1.875M3 3l18 18" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-gray-700">
                <input type="checkbox" className="accent-blue-500" />
                Remember me
              </label>
              <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-transform duration-300 hover:scale-105"
            >
              Sign In ➡️
            </button>
          </form>

          <div className="text-center text-sm text-gray-500">or</div>

          <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-100">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 48 48">
              <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.9 30.2 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.2 0 6.1 1.2 8.3 3.2l6.2-6.2C34.2 5.6 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 20-9 20-20 0-1.3-.1-2.7-.5-4z" />
            </svg>
            Continue with Google
          </button>

          <p className="text-center text-sm text-gray-700">
            Don’t have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
          </p>
        </div>
      </div>

      {/* Right - Carousel */}
      <div className="hidden md:block relative w-1/2 h-full">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-10 text-white">
              <h2 className="text-3xl font-bold">{image.title}</h2>
              <p className="text-lg">{image.description}</p>
            </div>
          </div>
        ))}

        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full"
        >
          ←
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full"
        >
          →
        </button>

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
          {carouselImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImageIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === currentImageIndex ? "bg-blue-500" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
