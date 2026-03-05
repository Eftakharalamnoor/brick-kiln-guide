// pages/customer_challan.js
// মডিউল: গ্রাহক ব্যবস্থাপনা ও চালান

var PAGES_CUSTOMER_CHALLAN = {

  // ===================================================
  // গ্রাহক ব্যবস্থাপনা
  // ===================================================
  customer: {
    title: 'গ্রাহক ব্যবস্থাপনা',
    sections: ['পেজ পরিচিতি', 'পরিসংখ্যান কার্ড', 'নতুন কাস্টমার যোগ', 'ফর্মের বিবরণ', 'তালিকা ও কার্যক্রম'],
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
        <span class="nav-path">মেনু → গ্রাহক ব্যবস্থাপনা → <strong>গ্রাহক</strong></span>
        <p>এই পেজে সকল ক্রেতা (কাস্টমার ও এজেন্ট)-দের তথ্য সংরক্ষণ ও পরিচালনা করা হয়। চালান তৈরির আগে অবশ্যই গ্রাহক যোগ করতে হবে।</p>
        <div class="info-box note">
          <div class="info-box-title">💡 কাস্টমার ও এজেন্ট</div>
          দুই ধরনের গ্রাহক আছে — <strong>কাস্টমার</strong> (সরাসরি ক্রেতা) এবং <strong>এজেন্ট</strong> (মধ্যস্থতাকারী)। ধরন অনুযায়ী রঙিন ব্যাজে আলাদাভাবে চেনা যাবে।
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

  // চালান পেজ এখানে পরে যোগ হবে
  challan: {
    title: 'চালান তালিকা',
    sections: ['পেজ পরিচিতি'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">🧾</div>
        <div>
          <h1>চালান তালিকা</h1>
          <p>স্ক্রিনশট দিলে বিস্তারিত গাইড যোগ করা হবে</p>
        </div>
      </div>
      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → গ্রাহক ও চালান → <strong>চালান তালিকা</strong></span>
        <div class="info-box note">
          <div class="info-box-title">💡 近日公開</div>
          চালান পেজের স্ক্রিনশট দিলে এখানে বিস্তারিত গাইড যোগ করা হবে।
        </div>
      </div>
    `
  },

};