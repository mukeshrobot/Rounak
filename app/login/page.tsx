"use client";
import styles from "../page.module.css";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Secure Cloud Solutions",
      description: "Enterprise-grade security for your business"
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      title: "Analytics Dashboard",
      description: "Real-time insights and reporting"
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Team Collaboration",
      description: "Work together seamlessly"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className={styles.loginPageContainer + " overflow-hidden"}>
      <div className={styles.loginBackground}>
        <div className={styles.loginBackgroundOverlay}></div>
      </div>
      
      <div className={styles.loginContent}>
        {/* Login Form Section - Left Half */}
        <div className={styles.loginFormSection}>
          <div className={styles.loginCard}>
            <div className={styles.loginHeader}>
              <div className={styles.loginLogo}>
                <img src="/logo.png" alt="Logo" width={200} height={50} />
              </div>
              <h1 className={styles.loginTitle}>Welcome Back</h1>
              <p className={styles.loginSubtitle}>Sign in to your account to continue</p>
            </div>

            <form className={styles.loginForm} autoComplete="off">
              <div className={styles.inputGroup}>
                <div className={styles.inputWrapper}>
                  <svg className={styles.inputIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    className={styles.loginInput} 
                    placeholder="Enter your email address" 
                    required 
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.inputWrapper}>
                  <svg className={styles.inputIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="16" r="1" stroke="currentColor" strokeWidth="2"/>
                    <path d="M7 11V7C7 5.89543 7.89543 5 9 5H15C16.1046 5 17 5.89543 17 7V11" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <input 
                    id="password" 
                    name="password" 
                    type="password" 
                    className={styles.loginInput} 
                    placeholder="Enter your password" 
                    required 
                  />
                </div>
              </div>

              <div className={styles.formOptions}>
                <label className={styles.checkboxWrapper}>
                  <input type="checkbox" className={styles.checkbox} />
                  <span className={styles.checkboxLabel}>Remember me</span>
                </label>
                <a href="#" className={styles.forgotPassword}>Forgot password?</a>
              </div>

              <button type="submit" className={styles.loginButton}>
                <span>Sign In</span>
                <svg className={styles.buttonIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>

            <div className={styles.loginDivider}>
              <span>or</span>
            </div>

            <div className={styles.socialLogin}>
              <button className={styles.socialButton}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>
            </div>

            <div className={styles.loginFooter}>
              <p>Don&apos;t have an account? <a href="#" className={styles.signupLink}>Sign up</a></p>
            </div>
          </div>
        </div>

        {/* Carousel Section - Right Half */}
        <div className={styles.carouselSection + " rounded-lg"}>
          <div className={styles.carouselContainer}>
            <div className={styles.carouselWrapper}>
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`${styles.carouselSlide} ${index === currentImageIndex ? styles.active : ''}`}
                  style={{
                    backgroundImage: `url(${image.src})`,
                  }}
                >
                  <div className={styles.carouselContent}>
                    <h2 className={styles.carouselTitle}>{image.title}</h2>
                    <p className={styles.carouselDescription}>{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Carousel Navigation */}
            <button className={styles.carouselButton} onClick={prevImage} style={{ left: '20px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.carouselButton} onClick={nextImage} style={{ right: '20px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {/* Carousel Indicators */}
            <div className={styles.carouselIndicators}>
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.carouselIndicator} ${index === currentImageIndex ? styles.active : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 