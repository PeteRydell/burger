$(function(){
    $(".change-devour").on("submit", function(event) {
        var id = $(this).data("id").val();
    
        // Send the PUT request.
        $.ajax({
          method: "PUT",
          url: "/burgers/" + burger_is
        }).then(function() {
            location.reload();
          }
        );
      });

})