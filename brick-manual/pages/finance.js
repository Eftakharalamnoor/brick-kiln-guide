// pages/finance.js
// মডিউল: ভাউচার ও রিপোর্ট
// পেজ: voucher, report

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

var PAGES_FINANCE = {

  voucher: { title: 'ভাউচার', sections: ['ভাউচার কী', 'আয় ভাউচার', 'ব্যয় ভাউচার'], content: generatePlaceholder('📋', 'ভাউচার ব্যবস্থাপনা', 'ভাউচার', 'যেকোনো আর্থিক লেনদেন ভাউচারের মাধ্যমে রেকর্ড করুন।', [['ভাউচারের ধরন', 'আয় / ব্যয় ▼', true], ['তারিখ', 'তারিখ নির্বাচন', true], ['পরিমাণ', '0', true], ['বিবরণ', 'লেনদেনের বিবরণ', true], ['পেমেন্টের মাধ্যম', 'মাধ্যম ▼', true]]) },

  report: { title: 'দৈনিক রিপোর্ট', sections: ['আয়-ব্যয় রিপোর্ট', 'লাভ/ক্ষতি রিপোর্ট', 'পার্টি লেজার'], content: generatePlaceholder('📈', 'দৈনিক রিপোর্ট', 'দৈনিক রিপোর্ট → আয়-ব্যয় / লাভ-ক্ষতি / পার্টি লেজার', 'নির্দিষ্ট তারিখ পরিসরে সকল আর্থিক রিপোর্ট দেখুন।', []) },

};
