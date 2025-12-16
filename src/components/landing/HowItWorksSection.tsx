import { UserPlus, QrCode, Receipt } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Đăng ký & E-KYC",
    description: "Tạo tài khoản và xác thực danh tính trực tuyến. Chỉ mất 5 phút để hoàn thành.",
  },
  {
    icon: QrCode,
    step: "02", 
    title: "Quét mã QR tại Cây xăng",
    description: "Đến cây xăng liên kết, mở App và quét mã QR trên trụ bơm hoặc quầy thu ngân.",
  },
  {
    icon: Receipt,
    step: "03",
    title: "Xác nhận & Nhận hóa đơn",
    description: "Xác nhận thanh toán trên App. Hóa đơn VAT điện tử tự động gửi về ngay lập tức.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Hướng dẫn sử dụng
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            3 Bước Đơn Giản, Ai Cũng Làm Được
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Không cần kiến thức công nghệ, chỉ cần smartphone là đủ
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-[calc(16.66%+40px)] right-[calc(16.66%+40px)] h-1 bg-gradient-to-r from-primary via-chart-1 to-primary rounded-full" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="relative text-center group">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <item.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-3 -right-3 w-8 h-8 bg-chart-1 text-secondary rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
