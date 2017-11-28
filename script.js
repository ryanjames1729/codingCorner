var x = setInterval(function(){
  var now = new Date();
  var utc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());


  if (now.getUTCHours() > 5){
    var now_hours = now.getUTCHours() - 6;
  }
  else {
    var now_hours = now.getUTCHours() + 18;
  }

  if (now.getUTCMinutes() < 10){
    var now_minutes = "0" + now.getUTCMinutes();
  }
  else{
    var now_minutes = now.getUTCMinutes();
  }

  document.getElementById("clock").innerHTML = "Current Time: " + now_hours + ":" + now_minutes;
}, 1000);
