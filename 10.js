// 1. HTML要素をJavaScriptの変数に格納（DOMの取得）
const buttonElement = document.getElementById('myButton');
const messageElement = document.getElementById('messageArea');

// 2. ボタンにイベントリスナー（監視役）を追加
// 'click' イベントが発生したら、function() の中の処理を実行する
buttonElement.addEventListener('click', function() {
    
    // ↓↓↓ ボタンがクリックされたときに実行される処理 ↓↓↓
    
    // ポップアップ（アラート）を表示
    alert("ボタンがクリックされました！🎉");
    
    // メッセージエリアのテキストを更新
    messageElement.textContent ="teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
    
    // メッセージの文字色を赤にする
    messageElement.style.color = 'red';
});