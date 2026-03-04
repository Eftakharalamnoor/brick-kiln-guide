// pages/settings.js
// মডিউল: সেটিংস — কোম্পানি তথ্য, ব্যাংক, মোবাইল ব্যাংকিং, ক্যাশ টাইপ, পেমেন্ট অ্যাকাউন্ট, ইউজার, রোল

var PAGES_SETTINGS = {

  // ===================================================
  // কোম্পানি তথ্য
  // ===================================================
  settings: {
    title: 'কোম্পানি তথ্য',
    sections: ['পেজ পরিচিতি', 'ফর্মের বিবরণ', 'সেভ করার নিয়ম'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">⚙️</div>
        <div>
          <h1>কোম্পানি তথ্য</h1>
          <p>আপনার ইট ভাটার প্রাথমিক তথ্য এখানে সেট করুন</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → সেটিংস → <strong>কোম্পানি তথ্য</strong></span>
        <p>এই পেজে ইট ভাটার মূল পরিচিতি তথ্য সংরক্ষণ করা হয়। এই তথ্য চালান, গেটপাস ও রিপোর্টে স্বয়ংক্রিয়ভাবে ব্যবহৃত হয়।</p>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ শুধুমাত্র অ্যাডমিন</div>
          এই পেজে পরিবর্তন করার অনুমতি শুধুমাত্র অ্যাডমিন রোলের ইউজারের আছে।
        </div>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">🏢 কোম্পানি তথ্য</div>
          <div class="field-group">
            <div style="display:grid; grid-template-columns:160px 1fr; gap:16px; align-items:start; margin-bottom:14px">
              <div>
                <div style="border:2px dashed var(--border); border-radius:10px; padding:20px; text-align:center; color:var(--text-muted); font-size:13px">
                  🖼️<br>কোম্পানি লেগো<br><small>আপলোড করুন</small>
                </div>
              </div>
              <div>
                <div class="form-row">
                  <div class="form-field">
                    <label>🏢 কোম্পানির নাম</label>
                    <div class="field-mock">আপনার কোম্পানির নাম</div>
                  </div>
                  <div class="form-field">
                    <label>Company Name (English)</label>
                    <div class="field-mock">M/S. Star Bricks</div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-field">
                    <label>👤 মালিকের নাম</label>
                    <div class="field-mock">মালিকের নাম</div>
                  </div>
                  <div class="form-field">
                    <label>📞 ফোন নম্বর</label>
                    <div class="field-mock">০১XXXXXXXXX</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-row single">
              <div class="form-field">
                <label>ট্যাগলাইন</label>
                <div class="field-mock">মানসম্মত ইটের নির্ভরযোগ্য প্রতিষ্ঠান</div>
              </div>
            </div>
            <div class="form-row single">
              <div class="form-field">
                <label>📍 ঠিকানা</label>
                <div class="field-mock" style="height:70px; padding-top:8px">সম্পূর্ণ ঠিকানা</div>
              </div>
            </div>
          </div>
          <div class="form-actions">
            <button class="btn-primary" style="background:var(--success)">🔒 সেভ করুন</button>
          </div>
        </div>

        <table class="doc-table">
          <tr><th>ফিল্ড</th><th>বিবরণ</th><th>বাধ্যতামূলক</th></tr>
          <tr><td>কোম্পানি লেগো</td><td>লোগো ছবি আপলোড করুন (চালান ও রিপোর্টে দেখাবে)</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>কোম্পানির নাম (বাংলা)</td><td>বাংলায় প্রতিষ্ঠানের নাম</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>Company Name (English)</td><td>ইংরেজিতে প্রতিষ্ঠানের নাম</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>মালিকের নাম</td><td>ভাটার মালিকের নাম</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>ফোন নম্বর</td><td>প্রতিষ্ঠানের যোগাযোগ নম্বর</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>ট্যাগলাইন</td><td>প্রতিষ্ঠানের সংক্ষিপ্ত পরিচিতি বাক্য</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>ঠিকানা</td><td>প্রতিষ্ঠানের সম্পূর্ণ ঠিকানা</td><td><span class="badge badge-green">না</span></td></tr>
        </table>
      </div>

      <div class="section" id="sec-সেভ-করার-নিয়ম">
        <div class="section-title">সেভ করার নিয়ম</div>
        <ol class="steps">
          <li>তথ্য পূরণ করুন বা পরিবর্তন করুন।</li>
          <li>পেজের নিচে ডানদিকে <strong>\"🔒 সেভ করুন\"</strong> (সবুজ বাটন) ক্লিক করুন।</li>
          <li>সফল হলে সবুজ বার্তা দেখাবে।</li>
        </ol>
        <div class="info-box tip">
          <div class="info-box-title">💜 টিপস</div>
          কোম্পানির নাম ও লোগো সঠিকভাবে দিলে চালান ও গেটপাস প্রিন্টে পেশাদার দেখাবে।
        </div>
      </div>
    `
  },

  // ===================================================
  // ব্যাংক তালিকা
  // ===================================================
  'bank-list': {
    title: 'ব্যাংক তালিকা',
    sections: ['পেজ পরিচিতি', 'পরিসংখ্যান কার্ড', 'নতুন ব্যাংক যোগ', 'ফর্মের বিবরণ', 'তালিকা কলাম'],
    content: `
      <div class="page-hero" style="background: linear-gradient(135deg, #4f46e5, #7c3aed)">
        <div class="page-hero-icon">🏦</div>
        <div>
          <h1 style="color:white">ব্যাংক ব্যবস্থাপনা</h1>
          <p style="color:rgba(255,255,255,0.85)">ব্যাংক প্রদানকারী এবং তাদের বিবরণ পরিচালনা করুন</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → সেটিংস → <strong>ব্যাংক তালিকা</strong></span>
        <p>এখানে সিস্টেমে ব্যবহারযোগ্য ব্যাংকগুলোর তালিকা তৈরি করা হয়। পেমেন্ট অ্যাকাউন্টে ব্যাংক যোগ করার আগে এখানে ব্যাংক নিবন্ধন করতে হবে।</p>
      </div>

      <div class="section" id="sec-পরিসংখ্যান-কার্ড">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <div class="stat-row">
          <div class="stat-card blue">
            <div class="stat-icon">🏦</div>
            <div><div class="stat-label">মোট ব্যাংক</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">✅</div>
            <div><div class="stat-label">সক্রিয়</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">⏸️</div>
            <div><div class="stat-label">নিষ্ক্রিয়</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">🌐</div>
            <div><div class="stat-label">অনলাইন ব্যাংকিং</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">📱</div>
            <div><div class="stat-label">মোবাইল অ্যাপ</div><div class="stat-value">০</div></div>
          </div>
        </div>
      </div>

      <div class="section" id="sec-নতুন-ব্যাংক-যোগ">
        <div class="section-title">নতুন ব্যাংক যোগ</div>
        <p>উপরের ডানে <strong style="color:var(--primary)">\"+ ব্যাংক যোগ করুন\"</strong> বাটনে ক্লিক করুন।</p>
        <ol class="steps">
          <li><strong>ব্যাংকের নাম</strong> লিখুন — বাধ্যতামূলক। (যেমন: Dutch Bangla Bank)</li>
          <li><strong>সংক্ষিপ্ত নাম</strong> লিখুন। (যেমন: DBBL)</li>
          <li><strong>লেগো URL</strong> — ব্যাংকের লোগোর লিংক দিন (ঐচ্ছিক)।</li>
          <li><strong>সুইফট কোড</strong> ও <strong>রাউটিং ফরম্যাট</strong> দিন।</li>
          <li><strong>যোগাযোগের তথ্য</strong> — ওয়েবসাইট, সাপোর্ট ফোন ও ইমেইল দিন।</li>
          <li><strong>বৈশিষ্ট্য</strong> — অনলাইন ব্যাংকিং ও মোবাইল অ্যাপ টগল করুন।</li>
          <li><strong>সেটিংস</strong> — সর্ট অর্ডার ও সক্রিয় স্ট্যাটাস নির্বাচন করুন।</li>
          <li><strong>\"তৈরি করুন\"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">🏦 ব্যাংক যোগ করুন</div>
          <div class="field-group">
            <div class="field-group-title">📦 মৌলিক তথ্য</div>
            <div class="form-row single"><div class="form-field"><label>ব্যাংকের নাম <span class="required">*</span></label><div class="field-mock active">Dutch Bangla Bank</div></div></div>
            <div class="form-row single"><div class="form-field"><label>সংক্ষিপ্ত নাম</label><div class="field-mock">DBBL</div></div></div>
            <div class="form-row single"><div class="form-field"><label>লেগো URL</label><div class="field-mock">https://example.com/logo.png</div></div></div>
          </div>
          <div class="field-group" style="margin-top:10px">
            <div class="field-group-title">🏧 ব্যাংকিং বিবরণ</div>
            <div class="form-row">
              <div class="form-field"><label>সুইফট কোড</label><div class="field-mock">DBLBDDH</div></div>
              <div class="form-field"><label>রাউটিং ফরম্যাট</label><div class="field-mock">9 digits</div></div>
            </div>
          </div>
          <div class="field-group" style="margin-top:10px">
            <div class="field-group-title">📞 যোগাযোগের তথ্য</div>
            <div class="form-row single"><div class="form-field"><label>ওয়েবসাইট</label><div class="field-mock">https://www.bank.com</div></div></div>
            <div class="form-row">
              <div class="form-field"><label>সাপোর্ট ফোন</label><div class="field-mock">+880 XXX XXXXXX</div></div>
              <div class="form-field"><label>সাপোর্ট ইমেইল</label><div class="field-mock">support@bank.com</div></div>
            </div>
          </div>
          <div class="field-group" style="margin-top:10px">
            <div class="field-group-title">✨ বৈশিষ্ট্য</div>
            <div class="toggle-row"><span class="toggle-label">অনলাইন ব্যাংকিং</span><div class="toggle-mock"><div class="toggle-pill"></div></div></div>
            <div class="toggle-row" style="margin-top:8px"><span class="toggle-label">মোবাইল অ্যাপ</span><div class="toggle-mock"><div class="toggle-pill"></div></div></div>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">তৈরি করুন</button>
          </div>
        </div>
      </div>

      <div class="section" id="sec-তালিকা-কলাম">
        <div class="section-title">তালিকা কলাম</div>
        <table class="doc-table">
          <tr><th>কলাম</th><th>বিবরণ</th></tr>
          <tr><td>#</td><td>ক্রমিক নম্বর</td></tr>
          <tr><td>ব্যাংকের নাম</td><td>ব্যাংকের পূর্ণ নাম ও সংক্ষিপ্ত নাম</td></tr>
          <tr><td>সুইফট কোড</td><td>আন্তর্জাতিক ব্যাংক কোড</td></tr>
          <tr><td>বৈশিষ্ট্য</td><td>অনলাইন ব্যাংকিং / মোবাইল অ্যাপ আছে কিনা</td></tr>
          <tr><td>স্ট্যাটাস</td><td>সক্রিয় বা নিষ্ক্রিয়</td></tr>
          <tr><td>কার্যক্রম</td><td>এডিট বা মুছে ফেলা</td></tr>
        </table>
      </div>
    `
  },

  // ===================================================
  // মোবাইল ব্যাংকিং তালিকা
  // ===================================================
  'mobile-banking': {
    title: 'মোবাইল ব্যাংকিং তালিকা',
    sections: ['পেজ পরিচিতি', 'পরিসংখ্যান কার্ড', 'নতুন প্রদানকারী যোগ', 'ফর্মের বিবরণ', 'তালিকা কলাম'],
    content: `
      <div class="page-hero" style="background: linear-gradient(135deg, #16a34a, #15803d)">
        <div class="page-hero-icon">📱</div>
        <div>
          <h1 style="color:white">মোবাইল ব্যাংকিং প্রদানকারী</h1>
          <p style="color:rgba(255,255,255,0.85)">মোবাইল ওয়ালেট প্রদানকারী এবং তাদের বিবরণ পরিচালনা করুন</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → সেটিংস → <strong>মোবাইল ব্যাংকিং তালিকা</strong></span>
        <p>এখানে bKash, Nagad, Rocket-এর মতো মোবাইল ব্যাংকিং প্রদানকারীদের তথ্য সংরক্ষণ করা হয়। পেমেন্ট গ্রহণ ও প্রদানে এই প্রদানকারীরা ব্যবহৃত হয়।</p>
      </div>

      <div class="section" id="sec-পরিসংখ্যান-কার্ড">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <div class="stat-row">
          <div class="stat-card">
            <div class="stat-icon">📱</div>
            <div><div class="stat-label">মোট</div><div class="stat-value">১</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">✅</div>
            <div><div class="stat-label">সক্রিয়</div><div class="stat-value">১</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">⏸️</div>
            <div><div class="stat-label">নিষ্ক্রিয়</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">📷</div>
            <div><div class="stat-label">QR পেমেন্ট</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">💳</div>
            <div><div class="stat-label">POS</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card blue">
            <div class="stat-icon">📊</div>
            <div><div class="stat-label">গড় সীমা</div><div class="stat-value">৳২,০০০</div></div>
          </div>
        </div>
      </div>

      <div class="section" id="sec-নতুন-প্রদানকারী-যোগ">
        <div class="section-title">নতুন প্রদানকারী যোগ</div>
        <p>উপরে ডানে <strong style="color:var(--primary)">\"+ প্রদানকারী যোগ করুন\"</strong> বাটনে ক্লিক করুন।</p>
        <ol class="steps">
          <li><strong>প্রদানকারীর নাম</strong> লিখুন — বাধ্যতামূলক। (যেমন: bKash, Nagad)</li>
          <li><strong>লেগো URL</strong> — প্রদানকারীর লোগো লিংক দিন।</li>
          <li><strong>সার্ভিস আ্যকাউন্ট ধরন</strong> — ব্যক্তিগত, এজেন্ট, মার্চেন্ট টগল করুন।</li>
          <li><strong>লেনদেনের সীমা</strong> — দৈনিক ও মাসিক সীমা দিন।</li>
          <li><strong>ফি কাঠামো</strong> — ক্যাশ-ইন, ক্যাশ-আউট, সেন্ড-মানি % দিন।</li>
          <li><strong>প্ল্যাটফর্ম</strong> — Play Store ও App Store লিংক দিন।</li>
          <li><strong>বৈশিষ্ট্য</strong> — QR পেমেন্ট, POS, ব্যালেন্স চেক টগল করুন।</li>
          <li><strong>\"তৈরি করুন\"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">📱 প্রদানকারী যোগ করুন</div>
          <div class="field-group">
            <div class="field-group-title">📦 মৌলিক তথ্য</div>
            <div class="form-row single"><div class="form-field"><label>প্রদানকারীর নাম <span class="required">*</span></label><div class="field-mock active">bKash</div></div></div>
            <div class="form-row single"><div class="form-field"><label>লেগো URL</label><div class="field-mock">https://example.com/logo.png</div></div></div>
          </div>
          <div class="field-group" style="margin-top:10px">
            <div class="field-group-title">💳 সার্ভিস আ্যকাউন্ট ধরন</div>
            <div class="toggle-row"><span class="toggle-label">ব্যক্তিগত আ্যকাউন্ট</span><div class="toggle-mock"><div class="toggle-pill active"></div></div></div>
            <div class="toggle-row" style="margin-top:6px"><span class="toggle-label">এজেন্ট আ্যকাউন্ট</span><div class="toggle-mock"><div class="toggle-pill active"></div></div></div>
            <div class="toggle-row" style="margin-top:6px"><span class="toggle-label">মার্চেন্ট আ্যকাউন্ট</span><div class="toggle-mock"><div class="toggle-pill active"></div></div></div>
          </div>
          <div class="field-group" style="margin-top:10px">
            <div class="field-group-title">💰 লেনদেনের সীমা</div>
            <div class="form-row">
              <div class="form-field"><label>দৈনিক সীমা</label><div class="field-mock">20000.00</div></div>
              <div class="form-field"><label>মাসিক সীমা</label><div class="field-mock">50000.00</div></div>
            </div>
          </div>
          <div class="field-group" style="margin-top:10px">
            <div class="field-group-title">📊 ফি কাঠামো (%)</div>
            <div class="form-row" style="grid-template-columns:1fr 1fr 1fr">
              <div class="form-field"><label>ক্যাশ-ইন</label><div class="field-mock">0</div></div>
              <div class="form-field"><label>ক্যাশ-আউট %</label><div class="field-mock">1.85</div></div>
              <div class="form-field"><label>সেন্ড-মানি</label><div class="field-mock">1.0</div></div>
            </div>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">তৈরি করুন</button>
          </div>
        </div>

        <table class="doc-table">
          <tr><th>কলাম (তালিকায়)</th><th>বিবরণ</th></tr>
          <tr><td>#</td><td>ক্রমিক নম্বর</td></tr>
          <tr><td>প্রদানকারীর নাম</td><td>মোবাইল ব্যাংকিং সেবার নাম</td></tr>
          <tr><td>আ্যকাউন্টের ধরন</td><td>Personal / Agent / Merchant ব্যাজে দেখাবে</td></tr>
          <tr><td>দৈনিক সীমা</td><td>প্রতিদিন সর্বোচ্চ লেনদেনের পরিমাণ</td></tr>
          <tr><td>বৈশিষ্ট্য</td><td>QR, POS ইত্যাদি সুবিধা</td></tr>
          <tr><td>স্ট্যাটাস</td><td>সক্রিয় (কমলা) বা নিষ্ক্রিয়</td></tr>
          <tr><td>কার্যক্রম (⋯)</td><td>এডিট বা মুছে ফেলা</td></tr>
        </table>
      </div>
    `
  },

  // ===================================================
  // ক্যাশ টাইপ তালিকা
  // ===================================================
  'cash-type': {
    title: 'ক্যাশ টাইপ তালিকা',
    sections: ['পেজ পরিচিতি', 'পরিসংখ্যান কার্ড', 'নতুন ক্যাশ টাইপ যোগ', 'ফর্মের বিবরণ'],
    content: `
      <div class="page-hero" style="background: linear-gradient(135deg, #ea580c, #c2410c)">
        <div class="page-hero-icon">💵</div>
        <div>
          <h1 style="color:white">Cash Types</h1>
          <p style="color:rgba(255,255,255,0.85)">Manage cash categories and classifications</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → সেটিংস → <strong>ক্যাশ টাইপ তালিকা</strong></span>
        <p>নগদ অর্থের বিভিন্ন ক্যাটাগরি এখানে সংজ্ঞায়িত করা হয়। যেমন: Petty Cash, Main Cash, Vault ইত্যাদি। প্রতিটি ক্যাশ টাইপের আলাদা সীমা ও মিলানোর নিয়ম থাকতে পারে।</p>
        <div class="info-box note">
          <div class="info-box-title">💡 Daily Reconciliation কী?</div>
          Daily Reconciliation চালু থাকলে প্রতিদিন এই ক্যাশের হিসাব মিলিয়ে দেখতে হবে। এটি নগদ অর্থের সঠিকতা নিশ্চিত করে।
        </div>
      </div>

      <div class="section" id="sec-পরিসংখ্যান-কার্ড">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <div class="stat-row">
          <div class="stat-card">
            <div class="stat-icon">💵</div>
            <div><div class="stat-label">Total Types</div><div class="stat-value">১</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">✅</div>
            <div><div class="stat-label">Active</div><div class="stat-value">১</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">⏸️</div>
            <div><div class="stat-label">Inactive</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card blue">
            <div class="stat-icon">🛒</div>
            <div><div class="stat-label">Daily Recon.</div><div class="stat-value">১</div></div>
          </div>
        </div>
      </div>

      <div class="section" id="sec-নতুন-ক্যাশ-টাইপ-যোগ">
        <div class="section-title">নতুন ক্যাশ টাইপ যোগ</div>
        <p>উপরে ডানে <strong style="color:var(--primary)">\"+ Add Cash Type\"</strong> বাটনে ক্লিক করুন।</p>
        <ol class="steps">
          <li><strong>Cash Type Name</strong> লিখুন — বাধ্যতামূলক। (যেমন: Petty Cash)</li>
          <li><strong>Description</strong> লিখুন — এই ক্যাশের উদ্দেশ্য বর্ণনা করুন।</li>
          <li><strong>Icon</strong> নির্বাচন করুন — ভিজ্যুয়াল পরিচিতির জন্য।</li>
          <li><strong>Color Code</strong> দিন — রঙ দিয়ে সহজে চেনা যাবে।</li>
          <li><strong>Suggested Limit</strong> দিন — সর্বোচ্চ সুপারিশকৃত পরিমাণ।</li>
          <li><strong>Daily Reconciliation</strong> — প্রতিদিন মেলানো দরকার হলে চালু করুন।</li>
          <li><strong>Sort Order</strong> — ড্রপডাউনে কোন ক্রমে দেখাবে।</li>
          <li><strong>Active Status</strong> টগল করুন।</li>
          <li><strong>\"Create\"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">💵 Add Cash Type</div>
          <div class="field-group">
            <div class="field-group-title">Basic Information</div>
            <div class="form-row single"><div class="form-field"><label>Cash Type Name <span class="required">*</span></label><div class="field-mock active">Petty Cash</div></div></div>
            <div class="form-row single"><div class="form-field"><label>Description</label><div class="field-mock" style="height:50px">For small daily expenses...</div></div></div>
          </div>
          <div class="field-group" style="margin-top:10px">
            <div class="field-group-title">Visual Settings</div>
            <div class="form-row single"><div class="form-field"><label>Icon</label><div class="field-mock">Select an icon ▼</div></div></div>
            <div class="form-row single"><div class="form-field"><label>Color Code</label><div class="field-mock">#FF5733 <span style="display:inline-block;width:20px;height:20px;background:#FF5733;border-radius:4px;vertical-align:middle"></span></div></div></div>
          </div>
          <div class="field-group" style="margin-top:10px">
            <div class="field-group-title">Financial Settings</div>
            <div class="form-row single"><div class="form-field"><label>Suggested Limit</label><div class="field-mock">10000.00</div></div></div>
            <div class="toggle-row"><span class="toggle-label">Daily Reconciliation</span><div class="toggle-mock"><div class="toggle-pill"></div></div></div>
          </div>
          <div class="field-group" style="margin-top:10px">
            <div class="field-group-title">Settings</div>
            <div class="form-row single"><div class="form-field"><label>Sort Order</label><div class="field-mock">0</div></div></div>
            <div class="toggle-row"><span class="toggle-label">Active Status</span><div class="toggle-mock"><div class="toggle-pill active"></div></div></div>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">Cancel</button>
            <button class="btn-primary">Create</button>
          </div>
        </div>

        <table class="doc-table">
          <tr><th>কলাম (তালিকায়)</th><th>বিবরণ</th></tr>
          <tr><td>Cash Type</td><td>ক্যাশের নাম ও আইকন</td></tr>
          <tr><td>Suggested Limit</td><td>সর্বোচ্চ সুপারিশকৃত পরিমাণ</td></tr>
          <tr><td>Reconciliation</td><td>Daily বা None ব্যাজে দেখাবে</td></tr>
          <tr><td>Status</td><td>Active (কমলা) বা Inactive</td></tr>
          <tr><td>Actions (⋯)</td><td>এডিট বা মুছে ফেলা</td></tr>
        </table>
      </div>
    `
  },

  // ===================================================
  // পেমেন্ট অ্যাকাউন্ট
  // ===================================================
  'payment-account': {
    title: 'পেমেন্ট অ্যাকাউন্ট',
    sections: ['পেজ পরিচিতি', 'পরিসংখ্যান কার্ড', 'নতুন অ্যাকাউন্ট যোগ', 'ফর্মের বিবরণ', 'তালিকা কলাম'],
    content: `
      <div class="page-hero" style="background: linear-gradient(135deg, #7c3aed, #4f46e5)">
        <div class="page-hero-icon">💳</div>
        <div>
          <h1 style="color:white">পেমেন্ট অ্যাকাউন্ট</h1>
          <p style="color:rgba(255,255,255,0.85)">ব্যাংক, মোবাইল ব্যাংকিং এবং নগদ অ্যাকাউন্ট পরিচালনা করুন</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → সেটিংস → <strong>পেমেন্ট অ্যাকাউন্ট</strong></span>
        <p>এখানে সকল পেমেন্ট অ্যাকাউন্ট (ব্যাংক, মোবাইল ব্যাংকিং, নগদ) যোগ করা হয়। ক্রয় ও বিক্রয়ের পেমেন্ট রেকর্ডে এই অ্যাকাউন্টগুলো ব্যবহৃত হয়।</p>
        <div class="info-box note">
          <div class="info-box-title">💡 আগে করুন</div>
          ব্যাংক অ্যাকাউন্ট যোগ করার আগে <strong>ব্যাংক তালিকায়</strong> সেই ব্যাংক যোগ করুন। মোবাইল অ্যাকাউন্টের জন্য <strong>মোবাইল ব্যাংকিং তালিকায়</strong> প্রদানকারী যোগ করুন।
        </div>
      </div>

      <div class="section" id="sec-পরিসংখ্যান-কার্ড">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <div class="stat-row">
          <div class="stat-card blue">
            <div class="stat-icon">💳</div>
            <div><div class="stat-label">মোট</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">🏦</div>
            <div><div class="stat-label">ব্যাংক</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">📱</div>
            <div><div class="stat-label">মোবাইল</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">💵</div>
            <div><div class="stat-label">নগদ</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">✅</div>
            <div><div class="stat-label">সক্রিয়</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card blue">
            <div class="stat-icon">📊</div>
            <div><div class="stat-label">ব্যালেন্স</div><div class="stat-value">৳০</div></div>
          </div>
        </div>
      </div>

      <div class="section" id="sec-নতুন-অ্যাকাউন্ট-যোগ">
        <div class="section-title">নতুন অ্যাকাউন্ট যোগ</div>
        <p>উপরে ডানে <strong style="color:var(--primary)">\"+ পেমেন্ট অ্যাকাউন্ট যোগ করুন\"</strong> বাটনে ক্লিক করুন।</p>
        <ol class="steps">
          <li><strong>অ্যাকাউন্টের ধরন</strong> নির্বাচন করুন — ব্যাংক, মোবাইল, বা ক্যাশের ঘর।</li>
          <li>ধরন অনুযায়ী <strong>ব্যাংক / প্রদানকারী নির্বাচন</strong> করুন।</li>
          <li><strong>অ্যাকাউন্টের নাম</strong> লিখুন — বাধ্যতামূলক।</li>
          <li><strong>অ্যাকাউন্ট নম্বর</strong> দিন।</li>
          <li><strong>শাখার নাম</strong> ও <strong>রাউটিং নম্বর</strong> দিন (ব্যাংকের ক্ষেত্রে)।</li>
          <li><strong>ধারকের নাম, ফোন, ইমেইল</strong> দিন।</li>
          <li><strong>প্রারম্ভিক ব্যালেন্স</strong> দিন।</li>
          <li><strong>সেটিংস</strong> — সক্রিয়, ডিফল্ট, অনুমোদন প্রয়োজন টগল করুন।</li>
          <li><strong>\"তৈরি করুন\"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">💳 পেমেন্ট অ্যাকাউন্ট যোগ করুন</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:14px">
            <div style="border:2px solid var(--primary);border-radius:8px;padding:12px;text-align:center;background:#fff7ed">
              <div style="font-size:18px">🏦</div>
              <div style="font-size:13px;font-weight:600;margin-top:4px">ব্যাংক</div>
            </div>
            <div style="border:1px solid var(--border);border-radius:8px;padding:12px;text-align:center">
              <div style="font-size:18px">📱</div>
              <div style="font-size:13px;margin-top:4px">মোবাইল</div>
            </div>
            <div style="border:1px solid var(--border);border-radius:8px;padding:12px;text-align:center">
              <div style="font-size:18px">💵</div>
              <div style="font-size:13px;margin-top:4px">ক্যাশের ঘর</div>
            </div>
          </div>
          <div class="field-group">
            <div class="field-group-title">🏦 অ্যাকাউন্ট বিবরণ</div>
            <div class="form-row single"><div class="form-field"><label>ব্যাংক নির্বাচন করুন <span class="required">*</span></label><div class="field-mock">একটি ব্যাংক বেছে নিন ▼</div></div></div>
            <div class="form-row single"><div class="form-field"><label>অ্যাকাউন্টের নাম <span class="required">*</span></label><div class="field-mock active">Main Operating Account</div></div></div>
            <div class="form-row single"><div class="form-field"><label>অ্যাকাউন্ট নম্বর</label><div class="field-mock">1234567890</div></div></div>
            <div class="form-row">
              <div class="form-field"><label>শাখার নাম</label><div class="field-mock">Gulshan Branch</div></div>
              <div class="form-field"><label>রাউটিং নম্বর</label><div class="field-mock">070123456</div></div>
            </div>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">তৈরি করুন</button>
          </div>
        </div>
      </div>

      <div class="section" id="sec-তালিকা-কলাম">
        <div class="section-title">তালিকা কলাম</div>
        <table class="doc-table">
          <tr><th>কলাম</th><th>বিবরণ</th></tr>
          <tr><td>অ্যাকাউন্ট</td><td>অ্যাকাউন্টের নাম ও ব্যাংক/প্রদানকারীর নাম</td></tr>
          <tr><td>ধরন</td><td>ব্যাংক / মোবাইল / নগদ</td></tr>
          <tr><td>অ্যাকাউন্ট নম্বর</td><td>অ্যাকাউন্টের নম্বর</td></tr>
          <tr><td>ধারক</td><td>অ্যাকাউন্ট ধারকের নাম</td></tr>
          <tr><td>ব্যালেন্স</td><td>বর্তমান ব্যালেন্স</td></tr>
          <tr><td>স্ট্যাটাস</td><td>সক্রিয় বা নিষ্ক্রিয়</td></tr>
          <tr><td>কার্যক্রম</td><td>এডিট বা মুছে ফেলা</td></tr>
        </table>
      </div>
    `
  },

  // ===================================================
  // ইউজার ম্যানেজমেন্ট
  // ===================================================
  'user-management': {
    title: 'ইউজার ম্যানেজমেন্ট',
    sections: ['পেজ পরিচিতি', 'নতুন ইউজার যোগ', 'ফর্মের বিবরণ', 'তালিকা কলাম'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">👥</div>
        <div>
          <h1>ইউজার ম্যানেজমেন্ট</h1>
          <p>সিস্টেম ব্যবহারকারীদের তৈরি ও পরিচালনা করুন</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → সেটিংস → <strong>ইউজার ম্যানেজমেন্ট</strong></span>
        <p>এখানে সিস্টেমের সকল ব্যবহারকারীর তথ্য সংরক্ষণ ও পরিচালনা করা হয়। প্রতিটি ইউজারকে একটি রোল দেওয়া হয় যা তার অ্যাক্সেস নির্ধারণ করে।</p>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ শুধুমাত্র অ্যাডমিন</div>
          নতুন ইউজার তৈরি ও রোল পরিবর্তন শুধুমাত্র অ্যাডমিন করতে পারবেন।
        </div>
      </div>

      <div class="section" id="sec-নতুন-ইউজার-যোগ">
        <div class="section-title">নতুন ইউজার যোগ</div>
        <ol class="steps">
          <li>উপরের ডানে <strong>\"+ নতুন ইউজার\"</strong> বাটনে ক্লিক করুন।</li>
          <li><strong>নাম</strong> লিখুন — বাধ্যতামূলক।</li>
          <li><strong>ইমেইল</strong> লিখুন — লগইনে ব্যবহৃত হবে।</li>
          <li><strong>পাসওয়ার্ড</strong> দিন — কমপক্ষে ৮ অক্ষর।</li>
          <li><strong>রোল</strong> নির্বাচন করুন — অ্যাডমিন, ম্যানেজার ইত্যাদি।</li>
          <li><strong>স্ট্যাটাস</strong> সক্রিয় রাখুন।</li>
          <li><strong>\"সংরক্ষণ\"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ পাসওয়ার্ড নিরাপত্তা</div>
          ইউজার তৈরির পর তাকে প্রথম লগইনে পাসওয়ার্ড পরিবর্তন করতে বলুন।
        </div>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">👤 নতুন ইউজার যোগ করুন</div>
          <div class="field-group">
            <div class="field-group-title" style="color:var(--primary)">• মৌলিক তথ্য</div>
            <div class="form-row single"><div class="form-field"><label>নাম <span class="required">*</span></label><div class="field-mock active">পূর্ণ নাম</div></div></div>
            <div class="form-row single"><div class="form-field"><label>ইমেইল <span class="required">*</span></label><div class="field-mock">email@example.com</div></div></div>
            <div class="form-row single"><div class="form-field"><label>পাসওয়ার্ড <span class="required">*</span></label><div class="field-mock">••••••••</div></div></div>
            <div class="form-row">
              <div class="form-field"><label>রোল <span class="required">*</span></label><div class="field-mock">রোল নির্বাচন করুন ▼</div></div>
              <div class="form-field"><label>স্ট্যাটাস</label><div class="field-mock">সক্রিয় ▼</div></div>
            </div>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">সংরক্ষণ</button>
          </div>
        </div>

        <table class="doc-table">
          <tr><th>ফিল্ড</th><th>বিবরণ</th><th>বাধ্যতামূলক</th></tr>
          <tr><td>নাম</td><td>ব্যবহারকারীর পূর্ণ নাম</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>ইমেইল</td><td>লগইন ইমেইল — একটিমাত্র অ্যাকাউন্টে ব্যবহার হবে</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>পাসওয়ার্ড</td><td>কমপক্ষে ৮ অক্ষরের পাসওয়ার্ড</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>রোল</td><td>ইউজারের অ্যাক্সেস লেভেল নির্ধারণ করে</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>স্ট্যাটাস</td><td>সক্রিয় থাকলে লগইন করতে পারবে</td><td><span class="badge badge-green">না</span></td></tr>
        </table>
      </div>

      <div class="section" id="sec-তালিকা-কলাম">
        <div class="section-title">তালিকা কলাম</div>
        <table class="doc-table">
          <tr><th>কলাম</th><th>বিবরণ</th></tr>
          <tr><td>নাম</td><td>ইউজারের নাম ও ইমেইল</td></tr>
          <tr><td>রোল</td><td>অ্যাডমিন / ম্যানেজার ইত্যাদি ব্যাজে</td></tr>
          <tr><td>শেষ লগইন</td><td>সর্বশেষ কখন লগইন করেছে</td></tr>
          <tr><td>স্ট্যাটাস</td><td>সক্রিয় বা নিষ্ক্রিয়</td></tr>
          <tr><td>কার্যক্রম</td><td>এডিট, পাসওয়ার্ড রিসেট বা নিষ্ক্রিয় করা</td></tr>
        </table>
        <div class="info-box tip">
          <div class="info-box-title">💜 টিপস</div>
          কোনো কর্মী চলে গেলে তার অ্যাকাউন্ট মুছে না দিয়ে <strong>নিষ্ক্রিয়</strong> করুন — হিসাবের ইতিহাস ঠিক থাকবে।
        </div>
      </div>
    `
  },

  // ===================================================
  // রোল ম্যানেজমেন্ট
  // ===================================================
  roles: {
    title: 'রোল ম্যানেজমেন্ট',
    sections: ['পেজ পরিচিতি', 'পরিসংখ্যান কার্ড', 'রোল তালিকা', 'নতুন রোল তৈরি', 'পারমিশন নির্বাচন', 'মডিউল পারমিশন তালিকা'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">🛡️</div>
        <div>
          <h1>রোল ম্যানেজমেন্ট</h1>
          <p>সিস্টেমের রোল ও পারমিশন ব্যবস্থাপনা</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → সেটিংস → <strong>রোল ম্যানেজমেন্ট</strong></span>
        <p>এখানে সিস্টেমের সকল রোল তৈরি ও পরিচালনা করা হয়। প্রতিটি রোলে নির্দিষ্ট মডিউলের নির্দিষ্ট পারমিশন দেওয়া যায়। ইউজারকে রোল দিলে সে শুধু সেই পারমিশন অনুযায়ী কাজ করতে পারবে।</p>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ শুধুমাত্র অ্যাডমিন</div>
          রোল তৈরি ও পারমিশন পরিবর্তন শুধুমাত্র অ্যাডমিন করতে পারবেন।
        </div>
      </div>

      <div class="section" id="sec-পরিসংখ্যান-কার্ড">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <div class="stat-row">
          <div class="stat-card">
            <div class="stat-icon">🛡️</div>
            <div><div class="stat-label">মোট রোল</div><div class="stat-value">২</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">✅</div>
            <div><div class="stat-label">মোট পারমিশন</div><div class="stat-value">৫১</div></div>
          </div>
          <div class="stat-card blue">
            <div class="stat-icon">🔒</div>
            <div><div class="stat-label">সিস্টেম রোল</div><div class="stat-value">১</div></div>
          </div>
        </div>
        <div class="info-box note">
          <div class="info-box-title">💡 সিস্টেম রোল কী?</div>
          <strong>সিস্টেম রোল</strong> হলো সিস্টেমের ডিফল্ট রোল (যেমন: অ্যাডমিন)। এটি মুছে ফেলা যায় না এবং এর পারমিশন পরিবর্তন করা যায় না।
        </div>
      </div>

      <div class="section" id="sec-রোল-তালিকা">
        <div class="section-title">রোল তালিকা</div>
        <p>প্রতিটি রোলের কার্ডে যা দেখা যায়:</p>
        <div style="border:1px solid var(--border); border-radius:10px; padding:14px; margin-bottom:10px">
          <div style="display:flex; justify-content:space-between; align-items:center">
            <div style="display:flex; align-items:center; gap:10px">
              <div style="background:#fff7ed; border-radius:8px; padding:8px; font-size:20px">🔒</div>
              <div>
                <div style="font-weight:700; font-size:15px">অ্যাডমিন <span class="badge badge-orange" style="font-size:11px; margin-left:4px">সিস্টেম</span></div>
                <div style="font-size:13px; color:var(--text-muted); margin-top:2px">সিস্টেমের সকল অনুমতি সহ প্রধান প্রশাসক</div>
              </div>
            </div>
            <div style="display:flex; align-items:center; gap:16px; font-size:13px; color:var(--text-muted)">
              <span>👥 ১ ইউজার</span>
              <span>👁️ ৫১ পারমিশন</span>
              <span style="font-size:20px">⋯</span>
            </div>
          </div>
        </div>
        <div style="border:1px solid var(--border); border-radius:10px; padding:14px">
          <div style="display:flex; justify-content:space-between; align-items:center">
            <div style="display:flex; align-items:center; gap:10px">
              <div style="background:#fff7ed; border-radius:8px; padding:8px; font-size:20px">🛡️</div>
              <div>
                <div style="font-weight:700; font-size:15px">manager</div>
                <div style="font-size:13px; color:var(--text-muted); margin-top:2px">manager</div>
              </div>
            </div>
            <div style="display:flex; align-items:center; gap:16px; font-size:13px; color:var(--text-muted)">
              <span>👥 ১ ইউজার</span>
              <span>👁️ ৪ পারমিশন</span>
              <span style="font-size:20px">⋯</span>
            </div>
          </div>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ কার্ডে যা দেখায়</div>
          <ul class="bullet-list">
            <li><strong>রোলের নাম:</strong> সিস্টেম রোল হলে "সিস্টেম" ব্যাজ দেখাবে।</li>
            <li><strong>বিবরণ:</strong> রোলের সংক্ষিপ্ত পরিচিতি।</li>
            <li><strong>ইউজার সংখ্যা:</strong> এই রোলে কতজন ইউজার আছে।</li>
            <li><strong>পারমিশন সংখ্যা:</strong> মোট কতটি পারমিশন দেওয়া আছে।</li>
            <li><strong>⋯ মেনু:</strong> এডিট বা মুছে ফেলার অপশন।</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-নতুন-রোল-তৈরি">
        <div class="section-title">নতুন রোল তৈরি</div>
        <p>উপরের ডানে <strong style="color:var(--success)">\"+ নতুন রোল\"</strong> (সবুজ বাটন) ক্লিক করুন।</p>
        <ol class="steps">
          <li><strong>রোলের নাম</strong> লিখুন — বাধ্যতামূলক। (যেমন: অ্যাকাউন্টেন্ট)</li>
          <li><strong>স্লাগ</strong> — ইংরেজিতে স্বয়ংক্রিয় তৈরি হয়। (যেমন: accountant)</li>
          <li><strong>বিবরণ</strong> লিখুন — রোলের কাজ কী।</li>
          <li><strong>পারমিশন নির্বাচন</strong> বিভাগে প্রতিটি মডিউলের পারমিশন টিক দিন।</li>
          <li><strong>\"সকল নির্বাচন\"</strong> চেকবক্সে টিক দিলে সব পারমিশন একসাথে নির্বাচন হবে।</li>
          <li><strong>\"তৈরি করুন\"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
        <div class="form-mock">
          <div class="form-mock-title">🛡️ নতুন রোল তৈরি</div>
          <div class="form-row">
            <div class="form-field">
              <label>রোলের নাম <span class="required">*</span></label>
              <div class="field-mock active">যেমন: অ্যাকাউন্টেন্ট</div>
            </div>
            <div class="form-field">
              <label>স্লাগ <span class="required">*</span></label>
              <div class="field-mock" style="color:var(--text-muted)">accountant</div>
            </div>
          </div>
          <div class="form-row single">
            <div class="form-field">
              <label>বিবরণ</label>
              <div class="field-mock" style="height:50px">রোলের বিবরণ লিখুন...</div>
            </div>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">তৈরি করুন</button>
          </div>
        </div>
      </div>

      <div class="section" id="sec-পারমিশন-নির্বাচন">
        <div class="section-title">পারমিশন নির্বাচন</div>
        <p>ফর্মে <strong>পারমিশন নির্বাচন</strong> বিভাগে প্রতিটি মডিউল আলাদা বক্সে থাকে। প্রতিটি পারমিশন আলাদা রঙের ব্যাজে চেনা যায়:</p>
        <table class="doc-table">
          <tr><th>পারমিশন</th><th>ব্যাজ</th><th>বিবরণ</th></tr>
          <tr><td>দেখুন (View)</td><td><span class="badge badge-blue">নীল</span></td><td>তালিকা ও বিস্তারিত দেখতে পারবে</td></tr>
          <tr><td>মুছুন (Delete)</td><td><span class="badge badge-red">লাল</span></td><td>রেকর্ড মুছে ফেলতে পারবে</td></tr>
          <tr><td>সম্পাদনা (Edit)</td><td><span class="badge badge-orange">কমলা</span></td><td>বিদ্যমান রেকর্ড পরিবর্তন করতে পারবে</td></tr>
          <tr><td>তৈরি (Create)</td><td><span class="badge badge-green">সবুজ</span></td><td>নতুন রেকর্ড যোগ করতে পারবে</td></tr>
          <tr><td>ম্যানেজ (Manage)</td><td><span class="badge badge-purple">বেগুনি</span></td><td>বিশেষ ব্যবস্থাপনা অ্যাক্সেস</td></tr>
        </table>
        <div class="info-box note">
          <div class="info-box-title">💡 দ্রুত নির্বাচন</div>
          প্রতিটি মডিউল বক্সের উপরে চেকবক্সে টিক দিলে সেই মডিউলের সব পারমিশন একসাথে নির্বাচন হবে। একদম উপরে <strong>"সকল নির্বাচন"</strong> চেকবক্সে টিক দিলে সব মডিউলের সব পারমিশন একসাথে নির্বাচন হবে।
        </div>
      </div>

      <div class="section" id="sec-মডিউল-পারমিশন-তালিকা">
        <div class="section-title">মডিউল পারমিশন তালিকা</div>
        <p>সিস্টেমে মোট <strong>১৪টি মডিউলের</strong> পারমিশন নির্বাচন করা যায়। প্রতিটি মডিউলে সর্বোচ্চ পারমিশন সংখ্যা স্ক্রিনে দেখানো থাকে (যেমন ৪/৪, ৫/৫):</p>
        <table class="doc-table">
          <tr><th>মডিউল</th><th>সর্বোচ্চ পারমিশন</th><th>পারমিশনের ধরন</th></tr>
          <tr><td>📊 অ্যাকাউন্টস</td><td>৪/৪</td><td>দেখুন, তৈরি, সম্পাদনা, মুছুন</td></tr>
          <tr><td>🧾 চালান</td><td>৪/৪</td><td>দেখুন, তৈরি, সম্পাদনা, মুছুন</td></tr>
          <tr><td>🧑‍💼 কাস্টমার</td><td>৫/৫</td><td>ম্যানেজমেন্ট দেখুন, দেখুন, তৈরি, সম্পাদনা, মুছুন</td></tr>
          <tr><td>📈 ড্যাশবোর্ড</td><td>১/১</td><td>দেখুন</td></tr>
          <tr><td>🚛 ডেলিভারি</td><td>৪/৪</td><td>দেখুন, তৈরি, সম্পাদনা, মুছুন</td></tr>
          <tr><td>👷 লেবার/শ্রমিক</td><td>৪/৪</td><td>দেখুন, তৈরি, সম্পাদনা, মুছুন</td></tr>
          <tr><td>🖼️ মিডিয়া</td><td>৪/৪</td><td>দেখুন, তৈরি, সম্পাদনা, মুছুন</td></tr>
          <tr><td>💳 পেমেন্ট</td><td>৪/৪</td><td>দেখুন, তৈরি, সম্পাদনা, মুছুন</td></tr>
          <tr><td>🏭 উৎপাদন</td><td>৪/৪</td><td>দেখুন, তৈরি, সম্পাদনা, মুছুন</td></tr>
          <tr><td>🛒 ক্রয়/বিক্রয়</td><td>৪/৪</td><td>দেখুন, তৈরি, সম্পাদনা, মুছুন</td></tr>
          <tr><td>📊 রিপোর্ট</td><td>১/১</td><td>দেখুন</td></tr>
          <tr><td>⚙️ সেটিংস</td><td>৪/৪</td><td>দেখুন, সেটিংস ম্যানেজ, ইউজার ম্যানেজ, রোল ম্যানেজ</td></tr>
          <tr><td>👤 সর্দার</td><td>৪/৪</td><td>দেখুন, তৈরি, সম্পাদনা, মুছুন</td></tr>
          <tr><td>🛒 ভাউচার</td><td>৪/৪</td><td>দেখুন, তৈরি, সম্পাদনা, মুছুন</td></tr>
        </table>
        <div class="info-box tip">
          <div class="info-box-title">💜 সেরা অভ্যাস</div>
          <ul class="bullet-list">
            <li>সাধারণ কর্মীদের <strong>মুছুন</strong> পারমিশন না দেওয়াই ভালো।</li>
            <li><strong>রিপোর্ট</strong> ও <strong>সেটিংস</strong> পারমিশন শুধু বিশ্বস্ত ইউজারকে দিন।</li>
            <li>নতুন রোল তৈরির পর টেস্ট ইউজার দিয়ে পারমিশন যাচাই করুন।</li>
            <li><strong>সিস্টেম রোল (অ্যাডমিন)</strong> কখনো মুছবেন না।</li>
          </ul>
        </div>
      </div>
    `
  },

};