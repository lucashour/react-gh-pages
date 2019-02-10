import axios from 'axios';

const ID     = 'fde6535e18587af19147';
const SECRET = '46999cf5a1607bd57149f7c59b0535d7bc9b7aa1';
const PARAMS = `?client_id=${ID}&client_secret=${SECRET}`;

class API {
  constructor() {
    this.getUserData = this.getUserData.bind(this);
  }

  battle(players) {
    return axios
      .all(players.map(this.getUserData))
      .then(this.sortPlayers)
      .catch(this.handleError);
  }

  fetchPopularRepos(language) {
    const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

    return axios
      .get(encodedURI)
      .then((response) => response.data.items);
  }

  getProfile(username) {
    return axios
      .get(`https://api.github.com/users/${username}${PARAMS}`)
      .then((user) => user.data);
  }

  getRepos(username) {
    return axios.get(`https://api.github.com/users/${username}/repos${PARAMS}&per_page=100`);
  }

  calculateScore(profile, repos) {
    const followers  = profile.followers;
    const totalStars = this.getStarCount(repos);

    return (followers * 3) + totalStars;
  }

  getStarCount(repos) {
    return repos.data.reduce((count, repo) => {
      return count + repo.stargazers_count;
    }, 0);
  }

  handleError(error) {
    console.warn(error);
    return null;
  }

  getUserData(player) {
    return axios
      .all([this.getProfile(player), this.getRepos(player)])
      .then((data) => {
        const [profile, repos] = data;

        return {
          profile,
          score: this.calculateScore(profile, repos)
        };
      });
  }

  sortPlayers(players) {
    return players.sort((a, b) => b.score - a.score);
  }
}

export default new API();
