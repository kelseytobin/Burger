$(function () {
    //form submit on click
    $("#submit").on("click", function (event) {
        event.preventDefault();

        //grab form elements
        var newBurger = {
            name: $("#burgerName").val().trim(),
            devoured: false
        }

        //test to see input is being grabbed - this works
        console.log(newBurger);

        //send post request
        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                //reload page with updated list
                location.reload();
            }
        );
    });

    $("#devour").on("click", function (event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        var devouredState = {
            devoured: true
        };

        //send put request
        $.ajax("api/burgers" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {

            console.log("changed burger state to", devoured);

            //reload page with updated list
            location.reload();

        });
    });


});