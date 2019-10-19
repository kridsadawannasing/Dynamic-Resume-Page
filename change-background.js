$(document).ready(function() {
    $('body').click(function() {
        $('body , html').css('background', '#' + bgColor());
    });

    function bgColor() {
        return Math.floor(Math.random() * 16777216).toString(16);
    }

    $("#add").click(function() {
        $(".list-skill").append("<li>" + addSkill() + "</li>");
    });
    $("#remove").click(function() {
        $(".list-skill li:last").remove();
    });

    function addSkill() {
        return document.getElementById("inputSkill").value;
    }
});