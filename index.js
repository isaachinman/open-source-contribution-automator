// Dependencies
var schedule = require('node-schedule')
var moment = require('moment')
var writeFile = require('write')

// Pull repo before doing anything else
require('child_process').execSync('git pull')

// Pick a random number between 1 and 20
var numOfCommits = Math.ceil(Math.random() * (0 - 20) + 20)

// Determine the date
var today = moment().format('DD.MM.YYYY')

// Perform that many commits
for (var i = 0; i < numOfCommits; i++) {

  // Write a meaningless file
  writeFile.sync(('contributions/' + today + '/' + (i + 1)), '')

  // Perform a meaningless commit
  require('child_process').execSync('git add contributions/' + today + '/' + (i + 1))
  require('child_process').execSync('git commit -m "Contribution: ' + today + ' #' + (i + 1) + '"')

}
