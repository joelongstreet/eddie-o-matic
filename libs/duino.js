var needle = require('needle');

exports.broadcast = function(opts, next){
  var url = [
    'https://api.spark.io/v1/devices/',
    process.env.SPARK_CORE_ID,
    '/updateState'
  ].join('');

  var degrees = 0;
  if(opts.floor = 1) degrees = 15;
  else if(opts.floor = 2) degrees = 30;
  else if(opts.floor = 3) degrees = 60;
  else if(opts.floor = 4) degrees = 90;

  var postParams = [
    'access_token=',
    process.env.SPARK_CORE_TOKEN,
    '&params=',
    opts.matches[0].pinId,
    ',',
    degrees
  ].join('');

  needle.post(url, postParams, function(req, res){
    console.log('sent request to spark');
    if(next) next(res);
  });
};
