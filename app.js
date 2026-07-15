
let projects = JSON.parse(localStorage.getItem("yingji_projects") || "[]");

function addProject() {
  const name = document.getElementById("name").value || "未命名项目";
  const client = document.getElementById("client").value;
  const type = document.getElementById("type").value;
  const money = parseFloat(document.getElementById("money").value) || 0;
  const progress = parseFloat(document.getElementById("progress").value) || 0;

  projects.unshift({name, client, type, money, progress});
  localStorage.setItem("yingji_projects", JSON.stringify(projects));
  render();
  alert("✅ 项目保存成功！");
}

function render() {
  document.getElementById("projectCount").innerText = projects.length;
  document.getElementById("income").innerText = "¥" + projects.reduce((sum, p) => sum + p.money, 0);
  document.getElementById("editing").innerText = projects.filter(p => p.progress < 100).length;
  document.getElementById("delivery").innerText = projects.filter(p => p.progress >= 100).length;

  const listHTML = projects.map(p => `
    <div class="item">
      📷 <b>${p.name}</b><br>
      客户：${p.client || '无'} <br>
      类型：${p.type || '未分类'} <br>
      金额：¥${p.money} <br>
      进度：${p.progress}%
    </div>
  `).join('');
  document.getElementById("list").innerHTML = listHTML;
}

render();
