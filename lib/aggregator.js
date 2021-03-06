// Generated by CoffeeScript 1.6.3
(function() {
  var Aggregator, d3;

  d3 = require('d3');

  Aggregator = (function() {
    function Aggregator() {
      this.cache = {};
    }

    Aggregator.prototype.flushTo = function(queue) {
      var name, values, _ref, _results;
      _ref = this.cache;
      _results = [];
      for (name in _ref) {
        values = _ref[name];
        values.sort();
        queue.push({
          name: name,
          count: values.length,
          sum: d3.sum(values),
          max: d3.max(values),
          min: d3.min(values),
          sum_squares: d3.sum(values, function(value) {
            return Math.pow(value, 2);
          })
        });
        _results.push(delete this.cache[name]);
      }
      return _results;
    };

    Aggregator.prototype.timing = function(name, value) {
      var _base;
      return ((_base = this.cache)[name] != null ? (_base = this.cache)[name] : _base[name] = []).push(value);
    };

    return Aggregator;

  })();

  module.exports = Aggregator;

}).call(this);
