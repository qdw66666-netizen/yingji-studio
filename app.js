let data=JSON.parse(localStorage.getItem('naonao_v4')||'[]');

function add(){
  const nameEl = document.getElementById('name');
  const clientEl = document.getElementById('client');
  const statusEl = document.getElementById('status');
  const moneyEl = document.getElementById('money');
  
  data.unshift({
    name: nameEl.value || '未命名项目',
    client: clientEl.value,
    status: statusEl.value,
    money: Number(moneyEl.value || 0)
  });
  localStorage.setItem('naonao_v4', JSON.stringify(data));
  render();
  alert('✅ 项目已保存！');
}

function render(){
  document.getElementById('schedule').innerText = data.length;
  document.getElementById('unsent').innerText = data.filter(x => x.status === '未晒图').length;
  document.getElementById('editing').innerText = data.filter(x => x.status === '未修图' || x.status === '修图中').length;
  document.getElementById('delivery').innerText = data.filter(x => x.status === '待交付').length;

  const listHTML = data.map(x => `
    <div class="item">
      📷 <b>${x.name}</b><br>
      客户：${x.client || '无'}<br>
      状态：${x.status}<br>
      金额：¥${x.money}
    </div>
  `).join('');
  document.getElementById('list').innerHTML = listHTML;
}

render();