

let stateBtn = 0;
const navList = document.getElementById('navList-toggle');
function btnMobileClick() {
    if (stateBtn === 0) {
        stateBtn = 1;
    } else {
        stateBtn = 0;
    };
    console.log(stateBtn);
    if (stateBtn === 0) {
        navList.setAttribute('class', 'nav-list');
    } else if (stateBtn === 1) {
        navList.setAttribute('class', 'nav-list fade-nav');
    }

};
