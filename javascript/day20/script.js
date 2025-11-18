async function getGithubUserData() {
  const response = await fetch("https://api.github.com/users");
  return await response.json();
}

async function render() {
  const userData = await getGithubUserData();
  const parent = document.querySelector(".parent");

  for (let user of userData) {
    const divElement = document.createElement("div");
    divElement.classList.add("user");

    const imgElement = document.createElement("img");
    imgElement.src = user.avatar_url;

    const userName = document.createElement("h2");
    userName.textContent = user.login;

    const button = document.createElement("button");
    button.textContent = "View Profile";

    button.addEventListener("click", function () {
      fetchUserData(`https://api.github.com/users/${user.login}`);
    });

    divElement.append(imgElement, userName, button);
    parent.append(divElement);
  }
}

async function fetchUserData(url) {
  const userInformation = await fetch(url, {
    headers: { "Accept": "application/vnd.github+json" }
  });

  const data = await userInformation.json();
  displayUserInfo(data);
}

function displayUserInfo(user) {
  const box = document.querySelector(".user-details");

  box.style.display = "flex";   // show this section

  box.innerHTML = `
    <div class="user-card">
      <img src="${user.avatar_url}" width="150" />
      <h2>${user.login}</h2>
      <p><strong>Name:</strong> ${user.name || "Not available"}</p>
      <p><strong>Followers:</strong> ${user.followers}</p>
      <p><strong>Following:</strong> ${user.following}</p>
      <p><strong>Public Repos:</strong> ${user.public_repos}</p>
      <a href="${user.html_url}" target="_blank">Open GitHub Profile</a>
    </div>
  `;
}

render();
