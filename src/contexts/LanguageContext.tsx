import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check localStorage first
    const saved = localStorage.getItem("language") as Language;
    if (saved) return saved;

    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith("id") ? "id" : "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    const translations = language === "id" ? idTranslations : enTranslations;
    return translations[key] || key;
  };

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const idTranslations: Record<string, string> = {
  // Navbar
  "nav.home": "Beranda",
  "nav.products": "Produk",
  "nav.shop": "Belanja",
  "nav.tips": "Tips & Topik",
  "nav.contact": "Kontak",
  "nav.washingTips": "Tips & Trik Mencuci",
  "nav.washingSafety": "Keamanan Mencuci",

  // Hero
  "hero.title": "Bersih Berkilau dengan Busalime",
  "hero.subtitle": "Cairan pencuci piring dengan bahan yang lembut di tangan.",
  "hero.cta": "Jelajahi Produk Kami",

  // About
  "about.title": "Mengapa Memilih Busalime?",
  "about.subtitle":
    "Rasakan perpaduan sempurna antara alam dan sains dalam setiap tetes",
  "about.eco.title": "Bahan ramah lingkungan",
  "about.eco.desc":
    "Terbuat dari bahan alami dan biodegradable yang aman untuk lingkungan dan keluarga Anda.",
  "about.tough.title": "Kuat pada lemak, lembut pada kulit",
  "about.tough.desc":
    "Formula pembersih yang kuat memotong lemak sambil tetap lembut di tangan Anda.",
  "about.scent.title": "Aroma jeruk yang menyegarkan",
  "about.scent.desc":
    "Nikmati aroma segar dan menyegarkan dari jeruk nipis, lemon, dan apel di setiap pencucian.",

  // Products
  "products.title": "Produk Kami",
  "products.subtitle":
    "Pilih aroma favorit Anda dan rasakan perbedaan Busalime",
  "products.lime.name": "Busalime Jeruk Nipis",
  "products.lime.desc":
    "Aroma jeruk nipis segar dan zesty untuk kebersihan alami",
  "products.lemon.name": "Busalime Lemon",
  "products.lemon.desc":
    "Aroma lemon yang harum dan efektif untuk membersihkan",
  "products.apple.name": "Busalime Apel",
  "products.apple.desc": "Aroma apel segar untuk kebersihan yang menyegarkan",
  "products.feature1": "Ekstrak alami",
  "products.feature2": "Kesegaran tahan lama",
  "products.feature3": "Memotong lemak secara efektif",
  "products.feature4": "Esensi murni",
  "products.feature5": "Sifat antibakteri",
  "products.feature6": "Lembut di tangan",
  "products.feature7": "Wangi apel hijau",
  "products.feature8": "Daya pembersih ekstra",
  "products.feature9": "Formula ramah lingkungan",
  "products.buyNow": "Beli Sekarang",
  "products.whereToBuy": "Tempat Membeli",
  "products.chooseShop": "Pilih platform belanja favorit Anda",
  "products.shopee": "Belanja di Shopee",
  "products.shopee.desc": "Shopee/Busalime Official",
  "products.tokopedia": "Belanja di Tokopedia",
  "products.tokopedia.desc": "Tokopedia/Busalime Official",

  // Tips
  "tips.title": "Tips & Topik",
  "tips.subtitle": "Saran ahli untuk pengalaman mencuci piring terbaik",
  "tips.washingTips": "Tips & Trik Mencuci",
  "tips.washingSafety": "Keamanan Mencuci",
  "tips.tip1.title": "Rendam Piring Berlemak",
  "tips.tip1.desc":
    "Biarkan piring yang sangat kotor direndam dalam air hangat dengan beberapa tetes Busalime selama 10-15 menit sebelum dicuci.",
  "tips.tip2.title": "Gunakan Jumlah yang Tepat",
  "tips.tip2.desc":
    "Sedikit saja sudah cukup! Mulailah dengan jumlah kecil dan tambahkan lebih banyak hanya jika diperlukan untuk menghindari pemborosan.",
  "tips.tip3.title": "Air Panas untuk Hasil Terbaik",
  "tips.tip3.desc":
    "Air hangat atau panas membantu mengaktifkan agen pembersih dan memotong lemak lebih efektif.",
  "tips.tip4.title": "Bersihkan Sambil Memasak",
  "tips.tip4.desc":
    "Cuci peralatan dan piring saat Anda selesai menggunakannya untuk mencegah makanan mengering dan menempel.",
  "tips.safety1.title": "Jauhkan dari Jangkauan Anak-anak",
  "tips.safety1.desc":
    "Simpan Busalime di tempat yang aman jauh dari anak-anak dan hewan peliharaan untuk mencegah konsumsi yang tidak disengaja.",
  "tips.safety2.title": "Hindari Kontak dengan Mata",
  "tips.safety2.desc":
    "Jika produk masuk ke mata, segera bilas dengan banyak air dan cari bantuan medis jika iritasi berlanjut.",
  "tips.safety3.title": "Gunakan di Area Berventilasi",
  "tips.safety3.desc":
    "Pastikan ventilasi yang baik saat menggunakan produk, terutama saat mencuci piring dalam jumlah besar.",
  "tips.safety4.title": "Bilas dengan Seksama",
  "tips.safety4.desc":
    "Selalu bilas piring secara menyeluruh dengan air bersih setelah dicuci untuk menghilangkan semua residu deterjen.",

  // Contact
  "contact.title": "Hubungi Kami",
  "contact.subtitle": "Ada pertanyaan? Kami senang mendengar dari Anda.",
  "contact.info": "Informasi Kontak",
  "contact.info.desc": "Hubungi kami melalui salah satu saluran ini",
  "contact.phone": "Telepon",
  "contact.email": "Email",
  "contact.address": "Alamat",
  "contact.form.title": "Kirim Pesan",
  "contact.form.desc":
    "Isi formulir di bawah ini dan kami akan merespons sesegera mungkin",
  "contact.form.name": "Nama",
  "contact.form.name.placeholder": "Nama Anda",
  "contact.form.email": "Email",
  "contact.form.email.placeholder": "email@anda.com",
  "contact.form.message": "Pesan",
  "contact.form.message.placeholder": "Bagaimana kami bisa membantu Anda?",
  "contact.form.submit": "Kirim Pesan",
  "contact.form.success.title": "Pesan Terkirim!",
  "contact.form.success.desc":
    "Terima kasih telah menghubungi kami. Kami akan segera menghubungi Anda kembali.",

  // Footer
  "footer.tagline":
    "Cairan pencuci piring lembut dan efektif bersihkan lemak pada alat dapur.",
  "footer.quickLinks": "Navigasi",
  "footer.shop": "Belanja disini",
  "footer.contactInfo": "Informasi Kontak",
  "footer.copyright": "© 2025 Busalime. Hak cipta dilindungi.",
  "footer.natural": "PT.Busalime Sukses Cemerlang",
};

const enTranslations: Record<string, string> = {
  // Navbar
  "nav.home": "Home",
  "nav.products": "Products",
  "nav.shop": "Shop",
  "nav.tips": "Tips & Topics",
  "nav.contact": "Contact",
  "nav.washingTips": "Washing Tips & Tricks",
  "nav.washingSafety": "Washing Safety",

  // Hero
  "hero.title": "Sparkling Clean with Busalime",
  "hero.subtitle": "Dishwashing liquid gentle on hands.",
  "hero.cta": "Explore Our Products",

  // About
  "about.title": "Why Choose Busalime?",
  "about.subtitle":
    "Experience the perfect blend of nature and science in every drop",
  "about.eco.title": "Eco-friendly ingredients",
  "about.eco.desc":
    "Made with natural, biodegradable ingredients that are safe for the environment and your family.",
  "about.tough.title": "Tough on grease, gentle on skin",
  "about.tough.desc":
    "Powerful cleaning formula that cuts through grease while being gentle on your hands.",
  "about.scent.title": "Refreshing citrus scents",
  "about.scent.desc":
    "Enjoy the fresh, invigorating aromas of lime, lemon, and apple with every wash.",

  // Products
  "products.title": "Our Products",
  "products.subtitle":
    "Choose your favorite scent and experience the Busalime difference",
  "products.lime.name": "Busalime Lime",
  "products.lime.desc": "Fresh and zesty lime fragrance for a natural clean",
  "products.lemon.name": "Busalime Lemon",
  "products.lemon.desc": "Bright lemon scent that energizes your dishwashing",
  "products.apple.name": "Busalime Apple",
  "products.apple.desc": "Crisp apple aroma for a refreshing clean",
  "products.feature1": "Natural lime extract",
  "products.feature2": "Long-lasting freshness",
  "products.feature3": "Cuts grease effectively",
  "products.feature4": "Pure lemon essence",
  "products.feature5": "Antibacterial properties",
  "products.feature6": "Gentle on hands",
  "products.feature7": "Green apple fragrance",
  "products.feature8": "Extra cleaning power",
  "products.feature9": "Eco-friendly formula",
  "products.buyNow": "Buy Now",
  "products.whereToBuy": "Where to Buy",
  "products.chooseShop": "Choose your preferred shopping platform",
  "products.shopee": "Shop on Shopee",
  "products.shopee.desc": "Shopee/Busalime Official",
  "products.tokopedia": "Shop on Tokopedia",
  "products.tokopedia.desc": "Tokopedia/Busalime Official",

  // Tips
  "tips.title": "Tips & Topics",
  "tips.subtitle": "Expert advice for the best dishwashing experience",
  "tips.washingTips": "Washing Tips & Tricks",
  "tips.washingSafety": "Washing Safety",
  "tips.tip1.title": "Pre-Soak Greasy Dishes",
  "tips.tip1.desc":
    "Let heavily soiled dishes soak in warm water with a few drops of Busalime for 10-15 minutes before washing.",
  "tips.tip2.title": "Use the Right Amount",
  "tips.tip2.desc":
    "A little goes a long way! Start with a small amount and add more only if needed to avoid waste.",
  "tips.tip3.title": "Hot Water for Best Results",
  "tips.tip3.desc":
    "Warm or hot water helps activate the cleaning agents and cuts through grease more effectively.",
  "tips.tip4.title": "Clean as You Cook",
  "tips.tip4.desc":
    "Wash utensils and dishes as you finish using them to prevent food from drying and sticking.",
  "tips.safety1.title": "Keep Out of Reach of Children",
  "tips.safety1.desc":
    "Store Busalime in a secure location away from children and pets to prevent accidental ingestion.",
  "tips.safety2.title": "Avoid Contact with Eyes",
  "tips.safety2.desc":
    "If product gets in eyes, rinse immediately with plenty of water and seek medical attention if irritation persists.",
  "tips.safety3.title": "Use in Ventilated Areas",
  "tips.safety3.desc":
    "Ensure good ventilation when using the product, especially when washing large quantities of dishes.",
  "tips.safety4.title": "Rinse Thoroughly",
  "tips.safety4.desc":
    "Always rinse dishes thoroughly with clean water after washing to remove all detergent residue.",

  // Contact
  "contact.title": "Reach Us",
  "contact.subtitle": "Have questions? We would love to hear from you.",
  "contact.info": "Contact Information",
  "contact.info.desc": "Reach out to us through any of these channels",
  "contact.phone": "Phone",
  "contact.email": "Email",
  "contact.address": "Address",
  "contact.form.title": "Send Us a Message",
  "contact.form.desc":
    "Fill out the form below and we will respond as soon as possible",
  "contact.form.name": "Name",
  "contact.form.name.placeholder": "Your name",
  "contact.form.email": "Email",
  "contact.form.email.placeholder": "your@email.com",
  "contact.form.message": "Message",
  "contact.form.message.placeholder": "How can we help you?",
  "contact.form.submit": "Send Message",
  "contact.form.success.title": "Message Sent!",
  "contact.form.success.desc":
    "Thank you for contacting us. We will get back to you soon.",

  // Footer
  "footer.tagline":
    "Dishwashing liquid gently and effectively cleans grease on kitchen utensils..",
  "footer.quickLinks": "Navigation",
  "footer.shop": "Shop Here",
  "footer.contactInfo": "Contact Info",
  "footer.copyright": "© 2025 Busalime. All rights reserved.",
  "footer.natural": "PT.Busalime Sukses Cemerlang",
};
