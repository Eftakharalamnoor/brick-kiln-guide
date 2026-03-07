// pages/intro.js
// মডিউল: পরিচিতি ও লগইন
// পেজ: intro

var PAGES_INTRO = {

  intro: {
    title: 'পরিচিতি ও লগইন',
    sections: ['গাইড সার্চ', 'লগইন প্রক্রিয়া', 'ড্যাশবোর্ড পরিচিতি', 'মেনু নেভিগেশন'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">🔐</div>
        <div>
          <h1>পরিচিতি ও লগইন</h1>
          <p>সফটওয়্যারে প্রবেশ এবং ড্যাশবোর্ড ব্যবহার নির্দেশিকা</p>
        </div>
      </div>

      <div class="section" id="sec-গাইড-সার্চ">
        <div class="section-title">🔍 গাইড সার্চ - যেকোনো বিষয় দ্রুত খুঁজুন</div>
        <p>গাইডের উপরে একটি সার্চ বার আছে যা দিয়ে আপনি যেকোনো বিষয় দ্রুত খুঁজে পেতে পারেন।</p>
        
        <div class="info-box success">
          <div class="info-box-title">✨ সার্চ ফিচারসমূহ</div>
          <table class="doc-table">
            <tr><th>ফিচার</th><th>কীভাবে ব্যবহার করবেন</th></tr>
            <tr><td>🔍 সার্চ বার</td><td>উপরের সার্চ বারে ক্লিক করে লিখুন</td></tr>
            <tr><td>⌨️ কীবোর্ড শর্টকাট</td><td><kbd>Ctrl</kbd>+<kbd>K</kbd> চাপুন (বা <kbd>Cmd</kbd>+<kbd>K</kbd> Mac এ)</td></tr>
            <tr><td>📝 অটো-সাজেশন</td><td>লিখতে শুরু করলেই ফলাফল দেখাবে</td></tr>
            <tr><td>🎯 সেকশনে যান</td><td>ফলাফলে ক্লিক করলে সরাসরি সেই সেকশনে চলে যাবে</td></tr>
            <tr><td>✕ ক্লিয়ার</td><td>সার্চ ক্লিয়ার করতে <kbd>✕</kbd> বাটনে ক্লিক করুন</td></tr>
            <tr><td>⎋ বন্ধ করুন</td><td><kbd>Escape</kbd> চাপুন</td></tr>
          </table>
        </div>

        <h4 class="sub-title">কী কী সার্চ করা যাবে:</h4>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="fc-icon">📄</div>
            <h5>পেজের নাম</h5>
            <p>যেমন: চুল্লি, ইট, সর্দার, পেমেন্ট</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">📋</div>
            <h5>সেকশন</h5>
            <p>যেমন: চুল্লির ধরন, দাদন, খোরাকি</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">📝</div>
            <h5>বিষয়বস্তু</h5>
            <p>যেমন: ভ্যালিডেশন, ফর্ম, রিপোর্ট</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">🔤</div>
            <h5>ইংরেজি শব্দ</h5>
            <p>যেমন: Furnace, Batch, Payment</p>
          </div>
        </div>

        <div class="info-box tip">
          <div class="info-box-title">💜 সার্চ টিপস</div>
          <ul class="bullet-list">
            <li>কমপক্ষে ২টি অক্ষর লিখতে হবে</li>
            <li>বাংলা এবং ইংরেজি দুইভাবেই সার্চ করা যাবে</li>
            <li>সার্চ রেজাল্টে ক্লিক করলে সরাসরি সেই পেজে চলে যাবে</li>
            <li>সেকশন ম্যাচ করলে সেই সেকশনটি হাইলাইট হবে</li>
          </ul>
        </div>

        <div class="info-box note">
          <div class="info-box-title">📊 সার্চ রেজাল্ট</div>
          <p>সার্চ বারে লিখলে একটি ড্রপডাউন দেখাবে যেখানে:</p>
          <ul class="bullet-list">
            <li>মোট কতটি ফলাফল পাওয়া গেছে</li>
            <li>প্রতিটি ফলাফলের শিরোনাম এবং অবস্থান</li>
            <li>সার্চ টার্মটি হাইলাইট করা থাকবে</li>
          </ul>
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
