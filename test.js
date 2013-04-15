var checkOnAbe = require("./")

checkOnAbe(function(err, abesOkay) {
  if (err) throw err

  if (typeof abesOkay == "boolean") return

  OMFG.I.CANT.FIND.OUT.ABOUT.ABE
})
