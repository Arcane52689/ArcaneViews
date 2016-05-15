
Templates= {
  cache: {}
}

Templates.fetch = function(url, callback) {
  $.ajax({
    url: url,
    responseType: "html"
  }).success(function(resp) {
    this.cache[url] = Handlebars.compile(resp);
    callback && callback(this.cache[url]);
  }.bind(this))
}

Templates.has = function(url) {
  return (!typeof this.cache[url] === 'undefined');
}

Templates.get = function(url) {
  if(this.has(url)) {
    return this.cache[url]
  } else {

  }
}