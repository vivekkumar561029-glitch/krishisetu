const PROFILE_STORAGE_KEY = "farmerBuyerProfile";
const DEMO_OTP = "123456";

const districtMap = {
  "अंडमान और निकोबार द्वीप समूह": ["निकोबार", "उत्तर और मध्य अंडमान", "दक्षिण अंडमान"],
  "आंध्र प्रदेश": ["अल्लूरी सीताराम राजू", "अनाकापल्ली", "अनंतपुरमु", "अन्नमय्या", "बापटला", "चित्तूर", "डॉ. बी.आर. अंबेडकर कोनसीमा", "पूर्वी गोदावरी", "एलुरु", "गुंटूर", "काकीनाडा", "कृष्णा", "कुरनूल", "नंद्याल", "NTR", "पलनाडु", "पार्वतीपुरम मान्यम", "प्रकाशम", "श्री पोट्टी श्रीरामुलु नेल्लोर", "श्री सत्य साई", "श्रीकाकुलम", "तिरुपति", "विशाखापट्टनम", "विजयनगरम", "पश्चिमी गोदावरी", "वाईएसआर कडप्पा"],
  "अरुणाचल प्रदेश": ["अंजॉ", "चांगलांग", "दिबांग घाटी", "पूर्वी कामेंग", "पूर्वी सियांग", "कामले", "क्रा दादी", "कुरुंग कुमेय", "लेपा राडा", "लोहित", "लॉन्गडिंग", "निचली दिबांग घाटी", "निचली सियांग", "निचली सुबनसिरी", "नामसाई", "पक्के-केसांग", "पापुम पारे", "शि योमी", "सियांग", "तवांग", "तिरप", "ऊपरी सियांग", "ऊपरी सुबनसिरी", "पश्चिमी कामेंग", "पश्चिमी सियांग"],
  "असम": ["बक्सा", "बारपेटा", "बिश्वनाथ", "बोंगाईगांव", "कछार", "चराईदेव", "चिरांग", "दरांग", "धेमाजी", "धुबरी", "डिब्रूगढ़", "दिमा हसाओ", "गोआलपाड़ा", "गोलाघाट", "हैलाकांदी", "होजाई", "जोरहाट", "कामरूप", "कामरूप महानगर", "कार्बी आंगलोंग", "करीमगंज", "कोकराझार", "लखीमपुर", "माजुली", "मोरीगांव", "नगांव", "नलबाड़ी", "शिवसागर", "सोनितपुर", "दक्षिण सालमारा-मनकाचार", "तामुलपुर", "तिनसुकिया", "उदलगुड़ी", "पश्चिमी कार्बी आंगलोंग"],
  "बिहार": ["अरारिया", "अरवल", "औरंगाबाद", "बांका", "बेगूसराय", "भागलपुर", "भोजपुर", "बक्सर", "दरभंगा", "पूर्वी चंपारण", "गया", "गोपालगंज", "जमुई", "जहानाबाद", "कैमूर", "कटिहार", "खगड़िया", "किशनगंज", "लखीसराय", "मधेपुरा", "मधुबनी", "मुंगेर", "मुजफ्फरपुर", "नालंदा", "नवादा", "पटना", "पूर्णिया", "रोहतास", "सहरसा", "समस्तीपुर", "सारण", "शेखपुरा", "शिओहर", "सीतामढ़ी", "सिवान", "सुपौल", "वैशाली", "पश्चिमी चंपारण"],
  "चंडीगढ़": ["चंडीगढ़"],
  "छत्तीसगढ़": ["बालोद", "बलौदा बाजार", "बलरामपुर-रामानुजगंज", "बस्तर", "बेमेतरा", "बीजापुर", "बिलासपुर", "दंतेवाड़ा", "धमतरी", "दुर्ग", "गरियाबंद", "गौरेला-पेंड्रा-मरवाही", "जांजगीर-चांपा", "जशपुर", "कबीरधाम", "कांकेर", "खैरागढ़-छुईखदान-गंडई", "कोंडागांव", "कोरबा", "कोरिया", "महासमुंद", "मनेंद्रगढ़-चिरमिरी-भरतपुर", "मोहला-मानपुर-अंबागढ़ चौकी", "मुंगेली", "नारायणपुर", "रायगढ़", "रायपुर", "राजनांदगांव", "सक्ती", "सारंगढ़-बिलाईगढ़", "सुकमा", "सूरजपुर", "सरगुजा"],
  "दादरा और नगर हवेली और दमन और दीव": ["दादरा और नगर हवेली", "दमन", "दीव"],
  "दिल्ली": ["मध्य दिल्ली", "पूर्वी दिल्ली", "नई दिल्ली", "उत्तर दिल्ली", "उत्तर पूर्वी दिल्ली", "उत्तर पश्चिमी दिल्ली", "शाहदरा", "दक्षिण दिल्ली", "दक्षिण पूर्वी दिल्ली", "दक्षिण पश्चिमी दिल्ली", "पश्चिमी दिल्ली"],
  "गोवा": ["उत्तरी गोवा", "दक्षिणी गोवा"],
  "गुजरात": ["अहमदाबाद", "अमरेली", "आनंद", "अरावली", "बनासकांठा", "भरूच", "भावनगर", "बोटाद", "छोटा उदेपुर", "दाहोद", "डांग", "देवभूमि द्वारका", "गांधीनगर", "गीर सोमनाथ", "जामनगर", "जूनागढ़", "खेड़ा", "कच्छ", "महीसागर", "मेहसाणा", "मोरबी", "नर्मदा", "नवसारी", "पंचमहल", "पाटण", "पोरबंदर", "राजकोट", "साबरकांठा", "सूरत", "सुरेंद्रनगर", "तापी", "वडोदरा", "वलसाड"],
  "हरियाणा": ["अंबाला", "भिवानी", "चरखी दादरी", "फरीदाबाद", "फतेहाबाद", "गुरुग्राम", "हिसार", "झज्जर", "जींद", "कैथल", "करनाल", "कुरुक्षेत्र", "महेंद्रगढ़", "नूंह", "पलवल", "पंचकूला", "पानीपत", "रेवाड़ी", "रोहतक", "सिरसा", "सोनीपत", "यमुनानगर"],
  "हिमाचल प्रदेश": ["बिलासपुर", "चंबा", "हमीरपुर", "कांगड़ा", "किन्नौर", "कुल्लू", "लाहौल और स्पीति", "मंडी", "शिमला", "सिरमौर", "सोलन", "ऊना"],
  "जम्मू और कश्मीर": ["अनंतनाग", "बांदीपोरा", "बारामुला", "बडगाम", "डोडा", "गांदरबल", "जम्मू", "कठुआ", "किश्तवाड़", "कुलगाम", "कुपवाड़ा", "पुंछ", "पुलवामा", "राजौरी", "रामबन", "रियासी", "सांबा", "शोपियां", "श्रीनगर", "उधमपुर"],
  "झारखंड": ["बोकारो", "चतरा", "देवघर", "धनबाद", "दुमका", "पूर्वी सिंहभूम", "गढ़वा", "गिरिडीह", "गोड्डा", "गुमला", "हजारीबाग", "जामताड़ा", "खूंटी", "कोडरमा", "लातेहार", "लोहरदगा", "पाकुड़", "पलामू", "रामगढ़", "रांची", "साहिबगंज", "सरायकेला खरसावां", "सिमडेगा", "पश्चिमी सिंहभूम"],
  "कर्नाटक": ["बागलकोट", "बल्लारी", "बेलगावी", "बेंगलुरु ग्रामीण", "बेंगलुरु शहरी", "बीदर", "चामराजनगर", "चिक्काबल्लापुर", "चिक्कमगलूर", "चित्रदुर्ग", "दक्षिण कन्नड़", "दावणगेरे", "धारवाड़", "गदग", "हासन", "हावेरी", "कलबुर्गी", "कोडागु", "कोलार", "कोप्पल", "मंड्या", "मैसूरु", "रायचूर", "रामनगर", "शिवमोग्गा", "तुमकुरु", "उडुपी", "उत्तर कन्नड़", "विजयनगर", "विजयपुरा", "यादगीर"],
  "केरल": ["अलप्पुझा", "एर्नाकुलम", "इडुक्की", "कन्नूर", "कासरगोड", "कोल्लम", "कोट्टयम", "कोझिकोड", "मलप्पुरम", "पलक्कड़", "पथानमथिट्टा", "तिरुवनंतपुरम", "त्रिशूर", "वायनाड"],
  "लद्दाख": ["कारगिल", "लेह"],
  "लक्षद्वीप": ["लक्षद्वीप"],
  "मध्य प्रदेश": ["आगर मालवा", "अलीराजपुर", "अनूपुर", "अशोकनगर", "बालाघाट", "बड़वानी", "बेतूल", "भिंड", "भोपाल", "बुरहानपुर", "छतरपुर", "छिंदवाड़ा", "दमोह", "दतिया", "देवास", "धार", "डिंडोरी", "गुना", "ग्वालियर", "हरदा", "इंदौर", "जबलपुर", "झाबुआ", "कटनी", "खंडवा", "खरगोन", "मैहर", "मंडला", "मंदसौर", "मऊगंज", "मुरैना", "नर्मदापुरम", "नरसिंहपुर", "नीमच", "निवाड़ी", "पंधुर्ना", "पन्ना", "रायसेन", "राजगढ़", "रतलाम", "रीवा", "सागर", "सतना", "सीहोर", "सिवनी", "शहडोल", "शाजापुर", "श्योपुर", "शिवपुरी", "सीधी", "सिंगरौली", "टीकमगढ़", "उज्जैन", "उमरिया", "विदिशा"],
  "महाराष्ट्र": ["अहमदनगर", "अकोला", "अमरावती", "बीड", "भंडारा", "बुलढाणा", "चंद्रपुर", "छत्रपति संभाजीनगर", "धाराशिव", "धुले", "गड़चिरोली", "गोंदिया", "हिंगोली", "जलगांव", "जालना", "कोल्हापुर", "लातूर", "मुंबई सिटी", "मुंबई उपनगर", "नागपुर", "नांदेड़", "नंदुरबार", "नासिक", "पालघर", "परभणी", "पुणे", "रायगड", "रत्नागिरी", "सांगली", "सातारा", "सिंधुदुर्ग", "सोलापुर", "ठाणे", "वर्धा", "वाशिम", "यवतमाल"],
  "मणिपुर": ["बिष्णुपुर", "चांदेल", "चुराचांदपुर", "इम्फाल पूर्व", "इम्फाल पश्चिम", "जिरीबाम", "काकचिंग", "कामजोंग", "कांगपोकपी", "नोनी", "फेरजॉल", "सेनापति", "तामेंगलोंग", "तेंगनोपाल", "थौबल", "उखरूल"],
  "मेघालय": ["पूर्वी गारो हिल्स", "पूर्वी जयंतिया हिल्स", "पूर्वी खासी हिल्स", "पूर्वी पश्चिमी खासी हिल्स", "उत्तरी गारो हिल्स", "री भोई", "दक्षिणी गारो हिल्स", "दक्षिण पश्चिम गारो हिल्स", "दक्षिण पश्चिम खासी हिल्स", "पश्चिमी गारो हिल्स", "पश्चिमी जयंतिया हिल्स", "पश्चिमी खासी हिल्स"],
  "मिज़ोरम": ["आइजोल", "चम्फाई", "हनाहतियाल", "खावज़ॉल", "कोलासिब", "लॉन्गतलाई", "लुंगलेई", "मामित", "सैतुअल", "सर्चिप", "सिआहा"],
  "नागालैंड": ["चुमोउकेदिमा", "दीमापुर", "किफिरे", "कोहिमा", "लॉन्गलेंग", "मोकोकचुंग", "मोन", "निउलैंड", "नोकलाक", "पेरेन", "फेक", "शमेटर", "त्सेमिन्यू", "तुएनसांग", "वोखा", "जुन्हेबोटो"],
  "ओडिशा": ["अंगुल", "बलांगीर", "बालासोर", "बरगढ़", "भद्रक", "बौद्ध", "कटक", "देवगढ़", "ढेंकानाल", "गजपति", "गंजाम", "जगतसिंहपुर", "जाजपुर", "झारसुगुड़ा", "कलाहांडी", "कंधमाल", "केंद्रपाड़ा", "केओंझर", "खुर्दा", "कोरापुट", "मलकानगिरी", "मयूरभंज", "नबरंगपुर", "नयागढ़", "नुआपाड़ा", "पुरी", "रायगड़ा", "संबलपुर", "सुबर्णपुर", "सुंदरगढ़"],
  "पुदुच्चेरी": ["कारैकल", "माहे", "पुदुच्चेरी", "यानम"],
  "पंजाब": ["अमृतसर", "बरनाला", "बठिंडा", "फरीदकोट", "फतेहगढ़ साहिब", "फाजिल्का", "फिरोजपुर", "गुरदासपुर", "होशियारपुर", "जालंधर", "कपूरथला", "लुधियाना", "मलेरकोटला", "मानसा", "मोगा", "मोहाली", "मुक्तसर", "पठानकोट", "पटियाला", "रूपनगर", "संगरूर", "शहीद भगत सिंह नगर", "तरनतारन"],
  "राजस्थान": ["अजमेर", "अलवर", "अनूपगढ़", "बालोत्रा", "बांसवाड़ा", "बारां", "बाड़मेर", "ब्यावर", "भरतपुर", "भीलवाड़ा", "बीकानेर", "बूंदी", "चित्तौड़गढ़", "चुरू", "दौसा", "डीग", "डीडवाना-कुचामन", "धौलपुर", "दूदू", "डूंगरपुर", "गंगापुर सिटी", "हनुमानगढ़", "जयपुर", "जयपुर ग्रामीण", "जैसलमेर", "जालोर", "झालावाड़", "झुंझुनूं", "जोधपुर", "जोधपुर ग्रामीण", "करौली", "केकड़ी", "खैरथल-तिजारा", "कोटा", "कोटपुतली-बहरोड़", "नागौर", "नीम का थाना", "पाली", "फलोदी", "प्रतापगढ़", "राजसमंद", "सलूंबर", "सांचोर", "सवाई माधोपुर", "शाहपुरा", "सीकर", "सिरोही", "श्री गंगानगर", "टोंक", "उदयपुर"],
  "सिक्किम": ["गंगटोक", "ग्यालशिंग", "मंगन", "नामची", "पाक्योंग", "सोरेंग"],
  "तमिलनाडु": ["अरियालुर", "चेंगलपट्टू", "चेन्नई", "कोयंबटूर", "कुड्डालोर", "धर्मपुरी", "डिंडीगुल", "इरोड", "कल्लाकुरिची", "कांचीपुरम", "कन्याकुमारी", "करूर", "कृष्णागिरी", "मदुरई", "मयिलादुतुरई", "नागपट्टिनम", "नामक्कल", "नीलगिरि", "पेरम्बलूर", "पुदुकोट्टई", "रामनाथपुरम", "रानीपेट", "सेलम", "शिवगंगा", "तेनकाशी", "तंजावुर", "थेनी", "थूथुकुडी", "तिरुचिरापल्ली", "तिरुनेलवेली", "तिरुपत्तूर", "तिरुप्पुर", "तिरुवल्लूर", "तिरुवन्नामलाई", "तिरुवरूर", "वेल्लोर", "विल्लुपुरम", "विरुधुनगर"],
  "तेलंगाना": ["आदिलाबाद", "भद्राद्री कोठागुडेम", "हनुमकोंडा", "हैदराबाद", "जगतियाल", "जनगांव", "जयशंकर भूपालपल्ली", "जोगुलांबा गडवाल", "कामारेड्डी", "करीमनगर", "खम्मम", "कुमुरम भीम आसिफाबाद", "महबूबाबाद", "महबूबनगर", "मंचेरियाल", "मेडक", "मेडचल-मलकाजगिरी", "मुलुगु", "नागरकुरनूल", "नलगोंडा", "नारायणपेट", "निर्मल", "निज़ामाबाद", "पेड्डापल्ली", "राजन्ना सिरसिला", "रंगारेड्डी", "संगारेड्डी", "सिद्दीपेट", "सूर्यापेट", "विकाराबाद", "वानापर्थी", "वारंगल", "यदाद्री भुवनागिरी"],
  "त्रिपुरा": ["धलाई", "गोमती", "खोवाई", "उत्तरी त्रिपुरा", "सेपाहिजाला", "दक्षिणी त्रिपुरा", "उनाकोटी", "पश्चिमी त्रिपुरा"],
  "उत्तर प्रदेश": ["आगरा", "अलीगढ़", "अंबेडकर नगर", "अमेठी", "अमरोहा", "औरैया", "अयोध्या", "आज़मगढ़", "बागपत", "बहराइच", "बलिया", "बलरामपुर", "बांदा", "बाराबंकी", "बरेली", "बस्ती", "भदोही", "बिजनौर", "बदायूं", "बुलंदशहर", "चंदौली", "चित्रकूट", "देवरिया", "एटा", "इटावा", "फर्रुखाबाद", "फतेहपुर", "फिरोजाबाद", "गौतम बुद्ध नगर", "गाजियाबाद", "गाजीपुर", "गोंडा", "गोरखपुर", "हमीरपुर", "हापुड़", "हरदोई", "हाथरस", "जालौन", "जौनपुर", "झांसी", "कन्नौज", "कानपुर देहात", "कानपुर नगर", "कासगंज", "कौशांबी", "खीरी", "कुशीनगर", "ललितपुर", "लखनऊ", "महाराजगंज", "महोबा", "मैनपुरी", "मथुरा", "मऊ", "मेरठ", "मिर्जापुर", "मुरादाबाद", "मुजफ्फरनगर", "पीलीभीत", "प्रतापगढ़", "प्रयागराज", "रायबरेली", "रामपुर", "सहारनपुर", "संभल", "संत कबीर नगर", "शाहजहांपुर", "शामली", "श्रावस्ती", "सिद्धार्थनगर", "सीतापुर", "सोनभद्र", "सुल्तानपुर", "उन्नाव", "वाराणसी"],
  "उत्तराखंड": ["अल्मोड़ा", "बागेश्वर", "चमोली", "चंपावत", "देहरादून", "हरिद्वार", "नैनीताल", "पौड़ी गढ़वाल", "पिथौरागढ़", "रुद्रप्रयाग", "टिहरी गढ़वाल", "उधम सिंह नगर", "उत्तरकाशी"],
  "पश्चिम बंगाल": ["अलीपुरद्वार", "बांकुड़ा", "बीरभूम", "कूच बिहार", "दक्षिण दिनाजपुर", "दार्जिलिंग", "हुगली", "हावड़ा", "जलपाईगुड़ी", "झारग्राम", "कालिम्पोंग", "कोलकाता", "मालदा", "मुर्शिदाबाद", "नदिया", "उत्तर 24 परगना", "पश्चिम बर्धमान", "पश्चिम मेदिनीपुर", "पूर्व बर्धमान", "पूर्व मेदिनीपुर", "पुरुलिया", "दक्षिण 24 परगना", "उत्तर दिनाजपुर"]
};

const defaultProfile = {
  fullName: "",
  dob: "",
  gender: "",
  mobile: "",
  mobileVerified: false,
  state: "",
  district: "",
  address: "",
  userType: "",
  farmerType: "",
  landArea: "",
  landUnit: "",
  buyerType: "",
  businessName: "",
  businessAddress: "",
  gstNumber: "",
  documentType: "",
  documentName: "",
  documentData: "",
  documentMime: "application/pdf",
  profilePhoto: ""
};

let otpSeconds = 30;
let otpInterval = null;
let originalMobile = "";
let selectedDocumentData = "";
let selectedDocumentMime = "";
let selectedDocumentName = "";
let currentProfilePhoto = "";

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  initTheme();

  if (page === "profile") {
    initProfilePage();
  }

  if (page === "edit-profile") {
    initEditPage();
  }
});

function initTheme() {
  const THEME_KEY = "ks_theme";
  const savedTheme = localStorage.getItem(THEME_KEY) || "light";
  applyTheme(savedTheme);

  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.body.setAttribute("data-theme", theme);
}

function loadProfile() {
  const saved = localStorage.getItem(PROFILE_STORAGE_KEY);
  if (!saved) {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(defaultProfile));
    return { ...defaultProfile };
  }

  try {
    return { ...defaultProfile, ...JSON.parse(saved) };
  } catch (error) {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(defaultProfile));
    return { ...defaultProfile };
  }
}

function saveProfile(profile) {
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
}

// Gender display mapping English -> Hindi
const genderDisplay = {
  "Male": "पुरुष",
  "Female": "महिला",
  "Other": "अन्य"
};

// User type display mapping
const userTypeDisplay = {
  "Farmer": "किसान",
  "Buyer": "खरीदार"
};

// Farmer type display mapping
const farmerTypeDisplay = {
  "Small": "लघु",
  "Medium": "मध्यम",
  "Large": "बड़ा"
};

// Buyer type display mapping
const buyerTypeDisplay = {
  "Retailer": "खुदरा विक्रेता",
  "Wholesaler": "थोक विक्रेता",
  "Company": "कंपनी"
};

// Document type display mapping
const documentTypeDisplay = {
  "Aadhaar": "आधार",
  "PAN": "PAN",
  "Voter ID": "मतदाता पहचान पत्र",
  "Driving License": "ड्राइविंग लाइसेंस"
};

// Land unit display mapping
const landUnitDisplay = {
  "Acre": "एकड़",
  "Hectare": "हेक्टेयर",
  "Bigha": "बीघा",
  "Cent": "सेंट",
  "Guntha": "गुंठा",
  "Katha": "कट्ठा"
};

function initProfilePage() {
  const profile = loadProfile();
  const editButton = document.getElementById("editProfileBtn");

  editButton.addEventListener("click", () => {
    window.location.href = "edit-profile.html";
  });

  setAvatar("profilePhotoView", "profileInitials", profile.profilePhoto, profile.fullName);
  setText("profileNameHeading", profile.fullName || "आपका नाम");
  const userTypeHindi = userTypeDisplay[profile.userType] || profile.userType;
  setText("profileUserTypeHeading", profile.userType ? `${userTypeHindi} प्रोफ़ाइल` : "प्रोफ़ाइल विवरण");
  setText("viewFullName", profile.fullName);
  setText("viewDob", formatDate(profile.dob));
  setText("viewGender", genderDisplay[profile.gender] || profile.gender);
  setText("viewMobile", profile.mobile);
  setText("viewState", profile.state);
  setText("viewDistrict", profile.district);
  setText("viewAddress", profile.address);
  setText("viewUserType", userTypeDisplay[profile.userType] || profile.userType);
  setText("viewDocumentType", documentTypeDisplay[profile.documentType] || profile.documentType);
  renderDocumentPreview("viewDocumentPreview", profile.documentName, profile.documentData, profile.documentMime);

  const farmerDetails = document.getElementById("farmerDetailsView");
  const buyerDetails = document.getElementById("buyerDetailsView");
  farmerDetails.hidden = profile.userType !== "Farmer";
  buyerDetails.hidden = profile.userType !== "Buyer";

  if (profile.userType === "Farmer") {
    setText("viewFarmerType", farmerTypeDisplay[profile.farmerType] || profile.farmerType);
    const landUnit = landUnitDisplay[profile.landUnit] || profile.landUnit;
    setText("viewLandArea", [profile.landArea, landUnit].filter(Boolean).join(" "));
  }

  if (profile.userType === "Buyer") {
    setText("viewBuyerType", buyerTypeDisplay[profile.buyerType] || profile.buyerType);
    setText("viewBusinessName", profile.businessName);
    setText("viewBusinessAddress", profile.businessAddress);
    setText("viewGstNumber", profile.gstNumber || "प्रदान नहीं किया गया");
  }
}

function initEditPage() {
  const profile = loadProfile();
  const form = document.getElementById("profileForm");
  const stateSelect = document.getElementById("state");
  const districtSelect = document.getElementById("district");
  const userType = document.getElementById("userType");
  const buyerType = document.getElementById("buyerType");
  const documentType = document.getElementById("documentType");
  const mobile = document.getElementById("mobile");
  const address = document.getElementById("address");
  const landArea = document.getElementById("landArea");
  const profilePhotoInput = document.getElementById("profilePhotoInput");
  const documentFile = document.getElementById("documentFile");
  const removePhotoBtn = document.getElementById("removePhotoBtn");
  const removeDocumentBtn = document.getElementById("removeDocumentBtn");

  originalMobile = profile.mobile || "";
  selectedDocumentData = profile.documentData || "";
  selectedDocumentMime = profile.documentMime || "";
  selectedDocumentName = profile.documentName || "";
  currentProfilePhoto = profile.profilePhoto || "";

  populateStates(stateSelect);
  fillForm(profile);
  populateDistricts(profile.state, profile.district);
  toggleUserFields();
  updateGstRequirement();
  setAvatar("photoPreview", "editInitials", profile.profilePhoto, profile.fullName);
  renderDocumentPreview("documentPreview", profile.documentName, profile.documentData, profile.documentMime);
  updateAssetButtons();
  if (profile.mobile) {
    setMobileVerified(profile.mobileVerified === true, profile.mobileVerified === true ? "मोबाइल नंबर सत्यापित" : "");
  } else {
    setMobileVerified(false, "");
  }

  stateSelect.addEventListener("change", () => {
    populateDistricts(stateSelect.value, "");
  });

  userType.addEventListener("change", toggleUserFields);
  buyerType.addEventListener("change", updateGstRequirement);
  documentType.addEventListener("change", () => {
    clearError("documentTypeError");
    clearError("documentFileError");

    if (documentFile.files[0] && !isDocumentFileLogical(documentFile.files[0], valueOf("documentType"))) {
      rejectDocumentFile(documentFile, "कृपया एक वैध दस्तावेज़ फ़ाइल अपलोड करें (JPG, PNG, या PDF)");
    }
  });

  document.getElementById("fullName").addEventListener("input", (event) => {
    setAvatar("photoPreview", "editInitials", currentProfilePhoto, event.target.value);
  });

  address.addEventListener("input", () => {
    address.value = address.value.replace(/[!@#$%^&*]/g, "");
  });

  landArea.addEventListener("input", () => {
    landArea.value = landArea.value.replace(/[^\d.]/g, "");
  });

  mobile.addEventListener("input", () => {
    mobile.value = mobile.value.replace(/\D/g, "").slice(0, 10);
    handleMobileInput();
  });

  mobile.addEventListener("blur", () => {
    validateMobileField(true);
  });

  document.getElementById("verifyOtpBtn").addEventListener("click", verifyOtp);
  document.getElementById("resendOtpBtn").addEventListener("click", startOtpTimer);

  profilePhotoInput.addEventListener("change", () => {
    const file = profilePhotoInput.files[0];
    if (!file) return;

    clearError("profilePhotoError");

    if (!isAllowedProfilePhotoType(file)) {
      rejectProfilePhoto(profilePhotoInput, "कृपया एक वैध प्रोफ़ाइल फ़ोटो अपलोड करें");
      return;
    }

    readFileAsDataUrl(file, (dataUrl) => {
      validateProfilePhotoImage(dataUrl, file, (isLikelyHumanPhoto) => {
        if (!isLikelyHumanPhoto) {
          rejectProfilePhoto(profilePhotoInput, "कृपया एक वैध मानव प्रोफ़ाइल फ़ोटो अपलोड करें");
          return;
        }

        currentProfilePhoto = dataUrl;
        setAvatar("photoPreview", "editInitials", dataUrl, document.getElementById("fullName").value);
        updateAssetButtons();
      });
    });
  });

  documentFile.addEventListener("change", () => {
    const file = documentFile.files[0];
    if (!file) return;

    clearError("documentFileError");
    clearError("documentTypeError");

    if (!valueOf("documentType")) {
      rejectDocumentFile(documentFile, "अपलोड करने से पहले दस्तावेज़ प्रकार चुनें।");
      return;
    }

    if (!isAllowedDocumentFile(file) || !isDocumentFileLogical(file, valueOf("documentType"))) {
      rejectDocumentFile(documentFile, "कृपया एक वैध दस्तावेज़ फ़ाइल अपलोड करें (JPG, PNG, या PDF)");
      return;
    }

    selectedDocumentMime = file.type || "application/octet-stream";
    readFileAsDataUrl(file, (dataUrl) => {
      selectedDocumentData = dataUrl;
      renderDocumentPreview("documentPreview", file.name, dataUrl, selectedDocumentMime);
      selectedDocumentName = file.name;
      updateAssetButtons();
    });
  });

  removePhotoBtn.addEventListener("click", () => {
    removeProfilePhoto(profile);
  });

  removeDocumentBtn.addEventListener("click", () => {
    removeUploadedDocument(profile);
  });

  const resetFormBtn = document.getElementById("resetFormBtn");
  if (resetFormBtn) {
    resetFormBtn.addEventListener("click", () => {
      const fields = ["fullName", "dob", "gender", "mobile", "state", "address", "userType",
        "farmerType", "landArea", "landUnit", "buyerType", "businessName", "businessAddress",
        "gstNumber", "documentType"];
      fields.forEach((field) => {
        const el = document.getElementById(field);
        if (el) el.value = "";
      });

      document.getElementById("profilePhotoInput").value = "";
      document.getElementById("documentFile").value = "";

      selectedDocumentData = "";
      selectedDocumentMime = "";
      selectedDocumentName = "";
      currentProfilePhoto = "";
      originalMobile = "";

      clearErrors();
      setAvatar("photoPreview", "editInitials", "", "");
      renderDocumentPreview("documentPreview", "", "", "");
      setMobileVerified(false, "");
      hideOtpPanel();
      toggleUserFields();
      populateDistricts("", "");
      updateAssetButtons();
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();

    if (!validateForm()) {
      return;
    }

    const updatedProfile = collectFormData(profile);
    saveProfile(updatedProfile);
    Object.assign(profile, updatedProfile);
    updateAssetButtons();

    // Show success message briefly then redirect
    const saveBtn = form.querySelector(".btn-save");
    if (saveBtn) {
      const originalText = saveBtn.textContent;
      saveBtn.textContent = "सहेजा गया ✓";
      saveBtn.disabled = true;
      setTimeout(() => {
        saveBtn.textContent = originalText;
        saveBtn.disabled = false;
        window.location.href = "profile.html";
      }, 1200);
    } else {
      window.location.href = "profile.html";
    }
  });
}

function fillForm(profile) {
  const fields = ["fullName", "dob", "gender", "mobile", "state", "address", "userType", "farmerType", "landArea", "landUnit", "buyerType", "businessName", "businessAddress", "gstNumber", "documentType"];
  fields.forEach((field) => {
    const input = document.getElementById(field);
    if (input) input.value = profile[field] || "";
  });
}

function collectFormData(existingProfile) {
  const userType = valueOf("userType");
  const buyerType = valueOf("buyerType");
  const documentInput = document.getElementById("documentFile");
  const documentFile = documentInput.files[0];

  return {
    ...existingProfile,
    fullName: valueOf("fullName"),
    dob: valueOf("dob"),
    gender: valueOf("gender"),
    mobile: valueOf("mobile"),
    mobileVerified: isMobileVerified(),
    state: valueOf("state"),
    district: valueOf("district"),
    address: valueOf("address"),
    userType,
    farmerType: userType === "Farmer" ? valueOf("farmerType") : "",
    landArea: userType === "Farmer" ? valueOf("landArea") : "",
    landUnit: userType === "Farmer" ? valueOf("landUnit") : "",
    buyerType: userType === "Buyer" ? buyerType : "",
    businessName: userType === "Buyer" ? valueOf("businessName") : "",
    businessAddress: userType === "Buyer" ? valueOf("businessAddress") : "",
    gstNumber: userType === "Buyer" ? valueOf("gstNumber").toUpperCase() : "",
    documentType: valueOf("documentType"),
    documentName: documentFile ? documentFile.name : selectedDocumentName || existingProfile.documentName,
    documentData: selectedDocumentData || existingProfile.documentData,
    documentMime: selectedDocumentMime || existingProfile.documentMime,
    profilePhoto: currentProfilePhoto || existingProfile.profilePhoto
  };
}

function populateStates(select) {
  Object.keys(districtMap).sort().forEach((state) => {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    select.appendChild(option);
  });
}

function populateDistricts(state, selectedDistrict) {
  const districtSelect = document.getElementById("district");
  districtSelect.innerHTML = '<option value="">जिला चुनें</option>';

  if (!state || !districtMap[state]) return;

  districtMap[state].forEach((district) => {
    const option = document.createElement("option");
    option.value = district;
    option.textContent = district;
    districtSelect.appendChild(option);
  });

  districtSelect.value = selectedDistrict || "";
}

function toggleUserFields() {
  const selectedType = valueOf("userType");
  const farmerFields = document.getElementById("farmerFields");
  const buyerFields = document.getElementById("buyerFields");

  farmerFields.hidden = selectedType !== "Farmer";
  buyerFields.hidden = selectedType !== "Buyer";
  updateGstRequirement();
}

function updateGstRequirement() {
  const gstInput = document.getElementById("gstNumber");
  const shouldRequire = valueOf("userType") === "Buyer" && valueOf("buyerType") === "Company";
  gstInput.required = shouldRequire;
}

function validateForm() {
  let valid = true;
  const name = valueOf("fullName");
  const mobile = valueOf("mobile");
  const address = valueOf("address");
  const userType = valueOf("userType");
  const buyerType = valueOf("buyerType");

  if (!name) valid = setError("fullNameError", "पूरा नाम आवश्यक है।");
  if (name.length > 50) valid = setError("fullNameError", "पूरा नाम 50 अक्षरों से कम होना चाहिए।");
  if (!valueOf("dob")) valid = setError("dobError", "जन्म तिथि आवश्यक है।");
  if (!valueOf("gender")) valid = setError("genderError", "लिंग आवश्यक है।");
  if (!mobile) valid = setError("mobileError", "मोबाइल नंबर आवश्यक है।");
  if (!isValidMobileNumber(mobile)) valid = setError("mobileError", "अमान्य मोबाइल नंबर");
  if (mobile !== originalMobile && !isMobileVerified()) valid = setError("mobileError", "बदला हुआ मोबाइल नंबर सहेजने से पहले OTP सत्यापित करें।");
  if (!valueOf("state")) valid = setError("stateError", "राज्य आवश्यक है।");
  if (!valueOf("district")) valid = setError("districtError", "जिला आवश्यक है।");
  if (!address) valid = setError("addressError", "पता आवश्यक है।");
  if (/[!@#$%^&*]/.test(address)) valid = setError("addressError", "पते में अमान्य अक्षर हैं");
  if (!userType) valid = setError("userTypeError", "उपयोगकर्ता प्रकार आवश्यक है।");

  if (userType === "Farmer") {
    if (!valueOf("farmerType")) valid = setError("farmerTypeError", "किसान प्रकार आवश्यक है।");
    if (!valueOf("landArea") || Number(valueOf("landArea")) <= 0) valid = setError("landAreaError", "एक वैध भूमि क्षेत्र दर्ज करें।");
    if (!valueOf("landUnit")) valid = setError("landUnitError", "भूमि इकाई आवश्यक है।");
  }

  if (userType === "Buyer") {
    if (!buyerType) valid = setError("buyerTypeError", "खरीदार प्रकार आवश्यक है।");
    if (!valueOf("businessName")) valid = setError("businessNameError", "व्यवसाय का नाम आवश्यक है।");
    if (!valueOf("businessAddress")) valid = setError("businessAddressError", "व्यवसाय का पता आवश्यक है।");
    if (buyerType === "Company" && !valueOf("gstNumber")) valid = setError("gstNumberError", "कंपनियों के लिए GST नंबर आवश्यक है।");
  }

  if (!valueOf("documentType")) valid = setError("documentTypeError", "दस्तावेज़ प्रकार आवश्यक है।");
  if (document.getElementById("documentFile").files[0] && (!isAllowedDocumentFile(document.getElementById("documentFile").files[0]) || !isDocumentFileLogical(document.getElementById("documentFile").files[0], valueOf("documentType")))) {
    valid = setError("documentFileError", "कृपया एक वैध दस्तावेज़ फ़ाइल अपलोड करें (JPG, PNG, या PDF)");
  }
  if (!document.getElementById("documentFile").files[0] && !loadProfile().documentName) {
    valid = setError("documentFileError", "एक दस्तावेज़ अपलोड करें।");
  }

  return valid;
}

function handleMobileInput() {
  const mobile = document.getElementById("mobile");
  clearError("mobileError");

  if (mobile.value.length < 10) {
    setMobileVerified(false, "");
    hideOtpPanel();
    return;
  }

  validateMobileField(false);
}

function validateMobileField(isBlurEvent) {
  const mobile = document.getElementById("mobile");
  const value = mobile.value.trim();

  if (!value) {
    setMobileVerified(false, "");
    hideOtpPanel();
    return false;
  }

  if (value.length < 10 && !isBlurEvent) {
    return false;
  }

  if (!isValidMobileNumber(value)) {
    setMobileVerified(false, "");
    hideOtpPanel();
    setError("mobileError", "अमान्य मोबाइल नंबर");
    return false;
  }

  clearError("mobileError");

  if (value === originalMobile) {
    setMobileVerified(true, "मोबाइल नंबर सत्यापित");
    hideOtpPanel();
    return true;
  }

  setMobileVerified(false, "मोबाइल नंबर सत्यापित", "success");
  showOtpPanel();
  return true;
}

function isValidMobileNumber(value) {
  return /^[6-9]\d{9}$/.test(value);
}

function showOtpPanel() {
  document.getElementById("otpPanel").hidden = false;
  startOtpTimer();
}

function hideOtpPanel() {
  document.getElementById("otpPanel").hidden = true;
  clearInterval(otpInterval);
}

function verifyOtp() {
  const otpInput = document.getElementById("otpInput");
  const status = document.getElementById("mobileStatus");

  if (otpInput.value === DEMO_OTP) {
    setMobileVerified(true);
    status.textContent = "मोबाइल नंबर सत्यापित";
    hideOtpPanel();
    clearError("mobileError");
  } else {
    setMobileVerified(false);
    setError("mobileError", "सही OTP दर्ज करें।");
  }
}

function startOtpTimer() {
  const resendButton = document.getElementById("resendOtpBtn");
  const timer = document.getElementById("otpTimer");
  otpSeconds = 30;
  resendButton.disabled = true;
  timer.textContent = "30s";
  clearInterval(otpInterval);

  otpInterval = setInterval(() => {
    otpSeconds -= 1;
    timer.textContent = `${otpSeconds}s`;

    if (otpSeconds <= 0) {
      clearInterval(otpInterval);
      timer.textContent = "तैयार";
      resendButton.disabled = false;
    }
  }, 1000);
}

function setMobileVerified(isVerified, message, tone) {
  const mobile = document.getElementById("mobile");
  const status = document.getElementById("mobileStatus");
  mobile.dataset.verified = String(isVerified);
  status.textContent = message !== undefined ? message : isVerified ? "मोबाइल नंबर सत्यापित" : "OTP सत्यापन आवश्यक है";
  status.style.color = tone === "success" || isVerified ? "var(--success)" : "var(--danger)";
}

function isMobileVerified() {
  return document.getElementById("mobile").dataset.verified === "true";
}

function setAvatar(containerId, initialsId, imageData, name) {
  const container = document.getElementById(containerId);
  const initials = getInitials(name);
  container.innerHTML = "";

  if (imageData) {
    const img = document.createElement("img");
    img.src = imageData;
    img.alt = `${name || "उपयोगकर्ता"} प्रोफ़ाइल फ़ोटो`;
    container.appendChild(img);
    return;
  }

  const span = document.createElement("span");
  span.className = "avatar-initials";
  span.id = initialsId;
  span.textContent = initials;
  container.appendChild(span);
}

function renderDocumentPreview(containerId, fileName, dataUrl, mimeType) {
  const preview = document.getElementById(containerId);
  preview.innerHTML = "";

  if (!fileName && !dataUrl) {
    preview.textContent = "कोई दस्तावेज़ अपलोड नहीं किया गया";
    return;
  }

  if (dataUrl && mimeType && mimeType.startsWith("image/")) {
    const img = document.createElement("img");
    img.src = dataUrl;
    img.alt = fileName || "अपलोड किया गया दस्तावेज़";
    preview.appendChild(img);
    return;
  }

  preview.textContent = fileName || "दस्तावेज़ अपलोड किया गया";
}

function readFileAsDataUrl(file, callback) {
  const reader = new FileReader();
  reader.onload = () => callback(reader.result);
  reader.readAsDataURL(file);
}

function isAllowedProfilePhotoType(file) {
  const allowedTypes = ["image/jpeg", "image/png"];
  const allowedExtensions = /\.(jpe?g|png)$/i;
  return allowedTypes.includes(file.type) && allowedExtensions.test(file.name);
}

function validateProfilePhotoImage(dataUrl, file, callback) {
  const image = new Image();

  image.onload = () => {
    callback(isLikelyHumanProfilePhoto(image, file));
  };

  image.onerror = () => {
    callback(false);
  };

  image.src = dataUrl;
}

function isLikelyHumanProfilePhoto(image, file) {
  const minSize = 180;
  const maxRatio = 2.2;
  const width = image.naturalWidth;
  const height = image.naturalHeight;
  const ratio = Math.max(width, height) / Math.max(1, Math.min(width, height));
  const fileNameLooksRelevant = /(profile|photo|face|selfie|passport|person|user|avatar|headshot)/i.test(file.name);

  return width >= minSize && height >= minSize && ratio <= maxRatio && (file.size >= 15000 || fileNameLooksRelevant);
}

function rejectProfilePhoto(input, message) {
  input.value = "";
  setError("profilePhotoError", message);
}

function isAllowedDocumentFile(file) {
  const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
  const allowedExtensions = /\.(jpe?g|png|pdf)$/i;
  const hasAllowedMime = !file.type || allowedTypes.includes(file.type);
  return hasAllowedMime && allowedExtensions.test(file.name);
}

function isDocumentFileLogical(file, documentType) {
  const normalizedName = file.name.toLowerCase();
  const documentKeywords = {
    Aadhaar: ["aadhaar", "aadhar"],
    PAN: ["pan"],
    "Voter ID": ["voter", "election"],
    "Driving License": ["driving", "license", "licence", "dl"]
  };

  const otherDocumentWords = Object.entries(documentKeywords)
    .filter(([type]) => type !== documentType)
    .flatMap(([, keywords]) => keywords);

  return !otherDocumentWords.some((keyword) => normalizedName.includes(keyword));
}

function rejectDocumentFile(input, message) {
  const savedProfile = loadProfile();
  input.value = "";
  selectedDocumentData = "";
  selectedDocumentMime = "";
  selectedDocumentName = savedProfile.documentName || "";
  renderDocumentPreview("documentPreview", savedProfile.documentName, savedProfile.documentData, savedProfile.documentMime);
  updateAssetButtons();
  setError("documentFileError", message);
}

function removeProfilePhoto(profile) {
  const storedProfile = loadProfile();
  currentProfilePhoto = "";
  profile.profilePhoto = "";
  document.getElementById("profilePhotoInput").value = "";
  saveProfile({ ...storedProfile, profilePhoto: "" });
  setAvatar("photoPreview", "editInitials", "", valueOf("fullName"));
  clearError("profilePhotoError");
  updateAssetButtons();
}

function removeUploadedDocument(profile) {
  const storedProfile = loadProfile();
  const emptyDocument = {
    documentName: "",
    documentData: "",
    documentMime: ""
  };

  selectedDocumentData = "";
  selectedDocumentMime = "";
  selectedDocumentName = "";
  profile.documentName = "";
  profile.documentData = "";
  profile.documentMime = "";
  document.getElementById("documentFile").value = "";
  saveProfile({ ...storedProfile, ...emptyDocument });
  renderDocumentPreview("documentPreview", "", "", "");
  clearError("documentFileError");
  updateAssetButtons();
}

function updateAssetButtons() {
  const removePhotoBtn = document.getElementById("removePhotoBtn");
  const removeDocumentBtn = document.getElementById("removeDocumentBtn");

  if (removePhotoBtn) {
    removePhotoBtn.hidden = !currentProfilePhoto;
  }

  if (removeDocumentBtn) {
    removeDocumentBtn.hidden = !(selectedDocumentData || selectedDocumentName);
  }
}

function formatDate(value) {
  if (!value) return "-";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("hi-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

function getInitials(name) {
  if (!name) return "उ";
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "उ";
}

function setText(id, value) {
  document.getElementById(id).textContent = value || "-";
}

function valueOf(id) {
  const element = document.getElementById(id);
  return element ? element.value.trim() : "";
}

function setError(id, message) {
  document.getElementById(id).textContent = message;
  return false;
}

function clearError(id) {
  document.getElementById(id).textContent = "";
}

function clearErrors() {
  document.querySelectorAll(".error").forEach((error) => {
    error.textContent = "";
  });
}
