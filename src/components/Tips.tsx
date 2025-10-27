import { Lightbulb, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';

const Tips = () => {
  const { t } = useLanguage();

  const washingTips = [
    {
      title: t('tips.tip1.title'),
      description: t('tips.tip1.desc'),
    },
    {
      title: t('tips.tip2.title'),
      description: t('tips.tip2.desc'),
    },
    {
      title: t('tips.tip3.title'),
      description: t('tips.tip3.desc'),
    },
    {
      title: t('tips.tip4.title'),
      description: t('tips.tip4.desc'),
    },
  ];

  const safetyTips = [
    {
      title: t('tips.safety1.title'),
      description: t('tips.safety1.desc'),
    },
    {
      title: t('tips.safety2.title'),
      description: t('tips.safety2.desc'),
    },
    {
      title: t('tips.safety3.title'),
      description: t('tips.safety3.desc'),
    },
    {
      title: t('tips.safety4.title'),
      description: t('tips.safety4.desc'),
    },
  ];
  return (
    <section id="tips" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('tips.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('tips.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="tips" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="tips" className="text-base">
                <Lightbulb className="w-4 h-4 mr-2" />
                {t('tips.washingTips')}
              </TabsTrigger>
              <TabsTrigger value="safety" className="text-base">
                <Shield className="w-4 h-4 mr-2" />
                {t('tips.washingSafety')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tips" className="space-y-4 animate-fade-in">
              {washingTips.map((tip, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 border-2 hover:border-accent"
                >
                  <CardHeader>
                    <CardTitle className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                      <span>{tip.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base ml-11">{tip.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="safety" className="space-y-4 animate-fade-in">
              {safetyTips.map((tip, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 border-2 hover:border-accent"
                >
                  <CardHeader>
                    <CardTitle className="flex items-start gap-3">
                      <Shield className="flex-shrink-0 w-8 h-8 text-primary" />
                      <span>{tip.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base ml-11">{tip.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Tips;
