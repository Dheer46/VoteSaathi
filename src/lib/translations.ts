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
    countdownTitle: string;
    countdownAccent: string;
    countdownSubtitle: string;
    milestoneReached: string;
    inProgress: string;
    events: {
      title: string;
      date: string;
      description: string;
    }[];
  };
  actions: {
    title: string;
    titleAccent: string;
    subtitle: string;
    oneTap: string;
    launchAction: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  accessibility: {
    title: string;
    largeText: string;
    largeTextDesc: string;
    highContrast: string;
    highContrastDesc: string;
    voice: string;
    voiceDesc: string;
    settingsTitle: string;
  };
  legalContent: {
    privacy: {
      title: string;
      subtitle: string;
      sections: { title: string; content: string }[];
    };
    terms: {
      title: string;
      subtitle: string;
      sections: { title: string; content: string }[];
    };
    faq: {
      title: string;
      subtitle: string;
      questions: { q: string; a: string }[];
    };
    contact: {
      title: string;
      subtitle: string;
      description: string;
      emailLabel: string;
      socialsLabel: string;
      namePlaceholder: string;
      messagePlaceholder: string;
      sendButton: string;
    };
  };
  footer: {
    description: string;
    links: string;
    resources: string;
    languages: string;
    tagline: string;
    madeWith: string;
    explore: string;
    legal: {
      privacy: string;
      terms: string;
      faq: string;
      contact: string;
    };
  };
  ai: {
    welcome: string;
    placeholder: string;
    suggested: string;
    title: string;
    titleAccent: string;
    subtitle: string;
  };
  quiz: {
    badge: string;
    title: string;
    subtitle: string;
    question: string;
    of: string;
    didYouKnow: string;
    next: string;
    seeResults: string;
    complete: string;
    score: string;
    outOf: string;
    certificate: {
      badge: string;
      title: string;
      description: string;
    };
    tryAgain: string;
    askAi: string;
    questions: {
      question: string;
      options: string[];
      explanation: string;
    }[];
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
      countdownTitle: "The",
      countdownAccent: "Countdown",
      countdownSubtitle: "Stay updated with the official election schedule and key milestones.",
      milestoneReached: "Milestone Reached",
      inProgress: "In Progress",
      events: [
        {
          title: "Election Announced",
          date: "March 15, 2026",
          description: "Election Commission announces election schedule and code of conduct begins.",
        },
        {
          title: "Nominations Filed",
          date: "March 25, 2026",
          description: "Candidates file their nomination papers with the returning officer.",
        },
        {
          title: "Campaigning Period",
          date: "March 28 – April 28",
          description: "Political parties and candidates campaign across constituencies.",
        },
        {
          title: "Silence Period",
          date: "April 28 – April 30",
          description: "48-hour campaign blackout before polling begins.",
        },
        {
          title: "Voting Day",
          date: "April 30, 2026",
          description: "Polls open from 7 AM to 6 PM. Cast your vote!",
        },
        {
          title: "Counting & Results",
          date: "May 3, 2026",
          description: "Votes are counted and results are announced.",
        },
      ],
    },
    actions: {
      title: "Quick",
      titleAccent: "Actions",
      subtitle: "Jump directly to what you need. Every action, one tap away.",
      oneTap: "One-Tap Solutions",
      launchAction: "Launch Action",
      items: [
        { title: "Check Voter Status", description: "Verify if your name is on the electoral roll" },
        { title: "Registration Guide", description: "Step-by-step guide to register as a new voter" },
        { title: "Voting Process", description: "Learn how to cast your vote using EVM" },
        { title: "Polling Booth Finder", description: "Locate your nearest polling booth" },
        { title: "Documents Required", description: "List of approved ID proofs for voting" },
      ],
    },
    accessibility: {
      title: "Accessibility",
      largeText: "Large Text",
      largeTextDesc: "Increase font sizes",
      highContrast: "High Contrast",
      highContrastDesc: "Increase contrast",
      voice: "Voice Narration",
      voiceDesc: "Read content aloud",
      settingsTitle: "Accessibility Settings",
    },
    legalContent: {
      privacy: {
        title: "Privacy Manifesto",
        subtitle: "How we protect your civic data",
        sections: [
          { title: "01. Data Philosophy", content: "VoteSaathi is built on the principle of minimal data footprint. We do not store your personal identity, EPIC numbers, or private conversations." },
          { title: "02. AI Processing", content: "Your queries are processed using encrypted channels. While we use third-party AI models, your data is transient and not used for training global models." },
          { title: "03. Cookie Usage", content: "We only use essential technical cookies to remember your language preference and ensure stability." },
        ],
      },
      terms: {
        title: "Terms of Engagement",
        subtitle: "The rules of our digital forum",
        sections: [
          { title: "01. Information Accuracy", content: "While we strive for 100% accuracy, our AI may occasionally provide generalized information. Always cross-verify with the official Voter Helpline." },
          { title: "02. Civic Responsibility", content: "Users are expected to use this platform for legitimate civic education. Misinformation attempts will result in session termination." },
          { title: "03. No Legal Advice", content: "The information provided is for educational purposes only and does not constitute legal advice." },
        ],
      },
      faq: {
        title: "Common Inquiries",
        subtitle: "Frequently asked questions",
        questions: [
          { q: "Is VoteSaathi an official ECI app?", a: "No, VoteSaathi is an independent AI-powered assistant designed to make ECI information more accessible." },
          { q: "Do I need my physical ID to vote?", a: "While the EPIC card is preferred, you can vote with any of the 12 approved photo IDs if your name is in the roll." },
          { q: "How do I update my address?", a: "You can use Form 8 on the official ECI portal to update your address or other voter details." },
          { q: "Can I vote if I'm currently abroad?", a: "Yes, Indian citizens living abroad can register as 'Overseas Electors' using Form 6A." },
        ],
      },
      contact: {
        title: "Digital Contact",
        subtitle: "Get in touch with the team",
        description: "Have feedback or want to partner with us? We'd love to hear from you.",
        emailLabel: "Email Us",
        socialsLabel: "Socials",
        namePlaceholder: "Name",
        messagePlaceholder: "Message",
        sendButton: "Send Message",
      },
    },
    footer: {
      description: "AI-powered civic assistant making Indian elections simple, accessible, and empowering for every citizen.",
      links: "Quick Links",
      resources: "Official Resources",
      languages: "Languages",
      tagline: "© 2026 VoteSaathi AI. Built for India, by India.",
      madeWith: "Made with for democracy",
      explore: "Explore",
      legal: {
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        faq: "FAQ",
        contact: "Contact Us",
      },
    },
    ai: {
      welcome: "Namaste! 🙏 I'm your VoteSaathi AI assistant. Ask me anything about Indian elections, voter registration, or the voting process.",
      placeholder: "Ask about elections...",
      suggested: "Suggested questions:",
      prompts: ["How do I vote?", "What documents do I need?", "Explain elections simply", "Am I eligible to vote?"],
      title: "The",
      titleAccent: "Digital",
      subtitle: "Your private guide to the world's largest democratic process. Ask anything, in any language.",
    },
    quiz: {
      badge: "Knowledge Check",
      title: "Ready to vote?",
      subtitle: "Test your knowledge and earn your certificate.",
      question: "Question",
      of: "of",
      didYouKnow: "Did you know?",
      next: "Next Question",
      seeResults: "See Results",
      complete: "Quiz Complete!",
      score: "You scored",
      outOf: "out of",
      certificate: {
        badge: "Certification",
        title: "Voter Ready 🇮🇳",
        description: "This confirms that you have successfully understood the core mechanics of Indian Democracy.",
      },
      tryAgain: "Try Again",
      askAi: "Ask AI Assistant",
      questions: [
        {
          question: "What is the minimum age to be eligible to vote in India?",
          options: ["16 years", "18 years", "21 years", "25 years"],
          explanation: "As per the Constitution of India, any citizen aged 18 or above is eligible to vote."
        },
        {
          question: "Which form is used for new voter registration?",
          options: ["Form 7", "Form 8", "Form 6", "Form 12"],
          explanation: "Form 6 is specifically for the registration of new voters."
        },
        {
          question: "What does VVPAT stand for in the voting process?",
          options: ["Voter Verified Paper Audit Trail", "Voter Validated Paper Account Trust", "Visual Voter Paper Audit Tracking", "Voter Verified Printing Audit Tool"],
          explanation: "VVPAT allows voters to verify that their vote was cast correctly by showing a slip for 7 seconds."
        },
        {
          question: "How long before polling ends does campaigning have to stop?",
          options: ["24 hours", "48 hours", "72 hours", "1 week"],
          explanation: "The 'Silence Period' begins 48 hours before the conclusion of polling."
        }
      ],
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
      countdownTitle: "उल्टी",
      countdownAccent: "गिनती",
      countdownSubtitle: "आधिकारिक चुनाव कार्यक्रम और प्रमुख मील के पत्थर के साथ अपडेट रहें।",
      milestoneReached: "मील का पत्थर हासिल",
      inProgress: "प्रगति में",
      events: [
        {
          title: "चुनाव की घोषणा",
          date: "15 मार्च, 2026",
          description: "चुनाव आयोग चुनाव कार्यक्रम की घोषणा करता है और आचार संहिता शुरू होती है।",
        },
        {
          title: "नामांकन दाखिल",
          date: "25 मार्च, 2026",
          description: "उम्मीदवार रिटर्निंग ऑफिसर के पास अपना नामांकन पत्र दाखिल करते हैं।",
        },
        {
          title: "प्रचार अवधि",
          date: "28 मार्च - 28 अप्रैल",
          description: "राजनीतिक दल और उम्मीदवार निर्वाचन क्षेत्रों में प्रचार करते हैं।",
        },
        {
          title: "मौन अवधि",
          date: "28 अप्रैल - 30 अप्रैल",
          description: "मतदान शुरू होने से 48 घंटे पहले प्रचार पर रोक।",
        },
        {
          title: "मतदान का दिन",
          date: "30 अप्रैल, 2026",
          description: "मतदान सुबह 7 बजे से शाम 6 बजे तक खुला रहता है। अपना वोट डालें!",
        },
        {
          title: "गिनती और परिणाम",
          date: "3 मई, 2026",
          description: "वोटों की गिनती की जाती है और परिणाम घोषित किए जाते हैं।",
        },
      ],
    },
    actions: {
      title: "त्वरित",
      titleAccent: "कार्रवाई",
      subtitle: "जो आपको चाहिए उस पर सीधे जाएं। हर कार्रवाई, एक टैप दूर।",
      oneTap: "वन-टैप समाधान",
      launchAction: "कार्रवाई शुरू करें",
      items: [
        { title: "मतदाता स्थिति जांचें", description: "सत्यापित करें कि क्या आपका नाम मतदाता सूची में है" },
        { title: "पंजीकरण मार्गदर्शिका", description: "नए मतदाता के रूप में पंजीकरण के लिए चरण-दर-चरण मार्गदर्शिका" },
        { title: "मतदान प्रक्रिया", description: "EVM का उपयोग करके अपना वोट डालना सीखें" },
        { title: "मतदान केंद्र खोजक", description: "अपना निकटतम मतदान केंद्र खोजें" },
        { title: "आवश्यक दस्तावेज", description: "मतदान के लिए स्वीकृत आईडी प्रमाणों की सूची" },
      ],
    },
    accessibility: {
      title: "अभिगम्यता",
      largeText: "बड़े अक्षर",
      largeTextDesc: "फ़ॉन्ट आकार बढ़ाएँ",
      highContrast: "उच्च कंट्रास्ट",
      highContrastDesc: "कंट्रास्ट बढ़ाएँ",
      voice: "आवाज वर्णन",
      voiceDesc: "सामग्री को जोर से पढ़ें",
      settingsTitle: "अभिगम्यता सेटिंग्स",
    },
    legalContent: {
      privacy: {
        title: "गोपनीयता घोषणापत्र",
        subtitle: "हम आपके नागरिक डेटा की सुरक्षा कैसे करते हैं",
        sections: [
          { title: "01. डेटा दर्शन", content: "वोटसाथी न्यूनतम डेटा पदचिह्न के सिद्धांत पर बनाया गया है। हम आपकी व्यक्तिगत पहचान या बातचीत को संग्रहीत नहीं करते हैं।" },
          { title: "02. AI प्रसंस्करण", content: "आपके प्रश्नों को एन्क्रिप्टेड चैनलों का उपयोग करके संसाधित किया जाता है। डेटा क्षणिक है और वैश्विक मॉडल प्रशिक्षण के लिए उपयोग नहीं किया जाता है।" },
          { title: "03. कुकी उपयोग", content: "हम केवल आपकी भाषा वरीयता को याद रखने के लिए आवश्यक तकनीकी कुकीज़ का उपयोग करते हैं।" },
        ],
      },
      terms: {
        title: "जुड़ाव की शर्तें",
        subtitle: "हमारे डिजिटल फोरम के नियम",
        sections: [
          { title: "01. सूचना सटीकता", content: "हम 100% सटीकता के लिए प्रयास करते हैं, लेकिन हमारा AI कभी-कभी सामान्य जानकारी प्रदान कर सकता है। हमेशा आधिकारिक वोटर हेल्पलाइन के साथ क्रॉस-वेरिफाई करें।" },
          { title: "02. नागरिक जिम्मेदारी", content: "उपयोगकर्ताओं से इस मंच का उपयोग वैध नागरिक शिक्षा के लिए करने की अपेक्षा की जाती है।" },
          { title: "03. कोई कानूनी सलाह नहीं", content: "प्रदान की गई जानकारी केवल शैक्षिक उद्देश्यों के लिए है और कानूनी सलाह नहीं है।" },
        ],
      },
      faq: {
        title: "सामान्य प्रश्न",
        subtitle: "अक्सर पूछे जाने वाले प्रश्न",
        questions: [
          { q: "क्या वोटसाथी एक आधिकारिक ECI ऐप है?", a: "नहीं, वोटसाथी एक स्वतंत्र AI-आधारित सहायक है।" },
          { q: "क्या मुझे वोट देने के लिए भौतिक आईडी की आवश्यकता है?", a: "जबकि EPIC कार्ड पसंद किया जाता है, आप 12 स्वीकृत आईडी में से किसी का भी उपयोग कर सकते हैं।" },
        ],
      },
      contact: {
        title: "डिजिटल संपर्क",
        subtitle: "टीम के साथ संपर्क करें",
        description: "प्रतिक्रिया है? हमारे साथ साझेदारी करना चाहते हैं? हमें आपसे सुनना अच्छा लगेगा।",
        emailLabel: "हमें ईमेल करें",
        socialsLabel: "सोशल मीडिया",
        namePlaceholder: "नाम",
        messagePlaceholder: "संदेश",
        sendButton: "संदेश भेजें",
      },
    },
    footer: {
      description: "AI-आधारित नागरिक सहायक जो भारतीय चुनावों को हर नागरिक के लिए सरल, सुलभ और सशक्त बनाता है।",
      links: "त्वरित लिंक",
      resources: "आधिकारिक संसाधन",
      languages: "भाषाएं",
      tagline: "© 2026 VoteSaathi AI. भारत के लिए, भारत द्वारा निर्मित।",
      madeWith: "लोकतंत्र के लिए प्यार से बनाया गया",
      explore: "एक्सप्लोर करें",
      legal: {
        privacy: "गोपनीयता नीति",
        terms: "उपयोग की शर्तें",
        faq: "सामान्य प्रश्न",
        contact: "संपर्क करें",
      },
    },
    ai: {
      welcome: "नमस्ते! 🙏 मैं आपका वोटसाथी AI सहायक हूं। भारतीय चुनाव, मतदाता पंजीकरण या मतदान प्रक्रिया के बारे में मुझसे कुछ भी पूछें।",
      placeholder: "चुनाव के बारे में पूछें...",
      suggested: "सुझाए गए प्रश्न:",
      prompts: ["मैं वोट कैसे दूं?", "मुझे किन दस्तावेजों की आवश्यकता है?", "चुनावों को सरलता से समझाएं", "क्या मैं वोट देने के पात्र हूं?"],
      title: "आपका",
      titleAccent: "डिजिटल",
      subtitle: "दुनिया की सबसे बड़ी लोकतांत्रिक प्रक्रिया के लिए आपका निजी मार्गदर्शक। कुछ भी पूछें, किसी भी भाषा में।",
    },
    quiz: {
      badge: "ज्ञान जांच",
      title: "वोट देने के लिए तैयार हैं?",
      subtitle: "अपने ज्ञान का परीक्षण करें और अपना प्रमाणपत्र प्राप्त करें।",
      question: "प्रश्न",
      of: "का",
      didYouKnow: "क्या आप जानते हैं?",
      next: "अगला प्रश्न",
      seeResults: "परिणाम देखें",
      complete: "प्रश्नोत्तरी पूरी हुई!",
      score: "आपने स्कोर किया",
      outOf: "में से",
      certificate: {
        badge: "प्रमाणन",
        title: "मतदाता तैयार 🇮🇳",
        description: "यह पुष्टि करता है कि आपने भारतीय लोकतंत्र के मूल तंत्र को सफलतापूर्वक समझ लिया है।",
      },
      tryAgain: "फिर से प्रयास करें",
      askAi: "AI सहायक से पूछें",
      questions: [
        {
          question: "भारत में वोट देने के लिए न्यूनतम आयु क्या है?",
          options: ["16 वर्ष", "18 वर्ष", "21 वर्ष", "25 वर्ष"],
          explanation: "भारत के संविधान के अनुसार, 18 वर्ष या उससे अधिक आयु का कोई भी नागरिक वोट देने के लिए पात्र है।"
        },
        {
          question: "नए मतदाता पंजीकरण के लिए किस फॉर्म का उपयोग किया जाता है?",
          options: ["फॉर्म 7", "फॉर्म 8", "फॉर्म 6", "फॉर्म 12"],
          explanation: "फॉर्म 6 विशेष रूप से नए मतदाताओं के पंजीकरण के लिए है।"
        },
        {
          question: "मतदान प्रक्रिया में VVPAT का क्या अर्थ है?",
          options: ["वोटर वेरिफाइड पेपर ऑडिट ट्रेल", "वोटर वैलिडेटेड पेपर अकाउंट ट्रस्ट", "विजुअल वोटर पेपर ऑडिट ट्रैकिंग", "वोटर वेरिफाइड प्रिंटिंग ऑडिट टूल"],
          explanation: "VVPAT मतदाताओं को यह सत्यापित करने की अनुमति देता है कि उनका वोट 7 सेकंड के लिए एक पर्ची दिखाकर सही ढंग से डाला गया था।"
        },
        {
          question: "मतदान समाप्त होने से कितने समय पहले प्रचार रोकना पड़ता है?",
          options: ["24 घंटे", "48 घंटे", "72 घंटे", "1 सप्ताह"],
          explanation: "'मौन अवधि' मतदान समाप्त होने से 48 घंटे पहले शुरू होती है।"
        }
      ],
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
      countdownTitle: "முடிவு",
      countdownAccent: "கவுண்ட்டவுன்",
      countdownSubtitle: "அதிகாரப்பூர்வ தேர்தல் அட்டவணை மற்றும் முக்கிய மைல்கற்களுடன் புதுப்பித்த நிலையில் இருங்கள்.",
      milestoneReached: "மைல்கல் எட்டப்பட்டது",
      inProgress: "செயல்பாட்டில் உள்ளது",
      events: [
        {
          title: "தேர்தல் அறிவிப்பு",
          date: "மார்ச் 15, 2026",
          description: "தேர்தல் ஆணையம் தேர்தல் அட்டவணையை அறிவிக்கிறது மற்றும் நடத்தை விதிகள் தொடங்குகின்றன.",
        },
        {
          title: "வேட்புமனு தாக்கல்",
          date: "மார்ச் 25, 2026",
          description: "வேட்பாளர்கள் தங்கள் வேட்புமனுக்களை தேர்தல் நடத்தும் அதிகாரியிடம் தாக்கல் செய்கிறார்கள்.",
        },
        {
          title: "பிரச்சார காலம்",
          date: "மார்ச் 28 - ஏப்ரல் 28",
          description: "அரசியல் கட்சிகள் மற்றும் வேட்பாளர்கள் தொகுதிகள் முழுவதும் பிரச்சாரம் செய்கிறார்கள்.",
        },
        {
          title: "அமைதி காலம்",
          date: "ஏப்ரல் 28 - ஏப்ரல் 30",
          description: "வாக்குப்பதிவு தொடங்குவதற்கு 48 மணி நேரத்திற்கு முன் பிரச்சாரத் தடை.",
        },
        {
          title: "வாக்குப்பதிவு நாள்",
          date: "ஏப்ரல் 30, 2026",
          description: "காலை 7 மணி முதல் மாலை 6 மணி வரை வாக்குப்பதிவு நடைபெறும். உங்கள் வாக்கைச் செலுத்துங்கள்!",
        },
        {
          title: "எண்ணிக்கை மற்றும் முடிவுகள்",
          date: "மே 3, 2026",
          description: "வாக்குகள் எண்ணப்பட்டு முடிவுகள் அறிவிக்கப்படுகின்றன.",
        },
      ],
    },
    actions: {
      title: "விரைவு",
      titleAccent: "செயல்கள்",
      subtitle: "உங்களுக்குத் தேவையானதை நேரடியாக அடையுங்கள். ஒவ்வொரு செயலும் ஒரு தட்டலில்.",
      oneTap: "ஒரே தட்டல் தீர்வுகள்",
      launchAction: "செயலைத் தொடங்கு",
      items: [
        { title: "வாக்காளர் நிலையைச் சரிபார்க்கவும்", description: "வாக்காளர் பட்டியலில் உங்கள் பெயர் உள்ளதா எனச் சரிபார்க்கவும்" },
        { title: "பதிவு வழிகாட்டி", description: "புதிய வாக்காளராகப் பதிவு செய்வதற்கான படிப்படியான வழிகாட்டி" },
        { title: "வாக்களிக்கும் முறை", description: "EVM-ஐப் பயன்படுத்தி உங்கள் வாக்கைச் செலுத்துவது எப்படி என்பதைக் கற்றுக்கொள்ளுங்கள்" },
        { title: "வாக்குச்சாவடி கண்டறிவி", description: "உங்களுக்கு அருகிலுள்ள வாக்குச்சாவடியைக் கண்டறியவும்" },
        { title: "தேவையான ஆவணங்கள்", description: "வாக்களிக்க அங்கீகரிக்கப்பட்ட அடையாளச் சான்றுகளின் பட்டியல்" },
      ],
    },
    accessibility: {
      title: "அணுகல்தன்மை",
      largeText: "பெரிய உரை",
      largeTextDesc: "எழுத்துரு அளவை அதிகரிக்கவும்",
      highContrast: "அதிக மாறுபாடு",
      highContrastDesc: "மாறுபாட்டை அதிகரிக்கவும்",
      voice: "குரல் விவரிப்பு",
      voiceDesc: "உள்ளடக்கத்தை சத்தமாக வாசிக்கவும்",
      settingsTitle: "Accessibility Settings",
    },
    legalContent: {
      privacy: {
        title: "Privacy Manifesto",
        subtitle: "How we protect your civic data",
        sections: [
          { title: "01. Data Philosophy", content: "VoteSaathi is built on the principle of minimal data footprint. We do not store your personal identity, EPIC numbers, or private conversations." },
          { title: "02. AI Processing", content: "Your queries are processed using encrypted channels. While we use third-party AI models, your data is transient and not used for training global models." },
          { title: "03. Cookie Usage", content: "We only use essential technical cookies to remember your language preference and ensure stability." },
        ],
      },
      terms: {
        title: "Terms of Engagement",
        subtitle: "The rules of our digital forum",
        sections: [
          { title: "01. Information Accuracy", content: "While we strive for 100% accuracy, our AI may occasionally provide generalized information. Always cross-verify with the official Voter Helpline." },
          { title: "02. Civic Responsibility", content: "Users are expected to use this platform for legitimate civic education. Misinformation attempts will result in session termination." },
          { title: "03. No Legal Advice", content: "The information provided is for educational purposes only and does not constitute legal advice." },
        ],
      },
      faq: {
        title: "Common Inquiries",
        subtitle: "Frequently asked questions",
        questions: [
          { q: "Is VoteSaathi an official ECI app?", a: "No, VoteSaathi is an independent AI-powered assistant designed to make ECI information more accessible." },
          { q: "Do I need my physical ID to vote?", a: "While the EPIC card is preferred, you can vote with any of the 12 approved photo IDs if your name is in the roll." },
        ],
      },
      contact: {
        title: "Digital Contact",
        subtitle: "Get in touch with the team",
        description: "Have feedback or want to partner with us? We'd love to hear from you.",
        emailLabel: "Email Us",
        socialsLabel: "Socials",
        namePlaceholder: "Name",
        messagePlaceholder: "Message",
        sendButton: "Send Message",
      },
    },
    footer: {
      description: "இந்தியத் தேர்தல்களை எளியதாகவும், அணுகக்கூடியதாகவும், ஒவ்வொரு குடிமகனுக்கும் அதிகாரம் அளிப்பதாகவும் மாற்றும் AI-ஆற்றல் கொண்ட குடிமை உதவியாளர்.",
      links: "விரைவு இணைப்புகள்",
      resources: "அதிகாரப்பூர்வ ஆதாரங்கள்",
      languages: "மொழிகள்",
      tagline: "© 2026 VoteSaathi AI. இந்தியாவிற்காக, இந்தியாவால் உருவாக்கப்பட்டது.",
      madeWith: "மக்களாட்சிக்காக அன்புடன் உருவாக்கப்பட்டது",
      explore: "ஆராயுங்கள்",
      legal: {
        privacy: "தனியுரிமைக் கொள்கை",
        terms: "பயன்பாட்டு விதிமுறைகள்",
        faq: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
        contact: "எங்களைத் தொடர்பு கொள்ளுங்கள்",
      },
    },
    ai: {
      welcome: "வணக்கம்! 🙏 நான் உங்கள் VoteSaathi AI உதவியாளர். இந்தியத் தேர்தல்கள், வாக்காளர் பதிவு அல்லது வாக்களிக்கும் முறை பற்றி எதையும் என்னிடம் கேளுங்கள்.",
      placeholder: "தேர்தல்கள் பற்றி கேளுங்கள்...",
      suggested: "பரிந்துரைக்கப்பட்ட கேள்விகள்:",
      prompts: ["நான் எப்படி வாக்களிப்பது?", "எனக்கு என்ன ஆவணங்கள் தேவை?", "தேர்தல்களை எளிமையாக விளக்கவும்", "நான் வாக்களிக்கத் தகுதியுள்ளவனா?"],
      title: "உங்கள்",
      titleAccent: "டிஜிட்டல்",
      subtitle: "உலகின் மிகப்பெரிய ஜனநாயக செயல்முறைக்கான உங்கள் தனிப்பட்ட வழிகாட்டி. எதையும் கேளுங்கள், எந்த மொழியிலும்.",
    },
    quiz: {
      badge: "அறிவு சோதனை",
      title: "வாக்களிக்க தயாரா?",
      subtitle: "உங்கள் அறிவைச் சோதித்து உங்கள் சான்றிதழைப் பெறுங்கள்.",
      question: "கேள்வி",
      of: "இல்",
      didYouKnow: "உங்களுக்குத் தெரியுமா?",
      next: "அடுத்த கேள்வி",
      seeResults: "முடிவுகளைப் பார்க்கவும்",
      complete: "வினாடி வினா முடிந்தது!",
      score: "உங்கள் மதிப்பெண்",
      outOf: "க்கு",
      certificate: {
        badge: "சான்றிதழ்",
        title: "வாக்களிக்கத் தயார் 🇮🇳",
        description: "இந்திய ஜனநாயகத்தின் அடிப்படை இயக்கவியலை நீங்கள் வெற்றிகரமாகப் புரிந்து கொண்டீர்கள் என்பதை இது உறுதிப்படுத்துகிறது.",
      },
      tryAgain: "மீண்டும் முயற்சி செய்",
      askAi: "AI உதவியாளரிடம் கேளுங்கள்",
      questions: [
        {
          question: "இந்தியாவில் வாக்களிக்க குறைந்தபட்ச வயது என்ன?",
          options: ["16 ஆண்டுகள்", "18 ஆண்டுகள்", "21 ஆண்டுகள்", "25 ஆண்டுகள்"],
          explanation: "இந்திய அரசியலமைப்பின்படி, 18 வயது அல்லது அதற்கு மேற்பட்ட குடிமக்கள் எவரும் வாக்களிக்க தகுதியுடையவர்கள்."
        },
        {
          question: "புதிய வாக்காளர் பதிவு செய்ய எந்த படிவம் பயன்படுத்தப்படுகிறது?",
          options: ["படிவம் 7", "படிவம் 8", "படிவம் 6", "படிவம் 12"],
          explanation: "படிவம் 6 குறிப்பாக புதிய வாக்காளர்களைப் பதிவு செய்வதற்கானது."
        },
        {
          question: "வாக்களிக்கும் முறையில் VVPAT என்பதன் விரிவாக்கம் என்ன?",
          options: ["வாக்காளர் சரிபார்க்கப்பட்ட காகித தணிக்கை தடம்", "வாக்காளர் சரிபார்க்கப்பட்ட காகித கணக்கு அறக்கட்டளை", "காட்சி வாக்காளர் காகித தணிக்கை கண்காணிப்பு", "வாக்காளர் சரிபார்க்கப்பட்ட அச்சிடுதல் தணிக்கை கருவி"],
          explanation: "VVPAT வாக்காளர்கள் தங்கள் வாக்கு சரியாகப் பதிவு செய்யப்பட்டுள்ளதா என்பதை 7 வினாடிகள் ஒரு துண்டுச் சீட்டைக் காட்டுவதன் மூலம் சரிபார்க்க அனுமதிக்கிறது."
        },
        {
          question: "வாக்குப்பதிவு முடிவதற்கு எவ்வளவு காலத்திற்கு முன்பே பிரச்சாரம் நிறுத்தப்பட வேண்டும்?",
          options: ["24 மணிநேரம்", "48 மணிநேரம்", "72 மணிநேரம்", "1 வாரம்"],
          explanation: "'அமைதி காலம்' வாக்குப்பதிவு முடிவதற்கு 48 மணிநேரத்திற்கு முன்பே தொடங்குகிறது."
        }
      ],
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
      countdownTitle: "తుది",
      countdownAccent: "గణన",
      countdownSubtitle: "అధికారిక ఎన్నికల షెడ్యూల్ మరియు కీలక మైలురాళ్లతో అప్‌డేట్ అవ్వండి.",
      milestoneReached: "మైలురాయి చేరుకుంది",
      inProgress: "పురోగతిలో ఉంది",
      events: [
        {
          title: "ఎన్నికల ప్రకటన",
          date: "మార్చి 15, 2026",
          description: "ఎన్నికల కమిషన్ ఎన్నికల షెడ్యూల్‌ను ప్రకటిస్తుంది మరియు ఎన్నికల నియమావళి అమలులోకి వస్తుంది.",
        },
        {
          title: "నామినేషన్ల దాఖలు",
          date: "మార్చి 25, 2026",
          description: "అభ్యర్థులు తమ నామినేషన్ పత్రాలను రిటర్నింగ్ అధికారికి సమర్పిస్తారు.",
        },
        {
          title: "ప్రచార కాలం",
          date: "మార్చి 28 - ఏప్రిల్ 28",
          description: "రాజకీయ పార్టీలు మరియు అభ్యర్థులు నియోజకవర్గాల్లో ప్రచారం చేస్తారు.",
        },
        {
          title: "మౌన కాలం",
          date: "ఏప్రిల్ 28 - ఏప్రిల్ 30",
          description: "పోలింగ్ ప్రారంభానికి 48 గంటల ముందు ప్రచార నిషేధం.",
        },
        {
          title: "పోలింగ్ రోజు",
          date: "ఏప్రిల్ 30, 2026",
          description: "ఉదయం 7 నుండి సాయంత్రం 6 గంటల వరకు పోలింగ్ జరుగుతుంది. మీ ఓటు వేయండి!",
        },
        {
          title: "లెక్కింపు & ఫలితాలు",
          date: "మే 3, 2026",
          description: "ఓట్లు లెక్కించబడతాయి మరియు ఫలితాలు ప్రకటించబడతాయి.",
        },
      ],
    },
    actions: {
      title: "శీఘ్ర",
      titleAccent: "చర్యలు",
      subtitle: "మీకు కావలసిన దానిపై నేరుగా వెళ్లండి. ప్రతి చర్య, ఒక ట్యాప్ దూరంలో.",
      oneTap: "వన్-ట్యాప్ పరిష్కారాలు",
      launchAction: "చర్యను ప్రారంభించండి",
      items: [
        { title: "ఓటరు స్థితిని తనిఖీ చేయండి", description: "ఓటరు జాబితాలో మీ పేరు ఉందో లేదో సరిచూసుకోండి" },
        { title: "నమోదు మార్గదర్శిని", description: "కొత్త ఓటరుగా నమోదు చేసుకోవడానికి దశలవారీ మార్గదర్శిని" },
        { title: "ఓటింగ్ ప్రక్రియ", description: "EVM ఉపయోగించి మీ ఓటు ఎలా వేయాలో తెలుసుకోండి" },
        { title: "పోలింగ్ బూత్ ఫైండర్", description: "మీకు దగ్గరలో ఉన్న పోలింగ్ బూత్‌ను కనుగొనండి" },
        { title: "అవసరమైన పత్రాలు", description: "ఓటింగ్ కోసం ఆమోదించబడిన గుర్తింపు కార్డుల జాబితా" },
      ],
    },
    accessibility: {
      title: "యాక్సెసిబిలిటీ",
      largeText: "పెద్ద వచనం",
      largeTextDesc: "ఫాంట్ పరిమాణాలను పెంచండి",
      highContrast: "అధిక కాంట్రాస్ట్",
      highContrastDesc: "కాంట్రాస్ట్‌ని పెంచండి",
      voice: "వాయిస్ నరేషన్",
      voiceDesc: "కంటెంట్‌ను బిగ్గరగా చదవండి",
      settingsTitle: "Accessibility Settings",
    },
    legalContent: {
      privacy: {
        title: "Privacy Manifesto",
        subtitle: "How we protect your civic data",
        sections: [
          { title: "01. Data Philosophy", content: "VoteSaathi is built on the principle of minimal data footprint. We do not store your personal identity, EPIC numbers, or private conversations." },
          { title: "02. AI Processing", content: "Your queries are processed using encrypted channels. While we use third-party AI models, your data is transient and not used for training global models." },
          { title: "03. Cookie Usage", content: "We only use essential technical cookies to remember your language preference and ensure stability." },
        ],
      },
      terms: {
        title: "Terms of Engagement",
        subtitle: "The rules of our digital forum",
        sections: [
          { title: "01. Information Accuracy", content: "While we strive for 100% accuracy, our AI may occasionally provide generalized information. Always cross-verify with the official Voter Helpline." },
          { title: "02. Civic Responsibility", content: "Users are expected to use this platform for legitimate civic education. Misinformation attempts will result in session termination." },
          { title: "03. No Legal Advice", content: "The information provided is for educational purposes only and does not constitute legal advice." },
        ],
      },
      faq: {
        title: "Common Inquiries",
        subtitle: "Frequently asked questions",
        questions: [
          { q: "Is VoteSaathi an official ECI app?", a: "No, VoteSaathi is an independent AI-powered assistant designed to make ECI information more accessible." },
          { q: "Do I need my physical ID to vote?", a: "While the EPIC card is preferred, you can vote with any of the 12 approved photo IDs if your name is in the roll." },
        ],
      },
      contact: {
        title: "Digital Contact",
        subtitle: "Get in touch with the team",
        description: "Have feedback or want to partner with us? We'd love to hear from you.",
        emailLabel: "Email Us",
        socialsLabel: "Socials",
        namePlaceholder: "Name",
        messagePlaceholder: "Message",
        sendButton: "Send Message",
      },
    },
    footer: {
      description: "భారతీయ ఎన్నికలను ప్రతి పౌరుడికి సులభంగా, అందుబాటులో ఉండేలా చేసే AI-శక్తితో కూడిన సివిక్ అసిస్టెంట్.",
      links: "శీఘ్ర లింకులు",
      resources: "అధికారిక వనరులు",
      languages: "భాషలు",
      tagline: "© 2026 VoteSaathi AI. భారతదేశం కోసం, భారతదేశం ద్వారా నిర్మించబడింది.",
      madeWith: "ప్రజాస్వామ్యం కోసం ప్రేమతో రూపొందించబడింది",
      explore: "అన్వేషించండి",
      legal: {
        privacy: "గోప్యతా విధానం",
        terms: "ఉపయోగ నిబంధనలు",
        faq: "తరచుగా అడిగే ప్రశ్నలు",
        contact: "మమ్మల్ని సంప్రదించండి",
      },
    },
    ai: {
      welcome: "నమస్తే! 🙏 నేను మీ VoteSaathi AI అసిస్టెంట్‌ని. భారతీయ ఎన్నికలు, ఓటరు నమోదు లేదా ఓటింగ్ ప్రక్రియ గురించి నన్ను ఏదైనా అడగండి.",
      placeholder: "ఎన్నికల గురించి అడగండి...",
      suggested: "సూచించబడిన ప్రశ్నలు:",
      prompts: ["నేను ఓటు ఎలా వేయాలి?", "నాకు ఏ పత్రాలు అవసరం?", "ఎన్నికల గురించి సరళంగా వివరించండి", "నేను ఓటు వేయడానికి అర్హుడినా?"],
      title: "మీ",
      titleAccent: "డిజిటల్",
      subtitle: "ప్రపంచంలోని అతిపెద్ద ప్రజాస్వామ్య ప్రక్రియకు మీ వ్యక్తిగత మార్గదర్శి. ఏదైనా అడగండి, ఏ భాషలోనైనా.",
    },
    quiz: {
      badge: "నాలెడ్జ్ చెక్",
      title: "ఓటు వేయడానికి సిద్ధంగా ఉన్నారా?",
      subtitle: "మీ పరిజ్ఞానాన్ని పరీక్షించుకోండి మరియు మీ సర్టిఫికేట్ పొందండి.",
      question: "ప్రశ్న",
      of: "లో",
      didYouKnow: "మీకు తెలుసా?",
      next: "తదుపరి ప్రశ్న",
      seeResults: "ఫలితాలను చూడండి",
      complete: "క్విజ్ పూర్తయింది!",
      score: "మీ స్కోరు",
      outOf: "కి",
      certificate: {
        badge: "సర్టిఫికేషన్",
        title: "ఓటర్ రెడీ 🇮🇳",
        description: "భారతీయ ప్రజాస్వామ్యం యొక్క ప్రధాన యంత్రాంగాన్ని మీరు విజయవంతంగా అర్థం చేసుకున్నారని ఇది ధృవీకరిస్తుంది.",
      },
      tryAgain: "మళ్ళీ ప్రయత్నించండి",
      askAi: "AI అసిస్టెంట్‌ని అడగండి",
      questions: [
        {
          question: "భారతదేశంలో ఓటు వేయడానికి కనీస వయస్సు ఎంత?",
          options: ["16 ఏళ్లు", "18 ఏళ్లు", "21 ఏళ్లు", "25 ఏళ్లు"],
          explanation: "భారత రాజ్యాంగం ప్రకారం, 18 ఏళ్లు లేదా అంతకంటే ఎక్కువ వయస్సు ఉన్న పౌరులందరూ ఓటు వేయడానికి అర్హులు."
        },
        {
          question: "కొత్త ఓటరు నమోదు కోసం ఏ ఫారమ్‌ను ఉపయోగిస్తారు?",
          options: ["ఫారమ్ 7", "ఫారమ్ 8", "ఫారమ్ 6", "ఫారమ్ 12"],
          explanation: "ఫారమ్ 6 ప్రత్యేకంగా కొత్త ఓటర్ల నమోదు కోసం ఉద్దేశించబడింది."
        },
        {
          question: "ఓటింగ్ ప్రక్రియలో VVPAT అంటే ఏమిటి?",
          options: ["ఓటర్ వెరిఫైడ్ పేపర్ ఆడిట్ ట్రయల్", "ఓటర్ వ్యాలిడేటెడ్ పేపర్ అకౌంట్ ట్రస్ట్", "విజువల్ ఓటర్ పేపర్ ఆడిట్ ట్రాకింగ్", "ఓటర్ వెరిఫైడ్ ప్రింటింగ్ ఆడిట్ టూల్"],
          explanation: "VVPAT ఓటర్లు తమ ఓటు సరిగ్గా వేయబడిందని 7 సెకన్ల పాటు స్లిప్‌ను చూపడం ద్వారా ధృవీకరించుకోవడానికి అనుమతిస్తుంది."
        },
        {
          question: "పోలింగ్ ముగియడానికి ఎంత సమయం ముందు ప్రచారం ఆగిపోవాలి?",
          options: ["24 గంటలు", "48 గంటలు", "72 గంటలు", "1 వారం"],
          explanation: "పోలింగ్ ముగియడానికి 48 గంటల ముందు 'మౌన కాలం' ప్రారంభమవుతుంది."
        }
      ],
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
      countdownTitle: "উল্টো",
      countdownAccent: "গণনা",
      countdownSubtitle: "অফিসিয়াল নির্বাচনী সময়সূচী এবং মূল মাইলফলকগুলির সাথে আপ-টু-ডেট থাকুন।",
      milestoneReached: "মাইলফলক অর্জিত",
      inProgress: "চলমান",
      events: [
        {
          title: "নির্বাচন ঘোষণা",
          date: "১৫ মার্চ, ২০২৬",
          description: "নির্বাচন কমিশন নির্বাচনের সময়সূচী ঘোষণা করেছে এবং আচরণবিধি শুরু হয়েছে।",
        },
        {
          title: "মনোনয়ন দাখিল",
          date: "২৫ মার্চ, ২০২৬",
          description: "প্রার্থীরা রিটার্নিং অফিসারের কাছে তাদের মনোনয়নপত্র জমা দেন।",
        },
        {
          title: "প্রচার সময়কাল",
          date: "২৮ মার্চ - ২৮ এপ্রিল",
          description: "রাজনৈতিক দল এবং প্রার্থীরা নির্বাচনী এলাকায় প্রচার চালান।",
        },
        {
          title: "মৌন সময়কাল",
          date: "২৮ এপ্রিল - ৩০ এপ্রিল",
          description: "ভোট শুরু হওয়ার ৪৮ ঘণ্টা আগে প্রচার বন্ধ।",
        },
        {
          title: "ভোটের দিন",
          date: "৩০ এপ্রিল, ২০২৬",
          description: "সকাল ৭টা থেকে সন্ধ্যা ৬টা পর্যন্ত ভোটগ্রহণ চলবে। আপনার ভোট দিন!",
        },
        {
          title: "গণনা ও ফলাফল",
          date: "৩ মে, ২০২৬",
          description: "ভোট গণনা করা হয় এবং ফলাফল ঘোষণা করা হয়।",
        },
      ],
    },
    actions: {
      title: "দ্রুত",
      titleAccent: "পদক্ষেপ",
      subtitle: "আপনার যা প্রয়োজন তাতে সরাসরি যান। প্রতিটি পদক্ষেপ মাত্র এক ট্যাপ দূরে।",
      oneTap: "ওয়ান-ট্যাপ সমাধান",
      launchAction: "পদক্ষেপ শুরু করুন",
      items: [
        { title: "ভোটার স্ট্যাটাস যাচাই করুন", description: "ভোটার তালিকায় আপনার নাম আছে কিনা তা পরীক্ষা করুন" },
        { title: "নিবন্ধন নির্দেশিকা", description: "নতুন ভোটার হিসেবে নিবন্ধনের জন্য ধাপে ধাপে নির্দেশিকা" },
        { title: "ভোটদান প্রক্রিয়া", description: "EVM ব্যবহার করে কীভাবে আপনার ভোট দেবেন তা শিখুন" },
        { title: "ভোটগ্রহণ কেন্দ্র খোঁজক", description: "আপনার নিকটতম ভোটগ্রহণ কেন্দ্র খুঁজে বের করুন" },
        { title: "প্রয়োজনীয় নথি", description: "ভোট দেওয়ার জন্য অনুমোদিত পরিচয়পত্রের তালিকা" },
      ],
    },
    accessibility: {
      title: "অ্যাক্সেসিবিলিটি",
      largeText: "বড় লেখা",
      largeTextDesc: "ফন্টের আকার বাড়ান",
      highContrast: "উচ্চ বৈসাদৃশ্য",
      highContrastDesc: "বৈসাদৃশ্য বাড়ান",
      voice: "ভয়েস বর্ণনা",
      voiceDesc: "বিষয়বস্তু জোরে পড়ুন",
      settingsTitle: "Accessibility Settings",
    },
    legalContent: {
      privacy: {
        title: "Privacy Manifesto",
        subtitle: "How we protect your civic data",
        sections: [
          { title: "01. Data Philosophy", content: "VoteSaathi is built on the principle of minimal data footprint. We do not store your personal identity, EPIC numbers, or private conversations." },
          { title: "02. AI Processing", content: "Your queries are processed using encrypted channels. While we use third-party AI models, your data is transient and not used for training global models." },
          { title: "03. Cookie Usage", content: "We only use essential technical cookies to remember your language preference and ensure stability." },
        ],
      },
      terms: {
        title: "Terms of Engagement",
        subtitle: "The rules of our digital forum",
        sections: [
          { title: "01. Information Accuracy", content: "While we strive for 100% accuracy, our AI may occasionally provide generalized information. Always cross-verify with the official Voter Helpline." },
          { title: "02. Civic Responsibility", content: "Users are expected to use this platform for legitimate civic education. Misinformation attempts will result in session termination." },
          { title: "03. No Legal Advice", content: "The information provided is for educational purposes only and does not constitute legal advice." },
        ],
      },
      faq: {
        title: "Common Inquiries",
        subtitle: "Frequently asked questions",
        questions: [
          { q: "Is VoteSaathi an official ECI app?", a: "No, VoteSaathi is an independent AI-powered assistant designed to make ECI information more accessible." },
          { q: "Do I need my physical ID to vote?", a: "While the EPIC card is preferred, you can vote with any of the 12 approved photo IDs if your name is in the roll." },
        ],
      },
      contact: {
        title: "Digital Contact",
        subtitle: "Get in touch with the team",
        description: "Have feedback or want to partner with us? We'd love to hear from you.",
        emailLabel: "Email Us",
        socialsLabel: "Socials",
        namePlaceholder: "Name",
        messagePlaceholder: "Message",
        sendButton: "Send Message",
      },
    },
    footer: {
      description: "AI-চালিত নাগরিক সহকারী যা ভারতীয় নির্বাচনকে প্রতিটি নাগরিকের জন্য সহজ, সহজলভ্য এবং ক্ষমতায়নকারী করে তোলে।",
      links: "দ্রুত লিঙ্ক",
      resources: "অফিসিয়াল রিসোর্স",
      languages: "ভাষা",
      tagline: "© ২০২৬ VoteSaathi AI। ভারতের জন্য, ভারত দ্বারা নির্মিত।",
      madeWith: "গণতন্ত্রের জন্য ভালোবাসা দিয়ে তৈরি",
      explore: "অন্বেষণ করুন",
      legal: {
        privacy: "গোপনীয়তা নীতি",
        terms: "ব্যবহারের শর্তাবলী",
        faq: "সাধারণ জিজ্ঞাসা",
        contact: "যোগাযোগ করুন",
      },
    },
    ai: {
      welcome: "নমস্কার! 🙏 আমি আপনার VoteSaathi AI সহকারী। ভারতীয় নির্বাচন, ভোটার নিবন্ধন বা ভোটদান প্রক্রিয়া সম্পর্কে আমাকে যা খুশি জিজ্ঞাসা করুন।",
      placeholder: "নির্বাচন সম্পর্কে জিজ্ঞাসা করুন...",
      suggested: "প্রস্তাবিত প্রশ্ন:",
      prompts: ["আমি কীভাবে ভোট দেব?", "আমার কী কী নথিপত্র প্রয়োজন?", "নির্বাচন সহজভাবে ব্যাখ্যা করুন", "আমি কি ভোট দেওয়ার যোগ্য?"],
      title: "আপনার",
      titleAccent: "ডিজিটাল",
      subtitle: "বিশ্বের বৃহত্তম গণতান্ত্রিক প্রক্রিয়ার জন্য আপনার ব্যক্তিগত গাইড। যেকোনো ভাষায় যেকোনো কিছু জিজ্ঞাসা করুন।",
    },
    quiz: {
      badge: "জ্ঞান পরীক্ষা",
      title: "ভোট দিতে প্রস্তুত?",
      subtitle: "আপনার জ্ঞান পরীক্ষা করুন এবং আপনার শংসাপত্র অর্জন করুন।",
      question: "প্রশ্ন",
      of: "এর",
      didYouKnow: "আপনি কি জানতেন?",
      next: "পরবর্তী প্রশ্ন",
      seeResults: "ফলাফল দেখুন",
      complete: "কুইজ সম্পন্ন!",
      score: "আপনি স্কোর করেছেন",
      outOf: "মধ্যে",
      certificate: {
        badge: "শংসাপত্র",
        title: "ভোটার রেডি 🇮🇳",
        description: "এটি নিশ্চিত করে যে আপনি ভারতীয় গণতন্ত্রের মূল প্রক্রিয়াগুলি সফলভাবে বুঝতে পেরেছেন।",
      },
      tryAgain: "আবার চেষ্টা করুন",
      askAi: "AI সহকারীকে জিজ্ঞাসা করুন",
      questions: [
        {
          question: "ভারতে ভোট দেওয়ার জন্য সর্বনিম্ন বয়স কত?",
          options: ["১৬ বছর", "১৮ বছর", "২১ বছর", "২৫ বছর"],
          explanation: "ভারতের সংবিধান অনুযায়ী, ১৮ বছর বা তার বেশি বয়সী যেকোনো নাগরিক ভোট দেওয়ার যোগ্য।"
        },
        {
          question: "নতুন ভোটার নিবন্ধনের জন্য কোন ফর্ম ব্যবহার করা হয়?",
          options: ["ফর্ম ৭", "ফর্ম ৮", "ফর্ম ৬", "ফর্ম ১২"],
          explanation: "ফর্ম ৬ বিশেষভাবে নতুন ভোটারদের নিবন্ধনের জন্য।"
        },
        {
          question: "ভোটদান প্রক্রিয়ায় VVPAT এর পূর্ণরূপ কী?",
          options: ["ভোটার ভেরিফায়েড পেপার অডিট ট্রেইল", "ভোটার ভ্যালিডেটেড পেপার অ্যাকাউন্ট ট্রাস্ট", "ভিজ্যুয়াল ভোটার পেপার অডিট ট্র্যাকিং", "ভোটার ভেরিফায়েড প্রিন্টিং অডিট টুল"],
          explanation: "VVPAT ভোটারদের একটি স্লিপ ৭ সেকেন্ডের জন্য দেখিয়ে তাদের ভোট সঠিকভাবে দেওয়া হয়েছে কিনা তা যাচাই করতে দেয়।"
        },
        {
          question: "ভোট শেষ হওয়ার কতক্ষণ আগে প্রচার বন্ধ করতে হয়?",
          options: ["২৪ ঘণ্টা", "৪৮ ঘণ্টা", "৭২ ঘণ্টা", "১ সপ্তাহ"],
          explanation: "ভোট শেষ হওয়ার ৪৮ ঘণ্টা আগে 'মৌন সময়কাল' শুরু হয়।"
        }
      ],
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
      countdownTitle: "उलटी",
      countdownAccent: "गिनती",
      countdownSubtitle: "अधिकृत निवडणूक वेळापत्रक आणि महत्त्वाच्या टप्प्यांसह अपडेट राहा।",
      milestoneReached: "टप्पा गाठला",
      inProgress: "प्रगतीपथावर",
      events: [
        {
          title: "निवडणूक घोषित",
          date: "१५ मार्च, २०२६",
          description: "निवडणूक आयोग निवडणूक वेळापत्रक जाहीर करतो आणि आचारसंहिता लागू होते।",
        },
        {
          title: "नामनिर्देशन दाखल",
          date: "२५ मार्च, २०२६",
          description: "उमेदवार निवडणूक निर्णय अधिकाऱ्याकडे आपले नामनिर्देशन पत्र दाखल करतात।",
        },
        {
          title: "प्रचार कालावधी",
          date: "२८ मार्च - २৮ एप्रिल",
          description: "राजकीय पक्ष आणि उमेदवार मतदारसंघांमध्ये प्रचार करतात।",
        },
        {
          title: "मौन कालावधी",
          date: "२८ एप्रिल - ३० एप्रिल",
          description: "मतदान सुरू होण्यापूर्वी ४८ तास प्रचार बंदी।",
        },
        {
          title: "मतदानाचा दिवस",
          date: "३० एप्रिल, २०२६",
          description: "सकाळी ७ ते संध्याकाळी ६ वाजेपर्यंत मतदान होईल. आपले मत नोंदवा!",
        },
        {
          title: "मतमोजणी आणि निकाल",
          date: "३ मे, २०२६",
          description: "मतांची मोजणी केली जाते आणि निकाल जाहीर केले जातात।",
        },
      ],
    },
    actions: {
      title: "त्वरीत",
      titleAccent: "कृती",
      subtitle: "तुम्हाला जे हवे आहे त्यावर थेट जा. प्रत्येक कृती, एका टॅपवर.",
      oneTap: "वन-टॅप सोल्यूशन्स",
      launchAction: "कृती सुरू करा",
      items: [
        { title: "मतदार स्थिती तपासा", description: "मतदार यादीत तुमचे नाव आहे का ते तपासा" },
        { title: "नोंदणी मार्गदर्शक", description: "नवीन मतदार म्हणून नोंदणी करण्यासाठी टप्प्याटप्प्याने मार्गदर्शक" },
        { title: "मतदान प्रक्रिया", description: "EVM वापरून आपले मत कसे नोंदवायचे ते शिका" },
        { title: "मतदान केंद्र शोधक", description: "तुमचे जवळचे मतदान केंद्र शोधा" },
        { title: "आवश्यक कागदपत्रे", description: "मतदानासाठी मंजूर ओळखपुराव्यांची यादी" },
      ],
    },
    accessibility: {
      title: "अॅक्सेसिबिलिटी",
      largeText: "मोठा मजकूर",
      largeTextDesc: "फॉन्ट आकार वाढवा",
      highContrast: "उच्च कॉन्ट्रास्ट",
      highContrastDesc: "कॉन्ट्रास्ट वाढवा",
      voice: "व्हॉइस नरेशन",
      voiceDesc: "मजकूर मोठ्याने वाचा",
      settingsTitle: "Accessibility Settings",
    },
    legalContent: {
      privacy: {
        title: "Privacy Manifesto",
        subtitle: "How we protect your civic data",
        sections: [
          { title: "01. Data Philosophy", content: "VoteSaathi is built on the principle of minimal data footprint. We do not store your personal identity, EPIC numbers, or private conversations." },
          { title: "02. AI Processing", content: "Your queries are processed using encrypted channels. While we use third-party AI models, your data is transient and not used for training global models." },
          { title: "03. Cookie Usage", content: "We only use essential technical cookies to remember your language preference and ensure stability." },
        ],
      },
      terms: {
        title: "Terms of Engagement",
        subtitle: "The rules of our digital forum",
        sections: [
          { title: "01. Information Accuracy", content: "While we strive for 100% accuracy, our AI may occasionally provide generalized information. Always cross-verify with the official Voter Helpline." },
          { title: "02. Civic Responsibility", content: "Users are expected to use this platform for legitimate civic education. Misinformation attempts will result in session termination." },
          { title: "03. No Legal Advice", content: "The information provided is for educational purposes only and does not constitute legal advice." },
        ],
      },
      faq: {
        title: "Common Inquiries",
        subtitle: "Frequently asked questions",
        questions: [
          { q: "Is VoteSaathi an official ECI app?", a: "No, VoteSaathi is an independent AI-powered assistant designed to make ECI information more accessible." },
          { q: "Do I need my physical ID to vote?", a: "While the EPIC card is preferred, you can vote with any of the 12 approved photo IDs if your name is in the roll." },
        ],
      },
      contact: {
        title: "Digital Contact",
        subtitle: "Get in touch with the team",
        description: "Have feedback or want to partner with us? We'd love to hear from you.",
        emailLabel: "Email Us",
        socialsLabel: "Socials",
        namePlaceholder: "Name",
        messagePlaceholder: "Message",
        sendButton: "Send Message",
      },
    },
    footer: {
      description: "भारतीय निवडणुका प्रत्येक नागरिकासाठी सोप्या, सुलभ आणि सक्षम बनवणारा AI-आधारित नागरी सहाय्यक.",
      links: "द्रुत दुवे",
      resources: "अधिकृत संसाधने",
      languages: "भाषा",
      tagline: "© २०२६ VoteSaathi AI. भारतासाठी, भारताद्वारे निर्मित।",
      madeWith: "लोकशाहीसाठी प्रेमाने बनवलेले",
      explore: "एक्सप्लोर करा",
      legal: {
        privacy: "गोपनीयता धोरण",
        terms: "वापराच्या अटी",
        faq: "वारंवार विचारले जाणारे प्रश्न",
        contact: "आमच्याशी संपर्क साधा",
      },
    },
    ai: {
      welcome: "नमस्ते! 🙏 मी तुमचा VoteSaathi AI सहाय्यक आहे. भारतीय निवडणुका, मतदार नोंदणी किंवा मतदान प्रक्रिया याबद्दल मला काहीही विचारा.",
      placeholder: "निवडणुकांशी संबंधित विचार करा...",
      suggested: "सुचवलेले प्रश्न:",
      prompts: ["मी मतदान कसे करू?", "मला कोणती कागदपत्रे लागतील?", "निवडणुका सोप्या भाषेत सांगा", "मी मतदानासाठी पात्र आहे का?"],
      title: "तुमचा",
      titleAccent: "डिजिटल",
      subtitle: "जगातील सर्वात मोठ्या लोकशाही प्रक्रियेसाठी तुमचा खाजगी मार्गदर्शक. काहीही विचारा, कोणत्याही भाषेत।",
    },
    quiz: {
      badge: "ज्ञान चाचणी",
      title: "मतदानासाठी तयार आहात?",
      subtitle: "तुमच्या ज्ञानाची चाचणी घ्या आणि तुमचे प्रमाणपत्र मिळवा।",
      question: "प्रश्न",
      of: "पैकी",
      didYouKnow: "तुम्हाला माहित आहे का?",
      next: "पुढील प्रश्न",
      seeResults: "निकाल पहा",
      complete: "चाचणी पूर्ण झाली!",
      score: "तुम्ही मिळवले",
      outOf: "पैकी",
      certificate: {
        badge: "प्रमाणन",
        title: "मतदार तयार 🇮🇳",
        description: "हे पुष्टी करते की तुम्ही भारतीय लोकशाहीची मूळ कार्यपद्धती यशस्वीपणे समजून घेतली आहे।",
      },
      tryAgain: "पुन्हा प्रयत्न करा",
      askAi: "AI सहाय्यकाला विचारा",
      questions: [
        {
          question: "भारतात मतदानासाठी किमान वय किती आहे?",
          options: ["१६ वर्षे", "१८ वर्षे", "२१ वर्षे", "२५ वर्षे"],
          explanation: "भारतीय राज्यघटनेनुसार, १८ वर्षे किंवा त्याहून अधिक वयाचा कोणताही नागरिक मतदानासाठी पात्र आहे।"
        },
        {
          question: "नवीन मतदार नोंदणीसाठी कोणता फॉर्म वापरला जातो?",
          options: ["फॉर्म ७", "फॉर्म ८", "फॉर्म ६", "फॉर्म १२"],
          explanation: "फॉर्म ६ हा विशेषतः नवीन मतदारांच्या नोंदणीसाठी आहे।"
        },
        {
          question: "मतदान प्रक्रियेत VVPAT म्हणजे काय?",
          options: ["व्होटर व्हेरिफाईड पेपर ऑडिट ट्रेल", "व्होटर व्हॅलिडेटेड पेपर अकाउंट ट्रस्ट", "व्हिज्युअल व्होटर पेपर ऑडिट ट्रॅकिंग", "व्होटर व्हेरिफाईड प्रिंटिंग ऑडिट टूल"],
          explanation: "VVPAT मतदारांना ७ सेकंदांसाठी एक स्लिप दाखवून त्यांचे मत योग्यरित्या नोंदवले गेले आहे याची खात्री करण्यास अनुमती देते।"
        },
        {
          question: "मतदान संपण्यापूर्वी किती वेळ आधी प्रचार थांबवावा लागतो?",
          options: ["२४ तास", "४८ तास", "७२ तास", "१ आठवडा"],
          explanation: "मतदान संपण्याच्या ४८ तास आधी 'मौन कालावधी' सुरू होतो।"
        }
      ],
    },
  },
};
