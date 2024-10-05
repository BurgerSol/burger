// Check if WebKit browser (Apple) and handle it
let onWebkit = navigator.vendor == 'Apple Computer, Inc.'; 

if (onWebkit) { 
    // Replace <video> with <img> for WebKit since it doesn't support transparent webm
    document.getElementById('burger-img').remove();
    let newBurgerImg = document.createElement('img');
    newBurgerImg.draggable = false;
    newBurgerImg.id = 'burger-img';
    newBurgerImg.src = '/burger.gif'; // Use a static GIF for WebKit
    document.getElementById('burger-img-container').appendChild(newBurgerImg);
} else {
    // For non-WebKit browsers, use the .webm format
    document.getElementById('burger-img').src = '/burger.webm';
}

(async() => {
    let infobox = document.getElementById('infobox');
    let expandedInfoboxTemplate = document.getElementById('expanded-infobox-template');

    let defaultInfoboxHtml = infobox.innerHTML;
    let expandedInfoboxHtml = expandedInfoboxTemplate.innerHTML;

    window.expandInfobox = function() {
        let burger = document.getElementById('burger-container');
        burger.style.opacity = 0;

        let infoboxContainer = document.getElementById('infobox-container');
        infoboxContainer.classList.add('expanded');

        let infobox = document.getElementById('infobox');

        setTimeout(() => {
            infobox.classList.add('expanded');
            setTimeout(() => infobox.innerHTML = expandedInfoboxHtml, 125); // in middle of transition
        }, 500);
    };

    window.unexpandInfobox = function() {
        let burger = document.getElementById('burger-container');
        burger.style.opacity = 1;

        let infobox = document.getElementById('infobox');
        infobox.classList.remove('expanded');

        infobox.innerHTML = defaultInfoboxHtml;

        let infoboxContainer = document.getElementById('infobox-container');
        setTimeout(() => {
            infoboxContainer.classList.remove('expanded');
        }, 250);
    };
})();
