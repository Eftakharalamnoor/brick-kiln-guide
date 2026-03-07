// pages/settings.js
// মডিউল: সেটিংস — ডকুমেন্টেশন কাস্টমাইজেশন
// পেজ: settings (font, color, icons, layout, etc.)

var PAGES_SETTINGS = {

  settings: {
    title: 'সেটিংস',
    sections: ['পেজ পরিচিতি', 'ফন্ট সেটিংস', 'রঙ থিম', 'আইকন সেটিংস', 'লেআউট সেটিংস', 'ভাষা সেটিংস', 'প্রিন্ট সেটিংস', 'ডিফল্টে রিসেট', 'সেটিংস সেভ'],
    content: `
      <div class="page-hero" style="background: linear-gradient(135deg, #6366f1, #8b5cf6)">
        <div class="page-hero-icon">⚙️</div>
        <div>
          <h1>ডকুমেন্টেশন সেটিংস</h1>
          <p>আপনার পছন্দমতো ডকুমেন্টেশন কাস্টমাইজ করুন</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → সেটিংস → <strong>ডকুমেন্টেশন সেটিংস</strong></span>
        <p>এই পেজে আপনি আপনার পছন্দমতো ডকুমেন্টেশনের বিভিন্ন সেটিংস কাস্টমাইজ করতে পারবেন। ফন্ট সাইজ, রঙ থিম, আইকন, লেআউট — সবকিছু আপনার পছন্দমতো সেট করা যাবে।</p>
        
        <div class="info-box success">
          <div class="info-box-title">✅ সেটিংস সুবিধা</div>
          <ul class="bullet-list">
            <li>ফন্ট সাইজ পরিবর্তন করা যাবে</li>
            <li>রঙ থিম পরিবর্তন করা যাবে (লাইট/ডার্ক/হাই কন্ট্রাস্ট)</li>
            <li>আইকন দেখানো/লুকানো যাবে</li>
            <li>সাইডবার প্রস্থ পরিবর্তন করা যাবে</li>
            <li>ভাষা পরিবর্তন করা যাবে (বাংলা/ইংরেজি)</li>
            <li>প্রিন্ট সেটিংস কাস্টমাইজ করা যাবে</li>
            <li>সব সেটিংস ব্রাউজারে সেভ থাকবে</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-ফন্ট-সেটিংস">
        <div class="section-title">ফন্ট সেটিংস</div>
        <p>ডকুমেন্টেশনের ফন্ট সাইজ এবং ফন্ট ফ্যামিলি পরিবর্তন করুন।</p>

        <div class="form-mock">
          <div class="form-mock-title">🔤 ফন্ট সেটিংস</div>
          
          <div class="field-group">
            <div class="field-group-title">📏 ফন্ট সাইজ</div>
            <div style="display:flex;gap:10px;align-items:center;margin-bottom:12px">
              <button class="btn-cancel" style="flex:1">Aa-</button>
              <div style="flex:2;text-align:center;padding:12px;background:var(--bg);border-radius:8px">
                <span style="font-size:16px">পরিবর্তন করুন</span>
              </div>
              <button class="btn-primary" style="flex:1">Aa+</button>
            </div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">
              <div style="border:2px solid var(--border);border-radius:8px;padding:12px;text-align:center;cursor:pointer">
                <div style="font-size:12px;color:var(--text-muted)">ছোট</div>
                <div style="font-size:14px">Aa</div>
              </div>
              <div style="border:2px solid var(--primary);background:var(--primary-light);border-radius:8px;padding:12px;text-align:center;cursor:pointer">
                <div style="font-size:12px;color:var(--primary)">মাঝারি</div>
                <div style="font-size:16px;font-weight:600">Aa</div>
              </div>
              <div style="border:2px solid var(--border);border-radius:8px;padding:12px;text-align:center;cursor:pointer">
                <div style="font-size:12px;color:var(--text-muted)">বড়</div>
                <div style="font-size:18px">Aa</div>
              </div>
            </div>
          </div>

          <div class="field-group" style="margin-top:12px">
            <div class="field-group-title">🔠 ফন্ট ফ্যামিলি</div>
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px">
              <div style="border:2px solid var(--primary);background:var(--primary-light);border-radius:8px;padding:12px;cursor:pointer">
                <div style="font-family:'Hind Siliguri',sans-serif;font-size:16px">হিন্দ শিলিগুড়ি</div>
                <div style="font-size:12px;color:var(--text-muted);margin-top:4px">বাংলার জন্য সেরা</div>
              </div>
              <div style="border:2px solid var(--border);border-radius:8px;padding:12px;cursor:pointer">
                <div style="font-family:'SolaimanLipi',sans-serif;font-size:16px">সোলAIMAN লিপি</div>
                <div style="font-size:12px;color:var(--text-muted);margin-top:4px">বিকল্প ফন্ট</div>
              </div>
            </div>
          </div>

          <div class="field-group" style="margin-top:12px">
            <div class="field-group-title">📝 লাইন হাইট</div>
            <div style="display:flex;gap:10px;align-items:center">
              <input type="range" min="1" max="2" step="0.1" value="1.5" style="flex:1" />
              <span style="font-size:14px;font-weight:600;width:40px;text-align:center">1.5</span>
            </div>
          </div>

          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">💾 সেভ করুন</button>
          </div>
        </div>

        <table class="doc-table">
          <tr><th>সেটিংস</th><th>অপশন</th><th>ডিফল্ট</th></tr>
          <tr><td>ফন্ট সাইজ</td><td>ছোট (১২px), মাঝারি (১৪px), বড় (১৬px), এক্সট্রা বড় (১৮px)</td><td>মাঝারি</td></tr>
          <tr><td>ফন্ট ফ্যামিলি</td><td>হিন্দ শিলিগুড়ি, সোলAIMAN লিপি, নিরালি</td><td>হিন্দ শিলিগুড়ি</td></tr>
          <tr><td>লাইন হাইট</td><td>১.০ থেকে ২.০</td><td>১.৫</td></tr>
        </table>
      </div>

      <div class="section" id="sec-রঙ-থিম">
        <div class="section-title">রঙ থিম</div>
        <p>ডকুমেন্টেশনের রঙ থিম পরিবর্তন করুন।</p>

        <div class="form-mock">
          <div class="form-mock-title">🎨 রঙ থিম</div>
          
          <div class="field-group">
            <div class="field-group-title">🌙 থিম মোড</div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">
              <div style="border:2px solid var(--primary);background:var(--surface);border-radius:8px;padding:16px;cursor:pointer;text-align:center">
                <div style="font-size:24px;margin-bottom:8px">☀️</div>
                <div style="font-weight:600;margin-bottom:4px">লাইট</div>
                <div style="font-size:12px;color:var(--text-muted)">স্বাভাবিক</div>
              </div>
              <div style="border:2px solid var(--border);background:#1a1a2e;border-radius:8px;padding:16px;cursor:pointer;text-align:center;color:white">
                <div style="font-size:24px;margin-bottom:8px">🌙</div>
                <div style="font-weight:600;margin-bottom:4px">ডার্ক</div>
                <div style="font-size:12px;opacity:0.7">রাতের জন্য</div>
              </div>
              <div style="border:2px solid var(--border);background:#000000;border-radius:8px;padding:16px;cursor:pointer;text-align:center;color:#ffff00">
                <div style="font-size:24px;margin-bottom:8px">👁️</div>
                <div style="font-weight:600;margin-bottom:4px">হাই কন্ট্রাস্ট</div>
                <div style="font-size:12px;opacity:0.7">চোখের সমস্যার জন্য</div>
              </div>
            </div>
          </div>

          <div class="field-group" style="margin-top:12px">
            <div class="field-group-title">🎨 প্রাইমারি কালার</div>
            <div style="display:flex;gap:10px;flex-wrap:wrap">
              <div style="width:40px;height:40px;background:#e85d04;border-radius:8px;cursor:pointer;border:3px solid var(--primary)"></div>
              <div style="width:40px;height:40px;background:#6366f1;border-radius:8px;cursor:pointer;border:3px solid transparent"></div>
              <div style="width:40px;height:40px;background:#16a34a;border-radius:8px;cursor:pointer;border:3px solid transparent"></div>
              <div style="width:40px;height:40px;background:#dc2626;border-radius:8px;cursor:pointer;border:3px solid transparent"></div>
              <div style="width:40px;height:40px;background:#2563eb;border-radius:8px;cursor:pointer;border:3px solid transparent"></div>
              <div style="width:40px;height:40px;background:#7c3aed;border-radius:8px;cursor:pointer;border:3px solid transparent"></div>
            </div>
          </div>

          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">💾 সেভ করুন</button>
          </div>
        </div>

        <div class="info-box tip">
          <div class="info-box-title">💜 টিপস</div>
          <ul class="bullet-list">
            <li>লাইট থিম - দিনের বেলা ব্যবহারের জন্য সেরা</li>
            <li>ডার্ক থিম - রাতের বেলা চোখের আরামের জন্য</li>
            <li>হাই কন্ট্রাস্ট - চোখের সমস্যা থাকলে ব্যবহার করুন</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-আইকন-সেটিংস">
        <div class="section-title">আইকন সেটিংস</div>
        <p>ডকুমেন্টেশনে আইকন দেখানো বা লুকানো কন্ট্রোল করুন।</p>

        <div class="form-mock">
          <div class="form-mock-title">🎯 আইকন সেটিংস</div>
          
          <div class="field-group">
            <div class="field-group-title">👁️ আইকন ভিজিবিলিটি</div>
            
            <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid var(--border)">
              <div>
                <div style="font-weight:600">📱 পেজ আইকন</div>
                <div style="font-size:12px;color:var(--text-muted)">সাইডবার মেনুতে আইকন দেখাবে</div>
              </div>
              <div style="width:44px;height:24px;background:var(--primary);border-radius:12px;position:relative;cursor:pointer">
                <div style="width:20px;height:20px;background:white;border-radius:50%;position:absolute;right:2px;top:2px"></div>
              </div>
            </div>

            <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid var(--border)">
              <div>
                <div style="font-weight:600">🎨 সেকশন আইকন</div>
                <div style="font-size:12px;color:var(--text-muted)">সেকশন হেডারে আইকন দেখাবে</div>
              </div>
              <div style="width:44px;height:24px;background:var(--primary);border-radius:12px;position:relative;cursor:pointer">
                <div style="width:20px;height:20px;background:white;border-radius:50%;position:absolute;right:2px;top:2px"></div>
              </div>
            </div>

            <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid var(--border)">
              <div>
                <div style="font-weight:600">📊 স্ট্যাট কার্ড আইকন</div>
                <div style="font-size:12px;color:var(--text-muted)">পরিসংখ্যান কার্ডে আইকন দেখাবে</div>
              </div>
              <div style="width:44px;height:24px;background:var(--primary);border-radius:12px;position:relative;cursor:pointer">
                <div style="width:20px;height:20px;background:white;border-radius:50%;position:absolute;right:2px;top:2px"></div>
              </div>
            </div>

            <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0">
              <div>
                <div style="font-weight:600">🔍 সার্চ আইকন</div>
                <div style="font-size:12px;color:var(--text-muted)">সার্চ বারে আইকন দেখাবে</div>
              </div>
              <div style="width:44px;height:24px;background:var(--primary);border-radius:12px;position:relative;cursor:pointer">
                <div style="width:20px;height:20px;background:white;border-radius:50%;position:absolute;right:2px;top:2px"></div>
              </div>
            </div>
          </div>

          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">💾 সেভ করুন</button>
          </div>
        </div>
      </div>

      <div class="section" id="sec-লেআউট-সেটিংস">
        <div class="section-title">লেআউট সেটিংস</div>
        <p>ডকুমেন্টেশনের লেআউট এবং স্ট্রাকচার কাস্টমাইজ করুন।</p>

        <div class="form-mock">
          <div class="form-mock-title">📐 লেআউট সেটিংস</div>
          
          <div class="field-group">
            <div class="field-group-title">📏 সাইডবার প্রস্থ</div>
            <div style="display:flex;gap:10px;align-items:center;margin-bottom:12px">
              <input type="range" min="200" max="400" value="260" style="flex:1" />
              <span style="font-size:14px;font-weight:600;width:60px;text-align:center">260px</span>
            </div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">
              <div style="border:2px solid var(--border);border-radius:8px;padding:12px;text-align:center;cursor:pointer">
                <div style="font-size:12px;color:var(--text-muted)">সংকীর্ণ</div>
                <div style="font-size:14px">200px</div>
              </div>
              <div style="border:2px solid var(--primary);background:var(--primary-light);border-radius:8px;padding:12px;text-align:center;cursor:pointer">
                <div style="font-size:12px;color:var(--primary)">মাঝারি</div>
                <div style="font-size:14px;font-weight:600">260px</div>
              </div>
              <div style="border:2px solid var(--border);border-radius:8px;padding:12px;text-align:center;cursor:pointer">
                <div style="font-size:12px;color:var(--text-muted)">প্রশস্ত</div>
                <div style="font-size:14px">400px</div>
              </div>
            </div>
          </div>

          <div class="field-group" style="margin-top:12px">
            <div class="field-group-title">📄 কন্টেন্ট প্রস্থ</div>
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px">
              <div style="border:2px solid var(--primary);background:var(--primary-light);border-radius:8px;padding:12px;cursor:pointer;text-align:center">
                <div style="font-weight:600">ফুল উইথ</div>
                <div style="font-size:12px;color:var(--text-muted)">সম্পূর্ণ স্ক্রিন</div>
              </div>
              <div style="border:2px solid var(--border);border-radius:8px;padding:12px;cursor:pointer;text-align:center">
                <div style="font-weight:600">কনস্ট্রেইন্ড</div>
                <div style="font-size:12px;color:var(--text-muted)">১২০০px পর্যন্ত</div>
              </div>
            </div>
          </div>

          <div class="field-group" style="margin-top:12px">
            <div class="field-group-title">📊 ডান প্যানেল</div>
            <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:var(--bg);border-radius:8px">
              <div>
                <div style="font-weight:600">ডানদিকের সেকশন লিঙ্ক প্যানেল</div>
                <div style="font-size:12px;color:var(--text-muted)">বর্তমান পেজের সেকশন লিঙ্ক দেখাবে</div>
              </div>
              <div style="width:44px;height:24px;background:var(--primary);border-radius:12px;position:relative;cursor:pointer">
                <div style="width:20px;height:20px;background:white;border-radius:50%;position:absolute;right:2px;top:2px"></div>
              </div>
            </div>
          </div>

          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">💾 সেভ করুন</button>
          </div>
        </div>
      </div>

      <div class="section" id="sec-ভাষা-সেটিংস">
        <div class="section-title">ভাষা সেটিংস</div>
        <p>ডকুমেন্টেশনের ভাষা পরিবর্তন করুন।</p>

        <div class="form-mock">
          <div class="form-mock-title">🌐 ভাষা সেটিংস</div>
          
          <div class="field-group">
            <div class="field-group-title">🗣️ ডকুমেন্টেশন ভাষা</div>
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px">
              <div style="border:2px solid var(--primary);background:var(--primary-light);border-radius:8px;padding:16px;cursor:pointer;text-align:center">
                <div style="font-size:24px;margin-bottom:8px">🇧🇩</div>
                <div style="font-weight:600;margin-bottom:4px">বাংলা</div>
                <div style="font-size:12px;color:var(--text-muted)">বর্তমান ভাষা</div>
              </div>
              <div style="border:2px solid var(--border);border-radius:8px;padding:16px;cursor:pointer;text-align:center">
                <div style="font-size:24px;margin-bottom:8px">🇬🇧</div>
                <div style="font-weight:600;margin-bottom:4px">English</div>
                <div style="font-size:12px;color:var(--text-muted)">ইংরেজি</div>
              </div>
            </div>
          </div>

          <div class="info-box note">
            <div class="info-box-title">💡 তথ্য</div>
            <p>ভাষা পরিবর্তন করলে সব পেজের কন্টেন্ট নির্বাচিত ভাষায় দেখাবে।</p>
          </div>

          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">💾 সেভ করুন</button>
          </div>
        </div>
      </div>

      <div class="section" id="sec-প্রিন্ট-সেটিংস">
        <div class="section-title">প্রিন্ট সেটিংস</div>
        <p>প্রিন্ট করার সময় কী কী অন্তর্ভুক্ত হবে তা নির্ধারণ করুন।</p>

        <div class="form-mock">
          <div class="form-mock-title">🖨️ প্রিন্ট সেটিংস</div>
          
          <div class="field-group">
            <div class="field-group-title">📄 প্রিন্ট অপশন</div>
            
            <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid var(--border)">
              <div>
                <div style="font-weight:600">🎨 ব্যাকগ্রাউন্ড কালার</div>
                <div style="font-size:12px;color:var(--text-muted)">প্রিন্টে রঙিন ব্যাকগ্রাউন্ড অন্তর্ভুক্ত করবে</div>
              </div>
              <div style="width:44px;height:24px;background:var(--border);border-radius:12px;position:relative;cursor:pointer">
                <div style="width:20px;height:20px;background:white;border-radius:50%;position:absolute;left:2px;top:2px"></div>
              </div>
            </div>

            <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid var(--border)">
              <div>
                <div style="font-weight:600">🔗 লিঙ্ক URL</div>
                <div style="font-size:12px;color:var(--text-muted)">প্রিন্টে লিঙ্কের URL দেখাবে</div>
              </div>
              <div style="width:44px;height:24px;background:var(--primary);border-radius:12px;position:relative;cursor:pointer">
                <div style="width:20px;height:20px;background:white;border-radius:50%;position:absolute;right:2px;top:2px"></div>
              </div>
            </div>

            <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid var(--border)">
              <div>
                <div style="font-weight:600">📑 টেবিল অফ কন্টেন্ট</div>
                <div style="font-size:12px;color:var(--text-muted)">প্রিন্টের শুরুতে বিষয়সূচি যোগ করবে</div>
              </div>
              <div style="width:44px;height:24px;background:var(--primary);border-radius:12px;position:relative;cursor:pointer">
                <div style="width:20px;height:20px;background:white;border-radius:50%;position:absolute;right:2px;top:2px"></div>
              </div>
            </div>

            <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0">
              <div>
                <div style="font-weight:600">📄 পেজ নম্বর</div>
                <div style="font-size:12px;color:var(--text-muted)">প্রিন্টে পেজ নম্বর যোগ করবে</div>
              </div>
              <div style="width:44px;height:24px;background:var(--primary);border-radius:12px;position:relative;cursor:pointer">
                <div style="width:20px;height:20px;background:white;border-radius:50%;position:absolute;right:2px;top:2px"></div>
              </div>
            </div>
          </div>

          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary">💾 সেভ করুন</button>
          </div>
        </div>
      </div>

      <div class="section" id="sec-ডিফল্টে-রিসেট">
        <div class="section-title">ডিফল্টে রিসেট</div>
        <p>সব সেটিংস ডিফল্ট মানে ফিরিয়ে নিন।</p>

        <div class="info-box warning">
          <div class="info-box-title">⚠️ সতর্কতা</div>
          <p>এই কাজটি করলে আপনার সব কাস্টমাইজেশন মুছে যাবে এবং ডকুমেন্টেশন ডিফল্ট সেটিংসে ফিরে আসবে।</p>
        </div>

        <div class="form-mock">
          <div class="form-mock-title">🔄 রিসেট সেটিংস</div>
          
          <div style="padding:20px;text-align:center;background:#fef2f2;border:1px solid #fecaca;border-radius:8px;margin-bottom:16px">
            <div style="font-size:40px;margin-bottom:12px">⚠️</div>
            <div style="font-weight:600;color:var(--danger);margin-bottom:8px">সব সেটিংস মুছে যাবে!</div>
            <div style="font-size:14px;color:var(--text-muted)">আপনি কি নিশ্চিত?</div>
          </div>

          <div class="form-actions">
            <button class="btn-cancel">বাতিল</button>
            <button class="btn-primary" style="background:var(--danger)">🔄 ডিফল্টে রিসেট করুন</button>
          </div>
        </div>
      </div>

      <div class="section" id="sec-সেটিংস-সেভ">
        <div class="section-title">সেটিংস সেভ</div>
        <p>আপনার সেটিংস স্বয়ংক্রিয়ভাবে ব্রাউজারে সেভ থাকে।</p>

        <div class="info-box success">
          <div class="info-box-title">✅ অটো সেভ</div>
          <ul class="bullet-list">
            <li>সব সেটিংস স্বয়ংক্রিয়ভাবে আপনার ব্রাউজারে সেভ থাকে</li>
            <li>পরবর্তী বার যখন আসবেন, সেটিংস একই থাকবে</li>
            <li>আপনি যেকোনো সময় পরিবর্তন করতে পারেন</li>
            <li>ডিফল্টে রিসেট করলে সব সেটিংস মুছে যাবে</li>
          </ul>
        </div>

        <div class="form-mock">
          <div class="form-mock-title">💾 সেটিংস ম্যানেজমেন্ট</div>
          
          <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px">
            <button class="btn-primary" style="padding:16px">
              <div style="font-size:24px;margin-bottom:8px">💾</div>
              <div style="font-weight:600">সেটিংস সেভ করুন</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:4px">বর্তমান সেটিংস সেভ করুন</div>
            </button>
            <button class="btn-cancel" style="padding:16px">
              <div style="font-size:24px;margin-bottom:8px">📤</div>
              <div style="font-weight:600">এক্সপোর্ট</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:4px">সেটিংস ফাইল ডাউনলোড</div>
            </button>
            <button class="btn-cancel" style="padding:16px">
              <div style="font-size:24px;margin-bottom:8px">📥</div>
              <div style="font-weight:600">ইম্পোর্ট</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:4px">সেটিংস ফাইল আপলোড</div>
            </button>
            <button class="btn-primary" style="padding:16px;background:var(--success)">
              <div style="font-size:24px;margin-bottom:8px">✅</div>
              <div style="font-weight:600">প্রয়োগ করুন</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:4px">পরিবর্তন প্রয়োগ করুন</div>
            </button>
          </div>
        </div>

        <div class="info-box tip">
          <div class="info-box-title">💜 টিপস</div>
          <ul class="bullet-list">
            <li>সেটিংস পরিবর্তন করার পর "প্রয়োগ করুন" বাটনে ক্লিক করুন</li>
            <li>এক্সপোর্ট করে সেটিংস ব্যাকআপ রাখতে পারেন</li>
            <li>অন্য ডিভাইসে ইম্পোর্ট করে একই সেটিংস ব্যবহার করুন</li>
          </ul>
        </div>
      </div>
    `
  }

};
