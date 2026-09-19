/* Shared navigation and learning layout. Existing document routes stay stable. */
const learningTopics = [
  ['dotnet', '.NET & Data', 'API, C#, SQL, Entity Framework và thiết kế hệ thống.'],
  ['cloud', 'Azure Container Apps', 'Triển khai, monitoring và troubleshooting Container Apps.'],
  ['migration', 'Cloud migration · Azure → GCP', 'Nền tảng GCP và kế hoạch migration Maïa.'],
  ['aks', 'Kubernetes & AKS', 'Khái niệm trực quan, roadmap và tài liệu production.'],
  ['network', 'Security & Network', 'Network, server và kiểm tra bảo mật/chất lượng.'],
  ['advisor', 'Architecture review', 'Checklist tư vấn kỹ thuật và chuẩn bị production.']
];
const learningAction = (label, page, id='') => `<button data-go="${page}" data-id="${id}">${label} →</button>`;
const learningCard = (title, description, links) => `<section class="card"><h3>${title}</h3><p>${description}</p><div class="toolbar">${links}</div></section>`;
const learningHeading = title => `<div class="sectionhead"><h2>${title}</h2></div>`;
const previousSectionPage = sectionPage;

function languageOverview(id) {
  const french = id==='french', prefix=french?'fr':'en';
  const groups=[['work','Công việc','Meeting, trao đổi kỹ thuật, manager và presentation.'],['social','Giao tiếp hằng ngày','Lunch, dinner, travel và small talk.'],['vocabulary','Từ vựng','Food, travel và IT theo tình huống.'],['practice','Luyện tập','Daily dialogues và mẫu câu tái sử dụng.']];
  return intro('LANGUAGE / '+id.toUpperCase(),french?'French · A1':'English · Công việc & đời sống','Chọn tình huống → đọc mẫu câu → luyện hội thoại → dùng trong một cuộc trao đổi thật.')+
    learningHeading('Bắt đầu từ đâu')+`<div class="points">`+
    learningCard(french?'Mới bắt đầu học French':'English cho Technical Advisor',french?'Theo lộ trình A1, sau đó mở bài gốc để luyện phát âm.':'Bắt đầu bằng cách giới thiệu vai trò, nêu risk và đưa recommendation.',learningAction(french?'Lộ trình A1':'Vai trò Technical Advisor',french?'french':'doc',french?'':'lang-english-work-technical-advisor'))+
    learningCard('Luyện nói 5–10 phút','Chọn một tình huống, nói theo vai của bạn rồi thay một chi tiết.',learningAction('Mở hội thoại','conversations',french?'fr-work':'ta'))+`</div>`+
    learningHeading('Học theo tình huống')+`<div class="grid">`+groups.map(([group,title,desc])=>learningCard(title,desc,learningAction('Mở nhóm','language-library',prefix+'-'+group))).join('')+`</div>`+
    learningHeading('Tra cứu sâu')+`<div class="toolbar">`+(french?learningAction('19 bài gốc','french-source'):learningAction('Playbooks & reference','language-library','en-reference')+learningAction('Nghe & mẫu câu ngắn','english')+learningAction('Mẫu Teams & email','templates'))+`</div>`+footer();
}

sectionPage = function(id) {
  if(id==='english'||id==='french')return languageOverview(id);
  if(id==='core')return home();
  return previousSectionPage(id);
};

home = function() {
  if(PORTAL_KIND==='language')return intro('LANGUAGE','Học ngôn ngữ theo nhu cầu','Chọn ngôn ngữ, sau đó chọn tình huống bạn cần dùng hôm nay.')+
    `<div class="points">`+learningCard('English','Giao tiếp công việc, technical review và đời sống hằng ngày.',learningAction('Học English','section','english'))+learningCard('French · A1','Xây nền tảng và luyện các cuộc trao đổi ngắn.',learningAction('Học French','section','french'))+`</div>`+
    learningHeading('Cần dùng ngay')+`<div class="points">`+learningCard('Chuẩn bị cuộc họp','Mẫu câu mở đầu, làm rõ yêu cầu và chốt bước tiếp theo.',learningAction('English','doc','lang-english-work-meetings')+learningAction('French','doc','lang-french-work-meetings'))+learningCard('Nói chuyện với đồng nghiệp','Luyện small talk và giao tiếp trong bữa trưa.',learningAction('English · Social','language-library','en-social')+learningAction('French · Social','language-library','fr-social'))+`</div>`+footer();
  if(PORTAL_KIND==='work')return intro('WORK','Vận hành & cập nhật kiến thức','Chọn hướng dẫn xử lý khi cần, hoặc dành thời gian đọc và đánh giá ý tưởng mới.')+`<div class="points">`+
    learningCard('Monitoring & incident','Dashboard, alerts, logs, metrics và traces theo impact nghiệp vụ.',learningAction('Hướng dẫn xử lý','doc','monitoring-guide')+learningAction('Runbook liên quan','section','monitoring'))+
    learningCard('Tips & bài đọc mới','Đọc tóm tắt, xem câu hỏi review và đối chiếu bài gốc.',learningAction('Feed & archive','tips'))+`</div>`+
    learningHeading('Nhịp học & làm việc')+`<div class="points">`+learningCard('Khi có sự cố','Xác nhận impact → thu thập evidence → kiểm tra thay đổi gần nhất.',learningAction('Mở checklist monitoring','doc','monitoring-guide'))+learningCard('Mỗi tuần · 15 phút','Chọn một bài, ghi một điều có thể áp dụng và một câu hỏi cần kiểm chứng.',learningAction('Chọn bài đọc','tips'))+`</div>`+footer();
  return intro('CORE KNOWLEDGE','Tra cứu kỹ thuật & học theo chủ đề','Chọn mục tiêu trước, hoặc mở thẳng chủ đề cần tra cứu.')+
    learningHeading('Bắt đầu từ đâu')+`<div class="points">`+learningCard('Review một giải pháp','Dùng checklist để kiểm tra boundary, risk, observability và rollback.',learningAction('Checklist Technical Advisor','doc','ta-review'))+learningCard('Học Kubernetes từ nền tảng','Xem mô phỏng trước, sau đó theo roadmap và đọc tài liệu production.',learningAction('10 khái niệm trực quan','concepts')+learningAction('Roadmap AKS','doc','aks'))+`</div>`+
    learningHeading('Tra cứu theo chủ đề')+`<div class="grid">`+learningTopics.map(([id,title,desc])=>learningCard(title,desc,learningAction('Mở chủ đề','category',id))).join('')+`</div>`+footer();
};

nav = function() {
  const item=(label,page,id='')=>navItem(label,'',page,id);
  let contents='';
  if(PORTAL_KIND==='knowledge')contents=learningTopics.map(([id,title])=>item(title,'category',id)).join('')+item('10 Concepts · Animation','concepts');
  if(PORTAL_KIND==='work')contents=item('Monitoring & runbooks','section','monitoring')+item('Tips · Feed & archive','tips');
  if(PORTAL_KIND==='language')contents=['english','french'].map(lang=>{
    const prefix=lang==='english'?'en':'fr';
    const doc=DB.docs.find(d=>d.id===current.id);
    const active=current.page==='section'&&current.id===lang||doc?.section===lang||current.page==='language-library'&&current.id.startsWith(prefix+'-');
    return branch('learn-'+lang,lang==='english'?'English':'French · A1',lang==='english'?'Aa':'Fr',active,
      item('Bắt đầu & lộ trình','section',lang)+[['work','Công việc'],['social','Giao tiếp hằng ngày'],['vocabulary','Từ vựng'],['practice','Luyện tập']].map(([id,title])=>item(title,'language-library',prefix+'-'+id)).join('')+
      (lang==='english'?item('Playbooks & reference','language-library','en-reference'):item('19 bài gốc','french-source')));
  }).join('')+item('Hội thoại · Role play','conversations','all')+item('English · Phrase bank','english');
  const savedCount=DB.docs.filter(d=>saved.includes('doc:'+d.id)).length+allPhrases.filter(p=>saved.includes('phrase:'+p.id)).length+DB.language.conversations.filter(d=>saved.includes('dialogue:'+d.id)).length;
  $('#nav').innerHTML=item('Bắt đầu tại đây','home')+'<div class="navgroup">'+(PORTAL_KIND==='language'?'Chọn ngôn ngữ':'Chủ đề')+'</div>'+contents+'<div class="navgroup">Tra cứu</div>'+item('Thư viện tài liệu','library')+navItem('Đã lưu','☆','saved','',savedCount)+item('Nguồn & ghi chú','sources')+'<div class="navgroup">Không gian khác</div>'+[['knowledge','Kỹ thuật','index.html'],['language','Ngôn ngữ','language.html'],['work','Vận hành & Tips','work.html']].filter(([id])=>id!==PORTAL_KIND).map(([,title,file])=>`<a class="navitem" href="./${file}">${title} ↗</a>`).join('');
  $('#nav').querySelectorAll('[data-branch]').forEach(el=>el.addEventListener('toggle',()=>{menuState[el.dataset.branch]=el.open;try{localStorage.setItem('ta-knowledge-menu-v4',JSON.stringify(menuState))}catch{}}));
};

library = function() {
  let groups;
  if(PORTAL_KIND==='knowledge')groups=learningTopics.map(([id,title])=>[title,DB.docs.filter(d=>d.cat===id)]);
  else if(PORTAL_KIND==='language')groups=['english','french'].flatMap(lang=>['work','social','vocabulary','practice','reference','instructions'].map(group=>[`${lang==='english'?'English':'French'} · ${{work:'Công việc',social:'Giao tiếp hằng ngày',vocabulary:'Từ vựng',practice:'Luyện tập',reference:'Tài liệu tham khảo',instructions:'Hướng dẫn học'}[group]}`,DB.docs.filter(d=>d.section===lang&&(d.languageGroup||'reference')===group)]));
  else groups=visibleGroups().map(g=>[g.name,DB.docs.filter(d=>d.section===g.id)]);
  return intro('LIBRARY','Thư viện tài liệu','Tìm theo nhóm bên dưới hoặc dùng ô tìm kiếm. Bấm ngôi sao để lưu tài liệu thường dùng.')+groups.filter(([,docs])=>docs.length).map(([title,docs])=>`<details class="card" style="margin-bottom:12px" open><summary style="cursor:pointer;font-weight:600">${title} · ${docs.length} tài liệu</summary><div class="doclist" style="margin-top:14px">${docs.map(docrow).join('')}</div></details>`).join('')+footer();
};
