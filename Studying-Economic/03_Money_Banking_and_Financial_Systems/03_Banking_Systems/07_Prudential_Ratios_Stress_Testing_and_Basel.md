# Chuyên đề 3.7: Các Chỉ số An toàn, Kiểm tra Sức chịu đựng và Khung khổ Basel

Chuyên đề này phân tích toàn diện bộ tiêu chuẩn giám sát an toàn ngân hàng toàn cầu: tiến trình tiến hóa của các Hiệp ước Basel (Basel I, II, III), các tỷ lệ an toàn vốn (CAR) và an toàn thanh khoản (LCR, NSFR), quy trình kiểm tra sức chịu đựng ngân hàng (Stress Test), cùng cơ chế giám sát tăng cường đối với các Ngân hàng có tầm quan trọng hệ thống (SIBs/G-SIBs).

> Câu hỏi xuyên suốt: Tại sao sau cuộc khủng hoảng tài chính toàn cầu 2008, Ủy ban Basel lại đưa ra bộ quy tắc Basel III siết chặt an toàn vốn và thanh khoản khắt khe đến mức các ngân hàng thương mại gọi đó là "chiếc áo giáp bằng chì"?

---

## 1. Kiểm tra Sức chịu đựng Ngân hàng (Bank Stress Test)

**1. Là gì?**
Kiểm tra Sức chịu đựng Ngân hàng (Bank Stress Test) là một quy trình phân tích và mô phỏng tài chính lượng hóa mang tính bắt buộc, do cơ quan quản lý (NHTW) hoặc chính ngân hàng tự thực hiện, nhằm đánh giá khả năng chống chịu, sức khỏe an toàn vốn và tính thanh khoản của ngân hàng khi phải đối mặt với các kịch bản kinh tế vĩ mô cực kỳ bất lợi và khắc nghiệt trong tương lai (như suy thoái kinh tế nặng nề, thất nghiệp tăng vọt, giá bất động sản sụp đổ 40%, thị trường chứng khoán giảm 50% và lãi suất tăng sốc). Nếu chỉ nhớ một điều: **Stress Test là bài "kiểm tra sức khỏe trong phòng bão nhân tạo" để xem ngân hàng có sống sót qua khủng hoảng kinh tế tồi tệ nhất hay không.**

**2. Hoạt động thế nào?**
Quy trình thực hiện Stress Test gồm 4 bước:
1. **Thiết lập kịch bản (Scenario Design):** Cơ quan quản lý đưa ra hai kịch bản: Kịch bản cơ sở (Baseline) và Kịch bản cực kỳ bất lợi (Severely Adverse Scenario) với các giả định số liệu chi tiết kéo dài trong 9–13 quý liên tiếp.
2. **Chạy mô hình lượng hóa (Quantitative Modeling):** Ngân hàng nạp kịch bản vào mô hình dự báo để tính toán mức độ gia tăng của nợ xấu, tổn thất vỡ nợ (Credit losses), tổn thất định giá chứng khoán (Trading losses) và sự sụt giảm của doanh thu thu nhập lãi thuần.
3. **Đánh giá vốn sau cú sốc (Capital Impact):** Tính toán lại tỷ lệ an toàn vốn CET1 của ngân hàng tại điểm đáy của cuộc khủng hoảng mô phỏng.
4. **Kết luận Đạt / Trượt (Pass / Fail):** Nếu tỷ lệ CET1 sau cú sốc vẫn cao hơn ngưỡng an toàn tối thiểu theo luật định, ngân hàng được coi là "Đạt" và được phép tiếp tục chia cổ tức; nếu "Trượt", ngân hàng bị cấm chia cổ tức, cấm mua lại cổ phiếu và bị ép buộc phải phát hành cổ phiếu mới để tăng vốn ngay lập tức.

**3. Công thức & mô hình**
Điều kiện vượt qua bài kiểm tra sức chịu đựng (Pass condition):

$$
\text{CET1 Ratio}_{\text{stressed}} = \frac{\text{CET1}_0 - \text{Tổn thất kịch bản căng thẳng}}{\text{RWA}_{\text{stressed}}} \ge \text{Ngưỡng an toàn quy định } (4,5\% \text{ hoặc } 7,0\%)
$$

Trong đó $\text{RWA}_{\text{stressed}}$ là tổng tài sản có rủi ro được tính toán lại trong điều kiện khủng hoảng.

**4. Ví dụ**
- Chương trình SCAP (2009) của Mỹ: Dưới sự chỉ đạo của Chủ tịch Fed Ben Bernanke, 19 ngân hàng lớn nhất nước Mỹ lần đầu tiên bị kiểm tra sức chịu đựng công khai; kết quả công bố minh bạch đã phục hồi hoàn toàn niềm tin của nhà đầu tư toàn cầu và đánh dấu bước ngoặt chấm dứt khủng hoảng tài chính 2008.
- Kiểm tra thường niên DFAST và CCAR của Fed: Hàng năm vào tháng 6, Fed công bố kết quả Stress Test của hơn 30 ngân hàng lớn nhất; năm 2023 kịch bản giả định tỷ lệ thất nghiệp của Mỹ vọt lên 10% và giá bất động sản thương mại giảm 40%, kết quả cho thấy toàn bộ các ngân hàng lớn đều vượt qua với mức thặng dư vốn hơn 500 tỷ USD.
- Châu Âu (EBA Stress Test): Cơ quan Ngân hàng Châu Âu tổ chức kiểm tra sức chịu đựng định kỳ 2 năm/lần cho khoảng 70 ngân hàng lớn nhất Eurozone.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Công cụ giám sát vĩ mô quyền lực nhất hiện nay, buộc ban điều hành ngân hàng phải duy trì bộ đệm vốn dự phòng thực chất.
- Tranh luận: Kịch bản giả định có thể bỏ sót các rủi ro mới chưa từng có tiền lệ trong lịch sử (như rủi ro rút tiền kỹ thuật số chớp nhoáng qua mạng xã hội trong vụ SVB năm 2023).
- Lỗi thường gặp: Nghĩ rằng vượt qua Stress Test là ngân hàng miễn nhiễm 100% với phá sản; Stress Test chỉ kiểm tra các rủi ro được đưa vào kịch bản mô phỏng, một sự cố gian lận nội bộ hoặc mất cắp công nghệ thông tin quy mô lớn vẫn có thể hạ gục ngân hàng.

**6. Liên kết**
- [Tỷ lệ CAR](#2-tỷ-lệ-an-toàn-vốn-capital-adequacy-ratio---car) · [Basel III](#6-chuẩn-mực-an-toàn-vốn-basel-iii) · [Thanh khoản ngân hàng (LCR)](#3-tỷ-lệ-đảm-bảo-khả-năng-thanh-khoản-liquidity-coverage-ratio---lcr)

---

## 2. Tỷ lệ An toàn Vốn (Capital Adequacy Ratio - CAR)

**1. Là gì?**
Tỷ lệ An toàn Vốn (Capital Adequacy Ratio - CAR / Capital-to-Risk Weighted Assets Ratio - CRAR) là một chỉ số tài chính chuẩn mực quốc tế đo lường tỷ lệ phần trăm giữa nguồn vốn tự có của ngân hàng (gồm vốn cấp 1 và vốn cấp 2) so với tổng tài sản có đã được điều chỉnh theo trọng số rủi ro (RWA). CAR xác định giới hạn đòn bẩy tối đa mà ngân hàng được phép sử dụng, bảo đảm rằng ngân hàng luôn sở hữu một lượng vốn tự có đủ dày để hấp thụ các cú sốc thua lỗ mà không gây nguy cơ mất tiền của người gửi tiền. Nếu chỉ nhớ một điều: **CAR là thước đo độ dày của tấm khiên vốn tự có so với tổng khối lượng rủi ro mà ngân hàng đang gánh vác.**

**2. Hoạt động thế nào?**
- Bản chất của RWA (Risk-Weighted Assets): Không phải mọi tài sản đều có rủi ro như nhau:
  - Tiền mặt và Trái phiếu Chính phủ: Trọng số rủi ro = $0\%$ (hoàn toàn an toàn, không đòi hỏi phải có vốn đối ứng).
  - Cho vay thế chấp mua nhà ở an toàn: Trọng số rủi ro = $35\%–50\%$.
  - Cho vay sản xuất kinh doanh thông thường: Trọng số rủi ro = $100\%$.
  - Cho vay đầu cơ bất động sản, chứng khoán: Trọng số rủi ro = $150\%–200\%$ (đòi hỏi rất nhiều vốn tự có).
- Cơ chế kiểm soát: Nếu một ngân hàng muốn mở rộng tín dụng tăng trưởng dư nợ cho vay, ngân hàng đó bắt buộc phải tích lũy thêm vốn tự có (từ lợi nhuận giữ lại hoặc phát hành cổ phiếu mới) để giữ cho tỷ lệ CAR không bị tụt xuống dưới ngưỡng an toàn theo luật.

**3. Công thức & mô hình**
Công thức tính Tỷ lệ An toàn Vốn (CAR) theo chuẩn mực Basel:

$$
\text{CAR} = \frac{\text{Vốn Cấp 1 (Tier 1)} + \text{Vốn Cấp 2 (Tier 2)}}{\text{Tổng Tài sản có rủi ro (RWA)}} \times 100\%
$$

Trong đó:
- $\text{RWA} = \text{RWA}_{\text{rủi ro tín dụng}} + 12,5 \times (\text{Vốn rủi ro thị trường} + \text{Vốn rủi ro hoạt động})$.
- Chuẩn mực Basel II / III: $\text{CAR} \ge 8,0\%$.
- Tỷ lệ Vốn Cấp 1 tối thiểu: $\text{Tier 1 CAR} \ge 6,0\%$, trong đó $\text{CET1} \ge 4,5\%$.

**4. Ví dụ**
- Ví dụ số minh họa: Một ngân hàng có Vốn tự có là 10.000 tỷ VND. Tổng tài sản danh nghĩa là 120.000 tỷ VND. Sau khi nhân với các hệ số rủi ro từng loại tài sản, Tổng tài sản rủi ro là $\text{RWA} = 100.000$ tỷ VND.
  - Tỷ lệ $\text{CAR} = (10.000 / 100.000) \times 100\% = 10,0\%$.
  - Kết luận: Ngân hàng vượt ngưỡng an toàn tối thiểu 8% của Basel.
- Tại Việt Nam: Ngân hàng Nhà nước áp dụng Thông tư 41/2016/TT-NHNN (tiếp cận Basel II), quy định tỷ lệ an toàn vốn tối thiểu là **$CAR \ge 8,0\%$**.
- Mặt bằng CAR thực tế tại Việt Nam (2023–2024):
  - Nhóm NHTM Cổ phần tư nhân hàng đầu (Techcombank, VPBank, MB): Duy trì CAR rất cao từ $12\%$ đến $15\%$.
  - Nhóm NHTM Nhà nước (Vietcombank, BIDV, VietinBank): Duy trì CAR quanh mức $9,0\%–11,5\%$ do quy mô tín dụng quá lớn trong khi việc tăng vốn điều lệ từ ngân sách nhà nước gặp nhiều rào cản thủ tục pháp lý.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Chỉ tiêu số 1 để NHTW phân loại xếp hạng ngân hàng và phân bổ hạn mức tăng trưởng tín dụng (Room tín dụng) hàng năm.
- Tranh luận: Việc áp dụng trọng số rủi ro có thể bị các ngân hàng "tối ưu hóa sổ sách" (Gaming the rules) thông qua việc sử dụng các mô hình nội bộ phức tạp để hạ thấp RWA một cách giả tạo nhằm làm đẹp tỷ lệ CAR.
- Lỗi thường gặp: Nhầm lẫn CAR với tỷ lệ Tiền mặt trên Tổng tài sản; CAR là tỷ lệ Vốn chủ sở hữu trên Tài sản đã nhân hệ số rủi ro.

**6. Liên kết**
- [Vốn ngân hàng](04_Bank_Balance_Sheet_Reserves_and_Capital.md) · [Hiệp ước Basel](#5-các-hiệp-ước-basel-basel-i-ii) · [Basel III](#6-chuẩn-mực-an-toàn-vốn-basel-iii)

---

## 3. Tỷ lệ Đảm bảo Khả năng Thanh khoản (Liquidity Coverage Ratio - LCR)

**1. Là gì?**
Tỷ lệ Đảm bảo Khả năng Thanh khoản (Liquidity Coverage Ratio - LCR) là một chuẩn mực định lượng mang tính đột phá được giới thiệu trong khuôn khổ Basel III sau cuộc khủng hoảng 2008, yêu cầu mỗi ngân hàng thương mại phải luôn duy trì một kho tài sản thanh khoản chất lượng cao (HQLA) không bị thế chấp, có đủ khả năng chuyển đổi ngay lập tức thành tiền mặt để bù đắp cho tổng lượng tiền rút ròng dự kiến trong kịch bản **căng thẳng thanh khoản nghiêm trọng kéo dài suốt 30 ngày liên tục**. Nếu chỉ nhớ một điều: **LCR bảo đảm ngân hàng có đủ tài sản an toàn để tự sống sót qua một cơn bão rút tiền dữ dội trong vòng 1 tháng.**

**2. Hoạt động thế nào?**
- Phân loại Tài sản Thanh khoản Chất lượng cao (HQLA):
  - *Tài sản Cấp 1 (Level 1 - không bị chiết khấu, không giới hạn trần):* Tiền mặt, dự trữ vượt mức tại NHTW, trái phiếu chính phủ có xếp hạng tín nhiệm cao $0\%$ rủi ro.
  - *Tài sản Cấp 2A (Level 2A - chiết khấu 15%):* Trái phiếu chính phủ rủi ro 20%, trái phiếu doanh nghiệp chất lượng cao (AA- trở lên).
  - *Tài sản Cấp 2B (Level 2B - chiết khấu 50%):* Trái phiếu doanh nghiệp BBB, cổ phiếu blue-chip trên sàn.
- Kịch bản căng thẳng 30 ngày: Giả định người gửi tiền bán lẻ rút 5–10%, người gửi tiền doanh nghiệp rút 20–40%, thị trường liên ngân hàng đóng băng hoàn toàn và các hạn mức cam kết cấp tín dụng bị khách hàng kích hoạt rút tiền ồ ạt.
- Nếu tỷ lệ $LCR \ge 100\%$, ngân hàng có đủ sức tự đứng vững mà không cần phải cầu cứu NHTW bơm vốn khẩn cấp trong tháng đầu tiên của cuộc khủng hoảng.

**3. Công thức & mô hình**
Công thức chuẩn hóa của Tỷ lệ LCR:

$$
\text{LCR} = \frac{\text{Tổng giá trị Tài sản Thanh khoản Chất lượng cao (HQLA)}}{\text{Tổng dòng tiền rút ròng trong 30 ngày (Total Net Cash Outflows)}} \ge 100\%
$$

Trong đó:
$$
\text{Dòng tiền rút ròng} = \min\left(\text{Dòng tiền ra dự kiến} - \text{Dòng tiền vào dự kiến}, \quad \text{Dòng tiền ra dự kiến} \times 25\%\right)
$$

(Quy định dòng tiền vào tối đa chỉ được bù trừ $75\%$ dòng tiền ra để bảo đảm tính thận trọng).

**4. Ví dụ**
- Ví dụ số minh họa: Trong kịch bản khủng hoảng mô phỏng 30 ngày, ngân hàng tính toán tổng số tiền gửi và các cam kết thanh toán bị rút ra ròng là 20.000 tỷ VND.
  - Để đạt chuẩn Basel III ($LCR \ge 100\%$), ngân hàng bắt buộc phải sở hữu một lượng tài sản HQLA (tiền mặt và trái phiếu kho bạc) có giá trị ít nhất là 20.000 tỷ VND.
  - Nếu ngân hàng chỉ có 16.000 tỷ VND HQLA, tỷ lệ $\text{LCR} = 16.000 / 20.000 = 80\%$ (Vi phạm chuẩn an toàn, bị cơ quan quản lý áp lệnh chế tài).
- Các ngân hàng lớn tại Mỹ và Châu Âu (JPMorgan Chase, BNP Paribas): Thường xuyên duy trì tỷ lệ LCR vượt ngưỡng an toàn, dao động từ $115\%$ đến $140\%$.
- Việt Nam: Thông tư 22/2019/TT-NHNN bước đầu áp dụng các nguyên lý của LCR qua quy định "Tỷ lệ khả năng chi trả trong 30 ngày" với ngưỡng tối thiểu $50\%$ đối với VND và $10\%$ đối với ngoại tệ.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Chấm dứt kỷ nguyên ngân hàng chỉ quản trị an toàn vốn mà bỏ bê quản trị thanh khoản dòng tiền.
- Tranh luận: Việc bắt buộc hàng nghìn ngân hàng trên toàn cầu phải nắm giữ khối lượng khổng lồ trái phiếu chính phủ để làm HQLA đã tạo ra một lực cầu nhân tạo lớn đối với nợ công của các nước phát triển.
- Lỗi thường gặp: Coi toàn bộ danh mục cho vay tốt là HQLA; các hợp đồng cho vay khách hàng tốt dù có thể thu hồi đủ gốc lãi trong tương lai cũng không được tính vào HQLA vì không thể bán ngay lấy tiền mặt trong 24 giờ.

**6. Liên kết**
- [Tỷ lệ NSFR](#4-tỷ-lệ-nguồn-vốn-ổn-định-ròng-net-stable-funding-ratio---nsfr) · [Tính thanh khoản ngân hàng](04_Bank_Balance_Sheet_Reserves_and_Capital.md) · [Basel III](#6-chuẩn-mực-an-toàn-vốn-basel-iii)

---

## 4. Tỷ lệ Nguồn vốn Ổn định Ròng (Net Stable Funding Ratio - NSFR)

**1. Là gì?**
Tỷ lệ Nguồn vốn Ổn định Ròng (Net Stable Funding Ratio - NSFR) là chuẩn mực an toàn thanh khoản dài hạn của Basel III, được thiết kế để bổ trợ cho chỉ số LCR (vốn chỉ đo lường ngắn hạn 30 ngày). NSFR yêu cầu các ngân hàng thương mại phải duy trì một cơ cấu nguồn vốn tài trợ ổn định (Available Stable Funding - ASF) có độ tin cậy cao để tài trợ cho các tài sản có tính thanh khoản kém kéo dài trong **chân trời thời gian 1 năm**. Mục tiêu là triệt tiêu tận gốc sự phụ thuộc quá mức vào các nguồn vốn vay mượn ngắn hạn bán buôn liên ngân hàng để tài trợ cho tài sản dài hạn. Nếu chỉ nhớ một điều: **NSFR bảo đảm rằng các tài sản dài hạn phải được tài trợ bằng các nguồn vốn dài hạn và ổn định trong vòng 1 năm.**

**2. Hoạt động thế nào?**
- Hai cấu phần của tỷ lệ NSFR:
  1. **Nguồn vốn Ổn định Hiện có (ASF - Available Stable Funding):** Vốn chủ sở hữu, tiền gửi có kỳ hạn dài trên 1 năm, trái phiếu ngân hàng phát hành dài hạn và tiền gửi bán lẻ ổn định của người dân (được gán hệ số ổn định cao từ $90\%–100\%$). Các nguồn vay liên ngân hàng ngắn hạn chỉ được tính hệ số rất thấp hoặc $0\%$.
  2. **Nguồn vốn Ổn định Yêu cầu (RSF - Required Stable Funding):** Lượng vốn ổn định cần thiết để tài trợ cho danh mục tài sản dựa trên mức độ thanh khoản của chúng. Tiền mặt yêu cầu $0\%$ RSF; cho vay mua nhà dài hạn và cho vay doanh nghiệp yêu cầu hệ số RSF rất cao ($85\%–100\%$).
- Quy tắc cân bằng: Ngân hàng không được phép "lấy ngắn nuôi dài" quá đà; muốn tăng cho vay dài hạn, ngân hàng buộc phải huy động thêm tiền gửi dài hạn hoặc tăng vốn điều lệ.

**3. Công thức & mô hình**
Công thức tính Tỷ lệ Nguồn vốn Ổn định Ròng:

$$
\text{NSFR} = \frac{\text{Nguồn vốn Ổn định Hiện có (Available Stable Funding - ASF)}}{\text{Nguồn vốn Ổn định Yêu cầu (Required Stable Funding - RSF)}} \ge 100\%
$$

Trong đó:
$$
\text{ASF} = \sum_{i} \text{Liabilities}_i \times \text{Hệ số ASF}_i \quad \text{và} \quad \text{RSF} = \sum_{j} \text{Assets}_j \times \text{Hệ số RSF}_j
$$

**4. Ví dụ**
- Ví dụ số minh họa: Một ngân hàng muốn giải ngân khoản cho vay dự án nhà xưởng 10 năm trị giá 1.000 tỷ VND (hệ số yêu cầu RSF = 100% $\rightarrow$ cần 1.000 tỷ vốn ổn định).
  - Nếu ngân hàng huy động vốn bằng cách vay liên ngân hàng qua đêm 1.000 tỷ VND (hệ số ASF = 0%): Tỷ lệ $\text{NSFR} = 0 / 1.000 = 0\%$ (Vi phạm nghiêm trọng).
  - Nếu ngân hàng phát hành trái phiếu kỳ hạn 3 năm trị giá 1.000 tỷ VND (hệ số ASF = 100%): Tỷ lệ $\text{NSFR} = 1.000 / 1.000 = 100\%$ (Đạt chuẩn hoàn hảo).
- Quy định tương đương tại Việt Nam: Tỷ lệ tối đa của nguồn vốn ngắn hạn được sử dụng để cho vay trung và dài hạn (theo Thông tư 08/2020/TT-NHNN) đã có lộ trình siết chặt giảm dần từ mức $40\%$ xuống $34\%$ và chính thức chốt ở mức **$30\%$** kể từ ngày 1/10/2023. Đây chính là phiên bản định hình theo tinh thần của NSFR tại Việt Nam.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Tái cấu trúc bảng cân đối kế toán theo hướng an toàn bền vững, ngăn chặn hiện tượng vỡ nợ dây chuyền khi thị trường vốn ngắn hạn đóng băng.
- Tranh luận: Chi phí huy động nguồn vốn dài hạn (trái phiếu, tiền gửi kỳ hạn dài) đắt hơn nhiều so với vốn ngắn hạn, làm tăng chi phí vốn (COF) của ngân hàng và đẩy lãi suất cho vay nền kinh tế tăng theo.
- Lỗi thường gặp: Nhầm lẫn giữa LCR và NSFR; LCR là bài kiểm tra "chạy nước rút" sống sót trong 30 ngày bão táp, còn NSFR là bài kiểm tra "chạy marathon" cơ cấu vốn bền vững trong 1 năm.

**6. Liên kết**
- [Tỷ lệ LCR](#3-tỷ-lệ-đảm-bảo-khả-năng-thanh-khoản-liquidity-coverage-ratio---lcr) · [Mất cân xứng kỳ hạn](05_Profitability_Credit_Quality_and_Cost_of_Funds.md) · [Basel III](#6-chuẩn-mực-an-toàn-vốn-basel-iii)

---

## 5. Các Hiệp ước Basel (Basel I, II)

**1. Là gì?**
Các Hiệp ước Basel (Basel Accords) là một chuỗi các thỏa thuận quốc tế chuẩn mực về quy định và giám sát an toàn ngân hàng do Ủy ban Giám sát Ngân hàng Basel (BCBS - thành lập năm 1974 tại trụ sở Ngân hàng Thanh toán Quốc tế BIS, Basel, Thụy Sĩ) ban hành. Khởi nguồn từ sự sụp đổ của Ngân hàng Herstatt (Đức, 1974), Ủy ban Basel đã lần lượt phát triển Basel I (1988) và Basel II (2004) nhằm tạo ra một "sân chơi bình đẳng toàn cầu" (Level playing field) và thiết lập các chuẩn mực an toàn vốn tối thiểu ngăn chặn các cuộc khủng hoảng ngân hàng quốc tế. Nếu chỉ nhớ một điều: **Basel I và II là bộ luật an toàn vốn quốc tế đầu tiên buộc mọi ngân hàng trên thế giới phải giữ tối thiểu 8 đồng vốn tự có cho mỗi 100 đồng tài sản rủi ro.**

**2. Hoạt động thế nào?**
Quá trình tiến hóa:
- **Hiệp ước Basel I (1988):**
  - Đưa ra mốc chuẩn lịch sử: Tỷ lệ an toàn vốn tối thiểu $\text{CAR} \ge 8,0\%$.
  - Phân loại tài sản có rủi ro (RWA) theo 4 nhóm trọng số cố định giản đơn: $0\%$ (trái phiếu chính phủ), $20\%$ (ngân hàng OECD), $50\%$ (cho vay nhà ở) và $100\%$ (doanh nghiệp).
  - Nhược điểm: Quá thô sơ, chỉ đo lường rủi ro tín dụng, không phân biệt doanh nghiệp có xếp hạng AAA hay doanh nghiệp sắp phá sản (đều bị đánh đồng hệ số 100%).
- **Hiệp ước Basel II (2004) - Cấu trúc 3 Trụ cột vững chắc:**
  - **Trụ cột 1 (Pillar 1 - Yêu cầu vốn tối thiểu):** Mở rộng đo lường cả 3 loại rủi ro: Rủi ro Tín dụng, Rủi ro Thị trường và Rủi ro Hoạt động (Operational Risk). Cho phép sử dụng phương pháp xếp hạng tín nhiệm nội bộ (IRB).
  - **Trụ cột 2 (Pillar 2 - Giám sát của cơ quan quản lý - SREP):** Đòi hỏi ngân hàng phải tự đánh giá mức độ đủ vốn nội bộ (ICAAP) và trao quyền cho cơ quan thanh tra can thiệp ép tăng vốn nếu thấy quản trị yếu.
  - **Trụ cột 3 (Pillar 3 - Kỷ luật thị trường):** Bắt buộc các ngân hàng phải công bố thông tin minh bạch định kỳ về danh mục rủi ro và cấu trúc vốn để nhà đầu tư và người gửi tiền giám sát.

**3. Công thức & mô hình**
Phương trình an toàn vốn toàn diện của Trụ cột 1 trong Basel II:

$$
\text{CAR} = \frac{\text{Total Capital}}{\text{RWA}_{\text{Credit}} + 12,5 \times (\text{Capital}_{\text{Market}} + \text{Capital}_{\text{Operational}})} \ge 8,0\%
$$

Hệ số $12,5$ bắt nguồn từ nghịch đảo của mức vốn tối thiểu $8\%$ ($1 / 0,08 = 12,5$), dùng để quy đổi yêu cầu vốn thị trường và hoạt động về dạng tài sản có rủi ro tương đương.

**4. Ví dụ**
- Basel I đã tạo ra làn sóng tăng vốn rầm rộ trên toàn cầu vào đầu thập niên 1990; các ngân hàng Nhật Bản từng phải thu hẹp tín dụng quốc tế để đáp ứng chuẩn 8%.
- Thất bại của Basel II trong khủng hoảng 2008: Basel II quá tin tưởng vào các mô hình toán nội bộ của các ngân hàng Phố Wall và xếp hạng của các tổ chức định mức (Moody's, S&P); các ngân hàng đã lách luật đóng gói nợ độc hại thành chứng khoán CDO xếp hạng AAA (hệ số rủi ro thấp), dẫn đến việc khi khủng hoảng nổ ra, vốn thực tế không đủ để chống đỡ.
- Việt Nam: Ngân hàng Nhà nước ban hành Thông tư 41/2016/TT-NHNN triển khai Trụ cột 1 của Basel II và Thông tư 13/2018/TT-NHNN triển khai Trụ cột 2; đến năm 2020–2022, hầu hết các ngân hàng thương mại lớn tại Việt Nam đã chính thức hoàn thành áp dụng toàn diện 3 trụ cột của Basel II.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Chuẩn mực vàng định hình toàn bộ hệ thống quản trị rủi ro của các ngân hàng thương mại hiện đại.
- Tranh luận: Tính chu kỳ thuận (Pro-cyclicality) - Khi kinh tế thịnh vượng, xếp hạng tín dụng tốt làm RWA giảm, ngân hàng cho vay ồ ạt; khi kinh tế suy thoái, xếp hạng tụt làm RWA tăng vọt, buộc ngân hàng phải siết chặt tín dụng khiến suy thoái càng trầm trọng hơn.
- Lỗi thường gặp: Cho rằng các khuyến nghị của Ủy ban Basel có hiệu lực pháp lý trực tiếp; Ủy ban Basel không phải cơ quan lập pháp siêu quốc gia, các hiệp ước chỉ trở thành luật khi được Ngân hàng Trung ương từng nước ban hành thành thông tư quy định cụ thể.

**6. Liên kết**
- [Tỷ lệ CAR](#2-tỷ-lệ-an-toàn-vốn-capital-adequacy-ratio---car) · [Basel III](#6-chuẩn-mực-an-toàn-vốn-basel-iii) · [Kiểm tra sức chịu đựng](#1-kiểm-tra-sức-chịu-đựng-ngân-hàng-bank-stress-test)

---

## 6. Chuẩn mực An toàn Vốn Basel III (Basel III)

**1. Là gì?**
Basel III là khuôn khổ cải cách toàn diện sâu rộng nhất trong lịch sử ngành ngân hàng, được Ủy ban Basel ban hành năm 2010 (và hoàn thiện bản Basel III Endgame) nhằm khắc phục triệt để các lỗ hổng chết người của Basel II đã bị phơi bày trong cuộc Đại Khủng hoảng Tài chính 2007–2008. Basel III không chỉ nâng cao chất lượng và số lượng vốn chủ sở hữu mà còn lần đầu tiên bổ sung các tiêu chuẩn bắt buộc về thanh khoản toàn cầu (LCR, NSFR), tỷ lệ đòn bẩy phi rủi ro (Leverage Ratio) và các bộ đệm vốn chống đỡ chu kỳ kinh tế. Nếu chỉ nhớ một điều: **Basel III biến hệ thống ngân hàng thành pháo đài kiên cố: vốn dày hơn, chất lượng vốn cao hơn, và bắt buộc phải có sẵn kho tài sản thanh khoản phòng bão.**

**2. Hoạt động thế nào?**
Các trụ cột cải cách đột phá của Basel III:
1. **Nâng cao chất lượng vốn cốt lõi:** Tăng tỷ lệ Vốn Cổ phần Phổ thông Cấp 1 (CET1) tối thiểu từ $2,0\%$ lên **$4,5\%$**; tăng tổng Vốn Cấp 1 từ $4,0\%$ lên **$6,0\%$**.
2. **Thiết lập các bộ đệm vốn mới (Capital Buffers):**
   - *Bộ đệm bảo toàn vốn (Capital Conservation Buffer - CCB):* Yêu cầu thêm **$2,5\%$** bằng vốn CET1, nâng tổng yêu cầu vốn CET1 thực tế lên **$7,0\%$** và tổng CAR lên **$10,5\%$**. Ngân hàng vi phạm sẽ bị cấm chia cổ tức và thưởng lãnh đạo.
   - *Bộ đệm vốn nghịch chu kỳ (Countercyclical Capital Buffer - CCyB):* Yêu cầu trích lập thêm từ $0\%$ đến $2,5\%$ trong giai đoạn kinh tế tăng trưởng nóng để dành xả ra dùng khi suy thoái.
3. **Kiểm soát đòn bẩy tuyệt đối (Leverage Ratio):** Bắt buộc duy trì tỷ lệ Vốn Cấp 1 trên Tổng tài sản (không nhân hệ số rủi ro) tối thiểu **$\ge 3,0\%$** để ngăn chặn việc thao túng RWA.
4. **Bộ đôi tiêu chuẩn thanh khoản toàn cầu:** Bắt buộc áp dụng **LCR** (thanh khoản ngắn hạn 30 ngày) và **NSFR** (nguồn vốn ổn định 1 năm) đều phải $\ge 100\%$.
5. **Phần phụ thu vốn cho các ngân hàng hệ thống (G-SIBs Surcharge):** Bắt buộc các ngân hàng siêu lớn phải giữ thêm $1,0\%–3,5\%$ vốn CET1.

**3. Công thức & mô hình**
Tổng yêu cầu vốn chủ sở hữu CET1 toàn diện theo Basel III:

$$
\text{Yêu cầu CET1 tối thiểu} = 4,5\% \text{ (Tối thiểu)} + 2,5\% \text{ (Bộ đệm CCB)} + \text{CCyB} (0 - 2,5\%) + \text{SIBs Surcharge} (0 - 3,5\%)
$$

Tỷ lệ đòn bẩy phi rủi ro (Leverage Ratio):

$$
\text{Leverage Ratio} = \frac{\text{Tier 1 Capital}}{\text{Tổng quy mô tài sản nội bảng và ngoại bảng}} \ge 3,0\%
$$

**4. Ví dụ**
- Các ngân hàng toàn cầu (JPMorgan Chase, HSBC): Phải duy trì tỷ lệ CAR thực tế lên tới $15\%–18\%$ và tỷ lệ CET1 trên $13\%$ để đáp ứng đầy đủ các tầng bộ đệm của Basel III.
- Sự kiện SVB (2023): Dưới thời cựu Tổng thống Donald Trump (năm 2018), Mỹ đã thông qua luật nới lỏng quy định, miễn trừ áp dụng các chuẩn mực thanh khoản Basel III khắt khe cho các ngân hàng quy mô trung bình (như SVB); chính sự miễn trừ này đã khiến SVB không phải tuân thủ LCR và sụp đổ nhanh chóng, buộc Fed sau đó phải đề xuất tái áp dụng Basel III Endgame cho toàn bộ các ngân hàng có tài sản trên 100 tỷ USD.
- Tiến trình áp dụng Basel III tại Việt Nam: Sau khi hoàn tất Basel II, nhiều NHTM tiên phong (TPBank, SeABank, VIB, Techcombank, OCB, MB) đã công bố hoàn thành triển khai hoặc áp dụng thí điểm các cấu phần của chuẩn mực Basel III và Basel III Reforms từ năm 2021 đến 2024 để nâng cao vị thế xếp hạng tín nhiệm quốc tế.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Bảo đảm hệ thống ngân hàng toàn cầu có thể chịu đựng được các cú sốc lớn như đại dịch COVID-19 năm 2020 mà không bị sụp đổ dây chuyền.
- Tranh luận gay gắt: Tranh cãi về "Basel III Endgame" tại Mỹ - Các ngân hàng lớn Phố Wall kịch liệt vận động hành lang phản đối vì cho rằng yêu cầu tăng thêm 16–20% vốn sẽ làm tăng chi phí vốn vay, kìm hãm tăng trưởng kinh tế và đẩy dòng tiền chảy sang hệ thống ngân hàng bóng tối (Shadow Banking).
- Lỗi thường gặp: Cho rằng Basel III thay thế hoàn toàn Basel II; Basel III thực chất là sự củng cố, bổ sung và nâng cấp các quy chuẩn của Basel II lên một tầng an toàn cao hơn.

**6. Liên kết**
- [Hiệp ước Basel II](#5-các-hiệp-ước-basel-basel-i-ii) · [Tỷ lệ LCR](#3-tỷ-lệ-đảm-bảo-khả-năng-thanh-khoản-liquidity-coverage-ratio---lcr) · [Ngân hàng hệ thống (SIBs)](#7-ngân-hàng-có-tầm-quan-trọng-hệ-thống-systemically-important-banks---sibs)

---

## 7. Ngân hàng có Tầm quan trọng Hệ thống (Systemically Important Banks - SIBs)

**1. Là gì?**
Ngân hàng có Tầm quan trọng Hệ thống (Systemically Important Banks - SIBs) là những định chế ngân hàng sở hữu quy mô tài sản khổng lồ, mức độ phức tạp nghiệp vụ cao, tính liên kết xuyên biên giới sâu rộng và không có khả năng thay thế trên thị trường tài chính, đến mức sự đổ vỡ hoặc mất khả năng thanh toán của ngân hàng này sẽ kích hoạt hiệu ứng sụp đổ dây chuyền, làm tê liệt hệ thống thanh toán và gây tổn thất thảm khốc cho toàn bộ nền kinh tế quốc gia cũng như toàn cầu. Nhóm này thường được biết đến với tên gọi **"Quá lớn để sụp đổ" (Too Big to Fail - TBTF)**. Nếu chỉ nhớ một điều: **SIBs là các "siêu ngân hàng" mà nhà nước bắt buộc không được để cho sụp đổ vì hậu quả sẽ là thảm họa kinh tế.**

**2. Hoạt động thế nào?**
- Phân cấp quản lý SIBs:
  1. **G-SIBs (Global Systemically Important Banks):** Các ngân hàng có tầm quan trọng hệ thống toàn cầu, do Ủy ban Ổn định Tài chính (FSB) phối hợp với Ủy ban Basel (BCBS) công bố danh sách hàng năm vào tháng 11 (thường gồm 29–30 ngân hàng lớn nhất hành tinh: JPMorgan Chase, Bank of America, Citigroup, HSBC, BNP Paribas, ICBC, Mitsubishi UFJ...).
  2. **D-SIBs (Domestic Systemically Important Banks):** Các ngân hàng có tầm quan trọng hệ thống trong phạm vi nội địa của một quốc gia cụ thể, do Ngân hàng Trung ương nước đó xác định.
- Chế độ giám sát đặc biệt nghiêm ngặt đối với SIBs:
  - Bắt buộc phải duy trì thêm một lớp **Vốn phụ thu an toàn hệ thống (Capital Surcharge)** từ $1,0\%$ đến $3,5\%$ bằng vốn CET1.
  - Phải lập **"Di chúc sống" (Living Wills / Recovery and Resolution Plans):** Kế hoạch giải thể và thanh lý có trật tự trong trường hợp bị đổ vỡ mà không làm gián đoạn thị trường.
  - Chịu các bài kiểm tra sức chịu đựng (Stress Test) khắt khe nhất và tần suất thanh tra tại chỗ dày đặc hơn.

**3. Công thức & mô hình**
Điểm số đánh giá mức độ quan trọng hệ thống toàn cầu (G-SIB Score):
Dựa trên 12 chỉ báo chia đều cho 5 tiêu chí (mỗi tiêu chí trọng số 20%):

$$
\text{G-SIB Score} = 20\% \times \text{Size} + 20\% \times \text{Interconnectedness} + 20\% \times \text{Substitutability} + 20\% \times \text{Complexity} + 20\% \times \text{Cross-Jurisdictional Activity}
$$

Dựa trên điểm số, các ngân hàng được xếp vào 5 "xô" (Buckets) tương ứng với mức vốn CET1 phụ thu từ $1,0\%$ (Xô 1) đến $3,5\%$ (Xô 5).

**4. Ví dụ**
- Bảng xếp hạng G-SIBs năm 2023 của FSB: JPMorgan Chase là ngân hàng duy nhất bị xếp vào Xô cao nhất đang áp dụng (Xô 4), chịu mức vốn phụ thu thêm tới 2,5% CET1 do quy mô tài sản vượt 3.800 tỷ USD và tính liên kết toàn cầu quá lớn.
- Thụy Sĩ và vụ sáp nhập Credit Suisse: Sau khi Credit Suisse sụp đổ và được sáp nhập vào UBS vào tháng 3/2023, tập đoàn ngân hàng UBS mới sở hữu tổng tài sản lên tới gần 1.700 tỷ USD, gấp đôi toàn bộ quy mô GDP của đất nước Thụy Sĩ, trở thành một "siêu G-SIB" độc nhất vô nhị.
- Việt Nam: Quyết định của Ngân hàng Nhà nước về việc xác định nhóm các Tổ chức Tín dụng có tầm quan trọng hệ thống (D-SIBs tại Việt Nam) thường bao gồm nhóm 4 ngân hàng thương mại nhà nước (Agribank, BIDV, Vietcombank, VietinBank) cùng một số NHTM cổ phần quy mô lớn (như MB, Techcombank, VPBank, ACB, Sacombank...), chịu sự giám sát an toàn vi mô và vĩ mô chặt chẽ hơn từ Cơ quan Thanh tra Giám sát Ngân hàng.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Xóa bỏ rủi ro đạo đức, buộc các siêu ngân hàng phải tự bỏ tiền túi tăng vốn để bảo đảm cho sự an toàn của chính mình thay vì ỷ lại vào chính phủ.
- Tranh luận: Việc chính thức dán nhãn một ngân hàng là G-SIB hoặc D-SIB có thể vô tình tạo ra một "con dấu bảo lãnh ngầm" của nhà nước, khiến người dân và doanh nghiệp tin rằng ngân hàng này không bao giờ có thể bị phá sản, dẫn đến việc dòng tiền gửi lại càng tập trung đổ dồn vào các siêu ngân hàng này, làm trầm trọng thêm vấn đề TBTF.
- Lỗi thường gặp: Nghĩ rằng SIBs chỉ đánh giá dựa trên quy mô tài sản lớn; nhiều ngân hàng quy mô vừa nhưng nắm giữ hạ tầng bù trừ thanh toán độc quyền không thể thay thế (Substitutability) vẫn được xếp vào danh sách định chế tài chính hệ thống.

**6. Liên kết**
- [Quá lớn để sụp đổ (TBTF)](../06_Financial_Regulation_and_Stability/02_Systemic_Risk_and_Financial_Stability.md) · [Basel III](#6-chuẩn-mực-an-toàn-vốn-basel-iii) · [Xử lý ngân hàng (Resolution)](06_Bank_Runs_Failures_and_Resolution.md)

---

## Câu hỏi tự kiểm tra

1. Kiểm tra Sức chịu đựng Ngân hàng (Bank Stress Test) là gì và quy trình đánh giá Đạt / Trượt diễn ra như thế nào?
2. Phân tích công thức xác định Tỷ lệ An toàn Vốn (CAR) theo chuẩn mực Basel II. Tại sao các tài sản khác nhau lại được áp dụng các trọng số rủi ro (RWA) khác nhau?
3. Phân biệt sự khác nhau về mục tiêu và chân trời thời gian giữa hai tỷ lệ thanh khoản của Basel III: Tỷ lệ LCR (30 ngày) và Tỷ lệ NSFR (1 năm).
4. Khung khổ Basel III đã bổ sung những yêu cầu và bộ đệm vốn mới nào so với Basel II để khắc phục bài học khủng hoảng 2008?
5. Ngân hàng có tầm quan trọng hệ thống (SIBs/G-SIBs) được xác định dựa trên những tiêu chí nào và tại sao họ phải chịu mức vốn phụ thu bổ sung khắt khe hơn?

---

## Ghi chú nguồn

- Basel Committee on Banking Supervision (BCBS): *Basel III: A global regulatory framework for more resilient banks and banking systems*.
- Financial Stability Board (FSB): *2023 list of global systemically important banks (G-SIBs)*.
- Board of Governors of the Federal Reserve System: *Dodd-Frank Act Stress Testing (DFAST) Results 2023*.
- Ngân hàng Nhà nước Việt Nam: Thông tư số 41/2016/TT-NHNN và Thông tư số 13/2018/TT-NHNN về tỷ lệ an toàn vốn và hệ thống kiểm soát nội bộ.