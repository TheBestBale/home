// src/api.js
import store from "@/scripts/store.js";

const BASE_URL = "http://127.0.0.1:8081/api/me"; // http, not https

async function request(method, path, body = null) {
    const token = store.GetAuthToken();

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    };

    const options = {
        method,
        headers,
    };

    if (body && method !== "GET") {
        options.body = JSON.stringify(body);
    }
    let url = `${BASE_URL}${path}`;
    console.log('sending request: ' + url);
    console.log('sent token: ' + token);
    const response = await fetch(url, options);

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Request failed: ${response.status} ${error}`);
    }

    return response.json();
}

// Specific API helper functions
export function getUser() {
    return request("GET", "");
}

// Add more as needed:
export function getDevices() {
    return request("GET", "/devices");
}




