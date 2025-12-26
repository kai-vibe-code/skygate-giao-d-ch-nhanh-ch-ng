import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Eye, Users, FileText, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const PolicyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-secondary text-secondary-foreground py-6 border-b border-border">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="mb-4 text-secondary-foreground hover:text-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại trang chủ
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Chính Sách Bảo Mật</h1>
          <p className="text-secondary-foreground/70 mt-2">Cập nhật lần cuối: Tháng 12, 2025</p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Introduction */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">Giới Thiệu</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Chào mừng bạn đến với SkyGate. Chúng tôi cam kết bảo vệ quyền riêng tư và bảo mật 
              thông tin cá nhân của bạn. Chính sách bảo mật này giải thích cách chúng tôi thu thập, 
              sử dụng và bảo vệ dữ liệu của bạn khi sử dụng ứng dụng thanh toán nhiên liệu SkyGate.
            </p>
          </section>

          {/* Information Collection */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">Thông Tin Thu Thập</h2>
            </div>
            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <p className="text-muted-foreground">Chúng tôi có thể thu thập các loại thông tin sau:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Thông tin cá nhân: Họ tên, số điện thoại, email, CCCD/CMND</li>
                <li>Thông tin tài khoản ngân hàng liên kết</li>
                <li>Lịch sử giao dịch và thanh toán nhiên liệu</li>
                <li>Thông tin phương tiện (biển số xe, loại xe)</li>
                <li>Vị trí khi sử dụng dịch vụ tại trạm xăng</li>
                <li>Thông tin thiết bị và dữ liệu sử dụng ứng dụng</li>
              </ul>
            </div>
          </section>

          {/* Purpose of Use */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">Mục Đích Sử Dụng</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="font-medium text-foreground mb-2">Cung cấp dịch vụ</h3>
                <p className="text-sm text-muted-foreground">Xử lý thanh toán, quản lý tài khoản và cung cấp dịch vụ đổ xăng không tiền mặt.</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="font-medium text-foreground mb-2">Cải thiện trải nghiệm</h3>
                <p className="text-sm text-muted-foreground">Phân tích hành vi sử dụng để nâng cao chất lượng dịch vụ và tính năng ứng dụng.</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="font-medium text-foreground mb-2">Bảo mật & Xác thực</h3>
                <p className="text-sm text-muted-foreground">Xác minh danh tính, ngăn chặn gian lận và bảo vệ tài khoản của bạn.</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="font-medium text-foreground mb-2">Thông báo & Hỗ trợ</h3>
                <p className="text-sm text-muted-foreground">Gửi thông báo giao dịch, khuyến mãi và hỗ trợ khách hàng khi cần thiết.</p>
              </div>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">Chia Sẻ Thông Tin</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Chúng tôi cam kết không bán hoặc cho thuê thông tin cá nhân của bạn. Thông tin chỉ được 
              chia sẻ trong các trường hợp sau:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Với các đối tác cây xăng để xử lý giao dịch thanh toán</li>
              <li>Với ngân hàng và đối tác tài chính để thực hiện giao dịch</li>
              <li>Khi có yêu cầu từ cơ quan pháp luật theo quy định</li>
              <li>Với sự đồng ý rõ ràng từ bạn</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">Bảo Mật Thông Tin</h2>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <p className="text-muted-foreground leading-relaxed">
                Chúng tôi áp dụng các biện pháp bảo mật tiên tiến để bảo vệ dữ liệu của bạn:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-3">
                <li>Mã hóa dữ liệu end-to-end cho mọi giao dịch</li>
                <li>Xác thực hai yếu tố (2FA) cho tài khoản</li>
                <li>Hệ thống giám sát và phát hiện gian lận 24/7</li>
                <li>Tuân thủ tiêu chuẩn bảo mật PCI-DSS</li>
                <li>Sao lưu dữ liệu định kỳ và khôi phục thảm họa</li>
              </ul>
            </div>
          </section>

          {/* User Rights */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Quyền Của Người Dùng</h2>
            <p className="text-muted-foreground leading-relaxed">
              Bạn có các quyền sau đối với dữ liệu cá nhân của mình:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Quyền truy cập và xem thông tin cá nhân đã cung cấp</li>
              <li>Quyền yêu cầu chỉnh sửa thông tin không chính xác</li>
              <li>Quyền yêu cầu xóa tài khoản và dữ liệu liên quan</li>
              <li>Quyền từ chối nhận thông báo tiếp thị</li>
              <li>Quyền khiếu nại về việc xử lý dữ liệu</li>
            </ul>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">Liên Hệ</h2>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <p className="text-muted-foreground mb-4">
                Nếu bạn có bất kỳ câu hỏi nào về Chính sách bảo mật này, vui lòng liên hệ:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Công ty TNHH Công Nghệ Sky Tech Việt Nam</strong></p>
                <p>Địa chỉ: 85 Cách Mạng Tháng Tám, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh</p>
                <p>Email: contact@sky-gate.vn</p>
                <p>Hotline: 0768 6666 22</p>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-6 border-t border-border">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 SkyGate. Giữ bản quyền. Công ty TNHH Công Nghệ Sky Tech Việt Nam.</p>
        </div>
      </footer>
    </div>
  );
};

export default PolicyPage;
