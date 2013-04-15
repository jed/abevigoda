var request = require("request")
var STATUS_CODES = require("http").STATUS_CODES
var cheerio = require("cheerio")

module.exports = function(cb) {
  request("http://www.abevigoda.com", uponstWordOfAbeVigodasVitality)

  function uponstWordOfAbeVigodasVitality(err, res, body) {
    if (err) return cb(err)

    if (res.statusCode != 200) {
      return cb(new Error(STATUS_CODES[res.statusCode]))
    }

    var almostjQuery = cheerio.load(body)
    var status = almostjQuery(".fixed").first().text().trim()

    cb(null, status == "alive")
  }
}
