import styles from "../page.module.css";

const orders = [
  { id: "ORD-1001", license: "AWS", quantity: 1, total: 99, status: "Completed" },
  { id: "ORD-1002", license: "GCP", quantity: 2, total: 178, status: "Pending" },
  { id: "ORD-1003", license: "Azure", quantity: 1, total: 95, status: "Completed" },
];

export default function OrdersListPage() {
  return (
    <div className={styles.ecomPage}>
      <main className={styles.ecomMain}>
        <h1 className={styles.ecomTitle}>Orders List</h1>
        <div className={styles.ecomCard} style={{padding: 0, marginTop: 24}}>
          <div className={styles.tableWrapper} style={{boxShadow: 'none', borderRadius: 0, margin: 0}}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>License</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o, idx) => (
                  <tr key={idx}>
                    <td>{o.id}</td>
                    <td>{o.license}</td>
                    <td>{o.quantity}</td>
                    <td>${o.total}</td>
                    <td>
                      <span className={
                        o.status === "Completed"
                          ? styles.statusBadgeCompleted
                          : o.status === "Pending"
                          ? styles.statusBadgePending
                          : styles.statusBadgeFailed
                      }>
                        {o.status}
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