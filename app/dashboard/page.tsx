"use client";
import { useState } from "react";
import styles from "../page.module.css";

import Navbar from "../Navbar";
import Link from "next/link";
import Image from "next/image";

const licenses = [
  {
    name: "AWS Cloud License",
    description: "Amazon Web Services cloud computing license for scalable infrastructure.",
    price: 99
  },
  {
    name: "GCP License",
    description: "Google Cloud Platform license for advanced analytics and hosting.",
    price: 89
  },
  {
    name: "Azure License",
    description: "Microsoft Azure license for enterprise-grade cloud solutions.",
    price: 95
  },
  {
    name: "Add Cart Cloud License",
    description: "E-commerce cloud platform license for online stores.",
    price: 79
  },
  {
    name: "Oracle Cloud License",
    description: "Oracle cloud license for robust database and business apps.",
    price: 105
  },
  {
    name: "IBM Cloud License",
    description: "IBM cloud license for AI and hybrid cloud solutions.",
    price: 92
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
    <div className={styles.ecomPage}>
      <main className={styles.ecomMain}>
        <div className={styles.ecomHeaderRow}>
          <h1 className={styles.ecomTitle}>License Store</h1>
          <div className={styles.ecomCartSummary}>
            <span className={styles.ecomCartIcon}>🛒</span>
            <span className={styles.ecomCartText}>{totalItems} item{totalItems !== 1 ? "s" : ""}</span>
            <span className={styles.ecomCartTotal}>Total: ${total}</span>
            {cart.length > 0 && (
              <div style={{marginLeft: 18, display: 'flex', flexDirection: 'column', gap: 2}}>
                {cart.map(item => (
                  <div key={item.name} style={{display: 'flex', alignItems: 'center', gap: 8}}>
                    <span style={{fontWeight: 500}}>{item.name}</span>
                    <button onClick={() => decrementQty(item)} style={{margin: '0 2px', width: 22, height: 22, borderRadius: 4, border: '1px solid #e2e8f0', background: '#f6f8fa', cursor: 'pointer'}}>-</button>
                    <span style={{minWidth: 18, textAlign: 'center'}}>{item.quantity}</span>
                    <button onClick={() => incrementQty(item)} style={{margin: '0 2px', width: 22, height: 22, borderRadius: 4, border: '1px solid #e2e8f0', background: '#f6f8fa', cursor: 'pointer'}}>+</button>
                    <button onClick={() => removeFromCart(item)} style={{marginLeft: 6, color: '#e53e3e', background: 'none', border: 'none', cursor: 'pointer'}}>Remove</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <h2 className={styles.ecomSectionTitle}>Available Licenses</h2>
        <div className={styles.ecomGrid}>
          {licenses.map((license, idx) => {
            const cartItem = cart.find(item => item.name === license.name);
            return (
              <div className={styles.ecomCard} key={idx}>
                <div className={styles.ecomCardTitle}>{license.name}</div>
                <div className={styles.ecomCardDesc}>{license.description}</div>
                <div className={styles.ecomCardPrice}>${license.price}</div>
                {cartItem ? (
                  <div style={{display: 'flex', alignItems: 'center', gap: 8, width: '100%'}}>
                    <button className={styles.ecomRemoveBtn} style={{flex: 1}} onClick={() => removeFromCart(license)}>
                      Remove
                    </button>
                    <button onClick={() => decrementQty(license)} style={{width: 32, height: 32, borderRadius: 6, border: '1px solid #e2e8f0', background: '#f6f8fa', cursor: 'pointer', fontWeight: 700, fontSize: 18}}>-</button>
                    <span style={{minWidth: 22, textAlign: 'center', fontWeight: 600}}>{cartItem.quantity}</span>
                    <button onClick={() => incrementQty(license)} style={{width: 32, height: 32, borderRadius: 6, border: '1px solid #e2e8f0', background: '#f6f8fa', cursor: 'pointer', fontWeight: 700, fontSize: 18}}>+</button>
                  </div>
                ) : (
                  <button
                    className={styles.ecomAddBtn}
                    onClick={() => addToCart(license)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
} 