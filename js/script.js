// Плавная прокрутка для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Дублирование бегущей строки для бесконечной анимации
const runningText = document.querySelector('.running-text-content');
if (runningText) {
    const clone = runningText.cloneNode(true);
    runningText.parentElement.appendChild(clone);
}
