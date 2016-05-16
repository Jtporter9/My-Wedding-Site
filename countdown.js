$(function () {
	var today = new Date();
	newYearsDay = new Date(today.getFullYear() +1, 0, -186, 0, 0, 0, 0);
	$('#countdown').countdown({until: newYearsDay});
});
