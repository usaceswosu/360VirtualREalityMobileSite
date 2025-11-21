// Lake Modal Handler Script
$(document).ready(function() {
    // Handle lake link clicks
    $('.lake-link').on('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        
        // Get data from the clicked link
        const lakeName = $(this).data('lake');
        const lakeState = $(this).data('state');
        const lakeImage = $(this).data('image');
        
        // Populate modal with data
        $('#lakeModalLabel').text(lakeName);
        $('#lakeState').text(lakeState);
        
        // Handle image - use placeholder if no image provided
        if (lakeImage && lakeImage !== '') {
            $('#lakeImage').attr('src', lakeImage);
        } else {
            $('#lakeImage').attr('src', 'https://via.placeholder.com/400x300/6a8b6e/ffffff?text=' + encodeURIComponent(lakeName));
        }
        $('#lakeImage').attr('alt', lakeName);
        
        // Show the modal
        $('#lakeModal').modal('show');
    });
    
    // Add smooth animation when modal opens
    $('#lakeModal').on('show.bs.modal', function () {
        $(this).find('.modal-dialog').css({
            'transform': 'scale(0.8)',
            'opacity': '0'
        });
    });
    
    $('#lakeModal').on('shown.bs.modal', function () {
        $(this).find('.modal-dialog').animate({
            'transform': 'scale(1)',
            'opacity': '1'
        }, 200);
    });
});