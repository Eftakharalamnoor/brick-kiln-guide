// pages/khowa-detailed.js
// মডিউল: খোয়া উৎপাদন ব্যবস্থাপনা (বিস্তারিত)
// পেজ: khowa

var PAGES_KHOWA_DETAILED = {

  khowa: {
    title: 'খোয়া উৎপাদন',
    sections: ['পেজ পরিচিতি', 'খোয়া কী ও কেন প্রয়োজন', 'পরিসংখ্যান কার্ড', 'নতুন খোয়া রেকর্ড - ধাপে ধাপে', 'ফর্মের বিবরণ', 'প্রতিটি ফিল্ডের বিস্তারিত', 'খোয়া ইনভেন্টরি', 'তালিকা ব্যবস্থাপনা', 'সম্পাদনা', 'মুছে ফেলা', 'সাধারণ সমস্যা'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">♻️</div>
        <div>
          <h1>খোয়া উৎপাদন</h1>
          <p>ভাঙা ইটের সমষ্টি রেকর্ড — CFT হিসেবে পরিমাপ</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → উৎপাদন → <strong>খোয়া উৎপাদন</strong></span>
        <p>এই পেজে প্রত্যাখ্যাত, নিম্নমানের বা অতিরিক্ত পোড়া ইট থেকে তৈরি খোয়া (ইট-চিপস) এর রেকর্ড রাখা হয়। খোয়া CFT (ঘনফুট) এককে পরিমাপ করা হয় এবং আলাদাভাবে বিক্রি করা যায়।</p>
        
        <div class="info-box note">
          <div class="info-box-title">💡 খোয়া কী?</div>
          <p><strong>খোয়া</strong> হলো প্রত্যাখ্যাত, নিম্নমানের বা অতিরিক্ত পোড়া ইট থেকে তৈরি ইট-চিপস। এটি CFT (ঘনফুট) এককে পরিমাপ করা হয়। খোয়া রাস্তাঘাট ও নির্মাণ কাজে ব্যবহৃত হয়।</p>
        </div>

        <div class="info-box warning">
          <div class="info-box-title">⚠️ গুরুত্বপূর্ণ</div>
          খোয়া তৈরি করার আগে অবশ্যই <strong>ইটের ধরন</strong> তৈরি করে নিতে হবে। ইটের ধরন না থাকলে খোয়া রেকর্ড করা যাবে না।
        </div>
      </div>

      <div class="section" id="sec-খোয়া-কী-ও-কেন-প্রয়োজন">
        <div class="section-title">খোয়া কী ও কেন প্রয়োজন?</div>
        
        <h4 class="sub-title">খোয়া তৈরির উৎস:</h4>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="fc-icon">🔴</div>
            <h5>প্রত্যাখ্যাত ইট</h5>
            <p>মানহীন বা নষ্ট হয়ে যাওয়া ইট থেকে খোয়া তৈরি করা হয়।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">🟤</div>
            <h5>ঝামা ইট</h5>
            <p>অতিরিক্ত পোড়া ইট ভেঙে খোয়া তৈরি করা হয়।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">🟠</div>
            <h5>অতিরিক্ত ইট</h5>
            <p>স্টক বেশি থাকলে ভেঙে খোয়া তৈরি করা যায়।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">💰</div>
            <h5>অতিরিক্ত আয়</h5>
            <p>খোয়া বিক্রি করে অতিরিক্ত আয় করা যায়।</p>
          </div>
        </div>

        <div class="info-box success">
          <div class="info-box-title">✅ খোয়া উৎপাদনের সুবিধা</div>
          <ul class="bullet-list">
            <li>বর্জ্য ইটের পুনর্ব্যবহার হয়</li>
            <li>পরিবেশ দূষণ কমে</li>
            <li>অতিরিক্ত আয়ের উৎস তৈরি হয়</li>
            <li>রাস্তাঘাটের কাজে লাগে</li>
            <li>নির্মাণ খরচ কমে</li>
          </ul>
        </div>

        <h4 class="sub-title">CFT কী?</h4>
        <div class="info-box note">
          <div class="info-box-title">📏 পরিমাপ একক</div>
          <p><strong>CFT = Cubic Feet (ঘনফুট)</strong>। খোয়ার পরিমাণ ঘনফুটে পরিমাপ করা হয়।</p>
          <p><strong>১ CFT</strong> = ১ ঘনফুট = ১২" × ১২" × ১২" আয়তন</p>
        </div>
      </div>

      <div class="section" id="sec-পরিসংখ্যান-কার্ড">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <p>পেজের উপরে চারটি সারসংক্ষেপ কার্ড থাকে:</p>
        
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

        <h4 class="sub-title">কার্ডের ব্যাখ্যা:</h4>
        <table class="doc-table">
          <tr><th>কার্ড</th><th>কী বোঝায়</th><th>কীভাবে গণনা হয়</th></tr>
          <tr><td>বর্তমান স্টক</td><td>বর্তমানে গুদামে মজুদ খোয়ার পরিমাণ</td><td>মোট উৎপাদিত - মোট বিক্রিত</td></tr>
          <tr><td>মোট উৎপাদিত</td><td>এ পর্যন্ত তৈরি হওয়া মোট খোয়া</td><td>সব খোয়া রেকর্ডের যোগফল</td></tr>
          <tr><td>মোট বিক্রিত</td><td>এ পর্যন্ত বিক্রি হওয়া খোয়া</td><td>সব বিক্রয় রেকর্ডের যোগফল</td></tr>
          <tr><td>স্টক লেভেল</td><td>স্টকের শতকরা হার</td><td>(বর্তমান স্টক / মোট উৎপাদিত) × ১০০</td></tr>
        </table>
      </div>

      <div class="section" id="sec-নতুন-খোয়া-রেকর্ড">
        <div class="section-title">নতুন খোয়া রেকর্ড - ধাপে ধাপে</div>
        <ol class="steps">
          <li>পেজের উপরের ডানদিকে <strong style="color:var(--primary)">"+ নতুন খোয়া রেকর্ড"</strong> (বেগুনি বাটন) এ ক্লিক করুন।</li>
          <li>খুলে আসা পপ-আপ ডায়ালগে <strong>উৎপাদিত খোয়া (CFT)</strong> লিখুন — এটি বাধ্যতামূলক। (যেমন: ২৫০০.৫০)</li>
          <li><strong>খোয়া তৈরিতে ভাঙা ইট</strong> ড্রপডাউন থেকে ইটের ধরন নির্বাচন করুন — এটি বাধ্যতামূলক।</li>
          <li><strong>ভাঙা ইটের সংখ্যা</strong> লিখুন — কতটি ইট ভাঙা হয়েছে (ঐচ্ছিক)।</li>
          <li><strong>তারিখ</strong> নির্বাচন করুন — ডিফল্ট আজকের তারিখ।</li>
          <li><strong>নোট</strong> লিখুন — কেন ইট ভাঙা হয়েছে, কোন ব্যাচ থেকে ইত্যাদি (ঐচ্ছিক)।</li>
          <li><strong>"রেকর্ড করুন"</strong> বাটনে ক্লিক করুন।</li>
          <li>সফল হলে সবুজ রঙের বার্তা দেখাবে এবং ডায়ালগ বন্ধ হয়ে যাবে।</li>
        </ol>

        <div class="info-box success">
          <div class="info-box-title">✅ সফলতা বার্তা</div>
          সঠিকভাবে রেকর্ড করলে <strong>"Khoa created successfully"</strong> সবুজ বার্তা দেখাবে।
        </div>

        <div class="info-box warning">
          <div class="info-box-title">⚠️ মনে রাখবেন</div>
          <ul class="bullet-list">
            <li>উৎপাদিত খোয়া ০ বা খালি রাখা যাবে না</li>
            <li>ইটের ধরন নির্বাচন না করলে লাল এরর দেখাবে</li>
            <li>ভাঙা ইটের সংখ্যা ঋণাত্মক হতে পারবে না</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">♻️ খোয়া উৎপাদন রেকর্ড</div>
          
          <div class="field-group">
            <div class="field-group-title">📦 মৌলিক তথ্য</div>
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
            <div class="form-row" style="margin-top:10px">
              <div class="form-field">
                <label>ভাঙা ইটের সংখ্যা</label>
                <div class="field-mock">100</div>
                <div style="font-size:12px;color:var(--text-muted);margin-top:4px">কতটি ইট ভেঙে খোয়া তৈরি হয়েছে (ঐচ্ছিক)</div>
              </div>
              <div class="form-field">
                <label>তারিখ</label>
                <div class="field-mock active">০৪ মার্চ, ২০২৬</div>
              </div>
            </div>
            <div class="form-row single" style="margin-top:10px">
              <div class="form-field">
                <label>নোট (ঐচ্ছিক)</label>
                <div class="field-mock" style="height:80px;padding-top:8px">উদাহরণ: ব্যাচ #২২ থেকে প্রত্যাখ্যাত ইট ও ঝামা থেকে তৈরি</div>
              </div>
            </div>
          </div>

          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">রেকর্ড করুন</button>
          </div>
        </div>

        <table class="doc-table">
          <tr><th>ফিল্ড</th><th>বিবরণ</th><th>বাধ্যতামূলক</th><th>টাইপ</th></tr>
          <tr><td>উৎপাদিত খোয়া (CFT)</td><td>ঘনফুটে উৎপাদিত খোয়ার পরিমাণ</td><td><span class="badge badge-red">হ্যাঁ</span></td><td>দশমিক সংখ্যা</td></tr>
          <tr><td>খোয়া তৈরিতে ভাঙা ইট</td><td>কোন ধরনের ইট ভেঙে খোয়া তৈরি হয়েছে</td><td><span class="badge badge-red">হ্যাঁ</span></td><td>ড্রপডাউন</td></tr>
          <tr><td>ভাঙা ইটের সংখ্যা</td><td>কতটি ইট ভাঙা হয়েছে</td><td><span class="badge badge-green">না</span></td><td>সংখ্যা</td></tr>
          <tr><td>তারিখ</td><td>খোয়া তৈরির তারিখ</td><td><span class="badge badge-red">হ্যাঁ</span></td><td>ডেট পিকার</td></tr>
          <tr><td>নোট</td><td>অতিরিক্ত তথ্য বা মন্তব্য</td><td><span class="badge badge-green">না</span></td><td>টেক্সট</td></tr>
        </table>
      </div>

      <div class="section" id="sec-প্রতিটি-ফিল্ডের-বিস্তারিত">
        <div class="section-title">প্রতিটি ফিল্ডের বিস্তারিত ব্যাখ্যা</div>

        <h4 class="sub-title">১. উৎপাদিত খোয়া (CFT) ⭐</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী লিখবেন</div>
          <p>ঘনফুটে উৎপাদিত খোয়ার মোট পরিমাণ লিখুন।</p>
          <p><strong>উদাহরণ:</strong> ২৫০০.৫০, ১০০০, ৫০০.২৫</p>
        </div>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ ভ্যালিডেশন</div>
          <ul class="bullet-list">
            <li>অবশ্যই লিখতে হবে — না লিখলে লাল এরর দেখাবে</li>
            <li>০ বা খালি রাখা যাবে না</li>
            <li>ঋণাত্মক সংখ্যা দেওয়া যাবে না</li>
            <li>দশমিক সংখ্যা দেওয়া যাবে (যেমন: ২৫০০.৫০)</li>
          </ul>
        </div>

        <h4 class="sub-title">২. খোয়া তৈরিতে ভাঙা ইট ⭐</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী করবেন</div>
          <p>ড্রপডাউন থেকে একটি ইটের ধরন নির্বাচন করুন। শুধু সক্রিয় ইটের ধরন দেখাবে।</p>
          <p><strong>উদাহরণ:</strong> প্রথম শ্রেণি, দ্বিতীয় শ্রেণি, ঝামা ইট</p>
        </div>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ ভ্যালিডেশন</div>
          <ul class="bullet-list">
            <li>অবশ্যই একটি ইটের ধরন নির্বাচন করতে হবে</li>
            <li>নিষ্ক্রিয় ইটের ধরন ড্রপডাউনে দেখা যাবে না</li>
            <li>ইটের ধরন না থাকলে প্রথমে ইটের ধরন তৈরি করুন</li>
          </ul>
        </div>

        <h4 class="sub-title">৩. ভাঙা ইটের সংখ্যা (ঐচ্ছিক)</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী লিখবেন</div>
          <p>কতটি ইট ভেঙে খোয়া তৈরি হয়েছে তা লিখুন। এটি ঐচ্ছিক।</p>
          <p><strong>উদাহরণ:</strong> ১০০, ৫০, ২০০</p>
        </div>

        <h4 class="sub-title">৪. তারিখ</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী করবেন</div>
          <p>খোয়া তৈরির তারিখ নির্বাচন করুন। ডিফল্ট আজকের তারিখ থাকে।</p>
        </div>

        <h4 class="sub-title">৫. নোট (ঐচ্ছিক)</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী লিখবেন</div>
          <p>বিশেষ তথ্য বা মন্তব্য লিখুন।</p>
          <p><strong>উদাহরণ:</strong> "ব্যাচ #২২ থেকে প্রত্যাখ্যাত ইট ও ঝামা থেকে তৈরি", "বৃষ্টির কারণে নষ্ট হওয়া ইট"</p>
        </div>
      </div>

      <div class="section" id="sec-খোয়া-ইনভেন্টরি">
        <div class="section-title">খোয়া ইনভেন্টরি</div>
        <p>খোয়া তালিকার উপরে ইনভেন্টরি সারসংক্ষেপ দেখা যাবে:</p>
        
        <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:16px;margin:16px 0">
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;text-align:center">
            <div style="background:white;padding:12px;border-radius:8px">
              <div style="font-size:12px;color:var(--text-muted);margin-bottom:4px">বর্তমান স্টক</div>
              <div style="font-size:24px;font-weight:700;color:var(--success)">১৫০.০০ CFT</div>
            </div>
            <div style="background:white;padding:12px;border-radius:8px">
              <div style="font-size:12px;color:var(--text-muted);margin-bottom:4px">মোট উৎপাদিত</div>
              <div style="font-size:24px;font-weight:700;color:var(--info)">৫০০.০০ CFT</div>
            </div>
            <div style="background:white;padding:12px;border-radius:8px">
              <div style="font-size:12px;color:var(--text-muted);margin-bottom:4px">মোট বিক্রিত</div>
              <div style="font-size:24px;font-weight:700;color:var(--danger)">৩৫০.০০ CFT</div>
            </div>
            <div style="background:white;padding:12px;border-radius:8px">
              <div style="font-size:12px;color:var(--text-muted);margin-bottom:4px">স্টক লেভেল</div>
              <div style="font-size:24px;font-weight:700;color:var(--warning)">৩০.০%</div>
            </div>
          </div>
        </div>

        <div class="info-box note">
          <div class="info-box-title">💡 ইনভেন্টরি কার্ডের ব্যাখ্যা</div>
          <ul class="bullet-list">
            <li><strong>বর্তমান স্টক:</strong> গুদামে এখন কত খোয়া মজুদ আছে</li>
            <li><strong>মোট উৎপাদিত:</strong> এ পর্যন্ত মোট কত খোয়া তৈরি হয়েছে</li>
            <li><strong>মোট বিক্রিত:</strong> এ পর্যন্ত মোট কত খোয়া বিক্রি হয়েছে</li>
            <li><strong>স্টক লেভেল:</strong> মোট উৎপাদনের কত শতাংশ স্টকে আছে</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-তালিকা-ব্যবস্থাপনা">
        <div class="section-title">তালিকা ব্যবস্থাপনা</div>
        <p>মূল তালিকায় সব খোয়া রেকর্ড দেখা যাবে। কলামগুলো:</p>
        
        <div class="table-mock">
          <div class="table-mock-header" style="grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr">
            <span>তারিখ</span><span>খোয়া (CFT)</span><span>ভাঙা ইট</span><span>ইটের ধরন</span><span>নোট</span><span>কার্যক্রম</span>
          </div>
          <div class="table-mock-row" style="grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr">
            <div>০৪ মার্চ, ২০২৬</div>
            <div style="color:var(--success);font-weight:600">২,৫০০.৫০</div>
            <div>১০০</div>
            <div><span class="badge badge-red">প্রথম শ্রেণি</span></div>
            <div style="font-size:12px;color:var(--text-muted)">ব্যাচ #২২ থেকে...</div>
            <div><span style="font-size:18px;cursor:pointer">⋯</span></div>
          </div>
        </div>

        <h4 class="sub-title">কলামের বিবরণ:</h4>
        <table class="doc-table">
          <tr><th>কলাম</th><th>কী দেখাবে</th></tr>
          <tr><td>তারিখ</td><td>খোয়া তৈরির তারিখ</td></tr>
          <tr><td>খোয়া (CFT)</td><td>ঘনফুটে উৎপাদিত খোয়ার পরিমাণ (সবুজ রঙে)</td></tr>
          <tr><td>ভাঙা ইট</td><td>কতটি ইট ভাঙা হয়েছে</td></tr>
          <tr><td>ইটের ধরন</td><td>কোন ধরনের ইট ব্যবহার করা হয়েছে (ব্যাজ আকারে)</td></tr>
          <tr><td>নোট</td><td>অতিরিক্ত মন্তব্য</td></tr>
          <tr><td>কার্যক্রম</td><td>⋯ মেনু — এডিট, মুছে ফেলা</td></tr>
        </table>

        <div class="info-box success">
          <div class="info-box-title">✅ সার্চ ও ফিল্টার</div>
          <ul class="bullet-list">
            <li><strong>সার্চ:</strong> তারিখ বা নোট দিয়ে খুঁজুন</li>
            <li><strong>ফিল্টার:</strong> তারিখ পরিসর নির্বাচন করুন</li>
            <li><strong>এক্সপোর্ট:</strong> Excel/PDF ফরম্যাটে ডাউনলোড করুন</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-সম্পাদনা">
        <div class="section-title">খোয়া রেকর্ড সম্পাদনা</div>
        <ol class="steps">
          <li>তালিকায় যেই খোয়া রেকর্ডটি সম্পাদনা করতে চান, সেই সারির <strong>⋯</strong> মেনুতে ক্লিক করুন।</li>
          <li><strong>✏️ Edit</strong> সিলেক্ট করুন।</li>
          <li>এডিট ডায়ালগ খুলবে — সব ফিল্ডে আগের মান আগে থেকেই পূরণ করা থাকবে।</li>
          <li>যে ফিল্ডটি পরিবর্তন করতে চান, সেই ফিল্ডে ক্লিক করে নতুন মান লিখুন।</li>
          <li>সব পরিবর্তন করার পর <strong>"আপডেট"</strong> বাটনে ক্লিক করুন।</li>
          <li>সফল হলে সবুজ বার্তা দেখাবে: <strong>"Khoa updated successfully"</strong></li>
        </ol>

        <div class="info-box warning">
          <div class="info-box-title">⚠️ গুরুত্বপূর্ণ</div>
          <ul class="bullet-list">
            <li>তারিখ পরিবর্তন করা যাবে না</li>
            <li>ইটের ধরন পরিবর্তন করা যাবে না</li>
            <li>শুধু পরিমাণ ও নোট এডিট করা যাবে</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-মুছে-ফেলা">
        <div class="section-title">খোয়া রেকর্ড মুছে ফেলা</div>
        <ol class="steps">
          <li>তালিকায় যেই খোয়া রেকর্ডটি মুছে ফেলতে চান, সেই সারির <strong>⋯</strong> মেনুতে ক্লিক করুন।</li>
          <li><strong>🗑️ Delete</strong> সিলেক্ট করুন।</li>
          <li>কনফার্মেশন ডায়ালগ খুলবে।</li>
          <li><strong>"হ্যাঁ, মুছে ফেলুন"</strong> এ ক্লিক করুন।</li>
        </ol>

        <div class="info-box warning">
          <div class="info-box-title">⚠️ সতর্কতা</div>
          <ul class="bullet-list">
            <li>খোয়া রেকর্ড মুছে ফেললে ডেটা স্থায়ীভাবে মুছে যাবে</li>
            <li>এই কাজটি পূর্বাবস্থায় ফেরানো যাবে না</li>
            <li>নিশ্চিত না হলে মুছবেন না</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-সাধারণ-সমস্যা">
        <div class="section-title">সাধারণ সমস্যা ও সমাধান</div>
        
        <h4 class="sub-title">সমস্যা ১: "ইটের ধরন নির্বাচন করুন"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"Brick type selection is required."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>একটি সক্রিয় ইটের ধরন নির্বাচন করুন</li>
            <li>কোনো সক্রিয় ইটের ধরন না থাকলে প্রথমে ইটের ধরন তৈরি করুন</li>
            <li>ইটের ধরনের স্ট্যাটাস চেক করুন (সক্রিয় কিনা)</li>
          </ul>
        </div>

        <h4 class="sub-title">সমস্যা ২: "উৎপাদিত খোয়া ০ হতে পারবে না"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"Khoa output must be greater than 0."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>সঠিক পরিমাপ লিখুন</li>
            <li>০ বা খালি রাখা যাবে না</li>
            <li>ঋণাত্মক সংখ্যা দেওয়া যাবে না</li>
          </ul>
        </div>

        <h4 class="sub-title">সমস্যা ৩: "ভাঙা ইটের সংখ্যা ঋণাত্মক হতে পারবে না"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"Number of bricks must be non-negative."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>সঠিক সংখ্যা লিখুন</li>
            <li>ঋণাত্মক সংখ্যা দেওয়া যাবে না</li>
            <li>খালি রাখলে ০ ধরে নেওয়া হবে</li>
          </ul>
        </div>
      </div>
    `
  }

};
