---
sidebar_position: 1
---

# 💬 /ezpr

Submit a pull request for review to the specified channel, which will ping the provided mention.
If [@role] is not provided, the message does not ping.
If [#team-channel] is not provided, it defaults to the posted channel.

## Usage

`/ezpr [pr link]`

`/ezpr [pr link] [estimated review time] [description]`

`/ezpr [pr link] [estimated review time] [description] [@role]`

`/ezpr [pr link] [estimated review time] [description] [@role] [#channel]`

## Arguments

### `[pr link]`

> `type: url string` | **required**

A URL link to the pull request

ex. `http://github.com/jcserv/ez-pr-bot/pulls/1`

### `[estimated review time]`

> `type: string` | **required**

How long it should take to review this PR. Should end with minutes ("m", "min", "minutes") or hours ("h", "hrs", "hours")

ex. `15m`, `2hrs`, `"75 minutes"`

### `[description]`

> `type: string` | **required**

A summary of the changes. Should be wrapped with quotes (")

ex. `"Adds the help command allowing users to learn how to use the bot"`

### `[@role]`

> `type: @string` | **required**

The role to mention, whom should review the PR.

ex. `@ez-pr-devs`

### `[#team-channel]`

> `type: #string` | **required**

A Slack channel that EZ PR Bot has joined

ex. `#team-ez-pr-bot`

## Example Usage

### Submit a pull request 

*input*: `/ezpr http://github.com/jcserv/ez-pr-bot/pulls/1 15m "Adds the help command allowing users to learn how to use the bot" @ez-pr-devs #team-ez-pr-bot`

*output*: Sends a formatted Slack message to #team-ez-pr-bot that pings the @ez-pr-devs role, containing the pull request link, the estimated review time, and the description provided by the user.