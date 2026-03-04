// pages_purchase_full.js
// মডিউল: ক্রয়-বিক্রয় (সম্পূর্ণ বিস্তারিত গাইড)
// পেজ: supplier, material, purchase, inventory (মালামাল + ইট), সাপ্লায়ার পেমেন্ট ইতিহাস, ক্রয় রিপোর্ট
// এই ফাইলের PAGES_PURCHASE অবজেক্টটি pages.js-এর PAGES অবজেক্টে মার্জ করুন

var PAGES_PURCHASE = {

  // ===================================================
  // সাপ্লায়ার তালিকা
  // ===================================================
  supplier: {
    title: 'সাপ্লায়ার তালিকা',
    sections: ['পেজ পরিচিতি', 'পরিসংখ্যান কার্ড', 'নতুন সাপ্লায়ার যোগ', 'ফর্মের বিবরণ', 'তালিকা ও কার্যক্রম'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">🏪</div>
        <div>
          <h1>সাপ্লায়ার তালিকা</h1>
          <p>মালামাল সরবরাহকারীদের তথ্য ও লেনদেন ব্যবস্থাপনা</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → ক্রয়-বিক্রয় → <strong>সাপ্লায়ার তালিকা</strong></span>
        <p>এই পেজে সকল মালামাল সরবরাহকারী (সাপ্লায়ার)-দের তথ্য সংরক্ষণ ও পরিচালনা করা হয়। ক্রয় করার আগে অবশ্যই সাপ্লায়ার যোগ করতে হবে।</p>
        <div class="info-box note">
          <div class="info-box-title">💡 কখন ব্যবহার করবেন</div>
          নতুন সরবরাহকারীর সাথে কাজ শুরু করলে প্রথমে এখানে তার তথ্য যোগ করুন। এরপর ক্রয় এন্ট্রিতে সেই সাপ্লায়ার নির্বাচন করা যাবে।
        </div>
      </div>

      <div class="section" id="sec-পরিসংখ্যান-কার্ড">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <p>পেজের উপরে চারটি সারসংক্ষেপ কার্ড থাকে যা সাপ্লায়ারদের সামগ্রিক অবস্থা দেখায়:</p>
        <div class="stat-row">
          <div class="stat-card">
            <div class="stat-icon">🏪</div>
            <div><div class="stat-label">সক্রিয় সাপ্লায়ার</div><div class="stat-value">৪</div><div style="font-size:11px;color:var(--success)">↑ +২ এই মাসে</div></div>
          </div>
          <div class="stat-card blue">
            <div class="stat-icon">🛒</div>
            <div><div class="stat-label">মোট ক্রয়</div><div class="stat-value">৳১,২৯,২০০</div><div style="font-size:11px;color:var(--text-muted)">৬ টি লেনদেন</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">✅</div>
            <div><div class="stat-label">পরিশোধিত</div><div class="stat-value">৳৯৯,৮০০</div><div style="font-size:11px;color:var(--text-muted)">৭৭% সম্পন্ন</div></div>
          </div>
          <div class="stat-card red">
            <div class="stat-icon">⚠️</div>
            <div><div class="stat-label">বাকি</div><div class="stat-value">৳২৯,৪০০</div><div style="font-size:11px;color:var(--text-muted)">পেমেন্ট বাকি</div></div>
          </div>
        </div>
        <div class="info-box note">
          <div class="info-box-title">💡 কার্ডের ব্যাখ্যা</div>
          <ul class="bullet-list">
            <li><strong>সক্রিয় সাপ্লায়ার:</strong> বর্তমানে সক্রিয় অবস্থায় আছেন এমন সাপ্লায়ারের সংখ্যা।</li>
            <li><strong>মোট ক্রয়:</strong> সকল সাপ্লায়ারের কাছ থেকে এখন পর্যন্ত মোট কেনাকাটার পরিমাণ।</li>
            <li><strong>পরিশোধিত:</strong> কত টাকা পরিশোধ করা হয়েছে এবং শতকরা হার।</li>
            <li><strong>বাকি:</strong> এখনো পরিশোধ হয়নি এমন মোট বকেয়া পরিমাণ।</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-নতুন-সাপ্লায়ার-যোগ">
        <div class="section-title">নতুন সাপ্লায়ার যোগ</div>
        <p>উপরের ডানদিকে <strong style="color:var(--primary)">\"+ নতুন সাপ্লায়ার\"</strong> (কমলা বাটন) ক্লিক করুন। একটি ডায়ালগ বক্স খুলবে।</p>
        <ol class="steps">
          <li><strong>সাপ্লায়ারের নাম</strong> লিখুন — এটি বাধ্যতামূলক। (যেমন: রহিম সাপ্লায়ার্স)</li>
          <li><strong>ফোন নম্বর</strong> লিখুন — বাধ্যতামূলক। (যেমন: 01XXXXXXXXX)</li>
          <li><strong>ইমেইল</strong> লিখুন — ঐচ্ছিক।</li>
          <li><strong>ঠিকানা</strong> লিখুন — ঐচ্ছিক।</li>
          <li><strong>মালামালের ধরন</strong> ড্রপডাউন থেকে এক বা একাধিক ধরন নির্বাচন করুন — বাধ্যতামূলক।</li>
          <li><strong>স্ট্যাটাস</strong> ড্রপডাউন থেকে "সক্রিয়" নির্বাচন করুন।</li>
          <li><strong>রেটিং</strong> — সাপ্লায়ারের মান অনুযায়ী তারকা নির্বাচন করুন (১–৫)।</li>
          <li><strong>নোট</strong> — প্রয়োজনে বাড়তি তথ্য লিখুন।</li>
          <li><strong>\"সংরক্ষণ\"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ সতর্কতা</div>
          মালামালের ধরন না দিলে লাল রঙে "অন্তত একটি মালামালের ধরন নির্বাচন করুন" বার্তা আসবে — অবশ্যই নির্বাচন করতে হবে।
        </div>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">🏪 নতুন সাপ্লায়ার যুক্ত করুন</div>
          <div class="field-group">
            <div class="field-group-title" style="color:var(--primary)">• মৌলিক তথ্য</div>
            <div class="form-row single">
              <div class="form-field">
                <label>সাপ্লায়ারের নাম <span class="required">*</span></label>
                <div class="field-mock active">যেমন: রহিম সাপ্লায়ার্স</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label>ফোন নম্বর <span class="required">*</span></label>
                <div class="field-mock">01XXXXXXXXX</div>
              </div>
              <div class="form-field">
                <label>ইমেইল</label>
                <div class="field-mock">email@example.com</div>
              </div>
            </div>
            <div class="form-row single">
              <div class="form-field">
                <label>ঠিকানা</label>
                <div class="field-mock" style="height:50px"></div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label>মালামালের ধরন <span class="required">*</span></label>
                <div class="field-mock">এক বা একাধিক ধরন নির্বাচন করুন ▼</div>
              </div>
              <div class="form-field">
                <label>স্ট্যাটাস</label>
                <div class="field-mock">সক্রিয় ▼</div>
              </div>
            </div>
            <div class="form-row single">
              <div class="form-field">
                <label>রেটিং</label>
                <div style="font-size:22px;letter-spacing:4px;margin:4px 0">★★★☆☆</div>
              </div>
            </div>
            <div class="form-row single">
              <div class="form-field">
                <label>নোট</label>
                <div class="field-mock" style="height:60px"></div>
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
          <tr><td>সাপ্লায়ারের নাম</td><td>সরবরাহকারীর পরিচিতিমূলক নাম</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>ফোন নম্বর</td><td>যোগাযোগের মোবাইল নম্বর</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>ইমেইল</td><td>ইমেইল ঠিকানা</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>ঠিকানা</td><td>সাপ্লায়ারের অবস্থান</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>মালামালের ধরন</td><td>কোন ধরনের মালামাল সরবরাহ করেন (একাধিক হতে পারে)</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>স্ট্যাটাস</td><td>সক্রিয় হলে ক্রয়ে ব্যবহার করা যাবে</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>রেটিং</td><td>সাপ্লায়ারের মান (১–৫ তারকা)</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>নোট</td><td>অতিরিক্ত তথ্য বা মন্তব্য</td><td><span class="badge badge-green">না</span></td></tr>
        </table>
      </div>

      <div class="section" id="sec-তালিকা-ও-কার্যক্রম">
        <div class="section-title">তালিকা ও কার্যক্রম</div>
        <p>তালিকায় সকল সাপ্লায়ার দেখা যাবে। প্রতিটি সারিতে নিচের কলামগুলো থাকে:</p>
        <table class="doc-table">
          <tr><th>কলাম</th><th>বিবরণ</th></tr>
          <tr><td>সাপ্লায়ার তালিকা</td><td>সাপ্লায়ারের নাম ও ফোন নম্বর</td></tr>
          <tr><td>মালামাল</td><td>যে ধরনের মালামাল সরবরাহ করেন</td></tr>
          <tr><td>মোট ক্রয়</td><td>এই সাপ্লায়ারের কাছ থেকে মোট কেনার পরিমাণ</td></tr>
          <tr><td>রেটিং</td><td>তারকা চিহ্নে সাপ্লায়ারের মান</td></tr>
          <tr><td>স্ট্যাটাস</td><td>সক্রিয় (সবুজ) বা নিষ্ক্রিয়</td></tr>
          <tr><td>পেমেন্ট</td><td>পেমেন্ট ইতিহাস দেখার বাটন (ঘড়ি আইকন)</td></tr>
          <tr><td>কার্যক্রম (⋯)</td><td>এডিট বা ডিলিট অপশন</td></tr>
        </table>
        <div class="info-box success">
          <div class="info-box-title">✅ সার্চ ও ফিল্টার</div>
          <ul class="bullet-list">
            <li>সার্চ বারে <strong>নাম বা ফোন</strong> দিয়ে দ্রুত খুঁজুন।</li>
            <li><strong>তারিখ নির্বাচন</strong> করে নির্দিষ্ট সময়ের সাপ্লায়ার দেখুন।</li>
            <li>ফিল্টার ড্রপডাউনে <strong>সক্রিয় / নিষ্ক্রিয়</strong> আলাদা করুন।</li>
            <li><strong>এক্সপোর্ট</strong> বাটনে ক্লিক করে তালিকা ডাউনলোড করুন।</li>
          </ul>
        </div>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ মুছে ফেলার আগে</div>
          কোনো সাপ্লায়ার মুছে ফেলার আগে নিশ্চিত করুন তার বিপরীতে কোনো বকেয়া ক্রয় নেই।
        </div>
      </div>
    `
  },

  // ===================================================
  // মালামাল তালিকা
  // ===================================================
  material: {
    title: 'মালামাল তালিকা',
    sections: ['পেজ পরিচিতি', 'নতুন মালামাল যোগ', 'ফর্মের বিবরণ', 'তালিকা ব্যবস্থাপনা'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">🪨</div>
        <div>
          <h1>মালামাল তালিকা</h1>
          <p>কাঁচামাল ও উপকরণ সংজ্ঞায়িত করুন — কয়লা, কাঠ, মাটি ইত্যাদি</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → ক্রয়-বিক্রয় → <strong>মালামাল তালিকা</strong></span>
        <p>এই পেজে ইট ভাটায় ব্যবহৃত সকল কাঁচামাল ও উপকরণের ক্যাটাগরি তৈরি করা হয়। ক্রয় এন্ট্রিতে মালামাল নির্বাচন করতে হলে আগে এখানে যোগ করতে হবে।</p>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="fc-icon">🪨</div>
            <h5>কয়লা</h5>
            <p>পরিমাপের একক: TON</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">🌲</div>
            <h5>কাঠ</h5>
            <p>পরিমাপের একক: TON</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">🟤</div>
            <h5>মাটি</h5>
            <p>পরিমাপের একক: CFT</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">➕</div>
            <h5>কাস্টম</h5>
            <p>নিজের প্রয়োজন মতো যোগ করুন</p>
          </div>
        </div>
        <div class="info-box note">
          <div class="info-box-title">💡 গুরুত্বপূর্ণ</div>
          মালামাল যোগ করার পর সাপ্লায়ারকে সেই মালামালের ধরনে যুক্ত করুন। তাহলে ক্রয়ে সঠিকভাবে ফিল্টার করা যাবে।
        </div>
      </div>

      <div class="section" id="sec-নতুন-মালামাল-যোগ">
        <div class="section-title">নতুন মালামাল যোগ</div>
        <p>উপরের ডানদিকে <strong style="color:var(--primary)">\"+ মেটেরিয়াল যোগ করুন\"</strong> বাটনে ক্লিক করুন।</p>
        <ol class="steps">
          <li><strong>মালামালের নাম</strong> লিখুন — বাধ্যতামূলক। (যেমন: Coal, কাঠ, মাটি)</li>
          <li><strong>একক (Unit)</strong> নির্বাচন করুন ড্রপডাউন থেকে — বাধ্যতামূলক।</li>
          <li><strong>\"সংরক্ষণ\"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
        <div class="info-box tip">
          <div class="info-box-title">💜 একক নির্বাচন গাইড</div>
          <table class="doc-table">
            <tr><th>মালামাল</th><th>সাধারণ একক</th></tr>
            <tr><td>কয়লা, কাঠ</td><td>TON (টন)</td></tr>
            <tr><td>মাটি</td><td>CFT (ঘনফুট)</td></tr>
            <tr><td>বালু, সিমেন্ট</td><td>KG বা TON</td></tr>
          </table>
        </div>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">🪨 নতুন উপাদান যুক্ত করুন</div>
          <div class="field-group">
            <div class="field-group-title" style="color:var(--primary)">• মৌলিক তথ্য</div>
            <div class="form-row">
              <div class="form-field">
                <label>মালামালের নাম <span class="required">*</span></label>
                <div class="field-mock active">Coal</div>
              </div>
              <div class="form-field">
                <label>একক <span class="required">*</span></label>
                <div class="field-mock">Select Unit ▼</div>
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
          <tr><td>মালামালের নাম</td><td>উপকরণের নাম (বাংলা বা ইংরেজিতে)</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>একক (Unit)</td><td>পরিমাপের একক: TON, KG, CFT, লিটার ইত্যাদি</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
        </table>
      </div>

      <div class="section" id="sec-তালিকা-ব্যবস্থাপনা">
        <div class="section-title">তালিকা ব্যবস্থাপনা</div>
        <p>তালিকায় তিনটি কলাম দেখা যাবে:</p>
        <table class="doc-table">
          <tr><th>কলাম</th><th>বিবরণ</th></tr>
          <tr><td>মালামালের নাম</td><td>উপকরণের নাম</td></tr>
          <tr><td>একক</td><td>পরিমাপের একক (TON, CFT ইত্যাদি) ব্যাজ হিসেবে</td></tr>
          <tr><td>তৈরি হয়েছে</td><td>কোন তারিখে যোগ করা হয়েছে</td></tr>
          <tr><td>কার্যক্রম (⋯)</td><td>এডিট বা মুছে ফেলার অপশন</td></tr>
        </table>
        <div class="info-box success">
          <div class="info-box-title">✅ সার্চ ও ফিল্টার</div>
          সার্চ বারে মালামালের নাম লিখে দ্রুত খুঁজুন। এক্সপোর্ট বাটনে তালিকা ডাউনলোড করুন।
        </div>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ সতর্কতা</div>
          যে মালামাল ইতোমধ্যে ক্রয় এন্ট্রিতে ব্যবহৃত হয়েছে তা মুছে ফেলা উচিত নয়।
        </div>
      </div>
    `
  },

  // ===================================================
  // ক্রয় এন্ট্রি
  // ===================================================
  purchase: {
    title: 'ক্রয় এন্ট্রি',
    sections: ['পেজ পরিচিতি', 'পরিসংখ্যান কার্ড', 'নতুন ক্রয় যোগ', 'ফর্মের বিবরণ', 'ক্রয় তালিকা ও কার্যক্রম', 'পেমেন্ট যোগ', 'পেমেন্ট হিস্টোরি', 'মেটেরিয়াল রিসিভ', 'ক্রয় সম্পাদনা'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">🛒</div>
        <div>
          <h1>ক্রয় এন্ট্রি</h1>
          <p>মালামাল ক্রয়ের প্রতিটি লেনদেন রেকর্ড করুন ও পেমেন্ট পরিচালনা করুন</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → ক্রয়-বিক্রয় → <strong>ক্রয় এন্ট্রি</strong></span>
        <p>এই পেজে সকল মালামাল ক্রয়ের বিস্তারিত রেকর্ড রাখা হয়। একটি ক্রয়ে একাধিক মালামাল যোগ করা যায়। পেমেন্ট আলাদাভাবে রেকর্ড করা যায় এবং মেটেরিয়াল রিসিভও ট্র্যাক করা যায়।</p>
        <div class="info-box note">
          <div class="info-box-title">💡 ক্রয়ের ধাপ</div>
          ক্রয় যোগ করুন → পেমেন্ট রেকর্ড করুন → মেটেরিয়াল রিসিভ নিশ্চিত করুন।
        </div>
      </div>

      <div class="section" id="sec-পরিসংখ্যান-কার্ড">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <p>পেজের উপরে চারটি কার্ড সামগ্রিক ক্রয় অবস্থা দেখায়:</p>
        <div class="stat-row">
          <div class="stat-card">
            <div class="stat-icon">🏪</div>
            <div><div class="stat-label">সক্রিয় সাপ্লায়ার</div><div class="stat-value">৪</div><div style="font-size:11px;color:var(--success)">+২ এই মাসে</div></div>
          </div>
          <div class="stat-card blue">
            <div class="stat-icon">🛒</div>
            <div><div class="stat-label">মোট ক্রয়</div><div class="stat-value">৳১,২৯,২০০</div><div style="font-size:11px;color:var(--text-muted)">৬ টি লেনদেন</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">✅</div>
            <div><div class="stat-label">পরিশোধিত</div><div class="stat-value">৳৯৯,৮০০</div><div style="font-size:11px;color:var(--text-muted)">৭৭% সম্পন্ন</div></div>
          </div>
          <div class="stat-card red">
            <div class="stat-icon">⚠️</div>
            <div><div class="stat-label">বাকি</div><div class="stat-value">৳২৯,৪০০</div><div style="font-size:11px;color:var(--text-muted)">পেমেন্ট বাকি</div></div>
          </div>
        </div>
      </div>

      <div class="section" id="sec-নতুন-ক্রয়-যোগ">
        <div class="section-title">নতুন ক্রয় যোগ</div>
        <p>উপরের ডানদিকে <strong style="color:#2563eb">\"+ নতুন ক্রয়\"</strong> (নীল বাটন) ক্লিক করুন।</p>
        <ol class="steps">
          <li><strong>সাপ্লায়ার</strong> ড্রপডাউন থেকে নির্বাচন করুন — বাধ্যতামূলক।</li>
          <li><strong>ইনভয়েস নং</strong> — স্বয়ংক্রিয়ভাবে তৈরি হয়, পরিবর্তনের দরকার নেই।</li>
          <li><strong>আইটেম তালিকা</strong> বিভাগে মালামাল নির্বাচন করুন এবং পরিমাণ ও দাম দিন।</li>
          <li>একাধিক মালামাল যোগ করতে <strong>\"+ আইটেম যোগ করুন\"</strong> ক্লিক করুন।</li>
          <li>নিচে <strong>মোট আইটেম</strong> ও <strong>সর্বমোট</strong> স্বয়ংক্রিয়ভাবে হিসাব হবে।</li>
          <li>প্রয়োজনে <strong>নোট</strong> লিখুন।</li>
          <li><strong>\"সংরক্ষণ\"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ মনে রাখুন</div>
          মালামাল নির্বাচনের পর পরিমাণ ও দাম সঠিকভাবে দিন। "X" বাটনে ক্লিক করে আইটেম সরানো যাবে।
        </div>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ — নতুন ক্রয়</div>
        <div class="form-mock">
          <div class="form-mock-title">🛒 নতুন ক্রয় যুক্ত করুন</div>
          <div class="form-row">
            <div class="form-field">
              <label>সাপ্লায়ার <span class="required">*</span></label>
              <div class="field-mock">সাপ্লায়ার নির্বাচন করুন ▼</div>
            </div>
            <div class="form-field">
              <label>ইনভয়েস নং</label>
              <div class="field-mock" style="color:var(--text-muted)">স্বয়ংক্রিয়</div>
            </div>
          </div>

          <div style="margin:14px 0 6px;font-weight:600;font-size:15px">আইটেম তালিকা
            <span style="float:right;font-size:13px;color:var(--primary);font-weight:400;cursor:pointer">+ আইটেম যোগ করুন</span>
          </div>
          <div style="border:1px solid var(--border);border-radius:8px;padding:10px;margin-bottom:12px">
            <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr 30px;gap:8px;font-size:12px;color:var(--text-muted);margin-bottom:6px;padding-bottom:6px;border-bottom:1px solid var(--border)">
              <span>মালামাল</span><span>পরি</span><span>দাম</span><span>মোট</span><span></span>
            </div>
            <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr 30px;gap:8px;align-items:center">
              <div class="field-mock" style="font-size:13px">মালামাল নির্বাচ... ▼</div>
              <div class="field-mock" style="font-size:13px">0</div>
              <div class="field-mock" style="font-size:13px">0</div>
              <div style="font-size:13px;color:var(--primary);font-weight:600">৳0</div>
              <div style="color:#ef4444;font-size:18px;cursor:pointer;text-align:center">✕</div>
            </div>
          </div>

          <div class="form-row single">
            <div class="form-field">
              <label>নোট</label>
              <div class="field-mock" style="height:60px"></div>
            </div>
          </div>

          <div style="background:#f8fafc;border:1px solid var(--border);border-radius:8px;padding:12px;display:flex;justify-content:space-between;font-size:14px;margin-top:4px">
            <span>মোট আইটেম <strong>০</strong></span>
            <span>সর্বমোট <strong style="color:var(--primary)">৳০</strong></span>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary" style="background:#2563eb">সংরক্ষণ</button>
          </div>
        </div>

        <table class="doc-table">
          <tr><th>ফিল্ড</th><th>বিবরণ</th><th>বাধ্যতামূলক</th></tr>
          <tr><td>সাপ্লায়ার</td><td>কার কাছ থেকে কেনা হচ্ছে</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>ইনভয়েস নং</td><td>সিস্টেম তৈরি অনন্য নম্বর (যেমন: INV-20260304)</td><td>স্বয়ংক্রিয়</td></tr>
          <tr><td>মালামাল</td><td>কোন মালামাল কেনা হচ্ছে (একাধিক হতে পারে)</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>পরিমাণ</td><td>মালামালের পরিমাণ</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>দাম</td><td>একক মূল্য</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>নোট</td><td>অতিরিক্ত তথ্য বা মন্তব্য</td><td><span class="badge badge-green">না</span></td></tr>
        </table>
      </div>

      <div class="section" id="sec-ক্রয়-তালিকা-ও-কার্যক্রম">
        <div class="section-title">ক্রয় তালিকা ও কার্যক্রম</div>
        <p>তালিকায় সব ক্রয়ের রেকর্ড দেখা যাবে। প্রতিটি সারিতে নিচের কলামগুলো থাকে:</p>
        <table class="doc-table">
          <tr><th>কলাম</th><th>বিবরণ</th></tr>
          <tr><td>তারিখ</td><td>ক্রয়ের তারিখ</td></tr>
          <tr><td>সাপ্লায়ার</td><td>সরবরাহকারীর নাম</td></tr>
          <tr><td>মালামাল</td><td>কী কী কেনা হয়েছে</td></tr>
          <tr><td>টি (আইটেম সংখ্যা)</td><td>কতটি ভিন্ন মালামাল কেনা হয়েছে</td></tr>
          <tr><td>মোট</td><td>মোট মূল্য (কমলা রঙে)</td></tr>
          <tr><td>স্ট্যাটাস</td><td>পেমেন্টের অবস্থা (কমলা ড্যাশ = আংশিক, লাল = বকেয়া)</td></tr>
          <tr><td>পেমেন্ট আইকন</td><td>💚 পেমেন্ট যোগ, 🕐 ইতিহাস, 📦 মেটেরিয়াল রিসিভ</td></tr>
          <tr><td>কার্যক্রম</td><td>👁️ বিস্তারিত, ✏️ সম্পাদনা</td></tr>
        </table>
        <div class="info-box note">
          <div class="info-box-title">💡 ফিল্টার অপশন</div>
          তারিখ, সাপ্লায়ার, মালামাল এবং পেমেন্ট স্ট্যাটাস অনুযায়ী ফিল্টার করা যাবে। সার্চ বারে সাপ্লায়ার, মালামাল বা ইনভয়েস নম্বর দিয়ে খুঁজুন।
        </div>
      </div>

      <div class="section" id="sec-পেমেন্ট-যোগ">
        <div class="section-title">পেমেন্ট যোগ</div>
        <p>তালিকার প্রতিটি সারিতে সবুজ <strong>💚</strong> আইকনে ক্লিক করলে পেমেন্ট ফর্ম খুলবে।</p>

        <div class="form-mock">
          <div class="form-mock-title">💵 ক্রয় পেমেন্ট</div>
          <div style="background:#f8fafc;border:1px solid var(--border);border-radius:10px;padding:14px;margin-bottom:14px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <span style="font-size:15px;font-weight:600">Jashore IT Hub</span>
              <span class="badge badge-orange">বায়</span>
            </div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;text-align:center;font-size:13px">
              <div><div style="color:var(--text-muted)">মোট পরিমাণ</div><div style="font-weight:700">৳১,০০০</div></div>
              <div><div style="color:var(--text-muted)">পূর্বে দেওয়া</div><div style="font-weight:700;color:var(--success)">৳০</div></div>
              <div><div style="color:var(--text-muted)">বর্তমান বাকি</div><div style="font-weight:700;color:var(--danger)">৳১,০০০</div></div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-field">
              <label>পেমেন্টের পরিমাণ</label>
              <div class="field-mock">০</div>
            </div>
            <div class="form-field" style="display:flex;align-items:flex-end">
              <button class="btn-primary" style="font-size:12px;padding:8px 10px;background:#f8fafc;color:var(--text);border:1px solid var(--border)">সম্পূর্ণ বাকি</button>
            </div>
          </div>

          <div style="margin:12px 0 6px;font-size:13px;font-weight:500">পেমেন্ট পদ্ধতি</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:12px">
            <div style="border:1px solid var(--border);border-radius:8px;padding:12px;text-align:center;background:var(--success);color:white">
              <div style="font-size:20px">💵</div>
              <div style="font-size:13px;font-weight:600;margin-top:4px">নগদ</div>
            </div>
            <div style="border:1px solid var(--border);border-radius:8px;padding:12px;text-align:center">
              <div style="font-size:20px">🏦</div>
              <div style="font-size:13px;margin-top:4px">ব্যাংক</div>
            </div>
            <div style="border:1px solid var(--border);border-radius:8px;padding:12px;text-align:center">
              <div style="font-size:20px">📱</div>
              <div style="font-size:13px;margin-top:4px">মোবাইল</div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-field">
              <label>তারিখ</label>
              <div class="field-mock">March 4th, 2026</div>
            </div>
            <div class="form-field">
              <label>নোট</label>
              <div class="field-mock">অতিরিক্ত নোট...</div>
            </div>
          </div>

          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary" style="background:var(--success)">⊙ পেমেন্ট সংরক্ষণ করুন</button>
          </div>
        </div>

        <table class="doc-table">
          <tr><th>ফিল্ড</th><th>বিবরণ</th></tr>
          <tr><td>পেমেন্টের পরিমাণ</td><td>কত টাকা দেওয়া হচ্ছে। "সম্পূর্ণ বাকি" বাটনে ক্লিক করলে পুরো বকেয়া স্বয়ংক্রিয় পূরণ হবে।</td></tr>
          <tr><td>পেমেন্ট পদ্ধতি</td><td>নগদ, ব্যাংক বা মোবাইল ব্যাংকিং (একটি নির্বাচন করুন)</td></tr>
          <tr><td>তারিখ</td><td>পেমেন্টের তারিখ</td></tr>
          <tr><td>নোট</td><td>পেমেন্ট সংক্রান্ত বাড়তি তথ্য</td></tr>
        </table>
      </div>

      <div class="section" id="sec-পেমেন্ট-হিস্টোরি">
        <div class="section-title">পেমেন্ট হিস্টোরি</div>
        <p>তালিকার 🕐 (ঘড়ি) আইকনে ক্লিক করলে নির্দিষ্ট ক্রয়ের পেমেন্ট ইতিহাস দেখা যাবে।</p>
        <div class="form-mock">
          <div class="form-mock-title">🕐 পেমেন্ট হিস্টোরি</div>
          <div style="font-size:13px;color:var(--text-muted);margin-bottom:10px">পেমেন্ট হিস্টোরি – Jashore IT Hub<br>ইনভয়েস: PUR-69A798CC2DEF8</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:10px">
            <div style="background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;padding:10px;text-align:center">
              <div style="font-size:12px;color:var(--text-muted)">মোট</div>
              <div style="font-weight:700;color:var(--primary)">৳১,০০০</div>
            </div>
            <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:10px;text-align:center">
              <div style="font-size:12px;color:var(--text-muted)">পরিশোধিত</div>
              <div style="font-weight:700;color:var(--success)">৳০</div>
            </div>
            <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:10px;text-align:center">
              <div style="font-size:12px;color:var(--text-muted)">বাকি</div>
              <div style="font-weight:700;color:var(--danger)">৳১,০০০</div>
            </div>
          </div>
          <div style="display:inline-block;background:#fef2f2;color:var(--danger);border-radius:6px;padding:4px 10px;font-size:12px;margin-bottom:10px">⚠️ অপরিশোধিত &nbsp; 0 টি পেমেন্ট</div>
          <div style="text-align:center;padding:20px;color:var(--text-muted)">📄 কোনো পেমেন্ট নেই</div>
          <div class="form-actions">
            <button class="btn-cancel" style="display:flex;align-items:center;gap:6px">⬇️ PDF ডাউনলোড</button>
            <button class="btn-primary">+ পেমেন্ট যোগ করুন</button>
          </div>
        </div>
        <div class="info-box tip">
          <div class="info-box-title">💜 PDF সুবিধা</div>
          পেমেন্ট হিস্টোরি থেকে সরাসরি PDF ডাউনলোড করুন। এটি সাপ্লায়ারকে রসিদ হিসেবে দেওয়া যাবে।
        </div>
      </div>

      <div class="section" id="sec-মেটেরিয়াল-রিসিভ">
        <div class="section-title">মেটেরিয়াল রিসিভ ওভারভিউ</div>
        <p>তালিকার 📦 আইকনে ক্লিক করলে মালামাল প্রাপ্তির অবস্থা দেখা যাবে।</p>
        <div class="form-mock">
          <div class="form-mock-title">📦 মেটেরিয়াল রিসিভ ওভারভিউ</div>
          <div style="font-size:13px;color:var(--text-muted);margin-bottom:10px">
            সরবরাহকারী: Jashore IT Hub<br>ইনভয়েস: PUR-69A798CC2DEF8
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px">
            <div style="background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;padding:14px;text-align:center">
              <div style="font-size:12px;color:var(--text-muted)">মোট আইটেম</div>
              <div style="font-size:28px;font-weight:700">1</div>
            </div>
            <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:14px;text-align:center">
              <div style="font-size:12px;color:var(--text-muted)">সম্পূর্ণ প্রাপ্ত</div>
              <div style="font-size:28px;font-weight:700;color:var(--success)">1</div>
            </div>
          </div>
          <div style="border:1px solid var(--border);border-radius:8px;padding:12px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
              <span class="badge badge-green">✅ সম্পূর্ণ প্রাপ্ত</span>
              <button class="btn-cancel" style="font-size:12px;padding:4px 10px">👁️ বিস্তারিত</button>
            </div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;font-size:13px">
              <div><div style="color:var(--text-muted)">অর্ডার করা</div><div style="font-weight:600">10 ton</div></div>
              <div><div style="color:var(--text-muted)">প্রাপ্ত</div><div style="font-weight:600;color:var(--success)">10 ton</div></div>
              <div><div style="color:var(--text-muted)">বাকি</div><div style="font-weight:600;color:var(--primary)">0 ton</div></div>
            </div>
          </div>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ মেটেরিয়াল রিসিভের ব্যাখ্যা</div>
          <ul class="bullet-list">
            <li><strong>অর্ডার করা:</strong> ক্রয়ে নির্ধারিত মোট পরিমাণ।</li>
            <li><strong>প্রাপ্ত:</strong> গুদামে এসে পৌঁছেছে এমন পরিমাণ।</li>
            <li><strong>বাকি:</strong> এখনো আসেনি এমন পরিমাণ।</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-ক্রয়-সম্পাদনা">
        <div class="section-title">ক্রয় সম্পাদনা ও বিস্তারিত</div>
        <p>তালিকায় ✏️ (পেন্সিল) আইকনে ক্লিক করলে ক্রয় সম্পাদনা ফর্ম খুলবে। আর 👁️ আইকনে ক্লিক করলে বিস্তারিত দেখা যাবে।</p>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ সম্পাদনার সীমা</div>
          ক্রয় সম্পাদনায় সাপ্লায়ার, ইনভয়েস নং, আইটেম তালিকা ও নোট পরিবর্তন করা যাবে। তবে পেমেন্ট সম্পাদনা আলাদা পদ্ধতিতে করতে হবে।
        </div>
        <div class="info-box note">
          <div class="info-box-title">💡 ক্রয় বিস্তারিত</div>
          বিস্তারিত ভিউতে আইডি, তারিখ, সাপ্লায়ার, ইনভয়েস নম্বর, মোট, পরিশোধিত ও বেকায়া দেখা যাবে।
        </div>
      </div>
    `
  },

  // ===================================================
  // ইনভেন্টরি (মালামাল + ইট)
  // ===================================================
  inventory: {
    title: 'ইনভেন্টরি',
    sections: ['মালামাল ইনভেন্টরি', 'ইনভেন্টরি বিতরণ চার্ট', 'ইট ইনভেন্টরি', 'ইট ইনভেন্টরি সারাংশ'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">📦</div>
        <div>
          <h1>ইনভেন্টরি</h1>
          <p>মালামাল ও ইটের বর্তমান মজুদ রিয়েল-টাইমে পর্যবেক্ষণ করুন</p>
        </div>
      </div>

      <div class="section" id="sec-মালামাল-ইনভেন্টরি">
        <div class="section-title">মালামাল ইনভেন্টরি</div>
        <span class="nav-path">মেনু → ক্রয়-বিক্রয় → <strong>মালামাল ইনভেন্টরি</strong></span>
        <p>এই পেজে প্রতিটি মালামালের বর্তমান স্টক দেখা যাবে। ক্রয়ের মাধ্যমে মালামাল আসলে স্বয়ংক্রিয়ভাবে স্টক বাড়ে।</p>

        <div style="border:2px solid #7c3aed;border-left:4px solid #7c3aed;border-radius:10px;padding:14px;margin:12px 0;display:flex;align-items:center;gap:14px">
          <div style="font-size:28px">📦</div>
          <div>
            <div style="font-size:16px;font-weight:700">কাঠ</div>
            <div style="display:inline-block;background:#f0fdf4;color:var(--success);border-radius:20px;padding:2px 10px;font-size:12px;margin:4px 0">↗ স্বাভাবিক</div>
            <div style="font-size:24px;font-weight:700;color:var(--text)">10</div>
            <div style="font-size:12px;color:var(--text-muted)">ton</div>
          </div>
        </div>

        <p>প্রতিটি মালামালের জন্য একটি কার্ড দেখা যাবে যেখানে থাকবে:</p>
        <table class="doc-table">
          <tr><th>তথ্য</th><th>বিবরণ</th></tr>
          <tr><td>মালামালের নাম</td><td>মালামালের পরিচিতি</td></tr>
          <tr><td>স্ট্যাটাস ব্যাজ</td><td>স্বাভাবিক (সবুজ) বা কম স্টক (লাল)</td></tr>
          <tr><td>বর্তমান স্টক</td><td>এখন কতটুকু মজুদ আছে (সংখ্যায়)</td></tr>
          <tr><td>একক</td><td>পরিমাপের একক (ton, kg, CFT ইত্যাদি)</td></tr>
        </table>
        <div class="info-box note">
          <div class="info-box-title">💡 স্টক কীভাবে হিসাব হয়</div>
          <strong>বর্তমান স্টক = মোট ক্রয়ের পরিমাণ − ব্যাচে ব্যবহৃত পরিমাণ</strong><br>
          ক্রয় এন্ট্রিতে মালামাল যোগ করলে স্টক বাড়ে। ব্যাচে মালামাল ব্যবহার করলে স্টক কমে।
        </div>
      </div>

      <div class="section" id="sec-ইনভেন্টরি-বিতরণ-চার্ট">
        <div class="section-title">ইনভেন্টরি বিতরণ চার্ট</div>
        <p>পেজের নিচে <strong>\"ইনভেন্টরি বিতরণ\"</strong> নামে একটি Donut চার্ট দেখা যাবে যেখানে প্রতিটি মালামালের শতকরা অবদান দৃশ্যমান থাকে।</p>
        <div style="background:#f8fafc;border:1px solid var(--border);border-radius:12px;padding:16px;text-align:center;margin:10px 0">
          <div style="font-size:13px;color:var(--text-muted);margin-bottom:8px">📊 ইনভেন্টরি বিতরণ</div>
          <div style="width:120px;height:120px;border-radius:50%;background:conic-gradient(#ef4444 0% 100%);margin:0 auto;position:relative">
            <div style="position:absolute;inset:20px;border-radius:50%;background:white"></div>
          </div>
          <div style="margin-top:10px;font-size:13px;color:#ef4444">কাঠ (100%)</div>
        </div>
        <p>একাধিক মালামাল থাকলে বিভিন্ন রঙে আলাদা করে দেখাবে। চার্টের নিচে তালিকায় মালামাল, বর্তমান স্টক ও শেষ আপডেটের সময় দেখা যাবে।</p>
        <div class="info-box success">
          <div class="info-box-title">✅ প্রিন্ট সুবিধা</div>
          উপরের ডানদিকে 🖨️ প্রিন্ট বাটনে ক্লিক করে সম্পূর্ণ ইনভেন্টরি রিপোর্ট প্রিন্ট করুন।
        </div>
      </div>

      <div class="section" id="sec-ইট-ইনভেন্টরি">
        <div class="section-title">ইট ইনভেন্টরি</div>
        <span class="nav-path">মেনু → ক্রয়-বিক্রয় → <strong>ইট ইনভেন্টরি</strong></span>
        <p>এই পেজে বর্তমানে কত ইট মজুদ আছে, কত উৎপাদিত হয়েছে এবং কত বিক্রি হয়েছে তার সম্পূর্ণ চিত্র পাওয়া যাবে।</p>
        <div class="info-box note">
          <div class="info-box-title">💡 ইট ইনভেন্টরি কীভাবে কাজ করে</div>
          আউটপুট পেজে ইট রেকর্ড হলে এখানে উৎপাদন বাড়ে। চালান তৈরি হলে বিক্রি বাড়ে এবং স্টক কমে।
        </div>

        <p>পেজে দুটি প্রধান বিভাগ থাকে:</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:12px 0">
          <div style="border:1px solid var(--border);border-radius:10px;padding:14px">
            <div style="font-size:14px;font-weight:600;margin-bottom:8px;color:var(--primary)">📊 ইট ইনভেন্টরি বিতরণ</div>
            <div style="text-align:center;padding:20px;color:var(--text-muted);font-size:13px">কোনো তথ্য নেই<br>(আউটপুট রেকর্ড করলে চার্ট দেখাবে)</div>
          </div>
          <div style="border:1px solid var(--border);border-radius:10px;padding:14px">
            <div style="font-size:14px;font-weight:600;margin-bottom:10px;color:var(--primary)">📈 ইনভেন্টরি সারাংশ</div>
            <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:13px"><span>মোট ইটের ধরন</span><span style="font-weight:700">০</span></div>
            <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:13px"><span>মোট স্টক</span><span style="font-weight:700">০</span></div>
            <div style="display:flex;justify-content:space-between;font-size:13px"><span>কম স্টকের আইটেম</span><span style="font-weight:700;color:var(--danger)">০</span></div>
          </div>
        </div>
      </div>

      <div class="section" id="sec-ইট-ইনভেন্টরি-সারাংশ">
        <div class="section-title">ইট ইনভেন্টরি তালিকা কলাম</div>
        <p>নিচের তালিকায় ইটের ধরন অনুযায়ী স্টক দেখা যাবে:</p>
        <table class="doc-table">
          <tr><th>কলাম</th><th>বিবরণ</th></tr>
          <tr><td>ইটের ধরন</td><td>কোন ধরনের ইট (১ম শ্রেণী, ২য় শ্রেণী ইত্যাদি)</td></tr>
          <tr><td>বর্তমান স্টক</td><td>এখন কতটি ইট মজুদ আছে</td></tr>
          <tr><td>মোট উৎপাদিত</td><td>এখন পর্যন্ত মোট উৎপাদিত ইটের সংখ্যা</td></tr>
          <tr><td>মোট বিক্রিত</td><td>চালানের মাধ্যমে বিক্রি হয়েছে এমন ইটের সংখ্যা</td></tr>
          <tr><td>শেষ আপডেট</td><td>সর্বশেষ কখন আপডেট হয়েছে</td></tr>
        </table>
        <div class="info-box success">
          <div class="info-box-title">✅ সূত্র</div>
          <strong>বর্তমান স্টক = মোট উৎপাদিত − মোট বিক্রিত</strong>
        </div>
        <div class="info-box tip">
          <div class="info-box-title">💜 প্রিন্ট ও ফিল্টার</div>
          উপরের 🖨️ প্রিন্ট বাটনে ইনভেন্টরি প্রিন্ট করুন। সার্চ ও তারিখ ফিল্টার দিয়ে নির্দিষ্ট ধরনের ইট খুঁজুন।
        </div>
      </div>
    `
  },

  // ===================================================
  // সাপ্লায়ার পেমেন্ট ইতিহাস
  // ===================================================
  'supplier-payment': {
    title: 'সাপ্লায়ার পেমেন্ট ইতিহাস',
    sections: ['পেজ পরিচিতি', 'পরিসংখ্যান কার্ড', 'চার্ট ও বিশ্লেষণ', 'পেমেন্ট তালিকা'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">💳</div>
        <div>
          <h1>সাপ্লায়ার পেমেন্ট ইতিহাস</h1>
          <p>সকল সাপ্লায়ারের পেমেন্ট লেনদেন বিশ্লেষণ ও পর্যবেক্ষণ</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → ক্রয়-বিক্রয় → <strong>সাপ্লায়ার পেমেন্ট ইতিহাস</strong></span>
        <p>এই পেজে সকল সাপ্লায়ারের পেমেন্ট লেনদেনের সম্পূর্ণ ইতিহাস দেখা যায়। পেমেন্ট পদ্ধতি অনুযায়ী বিশ্লেষণ এবং দৈনিক ট্রেন্ড গ্রাফও পাওয়া যাবে।</p>
      </div>

      <div class="section" id="sec-পরিসংখ্যান-কার্ড">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <p>পেজের উপরে চারটি কার্ড মোট পেমেন্ট অবস্থা দেখায়:</p>
        <div class="stat-row">
          <div class="stat-card green">
            <div class="stat-icon">✅</div>
            <div><div class="stat-label">মোট পেমেন্ট</div><div class="stat-value">৳২২,৯৬,৭৫৩</div></div>
          </div>
          <div class="stat-card red">
            <div class="stat-icon">⚠️</div>
            <div><div class="stat-label">মোট বাকি</div><div class="stat-value">৳৬,২৭,৭৬০</div></div>
          </div>
          <div class="stat-card blue">
            <div class="stat-icon">📋</div>
            <div><div class="stat-label">সম্পন্ন</div><div class="stat-value">২৩</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">🕐</div>
            <div><div class="stat-label">অপেক্ষমান</div><div class="stat-value">১৫</div></div>
          </div>
        </div>
      </div>

      <div class="section" id="sec-চার্ট-ও-বিশ্লেষণ">
        <div class="section-title">চার্ট ও বিশ্লেষণ</div>
        <p>পেজে দুটি চার্ট দেখা যায়:</p>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="fc-icon">🍩</div>
            <h5>পেমেন্ট পদ্ধতি</h5>
            <p>Donut চার্টে নগদ, ব্যাংক ও মোবাইল পেমেন্টের অনুপাত দেখা যাবে।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">📊</div>
            <h5>দৈনিক পেমেন্ট ট্রেন্ড</h5>
            <p>Bar চার্টে কোন দিন কত টাকা পেমেন্ট হয়েছে তার গ্রাফ।</p>
          </div>
        </div>
        <div class="info-box note">
          <div class="info-box-title">💡 চার্ট পড়ার নিয়ম</div>
          Donut চার্টে বড় অংশ মানে সেই পদ্ধতিতে বেশি পেমেন্ট হয়েছে। Bar চার্টে উঁচু বার মানে সেই দিন বেশি পরিশোধ করা হয়েছে।
        </div>
      </div>

      <div class="section" id="sec-পেমেন্ট-তালিকা">
        <div class="section-title">পেমেন্ট তালিকা</div>
        <p>নিচের তালিকায় প্রতিটি পেমেন্টের বিস্তারিত তথ্য দেখা যাবে:</p>
        <table class="doc-table">
          <tr><th>কলাম</th><th>বিবরণ</th></tr>
          <tr><td>পেমেন্ট আইডি</td><td>PAY-XXXX ফরম্যাটে অনন্য নম্বর</td></tr>
          <tr><td>সাপ্লায়ার</td><td>সাপ্লায়ারের নাম ও মালামালের ধরন</td></tr>
          <tr><td>ইনভয়েস</td><td>সংশ্লিষ্ট ইনভয়েস নম্বর</td></tr>
          <tr><td>তারিখ</td><td>পেমেন্টের তারিখ</td></tr>
          <tr><td>পদ্ধতি</td><td>নগদ / ব্যাংক / মোবাইল আইকনসহ</td></tr>
          <tr><td>পরিমাণ</td><td>পেমেন্টের পরিমাণ</td></tr>
          <tr><td>স্ট্যাটাস</td><td>সম্পন্ন (সবুজ), অপেক্ষমান (হলুদ), বাতিল (লাল)</td></tr>
          <tr><td>আকশন (👁️)</td><td>পেমেন্টের বিস্তারিত দেখুন</td></tr>
        </table>
        <div class="info-box success">
          <div class="info-box-title">✅ ফিল্টার অপশন</div>
          সার্চ বারে নাম বা আইডি দিয়ে খুঁজুন। তারিখ পরিসর, সাপ্লায়ার, পেমেন্ট পদ্ধতি ও স্ট্যাটাস অনুযায়ী ফিল্টার করুন।
        </div>
        <div class="info-box tip">
          <div class="info-box-title">💜 প্রিন্ট ও এক্সপোর্ট</div>
          উপরের ডানে 🖨️ প্রিন্ট ও ⬇️ এক্সপোর্ট বাটনে পুরো পেমেন্ট তালিকা প্রিন্ট বা ডাউনলোড করুন।
        </div>
      </div>
    `
  },

  // ===================================================
  // ক্রয় রিপোর্ট
  // ===================================================
  'purchase-report': {
    title: 'ক্রয় রিপোর্ট',
    sections: ['পেজ পরিচিতি', 'সারসংক্ষেপ কার্ড', 'বিশ্লেষণ চার্টসমূহ', 'খরচ সারাংশ'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">📈</div>
        <div>
          <h1>ক্রয় রিপোর্ট</h1>
          <p>ক্রয় বিশ্লেষণ ও পরিসংখ্যান — সাপ্লায়ার, মালামাল ও পেমেন্টভিত্তিক রিপোর্ট</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → ক্রয়-বিক্রয় → <strong>ক্রয় রিপোর্ট</strong></span>
        <p>এই পেজে সকল ক্রয়ের বিস্তারিত বিশ্লেষণ পাওয়া যায়। সাপ্লায়ার ফিল্টার দিয়ে নির্দিষ্ট সাপ্লায়ারের রিপোর্টও দেখা যাবে। পেজের উপরে ডানদিকে <strong>\"সব সাপ্লায়ার\"</strong> ড্রপডাউন থেকে ফিল্টার করুন।</p>
      </div>

      <div class="section" id="sec-সারসংক্ষেপ-কার্ড">
        <div class="section-title">সারসংক্ষেপ কার্ড</div>
        <p>পেজে মোট ৮টি সারসংক্ষেপ কার্ড দুই সারিতে দেখা যাবে:</p>
        <div class="stat-row">
          <div class="stat-card">
            <div class="stat-icon">🏪</div>
            <div><div class="stat-label">মোট সাপ্লায়ার</div><div class="stat-value">৪</div><div style="font-size:11px;color:var(--success)">+২ এই মাসে</div></div>
          </div>
          <div class="stat-card blue">
            <div class="stat-icon">🛒</div>
            <div><div class="stat-label">মোট ক্রয়</div><div class="stat-value">৳১,২৯,২০০</div><div style="font-size:11px;color:var(--text-muted)">৬ টি লেনদেন</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">✅</div>
            <div><div class="stat-label">পরিশোধিত</div><div class="stat-value">৳৯৯,৮০০</div><div style="font-size:11px;color:var(--text-muted)">৭৭%</div></div>
          </div>
          <div class="stat-card red">
            <div class="stat-icon">⚠️</div>
            <div><div class="stat-label">বাকি</div><div class="stat-value">৳২৯,৪০০</div><div style="font-size:11px;color:var(--text-muted)">পেমেন্ট বাকি</div></div>
          </div>
        </div>
        <div class="stat-row" style="margin-top:10px">
          <div class="stat-card blue">
            <div class="stat-icon">📋</div>
            <div><div class="stat-label">মোট লেনদেন</div><div class="stat-value">৬</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">💰</div>
            <div><div class="stat-label">গড় লেনদেন</div><div class="stat-value">৳২,১,৫৩৩</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">📊</div>
            <div><div class="stat-label">পেমেন্ট হার</div><div class="stat-value">৭৭%</div></div>
          </div>
          <div class="stat-card red">
            <div class="stat-icon">⚠️</div>
            <div><div class="stat-label">মোট বাকি</div><div class="stat-value">৳২৯,৪০০</div></div>
          </div>
        </div>
      </div>

      <div class="section" id="sec-বিশ্লেষণ-চার্টসমূহ">
        <div class="section-title">বিশ্লেষণ চার্টসমূহ</div>
        <p>রিপোর্টে মোট চারটি চার্ট থাকে:</p>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="fc-icon">📉</div>
            <h5>মাসিক প্রবণতা</h5>
            <p>Area চার্টে মাসওয়ারি মোট খরচ ও পরিশোধিত পরিমাণের তুলনামূলক চিত্র।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">🍩</div>
            <h5>মালামাল অনুযায়ী খরচ</h5>
            <p>Donut চার্টে কোন মালামালে কত শতাংশ খরচ হয়েছে (যেমন কয়লা ৭২%, কাঠ ১৪%, মাটি ১৩%)।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">📊</div>
            <h5>সাপ্লায়ার অনুযায়ী খরচ</h5>
            <p>Bar চার্টে প্রতিটি সাপ্লায়ারের মোট খরচ, পরিশোধিত ও বাকির তুলনামূলক বার।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">🎯</div>
            <h5>পেমেন্ট স্ট্যাটাস</h5>
            <p>Radial চার্টে পরিশোধিত, বকেয়া ও আংশিক পেমেন্টের অনুপাত।</p>
          </div>
        </div>
        <div class="info-box note">
          <div class="info-box-title">💡 চার্ট ব্যবহার</div>
          চার্টের উপর মাউস নিয়ে গেলে সঠিক মান দেখা যাবে। চার্টের পাশে লিজেন্ড থেকে কোন রঙ কোন ক্যাটাগরি বোঝা যাবে।
        </div>
      </div>

      <div class="section" id="sec-খরচ-সারাংশ">
        <div class="section-title">খরচ সারাংশ</div>
        <p>পেজের একদম নিচে <strong>\"খরচ সারাংশ\"</strong> বিভাগে তিনটি কার্ডে সারসংক্ষেপ দেখা যাবে:</p>
        <div class="stat-row">
          <div class="stat-card blue">
            <div class="stat-icon">🛒</div>
            <div><div class="stat-label">মোট খরচ</div><div class="stat-value">৳১,২৯,২০০</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">✅</div>
            <div><div class="stat-label">পরিশোধিত</div><div class="stat-value">৳৯৯,৮০০</div></div>
          </div>
          <div class="stat-card red">
            <div class="stat-icon">⚠️</div>
            <div><div class="stat-label">বাকি</div><div class="stat-value">৳২৯,৪০০</div></div>
          </div>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ প্রিন্ট সুবিধা</div>
          উপরের ডানে 🖨️ প্রিন্ট বাটনে পুরো ক্রয় রিপোর্ট প্রিন্ট করুন। সাপ্লায়ার ফিল্টার করে নির্দিষ্ট সাপ্লায়ারের রিপোর্টও প্রিন্ট করা যাবে।
        </div>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ নিয়মিত পর্যালোচনা করুন</div>
          প্রতি সপ্তাহে ক্রয় রিপোর্ট চেক করুন। বেশি বাকি থাকলে সাপ্লায়ারকে দ্রুত পেমেন্ট করুন যাতে সম্পর্ক ভালো থাকে।
        </div>
      </div>
    `
  },

};
