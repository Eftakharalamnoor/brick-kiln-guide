// pages/worker.js
// মডিউল: শ্রমিক মজুরি
// পেজ: worker-type, worker-list, work-entry

// Helper to generate placeholder pages for sections not yet detailed
function generatePlaceholder(icon, title, navPath, description, fields) {
  const formFields =
    fields.length > 0
      ? `
    <div class="section" id="sec-ফর্ম-বিবরণ">
      <div class="section-title">ফর্ম বিবরণ</div>
      <div class="form-mock">
        <div class="form-mock-title">${icon} নতুন ${title.replace(" তালিকা", "").replace(" ব্যবস্থাপনা", "")}</div>
        <div class="field-group">
          <div class="field-group-title">📦 মৌলিক তথ্য</div>
          ${fields
            .map(
              ([label, placeholder, req]) => `
          <div class="form-row single">
            <div class="form-field">
              <label>${label}${req ? ' <span class="required">*</span>' : ""}</label>
              <div class="field-mock">${placeholder}</div>
            </div>
          </div>`,
            )
            .join("")}
        </div>
        <div class="form-actions">
          <button class="btn-cancel">বাতিল</button>
          <button class="btn-primary">সংরক্ষণ করুন</button>
        </div>
      </div>
    </div>
  `
      : "";

  return `
    <div class="page-hero">
      <div class="page-hero-icon">${icon}</div>
      <div>
        <h1>${title}</h1>
        <p>${description}</p>
      </div>
    </div>

    <div class="section" id="sec-পেজ-পরিচিতি">
      <div class="section-title">পেজ পরিচিতি</div>
      <span class="nav-path">মেনু → <strong>${navPath}</strong></span>
      <p>${description}</p>
      <div class="info-box note">
        <div class="info-box-title">💡 নেভিগেশন</div>
        বাম মেনু থেকে <strong>${navPath}</strong> পথে এই পেজে আসুন।
      </div>
    </div>

    <div class="section" id="sec-এন্ট্রি-প্রক্রিয়া">
      <div class="section-title">এন্ট্রি প্রক্রিয়া</div>
      <ol class="steps">
        <li>বাম মেনু থেকে পেজে প্রবেশ করুন।</li>
        <li>উপরের ডানদিকে <strong>"+ নতুন"</strong> বাটনে ক্লিক করুন।</li>
        <li>ফর্মের সকল বাধ্যতামূলক (*) ফিল্ড পূরণ করুন।</li>
        <li><strong>"সংরক্ষণ করুন"</strong> বাটনে ক্লিক করুন।</li>
      </ol>
      <div class="info-box success">
        <div class="info-box-title">✅ সার্চ ও ফিল্টার</div>
        তালিকায় সার্চ বার ব্যবহার করে নাম বা আইডি দিয়ে দ্রুত খুঁজুন। ফিল্টার দিয়ে সক্রিয়/নিষ্ক্রিয় আলাদা করুন।
      </div>
    </div>

    ${formFields}
  `;
}

var PAGES_WORKER = {
  "worker-type": {
    title: "শ্রমিক ধরন",
    sections: ["পেজ পরিচিতি", "নতুন শ্রমিক ধরন", "ফর্ম বিবরণ"],
    content: generatePlaceholder(
      "👷",
      "শ্রমিক ধরন",
      "শ্রমিক মজুরি → শ্রমিক ধরন",
      "শ্রমিকদের বিভিন্ন ক্যাটাগরি তৈরি করুন (যেমন: মাটি কাটার শ্রমিক, ইট তৈরির শ্রমিক, চুল্লি পরিচালক)।",
      [
        ["শ্রমিক ধরনের নাম", "ধরনের নাম লিখুন", true],
        ["মজুরির ধরন", "দৈনিক / পিস / মাসিক ▼", true],
        ["মজুরির হার (৳)", "0", true],
        ["স্ট্যাটাস", "টগল", false],
      ],
    ),
  },

  "worker-list": {
    title: "শ্রমিক তালিকা",
    sections: ["পেজ পরিচিতি", "নতুন শ্রমিক যোগ", "ফর্ম বিবরণ"],
    content: generatePlaceholder(
      "👥",
      "শ্রমিক তালিকা",
      "শ্রমিক মজুরি → শ্রমিক তালিকা",
      "সকল শ্রমিকের ব্যক্তিগত তথ্য সংরক্ষণ করুন।",
      [
        ["নাম", "শ্রমিকের পূর্ণ নাম", true],
        ["শ্রমিক ধরন", "ধরন নির্বাচন ▼", true],
        ["মোবাইল", "মোবাইল নম্বর", false],
        ["ঠিকানা", "স্থায়ী ঠিকানা", false],
        ["স্ট্যাটাস", "টগল", false],
      ],
    ),
  },

  "work-entry": {
    title: "কাজের এন্ট্রি",
    sections: ["পেজ পরিচিতি", "এন্ট্রি প্রক্রিয়া", "ফর্ম বিবরণ"],
    content: generatePlaceholder(
      "✏️",
      "কাজের এন্ট্রি",
      "শ্রমিক মজুরি → কাজের এন্ট্রি",
      "প্রতিদিনের কাজের রেকর্ড এখানে সংরক্ষণ করা হয়। এই তথ্যের ভিত্তিতে মজুরি স্বয়ংক্রিয়ভাবে হিসাব হয়।",
      [
        ["তারিখ", "তারিখ নির্বাচন করুন", true],
        ["শ্রমিক", "শ্রমিক নির্বাচন ▼", true],
        ["কাজের পরিমাণ", "0", true],
        ["কাজের বিভাগ", "বিভাগ নির্বাচন ▼", true],
      ],
    ),
  },
  // ===================================================
  // SARDAR LIST
  // ===================================================,
};
