// pages/worker.js — শ্রমিক মজুরি ব্যবস্থাপনা

var PAGES_WORKER = {

  'worker-type': {
    title: 'শ্রমিক ধরন ব্যবস্থাপনা',
    sections: ['পেজ পরিচিতি', 'পরিসংখ্যান কার্ড', 'নতুন শ্রমিক ধরন', 'ফর্মের বিবরণ', 'তালিকা কলাম'],
    content: `
      <div class="page-hero" style="background:linear-gradient(135deg,#6366f1,#ec4899)">
        <div class="page-hero-icon">👷</div>
        <div>
          <h1>শ্রমিক ধরন ব্যবস্থাপনা</h1>
          <p>শ্রমিক ক্যাটাগরি ও ডিফল্ট মজুরির ব্যবস্থাপনা</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → শ্রমিক মজুরি → <strong>শ্রমিক ধরন</strong></span>
        <p>এই পেজে শ্রমিকদের বিভিন্ন পদবি বা ক্যাটাগরি তৈরি করা হয়। যেমন: মিস্ত্রি, হেলপার, রাজমিস্ত্রি ইত্যাদি। একবার তৈরি করলে নতুন শ্রমিক যোগ করার সময় পদবি ড্রপডাউনে এই তালিকা থেকে নির্বাচন করা যাবে।</p>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ প্রথমে এটি করুন</div>
          শ্রমিক তালিকায় নতুন শ্রমিক যোগ করার আগে এখানে অন্তত একটি শ্রমিক ধরন তৈরি করুন। না হলে পদবি নির্বাচন করা যাবে না।
        </div>
      </div>

      <div class="section" id="sec-পরিসংখ্যান-কার্ড">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <div class="stat-row">
          <div class="stat-card" style="border-left:3px solid #818cf8">
            <div class="stat-icon">🗂️</div>
            <div><div class="stat-label">মোট ধরন</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">✅</div>
            <div><div class="stat-label">সক্রিয় ধরন</div><div class="stat-value" style="color:var(--success)">০</div></div>
          </div>
          <div class="stat-card" style="border-left:3px solid #c084fc">
            <div class="stat-icon">👥</div>
            <div><div class="stat-label">মোট শ্রমিক</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card" style="border-left:3px solid #fb923c">
            <div class="stat-icon">💰</div>
            <div><div class="stat-label">গড় মজুরি</div><div class="stat-value">৳০</div></div>
          </div>
        </div>
        <table class="doc-table" style="margin-top:16px">
          <tr><th>কার্ড</th><th>কী বোঝায়</th></tr>
          <tr><td>মোট ধরন</td><td>সিস্টেমে তৈরি সব শ্রমিক ক্যাটাগরির সংখ্যা</td></tr>
          <tr><td>সক্রিয় ধরন</td><td>এখন ড্রপডাউনে দেখা যাচ্ছে এমন সক্রিয় ধরন</td></tr>
          <tr><td>মোট শ্রমিক</td><td>সব ধরন মিলিয়ে মোট নিবন্ধিত শ্রমিক সংখ্যা</td></tr>
          <tr><td>গড় মজুরি</td><td>সকল সক্রিয় শ্রমিকের গড় দৈনিক মজুরি</td></tr>
        </table>
      </div>

      <div class="section" id="sec-নতুন-শ্রমিক-ধরন">
        <div class="section-title">নতুন শ্রমিক ধরন তৈরি</div>
        <ol class="steps">
          <li>উপরের ডানদিকে <strong>"+ শ্রমিক ধরন তৈরি"</strong> বাটনে ক্লিক করুন।</li>
          <li><strong>নাম (বাংলা)</strong> লিখুন — এটিই ড্রপডাউনে ও ফর্মে দেখাবে।</li>
          <li><strong>নাম (ইংরেজি)</strong> লিখুন।</li>
          <li><strong>সক্রিয়</strong> টগল চালু রাখুন — বন্ধ করলে ড্রপডাউনে দেখাবে না।</li>
          <li><strong>বিবরণ</strong> লিখুন (ঐচ্ছিক)।</li>
          <li><strong>"তৈরি করুন"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
        <div class="info-box tip">
          <div class="info-box-title">💜 প্রস্তাবিত ধরনসমূহ</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px;font-size:13px">
            <div>👷 মিস্ত্রি (Mason)</div>
            <div>🏭 উৎপাদন স্টাফ (Production Staff)</div>
            <div>🔧 রক্ষণাবেক্ষণ স্টাফ (Maintenance Staff)</div>
            <div>🛡️ নিরাপত্তা স্টাফ (Security Staff)</div>
            <div>🚛 লজিস্টিক স্টাফ (Logistic Staff)</div>
            <div>👤 সাধারণ স্টাফ (General Staff)</div>
          </div>
        </div>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock" style="max-width:100%">
          <div class="form-mock-title">+ শ্রমিক ধরন তৈরি</div>
          <div class="form-row single">
            <div class="form-field">
              <label>নাম (বাংলা) <span class="required">*</span></label>
              <div class="field-mock active">মিস্ত্রি</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:4px">এটি ড্রপডাউন ও ফর্মে ব্যবহার হবে</div>
            </div>
          </div>
          <div class="form-row single" style="margin-top:10px">
            <div class="form-field">
              <label>নাম (ইংরেজি) <span class="required">*</span></label>
              <div class="field-mock">Mason</div>
            </div>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;background:var(--bg);border-radius:8px;padding:12px 16px;margin-top:12px">
            <div>
              <div style="font-weight:600;font-size:14px">সক্রিয়</div>
              <div style="font-size:12px;color:var(--text-muted)">নিষ্ক্রিয় ধরন ড্রপডাউনে দেখা যাবে না</div>
            </div>
            <div style="width:44px;height:24px;background:var(--primary);border-radius:12px;position:relative">
              <div style="width:20px;height:20px;background:white;border-radius:50%;position:absolute;right:2px;top:2px"></div>
            </div>
          </div>
          <div class="form-row single" style="margin-top:12px">
            <div class="form-field">
              <label>বিবরণ (ঐচ্ছিক)</label>
              <div class="field-mock" style="height:80px;padding-top:8px">বিস্তারিত লিখুন...</div>
            </div>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">তৈরি করুন</button>
          </div>
        </div>
        <table class="doc-table" style="margin-top:20px">
          <tr><th>ফিল্ড</th><th>বিবরণ</th><th>বাধ্যতামূলক</th></tr>
          <tr><td>নাম (বাংলা)</td><td>ড্রপডাউনে এই নামে দেখাবে</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>নাম (ইংরেজি)</td><td>ইংরেজি ভার্সনে দেখাবে</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>সক্রিয়</td><td>চালু = ড্রপডাউনে দেখায়, বন্ধ = লুকানো</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>বিবরণ</td><td>এই পদবির বিস্তারিত বর্ণনা</td><td><span class="badge badge-green">না</span></td></tr>
        </table>
      </div>

      <div class="section" id="sec-তালিকা-কলাম">
        <div class="section-title">তালিকা কলাম</div>
        <table class="doc-table">
          <tr><th>কলাম</th><th>বিবরণ</th></tr>
          <tr><td>শ্রমিক ধরন</td><td>বাংলা ও ইংরেজি নাম একসাথে</td></tr>
          <tr><td>জন</td><td>এই ধরনে নিবন্ধিত শ্রমিকের সংখ্যা</td></tr>
          <tr><td>স্ট্যাটাস</td><td>সক্রিয় / নিষ্ক্রিয় ব্যাজ</td></tr>
          <tr><td>কার্যক্রম</td><td>এডিট ও ডিলিট বাটন</td></tr>
        </table>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ ডিলিট সতর্কতা</div>
          কোনো ধরনে শ্রমিক থাকলে সেটি ডিলিট করা যাবে না। আগে শ্রমিকদের অন্য ধরনে স্থানান্তর করুন।
        </div>
        <div class="info-box note">
          <div class="info-box-title">💡 সার্চ ও ফিল্টার</div>
          "শ্রমিক ধরন খুঁজুন..." সার্চ বারে নাম লিখে দ্রুত খুঁজুন। ডানদিকের ফিল্টার দিয়ে সক্রিয়/নিষ্ক্রিয় আলাদা করুন।
        </div>
      </div>
    `
  },

  'worker-list': {
    title: 'শ্রমিক তালিকা',
    sections: ['পেজ পরিচিতি', 'পরিসংখ্যান কার্ড', 'ফিল্টার ও সার্চ', 'নতুন শ্রমিক যোগ', 'ফর্মের বিবরণ', 'পরিচয়পত্র ডকুমেন্ট', 'তালিকা কলাম'],
    content: `
      <div class="page-hero" style="background:linear-gradient(135deg,#6366f1,#ec4899)">
        <div class="page-hero-icon">👥</div>
        <div>
          <h1>শ্রমিক তালিকা</h1>
          <p>সকল শ্রমিকের তথ্য, মজুরি ও পেমেন্ট ব্যবস্থাপনা</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → শ্রমিক মজুরি → <strong>শ্রমিক তালিকা</strong></span>
        <p>এই পেজে ইট ভাটায় কর্মরত সকল শ্রমিকের ব্যক্তিগত তথ্য, পদবি, দৈনিক মজুরি এবং পেমেন্ট অবস্থা সংরক্ষণ করা হয়। প্রতিটি শ্রমিকের মোট মজুরি, পরিশোধিত অর্থ, বাকি এবং অগ্রিম/লোনের হিসাব রিয়েল-টাইমে দেখা যায়।</p>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="fc-icon">👤</div>
            <h5>কেন্দ্রীয় তথ্যভাণ্ডার</h5>
            <p>সকল শ্রমিকের প্রোফাইল, NID ও যোগাযোগ তথ্য এক জায়গায়।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">💰</div>
            <h5>মজুরি ট্র্যাকিং</h5>
            <p>কাজের এন্ট্রির ভিত্তিতে স্বয়ংক্রিয় মজুরি হিসাব।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">📂</div>
            <h5>ক্যাটাগরি ফিল্টার</h5>
            <p>পদবি ও সর্দার অনুযায়ী শ্রমিক আলাদা করে দেখুন।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">📄</div>
            <h5>PDF এক্সপোর্ট</h5>
            <p>যেকোনো ফিল্টার করা তালিকা PDF হিসেবে সেভ করুন।</p>
          </div>
        </div>
      </div>

      <div class="section" id="sec-পরিসংখ্যান-কার্ড">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <div class="stat-row">
          <div class="stat-card" style="border-left:3px solid #a78bfa">
            <div class="stat-icon">👥</div>
            <div><div class="stat-label">সক্রিয়</div><div class="stat-value" style="color:#7c3aed">০</div></div>
          </div>
          <div class="stat-card blue">
            <div class="stat-icon">💳</div>
            <div><div class="stat-label">মজুরি</div><div class="stat-value">৳০</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">✅</div>
            <div><div class="stat-label">পরিশোধিত</div><div class="stat-value" style="color:var(--success)">৳০</div></div>
          </div>
          <div class="stat-card red">
            <div class="stat-icon">⏳</div>
            <div><div class="stat-label">বাকি</div><div class="stat-value">৳০</div></div>
          </div>
          <div class="stat-card" style="border-left:3px solid #f97316">
            <div class="stat-icon">💸</div>
            <div><div class="stat-label">অগ্রিম/লোন</div><div class="stat-value" style="color:#ea580c">৳০</div></div>
          </div>
        </div>
        <table class="doc-table" style="margin-top:16px">
          <tr><th>কার্ড</th><th>কী বোঝায়</th></tr>
          <tr><td>সক্রিয়</td><td>বর্তমানে কর্মরত শ্রমিকের সংখ্যা</td></tr>
          <tr><td>মজুরি</td><td>কাজের এন্ট্রি অনুযায়ী মোট প্রদেয় মজুরি</td></tr>
          <tr><td>পরিশোধিত</td><td>এ পর্যন্ত পেমেন্ট করা মোট অর্থ</td></tr>
          <tr><td>বাকি</td><td>মজুরি থেকে পরিশোধিত বাদ দিলে যা থাকে</td></tr>
          <tr><td>অগ্রিম/লোন</td><td>শ্রমিককে দেওয়া অগ্রিম বা ধার — মজুরি থেকে কাটা হবে</td></tr>
        </table>
      </div>

      <div class="section" id="sec-ফিল্টার-ও-সার্চ">
        <div class="section-title">ফিল্টার ও সার্চ</div>
        <p>তালিকার উপরে ৪টি ফিল্টার অপশন রয়েছে:</p>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin:12px 0">
          <div class="field-mock" style="width:auto;padding:8px 16px;background:#16a34a;color:white;border-radius:8px;font-size:13px">✔ সব ক্যাটাগরি ▼</div>
          <div class="field-mock" style="width:auto;padding:8px 16px;font-size:13px">👤 সব সর্দার ▼</div>
          <div class="field-mock" style="width:auto;padding:8px 16px;font-size:13px;color:var(--primary)">⬇ PDF</div>
        </div>
        <div class="info-box tip">
          <div class="info-box-title">💜 ক্যাটাগরি ফিল্টার অপশন</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:13px;margin-top:6px">
            <div>✅ সব ক্যাটাগরি</div>
            <div>🏭 উৎপাদন স্টাফ</div>
            <div>🔧 রক্ষণাবেক্ষণ স্টাফ</div>
            <div>🛡️ নিরাপত্তা স্টাফ</div>
            <div>🚛 লজিস্টিক স্টাফ</div>
            <div>👤 সাধারণ স্টাফ</div>
          </div>
        </div>
        <div class="info-box note">
          <div class="info-box-title">💡 একসাথে ফিল্টার করুন</div>
          ক্যাটাগরি + সর্দার + তারিখ একসাথে নির্বাচন করে নির্দিষ্ট গ্রুপের শ্রমিক দেখুন। PDF বাটনে ক্লিক করলে বর্তমান ফিল্টার করা তালিকা ডাউনলোড হবে।
        </div>
      </div>

      <div class="section" id="sec-নতুন-শ্রমিক-যোগ">
        <div class="section-title">নতুন শ্রমিক যোগ</div>
        <ol class="steps">
          <li>উপরের ডানদিকে <strong>"+ নতুন শ্রমিক"</strong> বাটনে ক্লিক করুন।</li>
          <li>প্রোফাইল ছবি আপলোড করুন (ঐচ্ছিক) — "ছবি নির্বাচন করুন" বাটনে ক্লিক করুন।</li>
          <li>শ্রমিকের <strong>নাম</strong> লিখুন এবং <strong>ফোন নম্বর</strong> দিন।</li>
          <li><strong>পদবি</strong> ড্রপডাউন থেকে শ্রমিক ধরন নির্বাচন করুন।</li>
          <li><strong>দৈনিক মজুরি</strong> লিখুন — কাজের এন্ট্রিতে এটি ডিফল্ট হবে।</li>
          <li><strong>যোগদানের তারিখ</strong> নির্বাচন করুন।</li>
          <li><strong>স্ট্যাটাস</strong> নির্বাচন করুন (সক্রিয় / নিষ্ক্রিয়)।</li>
          <li><strong>বিবরণ</strong> লিখুন (ঐচ্ছিক)।</li>
          <li>প্রয়োজনে <strong>পরিচয়পত্র ডকুমেন্ট</strong> যোগ করুন।</li>
          <li><strong>"সেভ করুন"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">শ্রমিক ফর্মের বিবরণ</div>
        <div class="form-mock" style="max-width:100%">
          <div class="form-mock-title">👥 নতুন শ্রমিক যোগ করুন</div>

          <div class="field-group">
            <div class="field-group-title">🖼️ প্রোফাইল ছবি</div>
            <div style="display:flex;align-items:center;gap:12px;padding:8px 0">
              <div style="width:50px;height:50px;background:#6366f1;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:18px">ন</div>
              <div class="field-mock" style="width:auto;padding:8px 16px">📷 ছবি নির্বাচন করুন</div>
            </div>
          </div>

          <div class="field-group">
            <div class="field-group-title">👤 ব্যক্তিগত তথ্য</div>
            <div class="form-row">
              <div class="form-field">
                <label>নাম <span class="required">*</span></label>
                <div class="field-mock active">শ্রমিকের নাম</div>
              </div>
              <div class="form-field">
                <label>ফোন</label>
                <div class="field-mock">01XXXXXXXXX</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label>পদবি <span class="required">*</span></label>
                <div class="field-mock">পদবী নির্বাচন ▼</div>
              </div>
              <div class="form-field">
                <label>দৈনিক মজুরি</label>
                <div class="field-mock">0</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label>যোগদানের তারিখ</label>
                <div class="field-mock">04/03/2026</div>
              </div>
              <div class="form-field">
                <label>স্ট্যাটাস</label>
                <div class="field-mock">সক্রিয় ▼</div>
              </div>
            </div>
            <div class="form-row single">
              <div class="form-field">
                <label>বিবরণ</label>
                <div class="field-mock" style="height:70px"></div>
              </div>
            </div>
          </div>

          <div class="field-group" style="border-left:3px solid var(--primary)">
            <div class="field-group-title" style="color:var(--primary)">📄 পরিচয়পত্র ডকুমেন্ট</div>
            <div style="text-align:center;padding:16px;color:var(--text-muted);font-size:13px">
              কোনো পরিচয়পত্র যোগ করা হয়নি<br>
              <span style="color:var(--primary)">+ প্রথম ডকুমেন্ট যোগ করুন</span>
            </div>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">সেভ করুন</button>
          </div>
        </div>

        <table class="doc-table" style="margin-top:20px">
          <tr><th>ফিল্ড</th><th>বিবরণ</th><th>বাধ্যতামূলক</th></tr>
          <tr><td>নাম</td><td>শ্রমিকের পূর্ণ নাম</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>ফোন</td><td>সক্রিয় মোবাইল নম্বর</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>পদবি</td><td>শ্রমিক ধরন — আগে ধরন তৈরি করতে হবে</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>দৈনিক মজুরি</td><td>প্রতিদিনের মজুরি — কাজের এন্ট্রিতে ডিফল্ট আসবে</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>যোগদানের তারিখ</td><td>কবে থেকে কাজ শুরু করেছেন</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>স্ট্যাটাস</td><td>সক্রিয় হলে কাজের এন্ট্রিতে নির্বাচন করা যাবে</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>বিবরণ</td><td>অতিরিক্ত নোট</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>পরিচয়পত্র</td><td>NID বা অন্যান্য ডকুমেন্টের ছবি</td><td><span class="badge badge-green">না</span></td></tr>
        </table>
      </div>

      <div class="section" id="sec-পরিচয়পত্র-ডকুমেন্ট">
        <div class="section-title">পরিচয়পত্র ডকুমেন্ট যোগ করা</div>
        <p>শ্রমিকের NID বা পাসপোর্ট সংরক্ষণ করতে <strong>"+ যোগ করুন"</strong> বাটনে ক্লিক করুন। ডকুমেন্টের সামনে ও পিছনের ছবি আলাদাভাবে আপলোড করা যাবে।</p>

        <div class="form-mock" style="max-width:100%">
          <div class="form-mock-title">📄 নতুন ডকুমেন্ট যোগ করুন</div>
          <div class="form-row single">
            <div class="form-field">
              <label>ডকুমেন্ট টাইপ <span class="required">*</span></label>
              <div class="field-mock active">জাতীয় পরিচয়পত্র ▼</div>
            </div>
          </div>
          <div class="form-row single" style="margin-top:10px">
            <div class="form-field">
              <label>ডকুমেন্ট নম্বর <span class="required">*</span></label>
              <div class="field-mock">যেমন: 1234567890123</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:4px">ℹ️ NID নম্বর ১০-১৭ ডিজিট হতে হবে (পুরানো ১০/১৩, নতুন স্মার্ট ১৭ ডিজিট)</div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <label>ইস্যুর তারিখ</label>
              <div class="field-mock">dd/mm/yyyy</div>
            </div>
            <div class="form-field">
              <label>মেয়াদান্তীর তারিখ</label>
              <div class="field-mock">dd/mm/yyyy</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:4px">এই ডকুমেন্ট টাইপের জন্য মেয়াদান্তীর তারিখ প্রয়োজন নেই</div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <label>ইস্যুকারী কর্তৃপক্ষ</label>
              <div class="field-mock">যেমন: নির্বাচন কমিশন বাংলাদেশ</div>
            </div>
            <div class="form-field">
              <label>ইস্যুর স্থান</label>
              <div class="field-mock">যেমন: ঢাকা</div>
            </div>
          </div>
          <div class="field-group" style="margin-top:12px">
            <div class="field-group-title">📸 ডকুমেন্টের ছবি</div>
            <div class="form-row">
              <div class="form-field">
                <label>সামনের পৃষ্ঠা</label>
                <div style="border:2px dashed var(--border);border-radius:8px;padding:28px;text-align:center;color:var(--text-muted);font-size:13px">
                  🖼️<br>ছবি যোগ করুন
                </div>
              </div>
              <div class="form-field">
                <label>পিছনের পৃষ্ঠা</label>
                <div style="border:2px dashed var(--border);border-radius:8px;padding:28px;text-align:center;color:var(--text-muted);font-size:13px">
                  🖼️<br>ছবি যোগ করুন
                </div>
              </div>
            </div>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">সেভ করুন</button>
          </div>
        </div>

        <table class="doc-table" style="margin-top:16px">
          <tr><th>ডকুমেন্ট টাইপ</th><th>নম্বর ফরম্যাট</th><th>মেয়াদান্তী দরকার?</th></tr>
          <tr><td>জাতীয় পরিচয়পত্র (NID)</td><td>১০, ১৩ বা ১৭ ডিজিট</td><td>না</td></tr>
          <tr><td>পাসপোর্ট</td><td>A-Z + সংখ্যা</td><td>হ্যাঁ</td></tr>
          <tr><td>ড্রাইভিং লাইসেন্স</td><td>নম্বর লিখুন</td><td>হ্যাঁ</td></tr>
          <tr><td>জন্ম নিবন্ধন</td><td>১৭ ডিজিট</td><td>না</td></tr>
        </table>
      </div>

      <div class="section" id="sec-তালিকা-কলাম">
        <div class="section-title">তালিকা কলাম</div>
        <table class="doc-table">
          <tr><th>কলাম</th><th>বিবরণ</th></tr>
          <tr><td>নাম</td><td>শ্রমিকের নাম ও প্রোফাইল ছবি (থাকলে)</td></tr>
          <tr><td>পদবি</td><td>শ্রমিক ধরন / ক্যাটাগরি</td></tr>
          <tr><td>দৈনিক</td><td>প্রতিদিনের মজুরির হার</td></tr>
          <tr><td>দিন</td><td>মোট কাজ করা দিনের সংখ্যা</td></tr>
          <tr><td>মোট</td><td>মোট প্রদেয় মজুরি (দৈনিক × দিন)</td></tr>
          <tr><td>সরদার/গ্রুপ</td><td>কোন সর্দারের অধীনে কাজ করেন</td></tr>
          <tr><td>স্ট্যাটাস</td><td>সক্রিয় / নিষ্ক্রিয় ব্যাজ</td></tr>
          <tr><td>আকশন</td><td>বিস্তারিত, এডিট ও পেমেন্ট বাটন</td></tr>
        </table>
        <div class="info-box success">
          <div class="info-box-title">✅ PDF ডাউনলোড</div>
          তালিকার উপরে <strong>"PDF"</strong> বাটনে ক্লিক করলে বর্তমান ফিল্টার করা তালিকা সরাসরি PDF হিসেবে ডাউনলোড হবে।
        </div>
      </div>
    `
  },

  'work-entry': {
    title: 'কাজের এন্ট্রি',
    sections: ['পেজ পরিচিতি', 'পরিসংখ্যান কার্ড', 'নতুন কাজের এন্ট্রি', 'ফর্মের বিবরণ', 'তালিকা কলাম'],
    content: `
      <div class="page-hero" style="background:linear-gradient(135deg,#6366f1,#ec4899)">
        <div class="page-hero-icon">✏️</div>
        <div>
          <h1>কাজের এন্ট্রি</h1>
          <p>শ্রমিকদের দৈনিক কাজ রেকর্ড ও মজুরি হিসাব</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → শ্রমিক মজুরি → <strong>কাজের এন্ট্রি</strong></span>
        <p>প্রতিদিন যে শ্রমিকরা কাজ করেছেন তাদের জন্য এখানে এন্ট্রি দিতে হয়। এই এন্ট্রির ভিত্তিতে প্রতিটি শ্রমিকের মোট মজুরি স্বয়ংক্রিয়ভাবে হিসাব হয়। শ্রমিকের প্রোফাইলে নির্ধারিত দৈনিক মজুরি ডিফল্ট হিসেবে আসে — প্রয়োজনে সেদিনের জন্য পরিবর্তন করা যায়।</p>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="fc-icon">📅</div>
            <h5>দৈনিক রেকর্ড</h5>
            <p>প্রতিদিনের কাজের তারিখ ও শ্রমিক নির্বাচন করুন।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">💰</div>
            <h5>স্বয়ংক্রিয় মজুরি</h5>
            <p>শ্রমিকের প্রোফাইল থেকে ডিফল্ট মজুরি আসে।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">🖨️</div>
            <h5>প্রিন্ট সুবিধা</h5>
            <p>তালিকা সরাসরি প্রিন্ট বা PDF করুন।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">📊</div>
            <h5>পেমেন্ট ট্র্যাকিং</h5>
            <p>প্রতিটি এন্ট্রির পরিশোধ ও বাকি আলাদা দেখুন।</p>
          </div>
        </div>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ ডুপ্লিকেট এড়ান</div>
          একই শ্রমিকের একই তারিখে দুটি এন্ট্রি দেবেন না। সিস্টেম ডুপ্লিকেট সতর্কতা দেখাবে।
        </div>
      </div>

      <div class="section" id="sec-পরিসংখ্যান-কার্ড">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <div class="stat-row">
          <div class="stat-card" style="border-left:3px solid #a78bfa">
            <div class="stat-icon">👥</div>
            <div><div class="stat-label">সক্রিয়</div><div class="stat-value" style="color:#7c3aed">০</div></div>
          </div>
          <div class="stat-card blue">
            <div class="stat-icon">💳</div>
            <div><div class="stat-label">মজুরি</div><div class="stat-value">৳০</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">✅</div>
            <div><div class="stat-label">পরিশোধিত</div><div class="stat-value" style="color:var(--success)">৳০</div></div>
          </div>
          <div class="stat-card red">
            <div class="stat-icon">⏳</div>
            <div><div class="stat-label">বাকি</div><div class="stat-value">৳০</div></div>
          </div>
          <div class="stat-card" style="border-left:3px solid #f97316">
            <div class="stat-icon">💸</div>
            <div><div class="stat-label">অগ্রিম/লোন</div><div class="stat-value" style="color:#ea580c">৳০</div></div>
          </div>
        </div>
      </div>

      <div class="section" id="sec-নতুন-কাজের-এন্ট্রি">
        <div class="section-title">নতুন কাজের এন্ট্রি</div>
        <ol class="steps">
          <li>উপরের ডানদিকে <strong>"+ কাজের এন্ট্রি"</strong> বাটনে ক্লিক করুন।</li>
          <li><strong>তারিখ</strong> নির্বাচন করুন — ডিফল্ট আজকের তারিখ থাকে।</li>
          <li><strong>শ্রমিক নির্বাচন</strong> ড্রপডাউন থেকে শ্রমিকের নাম বেছে নিন।</li>
          <li><strong>দৈনিক মজুরি (টাকা)</strong> — শ্রমিকের প্রোফাইল থেকে স্বয়ংক্রিয়ভাবে পূরণ হবে। আলাদা হলে পরিবর্তন করুন।</li>
          <li>প্রয়োজনে <strong>নোট</strong> লিখুন।</li>
          <li><strong>"সংরক্ষণ করুন"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock" style="max-width:100%">
          <div class="form-mock-title" style="color:#d97706">🕐 নতুন কাজের এন্ট্রি</div>
          <div class="form-row">
            <div class="form-field">
              <label>তারিখ <span class="required">*</span></label>
              <div class="field-mock active">04/03/2026</div>
            </div>
            <div class="form-field">
              <label>শ্রমিক নির্বাচন <span class="required">*</span></label>
              <div class="field-mock">শ্রমিক নির্বাচন করুন ▼</div>
            </div>
          </div>
          <div class="form-row single" style="margin-top:10px">
            <div class="form-field">
              <label>দৈনিক মজুরি (টাকা) <span class="required">*</span></label>
              <div class="field-mock">0</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:4px">ডিফল্ট মজুরি থেকে আলাদা হলে পরিবর্তন করুন</div>
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
            <button class="btn-primary">সংরক্ষণ করুন</button>
          </div>
        </div>

        <table class="doc-table" style="margin-top:20px">
          <tr><th>ফিল্ড</th><th>বিবরণ</th><th>বাধ্যতামূলক</th></tr>
          <tr><td>তারিখ</td><td>কাজের তারিখ — আজকের তারিখ ডিফল্ট</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>শ্রমিক নির্বাচন</td><td>কোন শ্রমিক কাজ করেছেন — শুধু সক্রিয় শ্রমিক দেখাবে</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>দৈনিক মজুরি</td><td>সেদিনের মজুরি — প্রোফাইল থেকে স্বয়ংক্রিয় আসে</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>নোট</td><td>বিশেষ তথ্য বা মন্তব্য</td><td><span class="badge badge-green">না</span></td></tr>
        </table>
      </div>

      <div class="section" id="sec-তালিকা-কলাম">
        <div class="section-title">তালিকা কলাম</div>
        <table class="doc-table">
          <tr><th>কলাম</th><th>বিবরণ</th></tr>
          <tr><td>তারিখ</td><td>কাজের এন্ট্রির তারিখ</td></tr>
          <tr><td>শ্রমিক</td><td>শ্রমিকের নাম ও পদবি</td></tr>
          <tr><td>অবস্থা</td><td>পেমেন্ট অবস্থা — পরিশোধিত / বাকি / আংশিক</td></tr>
          <tr><td>মোট</td><td>সেদিনের মোট মজুরি (দৈনিক হার)</td></tr>
          <tr><td>পরিশোধিত</td><td>এ পর্যন্ত কত পরিশোধ হয়েছে</td></tr>
          <tr><td>বাকি</td><td>এখনো কত বাকি আছে</td></tr>
          <tr><td>নোট</td><td>এন্ট্রির সময় দেওয়া মন্তব্য</td></tr>
          <tr><td>আকশন</td><td>এডিট, ডিলিট ও পেমেন্ট বাটন</td></tr>
        </table>

        <div class="info-box success">
          <div class="info-box-title">✅ প্রিন্ট সুবিধা</div>
          তালিকার উপরে <strong>"প্রিন্ট"</strong> বাটনে ক্লিক করে সরাসরি প্রিন্ট বা PDF সেভ করুন।
        </div>
        <div class="info-box tip">
          <div class="info-box-title">💜 মজুরি পরিশোধ করতে</div>
          আকশন কলামের পেমেন্ট বাটন থেকে নির্দিষ্ট এন্ট্রির মজুরি পরিশোধ করুন। শ্রমিকের নামে ক্লিক করলে তার সব এন্ট্রির বিস্তারিত দেখা যাবে এবং একসাথে সব বাকি পরিশোধ করা যাবে।
        </div>
        <div class="info-box note">
          <div class="info-box-title">💡 ফিল্টার করুন</div>
          শ্রমিকের নাম দিয়ে সার্চ করুন। তারিখ পরিসর ও অবস্থা (পরিশোধিত / বাকি) অনুযায়ী ফিল্টার করুন।
        </div>
      </div>
    `
  },

};
