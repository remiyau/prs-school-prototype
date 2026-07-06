// ===== SAMPLE DATA =====

const localSchools = [
  { id: 'SCH001', name: 'YONG LOO LIN SCHOOL OF MEDICINE', uen: 'UEN123456', address: '10 Medical Dr, Singapore 117597', email: 'contact@hosp001.edu', status: 'Active', lastUpdated: '05/09/2026', type: 'local' },
  { id: 'SCH002', name: 'LEE KONG CHIAN SCHOOL OF MEDICINE', uen: 'UEN654321', address: '11 Mandalay Rd, Singapore 308232', email: 'contact@hosp002.edu', status: 'Inactive', lastUpdated: '26/08/2026', type: 'local' },
  { id: 'SCH003', name: 'DUKE-NUS MEDICAL SCHOOL', uen: 'UEN789012', address: '10 Dover Drive, Singapore 139651', email: 'contact@hosp003.edu', status: 'Active', lastUpdated: '18/09/2026', type: 'local' },
  { id: 'SCH004', name: 'ALICE LEE CENTRE FOR NURSING STUDIES', uen: 'UEN345678', address: '81 Victoria St, Singapore 188065', email: 'contact@hosp004.edu', status: 'Inactive', lastUpdated: '11/09/2026', type: 'local' },
  { id: 'SCH005', name: 'SINGAPORE UNIVERSITY OF SOCIAL SCIENCES', uen: 'UEN901234', address: '1 Jalan Bukit Merah, Singapore 150001', email: 'contact@hosp005.edu', status: 'Active', lastUpdated: '19/09/2026', type: 'local' },
  { id: 'SCH006', name: 'SAW SWEE HOCK SCHOOL OF PUBLIC HEALTH', uen: 'UEN567890', address: '1 Kreta Ayer Rd, Singapore 088628', email: 'contact@hosp006.edu', status: 'Inactive', lastUpdated: '19/09/2026', type: 'local' },
  { id: 'SCH007', name: 'SINGHEALTH ACADEMY', uen: 'UEN234567', address: '1 Buangkok Green, Singapore 539747', email: 'contactsinghealth@hosp07.edu', status: 'Active', lastUpdated: '19/09/2026', type: 'local' },
  { id: 'SCH008', name: 'NATIONAL HEALTHCARE GROUP (NHG) COLLEGE', uen: 'UEN890123', address: '12 Canning Rise, Singapore 179861', email: 'contact@hosp008.edu', status: 'Active', lastUpdated: '19/09/2026', type: 'local' },
  { id: 'SCH009', name: 'MANAGEMENT DEVELOPMENT INSTITUTE OF SINGAPORE', uen: 'UEN456789', address: '2 College Road, Singapore 169850', email: 'contact@hosp009.edu', status: 'Active', lastUpdated: '19/09/2026', type: 'local' },
  { id: 'SCH010', name: 'KAPLAN SINGAPORE', uen: 'UEN123789', address: '319 Jalan Bukit Merah, Singapore 159459', email: 'contact@hosp010.edu', status: 'Inactive', lastUpdated: '19/09/2026', type: 'local' },
  { id: 'SCH011', name: 'SINGAPORE INSTITUTE OF TECHNOLOGY', uen: 'UEN987654', address: '11 Mandalay Rd, Singapore 308207', email: 'contact@hosp011.edu', status: 'Active', lastUpdated: '05/09/2026', type: 'local' },
  { id: 'SCH012', name: 'NANYANG POLYTECHNIC', uen: 'UEN321456', address: '1 Upper Aljunied Link, Singapore 367901', email: 'contact@hosp012.edu', status: 'Active', lastUpdated: '26/08/2026', type: 'local' },
  { id: 'SCH013', name: 'NGEE ANN POLYTECHNIC', uen: 'UEN654987', address: '50 Nanyang Ave, Singapore 639798', email: 'contact@hosp013.edu', status: 'Active', lastUpdated: '18/09/2026', type: 'local' },
  { id: 'SCH014', name: 'REPUBLIC POLYTECHNIC', uen: 'UEN789654', address: '553 Serangoon Rd, Singapore 218187', email: 'contact@hosp014.edu', status: 'Active', lastUpdated: '19/09/2026', type: 'local' },
  { id: 'SCH015', name: 'SINGAPORE ANESTHESIA TRAINING', uen: 'UEN456123', address: '30 Pasir Panjang Rd, Singapore 117440', email: 'contact@hosp015.edu', status: 'Active', lastUpdated: '11/09/2026', type: 'local' },
  { id: 'SCH016', name: 'SINGAPORE COLLEGE OF OBSTETRICIANS AND GYNAECOLOGISTS', uen: 'UEN321789', address: '8 Sim Drive, Singapore 387384', email: 'contact@hosp016.edu', status: 'Inactive', lastUpdated: '19/09/2026', type: 'local' },
  { id: 'SCH017', name: 'SINGAPORE COLLEGE OF PHYSICIANS', uen: 'UEN987321', address: '21 Yishun Industrial Park, Singapore 768735', email: 'contact@hosp017.edu', status: 'Inactive', lastUpdated: '19/09/2026', type: 'local' },
  { id: 'SCH018', name: 'SINGAPORE ACADEMY OF MEDICINE', uen: 'UEN654321', address: '10 Nanyang Crescent, Singapore 636923', email: 'contact@hosp018.edu', status: 'Inactive', lastUpdated: '19/09/2026', type: 'local' },
  { id: 'SCH019', name: 'SINGAPORE MEDICAL SCHOOL', uen: 'UEN123987', address: '1 Bukit Batok St 21, Singapore 659559', email: 'contact@hosp019.edu', status: 'Active', lastUpdated: '19/09/2026', type: 'local' },
  { id: 'SCH020', name: 'SINGAPORE CLINICAL TRAINING CENTRE', uen: 'UEN789321', address: '1 Singapore General Hospital, 168908', email: 'contact@hosp020.edu', status: 'Active', lastUpdated: '19/09/2026', type: 'local' },
  { id: 'SCH021', name: 'TEMASEK POLYTECHNIC', uen: 'UEN111222', address: '21 Tampines Ave 1, Singapore 529757', email: 'contact@hosp021.edu', status: 'Active', lastUpdated: '15/09/2026', type: 'local' },
  { id: 'SCH022', name: 'SINGAPORE POLYTECHNIC', uen: 'UEN333444', address: '500 Dover Rd, Singapore 139651', email: 'contact@hosp022.edu', status: 'Active', lastUpdated: '10/09/2026', type: 'local' },
  { id: 'SCH023', name: 'ITE COLLEGE CENTRAL', uen: 'UEN555666', address: '2 Ang Mo Kio Drive, Singapore 567720', email: 'contact@hosp023.edu', status: 'Active', lastUpdated: '08/09/2026', type: 'local' },
  { id: 'SCH024', name: 'JAMES COOK UNIVERSITY SINGAPORE', uen: 'UEN777888', address: '149 Sims Drive, Singapore 387380', email: 'contact@hosp024.edu', status: 'Inactive', lastUpdated: '01/09/2026', type: 'local' },
  { id: 'SCH025', name: 'CURTIN SINGAPORE', uen: 'UEN999000', address: '10 Science Park Rd, Singapore 117684', email: 'contact@hosp025.edu', status: 'Active', lastUpdated: '20/08/2026', type: 'local' },
];

const foreignSchools = [
  { id: 'SCH101', name: 'UNIVERSITY OF MELBOURNE', country: 'Australia', address: 'Grattan St, Parkville VIC 3010', email: 'admissions@unimelb.edu.au', status: 'Active', lastUpdated: '05/09/2026', type: 'foreign' },
  { id: 'SCH102', name: 'UNIVERSITY OF OXFORD', country: 'United Kingdom', address: 'Wellington Square, Oxford OX1 2JD', email: 'admissions@ox.ac.uk', status: 'Active', lastUpdated: '22/08/2026', type: 'foreign' },
  { id: 'SCH103', name: 'JOHNS HOPKINS UNIVERSITY', country: 'United States', address: '3400 N Charles St, Baltimore, MD 21218', email: 'admissions@jhu.edu', status: 'Active', lastUpdated: '10/09/2026', type: 'foreign' },
  { id: 'SCH104', name: 'UNIVERSITY OF TOKYO', country: 'Japan', address: '7-3-1 Hongo, Bunkyo-ku, Tokyo 113-8654', email: 'admissions@u-tokyo.ac.jp', status: 'Active', lastUpdated: '28/08/2026', type: 'foreign' },
  { id: 'SCH105', name: 'KAROLINSKA INSTITUTE', country: 'Sweden', address: 'Nobels vag 5, 171 77 Solna', email: 'registrar@ki.se', status: 'Active', lastUpdated: '15/09/2026', type: 'foreign' },
  { id: 'SCH106', name: 'UNIVERSITY OF CAPE TOWN', country: 'South Africa', address: 'Rondebosch, Cape Town, 7700', email: 'admissions@uct.ac.za', status: 'Inactive', lastUpdated: '20/07/2026', type: 'foreign' },
  { id: 'SCH107', name: 'UNIVERSITY OF EDINBURGH', country: 'United Kingdom', address: 'Old College, South Bridge, Edinburgh EH8 9YL', email: 'admissions@ed.ac.uk', status: 'Active', lastUpdated: '18/09/2026', type: 'foreign' },
  { id: 'SCH108', name: 'MCGILL UNIVERSITY', country: 'Canada', address: '845 Sherbrooke St W, Montreal, QC H3A 0G4', email: 'admissions@mcgill.ca', status: 'Active', lastUpdated: '12/09/2026', type: 'foreign' },
  { id: 'SCH109', name: 'UNIVERSITY OF HONG KONG', country: 'Hong Kong', address: 'Pokfulam Road, Hong Kong', email: 'admissions@hku.hk', status: 'Active', lastUpdated: '14/09/2026', type: 'foreign' },
  { id: 'SCH110', name: 'MONASH UNIVERSITY', country: 'Australia', address: 'Wellington Rd, Clayton VIC 3800', email: 'admissions@monash.edu', status: 'Active', lastUpdated: '11/09/2026', type: 'foreign' },
  { id: 'SCH111', name: 'KING\'S COLLEGE LONDON', country: 'United Kingdom', address: 'Strand, London WC2R 2LS', email: 'admissions@kcl.ac.uk', status: 'Inactive', lastUpdated: '05/08/2026', type: 'foreign' },
  { id: 'SCH112', name: 'NATIONAL UNIVERSITY OF IRELAND', country: 'Ireland', address: 'University Road, Galway, H91 TK33', email: 'admissions@nuigalway.ie', status: 'Active', lastUpdated: '19/09/2026', type: 'foreign' },
];

const qualificationsData = [
  { name: 'Bachelor of Nursing', type: 'Postgraduate', regType: 'Specialist', register: 'Medical Practitioner', duration: '5 years', lastUpdated: '26/02/2025' },
  { name: 'Master of Nursing', type: 'Graduate Degree', regType: 'Full', register: 'Registered Nurse', duration: '4 years', lastUpdated: '26/02/2025' },
  { name: 'Advanced Diploma in Nursing', type: 'Polytechnic Diploma', regType: 'Provisional', register: 'Registered Nurse', duration: '3 years', lastUpdated: '26/02/2025' },
  { name: 'Diploma in Health Sciences', type: 'Vocational (ITE)', regType: 'Provisional', register: 'Family Physician', duration: '3 years', lastUpdated: '26/02/2025' },
  { name: 'Bachelor of Science in Pharmacy', type: 'Undergraduate Degree', regType: 'Specialist', register: 'Pharmacist', duration: '5 years', lastUpdated: '26/02/2025' },
  { name: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)', type: 'Postgraduate', regType: 'Specialist', register: 'Specialist', duration: '5 years', lastUpdated: '26/02/2025' },
  { name: 'Master of Public Health', type: 'Graduate Degree', regType: 'Full', register: 'Medical Practitioner', duration: '4 years', lastUpdated: '26/02/2025' },
  { name: 'Diploma in Occupational Therapy', type: 'Polytechnic Diploma', regType: 'Provisional', register: 'Therapist', duration: '3 years', lastUpdated: '26/02/2025' },
  { name: 'Bachelor of Physiotherapy', type: 'Undergraduate Degree', regType: 'Specialist', register: 'Therapist', duration: '5 years', lastUpdated: '26/02/2025' },
  { name: 'Graduate Diploma in Nursing (Advanced Practice)', type: 'Vocational (ITE)', regType: 'Provisional', register: 'Medical Practitioner', duration: '3 years', lastUpdated: '26/02/2025' },
  { name: 'Master of Medicine (Internal Medicine)', type: 'Postgraduate', regType: 'Specialist', register: 'Specialist', duration: '5 years', lastUpdated: '26/02/2025' },
  { name: 'Bachelor of Dental Surgery', type: 'Undergraduate Degree', regType: 'Full', register: 'Medical Practitioner', duration: '4 years', lastUpdated: '26/02/2025' },
  { name: 'Diploma in Pharmacy', type: 'Polytechnic Diploma', regType: 'Provisional', register: 'Pharmacist', duration: '3 years', lastUpdated: '26/02/2025' },
  { name: 'Graduate Diploma in Family Medicine', type: 'Graduate Degree', regType: 'Full', register: 'Family Physician', duration: '2 years', lastUpdated: '26/02/2025' },
  { name: 'Certificate in Midwifery', type: 'Vocational (ITE)', regType: 'Provisional', register: 'Registered Nurse', duration: '1 years', lastUpdated: '26/02/2025' },
];

const nameHistory = [
  { date: '21/04/2016', updatedBy: 'TAN AH KOW JASON', name: 'YONG LOO LIN SCHOOL OF MEDICINE', status: 'Current' },
  { date: '21/04/2010', updatedBy: 'SITI AMIRA BINTE ABDULLAH', name: 'YONG LOO LIN SCHOOL', status: 'Invalid' },
];

const uenHistory = [
  { date: '11/05/2012', updatedBy: 'ANG CHONG LYE', uen: '198703907Z', entityName: 'YONG LOO LIN SCHOOL OF MEDICINE', entityType: 'Private Limited Company', remarks: '-' },
  { date: '11/05/2000', updatedBy: 'TAN AH KOW JASON', uen: '198703907Z', entityName: 'YONG LOO LIN SCHOOL OF MEDICINE', entityType: 'Private Limited Company', remarks: '-' },
];

const addressHistory = [
  { date: '19/10/2025', issuedBy: 'MOH', type: 'Registered Office Address', address: '10 Medical Dr, Singapore 117597', status: 'Current' },
  { date: '27/08/2020', issuedBy: 'MOH', type: 'Registered Office Address', address: 'Outram Road, Singapore 169608', status: 'Invalid' },
];

const auditLog = [
  { action: 'Update foreign address', updatedBy: 'Rajesh Kumar', timestamp: '10/02/2026 02:55PM', field: 'Application > Biodata > Foreign address', prevValue: '123 Jalan Merdeka, 31400 Ipoh, Malaysia', newValue: '123 Riverside Drive, Johor Bahru, Malaysia' },
  { action: 'Change supervisor', updatedBy: 'Emily Tan', timestamp: '09/01/2026 01:45 PM', field: 'Application > Biodata > Supervisor', prevValue: 'TEO JIANG HAO ANDREW', newValue: 'KWEK JUN HONG KEVIN' },
  { action: 'Update mobile no.', updatedBy: 'Simon Lee', timestamp: '13/10/2025 10:30 AM', field: 'Application > Biodata > Mobile no.', prevValue: '+62 87654321', newValue: '+65 12345678' },
  { action: 'Update personal email address', updatedBy: 'Aisha Rahman', timestamp: '12/10/2025 11:15 AM', field: 'Application > Biodata > Personal email address', prevValue: 'leelaif@yahoo.com', newValue: 'moh_prs_support@csc.com' },
  { action: 'Change employer', updatedBy: 'Sarah Chua', timestamp: '07/10/2025 09:00 AM', field: 'Application > Biodata > Employer', prevValue: 'GLENEAGLES HOSPITAL', newValue: 'RAFFLES HOSPITAL' },
  { action: 'Renewed registration', updatedBy: 'Kevin Tan', timestamp: '06/10/2025 02:45 PM', field: 'Application > Registration', prevValue: 'Advanced practice nurse', newValue: 'Advanced practice nurse' },
  { action: 'Update preferred mailing address', updatedBy: 'Michelle Ong', timestamp: '05/10/2025 08:00 AM', field: 'Application > Biodata > Preferred mailing address', prevValue: '123 Serangoon Road, Singapore 123456', newValue: '123 Orchard Road, Singapore 238888' },
  { action: 'Added additional qualification', updatedBy: 'Benjamin Ho', timestamp: '04/10/2025 09:00 AM', field: 'School details > Additional qualification', prevValue: '-', newValue: 'TCM Post Basic' },
  { action: 'Change supervisor', updatedBy: 'Clara Ng', timestamp: '03/10/2025 02:45 PM', field: 'Application > Biodata > Supervisor', prevValue: 'AZRUL BIN HUSSAIN', newValue: 'TEO JIANG HAO ANDREW' },
  { action: 'Update mobile no.', updatedBy: 'Peter Yeo', timestamp: '02/10/2025 08:00 AM', field: 'Application > Biodata > Mobile no.', prevValue: '+62 88880000', newValue: '+62 87654321' },
  { action: 'Update local address', updatedBy: 'Jane Lim', timestamp: '01/10/2025 03:30 PM', field: 'Application > Biodata > Local address', prevValue: '10 Ang Mo Kio Ave 5, Singapore 569851', newValue: '25 Toa Payoh Lorong 1, Singapore 319757' },
  { action: 'Change employer', updatedBy: 'David Ng', timestamp: '28/09/2025 10:00 AM', field: 'Application > Biodata > Employer', prevValue: 'TAN TOCK SENG HOSPITAL', newValue: 'GLENEAGLES HOSPITAL' },
  { action: 'Update personal email address', updatedBy: 'Rachel Koh', timestamp: '25/09/2025 04:15 PM', field: 'Application > Biodata > Personal email address', prevValue: 'rachel.old@gmail.com', newValue: 'leelaif@yahoo.com' },
  { action: 'Added additional qualification', updatedBy: 'John Tan', timestamp: '20/09/2025 11:00 AM', field: 'School details > Additional qualification', prevValue: '-', newValue: 'Master of Nursing' },
  { action: 'Update mobile no.', updatedBy: 'Wei Lin', timestamp: '15/09/2025 09:45 AM', field: 'Application > Biodata > Mobile no.', prevValue: '+65 91234567', newValue: '+62 88880000' },
];

const workflowHistory = [
  { text: '<strong>Aisha Lim</strong> activated this school with an <span class="status-link">Active</span> status.', date: '26 Feb 2025 10:00AM', active: true },
  { text: '<strong>Aisha Lim</strong> added this foreign school.', date: '1 Jan 2020 10:30AM', active: false },
];

// ===== LOAD PERSISTED DATA =====
(function() {
  const saved = localStorage.getItem('prs_schools_data');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      if (data.localSchools) { localSchools.length = 0; data.localSchools.forEach(s => localSchools.push(s)); }
      if (data.foreignSchools) { foreignSchools.length = 0; data.foreignSchools.forEach(s => foreignSchools.push(s)); }
    } catch(e) {}
  }
  const savedQuals = localStorage.getItem('prs_qualifications');
  if (savedQuals) {
    try {
      const data = JSON.parse(savedQuals);
      qualificationsData.length = 0;
      data.forEach(q => qualificationsData.push(q));
    } catch(e) {}
  }
})();

// ===== UTILITIES: SORT =====
function parseDate(str) {
  if (!str) return 0;
  const parts = str.split('/');
  if (parts.length === 3) return new Date(parts[2], parts[1] - 1, parts[0]).getTime();
  return 0;
}

function parseTimestamp(str) {
  if (!str) return 0;
  const match = str.match(/(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})\s*(AM|PM)?/i);
  if (!match) return 0;
  let [, d, m, y, h, min, ampm] = match;
  h = parseInt(h);
  if (ampm && ampm.toUpperCase() === 'PM' && h < 12) h += 12;
  if (ampm && ampm.toUpperCase() === 'AM' && h === 12) h = 0;
  return new Date(y, m - 1, d, h, parseInt(min)).getTime();
}

let dashboardSortDir = null;

// ===== CONSTANTS =====
const PAGE_SIZE = 20;

// ===== DASHBOARD PAGE =====

function initDashboard() {
  const tbody = document.getElementById('schools-body');
  if (!tbody) return;

  const params = new URLSearchParams(window.location.search);
  const tab = params.get('tab') || 'local';

  let currentData;
  if (tab === 'foreign') {
    document.getElementById('nav-local').classList.remove('nav-sub-item--active');
    document.getElementById('nav-foreign').classList.add('nav-sub-item--active');
    document.getElementById('page-title').textContent = 'Foreign schools';
    document.getElementById('col-secondary').textContent = 'Country';
    currentData = [...foreignSchools];
  } else {
    currentData = [...localSchools];
  }
  renderTable(currentData, 1);

  const colUpdated = document.getElementById('col-updated');
  if (colUpdated) {
    colUpdated.addEventListener('click', () => {
      dashboardSortDir = dashboardSortDir === 'asc' ? 'desc' : 'asc';
      currentData.sort((a, b) => {
        const diff = parseDate(a.lastUpdated) - parseDate(b.lastUpdated);
        return dashboardSortDir === 'asc' ? diff : -diff;
      });
      colUpdated.querySelector('.sort-icon').textContent = dashboardSortDir === 'asc' ? '↑' : '↓';
      renderTable(currentData, 1);
    });
  }

  const searchInput = document.getElementById('dashboard-search');
  const searchBtn = document.getElementById('dashboard-search-btn');

  function doSearch() {
    const query = searchInput.value.toUpperCase().trim();
    const data = tab === 'foreign' ? foreignSchools : localSchools;
    const filtered = data.filter(s => s.name.includes(query));
    renderTable(filtered, 1);
  }

  searchBtn.addEventListener('click', doSearch);
  searchInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') doSearch(); });

  document.getElementById('btn-add-school').addEventListener('click', () => {
    document.getElementById('add-school-overlay').classList.add('modal-overlay--active');
  });

  // Add school modal
  const addOverlay = document.getElementById('add-school-overlay');
  if (addOverlay) {
    document.getElementById('add-school-cancel').addEventListener('click', () => {
      addOverlay.classList.remove('modal-overlay--active');
    });
    document.getElementById('add-school-confirm').addEventListener('click', () => {
      const name = document.getElementById('add-school-name').value.trim();
      const uen = document.getElementById('add-school-uen').value.trim();
      const status = document.getElementById('add-school-status').value;
      if (!name || !uen || !status) { alert('Please fill in all required fields'); return; }

      const today = new Date();
      const lastUpdated = today.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
      const newSchool = {
        id: 'SCH' + String(localSchools.length + foreignSchools.length + 1).padStart(3, '0'),
        name: name.toUpperCase(),
        uen: uen,
        address: '-',
        email: '-',
        status: status,
        lastUpdated: lastUpdated,
        type: tab
      };

      if (tab === 'foreign') {
        newSchool.country = '-';
        foreignSchools.unshift(newSchool);
      } else {
        localSchools.unshift(newSchool);
      }

      currentData.unshift(newSchool);
      localStorage.setItem('prs_schools_data', JSON.stringify({ localSchools, foreignSchools }));
      renderTable(currentData, 1);
      addOverlay.classList.remove('modal-overlay--active');
      document.getElementById('add-school-name').value = '';
      document.getElementById('add-school-uen').value = '';
      document.getElementById('add-school-status').value = '';
    });

    // Name suggestions
    const nameInput = document.getElementById('add-school-name');
    const dropdown = document.getElementById('add-school-suggestions');
    if (nameInput) {
      nameInput.addEventListener('input', () => {
        const val = nameInput.value.toLowerCase();
        if (val.length < 2) { dropdown.classList.remove('suggestions-dropdown--active'); return; }
        const matches = localSchools.filter(s => s.name.toLowerCase().includes(val)).slice(0, 3);
        let html = matches.map(m => `<div class="suggestion-item"><span>${titleCase(m.name)}</span><span class="existing-badge">Existing</span></div>`).join('');
        html += `<div class="suggestion-create">+ Create "${nameInput.value}"</div>`;
        dropdown.innerHTML = html;
        dropdown.classList.add('suggestions-dropdown--active');

        dropdown.querySelectorAll('.suggestion-item').forEach(item => {
          item.addEventListener('click', () => {
            nameInput.value = item.querySelector('span').textContent;
            dropdown.classList.remove('suggestions-dropdown--active');
          });
        });
        dropdown.querySelector('.suggestion-create').addEventListener('click', () => {
          dropdown.classList.remove('suggestions-dropdown--active');
        });
      });
      nameInput.addEventListener('blur', () => {
        setTimeout(() => dropdown.classList.remove('suggestions-dropdown--active'), 200);
      });
    }
  }
}

function renderTable(data, page) {
  const tbody = document.getElementById('schools-body');
  const totalPages = Math.ceil(data.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const pageData = data.slice(start, start + PAGE_SIZE);

  const params = new URLSearchParams(window.location.search);
  const tab = params.get('tab') || 'local';
  const isLocal = tab !== 'foreign';

  tbody.innerHTML = pageData.map(school => `
    <tr onclick="navigateToProfile('${school.id}')">
      <td><a class="cell-link" href="profile.html?id=${school.id}">${school.name}</a></td>
      <td>${isLocal ? school.uen : school.country}</td>
      <td>${school.address}</td>
      <td>${school.email}</td>
      <td><span class="badge badge-${school.status.toLowerCase()}">${school.status}</span></td>
      <td>${school.lastUpdated}</td>
    </tr>
  `).join('');

  document.getElementById('table-info').textContent = `Showing ${pageData.length} out of ${data.length} schools`;

  const paginationNav = document.getElementById('pagination');
  let paginationHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    paginationHTML += `<button class="page-btn ${i === page ? 'page-btn--active' : ''}" data-page="${i}">${i}</button>`;
  }
  if (totalPages > 3) {
    paginationHTML = '';
    for (let i = 1; i <= Math.min(totalPages, 2); i++) {
      paginationHTML += `<button class="page-btn ${i === page ? 'page-btn--active' : ''}" data-page="${i}">${i}</button>`;
    }
    paginationHTML += `<span style="padding: 0 4px; color: var(--text-muted);">...</span>`;
  }
  if (page < totalPages) {
    paginationHTML += `<button class="page-btn-text" data-page="${page + 1}">Next &#8250;</button>`;
  }
  paginationNav.innerHTML = paginationHTML;

  paginationNav.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', () => renderTable(data, parseInt(btn.dataset.page)));
  });
}

function navigateToProfile(id) {
  window.location.href = `profile.html?id=${id}`;
}

// ===== PROFILE PAGE =====

function initProfile() {
  const profileName = document.getElementById('profile-name');
  if (!profileName) return;

  const params = new URLSearchParams(window.location.search);
  const schoolId = params.get('id') || 'SCH001';

  const allSchools = [...localSchools, ...foreignSchools];
  const school = allSchools.find(s => s.id === schoolId) || allSchools[0];

  // Header
  profileName.textContent = school.name;
  document.getElementById('breadcrumb-name').textContent = titleCase(school.name);
  document.getElementById('breadcrumb-root').textContent = school.type === 'local' ? 'Local' : 'Foreign';
  document.getElementById('breadcrumb-root').href = school.type === 'local' ? 'index.html' : 'index.html?tab=foreign';
  document.getElementById('profile-status').textContent = school.status;
  document.getElementById('profile-status').className = `badge badge-${school.status.toLowerCase()}`;

  // Deactivate/Activate button
  const deactivateBtn = document.getElementById('btn-deactivate');
  if (school.status === 'Active') {
    deactivateBtn.textContent = 'Deactivate school';
  } else {
    deactivateBtn.textContent = 'Activate school';
    deactivateBtn.className = 'btn btn-primary';
  }

  deactivateBtn.addEventListener('click', () => {
    const isActive = school.status === 'Active';
    document.getElementById('modal-title').textContent = isActive ? `Deactivate ${titleCase(school.name)}` : `Activate ${titleCase(school.name)}`;
    document.getElementById('modal-body').innerHTML = isActive
      ? `You are about to deactivate <strong>${titleCase(school.name)}</strong>. HCPs will no longer be able to select this school.`
      : `You are about to activate <strong>${titleCase(school.name)}</strong>. HCPs can now choose to select this school.`;
    document.getElementById('modal-confirm').textContent = isActive ? 'Deactivate' : 'Activate';
    document.getElementById('modal-overlay').classList.add('modal-overlay--active');
  });

  document.getElementById('modal-cancel').addEventListener('click', () => {
    document.getElementById('modal-overlay').classList.remove('modal-overlay--active');
  });

  document.getElementById('modal-confirm').addEventListener('click', () => {
    const isActive = school.status === 'Active';
    school.status = isActive ? 'Inactive' : 'Active';
    document.getElementById('profile-status').textContent = school.status;
    document.getElementById('profile-status').className = `badge badge-${school.status.toLowerCase()}`;
    deactivateBtn.textContent = isActive ? 'Activate school' : 'Deactivate school';
    deactivateBtn.className = isActive ? 'btn btn-primary' : 'btn btn-danger';
    document.getElementById('modal-overlay').classList.remove('modal-overlay--active');
  });

  // Sidebar active state
  if (school.type === 'foreign') {
    document.getElementById('nav-local').classList.remove('nav-sub-item--active');
    document.getElementById('nav-foreign').classList.add('nav-sub-item--active');
  }

  // Particulars card
  const isLocal = school.type === 'local';
  const card = document.getElementById('particulars-card');
  card.innerHTML = `
    <div class="particulars-row">
      <span class="particulars-label">UEN no.</span>
      <span class="particulars-value">${school.uen || '-'}</span>
    </div>
    <div class="particulars-row">
      <span class="particulars-label">Address</span>
      <span class="particulars-value">${school.address} <button class="copy-btn" title="Copy">&#128203;</button></span>
    </div>
    <div class="particulars-row">
      <span class="particulars-label">School name</span>
      <span class="particulars-value">${school.name}</span>
    </div>
    <div class="particulars-row">
      <span class="particulars-label">Email address</span>
      <span class="particulars-value">${school.email} <button class="copy-btn" title="Copy">&#128203;</button></span>
    </div>
  `;

  // Edit particulars link
  const editLink = document.getElementById('link-edit-particulars');
  editLink.href = `edit-particulars.html?id=${school.id}`;

  // Add qualifications link
  const addQualsLink = document.getElementById('link-add-quals');
  addQualsLink.href = `add-qualifications.html?id=${school.id}`;

  // Qualifications table
  renderQualifications(qualificationsData);

  const qualSearch = document.getElementById('qual-search');
  const qualSearchBtn = document.getElementById('qual-search-btn');
  function doQualSearch() {
    const query = qualSearch.value.toLowerCase().trim();
    const filtered = qualificationsData.filter(q => q.name.toLowerCase().includes(query));
    renderQualifications(filtered);
  }
  qualSearchBtn.addEventListener('click', doQualSearch);
  qualSearch.addEventListener('keyup', (e) => { if (e.key === 'Enter') doQualSearch(); });

  // Sort qualifications by Last updated
  let qualsSortDir = null;
  const qualsColUpdated = document.getElementById('quals-col-updated');
  if (qualsColUpdated) {
    qualsColUpdated.addEventListener('click', () => {
      qualsSortDir = qualsSortDir === 'asc' ? 'desc' : 'asc';
      currentQualsData.sort((a, b) => {
        const diff = parseDate(a.lastUpdated) - parseDate(b.lastUpdated);
        return qualsSortDir === 'asc' ? diff : -diff;
      });
      qualsColUpdated.querySelector('.sort-icon').textContent = qualsSortDir === 'asc' ? '↑' : '↓';
      renderQualifications(null, 1);
    });
  }

  // Name history
  document.getElementById('name-history-body').innerHTML = nameHistory.map(r => `
    <tr>
      <td>${r.date}</td>
      <td>${r.updatedBy}</td>
      <td>${r.name}</td>
      <td><span class="badge badge-${r.status.toLowerCase()}">${r.status}</span></td>
    </tr>
  `).join('');

  // UEN history
  document.getElementById('uen-history-body').innerHTML = uenHistory.map(r => `
    <tr>
      <td>${r.date}</td>
      <td>${r.updatedBy}</td>
      <td>${r.uen}</td>
      <td>${r.entityName}</td>
      <td>${r.entityType}</td>
      <td>${r.remarks}</td>
    </tr>
  `).join('');

  // Address history
  document.getElementById('address-history-body').innerHTML = addressHistory.map(r => `
    <tr>
      <td>${r.date}</td>
      <td>${r.issuedBy}</td>
      <td>${r.type}</td>
      <td>${r.address}</td>
      <td><span class="badge badge-${r.status.toLowerCase()}">${r.status}</span></td>
    </tr>
  `).join('');

  // Audit log with pagination
  renderAuditLog(1);

  let auditSortDir = null;
  const auditColTimestamp = document.getElementById('audit-col-timestamp');
  if (auditColTimestamp) {
    auditColTimestamp.addEventListener('click', () => {
      auditSortDir = auditSortDir === 'asc' ? 'desc' : 'asc';
      auditLog.sort((a, b) => {
        const diff = parseTimestamp(a.timestamp) - parseTimestamp(b.timestamp);
        return auditSortDir === 'asc' ? diff : -diff;
      });
      auditColTimestamp.querySelector('.sort-icon').textContent = auditSortDir === 'asc' ? '↑' : '↓';
      renderAuditLog(1);
    });
  }

  // Workflow timeline
  document.getElementById('workflow-timeline').innerHTML = workflowHistory.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot ${item.active ? '' : 'timeline-dot--muted'}"></div>
      <div class="timeline-content">
        <div class="timeline-text">${item.text}</div>
        <div class="timeline-date">${item.date}</div>
      </div>
    </div>
  `).join('');

  // Profile tab switching
  document.querySelectorAll('.profile-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.profile-tab').forEach(b => b.classList.remove('profile-tab--active'));
      btn.classList.add('profile-tab--active');
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('tab-content--active'));
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add('tab-content--active');
    });
  });

  // Remarks
  const remarksInput = document.getElementById('remarks-input');
  const charCount = document.getElementById('char-count');
  const remarksEmpty = document.querySelector('.remarks-empty');
  const addRemarkBtn = document.getElementById('btn-add-remark');

  if (remarksInput) {
    remarksInput.addEventListener('input', () => {
      charCount.textContent = `${remarksInput.value.length}/10,000`;
    });
  }

  if (addRemarkBtn) {
    addRemarkBtn.addEventListener('click', () => {
      if (!remarksInput.value.trim()) return;
      const now = new Date();
      const timestamp = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) + ' ' + now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
      const remarkHTML = `
        <div style="padding:12px 0; border-bottom:1px solid var(--border);">
          <div style="font-size:0.84rem; color:var(--text-secondary); margin-bottom:4px;">${remarksInput.value.trim()}</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">Added by AL &middot; ${timestamp}</div>
        </div>`;
      if (remarksEmpty) remarksEmpty.style.display = 'none';
      let container = document.getElementById('remarks-list');
      if (!container) {
        container = document.createElement('div');
        container.id = 'remarks-list';
        remarksEmpty.parentNode.insertBefore(container, document.querySelector('.remarks-form'));
      }
      container.insertAdjacentHTML('afterbegin', remarkHTML);
      remarksInput.value = '';
      charCount.textContent = '0/10,000';
    });
  }
}

const QUALS_PAGE_SIZE = 10;
let currentQualsData = [];

function renderQualifications(data, page) {
  const tbody = document.getElementById('qualifications-body');
  if (!tbody) return;

  if (data) currentQualsData = data;
  if (!page) page = 1;

  const totalPages = Math.ceil(currentQualsData.length / QUALS_PAGE_SIZE);
  const start = (page - 1) * QUALS_PAGE_SIZE;
  const pageData = currentQualsData.slice(start, start + QUALS_PAGE_SIZE);

  const typeClasses = {
    'Postgraduate': 'badge-type-postgraduate',
    'Graduate Degree': 'badge-type-graduate',
    'Polytechnic Diploma': 'badge-type-polytechnic',
    'Vocational (ITE)': 'badge-type-vocational',
    'Undergraduate Degree': 'badge-type-undergraduate',
  };

  tbody.innerHTML = pageData.map(q => `
    <tr>
      <td>${q.name}</td>
      <td><span class="badge-type ${typeClasses[q.type] || ''}">${q.type}</span></td>
      <td>${q.regType}</td>
      <td>${q.register}</td>
      <td>${q.duration}</td>
      <td>${q.lastUpdated}</td>
    </tr>
  `).join('');

  document.getElementById('quals-info').textContent = `Showing ${pageData.length} out of ${currentQualsData.length} qualifications`;

  const paginationNav = document.getElementById('quals-pagination');
  let html = '';
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn ${i === page ? 'page-btn--active' : ''}" data-quals-page="${i}">${i}</button>`;
  }
  if (page < totalPages) {
    html += `<button class="page-btn-text" data-quals-page="${page + 1}">Next &#8250;</button>`;
  }
  paginationNav.innerHTML = html;

  paginationNav.querySelectorAll('[data-quals-page]').forEach(btn => {
    btn.addEventListener('click', () => renderQualifications(null, parseInt(btn.dataset.qualsPage)));
  });
}

// ===== AUDIT LOG PAGINATION =====
const AUDIT_PAGE_SIZE = 10;

function renderAuditLog(page) {
  const tbody = document.getElementById('audit-log-body');
  if (!tbody) return;

  const totalPages = Math.ceil(auditLog.length / AUDIT_PAGE_SIZE);
  const start = (page - 1) * AUDIT_PAGE_SIZE;
  const pageData = auditLog.slice(start, start + AUDIT_PAGE_SIZE);

  tbody.innerHTML = pageData.map(r => `
    <tr>
      <td>${r.action}</td>
      <td>${r.updatedBy}</td>
      <td>${r.timestamp}</td>
      <td>${r.field}</td>
      <td>${r.prevValue}</td>
      <td>${r.newValue}</td>
    </tr>
  `).join('');

  document.getElementById('audit-info').textContent = `Showing ${pageData.length} out of ${auditLog.length} audit logs`;

  const paginationNav = document.getElementById('audit-pagination');
  let html = '';
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn ${i === page ? 'page-btn--active' : ''}" data-audit-page="${i}">${i}</button>`;
  }
  if (page < totalPages) {
    html += `<button class="page-btn-text" data-audit-page="${page + 1}">Next &#8250;</button>`;
  }
  paginationNav.innerHTML = html;

  paginationNav.querySelectorAll('[data-audit-page]').forEach(btn => {
    btn.addEventListener('click', () => renderAuditLog(parseInt(btn.dataset.auditPage)));
  });
}

// ===== UTILITIES =====

function titleCase(str) {
  return str.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

// ===== INIT =====

document.addEventListener('DOMContentLoaded', () => {
  initDashboard();
  initProfile();
});
