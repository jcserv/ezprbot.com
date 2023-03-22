---
sidebar_position: 3
---

# 💬 /stats

View interesting stats about PR review requests submitted by yourself or submitted in a provided channel.

## Usage

`/stats`							# View your average statistics as a contributor

`/stats —-repo [#repo]`		        # View the average statistics of a repo

`/stats —-pr [pr url]`		        # View the average statistics for an individual pull request

## Options

### `--repo`

Used to define scope for the statistics calculation to the provided repo(s)

### `--pr`

Used to define scope for the statistics calculation to the provided PR.

## Arguments

### `[repo]`

> `type: string`

The repository

ex. `ez-pr-bot`

### `[pr url]`

> `type: url string`

A link to the pull request

ex. `https://github.com/jcserv/ez-pr-bot/pulls/1`

### `[aggregate]`

> `type: string`

The aggregate function(s) to calculate the statistics of. Should be comma-separated. Case insensitive.
One of [“AVG”, “MIN”, “MAX”, “MEDIAN”, “ALL”].

ex. `AVG`, `ALL`, `"AVG,MIN”`

## Example Usage

### List your statistics

_input:_ `/stats`

_output_:

> Here are your AVG statistics as a contributor:

| Type | Statistic | Value |
|------|-----------------------|-------|
| AVG | Time-to-Merge | 2h30m |
| AVG | Time-to-Approve | 1h10m |
| AVG | Actual Review Time | 20m |
| AVG | Estimated Review Time | 30m |

-------

### List statistics for all PRs submitted to a channel

_input:_ `/stats —-channel #team-ez-pr-bot`

_output_:

> Here are the AVG statistics for the channel #ez-pr-bot:

| Type | Statistic             | Value |
| ---- | --------------------- | ----- |
| AVG  | Time-to-Merge         | 2h30m |
| AVG  | Time-to-Approve       | 1h10m |
| AVG  | Actual Review Time    | 20m   |
| AVG  | Estimated Review Time | 30m   |

-------

### List statistics for a PR

_input:_ `/stats —-pr http://github.com/jcserv/ez-pr-bot/pulls/1`

_output_:

> Here are the AVG statistics for the pull request http://github.com/jcserv/ez-pr-bot/pulls/1:

| Type | Statistic             | Value |
| ---- | --------------------- | ----- |
| AVG  | Time-to-Merge         | 2h30m |
| AVG  | Time-to-Approve       | 1h10m |
| AVG  | Actual Review Time    | 20m   |
| AVG  | Estimated Review Time | 30m   |

-------

### List your min statistics

_input:_ `/stats —aggregate MIN`

_output_:

> Here are your MIN statistics as a contributor:

| Type | Statistic             | Value |
| ---- | --------------------- | ----- |
| MIN  | Time-to-Merge         | 20m   |
| MIN  | Time-to-Approve       | 1h1m  |
| MIN  | Actual Review Time    | 2m    |
| MIN  | Estimated Review Time | 5m    |

-------

### List your average and min statistics

_input:_ `/stats —aggregate AVG,MIN`

_output_:

> Here are your AVG and MIN statistics as a contributor:

| Type | Statistic | Value |
|------|-----------------------|-------|
| MIN | Time-to-Merge | 20m |
| MIN | Time-to-Approve | 1h1m |
| MIN | Actual Review Time | 2m |
| MIN | Estimated Review Time | 5m |
| AVG | Time-to-Merge | 2h30m |
| AVG | Time-to-Approve | 1h10m |
| AVG | Actual Review Time | 20m |
| AVG | Estimated Review Time | 30m |
