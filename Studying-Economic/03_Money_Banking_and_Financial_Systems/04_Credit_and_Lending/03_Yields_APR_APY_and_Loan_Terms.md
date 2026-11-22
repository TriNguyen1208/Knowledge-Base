# Chuyên đề 4.3: Lợi suất, APR, APY, Kỳ hạn Khoản vay và Khấu hao Nợ

Chuyên đề này phân tích các chỉ số chuẩn hóa đo lường chi phí vay thực tế và lợi suất đầu tư chuẩn mực: phân biệt giữa APR (tính cho người đi vay có kèm phí) và APY / Lãi suất hiệu dụng (tính cho người gửi tiền có ghép lãi), cùng cấu trúc kỳ hạn khoản vay và bảng lịch khấu hao nợ (Amortization Schedule).

> Câu hỏi xuyên suốt: Tại sao một khoản vay có lãi suất quảng cáo là 8%/năm nhưng người vay thực tế phải trả chi phí lên tới 11%/năm (APR), và làm thế nào để bóc tách bảng lịch trả nợ từng tháng?

---

## 1. Tỷ lệ Phần trăm Chi phí Hàng năm (Annual Percentage Rate - APR)

**1. Là gì?**
Tỷ lệ Phần trăm Chi phí Hàng năm (Annual Percentage Rate - APR) là chỉ số chi phí tài chính chuẩn hóa theo năm được pháp luật bắt buộc các tổ chức tín dụng phải công bố minh bạch cho người đi vay, phản ánh **toàn bộ tổng chi phí thực sự của việc vay vốn** — bao gồm không chỉ lãi suất danh nghĩa mà còn tính gộp cả toàn bộ các khoản phí thẩm định, phí hồ sơ, phí bảo hiểm khoản vay, phí công chứng và hoa hồng môi giới phát sinh trong quá trình giải ngân. APR là cây thước đo duy nhất giúp người tiêu dùng so sánh công bằng chi phí thực giữa các gói vay của các ngân hàng khác nhau. Nếu chỉ nhớ một điều: **APR là "chi phí trọn gói thực sự" của một khoản vay tính theo năm, có cộng tất cả các loại phí ẩn.**

**2. Hoạt động thế nào?**
- Đạo luật Minh bạch trong Cho vay (Truth in Lending Act - TILA tại Mỹ) bắt buộc mọi hợp đồng tín dụng phải in to và rõ ràng chỉ số APR trên trang đầu tiên trước khi khách hàng ký tên.
- Bản chất kinh tế: Ngân hàng có thể hạ thấp mức lãi suất danh nghĩa quảng cáo (ví dụ: chỉ 7%/năm) để câu khách, nhưng lại thu hàng loạt loại phí phụ trợ đắt đỏ (phí hồ sơ 2%, phí định giá tài sản, phí bảo hiểm nhân thọ bắt buộc). APR sẽ gom tất cả các dòng tiền chi phí này lại để tính ra một mức lãi suất thực tế duy nhất.
- Hạn chế: Theo quy ước quốc tế, công thức APR chuẩn hóa thường dựa trên phương pháp lãi đơn và không tính đến hiệu ứng ghép lãi kép trong năm (hiệu ứng ghép lãi được đo lường riêng bởi EAR / APY).

**3. Công thức & mô hình**
Công thức tính APR theo chuẩn mực tài chính:

$$
\text{APR} = \left[ \frac{\frac{\text{Tổng chi phí trả lãi và toàn bộ các loại phí}}{\text{Số tiền nợ gốc thực tế nhận được}}}{\text{Số ngày của khoản vay}} \right] \times 365 \times 100\%
$$

Xác định tỷ suất sinh lời nội bộ ($IRR$) trên dòng tiền thực tế:
$$
\text{Số tiền thực nhận} = P_0 - \text{Các loại phí trả trước} = \sum_{t=1}^{n} \frac{PMT_t}{(1 + \text{APR}_{\text{effective}})^t}
$$

**4. Ví dụ**
- Ví dụ số minh họa: Bạn vay 100 triệu VND thời hạn 1 năm.
  - Lãi suất danh nghĩa niêm yết: 10%/năm (tiền lãi phải trả: 10 triệu VND).
  - Phí thẩm định hồ sơ và bảo hiểm khoản vay phải đóng ngay khi giải ngân: 3 triệu VND.
  - Số tiền bạn thực nhận về ví: $100 - 3 = 97$ triệu VND.
  - Tổng số tiền bạn phải trả sau 1 năm: $100 + 10 = 110$ triệu VND.
  - Chi phí thực sự bạn phải chịu là: $13$ triệu VND trên số vốn thực nhận 97 triệu VND.
  - Chỉ số $\text{APR} = (13 / 97) \times 100\% \approx \mathbf{13,4\%}$/năm (cao hơn nhiều so với con số quảng cáo 10%).
- Thẻ tín dụng: Khi bạn rút tiền mặt tại cây ATM từ thẻ tín dụng, ngân hàng tính phí rút tiền mặt 4% ngay lập tức cộng với lãi suất 30%/năm tính từ ngày rút; chỉ số APR của giao dịch này có thể vọt lên trên 35–40%/năm.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Bảo vệ người tiêu dùng, chống các hành vi gian lận quảng cáo lãi suất thấp để bẫy khách hàng thiếu kiến thức tài chính.
- Tranh luận: Nhiều ngân hàng tìm cách lách luật bằng cách ép khách hàng mua các sản phẩm ngoài hợp đồng tín dụng (như ép mua gói bảo hiểm nhân thọ liên kết đầu tư) để không phải gộp vào con số APR báo cáo.
- Lỗi thường gặp: Chỉ so sánh lãi suất danh nghĩa giữa hai ngân hàng mà không so sánh APR; một khoản vay có lãi suất 9% không mất phí rẻ hơn nhiều so với một khoản vay có lãi suất 8% nhưng kèm 3% các loại phí.

**6. Liên kết**
- [APY / Lãi suất thực tế](#2-tỷ-suất-sinh-lời-thực-tế-hàng-năm-annual-percentage-yield---apy) · [Khấu hao nợ](#5-khấu-hao-nợ--lịch-trả-nợ-định-kỳ-amortization) · [Bảo vệ người tiêu dùng](../06_Financial_Regulation_and_Stability/04_Safety_Nets_and_Market_Integrity.md)

---

## 2. Tỷ suất Sinh lời Thực tế Hàng năm (Annual Percentage Yield - APY)

**1. Là gì?**
Tỷ suất Sinh lời Thực tế Hàng năm (Annual Percentage Yield - APY) là tỷ lệ phần trăm chuẩn hóa đo lường mức tỷ suất sinh lời thực tế mà một khoản tiền gửi tiết kiệm hoặc tài khoản đầu tư sinh ra trong vòng một năm, **có tính toán đầy đủ đến tác động của việc tái đầu tư và tần suất ghép lãi kép (Compounding frequency)** trong suốt năm đó. Trong khi APR là chỉ số dùng cho người đi vay, thì APY là chỉ số tiêu chuẩn dùng cho người gửi tiền và nhà đầu tư. Nếu chỉ nhớ một điều: **APY cho bạn biết sau 1 năm gửi tiền, bạn thực tế nhận được bao nhiêu phần trăm tiền lãi nhờ sức mạnh của lãi kép.**

**2. Hoạt động thế nào?**
- Nguyên lý chênh lệch: Khi một ngân hàng công bố lãi suất danh nghĩa (Stated/Nominal Rate) là $r$, nếu ngân hàng đó ghép lãi kép nhiều lần trong năm (hàng quý, hàng tháng hoặc hàng ngày) thay vì ghép lãi 1 năm 1 lần, thì số tiền lãi thực tế bạn nhận được cuối năm sẽ luôn lớn hơn $r$.
- Tần suất ghép lãi càng dày đặc, chỉ số APY càng cao vượt trội so với lãi suất danh nghĩa.
- Đạo luật Tiết kiệm Minh bạch (Truth in Savings Act - TISA tại Mỹ) bắt buộc các ngân hàng phải công bố chỉ số APY trên mọi tờ rơi và bảng niêm yết lãi suất tiền gửi để người dân biết chính xác hiệu quả sinh lời thực tế.

**3. Công thức & mô hình**
Công thức tính Tỷ suất Sinh lời Thực tế Hàng năm (APY):

$$
\text{APY} = \left(1 + \frac{r_{\text{nominal}}}{m}\right)^m - 1
$$

Trong đó:
- $r_{\text{nominal}}$: Lãi suất danh nghĩa hàng năm (%/năm).
- $m$: Số lần ghép lãi trong một năm ($m = 1$: hàng năm; $m = 4$: hàng quý; $m = 12$: hàng tháng; $m = 365$: hàng ngày).
- Khi ghép lãi liên tục ($m \rightarrow \infty$): $\text{APY} = e^{r_{\text{nominal}}} - 1$.

**4. Ví dụ**
- Ví dụ số so sánh: Bạn có 100 triệu VND muốn gửi ngân hàng, lãi suất danh nghĩa niêm yết đều là 6,0%/năm:
  - Ngân hàng A (Ghép lãi hàng năm, $m = 1$): $\text{APY} = (1 + 0,06)^1 - 1 = \mathbf{6,00\%}$. Tiền lãi nhận được: 6.000.000 VND.
  - Ngân hàng B (Ghép lãi hàng quý, $m = 4$): $\text{APY} = (1 + 0,06/4)^4 - 1 = (1,015)^4 - 1 \approx \mathbf{6,136\%}$. Tiền lãi: 6.136.000 VND.
  - Ngân hàng C (Ghép lãi hàng tháng, $m = 12$): $\text{APY} = (1 + 0,06/12)^{12} - 1 = (1,005)^{12} - 1 \approx \mathbf{6,168\%}$. Tiền lãi: 6.168.000 VND.
  - Ngân hàng D (Ghép lãi hàng ngày, $m = 365$): $\text{APY} \approx \mathbf{6,183\%}$. Tiền lãi: 6.183.000 VND.
- Kết luận: Cùng một mức lãi suất niêm yết 6%, gửi ở Ngân hàng D mang lại nhiều tiền lãi hơn Ngân hàng A gần 200.000 VND chỉ nhờ cơ chế ghép lãi hàng ngày.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Lựa chọn sản phẩm gửi tiết kiệm, chứng chỉ tiền gửi và các quỹ thị trường tiền tệ tối ưu nhất.
- Tranh luận: Chiêu trò tiếp thị tài chính - Các ngân hàng khi quảng cáo huy động tiền gửi thì thích dùng APY (để con số trông to hơn), nhưng khi quảng cáo cho vay thì lại thích dùng APR (để con số trông nhỏ hơn); người tiêu dùng thông thái cần nắm rõ bản chất để không bị nhầm lẫn.
- Lỗi thường gặp: Đánh đồng APY với APR; APR là chi phí vay nợ chưa tính ghép lãi, còn APY là tỷ suất sinh lời gửi tiền có tính ghép lãi kép.

**6. Liên kết**
- [Lãi kép](02_Interest_Calculation_and_Rate_Structures.md) · [Lãi suất hiệu dụng](#3-lãi-suất-thực-tế--hiệu-dụng-effective-interest-rate---ear) · [APR](#1-tỷ-lệ-phần-trăm-chi-phí-hàng-năm-annual-percentage-rate---apr)

---

## 3. Lãi suất Thực tế / Hiệu dụng (Effective Interest Rate - EAR)

**1. Là gì?**
Lãi suất Thực tế (Effective Interest Rate / Effective Annual Rate - EAR) là mức lãi suất phản ánh chính xác nhất chi phí thực tế của một khoản vay hoặc lợi suất thực tế của một khoản đầu tư trong thời hạn một năm, sau khi đã tính toán toàn diện hiệu ứng của việc ghép lãi kép định kỳ nhiều lần trong năm. Về mặt toán học, EAR và APY có công thức tính hoàn toàn đồng nhất; điểm khác biệt duy nhất là **EAR thường được dùng trong các bài toán tài chính doanh nghiệp và cho vay**, trong khi **APY được dùng trong tiếp thị ngân hàng bán lẻ tiền gửi**. Nếu chỉ nhớ một điều: **EAR là lãi suất "thực chất" bạn phải chịu hoặc được hưởng sau khi bóc trần toàn bộ các kỳ ghép lãi trong năm.**

**2. Hoạt động thế nào?**
- Phân biệt giữa Lãi suất danh nghĩa ($r$) và Lãi suất hiệu dụng (EAR):
  - Lãi suất danh nghĩa là con số ghi trên giấy tờ hợp đồng chưa phản ánh tần suất trả lãi.
  - Nếu khoản vay trả lãi hàng tháng: Tiền lãi tháng trước đã làm giảm hoặc tăng dòng tiền thực tế, tạo ra lãi kép. Do đó, lãi suất hiệu dụng EAR luôn lớn hơn lãi suất danh nghĩa $r$ bất cứ khi nào tần suất ghép lãi $m > 1$.
- Ứng dụng trong việc ra quyết định tài chính: Khi doanh nghiệp đứng trước hai phương án tài trợ vốn khác nhau (ví dụ: một khoản vay lãi suất 11,8%/năm ghép lãi hàng tháng và một khoản vay 12,0%/năm ghép lãi nửa năm), doanh nghiệp bắt buộc phải quy đổi cả hai về EAR để so sánh xem phương án nào thực sự rẻ hơn.

**3. Công thức & mô hình**
Công thức toán học tính Lãi suất Hiệu dụng Hàng năm (EAR):

$$
\text{EAR} = \left(1 + \frac{r_{\text{nominal}}}{m}\right)^m - 1
$$

Mối quan hệ tổng quát:

$$
\text{EAR} > r_{\text{nominal}} \quad (\text{với mọi } m > 1)
$$

Và khi $m \rightarrow \infty$, $\text{EAR}_{\text{max}} = e^{r_{\text{nominal}}} - 1$.

**4. Ví dụ**
- So sánh quyết định chọn khoản vay của một doanh nghiệp:
  - Phương án 1: Vay Techcombank lãi suất danh nghĩa 11,8%/năm, trả lãi ghép hàng tháng ($m = 12$).
    $$
    \text{EAR}_1 = \left(1 + \frac{0,118}{12}\right)^{12} - 1 = (1,009833)^{12} - 1 \approx \mathbf{12,46\%}/\text{năm}
    $$
  - Phương án 2: Vay Vietcombank lãi suất danh nghĩa 12,0%/năm, trả lãi ghép nửa năm ($m = 2$).
    $$
    \text{EAR}_2 = \left(1 + \frac{0,120}{2}\right)^2 - 1 = (1,06)^2 - 1 = \mathbf{12,36\%}/\text{năm}
    $$
  - Kết luận: Dù Techcombank có lãi suất danh nghĩa thấp hơn (11,8% < 12,0%), nhưng Phương án 2 của Vietcombank thực chất lại có chi phí vốn rẻ hơn ($12,36\% < 12,46\%$) do tần suất ghép lãi thưa hơn.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Chuẩn mực vàng trong các mô hình thẩm định dự án đầu tư vốn (NPV, IRR) và quản trị rủi ro nợ doanh nghiệp.
- Tranh luận: Việc không bắt buộc công bố EAR trong các hợp đồng cầm đồ và vay trực tuyến qua app khiến nhiều người tiêu dùng lầm tưởng mình đang vay với lãi suất thấp (ví dụ: lãi 0,1%/ngày nghe rất nhỏ, nhưng $\text{EAR} = (1 + 0,001)^{365} - 1 \approx 44\%$/năm).
- Lỗi thường gặp: Dùng lãi suất danh nghĩa chia cho 12 để tính lãi cho bài toán định giá dòng tiền dài hạn; điều này vi phạm nguyên tắc giá trị thời gian của tiền tệ.

**6. Liên kết**
- [APY](#2-tỷ-suất-sinh-lời-thực-tế-hàng-năm-annual-percentage-yield---apy) · [APR](#1-tỷ-lệ-phần-trăm-chi-phí-hàng-năm-annual-percentage-rate---apr) · [Lãi kép](02_Interest_Calculation_and_Rate_Structures.md)

---

## 4. Kỳ hạn Khoản vay (Loan Term)

**1. Là gì?**
Kỳ hạn Khoản vay (Loan Term / Maturity) là khoảng thời gian định trước theo thỏa thuận pháp lý trong hợp đồng tín dụng, được tính từ thời điểm khoản vay được ngân hàng giải ngân lần đầu cho đến ngày đến hạn cuối cùng mà bên đi vay bắt buộc phải hoàn tất việc thanh toán toàn bộ số nợ gốc và các khoản tiền lãi còn lại cho bên cho vay. Kỳ hạn khoản vay xác định tốc độ hoàn trả dòng tiền và là yếu tố then chốt quyết định số tiền người vay phải đóng hàng tháng. Nếu chỉ nhớ một điều: **Kỳ hạn khoản vay là khoảng thời gian bạn được phép giữ tiền của ngân hàng trước khi phải trả hết nợ.**

**2. Hoạt động thế nào?**
- Phân loại kỳ hạn theo chuẩn mực quản trị rủi ro:
  - *Ngắn hạn (Short-term):* Dưới 12 tháng (tài trợ vốn lưu động mùa vụ, chiết khấu bộ chứng từ thương mại, vay tiêu dùng nhỏ).
  - *Trung hạn (Medium-term):* Từ 1 năm đến 5 năm (vay mua ô tô, mua sắm máy móc thiết bị, cải tạo nhà xưởng).
  - *Dài hạn (Long-term):* Trên 5 năm, kéo dài từ 10, 20 đến 30 năm (vay thế chấp mua nhà đất, tài trợ dự án cơ sở hạ tầng, cao tốc, nhà máy điện).
- Sự đánh đổi kinh tế của kỳ hạn (Trade-off):
  - **Kéo dài kỳ hạn (ví dụ: từ 10 năm lên 25 năm):** Làm giảm áp lực số tiền trả nợ hàng tháng ($PMT$ giảm xuống), giúp người vay dễ thở và dễ được duyệt hồ sơ hơn; nhưng **tổng số tiền lãi phải trả trong suốt vòng đời khoản vay sẽ tăng lên gấp nhiều lần**.
  - **Rút ngắn kỳ hạn:** Số tiền phải trả mỗi tháng rất nặng; nhưng giúp tiết kiệm tối đa tổng tiền lãi và nhanh chóng giải phóng tài sản thế chấp.

**3. Công thức & mô hình**
Tác động của kỳ hạn ($n$) lên số tiền trả nợ hàng tháng ($PMT$) và Tổng tiền lãi phải trả ($Total Interest$):

$$
PMT(n) = P_0 \times \frac{r(1+r)^n}{(1+r)^n - 1} \implies \frac{\partial PMT}{\partial n} < 0
$$

Tổng số tiền lãi phải trả trong cả vòng đời khoản vay:

$$
\text{Total Interest}(n) = n \times PMT(n) - P_0 \implies \frac{\partial \text{Total Interest}}{\partial n} > 0
$$

**4. Ví dụ**
- Ví dụ số so sánh thực tế: Bạn vay mua nhà 1 tỷ VND với lãi suất cố định 8%/năm:
  - **Phương án 1 (Kỳ hạn 10 năm - 120 tháng):**
    - Số tiền trả mỗi tháng: ~12,13 triệu VND/tháng.
    - Tổng tiền lãi phải trả sau 10 năm: **~455 triệu VND**.
  - **Phương án 2 (Kỳ hạn 25 năm - 300 tháng):**
    - Số tiền trả mỗi tháng: ~7,72 triệu VND/tháng (giảm được 4,4 triệu mỗi tháng).
    - Nhưng tổng tiền lãi phải trả sau 25 năm lên tới: **~1.315 triệu VND** (gấp gần 3 lần tiền lãi của phương án 10 năm và lớn hơn cả số tiền nợ gốc ban đầu!).
- Chiến lược chọn kỳ hạn: Người mua nhà trẻ thường chọn kỳ hạn tối đa (20–25 năm) để hạ số tiền đóng hàng tháng cho phù hợp với thu nhập hiện tại, sau đó khi thu nhập tăng lên sẽ chủ động trả nợ gốc trước hạn.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Thiết kế sản phẩm tín dụng phù hợp với chu kỳ luân chuyển vốn của từng loại hình kinh doanh (không thể lấy vốn ngắn hạn tài trợ cho dự án xây dựng 10 năm).
- Tranh luận: Kéo dài kỳ hạn cho vay mua nhà lên 35–40 năm tại một số quốc gia phương Tây nhằm hỗ trợ người trẻ mua nhà bị chỉ trích là "biến người dân thành nô lệ nợ nần suốt đời" và đẩy giá nhà đất tăng cao hơn.
- Lỗi thường gặp: Chỉ chăm chăm nhìn vào số tiền phải đóng hàng tháng mà không tính toán tổng số tiền lãi phải gánh chịu khi chọn kỳ hạn quá dài.

**6. Liên kết**
- [Khấu hao nợ](#5-khấu-hao-nợ--lịch-trả-nợ-định-kỳ-amortization) · [Vay thế chấp mua nhà](05_Consumer_and_Commercial_Loan_Types.md) · [Mất cân xứng kỳ hạn](../03_Banking_Systems/05_Profitability_Credit_Quality_and_Cost_of_Funds.md)

---

## 5. Khấu hao Nợ / Lịch Trả nợ Định kỳ (Amortization)

**1. Là gì?**
Khấu hao Nợ (Amortization / Lịch trả nợ định kỳ) là quá trình hoàn trả dần dần một khoản nợ gốc theo thời gian thông qua một chuỗi các đợt thanh toán định kỳ theo một lịch trình chi tiết (gọi là Bảng lịch khấu hao nợ - Amortization Schedule). Trong mỗi đợt thanh toán định kỳ, số tiền người vay nộp vào luôn được bóc tách làm hai phần rõ rệt: **một phần để thanh toán tiền lãi phát sinh trong kỳ, và phần còn lại được dùng để khấu trừ trực tiếp vào số dư nợ gốc**. Đến kỳ thanh toán cuối cùng, số dư nợ gốc sẽ được triệt tiêu hoàn toàn về đúng bằng 0. Nếu chỉ nhớ một điều: **Khấu hao nợ là bản đồ chi tiết từng tháng cho biết bạn trả bao nhiêu tiền gốc, bao nhiêu tiền lãi và còn nợ bao nhiêu.**

**2. Hoạt động thế nào?**
Hai phương pháp khấu hao nợ phổ biến nhất trong hệ thống ngân hàng:
1. **Phương pháp Niên kim cố định (Equal Monthly Installments - EMI):**
   - Tổng số tiền phải trả mỗi tháng (Gốc + Lãi) là **một con số cố định không đổi**.
   - Cơ cấu nội tại dịch chuyển theo thời gian: Những năm đầu, nợ gốc còn nhiều nên tiền lãi chiếm tỷ trọng áp đảo (gần như toàn bộ tiền đóng vào chỉ để trả lãi, nợ gốc giảm rất chậm); càng về các năm cuối, nợ gốc đã giảm nhiều nên tiền lãi giảm sâu, phần lớn tiền đóng vào dùng để trả nợ gốc.
2. **Phương pháp Nợ gốc chia đều (Linear / Equal Principal Payments):**
   - Nợ gốc được chia đều cho tổng số tháng vay.
   - Tiền lãi tính trên dư nợ gốc giảm dần thực tế.
   - Tổng số tiền phải trả hàng tháng **giảm dần theo thời gian** (tháng đầu tiên trả nặng nhất, các tháng sau giảm dần). Tổng tiền lãi phải trả của phương pháp này luôn thấp hơn phương pháp niên kim cố định.

**3. Công thức & mô hình**
Bảng mô hình cấu trúc phân rã dòng tiền khấu hao nợ tại kỳ $t$:

$$
PMT_t = \text{Principal Payment}_t + \text{Interest Payment}_t
$$

Trong đó:
$$
\text{Interest Payment}_t = P_{t-1} \times r
$$
$$
\text{Principal Payment}_t = PMT_t - \text{Interest Payment}_t
$$
$$
P_t = P_{t-1} - \text{Principal Payment}_t
$$

Số dư nợ gốc tại kỳ cuối cùng: $P_n = 0$.

**4. Ví dụ**
- Bảng lịch khấu hao nợ minh họa: Vay 120 triệu VND trong 12 tháng, lãi suất 12%/năm (1%/tháng) theo phương pháp Niên kim cố định:
  - Số tiền trả cố định hàng tháng: $PMT \approx 10,66$ triệu VND/tháng.
  - **Tháng 1:**
    - Tiền lãi: $120 \text{ triệu} \times 1\% = 1,20$ triệu VND.
    - Tiền gốc trả: $10,66 - 1,20 = 9,46$ triệu VND.
    - Dư nợ gốc còn lại: $120 - 9,46 = 110,54$ triệu VND.
  - **Tháng 2:**
    - Tiền lãi: $110,54 \text{ triệu} \times 1\% = 1,11$ triệu VND (lãi giảm).
    - Tiền gốc trả: $10,66 - 1,11 = 9,55$ triệu VND (gốc tăng).
    - Dư nợ gốc còn lại: $110,54 - 9,55 = 100,99$ triệu VND.
  - Cứ tiếp tục như vậy đến **Tháng 12**, tiền lãi chỉ còn khoảng 0,10 triệu VND và toàn bộ nợ gốc được xóa sạch về 0.
- Ứng dụng thực tế: Mọi ứng dụng ngân hàng di động (Techcombank, Vietcombank) đều tích hợp công cụ "Lập kế hoạch trả nợ" xuất ra bảng khấu hao chi tiết từng ngày cho khách hàng theo dõi.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Giúp người vay quản lý dòng tiền chi tiêu gia đình minh bạch, giúp ngân hàng quản trị rủi ro thanh khoản và ghi nhận thu nhập kế toán chuẩn mực.
- Tranh luận: Tâm lý bức xúc của người vay mua nhà trong 3 năm đầu - Nhiều người vay sau khi đóng tiền đều đặn suốt 3 năm, đến ngân hàng kiểm tra thấy số nợ gốc gần như hầu như chưa giảm được bao nhiêu do cơ cấu khấu hao niên kim dồn toàn bộ tiền lãi lên phía trước (Front-loaded interest).
- Lỗi thường gặp: Nhầm lẫn giữa hai phương pháp trả góp; nếu khả năng tài chính ban đầu cho phép, người vay nên chọn phương pháp nợ gốc chia đều để tiết kiệm tối đa tổng tiền lãi phải trả cho ngân hàng.

**6. Liên kết**
- [Kỳ hạn khoản vay](#4-kỳ-hạn-khoản-vay-loan-term) · [Nợ gốc](01_Credit_Fundamentals_and_Mechanics.md) · [Khoản vay trả góp](04_Loan_Structures_and_Collateral.md)

---

## Câu hỏi tự kiểm tra

1. Phân biệt sự khác nhau căn bản giữa Tỷ lệ Phần trăm Chi phí Hàng năm (APR) và Tỷ suất Sinh lời Thực tế Hàng năm (APY). Chỉ số nào dùng cho người đi vay và chỉ số nào dùng cho người gửi tiền?
2. Tại sao một khoản vay có lãi suất danh nghĩa quảng cáo 7%/năm nhưng chỉ số APR thực tế có thể lên tới 11%/năm? Kể tên các loại chi phí cấu thành nên APR.
3. Trình bày công thức tính Lãi suất Hiệu dụng Hàng năm (EAR). Tại sao EAR luôn lớn hơn lãi suất danh nghĩa khi tần suất ghép lãi lớn hơn 1 lần/năm?
4. Phân tích sự đánh đổi (Trade-off) giữa việc lựa chọn kỳ hạn vay ngắn hạn (10 năm) và kỳ hạn vay dài hạn (25 năm) đối với một khoản vay mua nhà.
5. So sánh cơ chế vận hành của hai phương pháp khấu hao nợ: Phương pháp Niên kim cố định (EMI) và Phương pháp Nợ gốc chia đều.

---

## Ghi chú nguồn

- Consumer Financial Protection Bureau (CFPB): *Regulation Z (Truth in Lending) - APR Calculation Rules*.
- Federal Reserve Board: *Regulation DD (Truth in Savings) - APY Calculation Rules*.
- Fabozzi, F. J. (2015). *Bond Markets, Analysis, and Strategies*, Pearson.
- Thông tư 14/2017/TT-NHNN của Ngân hàng Nhà nước Việt Nam về phương pháp tính lãi trong hoạt động cấp tín dụng.