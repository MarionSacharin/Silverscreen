"use strict";

var jssor_1_SlideshowTransitions = [
  {$Duration:1200,x:0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,x:-0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,x:0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,y:0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,y:-0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,y:-0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,y:0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,x:0.3,$Cols:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,x:0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,y:0.3,$Rows:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,y:0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,y:0.3,$Cols:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,y:-0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,x:0.3,$Rows:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,x:-0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$SlideOut:true,$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,$Delay:20,$Clip:3,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,$Delay:20,$Clip:3,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,$Delay:20,$Clip:12,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,$Delay:20,$Clip:12,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
];

var jssor_1_options = {
  $AutoPlay: true,
  $SlideshowOptions: {
    $Class: $JssorSlideshowRunner$,
    $Transitions: jssor_1_SlideshowTransitions,
    $TransitionsOrder: 1
  },
  $ArrowNavigatorOptions: {
    $Class: $JssorArrowNavigator$
  },
  $ThumbnailNavigatorOptions: {
    $Class: $JssorThumbnailNavigator$,
    $Cols: 10,
    $SpacingX: 8,
    $SpacingY: 8,
    $Align: 360
  }
};
 

jQuery(document).ready(function ($) {
  var token = window.localStorage.getItem("ssToken");
  DisplayDateAndTime();

  console.log("token = " + token);
  if(token) {
    GetReminders();
    GetMessages();
    GetImages();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
  } else {
    $('#myModal').modal('show');
  }
// ================================================================================
/*  function getToken(callback) {
    // Open a database, specify the name and version
    var db, version = 1;
    var request = indexedDB.open('silverscreen', version);

    // Run migrations if necessary
    request.onupgradeneeded = function(event) {
      db = event.target.result;
      event.target.transaction.onerror = function(event) {
        console.error('An IndexedDB error has occurred', event);
      };

      if(db.objectStoreNames.contains("token")) {
        // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
        db.deleteObjectStore("token");
      }

      var objectStore = db.createObjectStore("token", {autoIncrement: true});
    };

    request.onsuccess = function(event) {
      db = event.target.result;
      var transaction = db.transaction(["token"]).objectStore("token").get(1);
      
      transaction.onsuccess = function(event) {
        token = transaction.result;
        callback();
      };      

      transaction.onerror = function(event) {
        console.log("No token");
        callback();
      };
    };

    request.onerror = function(event) {
      console.error('An IndexedDB error has occurred', event);
    };
  }
// ================================================================================
  function saveToken(inToken) {
    // Open a database, specify the name and version
    var db, version = 1;
    var request = indexedDB.open('silverscreen', version);

    request.onsuccess = function(event) {
      db = event.target.result;
      var transaction = db.transaction(["token"], "readwrite").objectStore("token").add(inToken);

      transaction.onerror = function(event) {
        console.log("ERROR: Failed to save token to database");
      };

      transaction.oncomplete = function(event) {
        token = inToken;
      };
    };      

    request.onerror = function(event) {
      console.error('An IndexedDB error has occurred', event);
    };
  } */
// ================================================================================
/*  function getFID(callback) {
    console.log("Get FID");

    var loginData = {
      'username': $("#inputUsername").val(),
      'password': $("#inputPassword").val()
    };
    // process the form
    $.ajax({
      type    : 'POST',          // define the type of HTTP action we want to use 
      url     : 'getFID.php', // the url where we want to POST to
      data    : loginData,         // our data object
      dataType: 'json'           // what type of data do we expect back from the server
    })
    .done(function(returnData) {
      console.log("Return: " + returnData.success);
      if (returnData.success) {
        console.log("Message: " + returnData.message);
        window.localStorage.setItem("ssToken", returnData.message);
        //saveToken(returnData.message);
      } else {
        console.log("ERROR: " + returnData.message);
      } 
      callback();
    })
    .fail(function(returnData) {
      // here we handle network errors
      console.log("NETWORK ERROR: " + returnData);
    }); 
  } */
// ================================================================================
  $("#getFID").click(function(event) {
    getDeviceCode();
  }); 
// ================================================================================
  $('#myModal').on("hidden.bs.modal", function() {
    if(!token) {
      console.log("show modal");
      $('#myModal').modal('show');
    }
  });
// ================================================================================
  function DisplayDateAndTime() {
    var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    $("#DisplayDayOfWeek").text(days[d.getDay()]);
    $("#DisplayDate").text(d.getDate());
    $("#DisplayMonth").text(months[d.getMonth()] + ' ' + d.getFullYear());
    $("#DisplayTime").text(hours + ':' + minutes + ' ' + ampm);
    var t = setTimeout(DisplayDateAndTime, 500);
}
// ================================================================================
/*function GetFamilyID() {

//    var jsonData = JSON.stringify({ sDeviceCode: $("#txtDeviceCode").val() });
    $.ajax({
        type: "POST",
        url: "http://test.oursilverscreen.co.uk/ClientStuff.aspx/AuthoriseDeviceCode",
        // url: "../ClientStuff.aspx/AuthoriseDeviceCode",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json", // dataType is json format
        success: OnSuccess,
        error: OnErrorCall
    });

    function OnSuccess(response) {
        $("#txtFamilyID").val(response.d);
        console.log(response.d)
    }
    function OnErrorCall(response) {
        console.log(response);
    }
};*/
// ================================================================================
function getDeviceCode() {
  var jsonData = JSON.stringify({ sUsername: $("#inputUsername").val(), sPassword: $("#inputPassword").val() });
  $.ajax({
    type: "POST",
    url: "http://test.oursilverscreen.co.uk/ClientStuff.aspx/GetDeviceCode",
    data: jsonData,
    contentType: "application/json; charset=utf-8",
    dataType: "json", // dataType is json format
    success: OnSuccess,
    error: OnErrorCall
  });

  function OnSuccess(response) {
    if(response.d) {
      token = response.d;
//    saveToken(response.d);
      window.localStorage.setItem("ssToken", response.d);
      console.log("Token " + response.d + " saved");
    } else {
      alert("Username/password not known");
    }
  }
  function OnErrorCall(response) {
    console.log(response);
  }
}
// ================================================================================
function GetReminders() {
//  var jsonData = JSON.stringify({ sDeviceCode: $("#txtDeviceCode").val() });
  var jsonData = JSON.stringify({ sDeviceCode: token });
  $.ajax({
    type: "POST",
    url: "http://test.oursilverscreen.co.uk/ClientStuff.aspx/GetReminders",
    // url: "../ClientStuff.aspx/GetReminders",
    data: jsonData,
    contentType: "application/json; charset=utf-8",
    dataType: "json", // dataType is json format
    success: OnSuccess,
    error: OnErrorCall
  });

  function OnSuccess(response) {
    var s = "", obj = jQuery.parseJSON(response.d);
    obj.forEach(function(thisreminder, index) {
      s += '<div class="AccDropDown" id="ReminderHeader' + index + '">';
      s += thisreminder.ReminderHeader + '</div>';
      s += '<div class="AccBox" id="ReminderText' + index + '">';
      s += thisreminder.ReminderText + '</div>';

//      console.log(thisreminder.ReminderAck);

      if(thisreminder.ReminderAck === "True") {
        s += '<button type="submit" id="ReminderAck' + index + '">Got it</button>';
      }
    });
//    console.log(s);
    $("#reminders").html(s);
  }

  function OnErrorCall(response) {
    console.log(response);
  }
};
// ================================================================================
function GetMessages() {
//  var jsonData = JSON.stringify({ sDeviceCode: $("#txtDeviceCode").val() });
  var jsonData = JSON.stringify({ sDeviceCode: token });
  $.ajax({
    type: "POST",
    url: "http://test.oursilverscreen.co.uk/ClientStuff.aspx/GetMessages",
    // url: "../ClientStuff.aspx/GetMessages",
    data: jsonData,
    contentType: "application/json; charset=utf-8",
    dataType: "json", // dataType is json format
    success: OnSuccess,
    error: OnErrorCall
  });

  function OnSuccess(response) {
    var s = "", obj = jQuery.parseJSON(response.d);
    obj.forEach(function(thismessage, index) {
      s += '<div class="AccDropDown" id="MessageHeader' + index + '">';
      s += thismessage.MessageHeader + '</div>';
      s += '<div class="AccBox" id="MessageText' + index + '">';
      s += thismessage.MessageText + '</div>';

//      console.log(thismessage.ReminderAck);

      if(thismessage.MessageAck === "True") {
        s += '<button type="submit" id="MessageAck' + index + '">Got it</button>';
      }
    });
//    console.log(s);
    $("#messages").html(s);
  }
  function OnErrorCall(response) {
    console.log(response);
  }
}; 
// ================================================================================
function GetImages() {
  var jsonData = JSON.stringify({ sDeviceCode: token });
  $.ajax({
    type: "POST",
    url: "http://test.oursilverscreen.co.uk/ClientStuff.aspx/GetSlideshowImages",
    data: jsonData,
    contentType: "application/json; charset=utf-8",
    dataType: "json", // dataType is json format
    success: OnSuccess,
    error: OnErrorCall
  });

  function OnSuccess(response) {
    var s = "", obj = jQuery.parseJSON(response.d);
    obj.forEach(function(pic, index) {
      s += '<div id="slide' + index + '"><img u="image" src="' + pic.ImageFile + '" /></div>';
    });
//    console.log("s = " + s);
    $("#slides").html(s);
    ScaleSlider();
  }

  function OnErrorCall(response) {
    console.log(response);
  }
}; 
// ================================================================================
function ScaleSlider() {
  var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
  var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
  if (refSize) {
    refSize = Math.min(refSize, 800);
    jssor_1_slider.$ScaleWidth(refSize);
  } else {
    window.setTimeout(ScaleSlider, 30);
  }
}
// ================================================================================
});
// ================================================================================
