window.addEventListener('DOMContentLoaded', () => {
  console.log("DOMContentLoaded発火！");

  const door = document.querySelector('.door');
  const doorknob = document.querySelector('.doorknob');

  doorknob.addEventListener('click', () => {
    door.classList.toggle('open');
  });

  const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6Y1jDNPjIor_oECj5OXCIVSXXAFGrM8x8u7jTfFZaq3hBAt5RyUNffSbpfj-jzD0Yzv1gtm2dmchc/pub?output=csv';

  fetch(csvUrl)
    .then(response => response.text())
    .then(text => {
      const rows = text.trim().split("\n").map(row => row.split(","));
      console.log(rows); // 確認用

      const diarySection = document.getElementById("diary-section");

      for (let i = 1; i < rows.length; i++) {
        const [yearmonth, date, memo, photo] = rows[i];

        const card = document.createElement("div");
        card.className = "diary-card";

        card.innerHTML = `
          <div class="diary-date">${yearmonth} / ${date}</div>
          <img src="${photo}" class="diary-photo" alt="">
          <div class="diary-memo">${memo}</div>
        `;

        diarySection.appendChild(card);
      }
    })
    .catch(error => {
      console.error('読み込みエラー:', error);
    });
});
