/* ── Preview data ── */
const PV = {
  // BC items
  'bc-overview':{t:'Business Central Overview',lvl:'Platform',b:['Cloud ERP connecting finance, ops, inventory, sales','AI Copilot built-in for automation','Monthly auto-updates, no manual patching','Cloud or on-premises deployment']},
  'bc-impl':{t:'BC Implementation',lvl:'Service',b:['Full data migration and validation','Cloud and on-premises setup','Custom role and user configuration','End-user training and go-live support']},
  'bc-custom':{t:'BC Customization & Dev',lvl:'Service',b:['AL extension development','AppSource-ready or private extensions','Upgrade-safe architecture','Power Automate flow integration']},
  'bc-integ':{t:'BC Integration',lvl:'Service',b:['Shopify, WooCommerce, Magento sync','Microsoft 365 — Outlook, Excel, Teams','Bank feeds and auto-reconciliation','Custom API connector development']},
  'bc-support':{t:'BC Support & Maintenance',lvl:'Service',b:['24×7 helpdesk and ticket management','Remote VPN-based desktop sessions','SLA-backed response under 2 hrs','Performance tuning and bug fixes']},
  'bc-upgrade':{t:'NAV → Business Central',lvl:'Service',b:['Zero-downtime migration planning','Historical data fully preserved','Code upgrade and object merging','Post-migration hyper-care support']},
  'bc-license':{t:'BC Licensing & Pricing',lvl:'Info',b:['Essentials: ~$70/user/month','Premium: ~$100/user/month','Volume discounts via Microsoft CSP','Free licensing guidance from our team']},
  'bc-portal':{t:'BC Portal Development',lvl:'Service',b:['Vendor self-service portal (orders, invoices)','Customer order tracking and payment','Live BC data sync in real-time','Role-based access and approvals']},
  // F&O items
  'fo-impl':{t:'F&O Implementation',lvl:'Service',b:['Enterprise-grade rollout planning','Finance, SCM, manufacturing modules','Integration with existing systems','Change management and training']},
  'fo-custom':{t:'F&O Customization',lvl:'Service',b:['Extend standard D365 modules','Custom workflows and approval logic','ISV solution integration','Upgrade-safe custom code']},
  'fo-integ':{t:'F&O Integration',lvl:'Service',b:['Power BI reporting integration','Logistics and 3PL connectors','Finance system API bridges','API-first integration architecture']},
  'fo-support':{t:'F&O Support',lvl:'Service',b:['24×7 managed support coverage','Proactive performance monitoring','Enhancement implementation','Regulatory compliance updates']},
  'fo-consult':{t:'F&O Consulting',lvl:'Service',b:['Business process analysis and mapping','Roadmap and solution design','ROI and TCO assessment','Go-live readiness review']},
  'fo-license':{t:'F&O Licensing',lvl:'Info',b:['Finance plan: ~$180/user/month','SCM plan: ~$180/user/month','Full-suite bundles available','CSP procurement through us']},
  'fo-scm':{t:'Supply Chain Management',lvl:'Module',b:['Demand and capacity planning','Warehouse and logistics management','Production and manufacturing support','Real-time inventory visibility']},
  'fo-ai':{t:'Copilot & AI in F&O',lvl:'Feature',b:['AI-powered cash flow forecasting','Automated invoice and PO processing','Natural language data queries','Agentic AI workflows in D365']},
  // NAV items
  'nav-impl':{t:'NAV Implementation',lvl:'Service',b:['Full NAV deployment for SMBs','Industry-specific configuration','On-site and remote delivery','Full documentation and handover']},
  'nav-custom':{t:'NAV Customization',lvl:'Service',b:['Module-level customization in C/AL','UI and Role Center tailoring','Custom report and dashboard dev','Multi-language support']},
  'nav-integ':{t:'NAV Integration',lvl:'Service',b:['Shopify and e-commerce connectors','Office 365 and Outlook integration','Third-party ERP/CRM bridges','EDI and logistics platform connectors']},
  'nav-support':{t:'NAV Support',lvl:'Service',b:['Covers all NAV versions (2009–2018)','24×7 helpdesk with remote access','Code backup before every change','3-tier escalation system']},
  'nav-upgrade':{t:'NAV Upgrade',lvl:'Service',b:['Migrate to Business Central cloud','Historical data fully preserved','Zero disruption migration planning','Post-upgrade hyper-care period']},
  'nav-report':{t:'Report Development',lvl:'Service',b:['SSRS reports for NAV','Power BI dashboards and datasets','Excel report layouts','Custom KPI and analytics views']},
  'nav-portal':{t:'NAV Portal Development',lvl:'Service',b:['Vendor and customer self-service portals','Built on live NAV data via API','Mobile-responsive and accessible','Hosting and maintenance available']},
  'nav-data':{t:'Data Migration',lvl:'Service',b:['Structured data mapping and transformation','Historical data fully preserved','Validation against source records','Rollback plan always in place']},
  // By-service items
  'impl-bc':{t:'Business Central Implementation',lvl:'Service',b:['Cloud and on-premises deployment','Data import, user setup, go-live','Customization during implementation','Post go-live care available']},
  'impl-fo':{t:'F&O Implementation',lvl:'Service',b:['Enterprise-scale deployment planning','Finance, SCM, manufacturing modules','Integration with existing systems','Change management and training']},
  'impl-nav':{t:'Navision Implementation',lvl:'Service',b:['All NAV versions supported','Industry-specific configuration','On-site and remote delivery options','Full documentation and handover']},
  'impl-training':{t:'User Training',lvl:'Service',b:['Functional and technical training tracks','Role-based onboarding programs','Video and documentation delivery','Ongoing refresher training']},
  'impl-post':{t:'Post-Go-Live Support',lvl:'Service',b:['Dedicated hyper-care period','Daily check-ins for first 30 days','Issue resolution priority SLA','Smooth handover to support team']},
  'custom-nav':{t:'NAV Customization',lvl:'Service',b:['Module-level changes in C/AL','New page and table creation','Custom workflows and approvals','Backwards compatible upgrades']},
  'custom-bc':{t:'BC Extension Dev',lvl:'Service',b:['AL language extension development','AppSource-ready or private extensions','Upgrade-safe customizations','Power Automate flow integration']},
  'custom-report':{t:'Report Development',lvl:'Service',b:['SSRS reports for NAV/BC','Power BI dashboards and datasets','Excel report layouts','Custom KPI and analytics views']},
  'custom-role':{t:'UI & Role Center Tailoring',lvl:'Service',b:['Simplify screens for each role','Add/remove fields and actions','Custom Role Centers per department','Tested with real users before go-live']},
  'integ-shopify':{t:'Shopify Integration',lvl:'Service',b:['Real-time order and inventory sync','Customer data and pricing rules','Returns and refund workflow automation','Supports Shopify Plus and standard']},
  'integ-m365':{t:'Microsoft 365 Integration',lvl:'Service',b:['Outlook email and calendar sync','Excel-based data import/export','Teams notifications and approvals','Word document generation from BC/NAV']},
  'integ-bank':{t:'Bank Reconciliation',lvl:'Service',b:['Automatic bank feed import','Transaction matching and clearing','VAT and tax reconciliation','Audit trail and reporting']},
  'integ-api':{t:'API & Third-Party Integration',lvl:'Service',b:['REST and SOAP API connector dev','Middleware and iPaaS solutions','Logistics and 3PL platforms','Payment gateway and banking APIs']},
  'sup-247':{t:'24×7 Helpdesk',lvl:'Service',b:['All NAV and BC versions covered','Ticket-based case management','Escalation to senior consultants','SLA under 2 hours initial response']},
  'sup-remote':{t:'Remote Support Sessions',lvl:'Service',b:['Secure VPN-based desktop access','Real-time diagnosis and resolution','Session recording for audit trail','Available globally — India, US, AU']},
  'sup-amc':{t:'Annual Maintenance Contract',lvl:'Service',b:['Fixed monthly cost, no surprises','Scheduled health checks included','Minor enhancements in scope','Dedicated account manager']},
  'upg-nav2bc':{t:'NAV → Business Central',lvl:'Service',b:['Full upgrade from any NAV version','Data migration and validation','Code rewrite to AL extensions','Post-migration hyper-care period']},
  'upg-data':{t:'Data Migration',lvl:'Service',b:['Structured mapping and transformation','Historical data fully preserved','Validation against source records','Rollback plan always in place']},
  'upg-version':{t:'NAV Version Upgrades',lvl:'Service',b:['Upgrade 2009 → 2013 → 2016 → 2018 → BC','Object merging and conflict resolution','Customization forward-porting','Regression testing included']},
  // Sidebar tab default previews
  'tab-sol-bc':{t:'Business Central',lvl:'Platform',b:['Cloud ERP for growing businesses','Covers finance, inventory, ops, sales','Available cloud or on-premises','Includes AI Copilot capabilities']},
  'tab-sol-fo':{t:'Dynamics 365 F&O',lvl:'Platform',b:['Enterprise ERP for large organizations','Finance, supply chain, manufacturing','Scalable and globally compliant','Deep Microsoft Azure integration']},
  'tab-sol-nav':{t:'Dynamics NAV / Navision',lvl:'Platform',b:['Legacy Navision — all versions supported','Implementation, support, customization','Clear upgrade path to BC','24×7 support for existing NAV users']},
  'tab-sol-impl':{t:'Implementation',lvl:'Service',b:['End-to-end delivery for BC, F&O, NAV','On-time, within-budget track record','Training and go-live support included']},
  'tab-sol-custom':{t:'Customization',lvl:'Service',b:['C/AL for NAV, AL extensions for BC','Custom reports, workflows, UI changes','Upgrade-safe architecture every time']},
  'tab-sol-integ':{t:'Integration',lvl:'Service',b:['Shopify, Office 365, banks, logistics','API-first approach with REST/SOAP','Real-time data sync across systems']},
  'tab-sol-support':{t:'Support & Upgrades',lvl:'Service',b:['24×7 helpdesk — all NAV/BC versions','Under 2-hour SLA response time','NAV → BC migration with zero data loss']},
};

/* ── Mega menu logic ── */
const curTab = {sol:'bc'};
let timers = {};

function sp(menu, panel){
  clearTimeout(timers[menu]);
  timers[menu] = setTimeout(function(){
    document.querySelectorAll('#mw-'+menu+' .stab').forEach(function(s){
      s.classList.toggle('active', s.dataset.p===panel && s.dataset.m===menu);
    });
    document.querySelectorAll('#mw-'+menu+' .mpanel').forEach(function(p){
      p.classList.toggle('active', p.id===menu+'-'+panel);
    });
    curTab[menu] = panel;
    pv(menu, 'tab-'+menu+'-'+panel);
  }, 70);
}

function pv(menu, key){
  const d = PV[key];
  const el = document.getElementById('prev-'+menu);
  if(!d || !el) return;
  const parts = key.replace('tab-','').split('-');
  const crumb = parts.slice(0,2).map(function(s){return s.charAt(0).toUpperCase()+s.slice(1);}).join(' › ');
  el.innerHTML='<div class="pv-crumb">'+crumb+'</div><div class="pv-ey">What you get <span class="pv-lvl">'+d.lvl+'</span></div><div class="pv-title">'+d.t+'</div><ul class="pv-list">'+d.b.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul><div class="pv-cta" onclick="document.getElementById(\'contact\').scrollIntoView({behavior:\'smooth\'});closeAll()">Get a free consultation →</div>';
}

function resetPv(menu){
  if(curTab[menu]) pv(menu,'tab-'+menu+'-'+curTab[menu]);
}

/* Position simple dropdowns under their trigger button */
function positionSdrop(id){
  const btn = document.querySelector('#ni-'+id+' .nav-btn');
  const inner = document.getElementById('sdrop-'+id+'-inner');
  if(!btn || !inner) return;
  const rect = btn.getBoundingClientRect();
  const navRect = document.getElementById('navInner').getBoundingClientRect();
  inner.style.paddingLeft = (rect.left - navRect.left) + 'px';
}

function tog(id){
  const isOpen = document.getElementById('ni-'+id).classList.contains('open');
  closeAll();
  if(!isOpen){
    document.getElementById('ni-'+id).classList.add('open');
    positionSdrop(id);
    // set mega-top based on nav bottom
    const navBottom = document.getElementById('mainNav').getBoundingClientRect().bottom;
    document.querySelectorAll('.mega-wrap, .sdrop-wrap').forEach(function(el){
      el.style.top = navBottom + 'px';
    });
  }
}

function closeAll(){
  document.querySelectorAll('.nav-item').forEach(function(n){n.classList.remove('open');});
}

document.addEventListener('click', function(e){
  if(!e.target.closest('.nav-item')) closeAll();
});
document.addEventListener('keydown', function(e){
  if(e.key==='Escape') closeAll();
});
// Update mega-top when page scrolls (sticky nav moves)
window.addEventListener('scroll', function(){
  if(document.querySelector('.nav-item.open')){
    const navBottom = document.getElementById('mainNav').getBoundingClientRect().bottom;
    document.querySelectorAll('.mega-wrap, .sdrop-wrap').forEach(function(el){
      el.style.top = navBottom+'px';
    });
  }
}, {passive:true});

/* ── Page tabs (by platform / by service) ── */
function switchTab(which){
  document.querySelectorAll('.sol-tab').forEach(function(t,i){
    t.classList.toggle('active', (i===0&&which==='platforms')||(i===1&&which==='services'));
  });
  document.getElementById('pane-platforms').classList.toggle('active', which==='platforms');
  document.getElementById('pane-services').classList.toggle('active', which==='services');
}

/* ── SEARCH ── */
/* Index built from the PV data so every service/solution is searchable */
const SEARCH_META = {
  /* platform tags for grouping in results */
  'bc-':'Business Central','fo-':'Dynamics F&O','nav-':'Dynamics NAV',
  'impl-':'Implementation','custom-':'Customization','integ-':'Integration',
  'sup-':'Support','upg-':'Upgrade'
};

function getGroup(key){
  for(const prefix in SEARCH_META){
    if(key.startsWith(prefix)) return SEARCH_META[prefix];
  }
  return 'Solutions & Services';
}

let SEARCH_INDEX = [];
function buildSearchIndex(){
  SEARCH_INDEX = [];
  Object.keys(PV).forEach(function(key){
    if(key.startsWith('tab-')) return; // skip sidebar defaults
    const d = PV[key];
    SEARCH_INDEX.push({
      key: key,
      name: d.t,
      group: getGroup(key),
      lvl: d.lvl,
      bullets: d.b
    });
  });
}

function highlight(text, q){
  if(!q) return text;
  const idx = text.toLowerCase().indexOf(q.toLowerCase());
  if(idx === -1) return text;
  return text.slice(0,idx)+'<span class="sr-highlight">'+text.slice(idx,idx+q.length)+'</span>'+text.slice(idx+q.length);
}

function onSearchInput(v){
  const box = document.getElementById('searchResults');
  const q = v.trim();
  if(!q){ hideSearch(); return; }

  const ql = q.toLowerCase();
  const matches = SEARCH_INDEX.filter(function(x){
    return x.name.toLowerCase().includes(ql) ||
           x.group.toLowerCase().includes(ql) ||
           x.bullets.some(function(b){ return b.toLowerCase().includes(ql); });
  }).slice(0,9);

  if(!matches.length){
    box.innerHTML = '<div class="sr-empty">No results for "<b>'+q+'</b>" — try a shorter term</div>';
  } else {
    let html = '';
    let lastGroup = '';
    matches.forEach(function(m){
      if(m.group !== lastGroup){
        html += '<div class="sr-group">'+m.group+'</div>';
        lastGroup = m.group;
      }
      html += '<div class="sr-item" tabindex="0" role="button"'
        +' onclick="selectResult(\''+m.key+'\')"'
        +' onkeydown="if(event.key===\'Enter\'||event.key===\' \'){selectResult(\''+m.key+'\');}">'
        +'<div class="sr-item-ic"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>'
        +'<div><div>'+highlight(m.name, q)+'</div><div class="sr-item-meta">'+m.lvl+'</div></div>'
        +'</div>';
    });
    box.innerHTML = html;
  }

  // Position results box below the input
  const input = document.getElementById('navSearch');
  const rect = input.getBoundingClientRect();
  box.style.top = (rect.bottom + 6) + 'px';
  box.style.left = Math.min(rect.left, window.innerWidth - 316) + 'px';
  box.classList.add('show');
}

function selectResult(key){
  /* Show preview of the result by injecting into preview and opening sol dropdown */
  hideSearch();
  document.getElementById('navSearch').value = '';
  // Determine which top-level panel this belongs to and activate it
  const panel = key.split('-')[0] === 'fo' ? 'fo'
              : key.split('-')[0] === 'nav' ? 'nav'
              : key.startsWith('impl') || key.startsWith('custom') || key.startsWith('integ') || key.startsWith('sup') || key.startsWith('upg') ? key.split('-')[0]
              : 'bc';

  // Open solutions menu and show the right panel
  const solItem = document.getElementById('ni-sol');
  if(!solItem.classList.contains('open')){
    closeAll();
    solItem.classList.add('open');
    const navBottom = document.getElementById('mainNav').getBoundingClientRect().bottom;
    document.querySelectorAll('.mega-wrap,.sdrop-wrap').forEach(function(el){ el.style.top = navBottom+'px'; });
  }
  // Find a matching panel that exists
  const validPanels = ['bc','fo','nav','impl','custom','integ','support'];
  const targetPanel = validPanels.includes(panel) ? panel : 'bc';
  sp('sol', targetPanel);
  // Show specific item preview after short delay
  setTimeout(function(){ pv('sol', key); }, 120);
}

function hideSearch(){
  const box = document.getElementById('searchResults');
  if(box){ box.classList.remove('show'); box.innerHTML = ''; }
}

document.addEventListener('click', function(e){
  if(!e.target.closest('.search-wrap')) hideSearch();
});

/* Init */
document.getElementById('prev-sol').innerHTML='<div class="pv-idle"><div class="pv-idle-ic"><svg viewBox="0 0 24 24" fill="none" stroke="#0078D4" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div><p>Hover any item to see what\'s included.</p></div>';
buildSearchIndex();
