import { Card, CardContent } from "@/components/ui/card";
import { Truck, Building2, Shield, Clock, BarChart, FileSpreadsheet } from "lucide-react";

const htxBenefits = [
  { icon: Shield, text: "Quản lý đội xe dễ dàng, cấp hạn mức linh hoạt" },
  { icon: BarChart, text: "Đối soát tự động với ngân hàng, không sai lệch" },
  { icon: FileSpreadsheet, text: "Báo cáo chi tiêu realtime, không lo thất thoát" },
];

const merchantBenefits = [
  { icon: Clock, text: "Nhận tiền Real-time, không chờ đợi" },
  { icon: FileSpreadsheet, text: "Xuất hóa đơn tự động, không tốn nhân sự" },
  { icon: BarChart, text: "Dashboard quản lý doanh thu trực quan" },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Hệ sinh thái đối tác
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cùng Phát Triển, Cùng Thành Công
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SkyGate kết nối HTX, Tài xế và Cây xăng trong một hệ sinh thái hoàn chỉnh
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* HTX Card */}
          <Card className="bg-card border-border overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-chart-2 p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                  <Truck className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-foreground">Hợp tác xã Vận tải</h3>
                  <p className="text-primary-foreground/80 text-sm">Quản lý đội xe hiệu quả</p>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {htxBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Merchant Card */}
          <Card className="bg-card border-border overflow-hidden">
            <div className="bg-gradient-to-r from-chart-1 to-primary p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-foreground">Cây xăng (Merchant)</h3>
                  <p className="text-primary-foreground/80 text-sm">Tối ưu vận hành</p>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {merchantBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-chart-1/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-chart-1" />
                    </div>
                    <span className="text-foreground">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Được tin dùng bởi</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <span className="text-2xl font-bold text-foreground">500+ HTX</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-2xl font-bold text-foreground">10,000+ Tài xế</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-2xl font-bold text-foreground">200+ Cây xăng</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
