#!/usr/bin/env node

var checkOnAbe = require("./")

checkOnAbe(function(err, abesOkay) {
  if (err) throw err

  console.log(abesOkay ? "yes." : "no.")
})
