// Lake Modal Handler Script
$(document).ready(function() {
    // Handle lake link clicks
    $('.lake-link').on('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        
        // Get data from the clicked link
        const lakeName = $(this).data('lake');
        const lakeState = $(this).data('state');
        const lakeLocation = $(this).data('location');
        const lakeDescription = $(this).data('description');
        const lakeImage = $(this).data('image');
        
        // Populate modal with data
        $('#lakeModalLabel').text(lakeName);
        $('#lakeState').text(lakeState);
        $('#lakeLocation').text(lakeLocation);
        $('#lakeDescription').text(lakeDescription);

        $('#lakeImage').text(lakeImage);
        
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
    
    // Handle 360° view button
    $('#view360Btn').on('click', function() {
        const lakeName = $('#lakeModalLabel').text();
        alert(`Opening 360° view for ${lakeName}\n\nThis feature will be implemented with your VR content!`);
        // Add your 360° view logic here
        // Example: window.open('360-viewer.html?lake=' + encodeURIComponent(lakeName), '_blank');
    });
    
    // Handle VR view button
    $('#viewVRBtn').on('click', function() {
        const lakeName = $('#lakeModalLabel').text();
        alert(`Opening VR experience for ${lakeName}\n\nThis feature will connect to your VR application!`);
        // Add your VR view logic here
        // Example: window.location.href = 'vr-experience.html?lake=' + encodeURIComponent(lakeName);
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
