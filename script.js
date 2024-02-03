document.addEventListener('DOMContentLoaded', function() {
    var pos = document.documentElement;
    pos.addEventListener('mousemove', function(e) {
        pos.style.setProperty('--x', e.clientX + 'px');
        pos.style.setProperty('--y', e.clientY + 'px');
    });

    var checkbox = document.querySelector('input[type="checkbox"]');
    var statusText = document.querySelector('.status');
    var clouds = document.querySelector('.clouds');

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            document.body.style.background = '#333';
            statusText.textContent = 'Lights On?';
            clouds.classList.add('clouds-visible');
        } else {
            document.body.style.background = '#333';
            statusText.textContent = 'Lights Off?';
            clouds.classList.remove('clouds-visible');
        }
    });
});
