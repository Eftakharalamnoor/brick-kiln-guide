// pages/brick-type-detailed.js
// মডিউল: ইটের ধরন ব্যবস্থাপনা (বিস্তারিত)
// পেজ: brick-type

var PAGES_BRICK_TYPE_DETAILED = {

  'brick-type': {
    title: 'ইটের ধরন',
    sections: ['পেজ পরিচিতি', 'কেন ইটের ধরন প্রয়োজন', 'পরিসংখ্যান কার্ড', 'নতুন ইটের ধরন যোগ - ধাপে ধাপে', 'ফর্মের বিবরণ', 'প্রতিটি ফিল্ডের বিস্তারিত', 'তালিকা ব্যবস্থাপনা', 'সম্পাদনা', 'সক্রিয়-নিষ্ক্রিয়', 'সাধারণ সমস্যা'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">🧱</div>
        <div>
          <h1>ইটের ধরনের তালিকা</h1>
          <p>ইটের ধরন ব্যবস্থাপনা — নাম, মূল্য ও স্ট্যাটাস</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → উৎপাদন → <strong>ইটের ধরন</strong></span>
        <p>এখানে উৎপাদিত ইটের বিভিন্ন শ্রেণি ও ধরন নির্ধারণ করা হয়। প্রতিটি ধরনের একটি ডিফল্ট মূল্য নির্ধারণ করা যায় যা চালানে স্বয়ংক্রিয়ভাবে ব্যবহৃত হয়।</p>
        
        <div class="info-box note">
          <div class="info-box-title">💡 গুরুত্ব</div>
          <p>আউটপুট পেজে ক্যাটাগরি অনুযায়ী ইট গণনার জন্য আগে এখানে ইটের ধরন তৈরি করতে হবে।</p>
        </div>

        <div class="info-box warning">
          <div class="info-box-title">⚠️ গুরুত্বপূর্ণ</div>
          ইটের ধরন না থাকলে আউটপুট এন্ট্রি দেওয়া যাবে না। তাই উৎপাদন শুরুর আগে অন্তত ৩-৪টি ইটের ধরন তৈরি করে নিন।
        </div>
      </div>

      <div class="section" id="sec-কেন-ইটের-ধরন-প্রয়োজন">
        <div class="section-title">কেন ইটের ধরন প্রয়োজন?</div>
        
        <div class="info-box success">
          <div class="info-box-title">✅ ইটের ধরন ব্যবস্থাপনার সুবিধা</div>
          <ul class="bullet-list">
            <li>উৎপাদিত ইটকে শ্রেণিবিভাগ করা যায়</li>
            <li>প্রতিটি শ্রেণির জন্য আলাদা মূল্য নির্ধারণ করা যায়</li>
            <li>চালানে স্বয়ংক্রিয়ভাবে মূল্য আসে</li>
            <li>ইনভেন্টরি ম্যানেজমেন্ট সহজ হয়</li>
            <li>রিপোর্টে শ্রেণি অনুযায়ী বিশ্লেষণ করা যায়</li>
            <li>গুণগত মান ট্র্যাক করা যায়</li>
          </ul>
        </div>

        <h4 class="sub-title">সাধারণ ইটের ধরনসমূহ:</h4>
        <table class="doc-table">
          <tr><th>ধরন</th><th>বিবরণ</th><th>ব্যবহার</th></tr>
          <tr><td>প্রথম শ্রেণি</td><td>সর্বোচ্চ মানের ইট</td><td>মূল নির্মাণ কাজে</td></tr>
          <tr><td>দ্বিতীয় শ্রেণি</td><td>মাঝারি মানের ইট</td><td>সাধারণ নির্মাণে</td></tr>
          <tr><td>তৃতীয় শ্রেণি</td><td>নিম্ন মানের ইট</td><td>অস্থায়ী নির্মাণে</td></tr>
          <tr><td>ঝামা ইট</td><td>অতিরিক্ত পোড়া ইট</td><td>রাস্তাঘাটে</td></tr>
        </table>
      </div>

      <div class="section" id="sec-পরিসংখ্যান-কার্ড">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <p>পেজের উপরে চারটি সারসংক্ষেপ কার্ড থাকে:</p>
        
        <div class="stat-row">
          <div class="stat-card">
            <div class="stat-icon">🧱</div>
            <div><div class="stat-label">মোট ধরন</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">✅</div>
            <div><div class="stat-label">সক্রিয়</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">⏸️</div>
            <div><div class="stat-label">নিষ্ক্রিয়</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card blue">
            <div class="stat-icon">💰</div>
            <div><div class="stat-label">গড় মূল্য</div><div class="stat-value">৳০</div></div>
          </div>
        </div>

        <h4 class="sub-title">কার্ডের ব্যাখ্যা:</h4>
        <table class="doc-table">
          <tr><th>কার্ড</th><th>কী বোঝায়</th><th>কীভাবে গণনা হয়</th></tr>
          <tr><td>মোট ধরন</td><td>সিস্টেমে মোট কতটি ইটের ধরন তৈরি করা হয়েছে</td><td>সব ইটের ধরন গণনা</td></tr>
          <tr><td>সক্রিয়</td><td>বর্তমানে সক্রিয় আছে এমন ইটের ধরনের সংখ্যা</td><td>যেগুলোর স্ট্যাটাস = চালু</td></tr>
          <tr><td>নিষ্ক্রিয়</td><td>নিষ্ক্রিয় করা ইটের ধরনের সংখ্যা</td><td>যেগুলোর স্ট্যাটাস = বন্ধ</td></tr>
          <tr><td>গড় মূল্য</td><td>সব সক্রিয় ইটের ধরনের গড় মূল্য</td><td>মোট মূল্য / মোট ধরন</td></tr>
        </table>
      </div>

      <div class="section" id="sec-নতুন-ইটের-ধরন-যোগ">
        <div class="section-title">নতুন ইটের ধরন যোগ - ধাপে ধাপে</div>
        <ol class="steps">
          <li>পেজের উপরের ডানদিকে <strong style="color:var(--primary)">"+ ইটের ধরন যোগ করুন"</strong> (কমলা বাটন) এ ক্লিক করুন।</li>
          <li>খুলে আসা পপ-আপ ডায়ালগে <strong>ইটের ধরনের নাম</strong> লিখুন — এটি বাধ্যতামূলক। (যেমন: প্রথম শ্রেণি, দ্বিতীয় শ্রেণি)</li>
          <li><strong>ইংরেজি নাম</strong> লিখুন — এটি বাধ্যতামূলক। (যেমন: First Class, Second Class)</li>
          <li><strong>শর্ট কোড</strong> লিখুন — এটি বাধ্যতামূলক। (যেমন: FC, SC, TC)
            <ul class="bullet-list">
              <li>শুধু বড় হাতের অক্ষর ব্যবহার করুন (A-Z)</li>
              <li>সংখ্যা ব্যবহার করা যাবে (0-9)</li>
              <li>ড্যাশ (-) বা আন্ডারস্কোর (_) ব্যবহার করা যাবে</li>
            </ul>
          </li>
          <li><strong>ডিফল্ট মূল্য (প্রতি হাজার)</strong> লিখুন — এই ইটের ডিফল্ট বিক্রয় মূল্য।</li>
          <li><strong>রঙ কোড</strong> নির্বাচন করুন — ভিজ্যুয়াল পরিচিতির জন্য (ঐচ্ছিক)।</li>
          <li><strong>বিবরণ</strong> লিখুন — ইটের ধরন সম্পর্কে সংক্ষিপ্ত বর্ণনা (ঐচ্ছিক)।</li>
          <li><strong>স্ট্যাটাস</strong> টগল সুইচ দিয়ে সক্রিয়/নিষ্ক্রিয় নির্বাচন করুন — ডিফল্টভাবে চালু থাকে।</li>
          <li><strong>"সংরক্ষণ করুন"</strong> বাটনে ক্লিক করুন।</li>
          <li>সফল হলে সবুজ রঙের বার্তা দেখাবে এবং ডায়ালগ বন্ধ হয়ে যাবে।</li>
        </ol>

        <div class="info-box success">
          <div class="info-box-title">✅ সফলতা বার্তা</div>
          সঠিকভাবে তৈরি হলে <strong>"Brick type created successfully"</strong> সবুজ বার্তা দেখাবে।
        </div>

        <div class="info-box warning">
          <div class="info-box-title">⚠️ মনে রাখবেন</div>
          <ul class="bullet-list">
            <li>ইটের ধরনের নাম অনন্য হতে হবে</li>
            <li>শর্ট কোডে শুধু বড় হাতের অক্ষর ব্যবহার করুন</li>
            <li>ডিফল্ট মূল্য ০ বা খালি রাখা যাবে না</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">🧱 নতুন ইটের ধরন যোগ করুন</div>
          
          <div class="field-group">
            <div class="field-group-title">📦 মৌলিক তথ্য</div>
            <div class="form-row">
              <div class="form-field">
                <label>ইটের ধরনের নাম (বাংলা) <span class="required">*</span></label>
                <div class="field-mock active">প্রথম শ্রেণি</div>
              </div>
              <div class="form-field">
                <label>ইটের ধরনের নাম (ইংরেজি) <span class="required">*</span></label>
                <div class="field-mock">First Class</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label>শর্ট কোড <span class="required">*</span></label>
                <div class="field-mock">FC</div>
                <div style="font-size:12px;color:var(--text-muted);margin-top:4px">শুধু বড় হাতের অক্ষর (A-Z, 0-9, -, _)</div>
              </div>
              <div class="form-field">
                <label>ডিফল্ট মূল্য (প্রতি হাজার) <span class="required">*</span></label>
                <div class="field-mock">15000</div>
              </div>
            </div>
          </div>

          <div class="field-group" style="margin-top:10px">
            <div class="field-group-title">🎨 রঙ কোড (ঐচ্ছিক)</div>
            <div style="display:flex;gap:10px;flex-wrap:wrap;padding:8px 0">
              <div style="border:2px solid var(--primary);background:var(--primary-light);border-radius:8px;padding:10px 16px;text-align:center;cursor:pointer">
                <div style="font-size:24px;color:#ef4444">🔴</div>
                <div style="font-size:12px;margin-top:4px">লাল</div>
              </div>
              <div style="border:2px solid var(--border);border-radius:8px;padding:10px 16px;text-align:center;cursor:pointer">
                <div style="font-size:24px;color:#22c55e">🟢</div>
                <div style="font-size:12px;margin-top:4px">সবুজ</div>
              </div>
              <div style="border:2px solid var(--border);border-radius:8px;padding:10px 16px;text-align:center;cursor:pointer">
                <div style="font-size:24px;color:#3b82f6">🔵</div>
                <div style="font-size:12px;margin-top:4px">নীল</div>
              </div>
              <div style="border:2px solid var(--border);border-radius:8px;padding:10px 16px;text-align:center;cursor:pointer">
                <div style="font-size:24px;color:#f59e0b">🟠</div>
                <div style="font-size:12px;margin-top:4px">কমলা</div>
              </div>
            </div>
          </div>

          <div class="field-group" style="margin-top:10px">
            <div class="field-group-title">📝 বিবরণ (ঐচ্ছিক)</div>
            <div class="form-field">
              <div class="field-mock" style="height:80px;padding-top:8px">সর্বোচ্চ মানের ইট, মূল নির্মাণ কাজে ব্যবহৃত...</div>
            </div>
          </div>

          <div style="display:flex;justify-content:space-between;align-items:center;background:var(--bg);border-radius:8px;padding:12px 16px;margin-top:12px">
            <div>
              <div style="font-weight:600;font-size:14px">স্ট্যাটাস</div>
              <div style="font-size:12px;color:var(--text-muted)">নিষ্ক্রিয় ধরন ড্রপডাউনে দেখা যাবে না</div>
            </div>
            <div style="width:44px;height:24px;background:var(--primary);border-radius:12px;position:relative">
              <div style="width:20px;height:20px;background:white;border-radius:50%;position:absolute;right:2px;top:2px"></div>
            </div>
          </div>

          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">সংরক্ষণ করুন</button>
          </div>
        </div>

        <table class="doc-table">
          <tr><th>ফিল্ড</th><th>বিবরণ</th><th>বাধ্যতামূলক</th><th>সর্বোচ্চ</th></tr>
          <tr><td>ইটের ধরনের নাম (বাংলা)</td><td>ইটের শ্রেণির বাংলা নাম — অনন্য হতে হবে</td><td><span class="badge badge-red">হ্যাঁ</span></td><td>১০০ অক্ষর</td></tr>
          <tr><td>ইটের ধরনের নাম (ইংরেজি)</td><td>ইটের শ্রেণির ইংরেজি নাম</td><td><span class="badge badge-red">হ্যাঁ</span></td><td>১০০ অক্ষর</td></tr>
          <tr><td>শর্ট কোড</td><td>সংক্ষিপ্ত কোড (A-Z, 0-9, -, _) — অনন্য</td><td><span class="badge badge-red">হ্যাঁ</span></td><td>২০ অক্ষর</td></tr>
          <tr><td>ডিফল্ট মূল্য</td><td>প্রতি হাজার ইটের মূল্য (৳)</td><td><span class="badge badge-red">হ্যাঁ</span></td><td>সংখ্যা</td></tr>
          <tr><td>রঙ কোড</td><td>ভিজ্যুয়াল পরিচিতির জন্য রঙ</td><td><span class="badge badge-green">না</span></td><td>১টি নির্বাচন</td></tr>
          <tr><td>বিবরণ</td><td>ইটের ধরন সম্পর্কে বর্ণনা</td><td><span class="badge badge-green">না</span></td><td>১০০০ অক্ষর</td></tr>
          <tr><td>স্ট্যাটাস</td><td>চালু = ড্রপডাউনে দেখাবে, বন্ধ = লুকানো</td><td><span class="badge badge-green">না</span></td><td>ডিফল্ট: চালু</td></tr>
        </table>
      </div>

      <div class="section" id="sec-প্রতিটি-ফিল্ডের-বিস্তারিত">
        <div class="section-title">প্রতিটি ফিল্ডের বিস্তারিত ব্যাখ্যা</div>

        <h4 class="sub-title">১. ইটের ধরনের নাম (বাংলা) ⭐</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী লিখবেন</div>
          <p>ইটের শ্রেণির বাংলা নাম। এটি ড্রপডাউন মেনু এবং সব জায়গায় দেখা যাবে।</p>
          <p><strong>উদাহরণ:</strong> প্রথম শ্রেণি, দ্বিতীয় শ্রেণি, তৃতীয় শ্রেণি, ঝামা ইট</p>
        </div>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ ভ্যালিডেশন</div>
          <ul class="bullet-list">
            <li>অবশ্যই লিখতে হবে — না লিখলে লাল এরর দেখাবে</li>
            <li>সর্বোচ্চ ১০০ অক্ষর লেখা যাবে</li>
            <li>একই নামে দুটি ধরন থাকতে পারবে না — অনন্য হতে হবে</li>
          </ul>
        </div>

        <h4 class="sub-title">২. ইটের ধরনের নাম (ইংরেজি) ⭐</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী লিখবেন</div>
          <p>ইটের শ্রেণির ইংরেজি নাম। ইংরেজি ভার্সনে এটি দেখাবে।</p>
          <p><strong>উদাহরণ:</strong> First Class, Second Class, Third Class, Over-burnt</p>
        </div>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ ভ্যালিডেশন</div>
          <ul class="bullet-list">
            <li>অবশ্যই লিখতে হবে</li>
            <li>সর্বোচ্চ ১০০ অক্ষর</li>
          </ul>
        </div>

        <h4 class="sub-title">৩. শর্ট কোড ⭐</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী লিখবেন</div>
          <p>ইটের ধরনের সংক্ষিপ্ত কোড। এটি রিপোর্ট ও ইনভয়েসে ব্যবহৃত হবে।</p>
          <p><strong>উদাহরণ:</strong> FC, SC, TC, OB</p>
        </div>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ ভ্যালিডেশন</div>
          <ul class="bullet-list">
            <li>অবশ্যই লিখতে হবে</li>
            <li>শুধু বড় হাতের অক্ষর (A-Z), সংখ্যা (0-9), ড্যাশ (-), আন্ডারস্কোর (_) ব্যবহার করা যাবে</li>
            <li>ছোট হাতের অক্ষর লিখলে অটোমেটিক বড় হাতের অক্ষরে পরিবর্তন হবে</li>
            <li>একই কোড দুবার ব্যবহার করা যাবে না — অনন্য হতে হবে</li>
          </ul>
        </div>
        <div class="info-box tip">
          <div class="info-box-title">💜 টিপস</div>
          কোডটি সহজ ও মনে রাখার মতো করুন। সাধারণত নামের প্রথম অক্ষরগুলো ব্যবহার করুন। যেমন: First Class → FC
        </div>

        <h4 class="sub-title">৪. ডিফল্ট মূল্য (প্রতি হাজার) ⭐</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী লিখবেন</div>
          <p>প্রতি হাজার ইটের ডিফল্ট বিক্রয় মূল্য। এটি চালানে স্বয়ংক্রিয়ভাবে ব্যবহৃত হবে।</p>
          <p><strong>উদাহরণ:</strong> ১৫,০০০, ১২,০০০, ১০,০০০</p>
        </div>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ ভ্যালিডেশন</div>
          <ul class="bullet-list">
            <li>অবশ্যই লিখতে হবে</li>
            <li>০ বা খালি রাখা যাবে না</li>
            <li>ঋণাত্মক সংখ্যা দেওয়া যাবে না</li>
          </ul>
        </div>

        <h4 class="sub-title">৫. রঙ কোড (ঐচ্ছিক)</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী করবেন</div>
          <p>চারটি রঙ থেকে যেকোনো একটি নির্বাচন করুন। এটি ভিজ্যুয়াল পরিচিতির জন্য।</p>
        </div>
        <table class="doc-table">
          <tr><th>রঙ</th><th>ব্যবহার</th></tr>
          <tr><td>🔴 লাল</td><td>প্রথম শ্রেণি বা সর্বোচ্চ মানের ইট</td></tr>
          <tr><td>🟢 সবুজ</td><td>দ্বিতীয় শ্রেণি বা মাঝারি মানের ইট</td></tr>
          <tr><td>🔵 নীল</td><td>তৃতীয় শ্রেণি বা নিম্ন মানের ইট</td></tr>
          <tr><td>🟠 কমলা</td><td>ঝামা ইট বা অন্যান্য</td></tr>
        </table>

        <h4 class="sub-title">৬. বিবরণ (ঐচ্ছিক)</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী লিখবেন</div>
          <p>ইটের ধরন সম্পর্কে সংক্ষিপ্ত বর্ণনা।</p>
          <p><strong>উদাহরণ:</strong> "সর্বোচ্চ মানের ইট, মূল নির্মাণ কাজে ব্যবহৃত। তাপমাত্রা ১০০০°C এ পোড়ানো।"</p>
        </div>

        <h4 class="sub-title">৭. স্ট্যাটাস</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী করবেন</div>
          <p>টগল সুইচ দিয়ে সক্রিয়/নিষ্ক্রিয় নির্বাচন করুন।</p>
        </div>
        <table class="doc-table">
          <tr><th>স্ট্যাটাস</th><th>কখন ব্যবহার করবেন</th><th>প্রভাব</th></tr>
          <tr><td>✅ সক্রিয় (চালু)</td><td>নতুন ধরন তৈরি করলে সবসময় চালু রাখুন</td><td>ড্রপডাউনে দেখা যাবে</td></tr>
          <tr><td>⚫ নিষ্ক্রিয় (বন্ধ)</td><td>সাময়িকভাবে ব্যবহার বন্ধ রাখতে চাইলে</td><td>ড্রপডাউনে দেখা যাবে না</td></tr>
        </table>
      </div>

      <div class="section" id="sec-তালিকা-ব্যবস্থাপনা">
        <div class="section-title">তালিকা ব্যবস্থাপনা</div>
        <p>মূল তালিকায় সব ইটের ধরন দেখা যাবে। কলামগুলো:</p>
        
        <div class="table-mock">
          <div class="table-mock-header" style="grid-template-columns:2fr 1fr 1fr 1fr 1fr 1fr">
            <span>ইটের ধরন</span><span>শর্ট কোড</span><span>রঙ</span><span>মূল্য</span><span>স্ট্যাটাস</span><span>কার্যক্রম</span>
          </div>
          <div class="table-mock-row" style="grid-template-columns:2fr 1fr 1fr 1fr 1fr 1fr">
            <div>
              <div style="display:flex;align-items:center;gap:10px">
                <div style="font-size:20px">🔴</div>
                <div>
                  <div style="font-weight:600">প্রথম শ্রেণি</div>
                  <div style="font-size:12px;color:var(--text-muted)">First Class</div>
                </div>
              </div>
            </div>
            <div><span class="badge badge-blue" style="font-family:monospace">FC</span></div>
            <div><span style="font-size:20px">🔴</span></div>
            <div><div style="color:var(--primary);font-weight:600">৳১৫,০০০</div></div>
            <div><span class="badge badge-green">✅ সক্রিয়</span></div>
            <div><span style="font-size:18px;cursor:pointer">⋯</span></div>
          </div>
        </div>

        <h4 class="sub-title">কলামের বিবরণ:</h4>
        <table class="doc-table">
          <tr><th>কলাম</th><th>কী দেখাবে</th></tr>
          <tr><td>ইটের ধরন</td><td>রঙ + বাংলা নাম (মোটা ফন্টে) + ইংরেজি নাম (ছোট ফন্টে)</td></tr>
          <tr><td>শর্ট কোড</td><td>সংক্ষিপ্ত কোড (বক্সে ঘেরা)</td></tr>
          <tr><td>রঙ</td><td>নির্বাচিত রঙের আইকন</td></tr>
          <tr><td>মূল্য</td><td>প্রতি হাজার ইটের মূল্য (৳)</td></tr>
          <tr><td>স্ট্যাটাস</td><td>সক্রিয় (সবুজ ব্যাজ) বা নিষ্ক্রিয় (ধূসর ব্যাজ)</td></tr>
          <tr><td>কার্যক্রম</td><td>⋯ মেনু — এডিট, স্ট্যাটাস পরিবর্তন</td></tr>
        </table>

        <div class="info-box success">
          <div class="info-box-title">✅ সার্চ ও ফিল্টার</div>
          <ul class="bullet-list">
            <li><strong>সার্চ:</strong> ইটের নাম বা কোড দিয়ে খুঁজুন</li>
            <li><strong>ফিল্টার:</strong> সক্রিয়/নিষ্ক্রিয় আলাদা করুন</li>
            <li><strong>সর্ট:</strong> নাম, মূল্য অনুযায়ী সাজান</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-সম্পাদনা">
        <div class="section-title">ইটের ধরন সম্পাদনা (Edit) করা</div>
        <ol class="steps">
          <li>তালিকায় যেই ইটের ধরনটি সম্পাদনা করতে চান, সেই সারির <strong>⋯</strong> মেনুতে ক্লিক করুন।</li>
          <li><strong>✏️ Edit</strong> সিলেক্ট করুন।</li>
          <li>এডিট ডায়ালগ খুলবে — সব ফিল্ডে আগের মান আগে থেকেই পূরণ করা থাকবে।</li>
          <li>যে ফিল্ডটি পরিবর্তন করতে চান, সেই ফিল্ডে ক্লিক করে নতুন মান লিখুন।</li>
          <li>সব পরিবর্তন করার পর <strong>"আপডেট"</strong> বাটনে ক্লিক করুন।</li>
          <li>সফল হলে সবুজ বার্তা দেখাবে: <strong>"Brick type updated successfully"</strong></li>
        </ol>

        <div class="info-box warning">
          <div class="info-box-title">⚠️ গুরুত্বপূর্ণ</div>
          <ul class="bullet-list">
            <li>শর্ট কোড পরিবর্তন করলে তা রিপোর্টে প্রভাব ফেলতে পারে</li>
            <li>মূল্য পরিবর্তন করলে নতুন চালানে নতুন মূল্য প্রযোজ্য হবে</li>
            <li>পুরানো চালানে মূল্য পরিবর্তন হবে না</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-সক্রিয়-নিষ্ক্রিয়">
        <div class="section-title">সক্রিয়/নিষ্ক্রিয় করা</div>
        <p><strong>পদ্ধতি:</strong></p>
        <ol class="steps">
          <li>তালিকায় ইটের ধরনের সারির <strong>⋯</strong> মেনুতে ক্লিক করুন।</li>
          <li><strong>⚡ Deactivate</strong> (যদি সক্রিয় থাকে) অথবা <strong>⚡ Activate</strong> (যদি নিষ্ক্রিয় থাকে) সিলেক্ট করুন।</li>
          <li>সাথে সাথে স্ট্যাটাস পরিবর্তন হবে এবং সবুজ বার্তা দেখাবে।</li>
        </ol>

        <div class="info-box note">
          <div class="info-box-title">💡 স্ট্যাটাস পরিবর্তনের প্রভাব</div>
          <table class="doc-table">
            <tr><th>সক্রিয় থাকলে</th><th>নিষ্ক্রিয় করলে</th></tr>
            <tr><td>✅ ড্রপডাউনে দেখা যাবে</td><td>❌ ড্রপডাউনে আর দেখা যাবে না</td></tr>
            <tr><td>✅ আউটপুট এন্ট্রিতে ব্যবহার করা যাবে</td><td>❌ আউটপুট এন্ট্রিতে ব্যবহার করা যাবে না</td></tr>
            <tr><td>✅ চালানে নির্বাচন করা যাবে</td><td>❌ চালানে নির্বাচন করা যাবে না</td></tr>
            <tr><td colspan="2" style="background:var(--bg-hover);font-weight:600">✅ পুরানো রেকর্ডে ইটের ধরন অবিকৃত থাকবে</td></tr>
          </table>
        </div>
      </div>

      <div class="section" id="sec-সাধারণ-সমস্যা">
        <div class="section-title">সাধারণ সমস্যা ও সমাধান</div>
        
        <h4 class="sub-title">সমস্যা ১: "এই নামে ইতিমধ্যে ইটের ধরন আছে"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"Brick type name already exists."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>ভিন্ন নাম দিন</li>
            <li>নামের সাথে সংখ্যা যোগ করুন: প্রথম শ্রেণি → প্রথম শ্রেণি-২</li>
          </ul>
        </div>

        <h4 class="sub-title">সমস্যা ২: "শর্ট কোডে শুধু বড় অক্ষর ও সংখ্যা দেওয়া যাবে"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"Short code can only contain uppercase letters and numbers."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>শুধু বড় হাতের অক্ষর (A-Z) ব্যবহার করুন</li>
            <li>সংখ্যা (0-9) ব্যবহার করতে পারেন</li>
            <li>ছোট অক্ষর লিখলে অটোমেটিক বড় অক্ষরে পরিবর্তন হবে</li>
          </ul>
        </div>
        <table class="doc-table">
          <tr><th>গ্রহণযোগ্য ✅</th><th>অগ্রহণযোগ্য ❌</th></tr>
          <tr><td>FC, SC, TC, A1, B-2</td><td>fc (ছোট), Sc (মিশ্রিত), F@C (বিশেষ অক্ষর), FC.1 (ডট)</td></tr>
        </table>

        <h4 class="sub-title">সমস্যা ৩: "ডিফল্ট মূল্য ০ হতে পারবে না"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"Default price must be greater than 0."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>সঠিক মূল্য লিখুন</li>
            <li>০ বা খালি রাখা যাবে না</li>
            <li>ঋণাত্মক সংখ্যা দেওয়া যাবে না</li>
          </ul>
        </div>
      </div>
    `
  }

};
