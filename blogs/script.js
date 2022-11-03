function myFunction(){
    var input, filter, cardName, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    card = document.getElementsByClassName("card")
    cardName = document.getElementsByClassName("name")

    for(i = 0; i < cardName.length; i++){
        txtValue = cardName[i].textContent || cardName[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        }
        else {
            card[i].style.display = "none";
        }
    }
}