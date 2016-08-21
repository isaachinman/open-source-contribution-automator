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
  var commitSpawn = require('child_process').spawn
  var commit = commitSpawn('git', ['commit',('-am "Contribution" ' + today + ' #' + (i + 1))])
  commit.on('exit', function (code) {
    var pushSpawn = require('child_process').spawn
    var push = pushSpawn('git', ['push','origin','master'])
  })

}

// // Set up daily task
// var job = schedule.scheduleJob('0 18 * * * ....', function() {
//
//   TASK_GOES_HERE
//
// })
