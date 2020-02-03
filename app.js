
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {

    const fairPlayer = document.querySelector('input:checked');
    const fairName = document.getElementById('fairName');

    localStorage.setItem('fairName', fairName.value);
    localStorage.setItem('fairPlayer', fairPlayer.id);
    localStorage.setItem('joy', 20);
    localStorage.setItem('selfEsteem', 20);
    localStorage.setItem('insight', 20);
    localStorage.setItem('quests', 3);
    localStorage.setItem('gear', true);
    localStorage.setItem('wook', true);
    localStorage.setItem('shower', true);
    localStorage.setItem('gameOver', false);
    window.location = './map/index.html';
    
});


