// pages/production.js
// মডিউল: উৎপাদন ব্যবস্থাপনা
// পেজ: kiln-type, kiln-list, batch, output, brick-type, khowa

var PAGES_PRODUCTION = {

  'kiln-type': {
    title: 'চুল্লির ধরন',
    sections: ['পেজ পরিচিতি', 'কেন প্রথমে চুল্লির ধরন তৈরি করবেন', 'পরিসংখ্যান কার্ড', 'নতুন চুল্লির ধরন তৈরি - ধাপে ধাপে', 'ফর্মের বিবরণ', 'প্রতিটি ফিল্ডের বিস্তারিত', 'তালিকা ব্যবস্থাপনা', 'সম্পাদনা', 'সক্রিয়-নিষ্ক্রিয়', 'সার্চ ও ফিল্টার', 'সাধারণ সমস্যা'],
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
        <p>এই পেজে ইটের ভাটার চুল্লির বিভিন্ন ক্যাটাগরি ও শ্রেণিবিভাগ নির্ধারণ করা হয়। প্রতিটি চুল্লির ধরনের জন্য আলাদা নাম, কোড, আইকন এবং স্ট্যাটাস সেট করা যায়। পেজের উপরে চারটি সারসংক্ষেপ কার্ড এবং নিচে চুল্লির ধরনের তালিকা দেখা যায়।</p>
        
        <div class="info-box note">
          <div class="info-box-title">💡 কেন চুল্লির ধরন প্রয়োজন?</div>
          <ul class="bullet-list">
            <li>বিভিন্ন ধরনের চুল্লি (হফম্যান, জিগজ্যাগ, টানেল) আলাদাভাবে শনাক্ত করা যায়</li>
            <li>কোন ধরনের চুল্লিতে কত উৎপাদন হয় তা বিশ্লেষণ করা যায়</li>
            <li>চুল্লির ধরন অনুযায়ী খরচ তুলনা করা যায়</li>
            <li>নতুন চুল্লি তৈরির সময় ধরন নির্বাচন করা যায়</li>
          </ul>
        </div>

        <div class="info-box warning" style="border-left-color:var(--danger);background:#fef2f2">
          <div class="info-box-title" style="color:var(--danger)">⚠️ গুরুত্বপূর্ণ - প্রথমে এটি তৈরি করুন</div>
          <p><strong>চুল্লির ধরন</strong> হলো উৎপাদন মডিউলের <strong>প্রথম ধাপ</strong>। এটি না তৈরি করলে:</p>
          <ul class="bullet-list">
            <li>❌ চুল্লি তালিকায় নতুন চুল্লি তৈরি করা যাবে না</li>
            <li>❌ ব্যাচ তালিকায় নতুন ব্যাচ যোগ করা যাবে না</li>
            <li>❌ আউটপুট এন্ট্রি দেওয়া যাবে না</li>
          </ul>
          <p style="margin-top:10px;font-weight:600;color:var(--danger)">তাই সফটওয়্যার ব্যবহার শুরু করার আগে অন্তত একটি চুল্লির ধরন তৈরি করুন।</p>
        </div>
      </div>

      <div class="section" id="sec-পরিসংখ্যান-কার্ড">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <p>পেজের উপরে চারটি সারসংক্ষেপ কার্ড থাকে যা সামগ্রিক অবস্থা দেখায়:</p>
        
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

        <h4 class="sub-title">কার্ডের ব্যাখ্যা:</h4>
        <table class="doc-table">
          <tr><th>কার্ড</th><th>কী বোঝায়</th><th>কীভাবে গণনা হয়</th></tr>
          <tr><td>মোট ধরন</td><td>সিস্টেমে মোট কতটি চুল্লির ধরন তৈরি করা হয়েছে</td><td>সব চুল্লির ধরন গণনা</td></tr>
          <tr><td>সক্রিয় ধরন</td><td>বর্তমানে সক্রিয় আছে এমন চুল্লির ধরনের সংখ্যা</td><td>যেগুলোর স্ট্যাটাস চালু</td></tr>
          <tr><td>নিষ্ক্রিয় ধরন</td><td>বর্তমানে নিষ্ক্রিয় করা চুল্লির ধরনের সংখ্যা</td><td>যেগুলোর স্ট্যাটাস বন্ধ</td></tr>
          <tr><td>মোট চুল্লি</td><td>সব চুল্লির ধরনের অধীনে মোট কতটি চুল্লি তৈরি করা হয়েছে</td><td>প্রতিটি ধরনের চুল্লি সংখ্যা যোগফল</td></tr>
        </table>

        <div class="info-box note">
          <div class="info-box-title">💡 তথ্য</div>
          "মোট চুল্লি" হলো এই ধরনের অধীনে নিবন্ধিত সব চুল্লির সংখ্যা। এটি দেখে বোঝা যাবে কোন ধরনটি সবচেয়ে বেশি ব্যবহৃত হচ্ছে।
        </div>
      </div>

      <div class="section" id="sec-নতুন-চুল্লির-ধরন-তৈরি">
        <div class="section-title">নতুন চুল্লির ধরন তৈরি - ধাপে ধাপে</div>
        <p>পেজের উপরের ডানদিকে <strong>"+ চুল্লির ধরন তৈরি করুন"</strong> বাটনে ক্লিক করুন। একটি ডায়ালগ বক্স খুলবে।</p>
        
        <ol class="steps">
          <li>পেজের উপরের ডানদিকে <strong style="color:var(--primary)">"+ চুল্লির ধরন তৈরি করুন"</strong> (কমলা বাটন) এ ক্লিক করুন।</li>
          <li>খুলে আসা পপ-আপ ডায়ালগে <strong>নাম (বাংলা)</strong> লিখুন — এটি বাধ্যতামূলক। (যেমন: হফম্যান)</li>
          <li><strong>নাম (ইংরেজি)</strong> লিখুন — এটি বাধ্যতামূলক। (যেমন: Hoffman)</li>
          <li><strong>শর্ট কোড</strong> লিখুন — এটি বাধ্যতামূলক। শুধু বড় হাতের অক্ষর ও সংখ্যা ব্যবহার করুন। (যেমন: HOFF)</li>
          <li><strong>আইকন</strong> নির্বাচন করুন — চারটি আইকন থেকে যেকোনো একটি (🔥 Flame, 🏭 Factory, ⚙️ Cog, ⚡ Zap)।</li>
          <li><strong>সক্রিয় স্ট্যাটাস</strong> টগল সুইচ দিয়ে সক্রিয়/নিষ্ক্রিয় নির্বাচন করুন — ডিফল্টভাবে চালু থাকে।</li>
          <li><strong>বিবরণ</strong> লিখুন — চুল্লির ধরন সম্পর্কে সংক্ষিপ্ত বর্ণনা (ঐচ্ছিক)।</li>
          <li><strong>নোট</strong> লিখুন — অভ্যন্তরীণ মন্তব্য বা বিশেষ নির্দেশনা (ঐচ্ছিক)।</li>
          <li><strong>"তৈরি করুন"</strong> বাটনে ক্লিক করুন।</li>
          <li>সফল হলে সবুজ রঙের বার্তা দেখাবে এবং ডায়ালগ বন্ধ হয়ে যাবে।</li>
        </ol>

        <div class="info-box success">
          <div class="info-box-title">✅ সফলতা বার্তা</div>
          সঠিকভাবে তৈরি হলে <strong>"Furnace type created successfully"</strong> সবুজ বার্তা দেখাবে।
        </div>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">🔥 নতুন চুল্লির ধরন তৈরি করুন</div>
          
          <div class="field-group">
            <div class="field-group-title">📦 মৌলিক তথ্য</div>
            <div class="form-row single">
              <div class="form-field">
                <label>নাম (বাংলা) <span class="required">*</span></label>
                <div class="field-mock active">হফম্যান</div>
                <div style="font-size:12px;color:var(--text-muted);margin-top:4px">এটি ড্রপডাউনে ও ফর্মে ব্যবহার হবে</div>
              </div>
            </div>
            <div class="form-row single" style="margin-top:10px">
              <div class="form-field">
                <label>নাম (ইংরেজি) <span class="required">*</span></label>
                <div class="field-mock">Hoffman</div>
              </div>
            </div>
            <div class="form-row single" style="margin-top:10px">
              <div class="form-field">
                <label>শর্ট কোড <span class="required">*</span></label>
                <div class="field-mock">HOFF</div>
                <div style="font-size:12px;color:var(--text-muted);margin-top:4px">ℹ️ শুধু বড় হাতের অক্ষর ও সংখ্যা (A-Z, 0-9)</div>
              </div>
            </div>
          </div>

          <div class="field-group" style="margin-top:10px">
            <div class="field-group-title">🎨 আইকন নির্বাচন</div>
            <div style="display:flex;gap:10px;flex-wrap:wrap;padding:8px 0">
              <div style="border:2px solid var(--primary);background:var(--primary-light);border-radius:8px;padding:10px 16px;text-align:center;cursor:pointer">
                <div style="font-size:24px">🔥</div>
                <div style="font-size:12px;margin-top:4px">Flame</div>
              </div>
              <div style="border:2px solid var(--border);border-radius:8px;padding:10px 16px;text-align:center;cursor:pointer">
                <div style="font-size:24px">🏭</div>
                <div style="font-size:12px;margin-top:4px">Factory</div>
              </div>
              <div style="border:2px solid var(--border);border-radius:8px;padding:10px 16px;text-align:center;cursor:pointer">
                <div style="font-size:24px">⚙️</div>
                <div style="font-size:12px;margin-top:4px">Cog</div>
              </div>
              <div style="border:2px solid var(--border);border-radius:8px;padding:10px 16px;text-align:center;cursor:pointer">
                <div style="font-size:24px">⚡</div>
                <div style="font-size:12px;margin-top:4px">Zap</div>
              </div>
            </div>
          </div>

          <div style="display:flex;justify-content:space-between;align-items:center;background:var(--bg);border-radius:8px;padding:12px 16px;margin-top:12px">
            <div>
              <div style="font-weight:600;font-size:14px">সক্রিয় স্ট্যাটাস</div>
              <div style="font-size:12px;color:var(--text-muted)">নিষ্ক্রিয় ধরন ড্রপডাউনে দেখা যাবে না</div>
            </div>
            <div style="width:44px;height:24px;background:var(--primary);border-radius:12px;position:relative">
              <div style="width:20px;height:20px;background:white;border-radius:50%;position:absolute;right:2px;top:2px"></div>
            </div>
          </div>

          <div class="field-group" style="margin-top:12px">
            <div class="field-group-title">📝 বিবরণ (ঐচ্ছিক)</div>
            <div class="form-field">
              <div class="field-mock" style="height:80px;padding-top:8px">এই চুল্লিটি ঐতিহ্যবাহী পদ্ধতিতে কয়লা দিয়ে চালানো হয়...</div>
            </div>
          </div>

          <div class="field-group" style="margin-top:12px">
            <div class="field-group-title">📌 নোট (ঐচ্ছিক)</div>
            <div class="form-field">
              <div class="field-mock" style="height:60px;padding-top:8px">রক্ষণাবেক্ষণের জন্য বিশেষ যত্ন প্রয়োজন...</div>
            </div>
          </div>

          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">তৈরি করুন</button>
          </div>
        </div>

        <table class="doc-table">
          <tr><th>ফিল্ড</th><th>বিবরণ</th><th>বাধ্যতামূলক</th><th>সর্বোচ্চ</th></tr>
          <tr><td>নাম (বাংলা)</td><td>চুল্লির ধরনের বাংলা নাম — ড্রপডাউনে এই নামে দেখাবে</td><td><span class="badge badge-red">হ্যাঁ</span></td><td>১০০ অক্ষর</td></tr>
          <tr><td>নাম (ইংরেজি)</td><td>চুল্লির ধরনের ইংরেজি নাম</td><td><span class="badge badge-red">হ্যাঁ</span></td><td>১০০ অক্ষর</td></tr>
          <tr><td>শর্ট কোড</td><td>সংক্ষিপ্ত কোড — শুধু বড় হাতের অক্ষর ও সংখ্যা (A-Z, 0-9, -, _)</td><td><span class="badge badge-red">হ্যাঁ</span></td><td>২০ অক্ষর</td></tr>
          <tr><td>আইকন</td><td>ভিজ্যুয়াল পরিচিতির জন্য — Flame/Factory/Cog/Zap</td><td><span class="badge badge-green">না</span></td><td>১টি নির্বাচন</td></tr>
          <tr><td>সক্রিয় স্ট্যাটাস</td><td>চালু = ড্রপডাউনে দেখায়, বন্ধ = লুকানো</td><td><span class="badge badge-green">না</span></td><td>ডিফল্ট: চালু</td></tr>
          <tr><td>বিবরণ</td><td>চুল্লির ধরন সম্পর্কে সংক্ষিপ্ত বর্ণনা</td><td><span class="badge badge-green">না</span></td><td>১০০০ অক্ষর</td></tr>
          <tr><td>নোট</td><td>অভ্যন্তরীণ মন্তব্য বা বিশেষ নির্দেশনা</td><td><span class="badge badge-green">না</span></td><td>২০০০ অক্ষর</td></tr>
        </table>
      </div>

      <div class="section" id="sec-প্রতিটি-ফিল্ডের-বিস্তারিত">
        <div class="section-title">প্রতিটি ফিল্ডের বিস্তারিত ব্যাখ্যা</div>

        <h4 class="sub-title">১. নাম (বাংলা) ⭐</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী লিখবেন</div>
          <p>চুল্লির ধরনের বাংলা নাম। এটি ড্রপডাউন মেনু এবং সব জায়গায় দেখা যাবে।</p>
          <p><strong>উদাহরণ:</strong> হফম্যান, জিগজ্যাগ, টানেল, সেমি-অটোমেটিক</p>
        </div>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ ভ্যালিডেশন</div>
          <ul class="bullet-list">
            <li>অবশ্যই লিখতে হবে — না লিখলে লাল এরর দেখাবে</li>
            <li>সর্বোচ্চ ১০০ অক্ষর লেখা যাবে</li>
            <li>একই নামে দুটি ধরন থাকতে পারবে না — অনন্য হতে হবে</li>
          </ul>
        </div>

        <h4 class="sub-title">২. নাম (ইংরেজি) ⭐</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী লিখবেন</div>
          <p>চুল্লির ধরনের ইংরেজি নাম। ইংরেজি ভার্সনে এটি দেখাবে।</p>
          <p><strong>উদাহরণ:</strong> Hoffman, Zigzag, Tunnel, Semi-Automatic</p>
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
          <p>চুল্লির ধরনের সংক্ষিপ্ত কোড। এটি রিপোর্ট ও ইনভয়েসে ব্যবহৃত হবে।</p>
          <p><strong>উদাহরণ:</strong> HOFF, ZIGZ, TUNL, SEMI, AUTO</p>
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
          কোডটি সহজ ও মনে রাখার মতো করুন। সাধারণত নামের প্রথম ৩-৪টি অক্ষর ব্যবহার করুন। যেমন: Hoffman → HOFF
        </div>

        <h4 class="sub-title">৪. আইকন</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী করবেন</div>
          <p>চারটি আইকন থেকে যেকোনো একটি নির্বাচন করুন। এটি ভিজ্যুয়াল পরিচিতির জন্য।</p>
        </div>
        <table class="doc-table">
          <tr><th>আইকন</th><th>নাম</th><th>কখন ব্যবহার করবেন</th></tr>
          <tr><td>🔥</td><td>Flame</td><td>ঐতিহ্যবাহী চুল্লির জন্য</td></tr>
          <tr><td>🏭</td><td>Factory</td><td>বড় কারখানার জন্য</td></tr>
          <tr><td>⚙️</td><td>Cog</td><td>অটোমেটেড চুল্লির জন্য</td></tr>
          <tr><td>⚡</td><td>Zap</td><td>দ্রুত/আধুনিক চুল্লির জন্য</td></tr>
        </table>
        <div class="info-box note">
          <div class="info-box-title">💡 ডিফল্ট</div>
          কোনো আইকন নির্বাচন না করলে ডিফল্টভাবে "Flame" (🔥) নির্বাচিত থাকে।
        </div>

        <h4 class="sub-title">৫. সক্রিয় স্ট্যাটাস</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী করবেন</div>
          <p>টগল সুইচ দিয়ে সক্রিয়/নিষ্ক্রিয় নির্বাচন করুন।</p>
        </div>
        <table class="doc-table">
          <tr><th>স্ট্যাটাস</th><th>কখন ব্যবহার করবেন</th><th>প্রভাব</th></tr>
          <tr><td>✅ সক্রিয় (চালু)</td><td>নতুন ধরন তৈরি করলে সবসময় চালু রাখুন</td><td>ড্রপডাউনে দেখা যাবে</td></tr>
          <tr><td>⚫ নিষ্ক্রিয় (বন্ধ)</td><td>সাময়িকভাবে ব্যবহার বন্ধ রাখতে চাইলে</td><td>ড্রপডাউনে দেখা যাবে না</td></tr>
        </table>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ গুরুত্বপূর্ণ</div>
          নিষ্ক্রিয় করলে বিদ্যমান চুল্লি মুছে যাবে না, শুধু নতুন চুল্লি তৈরির সময় ড্রপডাউনে আর দেখা যাবে না।
        </div>

        <h4 class="sub-title">৬. বিবরণ (ঐচ্ছিক)</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী লিখবেন</div>
          <p>চুল্লির ধরন সম্পর্কে সংক্ষিপ্ত বর্ণনা।</p>
          <p><strong>উদাহরণ:</strong> "এই চুল্লিটি ঐতিহ্যবাহী পদ্ধতিতে কয়লা দিয়ে চালানো হয়। এতে তাপমাত্রা নিয়ন্ত্রণ ম্যানুয়ালি করতে হয়। দৈনিক গড় উৎপাদন ৫০,০০০ ইট।"</p>
        </div>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ সীমা</div>
          সর্বোচ্চ ১০০০ অক্ষর লেখা যাবে।
        </div>

        <h4 class="sub-title">৭. নোট (ঐচ্ছিক)</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী লিখবেন</div>
          <p>অভ্যন্তরীণ মন্তব্য বা বিশেষ নির্দেশনা।</p>
          <p><strong>উদাহরণ:</strong> "রক্ষণাবেক্ষণের জন্য বিশেষ যত্ন প্রয়োজন। প্রতি ৬ মাসে চিমনি পরিষ্কার করতে হয়। ম্যানেজার: করিম সাহেব (০১৭১১১১১১১১)"</p>
        </div>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ সীমা</div>
          সর্বোচ্চ ২০০০ অক্ষর লেখা যাবে।
        </div>
      </div>

      <div class="section" id="sec-তালিকা-ব্যবস্থাপনা">
        <div class="section-title">তালিকা ব্যবস্থাপনা</div>
        <p>মূল তালিকায় সব চুল্লির ধরন দেখা যাবে। কলামগুলো:</p>
        
        <div class="table-mock">
          <div class="table-mock-header" style="grid-template-columns:2fr 1fr 1fr 1fr 1fr">
            <span>চুল্লির ধরন</span><span>শর্ট কোড</span><span>চুল্লি</span><span>স্ট্যাটাস</span><span>কার্যক্রম</span>
          </div>
          <div class="table-mock-row" style="grid-template-columns:2fr 1fr 1fr 1fr 1fr">
            <div>
              <div style="display:flex;align-items:center;gap:10px">
                <div style="font-size:20px">🔥</div>
                <div>
                  <div style="font-weight:600">হফম্যান</div>
                  <div style="font-size:12px;color:var(--text-muted)">Hoffman</div>
                </div>
              </div>
            </div>
            <div><span class="badge badge-blue" style="font-family:monospace">HOFF</span></div>
            <div><div style="display:flex;align-items:center;gap:6px"><span>🏭</span><span>৩</span></div></div>
            <div><span class="badge badge-green">✅ সক্রিয়</span></div>
            <div><span style="font-size:18px;cursor:pointer">⋯</span></div>
          </div>
          <div class="table-mock-row" style="grid-template-columns:2fr 1fr 1fr 1fr 1fr">
            <div>
              <div style="display:flex;align-items:center;gap:10px">
                <div style="font-size:20px">🏭</div>
                <div>
                  <div style="font-weight:600">জিগজ্যাগ</div>
                  <div style="font-size:12px;color:var(--text-muted)">Zigzag</div>
                </div>
              </div>
            </div>
            <div><span class="badge badge-blue" style="font-family:monospace">ZIGZ</span></div>
            <div><div style="display:flex;align-items:center;gap:6px"><span>🏭</span><span>২</span></div></div>
            <div><span class="badge badge-green">✅ সক্রিয়</span></div>
            <div><span style="font-size:18px;cursor:pointer">⋯</span></div>
          </div>
        </div>

        <h4 class="sub-title">কলামের বিবরণ:</h4>
        <table class="doc-table">
          <tr><th>কলাম</th><th>কী দেখাবে</th></tr>
          <tr><td>চুল্লির ধরন</td><td>নির্বাচিত আইকন + বাংলা নাম (মোটা ফন্টে) + ইংরেজি নাম (ছোট ফন্টে)</td></tr>
          <tr><td>শর্ট কোড</td><td>চুল্লির ধরনের সংক্ষিপ্ত কোড (বক্সে ঘেরা)</td></tr>
          <tr><td>চুল্লি</td><td>এই ধরনের অধীনে কতটি চুল্লি তৈরি করা হয়েছে (🏭 আইকন সহ)</td></tr>
          <tr><td>স্ট্যাটাস</td><td>সক্রিয় (সবুজ ব্যাজ) বা নিষ্ক্রিয় (ধূসর ব্যাজ)</td></tr>
          <tr><td>কার্যক্রম</td><td>তিন-বিন্দু মেনু (⋯) — এতে এডিট ও সক্রিয়/নিষ্ক্রিয় অপশন থাকে</td></tr>
        </table>

        <div class="info-box success">
          <div class="info-box-title">✅ সার্চ ও ফিল্টার</div>
          <ul class="bullet-list">
            <li><strong>সার্চ:</strong> চুল্লির নাম বা কোড দিয়ে তালিকা ফিল্টার করুন</li>
            <li><strong>ফিল্টার:</strong> উপরের ডানদিকে "সব" ড্রপডাউন থেকে সক্রিয়/নিষ্ক্রিয় আলাদা করে দেখুন</li>
            <li><strong>কার্যক্রম:</strong> প্রতিটি সারিতে ⋯ মেনুতে ক্লিক করলে এডিট ও সক্রিয়/নিষ্ক্রিয় অপশন পাবেন</li>
            <li><strong>পেজিনেশন:</strong> নিচে পেজ নম্বর দিয়ে আরো রেকর্ড দেখুন (১০/২৫/৫০/১০০ প্রতি পেজ)</li>
          </ul>
        </div>

        <div class="info-box warning">
          <div class="info-box-title">⚠️ সতর্কতা</div>
          কোনো ধরন মুছে ফেলার আগে নিশ্চিত করুন যে এটি কোনো চুল্লিতে ব্যবহৃত হচ্ছে না। বর্তমানে মুছে ফেলার সুবিধা নেই — শুধু নিষ্ক্রিয় করা যায়।
        </div>
      </div>

      <div class="section" id="sec-সম্পাদনা">
        <div class="section-title">চুল্লির ধরন সম্পাদনা (Edit) করা</div>
        <ol class="steps">
          <li>তালিকায় যেই চুল্লির ধরনটি সম্পাদনা করতে চান, সেই সারির শেষে <strong>⋯</strong> (তিন-বিন্দু) মেনুতে ক্লিক করুন।</li>
          <li>ড্রপডাউন মেনু থেকে <strong>✏️ Edit</strong> সিলেক্ট করুন।</li>
          <li>এডিট ডায়ালগ খুলবে — সব ফিল্ডে আগের মান (previous value) আগে থেকেই পূরণ করা থাকবে।</li>
          <li>যে ফিল্ডটি পরিবর্তন করতে চান, সেই ফিল্ডে ক্লিক করে নতুন মান লিখুন।</li>
          <li>সব পরিবর্তন করার পর নিচের <strong>"আপডেট"</strong> বাটনে ক্লিক করুন।</li>
          <li>সফল হলে সবুজ বার্তা দেখাবে: <strong>"Furnace type updated successfully"</strong></li>
          <li>ডায়ালগ বন্ধ হয়ে যাবে এবং তালিকায় পরিবর্তিত মান দেখা যাবে।</li>
        </ol>

        <div class="info-box warning">
          <div class="info-box-title">⚠️ গুরুত্বপূর্ণ</div>
          শর্ট কোড পরিবর্তন করলে তা রিপোর্টে প্রভাব ফেলতে পারে। তাই শর্ট কোড পরিবর্তন করতে সাবধানতা অবলম্বন করুন।
        </div>
      </div>

      <div class="section" id="sec-সক্রিয়-নিষ্ক্রিয়">
        <div class="section-title">সক্রিয়/নিষ্ক্রিয় করা</div>
        
        <h4 class="sub-title">পদ্ধতি ১: তালিকা থেকে দ্রুত টগল</h4>
        <ol class="steps">
          <li>তালিকায় যেই চুল্লির ধরনটি টগল করতে চান, সেই সারির <strong>⋯</strong> মেনুতে ক্লিক করুন।</li>
          <li><strong>⚡ Deactivate</strong> (যদি সক্রিয় থাকে) অথবা <strong>⚡ Activate</strong> (যদি নিষ্ক্রিয় থাকে) সিলেক্ট করুন।</li>
          <li>সাথে সাথে স্ট্যাটাস পরিবর্তন হবে এবং সবুজ বার্তা দেখাবে।</li>
        </ol>

        <h4 class="sub-title">পদ্ধতি ২: এডিট ডায়ালগ থেকে</h4>
        <ol class="steps">
          <li><strong>⋯</strong> মেনু → <strong>✏️ Edit</strong> এ ক্লিক করুন।</li>
          <li>এডিট ডায়ালগে <strong>Active Status</strong> টগল খুঁজুন।</li>
          <li>টগল সুইচে ক্লিক করে স্ট্যাটাস পরিবর্তন করুন।</li>
          <li><strong>"আপডেট"</strong> বাটনে ক্লিক করুন।</li>
        </ol>

        <div class="info-box note">
          <div class="info-box-title">💡 সক্রিয়/নিষ্ক্রিয় করার প্রভাব</div>
          <table class="doc-table">
            <tr><th>সক্রিয় থাকলে</th><th>নিষ্ক্রিয় করলে</th></tr>
            <tr><td>✅ ড্রপডাউনে দেখা যাবে</td><td>❌ ড্রপডাউনে আর দেখা যাবে না</td></tr>
            <tr><td>✅ নতুন চুল্লি তৈরির সময় নির্বাচন করা যাবে</td><td>❌ নতুন চুল্লি তৈরির সময় নির্বাচন করা যাবে না</td></tr>
            <tr><td>✅ রিপোর্টে অন্তর্ভুক্ত হবে</td><td>❌ শুধু পরিসংখ্যানে "নিষ্ক্রিয়" হিসেবে গণনা হবে</td></tr>
            <tr><td colspan="2" style="background:var(--bg-hover);font-weight:600">✅ বিদ্যমান চুল্লিগুলো অবিকৃত থাকবে (মুছে যাবে না)</td></tr>
          </table>
        </div>
      </div>

      <div class="section" id="sec-সার্চ-ও-ফিল্টার">
        <div class="section-title">সার্চ ও ফিল্টার ব্যবহার</div>
        
        <h4 class="sub-title">সার্চ বার</h4>
        <p>টেবিলের উপরে সার্চ বার থাকে:</p>
        <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px;margin:10px 0">
          <span style="color:var(--text-muted)">🔍 Search furnace types...</span>
        </div>
        <p><strong>কী দিয়ে সার্চ করবে:</strong> বাংলা নাম, ইংরেজি নাম, শর্ট কোড — এই তিনটি ফিল্ডে খুঁজবে।</p>

        <h4 class="sub-title">সার্চ উদাহরণ:</h4>
        <table class="doc-table">
          <tr><th>সার্চ টার্ম</th><th>ফলাফল</th></tr>
          <tr><td>হফম্যান</td><td>✅ হফম্যান (HOFF), হফম্যান টাইপ-১ (HOFF1)</td></tr>
          <tr><td>Tunnel</td><td>✅ Tunnel (TUNL)</td></tr>
          <tr><td>HOFF</td><td>✅ হফম্যান (HOFF), হফম্যান টাইপ-১ (HOFF1)</td></tr>
        </table>

        <h4 class="sub-title">ফিল্টার ড্রপডাউন</h4>
        <p>সার্চ বারের পাশে ফিল্টার ড্রপডাউন থাকে:</p>
        <table class="doc-table">
          <tr><th>অপশন</th><th>কী দেখাবে</th></tr>
          <tr><td><strong>All</strong></td><td>সব চুল্লির ধরন (সক্রিয় + নিষ্ক্রিয়)</td></tr>
          <tr><td><strong>Active</strong></td><td>শুধু সক্রিয় চুল্লির ধরন</td></tr>
          <tr><td><strong>Inactive</strong></td><td>শুধু নিষ্ক্রিয় চুল্লির ধরন</td></tr>
        </table>

        <div class="info-box tip">
          <div class="info-box-title">💜 টিপস</div>
          সার্চ ও ফিল্টার একসাথে ব্যবহার করতে পারেন। যেমন: "হফম্যান" সার্চ করে "Active" ফিল্টার দিলে শুধু সক্রিয় হফম্যান চুল্লির ধরন দেখাবে।
        </div>
      </div>

      <div class="section" id="sec-সাধারণ-সমস্যা">
        <div class="section-title">সাধারণ সমস্যা ও সমাধান</div>
        
        <h4 class="sub-title">সমস্যা ১: "এই নামে ইতিমধ্যে চুল্লির ধরন আছে"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"This furnace type already exists."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>ভিন্ন বাংলা নাম দিন</li>
            <li>অথবা নামের সাথে সংখ্যা যোগ করুন: হফম্যান → হফম্যান টাইপ-১, হফম্যান-২</li>
          </ul>
        </div>

        <h4 class="sub-title">সমস্যা ২: "এই কোডটি ইতিমধ্যে ব্যবহৃত হচ্ছে"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"This short code is already in use."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>ভিন্ন শর্ট কোড দিন</li>
            <li>সংখ্যা যোগ করুন: HOFF → HOFF1, HOFF-2</li>
          </ul>
        </div>

        <h4 class="sub-title">সমস্যা ৩: "শর্ট কোডে শুধু বড় অক্ষর ও সংখ্যা দেওয়া যাবে"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"Short code can only contain letters, numbers, dashes and underscores."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>শুধু বড় হাতের অক্ষর (A-Z) ব্যবহার করুন</li>
            <li>সংখ্যা (0-9) ব্যবহার করতে পারেন</li>
            <li>ড্যাশ (-) বা আন্ডারস্কোর (_) ব্যবহার করতে পারেন</li>
            <li>ছোট অক্ষর লিখলে অটোমেটিক বড় অক্ষরে পরিবর্তন হবে</li>
          </ul>
        </div>
        <table class="doc-table">
          <tr><th>গ্রহণযোগ্য ✅</th><th>অগ্রহণযোগ্য ❌</th></tr>
          <tr><td>HOFF, HOFF1, HOFF-1, HOFF_1</td><td>hoff (ছোট), Hoff (মিশ্রিত), H@FF (বিশেষ অক্ষর), HOFF.1 (ডট)</td></tr>
        </table>

        <h4 class="sub-title">সমস্যা ৪: ডায়ালগ বক্স বন্ধ হচ্ছে না</h4>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>পেজ রিফ্রেশ করুন (F5 চাপুন)</li>
            <li>ব্রাউজার ক্যাশে ক্লিয়ার করুন</li>
            <li>ইন্টারনেট সংযোগ চেক করুন</li>
          </ul>
        </div>

        <h4 class="sub-title">সমস্যা ৫: তালিকা লোড হচ্ছে না</h4>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>পেজ রিফ্রেশ করুন</li>
            <li>ব্রাউজার পরিবর্তন করে দেখুন (Chrome/Firefox)</li>
            <li>ইন্টারনেট সংযোগ চেক করুন</li>
            <li>সমস্যা চললে অ্যাডমিনকে জানান</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-সতর্কতা-ও-পরামর্শ">
        <div class="section-title">সতর্কতা ও পরামর্শ</div>
        
        <div class="info-box warning">
          <div class="info-box-title">⚠️ সতর্কতাসমূহ</div>
          <ul class="bullet-list">
            <li>চুল্লির ধরন তৈরি করার আগে ভাবুন এটি আসলে প্রয়োজন কিনা</li>
            <li>শর্ট কোড সাবধানে দিন — পরে পরিবর্তন করা যাবে না (রিপোর্টে সমস্যা হবে)</li>
            <li>নিষ্ক্রিয় করার আগে দেখুন এই ধরনে চুল্লি আছে কিনা</li>
            <li>একই ধরনের একাধিক ভেরিয়েশন থাকলে নামে সংখ্যা যোগ করুন (হফম্যান-১, হফম্যান-২)</li>
          </ul>
        </div>

        <div class="info-box tip">
          <div class="info-box-title">💜 পরামর্শসমূহ</div>
          <ul class="bullet-list">
            <li><strong>স্ট্যান্ডার্ড নামকরণ:</strong> একটি ফরম্যাট মেনে চলুন — বাংলা: [চুল্লির ধরন] [ভেরিয়েশন], ইংরেজি: [Furnace Type] [Variation], কোড: [৩-৪ অক্ষর][সংখ্যা]</li>
            <li><strong>আইকন নির্বাচন:</strong> চুল্লির বৈশিষ্ট্য অনুযায়ী আইকন নির্বাচন করুন — ঐতিহ্যবাহী: 🔥, অটোমেটেড: ⚙️, দ্রুত: ⚡, বড়: 🏭</li>
            <li><strong>বিবরণ যোগ করুন:</strong> সম্ভব হলে বিবরণ যোগ করুন — চুল্লির বৈশিষ্ট্য, উৎপাদন ক্ষমতা, বিশেষ নির্দেশনা</li>
            <li><strong>নিয়মিত রিভিউ:</strong> প্রতি মাসে চুল্লির ধরন রিভিউ করুন — কোন ধরনগুলো ব্যবহৃত হচ্ছে, কোন ধরনগুলো নিষ্ক্রিয় করা যায়</li>
          </ul>
        </div>
      </div>
    `
  },

  // ===================================================
  // KILN LIST - চুল্লি তালিকা (বিস্তারিত)
  // ===================================================
  'kiln-list': {
    title: 'চুল্লি তালিকা',
    sections: ['পেজ পরিচিতি', 'কোন ক্রমে তৈরি করবেন', 'চুল্লি কী ও কেন প্রয়োজন', 'পরিসংখ্যান কার্ড', 'নতুন চুল্লি যোগ - ধাপে ধাপে', 'ফর্মের বিবরণ', 'প্রতিটি ফিল্ডের বিস্তারিত', 'তালিকা ব্যবস্থাপনা', 'চুল্লির বিস্তারিত দেখা', 'সম্পাদনা', 'সক্রিয়-নিষ্ক্রিয়', 'সাধারণ সমস্যা'],
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
        <p>এই পেজে সকল নিবন্ধিত চুল্লির তথ্য, উৎপাদন অগ্রগতি এবং আউটপুট পরিসংখ্যান একসাথে দেখা যায়। প্রতিটি চুল্লির জন্য আলাদা ব্যাচ, ইনপুট, আউটপুট, এবং স্ট্যাটাস ট্র্যাক করা হয়।</p>

        <div class="info-box warning" style="border-left-color:var(--danger);background:#fef2f2">
          <div class="info-box-title" style="color:var(--danger)">⚠️ গুরুত্বপূর্ণ - প্রথমে এটি তৈরি করুন</div>
          <div style="display:flex;align-items:center;gap:10px;margin-top:10px;font-size:14px;flex-wrap:wrap">
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ১</span>
            <span>চুল্লির ধরন তৈরি করুন</span>
            <span style="color:var(--text-muted)">→</span>
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ২</span>
            <span style="font-weight:600">চুল্লি তালিকা</span>
          </div>
          <p style="margin-top:10px">চুল্লি তৈরি করার আগে অবশ্যই <strong>চুল্লির ধরন</strong> তৈরি করে নিন। চুল্লির ধরন না থাকলে চুল্লি তৈরি করা যাবে না।</p>
        </div>

        <div class="info-box note">
          <div class="info-box-title">💡 চুল্লি কী?</div>
          <p>চুল্লি হলো ইট তৈরির প্রধান যন্ত্র বা ভাটি। প্রতিটি চুল্লিতে একাধিক ব্যাচে ইট তৈরি হয়। চুল্লি তালিকায় সকল চুল্লির বর্তমান অবস্থা দেখা যায়।</p>
        </div>
      </div>

      <div class="section" id="sec-চুল্লি-কী-ও-কেন-প্রয়োজন">
        <div class="section-title">চুল্লি কী ও কেন প্রয়োজন?</div>

        <h4 class="sub-title">চুল্লির মূল বৈশিষ্ট্য:</h4>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="fc-icon">🏭</div>
            <h5>উৎপাদন কেন্দ্র</h5>
            <p>প্রতিটি চুল্লিতে একাধিক ব্যাচে ইট তৈরি হয়</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">📊</div>
            <h5>অগ্রগতি ট্র্যাকিং</h5>
            <p>প্রতিটি চুল্লির উৎপাদন অগ্রগতি শতকরা হারে দেখা যায়</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">💰</div>
            <h5>খরচ হিসাব</h5>
            <p>প্রতিটি চুল্লির মোট খরচ আলাদাভাবে ট্র্যাক করা হয়</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">📦</div>
            <h5>ব্যাচ ব্যবস্থাপনা</h5>
            <p>একাধিক ব্যাচ একই চুল্লিতে চলতে পারে</p>
          </div>
        </div>

        <div class="info-box success">
          <div class="info-box-title">✅ চুল্লি ব্যবস্থাপনার সুবিধা</div>
          <ul class="bullet-list">
            <li>প্রতিটি চুল্লির উৎপাদন আলাদাভাবে ট্র্যাক করা যায়</li>
            <li>চুল্লি অনুযায়ী খরচ বিশ্লেষণ করা যায়</li>
            <li>অগ্রগতি পর্যবেক্ষণ করা যায়</li>
            <li>দক্ষতা মূল্যায়ন করা যায়</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-পরিসংখ্যান-কার্ড">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <p>পেজের উপরে পাঁচটি সারসংক্ষেপ কার্ড থাকে যা সামগ্রিক উৎপাদন অবস্থা দেখায়:</p>
        
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

        <h4 class="sub-title">কার্ডের ব্যাখ্যা:</h4>
        <table class="doc-table">
          <tr><th>কার্ড</th><th>কী বোঝায়</th><th>কীভাবে গণনা হয়</th></tr>
          <tr><td>মোট উৎপাদন</td><td>সমস্ত ব্যাচ থেকে এ পর্যন্ত তৈরি মোট ইট</td><td>সব চুল্লির আউটপুট যোগফল</td></tr>
          <tr><td>সক্রিয় চুল্লি</td><td>বর্তমানে চলমান চুল্লির সংখ্যা (মোট চুল্লি সংখ্যাও দেখায়)</td><td>যে চুল্লিতে ব্যাচ চলছে</td></tr>
          <tr><td>আজকের উৎপাদন</td><td>আজ ব্যাচ এন্ট্রি করা মোট ইনপুট</td><td>আজকের তারিখের ইনপুট</td></tr>
          <tr><td>নষ্ট (%)</td><td>নষ্ট হওয়া ইটের শতকরা হার</td><td>(নষ্ট ইট / মোট উৎপাদন) × ১০০</td></tr>
          <tr><td>বর্তমান স্টক</td><td>বিক্রি না হওয়া মোট ইটের সংখ্যা</td><td>মোট উৎপাদন - মোট বিক্রয়</td></tr>
        </table>
      </div>

      <div class="section" id="sec-নতুন-চুল্লি-যোগ">
        <div class="section-title">নতুন চুল্লি যোগ - ধাপে ধাপে</div>
        <ol class="steps">
          <li>পেজের উপরের ডানদিকে <strong style="color:var(--primary)">"+ নতুন চুল্লি"</strong> (কমলা বাটন) এ ক্লিক করুন।</li>
          <li>খুলে আসা পপ-আপ ডায়ালগে <strong>চুল্লির নাম</strong> লিখুন — এটি বাধ্যতামূলক। (যেমন: হফম্যান-১, ভাটি-২)</li>
          <li><strong>চুল্লির ধরন</strong> ড্রপডাউন থেকে পূর্বে তৈরি করা চুল্লির ধরন নির্বাচন করুন — এটি বাধ্যতামূলক।</li>
          <li><strong>ক্ষমতা (ইট)</strong> — এই চুল্লিতে একসাথে সর্বোচ্চ কত ইট ধারণ করতে পারে তা লিখুন।</li>
          <li><strong>অবস্থান</strong> লিখুন — চুল্লিটি কোথায় অবস্থিত (ঐচ্ছিক)।</li>
          <li><strong>বিবরণ</strong> লিখুন — চুল্লি সম্পর্কে বিশেষ তথ্য (ঐচ্ছিক)।</li>
          <li><strong>স্ট্যাটাস</strong> টগল সুইচ দিয়ে সক্রিয়/নিষ্ক্রিয় নির্বাচন করুন — ডিফল্টভাবে চালু থাকে।</li>
          <li><strong>"তৈরি করুন"</strong> বাটনে ক্লিক করুন।</li>
          <li>সফল হলে সবুজ রঙের বার্তা দেখাবে এবং ডায়ালগ বন্ধ হয়ে যাবে।</li>
        </ol>

        <div class="info-box success">
          <div class="info-box-title">✅ সফলতা বার্তা</div>
          সঠিকভাবে তৈরি হলে <strong>"Furnace created successfully"</strong> সবুজ বার্তা দেখাবে।
        </div>

        <div class="info-box warning">
          <div class="info-box-title">⚠️ মনে রাখবেন</div>
          <ul class="bullet-list">
            <li>চুল্লির নাম অনন্য হতে হবে — একই নামে দুটি চুল্লি থাকতে পারবে না</li>
            <li>চুল্লির ধরন নির্বাচন না করলে লাল এরর দেখাবে</li>
            <li>ক্ষমতা ০ বা খালি রাখা যাবে না</li>
          </ul>
        </div>
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
                <div class="field-mock active">হফম্যান-১</div>
              </div>
              <div class="form-field">
                <label>চুল্লির ধরন <span class="required">*</span></label>
                <div class="field-mock">চুল্লির ধরন নির্বাচন করুন ▼</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label>ক্ষমতা (ইট) <span class="required">*</span></label>
                <div class="field-mock">50000</div>
              </div>
              <div class="form-field">
                <label>অবস্থান</label>
                <div class="field-mock">উত্তর পাড়, ভাটি এলাকা</div>
              </div>
            </div>
            <div class="form-row single">
              <div class="form-field">
                <label>বিবরণ</label>
                <div class="field-mock" style="height:60px;padding-top:8px">এই চুল্লিটি ২০২৪ সালে তৈরি করা হয়েছে...</div>
              </div>
            </div>
          </div>

          <div style="display:flex;justify-content:space-between;align-items:center;background:var(--bg);border-radius:8px;padding:12px 16px;margin-top:12px">
            <div>
              <div style="font-weight:600;font-size:14px">স্ট্যাটাস</div>
              <div style="font-size:12px;color:var(--text-muted)">নিষ্ক্রিয় চুল্লিতে নতুন ব্যাচ যোগ করা যাবে না</div>
            </div>
            <div style="width:44px;height:24px;background:var(--primary);border-radius:12px;position:relative">
              <div style="width:20px;height:20px;background:white;border-radius:50%;position:absolute;right:2px;top:2px"></div>
            </div>
          </div>

          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">🏭 তৈরি করুন</button>
          </div>
        </div>

        <table class="doc-table">
          <tr><th>ফিল্ড</th><th>বিবরণ</th><th>বাধ্যতামূলক</th><th>সর্বোচ্চ</th></tr>
          <tr><td>চুল্লির নাম</td><td>চুল্লির পরিচিতিমূলক নাম — অনন্য হতে হবে</td><td><span class="badge badge-red">হ্যাঁ</span></td><td>১০০ অক্ষর</td></tr>
          <tr><td>চুল্লির ধরন</td><td>পূর্বে তৈরি করা চুল্লির ধরন থেকে নির্বাচন</td><td><span class="badge badge-red">হ্যাঁ</span></td><td>১টি নির্বাচন</td></tr>
          <tr><td>ক্ষমতা (ইট)</td><td>একসাথে সর্বোচ্চ কত ইট ধারণ করতে পারে</td><td><span class="badge badge-red">হ্যাঁ</span></td><td>সংখ্যা</td></tr>
          <tr><td>অবস্থান</td><td>চুল্লিটি কোথায় অবস্থিত</td><td><span class="badge badge-green">না</span></td><td>২০০ অক্ষর</td></tr>
          <tr><td>বিবরণ</td><td>চুল্লি সম্পর্কে বিশেষ তথ্য</td><td><span class="badge badge-green">না</span></td><td>১০০০ অক্ষর</td></tr>
          <tr><td>স্ট্যাটাস</td><td>চালু = নতুন ব্যাচ যোগ করা যাবে, বন্ধ = ব্যাচ যোগ করা যাবে না</td><td><span class="badge badge-green">না</span></td><td>ডিফল্ট: চালু</td></tr>
        </table>
      </div>

      <div class="section" id="sec-তালিকা-ব্যবস্থাপনা">
        <div class="section-title">তালিকা ব্যবস্থাপনা</div>
        <p>মূল তালিকায় সব চুল্লি দেখা যাবে। কলামগুলো:</p>
        
        <div class="table-mock">
          <div class="table-mock-header" style="grid-template-columns:2fr 1fr 1fr 1fr 1fr 1fr">
            <span>চুল্লি</span><span>ধরন</span><span>ক্ষমতা</span><span>আউটপুট</span><span>অগ্রগতি</span><span>কার্যক্রম</span>
          </div>
          <div class="table-mock-row" style="grid-template-columns:2fr 1fr 1fr 1fr 1fr 1fr">
            <div>
              <div style="display:flex;align-items:center;gap:10px">
                <div style="font-size:20px">🔥</div>
                <div>
                  <div style="font-weight:600">হফম্যান-১</div>
                  <div style="font-size:12px;color:var(--text-muted)">Furnace-1</div>
                </div>
              </div>
            </div>
            <div><span class="badge badge-blue">হফম্যান</span></div>
            <div>৫০,০০০</div>
            <div><div style="display:flex;align-items:center;gap:6px"><span>📊</span><span>১৮,৫০০</span></div></div>
            <div><div style="background:#e5e7eb;border-radius:10px;height:8px;width:100%"><div style="background:var(--primary);border-radius:10px;height:100%;width:37%"></div></div></div>
            <div><span style="font-size:18px;cursor:pointer">⋯</span></div>
          </div>
        </div>

        <h4 class="sub-title">কলামের বিবরণ:</h4>
        <table class="doc-table">
          <tr><th>কলাম</th><th>কী দেখাবে</th></tr>
          <tr><td>চুল্লি</td><td>আইকন + চুল্লির নাম (বাংলা + ইংরেজি)</td></tr>
          <tr><td>ধরন</td><td>চুল্লির ধরনের নাম (ব্যাজ আকারে)</td></tr>
          <tr><td>ক্ষমতা</td><td>সর্বোচ্চ ধারণ ক্ষমতা (ইট সংখ্যা)</td></tr>
          <tr><td>আউটপুট</td><td>এ পর্যন্ত উৎপাদিত মোট ইট</td></tr>
          <tr><td>অগ্রগতি</td><td>বার চার্ট দিয়ে অগ্রগতি % দেখাবে</td></tr>
          <tr><td>কার্যক্রম</td><td>⋯ মেনু — এডিট, বিস্তারিত, স্ট্যাটাস পরিবর্তন</td></tr>
        </table>

        <div class="info-box success">
          <div class="info-box-title">✅ সার্চ ও ফিল্টার</div>
          <ul class="bullet-list">
            <li><strong>সার্চ:</strong> চুল্লির নাম বা ধরন দিয়ে খুঁজুন</li>
            <li><strong>ফিল্টার:</strong> সক্রিয়/নিষ্ক্রিয় আলাদা করুন</li>
            <li><strong>সর্ট:</strong> নাম, ক্ষমতা, অগ্রগতি অনুযায়ী সাজান</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-চুল্লির-বিস্তারিত-দেখা">
        <div class="section-title">চুল্লির বিস্তারিত দেখা</div>
        <ol class="steps">
          <li>তালিকায় যেই চুল্লির বিস্তারিত দেখতে চান, সেই সারির <strong>⋯</strong> মেনুতে ক্লিক করুন।</li>
          <li><strong>👁️ বিস্তারিত</strong> সিলেক্ট করুন।</li>
          <li>একটি মডাল খুলবে যেখানে থাকবে:
            <ul class="bullet-list">
              <li>চুল্লির মৌলিক তথ্য (নাম, ধরন, ক্ষমতা, অবস্থান)</li>
              <li>বর্তমান ব্যাচের বিবরণ</li>
              <li>ইনপুট বনাম আউটপুট তুলনা</li>
              <li>অগ্রগতি বার চার্ট</li>
              <li>শেষ আউটপুট এন্ট্রির তারিখ</li>
            </ul>
          </li>
        </ol>
      </div>

      <div class="section" id="sec-সম্পাদনা">
        <div class="section-title">চুল্লি সম্পাদনা (Edit) করা</div>
        <ol class="steps">
          <li>তালিকায় যেই চুল্লিটি সম্পাদনা করতে চান, সেই সারির <strong>⋯</strong> মেনুতে ক্লিক করুন।</li>
          <li><strong>✏️ Edit</strong> সিলেক্ট করুন।</li>
          <li>এডিট ডায়ালগ খুলবে — সব ফিল্ডে আগের মান আগে থেকেই পূরণ করা থাকবে।</li>
          <li>যে ফিল্ডটি পরিবর্তন করতে চান, সেই ফিল্ডে ক্লিক করে নতুন মান লিখুন।</li>
          <li>সব পরিবর্তন করার পর <strong>"আপডেট"</strong> বাটনে ক্লিক করুন।</li>
          <li>সফল হলে সবুজ বার্তা দেখাবে: <strong>"Furnace updated successfully"</strong></li>
        </ol>

        <div class="info-box warning">
          <div class="info-box-title">⚠️ গুরুত্বপূর্ণ</div>
          <ul class="bullet-list">
            <li>চুল্লির নাম পরিবর্তন করলে তা রিপোর্টে প্রভাব ফেলতে পারে</li>
            <li>ক্ষমতা কমানো যাবে না যদি বর্তমান ব্যাচ থাকে</li>
            <li>চুল্লির ধরন পরিবর্তন করা যাবে না যদি ব্যাচ চলমান থাকে</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-সক্রিয়-নিষ্ক্রিয়">
        <div class="section-title">সক্রিয়/নিষ্ক্রিয় করা</div>
        <p><strong>পদ্ধতি:</strong></p>
        <ol class="steps">
          <li>তালিকায় চুল্লির সারির <strong>⋯</strong> মেনুতে ক্লিক করুন।</li>
          <li><strong>⚡ Deactivate</strong> (যদি সক্রিয় থাকে) অথবা <strong>⚡ Activate</strong> (যদি নিষ্ক্রিয় থাকে) সিলেক্ট করুন।</li>
          <li>সাথে সাথে স্ট্যাটাস পরিবর্তন হবে এবং সবুজ বার্তা দেখাবে।</li>
        </ol>

        <div class="info-box note">
          <div class="info-box-title">💡 স্ট্যাটাস পরিবর্তনের প্রভাব</div>
          <table class="doc-table">
            <tr><th>সক্রিয় থাকলে</th><th>নিষ্ক্রিয় করলে</th></tr>
            <tr><td>✅ নতুন ব্যাচ যোগ করা যাবে</td><td>❌ নতুন ব্যাচ যোগ করা যাবে না</td></tr>
            <tr><td>✅ আউটপুট এন্ট্রি দেওয়া যাবে</td><td>❌ আউটপুট এন্ট্রি দেওয়া যাবে না</td></tr>
            <tr><td>✅ ড্রপডাউনে দেখা যাবে</td><td>❌ ড্রপডাউনে দেখা যাবে না</td></tr>
            <tr><td colspan="2" style="background:var(--bg-hover);font-weight:600">✅ চলমান ব্যাচ অবিকৃত থাকবে (মুছে যাবে না)</td></tr>
          </table>
        </div>
      </div>

      <div class="section" id="sec-সাধারণ-সমস্যা">
        <div class="section-title">সাধারণ সমস্যা ও সমাধান</div>
        
        <h4 class="sub-title">সমস্যা ১: "এই নামে ইতিমধ্যে চুল্লি আছে"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"Furnace name already exists."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>ভিন্ন নাম দিন</li>
            <li>নামের সাথে সংখ্যা যোগ করুন: হফম্যান-১ → হফম্যান-২</li>
          </ul>
        </div>

        <h4 class="sub-title">সমস্যা ২: "চুল্লির ধরন নির্বাচন করুন"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"Furnace type is required."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>প্রথমে চুল্লির ধরন তৈরি করুন</li>
            <li>তারপর চুল্লি তৈরির সময় ধরন নির্বাচন করুন</li>
          </ul>
        </div>

        <h4 class="sub-title">সমস্যা ৩: "ক্ষমতা ০ বা খালি রাখা যাবে না"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"Capacity must be greater than 0."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>চুল্লির সঠিক ক্ষমতা লিখুন</li>
            <li>০ বা খালি রাখা যাবে না</li>
          </ul>
        </div>
      </div>
    `
  },

  // ===================================================
  // BATCH - ব্যাচ তালিকা (বিস্তারিত)
  // ===================================================
  batch: {
    title: 'ব্যাচ তালিকা',
    sections: ['পেজ পরিচিতি', 'কোন ক্রমে তৈরি করবেন', 'ব্যাচ কী ও কেন প্রয়োজন', 'পরিসংখ্যান কার্ড', 'নতুন ব্যাচ যোগ - ধাপে ধাপে', 'ফর্মের বিবরণ', 'প্রতিটি ফিল্ডের বিস্তারিত', 'তালিকা ব্যবস্থাপনা', 'ব্যাচের বিস্তারিত দেখা', 'সম্পাদনা', 'মুছে ফেলা', 'সাধারণ সমস্যা'],
    content: `
      <div class="page-hero">
        <div class="page-hero-icon">📦</div>
        <div>
          <h1>ব্যাচ তালিকা</h1>
          <p>উৎপাদন চক্র ব্যবস্থাপনা — কাঁচামাল থেকে সম্পূর্ণ উৎপাদন</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → উৎপাদন → <strong>ব্যাচ তালিকা</strong></span>
        <p>এই পেজে সকল উৎপাদন ব্যাচের তথ্য, খরচের বিবরণ, এবং অগ্রগতি একসাথে দেখা যায়। প্রতিটি ব্যাচ একটি অনন্য নম্বর দ্বারা চিহ্নিত করা হয় এবং চুল্লির সাথে সংযুক্ত থাকে।</p>
        
        <div class="info-box warning" style="border-left-color:var(--warning);background:#fffbeb">
          <div class="info-box-title" style="color:var(--warning)">⚠️ কোন ক্রমে তৈরি করবেন</div>
          <div style="display:flex;align-items:center;gap:10px;margin-top:10px;font-size:14px;flex-wrap:wrap">
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ১</span>
            <span>চুল্লির ধরন</span>
            <span style="color:var(--text-muted)">→</span>
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ২</span>
            <span>চুল্লি তালিকা</span>
            <span style="color:var(--text-muted)">→</span>
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ৩</span>
            <span style="font-weight:600">ব্যাচ তালিকা</span>
          </div>
          <p style="margin-top:10px">ব্যাচ তৈরি করার আগে অবশ্যই <strong>চুল্লির ধরন</strong> এবং <strong>চুল্লি তালিকা</strong> তৈরি করে নিন। চুল্লি না থাকলে ব্যাচ তৈরি করা যাবে না।</p>
        </div>
        
        <div class="info-box note">
          <div class="info-box-title">💡 ব্যাচ কী?</div>
          <p>একটি <strong>ব্যাচ</strong> হলো একটি সম্পূর্ণ উৎপাদন চক্র। একটি চুল্লিতে কাঁচামাল (কাদা/মাটি) লোড করা থেকে শুরু করে ইট বের হওয়া পর্যন্ত পুরো প্রক্রিয়াটিকে একটি ব্যাচ বলে।</p>
        </div>
      </div>

      <div class="section" id="sec-ব্যাচ-কী-ও-কেন-প্রয়োজন">
        <div class="section-title">ব্যাচ কী ও কেন প্রয়োজন?</div>
        
        <h4 class="sub-title">ব্যাচের মূল বৈশিষ্ট্য:</h4>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="fc-icon">🔢</div>
            <h5>ব্যাচ নম্বর</h5>
            <p>সিস্টেম স্বয়ংক্রিয়ভাবে B-2026-001 ফরম্যাটে নম্বর দেয়। এটি অনন্য এবং পরিবর্তনযোগ্য নয়।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">🏭</div>
            <h5>চুল্লি সংযুক্তি</h5>
            <p>প্রতিটি ব্যাচ নির্দিষ্ট একটি চুল্লির সাথে যুক্ত। একাধিক ব্যাচ একই চুল্লিতে চলতে পারে।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">💰</div>
            <h5>খরচ ট্র্যাকিং</h5>
            <p>মালামাল, লেবার ও অন্যান্য খরচ আলাদাভাবে রেকর্ড হয়। প্রতি ইট খরচ স্বয়ংক্রিয়ভাবে গণনা হয়।</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">📊</div>
            <h5>অগ্রগতি</h5>
            <p>ব্যাচের অগ্রগতি শতকরা হারে দেখা যায়। ইনপুট বনাম আউটপুট তুলনা করা যায়।</p>
          </div>
        </div>

        <div class="info-box success">
          <div class="info-box-title">✅ ব্যাচ ব্যবস্থাপনার সুবিধা</div>
          <ul class="bullet-list">
            <li>প্রতিটি উৎপাদন চক্রের পূর্ণাঙ্গ রেকর্ড রাখা যায়</li>
            <li>খরচের বিস্তারিত বিশ্লেষণ করা যায়</li>
            <li>প্রতি ইট খরচ বের করা যায়</li>
            <li>লাভ-ক্ষতি হিসাব করা সহজ হয়</li>
            <li>উৎপাদন দক্ষতা মূল্যায়ন করা যায়</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-পরিসংখ্যান-কার্ড">
        <div class="section-title">পরিসংখ্যান কার্ড</div>
        <p>পেজের উপরে চারটি সারসংক্ষেপ কার্ড থাকে যা সামগ্রিক ব্যাচ অবস্থা দেখায়:</p>
        
        <div class="stat-row">
          <div class="stat-card">
            <div class="stat-icon">📦</div>
            <div><div class="stat-label">মোট ব্যাচ</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card green">
            <div class="stat-icon">🟡</div>
            <div><div class="stat-label">চলমান</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card blue">
            <div class="stat-icon">🟢</div>
            <div><div class="stat-label">সম্পন্ন</div><div class="stat-value">০</div></div>
          </div>
          <div class="stat-card red">
            <div class="stat-icon">🔴</div>
            <div><div class="stat-label">বাতিল</div><div class="stat-value">০</div></div>
          </div>
        </div>

        <h4 class="sub-title">কার্ডের ব্যাখ্যা:</h4>
        <table class="doc-table">
          <tr><th>কার্ড</th><th>কী বোঝায়</th><th>কীভাবে গণনা হয়</th></tr>
          <tr><td>মোট ব্যাচ</td><td>সিস্টেমে মোট কতটি ব্যাচ তৈরি করা হয়েছে</td><td>সব ব্যাচ গণনা</td></tr>
          <tr><td>চলমান</td><td>বর্তমানে সক্রিয় আছে এমন ব্যাচের সংখ্যা</td><td>যেগুলোর স্ট্যাটাস = চলমান</td></tr>
          <tr><td>সম্পন্ন</td><td>উৎপাদন শেষ হয়েছে এমন ব্যাচের সংখ্যা</td><td>যেগুলোর স্ট্যাটাস = সম্পন্ন</td></tr>
          <tr><td>বাতিল</td><td>বাতিল করা ব্যাচের সংখ্যা</td><td>যেগুলোর স্ট্যাটাস = বাতিল</td></tr>
        </table>
      </div>

      <div class="section" id="sec-নতুন-ব্যাচ-যোগ">
        <div class="section-title">নতুন ব্যাচ যোগ - ধাপে ধাপে</div>
        <ol class="steps">
          <li>পেজের উপরের ডানদিকে <strong style="color:var(--primary)">"+ নতুন ব্যাচ"</strong> (নীল বাটন) এ ক্লিক করুন।</li>
          <li>খুলে আসা পপ-আপ ডায়ালগে <strong>ইনপুট ইট সংখ্যা</strong> লিখুন — এটি বাধ্যতামূলক। (যেমন: ৫০,০০০)</li>
          <li><strong>চুল্লি নির্বাচন করুন</strong> ড্রপডাউন থেকে সক্রিয় চুল্লি নির্বাচন করুন — এটি বাধ্যতামূলক।</li>
          <li><strong>মালামালের খরচ</strong> সেকশনে এক বা একাধিক মালামাল নির্বাচন করুন:
            <ul class="bullet-list">
              <li>কয়লা, কাঠ, মাটি ইত্যাদি থেকে নির্বাচন করুন</li>
              <li>প্রতিটি মালামালের পরিমাণ ও মূল্য লিখুন</li>
              <li>"+ আইটেম যোগ করুন" দিয়ে আরও মালামাল যোগ করুন</li>
            </ul>
          </li>
          <li><strong>লেবার খরচ</strong> সেকশনে:
            <ul class="bullet-list">
              <li>মোট লেবার সংখ্যা লিখুন (যেমন: ১০)</li>
              <li>মোট মজুরি/ব্যয় (৳) লিখুন (যেমন: ৫,০০০)</li>
            </ul>
          </li>
          <li><strong>অন্যান্য খরচ</strong> সেকশনে প্রয়োজনীয় ফিল্ড পূরণ করুন:
            <ul class="bullet-list">
              <li>মাটি (৳) — মাটি ক্রয় খরচ</li>
              <li>পানি (৳) — পানি খরচ</li>
              <li>পরিবহন (৳) — পরিবহন খরচ</li>
              <li>রক্ষণাবেক্ষণ (৳) — রক্ষণাবেক্ষণ খরচ</li>
              <li>বিবিধ (৳) — অন্যান্য খরচ</li>
            </ul>
          </li>
          <li><strong>মোট খরচ</strong> স্বয়ংক্রিয়ভাবে গণনা হয়ে দেখাবে।</li>
          <li><strong>"তৈরি করুন"</strong> বাটনে ক্লিক করুন।</li>
          <li>সফল হলে সবুজ রঙের বার্তা দেখাবে এবং ডায়ালগ বন্ধ হয়ে যাবে।</li>
        </ol>

        <div class="info-box success">
          <div class="info-box-title">✅ সফলতা বার্তা</div>
          সঠিকভাবে তৈরি হলে <strong>"Batch created successfully"</strong> সবুজ বার্তা দেখাবে।
        </div>

        <div class="info-box warning">
          <div class="info-box-title">⚠️ মনে রাখবেন</div>
          <ul class="bullet-list">
            <li>ইনপুট ইট সংখ্যা ০ বা খালি রাখা যাবে না</li>
            <li>চুল্লি নির্বাচন না করলে লাল এরর দেখাবে</li>
            <li>কমপক্ষে একটি মালামাল নির্বাচন করতে হবে</li>
            <li>লেবার সংখ্যা ও মজুরি উভয়ই পূরণ করতে হবে</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-ফর্মের-বিবরণ">
        <div class="section-title">ফর্মের বিবরণ</div>
        <div class="form-mock">
          <div class="form-mock-title">📦 নতুন ব্যাচ যোগ করুন</div>
          
          <div class="field-group">
            <div class="field-group-title">📦 মৌলিক তথ্য</div>
            <div class="form-row">
              <div class="form-field">
                <label>ইনপুট ইট সংখ্যা <span class="required">*</span></label>
                <div class="field-mock active">50000</div>
              </div>
              <div class="form-field">
                <label>চুল্লি নির্বাচন করুন <span class="required">*</span></label>
                <div class="field-mock">চুল্লি নির্বাচন করুন... ▼</div>
              </div>
            </div>
          </div>

          <div class="field-group" style="border-left:3px solid #f59e0b; margin-top:10px">
            <div class="field-group-title" style="color:#d97706">📦 মালামালের খরচ</div>
            <div class="form-field">
              <label>মালামাল নির্বাচন করুন</label>
              <div class="field-mock">এক বা একাধিক মালামাল নির্বাচন করুন ▼</div>
            </div>
            <div style="margin-top:8px;font-size:12px;color:var(--text-muted)">নির্বাচিত মালামাল: কোনো মালামাল নির্বাচন করা হয়নি</div>
          </div>

          <div class="field-group" style="border-left:3px solid #3b82f6; margin-top:10px">
            <div class="field-group-title" style="color:#2563eb">👷 লেবার খরচ</div>
            <div class="form-row">
              <div class="form-field">
                <label>মোট লেবার সংখ্যা <span class="required">*</span></label>
                <div class="field-mock">10</div>
              </div>
              <div class="form-field">
                <label>মোট মজুরি/ব্যয় (৳) <span class="required">*</span></label>
                <div class="field-mock">5000</div>
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
            <div class="form-row" style="margin-top:8px">
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

          <div style="background:#f8fafc;border:1px solid var(--border);border-radius:8px;padding:12px;display:flex;justify-content:space-between;font-size:14px;margin-top:14px">
            <span>মোট আইটেম <strong>০</strong></span>
            <span>সর্বমোট <strong style="color:var(--primary)">৳০</strong></span>
          </div>

          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">📦 তৈরি করুন</button>
          </div>
        </div>

        <table class="doc-table">
          <tr><th>ফিল্ড</th><th>বিবরণ</th><th>বাধ্যতামূলক</th><th>টাইপ</th></tr>
          <tr><td>ইনপুট ইট সংখ্যা</td><td>কত ইট তৈরির জন্য কাঁচামাল লোড হয়েছে</td><td><span class="badge badge-red">হ্যাঁ</span></td><td>সংখ্যা</td></tr>
          <tr><td>চুল্লি নির্বাচন</td><td>কোন চুল্লিতে এই ব্যাচ চলছে</td><td><span class="badge badge-red">হ্যাঁ</span></td><td>ড্রপডাউন</td></tr>
          <tr><td>মালামাল নির্বাচন</td><td>এক বা একাধিক মালামাল নির্বাচন</td><td><span class="badge badge-red">হ্যাঁ</span></td><td>মাল্টি-সিলেক্ট</td></tr>
          <tr><td>মালামাল পরিমাণ</td><td>প্রতিটি মালামালের পরিমাণ</td><td><span class="badge badge-red">হ্যাঁ</span></td><td>সংখ্যা</td></tr>
          <tr><td>মালামাল মূল্য</td><td>প্রতিটি মালামালের মোট মূল্য</td><td><span class="badge badge-red">হ্যাঁ</span></td><td>সংখ্যা</td></tr>
          <tr><td>লেবার সংখ্যা</td><td>মোট কতজন লেবার কাজ করেছে</td><td><span class="badge badge-red">হ্যাঁ</span></td><td>সংখ্যা</td></tr>
          <tr><td>লেবার মজুরি</td><td>মোট মজুরি খরচ</td><td><span class="badge badge-red">হ্যাঁ</span></td><td>সংখ্যা</td></tr>
          <tr><td>মাটি খরচ</td><td>মাটি ক্রয় খরচ</td><td><span class="badge badge-green">না</span></td><td>সংখ্যা</td></tr>
          <tr><td>পানি খরচ</td><td>পানি খরচ</td><td><span class="badge badge-green">না</span></td><td>সংখ্যা</td></tr>
          <tr><td>পরিবহন খরচ</td><td>পরিবহন খরচ</td><td><span class="badge badge-green">না</span></td><td>সংখ্যা</td></tr>
          <tr><td>রক্ষণাবেক্ষণ</td><td>রক্ষণাবেক্ষণ খরচ</td><td><span class="badge badge-green">না</span></td><td>সংখ্যা</td></tr>
          <tr><td>বিবিধ খরচ</td><td>অন্যান্য খরচ</td><td><span class="badge badge-green">না</span></td><td>সংখ্যা</td></tr>
        </table>
      </div>

      <div class="section" id="sec-প্রতিটি-ফিল্ডের-বিস্তারিত">
        <div class="section-title">প্রতিটি ফিল্ডের বিস্তারিত ব্যাখ্যা</div>

        <h4 class="sub-title">১. ইনপুট ইট সংখ্যা ⭐</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী লিখবেন</div>
          <p>কত ইট তৈরির জন্য কাঁচামাল লোড হয়েছে তা লিখুন। এটি ব্যাচের মোট ধারণ ক্ষমতা।</p>
          <p><strong>উদাহরণ:</strong> ৫০,০০০, ১,০০,০০০, ২,৫০,০০০</p>
        </div>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ ভ্যালিডেশন</div>
          <ul class="bullet-list">
            <li>অবশ্যই লিখতে হবে — না লিখলে লাল এরর দেখাবে</li>
            <li>০ বা খালি রাখা যাবে না</li>
            <li>ঋণাত্মক সংখ্যা দেওয়া যাবে না</li>
            <li>বাস্তবসম্মত সংখ্যা দিন (চুল্লির ক্ষমতার মধ্যে)</li>
          </ul>
        </div>

        <h4 class="sub-title">২. চুল্লি নির্বাচন ⭐</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী করবেন</div>
          <p>ড্রপডাউন থেকে একটি সক্রিয় চুল্লি নির্বাচন করুন। শুধু সক্রিয় চুল্লি দেখাবে।</p>
        </div>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ ভ্যালিডেশন</div>
          <ul class="bullet-list">
            <li>অবশ্যই একটি চুল্লি নির্বাচন করতে হবে</li>
            <li>নিষ্ক্রিয় চুল্লি ড্রপডাউনে দেখা যাবে না</li>
            <li>চুল্লি না থাকলে প্রথমে চুল্লি তৈরি করুন</li>
          </ul>
        </div>

        <h4 class="sub-title">৩. মালামালের খরচ ⭐</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী করবেন</div>
          <p>এক বা একাধিক মালামাল নির্বাচন করুন এবং তাদের পরিমাণ ও মূল্য লিখুন।</p>
          <p><strong>উদাহরণ:</strong> কয়লা (৫ টন, ২৫,০০০৳), কাঠ (২ টন, ১০,০০০৳)</p>
        </div>
        <div class="info-box tip">
          <div class="info-box-title">💜 টিপস</div>
          <ul class="bullet-list">
            <li>"+ আইটেম যোগ করুন" বাটনে ক্লিক করে আরও মালামাল যোগ করুন</li>
            <li>সব মালামালের মোট মূল্য স্বয়ংক্রিয়ভাবে গণনা হবে</li>
            <li>প্রতিটি মালামালের জন্য আলাদা পরিমাণ ও মূল্য লিখুন</li>
          </ul>
        </div>

        <h4 class="sub-title">৪. লেবার খরচ ⭐</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী লিখবেন</div>
          <p>এই ব্যাচে মোট কতজন লেবার কাজ করেছে এবং তাদের মোট মজুরি কত তা লিখুন।</p>
          <p><strong>উদাহরণ:</strong> লেবার সংখ্যা: ১০, মজুরি: ৫,০০০৳</p>
        </div>
        <div class="info-box warning">
          <div class="info-box-title">⚠️ ভ্যালিডেশন</div>
          <ul class="bullet-list">
            <li>লেবার সংখ্যা ও মজুরি উভয়ই পূরণ করতে হবে</li>
            <li>০ বা খালি রাখা যাবে না</li>
            <li>ঋণাত্মক সংখ্যা দেওয়া যাবে না</li>
          </ul>
        </div>

        <h4 class="sub-title">৫. অন্যান্য খরচ (ঐচ্ছিক)</h4>
        <div class="info-box note">
          <div class="info-box-title">📝 কী লিখবেন</div>
          <p>অন্যান্য খরচ যেমন মাটি, পানি, পরিবহন, রক্ষণাবেক্ষণ, এবং বিবিধ খরচ লিখুন।</p>
        </div>
        <div class="info-box tip">
          <div class="info-box-title">💜 টিপস</div>
          <ul class="bullet-list">
            <li>এই ফিল্ডগুলো ঐচ্ছিক — না লিখলেও চলবে</li>
            <li>যেসব খরচ হয়েছে শুধু সেগুলো লিখুন</li>
            <li>সব খরচের মোট মূল্য স্বয়ংক্রিয়ভাবে গণনা হবে</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-তালিকা-ব্যবস্থাপনা">
        <div class="section-title">তালিকা ব্যবস্থাপনা</div>
        <p>মূল তালিকায় সব ব্যাচ দেখা যাবে। কলামগুলো:</p>
        
        <div class="table-mock">
          <div class="table-mock-header" style="grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr">
            <span>ব্যাচ নং</span><span>চুল্লি</span><span>স্ট্যাটাস</span><span>লোডকৃত ইট</span><span>অগ্রসিত</span><span>মোট খরচ</span><span>কার্যক্রম</span>
          </div>
          <div class="table-mock-row" style="grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr">
            <div><div style="font-weight:600">B-2026-001</div></div>
            <div><div>হফম্যান-১</div></div>
            <div><span class="badge badge-orange">🟡 চলমান</span></div>
            <div>৫০,০০০</div>
            <div><div style="background:#e5e7eb;border-radius:10px;height:8px;width:100%"><div style="background:var(--primary);border-radius:10px;height:100%;width:37%"></div></div></div>
            <div><div style="color:var(--primary);font-weight:600">৳৫০,০০০</div></div>
            <div><span style="font-size:18px;cursor:pointer">⋯</span></div>
          </div>
        </div>

        <h4 class="sub-title">কলামের বিবরণ:</h4>
        <table class="doc-table">
          <tr><th>কলাম</th><th>কী দেখাবে</th></tr>
          <tr><td>ব্যাচ নং</td><td>সিস্টেম তৈরি অনন্য নম্বর (যেমন: B-2026-001)</td></tr>
          <tr><td>চুল্লি</td><td>কোন চুল্লিতে এই ব্যাচ চলছে</td></tr>
          <tr><td>স্ট্যাটাস</td><td>চলমান (হলুদ) / সম্পন্ন (সবুজ) / বাতিল (লাল)</td></tr>
          <tr><td>লোডকৃত ইট</td><td>ইনপুট ইটের সংখ্যা</td></tr>
          <tr><td>অগ্রসিত</td><td>উৎপাদনের অগ্রগতি % (বার চার্ট)</td></tr>
          <tr><td>মোট খরচ</td><td>এই ব্যাচের মোট খরচ (৳)</td></tr>
          <tr><td>কার্যক্রম</td><td>⋯ মেনু — এডিট, বিস্তারিত, মুছে ফেলা</td></tr>
        </table>

        <div class="info-box success">
          <div class="info-box-title">✅ সার্চ ও ফিল্টার</div>
          <ul class="bullet-list">
            <li><strong>সার্চ:</strong> ব্যাচ নম্বর বা চুল্লির নাম দিয়ে খুঁজুন</li>
            <li><strong>ফিল্টার:</strong> স্ট্যাটাস (চলমান/সম্পন্ন/বাতিল) আলাদা করুন</li>
            <li><strong>সর্ট:</strong> ব্যাচ নং, তারিখ, খরচ অনুযায়ী সাজান</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-ব্যাচের-বিস্তারিত-দেখা">
        <div class="section-title">ব্যাচের বিস্তারিত দেখা</div>
        <ol class="steps">
          <li>তালিকায় যেই ব্যাচের বিস্তারিত দেখতে চান, সেই সারির <strong>⋯</strong> মেনুতে ক্লিক করুন।</li>
          <li><strong>👁️ বিস্তারিত</strong> সিলেক্ট করুন।</li>
          <li>একটি মডাল খুলবে যেখানে থাকবে:
            <ul class="bullet-list">
              <li>ব্যাচের মৌলিক তথ্য (নম্বর, চুল্লি, শুরু তারিখ)</li>
              <li>ইনপুট ইট সংখ্যা</li>
              <li>মালামালের খরচের বিবরণ (প্রতিটি মালামাল)</li>
              <li>লেবার খরচের বিবরণ</li>
              <li>অন্যান্য খরচের বিবরণ</li>
              <li>মোট খরচ</li>
              <li>প্রতি ইট খরচ (মোট খরচ / ইনপুট ইট)</li>
              <li>অগ্রগতি বার চার্ট</li>
              <li>আউটপুট ইতিহাস</li>
            </ul>
          </li>
        </ol>
      </div>

      <div class="section" id="sec-সম্পাদনা">
        <div class="section-title">ব্যাচ সম্পাদনা (Edit) করা</div>
        <ol class="steps">
          <li>তালিকায় যেই ব্যাচটি সম্পাদনা করতে চান, সেই সারির <strong>⋯</strong> মেনুতে ক্লিক করুন।</li>
          <li><strong>✏️ Edit</strong> সিলেক্ট করুন।</li>
          <li>এডিট ডায়ালগ খুলবে — সব ফিল্ডে আগের মান আগে থেকেই পূরণ করা থাকবে।</li>
          <li>যে ফিল্ডটি পরিবর্তন করতে চান, সেই ফিল্ডে ক্লিক করে নতুন মান লিখুন।</li>
          <li>সব পরিবর্তন করার পর <strong>"আপডেট"</strong> বাটনে ক্লিক করুন।</li>
          <li>সফল হলে সবুজ বার্তা দেখাবে: <strong>"Batch updated successfully"</strong></li>
        </ol>

        <div class="info-box warning">
          <div class="info-box-title">⚠️ গুরুত্বপূর্ণ</div>
          <ul class="bullet-list">
            <li>ব্যাচ সম্পন্ন হওয়ার পর আর সম্পাদনা করা যাবে না</li>
            <li>শুধু চলমান ব্যাচ সম্পাদনা করা যাবে</li>
            <li>ইনপুট ইট সংখ্যা কমানো যাবে না যদি আউটপুট শুরু হয়ে থাকে</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-মুছে-ফেলা">
        <div class="section-title">ব্যাচ মুছে ফেলা</div>
        <ol class="steps">
          <li>তালিকায় যেই ব্যাচটি মুছে ফেলতে চান, সেই সারির <strong>⋯</strong> মেনুতে ক্লিক করুন।</li>
          <li><strong>🗑️ Delete</strong> সিলেক্ট করুন।</li>
          <li>কনফার্মেশন ডায়ালগ খুলবে।</li>
          <li><strong>"হ্যাঁ, মুছে ফেলুন"</strong> এ ক্লিক করুন।</li>
        </ol>

        <div class="info-box warning">
          <div class="info-box-title">⚠️ সতর্কতা</div>
          <ul class="bullet-list">
            <li>ব্যাচ মুছে ফেললে সকল ডেটা স্থায়ীভাবে মুছে যাবে</li>
            <li>এই কাজটি পূর্বাবস্থায় ফেরানো যাবে না</li>
            <li>নিশ্চিত না হলে মুছবেন না</li>
            <li>চলমান ব্যাচ মুছে ফেলা যাবে না</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-সাধারণ-সমস্যা">
        <div class="section-title">সাধারণ সমস্যা ও সমাধান</div>
        
        <h4 class="sub-title">সমস্যা ১: "চুল্লি নির্বাচন করুন"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"Furnace selection is required."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>একটি সক্রিয় চুল্লি নির্বাচন করুন</li>
            <li>কোনো সক্রিয় চুল্লি না থাকলে প্রথমে চুল্লি তৈরি করুন</li>
            <li>চুল্লির স্ট্যাটাস চেক করুন (সক্রিয় কিনা)</li>
          </ul>
        </div>

        <h4 class="sub-title">সমস্যা ২: "ইনপুট ইট সংখ্যা ০ হতে পারবে না"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"Input brick count must be greater than 0."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>সঠিক ইনপুট ইট সংখ্যা লিখুন</li>
            <li>০ বা খালি রাখা যাবে না</li>
            <li>ঋণাত্মক সংখ্যা দেওয়া যাবে না</li>
          </ul>
        </div>

        <h4 class="sub-title">সমস্যা ৩: "কমপক্ষে একটি মালামাল নির্বাচন করুন"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"Select at least one material."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>কমপক্ষে একটি মালামাল নির্বাচন করুন</li>
            <li>মালামালের পরিমাণ ও মূল্য লিখুন</li>
            <li>মালামাল তালিকা খালি থাকলে প্রথমে মালামাল তৈরি করুন</li>
          </ul>
        </div>

        <h4 class="sub-title">সমস্যা ৪: "লেবার সংখ্যা ও মজুরি উভয়ই পূরণ করুন"</h4>
        <div class="info-box warning">
          <div class="info-box-title">❌ এরর বার্তা</div>
          <p><strong>"Both labor count and wage are required."</strong></p>
        </div>
        <div class="info-box success">
          <div class="info-box-title">✅ সমাধান</div>
          <ul class="bullet-list">
            <li>লেবার সংখ্যা এবং মজুরি উভয়ই লিখুন</li>
            <li>যদি লেবার না থাকে, ০ দিন না — বরং ১ দিন এবং মজুরি ০ দিন</li>
          </ul>
        </div>
      </div>
    `
  },

  // ===================================================
  // OUTPUT - আউটপুট ব্যবস্থাপনা (বিস্তারিত)
  // ===================================================
  output: {
    title: 'আউটপুট ব্যবস্থাপনা',
    sections: ['পেজ পরিচিতি', 'কোন ক্রমে তৈরি করবেন', 'আউটপুট কী ও কেন প্রয়োজন', 'পরিসংখ্যান কার্ড', 'দৈনিক আউটপুট এন্ট্রি - ধাপে ধাপে', 'ফর্মের বিবরণ', 'প্রতিটি ফিল্ডের বিস্তারিত', 'সক্রিয় ব্যাচের তথ্য', 'আউটপুট ইতিহাস', 'সম্পাদনা', 'মুছে ফেলা', 'সাধারণ সমস্যা'],
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

        <div class="info-box warning" style="border-left-color:var(--danger);background:#fef2f2">
          <div class="info-box-title" style="color:var(--danger)">⚠️ গুরুত্বপূর্ণ - প্রথমে এটি তৈরি করুন</div>
          <div style="display:flex;align-items:center;gap:10px;margin-top:10px;font-size:14px;flex-wrap:wrap">
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ১</span>
            <span>চুল্লির ধরন</span>
            <span style="color:var(--text-muted)">→</span>
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ২</span>
            <span>চুল্লি তালিকা</span>
            <span style="color:var(--text-muted)">→</span>
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ৩</span>
            <span>ব্যাচ তালিকা</span>
            <span style="color:var(--text-muted)">→</span>
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ৪</span>
            <span style="font-weight:600">আউটপুট</span>
          </div>
          <p style="margin-top:10px">আউটপুট এন্ট্রি দেওয়ার আগে অবশ্যই <strong>চুল্লির ধরন</strong>, <strong>চুল্লি তালিকা</strong>, এবং <strong>ব্যাচ তালিকা</strong> তৈরি করে নিন। সক্রিয় ব্যাচ না থাকলে আউটপুট দেওয়া যাবে না।</p>
        </div>

        <div class="info-box note">
          <div class="info-box-title">💡 কীভাবে কাজ করে</div>
          <p>প্রতিটি ব্যাচের মোট ইনপুট থেকে প্রতিদিন আউটপুট বিয়োগ হয়। অগ্রগতি বার দিয়ে বোঝা যায় কতটুকু উৎপাদন বাকি আছে।</p>
        </div>
      </div>

      <div class="section" id="sec-আউটপুট-কী-ও-কেন-প্রয়োজন">
        <div class="section-title">আউটপুট কী ও কেন প্রয়োজন?</div>

        <h4 class="sub-title">আউটপুট ট্র্যাকিংয়ের গুরুত্ব:</h4>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="fc-icon">📊</div>
            <h5>দৈনিক উৎপাদন</h5>
            <p>প্রতিদিনের উৎপাদন পরিমাণ রেকর্ড করা যায়</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">📈</div>
            <h5>অগ্রগতি পর্যবেক্ষণ</h5>
            <p>ব্যাচের অগ্রগতি শতকরা হারে দেখা যায়</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">🧱</div>
            <h5>ক্যাটাগরি অনুযায়ী</h5>
            <p>ইটের শ্রেণি অনুযায়ী আউটপুট গণনা করা যায়</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">💰</div>
            <h5>লাভ-ক্ষতি হিসাব</h5>
            <p>উৎপাদন খরচ ও আয় হিসাব করা যায়</p>
          </div>
        </div>

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

      <div class="section" id="sec-দৈনিক-আউটপুট-এন্ট্রি">
        <div class="section-title">দৈনিক আউটপুট এন্ট্রি - ধাপে ধাপে</div>
        <ol class="steps">
          <li>পেজের উপরে <strong>চুল্লি নির্বাচন করুন</strong> ড্রপডাউন থেকে চুল্লি নির্বাচন করুন।</li>
          <li>সক্রিয় ব্যাচের তথ্য দেখা যাবে — অগ্রগতি % ও বাকি আউটপুট চেক করুন।</li>
          <li><strong style="color:var(--success)">"+ দৈনিক আউটপুট দিন"</strong> (সবুজ বাটন) এ ক্লিক করুন।</li>
          <li>খুলে আসা ফর্মে <strong>তারিখ</strong> নির্বাচন করুন — ডিফল্ট আজকের তারিখ।</li>
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
            <strong>B-2026-001</strong> <span class="badge badge-green">সক্রিয়</span>
            <div style="margin-top:8px">অগ্রগতি: 97%
              <div class="progress-bar-mock"><div class="progress-fill" style="width:97%"></div></div>
            </div>
          </div>
          <div class="form-field" style="margin-bottom:14px">
            <label>তারিখ <span class="required">*</span></label>
            <div class="field-mock active">March 4th, 2026</div>
          </div>
          <div class="field-group">
            <div class="field-group-title">ক্যাটাগরি অনুযায়ী আউটপুট</div>
            <div class="form-row">
              <div class="form-field"><label>ক্যাটাগরি ১ <span class="required">*</span></label><div class="field-mock">0</div></div>
              <div class="form-field"><label>ক্যাটাগরি ২ <span class="required">*</span></label><div class="field-mock">0</div></div>
              <div class="form-field"><label>ক্যাটাগরি ৩ <span class="required">*</span></label><div class="field-mock">0</div></div>
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
  },

  // ===================================================
  // BRICK TYPE - ইটের ধরন (বিস্তারিত)
  // ===================================================
  'brick-type': {
    title: 'ইটের ধরন',
    sections: ['পেজ পরিচিতি', 'কোন ক্রমে তৈরি করবেন', 'ইটের ধরন কী ও কেন প্রয়োজন', 'পরিসংখ্যান কার্ড', 'নতুন ইটের ধরন যোগ - ধাপে ধাপে', 'ফর্মের বিবরণ', 'প্রতিটি ফিল্ডের বিস্তারিত', 'তালিকা ব্যবস্থাপনা', 'সম্পাদনা', 'সক্রিয়-নিষ্ক্রিয়', 'সাধারণ সমস্যা'],
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

        <div class="info-box warning" style="border-left-color:var(--danger);background:#fef2f2">
          <div class="info-box-title" style="color:var(--danger)">⚠️ গুরুত্বপূর্ণ - প্রথমে এটি তৈরি করুন</div>
          <div style="display:flex;align-items:center;gap:10px;margin-top:10px;font-size:14px;flex-wrap:wrap">
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ১</span>
            <span>চুল্লির ধরন</span>
            <span style="color:var(--text-muted)">→</span>
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ২</span>
            <span>চুল্লি তালিকা</span>
            <span style="color:var(--text-muted)">→</span>
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ৩</span>
            <span>ব্যাচ তালিকা</span>
            <span style="color:var(--text-muted)">→</span>
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ৪</span>
            <span>আউটপুট</span>
            <span style="color:var(--text-muted)">→</span>
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ৫</span>
            <span style="font-weight:600">ইটের ধরন</span>
          </div>
          <p style="margin-top:10px">ইটের ধরন তৈরি না করলে আউটপুট এন্ট্রিতে ক্যাটাগরি অনুযায়ী ইট গণনা করা যাবে না। তাই আউটপুট এন্ট্রি দেওয়ার আগে ইটের ধরন তৈরি করে নিন।</p>
        </div>
      </div>

      <div class="section" id="sec-ইটের-ধরন-কী-ও-কেন-প্রয়োজন">
        <div class="section-title">ইটের ধরন কী ও কেন প্রয়োজন?</div>

        <h4 class="sub-title">ইটের ধরনের উদাহরণ:</h4>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="fc-icon">🔴</div>
            <h5>প্রথম শ্রেণি</h5>
            <p>সর্বোচ্চ মানের ইট, মূল নির্মাণ কাজে</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">🟠</div>
            <h5>দ্বিতীয় শ্রেণি</h5>
            <p>মাঝারি মানের ইট, সাধারণ নির্মাণে</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">🟤</div>
            <h5>তৃতীয় শ্রেণি</h5>
            <p>নিম্ন মানের ইট, অস্থায়ী কাজে</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">⚫</div>
            <h5>ঝামা ইট</h5>
            <p>অতিরিক্ত পোড়া ইট, রাস্তাঘাটে</p>
          </div>
        </div>

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
      </div>

      <div class="section" id="sec-নতুন-ইটের-ধরন-যোগ">
        <div class="section-title">নতুন ইটের ধরন যোগ - ধাপে ধাপে</div>
        <ol class="steps">
          <li>পেজের উপরের ডানদিকে <strong style="color:var(--primary)">"+ ইটের ধরন যোগ করুন"</strong> (কমলা বাটন) এ ক্লিক করুন।</li>
          <li>খুলে আসা পপ-আপ ডায়ালগে <strong>ইটের ধরনের নাম (বাংলা)</strong> লিখুন — এটি বাধ্যতামূলক। (যেমন: প্রথম শ্রেণি)</li>
          <li><strong>ইটের ধরনের নাম (ইংরেজি)</strong> লিখুন — এটি বাধ্যতামূলক। (যেমন: First Class)</li>
          <li><strong>শর্ট কোড</strong> লিখুন — এটি বাধ্যতামূলক। শুধু বড় হাতের অক্ষর ও সংখ্যা ব্যবহার করুন। (যেমন: FC)</li>
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
  },

  // ===================================================
  // KHOWA - খোয়া উৎপাদন (বিস্তারিত)
  // ===================================================
  khowa: {
    title: 'খোয়া উৎপাদন',
    sections: ['পেজ পরিচিতি', 'কোন ক্রমে তৈরি করবেন', 'খোয়া কী ও কেন প্রয়োজন', 'পরিসংখ্যান কার্ড', 'নতুন খোয়া রেকর্ড - ধাপে ধাপে', 'ফর্মের বিবরণ', 'প্রতিটি ফিল্ডের বিস্তারিত', 'খোয়া ইনভেন্টরি', 'তালিকা ব্যবস্থাপনা', 'সম্পাদনা', 'মুছে ফেলা', 'সাধারণ সমস্যা'],
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
        <p><strong>খোয়া</strong> হলো প্রত্যাখ্যাত, নিম্নমানের বা অতিরিক্ত পোড়া ইট থেকে তৈরি ইট-চিপস। এটি CFT (ঘনফুট) এককে পরিমাপ করা হয়। খোয়া আলাদাভাবে বিক্রি করা যায়।</p>

        <div class="info-box warning" style="border-left-color:var(--danger);background:#fef2f2">
          <div class="info-box-title" style="color:var(--danger)">⚠️ গুরুত্বপূর্ণ - প্রথমে এটি তৈরি করুন</div>
          <div style="display:flex;align-items:center;gap:10px;margin-top:10px;font-size:14px;flex-wrap:wrap">
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ১</span>
            <span>চুল্লির ধরন</span>
            <span style="color:var(--text-muted)">→</span>
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ২</span>
            <span>চুল্লি তালিকা</span>
            <span style="color:var(--text-muted)">→</span>
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ৩</span>
            <span>ব্যাচ তালিকা</span>
            <span style="color:var(--text-muted)">→</span>
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ৪</span>
            <span>আউটপুট</span>
            <span style="color:var(--text-muted)">→</span>
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ৫</span>
            <span>ইটের ধরন</span>
            <span style="color:var(--text-muted)">→</span>
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px">ধাপ ৬</span>
            <span style="font-weight:600">খোয়া উৎপাদন</span>
          </div>
          <p style="margin-top:10px">খোয়া রেকর্ড করার আগে অবশ্যই <strong>ইটের ধরন</strong> তৈরি করে নিন। ইটের ধরন না থাকলে খোয়া রেকর্ড করা যাবে না।</p>
        </div>

        <div class="info-box note">
          <div class="info-box-title">💡 CFT কী?</div>
          <p>CFT = Cubic Feet (ঘনফুট)। খোয়ার পরিমাণ ঘনফুটে পরিমাপ করা হয়।</p>
          <p><strong>১ CFT</strong> = ১ ঘনফুট = ১২" × ১২" × ১২" আয়তন</p>
        </div>
      </div>

      <div class="section" id="sec-খোয়া-কী-ও-কেন-প্রয়োজন">
        <div class="section-title">খোয়া কী ও কেন প্রয়োজন?</div>

        <h4 class="sub-title">খোয়া তৈরির উৎস:</h4>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="fc-icon">🔴</div>
            <h5>প্রত্যাখ্যাত ইট</h5>
            <p>মানহীন বা নষ্ট হয়ে যাওয়া ইট থেকে খোয়া তৈরি করা হয়</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">🟤</div>
            <h5>ঝামা ইট</h5>
            <p>অতিরিক্ত পোড়া ইট ভেঙে খোয়া তৈরি করা হয়</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">🟠</div>
            <h5>অতিরিক্ত ইট</h5>
            <p>স্টক বেশি থাকলে ভেঙে খোয়া তৈরি করা যায়</p>
          </div>
          <div class="feature-card">
            <div class="fc-icon">💰</div>
            <h5>অতিরিক্ত আয়</h5>
            <p>খোয়া বিক্রি করে অতিরিক্ত আয় করা যায়</p>
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
