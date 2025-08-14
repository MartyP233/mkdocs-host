document.addEventListener("DOMContentLoaded", function() {
    // Create a container div
    const authDiv = document.createElement("div");
    authDiv.style.position = "fixed";
    authDiv.style.top = "10px";
    authDiv.style.right = "10px";
    authDiv.style.zIndex = "1000";

    // Create Login button
    const loginButton = document.createElement("a");
    loginButton.href = "/.auth/login/aad";
    loginButton.textContent = "Login";
    loginButton.style.marginRight = "10px";
    loginButton.style.padding = "5px 10px";
    loginButton.style.backgroundColor = "#1976d2";
    loginButton.style.color = "white";
    loginButton.style.textDecoration = "none";
    loginButton.style.borderRadius = "4px";

    // Create Logout button
    const logoutButton = document.createElement("a");
    logoutButton.href = "/.auth/logout";
    logoutButton.textContent = "Logout";
    logoutButton.style.padding = "5px 10px";
    logoutButton.style.backgroundColor = "#e53935";
    logoutButton.style.color = "white";
    logoutButton.style.textDecoration = "none";
    logoutButton.style.borderRadius = "4px";

    authDiv.appendChild(loginButton);
    authDiv.appendChild(logoutButton);

    document.body.appendChild(authDiv);
});
