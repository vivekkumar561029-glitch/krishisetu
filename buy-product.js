const form = document.getElementById("buyProductForm");
const formMessage = document.getElementById("formMessage");
const themeToggle = document.getElementById("themeToggle");
const THEME_STORAGE_KEY = "krishisetu-search-theme";

const productCatalog = {
  fruits: [
    { name: "Mango", varieties: ["Alphonso", "Kesar", "Dasheri", "Langra", "Banganapalli", "Himsagar", "Totapuri", "Neelam", "Chausa", "Badami"] },
    { name: "Banana", varieties: ["Cavendish", "Robusta", "Rasthali", "Nendran", "Poovan", "Monthan", "Red Banana", "Yelakki", "Grand Naine", "Safed Velchi"] },
    { name: "Apple", varieties: ["Red Delicious", "Royal Gala", "Fuji", "Granny Smith", "Ambri", "Golden Delicious", "Honeycrisp", "McIntosh", "Empire", "Cortland"] },
    { name: "Orange", varieties: ["Nagpur", "Kinnow", "Valencia", "Blood Orange", "Hamlin", "Jaffa", "Mosambi", "Navel", "Pineapple Orange", "Sathgudi"] },
    { name: "Grapes", varieties: ["Thompson Seedless", "Sharad Seedless", "Flame Seedless", "Sonaka", "Anab-e-Shahi", "Bangalore Blue", "Perlette", "Tas-A-Ganesh", "Crimson Seedless", "Black Sahebi"] },
    { name: "Pineapple", varieties: ["Kew", "Queen", "Mauritius", "Giant Kew", "Smooth Cayenne", "Ripley Queen", "Red Spanish", "Sugar Loaf", "Pernambuco", "Charlotte Rothschild"] },
    { name: "Papaya", varieties: ["Red Lady", "Pusa Delicious", "Pusa Dwarf", "Taiwan 786", "Coorg Honey Dew", "Washington", "CO-2", "CO-5", "Pink Flesh", "Honey Dew"] },
    { name: "Guava", varieties: ["Allahabad Safeda", "Lalit", "Lucknow 49", "Shweta", "Arka Mridula", "Punjab Pink", "Hisar Safeda", "Sardar", "Apple Color", "Banarasi"] },
    { name: "Pomegranate", varieties: ["Bhagwa", "Ganesh", "Mridula", "Arakta", "Ruby", "Kandhari", "Jyoti", "G-137", "Dholka", "Muscat"] },
    { name: "Watermelon", varieties: ["Sugar Baby", "Arka Manik", "Asahi Yamato", "Charleston Gray", "Black Diamond", "Crimson Sweet", "Jubilee", "Golden Crown", "Sweet Princess", "Pusa Bedana"] },
    { name: "Muskmelon", varieties: ["Hara Madhu", "Punjab Sunehri", "Durgapura Madhu", "Arka Jeet", "Kashi Madhu", "Pusa Sharbati", "RM-43", "Kundan", "Madhuras", "Jaipur Long"] },
    { name: "Litchi", varieties: ["Shahi", "China", "Rose Scented", "Dehradun", "Bombai", "Bedana", "Late Bedana", "Purbi", "Kasba", "Muzaffarpur"] },
    { name: "Strawberry", varieties: ["Camarosa", "Sweet Charlie", "Winter Dawn", "Festival", "Albion", "Sabrina", "Rania", "Fortuna", "San Andreas", "Monterey"] },
    { name: "Pear", varieties: ["Patharnakh", "Punjab Beauty", "Bartlett", "Baggugosha", "Le Conte", "Kieffer", "Flemish Beauty", "William Bartlett", "Max Red Bartlett", "Seckel"] },
    { name: "Peach", varieties: ["Shan-e-Punjab", "Flordasun", "Partap", "Early Grande", "July Elberta", "Redhaven", "Sharbati", "Pratap", "Sunhaven", "Tropic Beauty"] },
    { name: "Plum", varieties: ["Kala Amritsari", "Santa Rosa", "Alu Bokhara", "Titron", "Satluj Purple", "Frontier", "Methley", "Beauty", "Ozark Premier", "Burbank"] },
    { name: "Cherry", varieties: ["Bing", "Rainier", "Lapins", "Sweetheart", "Van", "Lambert", "Chelan", "Stella", "Skeena", "Sunburst"] },
    { name: "Fig", varieties: ["Poona", "Deanna", "Conadria", "Brown Turkey", "Black Mission", "Excel", "Kadota", "Alma", "Celeste", "Adriatic"] },
    { name: "Custard Apple", varieties: ["Balanagar", "Arka Sahan", "Mammoth", "Red Sitaphal", "Island Gem", "African Pride", "Pink Mammoth", "NMK-1", "Washington", "Local Seeded"] },
    { name: "Dragon Fruit", varieties: ["White Flesh", "Red Flesh", "Pink Flesh", "Yellow Dragon", "Vietnam White", "Purple Haze", "American Beauty", "Delight", "Israeli Yellow", "Royal Red"] },
  ],
  vegetables: [
    { name: "Tomato", varieties: ["Pusa Ruby", "Arka Rakshak", "Arka Vikas", "NS 516", "Abhinav", "Swarna Sampada", "Roma", "Heem Sohna", "Pusa Rohini", "Arka Samrat"] },
    { name: "Potato", varieties: ["Kufri Jyoti", "Kufri Pukhraj", "Kufri Bahar", "Kufri Chandramukhi", "Kufri Badshah", "Kufri Chipsona", "Kufri Himalini", "Kufri Anand", "Kufri Garima", "Kufri Sutlej"] },
    { name: "Onion", varieties: ["N-53", "Bhima Super", "Bhima Red", "Agrifound Light Red", "Pusa Red", "Arka Kalyan", "Bhima Shakti", "Bhima Raj", "Hisar Onion-4", "Arka Niketan"] },
    { name: "Brinjal", varieties: ["Pusa Purple Long", "Arka Nidhi", "Arka Kusumkar", "Pusa Kranti", "Punjab Sadabahar", "Shyamala", "Surya", "Annamalai", "Utkal Tarini", "CO-2"] },
    { name: "Cabbage", varieties: ["Golden Acre", "Pride of India", "Pusa Drum Head", "Quisto", "Green Express", "Rare Ball", "KK Cross", "Tropical Queen", "Copenhagen Market", "Summer Star"] },
    { name: "Cauliflower", varieties: ["Pusa Snowball", "Pant Gobhi", "Pusa Sharad", "Him Jyoti", "Snow Mystique", "Early Kunwari", "Pusa Deepali", "Pusa Meghna", "Kashi Kunj", "Arka Kanti"] },
    { name: "Carrot", varieties: ["Pusa Rudhira", "Pusa Kesar", "Nantes", "Kuroda", "Black Wonder", "Hisar Gairic", "Imperator", "Danvers", "Shin Kuroda", "Early Nantes"] },
    { name: "Spinach", varieties: ["All Green", "Pusa Palak", "Harit Sobha", "Jobner Green", "Arka Anupama", "Green Galaxy", "Evergreen", "Punjab Green", "Local Leafy", "Hybrid Spin"] },
    { name: "Okra", varieties: ["Arka Anamika", "Pusa Sawani", "VRO-6", "Parbhani Kranti", "Hisar Unnat", "Shakti", "Varsha Uphar", "Punjab Padmini", "Kashi Pragati", "Phule Utkarsha"] },
    { name: "Chilli", varieties: ["Pusa Jwala", "Arka Lohit", "Byadgi", "Kashmiri", "Guntur Sannam", "Kashi Anmol", "Punjab Lal", "Teja", "Bhut Jolokia", "Suryamukhi"] },
    { name: "Capsicum", varieties: ["Indra", "Bharat", "California Wonder", "Orobelle", "Bomby", "Solan Bharpur", "Arka Mohini", "Asha", "Nishat", "Yolo Wonder"] },
    { name: "Peas", varieties: ["Arkel", "Azad P-1", "Bonneville", "VL Matar", "Lincoln", "Early Badger", "Punjab 89", "Pant Uphar", "Mithi Phali", "Rachna"] },
    { name: "Radish", varieties: ["Pusa Chetki", "Pusa Himani", "Japanese White", "Punjab Safed", "Kalyanpur Safed", "Arka Nishant", "Snow White", "Minowase", "Rapid Red", "White Icicle"] },
    { name: "Beetroot", varieties: ["Crimson Globe", "Detroit Dark Red", "Ruby Queen", "Crosby Egyptian", "Boltardy", "Arka Ruby", "Early Wonder", "Red Ace", "Chioggia", "Moulin Rouge"] },
    { name: "Bitter Gourd", varieties: ["Pusa Do Mausami", "Arka Harit", "CO-1", "Phule Green Gold", "Priya", "NBGH-167", "Pusa Vishesh", "Mithipagal", "Pant Karela", "Vishwas"] },
    { name: "Bottle Gourd", varieties: ["Pusa Naveen", "Pusa Summer Prolific", "Arka Bahar", "Punjab Komal", "CO-2", "Kashi Ganga", "Narendra Rashmi", "Phule Suchitra", "Anamika", "Samrat"] },
    { name: "Pumpkin", varieties: ["Arka Chandan", "Pusa Vishwas", "CO-1", "Kashi Harit", "Pusa Hybrid-1", "Narendra Agrim", "Ambili", "Punjab Samrat", "Dill's Atlantic", "Local Round"] },
    { name: "Cucumber", varieties: ["Pusa Uday", "Pusa Barkha", "Japanese Long Green", "Straight Eight", "Poona Khira", "Punjab Naveen", "Swarna Sheetal", "Himangi", "Malini", "Arka Sheetal"] },
    { name: "French Beans", varieties: ["Arka Komal", "Contender", "Premier", "Pusa Parvati", "Kentucky Wonder", "Phule Surekha", "VL Bean-1", "HUR-15", "Local Green", "Sel-2"] },
    { name: "Sweet Corn", varieties: ["Sugar-75", "Madhuri", "Priya", "Golden Cob", "Sweet Glory", "Misthi", "Mohor", "Vivek Hybrid", "Madhu-5", "Shresta"] },
  ],
  grains: [
    { name: "Wheat", varieties: ["HD 2967", "PBW 343", "HD 3086", "DBW 187", "GW 322", "Lok-1", "WH 1105", "MP 3288", "Raj 4037", "HI 1544"] },
    { name: "Rice", varieties: ["Basmati 1121", "Swarna", "IR-64", "Pusa Basmati 1509", "MTU 1010", "Samba Mahsuri", "Gobindobhog", "CSR 30", "Pusa 44", "Jaya"] },
    { name: "Maize", varieties: ["Ganga-5", "DHM 117", "HQPM-1", "Prakash", "Suwan-1", "Vivek QPM-9", "Pioneer 3396", "PMH-1", "Deccan 103", "Rajkumar"] },
    { name: "Barley", varieties: ["RD 2035", "BH 902", "DWRB 73", "PL 807", "RD 2552", "Azad", "Lakhan", "Karan 16", "RD 2668", "VLB 94"] },
    { name: "Millet", varieties: ["HHB 67", "ICTP 8203", "WCC 75", "Raj 171", "PHB 2168", "GHB 558", "ICMV 221", "Pusa 322", "MPMH 17", "Dhanashakti"] },
    { name: "Sorghum", varieties: ["CSV 15", "CSV 17", "CSH 14", "CSV 20", "SPV 2217", "M 35-1", "Phule Chitra", "Pratap Jowar", "CSV 27", "PKV Kranti"] },
    { name: "Oats", varieties: ["Kent", "OL 9", "OL 10", "OS 6", "HFO 114", "JHO 822", "Bundel Jai", "OL 125", "UPO 212", "Harita"] },
    { name: "Ragi", varieties: ["GPU 28", "ML 365", "VL 149", "CO 15", "KMR 301", "Indaf 9", "PR 202", "Sri Chaitanya", "Bhairabi", "Vakula"] },
    { name: "Foxtail Millet", varieties: ["SiA 3156", "SiA 3088", "HMT 100-1", "Prasad", "Krishna", "DHFM 109-3", "Sreelakshmi", "Narasimharaya", "Koral", "Suryanandi"] },
    { name: "Pearl Millet", varieties: ["HHB 94", "HHB 146", "RHB 177", "MP 7878", "ProAgro 9450", "ICMH 356", "GHB 744", "ABV 04", "Moti Bajra", "Pioneer 86M86"] },
    { name: "Finger Millet", varieties: ["GPU 67", "PRM 1", "Arjuna", "Vakula", "Bhairavi", "KMR 204", "VL 352", "PES 400", "CO 14", "Indaf 15"] },
    { name: "Barnyard Millet", varieties: ["VL 172", "VL 207", "Madua", "CO 2", "DHBM 93-3", "PRJ 1", "TNEB 305", "Madira 172", "BSP 1", "Anuradha"] },
    { name: "Kodo Millet", varieties: ["JK 48", "GPUK 3", "RK 390-25", "JNK 101", "DHK 508", "TNAU 86", "PKM 1", "KAVN 2", "Local Brown", "Bharati"] },
    { name: "Little Millet", varieties: ["OLM 203", "BL 6", "JK 8", "RLM 37", "CO 4", "DHLT 28-4", "Guruji", "Sukshema", "Madhulika", "Siri"] },
    { name: "Proso Millet", varieties: ["TNAU 164", "PLM 1", "CO 5", "GPUP 21", "Local White", "DHM 10", "Surya", "Anand", "Brahma", "Sona"] },
    { name: "Buckwheat", varieties: ["Himpriya", "VL Ugal 7", "PRB 1", "Kull", "Him Shakti", "Sangla Local", "Pusa Buckwheat", "Kashmir Local", "Sutlej", "Uttara"] },
    { name: "Quinoa", varieties: ["Puno", "Titicaca", "Real", "Cherry Vanilla", "QQ74", "Salcedo", "Regalona", "Rainbow", "Cica", "Mint Vanilla"] },
    { name: "Canary Seed", varieties: ["CDC Maria", "CDC Togo", "CDC Bastia", "CDC Calvi", "Keet", "Local Feed", "Yellow Clean", "White Seed", "Improved Bastia", "Golden Hulless"] },
    { name: "Triticale", varieties: ["TL 1210", "DT 46", "UPT 72294", "TL 2908", "DWRB Triticale", "TL 2942", "JM 222", "Juwel", "Grado", "Tatra"] },
    { name: "Wild Rice", varieties: ["Northern Light", "Canoe", "Itasca", "Barron", "K2", "Phantom", "Voyageur", "Natural Long", "Black Paddy", "Lake Select"] },
  ],
  pulses: [
    { name: "Chickpea", varieties: ["JG 11", "Pusa 372", "Vijay", "Virat", "JG 16", "Kabuli Chana", "Pusa 1103", "BG 256", "ICCV 10", "GNG 1581"] },
    { name: "Pigeon Pea", varieties: ["Asha", "ICPL 87119", "Pusa 992", "UPAS 120", "Bahar", "Paras", "BSMR 736", "Maruti", "Pragati", "Narendra Arhar-1"] },
    { name: "Green Gram", varieties: ["SML 668", "Pusa Vishal", "Virat", "IPM 2-3", "Samrat", "BM 4", "Meha", "HUM 16", "Shikha", "Pant Mung-5"] },
    { name: "Black Gram", varieties: ["PU 31", "T 9", "Pant U-19", "LBG 752", "Mash 114", "TAU-1", "Vamban 6", "NDU 5-7", "Uttara", "KU 99-20"] },
    { name: "Lentil", varieties: ["PL 406", "K-75", "Pusa Vaibhav", "DPL 62", "HUL 57", "Moitree", "Asha", "Subrata", "NDL-1", "IPL 316"] },
    { name: "Field Pea", varieties: ["Rachna", "Arkel", "Aparna", "Prakash", "KPMR 522", "HFP 4", "Pant P 25", "Azad Pea-3", "HUDP 15", "IPFD 10-12"] },
    { name: "Cowpea", varieties: ["Pusa Komal", "Arka Garima", "Kashi Kanchan", "Vijay", "GC 3", "C 152", "AVCP 1", "Pusa Barsati", "Pusa Phalguni", "Phule CP-4"] },
    { name: "Moth Bean", varieties: ["RMO 40", "RMO 257", "CAZRI Moth-1", "Maru Moth-1", "Jadia", "Jwala", "RMO 225", "MBS 605", "HM 365", "RMO 435"] },
    { name: "Horse Gram", varieties: ["PHG 9", "AK 21", "VLG 1", "Paiyur 2", "CRIDA 18R", "AK 42", "HPK 2", "Maru Kulthi", "PLK 1", "Rituraj"] },
    { name: "Kidney Bean", varieties: ["Arun", "Him 1", "PDR 14", "Baspa", "Shalimar Rajmash-1", "VLR 125", "Amber", "Uday", "Contender", "HUR 137"] },
    { name: "Soybean", varieties: ["JS 335", "JS 95-60", "MAUS 71", "NRC 37", "RKS 45", "DS 228", "PS 1092", "Pratap Soya", "AMS 1001", "PK 472"] },
    { name: "Peanut", varieties: ["JL 24", "GG 20", "TAG 24", "Kadiri 6", "TMV 2", "Dharani", "Girnar 2", "KDG 128", "CO 7", "TG 37A"] },
    { name: "Broad Bean", varieties: ["Pusa Sumeet", "Arka Utsav", "Local Long Pod", "Green Windsor", "Aquadulce", "Masterpiece", "Crimson Flowered", "Express", "Imperial Green", "White Broad"] },
    { name: "Bengal Gram", varieties: ["JG 14", "Annegiri", "Pusa 362", "KAK 2", "JG 315", "RSG 888", "BDNG 798", "Gaurav", "RSG 963", "JGK 1"] },
    { name: "Lablab", varieties: ["Arka Vijay", "HA 4", "Pusa Early Prolific", "Phule Surekha", "Konkan Bhushan", "Ankur Goldy", "Rohi", "Gujarat Papdi", "Sreevani", "Arka Jay"] },
    { name: "Cluster Bean", varieties: ["Pusa Navbahar", "HG 365", "RGC 936", "RGC 1002", "M 83", "RGC 1038", "Goma Manjari", "Maru Guar", "RGr 16-3", "RGC 1066"] },
    { name: "Adzuki Bean", varieties: ["Erimo", "Takara", "Hikari", "Akane", "Benidainagon", "Shumari", "Akatsuki", "Local Red", "Ruby Bean", "Early Red"] },
    { name: "Lima Bean", varieties: ["Fordhook", "Henderson", "Christmas Lima", "Burpee Improved", "Willow Leaf", "Sieva", "King of the Garden", "Jackson Wonder", "Thorogreen", "Baby Lima"] },
    { name: "Navy Bean", varieties: ["OAC Rex", "Vista", "Avalon", "T9905", "Lightning", "Envoy", "Mayflower", "Snowbird", "Dreamer", "OAC Thunder"] },
    { name: "Mung Bean", varieties: ["PDM 139", "PM 11", "ML 818", "COGG 973", "IPM 99-125", "BM 2003-2", "HUM 12", "SML 832", "KM 2241", "Pant Mung-8"] },
  ],
  spices: [
    { name: "Turmeric", varieties: ["Lakadong", "Rajendra Sonia", "Suvarna", "Prabha", "BSR 2", "Krishna", "Sudarsana", "Salem", "Alleppey", "Roma"] },
    { name: "Cumin", varieties: ["GC 4", "RZ 19", "RZ 209", "Gujarat Cumin-1", "UC 198", "Kutch Jeera", "Local White", "Ajmer Cumin", "Maru Cumin", "RZ 223"] },
    { name: "Coriander", varieties: ["CO 4", "GC 2", "RCr 41", "Sindhu", "Sadhana", "Sudha", "Rajendra Swati", "Pant Haritma", "Hisar Sugandh", "ACr 1"] },
    { name: "Black Pepper", varieties: ["Panniyur 1", "Karimunda", "Kottanadan", "IISR Malabar Excel", "Panchami", "Pournami", "Sreekara", "Subhakara", "Narayakodi", "Cheriyakaniyakadan"] },
    { name: "Cardamom", varieties: ["Njallani", "PV 1", "Mudigere 1", "ICRI 2", "Green Gold", "MCC 16", "Selection 9", "Appangala", "Mysore", "Vazhukka"] },
    { name: "Clove", varieties: ["Sri Lankan", "Madagascar", "Zanzibar", "Penang", "Ambon", "Siputih", "Afo", "Zanzibar Large", "Maluku", "Local Aromatic"] },
    { name: "Fenugreek", varieties: ["Pusa Early Bunching", "RMT 1", "RMT 305", "Hisar Sonali", "Lam Selection 1", "Kasuri", "Methi No. 47", "Pant Ragini", "AFg 3", "RMT 361"] },
    { name: "Mustard", varieties: ["Varuna", "Pusa Bold", "Rohini", "Pusa Mustard 25", "Kranti", "NRCHB 101", "Giriraj", "RLC 3", "Laxmi", "RH 749"] },
    { name: "Fennel", varieties: ["GF 1", "RF 101", "RF 125", "Hisar Swarup", "AF 1", "Ajmer Fennel 1", "HF 171", "CO 1", "Local Sweet", "Sugandha"] },
    { name: "Ajwain", varieties: ["AA 1", "AA 2", "Ajmer Ajwain 93", "Gujarat Ajwain 1", "Local Bold", "Rajasthan Seed", "Arka Omkar", "Desi Ajwain", "Green Aroma", "White Seed"] },
    { name: "Nutmeg", varieties: ["Konkan Sugandha", "IISR Viswasree", "Local Malabar", "Sri Lankan", "Cochin", "Kaali Sharif", "Pearl", "Golden Seed", "High Oil", "Aromatic Select"] },
    { name: "Saffron", varieties: ["Kashmir Mongra", "Lacha", "Zarda", "Aquila", "Coupe", "Pushal", "Spanish Coupe", "Iranian Sargol", "Negin", "Super Negin"] },
    { name: "Bay Leaf", varieties: ["Cinnamon Leaf", "Indian Bay", "Tejpat", "Fresh Green", "Dried Premium", "Himalayan", "Aromatic", "Long Leaf", "Broad Leaf", "Organic Leaf"] },
    { name: "Star Anise", varieties: ["Chinese Star", "Vietnam Premium", "Bold Star", "Broken Star", "Organic Star", "Large Petal", "High Oil", "Sweet Aroma", "Select Grade", "Whole Star"] },
    { name: "Vanilla", varieties: ["Bourbon", "Tahitian", "Mexican", "Indian Planifolia", "Madagascar", "Sri Lankan", "Papua", "Tahitensis", "Pompona", "Premium Bean"] },
    { name: "Ginger", varieties: ["Maran", "Rio-de-Janeiro", "Nadia", "IISR Varada", "Suprabha", "Mahima", "Himgiri", "Suravi", "Karthika", "Rejatha"] },
    { name: "Garlic", varieties: ["Yamuna Safed", "Yamuna Safed-2", "Ooty 1", "Agrifound White", "Bhima Omkar", "Bhima Purple", "G-1", "Godavari", "Jammu Local", "Madhubani"] },
    { name: "Red Chilli", varieties: ["Byadgi", "Guntur Sannam", "Teja", "Kashmiri", "Sankeshwari", "Pusa Jwala", "Arka Meghana", "Phule Jyoti", "K2", "Warangal Chapata"] },
    { name: "Dry Mint", varieties: ["Peppermint", "Spearmint", "Japanese Mint", "Kosi", "Gomti", "Himalaya", "Punjab Green", "Shivalik", "Madhuras", "Aromatic Dry"] },
    { name: "Celery Seed", varieties: ["Utah", "Tall Utah", "Golden Self-Blanching", "Pascal", "Local Green", "Green Giant", "Tendercrisp", "Victoria", "Monarch", "Aromatic Seed"] },
  ],
};

const fields = {
  productType: document.getElementById("productType"),
  productName: document.getElementById("productName"),
  subGroup: document.getElementById("subGroup"),
  minQuantity: document.getElementById("minQuantity"),
  maxQuantity: document.getElementById("maxQuantity"),
};

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark-mode", isDark);
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}

function initializeTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === "dark" || savedTheme === "light") {
    applyTheme(savedTheme);
    return;
  }
  applyTheme("light");
}

function getErrorElement(key) {
  return document.querySelector(`[data-error-for="${key}"]`);
}

function setFieldError(input, errorKey, message) {
  input.classList.add("is-invalid");
  const error = getErrorElement(errorKey);
  if (error) {
    error.textContent = message;
  }
}

function clearFieldError(input, errorKey) {
  input.classList.remove("is-invalid");
  const error = getErrorElement(errorKey);
  if (error) {
    error.textContent = "";
  }
}

function showMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = `form-message visible ${type}`;
}

function clearMessage() {
  formMessage.textContent = "";
  formMessage.className = "form-message";
}

function validateRequired(input, errorKey, message) {
  const isValid = input.value.trim() !== "";
  if (!isValid) {
    setFieldError(input, errorKey, message);
  } else {
    clearFieldError(input, errorKey);
  }
  return isValid;
}

function setOptions(select, placeholder, items) {
  select.innerHTML = "";

  const placeholderOption = document.createElement("option");
  placeholderOption.value = "";
  placeholderOption.textContent = placeholder;
  select.appendChild(placeholderOption);

  items.forEach((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    select.appendChild(option);
  });
}

function updateProductOptions() {
  const selectedType = fields.productType.value;
  const products = productCatalog[selectedType] || [];

  setOptions(fields.productName, selectedType ? "Select Product Name" : "Select product type first", products.map((item) => item.name));
  fields.productName.disabled = !selectedType;

  setOptions(fields.subGroup, "Select product first", []);
  fields.subGroup.disabled = true;
}

function updateVarietyOptions() {
  const selectedType = fields.productType.value;
  const selectedProduct = fields.productName.value;
  const product = (productCatalog[selectedType] || []).find((item) => item.name === selectedProduct);
  const varieties = product ? product.varieties : [];

  setOptions(fields.subGroup, selectedProduct ? "Select Sub Group / Variety" : "Select product first", varieties);
  fields.subGroup.disabled = !selectedProduct;
}

function validateForm() {
  let isValid = true;

  if (!validateRequired(fields.productType, "productType", "Please select a product type.")) {
    isValid = false;
  }

  if (!validateRequired(fields.productName, "productName", "Please select a product name.")) {
    isValid = false;
  }

  if (!validateRequired(fields.subGroup, "subGroup", "Please select a sub group or variety.")) {
    isValid = false;
  }

  const hasMinQuantity = validateRequired(fields.minQuantity, "quantityRange", "Please enter both minimum and maximum quantity.");
  const hasMaxQuantity = validateRequired(fields.maxQuantity, "quantityRange", "Please enter both minimum and maximum quantity.");

  if (!hasMinQuantity || !hasMaxQuantity) {
    fields.minQuantity.classList.toggle("is-invalid", !hasMinQuantity);
    fields.maxQuantity.classList.toggle("is-invalid", !hasMaxQuantity);
    isValid = false;
  } else {
    const minQuantity = Number(fields.minQuantity.value);
    const maxQuantity = Number(fields.maxQuantity.value);

    if (Number.isNaN(minQuantity) || Number.isNaN(maxQuantity)) {
      getErrorElement("quantityRange").textContent = "Enter numeric values only.";
      fields.minQuantity.classList.add("is-invalid");
      fields.maxQuantity.classList.add("is-invalid");
      isValid = false;
    } else if (minQuantity < 0 || maxQuantity < 0) {
      getErrorElement("quantityRange").textContent = "Quantity values cannot be negative.";
      fields.minQuantity.classList.add("is-invalid");
      fields.maxQuantity.classList.add("is-invalid");
      isValid = false;
    } else if (minQuantity > maxQuantity) {
      getErrorElement("quantityRange").textContent = "Minimum quantity cannot exceed maximum quantity.";
      fields.minQuantity.classList.add("is-invalid");
      fields.maxQuantity.classList.add("is-invalid");
      isValid = false;
    } else if (minQuantity === 0 && maxQuantity === 0) {
      getErrorElement("quantityRange").textContent = "Quantity range must be greater than 0.";
      fields.minQuantity.classList.add("is-invalid");
      fields.maxQuantity.classList.add("is-invalid");
      isValid = false;
    } else {
      fields.minQuantity.classList.remove("is-invalid");
      fields.maxQuantity.classList.remove("is-invalid");
      getErrorElement("quantityRange").textContent = "";
    }
  }

  return isValid;
}

Object.entries(fields).forEach(([key, input]) => {
  input.addEventListener("input", () => {
    clearMessage();

    if (key === "minQuantity" || key === "maxQuantity") {
      fields.minQuantity.classList.remove("is-invalid");
      fields.maxQuantity.classList.remove("is-invalid");
      getErrorElement("quantityRange").textContent = "";
      return;
    }

    clearFieldError(input, key);
  });

  input.addEventListener("change", () => {
    clearMessage();
  });
});

fields.productType.addEventListener("change", () => {
  clearFieldError(fields.productType, "productType");
  clearFieldError(fields.productName, "productName");
  clearFieldError(fields.subGroup, "subGroup");
  updateProductOptions();
});

fields.productName.addEventListener("change", () => {
  clearFieldError(fields.productName, "productName");
  clearFieldError(fields.subGroup, "subGroup");
  updateVarietyOptions();
});

fields.subGroup.addEventListener("change", () => {
  clearFieldError(fields.subGroup, "subGroup");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearMessage();

  if (!validateForm()) {
    showMessage("Please fix the highlighted fields and try again.", "error");
    return;
  }

  showMessage("Search order submitted successfully. Matching products are ready for the next step.", "success");
  form.reset();
  updateProductOptions();
});

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
  localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  applyTheme(nextTheme);
});

initializeTheme();
updateProductOptions();
