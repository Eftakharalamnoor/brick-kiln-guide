// pages/settings.js
// মডিউল: সেটিংস ও রোল
// পেজ: settings, roles

// Helper to generate placeholder pages for sections not yet detailed
function generatePlaceholder(icon, title, navPath, description, fields) {
  const formFields = fields.length > 0 ? `
    <div class="section" id="sec-ফর্ম-বিবরণ">
      <div class="section-title">ফর্ম বিবরণ</div>
      <div class="form-mock">
        <div class="form-mock-title">${icon} নতুন ${title.replace(' তালিকা','').replace(' ব্যবস্থাপনা','')}</div>
        <div class="field-group">
          <div class="field-group-title">📦 মৌলিক তথ্য</div>
          ${fields.map(([label, placeholder, req]) => `
          <div class="form-row single">
            <div class="form-field">
              <label>${label}${req ? ' <span class="required">*</span>' : ''}</label>
              <div class="field-mock">${placeholder}</div>
            </div>
          </div>`).join('')}
        </div>
        <div class="form-actions">
          <button class="btn-cancel">বাতিল</button>
          <button class="btn-primary">সংরক্ষণ করুন</button>
        </div>
      </div>
    </div>
  ` : '';

  return `
    <div class="page-hero">
      <div class="page-hero-icon">${icon}</div>
      <div>
        <h1>${title}</h1>
        <p>${description}</p>
      </div>
    </div>

    <div class="section" id="sec-পেজ-পরিচিতি">
      <div class="section-title">পেজ পরিচিতি</div>
      <span class="nav-path">মেনু → <strong>${navPath}</strong></span>
      <p>${description}</p>
      <div class="info-box note">
        <div class="info-box-title">💡 নেভিগেশন</div>
        বাম মেনু থেকে <strong>${navPath}</strong> পথে এই পেজে আসুন।
      </div>
    </div>

    <div class="section" id="sec-এন্ট্রি-প্রক্রিয়া">
      <div class="section-title">এন্ট্রি প্রক্রিয়া</div>
      <ol class="steps">
        <li>বাম মেনু থেকে পেজে প্রবেশ করুন।</li>
        <li>উপরের ডানদিকে <strong>"+ নতুন"</strong> বাটনে ক্লিক করুন।</li>
        <li>ফর্মের সকল বাধ্যতামূলক (*) ফিল্ড পূরণ করুন।</li>
        <li><strong>"সংরক্ষণ করুন"</strong> বাটনে ক্লিক করুন।</li>
      </ol>
      <div class="info-box success">
        <div class="info-box-title">✅ সার্চ ও ফিল্টার</div>
        তালিকায় সার্চ বার ব্যবহার করে নাম বা আইডি দিয়ে দ্রুত খুঁজুন। ফিল্টার দিয়ে সক্রিয়/নিষ্ক্রিয় আলাদা করুন।
      </div>
    </div>

    ${formFields}
  `;
}

var PAGES_SETTINGS = {

  settings: { title: 'সেটিংস', sections: ['কোম্পানি তথ্য', 'ব্যাংক তালিকা', 'মোবাইল ব্যাংকিং', 'পেমেন্ট অ্যাকাউন্ট'], content: generatePlaceholder('⚙️', 'সেটিংস', 'সেটিংস', 'সিস্টেম কনফিগারেশন পরিচালনা (শুধুমাত্র অ্যাডমিন)।', [['কোম্পানির নাম', 'কোম্পানির নাম', true], ['ঠিকানা', 'কোম্পানির ঠিকানা', false], ['ফোন', 'যোগাযোগ নম্বর', false], ['ইমেইল', 'ইমেইল ঠিকানা', false]]) },

  roles: { title: 'রোল ম্যানেজমেন্ট', sections: ['রোল পরিচিতি', 'অ্যাডমিন রোল', 'Manager রোল', 'নতুন রোল তৈরি'], content: generatePlaceholder('🛡️', 'রোল ম্যানেজমেন্ট', 'সেটিংস → রোল ম্যানেজমেন্ট', 'সিস্টেমের রোল ও পারমিশন ব্যবস্থাপনা (শুধুমাত্র অ্যাডমিন)।', [['রোলের নাম', 'রোল নাম লিখুন', true], ['বিবরণ', 'রোলের বিবরণ', false], ['পারমিশন', 'টিক দিয়ে নির্বাচন করুন', true]]) },

};
