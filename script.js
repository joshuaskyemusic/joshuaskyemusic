// Let's re-bind the toggle function directly to the element to ensure it's not a scoping issue
const menu = document.getElementById('side-menu');
const tab = document.querySelector('.menu-tab');
const closeBtn = document.querySelector('.close-btn');

if (tab && menu) {
    tab.onclick = function(e) {
        console.log('Tab clicked');
        menu.classList.toggle('open');
    };
}

if (closeBtn && menu) {
    closeBtn.onclick = function(e) {
        console.log('Close clicked');
        menu.classList.toggle('open');
    };
}

// Ensure the menu container has a high enough z-index to be clickable
await setElementStyles(menu, {
    'z-index': '999999'
});

const data = {
    updatedTabOnClick: typeof tab.onclick,
    updatedCloseOnClick: typeof closeBtn.onclick,
    newZIndex: window.getComputedStyle(menu).zIndex
};
