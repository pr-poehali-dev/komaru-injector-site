import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const screenshots = [
    {
      url: "https://cdn.poehali.dev/projects/4ba3c8b0-3f7d-4b91-b2a6-eadbccf069a0/files/65e69bbb-450e-4e91-9b97-54387b11baea.jpg",
      title: "ESP Визуализация",
      description: "Видимость противников через стены"
    },
    {
      url: "https://cdn.poehali.dev/projects/4ba3c8b0-3f7d-4b91-b2a6-eadbccf069a0/files/d7efd61d-9d0b-413f-833e-a266ad2ac6de.jpg",
      title: "Smart Aimbot",
      description: "Автоматическое наведение на цель"
    },
    {
      url: "https://cdn.poehali.dev/projects/4ba3c8b0-3f7d-4b91-b2a6-eadbccf069a0/files/b49ce9f6-6b63-4775-9995-a5342db02060.jpg",
      title: "Настройки чита",
      description: "Полный контроль над функциями"
    }
  ];

  const features = [
    {
      icon: "Eye",
      title: "ESP Визуализация",
      description: "Видимость врагов через стены с подсветкой хитбоксов и оружия"
    },
    {
      icon: "Target",
      title: "Smart Aimbot",
      description: "Интеллектуальная система автонаведения с настройкой FOV и smooth"
    },
    {
      icon: "Zap",
      title: "No Recoil",
      description: "Полное отсутствие отдачи для точных выстрелов на любой дистанции"
    },
    {
      icon: "Shield",
      title: "Anti-Ban",
      description: "Продвинутая защита от античита и обнаружения"
    },
    {
      icon: "Gauge",
      title: "Speed Hack",
      description: "Увеличенная скорость передвижения для быстрой игры"
    },
    {
      icon: "Crosshair",
      title: "Triggerbot",
      description: "Автоматическая стрельба при наведении на противника"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/4ba3c8b0-3f7d-4b91-b2a6-eadbccf069a0/files/4643c08a-934c-4d47-8058-ec1d25664894.jpg')" }}
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30 pointer-events-none" />
      
      <div className="relative z-10">
        <header className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center glow-primary">
                <Icon name="Code2" size={24} className="text-background" />
              </div>
              <h1 className="text-2xl font-black text-glow">KomaruExternal</h1>
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-background transition-all glow-primary">
              <Icon name="Download" size={18} className="mr-2" />
              Скачать
            </Button>
          </nav>
        </header>

        <section className="container mx-auto px-4 py-24 text-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/20 border border-primary rounded-full text-sm font-semibold text-primary glow-primary">
              <Icon name="Shield" size={16} className="inline mr-2" />
              Необнаруживаемый чит для Standoff 2
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              DOMINATE<br />THE GAME
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Профессиональный инжектор с расширенными функциями для полного контроля над игрой. 
              Обновляется каждую неделю.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-background font-bold text-lg px-8 py-6 glow-primary animate-pulse-glow">
                <Icon name="Download" size={24} className="mr-2" />
                Скачать KomaruExternal
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-background font-semibold text-lg px-8 py-6">
                <Icon name="Video" size={24} className="mr-2" />
                Видео обзор
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Users" size={18} className="text-primary" />
                <span>50K+ активных пользователей</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Star" size={18} className="text-secondary" />
                <span>Рейтинг 4.9/5</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={18} className="text-accent" />
                <span>100% Anti-Ban</span>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-24">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-black mb-4 text-glow">
              ВОЗМОЖНОСТИ ЧИТА
            </h3>
            <p className="text-muted-foreground text-lg">
              Все инструменты для доминирования на серверах
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:glow-primary group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:glow-primary transition-all">
                    <Icon name={feature.icon} size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-24 bg-gradient-to-b from-transparent to-primary/5">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-black mb-4 text-glow">
              СМОТРИ В ДЕЙСТВИИ
            </h3>
            <p className="text-muted-foreground text-lg">
              Видео демонстрация возможностей чита
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-primary/30 glow-primary">
              <div className="aspect-video bg-card relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:glow-primary transition-all group-hover:scale-110">
                      <Icon name="Play" size={40} className="text-primary ml-1" />
                    </div>
                    <p className="text-xl font-bold text-primary">Смотреть демонстрацию</p>
                    <p className="text-sm text-muted-foreground mt-2">Полный обзор всех функций</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 py-24">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-black mb-4 text-glow">
              СКРИНШОТЫ
            </h3>
            <p className="text-muted-foreground text-lg">
              Реальные примеры работы инжектора
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            {screenshots.map((screenshot, index) => (
              <Card 
                key={index}
                className="overflow-hidden border-border hover:border-primary transition-all duration-300 hover:glow-primary group cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={screenshot.url} 
                    alt={screenshot.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                    {screenshot.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {screenshot.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-24 bg-gradient-to-b from-transparent to-accent/5">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-black mb-4 text-glow">
              СИСТЕМНЫЕ ТРЕБОВАНИЯ
            </h3>
            <p className="text-muted-foreground text-lg">
              Убедись, что твой ПК соответствует минимальным требованиям
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-card border-primary/30 hover:glow-primary transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                  <Icon name="Check" size={24} className="text-secondary" />
                </div>
                <h4 className="text-2xl font-black text-secondary">Минимальные</h4>
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Icon name="Cpu" size={18} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Процессор</p>
                    <p className="text-muted-foreground">Intel Core i3 / AMD Ryzen 3</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MemoryStick" size={18} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Оперативная память</p>
                    <p className="text-muted-foreground">4 GB RAM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="HardDrive" size={18} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Место на диске</p>
                    <p className="text-muted-foreground">50 MB свободного места</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MonitorSmartphone" size={18} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Операционная система</p>
                    <p className="text-muted-foreground">Windows 10 64-bit</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-accent/30 hover:glow-accent transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <Icon name="Zap" size={24} className="text-accent" />
                </div>
                <h4 className="text-2xl font-black text-accent">Рекомендуемые</h4>
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Icon name="Cpu" size={18} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Процессор</p>
                    <p className="text-muted-foreground">Intel Core i5 / AMD Ryzen 5</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MemoryStick" size={18} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Оперативная память</p>
                    <p className="text-muted-foreground">8 GB RAM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="HardDrive" size={18} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Место на диске</p>
                    <p className="text-muted-foreground">100 MB свободного места</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MonitorSmartphone" size={18} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Операционная система</p>
                    <p className="text-muted-foreground">Windows 11 64-bit</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 py-24">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-black mb-4 text-glow">
              ИНСТРУКЦИЯ ПО УСТАНОВКЕ
            </h3>
            <p className="text-muted-foreground text-lg">
              Следуй простым шагам для запуска чита
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Скачай инжектор",
                description: "Нажми на кнопку 'Скачать KomaruExternal' и сохрани файл на свой компьютер",
                icon: "Download"
              },
              {
                step: "02",
                title: "Отключи антивирус",
                description: "Временно отключи Windows Defender и другие антивирусы для корректной работы",
                icon: "ShieldOff"
              },
              {
                step: "03",
                title: "Запусти инжектор",
                description: "Открой скачанный файл от имени администратора (правой кнопкой мыши)",
                icon: "Play"
              },
              {
                step: "04",
                title: "Настрой функции",
                description: "Выбери нужные функции в меню чита: ESP, Aimbot, No Recoil и другие",
                icon: "Settings"
              },
              {
                step: "05",
                title: "Запусти Standoff 2",
                description: "Открой игру и наслаждайся преимуществами. Чит активируется автоматически",
                icon: "Gamepad2"
              }
            ].map((step, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:glow-primary group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary group-hover:scale-110 transition-transform">
                      <Icon name={step.icon} size={28} className="text-background" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl font-black text-primary/30">{step.step}</span>
                      <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block p-6 bg-accent/10 border-accent/30">
              <div className="flex items-center gap-3">
                <Icon name="AlertCircle" size={24} className="text-accent" />
                <div className="text-left">
                  <p className="font-semibold text-accent">Важно!</p>
                  <p className="text-sm text-muted-foreground">Используй чит ответственно и на свой страх и риск</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 py-24 bg-gradient-to-b from-transparent to-primary/5">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-black mb-4 text-glow">
              ОТЗЫВЫ ИГРОКОВ
            </h3>
            <p className="text-muted-foreground text-lg">
              Что говорят пользователи KomaruExternal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "ProGamer2024",
                rating: 5,
                text: "Лучший чит для SO2! Использую уже 3 месяца, ни одного бана. ESP работает идеально, вижу всех через стены. Советую!",
                avatar: "👾"
              },
              {
                name: "DarkSniper",
                rating: 5,
                text: "Аимбот просто огонь! Настройки гибкие, можно сделать незаметным. Поддержка отвечает быстро. 10/10",
                avatar: "🎯"
              },
              {
                name: "CyberWarrior",
                rating: 5,
                text: "Топовый инжектор, все функции работают стабильно. No Recoil - просто космос. Обновления выходят регулярно.",
                avatar: "⚡"
              },
              {
                name: "ShadowHunter",
                rating: 5,
                text: "Пользуюсь 2 недели - полный восторг! Anti-Ban реально защищает. Играю спокойно на основном аккаунте.",
                avatar: "🔥"
              },
              {
                name: "NightKiller",
                rating: 5,
                text: "Очень простая установка, даже новичок справится. Чит работает стабильно, FPS не проседает. Рекомендую всем!",
                avatar: "💀"
              },
              {
                name: "StormBreaker",
                rating: 5,
                text: "За эти деньги (бесплатно!) это просто находка. Функционал как в платных читах. Респект разработчикам!",
                avatar: "⚔️"
              }
            ].map((review, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:glow-primary group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl glow-primary">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                      {review.name}
                    </h4>
                    <div className="flex gap-1 mt-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="text-secondary fill-secondary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {review.text}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full">
              <Icon name="Users" size={20} className="text-primary" />
              <span className="text-sm font-semibold">Присоединяйся к <span className="text-primary">50,000+</span> довольных игроков</span>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-24">
          <Card className="p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/50 glow-primary text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-5xl font-black mb-6 text-glow">
                ГОТОВ НАЧАТЬ?
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                Присоединяйся к тысячам игроков, которые уже используют KomaruExternal для победы
              </p>
              <Button size="lg" className="bg-gradient-to-r from-secondary to-primary hover:opacity-90 text-background font-bold text-xl px-12 py-8 glow-secondary animate-pulse-glow">
                <Icon name="Download" size={28} className="mr-3" />
                Скачать бесплатно
              </Button>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-secondary" />
                  <span>Бесплатно навсегда</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-secondary" />
                  <span>Еженедельные обновления</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-secondary" />
                  <span>Поддержка 24/7</span>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <footer className="container mx-auto px-4 py-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Code2" size={16} className="text-background" />
              </div>
              <span className="font-bold">KomaruExternal</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 KomaruExternal. Только для образовательных целей.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">
                <Icon name="MessageCircle" size={18} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Send" size={18} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Youtube" size={18} />
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;