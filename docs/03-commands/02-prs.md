---
sidebar_position: 2
---

# 💬 /prs

List all PR review requests opened by yourself or in a channel.

## Usage

`/prs` 							    # Lists all of your team's open prs

`/prs me`                           # Lists all of your open prs

`/prs —-repo [repo]`			    # List all PRs submitted to the provided channel

`/prs —-status [status]`            # Lists all PRs matching the provided statuses

## Options

### `--repo`

Used to define scope for the list command to the provided repo(s)

### `--status`

Used to query for PRs with the provided statuses.

## Arguments

### `[repo]`

> `type: string`

The repo to search pull requests on

ex. `ez-pr-bot`

### `[status]`

> `type: #string`

The status of the PR review request. Can be one of ["DRAFT", "OPEN", "APPROVED", "MERGED", "CLOSED"].
Multiple statuses can be provided if comma separated. Case insensitive.

ex. `OPEN`,`APPROVED`

## Example Usage

### See all of your open PRs

_input:_ `/prs`

_output_:

Here is a list of all of your PRs:

| Link | Status |
|--------------------------------------------------------------------|--------------------|
| https://github.com/jcserv/ez-pr-bot/pulls/12 | Open |
| https://github.com/kubernetes/kubernetes/pulls/115100 | Approved |
| https://github.com/temporalio/temporal/pulls/3812 | Merged |
| https://github.com/sailpoint-oss/sailpoint-api-guidelines/pulls/12 | Closed |
