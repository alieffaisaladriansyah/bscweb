import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold mb-4 block">
              Busalime
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-white/80 hover:text-accent transition-colors text-sm"
                >
                  {t("nav.home")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-white/80 hover:text-accent transition-colors text-sm"
                >
                  {t("nav.products")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("tips")}
                  className="text-white/80 hover:text-accent transition-colors text-sm"
                >
                  {t("nav.tips")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white/80 hover:text-accent transition-colors text-sm"
                >
                  {t("nav.contact")}
                </button>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("footer.shop")}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://shopee.co.id/gadgetplus69?entryPoint=ShopBySearch&searchKeyword=gadgetplus69"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-accent transition-colors text-sm"
                >
                  Shopee
                </a>
              </li>
              <li>
                <a
                  href="https://tokopedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-accent transition-colors text-sm"
                >
                  Tokopedia
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              {t("footer.contactInfo")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-white/80">
                {t("contact.phone")}: 08123456789
              </li>
              <li className="text-white/80">
                {t("contact.email")}: busalime@gmail.com
              </li>
              <li className="text-white/80">Indramayu, Indonesia</li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/80 text-sm text-center md:text-left">
            {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-2">
            <img src="/faviconfooter.png" alt="Busalime" className="w-20 h-20" />
            <span className="text-white/80 text-sm">{t("footer.natural")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
