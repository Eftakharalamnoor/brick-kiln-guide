// pages/delivery.js
// মডিউল: ডেলিভারি
// পেজ: trip, driver, vehicle, gatepass

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

var PAGES_DELIVERY = {

  trip: { title: 'ট্রিপ তালিকা', sections: ['পেজ পরিচিতি', 'নতুন ট্রিপ', 'ফর্ম বিবরণ'], content: generatePlaceholder('🚛', 'ট্রিপ তালিকা', 'ডেলিভারি → ট্রিপ তালিকা', 'প্রতিটি ডেলিভারি ট্রিপের তথ্য রেকর্ড করুন।', [['চালান', 'চালান নির্বাচন ▼', true], ['গাড়ি', 'যানবাহন নির্বাচন ▼', true], ['ড্রাইভার', 'ড্রাইভার নির্বাচন ▼', true], ['গন্তব্য', 'গন্তব্য লিখুন', true]]) },

  driver: { title: 'ড্রাইভার তালিকা', sections: ['পেজ পরিচিতি', 'নতুন ড্রাইভার'], content: generatePlaceholder('🧑‍✈️', 'ড্রাইভার তালিকা', 'ডেলিভারি → ড্রাইভার তালিকা', 'নথিভুক্ত ড্রাইভারদের তথ্য সংরক্ষণ করুন।', [['নাম', 'ড্রাইভারের নাম', true], ['লাইসেন্স নং', 'লাইসেন্স নম্বর', true], ['মোবাইল', 'মোবাইল নম্বর', false], ['স্ট্যাটাস', 'টগল', false]]) },

  vehicle: { title: 'যানবাহন', sections: ['গাড়ির ধরন', 'যানবাহন তালিকা'], content: generatePlaceholder('🚚', 'যানবাহন ব্যবস্থাপনা', 'ডেলিভারি → গাড়ির ধরন / যানবাহন তালিকা', 'গাড়ির ধরন ও নিবন্ধিত যানবাহনের তথ্য পরিচালনা করুন।', [['গাড়ির নম্বর', 'নম্বর প্লেট', true], ['গাড়ির ধরন', 'ধরন নির্বাচন ▼', true], ['ধারণ ক্ষমতা', '0 ইট', false], ['ড্রাইভার', 'ড্রাইভার নির্বাচন ▼', false]]) },

  gatepass: { title: 'গেট পাস', sections: ['গেট পাস কী', 'নতুন গেট পাস', 'প্রিন্ট'], content: generatePlaceholder('🎫', 'গেট পাস তালিকা', 'ডেলিভারি → গেট পাস তালিকা', 'মাল বের হওয়ার সময় গেট পাস তৈরি করুন।', [['চালান নম্বর', 'চালান নির্বাচন ▼', true], ['গাড়ি', 'যানবাহন নির্বাচন ▼', true], ['ড্রাইভার', 'ড্রাইভার নির্বাচন ▼', true]]) },

};
