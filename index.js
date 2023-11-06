function post() {
  const userName = document.getElementById(`userName`).value;
  const userSMS = document.getElementById(`userSMS`).value;
  document.getElementById(`chatbox`).innerHTML += `${userName}: ${userSMS}<br>`;
}

function getData() {
  //remainder to add table to html
  fetch("https://db-c34l.onrender.com/chats")
    .then((response) => response.json())
    .then(function (data) {
      document.getElementById("chatbox").innerHTML = "";

      data.forEach(function (message) {
        const messageDiv = document.createElement("div");
        messageDiv.className = "message incoming";
        messageDiv.textContent = `${message.user}: ${message.message}`;
        document.getElementById("chatbox").appendChild(messageDiv);
      });
    })
    .catch((error) => console.error("Error:", error));
}

function send() {
  const userName = document.getElementById(`userName`).value;
  const userSMS = document.getElementById(`userSMS`).value;
  document.getElementById(`chatbox`).innerHTML += `${userName}: ${userSMS}<br>`;

  fetch("https://db-c34l.onrender.com/chats", {
    method: "POST",
    body: JSON.stringify({
      user: userName,
      message: userSMS,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

const userData = document.getElementById("userData");

userData.addEventListener("submit", function (e) {
  e.preventDefault();

  const userName = document.getElementById(`userName`).value;
  const userSMS = document.getElementById(`userSMS`).value;

  fetch("https://db-c34l.onrender.com/chats", {
    method: "POST",
    body: JSON.stringify({
      user: userName,
      message: userSMS,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById(
        "chatbox"
      ).innerHTML += `${data.user}: ${data.message}<br>`;
    })
    .catch((error) => console.error("Error:", error));
});
