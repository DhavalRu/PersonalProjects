$(document).ready(function(){
  var result = "";
  var log = "";
  var curr = "";
  var decimal = true;
  $("button").click(function() {
    curr = $(this).text();
    if (curr === "=") {
      result = eval(result).toString();
      log = result;
      $("#log").text(log);
      $("#result").text(result);
      //Don't allow decimal if already exists
      if (result.includes(".")) {
        decimal = false;
      }
      else {
        decimal = true;
      }
      if (result === "0") {
        result = "";
        log = "";
      }
    }
    else if (curr === "+") {
      decimal = true;
            if (result[result.length-1] === "+") {
        //Do nothing    
      }
      //Overwrite to current operator if there is a previous operator just before
      else if (result[result.length-1] === "/" || result[result.length-1] === "*" || result[result.length-1] === "-") {
        result = result.slice(0, -1);
        log = log.slice(0,-1);
        result += "+";
        log += "+";
        $("#log").text(log);
        $("#result").text(result);
      }
      else {
        result += "+";
        log += "+";
        $("#log").text(log);
        $("#result").text(result);
      }
            if (result[0] === "+" || result[0] === "-" || result[0] === "*" || result[0] === "/") {
        result = "0" + result;
              log = "0" + log;
      }
      result = eval(result.slice(0,-1)).toString() + "+";
      $("#log").text(log);
      $("#result").text(result);
    }
    else if (curr === "-") {
      decimal = true;
            if (result[result.length-1] === "-") {
        //Do nothing 
      }
      else if (result[result.length-1] === "/" || result[result.length-1] === "+" || result[result.length-1] === "*") {
        result = result.slice(0, -1);
        log = log.slice(0,-1);
        result += "-";
        log += "-";
        $("#log").text(log);
        $("#result").text(result);
      }
      else {
        result += "-";
        log += "-";
        $("#log").text(log);
        $("#result").text(result);
      }
      if (result[0] === "+" || result[0] === "-" || result[0] === "*" || result[0] === "/") {
        result = "0" + result;
        log = "0" + log;
      }
      result = eval(result.slice(0,-1)).toString() + "-";
      $("#log").text(log);
      $("#result").text(result);
    }
    else if (curr === "\u00d7") {
      decimal = true;
      if (result[result.length-1] === "*") {
        //Do nothing 
      }
      else if (result[result.length-1] === "/" || result[result.length-1] === "+" || result[result.length-1] === "-") {
        result = result.slice(0, -1);
        log = log.slice(0,-1);
        result += "*";
        log += "*";
        $("#log").text(log);
        $("#result").text(result);
      }
      else {
        result += "*";
        log += "*";
        $("#log").text(log);
        $("#result").text(result);
      }
      if (result[0] === "+" || result[0] === "-" || result[0] === "*" || result[0] === "/") {
        result = "0" + result;
        log = "0" + log;
      }
      result = eval(result.slice(0,-1)).toString() + "*";
      $("#log").text(log);
      $("#result").text(result);
    }
    else if (curr === "\u00f7") {
      decimal = true;
            if (result[result.length-1] === "/") {
        //Do nothing 
      }
      else if (result[result.length-1] === "*" || result[result.length-1] === "+" || result[result.length-1] === "-") {
        result = result.slice(0, -1);
        log = log.slice(0,-1);
        result += "/";
        log += "/";
        $("#log").text(log);
        $("#result").text(result);
      }
      else {
        result += "/";
        log += "/";
        $("#log").text(log);
        $("#result").text(result);
      }
      if (result[0] === "+" || result[0] === "-" || result[0] === "*" || result[0] === "/") {
        result = "0" + result;
        log = "0" + log;
      }
      result = eval(result.slice(0,-1)).toString() + "/";
      $("#log").text(log);
      $("#result").text(result);
    }
    else if (curr === ".") {
      if (decimal) {
        if (result[result.length-1] === ".") {
        //Do nothing if there's a decimal
        }
        else {
          result += ".";
          log += ".";
          $("#log").text(log);
          $("#result").text(result);
        }
        decimal = false;
      }
    }
    else if (curr === "CE") {
      var i = result.length-1;
      while (i >= 0) {
        if (result[i] === "+" || result[i] === "-" || result[i] === "/" || result[i] === "*") {
          break;
        }
        else {
          result = result.slice(0, i);
        }
        i--;
      }
      var j = log.length-1;
      while (j >= 0) {
        if (log[j] === "+" || log[j] === "-" || log[j] === "/" || log[j] === "*") {
          break;
        }
        else {
          log = log.slice(0,j);
        }
        j--;
      }
      if (result === "-") {
        result = "";
      }
      if (result === "") {
        $("#log").text("0");
        $("#result").text("0");
      }
      else {
        $("#log").text(log);
        $("#result").text(result);
      }
      decimal = true;
    }
    else if (curr === "C") {
      result = "";
      log = "";
      $("#log").text("0");
      $("#result").text("0");
      decimal = true;
    }
    else {
      result += curr;
      log += curr;
      $("#log").text(log);
      $("#result").text(result);
    }
  });
});