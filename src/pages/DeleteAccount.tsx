import { ArrowLeft, Phone, AlertTriangle, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const DeleteAccount = () => {
  const requiredInfo = [
    "Họ tên chủ tài khoản",
    "Số CMND",
    "Số dư tài khoản",
    "Tài khoản ngân hàng đang liên kết (nếu có)",
    "Email",
    "Địa chỉ",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Quay lại trang chủ</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Làm sao để hủy tài khoản?
        </h1>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground mb-2">
                  Khi cần hủy tài khoản, bạn vui lòng liên hệ với bộ phận CSKH qua số:
                </p>
                <a 
                  href="tel:090 3178539" 
                  className="text-2xl font-bold text-primary hover:underline"
                >
                  090 3178539
                </a>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                Thông tin cần cung cấp:
              </h2>
              <ul className="space-y-3">
                {requiredInfo.map((info, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    {info}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-muted-foreground">
              Sau khi nhận được thông tin từ bạn, chúng tôi sẽ chủ động xác minh và hỗ trợ hủy tài khoản.
            </p>
          </CardContent>
        </Card>

        <Alert variant="destructive" className="border-destructive/50 bg-destructive/10">
          <AlertTriangle className="h-5 w-5" />
          <AlertDescription className="text-foreground">
            <strong className="block mb-2">Lưu ý quan trọng:</strong>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                Trước khi gửi thông tin yêu cầu hủy tài khoản, vui lòng hủy liên kết giữa tài khoản và tài khoản ngân hàng.
              </li>
              <li>
                Trong trường hợp tài khoản của bạn vẫn còn số dư, khi chúng tôi tiến hành hủy tài khoản, <strong className="text-destructive">số dư trong tài khoản sẽ bị mất</strong>.
              </li>
              <li>
                <strong className="text-destructive">Tài khoản đã hủy sẽ không thể khôi phục lại.</strong>
              </li>
            </ul>
          </AlertDescription>
        </Alert>
      </main>
    </div>
  );
};

export default DeleteAccount;
