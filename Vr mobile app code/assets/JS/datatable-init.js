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
