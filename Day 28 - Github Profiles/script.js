const API_URL = "https://api.github.com/users/";
const search = document.getElementById("search");
const form = document.getElementById("form");
const main = document.getElementById("main");
// function to get user 
async function getUser(username) {
  try {
    const res = await axios(API_URL + username);
    createUserCard(res.data);
    getRepos(username);
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard("No profile with that username");
    }
  }
}
// Function to get Repos 
async function getRepos(username) {
  try {
    const res = await axios(API_URL + username + "/repos?sort=created");
    addRepos(res.data);
  } catch (err) {
    createErrorCard("Unable to fetch repos");
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});
// usercard 
const createUserCard = (user) => {
  let cardEl = `
  <div class = "card">
        <div>
          <img
            class="avatar"
            src="${user.avatar_url}"
            alt="user image"
          />
        </div>
        <div class="user-info">
          <h2>${user.name}</h2>
          <p class="bio">
            ${user.bio}
          </p>
          <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos} <strong>Repos</strong></li>
          </ul>
          <div id="repos">
          </div>
        </div>
      </div>
  `;
  main.innerHTML = cardEl;
};
// Error card 
const createErrorCard = (message) => {
  let cardEl = `
    <div class="card">
      <h1>${message}</h1>
    </
  `;
  main.innerHTML = cardEl;
};
let count = 0

// Adding 10 repos to the card 
const addRepos = (repos) => {
  const reposEl = document.getElementById("repos");
  repos.slice(0,10)
    .forEach((repo) => {
      
      const repoLink = document.createElement("a");

      repoLink.classList.add("repo");
      repoLink.innerText = repo.name;
      repoLink.href = repo.html_url;
      repoLink.target = "_blank";
      reposEl.appendChild(repoLink);
      count++
    })
};
