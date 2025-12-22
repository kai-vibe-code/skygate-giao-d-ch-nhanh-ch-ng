import { Button } from "@/components/ui/button";
import { Smartphone, Fuel, Mail, Phone, MapPin, Shield, Lock, CreditCard } from "lucide-react";

const FooterSection = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-primary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
            Sẵn Sàng Đổ Xăng Không Tiền Mặt?
          </h2>
          <p className="text-lg text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
            Tải SkyGate ngay hôm nay và trải nghiệm sự tiện lợi. Miễn phí hoàn toàn, không phí ẩn.
          </p>
          
          <Button size="lg" className="gap-2 text-lg px-10 py-7 mb-8">
            <Smartphone className="w-6 h-6" />
            Tải App Miễn Phí
          </Button>

          <div className="flex justify-center items-center gap-6">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
              alt="Google Play" 
              className="h-14 cursor-pointer hover:opacity-80 transition-opacity"
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
              alt="App Store" 
              className="h-14 cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>

          {/* Security badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <Shield className="w-5 h-5" />
              <span className="text-sm">PCI DSS Certified</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <Lock className="w-5 h-5" />
              <span className="text-sm">SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <CreditCard className="w-5 h-5" />
              <span className="text-sm">Ngân hàng đối tác</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Fuel className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">SkyGate</span>
              </div>
              <p className="text-secondary-foreground/70 text-sm">
                Giải pháp Fintech tích hợp ngân hàng cho ngành vận tải Việt Nam.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Sản phẩm</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors">Cho Tài xế</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cho HTX</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cho Cây xăng</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Bảng giá</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Hỗ trợ</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors">Câu hỏi thường gặp</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Hướng dẫn sử dụng</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Chính sách bảo mật</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Điều khoản sử dụng</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Liên hệ</h4>
              <ul className="space-y-3 text-sm text-secondary-foreground/70">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>0768 6666 22</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@sky-gate.vn</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>85 Cách Mạng Tháng Tám, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/10 pt-8 text-center text-sm text-secondary-foreground/60">
            <p>© 2025 SkyGate. Giữ bản quyền. Công ty TNHH Công Nghệ Sky Tech Việt Nam.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
