$(document).ready(function() {
	runQuery()
});

function runQuery() {
	var query = $('input[name=query]:checked').val();
	var method = $('input[name=method]:checked').val();
	console.log(query + " " + method);
}