const fs = require("fs")
const Handlebars = require("handlebars")

Handlebars.registerHelper("join", function (keywords) {
  return [].concat(keywords).join(", ")
})

function render(resume) {
  var template = fs.readFileSync(__dirname + "/resume.hbs", "utf-8")
  return Handlebars.compile(template)({
    resume
  })
}

module.exports = {
  render: render
}