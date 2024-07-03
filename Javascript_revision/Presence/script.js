
    const presentButtons = document.querySelectorAll('.btn-present');
    const absentButtons = document.querySelectorAll('.btn-absent');

    // "Présent"
    presentButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const row = button.parentNode.parentNode;
            row.classList.add('present');
            row.classList.remove('absent');
        });
    });

    // "Absent"
    absentButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const row = button.parentNode.parentNode;
            row.classList.remove('present');
            row.classList.add('absent');
        });
    });

