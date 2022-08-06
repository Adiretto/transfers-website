$(document).ready(function () {
    $(".question1").on("click", function () {
        $(".question1-text").slideToggle("fast");
    });
    $(".question2").on("click", function () {
        $(".question2-text").slideToggle("fast");
    });
    $(".question3").on("click", function () {
        $(".question3-text").slideToggle("fast");
    });
    $(".question4").on("click", function () {
        $(".question4-text").slideToggle("fast");
    });
    $(".question5").on("click", function () {
        $(".question5-text").slideToggle("fast");
    });


    $( ".overlay,#exit_icon").click( function(){
        $(".amount-div").animate({opacity: 0}, 200,
            function(){
                $(this).css("display", "none");
                $(".overlay").fadeOut(300);
            });
    });



    const initial = document.getElementById("initial");
    const five_percent = document.getElementById("five_percent");
    const total = document.getElementById('total');
    const first__card = document.getElementById('first--card');
    const second__card = document.getElementById('second--card');
    document.getElementById("amount").addEventListener("change", docWrite);
    document.getElementById('first_card').addEventListener('change',firstCard);
    document.getElementById('second_card').addEventListener('change',secondCard);
    function docWrite(event) {
        initial.innerHTML = "<p>" + document.getElementById("amount").value + "</p>";
        five_percent.innerHTML= "<p>" + (document.getElementById("amount").value / 20) + "</p>";
        total.innerHTML = "<p>" + (document.getElementById("amount").value - (document.getElementById("amount").value / 20))+ "</p>"
    }
    function firstCard(e){
        first__card.innerHTML = "<p>" + e.target.value +"</p>"
    }
    function secondCard(e){
        second__card.innerHTML = "<p>" + e.target.value +  "</p>"
    }
    let btn = document.getElementById('transfers-btn');
    btn.addEventListener('click',clicked);
    function clicked(e){
        let input = document.getElementById('amount').value;
        let first = document.getElementById('first--card').value;
        if(input){
            $(".overlay").fadeIn(300,function (){
                $(".amount-div").css("display" , "block").animate({opacity: 1}, 200);
            })
        }
    }



});
