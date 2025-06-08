window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.door').classList.add('open');
  }, 500);
});

console.log("ようこそ！ひみつのこべやへ✨");

// データ取得と表示
window.addEventListener('DOMContentLoaded', function() {
  Tabletop.init({
    key: '1VvJ1ySSarudBRJjvsROCY2TelcoTDZ89VO02ZUC4Nqk',
    callback: function(data, tabletop) {
      console.log("取得したデータ：", data);
      showLatestData(data);
    },
    simpleSheet: true
  });
});

function showLatestData(data) {
  console.log("データを表示するよ！", data);

  // 最新データを1件取得
  const latestEntry = data[data.length - 1];

  // 表示する要素を作る
  const diarySection = document.getElementById("diary-section");

  const card = document.createElement("div");
  card.className = "diary-card";

 card.innerHTML = `
  <div class="diary-date">${latestEntry.yearmonth || latestEntry.date}</div>
  <img src="/kobeya/img/${latestEntry.photo}" class="diary-photo" alt="">
  <div class="diary-memo">${latestEntry.memo}</div>
`;


  diarySection.appendChild(card);
}
