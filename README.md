# star-count

This repository contains a Node.js script to count all stars from a GitHub organization :octocat:

The script parses the v3 API response for `orgs/{org}/repos`. You can call this API endpoint in different ways, but I chose to use GitHub's CLI. I did the following (while in the project directory). Note, swap `{org}` for your organization of choice.

```
gh api orgs/{org}/repos --paginate > results.json
```

This redirects the output of the GitHub API call into a local JSON file. After, you can modify [parse.js](parse.js) to make sure it's pointed at that local JSON file. The script will calculate the total number of stars under the given GitHub organization (public unarchived repos only). This includes forks (but it'll only include the stars on the fork, not the original). Feel free to modify the logic as needed!
