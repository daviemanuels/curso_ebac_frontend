document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/daviemanuels')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nameElement.innerHTML = json.name;
            usernameElement.innerHTML = json.login;
            avatarElement.src = json.avatar_url;
            followingElement.innerHTML = json.following;
            followersElement.innerHTML = json.followers;
            repos.innerHTML = json.public_repos;
            linkElement.href = json.html_url;
        })
        .catch(function(error) {
            alert("Ocorreu um erro ao buscar os dados, tente novamente mais tarde.")
        })
})