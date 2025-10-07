// DataTable Initialization Script
$(document).ready(function() {
    $('#dataTable').DataTable({
        responsive: true,
        pageLength: 10,
        lengthMenu: [5, 10, 25, 50],
        order: [[1]],
        //language: {
            //search: "Search Projects:",
            //lengthMenu: "Show _MENU_ projects per page",
            //info: "Showing _START_ to _END_ of _TOTAL_ projects",
            //paginate: {
                //first: "First",
                //last: "Last",
                //next: "Next",
                //previous: "Previous"
            //}
        }
    });
});


//Modal Content Change -- in progress
const myModal = document.querySelector('#universalModal');
    myModal.addEventListener('show.bs.modal', function(event) {
        // Get the reference of the triggering button
        const button = event.relatedTarget;

        // Get the data for inserting into modal
        const heading = button.getAttribute('data-bs-heading');
        const modalcontent = button.getAttribute('data-bs-modalcontent');
        const footercontent = button.getAttribute('data-bs-footercontent');

        // Set the value in the modal
        myModal.querySelector('.modal-title').textContent = heading;
        myModal.querySelector('.modal-body').textContent = modalcontent;
        myModal.querySelector('.modal-footer').textContent = footercontent;
    });