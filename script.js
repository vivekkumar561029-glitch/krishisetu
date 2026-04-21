const commonVarieties = {
  en: ["Premium", "Grade A", "Grade B", "Organic", "Desi", "Hybrid", "Local", "Fresh Harvest", "Sorted", "Market Ready"],
  hi: ["प्रीमियम", "ग्रेड A", "ग्रेड B", "जैविक", "देसी", "हाइब्रिड", "स्थानीय", "ताज़ी कटाई", "छांटी हुई", "बाज़ार हेतु तैयार"],
};

const catalogBlueprint = [
  {
    key: "grains",
    label: { en: "Grains", hi: "अनाज" },
    products: [
      product("rice", "Rice", "चावल", riceVarieties("Rice", "चावल", ["Basmati", "Sona Masoori", "IR64", "Ponni", "Kolam", "Matta Rice", "Gobindobhog", "Ambemohar", "HMT","Other"], ["बासमती", "सोना मसूरी", "आईआर64", "पोन्नी", "कोलम", "मट्टा राइस", "गोबिंदोभोग", "अंबेमोहर", "एचएमटी","other"])),
      product("wheat", "Wheat", "गेहूं", makeVarieties("Wheat", "गेहूं", ["Sharbati", "Lokwan", "Sonalika", "HD 2967", "PBW 343", "Malav Shakti", "MP 3288", "Durum", "Khapli", "Desi Wheat"], ["शरबती", "लोकवान", "सोनालिका", "एचडी 2967", "पीबीडब्ल्यू 343", "मालव शक्ति", "एमपी 3288", "ड्यूरम", "खापली", "देसी गेहूं"])),
      product("maize", "Maize", "मक्का"),
      product("barley", "Barley", "जौ"),
      product("oats", "Oats", "जई"),
      product("sorghum", "Sorghum", "ज्वार"),
      product("pearl-millet", "Pearl Millet", "बाजरा"),
      product("finger-millet", "Finger Millet", "रागी"),
      product("foxtail-millet", "Foxtail Millet", "कंगनी"),
      product("little-millet", "Little Millet", "कुटकी"),
      product("barnyard-millet", "Barnyard Millet", "सांवा"),
      product("kodo-millet", "Kodo Millet", "कोदो"),
      product("proso-millet", "Proso Millet", "चीना"),
      product("buckwheat", "Buckwheat", "कुट्टू"),
      product("quinoa", "Quinoa", "क्विनोआ"),
      product("triticale", "Triticale", "ट्रिटिकेल"),
      product("rye", "Rye", "राई अनाज"),
      product("amaranth-grain", "Amaranth Grain", "राजगीरा"),
      product("broken-rice", "Broken Rice", "टूटा चावल"),
      product("parboiled-rice", "Parboiled Rice", "उसना चावल"),
    ],
  },
  {
    key: "fruits",
    label: { en: "Fruits", hi: "फल" },
    products: [
      product("mango", "Mango", "आम", makeVarieties("Mango", "आम", ["Alphonso", "Kesar", "Dasheri", "Langra", "Banganapalli", "Totapuri", "Mallika", "Neelam", "Chausa", "Safeda"], ["अल्फांसो", "केसर", "दशहरी", "लंगड़ा", "बंगनपल्ली", "तोतापुरी", "मल्लिका", "नीलम", "चौसा", "सफेदा"])),
      product("banana", "Banana", "केला", makeVarieties("Banana", "केला", ["Robusta", "Grand Naine", "Poovan", "Nendran", "Rasthali", "Yelakki", "Monthan", "Red Banana", "Malbhog", "Hill Banana"], ["रोबस्टा", "ग्रैंड नाइन", "पूवन", "नेन्द्रन", "रस्थाली", "इलायची केला", "मोन्थन", "लाल केला", "मालभोग", "हिल केला"])),
      product("apple", "Apple", "सेब"),
      product("orange", "Orange", "संतरा"),
      product("papaya", "Papaya", "पपीता"),
      product("guava", "Guava", "अमरूद"),
      product("pomegranate", "Pomegranate", "अनार"),
      product("grapes", "Grapes", "अंगूर"),
      product("pineapple", "Pineapple", "अनानास"),
      product("watermelon", "Watermelon", "तरबूज"),
      product("muskmelon", "Muskmelon", "खरबूजा"),
      product("sweet-lime", "Sweet Lime", "मौसंबी"),
      product("lemon", "Lemon", "नींबू"),
      product("jackfruit", "Jackfruit", "कटहल"),
      product("lychee", "Lychee", "लीची"),
      product("sapota", "Sapota", "चीकू"),
      product("custard-apple", "Custard Apple", "सीताफल"),
      product("ber", "Ber", "बेर"),
      product("dragon-fruit", "Dragon Fruit", "ड्रैगन फ्रूट"),
      product("coconut", "Coconut", "नारियल"),
    ],
  },
  {
    key: "vegetables",
    label: { en: "Vegetables", hi: "सब्जियां" },
    products: [
      product("tomato", "Tomato", "टमाटर"),
      product("potato", "Potato", "आलू"),
      product("onion", "Onion", "प्याज"),
      product("carrot", "Carrot", "गाजर"),
      product("cabbage", "Cabbage", "पत्ता गोभी"),
      product("cauliflower", "Cauliflower", "फूलगोभी"),
      product("brinjal", "Brinjal", "बैंगन"),
      product("okra", "Okra", "भिंडी"),
      product("capsicum", "Capsicum", "शिमला मिर्च"),
      product("green-chilli", "Green Chilli", "हरी मिर्च"),
      product("peas", "Peas", "मटर"),
      product("beans", "Beans", "फली"),
      product("pumpkin", "Pumpkin", "कद्दू"),
      product("bottle-gourd", "Bottle Gourd", "लौकी"),
      product("ridge-gourd", "Ridge Gourd", "तोरई"),
      product("bitter-gourd", "Bitter Gourd", "करेला"),
      product("cucumber", "Cucumber", "खीरा"),
      product("radish", "Radish", "मूली"),
      product("beetroot", "Beetroot", "चुकंदर"),
      product("spinach", "Spinach", "पालक"),
    ],
  },
  {
    key: "pulses",
    label: { en: "Pulses", hi: "दालें" },
    products: [
      product("lentil", "Lentil", "मसूर"),
      product("chickpea", "Chickpea", "चना"),
      product("pea", "Pea", "मटर दाल"),
      product("pigeon-pea", "Pigeon Pea", "अरहर"),
      product("black-gram", "Black Gram", "उड़द"),
      product("green-gram", "Green Gram", "मूंग"),
      product("horse-gram", "Horse Gram", "कुल्थी"),
      product("cowpea", "Cowpea", "लोबिया"),
      product("kidney-bean", "Kidney Bean", "राजमा"),
      product("field-bean", "Field Bean", "वाल"),
      product("moth-bean", "Moth Bean", "मटकी"),
      product("lablab", "Lablab", "सेम"),
      product("kulthi", "Kulthi", "कुल्थ"),
      product("white-pea", "White Pea", "सफेद मटर"),
      product("black-chana", "Black Chana", "काला चना"),
      product("kabuli-chana", "Kabuli Chana", "काबुली चना"),
      product("masoor-whole", "Masoor Whole", "मसूर साबुत"),
      product("moong-whole", "Moong Whole", "मूंग साबुत"),
      product("urad-whole", "Urad Whole", "उड़द साबुत"),
      product("tur-split", "Tur Split", "तूर दाल"),
    ],
  },
  {
    key: "spices",
    label: { en: "Spices", hi: "मसाले" },
    products: [
      product("turmeric", "Turmeric", "हल्दी"),
      product("cumin", "Cumin", "जीरा"),
      product("coriander", "Coriander", "धनिया"),
      product("chilli", "Chilli", "मिर्च"),
      product("cardamom", "Cardamom", "इलायची"),
      product("black-pepper", "Black Pepper", "काली मिर्च"),
      product("fenugreek", "Fenugreek", "मेथी"),
      product("mustard-seed", "Mustard Seed", "सरसों"),
      product("fennel", "Fennel", "सौंफ"),
      product("clove", "Clove", "लौंग"),
      product("cinnamon", "Cinnamon", "दालचीनी"),
      product("nutmeg", "Nutmeg", "जायफल"),
      product("mace", "Mace", "जावित्री"),
      product("ajwain", "Ajwain", "अजवाइन"),
      product("asafoetida", "Asafoetida", "हींग"),
      product("star-anise", "Star Anise", "चक्र फूल"),
      product("bay-leaf", "Bay Leaf", "तेजपत्ता"),
      product("saffron", "Saffron", "केसर"),
      product("dry-ginger", "Dry Ginger", "सूखी अदरक"),
      product("garlic-flakes", "Garlic Flakes", "लहसुन फ्लेक्स"),
    ],
  },
  {
    key: "oilseeds",
    label: { en: "Oilseeds", hi: "तिलहन" },
    products: [
      product("groundnut", "Groundnut", "मूंगफली"),
      product("soybean", "Soybean", "सोयाबीन"),
      product("sesame", "Sesame", "तिल"),
      product("sunflower", "Sunflower", "सूरजमुखी"),
      product("castor", "Castor", "अरंडी"),
      product("linseed", "Linseed", "अलसी"),
      product("safflower", "Safflower", "कुसुम"),
      product("niger-seed", "Niger Seed", "रामतिल"),
      product("mustard-oilseed", "Mustard", "सरसों तिलहन"),
      product("cottonseed", "Cottonseed", "कपास बीज"),
      product("canola", "Canola", "कैनोला"),
      product("coconut-copra", "Copra", "गोला"),
      product("palm-kernel", "Palm Kernel", "पाम कर्नेल"),
      product("rice-bran", "Rice Bran", "राइस ब्रान"),
      product("melon-seed", "Melon Seed", "खरबूजा बीज"),
      product("watermelon-seed", "Watermelon Seed", "तरबूज बीज"),
      product("flaxseed", "Flaxseed", "फ्लैक्ससीड"),
      product("hemp-seed", "Hemp Seed", "भांग बीज"),
      product("chia-seed", "Chia Seed", "चिया बीज"),
      product("pumpkin-seed", "Pumpkin Seed", "कद्दू बीज"),
    ],
  },
  {
    key: "flowers",
    label: { en: "Flowers", hi: "फूल" },
    products: [
      product("marigold", "Marigold", "गेंदा"),
      product("rose", "Rose", "गुलाब"),
      product("jasmine", "Jasmine", "चमेली"),
      product("chrysanthemum", "Chrysanthemum", "गुलदाउदी"),
      product("tuberose", "Tuberose", "रजनीगंधा"),
      product("gladiolus", "Gladiolus", "ग्लैडियोलस"),
      product("gerbera", "Gerbera", "जरबेरा"),
      product("orchid", "Orchid", "ऑर्किड"),
      product("carnation", "Carnation", "कार्नेशन"),
      product("lotus", "Lotus", "कमल"),
      product("hibiscus", "Hibiscus", "गुड़हल"),
      product("sunflower-flower", "Sunflower", "सूरजमुखी फूल"),
      product("aster", "Aster", "एस्टर"),
      product("lily", "Lily", "लिली"),
      product("dahlia", "Dahlia", "डहलिया"),
      product("bougainvillea", "Bougainvillea", "बोगनविलिया"),
      product("crossandra", "Crossandra", "अबोली"),
      product("parijaat", "Parijaat", "हरसिंगार"),
      product("lavender", "Lavender", "लैवेंडर"),
      product("gomphrena", "Gomphrena", "ग्लोब अमरैंथ"),
    ],
  },
  {
    key: "millets",
    label: { en: "Millets", hi: "मोटे अनाज" },
    products: [
      product("bajra", "Bajra", "बाजरा"),
      product("jowar", "Jowar", "ज्वार"),
      product("ragi", "Ragi", "रागी"),
      product("kangni", "Foxtail Millet", "कंगनी"),
      product("kodo", "Kodo Millet", "कोदो"),
      product("kutki", "Little Millet", "कुटकी"),
      product("sawa", "Barnyard Millet", "सांवा"),
      product("cheena", "Proso Millet", "चीना"),
      product("browntop", "Browntop Millet", "ब्राउनटॉप बाजरा"),
      product("amaranth", "Amaranth", "राजगीरा"),
      product("sorghum-red", "Red Sorghum", "लाल ज्वार"),
      product("sorghum-white", "White Sorghum", "सफेद ज्वार"),
      product("finger-millet-brown", "Brown Ragi", "भूरी रागी"),
      product("finger-millet-red", "Red Ragi", "लाल रागी"),
      product("pearl-millet-green", "Green Bajra", "हरा बाजरा"),
      product("foxtail-yellow", "Yellow Foxtail", "पीली कंगनी"),
      product("kodo-polished", "Polished Kodo", "पॉलिश्ड कोदो"),
      product("little-unpolished", "Unpolished Kutki", "अनपॉलिश्ड कुटकी"),
      product("barnyard-premium", "Premium Sawa", "प्रीमियम सांवा"),
      product("millet-mix", "Millet Mix", "मिलेट मिक्स"),
    ],
  },
  {
    key: "dry-fruits",
    label: { en: "Dry Fruits", hi: "सूखे मेवे" },
    products: [
      product("almond", "Almond", "बादाम"),
      product("cashew", "Cashew", "काजू"),
      product("walnut", "Walnut", "अखरोट"),
      product("pistachio", "Pistachio", "पिस्ता"),
      product("raisin", "Raisin", "किशमिश"),
      product("fig-dry", "Dry Fig", "सूखा अंजीर"),
      product("date-dry", "Dry Date", "छुआरा"),
      product("apricot-dry", "Dry Apricot", "सूखी खुबानी"),
      product("prune", "Prune", "सूखा आलूबुखारा"),
      product("dry-coconut", "Dry Coconut", "सूखा नारियल"),
      product("foxnut", "Foxnut", "मखाना"),
      product("peanut-kernel", "Peanut Kernel", "मूंगफली दाना"),
      product("chironji", "Chironji", "चिरौंजी"),
      product("pine-nut", "Pine Nut", "चिलगोजा"),
      product("melon-kernel", "Melon Kernel", "खरबूजा गिरी"),
      product("watermelon-kernel", "Watermelon Kernel", "तरबूज गिरी"),
      product("dry-berry", "Dry Berry", "सूखा बेरी"),
      product("anut", "Anjeer Premium", "अंजीर प्रीमियम"),
      product("mixed-dryfruit", "Mixed Dry Fruit", "मिक्स ड्राई फ्रूट"),
      product("trail-mix", "Trail Mix", "ट्रेल मिक्स"),
    ],
  },
  {
    key: "herbs",
    label: { en: "Herbs", hi: "जड़ी-बूटियां" },
    products: [
      product("mint", "Mint", "पुदीना"),
      product("coriander-leaf", "Coriander Leaf", "हरा धनिया"),
      product("curry-leaf", "Curry Leaf", "कड़ी पत्ता"),
      product("basil", "Basil", "तुलसी"),
      product("lemongrass", "Lemongrass", "लेमनग्रास"),
      product("parsley", "Parsley", "पार्सले"),
      product("dill", "Dill", "सोया"),
      product("oregano", "Oregano", "ओरिगैनो"),
      product("thyme", "Thyme", "थाइम"),
      product("rosemary", "Rosemary", "रोजमेरी"),
      product("sage", "Sage", "सेज"),
      product("chives", "Chives", "चाइव्स"),
      product("celery-leaf", "Celery Leaf", "अजवाइन पत्ता"),
      product("fenugreek-leaf", "Fenugreek Leaf", "मेथी पत्ता"),
      product("spinach-herb", "Baby Spinach", "बेबी पालक"),
      product("sorrel", "Sorrel", "खट्टा पालक"),
      product("stevia", "Stevia", "स्टीविया"),
      product("brahmi", "Brahmi", "ब्राह्मी"),
      product("gotu-kola", "Gotu Kola", "मंडूकपर्णी"),
      product("ajwain-leaf", "Ajwain Leaf", "अजवाइन पत्ता"),
    ],
  },
  {
    key: "plantation",
    label: { en: "Plantation Crops", hi: "बागान फसलें" },
    products: [
      product("tea", "Tea", "चाय"),
      product("coffee", "Coffee", "कॉफी"),
      product("rubber", "Rubber", "रबर"),
      product("arecanut", "Arecanut", "सुपारी"),
      product("cocoa", "Cocoa", "कोको"),
      product("coconut-plantation", "Coconut", "नारियल"),
      product("cashew-plantation", "Cashew", "काजू"),
      product("oil-palm", "Oil Palm", "ऑयल पाम"),
      product("black-pepper-vine", "Pepper Vine", "काली मिर्च बेल"),
      product("cardamom-plantation", "Cardamom", "इलायची"),
      product("vanilla", "Vanilla", "वनीला"),
      product("betel-vine", "Betel Vine", "पान बेल"),
      product("cinnamon-bark", "Cinnamon Bark", "दालचीनी छाल"),
      product("clove-bud", "Clove Bud", "लौंग कलिका"),
      product("nutmeg-tree", "Nutmeg", "जायफल"),
      product("allspice", "Allspice", "ऑलस्पाइस"),
      product("tea-seed", "Tea Seed", "चाय बीज"),
      product("coffee-cherry", "Coffee Cherry", "कॉफी चेरी"),
      product("latex", "Latex", "लेटेक्स"),
      product("copra-plantation", "Copra", "गोला"),
    ],
  },
  {
    key: "fodder",
    label: { en: "Fodder", hi: "चारा" },
    products: [
      product("berseem", "Berseem", "बरसीम"),
      product("lucerne", "Lucerne", "लुसर्न"),
      product("napier-grass", "Napier Grass", "नेपियर घास"),
      product("cowpea-fodder", "Cowpea Fodder", "लोबिया चारा"),
      product("maize-fodder", "Maize Fodder", "मक्का चारा"),
      product("sorghum-fodder", "Sorghum Fodder", "ज्वार चारा"),
      product("oat-fodder", "Oat Fodder", "जई चारा"),
      product("guinea-grass", "Guinea Grass", "गिनी घास"),
      product("para-grass", "Para Grass", "पारा घास"),
      product("stylo", "Stylo", "स्टाइलो"),
      product("hedge-lucerne", "Hedge Lucerne", "हेज लुसर्न"),
      product("setaria", "Setaria", "सेटेरिया"),
      product("dinanath-grass", "Dinanath Grass", "दीनानाथ घास"),
      product("hybrid-napier", "Hybrid Napier", "हाइब्रिड नेपियर"),
      product("fodder-bajra", "Fodder Bajra", "चारा बाजरा"),
      product("fodder-ragi", "Fodder Ragi", "चारा रागी"),
      product("alfalfa", "Alfalfa", "अल्फाल्फा"),
      product("sudan-grass", "Sudan Grass", "सूडान घास"),
      product("teosinte", "Teosinte", "टियोसिन्टे"),
      product("fodder-millet-mix", "Fodder Millet Mix", "चारा मिलेट मिक्स"),
    ],
  },
  {
    key: "medicinal",
    label: { en: "Medicinal Plants", hi: "औषधीय पौधे" },
    products: [
      product("ashwagandha", "Ashwagandha", "अश्वगंधा"),
      product("aloe-vera", "Aloe Vera", "घृतकुमारी"),
      product("satavar", "Shatavari", "शतावरी"),
      product("giloy", "Giloy", "गिलोय"),
      product("tulsi", "Tulsi", "तुलसी"),
      product("kalmegh", "Kalmegh", "कालमेघ"),
      product("senna", "Senna", "सन्ना"),
      product("isabgol", "Isabgol", "इसबगोल"),
      product("safed-musli", "Safed Musli", "सफेद मूसली"),
      product("brahmi-medicinal", "Brahmi", "ब्राह्मी"),
      product("mulethi", "Mulethi", "मुलेठी"),
      product("lemongrass-medicinal", "Lemongrass", "लेमनग्रास"),
      product("citronella", "Citronella", "सिट्रोनेला"),
      product("vetiver", "Vetiver", "खस"),
      product("stevia-medicinal", "Stevia", "स्टीविया"),
      product("camomile", "Camomile", "कैमोमाइल"),
      product("sarpgandha", "Sarpgandha", "सर्पगंधा"),
      product("periwinkle", "Periwinkle", "सदाबहार"),
      product("patchouli", "Patchouli", "पचौली"),
      product("artemisia", "Artemisia", "आर्टेमिसिया"),
    ],
  },
  {
    key: "nuts",
    label: { en: "Nuts", hi: "मेवे" },
    products: [
      product("almond-nut", "Almond", "बादाम"),
      product("cashew-nut", "Cashew", "काजू"),
      product("walnut-nut", "Walnut", "अखरोट"),
      product("pistachio-nut", "Pistachio", "पिस्ता"),
      product("hazelnut", "Hazelnut", "हेज़लनट"),
      product("macadamia", "Macadamia", "मैकाडामिया"),
      product("pecan", "Pecan", "पीकान"),
      product("peanut", "Peanut", "मूंगफली"),
      product("pine-nut-nut", "Pine Nut", "चिलगोजा"),
      product("chironji-nut", "Chironji", "चिरौंजी"),
      product("acorn", "Acorn", "बलूत"),
      product("betel-nut", "Betel Nut", "सुपारी"),
      product("water-chestnut", "Water Chestnut", "सिंघाड़ा"),
      product("coconut-meat", "Coconut Meat", "नारियल गिरी"),
      product("ginkgo", "Ginkgo Nut", "जिन्कगो नट"),
      product("brazil-nut", "Brazil Nut", "ब्राज़ील नट"),
      product("candlenut", "Candlenut", "कैंडलनट"),
      product("pilinut", "Pili Nut", "पिली नट"),
      product("mongongo", "Mongongo Nut", "मोंगोंगो नट"),
      product("mixed-nuts", "Mixed Nuts", "मिक्स मेवे"),
    ],
  },
  {
    key: "sugar-crops",
    label: { en: "Sugar Crops", hi: "शर्करा फसलें" },
    products: [
      product("sugarcane", "Sugarcane", "गन्ना"),
      product("sugar-beet", "Sugar Beet", "शुगर बीट"),
      product("sweet-sorghum", "Sweet Sorghum", "मीठा ज्वार"),
      product("palm-jaggery", "Palm Jaggery Crop", "ताड़ी गुड़ फसल"),
      product("date-palm", "Date Palm", "खजूर पाम"),
      product("palmyra", "Palmyra Palm", "ताड़"),
      product("coconut-neera", "Coconut Neera", "नारियल नीरा"),
      product("maple-sugar", "Maple Sugar Crop", "मेपल शुगर फसल"),
      product("stevia-sugar", "Stevia", "स्टीविया"),
      product("agave", "Agave", "अगेव"),
      product("sugarcane-red", "Red Sugarcane", "लाल गन्ना"),
      product("sugarcane-yellow", "Yellow Sugarcane", "पीला गन्ना"),
      product("jaggery-cane", "Jaggery Cane", "गुड़ गन्ना"),
      product("chewing-cane", "Chewing Cane", "चूसने वाला गन्ना"),
      product("industrial-cane", "Industrial Cane", "औद्योगिक गन्ना"),
      product("high-recovery-cane", "High Recovery Cane", "उच्च रिकवरी गन्ना"),
      product("ratoon-cane", "Ratoon Cane", "रैटून गन्ना"),
      product("seed-cane", "Seed Cane", "बीज गन्ना"),
      product("sweet-beet", "Sweet Beet", "मीठा चुकंदर"),
      product("cane-top", "Cane Top", "गन्ना टॉप"),
    ],
  },
  {
    key: "fiber-crops",
    label: { en: "Fiber Crops", hi: "रेशेदार फसलें" },
    products: [
      product("cotton", "Cotton", "कपास"),
      product("jute", "Jute", "जूट"),
      product("mesta", "Mesta", "मेस्टा"),
      product("sunhemp", "Sunhemp", "सन"),
      product("flax-fiber", "Flax", "सन अलसी"),
      product("ramie", "Ramie", "रैमी"),
      product("hemp-fiber", "Hemp", "भांग रेशा"),
      product("banana-fiber", "Banana Fiber", "केला रेशा"),
      product("sisal", "Sisal", "सिसल"),
      product("kenaf", "Kenaf", "केनाफ"),
      product("coir", "Coir", "कोयर"),
      product("agave-fiber", "Agave Fiber", "अगेव रेशा"),
      product("bamboo-fiber", "Bamboo Fiber", "बांस रेशा"),
      product("kapok", "Kapok", "कपोक"),
      product("nettle-fiber", "Nettle Fiber", "बिच्छू घास रेशा"),
      product("pineapple-fiber", "Pineapple Fiber", "अनानास रेशा"),
      product("abaca", "Abaca", "अबाका"),
      product("crotalaria", "Crotalaria", "क्रोटालेरिया"),
      product("roselle-fiber", "Roselle Fiber", "रोसेल रेशा"),
      product("papaya-fiber", "Papaya Fiber", "पपीता रेशा"),
    ],
  },
  {
    key: "beverages",
    label: { en: "Beverage Crops", hi: "पेय फसलें" },
    products: [
      product("tea-leaf", "Tea Leaf", "चाय पत्ती"),
      product("coffee-bean", "Coffee Bean", "कॉफी बीन्स"),
      product("cocoa-bean", "Cocoa Bean", "कोको बीन्स"),
      product("sugarcane-juice", "Juice Cane", "रस वाला गन्ना"),
      product("lemongrass-tea", "Lemongrass", "लेमनग्रास"),
      product("mint-beverage", "Mint", "पुदीना"),
      product("hibiscus-beverage", "Hibiscus", "गुड़हल"),
      product("rose-petal", "Rose Petal", "गुलाब पंखुड़ी"),
      product("barley-malt", "Barley Malt", "जौ माल्ट"),
      product("ginger-beverage", "Ginger", "अदरक"),
      product("turmeric-beverage", "Turmeric", "हल्दी"),
      product("amla", "Amla", "आंवला"),
      product("bael", "Bael", "बेल"),
      product("kokum", "Kokum", "कोकम"),
      product("jamun", "Jamun", "जामुन"),
      product("tender-coconut", "Tender Coconut", "नारियल पानी"),
      product("palm-neera", "Palm Neera", "ताड़ नीरा"),
      product("sweet-lime-beverage", "Sweet Lime", "मौसंबी"),
      product("orange-beverage", "Orange", "संतरा"),
      product("grape-juice", "Juice Grapes", "जूस अंगूर"),
    ],
  },
  {
    key: "seeds",
    label: { en: "Seeds", hi: "बीज" },
    products: [
      product("paddy-seed", "Paddy Seed", "धान बीज"),
      product("wheat-seed", "Wheat Seed", "गेहूं बीज"),
      product("maize-seed", "Maize Seed", "मक्का बीज"),
      product("mustard-seed-stock", "Mustard Seed", "सरसों बीज"),
      product("groundnut-seed", "Groundnut Seed", "मूंगफली बीज"),
      product("soybean-seed", "Soybean Seed", "सोयाबीन बीज"),
      product("cotton-seed-stock", "Cotton Seed", "कपास बीज"),
      product("vegetable-seed", "Vegetable Seed Mix", "सब्जी बीज मिक्स"),
      product("flower-seed", "Flower Seed Mix", "फूल बीज मिक्स"),
      product("millet-seed", "Millet Seed", "मिलेट बीज"),
      product("fodder-seed", "Fodder Seed", "चारा बीज"),
      product("pulse-seed", "Pulse Seed", "दाल बीज"),
      product("sesame-seed-stock", "Sesame Seed", "तिल बीज"),
      product("sunflower-seed-stock", "Sunflower Seed", "सूरजमुखी बीज"),
      product("okra-seed", "Okra Seed", "भिंडी बीज"),
      product("tomato-seed", "Tomato Seed", "टमाटर बीज"),
      product("onion-seed", "Onion Seed", "प्याज बीज"),
      product("chilli-seed", "Chilli Seed", "मिर्च बीज"),
      product("herb-seed", "Herb Seed Mix", "हर्ब बीज मिक्स"),
      product("hybrid-seed", "Hybrid Seed Pack", "हाइब्रिड बीज पैक"),
    ],
  },
  {
    key: "forestry",
    label: { en: "Forestry Products", hi: "वानिकी उत्पाद" },
    products: [
      product("teak", "Teak", "सागौन"),
      product("eucalyptus", "Eucalyptus", "यूकेलिप्टस"),
      product("bamboo", "Bamboo", "बांस"),
      product("subabul", "Subabul", "सुबबूल"),
      product("melia-dubia", "Melia Dubia", "मेलिया डुबिया"),
      product("poplar", "Poplar", "पॉपलर"),
      product("silver-oak", "Silver Oak", "सिल्वर ओक"),
      product("casuarina", "Casuarina", "कासुआरीना"),
      product("neem-wood", "Neem Wood", "नीम लकड़ी"),
      product("shisham", "Shisham", "शीशम"),
      product("acacia", "Acacia", "बबूल"),
      product("sandalwood", "Sandalwood", "चंदन"),
      product("pine", "Pine", "चीड़"),
      product("deodar", "Deodar", "देवदार"),
      product("rubber-wood", "Rubber Wood", "रबर लकड़ी"),
      product("mango-wood", "Mango Wood", "आम लकड़ी"),
      product("jamun-wood", "Jamun Wood", "जामुन लकड़ी"),
      product("babul", "Babul", "बबूल"),
      product("arjun", "Arjun", "अर्जुन"),
      product("safeda", "Safeda", "सफेदा"),
    ],
  },
  {
    key: "organic-produce",
    label: { en: "Organic Produce", hi: "जैविक उत्पाद" },
    products: [
      product("organic-rice", "Organic Rice", "जैविक चावल"),
      product("organic-wheat", "Organic Wheat", "जैविक गेहूं"),
      product("organic-mango", "Organic Mango", "जैविक आम"),
      product("organic-banana", "Organic Banana", "जैविक केला"),
      product("organic-tomato", "Organic Tomato", "जैविक टमाटर"),
      product("organic-onion", "Organic Onion", "जैविक प्याज"),
      product("organic-potato", "Organic Potato", "जैविक आलू"),
      product("organic-turmeric", "Organic Turmeric", "जैविक हल्दी"),
      product("organic-chilli", "Organic Chilli", "जैविक मिर्च"),
      product("organic-groundnut", "Organic Groundnut", "जैविक मूंगफली"),
      product("organic-soybean", "Organic Soybean", "जैविक सोयाबीन"),
      product("organic-cotton", "Organic Cotton", "जैविक कपास"),
      product("organic-jaggery", "Organic Jaggery Cane", "जैविक गुड़ गन्ना"),
      product("organic-papaya", "Organic Papaya", "जैविक पपीता"),
      product("organic-guava", "Organic Guava", "जैविक अमरूद"),
      product("organic-cumin", "Organic Cumin", "जैविक जीरा"),
      product("organic-coriander", "Organic Coriander", "जैविक धनिया"),
      product("organic-moong", "Organic Moong", "जैविक मूंग"),
      product("organic-chickpea", "Organic Chickpea", "जैविक चना"),
      product("organic-millet", "Organic Millet Mix", "जैविक मिलेट मिक्स"),
    ],
  },
];

const copy = {
  en: {
    required: "This field is required.",
    invalidNumber: "Enter a value greater than 0.",
    invalidImage: "Please upload only JPG or PNG images.",
    tooManyImages: "You can upload up to 3 images only.",
    removeImage: "Remove",
    invalidVideo: "Please upload an MP4 video file.",
    submitError: "Please fill all required fields before submitting.",
    submitSuccess: "Crop added successfully. Your listing is ready for review.",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    totalPriceDefault: "₹0.00",
    categoryPlaceholder: "Select product type",
    cropPlaceholder: "Select product type first",
    cropActivePlaceholder: "Select product name",
    cropHelper: "Select a product type to see available crops.",
    subGroupPlaceholder: "Select product name first",
    subGroupActivePlaceholder: "Select sub group",
    subGroupHelper: "Select a product name to see available varieties.",
    totalHelper: "Total price updates automatically based on quantity and price per kg.",
  },
  hi: {
    required: "यह फ़ील्ड आवश्यक है।",
    invalidNumber: "0 से अधिक मान दर्ज करें।",
    invalidImage: "कृपया केवल JPG या PNG फोटो अपलोड करें।",
    tooManyImages: "आप अधिकतम 3 फोटो ही अपलोड कर सकते हैं।",
    removeImage: "हटाएं",
    invalidVideo: "कृपया केवल MP4 वीडियो फ़ाइल अपलोड करें।",
    submitError: "जमा करने से पहले सभी आवश्यक फ़ील्ड भरें।",
    submitSuccess: "फसल सफलतापूर्वक जोड़ दी गई है। आपकी सूची समीक्षा के लिए तैयार है।",
    darkMode: "डार्क मोड",
    lightMode: "लाइट मोड",
    totalPriceDefault: "₹0.00",
    categoryPlaceholder: "उत्पाद प्रकार चुनें",
    cropPlaceholder: "पहले उत्पाद प्रकार चुनें",
    cropActivePlaceholder: "उत्पाद नाम चुनें",
    cropHelper: "उपलब्ध फसलें देखने के लिए पहले उत्पाद प्रकार चुनें।",
    subGroupPlaceholder: "पहले उत्पाद नाम चुनें",
    subGroupActivePlaceholder: "उप समूह चुनें",
    subGroupHelper: "उपलब्ध किस्में देखने के लिए पहले उत्पाद नाम चुनें।",
    totalHelper: "कुल कीमत मात्रा और प्रति किलो कीमत के आधार पर अपने आप अपडेट होगी।",
  },
};

const themeStorageKey = "krishisetu-theme";

function product(key, en, hi, varieties) {
  return {
    key,
    label: { en, hi },
    varieties: varieties || makeVarieties(en, hi),
  };
}

function makeVarieties(enName, hiName, customEn, customHi) {
  if (customEn && customHi && customEn.length && customHi.length) {
    return { en: customEn, hi: customHi };
  }

  return {
    en: commonVarieties.en.map((suffix) => `${enName} ${suffix}`),
    hi: commonVarieties.hi.map((suffix) => `${hiName} ${suffix}`),
  };
}

function riceVarieties(enName, hiName, customEn, customHi) {
  return makeVarieties(enName, hiName, customEn, customHi);
}

function buildCatalog(language) {
  const catalog = {};

  catalogBlueprint.forEach((category) => {
    const products = {};

    category.products.forEach((item) => {
      products[item.key] = {
        label: item.label[language],
        varieties: item.varieties[language],
      };
    });

    catalog[category.key] = {
      label: category.label[language],
      products,
    };
  });

  return catalog;
}

function createOption(value, text) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = text;
  return option;
}

function getPreferredTheme() {
  const savedTheme = localStorage.getItem(themeStorageKey);
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme, labelMap) {
  document.documentElement.dataset.theme = theme;
  document.querySelectorAll(".theme-toggle").forEach((button) => {
    const label = button.querySelector(".theme-toggle-text");
    if (label) {
      label.textContent = theme === "dark" ? labelMap.lightMode : labelMap.darkMode;
    }
    button.setAttribute("aria-pressed", String(theme === "dark"));
  });
}

document.querySelectorAll(".crop-form").forEach((form) => {
  const language = form.dataset.lang || "en";
  const text = copy[language];
  const catalog = buildCatalog(language);
  const requiredFields = ["category", "cropName", "subGroup", "quantity", "pricePerKg", "qualityGrade", "harvestDate"];

  const categoryInput = form.querySelector("#category");
  const cropNameInput = form.querySelector("#cropName");
  const subGroupInput = form.querySelector("#subGroup");
  const quantityInput = form.querySelector("#quantity");
  const pricePerKgInput = form.querySelector("#pricePerKg");
  const totalPriceInput = form.querySelector("#totalPrice");
  const cropHelper = form.querySelector("[data-crop-helper]");
  const subGroupHelper = form.querySelector("[data-subgroup-helper]");
  const totalHelper = form.querySelector("[data-total-helper]");
  const imageInput = form.querySelector("#imageUpload");
  const uploadPlaceholder = form.querySelector("[data-upload-placeholder]");
  const imagePreviewList = form.querySelector("[data-image-preview-list]");
  const videoInput = form.querySelector("#videoUpload");
  const videoPlaceholder = form.querySelector("[data-video-placeholder]");
  const videoPreview = form.querySelector("[data-video-preview]");
  const videoElement = form.querySelector("[data-video-element]");
  const videoName = form.querySelector("[data-video-name]");
  const removeVideoButton = form.querySelector("[data-remove-video]");
  const formMessage = form.querySelector("[data-form-message]");
  const resetButton = form.querySelector('button[type="reset"]');
  let selectedImages = [];

  if (cropHelper) {
    cropHelper.textContent = text.cropHelper;
  }

  if (subGroupHelper) {
    subGroupHelper.textContent = text.subGroupHelper;
  }

  if (totalHelper) {
    totalHelper.textContent = text.totalHelper;
  }

  function errorElement(fieldId) {
    return form.querySelector(`[data-error-for="${fieldId}"]`);
  }

  function clearFieldError(fieldId) {
    const field = form.querySelector(`#${fieldId}`);
    const error = errorElement(fieldId);
    if (field) {
      field.classList.remove("is-invalid");
    }
    if (error) {
      error.textContent = "";
    }
  }

  function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.classList.add("visible");
    formMessage.classList.toggle("error", type === "error");
  }

  function clearMessage() {
    formMessage.textContent = "";
    formMessage.classList.remove("visible", "error");
  }

  function isPositiveNumber(value) {
    return Number(value) > 0;
  }

  function validateField(fieldId) {
    const field = form.querySelector(`#${fieldId}`);
    const error = errorElement(fieldId);
    let isValid = field.value.trim() !== "";
    let message = text.required;

    if (isValid && (fieldId === "quantity" || fieldId === "pricePerKg")) {
      isValid = isPositiveNumber(field.value);
      message = text.invalidNumber;
    }

    field.classList.toggle("is-invalid", !isValid);
    if (error) {
      error.textContent = isValid ? "" : message;
    }
    return isValid;
  }

  function setCategoryOptions() {
    categoryInput.innerHTML = "";
    categoryInput.append(createOption("", text.categoryPlaceholder));

    Object.entries(catalog).forEach(([categoryKey, categoryData]) => {
      categoryInput.append(createOption(categoryKey, categoryData.label));
    });
  }

  function setCropOptions(categoryKey) {
    cropNameInput.innerHTML = "";
    cropNameInput.append(createOption("", categoryKey ? text.cropActivePlaceholder : text.cropPlaceholder));
    cropNameInput.disabled = !categoryKey;
    cropNameInput.value = "";

    subGroupInput.innerHTML = "";
    subGroupInput.append(createOption("", text.subGroupPlaceholder));
    subGroupInput.disabled = true;
    subGroupInput.value = "";

    if (!categoryKey || !catalog[categoryKey]) {
      return;
    }

    Object.entries(catalog[categoryKey].products).forEach(([productKey, productData]) => {
      cropNameInput.append(createOption(productKey, productData.label));
    });
  }

  function setSubGroupOptions(categoryKey, productKey) {
    subGroupInput.innerHTML = "";
    subGroupInput.append(createOption("", productKey ? text.subGroupActivePlaceholder : text.subGroupPlaceholder));
    subGroupInput.disabled = !categoryKey || !productKey;
    subGroupInput.value = "";

    const product = catalog[categoryKey]?.products[productKey];
    if (!product) {
      return;
    }

    product.varieties.forEach((variety) => {
      subGroupInput.append(createOption(variety, variety));
    });
  }

  function updateTotalPrice() {
    const quantity = Number(quantityInput.value);
    const pricePerKg = Number(pricePerKgInput.value);
    const total = quantity > 0 && pricePerKg > 0 ? quantity * pricePerKg : 0;
    totalPriceInput.value = `₹${total.toFixed(2)}`;
  }

  function syncImageInput() {
    const dataTransfer = new DataTransfer();
    selectedImages.forEach((file) => dataTransfer.items.add(file));
    imageInput.files = dataTransfer.files;
  }

  function renderImagePreviews() {
    imagePreviewList.innerHTML = "";
    uploadPlaceholder.hidden = selectedImages.length > 0;

    selectedImages.forEach((file, index) => {
      const card = document.createElement("div");
      card.className = "preview-card";

      const image = document.createElement("img");
      image.alt = file.name;

      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.className = "preview-remove";
      removeButton.textContent = text.removeImage;
      removeButton.addEventListener("click", () => {
        selectedImages = selectedImages.filter((_, fileIndex) => fileIndex !== index);
        syncImageInput();
        renderImagePreviews();
      });

      const reader = new FileReader();
      reader.onload = () => {
        image.src = reader.result;
      };
      reader.readAsDataURL(file);

      card.append(image, removeButton);
      imagePreviewList.append(card);
    });
  }

  function resetImagePreview() {
    selectedImages = [];
    imageInput.value = "";
    imagePreviewList.innerHTML = "";
    uploadPlaceholder.hidden = false;
  }

  function resetVideoPreview() {
    if (!videoInput) {
      return;
    }

    videoInput.value = "";
    if (videoElement) {
      videoElement.hidden = true;
      videoElement.pause();
      videoElement.removeAttribute("src");
      videoElement.load();
    }
    if (videoName) {
      videoName.textContent = "";
    }
    if (videoPreview) {
      videoPreview.hidden = true;
    }
    if (videoPlaceholder) {
      videoPlaceholder.hidden = false;
    }
  }

  categoryInput.addEventListener("change", () => {
    clearMessage();
    validateField("category");
    setCropOptions(categoryInput.value);
    clearFieldError("cropName");
    clearFieldError("subGroup");
  });

  cropNameInput.addEventListener("change", () => {
    clearMessage();
    validateField("cropName");
    setSubGroupOptions(categoryInput.value, cropNameInput.value);
    clearFieldError("subGroup");
  });

  subGroupInput.addEventListener("change", () => {
    clearMessage();
    validateField("subGroup");
  });

  [quantityInput, pricePerKgInput].forEach((field) => {
    field.addEventListener("input", () => {
      clearMessage();
      validateField(field.id);
      updateTotalPrice();
    });
    field.addEventListener("change", () => validateField(field.id));
  });

  ["qualityGrade", "harvestDate"].forEach((fieldId) => {
    const field = form.querySelector(`#${fieldId}`);
    field.addEventListener("change", () => {
      clearMessage();
      validateField(fieldId);
    });
  });

  imageInput.addEventListener("change", (event) => {
    clearMessage();
    const files = Array.from(event.target.files);

    if (!files.length) {
      renderImagePreviews();
      return;
    }

    const invalidFile = files.find((file) => !["image/jpeg", "image/png"].includes(file.type));
    if (invalidFile) {
      imageInput.value = "";
      syncImageInput();
      showMessage(text.invalidImage, "error");
      return;
    }

    const mergedFiles = [...selectedImages, ...files];
    const uniqueFiles = [];
    mergedFiles.forEach((file) => {
      const duplicate = uniqueFiles.some(
        (existing) => existing.name === file.name && existing.size === file.size && existing.lastModified === file.lastModified
      );
      if (!duplicate) {
        uniqueFiles.push(file);
      }
    });

    if (uniqueFiles.length > 3) {
      imageInput.value = "";
      syncImageInput();
      showMessage(text.tooManyImages, "error");
      return;
    }

    selectedImages = uniqueFiles;
    syncImageInput();
    renderImagePreviews();
  });

  if (videoInput) {
    videoInput.addEventListener("change", (event) => {
      clearMessage();
      const file = event.target.files[0];

      if (!file) {
        resetVideoPreview();
        return;
      }

      if (file.type !== "video/mp4") {
        resetVideoPreview();
        showMessage(text.invalidVideo, "error");
        return;
      }

      const objectUrl = URL.createObjectURL(file);
      if (videoElement) {
        videoElement.src = objectUrl;
        videoElement.hidden = false;
      }
      if (videoName) {
        videoName.textContent = file.name;
      }
      if (videoPreview) {
        videoPreview.hidden = false;
      }
      if (videoPlaceholder) {
        videoPlaceholder.hidden = true;
      }
    });
  }

  if (removeVideoButton) {
    removeVideoButton.addEventListener("click", () => {
      clearMessage();
      resetVideoPreview();
    });
  }

  resetButton.addEventListener("click", () => {
    window.setTimeout(() => {
      clearMessage();
      requiredFields.forEach((fieldId) => clearFieldError(fieldId));
      setCategoryOptions();
      setCropOptions("");
      updateTotalPrice();
      resetImagePreview();
      resetVideoPreview();
    }, 0);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isValid = requiredFields.every((fieldId) => validateField(fieldId));

    if (!isValid) {
      showMessage(text.submitError, "error");
      return;
    }

    showMessage(text.submitSuccess, "success");
    form.reset();
    setCategoryOptions();
    setCropOptions("");
    updateTotalPrice();
    resetImagePreview();
    resetVideoPreview();
  });

  setCategoryOptions();
  setCropOptions("");
  updateTotalPrice();
  resetImagePreview();
  resetVideoPreview();
});

const activeTheme = getPreferredTheme();
applyTheme(activeTheme, copy[document.querySelector(".crop-form")?.dataset.lang || "en"]);

document.querySelectorAll(".theme-toggle").forEach((button) => {
  const language = document.querySelector(".crop-form")?.dataset.lang || "en";
  const labelMap = copy[language];
  button.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(themeStorageKey, nextTheme);
    applyTheme(nextTheme, labelMap);
  });
});
