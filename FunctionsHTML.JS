var checkBox = document.getElementById(idCheck);
var tableMaestros = document.getElementById(idCheck);

$(function () {
    $(checkBox).change(function () {
        var row = $(this).closest('tr').prev();

        if (!this.checked)
            row.fadeIn('slow');
        else 
            row.fadeOut('slow');

    }).change();
});