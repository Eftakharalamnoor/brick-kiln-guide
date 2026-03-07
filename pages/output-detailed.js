// pages/output-detailed.js
// মডিউল: আউটপুট ব্যবস্থাপনা (বিস্তারিত)
// পেজ: output

var PAGES_OUTPUT_DETAILED = {

  output: {
    title: 'আউটপুট ব্যবস্থাপনা',
    sections: ['পেজ পরিচিতি', 'কেন আউটপুট গুরুত্বপূর্ণ', 'পরিসংখ্যান কার্ড', 'দৈনিক আউটপুট এন্ট্রি - ধাপে ধাপে', 'ফর্মের বিবরণ', 'প্রতিটি ফিল্ডের বিস্তারিত', 'সক্রিয় ব্যাচের তথ্য', 'আউটপুট ইতিহাস', 'সম্পাদনা', 'মুছে ফেলা', 'সাধারণ সমস্যা'],
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
          <p>প্রতিটি ব্যাচের মোট ইনপুট থেকে প্রতিদিন আউটপুট বিয়োগ হয়। অগ্রগতি বার দিয়ে বোঝা যায় কতটুকু উৎপাদন বাকি আছে।</p>
        </div>

        <div class="info-box warning">
          <div class="info-box-title">⚠️ গুরুত্বপূর্ণ</div>
          আউটপুট এন্ট্রি দেওয়ার আগে অবশ্যই <strong>ব্যাচ</strong> তৈরি করে নিতে হবে। সক্রিয় ব্যাচ না থাকলে আউটপুট দেওয়া যাবে না।
        </div>
      </div>

      <div class="section" id="sec-কেন-আউটপুট-গুরুত্বপূর্ণ">
        <div class="section-title">কেন আউটপুট গুরুত্বপূর্ণ?</div>
        
        <div class="info-box success">
          <div class="info-box-title">✅ আউটপুট ট্র্যাকিংয়ের সুবিধা</div>
          <ul class="bullet-list">
            <li>প্রতিদিনের উৎপাদন পরিমাণ জানা যায়</li>
            <li>ব্যাচের অগ্রগতি রিয়েল-টাইমে দেখা যায়</li>
            <li>ইনপুট বনাম আউটপুট তুলনা করা যায়</li>
            <li>নষ্ট ইটের হার হিসাব করা যায়</li>
            <li>কোন ক্যাটাগরিতে কত ইট হয়েছে তা জানা যায়</li>
            <li>বিক্রয়ের জন্য প্রস্তুত ইটের সংখ্যা জানা যায়</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-পরিসংখ্যান-কার্ড">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <p>চুল্লি নির্বাচন করার পর তিনটি সারসংক্ষেপ কার্ড দেখা যায়:</p>
        
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

        <h4 class="sub-title">কার্ডের ব্যাখ্যা:</h4>
        <table class="doc-table">
          <tr><th>কার্ড</th><th>কী বোঝায়</th><th>কীভাবে গণনা হয়</th></tr>
          <tr><td>মোট ইনপুট</td><td>ব্যাচে লোড করা মোট ইটের সংখ্যা</td><td>ব্যাচ তৈরির সময় দেওয়া ইনপুট</td></tr>
          <tr><td>এখন পর্যন্ত আউটপুট</td><td>এ পর্যন্ত বের হওয়া মোট ইট</td><td>সব আউটপুট এন্ট্রির যোগফল</td></tr>
          <tr><td>বাকি আউটপুট</td><td>আর কত ইট বের হতে বাকি</td><td>মোট ইনপুট - এখন পর্যন্ত আউটপুট</td></tr>
        </table>
      </div>

      <div class="section" id="sec-দৈনিক-আউটপুট-এন্ট্রি">
        <div class="section-title">দৈনিক আউটপুট এন্ট্রি - ধাপে ধাপে</div>
        <ol class="steps">
          <li>পেজের উপরে <strong>চুল্লি নির্বাচন করুন</strong> ড্রপডাউন থেকে একটি চুল্লি নির্বাচন করুন।</li>
          <li>সক্রিয় ব্যাচের তথ্য কার্ড দেখা যাবে — অগ্রগতি % ও বাকি আউটপুট চেক করুন।</li>
          <li><strong style="color:var(--success)">"+ দৈনিক আউটপুট দিন"</strong> (সবুজ বাটন) এ ক্লিক করুন।</li>
          <li>খুলে আসা পপ-আপ ডায়ালগে <strong>তারিখ</strong> নির্বাচন করুন — ডিফল্ট আজকের তারিখ।</li>
          <li><strong>ক্যাটাগরি অনুযায়ী আউটপুট</strong> লিখুন:
            <ul class="bullet-list">
              <li>ক্যাটাগরি ১ — উত্তম মানের ইট (প্রথম শ্রেণি)</li>
              <li>ক্যাটাগরি ২ — মাঝারি মানের ইট (দ্বিতীয় শ্রেণি)</li>
              <li>ক্যাটাগরি ৩ — নিম্ন মানের ইট (তৃতীয় শ্রেণি)</li>
              <li>ক্যাটাগরি ৪ — অন্যান্য (ভাঙা, নষ্ট ইট)</li>
            </ul>
          </li>
          <li><strong>মন্তব্য</strong> লিখুন — বিশেষ তথ্য থাকলে (ঐচ্ছিক)।</li>
          <li><strong>আজকের আউটপুট</strong> স্বয়ংক্রিয়ভাবে গণনা হয়ে দেখাবে।</li>
          <li><strong>আউটপুটের পর বাকি</strong> দেখাবে কত ইট এখনো বের হয়নি।</li>
          <li><strong>মোট অগ্রগতি</strong> % দেখাবে।</li>
          <li><strong>"সংরক্ষণ করুন"</strong> বাটনে ক্লিক করুন।</li>
          <li>সফল হলে সবুজ বার্তা দেখাবে এবং ডায়ালগ বন্ধ হয়ে যাবে।</li>
        </ol>

        <div class="info-box success">
          <div class="info-box-title">✅ সফলতা বার্তা</div>
          সঠিকভাবে এন্ট্রি দিলে <strong>"Daily output saved successfully"</strong> সবুজ বার্তা দেখাবে।
        </div>

        <div class="info-box warning">
          <div class="info-box-title">⚠️ মনে রাখবেন</div>
          <ul class="bullet-list">
            <li>কমপক্ষে একটি ক্যাটাগরিতে পরিমাণ দিতে হবে</li>
            <li>আউটপুট বাকি পরিমাণের বেশি হতে পারবে না</li>
            <li>একই তারিখে দুবার এন্ট্রি দেওয়া যাবে না</li>
            <li>সক্রিয় ব্যাচ না থাকলে আউটপুট দেওয়া যাবে না</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">📊 দৈনিক আউটপুট এন্ট্রি</div>
          
          <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:12px;margin-bottom:14px;font-size:13px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <strong>B-2026-001</strong>
              <span class="badge badge-green">সক্রিয়</span>
            </div>
            <div>অগ্রগতি: ৯৭%</div>
            <div class="progress-bar-mock" style="margin-top:4px">
              <div class="progress-fill" style="width:97%"></div>
            </div>
          </div>

          <div class="form-field" style="margin-bottom:14px">
            <label>তারিখ <span class="required">*</span></label>
            <div class="field-mock active">০৪ মার্চ, ২০২৬</div>
          </div>

          <div class="field-group">
            <div class="field-group-title">ক্যাটাগরি অনুযায়ী আউটপুট</div>
            <div class="form-row">
              <div class="form-field">
                <label>ক্যাটাগরি ১ (উত্তম) <span class="required">*</span></label>
                <div class="field-mock">0</div>
              </div>
              <div class="form-field">
                <label>ক্যাটাগরি ২ (মাঝারি) <span class="required">*</span></label>
                <div class="field-mock">0</div>
              </div>
              <div class="form-field">
                <label>ক্যাটাগরি ৩ (নিম্ন) <span class="required">*</span></label>
                <div class="field-mock">0</div>
              </div>
              <div class="form-field">
                <label>ক্যাটাগরি ৪ (অন্যান্য)</label>
                <div class="field-mock">0</div>
              </div>
            </div>
          </div>

          <div class="form-field" style="margin-top:10px">
            <label>মন্তব্য (ঐচ্ছিক)</label>
            <div class="field-mock" style="height:70px;padding-top:8px">অতিরিক্ত তথ্য...</div>
          </div>

          <div style="background:#f8fafc;border:1px solid var(--border);border-radius:8px;padding:12px;display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:14px;font-size:13px;text-align:center">
            <div>
              <div style="color:var(--text-muted)">আজকের আউটপুট</div>
              <div style="color:var(--success);font-weight:700;font-size:16px">০</div>
            </div>
            <div>
              <div style="color:var(--text-muted)">আউটপুটের পর বাকি</div>
              <div style="color:var(--primary);font-weight:700;font-size:16px">৮,৩৪৩</div>
            </div>
            <div>
              <div style="color:var(--text-muted)">মোট অগ্রগতি</div>
              <div style="color:var(--info);font-weight:700;font-size:16px">৯৭%</div>
            </div>
            <div>
              <div style="color:var(--text-muted)">অবস্থা</div>
              <div style="color:var(--success);font-weight:700;font-size:16px">✓ চলমান</div>
            </div>
          </div>

          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary" style="background:var(--success)">সংরক্ষণ করুন</button>
          </div>
        </div>

        <table class="doc-table">
          <tr><th>ফিল্ড</th><th>বিবরণ</th><th>বাধ্যতামূলক</th><th>টাইপ</th></tr>
          <tr><td>তারিখ</td><td>আউটপুট এন্ট্রির তারিখ</td><td><span class="badge badge-red">হ্যাঁ</span></td><td>ডেট পিকার</td></tr>
          <tr><td>ক্যাটাগরি ১</td><td>উত্তম মানের ইটের সংখ্যা</td><td><span class="badge badge-red">হ্যাঁ</span></td><td>সংখ্যা</td></tr>
          <tr><td>ক্যাটাগরি ২</td><td>মাঝারি মানের ইটের সংখ্যা</td><td><span class="badge badge-red">হ্যাঁ</span></td><td>সংখ্যা</td></tr>
          <tr><td>ক্যাটাগরি ৩</td><td>নিম্ন মানের ইটের সংখ্যা</td><td><span class="badge badge-red">হ্যাঁ</span></td><td>সংখ্যা</td></tr>
          <tr><td>ক্যাটাগরি ৪</td><td>অন্যান্য ইটের সংখ্যা (ভাঙা/নষ্ট)</td><td><span class="badge badge-green">না</span></td><td>সংখ্যা</td></tr>
          <tr><td>মন্তব্য</td><td>অতিরিক্ত তথ্য বা মন্তব্য</td><td><span class="badge badge-green">না</span></td><td>টেক্সট</td></tr>
        </table>
      </div>

      <div class="section" id="sec-প্রতিটি-ফিল্ডের-বিস্তারিত">
        <div class="section-title">প্রতিটি ফিল্ডের বিস্তারিত ব্যাখ্যা</div>

        <h4 class="sub-title">১. তারিখ ⭐</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী করবেন</div>
          <p>আউটপুট এন্ট্রির তারিখ নির্বাচন করুন। ডিফল্টভাবে আজকের তারিখ থাকে।</p>
        </div>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ ভ্যালিডেশন</div>
          <ul class="bullet-list">
            <li>অতীতের তারিখ দেওয়া যাবে না</li>
            <li>ভবিষ্যতের তারিখ দেওয়া যাবে না</li>
            <li>একই তারিখে দুবার এন্ট্রি দেওয়া যাবে না</li>
          </ul>
        </div>

        <h4 class="sub-title">২. ক্যাটাগরি ১ (উত্তম মানের) ⭐</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী লিখবেন</div>
          <p>সর্বোচ্চ মানের ইটের সংখ্যা লিখুন। এগুলো প্রথম শ্রেণির ইট।</p>
          <p><strong>উদাহরণ:</strong> ১০,০০০, ১৫,০০০, ২০,০০০</p>
        </div>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ ভ্যালিডেশন</div>
          <ul class="bullet-list">
            <li>০ বা খালি রাখা যাবে না (কমপক্ষে একটি ক্যাটাগরিতে মান দিতে হবে)</li>
            <li>ঋণাত্মক সংখ্যা দেওয়া যাবে না</li>
            <li>বাস্তবসম্মত সংখ্যা দিন</li>
          </ul>
        </div>

        <h4 class="sub-title">৩. ক্যাটাগরি ২ (মাঝারি মানের) ⭐</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী লিখবেন</div>
          <p>মাঝারি মানের ইটের সংখ্যা লিখুন। এগুলো দ্বিতীয় শ্রেণির ইট।</p>
        </div>

        <h4 class="sub-title">৪. ক্যাটাগরি ৩ (নিম্ন মানের) ⭐</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী লিখবেন</div>
          <p>নিম্ন মানের ইটের সংখ্যা লিখুন। এগুলো তৃতীয় শ্রেণির ইট।</p>
        </div>

        <h4 class="sub-title">৫. ক্যাটাগরি ৪ (অন্যান্য)</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী লিখবেন</div>
          <p>ভাঙা, নষ্ট বা অন্যান্য ইটের সংখ্যা লিখুন। এটি ঐচ্ছিক।</p>
        </div>

        <h4 class="sub-title">৬. মন্তব্য (ঐচ্ছিক)</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী লিখবেন</div>
          <p>বিশেষ তথ্য বা মন্তব্য লিখুন। যেমন: "আজ তাপমাত্রা বেশি ছিল", "বৃষ্টির কারণে উৎপাদন কম"</p>
        </div>
      </div>

      <div class="section" id="sec-সক্রিয়-ব্যাচের-তথ্য">
        <div class="section-title">সক্রিয় ব্যাচের তথ্য</div>
        <p>চুল্লি নির্বাচন করার পর একটি তথ্য কার্ড দেখা যাবে:</p>
        
        <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:16px;margin:16px 0">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
            <div>
              <strong style="font-size:16px">B-2026-001</strong>
              <span class="badge badge-green" style="margin-left:8px">সক্রিয়</span>
            </div>
            <div style="text-align:right">
              <div style="font-size:12px;color:var(--text-muted)">শুরু: ০১ মার্চ, ২০২৬</div>
            </div>
          </div>
          
          <div style="margin-bottom:8px">
            <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px">
              <span>অগ্রগতি</span>
              <span style="font-weight:600">৯৭%</span>
            </div>
            <div class="progress-bar-mock">
              <div class="progress-fill" style="width:97%"></div>
            </div>
          </div>

          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:12px;text-align:center">
            <div style="background:white;padding:8px;border-radius:6px">
              <div style="font-size:11px;color:var(--text-muted)">মোট ইনপুট</div>
              <div style="font-weight:700;font-size:16px">৫০,০০০</div>
            </div>
            <div style="background:white;padding:8px;border-radius:6px">
              <div style="font-size:11px;color:var(--text-muted)">আউটপুট</div>
              <div style="font-weight:700;font-size:16px;color:var(--success)">৪৮,৫০০</div>
            </div>
            <div style="background:white;padding:8px;border-radius:6px">
              <div style="font-size:11px;color:var(--text-muted)">বাকি</div>
              <div style="font-weight:700;font-size:16px;color:var(--primary)">১,৫০০</div>
            </div>
          </div>
        </div>

        <div class="info-box note">
          <div class="info-box-title">💡 তথ্য কার্ডের ব্যাখ্যা</div>
          <ul class="bullet-list">
            <li><strong>ব্যাচ নম্বর:</strong> বর্তমান সক্রিয় ব্যাচের আইডি</li>
            <li><strong>অগ্রগতি বার:</strong> কতটুকু উৎপাদন শেষ হয়েছে</li>
            <li><strong>মোট ইনপুট:</strong> ব্যাচে লোড করা মোট ইট</li>
            <li><strong>আউটপুট:</strong> এ পর্যন্ত বের হওয়া ইট</li>
            <li><strong>বাকি:</strong> আর কত ইট বের হতে বাকি</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-আউটপুট-ইতিহাস">
        <div class="section-title">আউটপুট ইতিহাস</div>
        <p>পেজের নিচে <strong>"দৈনিক আউটপুট ইতিহাস"</strong> তালিকায় সব এন্ট্রি দেখা যাবে:</p>
        
        <div class="table-mock">
          <div class="table-mock-header" style="grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr">
            <span>তারিখ</span><span>চুল্লি</span><span>আউটপুট</span><span>ক্যাটাগরি</span><span>মন্তব্য</span><span>কার্যক্রম</span>
          </div>
          <div class="table-mock-row" style="grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr">
            <div>০৪ মার্চ, ২০২৬</div>
            <div>হফম্যান-১</div>
            <div style="color:var(--success);font-weight:600">১,৫০০</div>
            <div>
              <span class="badge badge-green" style="font-size:11px">ক্যাটাগরি ১: ১,০০০</span>
              <span class="badge badge-blue" style="font-size:11px">ক্যাটাগরি ২: ৫০০</span>
            </div>
            <div style="font-size:12px;color:var(--text-muted)">সব ঠিক</div>
            <div><span style="font-size:18px;cursor:pointer">⋯</span></div>
          </div>
        </div>

        <h4 class="sub-title">কলামের বিবরণ:</h4>
        <table class="doc-table">
          <tr><th>কলাম</th><th>কী দেখাবে</th></tr>
          <tr><td>তারিখ</td><td>আউটপুট এন্ট্রির তারিখ</td></tr>
          <tr><td>চুল্লি</td><td>কোন চুল্লির আউটপুট</td></tr>
          <tr><td>আউটপুট</td><td>মোট উৎপাদিত ইট (সবুজ রঙে)</td></tr>
          <tr><td>ক্যাটাগরি</td><td>ইটের শ্রেণি অনুযায়ী বিভাজন (ব্যাজ আকারে)</td></tr>
          <tr><td>মন্তব্য</td><td>অতিরিক্ত মন্তব্য</td></tr>
          <tr><td>কার্যক্রম</td><td>⋯ মেনু — এডিট, মুছে ফেলা</td></tr>
        </table>

        <div class="info-box success">
          <div class="info-box-title">✅ সার্চ ও ফিল্টার</div>
          <ul class="bullet-list">
            <li><strong>সার্চ:</strong> তারিখ বা মন্তব্য দিয়ে খুঁজুন</li>
            <li><strong>ফিল্টার:</strong> তারিখ পরিসর নির্বাচন করুন</li>
            <li><strong>এক্সপোর্ট:</strong> Excel/PDF ফরম্যাটে ডাউনলোড করুন</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-সম্পাদনা">
        <div class="section-title">আউটপুট এন্ট্রি সম্পাদনা</div>
        <ol class="steps">
          <li>আউটপুট ইতিহাস তালিকায় যেই এন্ট্রিটি সম্পাদনা করতে চান, সেই সারির <strong>⋯</strong> মেনুতে ক্লিক করুন।</li>
          <li><strong>✏️ Edit</strong> সিলেক্ট করুন।</li>
          <li>এডিট ডায়ালগ খুলবে — সব ফিল্ডে আগের মান আগে থেকেই পূরণ করা থাকবে।</li>
          <li>যে ফিল্ডটি পরিবর্তন করতে চান, সেই ফিল্ডে ক্লিক করে নতুন মান লিখুন।</li>
          <li>সব পরিবর্তন করার পর <strong>"আপডেট"</strong> বাটনে ক্লিক করুন।</li>
          <li>সফল হলে সবুজ বার্তা দেখাবে: <strong>"Output updated successfully"</strong></li>
        </ol>

        <div class="info-box warning">
          <div class="info-box-title">⚠️ গুরুত্বপূর্ণ</div>
          <ul class="bullet-list">
            <li>ব্যাচ সম্পন্ন হওয়ার পর আর এন্ট্রি এডিট করা যাবে না</li>
            <li>শুধু চলমান ব্যাচের এন্ট্রি এডিট করা যাবে</li>
            <li>তারিখ পরিবর্তন করা যাবে না</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-মুছে-ফেলা">
        <div class="section-title">আউটপুট এন্ট্রি মুছে ফেলা</div>
        <ol class="steps">
          <li>আউটপুট ইতিহাস তালিকায় যেই এন্ট্রিটি মুছে ফেলতে চান, সেই সারির <strong>⋯</strong> মেনুতে ক্লিক করুন।</li>
          <li><strong>🗑️ Delete</strong> সিলেক্ট করুন।</li>
          <li>কনফার্মেশন ডায়ালগ খুলবে।</li>
          <li><strong>"হ্যাঁ, মুছে ফেলুন"</strong> এ ক্লিক করুন।</li>
        </ol>

        <div class="info-box warning">
          <div class="info-box-title">⚠️ সতর্কতা</div>
          <ul class="bullet-list">
            <li>এন্ট্রি মুছে ফেললে ডেটা স্থায়ীভাবে মুছে যাবে</li>
            <li>এই কাজটি পূর্বাবস্থায় ফেরানো যাবে না</li>
            <li>নিশ্চিত না হলে মুছবেন না</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-সাধারণ-সমস্যা">
        <div class="section-title">সাধারণ সমস্যা ও সমাধান</div>
        
        <h4 class="sub-title">সমস্যা ১: "কোনো সক্রিয় ব্যাচ নেই"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"No active batch found for this furnace."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>চুল্লি পরিবর্তন করুন</li>
            <li>অথবা নতুন ব্যাচ তৈরি করুন</li>
            <li>ব্যাচের স্ট্যাটাস চেক করুন (চলমান কিনা)</li>
          </ul>
        </div>

        <h4 class="sub-title">সমস্যা ২: "আউটপুট বাকি পরিমাণের বেশি হতে পারবে না"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"Output cannot exceed remaining amount."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>বাকি আউটপুট চেক করুন</li>
            <li>বাকি পরিমাণের কম বা সমান আউটপুট দিন</li>
            <li>ইনপুট সংখ্যা সঠিক কিনা যাচাই করুন</li>
          </ul>
        </div>

        <h4 class="sub-title">সমস্যা ৩: "এই তারিখে ইতিমধ্যে এন্ট্রি আছে"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"Entry already exists for this date."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>পুরানো এন্ট্রি এডিট করুন</li>
            <li>অথবা ভিন্ন তারিখ নির্বাচন করুন</li>
            <li>একই তারিখে একাধিক এন্ট্রি দেওয়া যাবে না</li>
          </ul>
        </div>

        <h4 class="sub-title">সমস্যা ৪: "কমপক্ষে একটি ক্যাটাগরিতে পরিমাণ দিন"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"Enter quantity in at least one category."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>কমপক্ষে একটি ক্যাটাগরিতে ইটের সংখ্যা লিখুন</li>
            <li>সব ক্যাটাগরি ০ রাখা যাবে না</li>
          </ul>
        </div>
      </div>
    `
  }

};
