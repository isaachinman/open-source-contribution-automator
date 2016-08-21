// Dependencies
var schedule = require('node-schedule')
var moment = require('moment')
var writeFile = require('write')

// Pick a random number between 1 and 20
var numOfCommits = Math.ceil(Math.random() * (0 - 20) + 20)

// Determine the date
var today = moment().format('DD.MM.YYYY')

// Perform that many commits
for (var i = 0; i < numOfCommits; i++) {

  // Write a meaningless file
  writeFile.sync(('contributions/' + today + '/' + (i + 1)), '')

  // Perform a meaningless commit
  var add = require('child_process').execSync('git add contributions/' + today + '/' + (i + 1))
  var commit = require('child_process').execSync('git commit -m "Contribution, ' + today + ' #' + (i + 1) + '"')

}

// // Set up daily task
// var job = schedule.scheduleJob('0 18 * * * ....', function() {
//
//   TASK_GOES_HERE
//
// })
