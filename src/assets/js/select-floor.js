import { openModal } from './modal';

const homeIcon = document.querySelector('.home__icon');
const path = document.querySelectorAll('.home__icon path');

const selectFloorNumber = document.querySelector('.select-floor__number');
const selectFloorArrowUp = document.querySelector('.select-floor__arrow-up');
const selectFloorArrowDown = document.querySelector(
	'.select-floor__arrow-down'
);

function counterPlus() {
	if (!(+selectFloorNumber.textContent < path.length)) {
		return false;
	}

	path.forEach(item => (item.style.opacity = '0'));

	let id = +selectFloorNumber.textContent;

	path[id].style.opacity = '1';

	if (+selectFloorNumber.textContent > 8) {
		selectFloorNumber.textContent = ++selectFloorNumber.textContent;
	} else {
		selectFloorNumber.textContent = `0${++selectFloorNumber.textContent}`;
	}
}
function counterMinus() {
	if (+selectFloorNumber.textContent === 1) {
		return false;
	}

	path.forEach(item => (item.style.opacity = '0'));

	let id = +selectFloorNumber.textContent;

	--id;
	--id;
	path[id].style.opacity = '1';

	if (+selectFloorNumber.textContent > 10) {
		selectFloorNumber.textContent = --selectFloorNumber.textContent;
	} else {
		selectFloorNumber.textContent = `0${--selectFloorNumber.textContent}`;
	}
}

function moveFloor(e) {
	const target = e.target;

	if (target.closest('path')) {
		const floor = target.dataset.floor;
		target.opacity = '1';

		if (floor > 9) {
			selectFloorNumber.textContent = floor;
		} else {
			selectFloorNumber.textContent = `0${floor}`;
		}
	}
}

const openModalClickPath = e => {
	const targer = e.target;

	if (targer.closest('path')) {
		openModal();
	}
};

homeIcon.addEventListener('click', openModalClickPath);
homeIcon.addEventListener('mousemove', e => moveFloor(e));

homeIcon.addEventListener('mousemove', e => {
	if (e.target.closest('path')) {
		path.forEach(item => (item.style.opacity = '0'));
		e.target.style.opacity = '1';
	}
});

selectFloorArrowUp.addEventListener('click', counterPlus);
selectFloorArrowDown.addEventListener('click', counterMinus);
