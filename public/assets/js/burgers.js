$(function(){
    $(".change-devour").on("submit", function(event) {
      event.preventDefault();
      var burger_id = $(this).data("id").val();
    
        // Send the PUT request.
        $.ajax({
          method: "PUT",
          url: "/burgers/" + burger_id
        }).then(function() {
            location.reload();
          }
        );
      });

})