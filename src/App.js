// DOM elements
const searchInput = document.getElementById("searchInput");
const profileContainer = document.getElementById("profileContainer");

// Fetch the GitHub profile
async function fetchProfile() {
  const username = searchInput.value.trim();

  if (!username) {
    profileContainer.innerHTML = "<p>Please enter a valid GitHub username</p>";
    return;
  }

  try {
    const profileResponse = await fetch(
      `https://api.github.com/users/${username}`
    );

    if (!profileResponse.ok) {
      profileContainer.innerHTML = "<p>User not found</p>";
      return;
    }

    const profileData = await profileResponse.json();
    displayProfile(profileData);

    // Fetch and display the latest repositories
    fetchRepos(username);
  } catch (error) {
    console.error("Error fetching profile:", error);
    profileContainer.innerHTML =
      "<p>Unable to fetch profile. Please try again later.</p>";
  }
}

// Display profile information
function displayProfile(profile) {
  profileContainer.innerHTML = `
    <div class="profile">
      <img src="${profile.avatar_url}" alt="Profile Image">
      <h2>${profile.name}</h2>
      <p>${profile.bio ? profile.bio : "No bio available"}</p>
      <p><strong>Followers:</strong> ${
        profile.followers
      } | <strong>Following:</strong> ${profile.following}</p>
      <p><strong>Public Repos:</strong> ${profile.public_repos}</p>
      <p><strong>Location:</strong> ${
        profile.location ? profile.location : "Not specified"
      }</p>
      <div class="links">
        <a href="${profile.html_url}" target="_blank">GitHub Profile</a>
        ${
          profile.blog
            ? `<a href="${profile.blog}" target="_blank">Blog</a>`
            : ""
        }
      </div>
    </div>
  `;
}

// Fetch and display the latest repositories
async function fetchRepos(username) {
  try {
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?sort=created&per_page=5`
    );
    const repos = await reposResponse.json();

    let repoList = "<h3>Latest Repositories:</h3><ul>";
    repos.forEach((repo) => {
      repoList += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`;
    });
    repoList += "</ul>";

    profileContainer.innerHTML += repoList;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    profileContainer.innerHTML += "<p>Unable to fetch repositories.</p>";
  }
}
