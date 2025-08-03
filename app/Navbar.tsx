"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeProvider";
import { useRouter } from "next/navigation";

const themes = [
  { name: "Light", value: "theme-light" },
  { name: "Dark", value: "theme-dark" },
];

export default function Navbar() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    // Add your logout logic here (e.g., clear tokens/localStorage/session)
    // Then navigate to login page
    router.push("/login");
  };

  return (
    <nav className={styles.ecomNavbar + " " + theme}>
      <Link href="/" className={styles.ecomLogo} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Image src="/logo.png" alt="Logo" width={40} height={40} style={{ borderRadius: 8 }} />
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        {mounted && (
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="rounded-md border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100"
            style={{ marginRight: 8 }}
          >
            {themes.map((t) => (
              <option value={t.value} key={t.value}>{t.name}</option>
            ))}
          </select>
        )}

        <div
          className={styles.ecomAvatar}
          tabIndex={0}
          onMouseEnter={() => setProfileOpen(true)}
          onMouseLeave={() => setProfileOpen(false)}
          onFocus={() => setProfileOpen(true)}
          onBlur={() => setProfileOpen(false)}
          style={{ position: 'relative' }}
        >
          US
          {profileOpen && (
            <div className={styles.profileDropdown}>
              <Link href="/profile" className={styles.profileDropdownItem}>My Profile</Link>
              <Link href="/account-settings" className={styles.profileDropdownItem}>Account Settings</Link>
              <div className={styles.profileDropdownDivider} />
              <button
                onClick={handleLogout}
                className={styles.profileDropdownItem}
                style={{ background: 'none', border: 'none', textAlign: 'left', width: '100%', cursor: 'pointer' }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
