# Github Profile Finder

- In 'Github Profile Finder', we can search GitHub users by their GitHub username and we will get user's profile information along with links to latest 5 repositories as you type in search query.
- Every time you type something (every word), the application will make a request to github looking for the typed username [Use of keyup event] and respective user information matching the query will be displayed. If user not found, alert message will be displayed which will disappear after 3000 seconds.
- The profile information will contain avatar, link to user's github profile along with his profile information such as his company, link to webite or blog, location and the his membership information.
- The latest 5 repositories will be displayed along with link to repository and other related parameters such as number of stars, number of watchers, number of forks and the language used in the repository.
- This application makes use of GitHub API and in order to make infinite request to GitHub API, you need to register the GitHub application and it can be registered at https://github.com/settings/applications/new
- Once you register the application, you get client_id and client_secret information and with use of these keys in your application, you can make infinite request to GitHub API.
- For normal testing purpose and to check the response, you can visit
  - https://api.github.com/users/{PUT USERNAME} e.g. https://api.github.com/users/Rohit484 for getting profile information and
  - https://api.github.com/users/{PUT USERNAME}/repos e.g. https://api.github.com/users/Rohit484/repos for getting repository information of given user.
