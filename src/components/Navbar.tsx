import { useState, useEffect } from "react";
import { Menu, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import shopeeLogo from "@/assets/shopee-logo.png";
import tokopediaLogo from "@/assets/tokopedia-logo.png";
import logonav from "@/assets/logonav.png"; // logo busalime navbar

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-primary shadow-lg" : "bg-primary/0"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="cursor-pointer"
          >
            <img src={logonav} alt="Logo" className="h-20 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10">
                    {t("nav.products")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4">
                      <div className="space-y-2">
                        <button
                          onClick={() => scrollToSection("products")}
                          className="block w-full text-left px-4 py-2 hover:bg-accent/10 rounded-md transition-colors"
                        >
                          <div className="font-medium">
                            {t("products.lime.name")}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {t("products.lime.desc")}
                          </div>
                        </button>
                        <button
                          onClick={() => scrollToSection("products")}
                          className="block w-full text-left px-4 py-2 hover:bg-accent/10 rounded-md transition-colors"
                        >
                          <div className="font-medium">
                            {t("products.lemon.name")}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {t("products.lemon.desc")}
                          </div>
                        </button>
                        <button
                          onClick={() => scrollToSection("products")}
                          className="block w-full text-left px-4 py-2 hover:bg-accent/10 rounded-md transition-colors"
                        >
                          <div className="font-medium">
                            {t("products.apple.name")}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {t("products.apple.desc")}
                          </div>
                        </button>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10">
                    {t("nav.shop")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[300px] p-4">
                      <div className="space-y-2">
                        <a
                          href="https://shopee.co.id/gadgetplus69?entryPoint=ShopBySearch&searchKeyword=gadgetplus69"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-3 hover:bg-accent/10 rounded-md transition-colors"
                        >
                          <img
                            src={shopeeLogo}
                            alt="Shopee"
                            className="w-8 h-8"
                          />
                          <span className="font-medium">Shopee</span>
                        </a>
                        <a
                          href="https://tokopedia.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-3 hover:bg-accent/10 rounded-md transition-colors"
                        >
                          <img
                            src={tokopediaLogo}
                            alt="Tokopedia"
                            className="w-8 h-8"
                          />
                          <span className="font-medium">Tokopedia</span>
                        </a>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10">
                    {t("nav.tips")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[300px] p-4">
                      <div className="space-y-2">
                        <button
                          onClick={() => scrollToSection("tips")}
                          className="block w-full text-left px-4 py-2 hover:bg-accent/10 rounded-md transition-colors"
                        >
                          <div className="font-medium">
                            {t("nav.washingTips")}
                          </div>
                        </button>
                        <button
                          onClick={() => scrollToSection("tips")}
                          className="block w-full text-left px-4 py-2 hover:bg-accent/10 rounded-md transition-colors"
                        >
                          <div className="font-medium">
                            {t("nav.washingSafety")}
                          </div>
                        </button>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-accent transition-colors"
            >
              {t("nav.contact")}
            </button>

            {/* Language Toggle */}
            <div className="flex items-center gap-2 border-l border-white/20 pl-6">
              <Languages className="w-4 h-4 text-white" />
              <button
                onClick={() => setLanguage("id")}
                className={`text-sm font-medium transition-colors ${
                  language === "id"
                    ? "text-accent"
                    : "text-white/60 hover:text-white"
                }`}
              >
                ID
              </button>
              <span className="text-white/40">|</span>
              <button
                onClick={() => setLanguage("en")}
                className={`text-sm font-medium transition-colors ${
                  language === "en"
                    ? "text-accent"
                    : "text-white/60 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-primary border-primary-foreground/20"
            >
              <div className="flex flex-col space-y-4 mt-8">
                {/* Language Toggle Mobile */}
                <div className="flex items-center gap-3 pb-4 border-b border-white/20">
                  <Languages className="w-5 h-5 text-white" />
                  <button
                    onClick={() => setLanguage("id")}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      language === "id"
                        ? "bg-accent text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    ID
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      language === "en"
                        ? "bg-accent text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    EN
                  </button>
                </div>

                <div className="space-y-2">
                  <div className="text-white font-medium">
                    {t("nav.products")}
                  </div>
                  <button
                    onClick={() => scrollToSection("products")}
                    className="text-white/80 text-left py-1 pl-4 hover:text-accent transition-colors block"
                  >
                    {t("products.lime.name")}
                  </button>
                  <button
                    onClick={() => scrollToSection("products")}
                    className="text-white/80 text-left py-1 pl-4 hover:text-accent transition-colors block"
                  >
                    {t("products.lemon.name")}
                  </button>
                  <button
                    onClick={() => scrollToSection("products")}
                    className="text-white/80 text-left py-1 pl-4 hover:text-accent transition-colors block"
                  >
                    {t("products.apple.name")}
                  </button>
                </div>

                <div className="space-y-2">
                  <div className="text-white font-medium">{t("nav.shop")}</div>
                  <a
                    href="https://shopee.co.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/80 py-1 pl-4 hover:text-accent transition-colors"
                  >
                    <img src={shopeeLogo} alt="Shopee" className="w-6 h-6" />
                    Shopee
                  </a>
                  <a
                    href="https://tokopedia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/80 py-1 pl-4 hover:text-accent transition-colors"
                  >
                    <img
                      src={tokopediaLogo}
                      alt="Tokopedia"
                      className="w-6 h-6"
                    />
                    Tokopedia
                  </a>
                </div>

                <div className="space-y-2">
                  <div className="text-white font-medium">{t("nav.tips")}</div>
                  <button
                    onClick={() => scrollToSection("tips")}
                    className="text-white/80 text-left py-1 pl-4 hover:text-accent transition-colors block"
                  >
                    {t("nav.washingTips")}
                  </button>
                  <button
                    onClick={() => scrollToSection("tips")}
                    className="text-white/80 text-left py-1 pl-4 hover:text-accent transition-colors block"
                  >
                    {t("nav.washingSafety")}
                  </button>
                </div>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white text-left py-2 hover:text-accent transition-colors"
                >
                  {t("nav.contact")}
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
