

    $('.btn-start').click(function() {
      
      $.ajax({
        type: "POST",
        url: "http://127.0.0.1:3002/DataDashboard",
        data: "\Start",
        contentType: "text/JSON",
        dataType: "json",
        success: function(data) {
          //$('.footer-text').text('Hello, World!')
          alert(stringify(data));
        }
      }) // End of ajax request
      
      
  // End of event listener    
    });
