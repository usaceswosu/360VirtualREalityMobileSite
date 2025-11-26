// Lake Modal Handler Script
$(document).ready(function() {
    // Handle lake link clicks
    $('.lake-link').on('click', function(e) {
        e.preventDefault(); // Prevent default link behavior

        // Get data from the clicked link
        const lakeName = $(this).data('lake');
        const lakeState = $(this).data('state');
        const imagesData = $(this).data('images');
        const imageNamesData = $(this).data('image-names');
        const videoUrlsData = $(this).data('video-urls');

        // Populate modal with data
        $('#lakeModalLabel').text(lakeName);
        $('#lakeState').text(lakeState);

        // Handle multiple images
        const imageContainer = $('#imageContainer');
        const indicators = $('#imageIndicators');
        const trailsList = $('#trailNames');

        // Clear previous content
        imageContainer.empty();
        indicators.empty();
        trailsList.empty();

        if (imagesData && imagesData !== '') {
            const images = imagesData.split('|');
            const imageNames = imageNamesData ? imageNamesData.split('|') : images.map((_, i) => `Trail ${i + 1}`);
            const videoUrls = videoUrlsData ? videoUrlsData.split('|') : [];

            // Create carousel slides
            images.forEach((imageSrc, index) => {
                const activeClass = index === 0 ? 'active' : '';
                const imageName = imageNames[index] || `Trail ${index + 1}`;
                const videoUrl = videoUrls[index] || '';

                // Add carousel item with image name as a link if videoUrl exists
                imageContainer.append(`
                    <div class="carousel-item ${activeClass}">
                        <img src="${imageSrc}" class="d-block w-100 lake-modal-image" alt="${imageName}">
                        <div class="carousel-caption">
                            ${
                                videoUrl
                                ? `<h5><a href="${videoUrl}" target="_blank" class="lake-caption-link">${imageName}</a></h5>`
                                : `<h5>${imageName}</h5>`
                            }
                        </div>
                    </div>
                `);

                // Add indicator
                indicators.append(`
                    <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="${index}" 
                            class="${activeClass}" aria-label="Slide ${index + 1}"></button>
                `);

                // Add trail name to list
                trailsList.append(`<li>${imageName}</li>`);
            });

            // Show/hide carousel controls based on number of images
            if (images.length > 1) {
                $('.carousel-control-prev, .carousel-control-next, #imageIndicators').removeClass('carousel-hidden');
            } else {
                $('.carousel-control-prev, .carousel-control-next, #imageIndicators').addClass('carousel-hidden');
            }

        } else {
            // No images available
            imageContainer.html(`
                <div class="carousel-item active">
                    <div class="d-flex align-items-center justify-content-center lake-modal-image bg-light">
                        <div class="text-center text-muted">
                            <i class="fas fa-mountain fa-3x mb-3"></i>
                            <h5>No Images Available</h5>
                            <p>Images for ${lakeName} will be available soon.</p>
                        </div>
                    </div>
                </div>
            `);
            $('.carousel-control-prev, .carousel-control-next, #imageIndicators').addClass('carousel-hidden');
            $('#trailsList').hide();
        }

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