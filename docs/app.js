document.addEventListener('click', function (event) {
	// If the clicked element doesn't have the right selector, bail.
	if (!event.target.matches('.button')) return;

	// Don't follow the link.
	event.preventDefault();

	// Show alert.
	alert('I was clicked');
}, false);