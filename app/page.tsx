import styles from "./page.module.css";

const dashboardTasks = [
  // Frontend
  { category: "Frontend", feature: "Folder Structure", description: "UI, regex, Redux implementation" },
  // Backend
  { category: "Backend", feature: "Folder Structure", description: "MongoDB setup" },
  // Database
  { category: "Database", feature: "Collection Creation", description: "Data Security schema and security constraints" },
  // Logger Setup
  { category: "Logger Setup", feature: "Error Handling", description: "Centralized logging with error handling" },
  // Optimization
  { category: "Optimization", feature: "Graceful Shutdown", description: "Implementing graceful shutdown" },
  // Authentication - Static UI
  { category: "Authentication", feature: "Static Screen UI", description: "Login Screen (UI, error states)" },
  { category: "Authentication", feature: "Static Screen UI", description: "Signup Screen (UI, error states)" },
  { category: "Authentication", feature: "Static Screen UI", description: "Forgot Password Screen (UI for password reset)" },
  // Authentication - API Integration
  { category: "Authentication", feature: "API Integration", description: "Login API Integration (Connect login UI to backend)" },
  { category: "Authentication", feature: "API Integration", description: "Signup API Integration (Connect signup UI to backend)" },
  { category: "Authentication", feature: "API Integration", description: "Forgot Password API Integration (Connect forgot password UI to backend)" },
  // Authentication - Backend APIs
  { category: "Authentication", feature: "Backend APIs", description: "Login Endpoint (Backend logic for login)" },
  { category: "Authentication", feature: "Backend APIs", description: "Signup Endpoint (Backend logic for signup)" },
  { category: "Authentication", feature: "Backend APIs", description: "Forgot Password Endpoint (Backend logic for password reset)" },
  // Dashboard
  { category: "Dashboard", feature: "Static Screen UI", description: "Dashboard Layout (UI for navigation)" },
  { category: "Dashboard", feature: "Static Screen UI", description: "Stats Widgets (UI for stats, charts, and KPIs)" },
  { category: "Dashboard", feature: "Static Screen UI", description: "Recent Activity (UI for activity logs)" },
  // Backend - Zoho
  { category: "Backend", feature: "Zoho Connection", description: "Connectivity to backend" },
  { category: "Backend", feature: "Zoho Mock Data", description: "Mock data for login-based dashboard rendering" },
];

const groupedTasks = dashboardTasks.reduce((acc, task) => {
  if (!acc[task.category]) acc[task.category] = [];
  acc[task.category].push(task);
  return acc;
}, {} as Record<string, typeof dashboardTasks>);

export default function Home() {
  return (
    <div className={styles.pageCustom}>
      <h1 className={styles.title}>Project Feature Dashboard</h1>
      <div className={styles.sectionGrid}>
        {Object.entries(groupedTasks).map(([category, tasks]) => (
          <section key={category} className={styles.section}>
            <h2 className={styles.sectionTitle}>{category}</h2>
            <div className={styles.grid}>
              {tasks.map((task, idx) => (
                <div className={styles.card} key={idx}>
                  <div className={styles.feature}>{task.feature}</div>
                  <div className={styles.description}>{task.description}</div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
