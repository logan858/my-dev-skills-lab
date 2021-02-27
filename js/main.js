let $inputField = $("input") 

$("#button").on("click", function() {
    let $inputValue = $("input").val();
    $inputField.val("")
    $("ul").append("<li>" + $inputValue + "</li>")
    localStorage.setItem($inputValue, $inputValue)
})

//removes item lists, even if dynamically created.  
//.on's 2nd parameter "li", allows the deletion of dynamically created elements, the $("#skill-list ul" selector must target the parent container)
$("#skill-list ul").on("click", "li", function(event) {  
    localStorage.removeItem($(this).text())
    $(this).closest("li").remove();    
})


for(i = 0; i < localStorage.length; i++) {
    $("ul").append("<li>" + localStorage.key(i) + "</li>")
}
