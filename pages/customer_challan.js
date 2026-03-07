// pages/customer_challan.js
// মডিউল: গ্রাহক ও চালান ব্যবস্থাপনা (বিস্তারিত)

var PAGES_CUSTOMER_CHALLAN = {

  // ===================================================
  // গ্রাহক ব্যবস্থাপনা (বিস্তারিত)
  // ===================================================
  customer: {
    title: 'গ্রাহক ব্যবস্থাপনা',
    sections: ['পেজ পরিচিতি', 'কোন ক্রমে তৈরি করবেন', 'গ্রাহক কী ও কেন প্রয়োজন', 'পরিসংখ্যান কার্ড', 'নতুন কাস্টমার যোগ - ধাপে ধাপে', 'ফর্মের বিবরণ', 'প্রতিটি ফিল্ডের বিস্তারিত', 'তালিকা ও কার্যক্রম', 'সম্পাদনা', 'সক্রিয়-নিষ্ক্রিয়', 'সাধারণ সমস্যা'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">🧑‍💼</div>
        <div>
          <h1>কাস্টমার ব্যবস্থাপনা</h1>
          <p>সকল কাস্টমারের তথ্য এবং লেনদেন ব্যবস্থাপনা</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → গ্রাহক ও চালান → <strong>গ্রাহক</strong></span>
        <p>এই পেজে সকল ক্রেতা (কাস্টমার ও এজেন্ট)-দের তথ্য সংরক্ষণ ও পরিচালনা করা হয়। চালান তৈরির আগে অবশ্যই গ্রাহক যোগ করতে হবে।</p>

        <div class="info-box warning" style="border-left-color:var(--danger);background:#fef2f2">
          <div class="info-box-title" style="color:var(--danger)">⚠️ গুরুত্বপূর্ণ - প্রথমে এটি তৈরি করুন</div>
          <div style="display:flex;align-items:center;gap:10px;margin-top:10px;font-size:14px;flex-wrap:wrap">
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ১</span>
            <span>গ্রাহক তালিকা</span>
            <span style="color:var(--text-muted)">→</span>
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ২</span>
            <span>চালান তালিকা</span>
          </div>
          <p style="margin-top:10px">চালান তৈরি করার আগে অবশ্যই <strong>গ্রাহক</strong> তৈরি করে নিন। গ্রাহক না থাকলে চালান তৈরি করা যাবে না।</p>
        </div>

        <div class="info-box note">
          <div class="info-box-title">💡 কাস্টমার ও এজেন্ট</div>
          <p>দুই ধরনের গ্রাহক আছে — <strong>কাস্টমার</strong> (সরাসরি ক্রেতা) এবং <strong>এজেন্ট</strong> (মধ্যস্থতাকারী)। ধরন অনুযায়ী রঙিন ব্যাজে আলাদাভাবে চেনা যাবে।</p>
        </div>
      </div>

      <div class="section" id="sec-গ্রাহক-কী-ও-কেন-প্রয়োজন">
        <div class="section-title">গ্রাহক কী ও কেন প্রয়োজন?</div>

        <h4 class="sub-title">গ্রাহকের প্রকারভেদ:</h4>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="fc-icon">🧑‍💼</div>
            <h5>কাস্টমার</h5>
            <p>সরাসরি ক্রেতা যিনি ইট কিনেন</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">🤝</div>
            <h5>এজেন্ট</h5>
            <p>মধ্যস্থতাকারী যিনি ক্রেতা ও বিক্রেতার মধ্যে কাজ করেন</p>
          </div>
        </div>

        <div class="info-box success">
          <div class="info-box-title">✅ গ্রাহক ব্যবস্থাপনার সুবিধা</div>
          <ul class="bullet-list">
            <li>সকল ক্রেতার তথ্য একজায়গায় থাকে</li>
            <li>চালান তৈরি সহজ হয়</li>
            <li>বকেয়া হিসাব ট্র্যাক করা যায়</li>
            <li>ক্রেতা অনুযায়ী বিক্রয় রিপোর্ট তৈরি করা যায়</li>
            <li>যোগাযোগের তথ্য সহজে পাওয়া যায়</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-পরিসংখ্যান-কার্ড">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <p>পেজের উপরে চারটি সারসংক্ষেপ কার্ড থাকে:</p>
        <div class="stat-row">
          <div class="stat-card blue">
            <div class="stat-icon">🧑‍💼</div>
            <div><div class="stat-label">মোট কাস্টমার</div><div class="stat-value">২</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">📈</div>
            <div><div class="stat-label">মোট বিক্রয়</div><div class="stat-value">৳০.০০</div></div>
          </div>
          <div class="stat-card red">
            <div class="stat-icon">💵</div>
            <div><div class="stat-label">মোট বাকি</div><div class="stat-value">৳০.০০</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">⚠️</div>
            <div><div class="stat-label">উচ্চ বাকি</div><div class="stat-value">০</div></div>
          </div>
        </div>
        <div class="info-box note">
          <div class="info-box-title">💡 কার্ডের ব্যাখ্যা</div>
          <ul class="bullet-list">
            <li><strong>মোট কাস্টমার:</strong> সিস্টেমে নিবন্ধিত মোট গ্রাহকের সংখ্যা।</li>
            <li><strong>মোট বিক্রয়:</strong> সকল গ্রাহকের কাছে মোট বিক্রির পরিমাণ।</li>
            <li><strong>মোট বাকি:</strong> এখনো পরিশোধ হয়নি এমন মোট বকেয়া।</li>
            <li><strong>উচ্চ বাকি:</strong> নির্দিষ্ট সীমার বেশি বকেয়া আছে এমন গ্রাহকের সংখ্যা।</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-নতুন-কাস্টমার-যোগ">
        <div class="section-title">নতুন কাস্টমার যোগ</div>
        <p>উপরের ডানদিকে <strong style="color:var(--primary)">\"+ নতুন কাস্টমার যোগ করুন\"</strong> (কমলা বাটন) ক্লিক করুন। একটি ডায়ালগ বক্স খুলবে।</p>
        <ol class="steps">
          <li><strong>ক্রেতার নাম</strong> লিখুন — বাধ্যতামূলক। (যেমন: Jashore IT Hub)</li>
          <li><strong>ফোন নম্বর</strong> লিখুন — বাধ্যতামূলক।</li>
          <li><strong>মোবাইল</strong> নম্বর লিখুন — ঐচ্ছিক (বিকল্প নম্বর)।</li>
          <li><strong>ঠিকানা</strong> লিখুন — সম্পূর্ণ ঠিকানা।</li>
          <li><strong>সেক্টর, বাড়ি, রাস্তা</strong> — ঠিকানার বিস্তারিত অংশ আলাদাভাবে দেওয়া যাবে।</li>
          <li><strong>ধরন</strong> নির্বাচন করুন — কাস্টমার অথবা এজেন্ট।</li>
          <li><strong>স্ট্যাটাস</strong> নির্বাচন করুন — সক্রিয় বা নিষ্ক্রিয়।</li>
          <li><strong>\"সংরক্ষণ\"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ মনে রাখুন</div>
          ক্রেতার নাম ও ফোন নম্বর বাধ্যতামূলক। একই ফোন নম্বরে দুইজন গ্রাহক যোগ করা যাবে না।
        </div>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">🧑‍💼 নতুন কাস্টমার যোগ করুন</div>
          <div class="field-group">
            <div class="field-group-title" style="color:var(--primary)">• মৌলিক তথ্য</div>
            <div class="form-row single">
              <div class="form-field">
                <label>ক্রেতার নাম <span class="required">*</span></label>
                <div class="field-mock active">নাম দিন</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label>ফোন নম্বর <span class="required">*</span></label>
                <div class="field-mock">ফোন নম্বর লিখুন</div>
              </div>
              <div class="form-field">
                <label>মোবাইল</label>
                <div class="field-mock">মোবাইল নম্বর লিখুন</div>
              </div>
            </div>
            <div class="form-row single">
              <div class="form-field">
                <label>ঠিকানা</label>
                <div class="field-mock">ঠিকানা লিখুন</div>
              </div>
            </div>
            <div class="form-row" style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px">
              <div class="form-field">
                <label>সেক্টর</label>
                <div class="field-mock"></div>
              </div>
              <div class="form-field">
                <label>বাড়ি</label>
                <div class="field-mock"></div>
              </div>
              <div class="form-field">
                <label>রাস্তা</label>
                <div class="field-mock"></div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label>ধরন</label>
                <div class="field-mock">কাস্টমার ▼</div>
              </div>
              <div class="form-field">
                <label>স্ট্যাটাস</label>
                <div class="field-mock">সক্রিয় ▼</div>
              </div>
            </div>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">সংরক্ষণ</button>
          </div>
        </div>

        <table class="doc-table">
          <tr><th>ফিল্ড</th><th>বিবরণ</th><th>বাধ্যতামূলক</th></tr>
          <tr><td>ক্রেতার নাম</td><td>গ্রাহকের পূর্ণ নাম বা প্রতিষ্ঠানের নাম</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>ফোন নম্বর</td><td>প্রধান যোগাযোগ নম্বর</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>মোবাইল</td><td>বিকল্প মোবাইল নম্বর</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>ঠিকানা</td><td>সম্পূর্ণ ঠিকানা</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>সেক্টর / বাড়ি / রাস্তা</td><td>ঠিকানার বিস্তারিত অংশ আলাদাভাবে</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>ধরন</td><td>কাস্টমার (সরাসরি ক্রেতা) বা এজেন্ট (মধ্যস্থতাকারী)</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>স্ট্যাটাস</td><td>সক্রিয় থাকলে চালানে ব্যবহার করা যাবে</td><td><span class="badge badge-green">না</span></td></tr>
        </table>
      </div>

      <div class="section" id="sec-তালিকা-ও-কার্যক্রম">
        <div class="section-title">তালিকা ও কার্যক্রম</div>
        <p>তালিকায় প্রতিটি গ্রাহকের সারিতে নিচের কলামগুলো থাকে:</p>
        <table class="doc-table">
          <tr><th>কলাম</th><th>বিবরণ</th></tr>
          <tr><td>ক্রেতার নাম</td><td>নাম ও ফোন নম্বর একসাথে দেখাবে</td></tr>
          <tr><td>কাস্টমার ধরন</td><td><span class="badge badge-orange">কাস্টমার</span> বা <span class="badge badge-green">এজেন্ট</span> ব্যাজে আলাদা</td></tr>
          <tr><td>ঠিকানা</td><td>📍 আইকনসহ ঠিকানা</td></tr>
          <tr><td>মোট ক্রয়</td><td>এই গ্রাহকের কাছে মোট বিক্রির পরিমাণ</td></tr>
          <tr><td>বর্তমান বাকি</td><td>এখন পর্যন্ত বকেয়া পরিমাণ</td></tr>
          <tr><td>স্ট্যাটাস</td><td>সক্রিয় (সবুজ) বা নিষ্ক্রিয়</td></tr>
          <tr><td>কার্যক্রম (⋯)</td><td>এডিট, বিস্তারিত বা মুছে ফেলার অপশন</td></tr>
        </table>
        <div class="info-box success">
          <div class="info-box-title">✅ সার্চ ও ফিল্টার</div>
          <ul class="bullet-list">
            <li>সার্চ বারে <strong>নাম বা ফোন</strong> দিয়ে দ্রুত খুঁজুন।</li>
            <li><strong>তারিখ নির্বাচন</strong> করে নির্দিষ্ট সময়ের গ্রাহক দেখুন।</li>
            <li>ফিল্টার ড্রপডাউনে <strong>ধরন</strong> (কাস্টমার/এজেন্ট) ও <strong>স্ট্যাটাস</strong> আলাদা করুন।</li>
          </ul>
        </div>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ মুছে ফেলার আগে</div>
          কোনো গ্রাহকের বিপরীতে বকেয়া চালান থাকলে তাকে মুছে ফেলা উচিত নয়। আগে বকেয়া পরিশোধ নিশ্চিত করুন।
        </div>
      </div>
    `
  },

  // ===================================================
  // চালান তালিকা (বিস্তারিত)
  // ===================================================
  challan: {
    title: 'চালান তালিকা',
    sections: ['পেজ পরিচিতি', 'কোন ক্রমে তৈরি করবেন', 'চালান কী ও কেন প্রয়োজন', 'পরিসংখ্যান কার্ড', 'নতুন চালান যোগ - ধাপে ধাপে', 'ফর্মের বিবরণ', 'প্রতিটি ফিল্ডের বিস্তারিত', 'তালিকা ব্যবস্থাপনা', 'চালান বিস্তারিত দেখা', 'সম্পাদনা', 'মুছে ফেলা', 'সাধারণ সমস্যা'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">🧾</div>
        <div>
          <h1>চালান তালিকা</h1>
          <p>বিক্রয় চালান ব্যবস্থাপনা — গ্রাহক, ইটের ধরন ও পরিমাণ</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → গ্রাহক ও চালান → <strong>চালান তালিকা</strong></span>
        <p>এই পেজে সকল বিক্রয় চালানের তথ্য, গ্রাহক, ইটের ধরন, পরিমাণ ও মূল্য একসাথে দেখা যায়। চালান তৈরি করার আগে অবশ্যই গ্রাহক ও ইটের ধরন তৈরি করে নিতে হয়।</p>

        <div class="info-box warning" style="border-left-color:var(--danger);background:#fef2f2">
          <div class="info-box-title" style="color:var(--danger)">⚠️ গুরুত্বপূর্ণ - প্রথমে এটি তৈরি করুন</div>
          <div style="display:flex;align-items:center;gap:10px;margin-top:10px;font-size:14px;flex-wrap:wrap">
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ১</span>
            <span>গ্রাহক তালিকা</span>
            <span style="color:var(--text-muted)">→</span>
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ২</span>
            <span>ইটের ধরন</span>
            <span style="color:var(--text-muted)">→</span>
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ৩</span>
            <span>চালান তালিকা</span>
          </div>
          <p style="margin-top:10px">চালান তৈরি করার আগে অবশ্যই <strong>গ্রাহক</strong> এবং <strong>ইটের ধরন</strong> তৈরি করে নিন।</p>
        </div>

        <div class="info-box note">
          <div class="info-box-title">💡 চালান কী?</div>
          <p><strong>চালান</strong> হলো বিক্রয়ের অফিশিয়াল ডকুমেন্ট যাতে গ্রাহকের তথ্য, ইটের ধরন, পরিমাণ, মূল্য এবং মোট বিলের পরিমাণ থাকে।</p>
        </div>
      </div>

      <div class="section" id="sec-চালান-কী-ও-কেন-প্রয়োজন">
        <div class="section-title">চালান কী ও কেন প্রয়োজন?</div>

        <h4 class="sub-title">চালানের উপাদানসমূহ:</h4>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="fc-icon">🧑‍💼</div>
            <h5>গ্রাহক</h5>
            <p>কোন গ্রাহকের কাছে বিক্রয় হচ্ছে</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">🧱</div>
            <h5>ইটের ধরন</h5>
            <p>কোন ধরনের ইট বিক্রয় হচ্ছে</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">📦</div>
            <h5>পরিমাণ</h5>
            <p>কতটি ইট বিক্রয় হচ্ছে</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">💰</div>
            <h5>মূল্য</h5>
            <p>প্রতি হাজার ইটের মূল্য</p>
          </div>
        </div>

        <div class="info-box success">
          <div class="info-box-title">✅ চালান ব্যবস্থাপনার সুবিধা</div>
          <ul class="bullet-list">
            <li>প্রতিটি বিক্রয়ের রেকর্ড থাকে</li>
            <li>গ্রাহক অনুযায়ী বিক্রয় বিশ্লেষণ করা যায়</li>
            <li>বকেয়া হিসাব ট্র্যাক করা যায়</li>
            <li>মাসিক/বার্ষিক বিক্রয় রিপোর্ট তৈরি করা যায়</li>
            <li>ইনভয়েস প্রিন্ট করা যায়</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-পরিসংখ্যান-কার্ড">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <p>পেজের উপরে চারটি সারসংক্ষেপ কার্ড থাকে:</p>
        
        <div class="stat-row">
          <div class="stat-card blue">
            <div class="stat-icon">🧾</div>
            <div><div class="stat-label">মোট চালান</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">📈</div>
            <div><div class="stat-label">মোট বিক্রয়</div><div class="stat-value">৳০</div></div>
          </div>
          <div class="stat-card red">
            <div class="stat-icon">💵</div>
            <div><div class="stat-label">মোট বাকি</div><div class="stat-value">৳০</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">📦</div>
            <div><div class="stat-label">মোট ইট</div><div class="stat-value">০</div></div>
          </div>
        </div>

        <h4 class="sub-title">কার্ডের ব্যাখ্যা:</h4>
        <table class="doc-table">
          <tr><th>কার্ড</th><th>কী বোঝায়</th><th>কীভাবে গণনা হয়</th></tr>
          <tr><td>মোট চালান</td><td>সিস্টেমে মোট কতটি চালান তৈরি করা হয়েছে</td><td>সব চালান গণনা</td></tr>
          <tr><td>মোট বিক্রয়</td><td>সকল চালানের মোট বিক্রয় মূল্য</td><td>সব চালানের মোট যোগফল</td></tr>
          <tr><td>মোট বাকি</td><td>এখনো পরিশোধ হয়নি এমন মোট বকেয়া</td><td>মোট বিক্রয় - মোট পরিশোধ</td></tr>
          <tr><td>মোট ইট</td><td>সকল চালানে মোট কতটি ইট বিক্রয় হয়েছে</td><td>সব চালানের ইট সংখ্যা যোগফল</td></tr>
        </table>
      </div>

      <div class="section" id="sec-নতুন-চালান-যোগ">
        <div class="section-title">নতুন চালান যোগ - ধাপে ধাপে</div>
        <ol class="steps">
          <li>পেজের উপরের ডানদিকে <strong style="color:var(--primary)">"+ নতুন চালান"</strong> (কমলা বাটন) এ ক্লিক করুন।</li>
          <li><strong>গ্রাহক নির্বাচন করুন</strong> ড্রপডাউন থেকে গ্রাহক নির্বাচন করুন — এটি বাধ্যতামূলক।</li>
          <li><strong>চালানের তারিখ</strong> নির্বাচন করুন — ডিফল্ট আজকের তারিখ।</li>
          <li><strong>ইনভয়েস নম্বর</strong> স্বয়ংক্রিয়ভাবে তৈরি হয় (যেমন: INV-2026-001)।</li>
          <li><strong>আইটেম যোগ করুন</strong> সেকশনে:
            <ul class="bullet-list">
              <li>ইটের ধরন নির্বাচন করুন</li>
              <li>পরিমাণ (হাজারে) লিখুন</li>
              <li>প্রতি হাজার মূল্য লিখুন</li>
              <li>মোট মূল্য স্বয়ংক্রিয়ভাবে গণনা হবে</li>
              <li>"+ আরও আইটেম যোগ করুন" দিয়ে আরও ইটের ধরন যোগ করুন</li>
            </ul>
          </li>
          <li><strong>ডিসকাউন্ট</strong> লিখুন (ঐচ্ছিক)।</li>
          <li><strong>মন্তব্য</strong> লিখুন (ঐচ্ছিক)।</li>
          <li><strong>মোট পরিশোধযোগ্য</strong> স্বয়ংক্রিয়ভাবে দেখাবে।</li>
          <li><strong>"চালান তৈরি করুন"</strong> বাটনে ক্লিক করুন।</li>
          <li>সফল হলে সবুজ বার্তা দেখাবে এবং চালান তৈরি হবে।</li>
        </ol>

        <div class="info-box success">
          <div class="info-box-title">✅ সফলতা বার্তা</div>
          সঠিকভাবে তৈরি হলে <strong>"Challan created successfully"</strong> সবুজ বার্তা দেখাবে।
        </div>

        <div class="info-box warning">
          <div class="info-box-title">⚠️ মনে রাখবেন</div>
          <ul class="bullet-list">
            <li>কমপক্ষে একটি আইটেম যোগ করতে হবে</li>
            <li>পরিমাণ ০ বা খালি রাখা যাবে না</li>
            <li>গ্রাহক না থাকলে প্রথমে গ্রাহক তৈরি করুন</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">🧾 নতুন চালান যোগ করুন</div>
          
          <div class="field-group">
            <div class="field-group-title">📦 মৌলিক তথ্য</div>
            <div class="form-row">
              <div class="form-field">
                <label>গ্রাহক নির্বাচন করুন <span class="required">*</span></label>
                <div class="field-mock">গ্রাহক নির্বাচন করুন... ▼</div>
              </div>
              <div class="form-field">
                <label>চালানের তারিখ <span class="required">*</span></label>
                <div class="field-mock active">০৪/০৩/২০২৬</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label>ইনভয়েস নম্বর</label>
                <div class="field-mock" style="color:var(--text-muted)">INV-2026-001 (স্বয়ংক্রিয়)</div>
              </div>
            </div>
          </div>

          <div class="field-group" style="margin-top:10px">
            <div class="field-group-title">🛒 আইটেম তালিকা</div>
            <div style="border:1px solid var(--border);border-radius:8px;padding:12px;margin-bottom:10px">
              <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr 30px;gap:10px;font-size:12px;color:var(--text-muted);margin-bottom:8px">
                <span>ইটের ধরন</span><span>পরিমাণ</span><span>প্রতি হাজার</span><span>মোট</span><span></span>
              </div>
              <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr 30px;gap:10px;align-items:center">
                <div class="field-mock" style="font-size:13px">ইটের ধরন নির্বাচন... ▼</div>
                <div class="field-mock" style="font-size:13px">0</div>
                <div class="field-mock" style="font-size:13px">0</div>
                <div style="font-size:13px;color:var(--primary);font-weight:600">৳0</div>
                <div style="color:#ef4444;font-size:18px;cursor:pointer;text-align:center">✕</div>
              </div>
            </div>
            <div style="color:var(--primary);font-size:13px;cursor:pointer;margin-bottom:10px">+ আরও আইটেম যোগ করুন</div>
          </div>

          <div class="field-group" style="margin-top:10px">
            <div class="form-row">
              <div class="form-field">
                <label>ডিসকাউন্ট (৳)</label>
                <div class="field-mock">0</div>
              </div>
              <div class="form-field">
                <label>মোট পরিশোধযোগ্য</label>
                <div class="field-mock" style="color:var(--primary);font-weight:700">৳0</div>
              </div>
            </div>
            <div class="form-row single">
              <div class="form-field">
                <label>মন্তব্য (ঐচ্ছিক)</label>
                <div class="field-mock" style="height:60px;padding-top:8px">বিশেষ তথ্য...</div>
              </div>
            </div>
          </div>

          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">🧾 চালান তৈরি করুন</button>
          </div>
        </div>

        <table class="doc-table">
          <tr><th>ফিল্ড</th><th>বিবরণ</th><th>বাধ্যতামূলক</th></tr>
          <tr><td>গ্রাহক নির্বাচন</td><td>কোন গ্রাহকের কাছে বিক্রয় হচ্ছে</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>চালানের তারিখ</td><td>বিক্রয়ের তারিখ</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>ইনভয়েস নম্বর</td><td>স্বয়ংক্রিয়ভাবে তৈরি হয়</td><td>স্বয়ংক্রিয়</td></tr>
          <tr><td>ইটের ধরন</td><td>কোন ধরনের ইট বিক্রয় হচ্ছে</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>পরিমাণ (হাজারে)</td><td>কতটি ইট বিক্রয় হচ্ছে (হাজারে)</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>প্রতি হাজার মূল্য</td><td>প্রতি হাজার ইটের মূল্য</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>ডিসকাউন্ট</td><td>মোট বিল থেকে ছাড়</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>মন্তব্য</td><td>বিশেষ তথ্য</td><td><span class="badge badge-green">না</span></td></tr>
        </table>
      </div>

      <div class="section" id="sec-প্রতিটি-ফিল্ডের-বিস্তারিত">
        <div class="section-title">প্রতিটি ফিল্ডের বিস্তারিত ব্যাখ্যা</div>

        <h4 class="sub-title">১. গ্রাহক নির্বাচন ⭐</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী করবেন</div>
          <p>ড্রপডাউন থেকে একজন গ্রাহক নির্বাচন করুন। শুধু সক্রিয় গ্রাহক দেখাবে।</p>
        </div>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ ভ্যালিডেশন</div>
          <ul class="bullet-list">
            <li>অবশ্যই একজন গ্রাহক নির্বাচন করতে হবে</li>
            <li>গ্রাহক না থাকলে প্রথমে গ্রাহক তালিকায় যোগ করুন</li>
          </ul>
        </div>

        <h4 class="sub-title">২. চালানের তারিখ ⭐</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী করবেন</div>
          <p>বিক্রয়ের তারিখ নির্বাচন করুন। ডিফল্ট আজকের তারিখ থাকে।</p>
        </div>

        <h4 class="sub-title">৩. ইটের ধরন ⭐</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী করবেন</div>
          <p>ড্রপডাউন থেকে ইটের ধরন নির্বাচন করুন। ইটের ধরন না থাকলে প্রথমে ইটের ধরন তৈরি করুন।</p>
          <p><strong>উদাহরণ:</strong> প্রথম শ্রেণি, দ্বিতীয় শ্রেণি, তৃতীয় শ্রেণি</p>
        </div>

        <h4 class="sub-title">৪. পরিমাণ (হাজারে) ⭐</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী লিখবেন</div>
          <p>কতটি ইট বিক্রয় হচ্ছে তা হাজারে লিখুন।</p>
          <p><strong>উদাহরণ:</strong> ১০ (মানে ১০,০০০ ইট), ৫০ (মানে ৫০,০০০ ইট)</p>
        </div>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ ভ্যালিডেশন</div>
          <ul class="bullet-list">
            <li>০ বা খালি রাখা যাবে না</li>
            <li>ঋণাত্মক সংখ্যা দেওয়া যাবে না</li>
          </ul>
        </div>

        <h4 class="sub-title">৫. প্রতি হাজার মূল্য ⭐</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী লিখবেন</div>
          <p>প্রতি হাজার ইটের মূল্য লিখুন। ইটের ধরন নির্বাচন করলে ডিফল্ট মূল্য স্বয়ংক্রিয়ভাবে আসে।</p>
          <p><strong>উদাহরণ:</strong> ১৫,০০০, ১২,০০০, ১০,০০০</p>
        </div>

        <h4 class="sub-title">৬. ডিসকাউন্ট (ঐচ্ছিক)</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী লিখবেন</div>
          <p>মোট বিল থেকে ছাড়ের পরিমাণ লিখুন।</p>
        </div>

        <h4 class="sub-title">৭. মন্তব্য (ঐচ্ছিক)</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী লিখবেন</div>
          <p>বিশেষ তথ্য বা মন্তব্য লিখুন।</p>
        </div>
      </div>

      <div class="section" id="sec-তালিকা-ব্যবস্থাপনা">
        <div class="section-title">তালিকা ব্যবস্থাপনা</div>
        <p>মূল তালিকায় সব চালান দেখা যাবে। কলামগুলো:</p>
        
        <div class="table-mock">
          <div class="table-mock-header" style="grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr">
            <span>ইনভয়েস</span><span>তারিখ</span><span>গ্রাহক</span><span>মোট ইট</span><span>মোট বিল</span><span>স্ট্যাটাস</span><span>কার্যক্রম</span>
          </div>
          <div class="table-mock-row" style="grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr">
            <div><div style="font-weight:600;color:var(--primary)">INV-2026-001</div></div>
            <div>০৪/০৩/২০২৬</div>
            <div>জশোর আইটি হাব</div>
            <div>১০,০০০</div>
            <div><div style="color:var(--primary);font-weight:600">৳১,৫০,০০০</div></div>
            <div><span class="badge badge-green">✅ পরিশোধিত</span></div>
            <div><span style="font-size:18px;cursor:pointer">⋯</span></div>
          </div>
        </div>

        <h4 class="sub-title">কলামের বিবরণ:</h4>
        <table class="doc-table">
          <tr><th>কলাম</th><th>কী দেখাবে</th></tr>
          <tr><td>ইনভয়েস</td><td>চালানের ইনভয়েস নম্বর (কমলা রঙে)</td></tr>
          <tr><td>তারিখ</td><td>বিক্রয়ের তারিখ</td></tr>
          <tr><td>গ্রাহক</td><td>গ্রাহকের নাম</td></tr>
          <tr><td>মোট ইট</td><td>মোট কতটি ইট বিক্রয় হয়েছে</td></tr>
          <tr><td>মোট বিল</td><td>মোট বিলের পরিমাণ (কমলা রঙে)</td></tr>
          <tr><td>স্ট্যাটাস</td><td>পরিশোধিত (সবুজ) / বাকি (লাল) / আংশিক (কমলা)</td></tr>
          <tr><td>কার্যক্রম</td><td>⋯ মেনু — বিস্তারিত, এডিট, প্রিন্ট, মুছে ফেলা</td></tr>
        </table>

        <div class="info-box success">
          <div class="info-box-title">✅ সার্চ ও ফিল্টার</div>
          <ul class="bullet-list">
            <li><strong>সার্চ:</strong> ইনভয়েস নম্বর, গ্রাহকের নাম দিয়ে খুঁজুন</li>
            <li><strong>ফিল্টার:</strong> তারিখ পরিসর, স্ট্যাটাস আলাদা করুন</li>
            <li><strong>সর্ট:</strong> তারিখ, মোট বিল অনুযায়ী সাজান</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-চালান-বিস্তারিত-দেখা">
        <div class="section-title">চালান বিস্তারিত দেখা</div>
        <ol class="steps">
          <li>তালিকায় যেই চালানটির বিস্তারিত দেখতে চান, সেই সারির <strong>⋯</strong> মেনুতে ক্লিক করুন।</li>
          <li><strong>👁️ বিস্তারিত</strong> সিলেক্ট করুন।</li>
          <li>একটি মডাল খুলবে যেখানে থাকবে:
            <ul class="bullet-list">
              <li>চালানের মৌলিক তথ্য (ইনভয়েস, তারিখ, গ্রাহক)</li>
              <li>আইটেম তালিকা (ইটের ধরন, পরিমাণ, মূল্য)</li>
              <li>ডিসকাউন্ট ও মোট পরিশোধযোগ্য</li>
              <li>পেমেন্টের ইতিহাস (যদি থাকে)</li>
              <li>প্রিন্ট বাটন</li>
            </ul>
          </li>
        </ol>
      </div>

      <div class="section" id="sec-সম্পাদনা">
        <div class="section-title">চালান সম্পাদনা (Edit) করা</div>
        <ol class="steps">
          <li>তালিকায় যেই চালানটি সম্পাদনা করতে চান, সেই সারির <strong>⋯</strong> মেনুতে ক্লিক করুন।</li>
          <li><strong>✏️ Edit</strong> সিলেক্ট করুন।</li>
          <li>এডিট ডায়ালগ খুলবে — সব ফিল্ডে আগের মান আগে থেকেই পূরণ করা থাকবে।</li>
          <li>যে ফিল্ডটি পরিবর্তন করতে চান, সেই ফিল্ডে ক্লিক করে নতুন মান লিখুন।</li>
          <li>সব পরিবর্তন করার পর <strong>"আপডেট"</strong> বাটনে ক্লিক করুন।</li>
          <li>সফল হলে সবুজ বার্তা দেখাবে: <strong>"Challan updated successfully"</strong></li>
        </ol>

        <div class="info-box warning">
          <div class="info-box-title">⚠️ গুরুত্বপূর্ণ</div>
          <ul class="bullet-list">
            <li>চালান সম্পাদনা করলে ইনভয়েস নম্বর পরিবর্তন করা যাবে না</li>
            <li>পরিশোধিত চালান সম্পাদনা করা যাবে না</li>
            <li>আইটেম যোগ বা মুছে ফেলা যাবে</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-মুছে-ফেলা">
        <div class="section-title">চালান মুছে ফেলা</div>
        <ol class="steps">
          <li>তালিকায় যেই চালানটি মুছে ফেলতে চান, সেই সারির <strong>⋯</strong> মেনুতে ক্লিক করুন।</li>
          <li><strong>🗑️ Delete</strong> সিলেক্ট করুন।</li>
          <li>কনফার্মেশন ডায়ালগ খুলবে।</li>
          <li><strong>"হ্যাঁ, মুছে ফেলুন"</strong> এ ক্লিক করুন।</li>
        </ol>

        <div class="info-box warning">
          <div class="info-box-title">⚠️ সতর্কতা</div>
          <ul class="bullet-list">
            <li>চালান মুছে ফেললে ডেটা স্থায়ীভাবে মুছে যাবে</li>
            <li>এই কাজটি পূর্বাবস্থায় ফেরানো যাবে না</li>
            <li>পরিশোধিত চালান মুছে ফেলা যাবে না</li>
            <li>নিশ্চিত না হলে মুছবেন না</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-সাধারণ-সমস্যা">
        <div class="section-title">সাধারণ সমস্যা ও সমাধান</div>

        <h4 class="sub-title">সমস্যা ১: "গ্রাহক নির্বাচন করুন"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"Customer selection is required."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>একজন সক্রিয় গ্রাহক নির্বাচন করুন</li>
            <li>কোনো গ্রাহক না থাকলে প্রথমে গ্রাহক তালিকায় যোগ করুন</li>
          </ul>
        </div>

        <h4 class="sub-title">সমস্যা ২: "ইটের ধরন নির্বাচন করুন"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"Brick type selection is required."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>একটি ইটের ধরন নির্বাচন করুন</li>
            <li>কোনো ইটের ধরন না থাকলে প্রথমে ইটের ধরন তৈরি করুন</li>
          </ul>
        </div>

        <h4 class="sub-title">সমস্যা ৩: "পরিমাণ ০ হতে পারবে না"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"Quantity must be greater than 0."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>সঠিক পরিমাণ লিখুন</li>
            <li>০ বা খালি রাখা যাবে না</li>
            <li>ঋণাত্মক সংখ্যা দেওয়া যাবে না</li>
          </ul>
        </div>

        <h4 class="sub-title">সমস্যা ৪: "কমপক্ষে একটি আইটেম যোগ করুন"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"At least one item is required."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>কমপক্ষে একটি ইটের ধরন যোগ করুন</li>
            <li>সব ফিল্ড পূরণ করুন</li>
          </ul>
        </div>
      </div>
    `
  },

};