import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ShoppingCart } from "lucide-react";
import shopeeLogo from "@/assets/shopee-logo.png";
import tokopediaLogo from "@/assets/tokopedia-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import productLime from "@/assets/product-lime.jpg";
import productLemon from "@/assets/product-lemon.jpg";
import productApple from "@/assets/product-apple.jpg";

const Products = () => {
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: t("products.lime.name"),
      description: t("products.lime.desc"),
      features: [
        t("products.feature1"),
        t("products.feature2"),
        t("products.feature3"),
      ],
      image: productLime,
    },
    {
      id: 2,
      name: t("products.lemon.name"),
      description: t("products.lemon.desc"),
      features: [
        t("products.feature4"),
        t("products.feature5"),
        t("products.feature6"),
      ],
      image: productLemon,
    },
    {
      id: 3,
      name: t("products.apple.name"),
      description: t("products.apple.desc"),
      features: [
        t("products.feature7"),
        t("products.feature8"),
        t("products.feature9"),
      ],
      image: productApple,
    },
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t("products.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("products.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="hover:shadow-2xl transition-all duration-300 animate-slide-up overflow-hidden border-2 hover:border-accent bg-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gambar produk */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Shadow hitam lembut di bawah gambar */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Konten produk */}
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* Tombol beli */}
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all"
                      onClick={() => setSelectedProduct(product.id)}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      {t("products.buyNow")}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>
                        {t("products.whereToBuy")} {product.name}
                      </DialogTitle>
                      <DialogDescription>
                        {t("products.chooseShop")}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="flex flex-col gap-4 py-4">
                      <a
                        href="https://shopee.co.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 border-2 rounded-lg hover:border-accent hover:bg-accent/5 transition-all"
                      >
                        <img
                          src={shopeeLogo}
                          alt="Shopee"
                          className="w-12 h-12"
                        />
                        <div>
                          <div className="font-semibold">
                            {t("products.shopee")}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {t("products.shopee.desc")}
                          </div>
                        </div>
                      </a>

                      <a
                        href="https://tokopedia.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 border-2 rounded-lg hover:border-accent hover:bg-accent/5 transition-all"
                      >
                        <img
                          src={tokopediaLogo}
                          alt="Tokopedia"
                          className="w-12 h-12"
                        />
                        <div>
                          <div className="font-semibold">
                            {t("products.tokopedia")}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {t("products.tokopedia.desc")}
                          </div>
                        </div>
                      </a>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
