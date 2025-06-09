window.addEventListener('DOMContentLoaded', () => {
  const diarySection = document.getElementById('diary-section');

  fetch(csvUrl)
    .then(response => response.text())
    .then(csvText => {
      const rows = csvText.trim().split('\n');
      const headers = rows[0].split(',');

      // 一番最後のデータ（最新）
      const latestRow = rows[rows.length - 1].split(',');

      // データをオブジェクト化（列名をキーに）
      const latestEntry = {};
      headers.forEach((header, i) => {
        latestEntry[header] = latestRow[i];
      });

      // カード作成
      const card = document.createElement('div');
      card.className = 'diary-card';

      card.innerHTML = `
        <div class="diary-date">${latestEntry.yearmonth || latestEntry.date || '日付なし'}</div>
        <img src="/kobeya/img/${latestEntry.photo}" class="diary-photo" alt="写真">
        <div class="diary-memo">${latestEntry.memo || 'メモなし'}</div>
      `;

      diarySection.appendChild(card);
    })
    .catch(err => {
      console.error('CSV読み込みでエラー:', err);
      diarySection.textContent = 'データの読み込みに失敗しました。';
    });
});
