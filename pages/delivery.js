// pages/delivery.js
// মডিউল: ডেলিভারি ব্যবস্থাপনা (বিস্তারিত)
// পেজ: trip, driver, vehicle, gatepass

var PAGES_DELIVERY = {

  // ===================================================
  // ট্রিপ তালিকা (বিস্তারিত)
  // ===================================================
  trip: {
    title: 'ট্রিপ তালিকা',
    sections: ['পেজ পরিচিতি', 'কোন ক্রমে তৈরি করবেন', 'ট্রিপ কী ও কেন প্রয়োজন', 'পরিসংখ্যান কার্ড', 'নতুন ট্রিপ যোগ - ধাপে ধাপে', 'ফর্মের বিবরণ', 'প্রতিটি ফিল্ডের বিস্তারিত', 'তালিকা ব্যবস্থাপনা', 'সম্পাদনা', 'সাধারণ সমস্যা'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">🚛</div>
        <div>
          <h1>ট্রিপ তালিকা</h1>
          <p>প্রতিটি ডেলিভারি ট্রিপের তথ্য রেকর্ড করুন</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → ডেলিভারি → <strong>ট্রিপ তালিকা</strong></span>
        <p>এই পেজে প্রতিটি ডেলিভারি ট্রিপের বিস্তারিত তথ্য রেকর্ড করা হয়। চালান থেকে পণ্য ডেলিভারির জন্য ট্রিপ তৈরি করতে হয়।</p>

        <div class="info-box warning" style="border-left-color:var(--danger);background:#fef2f2">
          <div class="info-box-title" style="color:var(--danger)">⚠️ গুরুত্বপূর্ণ - প্রথমে এটি তৈরি করুন</div>
          <div style="display:flex;align-items:center;gap:10px;margin-top:10px;font-size:14px;flex-wrap:wrap">
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ১</span>
            <span>চালান</span>
            <span style="color:var(--text-muted)">→</span>
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ২</span>
            <span>গাড়ি ও ড্রাইভার</span>
            <span style="color:var(--text-muted)">→</span>
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ৩</span>
            <span>ট্রিপ তালিকা</span>
            <span style="color:var(--text-muted)">→</span>
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ৪</span>
            <span>গেট পাস</span>
          </div>
          <p style="margin-top:10px">ট্রিপ তৈরি করার আগে অবশ্যই <strong>চালান</strong>, <strong>গাড়ি</strong> এবং <strong>ড্রাইভার</strong> তৈরি করে নিন।</p>
        </div>
      </div>

      <div class="section" id="sec-ট্রিপ-কী-ও-কেন-প্রয়োজন">
        <div class="section-title">ট্রিপ কী ও কেন প্রয়োজন?</div>

        <h4 class="sub-title">ট্রিপের উপাদানসমূহ:</h4>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="fc-icon">🧾</div>
            <h5>চালান</h5>
            <p>কোন চালানের পণ্য ডেলিভারি হচ্ছে</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">🚚</div>
            <h5>গাড়ি</h5>
            <p>কোন গাড়িতে পণ্য বহন করা হচ্ছে</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">🧑‍✈️</div>
            <h5>ড্রাইভার</h5>
            <p>কে গাড়ি চালাচ্ছে</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">📍</div>
            <h5>গন্তব্য</h5>
            <p>পণ্য কোথায় ডেলিভারি হচ্ছে</p>
          </div>
        </div>

        <div class="info-box success">
          <div class="info-box-title">✅ ট্রিপ ব্যবস্থাপনার সুবিধা</div>
          <ul class="bullet-list">
            <li>প্রতিটি ডেলিভারির রেকর্ড থাকে</li>
            <li>ড্রাইভার ও গাড়ির ব্যবহার ট্র্যাক করা যায়</li>
            <li>ডেলিভারি স্ট্যাটাস জানা যায়</li>
            <li>গেট পাস তৈরি সহজ হয়</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-পরিসংখ্যান-কার্ড">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <div class="stat-row">
          <div class="stat-card">
            <div class="stat-icon">🚛</div>
            <div><div class="stat-label">মোট ট্রিপ</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">✅</div>
            <div><div class="stat-label">সম্পন্ন</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card blue">
            <div class="stat-icon">🔄</div>
            <div><div class="stat-label">চলমান</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">📦</div>
            <div><div class="stat-label">মোট পণ্য</div><div class="stat-value">০</div></div>
          </div>
        </div>
      </div>

      <div class="section" id="sec-নতুন-ট্রিপ-যোগ">
        <div class="section-title">নতুন ট্রিপ যোগ - ধাপে ধাপে</div>
        <ol class="steps">
          <li>পেজের উপরের ডানদিকে <strong style="color:var(--primary)">"+ নতুন ট্রিপ"</strong> (নীল বাটন) এ ক্লিক করুন।</li>
          <li><strong>চালান নির্বাচন করুন</strong> ড্রপডাউন থেকে চালান নির্বাচন করুন — এটি বাধ্যতামূলক।</li>
          <li><strong>গাড়ি নির্বাচন করুন</strong> ড্রপডাউন থেকে গাড়ি নির্বাচন করুন — এটি বাধ্যতামূলক।</li>
          <li><strong>ড্রাইভার নির্বাচন করুন</strong> ড্রপডাউন থেকে ড্রাইভার নির্বাচন করুন — এটি বাধ্যতামূলক।</li>
          <li><strong>গন্তব্য</strong> লিখুন — পণ্য কোথায় ডেলিভারি হচ্ছে।</li>
          <li><strong>যাত্রার সময়</strong> লিখুন — কখন যাত্রা শুরু হচ্ছে।</li>
          <li><strong>আনুমানিক পৌঁছানোর সময়</strong> লিখুন — কখন পৌঁছানোর কথা।</li>
          <li><strong>মন্তব্য</strong> লিখুন — বিশেষ তথ্য থাকলে (ঐচ্ছিক)।</li>
          <li><strong>"তৈরি করুন"</strong> বাটনে ক্লিক করুন।</li>
          <li>সফল হলে সবুজ বার্তা দেখাবে এবং ডায়ালগ বন্ধ হয়ে যাবে।</li>
        </ol>

        <div class="info-box success">
          <div class="info-box-title">✅ সফলতা বার্তা</div>
          সঠিকভাবে তৈরি হলে <strong>"Trip created successfully"</strong> সবুজ বার্তা দেখাবে।
        </div>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">🚛 নতুন ট্রিপ যোগ করুন</div>
          
          <div class="field-group">
            <div class="field-group-title">📦 মৌলিক তথ্য</div>
            <div class="form-row">
              <div class="form-field">
                <label>চালান নির্বাচন করুন <span class="required">*</span></label>
                <div class="field-mock">চালান নির্বাচন করুন... ▼</div>
              </div>
              <div class="form-field">
                <label>গাড়ি নির্বাচন করুন <span class="required">*</span></label>
                <div class="field-mock">গাড়ি নির্বাচন করুন... ▼</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label>ড্রাইভার নির্বাচন করুন <span class="required">*</span></label>
                <div class="field-mock">ড্রাইভার নির্বাচন করুন... ▼</div>
              </div>
              <div class="form-field">
                <label>গন্তব্য <span class="required">*</span></label>
                <div class="field-mock active">ঢাকা</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label>যাত্রার সময় <span class="required">*</span></label>
                <div class="field-mock active">08:00 AM</div>
              </div>
              <div class="form-field">
                <label>আনুমানিক পৌঁছানোর সময়</label>
                <div class="field-mock">02:00 PM</div>
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
            <button class="btn-primary">🚛 তৈরি করুন</button>
          </div>
        </div>

        <table class="doc-table">
          <tr><th>ফিল্ড</th><th>বিবরণ</th><th>বাধ্যতামূলক</th></tr>
          <tr><td>চালান নির্বাচন</td><td>কোন চালানের পণ্য ডেলিভারি হচ্ছে</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>গাড়ি নির্বাচন</td><td>কোন গাড়িতে পণ্য বহন করা হচ্ছে</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>ড্রাইভার নির্বাচন</td><td>কে গাড়ি চালাচ্ছে</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>গন্তব্য</td><td>পণ্য কোথায় ডেলিভারি হচ্ছে</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>যাত্রার সময়</td><td>কখন যাত্রা শুরু হচ্ছে</td><td><span class="badge badge-red">হ্যাঁ</span></td></tr>
          <tr><td>পৌঁছানোর সময়</td><td>কখন পৌঁছানোর কথা (ঐচ্ছিক)</td><td><span class="badge badge-green">না</span></td></tr>
          <tr><td>মন্তব্য</td><td>বিশেষ তথ্য</td><td><span class="badge badge-green">না</span></td></tr>
        </table>
      </div>

      <div class="section" id="sec-তালিকা-ব্যবস্থাপনা">
        <div class="section-title">তালিকা ব্যবস্থাপনা</div>
        <p>মূল তালিকায় সব ট্রিপ দেখা যাবে। কলামগুলো:</p>
        
        <div class="table-mock">
          <div class="table-mock-header" style="grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr">
            <span>চালান</span><span>গাড়ি</span><span>ড্রাইভার</span><span>গন্তব্য</span><span>স্ট্যাটাস</span><span>কার্যক্রম</span>
          </div>
          <div class="table-mock-row" style="grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr">
            <div>CHL-2026-001</div>
            <div>ঢাকা-১১-১২৩৪</div>
            <div>করিম (০১৭১১১১১১১১)</div>
            <div>ঢাকা</div>
            <div><span class="badge badge-green">✅ সম্পন্ন</span></div>
            <div><span style="font-size:18px;cursor:pointer">⋯</span></div>
          </div>
        </div>

        <div class="info-box success">
          <div class="info-box-title">✅ সার্চ ও ফিল্টার</div>
          <ul class="bullet-list">
            <li><strong>সার্চ:</strong> চালান নম্বর, গাড়ি নম্বর, ড্রাইভার নাম দিয়ে খুঁজুন</li>
            <li><strong>ফিল্টার:</strong> স্ট্যাটাস (সম্পন্ন/চলমান/বাতিল) আলাদা করুন</li>
            <li><strong>সর্ট:</strong> তারিখ, গন্তব্য অনুযায়ী সাজান</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-সম্পাদনা">
        <div class="section-title">ট্রিপ সম্পাদনা (Edit) করা</div>
        <ol class="steps">
          <li>তালিকায় যেই ট্রিপটি সম্পাদনা করতে চান, সেই সারির <strong>⋯</strong> মেনুতে ক্লিক করুন।</li>
          <li><strong>✏️ Edit</strong> সিলেক্ট করুন।</li>
          <li>এডিট ডায়ালগ খুলবে — সব ফিল্ডে আগের মান আগে থেকেই পূরণ করা থাকবে।</li>
          <li>যে ফিল্ডটি পরিবর্তন করতে চান, সেই ফিল্ডে ক্লিক করে নতুন মান লিখুন।</li>
          <li>সব পরিবর্তন করার পর <strong>"আপডেট"</strong> বাটনে ক্লিক করুন।</li>
          <li>সফল হলে সবুজ বার্তা দেখাবে: <strong>"Trip updated successfully"</strong></li>
        </ol>
      </div>

      <div class="section" id="sec-সাধারণ-সমস্যা">
        <div class="section-title">সাধারণ সমস্যা ও সমাধান</div>

        <h4 class="sub-title">সমস্যা ১: "চালান নির্বাচন করুন"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"Challan selection is required."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>একটি সক্রিয় চালান নির্বাচন করুন</li>
            <li>কোনো চালান না থাকলে প্রথমে চালান তৈরি করুন</li>
          </ul>
        </div>

        <h4 class="sub-title">সমস্যা ২: "গাড়ি নির্বাচন করুন"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"Vehicle selection is required."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>একটি সক্রিয় গাড়ি নির্বাচন করুন</li>
            <li>কোনো গাড়ি না থাকলে প্রথমে যানবাহন তৈরি করুন</li>
          </ul>
        </div>

        <h4 class="sub-title">সমস্যা ৩: "ড্রাইভার নির্বাচন করুন"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"Driver selection is required."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>একটি সক্রিয় ড্রাইভার নির্বাচন করুন</li>
            <li>কোনো ড্রাইভার না থাকলে প্রথমে ড্রাইভার তালিকায় যোগ করুন</li>
          </ul>
        </div>
      </div>
    `
  },

  // ===================================================
  // ড্রাইভার তালিকা (সংক্ষিপ্ত)
  // ===================================================
  driver: {
    title: 'ড্রাইভার তালিকা',
    sections: ['পেজ পরিচিতি', 'নতুন ড্রাইভার যোগ', 'ফর্মের বিবরণ'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">🧑‍✈️</div>
        <div>
          <h1>ড্রাইভার তালিকা</h1>
          <p>নথিভুক্ত ড্রাইভারদের তথ্য সংরক্ষণ করুন</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → ডেলিভারি → <strong>ড্রাইভার তালিকা</strong></span>
        <p>এই পেজে সকল নিবন্ধিত ড্রাইভারের তথ্য, লাইসেন্স ও যোগাযোগের তথ্য একসাথে দেখা যায়।</p>
      </div>

      <div class="section" id="sec-নতুন-ড্রাইভার-যোগ">
        <div class="section-title">নতুন ড্রাইভার যোগ</div>
        <ol class="steps">
          <li>উপরের ডানদিকে <strong>"+ নতুন ড্রাইভার"</strong> বাটনে ক্লিক করুন।</li>
          <li><strong>নাম</strong> লিখুন — এটি বাধ্যতামূলক।</li>
          <li><strong>লাইসেন্স নং</strong> লিখুন — এটি বাধ্যতামূলক।</li>
          <li><strong>মোবাইল</strong> লিখুন — এটি ঐচ্ছিক।</li>
          <li><strong>স্ট্যাটাস</strong> টগল করুন।</li>
          <li><strong>"তৈরি করুন"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">🧑‍✈️ নতুন ড্রাইভার যোগ করুন</div>
          <div class="form-row">
            <div class="form-field">
              <label>নাম <span class="required">*</span></label>
              <div class="field-mock active">করিম</div>
            </div>
            <div class="form-field">
              <label>লাইসেন্স নং <span class="required">*</span></label>
              <div class="field-mock">A-1234567890</div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <label>মোবাইল</label>
              <div class="field-mock">01711111111</div>
            </div>
            <div class="form-field">
              <label>স্ট্যাটাস</label>
              <div class="field-mock">সক্রিয় ▼</div>
            </div>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">তৈরি করুন</button>
          </div>
        </div>
      </div>
    `
  },

  // ===================================================
  // যানবাহন (সংক্ষিপ্ত)
  // ===================================================
  vehicle: {
    title: 'যানবাহন',
    sections: ['পেজ পরিচিতি', 'নতুন যানবাহন যোগ', 'ফর্মের বিবরণ'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">🚚</div>
        <div>
          <h1>যানবাহন ব্যবস্থাপনা</h1>
          <p>গাড়ির ধরন ও নিবন্ধিত যানবাহনের তথ্য পরিচালনা করুন</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → ডেলিভারি → <strong>যানবাহন</strong></span>
        <p>এই পেজে গাড়ির ধরন এবং নিবন্ধিত যানবাহনের তথ্য দেখা যায়।</p>
      </div>

      <div class="section" id="sec-নতুন-যানবাহন-যোগ">
        <div class="section-title">নতুন যানবাহন যোগ</div>
        <ol class="steps">
          <li>উপরের ডানদিকে <strong>"+ নতুন যানবাহন"</strong> বাটনে ক্লিক করুন।</li>
          <li><strong>গাড়ির নম্বর</strong> লিখুন — এটি বাধ্যতামূলক।</li>
          <li><strong>গাড়ির ধরন</strong> নির্বাচন করুন — এটি বাধ্যতামূলক।</li>
          <li><strong>ধারণ ক্ষমতা</strong> লিখুন — এটি ঐচ্ছিক।</li>
          <li><strong>ড্রাইভার</strong> নির্বাচন করুন — এটি ঐচ্ছিক।</li>
          <li><strong>"তৈরি করুন"</strong> বাটনে ক্লিক করুন।</li>
        </ol>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">🚚 নতুন যানবাহন যোগ করুন</div>
          <div class="form-row">
            <div class="form-field">
              <label>গাড়ির নম্বর <span class="required">*</span></label>
              <div class="field-mock active">ঢাকা-১১-১২৩৪</div>
            </div>
            <div class="form-field">
              <label>গাড়ির ধরন <span class="required">*</span></label>
              <div class="field-mock">ট্রাক ▼</div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <label>ধারণ ক্ষমতা</label>
              <div class="field-mock">৫০০০ ইট</div>
            </div>
            <div class="form-field">
              <label>ড্রাইভার</label>
              <div class="field-mock">ড্রাইভার নির্বাচন করুন ▼</div>
            </div>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">তৈরি করুন</button>
          </div>
        </div>
      </div>
    `
  },

  // ===================================================
  // গেট পাস (সংক্ষিপ্ত)
  // ===================================================
  gatepass: {
    title: 'গেট পাস',
    sections: ['গেট পাস কী', 'নতুন গেট পাস', 'প্রিন্ট'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">🎫</div>
        <div>
          <h1>গেট পাস তালিকা</h1>
          <p>মাল বের হওয়ার সময় গেট পাস তৈরি করুন</p>
        </div>
      </div>

      <div class="section" id="sec-গেট-পাস-কী">
        <div class="section-title">গেট পাস কী?</div>
        <span class="nav-path">মেনু → ডেলিভারি → <strong>গেট পাস তালিকা</strong></span>
        <p><strong>গেট পাস</strong> হলো একটি অফিশিয়াল ডকুমেন্ট যা পণ্য বের হওয়ার সময় তৈরি করা হয়। এতে চালান নম্বর, গাড়ি নম্বর, ড্রাইভারের তথ্য থাকে।</p>
      </div>

      <div class="section" id="sec-নতুন-গেট-পাস">
        <div class="section-title">নতুন গেট পাস</div>
        <ol class="steps">
          <li>উপরের ডানদিকে <strong>"+ নতুন গেট পাস"</strong> বাটনে ক্লিক করুন।</li>
          <li><strong>চালান নম্বর</strong> নির্বাচন করুন।</li>
          <li><strong>গাড়ি</strong> নির্বাচন করুন।</li>
          <li><strong>ড্রাইভার</strong> নির্বাচন করুন।</li>
          <li><strong>"তৈরি করুন"</strong> বাটনে ক্লিক করুন।</li>
          <li>গেট পাস তৈরি হলে <strong>প্রিন্ট</strong> বাটনে ক্লিক করে প্রিন্ট নিন।</li>
        </ol>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">🎫 নতুন গেট পাস তৈরি করুন</div>
          <div class="form-row">
            <div class="form-field">
              <label>চালান নম্বর <span class="required">*</span></label>
              <div class="field-mock">চালান নির্বাচন করুন ▼</div>
            </div>
            <div class="form-field">
              <label>গাড়ি <span class="required">*</span></label>
              <div class="field-mock">গাড়ি নির্বাচন করুন ▼</div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <label>ড্রাইভার <span class="required">*</span></label>
              <div class="field-mock">ড্রাইভার নির্বাচন করুন ▼</div>
            </div>
          </div>
          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">🎫 তৈরি করুন</button>
          </div>
        </div>
      </div>

      <div class="section" id="sec-প্রিন্ট">
        <div class="section-title">প্রিন্ট সুবিধা</div>
        <div class="info-box success">
          <div class="info-box-title">✅ গেট পাস প্রিন্ট</div>
          <ul class="bullet-list">
            <li>গেট পাস তৈরি হওয়ার পর <strong>🖨️ প্রিন্ট</strong> বাটনে ক্লিক করুন</li>
            <li>গেট পাস PDF ফরম্যাটে প্রিন্ট হবে</li>
            <li>এটি ড্রাইভারকে দিন এবং গেটে জমা দিন</li>
          </ul>
        </div>
      </div>
    `
  }

};
