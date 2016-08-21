# Open Source Contribution Automator

This is a tool to automate "open-source" contribution and pad your Github profile.

![alt text](https://i.imgur.com/piFIRf8.png "This is incredibly superficial and stupid")

## What does this thing do?

This tiny little project was built for fun. Please don't take it seriously.

This project runs a node script once per day. The script picks a random integer
between 1 and 20 (configurable), and performs that many "contributions" into
the master branch of an "open source" project.

This will fill out the little squares on your GitHub profile and make you look
impressive.

If you want to affect your commit history _in the past_, check out [this repo](https://github.com/gelstudios/gitfiti).

## How do I get it to work?

1. Fork this repo
2. Spin up a new EC2 instance
3. Install `node` and `npm` on the instance
4. Clone your fork
5. Do `npm i`
6. Create a new ssh key, and add it as a deploy key in your fork
7. On your EC2 instance, change `git config user.name` and `git config user.email` to your own details
8. Do `npm i pm2 -g`
9. Do `pm2 start index.js -n openSourceContributor --cron '0 18 * * *'`
10. Optional: set up an uptime monitor on your EC2 instance
