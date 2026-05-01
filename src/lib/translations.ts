export type LanguageCode = "en" | "hi" | "ta" | "te" | "bn" | "mr";

export interface Translation {
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaStart: string;
    ctaAsk: string;
    stats: { value: string; label: string }[];
  };
  nav: {
    journey: string;
    timeline: string;
    actions: string;
    assistant: string;
    askAi: string;
    switchLang: string;
  };
  journey: {
    title: string;
    titleAccent: string;
    subtitle: string;
    progress: string;
    step: string;
    of: string;
    prev: string;
    next: string;
    complete: string;
    completed: string;
    steps: {
      title: string;
      description: string;
      bullets: string[];
      tip: string;
    }[];
  };
  timeline: {
    title: string;
    titleAccent: string;
    subtitle: string;
  };
  actions: {
    title: string;
    titleAccent: string;
    subtitle: string;
  };
  accessibility: {
    title: string;
    largeText: string;
    largeTextDesc: string;
    highContrast: string;
    highContrastDesc: string;
    voice: string;
    voiceDesc: string;
  };
  footer: {
    description: string;
    links: string;
    resources: string;
    languages: string;
    tagline: string;
    madeWith: string;
  };
  ai: {
    welcome: string;
    placeholder: string;
    suggested: string;
    prompts: string[];
  };
}

export const languages = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা" },
  { code: "mr", name: "Marathi", nativeName: "मराठी" },
];

export const translations: Record<LanguageCode, Translation> = {
  en: {
    hero: {
      badge: "AI-Powered Civic Assistant for India",
      title: "Your Personal",
      titleAccent: "Voting Guide",
      subtitle: "Understand elections step-by-step, in minutes. Check eligibility, register, find your booth — all guided by AI, in your language.",
      ctaStart: "Start My Voting Journey",
      ctaAsk: "Ask AI Assistant",
      stats: [
        { value: "96Cr+", label: "Registered Voters" },
        { value: "7", label: "Simple Steps" },
        { value: "100%", label: "Free & Open" },
      ],
    },
    nav: {
      journey: "Journey",
      timeline: "Timeline",
      actions: "Quick Actions",
      assistant: "AI Assistant",
      askAi: "Ask AI",
      switchLang: "Change Language",
    },
    journey: {
      title: "Your",
      titleAccent: "Voting Journey",
      subtitle: "Follow these 7 simple steps to become a confident, prepared voter.",
      progress: "Progress",
      step: "Step",
      of: "of",
      prev: "Previous",
      next: "Next Step",
      complete: "Complete Journey",
      completed: "Completed!",
      steps: [
        {
          title: "Check Your Eligibility",
          description: "Before anything else, let's make sure you're eligible to vote in Indian elections.",
          bullets: ["Indian citizen", "18+ years old", "Resident of constituency", "Not disqualified"],
          tip: "💡 Even if you turn 18 after Jan 1, you can register for the next cycle.",
        },
        {
          title: "Register as a Voter",
          description: "If you're not on the list, you need to register. It can be done entirely online.",
          bullets: ["Visit voters.eci.gov.in", "Fill Form 6 online", "Upload photo & age proof", "Track reference number"],
          tip: "💡 Keep your Aadhaar ready for faster verification.",
        },
        {
          title: "Verify Voter Status",
          description: "Check if your name appears in the current electoral roll for your area.",
          bullets: ["Go to 'Electoral Search'", "Enter EPIC number or details", "Check booth & part number", "Verify serial number"],
          tip: "💡 Always check status 2 weeks before voting day.",
        },
        {
          title: "Understand Timeline",
          description: "Stay informed about the key dates for your specific constituency.",
          bullets: ["Nomination dates", "Withdrawal deadline", "Polling date", "Result date"],
          tip: "💡 Set a reminder on your phone for the polling date.",
        },
        {
          title: "Learn Voting Process",
          description: "Familiarize yourself with how to use the Electronic Voting Machine (EVM).",
          bullets: ["Enter booth with ID", "Get finger inked", "Press button on EVM", "See VVPAT confirmation"],
          tip: "💡 The blue light on EVM indicates your vote is recorded.",
        },
        {
          title: "Find Polling Booth",
          description: "Locate exactly where you need to go to cast your vote on election day.",
          bullets: ["Use Voter Helpline app", "Search by EPIC or location", "Check booth map", "Identify transport route"],
          tip: "💡 Polling booths are usually within 2km of your residence.",
        },
        {
          title: "Prepare for Voting Day",
          description: "One last check to ensure a smooth voting experience.",
          bullets: ["Carry valid photo ID", "Check booth timings", "Bring voter slip", "Plan for queue"],
          tip: "💡 Avoid wearing party-specific colors or symbols near the booth.",
        },
      ]
    },
    timeline: {
      title: "Election",
      titleAccent: "Timeline",
      subtitle: "Key milestones in the current election cycle.",
    },
    actions: {
      title: "Quick",
      titleAccent: "Actions",
      subtitle: "Jump directly to what you need. Every action, one tap away.",
    },
    accessibility: {
      title: "Accessibility",
      largeText: "Large Text",
      largeTextDesc: "Increase font sizes",
      highContrast: "High Contrast",
      highContrastDesc: "Increase contrast",
      voice: "Voice Narration",
      voiceDesc: "Read content aloud",
    },
    footer: {
      description: "AI-powered civic assistant making Indian elections simple, accessible, and empowering for every citizen.",
      links: "Quick Links",
      resources: "Official Resources",
      languages: "Languages",
      tagline: "© 2026 VoteSaathi AI. Built for India, by India.",
      madeWith: "Made with for democracy",
    },
    ai: {
      welcome: "Namaste! 🙏 I'm your VoteSaathi AI assistant. Ask me anything about Indian elections, voter registration, or the voting process.",
      placeholder: "Ask about elections...",
      suggested: "Suggested questions:",
      prompts: ["How do I vote?", "What documents do I need?", "Explain elections simply", "Am I eligible to vote?"],
    },
  },
  hi: {
    hero: {
      badge: "भारत के लिए AI-आधारित नागरिक सहायक",
      title: "आपका व्यक्तिगत",
      titleAccent: "मतदान मार्गदर्शक",
      subtitle: "चुनावों को कुछ ही मिनटों में चरण-दर-चरण समझें। पात्रता जांचें, पंजीकरण करें, अपना बूथ खोजें — सब कुछ आपकी भाषा में AI द्वारा निर्देशित।",
      ctaStart: "मेरी मतदान यात्रा शुरू करें",
      ctaAsk: "AI सहायक से पूछें",
      stats: [
        { value: "96करोड़+", label: "पंजीकृत मतदाता" },
        { value: "7", label: "आसान चरण" },
        { value: "100%", label: "मुफ्त और खुला" },
      ],
    },
    nav: {
      journey: "यात्रा",
      timeline: "समयरेखा",
      actions: "त्वरित कार्रवाई",
      assistant: "AI सहायक",
      askAi: "AI से पूछें",
      switchLang: "भाषा बदलें",
    },
    journey: {
      title: "आपकी",
      titleAccent: "मतदान यात्रा",
      subtitle: "एक आत्मविश्वासी, तैयार मतदाता बनने के लिए इन 7 सरल चरणों का पालन करें।",
      progress: "प्रगति",
      step: "चरण",
      of: "का",
      prev: "पिछला",
      next: "अगला चरण",
      complete: "यात्रा पूरी करें",
      completed: "पूरा हुआ!",
      steps: [
        {
          title: "अपनी पात्रता जांचें",
          description: "सबसे पहले, सुनिश्चित करें कि आप भारतीय चुनावों में वोट देने के पात्र हैं।",
          bullets: ["भारतीय नागरिक", "18+ वर्ष की आयु", "निर्वाचन क्षेत्र का निवासी", "अयोग्य नहीं"],
          tip: "💡 यदि आप 1 जनवरी के बाद 18 वर्ष के हो जाते हैं, तो भी आप अगले चक्र के लिए पंजीकरण कर सकते हैं।",
        },
        {
          title: "मतदाता के रूप में पंजीकरण करें",
          description: "यदि आप सूची में नहीं हैं, तो आपको पंजीकरण करना होगा। यह पूरी तरह से ऑनलाइन किया जा सकता है।",
          bullets: ["voters.eci.gov.in पर जाएं", "ऑनलाइन फॉर्म 6 भरें", "फोटो और आयु प्रमाण अपलोड करें", "संदर्भ संख्या ट्रैक करें"],
          tip: "💡 तेजी से सत्यापन के लिए अपना आधार तैयार रखें।",
        },
        {
          title: "मतदाता स्थिति सत्यापित करें",
          description: "जांचें कि क्या आपका नाम आपके क्षेत्र की वर्तमान मतदाता सूची में दिखाई देता है।",
          bullets: ["'मतदाता खोज' पर जाएं", "EPIC नंबर या विवरण दर्ज करें", "बूथ और पार्ट नंबर जांचें", "क्रम संख्या सत्यापित करें"],
          tip: "💡 मतदान के दिन से 2 सप्ताह पहले हमेशा स्थिति की जांच करें।",
        },
        {
          title: "समयरेखा समझें",
          description: "अपने विशिष्ट निर्वाचन क्षेत्र की महत्वपूर्ण तिथियों के बारे में सूचित रहें।",
          bullets: ["नामांकन तिथियां", "वापसी की समय सीमा", "मतदान की तिथि", "परिणाम की तिथि"],
          tip: "💡 मतदान की तिथि के लिए अपने फोन पर रिमाइंडर सेट करें।",
        },
        {
          title: "मतदान प्रक्रिया जानें",
          description: "इलेक्ट्रॉनिक वोटिंग मशीन (EVM) का उपयोग करने के तरीके से परिचित हों।",
          bullets: ["आईडी के साथ बूथ में प्रवेश करें", "उंगली पर स्याही लगवाएं", "EVM पर बटन दबाएं", "VVPAT पुष्टिकरण देखें"],
          tip: "💡 EVM पर नीली रोशनी इंगित करती है कि आपका वोट दर्ज हो गया है।",
        },
        {
          title: "मतदान केंद्र खोजें",
          description: "सटीक स्थान का पता लगाएं जहां आपको मतदान के दिन वोट डालने जाना है।",
          bullets: ["वोटर हेल्पलाइन ऐप का उपयोग करें", "EPIC या स्थान के आधार पर खोजें", "बूथ मैप जांचें", "परिवहन मार्ग पहचानें"],
          tip: "💡 मतदान केंद्र आमतौर पर आपके निवास के 2 किमी के भीतर होते हैं।",
        },
        {
          title: "मतदान के दिन की तैयारी",
          description: "सुचारू मतदान अनुभव सुनिश्चित करने के लिए एक अंतिम जांच।",
          bullets: ["वैध फोटो आईडी साथ रखें", "बूथ का समय जांचें", "मतदाता पर्ची लाएं", "कतार के लिए योजना बनाएं"],
          tip: "💡 बूथ के पास पार्टी-विशिष्ट रंग या प्रतीक पहनने से बचें।",
        },
      ]
    },
    timeline: {
      title: "चुनाव",
      titleAccent: "समयरेखा",
      subtitle: "वर्तमान चुनाव चक्र में प्रमुख मील के पत्थर।",
    },
    actions: {
      title: "त्वरित",
      titleAccent: "कार्रवाई",
      subtitle: "जो आपको चाहिए उस पर सीधे जाएं। हर कार्रवाई, एक टैप दूर।",
    },
    accessibility: {
      title: "अभिगम्यता",
      largeText: "बड़े अक्षर",
      largeTextDesc: "फ़ॉन्ट आकार बढ़ाएँ",
      highContrast: "उच्च कंट्रास्ट",
      highContrastDesc: "कंट्रास्ट बढ़ाएँ",
      voice: "आवाज वर्णन",
      voiceDesc: "सामग्री को जोर से पढ़ें",
    },
    footer: {
      description: "AI-आधारित नागरिक सहायक जो भारतीय चुनावों को हर नागरिक के लिए सरल, सुलभ और सशक्त बनाता है।",
      links: "त्वरित लिंक",
      resources: "आधिकारिक संसाधन",
      languages: "भाषाएं",
      tagline: "© 2026 VoteSaathi AI. भारत के लिए, भारत द्वारा निर्मित।",
      madeWith: "लोकतंत्र के लिए प्यार से बनाया गया",
    },
    ai: {
      welcome: "नमस्ते! 🙏 मैं आपका वोटसाथी AI सहायक हूं। भारतीय चुनाव, मतदाता पंजीकरण या मतदान प्रक्रिया के बारे में मुझसे कुछ भी पूछें।",
      placeholder: "चुनाव के बारे में पूछें...",
      suggested: "सुझाए गए प्रश्न:",
      prompts: ["मैं वोट कैसे दूं?", "मुझे किन दस्तावेजों की आवश्यकता है?", "चुनावों को सरलता से समझाएं", "क्या मैं वोट देने के पात्र हूं?"],
    },
  },
  ta: {
    hero: {
      badge: "இந்தியாவிற்கான AI-ஆற்றல் கொண்ட குடிமை உதவியாளர்",
      title: "உங்கள் தனிப்பட்ட",
      titleAccent: "வாக்காளர் வழிகாட்டி",
      subtitle: "தேர்தல்களை சில நிமிடங்களில் படிப்படியாகப் புரிந்து கொள்ளுங்கள். தகுதியைச் சரிபார்க்கவும், பதிவு செய்யவும், உங்கள் பூத்தைக் கண்டறியவும் — அனைத்தும் உங்கள் மொழியில் AI வழிகாட்டுதலுடன்.",
      ctaStart: "எனது வாக்காளர் பயணத்தைத் தொடங்கு",
      ctaAsk: "AI உதவியாளரிடம் கேளுங்கள்",
      stats: [
        { value: "96கோடி+", label: "பதிவுசெய்யப்பட்ட வாக்காளர்கள்" },
        { value: "7", label: "எளிதான படிகள்" },
        { value: "100%", label: "இலவசம் & திறந்தநிலை" },
      ],
    },
    nav: {
      journey: "பயணம்",
      timeline: "காலவரிசை",
      actions: "விரைவு செயல்கள்",
      assistant: "AI உதவியாளர்",
      askAi: "AI-யிடம் கேளுங்கள்",
      switchLang: "மொழியை மாற்றவும்",
    },
    journey: {
      title: "உங்கள்",
      titleAccent: "வாக்காளர் பயணம்",
      subtitle: "நம்பிக்கையான, தயாரான வாக்காளராக மாற இந்த 7 எளிய படிகளைப் பின்பற்றவும்.",
      progress: "முன்னேற்றம்",
      step: "படி",
      of: "இல்",
      prev: "முந்தைய",
      next: "அடுத்த படி",
      complete: "பயணத்தை முடிக்கவும்",
      completed: "முடிந்தது!",
      steps: [
        {
          title: "உங்கள் தகுதியைச் சரிபார்க்கவும்",
          description: "மற்ற எதற்கும் முன், இந்தியத் தேர்தல்களில் வாக்களிக்க உங்களுக்கு தகுதி உள்ளதா என்பதை உறுதிப்படுத்துவோம்.",
          bullets: ["இந்திய குடிமகனாக இருக்க வேண்டும்", "18+ வயது பூர்த்தியாகியிருக்க வேண்டும்", "தொகுதியின் வசிப்பிடமாக இருக்க வேண்டும்", "தகுதியற்றவராக இருக்கக்கூடாது"],
          tip: "💡 ஜனவரி 1-க்குப் பிறகு உங்களுக்கு 18 வயது வந்தாலும், அடுத்த திருத்தச் சுழற்சிக்கு நீங்கள் பதிவு செய்யலாம்.",
        },
        {
          title: "வாக்காளராகப் பதிவு செய்யுங்கள்",
          description: "நீங்கள் பட்டியலில் இல்லை என்றால், நீங்கள் பதிவு செய்ய வேண்டும். இதை முழுமையாக ஆன்லைனில் செய்யலாம்.",
          bullets: ["voters.eci.gov.in-க்குச் செல்லவும்", "ஆன்லைனில் படிவம் 6-ஐ நிரப்பவும்", "புகைப்படம் & வயதுச் சான்றை பதிவேற்றவும்", "குறிப்பு எண்ணைக் கண்காணிக்கவும்"],
          tip: "💡 விரைவான சரிபார்ப்பிற்கு உங்கள் ஆதாரைத் தயாராக வைத்திருங்கள்.",
        },
        {
          title: "வாக்காளர் நிலையைச் சரிபார்க்கவும்",
          description: "உங்கள் பகுதிக்கான தற்போதைய வாக்காளர் பட்டியலில் உங்கள் பெயர் உள்ளதா எனச் சரிபார்க்கவும்.",
          bullets: ["'தேர்தல் தேடல்'-க்குச் செல்லவும்", "EPIC எண் அல்லது விவரங்களை உள்ளிடவும்", "பூத் & பகுதி எண்ணைச் சரிபார்க்கவும்", "வரிசை எண்ணைச் சரிபார்க்கவும்"],
          tip: "💡 வாக்களிக்கும் நாளுக்கு 2 வாரங்களுக்கு முன் எப்போதும் நிலையைச் சரிபார்க்கவும்.",
        },
        {
          title: "காலவரிசையைப் புரிந்து கொள்ளுங்கள்",
          description: "உங்கள் தொகுதிக்கான முக்கிய தேதிகளைப் பற்றித் தெரிந்து கொள்ளுங்கள்.",
          bullets: ["வேட்புமனு தேதிகள்", "திரும்பப் பெறும் காலக்கெடு", "வாக்குப்பதிவு தேதி", "முடிவு தேதி"],
          tip: "💡 வாக்குப்பதிவு தேதிக்கு உங்கள் போனில் நினைவூட்டலை அமைக்கவும்.",
        },
        {
          title: "வாக்களிக்கும் முறையைக் கற்றுக் கொள்ளுங்கள்",
          description: "மின்னணு வாக்குப்பதிவு இயந்திரத்தை (EVM) பயன்படுத்துவது எப்படி என்பதைத் தெரிந்து கொள்ளுங்கள்.",
          bullets: ["ஐடியுடன் பூத்திற்குள் நுழையுங்கள்", "விரலில் மை வைக்கவும்", "EVM-இல் பட்டனை அழுத்தவும்", "VVPAT உறுதிப்படுத்தலைப் பார்க்கவும்"],
          tip: "💡 EVM-இல் உள்ள நீல விளக்கு உங்கள் வாக்கு பதிவு செய்யப்பட்டதைக் குறிக்கிறது.",
        },
        {
          title: "வாக்குச்சாவடியைக் கண்டறியவும்",
          description: "தேர்தல் நாளில் நீங்கள் வாக்களிக்கச் செல்ல வேண்டிய இடத்தை சரியாகக் கண்டறியவும்.",
          bullets: ["வாக்காளர் உதவி எண் செயலியைப் பயன்படுத்தவும்", "EPIC அல்லது இருப்பிடம் மூலம் தேடவும்", "பூத் வரைபடத்தைச் சரிபார்க்கவும்", "போக்குவரத்து வழியை அடையாளம் காணவும்"],
          tip: "💡 வாக்குச்சாவடிகள் பொதுவாக உங்கள் வசிப்பிடத்திலிருந்து 2 கிமீ தொலைவில் இருக்கும்.",
        },
        {
          title: "வாக்குப்பதிவு நாளுக்குத் தயாராகுங்கள்",
          description: "சீரான வாக்களிப்பு அனுபவத்தை உறுதிப்படுத்த ஒரு கடைசி சரிபார்ப்பு.",
          bullets: ["செல்லுபடியாகும் புகைப்பட ஐடியை எடுத்துச் செல்லுங்கள்", "பூத் நேரத்தைச் சரிபார்க்கவும்", "வாக்காளர் சீட்டை எடுத்து வாருங்கள்", "வரிசைக்குத் திட்டமிடுங்கள்"],
          tip: "💡 பூத் அருகே கட்சி சார்ந்த நிறங்கள் அல்லது சின்னங்களை அணிவதைத் தவிர்க்கவும்.",
        },
      ]
    },
    timeline: {
      title: "தேர்தல்",
      titleAccent: "காலவரிசை",
      subtitle: "தற்போதைய தேர்தல் சுழற்சியின் முக்கிய மைல்கற்கள்.",
    },
    actions: {
      title: "விரைவு",
      titleAccent: "செயல்கள்",
      subtitle: "உங்களுக்குத் தேவையானதை நேரடியாக அடையுங்கள். ஒவ்வொரு செயலும் ஒரு தட்டலில்.",
    },
    accessibility: {
      title: "அணுகல்தன்மை",
      largeText: "பெரிய உரை",
      largeTextDesc: "எழுத்துரு அளவை அதிகரிக்கவும்",
      highContrast: "அதிக மாறுபாடு",
      highContrastDesc: "மாறுபாட்டை அதிகரிக்கவும்",
      voice: "குரல் விவரிப்பு",
      voiceDesc: "உள்ளடக்கத்தை சத்தமாக வாசிக்கவும்",
    },
    footer: {
      description: "இந்தியத் தேர்தல்களை எளியதாகவும், அணுகக்கூடியதாகவும், ஒவ்வொரு குடிமகனுக்கும் அதிகாரம் அளிப்பதாகவும் மாற்றும் AI-ஆற்றல் கொண்ட குடிமை உதவியாளர்.",
      links: "விரைவு இணைப்புகள்",
      resources: "அதிகாரப்பூர்வ ஆதாரங்கள்",
      languages: "மொழிகள்",
      tagline: "© 2026 VoteSaathi AI. இந்தியாவிற்காக, இந்தியாவால் உருவாக்கப்பட்டது.",
      madeWith: "மக்களாட்சிக்காக அன்புடன் உருவாக்கப்பட்டது",
    },
    ai: {
      welcome: "வணக்கம்! 🙏 நான் உங்கள் VoteSaathi AI உதவியாளர். இந்தியத் தேர்தல்கள், வாக்காளர் பதிவு அல்லது வாக்களிக்கும் முறை பற்றி எதையும் என்னிடம் கேளுங்கள்.",
      placeholder: "தேர்தல்கள் பற்றி கேளுங்கள்...",
      suggested: "பரிந்துரைக்கப்பட்ட கேள்விகள்:",
      prompts: ["நான் எப்படி வாக்களிப்பது?", "எனக்கு என்ன ஆவணங்கள் தேவை?", "தேர்தல்களை எளிமையாக விளக்கவும்", "நான் வாக்களிக்கத் தகுதியுள்ளவனா?"],
    },
  },
  te: {
    hero: {
      badge: "భారతదేశం కోసం AI-శక్తితో కూడిన సివిక్ అసిస్టెంట్",
      title: "మీ వ్యక్తిగత",
      titleAccent: "ఓటింగ్ గైడ్",
      subtitle: "ఎన్నికల గురించి నిమిషాల్లో దశలవారీగా అర్థం చేసుకోండి. అర్హతను తనిఖీ చేయండి, నమోదు చేసుకోండి, మీ బూత్‌ను కనుగొనండి — అంతా మీ భాషలో AI మార్గదర్శకత్వంతో.",
      ctaStart: "నా ఓటింగ్ ప్రయాణాన్ని ప్రారంభించండి",
      ctaAsk: "AI అసిస్టెంట్‌ని అడగండి",
      stats: [
        { value: "96కోట్లు+", label: "నమోదిత ఓటర్లు" },
        { value: "7", label: "సరళమైన దశలు" },
        { value: "100%", label: "ఉచితం & బహిరంగం" },
      ],
    },
    nav: {
      journey: "ప్రయాణం",
      timeline: "కాలక్రమం",
      actions: "శీఘ్ర చర్యలు",
      assistant: "AI అసిస్టెంట్",
      askAi: "AIని అడగండి",
      switchLang: "భాషను మార్చండి",
    },
    journey: {
      title: "మీ",
      titleAccent: "ఓటింగ్ ప్రయాణం",
      subtitle: "నమ్మకమైన, సిద్ధమైన ఓటరుగా మారడానికి ఈ 7 సరళమైన దశలను అనుసరించండి.",
      progress: "పురోగతి",
      step: "దశ",
      of: "లో",
      prev: "మునుపటి",
      next: "తదుపరి దశ",
      complete: "ప్రయాణాన్ని పూర్తి చేయండి",
      completed: "పూర్తయింది!",
      steps: [
        {
          title: "మీ అర్హతను తనిఖీ చేయండి",
          description: "మరేదైనా చేసే ముందు, మీరు భారతీయ ఎన్నికలలో ఓటు వేయడానికి అర్హులని నిర్ధారించుకుందాం.",
          bullets: ["భారతీయ పౌరుడై ఉండాలి", "18+ ఏళ్ల వయస్సు ఉండాలి", "నియోజకవర్గ నివాసి అయి ఉండాలి", "అనర్హులు కాకూడదు"],
          tip: "💡 మీరు జనవరి 1 తర్వాత 18 ఏళ్లు నిండినా, తదుపరి సవరణ చక్రం కోసం నమోదు చేసుకోవచ్చు.",
        },
        {
          title: "ఓటరుగా నమోదు చేసుకోండి",
          description: "మీరు జాబితాలో లేకుంటే, మీరు నమోదు చేసుకోవాలి. ఇది పూర్తిగా ఆన్‌లైన్‌లో చేయవచ్చు.",
          bullets: ["voters.eci.gov.inని సందర్శించండి", "ఆన్‌లైన్‌లో ఫారమ్ 6ని నింపండి", "ఫోటో & వయస్సు ధృవీకరణ పత్రం అప్‌లోడ్ చేయండి", "రెఫరెన్స్ నంబర్‌ను ట్రాక్ చేయండి"],
          tip: "💡 వేగవంతమైన ధృవీకరణ కోసం మీ ఆధార్ సిద్ధంగా ఉంచుకోండి.",
        },
        {
          title: "ఓటరు స్థితిని ధృవీకరించండి",
          description: "మీ నియోజకవర్గ ఓటరు జాబితాలో మీ పేరు ఉందో లేదో తనిఖీ చేయండి.",
          bullets: ["'ఎలక్టోరల్ సెర్చ్'కి వెళ్లండి", "EPIC నంబర్ లేదా వివరాలను నమోదు చేయండి", "బూత్ & పార్ట్ నంబర్ తనిఖీ చేయండి", "సీరియల్ నంబర్‌ను ధృవీకరించండి"],
          tip: "💡 ఓటింగ్ రోజుకు 2 వారాల ముందు ఎల్లప్పుడూ స్థితిని తనిఖీ చేయండి.",
        },
        {
          title: "కాలక్రమాన్ని అర్థం చేసుకోండి",
          description: "మీ నియోజకవర్గానికి సంబంధించిన ముఖ్యమైన తేదీల గురించి సమాచారం పొందండి.",
          bullets: ["నామినేషన్ తేదీలు", "ఉపసంహరణ గడువు", "పోలింగ్ తేదీ", "ఫలితాల తేదీ"],
          tip: "💡 పోలింగ్ తేదీ కోసం మీ ఫోన్‌లో రిమైండర్‌ని సెట్ చేయండి.",
        },
        {
          title: "ఓటింగ్ ప్రక్రియను తెలుసుకోండి",
          description: "ఎలక్ట్రానిక్ ఓటింగ్ మెషిన్ (EVM) ఎలా ఉపయోగించాలో తెలుసుకోండి.",
          bullets: ["ఐడితో బూత్‌లోకి వెళ్లండి", "వేలికి సిరా వేయించుకోండి", "EVMపై బటన్ నొక్కండి", "VVPAT ధృవీకరణను చూడండి"],
          tip: "💡 EVMపై నీలిరంగు కాంతి మీ ఓటు నమోదైనట్లు సూచిస్తుంది.",
        },
        {
          title: "పోలింగ్ బూత్‌ను కనుగొనండి",
          description: "ఎన్నికల రోజున మీరు ఓటు వేయడానికి ఎక్కడికి వెళ్లాలో సరిగ్గా తెలుసుకోండి.",
          bullets: ["ఓటర్ హెల్ప్‌లైన్ యాప్‌ని ఉపయోగించండి", "EPIC లేదా స్థానం ద్వారా వెతకండి", "బూత్ మ్యాప్‌ను తనిఖీ చేయండి", "రవాణా మార్గాన్ని గుర్తించండి"],
          tip: "💡 పోలింగ్ బూత్‌లు సాధారణంగా మీ నివాసం నుండి 2 కిలోమీటర్ల లోపే ఉంటాయి.",
        },
        {
          title: "ఓటింగ్ రోజు కోసం సిద్ధమవ్వండి",
          description: "ఓటింగ్ అనుభవం సాఫీగా సాగేలా చూడటానికి చివరి తనిఖీ.",
          bullets: ["చెల్లుబాటు అయ్యే ఫోటో ఐడిని తీసుకెళ్లండి", "బూత్ సమయాలను తనిఖీ చేయండి", "ఓటరు స్లిప్ తీసుకురండి", "క్యూ కోసం ప్లాన్ చేయండి"],
          tip: "💡 బూత్ సమీపంలో పార్టీ సంబంధిత రంగులు లేదా చిహ్నాలను ధరించవద్దు.",
        },
      ]
    },
    timeline: {
      title: "ఎన్నికల",
      titleAccent: "కాలక్రమం",
      subtitle: "ప్రస్తుత ఎన్నికల చక్రంలో కీలకమైన మైలురాళ్లు.",
    },
    actions: {
      title: "శీఘ్ర",
      titleAccent: "చర్యలు",
      subtitle: "మీకు కావలసిన దానిపై నేరుగా వెళ్లండి. ప్రతి చర్య, ఒక ట్యాప్ దూరంలో.",
    },
    accessibility: {
      title: "యాక్సెసిబిలిటీ",
      largeText: "పెద్ద వచనం",
      largeTextDesc: "ఫాంట్ పరిమాణాలను పెంచండి",
      highContrast: "అధిక కాంట్రాస్ట్",
      highContrastDesc: "కాంట్రాస్ట్‌ని పెంచండి",
      voice: "వాయిస్ నరేషన్",
      voiceDesc: "కంటెంట్‌ను బిగ్గరగా చదవండి",
    },
    footer: {
      description: "భారతీయ ఎన్నికలను ప్రతి పౌరుడికి సులభంగా, అందుబాటులో ఉండేలా చేసే AI-శక్తితో కూడిన సివిక్ అసిస్టెంట్.",
      links: "శీఘ్ర లింకులు",
      resources: "అధికారిక వనరులు",
      languages: "భాషలు",
      tagline: "© 2026 VoteSaathi AI. భారతదేశం కోసం, భారతదేశం ద్వారా నిర్మించబడింది.",
      madeWith: "ప్రజాస్వామ్యం కోసం ప్రేమతో రూపొందించబడింది",
    },
    ai: {
      welcome: "నమస్తే! 🙏 నేను మీ VoteSaathi AI అసిస్టెంట్‌ని. భారతీయ ఎన్నికలు, ఓటరు నమోదు లేదా ఓటింగ్ ప్రక్రియ గురించి నన్ను ఏదైనా అడగండి.",
      placeholder: "ఎన్నికల గురించి అడగండి...",
      suggested: "సూచించబడిన ప్రశ్నలు:",
      prompts: ["నేను ఓటు ఎలా వేయాలి?", "నాకు ఏ పత్రాలు అవసరం?", "ఎన్నికల గురించి సరళంగా వివరించండి", "నేను ఓటు వేయడానికి అర్హుడినా?"],
    },
  },
  bn: {
    hero: {
      badge: "ভারতের জন্য AI-চালিত নাগরিক সহকারী",
      title: "আপনার ব্যক্তিগত",
      titleAccent: "ভোটদান নির্দেশিকা",
      subtitle: "কয়েক মিনিটের মধ্যে ধাপে ধাপে নির্বাচন বুঝুন। যোগ্যতা যাচাই করুন, নিবন্ধন করুন, আপনার বুথ খুঁজুন — সবই আপনার ভাষায় AI দ্বারা পরিচালিত।",
      ctaStart: "আমার ভোটদান যাত্রা শুরু করুন",
      ctaAsk: "AI সহকারীকে জিজ্ঞাসা করুন",
      stats: [
        { value: "৯৬কোটি+", label: "নিবন্ধিত ভোটার" },
        { value: "৭", label: "সহজ ধাপ" },
        { value: "১০০%", label: "বিনামূল্যে এবং উন্মুক্ত" },
      ],
    },
    nav: {
      journey: "যাত্রা",
      timeline: "টাইমলাইন",
      actions: "দ্রুত পদক্ষেপ",
      assistant: "AI সহকারী",
      askAi: "AI-কে জিজ্ঞাসা করুন",
      switchLang: "ভাষা পরিবর্তন করুন",
    },
    journey: {
      title: "আপনার",
      titleAccent: "ভোটদান যাত্রা",
      subtitle: "একজন আত্মবিশ্বাসী, প্রস্তুত ভোটার হতে এই ৭টি সহজ ধাপ অনুসরণ করুন।",
      progress: "প্রগতি",
      step: "ধাপ",
      of: "এর",
      prev: "পূর্ববর্তী",
      next: "পরবর্তী ধাপ",
      complete: "যাত্রা সম্পন্ন করুন",
      completed: "সম্পন্ন হয়েছে!",
      steps: [
        {
          title: "আপনার যোগ্যতা যাচাই করুন",
          description: "অন্য কিছুর আগে, আসুন নিশ্চিত করি যে আপনি ভারতীয় নির্বাচনে ভোট দেওয়ার যোগ্য।",
          bullets: ["ভারতীয় নাগরিক হতে হবে", "১৮+ বছর বয়স হতে হবে", "নির্বাচনী এলাকার বাসিন্দা হতে হবে", "অযোগ্য হওয়া উচিত নয়"],
          tip: "💡 ১ জানুয়ারির পরে আপনার বয়স ১৮ বছর হলেও, আপনি পরবর্তী সংশোধন চক্রের জন্য নিবন্ধন করতে পারেন।",
        },
        {
          title: "ভোটার হিসেবে নিবন্ধন করুন",
          description: "আপনি যদি তালিকায় না থাকেন তবে আপনাকে নিবন্ধন করতে হবে। এটি সম্পূর্ণ অনলাইনে করা যেতে পারে।",
          bullets: ["voters.eci.gov.in-এ যান", "অনলাইনে ফর্ম ৬ পূরণ করুন", "ছবি এবং বয়সের প্রমাণ আপলোড করুন", "রেফারেন্স নম্বর ট্র্যাক করুন"],
          tip: "💡 দ্রুত যাচাইয়ের জন্য আপনার আধার কার্ড প্রস্তুত রাখুন।",
        },
        {
          title: "ভোটার স্ট্যাটাস যাচাই করুন",
          description: "আপনার এলাকার বর্তমান ভোটার তালিকায় আপনার নাম আছে কিনা তা পরীক্ষা করুন।",
          bullets: ["'ইলেকটোরাল সার্চ'-এ যান", "EPIC নম্বর বা বিবরণ দিন", "বুথ এবং পার্ট নম্বর পরীক্ষা করুন", "সিরিয়াল নম্বর যাচাই করুন"],
          tip: "💡 ভোটের দিনের ২ সপ্তাহ আগে সব সময় স্ট্যাটাস যাচাই করুন।",
        },
        {
          title: "টাইমলাইন বুঝুন",
          description: "আপনার নির্দিষ্ট নির্বাচনী এলাকার গুরুত্বপূর্ণ তারিখগুলি সম্পর্কে অবহিত থাকুন।",
          bullets: ["মনোনয়ন তারিখ", "প্রত্যাহারের সময়সীমা", "ভোটের তারিখ", "ফলাফলের তারিখ"],
          tip: "💡 ভোটের তারিখের জন্য আপনার ফোনে একটি রিমাইন্ডার সেট করুন।",
        },
        {
          title: "ভোটদানের প্রক্রিয়া জানুন",
          description: "ইলেকট্রনিক ভোটিং মেশিন (EVM) কীভাবে ব্যবহার করতে হয় তা জানুন।",
          bullets: ["আইডি নিয়ে বুথে প্রবেশ করুন", "আঙুলে কালি লাগান", "EVM-এ বোতাম টিপুন", "VVPAT নিশ্চিতকরণ দেখুন"],
          tip: "💡 EVM-এর নীল আলো নির্দেশ করে যে আপনার ভোট রেকর্ড করা হয়েছে।",
        },
        {
          title: "ভোটগ্রহণ কেন্দ্র খুঁজুন",
          description: "ভোটের দিন আপনাকে ঠিক কোথায় ভোট দিতে যেতে হবে তা খুঁজে বের করুন।",
          bullets: ["ভোটার হেল্পলাইন অ্যাপ ব্যবহার করুন", "EPIC বা অবস্থান দিয়ে খুঁজুন", "বুথ ম্যাপ দেখুন", "পরিবহন পথ চিহ্নিত করুন"],
          tip: "💡 ভোটগ্রহণ কেন্দ্রগুলি সাধারণত আপনার বাসস্থানের ২ কিলোমিটারের মধ্যে থাকে।",
        },
        {
          title: "ভোটের দিনের জন্য প্রস্তুত হন",
          description: "একটি মসৃণ ভোটদানের অভিজ্ঞতা নিশ্চিত করতে একটি শেষ পরীক্ষা।",
          bullets: ["বৈধ ফটো আইডি বহন করুন", "বুথের সময় পরীক্ষা করুন", "ভোটার স্লিপ আনুন", "লাইনের জন্য পরিকল্পনা করুন"],
          tip: "💡 বুথের কাছে দলীয় নির্দিষ্ট রঙ বা প্রতীক পরা এড়িয়ে চলুন।",
        },
      ]
    },
    timeline: {
      title: "নির্বাচনী",
      titleAccent: "টাইমলাইন",
      subtitle: "বর্তমান নির্বাচনী চক্রের মূল মাইলফলক।",
    },
    actions: {
      title: "দ্রুত",
      titleAccent: "পদক্ষেপ",
      subtitle: "আপনার যা প্রয়োজন তাতে সরাসরি যান। প্রতিটি পদক্ষেপ মাত্র এক ট্যাপ দূরে।",
    },
    accessibility: {
      title: "অ্যাক্সেসিবিলিটি",
      largeText: "বড় লেখা",
      largeTextDesc: "ফন্টের আকার বাড়ান",
      highContrast: "উচ্চ বৈসাদৃশ্য",
      highContrastDesc: "বৈসাদৃশ্য বাড়ান",
      voice: "ভয়েস বর্ণনা",
      voiceDesc: "বিষয়বস্তু জোরে পড়ুন",
    },
    footer: {
      description: "AI-চালিত নাগরিক সহকারী যা ভারতীয় নির্বাচনকে প্রতিটি নাগরিকের জন্য সহজ, সহজলভ্য এবং ক্ষমতায়নকারী করে তোলে।",
      links: "দ্রুত লিঙ্ক",
      resources: "অফিসিয়াল রিসোর্স",
      languages: "ভাষা",
      tagline: "© ২০২৬ VoteSaathi AI। ভারতের জন্য, ভারত দ্বারা নির্মিত।",
      madeWith: "গণতন্ত্রের জন্য ভালোবাসা দিয়ে তৈরি",
    },
    ai: {
      welcome: "নমস্কার! 🙏 আমি আপনার VoteSaathi AI সহকারী। ভারতীয় নির্বাচন, ভোটার নিবন্ধন বা ভোটদান প্রক্রিয়া সম্পর্কে আমাকে যা খুশি জিজ্ঞাসা করুন।",
      placeholder: "নির্বাচন সম্পর্কে জিজ্ঞাসা করুন...",
      suggested: "প্রস্তাবিত প্রশ্ন:",
      prompts: ["আমি কীভাবে ভোট দেব?", "আমার কী কী নথিপত্র প্রয়োজন?", "নির্বাচন সহজভাবে ব্যাখ্যা করুন", "আমি কি ভোট দেওয়ার যোগ্য?"],
    },
  },
  mr: {
    hero: {
      badge: "भारतासाठी AI-आधारित नागरी सहाय्यक",
      title: "तुमचा वैयक्तिक",
      titleAccent: "मतदान मार्गदर्शक",
      subtitle: "निवडणुका काही मिनिटांत टप्प्याटप्प्याने समजून घ्या. पात्रता तपासा, नोंदणी करा, तुमचे बूथ शोधा — सर्वकाही तुमच्या भाषेत AI च्या मार्गदर्शनाखाली।",
      ctaStart: "माझा मतदानाचा प्रवास सुरू करा",
      ctaAsk: "AI सहाय्यकाला विचारा",
      stats: [
        { value: "९६कोटी+", label: "नोंदणीकृत मतदार" },
        { value: "७", label: "सोपे टप्पे" },
        { value: "१००%", label: "विनामूल्य आणि खुले" },
      ],
    },
    nav: {
      journey: "प्रवास",
      timeline: "वेळापत्रक",
      actions: "त्वरीत कृती",
      assistant: "AI सहाय्यक",
      askAi: "AI ला विचारा",
      switchLang: "भाषा बदला",
    },
    journey: {
      title: "तुमचा",
      titleAccent: "मतदान प्रवास",
      subtitle: "एक आत्मविश्वासाने तयार मतदार बनण्यासाठी या ७ सोप्या टप्प्यांचे अनुसरण करा.",
      progress: "प्रगती",
      step: "टप्पा",
      of: "चा",
      prev: "मागील",
      next: "पुढील टप्पा",
      complete: "प्रवास पूर्ण करा",
      completed: "पूर्ण झाले!",
      steps: [
        {
          title: "तुमची पात्रता तपासा",
          description: "इतर कशाच्याही आधी, तुम्ही भारतीय निवडणुकीत मतदान करण्यास पात्र आहात याची खात्री करूया.",
          bullets: ["भारतीय नागरिक असावे", "१८+ वर्षे वय असावे", "मतदारसंघाचे रहिवासी असावे", "अपात्र नसावे"],
          tip: "💡 १ जानेवारीनंतर तुम्ही १८ वर्षांचे झालात तरीही तुम्ही पुढील सुधारणा चक्रासाठी नोंदणी करू शकता.",
        },
        {
          title: "मतदार म्हणून नोंदणी करा",
          description: "तुम्ही यादीत नसल्यास, तुम्हाला नोंदणी करावी लागेल. हे पूर्णपणे ऑनलाइन केले जाऊ शकते.",
          bullets: ["voters.eci.gov.in ला भेट द्या", "ऑनलाइन फॉर्म ६ भरा", "फोटो आणि वयाचा पुरावा अपलोड करा", "संदर्भ क्रमांक ट्रॅक करा"],
          tip: "💡 जलद पडताळणीसाठी तुमचे आधार कार्ड तयार ठेवा.",
        },
        {
          title: "मतदार स्थिती सत्यापित करा",
          description: "तुमच्या भागातील सध्याच्या मतदार यादीत तुमचे नाव आहे का ते तपासा.",
          bullets: ["'इलेक्टोरल सर्च' वर जा", "EPIC क्रमांक किंवा तपशील प्रविष्ट करा", "बूथ आणि भाग क्रमांक तपासा", "अनुक्रमांक सत्यापित करा"],
          tip: "💡 मतदानाच्या दिवसाच्या २ आठवडे आधी नेहमी स्थिती तपासा.",
        },
        {
          title: "वेळापत्रक समजून घ्या",
          description: "तुमच्या विशिष्ट मतदारसंघासाठी महत्त्वाच्या तारखांची माहिती ठेवा.",
          bullets: ["नामांकन तारखा", "माघार घेण्याची अंतिम मुदत", "मतदानाची तारीख", "निकाल तारीख"],
          tip: "💡 मतदानाच्या तारखेसाठी तुमच्या फोनवर रिमाइंडर सेट करा.",
        },
        {
          title: "मतदान प्रक्रिया शिका",
          description: "इलेक्ट्रॉनिक वोटिंग मशीन (EVM) कसे वापरायचे ते जाणून घ्या.",
          bullets: ["आयडीसह बूथमध्ये प्रवेश करा", "बोटाला शाई लावून घ्या", "EVM वरील बटण दाबा", "VVPAT पुष्टीकरण पहा"],
          tip: "💡 EVM वरील निळा दिवा तुमचा मत नोंदवला गेल्याचे दर्शवतो.",
        },
        {
          title: "मतदान केंद्र शोधा",
          description: "निवडणुकीच्या दिवशी तुम्हाला मतदान करण्यासाठी नक्की कुठे जावे लागेल ते शोधा.",
          bullets: ["वोटर हेल्पलाइन ॲप वापरा", "EPIC किंवा स्थानानुसार शोधा", "बूथ नकाशा तपासा", "वाहतूक मार्ग ओळखा"],
          tip: "💡 मतदान केंद्रे सहसा तुमच्या राहत्या घरापासून २ किमी अंतरावर असतात.",
        },
        {
          title: "मतदानाच्या दिवसाची तयारी",
          description: "सुरळीत मतदानाचा अनुभव सुनिश्चित करण्यासाठी एक अंतिम तपासणी.",
          bullets: ["वैध फोटो आयडी सोबत ठेवा", "बूथची वेळ तपासा", "मतदार स्लिप आणा", "रांगेसाठी नियोजन करा"],
          tip: "💡 बूथजवळ पक्ष-विशिष्ट रंग किंवा चिन्हे घालणे टाळा.",
        },
      ]
    },
    timeline: {
      title: "निवडणूक",
      titleAccent: "वेळापत्रक",
      subtitle: "सध्याच्या निवडणूक चक्रातील महत्त्वाचे टप्पे.",
    },
    actions: {
      title: "त्वरीत",
      titleAccent: "कृती",
      subtitle: "तुम्हाला जे हवे आहे त्यावर थेट जा. प्रत्येक कृती, एका टॅपवर.",
    },
    accessibility: {
      title: "अॅक्सेसिबिलिटी",
      largeText: "मोठा मजकूर",
      largeTextDesc: "फॉन्ट आकार वाढवा",
      highContrast: "उच्च कॉन्ट्रास्ट",
      highContrastDesc: "कॉन्ट्रास्ट वाढवा",
      voice: "व्हॉइस नरेशन",
      voiceDesc: "मजकूर मोठ्याने वाचा",
    },
    footer: {
      description: "भारतीय निवडणुका प्रत्येक नागरिकासाठी सोप्या, सुलभ आणि सक्षम बनवणारा AI-आधारित नागरी सहाय्यक.",
      links: "द्रुत दुवे",
      resources: "अधिकृत संसाधने",
      languages: "भाषा",
      tagline: "© २०२६ VoteSaathi AI. भारतासाठी, भारताद्वारे निर्मित।",
      madeWith: "लोकशाहीसाठी प्रेमाने बनवलेले",
    },
    ai: {
      welcome: "नमस्ते! 🙏 मी तुमचा VoteSaathi AI सहाय्यक आहे. भारतीय निवडणुका, मतदार नोंदणी किंवा मतदान प्रक्रिया याबद्दल मला काहीही विचारा.",
      placeholder: "निवडणुकांशी संबंधित विचार करा...",
      suggested: "सुचवलेले प्रश्न:",
      prompts: ["मी मतदान कसे करू?", "मला कोणती कागदपत्रे लागतील?", "निवडणुका सोप्या भाषेत सांगा", "मी मतदानासाठी पात्र आहे का?"],
    },
  },
};
