import { navigate } from "../router.js";

export function renderSidebar() {

    const sidebar = document.getElementById("sidebar");

    sidebar.innerHTML = `

        <div class="logo">

            <h2>Yankee Picks</h2>

        </div>

        <nav>

            <button data-page="dashboard">Dashboard</button>

            <button data-page="inventory">Inventory</button>

            <button data-page="sales">Sales</button>

            <button data-page="addStock">Add Stock</button>

            <button data-page="reports">Reports</button>

            <button data-page="settings">Settings</button>

        </nav>

    `;

    sidebar.addEventListener("click", e => {

        const button = e.target.closest("button");

        if (!button) return;

        navigate(button.dataset.page);

    });

}