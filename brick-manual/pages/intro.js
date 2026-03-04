// pages/intro.js
// মডিউল: পরিচিতি ও লগইন
// পেজ: intro

var PAGES_INTRO = {

  intro: {
    title: 'পরিচিতি ও লগইন',
    sections: ['লগইন প্রক্রিয়া', 'ড্যাশবোর্ড পরিচিতি', 'মেনু নেভিগেশন'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">🔐</div>
        <div>
          <h1>পরিচিতি ও লগইন</h1>
          <p>সফটওয়্যারে প্রবেশ এবং ড্যাশবোর্ড ব্যবহার নির্দেশিকা</p>
        </div>
      </div>

      <div class="section" id="sec-লগইন-প্রক্রিয়া">
        <div class="section-title">লগইন প্রক্রিয়া</div>
        <p>সফটওয়্যারটি চালু করলে লগইন পেজ প্রদর্শিত হবে। নিচের ধাপগুলো অনুসরণ করুন:</p>
        <ol class="steps">
          <li>ব্রাউজার খুলুন এবং সফটওয়্যারের ঠিকানায় প্রবেশ করুন।</li>
          <li><strong>ইউজারনেম</strong> ও <strong>পাসওয়ার্ড</strong> সঠিকভাবে লিখুন।</li>
          <li><strong>"লগইন"</strong> বাটনে ক্লিক করুন।</li>
          <li>সফলভাবে লগইন হলে ড্যাশবোর্ড প্রদর্শিত হবে।</li>
        </ol>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ সতর্কতা</div>
          পাসওয়ার্ড কারো সাথে শেয়ার করবেন না। একাধিক ডিভাইসে একসাথে লগইন থেকে বিরত থাকুন।
        </div>
      </div>

      <div class="section" id="sec-ড্যাশবোর্ড-পরিচিতি">
        <div class="section-title">ড্যাশবোর্ড পরিচিতি</div>
        <p>লগইনের পর প্রধান স্ক্রিনে সফটওয়্যারের সামগ্রিক অবস্থা দেখা যাবে।</p>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="fc-icon">🔍</div>
            <h5>সার্চ বার</h5>
            <p>ভাউচার নং, পার্টি বা বিবরণ দিয়ে যেকোনো রেকর্ড দ্রুত খুঁজুন।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">🌐</div>
            <h5>ভাষা পরিবর্তন</h5>
            <p>BN / EN বাটন দিয়ে বাংলা ও ইংরেজির মধ্যে পরিবর্তন করুন।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">🔔</div>
            <h5>নোটিফিকেশন</h5>
            <p>গুরুত্বপূর্ণ সতর্কতা বেল আইকনে দেখা যাবে।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">👤</div>
            <h5>ইউজার প্রোফাইল</h5>
            <p>উপরের ডানদিকে লগইন নাম ও প্রোফাইল অপশন।</p>
          </div>
        </div>
      </div>

      <div class="section" id="sec-মেনু-নেভিগেশন">
        <div class="section-title">মেনু নেভিগেশন</div>
        <p>বাম পাশের সাইডবার থেকে সকল মডিউলে প্রবেশ করা যায়।</p>
        <table class="doc-table">
          <tr><th>মডিউল</th><th>সাব-মেনু</th><th>অ্যাক্সেস</th></tr>
          <tr><td>🏭 উৎপাদন</td><td>চুল্লির ধরন, চুল্লি তালিকা, ব্যাচ, আউটপুট, ইটের ধরন, খোয়া</td><td><span class="badge badge-orange">সবাই</span></td></tr>
          <tr><td>👷 শ্রমিক মজুরি</td><td>শ্রমিক ধরন, শ্রমিক তালিকা, কাজের এন্ট্রি</td><td><span class="badge badge-orange">সবাই</span></td></tr>
          <tr><td>👤 সর্দার</td><td>সর্দার তালিকা, দাদন, খোরাকি, কাজের এন্ট্রি, ক্রপ টাইপ</td><td><span class="badge badge-orange">সবাই</span></td></tr>
          <tr><td>🛒 ক্রয়-বিক্রয়</td><td>সাপ্লায়ার, মালামাল, ক্রয় এন্ট্রি, ইনভেন্টরি</td><td><span class="badge badge-orange">সবাই</span></td></tr>
          <tr><td>⚙️ সেটিংস</td><td>কোম্পানি, ব্যাংক, ইউজার, রোল</td><td><span class="badge badge-red">শুধু অ্যাডমিন</span></td></tr>
        </table>
      </div>
    `
  },

  // ===================================================
  // KILN TYPE
  // ===================================================,

};
