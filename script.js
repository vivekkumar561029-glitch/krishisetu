const PROFILE_STORAGE_KEY = "farmerBuyerProfile";
const DEMO_OTP = "123456";

const districtMap = {
  "Andaman and Nicobar Islands": ["Nicobar", "North and Middle Andaman", "South Andaman"],
  "Andhra Pradesh": ["Alluri Sitharama Raju", "Anakapalli", "Ananthapuramu", "Annamayya", "Bapatla", "Chittoor", "Dr. B.R. Ambedkar Konaseema", "East Godavari", "Eluru", "Guntur", "Kakinada", "Krishna", "Kurnool", "Nandyal", "NTR", "Palnadu", "Parvathipuram Manyam", "Prakasam", "Sri Potti Sriramulu Nellore", "Sri Sathya Sai", "Srikakulam", "Tirupati", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa"],
  "Arunachal Pradesh": ["Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siang", "Kamle", "Kra Daadi", "Kurung Kumey", "Lepa Rada", "Lohit", "Longding", "Lower Dibang Valley", "Lower Siang", "Lower Subansiri", "Namsai", "Pakke-Kessang", "Papum Pare", "Shi Yomi", "Siang", "Tawang", "Tirap", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang"],
  "Assam": ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tamulpur", "Tinsukia", "Udalguri", "West Karbi Anglong"],
  "Bihar": ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"],
  "Chandigarh": ["Chandigarh"],
  "Chhattisgarh": ["Balod", "Baloda Bazar", "Balrampur-Ramanujganj", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Gaurela-Pendra-Marwahi", "Janjgir-Champa", "Jashpur", "Kabirdham", "Kanker", "Khairagarh-Chhuikhadan-Gandai", "Kondagaon", "Korba", "Korea", "Mahasamund", "Manendragarh-Chirmiri-Bharatpur", "Mohla-Manpur-Ambagarh Chowki", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sakti", "Sarangarh-Bilaigarh", "Sukma", "Surajpur", "Surguja"],
  "Dadra and Nagar Haveli and Daman and Diu": ["Dadra and Nagar Haveli", "Daman", "Diu"],
  "Delhi": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"],
  "Goa": ["North Goa", "South Goa"],
  "Gujarat": ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"],
  "Haryana": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
  "Himachal Pradesh": ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],
  "Jammu and Kashmir": ["Anantnag", "Bandipora", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"],
  "Jharkhand": ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahibganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"],
  "Karnataka": ["Bagalkot", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Bidar", "Chamarajanagar", "Chikkaballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayanagara", "Vijayapura", "Yadgir"],
  "Kerala": ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"],
  "Ladakh": ["Kargil", "Leh"],
  "Lakshadweep": ["Lakshadweep"],
  "Madhya Pradesh": ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Maihar", "Mandla", "Mandsaur", "Mauganj", "Morena", "Narmadapuram", "Narsinghpur", "Neemuch", "Niwari", "Pandhurna", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"],
  "Maharashtra": ["Ahmednagar", "Akola", "Amravati", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Chhatrapati Sambhajinagar", "Dharashiv", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"],
  "Manipur": ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"],
  "Meghalaya": ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "Eastern West Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"],
  "Mizoram": ["Aizawl", "Champhai", "Hnahthial", "Khawzawl", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saitual", "Serchhip", "Siaha"],
  "Nagaland": ["Chumoukedima", "Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Niuland", "Noklak", "Peren", "Phek", "Shamator", "Tseminyu", "Tuensang", "Wokha", "Zunheboto"],
  "Odisha": ["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Keonjhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh"],
  "Puducherry": ["Karaikal", "Mahe", "Puducherry", "Yanam"],
  "Punjab": ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Malerkotla", "Mansa", "Moga", "Mohali", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sangrur", "Shaheed Bhagat Singh Nagar", "Tarn Taran"],
  "Rajasthan": ["Ajmer", "Alwar", "Anupgarh", "Balotra", "Banswara", "Baran", "Barmer", "Beawar", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Deeg", "Didwana-Kuchaman", "Dholpur", "Dudu", "Dungarpur", "Gangapur City", "Hanumangarh", "Jaipur", "Jaipur Rural", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Jodhpur Rural", "Karauli", "Kekri", "Khairthal-Tijara", "Kota", "Kotputli-Behror", "Nagaur", "Neem Ka Thana", "Pali", "Phalodi", "Pratapgarh", "Rajsamand", "Salumbar", "Sanchore", "Sawai Madhopur", "Shahpura", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"],
  "Sikkim": ["Gangtok", "Gyalshing", "Mangan", "Namchi", "Pakyong", "Soreng"],
  "Tamil Nadu": ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kancheepuram", "Kanniyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"],
  "Telangana": ["Adilabad", "Bhadradri Kothagudem", "Hanumakonda", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Kumuram Bheem Asifabad", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal-Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Rangareddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal", "Yadadri Bhuvanagiri"],
  "Tripura": ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"],
  "Uttar Pradesh": ["Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Ayodhya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kheri", "Kushinagar", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Prayagraj", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"],
  "Uttarakhand": ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"],
  "West Bengal": ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"]
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

  if (page === "profile") {
    initProfilePage();
  }

  if (page === "edit-profile") {
    initEditPage();
  }
});

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

function initProfilePage() {
  const profile = loadProfile();
  const editButton = document.getElementById("editProfileBtn");

  editButton.addEventListener("click", () => {
    window.location.href = "edit-profile.html";
  });

  setAvatar("profilePhotoView", "profileInitials", profile.profilePhoto, profile.fullName);
  setText("profileNameHeading", profile.fullName || "Your Name");
  setText("profileUserTypeHeading", profile.userType ? `${profile.userType} Profile` : "Profile details");
  setText("viewFullName", profile.fullName);
  setText("viewDob", formatDate(profile.dob));
  setText("viewGender", profile.gender);
  setText("viewMobile", profile.mobile);
  setText("viewState", profile.state);
  setText("viewDistrict", profile.district);
  setText("viewAddress", profile.address);
  setText("viewUserType", profile.userType);
  setText("viewDocumentType", profile.documentType);
  renderDocumentPreview("viewDocumentPreview", profile.documentName, profile.documentData, profile.documentMime);

  const farmerDetails = document.getElementById("farmerDetailsView");
  const buyerDetails = document.getElementById("buyerDetailsView");
  farmerDetails.hidden = profile.userType !== "Farmer";
  buyerDetails.hidden = profile.userType !== "Buyer";

  if (profile.userType === "Farmer") {
    setText("viewFarmerType", profile.farmerType);
    setText("viewLandArea", [profile.landArea, profile.landUnit].filter(Boolean).join(" "));
  }

  if (profile.userType === "Buyer") {
    setText("viewBuyerType", profile.buyerType);
    setText("viewBusinessName", profile.businessName);
    setText("viewBusinessAddress", profile.businessAddress);
    setText("viewGstNumber", profile.gstNumber || "Not provided");
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
    setMobileVerified(profile.mobileVerified === true, profile.mobileVerified === true ? "Mobile number verified" : "");
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
      rejectDocumentFile(documentFile, "Please upload a valid document file (JPG, PNG, or PDF)");
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
      rejectProfilePhoto(profilePhotoInput, "Please upload a valid human profile photo");
      return;
    }

    readFileAsDataUrl(file, (dataUrl) => {
      validateProfilePhotoImage(dataUrl, file, (isLikelyHumanPhoto) => {
        if (!isLikelyHumanPhoto) {
          rejectProfilePhoto(profilePhotoInput, "Please upload a valid human profile photo");
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
      rejectDocumentFile(documentFile, "Select document type before uploading.");
      return;
    }

    if (!isAllowedDocumentFile(file) || !isDocumentFileLogical(file, valueOf("documentType"))) {
      rejectDocumentFile(documentFile, "Please upload a valid document file (JPG, PNG, or PDF)");
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
  districtSelect.innerHTML = '<option value="">Select district</option>';

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

  if (!name) valid = setError("fullNameError", "Full name is required.");
  if (name.length > 50) valid = setError("fullNameError", "Full name must be 50 characters or fewer.");
  if (!valueOf("dob")) valid = setError("dobError", "Date of birth is required.");
  if (!valueOf("gender")) valid = setError("genderError", "Gender is required.");
  if (!isValidMobileNumber(mobile)) valid = setError("mobileError", "Invalid mobile number");
  if (mobile !== originalMobile && !isMobileVerified()) valid = setError("mobileError", "Verify OTP before saving the changed mobile number.");
  if (!valueOf("state")) valid = setError("stateError", "State is required.");
  if (!valueOf("district")) valid = setError("districtError", "District is required.");
  if (!address) valid = setError("addressError", "Address line is required.");
  if (/[!@#$%^&*]/.test(address)) valid = setError("addressError", "Invalid characters in address");
  if (!userType) valid = setError("userTypeError", "User type is required.");

  if (userType === "Farmer") {
    if (!valueOf("farmerType")) valid = setError("farmerTypeError", "Farmer type is required.");
    if (!valueOf("landArea") || Number(valueOf("landArea")) <= 0) valid = setError("landAreaError", "Enter a valid land area.");
    if (!valueOf("landUnit")) valid = setError("landUnitError", "Land unit is required.");
  }

  if (userType === "Buyer") {
    if (!buyerType) valid = setError("buyerTypeError", "Buyer type is required.");
    if (!valueOf("businessName")) valid = setError("businessNameError", "Business name is required.");
    if (!valueOf("businessAddress")) valid = setError("businessAddressError", "Business address is required.");
    if (buyerType === "Company" && !valueOf("gstNumber")) valid = setError("gstNumberError", "GST number is required for companies.");
  }

  if (!valueOf("documentType")) valid = setError("documentTypeError", "Document type is required.");
  if (document.getElementById("documentFile").files[0] && (!isAllowedDocumentFile(document.getElementById("documentFile").files[0]) || !isDocumentFileLogical(document.getElementById("documentFile").files[0], valueOf("documentType")))) {
    valid = setError("documentFileError", "Please upload a valid document file (JPG, PNG, or PDF)");
  }
  if (!document.getElementById("documentFile").files[0] && !loadProfile().documentName) {
    valid = setError("documentFileError", "Upload a document.");
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
    setError("mobileError", "Invalid mobile number");
    return false;
  }

  clearError("mobileError");

  if (value === originalMobile) {
    setMobileVerified(true, "Mobile number verified");
    hideOtpPanel();
    return true;
  }

  setMobileVerified(false, "Mobile number verified", "success");
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
    status.textContent = "Mobile number verified";
    hideOtpPanel();
    clearError("mobileError");
  } else {
    setMobileVerified(false);
    setError("mobileError", "Enter the correct OTP.");
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
      timer.textContent = "Ready";
      resendButton.disabled = false;
    }
  }, 1000);
}

function setMobileVerified(isVerified, message, tone) {
  const mobile = document.getElementById("mobile");
  const status = document.getElementById("mobileStatus");
  mobile.dataset.verified = String(isVerified);
  status.textContent = message !== undefined ? message : isVerified ? "Mobile number verified" : "OTP verification required";
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
    img.alt = `${name || "User"} profile photo`;
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
    preview.textContent = "No document uploaded";
    return;
  }

  if (dataUrl && mimeType && mimeType.startsWith("image/")) {
    const img = document.createElement("img");
    img.src = dataUrl;
    img.alt = fileName || "Uploaded document";
    preview.appendChild(img);
    return;
  }

  preview.textContent = fileName || "Document uploaded";
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

  // Lightweight frontend simulation: reject tiny, extreme-ratio, or random-looking images.
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

  // Basic guard only: reject files that are clearly named as a different document type.
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
  // Keep removal immediate so a deleted asset is not restored by a later page refresh.
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
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

function getInitials(name) {
  if (!name) return "FB";
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "FB";
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
