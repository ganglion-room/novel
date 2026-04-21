  const dialog = document.getElementById('imageDialog');
  const largeImage = document.getElementById('largeImage');
  const backdrop = document.getElementById('backdrop');

  // class="zoom-target" がついた画像をすべて取得してループ処理
  document.querySelectorAll('.zoom-target').forEach(img => {
    img.onclick = () => {
      largeImage.src = img.src; // クリックした画像のパスを拡大画像にセット
      dialog.showModal();
    };
  });

  // 背景クリックで閉じる
  backdrop.onclick = () => dialog.close();
