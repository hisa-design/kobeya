window.addEventListener('DOMContentLoaded', () => {
  console.log("DOMContentLoaded発火！");

  // ここで定義しないとダメ！
  const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6Y1jDNPjIor_oECj5OXCIVSXXAFGrM8x8u7jTfFZaq3hBAt5RyUNffSbpfj-jzD0Yzv1gtm2dmchc/pub?output=csv';

  fetch(csvUrl)
    .then(response => response.text())
    .then(text => {
      const rows = text.trim().split("\n").map(row => row.split(","));
      console.log(rows); // 確認用

      const diarySection = document.getElementById("diary-section");

      // ヘッダー行を除いて、データ行だけループ
      for (let i = 1; i < rows.length; i++) {
        const [yearmonth, date, memo, photo] = rows[i];

        const card = document.createElement("div");
        card.className = "diary-card";

        card.innerHTML = `
          <div class="diary-date">${yearmonth} / ${date}</div>
          <img src="img/${photo}" class="diary-photo" alt="">
          <div class="diary-memo">${memo}</div>
        `;

        diarySection.appendChild(card);
      }
    })
    .catch(error => {
      console.error('読み込みエラー:', error);
    });
});
