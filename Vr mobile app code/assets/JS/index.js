const myModal = document.querySelector('#universalModal');
    myModal.addEventListener('show.bs.modal', function(event) {
        // Get the reference of the triggering button
        const button = event.relatedTarget;

        // Get the data for inserting into modal
        const heading = button.getAttribute('data-bs-heading');
        const modalcontent = button.getAttribute('data-bs-modalcontent');

        // Set the value in the modal
        myModal.querySelector('.modal-title').textContent = heading;
        myModal.querySelector('.modal-body').textContent = modalcontent;
        
    });