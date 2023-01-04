class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, (repoData) => {
        console.log(repoData);
        this.model.setRepoInfo(repoData);
        this.display();
      });
    });
  }

  display() {
    const repoName = this.model.getRepoInfo().full_name;
    const repoDesc = this.model.getRepoInfo().description;
    const repoImg = this.model.getRepoInfo().organization.avatar_url;

    document.querySelector('#repo-name').textContent = repoName;
    document.querySelector('#repo-description').textContent = repoDesc;
    document.querySelector('#repo-image').src = repoImg;
  }
}

module.exports = GithubView;
