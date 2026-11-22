# Chuyên đề 1.8: Các Công cụ Điều hành Tiền tệ và Khuôn khổ Thể chế Ngân hàng Trung ương

Chuyên đề này phân tích bốn công cụ điều hành tiền tệ kinh điển của Ngân hàng Trung ương (thị trường mở, dự trữ bắt buộc, lãi suất chiết khấu, lãi suất điều hành) cùng hai trụ cột thể chế hiện đại định hình hiệu quả chính sách: tính độc lập của Ngân hàng Trung ương và khuôn khổ lạm phát mục tiêu.

> Câu hỏi xuyên suốt: Tại sao việc trao quyền độc lập cho Ngân hàng Trung ương và công bố một mục tiêu lạm phát rõ ràng lại giúp bảo vệ giá trị đồng tiền tốt hơn nhiều so với việc để các chính trị gia toàn quyền quyết định?

---

## 1. Nghiệp vụ Thị trường Mở (Open Market Operations - OMO)

**1. Là gì?**
Nghiệp vụ Thị trường Mở (Open Market Operations - OMO) là hoạt động mà trong đó Ngân hàng Trung ương chủ động mua hoặc bán các giấy tờ có giá ngắn hạn (chủ yếu là tín phiếu kho bạc, trái phiếu chính phủ) trên thị trường tài chính mở với các tổ chức tín dụng thành viên. Đây là công cụ linh hoạt, chính xác và được sử dụng thường xuyên nhất hàng ngày để điều tiết lượng tiền cơ sở và lãi suất liên ngân hàng ngắn hạn. Nếu chỉ nhớ một điều: **OMO là chiếc van vặn thanh khoản hàng ngày: NHTW mua chứng khoán là bơm tiền ra, bán chứng khoán là hút tiền về.**

**2. Hoạt động thế nào?**
- NHTW thực hiện OMO qua hai hình thức giao dịch chính:
  1. Giao dịch mua/bán hẳn (Outright purchase/sale): Chuyển giao quyền sở hữu vĩnh viễn giấy tờ có giá để thay đổi thanh khoản dài hạn.
  2. Hợp đồng mua lại (Repurchase Agreement - Repo) và Mua lại đảo ngược (Reverse Repo): Mua/bán có kỳ hạn (từ 7 đến 28 ngày) để điều tiết thanh khoản tạm thời.
- Khi hệ thống ngân hàng thừa thanh khoản: NHTW bán tín phiếu (hoặc ký Reverse Repo) $\rightarrow$ thu tiền mặt về kho quỹ $\rightarrow$ lãi suất liên ngân hàng tăng lên.
- Khi hệ thống ngân hàng căng thẳng thanh khoản: NHTW mua chứng khoán (ký Repo) $\rightarrow$ cộng tiền vào tài khoản thanh toán của các ngân hàng thương mại $\rightarrow$ giải tỏa cơn khát thanh khoản.

**3. Công thức & mô hình**
Tác động cơ học của OMO lên lượng tiền cơ sở ($MB$):

$$
\Delta MB = \Delta \text{Chứng khoán NHTW nắm giữ}
$$

Khi NHTW bơm ròng $X$ đồng qua OMO:

$$
\Delta M^s = m \times \Delta MB = m \times (+X)
$$

Lãi suất Repo ($i_{\text{repo}}$) được tính theo phương pháp lãi đơn:

$$
i_{\text{repo}} = \frac{P_{\text{bán lại}} - P_{\text{mua}}}{P_{\text{mua}}} \times \frac{365}{n} \times 100\%
$$

Trong đó $n$ là số ngày của kỳ hạn hợp đồng.

**4. Ví dụ**
- Tại Việt Nam: Ngân hàng Nhà nước tổ chức đấu thầu OMO hàng ngày qua Sở Giao dịch. Khi tỷ giá USD/VND căng thẳng, NHNN liên tục phát hành Tín phiếu NHNN kỳ hạn 14 hoặc 28 ngày để hút ròng hàng trăm nghìn tỷ đồng ra khỏi hệ sinh thái liên ngân hàng, đẩy lãi suất VND liên ngân hàng tăng lên để hạn chế đầu cơ USD.
- Ví dụ số minh họa: NHTM A bán 1.000 tỷ VND trái phiếu chính phủ cho NHNN theo hợp đồng Repo 14 ngày với lãi suất OMO 4,0%/năm. Số tiền lãi NHTM phải trả khi chuộc lại trái phiếu là: $1.000 \times 4\% \times (14 / 365) \approx 1,534$ tỷ VND.
- Hoa Kỳ: Bàn Giao dịch Thị trường Mở (Trading Desk) tại Fed New York tiến hành các nghiệp vụ Repo qua đêm (Overnight Reverse Repo - ON RRP) để thiết lập sàn cứng cho lãi suất quỹ liên bang.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Duy trì lãi suất mục tiêu trong hành lang lãi suất (Interest Rate Corridor) và ổn định thanh khoản hệ thống tức thời.
- Ưu thế vượt trội: Linh hoạt tuyệt đối, có thể đảo ngược nhanh chóng nếu tình hình thay đổi, do NHTW toàn quyền chủ động quyết định quy mô và thời điểm.
- Lỗi thường gặp: Nhầm OMO với việc phát hành trái phiếu chính phủ để chi tiêu ngân sách; trái phiếu phát hành để chi tiêu là nghiệp vụ tài khóa của Bộ Tài chính, còn OMO là NHTW mua đi bán lại các trái phiếu đã lưu hành để điều tiết tiền tệ.

**6. Liên kết**
- [Tiền cơ sở](04_Money_Supply_and_Monetary_Base.md) · [Lãi suất điều hành](#4-lãi-suất-điều-hành-policy-rate) · [Thị trường liên ngân hàng](../02_Central_Banking/03_Interest_Rates_and_Operating_Targets.md)

---

## 2. Tỷ lệ Dự trữ Bắt buộc (Reserve Requirements)

**1. Là gì?**
Tỷ lệ dự trữ bắt buộc (Reserve Requirement Ratio - ký hiệu $rr$) là tỷ lệ phần trăm tối thiểu trên tổng số dư tiền gửi huy động được mà các tổ chức tín dụng bắt buộc phải duy trì dưới dạng dự trữ tiền mặt tại quỹ hoặc ký gửi không hưởng lãi (hoặc lãi rất thấp) trên tài khoản thanh toán tại Ngân hàng Trung ương. Đây là công cụ mang tính hành chính quyền lực cao nhất của NHTW. Nếu chỉ nhớ một điều: **Dự trữ bắt buộc là "tỷ lệ khóa van" quy định ngân hàng phải giữ lại bao nhiêu phần trăm tiền gửi mà không được phép đem đi cho vay.**

**2. Hoạt động thế nào?**
- Ngân hàng Trung ương ấn định tỷ lệ $rr$ khác nhau theo loại hình tiền gửi (tiền gửi không kỳ hạn thường có tỷ lệ cao hơn tiền gửi kỳ hạn dài) hoặc theo loại đồng tiền (tiền gửi ngoại tệ thường bị áp tỷ lệ dự trữ cao hơn để chống đô la hóa).
- Tác động lên hệ thống:
  - Khi tăng $rr$: Khóa một lượng vốn lớn của các ngân hàng thương mại $\rightarrow$ số nhân tiền tệ $m$ giảm mạnh $\rightarrow$ giảm khả năng tạo tín dụng của toàn hệ thống $\rightarrow$ cung tiền co hẹp.
  - Khi giảm $rr$: Giải phóng thanh khoản bị giam giữ $\rightarrow$ tăng nguồn vốn khả dụng cho vay $\rightarrow$ kích thích tăng trưởng tín dụng.
- Nhược điểm: Công cụ này có tính chất "dùng búa tạ", thay đổi một tỷ lệ nhỏ cũng tạo ra cú sốc thanh khoản rất lớn và tốn kém chi phí cho hệ thống ngân hàng, do đó hiếm khi được dùng để điều tiết ngắn hạn.

**3. Công thức & mô hình**
Quy mô dự trữ bắt buộc danh nghĩa ($RR$) mà một ngân hàng phải duy trì:

$$
RR = rr \times D
$$

Trong đó $D$ là số dư tiền gửi huy động bình quân trong kỳ tính toán dự trữ. Tác động nghịch chiều lên số nhân tiền tệ tối đa:

$$
m \approx \frac{1}{rr} \implies \frac{\partial m}{\partial rr} = -\frac{1}{rr^2} < 0
$$

**4. Ví dụ**
- Ví dụ số minh họa: Một ngân hàng thương mại huy động được 100.000 tỷ VND tiền gửi. Nếu NHNN áp tỷ lệ dự trữ bắt buộc $rr = 3\%$, ngân hàng phải để lại ít nhất 3.000 tỷ VND tại tài khoản NHNN và chỉ được dùng tối đa 97.000 tỷ VND cho vay. Nếu NHNN tăng $rr$ lên $5\%$, ngân hàng bị giữ thêm 2.000 tỷ VND nữa, buộc phải thu hồi bớt các khoản cho vay ngắn hạn hoặc giảm tốc độ giải ngân mới.
- Tại Trung Quốc: Ngân hàng Nhân dân Trung Quốc (PBOC) thường xuyên sử dụng việc cắt giảm tỷ lệ dự trữ bắt buộc (RRR) như công cụ nới lỏng chính để bơm hàng trăm tỷ Nhân dân tệ thanh khoản dài hạn vào nền kinh tế.
- Hoa Kỳ: Vào tháng 3/2020, Fed đã chính thức hạ tỷ lệ dự trữ bắt buộc về 0% cho tất cả các ngân hàng thương mại, chuyển hoàn toàn việc điều tiết sang cơ chế trả lãi trên số dư dự trữ (IORB - Interest on Reserve Balances).

**5. Ứng dụng & tranh luận**
- Ứng dụng: Kiểm soát rủi ro thanh khoản vĩ mô, cơ cấu cung tiền dài hạn và chống đô la hóa.
- Tranh luận: Dự trữ bắt buộc đóng vai trò như một loại "thuế ngầm" đánh lên hệ thống ngân hàng (vì tiền dự trữ không sinh lời), khiến các ngân hàng phải nới rộng chênh lệch giữa lãi suất cho vay và huy động để bù đắp chi phí.
- Lỗi thường gặp: Tưởng rằng dự trữ bắt buộc là số tiền mặt mà ngân hàng phải khóa cứng trong két sắt chi nhánh; thực chất nó là số dư bình quân duy trì trên tài khoản thanh toán tại NHTW trong chu kỳ tính toán (thường là 1 tháng).

**6. Liên kết**
- [Số nhân tiền tệ](05_Money_Creation_and_Multiplier.md) · [Ngân hàng dự trữ phân đoạn](04_Money_Supply_and_Monetary_Base.md) · [Bảng cân đối NHTW](../02_Central_Banking/04_Policy_Tools_and_Balance_Sheet.md)

---

## 3. Lãi suất Chiết khấu (Discount Rate)

**1. Là gì?**
Lãi suất chiết khấu (Discount Rate) là mức lãi suất mà Ngân hàng Trung ương áp dụng khi cấp tín dụng ngắn hạn (thường là qua đêm hoặc vài ngày) cho các ngân hàng thương mại thông qua "Cửa sổ chiết khấu" (Discount Window) trên cơ sở cầm cố các giấy tờ có giá đủ tiêu chuẩn. Đây là công cụ thể hiện vai trò "Người cho vay cứu cánh cuối cùng" (Lender of Last Resort) của NHTW. Nếu chỉ nhớ một điều: **Lãi suất chiết khấu là giá của khoản vay cứu trợ khẩn cấp mà NHTW cho ngân hàng thương mại vay khi họ bị thiếu hụt thanh khoản.**

**2. Hoạt động thế nào?**
- Khi một ngân hàng thương mại gặp khó khăn thanh khoản đột xuất vào cuối ngày giao dịch và không thể vay mượn được từ các ngân hàng bạn trên thị trường liên ngân hàng, họ sẽ tìm đến cửa sổ chiết khấu của NHTW.
- Lãi suất chiết khấu thường được NHTW ấn định cao hơn mức lãi suất mục tiêu liên ngân hàng (tạo thành mức trần của hành lang lãi suất).
- Cơ chế này tạo động cơ để các ngân hàng tự tìm kiếm thanh khoản trên thị trường tự do trước, chỉ tìm đến NHTW khi thực sự bế tắc.
- Hiệu ứng "Vết nhơ danh tiếng" (Stigma Effect): Các ngân hàng thường e ngại vay qua cửa sổ chiết khấu vì sợ thị trường đồn đoán rằng họ đang đứng trước bờ vực vỡ nợ, khiến tình hình rút tiền trở nên tồi tệ hơn.

**3. Công thức & mô hình**
Lãi suất chiết khấu thiết lập trần trên của hành lang lãi suất (Corridor System):

$$
i_{\text{deposit}} \le i_{\text{interbank}} \le i_{\text{discount}}
$$

Số tiền thực nhận khi ngân hàng mang giấy tờ có giá mệnh giá $F$, kỳ hạn còn lại $t$ ngày đến chiết khấu tại NHTW với lãi suất chiết khấu $d$:

$$
P = F \times \left(1 - d \times \frac{t}{365}\right)
$$

**4. Ví dụ**
- Tại Việt Nam: Ngân hàng Nhà nước duy trì song song "Lãi suất tái cấp vốn" (thường cao hơn) và "Lãi suất tái chiết khấu" (thường thấp hơn một chút, áp dụng cho việc chiết khấu các công cụ nợ có giá trị cao). Ví dụ: Lãi suất tái chiết khấu là 3,0%/năm và tái cấp vốn là 4,5%/năm (quyết định năm 2023).
- Ví dụ số minh họa: NHTM B cầm tờ tín phiếu kho bạc mệnh giá 100 tỷ VND còn 30 ngày đáo hạn đến xin chiết khấu tại NHNN với lãi suất 3,65%/năm. Số tiền chiết khấu (tiền lãi bị trừ) là: $100 \times 3,65\% \times (30 / 365) = 0,3$ tỷ VND. NHTM thực nhận 99,7 tỷ VND.
- Khủng hoảng ngân hàng Mỹ tháng 3/2023: Sau vụ sụp đổ SVB, các ngân hàng Mỹ đã ồ ạt vay kỷ lục 152,85 tỷ USD qua cửa sổ chiết khấu của Fed chỉ trong một tuần, vượt qua cả đỉnh điểm của cuộc khủng hoảng tài chính 2008.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Van an toàn thanh khoản tối hậu ngăn chặn nguy cơ vỡ nợ dây chuyền trong hệ thống thanh toán liên ngân hàng.
- Tranh luận: Để xóa bỏ "vết nhơ", Fed đã phải thiết lập thêm các chương trình cho vay khẩn cấp mới (như BTFP - Bank Term Funding Program năm 2023) định giá tài sản thế chấp theo mệnh giá thay vì giá thị trường để hỗ trợ các ngân hàng.
- Lỗi thường gặp: Nhầm lẫn giữa lãi suất chiết khấu trong tài chính doanh nghiệp (Discount rate dùng để tính NPV của dòng tiền tương lai) với Lãi suất chiết khấu của Ngân hàng Trung ương.

**6. Liên kết**
- [Lãi suất điều hành](#4-lãi-suất-điều-hành-policy-rate) · [Người cho vay cứu cánh cuối cùng](../02_Central_Banking/05_Lender_of_Last_Resort_and_Liquidity_Support.md) · [Hành lang lãi suất](../02_Central_Banking/03_Interest_Rates_and_Operating_Targets.md)

---

## 4. Lãi suất Điều hành (Policy Rate)

**1. Là gì?**
Lãi suất điều hành (Policy Rate / Key Interest Rate) là mức lãi suất chuẩn do Ngân hàng Trung ương công bố chính thức và sử dụng làm mục tiêu hoạt động trung tâm để truyền tải thông điệp và lập trường chính sách tiền tệ đến toàn bộ thị trường tài chính. Mọi mức lãi suất khác trong nền kinh tế (lãi suất liên ngân hàng, lãi suất huy động tiền gửi, lãi suất cho vay thương mại và lợi suất trái phiếu) đều lấy lãi suất điều hành làm mốc tham chiếu và dao động xung quanh nó. Nếu chỉ nhớ một điều: **Lãi suất điều hành là "lãi suất gốc chỉ huy" định hình chi phí tiền tệ của toàn bộ nền kinh tế.**

**2. Hoạt động thế nào?**
- Tùy theo khuôn khổ điều hành của từng nước, lãi suất điều hành có thể là:
  - Lãi suất quỹ liên bang (Federal Funds Rate của Fed - Mỹ).
  - Lãi suất tái cấp vốn / Lãi suất tiền gửi (của ECB - Châu Âu).
  - Lãi suất tái cấp vốn và tái chiết khấu (của NHNN - Việt Nam).
- NHTW không thể dùng sắc lệnh hành chính để ép mọi giao dịch vay mượn trên thị trường phải theo đúng mức này, mà sử dụng các nghiệp vụ thị trường mở (OMO) để bơm/hút thanh khoản, buộc lãi suất giao dịch thực tế trên thị trường liên ngân hàng phải bám sát lãi suất điều hành mục tiêu.
- Khi NHTW nâng lãi suất điều hành: Báo hiệu chu kỳ thắt chặt bắt đầu, kéo mặt bằng lãi suất cho vay của các ngân hàng thương mại tăng lên.

**3. Công thức & mô hình**
Hệ thống hành lang lãi suất (Corridor System) xung quanh lãi suất chính sách mục tiêu ($i^*$):

$$
i_{\text{floor}} \le i_{\text{interbank}} \approx i^* \le i_{\text{ceiling}}
$$

Trong đó sàn ($i_{\text{floor}}$) là lãi suất mà NHTW trả cho tiền gửi dự trữ của NHTM, còn trần ($i_{\text{ceiling}}$) là lãi suất cho vay tái cấp vốn/chiết khấu của NHTW.

**4. Ví dụ**
- Fed công bố khung lãi suất quỹ liên bang mục tiêu (Fed Funds Target Range), ví dụ 5,25% – 5,50%. Lãi suất bình quân thực tế giao dịch giữa các ngân hàng Mỹ (EFFR - Effective Federal Funds Rate) luôn nằm chính xác trong khoảng này nhờ các nghiệp vụ can thiệp của Fed.
- Quyết định số 1124/QĐ-NHNN (ngày 16/6/2023) của Thống đốc NHNN: Giảm lãi suất tái cấp vốn từ 5,0%/năm xuống 4,5%/năm; giảm lãi suất tái chiết khấu từ 3,5%/năm xuống 3,0%/năm.
- Phản ứng dây chuyền: Ngay sau quyết định của NHNN, nhóm 4 ngân hàng quốc doanh (Big 4) đồng loạt hạ trần lãi suất huy động tiết kiệm, tạo điều kiện giảm lãi suất cho vay mua nhà và sản xuất.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Công cụ truyền thông và dẫn dắt kỳ vọng thị trường mạnh mẽ nhất của các nhà hoạch định chính sách tiền tệ hiện đại.
- Tranh luận: Việc điều chỉnh lãi suất điều hành có thể gây xung đột mục tiêu giữa kiểm soát lạm phát và hỗ trợ tăng trưởng kinh tế (tình thế tiến thoái lưỡng nan).
- Lỗi thường gặp: Nghĩ rằng người dân có thể đến vay tiền trực tiếp tại NHTW theo lãi suất điều hành; lãi suất điều hành chỉ áp dụng cho các giao dịch bán buôn giữa NHTW và các tổ chức tín dụng.

**6. Liên kết**
- [Chính sách tiền tệ](06_Quantity_Theory_and_Transmission.md) · [Lãi suất chiết khấu](#3-lãi-suất-chiết-khấu-discount-rate) · [Thị trường liên ngân hàng](../02_Central_Banking/03_Interest_Rates_and_Operating_Targets.md)

---

## 5. Tính Độc lập của Ngân hàng Trung ương (Central Bank Independence)

**1. Là gì?**
Tính độc lập của Ngân hàng Trung ương (Central Bank Independence - CBI) là mức độ tự chủ về mặt thể chế, pháp lý, nhân sự và nghiệp vụ mà một Ngân hàng Trung ương có được để theo đuổi các mục tiêu ổn định giá cả và an toàn tài chính dài hạn mà không bị chi phối hoặc can thiệp bởi áp lực chính trị ngắn hạn từ chính phủ hay quốc hội. Các nghiên cứu kinh tế đều chỉ ra rằng: Các quốc gia có NHTW càng độc lập thì tỷ lệ lạm phát bình quân càng thấp và ổn định hơn. Nếu chỉ nhớ một điều: **Tính độc lập giúp NHTW không trở thành "máy in tiền" phục vụ các mục tiêu tái tranh cử ngắn hạn của các chính trị gia.**

**2. Hoạt động thế nào?**
Tính độc lập được đánh giá qua 4 khía cạnh:
1. **Độc lập về mục tiêu (Goal Independence):** Quyền tự xác định mục tiêu ưu tiên (ít phổ biến, thường do hiến pháp hoặc luật định).
2. **Độc lập về công cụ (Instrument Independence):** Toàn quyền quyết định mức lãi suất, thời điểm và công cụ can thiệp mà không cần chính phủ phê chuẩn (rất phổ biến ở các NHTW tiên tiến).
3. **Độc lập về tài chính (Financial Independence):** Tự chủ ngân sách hoạt động, nghiêm cấm chính phủ ép NHTW mua trực tiếp trái phiếu sơ cấp để tài trợ thâm hụt ngân sách (tránh hiện tượng "Monetization of Deficits").
4. **Độc lập về nhân sự (Personnel Independence):** Nhiệm kỳ của Thống đốc kéo dài (thường dài hơn nhiệm kỳ tổng thống/quốc hội) và chỉ bị bãi nhiệm vì lý do sai phạm pháp luật nghiêm trọng chứ không vì bất đồng chính sách.

**3. Công thức & mô hình**
Mô hình "Sự thiếu nhất quán theo thời gian" (Time-Inconsistency Problem của Kydland & Prescott, 1977 - Nobel Kinh tế 2004):

$$
\min L = \frac{1}{2}(\pi - \pi^*)^2 + \frac{\lambda}{2}(y - k y^*)^2 \quad (\text{với } k > 1)
$$

Nếu chính phủ điều hành trực tiếp tiền tệ, họ có động cơ tạo ra "lạm phát bất ngờ" ($\pi > \pi^e$) trước mỗi kỳ bầu cử để giảm thất nghiệp tạm thời. Người dân nhận ra động cơ này và đẩy kỳ vọng lạm phát lên cao, dẫn đến kết quả tệ nhất: lạm phát cao mà sản lượng không tăng. Bổ nhiệm một Thống đốc độc lập, bảo thủ ghét lạm phát (Rogoff, 1985) giải quyết triệt để vấn đề này.

**4. Ví dụ**
- Fed (Mỹ), ECB (Châu Âu), Bank of England (Anh) là các mô hình NHTW có tính độc lập rất cao. Chủ tịch Fed Jerome Powell nhiều lần khẳng định Fed chỉ căn cứ vào số liệu kinh tế để quyết định lãi suất, bất chấp việc cựu Tổng thống Donald Trump từng công khai chỉ trích và gây sức ép đòi hạ lãi suất.
- Thổ Nhĩ Kỳ (2019–2023): Tổng thống Erdogan liên tục sa thải 3 Thống đốc NHTW trong vòng hơn 2 năm vì họ tăng lãi suất chống lạm phát; hậu quả là lạm phát Thổ Nhĩ Kỳ bùng nổ lên trên 85% và đồng Lira mất giá thảm hại do NHTW mất hoàn toàn tính độc lập.
- Việt Nam: Ngân hàng Nhà nước Việt Nam là cơ quan ngang bộ thuộc Chính phủ, chịu sự quản lý trực tiếp của Thủ tướng Chính phủ và Quốc hội. Do đó, chính sách tiền tệ tại Việt Nam có sự phối hợp chặt chẽ với chính sách tài khóa và các mục tiêu kinh tế - xã hội tổng quát của Chính phủ.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Thiết kế luật ngân hàng trung ương và thể chế quản trị vĩ mô quốc gia.
- Tranh luận: Xung đột dân chủ (Democratic Deficit) - Trao quá nhiều quyền lực kinh tế sinh tử cho những nhà kỹ trị không do dân bầu có thể dẫn đến việc thiếu trách nhiệm giải trình trước công chúng.
- Lỗi thường gặp: Cho rằng độc lập có nghĩa là tách biệt hoàn toàn; NHTW độc lập vẫn phải duy trì cơ chế phối hợp thông tin và báo cáo giải trình minh bạch trước cơ quan lập pháp tối cao.

**6. Liên kết**
- [Mục tiêu lạm phát](#6-mục-tiêu-lạm-phát-inflation-targeting) · [Nhiệm vụ NHTW](../02_Central_Banking/02_Mandates_and_Governance.md) · [Ổn định giá cả](../02_Central_Banking/02_Mandates_and_Governance.md)

---

## 6. Mục tiêu Lạm phát (Inflation Targeting)

**1. Là gì?**
Mục tiêu Lạm phát (Inflation Targeting - IT) là một khuôn khổ chính sách tiền tệ hiện đại mà trong đó Ngân hàng Trung ương công bố công khai một con số hoặc một dải tỷ lệ lạm phát định lượng cụ thể (ví dụ: $2\%$/năm) làm mục tiêu ưu tiên tối thượng trong trung hạn, đồng thời cam kết điều hành các công cụ tiền tệ để đưa lạm phát thực tế bám sát mục tiêu này. Khuôn khổ này đi kèm với mức độ minh bạch rất cao và trách nhiệm giải trình trước công chúng. Nếu chỉ nhớ một điều: **Mục tiêu lạm phát là lời cam kết công khai bằng con số chính xác mà NHTW neo vào tâm trí xã hội để triệt tiêu kỳ vọng lạm phát.**

**2. Hoạt động thế nào?**
- NHTW dự báo quỹ đạo lạm phát tương lai (thường trong 1–2 năm tới).
- Nếu lạm phát dự báo vượt mức mục tiêu: NHTW chủ động tăng lãi suất để hạ nhiệt tổng cầu.
- Nếu lạm phát dự báo dưới mức mục tiêu: NHTW hạ lãi suất để kích thích kinh tế.
- Trụ cột thành công: Tính minh bạch tuyệt đối thông qua việc công bố thường kỳ Báo cáo Lạm phát (Inflation Report), biên bản các cuộc họp chính sách và họp báo công khai để định hướng kỳ vọng của thị trường tài chính và người dân.

**3. Công thức & mô hình**
Hàm mục tiêu tổn thất của NHTW áp dụng khuôn khổ IT linh hoạt (Flexible Inflation Targeting):

$$
\min_{i_t} E_t \sum_{j=0}^{\infty} \beta^j \left[ (\pi_{t+j} - \pi^*)^2 + \lambda (y_{t+j} - y^*)^2 \right]
$$

Trong đó $\pi^*$ là con số lạm phát mục tiêu đã công bố công khai, và $\lambda$ là trọng số đánh đổi giữa ổn định khoảng cách sản lượng và ổn định lạm phát.

**4. Ví dụ**
- New Zealand là quốc gia đầu tiên trên thế giới tiên phong áp dụng khuôn khổ Inflation Targeting vào năm 1989, đưa lạm phát từ mức 2 con số về dải ổn định 1–3%.
- Ngân hàng Trung ương Châu Âu (ECB) và Cục Dự trữ Liên bang Mỹ (Fed) đều chọn con số lạm phát mục tiêu chính thức là $2,0\%$/năm theo thước đo PCE lõi hoặc HICP.
- Việt Nam: Quốc hội hàng năm đều biểu quyết thông qua chỉ tiêu kiểm soát lạm phát (tốc độ tăng CPI bình quân), ví dụ năm 2023 và 2024 đặt mục tiêu kiểm soát lạm phát ở mức 4,0–4,5%. Dù chưa áp dụng khuôn khổ IT hoàn toàn độc lập, con số này đóng vai trò mỏ neo định hướng điều hành của NHNN.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Giúp triệt tiêu tâm lý kỳ vọng lạm phát, giảm chi phí phòng ngừa biến động giá của doanh nghiệp và hộ gia đình.
- Tranh luận: Khuôn khổ IT quá cứng nhắc có thể khiến NHTW bỏ qua rủi ro tích tụ bong bóng giá tài sản (bất động sản, chứng khoán) nếu chỉ chăm chú nhìn vào rổ chỉ số giá hàng hóa tiêu dùng (CPI).
- Lỗi thường gặp: Nghĩ rằng mục tiêu lạm phát là $0\%$; mức lạm phát tối ưu cho tăng trưởng thường là $2\%$ (ở các nước phát triển) hoặc $3–5\%$ (ở các nước đang phát triển) để bôi trơn tiền lương và tránh rơi vào bẫy giảm phát nguy hiểm.

**6. Liên kết**
- [Tính độc lập của NHTW](#5-tính-độc-lập-của-ngân-hàng-trung-ương-central-bank-independence) · [Định hướng tương lai](../02_Central_Banking/07_Forward_Guidance_and_Communication.md) · [Chỉ số CPI](../01_Money_and_Monetary_Systems/02_Evolution_and_Forms_of_Money.md)

---

## Câu hỏi tự kiểm tra

1. So sánh cơ chế vận hành và mức độ linh hoạt giữa Nghiệp vụ Thị trường Mở (OMO) và Tỷ lệ Dự trữ Bắt buộc.
2. Tại sao các ngân hàng thương mại thường e ngại vay tiền qua Cửa sổ chiết khấu của NHTW (hiệu ứng Stigma)?
3. Hành lang lãi suất (Corridor System) vận hành như thế nào để giữ lãi suất liên ngân hàng bám sát lãi suất điều hành?
4. Trình bày lập luận của Kydland & Prescott về vấn đề "Sự thiếu nhất quán theo thời gian" để bảo vệ tính độc lập của NHTW.
5. Tại sao mức lạm phát mục tiêu tối ưu của các nước phát triển lại thường được chọn là 2% mà không phải là 0%?

---

## Ghi chú nguồn

- Kydland, F. E., & Prescott, E. C. (1977). "Rules Rather than Discretion: The Inconsistency of Optimal Plans", *Journal of Political Economy*.
- Bernanke, B. S., & Mishkin, F. S. (1997). "Inflation Targeting: A New Framework for Monetary Policy?", *Journal of Economic Perspectives*.
- Quốc hội Việt Nam: Nghị quyết về Kế hoạch phát triển kinh tế - xã hội năm 2023–2024.
- Ngân hàng Nhà nước Việt Nam: Quyết định số 1124/QĐ-NHNN ngày 16/6/2023 về lãi suất điều hành.