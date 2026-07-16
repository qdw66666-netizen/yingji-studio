// 全局数据管理
let naonaoData = {
  projects: [],
  clients: [],
  finance: { income: 0, pending: 0 }
};

function loadData() {
  const saved = localStorage.getItem('naonaoData');
  if (saved) {
    naonaoData = JSON.parse(saved);
  }
}

function saveData() {
  localStorage.setItem('naonaoData', JSON.stringify(naonaoData));
  console.log('💾 数据已保存');
}

// 初始化
loadData();