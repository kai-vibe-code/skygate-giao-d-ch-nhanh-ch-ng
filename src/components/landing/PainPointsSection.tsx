import { Card, CardContent } from "@/components/ui/card";
import { Wallet, FileText, BarChart3, CheckCircle, ArrowRight } from "lucide-react";

const painPoints = [
  {
    icon: Wallet,
    problem: "Quên mang tiền mặt",
    solution: "Thanh toán 1 chạm qua QR Code",
    description: "Không còn lo lắng khi quên ví. Chỉ cần smartphone là đủ.",
  },
  {
    icon: FileText,
    problem: "Mất thời gian lấy hóa đơn",
    solution: "Hóa đơn HILO tự động về App",
    description: "Đổ xong xăng, hóa đơn VAT điện tử có ngay. Không chờ đợi.",
  },
  {
    icon: BarChart3,
    problem: "Khó quản lý chi tiêu",
    solution: "Lịch sử giao dịch minh bạch",
    description: "Theo dõi từng đồng chi tiêu, báo cáo rõ ràng theo ngày/tuần/tháng.",
  },
];

const PainPointsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hiểu Rõ Vấn Đề, Giải Pháp Tức Thì
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SkyGate sinh ra để giải quyết những bất tiện hàng ngày của tài xế vận tải
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((item, index) => (
            <Card 
              key={index} 
              className="bg-background border-border hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-destructive/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <item.icon className="w-7 h-7 text-destructive group-hover:text-primary transition-colors" />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-destructive">Vấn đề:</span>
                    <h3 className="text-xl font-semibold text-foreground mt-1">{item.problem}</h3>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-primary">Giải pháp:</span>
                    <div className="flex items-center gap-2 mt-1">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <h4 className="text-lg font-semibold text-foreground">{item.solution}</h4>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
