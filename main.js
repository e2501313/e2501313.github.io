const themeBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

if (themeBtn) {
    themeBtn.addEventListener('click', function () {
        body.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')) {
            themeBtn.textContent = '☀️ ライトモード';
        } else {
            themeBtn.textContent = '🌙 ダークモード';
        }
    });
}