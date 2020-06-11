

    $('.btn-start').click(function() {
      alert("Start button pressed")
      $.ajax({
        type: "POST",
        url: "http://127.0.0.1:3002/DataDashboard",
        data: "\Start",
        contentType: "text/plain",
        dataType: "json",
        success: function(data) {
          //$('.footer-text').text('Hello, World!')
          alert(stringify(data));
        }
      }) // End of ajax request
      
      
  // End of event listener    
    });
