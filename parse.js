const results = require('./results.json')

let total = 0;
let repositoryCount = 0;
let unarchivedPublicRepositories = 0;
for (const result of results) {
    repositoryCount++;
    if (result['visibility'] === 'public' && result['archived'] === false) {
        console.log(result['name'], result['stargazers_count'])
        total += result['stargazers_count'];
        unarchivedPublicRepositories++;
    }
}

console.log('Total stars:', total);
console.log('Total repositories (all types):', repositoryCount);
console.log('Total unarchived public repositories:', unarchivedPublicRepositories);
