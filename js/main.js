let $inputField = $("input") 

$("#button").on("click", function() {
    let $inputValue = $("input").val();
    console.log($inputValue)
    $inputField.val("")
    $("ul").append("<li>" + $inputValue + "</li>")
})

