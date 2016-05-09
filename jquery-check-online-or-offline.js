$.ajax({
      type: "HEAD",
      url: document.location.pathname + "?param=" + new Date(),
      error: function() { return false; },
      success: function() { return true; }
   });
