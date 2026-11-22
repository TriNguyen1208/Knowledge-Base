# Chuyên đề 2.5: Người Cho vay Cứu cánh Cuối cùng và Hỗ trợ Thanh khoản Khẩn cấp

Chuyên đề này phân tích học thuyết kinh điển của Walter Bagehot về vai trò "Người cho vay cứu cánh cuối cùng" (Lender of Last Resort) của Ngân hàng Trung ương và cơ chế triển khai các gói Hỗ trợ Thanh khoản Khẩn cấp (Emergency Liquidity Assistance - ELA) để dập tắt các cuộc hoảng loạn tài chính.

> Câu hỏi xuyên suốt: Làm thế nào Ngân hàng Trung ương có thể giải cứu một ngân hàng đang bị người dân xếp hàng rút tiền mà không tạo ra tiền lệ xấu khiến các ngân hàng khác liều lĩnh hơn (Rủi ro đạo đức - Moral Hazard)?

---

## 1. Người cho vay Cứu cánh Cuối cùng (Lender of Last Resort - LOLR)

**1. Là gì?**
Người cho vay Cứu cánh Cuối cùng (Lender of Last Resort - LOLR) là vai trò đặc biệt và tối hậu của Ngân hàng Trung ương, sẵn sàng cung cấp nguồn thanh khoản khẩn cấp cho các định chế tài chính hoặc toàn bộ thị trường khi các kênh huy động vốn tư nhân thông thường trên thị trường liên ngân hàng đã hoàn toàn đóng băng. Mục tiêu tối thượng của LOLR là ngăn chặn nguy cơ vỡ nợ dây chuyền, dập tắt các cuộc tháo chạy rút tiền (Bank Runs) và bảo vệ sự toàn vẹn của toàn bộ hệ thống tài chính quốc gia. Nếu chỉ nhớ một điều: **LOLR là chiếc van dập lửa tối hậu của NHTW: sẵn sàng bơm tiền cứu ngân hàng thiếu thanh khoản nhưng vẫn còn khả năng thanh toán.**

**2. Hoạt động thế nào?**
- Nguyên tắc Bagehot kinh điển (Walter Bagehot, cuốn sách *Lombard Street*, 1873):
  Trong một cuộc khủng hoảng hoảng loạn, để dập tắt nỗi sợ hãi mà không dung túng cho sự quản trị yếu kém, Ngân hàng Trung ương phải:
  1. Cho vay tự do, không hạn chế số lượng (Lend freely).
  2. Với mức lãi suất phạt rất cao (At a penalty rate).
  3. Nhưng chỉ cho vay trên cơ sở tài sản bảo đảm tốt (On good collateral) được định giá theo điều kiện bình thường.
  4. Chỉ cho các ngân hàng **thiếu thanh khoản tạm thời (Illiquid)** vay, dứt khoát không cứu các ngân hàng **đã mất khả năng thanh toán / âm vốn (Insolvent)**.
- Khi người gửi tiền thấy NHTW đứng ra bảo đảm thanh khoản không giới hạn, động cơ xếp hàng rút tiền sẽ tự động tiêu tan, và cuộc khủng hoảng kết thúc.

**3. Công thức & mô hình**
Phân biệt cốt tử giữa Thiếu thanh khoản và Mất khả năng thanh toán:

$$
\begin{aligned}
\text{Thiếu thanh khoản (Illiquid):} & \quad \text{Tài sản thực (Assets)} > \text{Nghĩa vụ nợ (Liabilities)}, \quad \text{nhưng tài sản kém thanh khoản ngắn hạn}. \\
\text{Mất khả năng thanh toán (Insolvent):} & \quad \text{Tài sản thực (Assets)} < \text{Nghĩa vụ nợ (Liabilities)} \implies \text{Vốn chủ sở hữu âm } (\text{Equity} < 0).
\end{aligned}
$$

Chiết khấu tài sản bảo đảm (Haircut - $h$): Để bảo vệ tiền của nhà nước, NHTW chỉ cho vay số tiền $L$ thấp hơn giá trị thị trường của tài sản thế chấp $V_{\text{collateral}}$:

$$
L = V_{\text{collateral}} \times (1 - h)
$$

**4. Ví dụ**
- Bank of England (1866): Vụ sụp đổ của ngân hàng Overend, Gurney and Company đã kích hoạt đợt thực thi LOLR kinh điển đầu tiên trong lịch sử ngân hàng hiện đại.
- Fed trong khủng hoảng 2008: Thành lập hàng loạt cơ chế cho vay cứu trợ đặc biệt (PDCF, CPFF, TSLF) bơm hàng nghìn tỷ USD cứu các ngân hàng đầu tư và tập đoàn bảo hiểm khổng lồ AIG trước nguy cơ sụp đổ dây chuyền.
- Tháng 3/2023 tại Mỹ: Sau vụ phá sản của SVB, Fed thiết lập chương trình Cho vay Kỳ hạn Ngân hàng (Bank Term Funding Program - BTFP), cho phép các ngân hàng mang trái phiếu kho bạc đang lỗ giá trị đến thế chấp để vay tiền mặt với định giá 100% mệnh giá (Par Value), dập tắt ngay lập tức làn sóng rút tiền tại các ngân hàng khu vực.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Thiết kế mạng lưới an toàn tài chính quốc gia (Financial Safety Net).
- Tranh luận về Rủi ro đạo đức (Moral Hazard): Nếu các ngân hàng biết chắc rằng dù có kinh doanh rủi ro đến đâu thì khi gặp sự cố vẫn luôn được NHTW cứu (Too Big to Fail), họ sẽ càng liều lĩnh đầu cơ, đẩy rủi ro về phía người nộp thuế.
- Lỗi thường gặp: Nhầm lẫn LOLR với gói cứu trợ ngân sách (Bailout); LOLR là NHTW cho vay có lãi suất và có tài sản thế chấp phải hoàn trả, còn Bailout là chính phủ dùng tiền thuế của dân rót thẳng vốn vào cứu doanh nghiệp.

**6. Liên kết**
- [Hỗ trợ thanh khoản khẩn cấp (ELA)](#2-hỗ-trợ-thanh-khoản-khẩn-cấp-emergency-liquidity-assistance---ela) · [Đột biến rút tiền](../03_Banking_Systems/06_Bank_Runs_Failures_and_Resolution.md) · [Rủi ro đạo đức](../06_Financial_Regulation_and_Stability/03_Prudential_Safeguards_and_Moral_Hazard.md)

---

## 2. Hỗ trợ Thanh khoản Khẩn cấp (Emergency Liquidity Assistance - ELA)

**1. Là gì?**
Hỗ trợ Thanh khoản Khẩn cấp (Emergency Liquidity Assistance - ELA) là cơ chế cấp tín dụng cứu trợ đặc biệt, trực tiếp của Ngân hàng Trung ương dành riêng cho một hoặc một nhóm ngân hàng thương mại đang đối mặt với tình trạng căng thẳng thanh khoản nghiêm trọng, đột xuất và không còn đủ điều kiện tiếp cận các kênh tái cấp vốn thông thường hay nghiệp vụ thị trường mở OMO. ELA là hình thái triển khai cụ thể của vai trò LOLR trong các tình huống khủng hoảng đặc thù. Nếu chỉ nhớ một điều: **ELA là "phòng cấp cứu thanh khoản đặc biệt" của NHTW dành cho các ngân hàng bên bờ vực sụp đổ.**

**2. Hoạt động thế nào?**
- Tiêu chí kích hoạt ELA:
  1. Ngân hàng đang chịu làn sóng rút tiền cực kỳ nghiêm trọng, đã cạn kiệt toàn bộ tài sản thanh khoản cao (tiền mặt, trái phiếu chính phủ).
  2. Ngân hàng vẫn được cơ quan giám sát đánh giá là có khả năng thanh toán trong dài hạn (Solvent).
  3. Nguy cơ đổ vỡ của ngân hàng này có thể kích hoạt rủi ro lây lan hệ thống (Systemic Risk).
- Điều kiện cho vay ELA thường rất khắt khe: Lãi suất phạt cao, tỷ lệ chiết khấu tài sản bảo đảm (haircut) lớn, và ngân hàng phải chấp nhận các tài sản thế chấp phi chuẩn (hợp đồng cho vay khách hàng, bất động sản).
- Giám sát đặc biệt: Ngân hàng nhận vốn ELA thường bị đặt dưới sự kiểm soát đặc biệt trực tiếp của thanh tra NHTW, bị cấm chia cổ tức, cấm trả thưởng lãnh đạo và bị hạn chế mở rộng kinh doanh mới.

**3. Công thức & mô hình**
Tỷ lệ dự trữ khẩn cấp từ ELA:

$$
\text{Dòng tiền rút ra ròng} = \Delta D_{\text{outflow}} \implies \text{Thanh khoản ELA cần bơm} \ge \Delta D_{\text{outflow}} - \text{Tài sản khả dụng hiện có}
$$

Ràng buộc tài sản bảo đảm phi chuẩn:

$$
\text{Giá trị ELA tối đa} = \sum_{j} V_j \times (1 - h_j)
$$

Trong đó $h_j$ là tỷ lệ chiết khấu rất cao (thường từ $20\%$ đến $50\%$) áp dụng cho các tài sản thế chấp kém thanh khoản.

**4. Ví dụ**
- Châu Âu (2015): Trong đỉnh điểm khủng hoảng nợ công Hy Lạp, người dân Hy Lạp ồ ạt rút hàng tỷ Euro mỗi ngày; Ngân hàng Trung ương Hy Lạp (dưới sự phê chuẩn từng tuần của ECB) đã giải ngân hơn 80 tỷ Euro vốn ELA để giữ cho hệ thống ngân hàng Hy Lạp không bị sụp đổ hoàn toàn.
- Ngân hàng Credit Suisse (Thụy Sĩ, tháng 3/2023): Khi khách hàng rút hơn 100 tỷ USD chỉ trong vài ngày, Ngân hàng Quốc gia Thụy Sĩ (SNB) đã lập tức cấp hạn mức tín dụng khẩn cấp ELA lên tới 100 tỷ Franc Thụy Sĩ (CHF) kèm theo bảo lãnh phá sản để duy trì hoạt động của Credit Suisse trước khi hoàn tất thương vụ sáp nhập vào UBS.
- Việt Nam: Cơ chế "Cho vay đặc biệt" quy định tại Luật Các tổ chức tín dụng (sửa đổi 2024): Ngân hàng Nhà nước hoặc Bảo hiểm Tiền gửi Việt Nam cho vay đặc biệt đối với tổ chức tín dụng bị kiểm soát đặc biệt (như trường hợp Ngân hàng SCB năm 2022) để chi trả tiền gửi cho người dân và phục hồi thanh khoản.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Công cụ phòng chống đổ vỡ ngân hàng mang tính hệ thống trong các cuộc khủng hoảng niềm tin.
- Tranh luận: Ranh giới mong manh giữa "Thiếu thanh khoản" và "Mất khả năng thanh toán"; trong cơn hoảng loạn, việc đánh giá chính xác giá trị thực của tài sản ngân hàng là cực kỳ khó khăn, khiến NHTW có nguy cơ dùng tiền ngân sách cứu một ngân hàng đã "chết lâm sàng".
- Lỗi thường gặp: Cho rằng mọi ngân hàng gặp khó khăn đều mặc nhiên được nhận ELA; NHTW có quyền từ chối nếu ngân hàng đó quy mô quá nhỏ không gây rủi ro hệ thống hoặc đã âm vốn hoàn toàn.

**6. Liên kết**
- [Người cho vay cứu cánh (LOLR)](#1-người-cho-vay-cứu-cánh-cuối-cùng-lender-of-last-resort---lolr) · [Đột biến rút tiền](../03_Banking_Systems/06_Bank_Runs_Failures_and_Resolution.md) · [Kiểm soát đặc biệt](../03_Banking_Systems/06_Bank_Runs_Failures_and_Resolution.md)

---

## Câu hỏi tự kiểm tra

1. Trình bày 4 nguyên tắc kinh điển của Walter Bagehot về vai trò "Người cho vay cứu cánh cuối cùng" (LOLR).
2. Phân biệt rõ sự khác nhau giữa tình trạng "Thiếu thanh khoản" (Illiquidity) và "Mất khả năng thanh toán" (Insolvency).
3. Tại sao Bagehot lại yêu cầu NHTW phải cho vay cứu cánh với mức lãi suất phạt rất cao (Penalty rate)?
4. Trình bày các điều kiện và ràng buộc nghiêm ngặt khi một ngân hàng thương mại tiếp cận nguồn vốn Hỗ trợ Thanh khoản Khẩn cấp (ELA).
5. Cơ chế "Cho vay đặc biệt" trong Luật Các tổ chức tín dụng của Việt Nam thể hiện vai trò cứu trợ khẩn cấp của NHNN như thế nào?

---

## Ghi chú nguồn

- Bagehot, W. (1873). *Lombard Street: A Description of the Money Market*, Henry S. King & Co.
- European Central Bank (ECB): Agreement on emergency liquidity assistance (ELA procedures).
- Swiss National Bank (SNB): Financial Stability Report 2023 (Special chapter on Credit Suisse liquidity assistance).
- Quốc hội Việt Nam: Luật Các tổ chức tín dụng số 32/2024/QH15 (Quy định về Can thiệp sớm và Cho vay đặc biệt).