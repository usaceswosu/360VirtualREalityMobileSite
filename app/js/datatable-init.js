// DataTable Initialization Script

$(document).ready(function() {
    $('#dataTable').dataTable({
        responsive: true,
        pageLength: 10,
        lengthMenu: [5, 10, 25, 50],
        order: [[1]],
        }
});
