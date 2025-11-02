// src/api.js
import store from "@/scripts/store.js";

const BASE_URL = "http://127.0.0.1:8081/api"; // http, not https

async function request(method, path, body = null) {
    const token = store.GetAuthToken();
    if (!token) {
        console.error('no token present');
    }
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
    // console.log('sending admin request: ' + url);
    // console.log('sent admin token: ' + token);
    const response = await fetch(url, options);

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Request failed: ${response.status} ${error}`);
    }

    return response.json();
}

// Specific API helper functions
export function adminGetUsers() {
    return request("GET", "/users");
}

// Add more as needed:
export function adminGetDevices() {
    return request("GET", "/devices");
}

export function getUserDevices(userID) {
    return request("GET", "/users/" + userID + "/devices");
}

export function callDeviceFunction(userID, deviceID, functionName) {
    return request("POST", "/users/" + userID + "/devices/" + deviceID + "/functions/" + functionName);
}




