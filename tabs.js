export function setupTabs() {
  // DOM要素の取得
  const homeLink = document.querySelector('[data-tab="home"]');
  const converterTab = document.querySelector('[data-tab="converter"]');
  const homeSection = document.getElementById('home');
  const converterSection = document.getElementById('converter');

  // ホームリンクのクリックイベント
  if (homeLink) {
    homeLink.addEventListener('click', (e) => {
      e.preventDefault();
      converterSection.classList.add('hidden');
      homeSection.classList.remove('hidden');
    });
  }

  // 単位変換タブのクリックイベント
  if (converterTab) {
    converterTab.addEventListener('click', () => {
      homeSection.classList.add('hidden');
      converterSection.classList.remove('hidden');
    });
  }
}