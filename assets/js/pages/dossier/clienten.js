$(document).ready(function() {

    // Initiate DataTable
	$('#data_table').DataTable({
		"scrollY": "520px",
		"scrollCollapse": true,
		"paging": false,
		"info": false,
		"order": [[ 4, "asc" ]]
	});
});
