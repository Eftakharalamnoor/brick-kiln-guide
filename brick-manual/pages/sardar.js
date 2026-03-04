// pages/sardar.js
// মডিউল: সর্দার ব্যবস্থাপনা
// পেজ: sardar-list, dadon, khoraki, sardar-work, crop-type, sardar-report

var PAGES_SARDAR = {

  'sardar-list': {
    title: 'সর্দার তালিকা',
    sections: ['পেজ পরিচিতি', 'পরিসংখ্যান কার্ড', 'নতুন সর্দার যোগ', 'ফর্মের বিবরণ', 'তালিকা কলাম'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">👤</div>
        <div>
          <h1>সর্দার তালিকা</h1>
          <p>সকল সর্দারের তালিকা ও বিবরণ — দাদন, খোরাকি ও উৎপাদন ক্রেডিট</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → সর্দার → <strong>সর্দার তালিকা</strong></span>
        <p>সর্দার হলেন শ্রমিক দলের নেতা যিনি একটি নির্দিষ্ট গ্রুপের শ্রমিকদের পরিচালনা করেন। এখানে সকল সর্দারের ব্যক্তিগত তথ্য, দাদন ও খোরাকির হিসাব একত্রে দেখা যায়।</p>
      </div>

      <div class="section" id="sec-পরিসংখ্যান-কার্ড">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <div class="stat-row">
          <div class="stat-card green">
            <div class="stat-icon">👤</div>
            <div><div class="stat-label">সক্রিয় সর্দার</div><div class="stat-value" style="color:var(--success)">০</div></div>
          </div>
          <div class="stat-card red">
            <div class="stat-icon">💳</div>
            <div><div class="stat-label">মোট দাদন প্রদান</div><div class="stat-value">৳০</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">🍽️</div>
            <div><div class="stat-label">মোট খোরাকি প্রদান</div><div class="stat-value">৳০</div></div>
          </div>
          <div class="stat-card blue">
            <div class="stat-icon">📈</div>
            <div><div class="stat-label">মোট উৎপাদন ক্রেডিট</div><div class="stat-value">৳০</div></div>
          </div>
        </div>
        <div class="info-box note">
          <div class="info-box-title">💡 কার্ডের ব্যাখ্যা</div>
          <ul class="bullet-list">
            <li><strong>মোট দাদন প্রদান:</strong> সকল সর্দারকে এ পর্যন্ত দেওয়া মোট অগ্রিম অর্থ।</li>
            <li><strong>মোট খোরাকি প্রদান:</strong> সকল সর্দারের শ্রমিকদের মোট খাবার খরচ।</li>
            <li><strong>মোট উৎপাদন ক্রেডিট:</strong> সর্দারের কাজের বিপরীতে প্রাপ্য মোট অর্থ।</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-নতুন-সর্দার-যোগ">
        <div class="section-title">নতুন সর্দার যোগ</div>
        <ol class="steps">
          <li>উপরের ডানদিকে <strong>"+ সর্দার যোগ করুন"</strong> বাটনে ক্লিক করুন।</li>
          <li>প্রোফাইল ছবি আপলোড করুন (ঐচ্ছিক) — "ছবি নির্বাচন করুন" বাটনে ক্লিক করুন।</li>
          <li>সর্দারের <strong>নাম</strong> ও <strong>ফোন নম্বর</strong> লিখুন।</li>
          <li><strong>ঠিকানা</strong> ও <strong>স্থায়ী জেলা</strong> পূরণ করুন।</li>
          <li><strong>গ্রুপের ধরন</strong> ড্রপডাউন থেকে নির্বাচন করুন (ক্রপ টাইপ থেকে আসে)।</li>
          <li><strong>প্রতি হাজারে চুক্তি রেট</strong> লিখুন — এটি কাজের হিসাবে ব্যবহৃত হবে।</li>
          <li><strong>সাপ্তাহিক খোরাকি হার</strong> লিখুন (প্রতি সপ্তাহে খোরাকি)।</li>
          <li><strong>মৌসুম শুরু</strong> ও <strong>মৌসুম শেষ</strong> তারিখ দিন।</li>
          <li>জামিনদারের তথ্য (নাম ও ফোন) পূরণ করুন।</li>
          <li>প্রয়োজনে <strong>পরিচয়পত্র ডকুমেন্ট</strong> আপলোড করুন।</li>
          <li><strong>"সংরক্ষণ"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">👤 সর্দার যোগ করুন</div>

          <div class="field-group">
            <div class="field-group-title">🖼️ প্রোফাইল ছবি</div>
            <div style="display:flex;align-items:center;gap:12px;padding:8px 0">
              <div style="width:50px;height:50px;background:#e85d04;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:18px">ন</div>
              <div class="field-mock" style="width:auto;padding:8px 16px;cursor:pointer">📷 ছবি নির্বাচন করুন</div>
            </div>
          </div>

          <div class="field-group">
            <div class="field-group-title">👤 ব্যক্তিগত তথ্য</div>
            <div class="form-row">
              <div class="form-field">
                <label>নাম <span class="required">*</span></label>
                <div class="field-mock active">করিম সরদার</div>
              </div>
              <div class="form-field">
                <label>ফোন নম্বর <span class="required">*</span></label>
                <div class="field-mock">01712345678</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label>ঠিকানা</label>
                <div class="field-mock">রাজবাড়ী, চুয়াডাঙ্গা</div>
              </div>
              <div class="form-field">
                <label>স্থায়ী জেলা</label>
                <div class="field-mock">চুয়াডাঙ্গা</div>
              </div>
            </div>
          </div>

          <div class="field-group">
            <div class="field-group-title">📋 চুক্তির তথ্য</div>
            <div class="form-row">
              <div class="form-field">
                <label>গ্রুপের ধরন <span class="required">*</span></label>
                <div class="field-mock">গ্রুপ নির্বাচন করুন ▼</div>
              </div>
              <div class="form-field">
                <label>প্রতি হাজারে চুক্তি রেট (৳)</label>
                <div class="field-mock">800</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label>সাপ্তাহিক খোরাকি হার (৳)</label>
                <div class="field-mock">5000</div>
              </div>
              <div class="form-field">
                <label>মৌসুম শুরু</label>
                <div class="field-mock">04/03/2026</div>
              </div>
            </div>
            <div class="form-row single">
              <div class="form-field">
                <label>মৌসুম শেষ</label>
                <div class="field-mock">dd/mm/yyyy</div>
              </div>
            </div>
          </div>

          <div class="field-group">
            <div class="field-group-title">🔐 জামিনদারের তথ্য</div>
            <div class="form-row">
              <div class="form-field">
                <label>জামিনদারের নাম</label>
                <div class="field-mock">আব্দুল মালেক</div>
              </div>
              <div class="form-field">
                <label>জামিনদারের ফোন</label>
                <div class="field-mock">01812345678</div>
              </div>
            </div>
          </div>

          <div class="field-group" style="border-left:3px solid var(--primary)">
            <div class="field-group-title" style="color:var(--primary)">📄 পরিচয়পত্র ডকুমেন্ট</div>
            <div style="text-align:center;padding:16px;color:var(--text-muted);font-size:13px">
              কোনো পরিচয়পত্র যোগ করা হয়নি<br>
              <span style="color:var(--primary);cursor:pointer">+ প্রথম ডকুমেন্ট যোগ করুন</span>
            </div>
          </div>

          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">সংরক্ষণ</button>
          </div>
        </div>

        <table class="doc-table" style="margin-top:16px">
          <tr><th>ফিল্ড</th><th>বিবরণ</th><th>বাধ্যতামূলক</th></tr>
          <tr><td>নাম</td><td>সর্দারের পূর্ণ নাম</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>ফোন নম্বর</td><td>সক্রিয় মোবাইল নম্বর</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>গ্রুপের ধরন</td><td>কোন ক্রপ টাইপের অধীনে কাজ করবেন</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>প্রতি হাজারে চুক্তি রেট</td><td>প্রতি হাজার ইটে কত টাকা পাবেন</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>সাপ্তাহিক খোরাকি হার</td><td>প্রতি সপ্তাহে খোরাকি বাবদ প্রদেয় অর্থ</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>মৌসুম শুরু / শেষ</td><td>কাজের চুক্তির সময়কাল</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>জামিনদারের তথ্য</td><td>সর্দারের জামানতদাতার নাম ও ফোন</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>পরিচয়পত্র ডকুমেন্ট</td><td>NID বা অন্য পরিচয়পত্রের স্ক্যান</td><td><span class="badge badge-green">না</span></td></tr>
        </table>
      </div>

      <div class="section" id="sec-তালিকা-কলাম">
        <div class="section-title">তালিকা কলাম</div>
        <p>সর্দার তালিকায় প্রতিটি সর্দারের জন্য নিচের তথ্য দেখা যায়:</p>
        <table class="doc-table">
          <tr><th>কলাম</th><th>বিবরণ</th></tr>
          <tr><td>নাম</td><td>সর্দারের নাম ও প্রোফাইল ছবি</td></tr>
          <tr><td>গ্রুপের ধরন</td><td>কোন ক্রপ টাইপের অধীনে</td></tr>
          <tr><td>লেবার</td><td>তার অধীনে কতজন শ্রমিক</td></tr>
          <tr><td>মোট দাদন</td><td>এ পর্যন্ত প্রদত্ত মোট দাদন</td></tr>
          <tr><td>মোট খোরাকি</td><td>এ পর্যন্ত প্রদত্ত মোট খোরাকি</td></tr>
          <tr><td>উৎপাদন ক্রেডিট</td><td>কাজের বিপরীতে প্রাপ্য অর্থ</td></tr>
          <tr><td>বর্তমান ব্যালেন্স</td><td>নেট ব্যালেন্স (ক্রেডিট - ডেবিট)</td></tr>
          <tr><td>স্ট্যাটাস</td><td>সক্রিয় / নিষ্ক্রিয়</td></tr>
        </table>
        <div class="info-box tip">
          <div class="info-box-title">💜 ফিল্টার সুবিধা</div>
          তালিকার উপরে <strong>"সব গ্রুপ"</strong> ও <strong>"সব স্ট্যাটাস"</strong> ড্রপডাউন দিয়ে নির্দিষ্ট গ্রুপ বা স্ট্যাটাস অনুযায়ী ফিল্টার করুন।
        </div>
      </div>
    `
  },

  // ===================================================
  // DADON
  // ===================================================,

  dadon: {
    title: 'দাদন ব্যবস্থাপনা',
    sections: ['দাদন কী', 'পরিসংখ্যান', 'দাদন যোগ করুন', 'ফর্মের বিবরণ', 'দাদন ইতিহাস কলাম'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">💰</div>
        <div>
          <h1>দাদন ব্যবস্থাপনা</h1>
          <p>সর্দারদের দাদন প্রদান ও ব্যবস্থাপনা — অগ্রিম অর্থ ট্র্যাকিং</p>
        </div>
      </div>

      <div class="section" id="sec-দাদন-কী">
        <div class="section-title">দাদন কী?</div>
        <span class="nav-path">মেনু → সর্দার → <strong>দাদন ব্যবস্থাপনা</strong></span>
        <p><strong>দাদন</strong> হলো মৌসুম শুরুর আগে বা মৌসুম চলাকালীন সর্দারকে দেওয়া অগ্রিম অর্থ। এই অর্থ পরবর্তীতে কাজের উৎপাদন ক্রেডিট থেকে কেটে নেওয়া হয়।</p>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="fc-icon">💸</div>
            <h5>অগ্রিম প্রদান</h5>
            <p>সর্দারকে কাজ শুরুর আগে অগ্রিম অর্থ দেওয়া।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">📊</div>
            <h5>ব্যালেন্স ট্র্যাকিং</h5>
            <p>কত দেওয়া হয়েছে, কত পরিশোধ হয়েছে, কত বাকি আছে।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">🔐</div>
            <h5>সাক্ষী (জামিন)</h5>
            <p>প্রতিটি দাদনে সাক্ষীর তথ্য রেকর্ড করা যায়।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">📅</div>
            <h5>ইতিহাস</h5>
            <p>সকল দাদনের তারিখ-ভিত্তিক সম্পূর্ণ ইতিহাস।</p>
          </div>
        </div>
      </div>

      <div class="section" id="sec-পরিসংখ্যান">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <div class="stat-row">
          <div class="stat-card red">
            <div class="stat-icon">💳</div>
            <div><div class="stat-label">মোট দাদন প্রদান</div><div class="stat-value">৳০</div></div>
          </div>
          <div class="stat-card blue">
            <div class="stat-icon">📋</div>
            <div><div class="stat-label">মোট রেকর্ড</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">👤</div>
            <div><div class="stat-label">সক্রিয় সর্দার</div><div class="stat-value">০</div></div>
          </div>
        </div>
      </div>

      <div class="section" id="sec-দাদন-যোগ-করুন">
        <div class="section-title">দাদন যোগ করুন</div>
        <ol class="steps">
          <li>উপরের ডানদিকে <strong>"+ দাদন যোগ করুন"</strong> বাটনে ক্লিক করুন।</li>
          <li><strong>সর্দার নির্বাচন করুন</strong> ড্রপডাউন থেকে সর্দার নির্বাচন করুন।</li>
          <li><strong>পরিমাণ (৳)</strong> ঘরে দাদনের পরিমাণ লিখুন।</li>
          <li><strong>তারিখ</strong> নির্বাচন করুন।</li>
          <li><strong>বিবরণ</strong> ড্রপডাউন থেকে উদ্দেশ্য নির্বাচন করুন (যেমন: প্রাথমিক)।</li>
          <li><strong>সাক্ষী (জামিন)</strong> সেকশনে সাক্ষীর নাম ও ফোন লিখুন।</li>
          <li>প্রয়োজনে <strong>নোট</strong> লিখুন।</li>
          <li><strong>"সংরক্ষণ"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ গুরুত্বপূর্ণ</div>
          দাদন দেওয়ার আগে সর্দারের বর্তমান ব্যালেন্স চেক করুন। অতিরিক্ত দাদন দিলে ক্রেডিট পর্যাপ্ত না হলে বাকি থেকে যাবে।
        </div>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">💰 দাদন যোগ করুন</div>
          <div class="form-row single">
            <div class="form-field">
              <label>সর্দার নির্বাচন করুন <span class="required">*</span></label>
              <div class="field-mock active">সর্দার নির্বাচন করুন ▼</div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <label>পরিমাণ (৳) <span class="required">*</span></label>
              <div class="field-mock">50000</div>
            </div>
            <div class="form-field">
              <label>তারিখ <span class="required">*</span></label>
              <div class="field-mock">04/03/2026</div>
            </div>
          </div>
          <div class="form-row single">
            <div class="form-field">
              <label>বিবরণ</label>
              <div class="field-mock">প্রাথমিক ▼</div>
            </div>
          </div>
          <div class="field-group" style="border-left:3px solid #f59e0b">
            <div class="field-group-title" style="color:#d97706">🔐 সাক্ষী (জামিন)</div>
            <div class="form-row">
              <div class="form-field">
                <label>সাক্ষীর নাম</label>
                <div class="field-mock">সাক্ষীর নাম</div>
              </div>
              <div class="form-field">
                <label>সাক্ষীর ফোন</label>
                <div class="field-mock">01XXXXXXXXX</div>
              </div>
            </div>
          </div>
          <div class="form-row single" style="margin-top:10px">
            <div class="form-field">
              <label>নোট</label>
              <div class="field-mock" style="height:70px;padding-top:8px">নোট লিখুন (ঐচ্ছিক)</div>
            </div>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">সংরক্ষণ</button>
          </div>
        </div>
      </div>

      <div class="section" id="sec-দাদন-ইতিহাস-কলাম">
        <div class="section-title">দাদন ইতিহাস কলাম</div>
        <p>পেজের নিচে <strong>"দাদন ইতিহাস"</strong> তালিকায় সব রেকর্ড দেখা যাবে:</p>
        <table class="doc-table">
          <tr><th>কলাম</th><th>বিবরণ</th></tr>
          <tr><td>তারিখ</td><td>দাদন প্রদানের তারিখ</td></tr>
          <tr><td>সর্দার</td><td>কোন সর্দারকে দেওয়া হয়েছে</td></tr>
          <tr><td>উদ্দেশ্য</td><td>দাদনের কারণ / বিবরণ</td></tr>
          <tr><td>অবস্থা</td><td>পরিশোধিত / বাকি / আংশিক</td></tr>
          <tr><td>মোট</td><td>প্রদত্ত দাদনের পরিমাণ</td></tr>
          <tr><td>পরিশোধিত</td><td>এ পর্যন্ত কত পরিশোধ হয়েছে</td></tr>
          <tr><td>বাকি</td><td>এখনো কত বাকি আছে</td></tr>
          <tr><td>সাক্ষী</td><td>জামিনদারের নাম</td></tr>
          <tr><td>নোট</td><td>অতিরিক্ত মন্তব্য</td></tr>
        </table>
        <div class="info-box note">
          <div class="info-box-title">💡 ফিল্টার</div>
          তারিখ পরিসর, সর্দারের নাম ও অবস্থা অনুযায়ী ফিল্টার করা যাবে।
        </div>
      </div>
    `
  },

  // ===================================================
  // KHORAKI
  // ===================================================,

  khoraki: {
    title: 'খোরাকি এন্ট্রি',
    sections: ['খোরাকি কী', 'পরিসংখ্যান', 'খোরাকি দিন', 'ফর্মের বিবরণ', 'বাল্ক এন্ট্রি', 'ইতিহাস কলাম'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">🍽️</div>
        <div>
          <h1>খোরাকি এন্ট্রি</h1>
          <p>সর্দারদের সাপ্তাহিক খোরাকি প্রদান করুন</p>
        </div>
      </div>

      <div class="section" id="sec-খোরাকি-কী">
        <div class="section-title">খোরাকি কী?</div>
        <span class="nav-path">মেনু → সর্দার → <strong>খোরাকি এন্ট্রি</strong></span>
        <p><strong>খোরাকি</strong> হলো শ্রমিকদের সাপ্তাহিক খাবার ও জীবনযাত্রার ভাতা। সর্দারকে প্রতি সপ্তাহে তার দলের শ্রমিকদের খোরাকি বাবদ অর্থ দেওয়া হয়। এটি সর্দারের হিসাবে ডেবিট হিসেবে যোগ হয়।</p>
      </div>

      <div class="section" id="sec-পরিসংখ্যান">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <div class="stat-row">
          <div class="stat-card">
            <div class="stat-icon">🍽️</div>
            <div><div class="stat-label">মোট খোরাকি প্রদান</div><div class="stat-value" style="color:var(--primary)">৳০</div></div>
          </div>
          <div class="stat-card red">
            <div class="stat-icon">📅</div>
            <div><div class="stat-label">মোট বাকি</div><div class="stat-value">৳০</div></div>
          </div>
          <div class="stat-card blue">
            <div class="stat-icon">📋</div>
            <div><div class="stat-label">মোট রেকর্ড</div><div class="stat-value">০</div></div>
          </div>
        </div>
      </div>

      <div class="section" id="sec-খোরাকি-দিন">
        <div class="section-title">খোরাকি দিন (একক এন্ট্রি)</div>
        <ol class="steps">
          <li>উপরের ডানদিকে <strong>"+ খোরাকি দিন"</strong> বাটনে ক্লিক করুন।</li>
          <li><strong>সর্দার নির্বাচন করুন</strong> ড্রপডাউন থেকে সর্দার নির্বাচন করুন।</li>
          <li><strong>পরিমাণ (৳)</strong> লিখুন।</li>
          <li><strong>তারিখ</strong> নির্বাচন করুন।</li>
          <li><strong>সপ্তাহ নম্বর</strong> লিখুন (কোন সপ্তাহের খোরাকি)।</li>
          <li><strong>শ্রমিক সংখ্যা</strong> লিখুন (সর্দারের অধীনে কতজন শ্রমিক)।</li>
          <li><strong>মাথাপিছু</strong> — স্বয়ংক্রিয়ভাবে হিসাব হবে।</li>
          <li><strong>সাক্ষীর তথ্য</strong> দিন (ঐচ্ছিক)।</li>
          <li><strong>"সংরক্ষণ"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">🍽️ খোরাকি দিন</div>
          <div class="form-row single">
            <div class="form-field">
              <label>সর্দার নির্বাচন করুন <span class="required">*</span></label>
              <div class="field-mock active">সর্দার নির্বাচন করুন ▼</div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <label>পরিমাণ (৳) <span class="required">*</span></label>
              <div class="field-mock">5000</div>
            </div>
            <div class="form-field">
              <label>তারিখ <span class="required">*</span></label>
              <div class="field-mock">04/03/2026</div>
            </div>
          </div>
          <div class="form-row triple">
            <div class="form-field">
              <label>সপ্তাহ নম্বর</label>
              <div class="field-mock">1</div>
            </div>
            <div class="form-field">
              <label>শ্রমিক সংখ্যা</label>
              <div class="field-mock">10</div>
            </div>
            <div class="form-field">
              <label>মাথাপিছু</label>
              <div class="field-mock">0</div>
            </div>
          </div>
          <div class="form-row single">
            <div class="form-field">
              <label>নোট</label>
              <div class="field-mock" style="height:60px;padding-top:8px">নোট লিখুন (ঐচ্ছিক)</div>
            </div>
          </div>
          <div class="field-group" style="border-left:3px solid #f59e0b; margin-top:10px">
            <div class="field-group-title" style="color:#d97706">🔐 সাক্ষী (জামিন)</div>
            <div class="form-row">
              <div class="form-field">
                <label>সাক্ষীর নাম</label>
                <div class="field-mock">পূর্ণ নাম</div>
              </div>
              <div class="form-field">
                <label>সাক্ষীর ফোন</label>
                <div class="field-mock">01XXXXXXXXX</div>
              </div>
            </div>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">সংরক্ষণ</button>
          </div>
        </div>
      </div>

      <div class="section" id="sec-বাল্ক-এন্ট্রি">
        <div class="section-title">বাল্ক খোরাকি এন্ট্রি</div>
        <p>একসাথে একাধিক সর্দারের খোরাকি দিতে উপরের <strong>"বাল্ক এন্ট্রি"</strong> বাটন ব্যবহার করুন।</p>
        <div class="form-mock">
          <div class="form-mock-title">📋 বাল্ক খোরাকি এন্ট্রি</div>
          <div style="padding:12px;background:var(--bg);border-radius:8px;display:flex;align-items:center;gap:10px;font-size:14px">
            <input type="checkbox" disabled /> <span>সব নির্বাচন</span>
            <span style="margin-left:auto;color:var(--text-muted)">০/০ নির্বাচিত</span>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">সব সংরক্ষণ (০)</button>
          </div>
        </div>
        <div class="info-box tip">
          <div class="info-box-title">💜 বাল্ক এন্ট্রির সুবিধা</div>
          প্রতি সপ্তাহে সকল সর্দারের খোরাকি একসাথে দিতে বাল্ক এন্ট্রি ব্যবহার করুন — সময় অনেক কম লাগবে।
        </div>
      </div>

      <div class="section" id="sec-ইতিহাস-কলাম">
        <div class="section-title">খোরাকি ইতিহাস কলাম</div>
        <table class="doc-table">
          <tr><th>কলাম</th><th>বিবরণ</th></tr>
          <tr><td>তারিখ</td><td>খোরাকি প্রদানের তারিখ</td></tr>
          <tr><td>সর্দার</td><td>কোন সর্দারকে দেওয়া হয়েছে</td></tr>
          <tr><td>সপ্তাহ</td><td>কোন সপ্তাহের খোরাকি</td></tr>
          <tr><td>শ্রমিক</td><td>কতজন শ্রমিকের জন্য</td></tr>
          <tr><td>অবস্থা</td><td>পরিশোধিত / বাকি</td></tr>
          <tr><td>মোট</td><td>মোট খোরাকির পরিমাণ</td></tr>
          <tr><td>পরিশোধিত</td><td>কত পরিশোধ হয়েছে</td></tr>
          <tr><td>বাকি</td><td>এখনো কত বাকি</td></tr>
          <tr><td>মাথাপিছু</td><td>প্রতি শ্রমিকের হিস্যা</td></tr>
          <tr><td>সাক্ষী</td><td>জামিনদারের নাম</td></tr>
        </table>
      </div>
    `
  },

  // ===================================================
  // SARDAR WORK ENTRY
  // ===================================================,

  'sardar-work': {
    title: 'সর্দার কাজের এন্ট্রি',
    sections: ['পেজ পরিচিতি', 'পরিসংখ্যান', 'নতুন কাজের এন্ট্রি', 'ফর্মের বিবরণ', 'পেমেন্ট সর্দার', 'তালিকা কলাম'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">📋</div>
        <div>
          <h1>সর্দার কাজের এন্ট্রি</h1>
          <p>সর্দারের উৎপাদিত ইটের রেকর্ড ও পেমেন্ট ব্যবস্থাপনা</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → সর্দার → <strong>সর্দার কাজের এন্ট্রি</strong></span>
        <p>এই পেজে প্রতিদিন বা প্রতি সপ্তাহে সর্দার কতটি ইট তৈরি করেছেন তা রেকর্ড করা হয়। ইটের পরিমাণ ও প্রতি হাজার রেটের ভিত্তিতে সর্দারের উপার্জন স্বয়ংক্রিয়ভাবে হিসাব হয়।</p>
      </div>

      <div class="section" id="sec-পরিসংখ্যান">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <div class="stat-row">
          <div class="stat-card">
            <div class="stat-icon">📋</div>
            <div><div class="stat-label">মোট এন্ট্রি</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card blue">
            <div class="stat-icon">🧱</div>
            <div><div class="stat-label">মোট ইট</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">💰</div>
            <div><div class="stat-label">মোট উপার্জন</div><div class="stat-value">৳০</div></div>
          </div>
          <div class="stat-card red">
            <div class="stat-icon">⏳</div>
            <div><div class="stat-label">মোট বাকি</div><div class="stat-value">৳০</div></div>
          </div>
        </div>
      </div>

      <div class="section" id="sec-নতুন-কাজের-এন্ট্রি">
        <div class="section-title">নতুন কাজের এন্ট্রি</div>
        <ol class="steps">
          <li>উপরের ডানদিকে <strong>"+ কাজের এন্ট্রি"</strong> বাটনে ক্লিক করুন।</li>
          <li><strong>তারিখ</strong> নির্বাচন করুন।</li>
          <li><strong>সর্দার নির্বাচন</strong> ড্রপডাউন থেকে সর্দার নির্বাচন করুন।</li>
          <li><strong>ইটের পরিমাণ</strong> লিখুন (হাজারে)।</li>
          <li><strong>প্রতি হাজার রেট (৳)</strong> — খালি রাখলে সর্দারের চুক্তি অনুযায়ী হবে।</li>
          <li>প্রয়োজনে <strong>নোট</strong> লিখুন।</li>
          <li><strong>"সংরক্ষণ করুন"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
        <div class="info-box note">
          <div class="info-box-title">💡 রেট সম্পর্কে</div>
          প্রতি হাজার রেট খালি রাখলে সর্দারের প্রোফাইলে নির্ধারিত চুক্তি রেট স্বয়ংক্রিয়ভাবে প্রযোজ্য হবে।
        </div>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">📋 নতুন সর্দার কাজের এন্ট্রি</div>
          <div class="form-row">
            <div class="form-field">
              <label>তারিখ <span class="required">*</span></label>
              <div class="field-mock active">04/03/2026</div>
            </div>
            <div class="form-field">
              <label>সর্দার নির্বাচন <span class="required">*</span></label>
              <div class="field-mock">সর্দার নির্বাচন করুন ▼</div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <label>ইটের পরিমাণ <span class="required">*</span></label>
              <div class="field-mock">0</div>
            </div>
            <div class="form-field">
              <label>প্রতি হাজার রেট (৳)</label>
              <div class="field-mock">0</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:4px">খালি রাখলে সর্দারের চুক্তি অনুযায়ী হবে</div>
            </div>
          </div>
          <div class="form-row single">
            <div class="form-field">
              <label>নোট</label>
              <div class="field-mock" style="height:70px;padding-top:8px">নোট লিখুন (ঐচ্ছিক)</div>
            </div>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">সংরক্ষণ করুন</button>
          </div>
        </div>
      </div>

      <div class="section" id="sec-পেমেন্ট-সর্দার">
        <div class="section-title">পেমেন্ট সর্দার (বাল্ক পেমেন্ট)</div>
        <p>তালিকার উপরে <strong>"পেমেন্ট সর্দার"</strong> বাটনে ক্লিক করে একাধিক এন্ট্রির বিপরীতে একসাথে পেমেন্ট করা যাবে।</p>
        <div class="form-mock">
          <div class="form-mock-title" style="color:var(--success)">💳 সর্দার বাল্ক পেমেন্ট</div>
          <div class="form-row single">
            <div class="form-field">
              <label>সর্দার নির্বাচন <span class="required">*</span></label>
              <div class="field-mock active">সর্দার নির্বাচন করুন ▼</div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <label>তারিখ থেকে</label>
              <div class="field-mock">26/02/2026</div>
            </div>
            <div class="form-field">
              <label>তারিখ পর্যন্ত</label>
              <div class="field-mock">04/03/2026</div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <label>পেমেন্ট পদ্ধতি <span class="required">*</span></label>
              <div class="field-mock">নগদ ▼</div>
            </div>
            <div class="form-field">
              <label>পেমেন্ট তারিখ <span class="required">*</span></label>
              <div class="field-mock">04/03/2026</div>
            </div>
          </div>
          <div class="form-row single">
            <div class="form-field">
              <label>নোট</label>
              <div class="field-mock" style="height:60px;padding-top:8px">নোট লিখুন (ঐচ্ছিক)</div>
            </div>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary" style="background:var(--success)">💳 ৳০ পেমেন্ট করুন</button>
          </div>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ পেমেন্ট সুবিধা</div>
          তারিখ পরিসর নির্বাচন করলে সেই সময়ের মোট বাকি পেমেন্ট স্বয়ংক্রিয়ভাবে হিসাব হয় এবং বাটনে দেখা যায়।
        </div>
      </div>

      <div class="section" id="sec-তালিকা-কলাম">
        <div class="section-title">তালিকা কলাম</div>
        <table class="doc-table">
          <tr><th>কলাম</th><th>বিবরণ</th></tr>
          <tr><td>তারিখ</td><td>কাজের এন্ট্রির তারিখ</td></tr>
          <tr><td>সর্দার</td><td>কোন সর্দারের কাজ</td></tr>
          <tr><td>ইটের পরিমাণ</td><td>উৎপাদিত ইটের সংখ্যা</td></tr>
          <tr><td>প্রতি হাজার রেট</td><td>প্রযোজ্য রেট (চুক্তি বা কাস্টম)</td></tr>
          <tr><td>অবস্থা</td><td>পেমেন্ট অবস্থা</td></tr>
          <tr><td>মোট</td><td>মোট প্রাপ্য অর্থ</td></tr>
          <tr><td>পরিশোধিত</td><td>কত পরিশোধ হয়েছে</td></tr>
          <tr><td>বাকি</td><td>এখনো কত বাকি</td></tr>
          <tr><td>নোট</td><td>অতিরিক্ত মন্তব্য</td></tr>
        </table>
      </div>
    `
  },

  // ===================================================
  // CROP TYPE
  // ===================================================,

  'crop-type': {
    title: 'ক্রপ টাইপ',
    sections: ['ক্রপ টাইপ কী', 'পরিসংখ্যান', 'নতুন ক্রপ টাইপ', 'ফর্মের বিবরণ', 'তালিকা কলাম'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">🌾</div>
        <div>
          <h1>ক্রপ টাইপ</h1>
          <p>সর্দারের গ্রুপ টাইপ — ডিফল্ট রেট ও খোরাকি নির্ধারণ</p>
        </div>
      </div>

      <div class="section" id="sec-ক্রপ-টাইপ-কী">
        <div class="section-title">ক্রপ টাইপ কী?</div>
        <span class="nav-path">মেনু → সর্দার → <strong>ক্রপ টাইপ</strong></span>
        <p><strong>ক্রপ টাইপ</strong> হলো সর্দারের কাজের ধরন বা গ্রুপ ক্যাটাগরি। প্রতিটি ক্রপ টাইপের জন্য একটি ডিফল্ট রেট/হাজার ও ডিফল্ট খোরাকি নির্ধারণ করা যায়। নতুন সর্দার যোগ করার সময় এই ক্রপ টাইপ নির্বাচন করলে তার রেট ও খোরাকি স্বয়ংক্রিয়ভাবে পূরণ হয়।</p>
        <div class="info-box note">
          <div class="info-box-title">💡 উদাহরণ</div>
          "পাথেরা" ক্রপ টাইপের জন্য ডিফল্ট রেট ৳৮০০/হাজার ও ডিফল্ট খোরাকি ৳৫০০০/সপ্তাহ নির্ধারণ করা থাকলে — এই টাইপের যেকোনো নতুন সর্দার যোগ করলে এই মান স্বয়ংক্রিয়ভাবে আসবে।
        </div>
      </div>

      <div class="section" id="sec-পরিসংখ্যান">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <div class="stat-row">
          <div class="stat-card">
            <div class="stat-icon">🌾</div>
            <div><div class="stat-label">মোট টাইপ</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">✅</div>
            <div><div class="stat-label">সক্রিয়</div><div class="stat-value" style="color:var(--success)">০</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">⏸️</div>
            <div><div class="stat-label">নিষ্ক্রিয়</div><div class="stat-value">০</div></div>
          </div>
        </div>
      </div>

      <div class="section" id="sec-নতুন-ক্রপ-টাইপ">
        <div class="section-title">নতুন ক্রপ টাইপ</div>
        <ol class="steps">
          <li>উপরের ডানদিকে <strong>"+ নতুন ক্রপ টাইপ"</strong> বাটনে ক্লিক করুন।</li>
          <li><strong>স্লাগ (ইংরেজি, ছোট হাতে)</strong> লিখুন (যেমন: pathera) — একবার তৈরির পর পরিবর্তন করা যাবে না।</li>
          <li><strong>নাম (বাংলা)</strong> লিখুন (যেমন: পাথেরা)।</li>
          <li><strong>নাম (ইংরেজি)</strong> লিখুন (যেমন: Pathera)।</li>
          <li><strong>ডিফল্ট রেট/হাজার (৳)</strong> লিখুন।</li>
          <li><strong>ডিফল্ট খোরাকি (৳)</strong> লিখুন।</li>
          <li><strong>ব্যাজ রঙ</strong> নির্বাচন করুন — তালিকায় কোন রঙে দেখাবে।</li>
          <li><strong>ক্রম সংখ্যা</strong> দিন — তালিকায় কোন ক্রমে দেখাবে।</li>
          <li><strong>"সংরক্ষণ করুন"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">🌾 নতুন গ্রুপ টাইপ</div>
          <div class="form-row single">
            <div class="form-field">
              <label>স্লাগ (ইংরেজি, ছোট হাতে) <span class="required">*</span></label>
              <div class="field-mock active">e.g. pathera</div>
              <div style="font-size:12px;color:var(--danger);margin-top:4px">একবার তৈরির পর পরিবর্তন করা যাবে না</div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <label>নাম (বাংলা) <span class="required">*</span></label>
              <div class="field-mock">পাথেরা</div>
            </div>
            <div class="form-field">
              <label>নাম (ইংরেজি) <span class="required">*</span></label>
              <div class="field-mock">Pathera</div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <label>ডিফল্ট রেট/হাজার (৳)</label>
              <div class="field-mock">800</div>
            </div>
            <div class="form-field">
              <label>ডিফল্ট খোরাকি (৳)</label>
              <div class="field-mock">5000</div>
            </div>
          </div>
          <div class="form-field" style="margin-bottom:12px">
            <label>ব্যাজ রঙ</label>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
              ${['Blue','Green','Purple','Orange','Red','Yellow','Pink','Teal'].map((c,i) => `<span style="padding:4px 12px;border-radius:20px;font-size:13px;background:${['#dbeafe','#dcfce7','#f3e8ff','#ffedd5','#fee2e2','#fef9c3','#fce7f3','#ccfbf1'][i]};color:${['#1d4ed8','#15803d','#7e22ce','#c2410c','#b91c1c','#a16207','#be185d','#0f766e'][i]};cursor:pointer">${c}</span>`).join('')}
            </div>
          </div>
          <div class="form-row single">
            <div class="form-field">
              <label>ক্রম সংখ্যা</label>
              <div class="field-mock">1</div>
            </div>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">সংরক্ষণ করুন</button>
          </div>
        </div>
      </div>

      <div class="section" id="sec-তালিকা-কলাম">
        <div class="section-title">তালিকা কলাম</div>
        <table class="doc-table">
          <tr><th>কলাম</th><th>বিবরণ</th></tr>
          <tr><td>নাম (বাংলা)</td><td>বাংলায় ক্রপ টাইপের নাম</td></tr>
          <tr><td>রঙ</td><td>নির্বাচিত ব্যাজ রঙের প্রিভিউ</td></tr>
          <tr><td>ডিফল্ট রেট/হাজার</td><td>প্রতি হাজার ইটে ডিফল্ট মজুরি</td></tr>
          <tr><td>ডিফল্ট খোরাকি</td><td>সাপ্তাহিক ডিফল্ট খোরাকি</td></tr>
          <tr><td>ক্রম</td><td>তালিকায় প্রদর্শনের ক্রম</td></tr>
          <tr><td>অবস্থা</td><td>সক্রিয় / নিষ্ক্রিয়</td></tr>
        </table>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ স্লাগ পরিবর্তন করা যাবে না</div>
          স্লাগ একবার তৈরি করার পর আর পরিবর্তন করা যাবে না। তাই সঠিক ইংরেজি slug দিয়ে তৈরি করুন।
        </div>
      </div>
    `
  },

  // ===================================================
  // SARDAR REPORT (bonus page linked from sardar section)
  // ===================================================,

  'sardar-report': {
    title: 'সর্দার রিপোর্ট',
    sections: ['পেজ পরিচিতি', 'পরিসংখ্যান', 'গ্রুপ ভিত্তিক তুলনা', 'সর্দার ব্যালেন্স সারাংশ'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">📊</div>
        <div>
          <h1>সর্দার রিপোর্ট</h1>
          <p>সর্দার সংক্রান্ত বিশ্লেষণ ও রিপোর্ট — এক্সপোর্ট ও প্রিন্ট সুবিধা</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → সর্দার → <strong>সর্দার রিপোর্ট</strong></span>
        <p>এই পেজে সকল সর্দারের সামগ্রিক হিসাব, গ্রুপ ভিত্তিক তুলনা এবং ব্যালেন্স সারাংশ একসাথে দেখা যায়। রিপোর্ট Excel এ এক্সপোর্ট বা প্রিন্ট করা যাবে।</p>
      </div>

      <div class="section" id="sec-পরিসংখ্যান">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <div class="stat-row">
          <div class="stat-card">
            <div class="stat-icon">👤</div>
            <div><div class="stat-label">মোট সর্দার</div><div class="stat-value">০ <span style="font-size:13px;color:var(--success)">০ সক্রিয়</span></div></div>
          </div>
          <div class="stat-card red">
            <div class="stat-icon">💳</div>
            <div><div class="stat-label">মোট দাদন</div><div class="stat-value">৳০</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">🍽️</div>
            <div><div class="stat-label">মোট খোরাকি</div><div class="stat-value">৳০</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">📈</div>
            <div><div class="stat-label">মোট উৎপাদন ক্রেডিট</div><div class="stat-value">৳০</div></div>
          </div>
          <div class="stat-card blue">
            <div class="stat-icon">📊</div>
            <div><div class="stat-label">নিট ব্যালেন্স</div><div class="stat-value">৳০</div></div>
          </div>
        </div>
      </div>

      <div class="section" id="sec-গ্রুপ-ভিত্তিক-তুলনা">
        <div class="section-title">গ্রুপ ভিত্তিক তুলনা ও সর্দার বণ্টন</div>
        <p>পেজের মাঝখানে দুটি চার্ট দেখা যায়:</p>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="fc-icon">📊</div>
            <h5>গ্রুপ ভিত্তিক তুলনা</h5>
            <p>বার চার্টে প্রতিটি ক্রপ টাইপ গ্রুপের দাদন, খোরাকি ও ক্রেডিটের তুলনা দেখায়।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">🥧</div>
            <h5>সর্দার বণ্টন</h5>
            <p>পাই চার্টে গ্রুপ অনুযায়ী সর্দারের বণ্টন শতকরা হারে দেখায়।</p>
          </div>
        </div>
        <p style="margin-top:14px">চার্টের নিচে লেজেন্ড: <span style="color:var(--danger)">■ দাদন</span> &nbsp; <span style="color:var(--warning)">■ খোরাকি</span> &nbsp; <span style="color:var(--success)">■ ক্রেডিট</span></p>
      </div>

      <div class="section" id="sec-সর্দার-ব্যালেন্স-সারাংশ">
        <div class="section-title">সর্দার ব্যালেন্স সারাংশ</div>
        <p>পেজের নিচে প্রতিটি সর্দারের ব্যালেন্স সারাংশ তালিকায় দেখা যায়:</p>
        <table class="doc-table">
          <tr><th>কলাম</th><th>বিবরণ</th></tr>
          <tr><td>সর্দারের নাম</td><td>সর্দারের পরিচয়</td></tr>
          <tr><td>গ্রুপের ধরন</td><td>কোন ক্রপ টাইপ</td></tr>
          <tr><td>মোট ডেবিট</td><td>দাদন + খোরাকি = মোট নেওয়া অর্থ</td></tr>
          <tr><td>মোট ক্রেডিট</td><td>কাজের বিপরীতে মোট প্রাপ্য</td></tr>
          <tr><td>ব্যালেন্স</td><td>নেট ব্যালেন্স (ধনাত্মক = পাওনা, ঋণাত্মক = দেনা)</td></tr>
          <tr><td>স্ট্যাটাস</td><td>সক্রিয় / নিষ্ক্রিয়</td></tr>
        </table>
        <div class="info-box success">
          <div class="info-box-title">✅ এক্সপোর্ট ও প্রিন্ট</div>
          উপরের ডানদিকে <strong>"এক্সপোর্ট"</strong> বাটনে ক্লিক করে Excel ফাইল ডাউনলোড করুন। <strong>"প্রিন্ট"</strong> বাটনে ক্লিক করে সরাসরি প্রিন্ট বা PDF সেভ করুন।
        </div>
      </div>
    `
  },

};
