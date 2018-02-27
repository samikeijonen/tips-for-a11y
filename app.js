document.addEventListener('click', function (event) {
	// If the clicked element doesn't have the right selector, bail.
	if (!event.target.matches('.button')) return;

	// Don't follow the link.
	event.preventDefault();

	// Show alert.
	alert('I was clicked');
}, false);

// Get the dialog element (with the accessor method you want).
const el = document.getElementById('my-accessible-dialog');

// Instantiate a new A11yDialog module.
const dialog = new A11yDialog(el);