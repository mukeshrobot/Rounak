import styles from "../page.module.css";

const payments = [
  { date: "2024-07-01", license: "AWS", amount: 99, status: "Paid" },
  { date: "2024-06-15", license: "GCP", amount: 89, status: "Paid" },
  { date: "2024-05-20", license: "Azure", amount: 95, status: "Failed" },
];

export default function PaymentHistoryPage() {
  return (
    <div className={styles.ecomPage}>
      <main className={styles.ecomMain}>
        <h1 className={styles.ecomTitle}>Payment History</h1>
        <div className={styles.ecomCard} style={{padding: 0, marginTop: 24}}>
          <div className={styles.tableWrapper} style={{boxShadow: 'none', borderRadius: 0, margin: 0}}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>License</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((p, idx) => (
                  <tr key={idx}>
                    <td>{p.date}</td>
                    <td>{p.license}</td>
                    <td>${p.amount}</td>
                    <td>
                      <span className={
                        p.status === "Paid"
                          ? styles.statusBadgeCompleted
                          : styles.statusBadgeFailed
                      }>
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
} 