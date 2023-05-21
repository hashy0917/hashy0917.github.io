//ページの読み込み完了イベントを監視
window.addEventListener('load', function() {
    // ローディング画面の要素を非表示にする
    var loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.style.display = 'none'
});

ScrollReveal().reveal('.box', {
    duration: 800,
    viewFactor: 0.5,
    reset: true
});

new Vue({
    el: '#head',
    data: {
        open: false,
        myname: 'はっすぃ'
    },
})

var vm = new Vue({
    el: '#main',
    data: {
        message1: '都内在住のエンジニア見習い。お仕事募集中。',
        message2: 'インフラの構築やそれに関する記事を書いたり、　　セキュリティに関する事などをやっています。',
        message3: 'お仕事をご依頼の際はご連絡ください。'
    },
})

// クリック回数をカウントする変数
var clickCount = 0;
// 画像要素を取得
var image = document.getElementsByClassName("hashy-icon")[0];

image.addEventListener('click', function() {
    // クリック回数をインクリメント
    clickCount++;

    // クリック回数が5回に達した場合、新しいページにリダイレクト
    if (clickCount === 100) {
      alert("よくぞ見つけた・・・")
      window.location.href = 'https://ee.hashy0917.tech';
    }
});

//vm.$watch()
