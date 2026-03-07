// pages/future-updates.js
// মডিউল: Future Updates & Upcoming Features
// পেজ: future-updates

var PAGES_FUTURE_UPDATES = {

  'future-updates': {
    title: 'ভবিষ্যৎ আপডেট',
    sections: ['পেজ পরিচিতি', 'ফিটার ট্যাব', 'প্রগ্রেস ইন্ডিকেটর', 'আসন্ন ফিচারসমূহ', 'পরিকল্পিত ফিচার', 'ভবিষ্যৎ ফিচার', 'রোডম্যাপ'],
    content: `
      <div class="page-hero" style="background: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)">
        <div class="page-hero-icon">🚀</div>
        <div>
          <h1>Future Updates & Upcoming Features</h1>
          <p>ভবিষ্যতে আসছে নতুন সব ফিচার এবং আপডেট</p>
        </div>
      </div>

      <div class="section" id="sec-পেজ-পরিচিতি">
        <div class="section-title">পেজ পরিচিতি</div>
        <span class="nav-path">মেনু → সেটিংস → <strong>ভবিষ্যৎ আপডেট</strong></span>
        <p>এই পেজে দেখানো হয়েছে ভবিষ্যতে কিলন ম্যানেজমেন্ট সফটওয়্যারে কোন কোন নতুন ফিচার এবং উন্নতি যোগ করা হবে। প্রতিটি ফিচারের বর্তমান অবস্থা এবং কখন আসছে তা দেখা যাবে।</p>
        
        <div class="info-box success">
          <div class="info-box-title">💡 এই পেজে যা পাবেন</div>
          <ul class="bullet-list">
            <li>আসন্ন ফিচারসমূহের তালিকা</li>
            <li>প্রতিটি ফিচারের বিস্তারিত বিবরণ</li>
            <li>ফিচারের বর্তমান অবস্থা (Status)</li>
            <li>কখন আসছে তার সময়সীমা</li>
            <li>সফটওয়্যার উন্নতির রোডম্যাপ</li>
          </ul>
        </div>
      </div>

      <div class="section" id="sec-ফিল্টার-ট্যাব">
        <div class="section-title">ফিচার ফিল্টার</div>
        <p>ফিচারগুলো তাদের অবস্থা অনুযায়ী ফিল্টার করুন।</p>

        <div style="display:flex;gap:10px;flex-wrap:wrap;margin:20px 0">
          <button class="btn-primary" style="background:var(--primary);border:none;padding:12px 24px;border-radius:8px;cursor:pointer;font-weight:600">
            📋 সব (১৫)
          </button>
          <button class="btn-cancel" style="background:var(--bg);border:1px solid var(--border);padding:12px 24px;border-radius:8px;cursor:pointer">
            🔜 আসন্ন (৫)
          </button>
          <button class="btn-cancel" style="background:var(--bg);border:1px solid var(--border);padding:12px 24px;border-radius:8px;cursor:pointer">
            📅 পরিকল্পিত (৬)
          </button>
          <button class="btn-cancel" style="background:var(--bg);border:1px solid var(--border);padding:12px 24px;border-radius:8px;cursor:pointer">
            🔮 ভবিষ্যৎ (৪)
          </button>
        </div>
      </div>

      <div class="section" id="sec-প্রগ্রেস-ইন্ডিকেটর">
        <div class="section-title">সফটওয়্যার উন্নতি প্রগ্রেস</div>
        <p>আমাদের সফটওয়্যার কতটুকো উন্নত হয়েছে এবং কোথায় যাচ্ছে।</p>

        <div style="background:linear-gradient(135deg, #f8fafc, #f1f5f9);border-radius:12px;padding:24px;margin:20px 0">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
            <div>
              <div style="font-size:14px;color:var(--text-muted);margin-bottom:4px">বর্তমান ভার্সন</div>
              <div style="font-size:24px;font-weight:700;color:var(--primary)">v১.০.০</div>
            </div>
            <div style="text-align:right">
              <div style="font-size:14px;color:var(--text-muted);margin-bottom:4px">পরবর্তী আপডেট</div>
              <div style="font-size:24px;font-weight:700;color:var(--success)">v১.১.০</div>
            </div>
          </div>

          <div style="background:#e2e8f0;border-radius:10px;height:12px;overflow:hidden;margin-bottom:16px">
            <div style="background:linear-gradient(90deg, #6366f1, #8b5cf6);height:100%;width:65%;border-radius:10px;transition:width 0.5s ease"></div>
          </div>

          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;text-align:center">
            <div>
              <div style="font-size:28px;font-weight:700;color:var(--success)">৯৪</div>
              <div style="font-size:13px;color:var(--text-muted)">সম্পূর্ণ ফিচার</div>
            </div>
            <div>
              <div style="font-size:28px;font-weight:700;color:var(--primary)">১৫</div>
              <div style="font-size:13px;color:var(--text-muted)">আসন্ন ফিচার</div>
            </div>
            <div>
              <div style="font-size:28px;font-weight:700;color:var(--warning)">৬৫%</div>
              <div style="font-size:13px;color:var(--text-muted)">উন্নতি</div>
            </div>
            <div>
              <div style="font-size:28px;font-weight:700;color:var(--info)">২০২৬</div>
              <div style="font-size:13px;color:var(--text-muted)">টার্গেট</div>
            </div>
          </div>
        </div>
      </div>

      <div class="section" id="sec-আসন্ন-ফিচারসমূহ">
        <div class="section-title">🔜 আসন্ন ফিচারসমূহ (Upcoming)</div>
        <p>এই ফিচারগুলো খুব শীঘ্রই যোগ করা হবে।</p>

        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:20px;margin:20px 0">
          
          <!-- Feature Card 1 -->
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.08);transition:transform 0.2s,box-shadow 0.2s">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:16px">
              <div style="width:48px;height:48px;background:linear-gradient(135deg, #6366f1, #8b5cf6);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:24px">📊</div>
              <span style="background:#dcfce7;color:#16a34a;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600">আসন্ন</span>
            </div>
            <h3 style="font-size:18px;font-weight:700;margin-bottom:8px;color:var(--text)">Advanced Business Dashboard</h3>
            <p style="font-size:14px;color:var(--text-muted);margin-bottom:16px;line-height:1.6">রিয়েল-টাইম ব্যবসায়িক পারফরম্যান্স দেখার স্মার্ট ড্যাশবোর্ড।</p>
            <div style="background:#f8fafc;border-radius:8px;padding:12px;margin-bottom:16px">
              <div style="font-size:12px;font-weight:600;color:var(--text-muted);margin-bottom:8px">ফিচার হাইলাইটস:</div>
              <ul style="margin:0;padding-left:20px;font-size:13px;color:var(--text-muted)">
                <li style="margin-bottom:4px">দৈনিক বিক্রয়</li>
                <li style="margin-bottom:4px">দৈনিক উৎপাদন</li>
                <li style="margin-bottom:4px">ট্রিপ সামারি</li>
                <li style="margin-bottom:4px">বকেয়া প্রাপ্য</li>
                <li>লাভের বিবরণ</li>
              </ul>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span style="font-size:12px;color:var(--text-muted)">📅 আসছে: এপ্রিল ২০২৬</span>
            </div>
          </div>

          <!-- Feature Card 2 -->
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.08);transition:transform 0.2s,box-shadow 0.2s">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:16px">
              <div style="width:48px;height:48px;background:linear-gradient(135deg, #16a34a, #22c55e);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:24px">📦</div>
              <span style="background:#dcfce7;color:#16a34a;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600">আসন্ন</span>
            </div>
            <h3 style="font-size:18px;font-weight:700;margin-bottom:8px;color:var(--text)">Brick Stock Management</h3>
            <p style="font-size:14px;color:var(--text-muted);margin-bottom:16px;line-height:1.6">ইটের সম্পূর্ণ স্টক ট্র্যাকিং সিস্টেম।</p>
            <div style="background:#f8fafc;border-radius:8px;padding:12px;margin-bottom:16px">
              <div style="font-size:12px;font-weight:600;color:var(--text-muted);margin-bottom:8px">ফিচার হাইলাইটস:</div>
              <ul style="margin:0;padding-left:20px;font-size:13px;color:var(--text-muted)">
                <li style="margin-bottom:4px">চুল্লি স্টক</li>
                <li style="margin-bottom:4px">গুদাম স্টক</li>
                <li style="margin-bottom:4px">বিক্রিত ইট</li>
                <li style="margin-bottom:4px">ভাঙা ইট</li>
                <li>লাইভ স্টক রিপোর্ট</li>
              </ul>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span style="font-size:12px;color:var(--text-muted)">📅 আসছে: মে ২০২৬</span>
            </div>
          </div>

          <!-- Feature Card 3 -->
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.08);transition:transform 0.2s,box-shadow 0.2s">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:16px">
              <div style="width:48px;height:48px;background:linear-gradient(135deg, #f59e0b, #fbbf24);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:24px">🚚</div>
              <span style="background:#dcfce7;color:#16a34a;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600">আসন্ন</span>
            </div>
            <h3 style="font-size:18px;font-weight:700;margin-bottom:8px;color:var(--text)">Smart Delivery Tracking</h3>
            <p style="font-size:14px;color:var(--text-muted);margin-bottom:16px;line-height:1.6">উন্নত ডেলিভারি এবং ট্রিপ মনিটরিং সিস্টেম।</p>
            <div style="background:#f8fafc;border-radius:8px;padding:12px;margin-bottom:16px">
              <div style="font-size:12px;font-weight:600;color:var(--text-muted);margin-bottom:8px">ফিচার হাইলাইটস:</div>
              <ul style="margin:0;padding-left:20px;font-size:13px;color:var(--text-muted)">
                <li style="margin-bottom:4px">ট্রিপ স্ট্যাটাস</li>
                <li style="margin-bottom:4px">ড্রাইভার পারফরম্যান্স</li>
                <li style="margin-bottom:4px">ডেলিভারি ইতিহাস</li>
                <li>ট্রিপ দক্ষতা</li>
              </ul>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span style="font-size:12px;color:var(--text-muted)">📅 আসছে: জুন ২০২৬</span>
            </div>
          </div>

          <!-- Feature Card 4 -->
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.08);transition:transform 0.2s,box-shadow 0.2s">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:16px">
              <div style="width:48px;height:48px;background:linear-gradient(135deg, #ec4899, #f43f5e);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:24px">📱</div>
              <span style="background:#dcfce7;color:#16a34a;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600">আসন্ন</span>
            </div>
            <h3 style="font-size:18px;font-weight:700;margin-bottom:8px;color:var(--text)">Mobile App Integration</h3>
            <p style="font-size:14px;color:var(--text-muted);margin-bottom:16px;line-height:1.6">ড্রাইভার এবং ম্যানেজারদের জন্য মোবাইল অ্যাপ।</p>
            <div style="background:#f8fafc;border-radius:8px;padding:12px;margin-bottom:16px">
              <div style="font-size:12px;font-weight:600;color:var(--text-muted);margin-bottom:8px">ফিচার হাইলাইটস:</div>
              <ul style="margin:0;padding-left:20px;font-size:13px;color:var(--text-muted)">
                <li style="margin-bottom:4px">ট্রিপ আপডেট</li>
                <li style="margin-bottom:4px">ডেলিভারি কনফার্মেশন</li>
                <li style="margin-bottom:4px">পেমেন্ট অ্যালার্ট</li>
                <li>উৎপাদন আপডেট</li>
              </ul>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span style="font-size:12px;color:var(--text-muted)">📅 আসছে: জুলাই ২০২৬</span>
            </div>
          </div>

          <!-- Feature Card 5 -->
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.08);transition:transform 0.2s,box-shadow 0.2s">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:16px">
              <div style="width:48px;height:48px;background:linear-gradient(135deg, #06b6d4, #0891b2);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:24px">💬</div>
              <span style="background:#dcfce7;color:#16a34a;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600">আসন্ন</span>
            </div>
            <h3 style="font-size:18px;font-weight:700;margin-bottom:8px;color:var(--text)">Automated SMS & WhatsApp</h3>
            <p style="font-size:14px;color:var(--text-muted);margin-bottom:16px;line-height:1.6">গ্রাহক এবং স্টাফদের অটোমেটিক নোটিফিকেশন।</p>
            <div style="background:#f8fafc;border-radius:8px;padding:12px;margin-bottom:16px">
              <div style="font-size:12px;font-weight:600;color:var(--text-muted);margin-bottom:8px">ফিচার হাইলাইটস:</div>
              <ul style="margin:0;padding-left:20px;font-size:13px;color:var(--text-muted)">
                <li style="margin-bottom:4px">ইনভয়েস SMS</li>
                <li style="margin-bottom:4px">বকেয়া রিমাইন্ডার</li>
                <li style="margin-bottom:4px">ডেলিভারি আপডেট</li>
                <li>পেমেন্ট কনফার্মেশন</li>
              </ul>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span style="font-size:12px;color:var(--text-muted)">📅 আসছে: আগস্ট ২০২৬</span>
            </div>
          </div>

        </div>
      </div>

      <div class="section" id="sec-পরিকল্পিত-ফিচার">
        <div class="section-title">📅 পরিকল্পিত ফিচার (Planned)</div>
        <p>এই ফিচারগুলো পরিকল্পনা অনুযায়ী তৈরি করা হবে।</p>

        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:20px;margin:20px 0">
          
          <!-- Feature Card 6 -->
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.08);transition:transform 0.2s,box-shadow 0.2s">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:16px">
              <div style="width:48px;height:48px;background:linear-gradient(135deg, #8b5cf6, #a855f7);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:24px">📍</div>
              <span style="background:#dbeafe;color:#2563eb;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600">পরিকল্পিত</span>
            </div>
            <h3 style="font-size:18px;font-weight:700;margin-bottom:8px;color:var(--text)">GPS Vehicle Tracking</h3>
            <p style="font-size:14px;color:var(--text-muted);margin-bottom:16px;line-height:1.6">রিয়েল-টাইম GPS ব্যবহার করে যানবাহন ট্র্যাক করুন।</p>
            <div style="background:#f8fafc;border-radius:8px;padding:12px;margin-bottom:16px">
              <div style="font-size:12px;font-weight:600;color:var(--text-muted);margin-bottom:8px">ফিচার হাইলাইটস:</div>
              <ul style="margin:0;padding-left:20px;font-size:13px;color:var(--text-muted)">
                <li style="margin-bottom:4px">লাইভ ম্যাপ ট্র্যাকিং</li>
                <li style="margin-bottom:4px">যানবাহন রুট ইতিহাস</li>
                <li>ট্রিপ টাইমলাইন</li>
              </ul>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span style="font-size:12px;color:var(--text-muted)">📅 পরিকল্পিত: সেপ্টেম্বর ২০২৬</span>
            </div>
          </div>

          <!-- Feature Card 7 -->
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.08);transition:transform 0.2s,box-shadow 0.2s">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:16px">
              <div style="width:48px;height:48px;background:linear-gradient(135deg, #14b8a6, #0d9488);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:24px">🧾</div>
              <span style="background:#dbeafe;color:#2563eb;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600">পরিকল্পিত</span>
            </div>
            <h3 style="font-size:18px;font-weight:700;margin-bottom:8px;color:var(--text)">Advance Challan System</h3>
            <p style="font-size:14px;color:var(--text-muted);margin-bottom:16px;line-height:1.6">অ্যাডভান্স ডেলিভারি চালান তৈরি এবং ম্যানেজমেন্ট।</p>
            <div style="background:#f8fafc;border-radius:8px;padding:12px;margin-bottom:16px">
              <div style="font-size:12px;font-weight:600;color:var(--text-muted);margin-bottom:8px">ফিচার হাইলাইটস:</div>
              <ul style="margin:0;padding-left:20px;font-size:13px;color:var(--text-muted)">
                <li style="margin-bottom:4px">অ্যাডভান্স অর্ডার বুকিং</li>
                <li style="margin-bottom:4px">পেন্ডিং ডেলিভারি ট্র্যাকিং</li>
                <li style="margin-bottom:4px">পার্শিয়াল ডেলিভারি</li>
                <li>কাস্টমার অর্ডার ইতিহাস</li>
              </ul>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span style="font-size:12px;color:var(--text-muted)">📅 পরিকল্পিত: অক্টোবর ২০২৬</span>
            </div>
          </div>

          <!-- Feature Card 8 -->
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.08);transition:transform 0.2s,box-shadow 0.2s">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:16px">
              <div style="width:48px;height:48px;background:linear-gradient(135deg, #f97316, #fb923c);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:24px">🌤️</div>
              <span style="background:#dbeafe;color:#2563eb;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600">পরিকল্পিত</span>
            </div>
            <h3 style="font-size:18px;font-weight:700;margin-bottom:8px;color:var(--text)">Weather Monitoring</h3>
            <p style="font-size:14px;color:var(--text-muted);margin-bottom:16px;line-height:1.6">চুল্লি পরিচালনার জন্য আবহাওয়া তথ্য।</p>
            <div style="background:#f8fafc;border-radius:8px;padding:12px;margin-bottom:16px">
              <div style="font-size:12px;font-weight:600;color:var(--text-muted);margin-bottom:8px">ফিচার হাইলাইটস:</div>
              <ul style="margin:0;padding-left:20px;font-size:13px;color:var(--text-muted)">
                <li style="margin-bottom:4px">তাপমাত্রা</li>
                <li style="margin-bottom:4px">বৃষ্টির পূর্বাভাস</li>
                <li style="margin-bottom:4px">বাতাসের অবস্থা</li>
                <li>আবহাওয়া অ্যালার্ট</li>
              </ul>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span style="font-size:12px;color:var(--text-muted)">📅 পরিকল্পিত: নভেম্বর ২০২৬</span>
            </div>
          </div>

          <!-- Feature Card 9 -->
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.08);transition:transform 0.2s,box-shadow 0.2s">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:16px">
              <div style="width:48px;height:48px;background:linear-gradient(135deg, #64748b, #475569);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:24px">📄</div>
              <span style="background:#dbeafe;color:#2563eb;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600">পরিকল্পিত</span>
            </div>
            <h3 style="font-size:18px;font-weight:700;margin-bottom:8px;color:var(--text)">Document Management</h3>
            <p style="font-size:14px;color:var(--text-muted);margin-bottom:16px;line-height:1.6">গুরুত্বপূর্ণ নথি নিরাপদে সংরক্ষণ এবং পরিচালনা।</p>
            <div style="background:#f8fafc;border-radius:8px;padding:12px;margin-bottom:16px">
              <div style="font-size:12px;font-weight:600;color:var(--text-muted);margin-bottom:8px">ফিচার হাইলাইটস:</div>
              <ul style="margin:0;padding-left:20px;font-size:13px;color:var(--text-muted)">
                <li style="margin-bottom:4px">জমির নথি</li>
                <li style="margin-bottom:4px">ড্রাইভার লাইসেন্স</li>
                <li style="margin-bottom:4px">চুক্তিপত্র</li>
                <li>কোম্পানি সার্টিফিকেট</li>
              </ul>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span style="font-size:12px;color:var(--text-muted)">📅 পরিকল্পিত: ডিসেম্বর ২০২৬</span>
            </div>
          </div>

          <!-- Feature Card 10 -->
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.08);transition:transform 0.2s,box-shadow 0.2s">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:16px">
              <div style="width:48px;height:48px;background:linear-gradient(135deg, #0ea5e9, #0284c7);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:24px">☁️</div>
              <span style="background:#dbeafe;color:#2563eb;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600">পরিকল্পিত</span>
            </div>
            <h3 style="font-size:18px;font-weight:700;margin-bottom:8px;color:var(--text)">Data Backup & Security</h3>
            <p style="font-size:14px;color:var(--text-muted);margin-bottom:16px;line-height:1.6">অটোমেটিক ব্যাকআপ এবং ডেটা সুরক্ষা।</p>
            <div style="background:#f8fafc;border-radius:8px;padding:12px;margin-bottom:16px">
              <div style="font-size:12px;font-weight:600;color:var(--text-muted);margin-bottom:8px">ফিচার হাইলাইটস:</div>
              <ul style="margin:0;padding-left:20px;font-size:13px;color:var(--text-muted)">
                <li style="margin-bottom:4px">ক্লাউড ব্যাকআপ</li>
                <li style="margin-bottom:4px">অটো ব্যাকআপ শিডিউল</li>
                <li>ডেটা রিস্টোর অপশন</li>
              </ul>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span style="font-size:12px;color:var(--text-muted)">📅 পরিকল্পিত: জানুয়ারি ২০২৭</span>
            </div>
          </div>

          <!-- Feature Card 11 -->
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.08);transition:transform 0.2s,box-shadow 0.2s">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:16px">
              <div style="width:48px;height:48px;background:linear-gradient(135deg, #a855f7, #c084fc);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:24px">🏭</div>
              <span style="background:#dbeafe;color:#2563eb;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600">পরিকল্পিত</span>
            </div>
            <h3 style="font-size:18px;font-weight:700;margin-bottom:8px;color:var(--text)">Multi-Kiln Management</h3>
            <p style="font-size:14px;color:var(--text-muted);margin-bottom:16px;line-height:1.6">একটি সিস্টেম থেকে একাধিক চুল্লি পরিচালনা।</p>
            <div style="background:#f8fafc;border-radius:8px;padding:12px;margin-bottom:16px">
              <div style="font-size:12px;font-weight:600;color:var(--text-muted);margin-bottom:8px">ফিচার হাইলাইটস:</div>
              <ul style="margin:0;padding-left:20px;font-size:13px;color:var(--text-muted)">
                <li style="margin-bottom:4px">একাধিক চুল্লি ড্যাশবোর্ড</li>
                <li style="margin-bottom:4px">পৃথক উৎপাদন রিপোর্ট</li>
                <li>কেন্দ্রীয় ব্যবস্থাপনা</li>
              </ul>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span style="font-size:12px;color:var(--text-muted)">📅 পরিকল্পিত: ফেব্রুয়ারি ২০২৭</span>
            </div>
          </div>

        </div>
      </div>

      <div class="section" id="sec-ভবিষ্যৎ-ফিচার">
        <div class="section-title">🔮 ভবিষ্যৎ ফিচার (Future)</div>
        <p>এই ফিচারগুলো ভবিষ্যতে যোগ করার পরিকল্পনা আছে।</p>

        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:20px;margin:20px 0">
          
          <!-- Feature Card 12 -->
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.08);transition:transform 0.2s,box-shadow 0.2s">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:16px">
              <div style="width:48px;height:48px;background:linear-gradient(135deg, #6366f1, #818cf8);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:24px">🤖</div>
              <span style="background:#f3e8ff;color:#9333ea;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600">ভবিষ্যৎ</span>
            </div>
            <h3 style="font-size:18px;font-weight:700;margin-bottom:8px;color:var(--text)">AI Smart Reports</h3>
            <p style="font-size:14px;color:var(--text-muted);margin-bottom:16px;line-height:1.6">স্মার্ট রিপোর্টিং ব্যবহার করে অটোমেটিক ডেটা বিশ্লেষণ।</p>
            <div style="background:#f8fafc;border-radius:8px;padding:12px;margin-bottom:16px">
              <div style="font-size:12px;font-weight:600;color:var(--text-muted);margin-bottom:8px">ফিচার হাইলাইটস:</div>
              <ul style="margin:0;padding-left:20px;font-size:13px;color:var(--text-muted)">
                <li style="margin-bottom:4px">সবচেয়ে লাভজনক ব্যাচ</li>
                <li style="margin-bottom:4px">সেরা গ্রাহক</li>
                <li>ড্রাইভার পারফরম্যান্স</li>
              </ul>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span style="font-size:12px;color:var(--text-muted)">📅 ভবিষ্যৎ: ২০২৭</span>
            </div>
          </div>

          <!-- Feature Card 13 -->
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.08);transition:transform 0.2s,box-shadow 0.2s">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:16px">
              <div style="width:48px;height:48px;background:linear-gradient(135deg, #10b981, #34d399);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:24px">💰</div>
              <span style="background:#f3e8ff;color:#9333ea;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600">ভবিষ্যৎ</span>
            </div>
            <h3 style="font-size:18px;font-weight:700;margin-bottom:8px;color:var(--text)">Advanced Accounting</h3>
            <p style="font-size:14px;color:var(--text-muted);margin-bottom:16px;line-height:1.6">আর্থিক নিয়ন্ত্রণের জন্য উন্নত অ্যাকাউন্টিং টুলস।</p>
            <div style="background:#f8fafc;border-radius:8px;padding:12px;margin-bottom:16px">
              <div style="font-size:12px;font-weight:600;color:var(--text-muted);margin-bottom:8px">ফিচার হাইলাইটস:</div>
              <ul style="margin:0;padding-left:20px;font-size:13px;color:var(--text-muted)">
                <li style="margin-bottom:4px">খরচ বিশ্লেষণ</li>
                <li style="margin-bottom:4px">বাজেট পরিকল্পনা</li>
                <li style="margin-bottom:4px">আর্থিক পূর্বাভাস</li>
                <li>উন্নত রিপোর্ট</li>
              </ul>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span style="font-size:12px;color:var(--text-muted)">📅 ভবিষ্যৎ: ২০২৭</span>
            </div>
          </div>

          <!-- Feature Card 14 -->
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.08);transition:transform 0.2s,box-shadow 0.2s">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:16px">
              <div style="width:48px;height:48px;background:linear-gradient(135deg, #f43f5e, #fb7185);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:24px">📱</div>
              <span style="background:#f3e8ff;color:#9333ea;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600">ভবিষ্যৎ</span>
            </div>
            <h3 style="font-size:18px;font-weight:700;margin-bottom:8px;color:var(--text)">Smart Invoice System</h3>
            <p style="font-size:14px;color:var(--text-muted);margin-bottom:16px;line-height:1.6">উন্নত ডিজিটাল ইনভয়েস ব্যবস্থাপনা।</p>
            <div style="background:#f8fafc;border-radius:8px;padding:12px;margin-bottom:16px">
              <div style="font-size:12px;font-weight:600;color:var(--text-muted);margin-bottom:8px">ফিচার হাইলাইটস:</div>
              <ul style="margin:0;padding-left:20px;font-size:13px;color:var(--text-muted)">
                <li style="margin-bottom:4px">QR কোড ইনভয়েস</li>
                <li style="margin-bottom:4px">ডিজিটাল শেয়ারিং</li>
                <li style="margin-bottom:4px">PDF এক্সপোর্ট</li>
                <li>WhatsApp শেয়ারিং</li>
              </ul>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span style="font-size:12px;color:var(--text-muted)">📅 ভবিষ্যৎ: ২০২৭</span>
            </div>
          </div>

          <!-- Feature Card 15 -->
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.08);transition:transform 0.2s,box-shadow 0.2s">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:16px">
              <div style="width:48px;height:48px;background:linear-gradient(135deg, #f59e0b, #fbbf24);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:24px">📈</div>
              <span style="background:#f3e8ff;color:#9333ea;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600">ভবিষ্যৎ</span>
            </div>
            <h3 style="font-size:18px;font-weight:700;margin-bottom:8px;color:var(--text)">Batch Performance Analytics</h3>
            <p style="font-size:14px;color:var(--text-muted);margin-bottom:16px;line-height:1.6">প্রতিটি ইট উৎপাদন ব্যাচের বিস্তারিত বিশ্লেষণ।</p>
            <div style="background:#f8fafc;border-radius:8px;padding:12px;margin-bottom:16px">
              <div style="font-size:12px;font-weight:600;color:var(--text-muted);margin-bottom:8px">ফিচার হাইলাইটস:</div>
              <ul style="margin:0;padding-left:20px;font-size:13px;color:var(--text-muted)">
                <li style="margin-bottom:4px">মোট কাঁচা ইট</li>
                <li style="margin-bottom:4px">পোড়া ইট</li>
                <li style="margin-bottom:4px">ক্ষতির শতাংশ</li>
                <li style="margin-bottom:4px">প্রতি ১০০০ ইট খরচ</li>
                <li>ব্যাচ লাভ বিশ্লেষণ</li>
              </ul>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span style="font-size:12px;color:var(--text-muted)">📅 ভবিষ্যৎ: ২০২৭</span>
            </div>
          </div>

        </div>
      </div>

      <div class="section" id="sec-রোডম্যাপ">
        <div class="section-title">🗺️ উন্নতি রোডম্যাপ</div>
        <p>আমাদের সফটওয়্যার উন্নতির পরিকল্পনা এবং সময়সীমা।</p>

        <div style="background:linear-gradient(135deg, #f8fafc, #f1f5f9);border-radius:12px;padding:24px;margin:20px 0">
          <div style="position:relative;padding-left:30px">
            <div style="position:absolute;left:0;top:0;bottom:0;width:3px;background:linear-gradient(180deg, #6366f1, #8b5cf6, #a855f7);border-radius:3px"></div>
            
            <div style="margin-bottom:24px">
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
                <div style="width:14px;height:14px;background:#6366f1;border-radius:50%;border:3px solid white;box-shadow:0 2px 4px rgba(0,0,0,0.1)"></div>
                <div style="font-weight:700;color:var(--text)">মার্চ ২০২৬ - v১.০.০</div>
                <span style="background:#dcfce7;color:#16a34a;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:600">সম্পূর্ণ</span>
              </div>
              <p style="font-size:14px;color:var(--text-muted);margin-left:26px">প্রাথমিক লঞ্চ - ৯৪টি ফিচার সহ</p>
            </div>

            <div style="margin-bottom:24px">
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
                <div style="width:14px;height:14px;background:#8b5cf6;border-radius:50%;border:3px solid white;box-shadow:0 2px 4px rgba(0,0,0,0.1)"></div>
                <div style="font-weight:700;color:var(--text)">এপ্রিল - আগস্ট ২০২৬ - v১.১.০</div>
                <span style="background:#dbeafe;color:#2563eb;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:600">চলছে</span>
              </div>
              <p style="font-size:14px;color:var(--text-muted);margin-left:26px">ড্যাশবোর্ড, স্টক ম্যানেজমেন্ট, ডেলিভারি ট্র্যাকিং, মোবাইল অ্যাপ, SMS/WhatsApp</p>
            </div>

            <div style="margin-bottom:24px">
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
                <div style="width:14px;height:14px;background:#a855f7;border-radius:50%;border:3px solid white;box-shadow:0 2px 4px rgba(0,0,0,0.1)"></div>
                <div style="font-weight:700;color:var(--text)">সেপ্টেম্বর ২০২৬ - জানুয়ারি ২০২৭ - v১.২.০</div>
                <span style="background:#f3e8ff;color:#9333ea;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:600">পরিকল্পিত</span>
              </div>
              <p style="font-size:14px;color:var(--text-muted);margin-left:26px">GPS ট্র্যাকিং, অ্যাডভান্স চালান, আবহাওয়া, ডকুমেন্ট ম্যানেজমেন্ট, ডেটা ব্যাকআপ</p>
            </div>

            <div style="margin-bottom:24px">
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
                <div style="width:14px;height:14px;background:#c084fc;border-radius:50%;border:3px solid white;box-shadow:0 2px 4px rgba(0,0,0,0.1)"></div>
                <div style="font-weight:700;color:var(--text)">ফেব্রুয়ারি ২০২৭ - v১.৩.০</div>
                <span style="background:#f3e8ff;color:#9333ea;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:600">পরিকল্পিত</span>
              </div>
              <p style="font-size:14px;color:var(--text-muted);margin-left:26px">মাল্টি-চুল্লি ম্যানেজমেন্ট</p>
            </div>

            <div>
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
                <div style="width:14px;height:14px;background:#e9d5ff;border-radius:50%;border:3px solid white;box-shadow:0 2px 4px rgba(0,0,0,0.1)"></div>
                <div style="font-weight:700;color:var(--text)">২০২৭ - v২.০.০</div>
                <span style="background:#f3e8ff;color:#9333ea;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:600">ভবিষ্যৎ</span>
              </div>
              <p style="font-size:14px;color:var(--text-muted);margin-left:26px">AI স্মার্ট রিপোর্ট, উন্নত অ্যাকাউন্টিং, স্মার্ট ইনভয়েস, ব্যাচ পারফরম্যান্স</p>
            </div>

          </div>
        </div>

        <div class="info-box tip">
          <div class="info-box-title">💜 আপনার মতামত গুরুত্বপূর্ণ</div>
          <p>আপনার কোন ফিচার সবচেয়ে বেশি দরকার? আমাদের জানান! আমরা আপনার মতামতের ভিত্তিতে অগ্রাধিকার ঠিক করি।</p>
          <button class="btn-primary" style="background:var(--primary);color:white;border:none;padding:12px 24px;border-radius:8px;cursor:pointer;font-weight:600;margin-top:12px">
            💬 মতামত দিন
          </button>
        </div>
      </div>
    `
  }

};
