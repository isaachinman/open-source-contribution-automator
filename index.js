// Dependencies
var schedule = require('node-schedule')
var git = require('simple-git')
var moment = require('moment')
var writeFile = require('write')

// Pull before doing anything else
git('.').pull()

// Pick a random number between 1 and 20
var numOfCommits = Math.ceil(Math.random() * (0 - 20) + 20)

// Determine the date
var today = moment().format('DD.MM.YYYY')

// Perform that many commits
for (var i = 0; i < numOfCommits; i++) {

  // Write a meaningless file
  writeFile.sync(('contributions/' + today + '/' + (i + 1)), '')

  // Perform a meaningless commit
  git()
    .commit(today + '-' + i)
    .push('origin', 'master')

}

// // Set up daily task
// var job = schedule.scheduleJob('0 18 * * * ....', function() {
//
//   TASK_GOES_HERE
//
// })
