

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
        $("form")[0].reset();
        $("#copyButton").text('Copy');
        $("#copyButton").removeClass('btn-success').addClass('btn-primary');
    });
    $('#copyButton').on('click', function () {
        if(inlineCheckbox1.checked || inlineCheckbox2.checked){
            if ($(this).text() == "Copy") {
                $(this).text('Text Copied. . . .');
                $(this).removeClass('btn-primary').addClass('btn-success');
                 }
            }        
    })
    $('#inlineCheckbox1').change(function(){
        if(inlineCheckbox1.checked){
            $("#inlineCheckbox2").prop("checked", false);
            $("#copyButton").attr("disabled", false);
            $("#copyButton").removeClass('btn-secondary').addClass('btn-primary');
            if ($("#copyButton").text() == "Text Copied. . . .") {
                $("#copyButton").text("Copy");
                $("#copyButton").removeClass('btn-success').addClass('btn-primary');
            }
        } else {
            if ($("#copyButton").text() == "Text Copied. . . .") {
                $("#copyButton").text("Copy");
                $("#copyButton").removeClass('btn-success').addClass('btn-primary');
            }
            $("#copyButton").attr("disabled", true);
            $("#copyButton").removeClass('btn-primary').addClass('btn-secondary');
        }
            
    } )
    $('#inlineCheckbox2').change(function(){
        if(inlineCheckbox2.checked){
            $("#inlineCheckbox1").prop("checked", false);
            $("#copyButton").attr("disabled", false);
            $("#copyButton").removeClass('btn-secondary').addClass('btn-primary');
            if ($("#copyButton").text() == "Text Copied. . . .") {
                $("#copyButton").text("Copy");
                $("#copyButton").removeClass('btn-success').addClass('btn-primary');
            }
        } else {
            if ($("#copyButton").text() == "Text Copied. . . .") {
                $("#copyButton").text("Copy");
                $("#copyButton").removeClass('btn-success').addClass('btn-primary');
            }
            $("#copyButton").attr("disabled", true);
            $("#copyButton").removeClass('btn-primary').addClass('btn-secondary');
        }
    } )
    
});
$('#issueType').bind("cut copy paste", function (e) {
    e.preventDefault();
});
$('#kbArticle').bind("cut paste", function (e) {
    e.preventDefault();
});
$('#supportSkill').bind("cut paste", function (e) {
    e.preventDefault();
});
$('#category').bind("cut paste", function (e) {
    e.preventDefault();
});
$('#servComp').bind("cut paste", function (e) {
    e.preventDefault();
});
$('#service').bind("cut paste", function (e) {
    e.preventDefault();
});

$('#textarea').bind("cut copy", function (e) {
    e.preventDefault();
});

$("#textarea").focus(function () {
    if ($("#copyButton").text() == "Text Copied. . . .") {
        $("#copyButton").text("Copy");
        $("#copyButton").removeClass('btn-success').addClass('btn-primary');
    }
});



function copyText() {

    $(document).on('click', '#copyButton', function (e) {

        if(inlineCheckbox1.checked || inlineCheckbox2.checked){
            var serialized = $(this.form).serializeArray()
        var text = serialized.map(function (field) {
            return field.value
        }).join("\n")

        $("#dummy").show().val(text)[0].select();
        document.execCommand("copy");
        $("#dummy").hide();

        return false

        } else {
            e.preventDefault();
            // alert("kindly select the kb article");
        }
        
    })

}

