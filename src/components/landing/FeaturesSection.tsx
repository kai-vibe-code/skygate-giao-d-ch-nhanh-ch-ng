import { QrCode, FileCheck, TrendingUp, Gift } from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "Thanh toán QR Code siêu tốc",
    description: "Giao dịch dưới 60 giây. Tiền đi trực tiếp từ tài khoản hoặc hạn mức HTX cấp. An toàn, bảo mật tuyệt đối.",
    highlight: "<60s",
  },
  {
    icon: FileCheck,
    title: "Hóa đơn VAT tự động",
    description: "Tích hợp HILO, đổ xăng xong có ngay hóa đơn điện tử hợp lệ. Không lo thất lạc, dễ dàng quyết toán.",
    highlight: "Tự động",
  },
  {
    icon: TrendingUp,
    title: "Dòng tiền thông minh",
    description: "Theo dõi lịch sử nạp/rút chi tiết. Báo cáo chi tiêu hàng ngày, hàng tuần. Kiểm soát tài chính dễ dàng.",
    highlight: "Minh bạch",
  },
  {
    icon: Gift,
    title: "Tích điểm đổi quà (Loyalty)",
    description: "Đổ càng nhiều, điểm càng cao. Đổi điểm lấy quà tặng hấp dẫn hoặc giảm giá cho lần đổ tiếp theo.",
    highlight: "Ưu đãi",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Tính năng nổi bật
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tất Cả Trong Một Ứng Dụng
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Từ thanh toán đến hóa đơn, từ quản lý đến tích điểm – SkyGate lo tất
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                    {feature.highlight}
                  </span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
