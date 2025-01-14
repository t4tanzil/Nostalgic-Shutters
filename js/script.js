$(document).ready(function() {
    // When the document is ready, execute the following functions

    // Load external HTML content into specified elements
    $(function() {
        // Load the content of 'meta.html' into the element with id 'head'
        $("#head").load("meta.html");
        
        // Load the content of 'header.html' into the element with id 'header'
        $("#header").load("header.html");
        
        // Load the content of 'footer.html' into the element with class 'footer-section'
        $(".footer-section").load("footer.html");
    });

    // Tab navigation functionality
    $('.tab-nav li').click(function() {
        // Get the tab ID from the clicked tab
        var tabId = $(this).data('tab');
        
        // Remove 'active' class from all tab navigation items
        $('.tab-nav li').removeClass('active');
        
        // Add 'active' class to the clicked tab
        $(this).addClass('active');
        
        // Remove 'active' class from all tab panes
        $('.tab-pane').removeClass('active');
        
        // Add 'active' class to the pane corresponding to the clicked tab
        $('#' + tabId).addClass('active');
    });

    // Quantity adjustment functionality
    $('.minus').click(function() {
        // Find the input element next to the clicked minus button
        var input = $(this).next('input');
        
        // Decrease the value of the input by 1
        var value = parseInt(input.val()) - 1;
        
        // Ensure the value does not go below 1
        if (value >= 1) {
            input.val(value);
        }
    });

    $('.plus').click(function() {
        // Find the input element previous to the clicked plus button
        var input = $(this).prev('input');
        
        // Increase the value of the input by 1
        var value = parseInt(input.val()) + 1;
        
        // Set the new value to the input
        input.val(value);
    });
});
