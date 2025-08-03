"use client";
import { useState } from "react";

const licenses = [
  {
    name: "AWS Cloud License",
    description: "Amazon Web Services cloud computing license for scalable infrastructure.",
    price: 99,
    icon: "☁️"
  },
  {
    name: "GCP License",
    description: "Google Cloud Platform license for advanced analytics and hosting.",
    price: 89,
    icon: "🔍"
  },
  {
    name: "Azure License",
    description: "Microsoft Azure license for enterprise-grade cloud solutions.",
    price: 95,
    icon: "🪟"
  },
  {
    name: "Add Cart Cloud License",
    description: "E-commerce cloud platform license for online stores.",
    price: 79,
    icon: "🛒"
  },
  {
    name: "Oracle Cloud License",
    description: "Oracle cloud license for robust database and business apps.",
    price: 105,
    icon: "🗄️"
  },
  {
    name: "IBM Cloud License",
    description: "IBM cloud license for AI and hybrid cloud solutions.",
    price: 92,
    icon: "🤖"
  }
];

type CartItem = typeof licenses[number] & { quantity: number };

export default function DashboardPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (license: typeof licenses[number]) => {
    setCart(prev => {
      const found = prev.find(item => item.name === license.name);
      if (found) {
        return prev.map(item =>
          item.name === license.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...license, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (license: typeof licenses[number]) => {
    setCart(prev => prev.filter(item => item.name !== license.name));
  };

  const incrementQty = (license: typeof licenses[number]) => {
    setCart(prev => prev.map(item =>
      item.name === license.name ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementQty = (license: typeof licenses[number]) => {
    setCart(prev => prev
      .map(item =>
        item.name === license.name ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 ">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Project Feature Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your cloud licenses and track your projects
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Licenses</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">24</p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <span className="text-2xl">📊</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Projects</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <span className="text-2xl">🚀</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Monthly Revenue</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">$45,230</p>
            </div>
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <span className="text-2xl">💰</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Cart Items</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{totalItems}</p>
            </div>
            <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
              <span className="text-2xl">🛒</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Frontend Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="text-blue-500">🎨</span>
            Frontend
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Folder Structure</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">UI, regex, Redux implementation</p>
            </div>
          </div>
        </div>

        {/* Backend Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="text-green-500">⚙️</span>
            Backend
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Folder Structure</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">MongoDB setup</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Zoho Connection</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Connectivity to backend</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Zoho Mock Data</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Mock data for login-based dashboard rendering</p>
            </div>
          </div>
        </div>
      </div>

      {/* License Store Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">License Store</h2>
          {cart.length > 0 && (
            <div className="flex items-center gap-4 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg">
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                🛒 {totalItems} item{totalItems !== 1 ? "s" : ""}
              </span>
              <span className="text-blue-600 dark:text-blue-400 font-bold">
                Total: ${total}
              </span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {licenses.map((license, idx) => {
            const cartItem = cart.find(item => item.name === license.name);
            return (
              <div key={idx} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{license.icon}</span>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{license.name}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{license.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">${license.price}</span>
                </div>
                
                {cartItem ? (
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => decrementQty(license)}
                      className="w-8 h-8 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-semibold text-gray-900 dark:text-white">
                      {cartItem.quantity}
                    </span>
                    <button 
                      onClick={() => incrementQty(license)}
                      className="w-8 h-8 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      +
                    </button>
                    <button 
                      onClick={() => removeFromCart(license)}
                      className="px-3 py-1 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart(license)}
                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 