function zoomImage(imgElement) {
    const overlay = document.getElementById('full-overlay');
    const fullImg = document.getElementById('full-image');
    
    // クリックした画像のパスを、拡大用画面の画像にコピーする
    fullImg.src = imgElement.src;
    // 拡大画面を表示
    overlay.style.display = 'block';
}

function closeImage() {
    // 拡大画面を隠す
    document.getElementById('full-overlay').style.display = 'none';
}
