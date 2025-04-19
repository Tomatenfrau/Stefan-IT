document.querySelectorAll('.Dashopt1, .Dashopt2, .Dashopt3, .Dashopt4').forEach(div => {
    div.addEventListener('click', () => {
        if (div.classList.contains('Dashopt1')) {
            window.location.href = 'Additional_Pages/Our Mission.html';
        } else if (div.classList.contains('Dashopt2')) {
            window.location.href = 'Additional_Pages/It Solutions.html';
        } else if (div.classList.contains('Dashopt3')) {
            window.location.href = 'Additional_Pages/The Team.html';
        } else if (div.classList.contains('Dashopt4')) {
            window.location.href = 'Additional_Pages/Investments.html';
        }
    });
});