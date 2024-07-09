// JavaScript to handle dropdown menu toggle
document.querySelector('.menu-button').addEventListener('click', () => {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Example of handling button clicks (you can expand this)
document.querySelector('.play-button').addEventListener('click', () => {
    alert('Playing with your Tamagotchi!');
});

document.querySelector('.sleep-button').addEventListener('click', () => {
    alert('Your Tamagotchi is sleeping!');
});

document.querySelector('.feed-button').addEventListener('click', () => {
    alert('Feeding your Tamagotchi!');
});
