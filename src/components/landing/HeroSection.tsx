import { Button } from "@/components/ui/button";
import { Smartphone, Play } from "lucide-react";
import heroImage from "@/assets/hero-driver.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Tài xế thanh toán bằng QR code tại cây xăng" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-chart-1 rounded-full animate-pulse" />
            <span className="text-sm font-medium">Giải pháp Fintech cho ngành Vận tải</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
            Đổ Xăng Không Tiền Mặt,
            <br />
            <span className="text-chart-1">Hóa Đơn VAT Tự Động</span>
          </h1>
          
          <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 max-w-xl">
            Quét QR thanh toán trong 60 giây – Tiền đi trực tiếp từ HTX – 
            Nhận hóa đơn điện tử ngay trên App. Đơn giản. Nhanh chóng. Minh bạch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2 text-base px-8 py-6">
              <Smartphone className="w-5 h-5" />
              Tải App Ngay
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-base px-8 py-6 bg-transparent border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
              <Play className="w-5 h-5" />
              Xem Video Demo
            </Button>
          </div>

          <div className="flex items-center gap-6 mt-10">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
              alt="Google Play" 
              className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
              alt="App Store" 
              className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
