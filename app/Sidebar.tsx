// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import Image from "next/image";
// import {
//   FaChartBar,
//   FaBoxOpen,
//   FaCreditCard,
//   FaKey,
//   FaChartLine,
//   FaClipboardList,
//   FaMoneyBill,
//   FaCog,
//   FaCheckCircle,
//   FaChevronLeft,
//   FaChevronRight
// } from "react-icons/fa";

// interface MenuItem {
//   id: string;
//   label: string;
//   href?: string;
//   icon?: React.ReactNode;
//   subItems?: {
//     id: string;
//     label: string;
//     href: string;
//     icon?: React.ReactNode;
//   }[];
// }

// const menuItems: MenuItem[] = [
//   {
//     id: "dashboard",
//     label: "Dashboard",
//     href: "/dashboard",
//     icon: <FaChartBar />
//   },
//   {
//     id: "orders",
//     label: "Orders",
//     icon: <FaBoxOpen />,
//     subItems: [
//       {
//         id: "orders-list",
//         label: "Orders List",
//         href: "/orders-list",
//         icon: <FaClipboardList />
//       },
//       {
//         id: "order-analytics",
//         label: "Order Analytics",
//         href: "/order-analytics",
//         icon: <FaChartLine />
//       }
//     ]
//   },
//   {
//     id: "payments",
//     label: "Payments",
//     icon: <FaCreditCard />,
//     subItems: [
//       {
//         id: "payment-history",
//         label: "Payment History",
//         href: "/payment-history",
//         icon: <FaClipboardList />
//       },
//       {
//         id: "billing",
//         label: "Billing",
//         href: "/billing",
//         icon: <FaMoneyBill />
//       }
//     ]
//   },
//   {
//     id: "licenses",
//     label: "Licenses",
//     icon: <FaKey />,
//     subItems: [
//       {
//         id: "active-licenses",
//         label: "Active Licenses",
//         href: "/active-licenses",
//         icon: <FaCheckCircle />
//       },
//       {
//         id: "license-management",
//         label: "License Management",
//         href: "/license-management",
//         icon: <FaCog />
//       }
//     ]
//   },
//   {
//     id: "reports",
//     label: "Reports",
//     icon: <FaChartLine />,
//     subItems: [
//       {
//         id: "sales-reports",
//         label: "Sales Reports",
//         href: "/sales-reports",
//         icon: <FaChartBar />
//       },
//       {
//         id: "usage-reports",
//         label: "Usage Reports",
//         href: "/usage-reports",
//         icon: <FaClipboardList />
//       }
//     ]
//   }
// ];

// export default function Sidebar() {
//   const pathname = usePathname();
//   const [hoveredItem, setHoveredItem] = useState<string | null>(null);
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const handleMouseEnter = (itemId: string) => setHoveredItem(itemId);
//   const handleMouseLeave = () => setHoveredItem(null);
//   const toggleSidebar = () => setIsCollapsed(!isCollapsed);

//   return (
//     <div
//       className={`fixed left-0 top-0 h-screen bg-gray-800 text-white transition-all duration-300 ease-in-out z-40 ${
//         isCollapsed ? "w-16" : "w-64"
//       } overflow-y-auto`} // <-- Add this class
//     >
//       {/* Collapse Toggle */}
//       <div className="pt-4 pb-2 flex justify-center">
//         <button
//           onClick={toggleSidebar}
//           className="w-10 h-10 flex items-center justify-center rounded-full shadow-lg border border-white"
//           aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
//         >
//           <span className="text-white text-xl">
//             {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
//           </span>
//         </button>
//       </div>

//       {/* Logo */}
//       <div className="px-4 pb-4 border-b border-gray-700">
//         <div className={`flex items-center gap-3 ${isCollapsed ? "justify-center" : ""}`}>
//           <div className="relative">
//             <Image
//               src="/logo.png"
//               alt="Logo"
//               width={32}
//               height={32}
//               className="rounded"
//               suppressHydrationWarning
//             />
//             <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border border-white"></div>
//           </div>
//           {!isCollapsed && (
//             <div>
//               <h1 className="font-bold text-lg">Rounak</h1>
//               <p className="text-xs text-gray-400">Cloud License</p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Menu */}
//       <nav className="p-2 space-y-1">
//         {menuItems.map((item) => (
//           <div
//             key={item.id}
//             className="relative group"
//             onMouseEnter={() => handleMouseEnter(item.id)}
//             onMouseLeave={handleMouseLeave}
//           >
//             {item.href ? (
//               <Link
//                 href={item.href}
//                 className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
//                   pathname === item.href
//                     ? "bg-gray-700 text-white"
//                     : "text-gray-300 hover:bg-gray-700 hover:text-white"
//                 } ${isCollapsed ? "justify-center" : ""}`}
//               >
//                 <span className="text-2xl" title={isCollapsed ? item.label : ""}>
//                   {item.icon}
//                 </span>
//                 {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
//               </Link>
//             ) : (
//               <button
//                 className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
//                   hoveredItem === item.id
//                     ? "bg-gray-700 text-white"
//                     : "text-gray-300 hover:bg-gray-700 hover:text-white"
//                 } ${isCollapsed ? "justify-center" : ""}`}
//               >
//                 <span className="text-2xl" title={isCollapsed ? item.label : ""}>
//                   {item.icon}
//                 </span>
//                 {!isCollapsed && (
//                   <>
//                     <span className="text-sm font-medium">{item.label}</span>
//                     <span className="ml-auto text-xs">▼</span>
//                   </>
//                 )}
//               </button>
//             )}

//             {/* Submenu flyout */}
//             {hoveredItem === item.id &&
//               item.subItems &&
//               item.subItems.length > 0 && (
//                 <div
//                   className={`absolute ${
//                     isCollapsed ? "left-full ml-2" : "left-full"
//                   } top-0 bg-gray-800 text-white w-64 border-l border-gray-700 z-50 shadow-lg p-2 space-y-1`}
//                 >
//                   {item.subItems.map((subItem) => (
//                     <Link
//                       key={subItem.id}
//                       href={subItem.href}
//                       className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
//                         pathname === subItem.href
//                           ? "bg-gray-700 text-white"
//                           : "text-gray-300 hover:bg-gray-700 hover:text-white"
//                       }`}
//                     >
//                       <span className="text-lg">{subItem.icon}</span>
//                       <span className="text-sm font-medium">{subItem.label}</span>
//                     </Link>
//                   ))}
//                 </div>
//               )}
//           </div>
//         ))}
//       </nav>
//     </div>
//   );



// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import Image from "next/image";
// import {
//   FaChevronLeft,
//   FaChevronRight,
//   FaKey,
//   FaCheckCircle
// } from "react-icons/fa";

// interface MenuItem {
//   id: string;
//   label: string;
//   href?: string;
//   icon?: React.ReactNode;
//   subItems?: {
//     id: string;
//     label: string;
//     href: string;
//     icon?: React.ReactNode;
//   }[];
// }

// const menuItems: MenuItem[] = [
//   {
//     id: "aws",
//     label: "AWS",
//     icon: <FaKey />,
//     subItems: [
//       {
//         id: "aws-cloud-license",
//         label: "AWS Cloud License",
//         href: "/aws",
//         icon: <FaCheckCircle />
//       }
//     ]
//   },
//   {
//     id: "gcp",
//     label: "GCP",
//     icon: <FaKey />,
//     subItems: [
//       {
//         id: "gcp-cloud-license",
//         label: "GCP Cloud License",
//         href: "/gcp",
//         icon: <FaCheckCircle />
//       }
//     ]
//   },
//   {
//     id: "azure",
//     label: "Microsoft Azure",
//     icon: <FaKey />,
//     subItems: [
//       {
//         id: "azure-cloud-license",
//         label: "Azure Cloud License",
//         href: "/azure",
//         icon: <FaCheckCircle />
//       }
//     ]
//   }
// ];

// export default function Sidebar() {
//   const pathname = usePathname();
//   const [hoveredItem, setHoveredItem] = useState<string | null>(null);
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const handleMouseEnter = (itemId: string) => setHoveredItem(itemId);
//   const handleMouseLeave = () => setHoveredItem(null);
//   const toggleSidebar = () => setIsCollapsed(!isCollapsed);

//   return (
//     <div
//       className={`fixed left-0 top-0 h-screen bg-gray-800 text-white transition-all duration-300 ease-in-out z-40 ${
//         isCollapsed ? "w-16" : "w-64"
//       } overflow-y-auto`}
//     >
//       {/* Collapse Toggle */}
//       <div className="pt-4 pb-2 flex justify-center">
//         <button
//           onClick={toggleSidebar}
//           className="w-10 h-10 flex items-center justify-center rounded-full shadow-lg border border-white"
//           aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
//         >
//           <span className="text-white text-xl">
//             {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
//           </span>
//         </button>
//       </div>

//       {/* Logo */}
//       <div className="px-4 pb-4 border-b border-gray-700">
//         <div className={`flex items-center gap-3 ${isCollapsed ? "justify-center" : ""}`}>
//           <div className="relative">
//             <Image
//               src="/logo.png"
//               alt="Logo"
//               width={32}
//               height={32}
//               className="rounded"
//               suppressHydrationWarning
//             />
//             <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border border-white"></div>
//           </div>
//           {!isCollapsed && (
//             <div>
//               <h1 className="font-bold text-lg">Rounak</h1>
//               <p className="text-xs text-gray-400">Cloud License</p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Menu */}
//       <nav className="p-2 space-y-1">
//         {menuItems.map((item) => (
//           <div
//             key={item.id}
//             className="group"
//             onMouseEnter={() => handleMouseEnter(item.id)}
//             onMouseLeave={handleMouseLeave}
//           >
//             <button
//               className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
//                 hoveredItem === item.id
//                   ? "bg-gray-700 text-white"
//                   : "text-gray-300 hover:bg-gray-700 hover:text-white"
//               } ${isCollapsed ? "justify-center" : ""}`}
//             >
//               <span className="text-2xl" title={isCollapsed ? item.label : ""}>
//                 {item.icon}
//               </span>
//               {!isCollapsed && (
//                 <>
//                   <span className="text-sm font-medium">{item.label}</span>
//                   <span className="ml-auto text-xs">▼</span>
//                 </>
//               )}
//             </button>

//             {/* Subitems shown on hover */}
//             {!isCollapsed && hoveredItem === item.id && item.subItems && (
//               <div className="ml-8 mt-1 space-y-1">
//                 {item.subItems.map((subItem) => (
//                   <Link
//                     key={subItem.id}
//                     href={subItem.href}
//                     className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-all ${
//                       pathname === subItem.href
//                         ? "bg-gray-700 text-white"
//                         : "text-gray-300 hover:bg-gray-700 hover:text-white"
//                     }`}
//                   >
//                     <span>{subItem.icon}</span>
//                     <span>{subItem.label}</span>
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </nav>
//     </div>
//   );
// }

// }




"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import {
  FaChevronLeft,
  FaChevronRight,
  FaKey,
  FaCheckCircle
} from "react-icons/fa";

interface MenuItem {
  id: string;
  label: string;
  href?: string;
  icon?: React.ReactNode;
  subItems?: {
    id: string;
    label: string;
    href: string;
    icon?: React.ReactNode;
  }[];
}

const menuItems: MenuItem[] = [
  {
    id: "aws",
    label: "AWS",
    icon: <FaKey />,
    subItems: [
      {
        id: "aws-cloud-license",
        label: "AWS Cloud License",
        href: "/aws",
        icon: <FaCheckCircle />
      }
    ]
  },
  {
    id: "gcp",
    label: "GCP",
    icon: <FaKey />,
    subItems: [
      {
        id: "gcp-cloud-license",
        label: "GCP Cloud License",
        href: "/gcp",
        icon: <FaCheckCircle />
      }
    ]
  },
  {
    id: "azure",
    label: "Microsoft Azure",
    icon: <FaKey />,
    subItems: [
      {
        id: "azure-cloud-license",
        label: "Azure Cloud License",
        href: "/azure",
        icon: <FaCheckCircle />
      }
    ]
  }
];

export default function Sidebar() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleMouseEnter = (itemId: string) => setHoveredItem(itemId);
  const handleMouseLeave = () => setHoveredItem(null);
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div
      className={`fixed left-0 top-0 h-screen bg-gray-800 text-white transition-all duration-300 ease-in-out z-40 ${
        isCollapsed ? "w-16" : "w-64"
      } overflow-y-auto`}
    >
      {/* Collapse Toggle */}
      <div className="pt-4 pb-2 flex justify-center">
        <button
          onClick={toggleSidebar}
          className="w-10 h-10 flex items-center justify-center rounded-full shadow-lg border border-white"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <span className="text-white text-xl">
            {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </span>
        </button>
      </div>

      {/* Logo */}
      <div className="px-4 pb-4 border-b border-gray-700">
        <div
          className={`flex items-center gap-3 ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          <div className="relative">
            <Image
              src="/logo.png"
              alt="Logo"
              width={32}
              height={32}
              className="rounded"
              suppressHydrationWarning
            />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border border-white"></div>
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="font-bold text-lg">Rounak</h1>
              <p className="text-xs text-gray-400">Cloud License</p>
            </div>
          )}
        </div>
      </div>

      {/* Menu */}
      <nav className="p-2 space-y-1">
        {menuItems.map((item) => {
          const isActive = item.subItems?.some((sub) => sub.href === pathname);
          return (
            <div
              key={item.id}
              className="group"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive || hoveredItem === item.id
                    ? "bg-gray-700 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                } ${isCollapsed ? "justify-center" : ""}`}
              >
                <span className="text-2xl" title={isCollapsed ? item.label : ""}>
                  {item.icon}
                </span>
                {!isCollapsed && (
                  <>
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className="ml-auto text-xs">▼</span>
                  </>
                )}
              </button>

              {/* Subitems visible on hover or active */}
              {item.subItems &&
                (hoveredItem === item.id || isActive) && (
                  <div
                    className={`ml-${isCollapsed ? "0" : "8"} mt-1 space-y-1 transition-all`}
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={subItem.href}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-all ${
                          pathname === subItem.href
                            ? "bg-gray-700 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`}
                      >
                        <span>{subItem.icon}</span>
                        {!isCollapsed && <span>{subItem.label}</span>}
                      </Link>
                    ))}
                  </div>
                )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}

