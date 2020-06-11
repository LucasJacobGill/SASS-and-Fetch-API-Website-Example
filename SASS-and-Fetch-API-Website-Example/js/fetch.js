//Load new content via the .fetch() & animate it with anime.js when click
let workLink = document.querySelector('#work-link');
let profileLink = document.querySelector('#profile-link');
let contactLink = document.querySelector('#contact-link');

let linkArray = [workLink, profileLink, contactLink];

linkArray.forEach((eachLink) => {
	eachLink.addEventListener('click', (e) => {
		switch (eachLink) {
			case workLink:
				fetchPage(eachLink, 'index.html');
				break;

			case profileLink:
				fetchPage(eachLink, 'profile.html');
				break;

			case contactLink:
				fetchPage(eachLink, 'contact.html');
				break;
		}
	})
})

function fetchPage(link, page) {
	let baseURL = `${window.location.protocol}//${window.location.hostname}`;

	if (window.location.port) {
		baseURL += `:${window.location.port}`;
	}

	fetch(`${baseURL}/${page}`)
		.then(function(response) {
			return response.text()
		})
		.then(function(html) {
			let doc = new DOMParser().parseFromString(html, "text/html");

			anime({
				targets: '.text-section h1, .text-section p, .text-section div, .page-counter',
				translateY: 700,
				opacity: 0,
				easing: 'easeInExpo',
				duration: 700,
				complete: (anim) => {
					document.querySelector('.column-wrapper').remove();
				}
			})

			setTimeout(function () {
				document.querySelector('body').insertBefore(doc.querySelector('.new-content'), document.querySelector('.work-navigation'));

				anime({
					targets: '.new-content .text-section h1, .new-content .text-section p, .text-section div, .page-counter',
					translateY: [-600, 0],
					delay: (el, i) => 100 * i,
					opacity: [0, 1],
					easing: 'easeOutExpo',
				})
			}, 700);
		})
}
