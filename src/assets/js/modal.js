const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const modalContent = document.querySelector('.modal__content');
const selectDloorWatchHome = document.querySelector(
	'.select-floor__watch-home'
);
const selectFloorNumber = document.querySelector('.select-floor__number');
const modalTitle1 = document.querySelector('.modal__title1');
const modalTitle2 = document.querySelector('.modal__title2');

const openModal = () => {
	setTimeout(() => {
		modalContent.style.transform = 'none';
	}, 100);

	modal.classList.add('open');
	document.body.classList.add('_stop-scroll');

	modalTitle1.textContent = `Этаж ${+selectFloorNumber.textContent}`;
};

const closeModal = () => {
	setTimeout(() => {
		modal.classList.remove('open');
		document.body.classList.remove('_stop-scroll');
	}, 100);

	modalContent.style.transform = 'translateY(-50%)';
};

const showHideApartamets = () => {
	const modalRitghApartments = document.querySelector('.apartments');

	modalRitghApartments.classList.toggle('apartments_hide');
};

document.addEventListener('keydown', e => {
	if (modal.classList.contains('open') && e.code === 'Escape') {
		closeModal();
	}
});

modalTitle2.addEventListener('click', showHideApartamets);
selectDloorWatchHome.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);

export { openModal };
