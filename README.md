# star-count ⭐

A simple Node.js script to count the total stars from all public, unarchived repositories in a given GitHub organization :octocat:

## How It Works

The script fetches repository data using GitHub’s v3 API (`orgs/{org}/repos`) via the GitHub CLI.

## Prerequisites

- [GitHub CLI](https://cli.github.com/manual/gh_api) installed (`gh` command available)
- Node.js installed

## Usage

1. Replace `{org}` with your target organization and run:

```sh
  gh api orgs/{org}/repos --paginate > results.json
```

This saves the API response as a JSON file locally.

2. Open [`parse.js`](parse.js) and ensure it points to `results.json`.

3. Run the script:

```sh
node parse.js
```

This will output the total number of stars across all public, unarchived repositories in the organization.

### Notes

- The count **includes stars on forks** but **not** the stars from the original upstream repo.
- Feel free to modify `parse.js` to adjust filtering or parsing logic.
