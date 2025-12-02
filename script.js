const card = document.getElementById('card');
const checkBtn = document.getElementById('checkBtn');
const feedback = document.getElementById('feedback');
const correctBtn = document.getElementById('correctBtn');
const wrongBtn = document.getElementById('wrongBtn');

checkBtn.addEventListener('click', () => {
    card.classList.toggle('flipped');
    feedback.style.display = 'block';
});

correctBtn.addEventListener('click', () => {
    alert('Вы отметили правильно');
    feedback.style.display = 'none';
    card.classList.remove('flipped');
});

wrongBtn.addEventListener('click', () => {
    alert('Вы отметили неправильно');
    feedback.style.display = 'none';
    card.classList.remove('flipped');
});
