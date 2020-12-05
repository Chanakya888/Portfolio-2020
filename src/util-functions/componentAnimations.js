//This function splits and hides the text
import { SplitText } from './SplitText';
import { TimelineLite, gsap } from 'gsap';

const setTitleText = (target) => {
	console.log('target is ', target);
	let split = new SplitText(`#${target}`, { type: 'lines', linesClass: 'title-text-h1' });
	split.lines.forEach((element) => {
		const line_innerDiv = document.createElement('h1');
		line_innerDiv.classList.add(`${target}-line-div`);
		line_innerDiv.textContent = element.textContent;
		element.textContent = '';
		element.appendChild(line_innerDiv);
	});
	gsap.set(document.querySelectorAll(`.${target}-line-div`), { y: 80 });
};

const animateLines = (target, setDelay) => {
	let delay = 1;
	if (setDelay === 'no-delay') {
		delay = 0;
	}
	let t1 = new TimelineLite();
	t1.staggerTo(document.querySelectorAll(`.${target}-line-div`), 1, { y: 0, ease: 'Power4.easeOut', delay: delay }, 0.15);
};

const buttonAnimation = (setDelay) => {
	let delay = 2;
	if (setDelay === 'no-delay') {
		delay = 0;
	}
	let t1 = new TimelineLite();
	t1.fromTo('.button-text', { y: 40, ease: 'Power4.easeOut' }, { y: 0, duration: 0.5, delay: delay });
	t1.fromTo('#button-horizontal-rule', { width: '0%' }, { width: '100%', duration: 0.5, ease: 'Power4.easeIn' });
};
export { setTitleText, animateLines, buttonAnimation };
