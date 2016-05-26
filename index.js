function hyb(element, children) {
  if(!children) {
    return [ "<", element, "/>" ].join("");
  }
  var tag = element.split(" ")[0];
  return [
    "<", element, ">",
    children.join(" "),
    "</", tag, ">"
  ].join("");
}

module.exports = hyb;
