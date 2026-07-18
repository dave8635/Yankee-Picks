import { registerRoute } from "../router.js";

export function registerDashboard() {

    registerRoute("dashboard", renderDashboard);

}

function renderDashboard() {

    document.getElementById("page").innerHTML = `

        <section class="dashboard">

            <h1>Dashboard</h1>

            <p>Welcome to Yankee Picks.</p>

        </section>

    `;

}