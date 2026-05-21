const data = {
  keywords: ['Polyether Polyol', 'Polyester Polyol', 'MDI', 'PU Catalyst', 'Flame Retardant', 'Blowing Agent', 'Silicone Surfactant', 'Spray Foam Equipment', 'Cold Storage Insulation', 'Roof Spray Foam'],
  resources: [
    ['Raw Material Suppliers', 'Polyol, MDI, catalysts, flame retardants and additives for rigid PU systems.'],
    ['System Houses', 'Spray foam system formulators for roof, wall, cold storage, tank and pipeline insulation.'],
    ['Spray Equipment Manufacturers', 'High-pressure machines, spray guns, heated hoses, transfer pumps and spare parts.'],
    ['Contractors', 'Professional PU spray foam contractors for industrial and building insulation projects.'],
    ['Trading Companies', 'Export-oriented trading partners for raw materials, equipment and packaged systems.'],
    ['Researchers & Labs', 'R&D teams, testing labs and formulation specialists for PU insulation.'],
    ['Testing & Certification', 'Certification, standards, QA testing and compliance support.'],
    ['Project Owners', 'Cold chain, warehouse, roofing, industrial and infrastructure project demand.']
  ],
  rawMaterials: ['Polyether Polyol', 'Polyester Polyol', 'MDI / Isocyanate', 'Catalysts', 'Flame Retardants', 'Blowing Agents', 'Silicone Surfactants', 'Chain Extenders', 'Crosslinkers', 'Additives', 'Pigments', 'Moisture Control Agents'],
  applications: [
    ['Roof Insulation', 'Closed-cell spray foam for waterproofing support, thermal performance and roof retrofit projects.'],
    ['Cold Storage', 'High-density rigid PU spray foam for cold rooms, logistics warehouses and food storage.'],
    ['Wall Insulation', 'Spray-applied insulation for building envelopes and industrial walls.'],
    ['Pipeline Insulation', 'Thermal insulation for pipelines with curved and irregular surfaces.'],
    ['Tank Insulation', 'Spray foam insulation for storage tanks and industrial vessels.'],
    ['Industrial Buildings', 'Fast-applied insulation for warehouses, plants and livestock buildings.']
  ],
  suppliers: [
    ['Global Polyol Supplier', 'China · Raw Material Supplier', ['Polyether Polyol', 'Polyester Polyol', 'ISO 9001']],
    ['Euro Spray System House', 'Germany · System House', ['PIR Spray Foam', 'Roof System', 'CE Documentation']],
    ['Asia Spray Equipment', 'Singapore · Equipment Manufacturer', ['High Pressure Machine', 'Spray Gun', 'Heated Hose']],
    ['Gulf Insulation Contractors', 'UAE · Contractor', ['Cold Storage', 'Tank Insulation', 'HSE Approved']]
  ],
  articles: [
    ['What is rigid polyurethane spray foam insulation?', 'Basic Knowledge'],
    ['Thermal conductivity of PU spray foam insulation', 'Raw Materials'],
    ['Closed-cell content and insulation performance', 'Spray Application'],
    ['Common problems in spray foam application', 'Troubleshooting'],
    ['Cold storage spray foam density and thickness guide', 'Applications'],
    ['How to choose spray foam equipment', 'Equipment Maintenance']
  ]
};

const translations = {
  en: {
    eyebrow: 'Global PU Insulation Value Chain', title: 'PU Alliance', subtitle: 'Global Resource Platform for Rigid PU Spray Foam Insulation', description: 'Connecting raw material suppliers, system houses, spray equipment manufacturers, contractors, researchers and project owners worldwide.', explore: 'Explore Resources', post: 'Post Buying Request', join: 'Join Supplier Directory', postButton: 'Post Request', searchPlaceholder: 'Search products, suppliers, equipment, contractors or technical resources', resourcesEyebrow: 'Industry Chain', resourcesTitle: 'Industry Chain Resources', resourcesText: 'Navigate the full rigid PU spray foam insulation value chain by supplier role and project need.', rawTitle: 'Raw Material Resources', applicationsTitle: 'Application Scenarios', suppliersTitle: 'Featured Suppliers', libraryTitle: 'Technical Library', buyerTitle: 'For Buyers: Post Buying Request', buyerText: 'Tell suppliers what you need, including product, application, quantity, country and technical requirements.', supplierTitle: 'For Suppliers: Join Supplier Directory', supplierText: 'List your company and make your PU insulation resources discoverable by international buyers.', contactTitle: 'Contact PU Alliance', submit: 'Submit'
  },
  zh: {
    eyebrow: '全球聚氨酯保温产业链', title: 'PU Alliance 聚氨酯联盟', subtitle: '全球硬泡聚氨酯喷涂保温资源平台', description: '连接全球原料供应商、组合料厂家、喷涂设备厂、施工公司、研发人员与项目甲方。', explore: '浏览资源', post: '发布采购需求', join: '加入供应商名录', postButton: '发布需求', searchPlaceholder: '搜索产品、供应商、设备、施工公司或技术资料', resourcesEyebrow: '产业链', resourcesTitle: '产业链资源分类', resourcesText: '按供应商角色和项目需求浏览硬泡聚氨酯喷涂保温产业链资源。', rawTitle: '原料资源入口', applicationsTitle: '应用场景', suppliersTitle: '推荐供应商', libraryTitle: '技术资料', buyerTitle: '买家入口：发布采购需求', buyerText: '填写产品、应用、数量、目标国家和技术要求，让供应商快速理解您的需求。', supplierTitle: '供应商入口：加入供应商名录', supplierText: '展示企业资料，让国际买家更容易找到您的聚氨酯保温资源。', contactTitle: '联系 PU Alliance', submit: '提交'
  },
  ru: { title: 'PU Alliance', subtitle: 'Глобальная платформа ресурсов для жесткой ППУ напыляемой изоляции' },
  ja: { title: 'PU Alliance', subtitle: '硬質PU吹付断熱のグローバルリソースプラットフォーム' },
  th: { title: 'PU Alliance', subtitle: 'แพลตฟอร์มทรัพยากรระดับโลกสำหรับฉนวนโฟม PU แบบพ่นชนิดแข็ง' }
};

function t(key) {
  const lang = document.getElementById('language').value;
  return translations[lang]?.[key] || translations.en[key] || '';
}

function applyLanguage() {
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
}

function render() {
  document.getElementById('keywords').innerHTML = data.keywords.map((item) => `<button type="button" data-keyword="${item}">${item}</button>`).join('');
  document.getElementById('resourceCards').innerHTML = data.resources.map((item, index) => `<article class="card"><div class="card-icon">${index + 1}</div><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join('');
  document.getElementById('rawMaterials').innerHTML = data.rawMaterials.map((item) => `<article class="compact-item"><h3>${item}</h3><p>Supplier references, technical parameters and application notes reserved for expansion.</p></article>`).join('');
  document.getElementById('applicationsGrid').innerHTML = data.applications.map((item) => `<article class="card"><h3>${item[0]}</h3><p>${item[1]}</p><div class="tags"><span>32-45 kg/m3</span><span>30-150 mm</span></div></article>`).join('');
  document.getElementById('suppliersGrid').innerHTML = data.suppliers.map((item) => `<article class="supplier"><h3>${item[0]}</h3><p>${item[1]}</p><div class="tags">${item[2].map((tag) => `<span>${tag}</span>`).join('')}</div></article>`).join('');
  document.getElementById('articles').innerHTML = data.articles.map((item) => `<article class="article"><p class="eyebrow">${item[1]}</p><h3>${item[0]}</h3><p>Mock technical article data for the first MVP. Future versions can connect CMS and multilingual content management.</p></article>`).join('');
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

render();
applyLanguage();

document.getElementById('language').addEventListener('change', applyLanguage);
document.getElementById('keywords').addEventListener('click', (event) => {
  if (event.target.dataset.keyword) {
    document.getElementById('searchInput').value = event.target.dataset.keyword;
    showToast(`Search prepared: ${event.target.dataset.keyword}`);
  }
});
document.getElementById('searchForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const query = document.getElementById('searchInput').value.trim();
  showToast(query ? `Showing MVP search context for: ${query}` : 'Enter a search keyword.');
});
['buyerForm', 'supplierForm'].forEach((id) => {
  document.getElementById(id).addEventListener('submit', (event) => {
    event.preventDefault();
    event.target.reset();
    showToast('Submitted successfully. Database and email workflows are reserved for V1.2.');
  });
});
