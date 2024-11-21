const { Octokit } = require('@octokit/rest');
const octokit = new Octokit({ auth: process.env.TEST_TOKEN });
(async () => {
    const { data } = await octokit.repos.get({
        owner: 'username',
        repo: 'repository-name',
    });
    console.log('Repository Info:', data);
})();