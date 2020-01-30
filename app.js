
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {

    const fairPlayer = document.querySelector('input:checked');
    const fairName = document.getElementById('fairName');

    localStorage.setItem('fairName', fairName.value);
    localStorage.setItem('fairPlayer', fairPlayer.id);
    return { fairPlayer, fairName }; 
});

