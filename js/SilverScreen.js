function DisplayDateAndTime() {

    var d = new Date(),
minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
ampm = d.getHours() >= 12 ? 'pm' : 'am';

    document.getElementById('DisplayTime').innerHTML = hours + ':' + minutes + ' ' + ampm;
    var t = setTimeout(DisplayDateAndTime, 1000);

}

function Main() {
    var d = new Date(),
minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
ampm = d.getHours() >= 12 ? 'pm' : 'am',
months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    document.getElementById('DisplayDayOfWeek').innerHTML = days[d.getDay()];
    document.getElementById('DisplayDate').innerHTML = d.getDate();
    document.getElementById('DisplayMonth').innerHTML = months[d.getMonth()] + ' ' + d.getFullYear();
    DisplayDateAndTime();
    GetReminder();
    GetMessages();
}

function GetFamilyID() {

    var jsonData = JSON.stringify({ sDeviceCode: $("#txtDeviceCode").val() });
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
};

$("#Button1").on("click", function (e) {

    var jsonData = JSON.stringify({ sUsername: $("#txtUsername").val(), sPassword: $("#txtPassword").val() });
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
        $("#Text1").val(response.d);
        console.log(response.d)
    }
    function OnErrorCall(response) {
        console.log(response);
    }
});

function GetReminder() {
    var jsonData = JSON.stringify({ sDeviceCode: $("#txtDeviceCode").val() });
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

        console.log(thisreminder.ReminderAck);

        if(thisreminder.ReminderAck === "True") {
          s += '<button type="submit" id="ReminderAck' + index + '">Got it</button>';
        }
      });
      console.log(s);
      $("#reminders").html(s);
    }

    function OnErrorCall(response) {
        console.log(response);
    }
};

function GetMessages() {

    var jsonData = JSON.stringify({ sDeviceCode: $("#txtDeviceCode").val() });
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
        console.log(response.d)
    }
    function OnErrorCall(response) {
        console.log(response);
    }
};
