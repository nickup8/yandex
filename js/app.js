gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content_wrapper',
		smooth: 3,
		effects: true,
	});

	gsap.fromTo(
		'.head',
		{ opacity: 1 },
		{
			opacity: 0,
			scrollTrigger: {
				trigger: '.head',
				start: 'center',
				end: '700',
				scrub: true,
			},
		}
	);

	let itemLeftAdv = gsap.utils.toArray('.advantages_item:nth-child(odd)');

	itemLeftAdv.forEach((item) => {
		gsap.fromTo(
			item,
			{ x: -70, opacity: 0 },
			{
				opacity: 1,
				x: 0,
				scrollTrigger: {
					trigger: item,
					start: 'top bottom',
					end: 'bottom bottom',
					scrub: true,
				},
			}
		);
	});

	let itemRightAdv = gsap.utils.toArray('.advantages_item:nth-child(even)');

	itemRightAdv.forEach((itemR) => {
		gsap.fromTo(
			itemR,
			{ x: 70, opacity: 0 },
			{
				opacity: 1,
				x: 0,
				scrollTrigger: {
					trigger: itemR,
					start: '-900',
					end: '+=400',
					scrub: true,
				},
			}
		);
	});

	let eventItemsOdd = gsap.utils.toArray('.events_content_item:nth-child(odd)');

	eventItemsOdd.forEach((item) => {
		gsap.fromTo(
			item,
			{ x: -100, opacity: 0 },
			{
				opacity: 1,
				x: 0,
				scrollTrigger: {
					trigger: item,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
				},
			}
		);
	});
	let eventItemsEven = gsap.utils.toArray(
		'.events_content_item:nth-child(even)'
	);

	eventItemsEven.forEach((item) => {
		gsap.fromTo(
			item,
			{ x: 100, opacity: 0 },
			{
				opacity: 1,
				x: 0,
				scrollTrigger: {
					trigger: item,
					start: 'top bottom',
					end: 'bottom bottom',
					scrub: true,
				},
			}
		);
	});

	gsap.fromTo(
		'.cta_text_bottom, .cta_img_bottom',
		{
			opacity: 0,
		},
		{
			opacity: 1,
			scrollTrigger: {
				trigger: '.cta_text_top',
				start: 'center center',
				end: 'top top',
				scrub: true,
			},
		}
	);

	let windowWith = window.outerWidth;
	if (windowWith < 576) {
	}
}
