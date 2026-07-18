const routes = {};

export function registerRoute(name, render) {
    routes[name] = render;
}

export function navigate(page) {

    if (!routes[page]) {
        console.error(`Unknown page: ${page}`);
        return;
    }

    history.pushState({}, "", `#${page}`);

    routes[page]();
}

export function startRouter() {

    const page = location.hash.replace("#", "") || "dashboard";

    navigate(page);

}