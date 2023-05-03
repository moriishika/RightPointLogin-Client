const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append("username", username.value);
  data.append("password", password.value);


  const response = await fetch("https://rightpointlogin-server.moriishika.repl.co/login", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(data)),
    headers: { "Content-Type": "application/json" }
  });

  console.log(response);
});