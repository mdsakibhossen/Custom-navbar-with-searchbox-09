// Button Start
const menu_btn = document.querySelector('.menu_btn');
const bar = menu_btn.children;
menu_btn.addEventListener('click', () => {
    const bar1 = bar[0];
    const bar2 = bar[1];
    const bar3 = bar[2];

    bar1.classList.toggle('bar1');
    bar2.classList.toggle('bar2');
    bar3.classList.toggle('bar3');
    document.querySelector('.nav').classList.toggle('on');
})
// Button End