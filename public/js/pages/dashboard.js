import { registerRoute } from "../router.js";

export function registerDashboard() {
    registerRoute("dashboard", renderDashboard);
}

function renderDashboard() {
    document.getElementById("page").innerHTML = `
        <section class="dashboard">

            <div class="page-header">
                <div>
                    <h1>Dashboard</h1>
                    <p>Overview of your business today.</p>
                </div>

                <div class="today">
                    ${new Date().toLocaleDateString()}
                </div>
            </div>

            <div class="stats-grid">

                <div class="stat-card">
                    <span>Revenue</span>
                    <h2>ETB 0.00</h2>
                </div>

                <div class="stat-card">
                    <span>Profit</span>
                    <h2>ETB 0.00</h2>
                </div>

                <div class="stat-card">
                    <span>Inventory Value</span>
                    <h2>ETB 0.00</h2>
                </div>

                <div class="stat-card">
                    <span>Products</span>
                    <h2>0</h2>
                </div>

            </div>

            <div class="dashboard-grid">

                <div class="panel large">

                    <h3>Weekly Sales</h3>

                    <div class="placeholder">
                        Chart coming soon
                    </div>

                </div>

                <div class="panel">

                    <h3>Recent Activity</h3>

                    <div class="placeholder">
                        No activity yet
                    </div>

                </div>

                <div class="panel">

                    <h3>Low Stock</h3>

                    <div class="placeholder">
                        Nothing to show
                    </div>

                </div>

                <div class="panel">

                    <h3>Expiring Soon</h3>

                    <div class="placeholder">
                        Everything looks good
                    </div>

                </div>

            </div>

        </section>
    `;
}