// pages/finance.js
// মডিউল: হিসাব ও রিপোর্ট
// পেজ: voucher, income-expense, profit-loss, party-ledger

var PAGES_FINANCE = {

  // ===================================================
  // ভাউচার
  // ===================================================
  voucher: {
    title: 'ভাউচার',
    sections: ['পেজ পরিচিতি', 'পরিসংখ্যান কার্ড', 'নতুন ভাউচার', 'আয় ভাউচার', 'ব্যয় ভাউচার', 'তালিকা ও কার্যক্রম'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">📋</div>
        <div>
          <h1>ভাউচার ব্যবস্থাপনা</h1>
          <p>যেকোনো আর্থিক লেনদেন ভাউচারের মাধ্যমে রেকর্ড করুন</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → হিসাব ও রিপোর্ট → <strong>ভাউচার</strong></span>
        <p>ভাউচার হলো প্রতিটি আর্থিক লেনদেনের লিখিত প্রমাণ। ইট ভাটার দৈনন্দিন আয় ও ব্যয়ের সকল লেনদেন এখানে রেকর্ড করা হয়। প্রতিটি ভাউচার একটি অনন্য নম্বরে সংরক্ষিত হয়।</p>
        <div class="info-box note">
          <div class="info-box-title">💡 দুই ধরনের ভাউচার</div>
          <ul class="bullet-list">
            <li><strong>আয় ভাউচার:</strong> যেকোনো টাকা প্রাপ্তির রেকর্ড — বিক্রয় প্রাপ্তি, অগ্রিম, ঋণ ফেরত ইত্যাদি।</li>
            <li><strong>ব্যয় ভাউচার:</strong> যেকোনো টাকা প্রদানের রেকর্ড — কাঁচামাল ক্রয়, মজুরি, ভাড়া, বিদ্যুৎ ইত্যাদি।</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-পরিসংখ্যান-কার্ড">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <div class="stat-row">
          <div class="stat-card blue">
            <div class="stat-icon">📋</div>
            <div><div class="stat-label">মোট ভাউচার</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">📈</div>
            <div><div class="stat-label">মোট আয়</div><div class="stat-value">৳০.০০</div></div>
          </div>
          <div class="stat-card red">
            <div class="stat-icon">📉</div>
            <div><div class="stat-label">মোট ব্যয়</div><div class="stat-value">৳০.০০</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">💰</div>
            <div><div class="stat-label">নিট ব্যালেন্স</div><div class="stat-value">৳০.০০</div></div>
          </div>
        </div>
      </div>

      <div class="section" id="sec-নতুন-ভাউচার">
        <div class="section-title">নতুন ভাউচার</div>
        <p>উপরের ডানে <strong style="color:var(--primary)">\"+ নতুন ভাউচার\"</strong> বাটনে ক্লিক করুন।</p>
        <ol class="steps">
          <li><strong>ভাউচারের ধরন</strong> নির্বাচন করুন — আয় বা ব্যয়।</li>
          <li><strong>তারিখ</strong> নির্বাচন করুন।</li>
          <li><strong>পেমেন্টের মাধ্যম</strong> নির্বাচন করুন — নগদ / ব্যাংক / মোবাইল।</li>
          <li><strong>অ্যাকাউন্ট</strong> নির্বাচন করুন — কোন অ্যাকাউন্ট থেকে / কোথায় যাবে।</li>
          <li><strong>ক্যাটাগরি</strong> নির্বাচন করুন — লেনদেনের ধরন।</li>
          <li><strong>পরিমাণ</strong> লিখুন — বাধ্যতামূলক।</li>
          <li><strong>রেফারেন্স</strong> লিখুন — চালান নং বা অন্য তথ্য (ঐচ্ছিক)।</li>
          <li><strong>বিবরণ</strong> লিখুন — লেনদেনের সংক্ষিপ্ত বিবরণ।</li>
          <li><strong>\"সংরক্ষণ করুন\"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
      </div>

      <div class="section" id="sec-আয়-ভাউচার">
        <div class="section-title">আয় ভাউচার</div>
        <div class="form-mock">
          <div class="form-mock-title" style="color:var(--success)">📈 আয় ভাউচার</div>
          <div class="field-group">
            <div class="form-row">
              <div class="form-field">
                <label>তারিখ <span class="required">*</span></label>
                <div class="field-mock">তারিখ নির্বাচন</div>
              </div>
              <div class="form-field">
                <label>ভাউচার নং</label>
                <div class="field-mock" style="color:var(--text-muted)">VCH-0001 (স্বয়ংক্রিয়)</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label>পেমেন্টের মাধ্যম <span class="required">*</span></label>
                <div class="field-mock">নগদ / ব্যাংক / মোবাইল ▼</div>
              </div>
              <div class="form-field">
                <label>অ্যাকাউন্ট <span class="required">*</span></label>
                <div class="field-mock">অ্যাকাউন্ট নির্বাচন ▼</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label>ক্যাটাগরি <span class="required">*</span></label>
                <div class="field-mock">বিক্রয় / অগ্রিম / অন্যান্য ▼</div>
              </div>
              <div class="form-field">
                <label>পরিমাণ <span class="required">*</span></label>
                <div class="field-mock active">০.০০</div>
              </div>
            </div>
            <div class="form-row single">
              <div class="form-field">
                <label>রেফারেন্স</label>
                <div class="field-mock">চালান নং বা অন্য রেফারেন্স</div>
              </div>
            </div>
            <div class="form-row single">
              <div class="form-field">
                <label>বিবরণ</label>
                <div class="field-mock" style="height:50px">লেনদেনের বিবরণ লিখুন...</div>
              </div>
            </div>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary" style="background:var(--success)">সংরক্ষণ করুন</button>
          </div>
        </div>

        <p style="margin-top:16px">সাধারণ <strong>আয় ভাউচারের ক্যাটাগরি:</strong></p>
        <table class="doc-table">
          <tr><th>ক্যাটাগরি</th><th>উদাহরণ</th></tr>
          <tr><td>ইট বিক্রয়</td><td>কাস্টমারের কাছ থেকে ইট বিক্রির প্রাপ্তি</td></tr>
          <tr><td>খোয়া বিক্রয়</td><td>খোয়া বিক্রির প্রাপ্তি</td></tr>
          <tr><td>অগ্রিম প্রাপ্তি</td><td>কাস্টমারের অগ্রিম পেমেন্ট</td></tr>
          <tr><td>ঋণ ফেরত</td><td>প্রদত্ত ঋণের টাকা ফেরত</td></tr>
          <tr><td>অন্যান্য আয়</td><td>বিবিধ আয়</td></tr>
        </table>
      </div>

      <div class="section" id="sec-ব্যয়-ভাউচার">
        <div class="section-title">ব্যয় ভাউচার</div>
        <div class="form-mock">
          <div class="form-mock-title" style="color:var(--danger)">📉 ব্যয় ভাউচার</div>
          <div class="field-group">
            <div class="form-row">
              <div class="form-field">
                <label>তারিখ <span class="required">*</span></label>
                <div class="field-mock">তারিখ নির্বাচন</div>
              </div>
              <div class="form-field">
                <label>ভাউচার নং</label>
                <div class="field-mock" style="color:var(--text-muted)">VCH-0002 (স্বয়ংক্রিয়)</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label>পেমেন্টের মাধ্যম <span class="required">*</span></label>
                <div class="field-mock">নগদ / ব্যাংক / মোবাইল ▼</div>
              </div>
              <div class="form-field">
                <label>অ্যাকাউন্ট <span class="required">*</span></label>
                <div class="field-mock">অ্যাকাউন্ট নির্বাচন ▼</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label>ক্যাটাগরি <span class="required">*</span></label>
                <div class="field-mock">কাঁচামাল / মজুরি / ভাড়া ▼</div>
              </div>
              <div class="form-field">
                <label>পরিমাণ <span class="required">*</span></label>
                <div class="field-mock active">০.০০</div>
              </div>
            </div>
            <div class="form-row single">
              <div class="form-field">
                <label>রেফারেন্স</label>
                <div class="field-mock">ইনভয়েস নং বা অন্য রেফারেন্স</div>
              </div>
            </div>
            <div class="form-row single">
              <div class="form-field">
                <label>বিবরণ</label>
                <div class="field-mock" style="height:50px">লেনদেনের বিবরণ লিখুন...</div>
              </div>
            </div>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary" style="background:var(--danger)">সংরক্ষণ করুন</button>
          </div>
        </div>

        <p style="margin-top:16px">সাধারণ <strong>ব্যয় ভাউচারের ক্যাটাগরি:</strong></p>
        <table class="doc-table">
          <tr><th>ক্যাটাগরি</th><th>উদাহরণ</th></tr>
          <tr><td>কাঁচামাল ক্রয়</td><td>কয়লা, কাঠ, মাটি ক্রয়ের মূল্য পরিশোধ</td></tr>
          <tr><td>শ্রমিক মজুরি</td><td>শ্রমিকদের সাপ্তাহিক বা মাসিক মজুরি</td></tr>
          <tr><td>পরিবহন খরচ</td><td>ট্রাক ভাড়া ও পরিবহন ব্যয়</td></tr>
          <tr><td>বিদ্যুৎ/জ্বালানি</td><td>বিদ্যুৎ বিল ও জ্বালানি খরচ</td></tr>
          <tr><td>মেরামত ও রক্ষণাবেক্ষণ</td><td>যন্ত্রপাতি ও স্থাপনা মেরামত</td></tr>
          <tr><td>অফিস খরচ</td><td>স্টেশনারি, ইন্টারনেট, ফোন বিল</td></tr>
          <tr><td>অন্যান্য ব্যয়</td><td>বিবিধ ব্যয়</td></tr>
        </table>
      </div>

      <div class="section" id="sec-তালিকা-ও-কার্যক্রম">
        <div class="section-title">তালিকা ও কার্যক্রম</div>
        <table class="doc-table">
          <tr><th>কলাম</th><th>বিবরণ</th></tr>
          <tr><td>ভাউচার নং</td><td>স্বয়ংক্রিয় নম্বর (VCH-XXXX)</td></tr>
          <tr><td>তারিখ</td><td>লেনদেনের তারিখ</td></tr>
          <tr><td>ধরন</td><td><span class="badge badge-green">আয়</span> বা <span class="badge badge-red">ব্যয়</span> ব্যাজে আলাদা</td></tr>
          <tr><td>ক্যাটাগরি</td><td>লেনদেনের ক্যাটাগরি</td></tr>
          <tr><td>পেমেন্ট মাধ্যম</td><td>নগদ / ব্যাংক / মোবাইল</td></tr>
          <tr><td>পরিমাণ</td><td>লেনদেনের টাকার পরিমাণ</td></tr>
          <tr><td>বিবরণ</td><td>সংক্ষিপ্ত বিবরণ</td></tr>
          <tr><td>কার্যক্রম (⋯)</td><td>এডিট, প্রিন্ট বা মুছে ফেলা</td></tr>
        </table>
        <div class="info-box success">
          <div class="info-box-title">✅ সার্চ ও ফিল্টার</div>
          <ul class="bullet-list">
            <li><strong>ভাউচার নং বা বিবরণ</strong> দিয়ে সার্চ করুন।</li>
            <li><strong>তারিখ পরিসর</strong> দিয়ে নির্দিষ্ট সময়ের ভাউচার দেখুন।</li>
            <li><strong>ধরন ফিল্টার</strong> — শুধু আয় বা শুধু ব্যয় দেখুন।</li>
            <li><strong>পেমেন্ট মাধ্যম ফিল্টার</strong> — নগদ/ব্যাংক/মোবাইল আলাদা করুন।</li>
          </ul>
        </div>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ মুছে ফেলার আগে</div>
          ভাউচার মুছে ফেললে রিপোর্টে সেই লেনদেন আর দেখাবে না। নিশ্চিত না হলে মুছবেন না।
        </div>
      </div>
    `
  },

  // ===================================================
  // আয়-ব্যয় রিপোর্ট
  // ===================================================
  'income-expense': {
    title: 'আয়-ব্যয় রিপোর্ট',
    sections: ['পেজ পরিচিতি', 'ফিল্টার ব্যবহার', 'রিপোর্টের অংশসমূহ', 'এক্সপোর্ট ও প্রিন্ট'],
    content: `
      <div class="page-hero" style="background: linear-gradient(135deg, #0891b2, #0e7490)">
        <div class="page-hero-icon">📊</div>
        <div>
          <h1 style="color:white">আয়-ব্যয় রিপোর্ট</h1>
          <p style="color:rgba(255,255,255,0.85)">নির্দিষ্ট সময়ের সকল আয় ও ব্যয়ের বিস্তারিত বিবরণী</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → হিসাব ও রিপোর্ট → <strong>আয়-ব্যয় রিপোর্ট</strong></span>
        <p>এই রিপোর্টে নির্দিষ্ট তারিখ পরিসরে ইট ভাটার সকল আয় ও ব্যয়ের ক্যাটাগরিওয়ারি সারসংক্ষেপ দেখা যায়। এটি দৈনন্দিন আর্থিক পর্যালোচনার জন্য সবচেয়ে গুরুত্বপূর্ণ রিপোর্ট।</p>
      </div>

      <div class="section" id="sec-ফিল্টার-ব্যবহার">
        <div class="section-title">ফিল্টার ব্যবহার</div>
        <ol class="steps">
          <li><strong>শুরুর তারিখ</strong> নির্বাচন করুন।</li>
          <li><strong>শেষের তারিখ</strong> নির্বাচন করুন।</li>
          <li><strong>পেমেন্ট মাধ্যম</strong> ফিল্টার করুন — সব / নগদ / ব্যাংক / মোবাইল।</li>
          <li><strong>\"রিপোর্ট দেখুন\"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
        <div class="info-box note">
          <div class="info-box-title">💡 দ্রুত পরিসর</div>
          আজ, এই সপ্তাহ, এই মাস, গত মাস — এই শর্টকাট বাটনগুলো ব্যবহার করে দ্রুত তারিখ পরিসর নির্বাচন করুন।
        </div>
      </div>

      <div class="section" id="sec-রিপোর্টের-অংশসমূহ">
        <div class="section-title">রিপোর্টের অংশসমূহ</div>

        <p><strong>সারসংক্ষেপ কার্ড:</strong></p>
        <div class="stat-row">
          <div class="stat-card green">
            <div class="stat-icon">📈</div>
            <div><div class="stat-label">মোট আয়</div><div class="stat-value">৳০.০০</div></div>
          </div>
          <div class="stat-card red">
            <div class="stat-icon">📉</div>
            <div><div class="stat-label">মোট ব্যয়</div><div class="stat-value">৳০.০০</div></div>
          </div>
          <div class="stat-card blue">
            <div class="stat-icon">💰</div>
            <div><div class="stat-label">নিট আয়</div><div class="stat-value">৳০.০০</div></div>
          </div>
        </div>

        <p style="margin-top:16px"><strong>আয়ের বিস্তারিত টেবিল:</strong></p>
        <table class="doc-table">
          <tr><th>ক্যাটাগরি</th><th>লেনদেন সংখ্যা</th><th>মোট পরিমাণ</th><th>%</th></tr>
          <tr><td>ইট বিক্রয়</td><td>—</td><td>—</td><td>—</td></tr>
          <tr><td>খোয়া বিক্রয়</td><td>—</td><td>—</td><td>—</td></tr>
          <tr><td>অগ্রিম প্রাপ্তি</td><td>—</td><td>—</td><td>—</td></tr>
          <tr><td>অন্যান্য</td><td>—</td><td>—</td><td>—</td></tr>
          <tr style="font-weight:600; background:var(--bg-hover)"><td>মোট আয়</td><td>—</td><td>—</td><td>১০০%</td></tr>
        </table>

        <p style="margin-top:16px"><strong>ব্যয়ের বিস্তারিত টেবিল:</strong></p>
        <table class="doc-table">
          <tr><th>ক্যাটাগরি</th><th>লেনদেন সংখ্যা</th><th>মোট পরিমাণ</th><th>%</th></tr>
          <tr><td>কাঁচামাল ক্রয়</td><td>—</td><td>—</td><td>—</td></tr>
          <tr><td>শ্রমিক মজুরি</td><td>—</td><td>—</td><td>—</td></tr>
          <tr><td>পরিবহন খরচ</td><td>—</td><td>—</td><td>—</td></tr>
          <tr><td>অন্যান্য ব্যয়</td><td>—</td><td>—</td><td>—</td></tr>
          <tr style="font-weight:600; background:var(--bg-hover)"><td>মোট ব্যয়</td><td>—</td><td>—</td><td>১০০%</td></tr>
        </table>

        <div class="info-box note">
          <div class="info-box-title">💡 চার্ট</div>
          রিপোর্টে সাধারণত দুটি চার্ট থাকে — <strong>Bar Chart</strong> (দৈনিক আয়-ব্যয় তুলনা) এবং <strong>Pie/Donut Chart</strong> (ক্যাটাগরি অনুযায়ী বিতরণ)।
        </div>
      </div>

      <div class="section" id="sec-এক্সপোর্ট-ও-প্রিন্ট">
        <div class="section-title">এক্সপোর্ট ও প্রিন্ট</div>
        <table class="doc-table">
          <tr><th>বাটন</th><th>কাজ</th></tr>
          <tr><td>🖨️ প্রিন্ট</td><td>রিপোর্টটি সরাসরি প্রিন্ট করুন</td></tr>
          <tr><td>📥 PDF</td><td>PDF ফাইল হিসেবে ডাউনলোড করুন</td></tr>
          <tr><td>📊 Excel</td><td>Excel ফাইলে এক্সপোর্ট করুন</td></tr>
        </table>
      </div>
    `
  },

  // ===================================================
  // লাভ/ক্ষতি বিবরণী
  // ===================================================
  'profit-loss': {
    title: 'লাভ/ক্ষতি বিবরণী',
    sections: ['পেজ পরিচিতি', 'ফিল্টার ব্যবহার', 'রিপোর্টের অংশসমূহ', 'লাভ-ক্ষতি বোঝার উপায়'],
    content: `
      <div class="page-hero" style="background: linear-gradient(135deg, #7c3aed, #6d28d9)">
        <div class="page-hero-icon">📉</div>
        <div>
          <h1 style="color:white">লাভ/ক্ষতি বিবরণী</h1>
          <p style="color:rgba(255,255,255,0.85)">নির্দিষ্ট সময়ে ব্যবসায় কতটুকু লাভ বা ক্ষতি হয়েছে</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → হিসাব ও রিপোর্ট → <strong>লাভ/ক্ষতি বিবরণী</strong></span>
        <p>এই রিপোর্টে মোট আয় থেকে মোট ব্যয় বাদ দিয়ে নিট লাভ বা ক্ষতির হিসাব দেখানো হয়। ব্যবসার আর্থিক সুস্থতা বিচারের জন্য এটি সবচেয়ে গুরুত্বপূর্ণ রিপোর্ট।</p>
        <div class="info-box note">
          <div class="info-box-title">💡 P&L কী?</div>
          P&L (Profit & Loss) বিবরণী ব্যবসার একটি নির্দিষ্ট সময়কালের সামগ্রিক আর্থিক ফলাফল দেখায়। এটি থেকে বোঝা যায় ব্যবসা লাভজনক কিনা।
        </div>
      </div>

      <div class="section" id="sec-ফিল্টার-ব্যবহার">
        <div class="section-title">ফিল্টার ব্যবহার</div>
        <ol class="steps">
          <li><strong>শুরুর তারিখ</strong> ও <strong>শেষের তারিখ</strong> নির্বাচন করুন।</li>
          <li><strong>তুলনামূলক পিরিয়ড</strong> চালু করলে আগের বছরের একই সময়ের সাথে তুলনা দেখাবে।</li>
          <li><strong>\"রিপোর্ট দেখুন\"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
      </div>

      <div class="section" id="sec-রিপোর্টের-অংশসমূহ">
        <div class="section-title">রিপোর্টের অংশসমূহ</div>

        <div class="stat-row">
          <div class="stat-card green">
            <div class="stat-icon">📈</div>
            <div><div class="stat-label">মোট রাজস্ব</div><div class="stat-value">৳০.০০</div></div>
          </div>
          <div class="stat-card red">
            <div class="stat-icon">📉</div>
            <div><div class="stat-label">মোট খরচ</div><div class="stat-value">৳০.০০</div></div>
          </div>
          <div class="stat-card blue">
            <div class="stat-icon">💹</div>
            <div><div class="stat-label">নিট লাভ/ক্ষতি</div><div class="stat-value">৳০.০০</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">📊</div>
            <div><div class="stat-label">লাভের মার্জিন</div><div class="stat-value">০%</div></div>
          </div>
        </div>

        <p style="margin-top:16px"><strong>P&L বিবরণী কাঠামো:</strong></p>
        <table class="doc-table">
          <tr><th>বিভাগ</th><th>পরিমাণ</th></tr>
          <tr><td colspan="2" style="background:var(--bg-hover); font-weight:600; color:var(--success)">📈 আয় (Revenue)</td></tr>
          <tr><td style="padding-left:20px">ইট বিক্রয়</td><td>—</td></tr>
          <tr><td style="padding-left:20px">খোয়া বিক্রয়</td><td>—</td></tr>
          <tr><td style="padding-left:20px">অন্যান্য আয়</td><td>—</td></tr>
          <tr style="font-weight:600"><td>মোট আয়</td><td>—</td></tr>
          <tr><td colspan="2" style="background:var(--bg-hover); font-weight:600; color:var(--danger)">📉 খরচ (Expenses)</td></tr>
          <tr><td style="padding-left:20px">কাঁচামাল খরচ</td><td>—</td></tr>
          <tr><td style="padding-left:20px">শ্রমিক মজুরি</td><td>—</td></tr>
          <tr><td style="padding-left:20px">পরিবহন খরচ</td><td>—</td></tr>
          <tr><td style="padding-left:20px">প্রশাসনিক খরচ</td><td>—</td></tr>
          <tr><td style="padding-left:20px">অন্যান্য খরচ</td><td>—</td></tr>
          <tr style="font-weight:600"><td>মোট খরচ</td><td>—</td></tr>
          <tr style="font-weight:700; font-size:15px; background:var(--bg-hover)"><td>নিট লাভ / (ক্ষতি)</td><td>—</td></tr>
        </table>
      </div>

      <div class="section" id="sec-লাভ-ক্ষতি-বোঝার-উপায়">
        <div class="section-title">লাভ-ক্ষতি বোঝার উপায়</div>
        <table class="doc-table">
          <tr><th>ফলাফল</th><th>অর্থ</th><th>করণীয়</th></tr>
          <tr><td><span class="badge badge-green">ধনাত্মক (+)</span></td><td>লাভ — আয় > ব্যয়</td><td>ব্যবসা লাভজনক চলছে</td></tr>
          <tr><td><span class="badge badge-red">ঋণাত্মক (-)</span></td><td>ক্ষতি — ব্যয় > আয়</td><td>খরচ কমানো বা বিক্রয় বাড়ানো দরকার</td></tr>
        </table>
        <div class="info-box tip">
          <div class="info-box-title">💜 টিপস</div>
          <ul class="bullet-list">
            <li>মাসিক ভিত্তিতে P&L পর্যালোচনা করুন।</li>
            <li>লাভের মার্জিন ২০%-এর নিচে নামলে খরচ বিশ্লেষণ করুন।</li>
            <li>আগের বছরের একই সময়ের সাথে তুলনা করুন — ব্যবসার প্রবৃদ্ধি বোঝা যাবে।</li>
          </ul>
        </div>
      </div>
    `
  },

  // ===================================================
  // পার্টি লেজার
  // ===================================================
  'party-ledger': {
    title: 'পার্টি লেজার',
    sections: ['পেজ পরিচিতি', 'পার্টি নির্বাচন', 'লেজারের অংশসমূহ', 'ব্যালেন্স হিসাব'],
    content: `
      <div class="page-hero" style="background: linear-gradient(135deg, #059669, #047857)">
        <div class="page-hero-icon">👤</div>
        <div>
          <h1 style="color:white">পার্টি লেজার</h1>
          <p style="color:rgba(255,255,255,0.85)">কাস্টমার বা সাপ্লায়ারের সাথে সকল লেনদেনের বিবরণী</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → হিসাব ও রিপোর্ট → <strong>পার্টি লেজার</strong></span>
        <p>পার্টি লেজারে একটি নির্দিষ্ট কাস্টমার বা সাপ্লায়ারের সাথে সমস্ত লেনদেনের ধারাবাহিক হিসাব দেখা যায়। প্রতিটি লেনদেনের পর আপডেটেড ব্যালেন্স দেখানো হয়।</p>
        <div class="info-box note">
          <div class="info-box-title">💡 পার্টি লেজার কেন দরকার?</div>
          কোনো কাস্টমার কতটাকা দিয়েছে, কতটাকা বাকি আছে — সব ক্রমানুসারে এক জায়গায় দেখা যায়। সাপ্লায়ারের ক্ষেত্রেও একইভাবে কত পরিশোধ করা হয়েছে ও কত বাকি আছে দেখা যায়।
        </div>
      </div>

      <div class="section" id="sec-পার্টি-নির্বাচন">
        <div class="section-title">পার্টি নির্বাচন</div>
        <ol class="steps">
          <li><strong>পার্টির ধরন</strong> নির্বাচন করুন — কাস্টমার বা সাপ্লায়ার।</li>
          <li><strong>পার্টির নাম</strong> ড্রপডাউন থেকে নির্বাচন করুন।</li>
          <li><strong>তারিখ পরিসর</strong> দিন — শুরু ও শেষ তারিখ।</li>
          <li><strong>\"লেজার দেখুন\"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
        <div class="form-mock">
          <div class="form-mock-title">👤 পার্টি লেজার ফিল্টার</div>
          <div class="form-row">
            <div class="form-field">
              <label>পার্টির ধরন <span class="required">*</span></label>
              <div class="field-mock">কাস্টমার / সাপ্লায়ার ▼</div>
            </div>
            <div class="form-field">
              <label>পার্টির নাম <span class="required">*</span></label>
              <div class="field-mock">নাম বা ফোন দিয়ে খুঁজুন ▼</div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <label>শুরুর তারিখ</label>
              <div class="field-mock">তারিখ নির্বাচন</div>
            </div>
            <div class="form-field">
              <label>শেষের তারিখ</label>
              <div class="field-mock">তারিখ নির্বাচন</div>
            </div>
          </div>
          <div class="form-actions">
            <button class="btn-primary">লেজার দেখুন</button>
          </div>
        </div>
      </div>

      <div class="section" id="sec-লেজারের-অংশসমূহ">
        <div class="section-title">লেজারের অংশসমূহ</div>

        <p><strong>পার্টির সারসংক্ষেপ কার্ড:</strong></p>
        <div class="stat-row">
          <div class="stat-card blue">
            <div class="stat-icon">📋</div>
            <div><div class="stat-label">মোট লেনদেন</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">✅</div>
            <div><div class="stat-label">মোট পরিশোধ</div><div class="stat-value">৳০.০০</div></div>
          </div>
          <div class="stat-card red">
            <div class="stat-icon">⏳</div>
            <div><div class="stat-label">বর্তমান বাকি</div><div class="stat-value">৳০.০০</div></div>
          </div>
        </div>

        <p style="margin-top:16px"><strong>লেজার টেবিল:</strong></p>
        <table class="doc-table">
          <tr><th>তারিখ</th><th>বিবরণ</th><th>রেফারেন্স</th><th>ডেবিট (পাওনা)</th><th>ক্রেডিট (পরিশোধ)</th><th>ব্যালেন্স</th></tr>
          <tr><td>—</td><td>প্রারম্ভিক ব্যালেন্স</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
          <tr><td>—</td><td>চালান # ০০১</td><td>INV-001</td><td>—</td><td>—</td><td>—</td></tr>
          <tr><td>—</td><td>পেমেন্ট প্রাপ্তি</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
          <tr style="font-weight:600; background:var(--bg-hover)"><td colspan="4">সমাপনী ব্যালেন্স</td><td>—</td><td>—</td></tr>
        </table>
        <div class="info-box note">
          <div class="info-box-title">💡 ডেবিট ও ক্রেডিট</div>
          <ul class="bullet-list">
            <li><strong>ডেবিট (পাওনা):</strong> কাস্টমারের কাছে চালান দিলে এই কলামে যোগ হয়। সাপ্লায়ারের ক্ষেত্রে ক্রয় করলে।</li>
            <li><strong>ক্রেডিট (পরিশোধ):</strong> কাস্টমার টাকা দিলে এই কলামে যোগ হয়। সাপ্লায়ারকে টাকা দিলে।</li>
            <li><strong>ব্যালেন্স:</strong> ডেবিট − ক্রেডিট = বকেয়া পরিমাণ।</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-ব্যালেন্স-হিসাব">
        <div class="section-title">ব্যালেন্স হিসাব</div>
        <table class="doc-table">
          <tr><th>ব্যালেন্সের অবস্থা</th><th>অর্থ</th></tr>
          <tr><td><span class="badge badge-red">ধনাত্মক (+)</span></td><td>পার্টির কাছে টাকা পাওনা আছে — সংগ্রহ করতে হবে</td></tr>
          <tr><td><span class="badge badge-green">শূন্য (0)</span></td><td>সব হিসাব সমান — কোনো বকেয়া নেই</td></tr>
          <tr><td><span class="badge badge-blue">ঋণাত্মক (-)</span></td><td>পার্টিকে টাকা দিতে হবে — অতিরিক্ত পরিশোধ হয়েছে</td></tr>
        </table>
        <div class="info-box success">
          <div class="info-box-title">✅ এক্সপোর্ট সুবিধা</div>
          লেজার PDF বা Excel ফরম্যাটে ডাউনলোড করুন। কাস্টমারকে পাঠানোর জন্য প্রিন্ট করুন — বিরোধ নিষ্পত্তিতে সহায়ক।
        </div>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ মনে রাখুন</div>
          লেজারে শুধু সেই লেনদেনগুলো দেখাবে যেগুলো সিস্টেমে রেকর্ড করা হয়েছে। নগদ লেনদেন রেকর্ড না করলে লেজার সঠিক হবে না।
        </div>
      </div>
    `
  },

  // report key — পুরনো key সংরক্ষণ (backward compatibility)
  report: {
    title: 'দৈনিক রিপোর্ট',
    sections: ['পেজ পরিচিতি'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">📈</div>
        <div>
          <h1>দৈনিক রিপোর্ট</h1>
          <p>হিসাব ও রিপোর্ট মডিউলের বিস্তারিত দেখুন</p>
        </div>
      </div>
      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <div class="info-box note">
          <div class="info-box-title">💡 রিপোর্ট পেজসমূহ</div>
          <p>রিপোর্ট মডিউলটি তিনটি আলাদা পেজে বিভক্ত। বাম মেনু থেকে নির্বাচন করুন:</p>
          <ul class="bullet-list">
            <li><strong>📊 আয়-ব্যয় রিপোর্ট</strong> — নির্দিষ্ট সময়ের আয় ও ব্যয়ের বিস্তারিত</li>
            <li><strong>📉 লাভ/ক্ষতি বিবরণী</strong> — নিট লাভ বা ক্ষতির হিসাব</li>
            <li><strong>👤 পার্টি লেজার</strong> — কাস্টমার বা সাপ্লায়ারের লেনদেন বিবরণী</li>
          </ul>
        </div>
      </div>
    `
  },

};