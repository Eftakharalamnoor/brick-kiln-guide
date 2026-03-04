// pages/production.js
// মডিউল: উৎপাদন ব্যবস্থাপনা
// পেজ: kiln-type, kiln-list, batch, output, brick-type, khowa

var PAGES_PRODUCTION = {

  'kiln-type': {
    title: 'চুল্লির ধরন',
    sections: ['পেজ পরিচিতি', 'নতুন চুল্লির ধরন তৈরি', 'ফর্মের বিবরণ', 'তালিকা ব্যবস্থাপনা'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">🔥</div>
        <div>
          <h1>চুল্লির ধরন ব্যবস্থাপনা</h1>
          <p>চুল্লি ক্যাটাগরি ও শ্রেণিবিভাগ ব্যবস্থাপনা</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → উৎপাদন → <strong>চুল্লির ধরন</strong></span>
        <p>এই পেজে ইটের ভাটার চুল্লির বিভিন্ন ক্যাটাগরি ও শ্রেণিবিভাগ নির্ধারণ করা হয়। পেজের উপরে চারটি সারসংক্ষেপ কার্ড দেখা যায়:</p>
        <div class="stat-row">
          <div class="stat-card">
            <div class="stat-icon">🔥</div>
            <div><div class="stat-label">মোট ধরন</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">✅</div>
            <div><div class="stat-label">সক্রিয় ধরন</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">⏸️</div>
            <div><div class="stat-label">নিষ্ক্রিয় ধরন</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card blue">
            <div class="stat-icon">🏭</div>
            <div><div class="stat-label">মোট চুল্লি</div><div class="stat-value">০</div></div>
          </div>
        </div>
        <div class="info-box note">
          <div class="info-box-title">💡 তথ্য</div>
          "মোট চুল্লি" হলো এই ধরনের অধীনে নিবন্ধিত সব চুল্লির সংখ্যা।
        </div>
      </div>

      <div class="section" id="sec-নতুন-চুল্লির-ধরন-তৈরি">
        <div class="section-title">নতুন চুল্লির ধরন তৈরি</div>
        <p>পেজের উপরের ডানদিকে <strong>"+ চুল্লি ধরন তৈরি"</strong> বাটনে ক্লিক করুন। একটি ডায়ালগ বক্স খুলবে।</p>
        <ol class="steps">
          <li>উপরের ডানদিকে <strong>"+ চুল্লি ধরন তৈরি"</strong> বাটনে ক্লিক করুন।</li>
          <li>খুলে আসা ফর্মে <strong>চুল্লির নাম</strong> লিখুন (বাধ্যতামূলক)।</li>
          <li><strong>চুল্লির ধরন</strong> ড্রপডাউন থেকে নির্বাচন করুন।</li>
          <li><strong>ক্ষমতা (ইট)</strong> — এই চুল্লিতে একসাথে কত ইট তৈরি হয় তা লিখুন।</li>
          <li><strong>স্ট্যাটাস</strong> টগলে সক্রিয়/নিষ্ক্রিয় নির্বাচন করুন।</li>
          <li><strong>"তৈরি করুন"</strong> বাটনে ক্লিক করে সংরক্ষণ করুন।</li>
        </ol>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">🔥 নতুন চুল্লি যোগ করুন</div>
          <div class="field-group">
            <div class="field-group-title">📦 মৌলিক তথ্য</div>
            <div class="form-row">
              <div class="form-field">
                <label>চুল্লির নাম <span class="required">*</span></label>
                <div class="field-mock active">চুল্লির নাম দিন</div>
              </div>
              <div class="form-field">
                <label>চুল্লির ধরন</label>
                <div class="field-mock">চুল্লির ধরন নির্বাচন করুন ▼</div>
              </div>
            </div>
            <div class="form-row single">
              <div class="form-field">
                <label>ক্ষমতা (ইট)</label>
                <div class="field-mock">0</div>
              </div>
            </div>
            <div class="toggle-row">
              <span class="toggle-label">স্ট্যাটাস</span>
              <div class="toggle-mock">
                <span>নিষ্ক্রিয়</span>
                <div class="toggle-pill"></div>
                <span style="color:var(--primary);font-weight:600">সক্রিয়</span>
              </div>
            </div>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">🔥 তৈরি করুন</button>
          </div>
        </div>

        <table class="doc-table">
          <tr><th>ফিল্ড</th><th>বিবরণ</th><th>বাধ্যতামূলক</th></tr>
          <tr><td>চুল্লির নাম</td><td>চুল্লির পরিচিতিমূলক নাম (যেমন: হফম্যান-১)</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>চুল্লির ধরন</td><td>কোন ধরনের চুল্লি (আগে থেকে তৈরি তালিকা থেকে)</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>ক্ষমতা (ইট)</td><td>একসাথে কত ইট ধারণ করতে পারে</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>স্ট্যাটাস</td><td>সক্রিয় থাকলে ব্যাচে ব্যবহার করা যাবে</td><td><span class="badge badge-green">না</span></td></tr>
        </table>
      </div>

      <div class="section" id="sec-তালিকা-ব্যবস্থাপনা">
        <div class="section-title">তালিকা ব্যবস্থাপনা</div>
        <p>মূল তালিকায় সব চুল্লির ধরন দেখা যাবে। কলামগুলো:</p>
        <div class="table-mock">
          <div class="table-mock-header" style="grid-template-columns:2fr 1fr 1fr 1fr 1fr">
            <span>চুল্লির ধরন</span><span>শট কোড</span><span>চুল্লি</span><span>স্ট্যাটাস</span><span>কার্যক্রম</span>
          </div>
          <div class="table-mock-row" style="grid-template-columns:2fr 1fr 1fr 1fr 1fr; color:var(--text-muted); font-style:italic; justify-content:center; text-align:center">
            <span colspan="5" style="grid-column:1/-1; text-align:center; padding: 10px 0">— তালিকা এখানে দেখাবে —</span>
          </div>
        </div>
        <ul class="bullet-list">
          <li><strong>সার্চ:</strong> চুল্লির নাম বা কোড দিয়ে তালিকা ফিল্টার করুন।</li>
          <li><strong>ফিল্টার:</strong> উপরের ডানদিকে "সব" ড্রপডাউন থেকে সক্রিয়/নিষ্ক্রিয় আলাদা করে দেখুন।</li>
          <li><strong>কার্যক্রম:</strong> প্রতিটি সারিতে এডিট ও ডিলিট বাটন পাওয়া যাবে।</li>
          <li><strong>পেজিনেশন:</strong> নিচে পেজ নম্বর দিয়ে আরো রেকর্ড দেখুন।</li>
        </ul>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ সতর্কতা</div>
          কোনো ধরন মুছে ফেলার আগে নিশ্চিত করুন যে এটি কোনো চুল্লিতে ব্যবহৃত হচ্ছে না।
        </div>
      </div>
    `
  },

  // ===================================================
  // KILN LIST
  // ===================================================,

  'kiln-list': {
    title: 'চুল্লি তালিকা',
    sections: ['পেজ পরিচিতি', 'পরিসংখ্যান কার্ড', 'নতুন চুল্লি যোগ', 'ফর্মের বিবরণ'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">🏭</div>
        <div>
          <h1>চুল্লি তালিকা</h1>
          <p>সকল চুল্লির বিস্তারিত তথ্য ও উৎপাদন অবস্থা</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → উৎপাদন → <strong>চুল্লি তালিকা</strong></span>
        <p>এই পেজে সকল নিবন্ধিত চুল্লির তথ্য, উৎপাদন অগ্রগতি এবং আউটপুট পরিসংখ্যান একসাথে দেখা যায়।</p>
      </div>

      <div class="section" id="sec-পরিসংখ্যান-কার্ড">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <p>পেজের উপরে পাঁচটি সারসংক্ষেপ কার্ড থাকে:</p>
        <div class="stat-row">
          <div class="stat-card">
            <div class="stat-icon">📊</div>
            <div><div class="stat-label">মোট উৎপাদন</div><div class="stat-value">১৮,৫০০</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">🔥</div>
            <div><div class="stat-label">সক্রিয় চুল্লি</div><div class="stat-value">২</div></div>
          </div>
          <div class="stat-card blue">
            <div class="stat-icon">🏭</div>
            <div><div class="stat-label">আজকের উৎপাদন</div><div class="stat-value">৭৩,৫০০</div></div>
          </div>
          <div class="stat-card red">
            <div class="stat-icon">⚠️</div>
            <div><div class="stat-label">নষ্ট (%)</div><div class="stat-value">১৩.৫%</div></div>
          </div>
          <div class="stat-card blue">
            <div class="stat-icon">📈</div>
            <div><div class="stat-label">বর্তমান স্টক</div><div class="stat-value">৫১,৪৫০</div></div>
          </div>
        </div>
        <div class="info-box note">
          <div class="info-box-title">💡 কার্ডের ব্যাখ্যা</div>
          <ul class="bullet-list">
            <li><strong>মোট উৎপাদন:</strong> সমস্ত ব্যাচ থেকে এ পর্যন্ত তৈরি মোট ইট।</li>
            <li><strong>সক্রিয় চুল্লি:</strong> বর্তমানে চলমান চুল্লির সংখ্যা (মোট চুল্লি সংখ্যাও দেখায়)।</li>
            <li><strong>আজকের উৎপাদন:</strong> আজ ব্যাচ এন্ট্রি করা মোট ইনপুট।</li>
            <li><strong>নষ্ট:</strong> নষ্ট হওয়া ইটের শতকরা হার।</li>
            <li><strong>বর্তমান স্টক:</strong> বিক্রি না হওয়া মোট ইটের সংখ্যা।</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-নতুন-চুল্লি-যোগ">
        <div class="section-title">নতুন চুল্লি যোগ</div>
        <ol class="steps">
          <li>উপরের ডানদিকে <strong>"+ নতুন চুল্লি"</strong> বাটনে ক্লিক করুন।</li>
          <li>ফর্মে চুল্লির নাম লিখুন।</li>
          <li>চুল্লির ধরন ড্রপডাউন থেকে নির্বাচন করুন।</li>
          <li>ক্ষমতা (ইট) সংখ্যা দিন।</li>
          <li>স্ট্যাটাস টগল করুন।</li>
          <li><strong>"তৈরি করুন"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">🏭 নতুন চুল্লি যোগ করুন</div>
          <div class="field-group">
            <div class="field-group-title">📦 মৌলিক তথ্য</div>
            <div class="form-row">
              <div class="form-field">
                <label>চুল্লির নাম <span class="required">*</span></label>
                <div class="field-mock active">চুল্লির নাম দিন</div>
              </div>
              <div class="form-field">
                <label>চুল্লির ধরন</label>
                <div class="field-mock">চুল্লির ধরন ▼</div>
              </div>
            </div>
            <div class="form-row single">
              <div class="form-field">
                <label>ক্ষমতা (ইট)</label>
                <div class="field-mock">0</div>
              </div>
            </div>
            <div class="toggle-row">
              <span class="toggle-label">স্ট্যাটাস</span>
              <div class="toggle-mock">
                <span>নিষ্ক্রিয়</span>
                <div class="toggle-pill"></div>
                <span style="color:var(--primary);font-weight:600">সক্রিয়</span>
              </div>
            </div>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">🏭 তৈরি করুন</button>
          </div>
        </div>

        <p>তালিকার কলামগুলো:</p>
        <table class="doc-table">
          <tr><th>কলাম</th><th>বিবরণ</th></tr>
          <tr><td>চুল্লি</td><td>চুল্লির নাম ও আইডি</td></tr>
          <tr><td>আউটপুট</td><td>মোট উৎপাদিত ইট</td></tr>
          <tr><td>সারিতে অপেক্ষারত</td><td>ব্যাচে থেকে এখনো বের হয়নি</td></tr>
          <tr><td>আউটপুট অগ্রসিত</td><td>উৎপাদনের অগ্রগতি শতকরা হারে</td></tr>
          <tr><td>ক্ষমতা</td><td>মোট ধারণ ক্ষমতা</td></tr>
          <tr><td>মোট খরচ</td><td>এই চুল্লিতে মোট ব্যয়</td></tr>
        </table>
      </div>
    `
  },

  // ===================================================
  // BATCH
  // ===================================================,

  batch: {
    title: 'ব্যাচ তালিকা',
    sections: ['ব্যাচ কী', 'নতুন ব্যাচ যোগ', 'ব্যাচ ফর্মের বিস্তারিত', 'ব্যাচ তালিকা কলাম'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">📦</div>
        <div>
          <h1>ব্যাচ তালিকা</h1>
          <p>উৎপাদন চক্র ব্যবস্থাপনা — কাঁচামাল থেকে সম্পূর্ণ উৎপাদন</p>
        </div>
      </div>

      <div class="section" id="sec-ব্যাচ-কী">
        <div class="section-title">ব্যাচ কী?</div>
        <span class="nav-path">মেনু → উৎপাদন → <strong>ব্যাচ তালিকা</strong></span>
        <p>একটি <strong>ব্যাচ</strong> হলো একটি সম্পূর্ণ উৎপাদন চক্র। একটি চুল্লিতে কাঁচামাল (কাদা/মাটি) লোড করা থেকে শুরু করে ইট বের হওয়া পর্যন্ত পুরো প্রক্রিয়াটিকে একটি ব্যাচ বলে।</p>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="fc-icon">🔢</div>
            <h5>ব্যাচ নম্বর</h5>
            <p>সিস্টেম স্বয়ংক্রিয়ভাবে B-2026-001 ফরম্যাটে নম্বর দেয়।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">🏭</div>
            <h5>চুল্লি সংযুক্তি</h5>
            <p>প্রতিটি ব্যাচ নির্দিষ্ট একটি চুল্লির সাথে যুক্ত।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">💰</div>
            <h5>খরচ ট্র্যাকিং</h5>
            <p>মালামাল, লেবার ও অন্যান্য খরচ আলাদাভাবে রেকর্ড হয়।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">📊</div>
            <h5>অগ্রগতি</h5>
            <p>ব্যাচের অগ্রগতি শতকরা হারে দেখা যায়।</p>
          </div>
        </div>
      </div>

      <div class="section" id="sec-নতুন-ব্যাচ-যোগ">
        <div class="section-title">নতুন ব্যাচ যোগ</div>
        <ol class="steps">
          <li>উপরের ডানদিকে <strong>"+ নতুন ব্যাচ"</strong> বাটনে ক্লিক করুন।</li>
          <li><strong>ইনপুট ইট সংখ্যা</strong> — কত ইট তৈরির জন্য কাঁচামাল লোড হয়েছে তা লিখুন।</li>
          <li><strong>ভাটি নির্বাচন করুন</strong> — কোন চুল্লিতে এই ব্যাচ চলছে নির্বাচন করুন।</li>
          <li><strong>মালামালের খরচ</strong> সেকশনে এক বা একাধিক মালামাল নির্বাচন করুন।</li>
          <li><strong>লেবার খরচ</strong> সেকশনে মোট লেবার সংখ্যা ও মোট মজুরি লিখুন।</li>
          <li><strong>অন্যান্য খরচ</strong> সেকশনে মাটি, পানি, পরিবহন, রক্ষণাবেক্ষণ ও বিবিধ খরচ লিখুন।</li>
          <li><strong>"তৈরি করুন"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
      </div>

      <div class="section" id="sec-ব্যাচ-ফর্মের-বিস্তারিত">
        <div class="section-title">ব্যাচ ফর্মের বিস্তারিত</div>
        <div class="form-mock">
          <div class="form-mock-title">📦 নতুন ব্যাচ যোগ করুন</div>
          <div class="form-row">
            <div class="form-field">
              <label>ইনপুট ইট সংখ্যা</label>
              <div class="field-mock">0</div>
            </div>
            <div class="form-field">
              <label>ভাটি নির্বাচন করুন</label>
              <div class="field-mock">ভাটি নির্বাচন করুন... ▼</div>
            </div>
          </div>

          <div class="field-group" style="border-left:3px solid #f59e0b; margin-top:10px">
            <div class="field-group-title" style="color:#d97706">📦 মালামালের খরচ</div>
            <div class="form-field">
              <label>মালামাল নির্বাচন করুন</label>
              <div class="field-mock">এক বা একাধিক মালামাল নির্বাচন করুন ▼</div>
            </div>
          </div>

          <div class="field-group" style="border-left:3px solid #3b82f6; margin-top:10px">
            <div class="field-group-title" style="color:#2563eb">👷 লেবার খরচ</div>
            <div class="form-row">
              <div class="form-field">
                <label>মোট লেবার সংখ্যা</label>
                <div class="field-mock">0</div>
              </div>
              <div class="form-field">
                <label>মোট মজুরি/ব্যয় (৳)</label>
                <div class="field-mock">0</div>
              </div>
            </div>
          </div>

          <div class="field-group" style="border-left:3px solid #16a34a; margin-top:10px">
            <div class="field-group-title" style="color:#16a34a">📊 অন্যান্য খরচ</div>
            <div class="form-row triple">
              <div class="form-field">
                <label>মাটি (৳)</label>
                <div class="field-mock">0</div>
              </div>
              <div class="form-field">
                <label>পানি (৳)</label>
                <div class="field-mock">0</div>
              </div>
              <div class="form-field">
                <label>পরিবহন (৳)</label>
                <div class="field-mock">0</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label>রক্ষণাবেক্ষণ (৳)</label>
                <div class="field-mock">0</div>
              </div>
              <div class="form-field">
                <label>বিবিধ (৳)</label>
                <div class="field-mock">0</div>
              </div>
            </div>
          </div>

          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">📦 তৈরি করুন</button>
          </div>
        </div>
      </div>

      <div class="section" id="sec-ব্যাচ-তালিকা-কলাম">
        <div class="section-title">ব্যাচ তালিকা কলাম</div>
        <table class="doc-table">
          <tr><th>কলাম</th><th>বিবরণ</th></tr>
          <tr><td>ব্যাচ নং</td><td>সিস্টেম তৈরি অনন্য নম্বর (যেমন B-2026-001)</td></tr>
          <tr><td>চুল্লি</td><td>কোন চুল্লিতে এই ব্যাচ</td></tr>
          <tr><td>স্ট্যাটাস</td><td>চলমান / সম্পন্ন / বাতিল</td></tr>
          <tr><td>শুরু হয়েছে</td><td>ব্যাচ শুরুর তারিখ</td></tr>
          <tr><td>লোডকৃত ইট</td><td>ইনপুট ইটের সংখ্যা</td></tr>
          <tr><td>অগ্রসিত</td><td>উৎপাদনের অগ্রগতি %</td></tr>
          <tr><td>ভাটায় আছে (আনুমানিক)</td><td>এখনো চুল্লিতে আছে এমন ইট</td></tr>
          <tr><td>বিক্রয়ের জন্য প্রস্তুত</td><td>উৎপাদন শেষে বিক্রির জন্য প্রস্তুত</td></tr>
        </table>
        <div class="info-box success">
          <div class="info-box-title">✅ প্রিন্ট সুবিধা</div>
          ব্যাচ তালিকা থেকে সরাসরি প্রিন্ট বাটনে ক্লিক করে রিপোর্ট প্রিন্ট করা যাবে।
        </div>
      </div>
    `
  },

  // ===================================================
  // OUTPUT
  // ===================================================,

  output: {
    title: 'আউটপুট',
    sections: ['পেজ পরিচিতি', 'দৈনিক আউটপুট এন্ট্রি', 'ফর্মের বিবরণ', 'আউটপুট ইতিহাস'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">📊</div>
        <div>
          <h1>আউটপুট ব্যবস্থাপনা</h1>
          <p>প্রতিদিনের উৎপাদিত ইটের পরিমাণ রেকর্ড করুন</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → উৎপাদন → <strong>আউটপুট</strong></span>
        <p>এই পেজে প্রতিদিন কত ইট চুল্লি থেকে বের হয়েছে তা রেকর্ড করা হয়। প্রথমে চুল্লি নির্বাচন করুন, তারপর সক্রিয় ব্যাচের তথ্য দেখা যাবে।</p>

        <div class="info-box note">
          <div class="info-box-title">💡 কীভাবে কাজ করে</div>
          প্রতিটি ব্যাচের মোট ইনপুট থেকে প্রতিদিন আউটপুট বিয়োগ হয়। অগ্রগতি বার দিয়ে বোঝা যায় কতটুকু উৎপাদন বাকি আছে।
        </div>

        <h4 class="sub-title">সক্রিয় ব্যাচের তথ্য কার্ড:</h4>
        <div class="stat-row">
          <div class="stat-card">
            <div class="stat-icon">📥</div>
            <div><div class="stat-label">মোট ইনপুট</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">📤</div>
            <div><div class="stat-label">এখন পর্যন্ত আউটপুট</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card blue">
            <div class="stat-icon">⏳</div>
            <div><div class="stat-label">বাকি আউটপুট</div><div class="stat-value">০</div></div>
          </div>
        </div>
      </div>

      <div class="section" id="sec-দৈনিক-আউটপুট-এন্ট্রি">
        <div class="section-title">দৈনিক আউটপুট এন্ট্রি</div>
        <ol class="steps">
          <li>পেজের উপরে <strong>ভাটি নির্বাচন করুন</strong> ড্রপডাউন থেকে চুল্লি নির্বাচন করুন।</li>
          <li>সক্রিয় ব্যাচের তথ্য দেখা যাবে — অগ্রগতি % ও বাকি আউটপুট চেক করুন।</li>
          <li><strong>"+ দৈনিক আউটপুট দিন"</strong> বাটনে ক্লিক করুন।</li>
          <li>খুলে আসা ফর্মে ক্যাটাগরি অনুযায়ী আউটপুট সংখ্যা দিন।</li>
          <li>প্রয়োজনে মন্তব্য যোগ করুন।</li>
          <li><strong>"সংরক্ষণ করুন"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ মনে রাখুন</div>
          "শুধুমাত্র এই চুল্লিতে আউটপুট দেওয়া যাবে" — সক্রিয় ব্যাচ না থাকলে আউটপুট দেওয়া যাবে না।
        </div>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ — দৈনিক আউটপুট এন্ট্রি</div>
        <div class="form-mock">
          <div class="form-mock-title">📊 দৈনিক আউটপুট এন্ট্রি</div>
          <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:12px;margin-bottom:14px;font-size:13px">
            <strong>B-2026-001</strong> <span class="badge badge-green">সক্রিয়</span>
            <div style="margin-top:8px">অগ্রগতি: 97%
              <div class="progress-bar-mock"><div class="progress-fill" style="width:97%"></div></div>
            </div>
          </div>
          <div class="form-field" style="margin-bottom:14px">
            <label>তারিখ</label>
            <div class="field-mock active">March 4th, 2026</div>
          </div>
          <div class="field-group">
            <div class="field-group-title">ক্যাটাগরি অনুযায়ী আউটপুট</div>
            <div class="form-row">
              <div class="form-field"><label>ক্যাটাগরি ১</label><div class="field-mock">0</div></div>
              <div class="form-field"><label>ক্যাটাগরি ২</label><div class="field-mock">0</div></div>
              <div class="form-field"><label>ক্যাটাগরি ৩</label><div class="field-mock">0</div></div>
              <div class="form-field"><label>ক্যাটাগরি ৪</label><div class="field-mock">0</div></div>
            </div>
          </div>
          <div class="form-field" style="margin-top:10px">
            <label>মন্তব্য (ঐচ্ছিক)</label>
            <div class="field-mock" style="height:70px;padding-top:8px">অতিরিক্ত তথ্য...</div>
          </div>
          <div style="background:#f8fafc;border:1px solid var(--border);border-radius:8px;padding:12px;display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:14px;font-size:13px;text-align:center">
            <div><div style="color:var(--text-muted)">আজকের আউটপুট</div><div style="color:var(--success);font-weight:700;font-size:16px">০</div></div>
            <div><div style="color:var(--text-muted)">আউটপুটের পর বাকি</div><div style="color:var(--primary);font-weight:700;font-size:16px">৮,৩৪৩</div></div>
            <div><div style="color:var(--text-muted)">মোট অগ্রগতি</div><div style="color:var(--info);font-weight:700;font-size:16px">৯৭%</div></div>
            <div><div style="color:var(--text-muted)">চলমান</div><div style="color:var(--success);font-weight:700;font-size:16px">✓</div></div>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary" style="background:var(--success)">সংরক্ষণ করুন</button>
          </div>
        </div>
      </div>

      <div class="section" id="sec-আউটপুট-ইতিহাস">
        <div class="section-title">আউটপুট ইতিহাস</div>
        <p>পেজের নিচে <strong>"দৈনিক আউটপুট ইতিহাস"</strong> তালিকায় সব এন্ট্রি দেখা যাবে:</p>
        <table class="doc-table">
          <tr><th>কলাম</th><th>বিবরণ</th></tr>
          <tr><td>তারিখ</td><td>আউটপুট এন্ট্রির তারিখ</td></tr>
          <tr><td>চুল্লি</td><td>কোন চুল্লির আউটপুট</td></tr>
          <tr><td>আউটপুট</td><td>মোট উৎপাদিত ইট</td></tr>
          <tr><td>কাটাগরি</td><td>ইটের শ্রেণি অনুযায়ী বিভাজন</td></tr>
          <tr><td>নোট</td><td>অতিরিক্ত মন্তব্য</td></tr>
        </table>
      </div>
    `
  },

  // ===================================================
  // BRICK TYPE
  // ===================================================,

  'brick-type': {
    title: 'ইটের ধরন',
    sections: ['পেজ পরিচিতি', 'নতুন ইটের ধরন যোগ', 'ফর্মের বিবরণ', 'এক্সপোর্ট সুবিধা'],
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
          আউটপুট পেজে ক্যাটাগরি অনুযায়ী ইট গণনার জন্য আগে এখানে ইটের ধরন তৈরি করতে হবে।
        </div>
      </div>

      <div class="section" id="sec-নতুন-ইটের-ধরন-যোগ">
        <div class="section-title">নতুন ইটের ধরন যোগ</div>
        <ol class="steps">
          <li>উপরের ডানদিকে <strong>"+ ইটের ধরন যোগ করুন"</strong> বাটনে ক্লিক করুন।</li>
          <li><strong>ইটের ধরনের নাম</strong> লিখুন (যেমন: প্রথম শ্রেণী, দ্বিতীয় শ্রেণী)।</li>
          <li><strong>ডিফল্ট মূল্য</strong> নির্ধারণ করুন (প্রতি ইটের দাম)।</li>
          <li><strong>সক্রিয়</strong> টগল চালু রাখুন।</li>
          <li><strong>"সংরক্ষণ"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">🧱 নতুন ইটের ধরন যোগ করুন</div>
          <div class="field-group">
            <div class="field-group-title" style="color:var(--primary)">• মৌলিক তথ্য</div>
            <div class="form-row single">
              <div class="form-field">
                <label>ইটের ধরনের নাম <span class="required">*</span></label>
                <div class="field-mock active">প্রথম শ্রেণী</div>
              </div>
            </div>
            <div class="form-row single">
              <div class="form-field">
                <label>ডিফল্ট মূল্য</label>
                <div class="field-mock">15.00</div>
              </div>
            </div>
            <div class="toggle-row">
              <span class="toggle-label">সক্রিয়</span>
              <div class="toggle-mock">
                <div class="toggle-pill"></div>
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
          <tr><td>ইটের ধরনের নাম</td><td>যেকোনো বর্ণনামূলক নাম (যেমন প্রথম শ্রেণী)</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>ডিফল্ট মূল্য</td><td>প্রতি ইটের বিক্রয়মূল্য (চালানে ব্যবহৃত হবে)</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>সক্রিয়</td><td>চালু থাকলে আউটপুট ও চালানে দেখাবে</td><td><span class="badge badge-green">না</span></td></tr>
        </table>
      </div>

      <div class="section" id="sec-এক্সপোর্ট-সুবিধা">
        <div class="section-title">এক্সপোর্ট সুবিধা</div>
        <p>ইটের ধরনের তালিকা Excel বা CSV ফরম্যাটে ডাউনলোড করা যাবে। তালিকার উপরে <strong>"এক্সপোর্ট"</strong> বাটনে ক্লিক করুন।</p>
        <div class="info-box tip">
          <div class="info-box-title">💜 টিপস</div>
          তালিকায় <strong>slug</strong> কলামটি সিস্টেম তৈরি অনন্য পরিচিতিকোড। এটি পরিবর্তন করার প্রয়োজন নেই।
        </div>
      </div>
    `
  },

  // ===================================================
  // KHOWA
  // ===================================================,

  khowa: {
    title: 'খোয়া উৎপাদন',
    sections: ['খোয়া কী', 'পরিসংখ্যান', 'নতুন খোয়া রেকর্ড', 'ফর্মের বিবরণ'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">♻️</div>
        <div>
          <h1>খোয়া উৎপাদন</h1>
          <p>ভাঙা ইটের সমষ্টি রেকর্ড — CFT হিসেবে পরিমাপ</p>
        </div>
      </div>

      <div class="section" id="sec-খোয়া-কী">
        <div class="section-title">খোয়া কী?</div>
        <span class="nav-path">মেনু → উৎপাদন → <strong>খোয়া উৎপাদন</strong></span>
        <p><strong>খোয়া</strong> হলো প্রত্যাখ্যাত, নিম্নমানের বা অতিরিক্ত পোড়া ইট থেকে তৈরি ইট-চিপস। এটি CFT (ঘনফুট) এককে পরিমাপ করা হয়। খোয়া আলাদাভাবে বিক্রি করা যায়।</p>
        <div class="info-box note">
          <div class="info-box-title">💡 CFT কী?</div>
          CFT = Cubic Feet (ঘনফুট)। খোয়ার পরিমাণ ঘনফুটে পরিমাপ করা হয়।
        </div>
      </div>

      <div class="section" id="sec-পরিসংখ্যান">
        <div class="section-title">পরিসংখ্যান</div>
        <div class="stat-row">
          <div class="stat-card green">
            <div class="stat-icon">📦</div>
            <div><div class="stat-label">বর্তমান স্টক</div><div class="stat-value" style="color:var(--success)">০.০০ CFT</div></div>
          </div>
          <div class="stat-card blue">
            <div class="stat-icon">📈</div>
            <div><div class="stat-label">মোট উৎপাদিত</div><div class="stat-value">০.০০ CFT</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">🛒</div>
            <div><div class="stat-label">মোট বিক্রিত</div><div class="stat-value">০.০০ CFT</div></div>
          </div>
          <div class="stat-card red">
            <div class="stat-icon">⚠️</div>
            <div><div class="stat-label">স্টক লেভেল</div><div class="stat-value">০.০%</div></div>
          </div>
        </div>
      </div>

      <div class="section" id="sec-নতুন-খোয়া-রেকর্ড">
        <div class="section-title">নতুন খোয়া রেকর্ড</div>
        <ol class="steps">
          <li>উপরের ডানদিকে <strong>"+ নতুন খোয়া রেকর্ড"</strong> বাটনে ক্লিক করুন।</li>
          <li><strong>উৎপাদিত খোয়া (CFT)</strong> ঘরে পরিমাণ লিখুন।</li>
          <li><strong>খোয়া তৈরিতে ভাঙা ইট</strong> — কোন ধরনের ইট ভেঙে খোয়া তৈরি হয়েছে নির্বাচন করুন।</li>
          <li>প্রয়োজনে <strong>নোট</strong> লিখুন।</li>
          <li><strong>"record"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">♻️ খোয়া উৎপাদন রেকর্ড</div>
          <div class="form-row single">
            <div class="form-field">
              <label>উৎপাদিত খোয়া (CFT) <span class="required">*</span></label>
              <div class="field-mock active">2500.50</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:4px">ঘনফুটে উৎপাদিত ইট চিপস (খোয়া) এর মোট পরিমাণ</div>
            </div>
          </div>
          <div class="form-row single" style="margin-top:10px">
            <div class="form-field">
              <label>খোয়া তৈরিতে ভাঙা ইট <span class="required">*</span></label>
              <div class="field-mock">ইটের ধরন নির্বাচন করুন... ▼</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:4px">প্রত্যাখ্যাত, নিম্নমানের বা অতিরিক্ত পোড়া ইটের ধরন নির্বাচন করুন</div>
            </div>
          </div>
          <div class="form-row single" style="margin-top:10px">
            <div class="form-field">
              <label>নোট (ঐচ্ছিক)</label>
              <div class="field-mock" style="height:80px;padding-top:8px">উদাহরণ: ব্যাচ #২২ থেকে প্রত্যাখ্যাত ইট ও ঝামা থেকে তৈরি</div>
            </div>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">record</button>
          </div>
        </div>

        <table class="doc-table" style="margin-top:16px">
          <tr><th>কলাম (তালিকায়)</th><th>বিবরণ</th></tr>
          <tr><td>ব্যাচ আইডি</td><td>সিস্টেম তৈরি অনন্য নম্বর</td></tr>
          <tr><td>খোয়া (CFT)</td><td>ঘনফুটে উৎপাদিত খোয়ার পরিমাণ</td></tr>
          <tr><td>ভাঙা ইট</td><td>কোন ধরনের ইট ব্যবহার করা হয়েছে</td></tr>
          <tr><td>ব্যবহৃত ইটের ধরন</td><td>নির্বাচিত ইটের ক্যাটাগরি</td></tr>
          <tr><td>তৈরি হয়েছে</td><td>রেকর্ডের তারিখ ও সময়</td></tr>
        </table>
      </div>
    `
  },

  // ===================================================
  // PLACEHOLDER PAGES (remaining sections)
  // ===================================================,

};
