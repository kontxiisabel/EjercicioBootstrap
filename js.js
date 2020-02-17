$('#myModal').on('shown.bs.modal', function() {
        $('#myInput').trigger('focus')
    })
    // Select all elements with data-toggle="popover" in the document

// Select all elements with data-toggle="tooltips" in the document
$('[data-toggle="tooltip"]').tooltip();

// Select a specified element
$('#myTooltip').tooltip();
$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});