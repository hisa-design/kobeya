window.addEventListener('DOMContentLoaded', function() {
  console.log("DOMContentLoaded発火！");

  Tabletop.init({
    key: '1VvJ1ySSarudBRJjvsROCY2TelcoTDZ89VO02ZUC4Nqk',
    callback: function(data, tabletop) {
      console.log("callback発火！ 取得したデータ：", data);

      if (!data || data.length === 0) {
        console.warn("データが空です");
        return;
      }

      showLatestData(data);
    },
    simpleSheet: true
  });

  function showLatestData(data) {
    console.log("データを表示するよ！", data);

    const latestEntry = data[data.length - 1];
    console.log("最新データ中身:", latestEntry);

    const diarySection = document.getElementById("diary-section");

    const card = document.createElement("div");
    card.className = "diary-card";

    card.innerHTML = `
      <div class="diary-date">${latestEntry.yearmonth || latestEntry.date || '日付なし'}</div>
      <img src="/kobeya/img/${latestEntry.photo}" class="diary-photo" alt="">
      <div class="diary-memo">${latestEntry.memo || 'メモなし'}</div>
    `;

    diarySection.appendChild(card);
  }
});
