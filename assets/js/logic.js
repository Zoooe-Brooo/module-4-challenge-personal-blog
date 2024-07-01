// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
// TODO: Create functions to read and write from local storage

const toggleEl = document.querySelector('#toggle')

displayLastStyle();

function displayLastStyle() {
    const bodyClass = localStorage.getItem('body-class');
    if (bodyClass) {
        document.body.className = bodyClass;
        toggleEl.textContent = bodyClass === 'light' ? '☀️' : '🌒';
    }
}

function changeStyle(){
    const body = document.body;
    
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        toggleEl.textContent = '🌒';
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        toggleEl.textContent = '☀️';
    }

    localStorage.setItem('body-class', body.className);
}

toggleEl.addEventListener('click', changeStyle)


