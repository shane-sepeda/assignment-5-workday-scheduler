$(document).ready(function () {
    var nineamText = localStorage.getItem("9am");
    $("#9amtext").val(nineamText);
    var tenamText = localStorage.getItem("10am");
    $("#10amtext").val(tenamText);
    var elevenamText = localStorage.getItem("11am");
    $("#11amtext").val(elevenamText);
    var twelvepmText = localStorage.getItem("12pm");
    $("#12pmtext").val(twelvepmText);
    var onepmText = localStorage.getItem("1pm");
    $("#1pmtext").val(onepmText);
    var twopmText = localStorage.getItem("2pm");
    $("#2pmtext").val(twopmText);
    var threepmText = localStorage.getItem("3pm");
    $("#3pmtext").val(threepmText);
    var fourpmText = localStorage.getItem("4pm");
    $("#4pmtext").val(fourpmText);
    var fivepmText = localStorage.getItem("5pm");
    $("#5pmtext").val(fivepmText);
    
    let currentDay = moment().format("dddd, MMMM Do YYYY");
    document.getElementById("currentDay").innerHTML = currentDay;
    let currentHour = moment().hour()

    nineAmText = $("#9am").find("textarea");
    if (currentHour === 9) {
        $(nineAmText).addClass("past")
    } else if (currentHour > 9) {
        $(nineAmText).addClass("past")
    } else {
        $(nineAmText).addClass("future")
    };

    tenAmText = $("#10am").find("textarea");
    if (currentHour === 10) {
        $(tenAmText).addClass("present")
    } else if (currentHour > 10) {
        $(tenAmText).addClass("past")
    } else {
        $(tenAmText).addClass("future")
    };

    elevenAmText = $("#11am").find("textarea");
    if (currentHour === 11) {
        $(elevenAmText).addClass("present")
    } else if (currentHour > 11) {
        $(elevenAmText).addClass("past")
    } else {
        $(elevenAmText).addClass("future")
    };

    twelvePmText = $("#12pm").find("textarea");
    if (currentHour === 12) {
        $(twelvePmText).addClass("present")
    } else if (currentHour > 12) {
        $(twelvePmText).addClass("past")
    } else {
        $(twelvePmText).addClass("future")
    };

    onePmText = $("#1pm").find("textarea");
    if (currentHour === 13) {
        $(onePmText).addClass("present")
    } else if (currentHour > 13) {
        $(onePmText).addClass("past")
    } else {
        $(onePmText).addClass("future")
    };

    twoPmText = $("#2pm").find("textarea");
    if (currentHour === 14) {
        $(twoPmText).addClass("present")
    } else if (currentHour > 14) {
        $(twoPmText).addClass("past")
    } else {
        $(twoPmText).addClass("future")
    };


    threePmText = $("#3pm").find("textarea");
    if (currentHour === 15) {
        $(threePmText).addClass("present")
    } else if (currentHour > 15) {
        $(threePmText).addClass("past")
    } else {
        $(threePmText).addClass("future")
    };

    fourPmText = $("#4pm").find("textarea");
    if (currentHour === 16) {
        $(fourPmText).addClass("present")
    } else if (currentHour > 16) {
        $(fourPmText).addClass("past")
    } else {
        $(fourPmText).addClass("future")
    };

    fivePmText = $("#5pm").find("textarea");
    if (currentHour === 17) {
        $(fivePmText).addClass("present")
    } else if (currentHour > 17) {
        $(fivePmText).addClass("past")
    } else {
        $(fivePmText).addClass("future")
    };

    $(".saveBtn").on("click", function () {

        let event = $(this).siblings("textarea").val().trim();
        let time = $(this).siblings("p").text().trim();
        localStorage.setItem(time, event);
    });
});