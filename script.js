document.addEventListener('DOMContent`Loaded', function() {
    const aboutSection = document.getElementById('about');

    aboutSection.addEventListener('click', function() {
        if (aboutSection.style.background === 'lightblue') {
            // If it is lightblue, change it back to white
            aboutSection.style.background = '#fff';
        } else {
            // Otherwise, change background colour to lightblue
            aboutSection.style.background = 'lightblue';
        }
    });
});

