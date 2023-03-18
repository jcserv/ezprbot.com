---
sidebar_position: 4
---

# 💬 /set

Set the status of a PR review request.

## Usage

`/set [pr url] [status]`			# Set the status of a PR

## Arguments

### `[pr url]`

> `type: url string | required`

A link to the pull request

ex. `https://github.com/jcserv/ez-pr-bot/pulls/1`

### `[status]`

> `type: string | required`

The status to set the PR review request to. Can be one of ["IN_REVIEW", "VIEWED", "CHANGES_REQUESTED", "APPROVED", "MERGE_READY", "MERGED", "CLOSED"]. Case insensitive.

ex. `IN_REVIEW`, `CLOSED`

## Example Usage

### Set status of a PR to merged

_input:_ `/set http://github.com/jcserv/ez-pr-bot/pulls/1 MERGED`

_output:_ (message to submitter) The status of the PR review request for http://github.com/jcserv/ez-pr-bot/pulls/1 has been set to MERGED.
