$(function () {
    $("#user-login-top").on("click", function (e) {
        $("#user-login-wrapper").toggleClass("wide");
    });
    $(document).on("click", function (e) {
        if ($(e.target).is("#user-login-wrapper, #user-login-top") === false) {
            $("#user-login-wrapper").removeClass("wide");
        }
    });
});     