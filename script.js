const card = document.getElementById("card");
const nextBtn = document.getElementById("nextBtn");
const correctBtn = document.getElementById("correctBtn");
const wrongBtn = document.getElementById("wrongBtn");

// Переворот карточки
card.addEventListener("click", () => {
    card.classList.toggle("flipped");
});

// Кнопка "Дальше"
nextBtn.addEventListener("click", () => {
    alert("Показать следующую карточку"); 
    // здесь позже подставим логику выбора следующей карточки из базы
});

// Заглушки кнопок "Правильно/Неправильно"
correctBtn.addEventListener("click", () => {
    alert("Отмечено как правильно");
});
wrongBtn.addEventListener("click", () => {
    alert("Отмечено как неправильно");
});

// Загрузка CSV
const uploadBtn = document.getElementById("uploadBtn");
uploadBtn.addEventListener("click", async () => {
    const fileInput = document.getElementById("csvFile");
    if (!fileInput.files.length) return alert("Выберите файл CSV");

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    const res = await fetch("http://127.0.0.1:8000/upload_csv", {
        method: "POST",
        body: formData
    });
    const data = await res.json();
    document.getElementById("uploadStatus").innerText = "Загрузка завершена!";
});
