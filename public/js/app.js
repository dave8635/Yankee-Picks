import { startRouter } from "./router.js";

import { renderSidebar } from "./components/sidebar.js";

import { renderHeader } from "./components/header.js";

import { registerDashboard } from "./pages/dashboard.js";

window.addEventListener("DOMContentLoaded", () => {

    renderSidebar();

    renderHeader();

    registerDashboard();

    startRouter();

});