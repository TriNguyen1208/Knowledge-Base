# Chuyên đề: Các Rào Chắn Thận Trọng và Rủi Ro Đạo Đức (Prudential Safeguards & Moral Hazard)

Tài liệu này đi sâu vào cơ chế rủi ro đạo đức trong hệ thống bảo hộ tài chính công, các công cụ kiểm soát an toàn cốt lõi bao gồm yêu cầu vốn tự có, bộ đệm thanh khoản, giới hạn đòn bẩy và kỹ thuật kiểm tra sức chịu đựng (Stress Testing) định chế.

---

## 1. Moral Hazard (Rủi ro đạo đức)

### 1. Là gì?
- **Định nghĩa học thuật:** Rủi ro đạo đức (*Moral Hazard*) trong tài chính là hiện tượng một tác nhân kinh tế (ngân hàng, bên đi vay, nhà đầu tư) có xu hướng chấp nhận mức độ rủi ro cao hơn bình thường sau khi đã được bảo vệ hoặc bảo hiểm khỏi những hậu quả tiêu cực của rủi ro đó, do nhận thức rằng nếu xảy ra tổn thất thì bên thứ ba (chính phủ, người đóng thuế, công ty bảo hiểm) sẽ gánh chịu thay.
- **Bản chất trực giác:** Nếu bạn đi thuê một chiếc xe hơi tự lái và không mua gói bảo hiểm thân vỏ, bạn sẽ lái xe vô cùng cẩn trọng, tránh từng ổ gà và đậu xe chỗ an toàn. Nhưng nếu bạn đã mua gói "Bảo hiểm toàn bộ 100% không miễn thường bồi thường mọi hư hại", bạn có xu hướng lái nhanh hơn, phóng qua ổ gà và lơ là bảo vệ xe vì "nếu hỏng thì công ty bảo hiểm đền, mình không mất đồng nào".
- **Nếu chỉ nhớ một điều:** Rủi ro đạo đức là sự mất cân xứng động cơ (*Incentive Mismatch*): hành vi liều lĩnh gia tăng khi một bên hưởng trọn vẹn quả ngọt của thành công nhưng đẩy toàn bộ trái đắng của thất bại cho xã hội gánh chịu.

### 2. Hoạt động thế nào?
1. **Các biểu hiện kinh điển trong hệ thống tài chính:**
   - **Bảo hiểm tiền gửi toàn phần:** Người gửi tiền không còn bận tâm thẩm định năng lực tài chính của ngân hàng, sẵn sàng gửi tiền vào ngân hàng rủi ro nhất miễn là có lãi suất cao. Ngân hàng nhận tiền gửi lại đem đi cho vay các dự án đầu cơ mạo hiểm.
   - **Bảo hộ ngầm định "Too Big to Fail":** Các siêu ngân hàng biết chắc chính phủ không dám để mình phá sản, nên họ thoải mái sử dụng đòn bẩy tài chính cực lớn để đầu cơ chứng khoán phái sinh nhằm tối đa hóa tiền thưởng hàng năm của ban giám đốc.
   - **Cho vay dưới chuẩn (*Subprime Lending*):** Các nhân viên tín dụng cho vay mua nhà bất chấp người vay không có thu nhập (NINJA loans) vì họ lập tức đóng gói món nợ bán lại cho các quỹ đầu tư qua chứng khoán hóa (mô hình *Originate-to-Distribute*).
2. **Hậu quả hệ thống:** Xói mòn kỷ luật thị trường (*Market Discipline*), phân bổ sai lệch nguồn vốn xã hội và tích tụ bong bóng rủi ro không thể kiểm soát.

### 3. Công thức & Mô hình toán học
Mô hình chọn danh mục tài sản của Ngân hàng dưới sự hiện diện của Bảo hiểm Tiền gửi (Merton, 1977):
Giá trị của khoản bảo lãnh cứu trợ của chính phủ ($G$) tương đương với một **Quyền chọn bán kiểu Châu Âu (European Put Option)** trên tài sản của ngân hàng:
$$G = P(A_0, D, T, \sigma) = D e^{-r T} \Phi(-d_2) - A_0 \Phi(-d_1)$$

Trong đó:
- $d_1 = \frac{\ln(A_0 / D) + (r + \frac{1}{2}\sigma^2)T}{\sigma \sqrt{T}}$
- $d_2 = d_1 - \sigma \sqrt{T}$
- $A_0$: Tổng tài sản ngân hàng.
- $D$: Tổng nghĩa vụ nợ tiền gửi phải trả tại thời điểm $T$.
- $\sigma$: Độ biến động rủi ro của tài sản ngân hàng.
- **Quy luật đạo hàm:** $\frac{\partial G}{\partial \sigma} > 0$.
  *Ý nghĩa kinh tế:* Giá trị món quà cứu trợ ($G$) mà ngân hàng nhận được từ chính phủ tỷ lệ thuận với độ rủi ro ($\sigma$) của danh mục cho vay. Ngân hàng càng đầu cơ liều lĩnh ($\sigma$ càng cao), giá trị bảo hộ ngầm nhận được càng lớn!

### 4. Ví dụ
- **Ví dụ số học:** Ngân hàng có tài sản 100 triệu USD, nợ tiền gửi 95 triệu USD ($D = 95$). Nếu ngân hàng đầu tư danh mục an toàn ($\sigma = 5\%$), giá trị quyền chọn cứu trợ $G$ gần như bằng 0. Nhưng nếu ban lãnh đạo đánh bạc đầu tư vào tiền ảo và trái phiếu rác ($\sigma = 40\%$), mô hình định giá quyền chọn cho thấy giá trị bảo hiểm ngầm định $G$ vọt lên 8.2 triệu USD. Ban lãnh đạo có động cơ tối đa hóa rủi ro vì nếu thắng họ chia thưởng lớn, nếu thua chính phủ phải bù đắp 8.2 triệu USD cứu trợ.
- **Thực tế Quốc tế:** Khủng hoảng Tiết kiệm và Cho vay (S&L Crisis) tại Mỹ thập niên 1980. Chính phủ nâng hạn mức bảo hiểm tiền gửi từ $40.000 lên $100.000 USD nhưng đồng thời nới lỏng quản lý, các quỹ S&L đã lao vào đầu cơ bất động sản thương mại và trái phiếu rác. Khi vỡ nợ hàng loạt, người nộp thuế Mỹ phải gánh chịu khoản bồi thường cứu trợ lên tới 124 tỷ USD.
- **Kịch bản phản thực tế (Counterfactual):** Nếu chính phủ tuyên bố tuyệt đối không bảo lãnh cứu trợ bất kỳ ngân hàng nào và thực thi nghiêm minh việc cho phép ngân hàng phá sản, các quỹ đầu tư và người gửi tiền sẽ tự động siết chặt kỷ luật: rút vốn khỏi các ngân hàng có tỷ lệ đòn bẩy quá 15 lần, buộc ban lãnh đạo ngân hàng phải tự động siết chặt quản trị rủi ro mà không cần đến cảnh sát tài chính.

### 5. Ứng dụng & Tranh luận
- **Ứng dụng thực tiễn:** Thiết kế chính sách bảo hiểm tiền gửi có trần hạn mức (co-insurance), áp dụng mức phí bảo hiểm tiền gửi biến đổi theo mức độ rủi ro (*Risk-based Premiums*), cơ chế thu hồi tiền thưởng (*Clawback Provisions*) đối với CEO ngân hàng làm ăn thua lỗ.
- **Tranh luận & Đánh đổi:** Tiến thoái lưỡng nan của nhà điều hành: Cứu trợ ngân hàng thì dung túng rủi ro đạo đức, nhưng không cứu trợ thì nền kinh tế sụp đổ vì rủi ro hệ thống (*Bailout Dilemma*).
- **Cạm bẫy tư duy:** Đánh đồng rủi ro đạo đức với hành vi phạm pháp lừa đảo hình sự. Rủi ro đạo đức hoàn toàn là hành vi hợp lý về mặt kinh tế (*rational economic behavior*) của các tác nhân khi họ tối ưu hóa lợi ích cá nhân dưới một khung thể chế bị méo mó về động cơ.

### 6. Liên kết khái niệm
- [Too Big to Fail](file:///Users/ductri0981/Documents/Studying/Studying-Economic/03_Money_Banking_and_Financial_Systems/06_Financial_Regulation_and_Stability/02_Systemic_Risk_and_Financial_Stability.md#4-too-big-to-fail-qua-lon-de-sup-do) (Mảnh đất màu mỡ nhất sinh ra rủi ro đạo đức)
- [Deposit Insurance](file:///Users/ductri0981/Documents/Studying/Studying-Economic/03_Money_Banking_and_Financial_Systems/06_Financial_Regulation_and_Stability/04_Safety_Nets_and_Market_Integrity.md#1-deposit-insurance-bao-hiem-tien-gui) (Lưới an toàn tạo ra rủi ro đạo đức nếu thiết kế sai)
- [Capital Requirements](file:///Users/ductri0981/Documents/Studying/Studying-Economic/03_Money_Banking_and_Financial_Systems/06_Financial_Regulation_and_Stability/03_Prudential_Safeguards_and_Moral_Hazard.md#2-capital-requirements-yeu-cau-von) (Công cụ chống rủi ro đạo đức bằng cách buộc ngân hàng tự bỏ tiền túi chịu rủi ro)

---

## 2. Capital Requirements (Yêu cầu vốn)

### 2.1. Là gì?
- **Định nghĩa học thuật:** Yêu cầu vốn (*Capital Requirements*) là quy định pháp lý bắt buộc các định chế tài chính (chủ yếu là ngân hàng) phải duy trì một lượng vốn tự có (*Own Funds / Regulatory Capital*) tối thiểu tương ứng với quy mô và mức độ rủi ro của các tài sản mà họ nắm giữ, đóng vai trò là lớp đệm hấp thụ các khoản lỗ phát sinh trước khi xâm phạm đến tiền gửi của khách hàng.
- **Bản chất trực giác:** Vốn tự có giống như tiền cọc cá nhân của chính ngân hàng bỏ vào "cuộc chơi" kinh doanh. Nếu ngân hàng chỉ dùng 100% tiền gửi của dân đi cho vay, họ sẽ rất liều lĩnh. Nhưng nếu cơ quan điều tiết bắt buộc: "Cứ 10 đồng cho vay rủi ro, ngân hàng phải bỏ ra ít nhất 1 đồng tiền túi của cổ đông để lót đáy chịu lỗ trước", các cổ đông sẽ giám sát gắt gao ban điều hành để bảo vệ túi tiền của chính mình.
- **Nếu chỉ nhớ một điều:** Yêu cầu vốn là chiếc phao cứu sinh của bảng cân đối kế toán: hấp thụ các cú sốc thua lỗ để ngân hàng duy trì trạng thái có khả năng thanh toán (*Solvent*).

### 2.2. Hoạt động thế nào?
1. **Phân tầng cấu trúc Vốn điều tiết (Regulatory Capital Tiers):**
   - **Vốn Cấp 1 Cốt lõi (Common Equity Tier 1 - CET1):** Vốn có chất lượng cao nhất, có khả năng hấp thụ lỗ khi ngân hàng đang hoạt động bình thường (*Going-concern*), gồm: Cổ phần phổ thông, thặng dư vốn cổ phần, lợi nhuận giữ lại tích lũy.
   - **Vốn Cấp 1 Bổ sung (Additional Tier 1 - AT1):** Các công cụ nợ lai ghép có thể chuyển đổi thành cổ phiếu hoặc xóa nợ khi CET1 rơi xuống dưới ngưỡng quy định (như trái phiếu CoCo).
   - **Vốn Cấp 2 (Tier 2 Capital):** Vốn hấp thụ tổn thất khi ngân hàng giải thể hoặc thanh lý (*Gone-concern*), gồm trái phiếu thứ cấp kỳ hạn dài và dự phòng rủi ro chung.
2. **Cơ chế tính toán theo Tài sản Có Rủi ro (Risk-Weighted Assets - RWA):**
   - Không đánh đồng mọi loại tài sản: Cho vay thế chấp nhà ở rủi ro thấp hơn cho vay doanh nghiệp không tài sản bảo đảm; tiền mặt và trái phiếu chính phủ có rủi ro bằng 0.

### 2.3. Công thức & Mô hình toán học
Tỷ lệ an toàn vốn tổng hợp theo khung Basel III:
$$\text{CET1 Ratio} = \frac{\text{CET1 Capital}}{\text{RWA}} \ge 4.5\%$$
$$\text{Tier 1 Ratio} = \frac{\text{Tier 1 Capital}}{\text{RWA}} \ge 6.0\%$$
$$\text{Total CAR} = \frac{\text{Tier 1 Capital} + \text{Tier 2 Capital}}{\text{RWA}} \ge 8.0\%$$

Trong đó:
$$\text{RWA} = \text{RWA}_{\text{Credit}} + \text{RWA}_{\text{Market}} + \text{RWA}_{\text{Operational}}$$
Ngoài ra, Basel III bổ sung thêm hai bộ đệm vốn bắt buộc:
- **Bộ đệm bảo toàn vốn (Capital Conservation Buffer - CCB):** $+2.5\%$ bằng CET1 (nâng chuẩn CET1 thực tế lên $7.0\%$).
- **Bộ đệm phản chu kỳ (Countercyclical Buffer - CCyB):** $0\% - 2.5\%$.

### 2.4. Ví dụ
- **Ví dụ số học:** Ngân hàng có bảng tài sản gồm: 100 tỷ VND tiền mặt ($w = 0\%$), 400 tỷ VND trái phiếu chính phủ ($w = 0\%$), 1.000 tỷ VND cho vay thế chấp nhà ở ($w = 50\%$), và 1.000 tỷ VND cho vay doanh nghiệp tín chấp ($w = 100\%$).
  $$\text{RWA} = 100 \times 0\% + 400 \times 0\% + 1.000 \times 50\% + 1.000 \times 100\% = 1.500 \text{ tỷ VND}$$
  Để đạt chuẩn an toàn vốn tối thiểu $\text{CAR} \ge 8\%$, vốn tự có tối thiểu ngân hàng bắt buộc phải duy trì là:
  $$\text{Capital} \ge 8\% \times 1.500 \text{ tỷ} = 120 \text{ tỷ VND}$$
- **Thực tế Việt Nam:** Thông tư 41/2016/TT-NHNN của Ngân hàng Nhà nước áp dụng chuẩn Basel II (phương pháp chuẩn hóa Standardised Approach) với tỷ lệ CAR tối thiểu $8.0\%$. Đến nay, phần lớn các NHTM cổ phần quy mô lớn (như MBB, Techcombank, VPBank, ACB) đã đạt và duy trì CAR từ $11\% - 15\%$, vượt xa yêu cầu tối thiểu.
- **Kịch bản phản thực tế (Counterfactual):** Nếu các ngân hàng không bị ràng buộc bởi yêu cầu vốn, trong các chu kỳ kinh tế hưng phấn, họ sẽ dùng 100% nợ vay để khuếch đại lợi nhuận trên vốn chủ sở hữu (ROE). Chỉ cần tài sản giảm giá nhẹ $2\% - 3\%$, toàn bộ vốn tự có sẽ bị xóa sạch, đẩy ngân hàng vào tình trạng âm vốn chủ sở hữu (*Insolvent*) ngay lập tức.

### 2.5. Ứng dụng & Tranh luận
- **Ứng dụng thực tiễn:** Trụ cột số 1 của hiệp ước Basel, điều kiện tiên quyết để được cấp phép mở rộng chi nhánh hoặc trả cổ tức bằng tiền mặt cho cổ đông.
- **Tranh luận & Đánh đổi:** 
  - *Định lý Modigliani-Miller và Chi phí vốn:* Giới ngân hàng thường phàn nàn rằng tăng vốn tự có làm đội chi phí vốn, giảm ROE và buộc họ phải tăng lãi suất cho vay. Tuy nhiên, các nhà kinh tế học (như Anat Admati) chứng minh rằng ngân hàng có nhiều vốn tự có hơn sẽ an toàn hơn, do đó chi phí nợ vay và chi phí kỳ vọng cổ phiếu sẽ tự động giảm xuống.
- **Cạm bẫy tư duy:** Nhầm lẫn "Vốn tự có" (*Capital*) với "Tiền mặt dự trữ" (*Reserves/Cash*). Vốn tự có là khoản mục nằm bên Nguồn Vốn (Bên Nợ/Vốn chủ sở hữu), phản ánh giá trị tài sản thuần của cổ đông, không phải là một cọc tiền mặt nằm chết trong két sắt.

### 2.6. Liên kết khái niệm
- [Bank Capital](file:///Users/ductri0981/Documents/Studying/Studying-Economic/03_Money_Banking_and_Financial_Systems/03_Banking_Systems/04_Bank_Balance_Sheet_Reserves_and_Capital.md) (Khái niệm vốn tự có trên bảng cân đối kế toán)
- [Capital Adequacy Ratio](file:///Users/ductri0981/Documents/Studying/Studying-Economic/03_Money_Banking_and_Financial_Systems/03_Banking_Systems/07_Prudential_Ratios_Stress_Testing_and_Basel.md) (Chỉ số đo lường chi tiết)
- [Leverage Limits](file:///Users/ductri0981/Documents/Studying/Studying-Economic/03_Money_Banking_and_Financial_Systems/06_Financial_Regulation_and_Stability/03_Prudential_Safeguards_and_Moral_Hazard.md#4-leverage-limits-gioi-han-don-bay) (Chốt chặn bổ trợ cho yêu cầu vốn)

---

## 3. Liquidity Requirements (Yêu cầu thanh khoản)

### 3.1. Là gì?
- **Định nghĩa học thuật:** Yêu cầu thanh khoản (*Liquidity Requirements*) là các tiêu chuẩn bắt buộc do cơ quan quản lý áp đặt nhằm đảm bảo các định chế tài chính luôn sở hữu một lượng tài sản có tính thanh khoản cao (*High-Quality Liquid Assets - HQLA*) đủ để đáp ứng kịp thời mọi nghĩa vụ thanh toán và dòng tiền rút ra trong các kịch bản căng thẳng tài chính ngắn hạn và dài hạn.
- **Bản chất trực giác:** Một người có thể sở hữu 10 căn biệt thự trị giá 200 tỷ đồng (rất giàu, có thừa khả năng thanh toán - *Solvent*), nhưng đến chiều nay phải trả 50 triệu đồng tiền mặt viện phí cấp cứu mà trong túi không có một xu và không thể bán nhà ngay lập tức thì người đó bị chết vì "mất thanh khoản" (*Illiquid*). Yêu cầu thanh khoản bắt buộc bạn phải luôn giữ tiền mặt và vàng trong két để ứng phó với bất trắc tức thì.
- **Nếu chỉ nhớ một điều:** Thanh khoản là dòng máu tuần hoàn: một ngân hàng có thể có thừa vốn tự có nhưng vẫn bị phá sản trong 24 giờ nếu cạn kiệt thanh khoản tiền mặt.

### 3.2. Hoạt động thế nào?
1. **Hai thước đo thanh khoản bổ trợ nhau theo Basel III:**
   - **Tỷ lệ đảm bảo khả năng thanh khoản (Liquidity Coverage Ratio - LCR):** Đo lường sức chống chịu thanh khoản *ngắn hạn* trong vòng 30 ngày dưới kịch bản khủng hoảng căng thẳng dữ dội.
   - **Tỷ lệ tạo vốn ổn định thuần (Net Stable Funding Ratio - NSFR):** Đo lường tính ổn định của cơ cấu nguồn vốn trong kỳ hạn *dài hạn* 1 năm nhằm hạn chế rủi ro phụ thuộc quá mức vào các khoản vay ngắn hạn liên ngân hàng.
2. **Đặc điểm của Tài sản có tính thanh khoản cao (HQLA):**
   - Tiền mặt tại quỹ, tiền gửi dự trữ tại Ngân hàng Trung ương.
   - Trái phiếu chính phủ và trái phiếu được chính phủ bảo lãnh có xếp hạng $AAA/AA$ (được chuyển đổi thành tiền mặt ngay lập tức trên thị trường Repo mà không bị sụt giá đáng kể).

### 3.3. Công thức & Mô hình toán học
Quy chuẩn thanh khoản ngắn hạn **Liquidity Coverage Ratio (LCR):**
$$\text{LCR} = \frac{\text{Total High-Quality Liquid Assets (HQLA)}}{\text{Total Net Cash Outflows over 30 days}} \ge 100\%$$

Trong đó:
$$\text{Net Cash Outflows} = \text{Total Expected Cash Outflows} - \min(\text{Total Expected Cash Inflows}, 75\% \times \text{Expected Outflows})$$
- Tỷ lệ rút tiền kỳ vọng (*Run-off rates*) được gán theo mức độ rủi ro: Tiền gửi thanh toán bán lẻ ổn định chỉ tính tỷ lệ rút $5\%$, nhưng tiền gửi của các định chế tài chính bán buôn không bảo đảm có thể bị tính tỷ lệ rút lên tới $100\%$.

### 3.4. Ví dụ
- **Ví dụ số học:** Ngân hàng B mô phỏng kịch bản khủng hoảng 30 ngày: Dự kiến người gửi tiền và các đối tác sẽ rút ròng 200 triệu USD tiền mặt. Để đạt chuẩn $\text{LCR} \ge 100\%$, ngân hàng B bắt buộc phải nắm giữ trong danh mục một lượng HQLA (gồm tiền mặt và trái phiếu chính phủ) tối thiểu bằng 200 triệu USD.
- **Thực tế Quốc tế:** Vụ sụp đổ của ngân hàng Silicon Valley Bank (SVB) năm 2023. Trong vòng duy nhất 1 ngày (9/3/2023), người gửi tiền đã rút 42 tỷ USD thông qua ứng dụng di động (tương đương $25\%$ tổng tiền gửi ngân hàng), và tiếp tục yêu cầu rút thêm 100 tỷ USD vào sáng hôm sau. Dù SVB có tài sản lớn nhưng tài sản bị kẹt trong các trái phiếu dài hạn mất giá, ngân hàng không đủ HQLA tiền mặt để chi trả và sụp đổ chỉ sau 48 giờ.
- **Kịch bản phản thực tế (Counterfactual):** Nếu các ngân hàng trước năm 2007 bị ép tuân thủ chuẩn LCR và NSFR, các ngân hàng đầu tư phố Wall đã không thể sử dụng mô hình kinh doanh tài trợ các khoản cho vay thế chấp 30 năm bằng các hợp đồng vay nóng qua đêm (Overnight Repo), và cuộc khủng hoảng đóng băng tín dụng 2007–2008 đã không thể bùng nổ dữ dội như vậy.

### 3.5. Ứng dụng & Tranh luận
- **Ứng dụng thực tiễn:** Phòng chống đột biến rút tiền gửi (*Bank Run*), bảo vệ thị trường tiền tệ liên ngân hàng không bị đóng băng khi có tin đồn tiêu cực.
- **Tranh luận & Đánh đổi:** Bắt buộc nắm giữ quá nhiều tài sản HQLA (chủ yếu là trái phiếu chính phủ lợi suất thấp) làm giảm biên lãi ròng (NIM) của các ngân hàng thương mại và giảm lượng vốn giải ngân vào các dự án sản xuất thực tế.
- **Cạm bẫy tư duy:** Tưởng rằng có lãi ròng cao là sẽ không lo thiếu thanh khoản. Rất nhiều ngân hàng sụp đổ ngay trong năm tài chính họ vừa công bố lợi nhuận kỷ lục vì toàn bộ lợi nhuận nằm trên giấy tờ chưa thu được tiền mặt, trong khi nghĩa vụ nợ ngắn hạn đến hạn đòi ngay lập tức.

### 3.6. Liên kết khái niệm
- [Bank Liquidity](file:///Users/ductri0981/Documents/Studying/Studying-Economic/03_Money_Banking_and_Financial_Systems/03_Banking_Systems/04_Bank_Balance_Sheet_Reserves_and_Capital.md) (Khái niệm thanh khoản ngân hàng)
- [Liquidity Coverage Ratio (LCR)](file:///Users/ductri0981/Documents/Studying/Studying-Economic/03_Money_Banking_and_Financial_Systems/03_Banking_Systems/07_Prudential_Ratios_Stress_Testing_and_Basel.md) (Chỉ số LCR chi tiết)
- [Net Stable Funding Ratio (NSFR)](file:///Users/ductri0981/Documents/Studying/Studying-Economic/03_Money_Banking_and_Financial_Systems/03_Banking_Systems/07_Prudential_Ratios_Stress_Testing_and_Basel.md) (Chỉ số NSFR chi tiết)

---

## 4. Leverage Limits (Giới hạn đòn bẩy)

### 4.1. Là gì?
- **Định nghĩa học thuật:** Giới hạn đòn bẩy (*Leverage Limits* hoặc *Leverage Ratio*) là quy định an toàn thận trọng phi trọng số rủi ro (*non-risk-weighted backstop*), áp đặt mức trần tối đa đối với tổng quy mô tài sản nội bảng và ngoại bảng của một định chế tài chính so với quy mô vốn Cấp 1 của chính định chế đó, bất kể tài sản đó được phân loại là an toàn đến mức nào.
- **Bản chất trực giác:** Hãy tưởng tượng bạn đi mua nhà: Ngân hàng nói nhà ở khu này rất an toàn, nhưng quy định giới hạn đòn bẩy đặt ra một luật thép: "Dù nhà an toàn thế nào, bạn bắt buộc phải có tối thiểu 5% tiền túi, không được phép vay nợ quá 95%". Giới hạn đòn bẩy ngăn chặn việc các ngân hàng dùng mánh khóe định giá rủi ro để thổi phồng bảng tài sản lên vô hạn.
- **Nếu chỉ nhớ một điều:** Giới hạn đòn bẩy là "chốt chặn an toàn cuối cùng" độc lập với các mô hình rủi ro, bảo vệ hệ thống khỏi các lỗ hổng đo lường sai lệch của chính các chuyên gia ngân hàng.

### 4.2. Hoạt động thế nào?
1. **Lý do ra đời của Giới hạn đòn bẩy:**
   - Trong khuôn khổ Basel II, các ngân hàng được phép dùng mô hình nội bộ (IRB) để tự tính trọng số rủi ro ($w_i$). Nhiều ngân hàng đã "tối ưu hóa quy định" (*Gaming the system*), gán trọng số rủi ro cực thấp cho các sản phẩm phái sinh phức tạp để giữ tỷ lệ CAR trên giấy tờ rất cao, trong khi đòn bẩy thực tế ngoài đời đã vọt lên mức 40:1 hoặc 50:1.
2. **Cơ chế hoạt động của Basel III Leverage Ratio:**
   - Hoàn toàn **không dùng trọng số rủi ro**.
   - Mọi đồng tiền tài sản (dù là tiền mặt, trái phiếu chính phủ hay cho vay rủi ro) đều được tính ngang nhau với tỷ lệ 1:1.
   - Tính gộp cả các cam kết tài trợ ngoại bảng (*Off-balance sheet exposures*) như hạn mức thẻ tín dụng chưa dùng, bảo lãnh thanh toán và hợp đồng phái sinh.

### 4.3. Công thức & Mô hình toán học
Quy định tỷ lệ đòn bẩy Basel III:
$$\text{Leverage Ratio} = \frac{\text{Tier 1 Capital}}{\text{Total Exposure}} \ge 3.0\%$$

Trong đó $\text{Total Exposure}$ bao gồm:
$$\text{Total Exposure} = \text{On-balance sheet assets} + \text{Derivative exposures} + \text{Securities financing transactions} + \text{Off-balance sheet items}$$
- Tỷ lệ $\ge 3\%$ tương đương với việc hệ số đòn bẩy tối đa của ngân hàng không được phép vượt quá:
$$\text{Max Leverage Multiple} = \frac{1}{3\%} \approx 33.3 \text{ lần}$$
- Đối với các siêu ngân hàng toàn cầu (G-SIBs), mức đòn bẩy bắt buộc phải cao hơn: thường từ $4.0\% - 5.0\%$.

### 4.4. Ví dụ
- **Ví dụ số học:** Ngân hàng C có vốn Cấp 1 là 30 tỷ USD. Tổng tài sản nội bảng là 800 tỷ USD và cam kết phái sinh ngoại bảng tương đương 400 tỷ USD.
  $$\text{Total Exposure} = 800 + 400 = 1.200 \text{ tỷ USD}$$
  $$\text{Leverage Ratio} = \frac{30}{1.200} = 2.5\%$$
  Mặc dù tỷ lệ an toàn vốn theo trọng số rủi ro ($\text{CAR}$) của ngân hàng C có thể đạt $10\%$ (do phần lớn tài sản là chứng khoán có bảo đảm), nhưng ngân hàng C vẫn bị coi là **vi phạm giới hạn đòn bẩy** (vì $2.5\% < 3.0\%$). Ngân hàng bị buộc phải phát hành thêm cổ phiếu hoặc bán bớt tài sản.
- **Thực tế Quốc tế:** Năm 2008, trước thời điểm sụp đổ, ngân hàng đầu tư Lehman Brothers hoạt động với tỷ lệ đòn bẩy lên tới 31:1, trong khi Merrill Lynch lên tới 32:1. Điều này đồng nghĩa với việc chỉ cần tài sản của họ giảm giá $3.1\%$, toàn bộ vốn tự có sẽ biến mất sạch sẽ.
- **Kịch bản phản thực tế (Counterfactual):** Nếu giới hạn đòn bẩy tối đa 20:1 ($\text{Leverage Ratio} \ge 5\%$) được áp dụng nghiêm ngặt cho toàn bộ hệ thống ngân hàng đầu tư phố Wall từ năm 2000, các ngân hàng đã không thể phình to bảng tài sản phái sinh lên hàng chục ngàn tỷ USD và cuộc sụp đổ tài chính 2008 đã bị chặn đứng từ trong trứng nước.

### 4.5. Ứng dụng & Tranh luận
- **Ứng dụng thực tiễn:** Ngăn chặn hiện tượng tích tụ đòn bẩy quá mức trong thời kỳ bùng nổ tín dụng, đơn giản hóa công tác giám sát, hạn chế gian lận mô hình rủi ro.
- **Tranh luận & Đánh đổi:** 
  - *Hình phạt cho tài sản an toàn:* Do giới hạn đòn bẩy không phân biệt rủi ro, nó đối xử với tiền mặt và trái phiếu chính phủ hoàn toàn bình đẳng với các khoản vay rủi ro cao. Điều này vô tình tạo động cơ cho các ngân hàng bán bớt trái phiếu chính phủ an toàn và mua vào các tài sản rủi ro cao có lợi suất lớn để tối ưu hóa lợi nhuận trên mỗi đồng đòn bẩy cho phép.
- **Cạm bẫy tư duy:** Tưởng rằng Giới hạn đòn bẩy ra đời để thay thế Yêu cầu an toàn vốn (CAR). Thực tế, đây là hai cơ chế song hành bổ trợ: CAR xử lý rủi ro chất lượng tài sản, còn Leverage Limits xử lý rủi ro quy mô phình to quá mức của định chế.

### 4.6. Liên kết khái niệm
- [Capital Requirements](file:///Users/ductri0981/Documents/Studying/Studying-Economic/03_Money_Banking_and_Financial_Systems/06_Financial_Regulation_and_Stability/03_Prudential_Safeguards_and_Moral_Hazard.md#2-capital-requirements-yeu-cau-von) (Công cụ an toàn vốn dựa trên trọng số rủi ro)
- [Basel Framework](file:///Users/ductri0981/Documents/Studying/Studying-Economic/03_Money_Banking_and_Financial_Systems/06_Financial_Regulation_and_Stability/07_Global_Regulatory_Frameworks.md) (Nơi khai sinh chuẩn đòn bẩy 3%)
- [Bank Solvency](file:///Users/ductri0981/Documents/Studying/Studying-Economic/03_Money_Banking_and_Financial_Systems/03_Banking_Systems/04_Bank_Balance_Sheet_Reserves_and_Capital.md) (Mục tiêu bảo vệ khả năng thanh toán)

---

## 5. Stress Testing (Kiểm tra sức chịu đựng)

### 5.1. Là gì?
- **Định nghĩa học thuật:** Kiểm tra sức chịu đựng (*Stress Testing*) là kỹ thuật phân tích định lượng mô phỏng nhằm đánh giá năng lực tài chính, mức độ đủ vốn và khả năng thanh khoản của một định chế hoặc của toàn bộ hệ thống tài chính trước các kịch bản suy thoái kinh tế vĩ mô cực đoan nhưng có thể xảy ra (*severe but plausible adverse scenarios*).
- **Bản chất trực giác:** Stress Testing giống như việc các kỹ sư thử nghiệm va đập ô tô: người ta không đợi chiếc xe lao ra đường gặp tai nạn thật mới biết túi khí có nổ không. Họ đưa chiếc xe vào phòng thí nghiệm, cho xe đâm thẳng vào tường bê tông ở tốc độ 100 km/h để đo lường xem khung xe có gãy và hình nộm bên trong có sống sót không.
- **Nếu chỉ nhớ một điều:** Kiểm tra sức chịu đựng là bài thi "áp lực tột độ" trong phòng thí nghiệm máy tính, đo lường sức bền của ngân hàng trước viễn cảnh tận thế kinh tế giả định.

### 5.2. Hoạt động thế nào?
1. **Các bước tiến hành một kỳ Stress Test chuẩn:**
   - **Xây dựng kịch bản (Scenario Design):** Thường gồm Kịch bản Cơ sở (*Baseline Scenario*) và Kịch bản Bất lợi Nghiêm trọng (*Severely Adverse Scenario*), ví dụ: GDP giảm $5\%$, tỷ lệ thất nghiệp tăng vọt lên $10\%$, giá nhà đất lao dốc $30\%$, thị trường chứng khoán giảm $50\%$.
   - **Chuyển tải tác động kinh tế (Macro-to-Financial Transmission):** Sử dụng các mô hình kinh tế lượng để dự báo tỷ lệ vỡ nợ của khách hàng ($PD$), tỷ lệ tổn thất ($LGD$), và tốc độ sụt giảm giá trị tài sản đầu tư.
   - **Tính toán tác động vốn:** Xác định số vốn CET1 bị bốc hơi và tỷ lệ CAR còn lại sau cú sốc.
   - **Hành động điều tiết:** Nếu sau kịch bản cực đoan mà tỷ lệ an toàn vốn của ngân hàng rơi xuống dưới ngưỡng tối thiểu, cơ quan quản lý sẽ cấm ngân hàng chia cổ tức, cấm mua lại cổ phiếu quỹ và yêu cầu phải tăng vốn khẩn cấp.
2. **Các hình thức Stress Test chính:**
   - *DFAST & CCAR tại Mỹ:* Do Fed chủ trì hàng năm đối với các đại ngân hàng.
   - *EBA Stress Test tại Châu Âu:* Do Cơ quan Giám sát Ngân hàng Châu Âu thực hiện.

### 5.3. Công thức & Mô hình toán học
Mô hình ước lượng tổn thất nợ tín dụng trong kịch bản Stress Test:
$$\ln\left(\frac{PD_{t,s}}{1 - PD_{t,s}}\right) = \alpha + \beta_1 \Delta \text{GDP}_{t,s} + \beta_2 \Delta \text{Unemp}_{t,s} + \beta_3 \Delta \text{InterestRate}_{t,s} + \epsilon_t$$

Dự báo mức vốn CET1 còn lại tại cuối kỳ kiểm tra ($t = T$):
$$\text{CET1}_T^{stressed} = \text{CET1}_0 + \sum_{t=1}^{T} \left( \text{PPNR}_t^{stressed} - \text{Credit Losses}_t^{stressed} - \text{Market Losses}_t^{stressed} \right)$$
Trong đó:
- $\text{PPNR}$ (*Pre-Provision Net Revenue*): Lợi nhuận thuần trước trích lập dự phòng dưới điều kiện suy thoái.
- $\text{Credit Losses} = \sum \text{EAD}_t \times PD_t^{stressed} \times LGD_t^{stressed}$.
- Điều kiện Đạt (*Pass*): $\text{CET1 Ratio}_T^{stressed} \ge 4.5\%$ trong toàn bộ chu kỳ mô phỏng.

### 5.4. Ví dụ
- **Ví dụ số học:** Ngân hàng D bước vào kỳ Stress Test với tỷ lệ $\text{CET1} = 11.5\%$. Fed áp kịch bản suy thoái nặng trong 9 quý: GDP Mỹ sụt giảm $8.75\%$, thất nghiệp vọt lên $10\%$. Mô phỏng cho thấy danh mục cho vay của ngân hàng lỗ 45 tỷ USD, danh mục trái phiếu mất giá 15 tỷ USD, tổng tổn thất 60 tỷ USD trong khi lợi nhuận PPNR chỉ gỡ lại được 35 tỷ USD (thất thoát ròng 25 tỷ USD vốn).
  Sau cú sốc, tỷ lệ CET1 của ngân hàng D giảm xuống còn $6.2\%$. Vì $6.2\% > 4.5\%$ (ngưỡng tối thiểu bắt buộc), ngân hàng D chính thức "vượt qua kỳ thi" (*Pass*), nhưng bị hạn chế mức chia cổ tức để bảo toàn vốn.
- **Thực tế Quốc tế:** Chương trình SCAP (Supervisory Capital Assessment Program) do Fed triển khai năm 2009 cho 19 ngân hàng lớn nhất nước Mỹ là một bước ngoặt lịch sử. Việc công khai minh bạch kết quả Stress Test đã xua tan màn sương mù hoài nghi của thị trường, giúp các ngân hàng Mỹ huy động thành công hàng chục tỷ USD vốn tư nhân để vượt qua khủng hoảng.
- **Kịch bản phản thực tế (Counterfactual):** Nếu các bài kiểm tra sức chịu đựng tại châu Âu năm 2010 thiết lập kịch bản vỡ nợ trái phiếu chính phủ Hy Lạp thay vì giả định phi thực tế rằng "trái phiếu chính phủ luôn an toàn 100%", hệ thống ngân hàng châu Âu đã được tái cấp vốn sớm hơn 2 năm và tránh được cuộc khủng hoảng nợ công Eurozone kéo dài đau đớn.

### 5.5. Ứng dụng & Tranh luận
- **Ứng dụng thực tiễn:** Quyết định hạn mức chi trả cổ tức và mua lại cổ phiếu quỹ của ngân hàng, định hình văn hóa quản trị rủi ro chủ động, công cụ kiểm toán minh bạch cho nhà đầu tư.
- **Tranh luận & Đánh đổi:** 
  - *Rủi ro "Thiên nga đen" (Black Swan):* Các kịch bản Stress Test dù tinh vi đến đâu cũng thường được xây dựng dựa trên các mối tương quan trong quá khứ. Nó hoàn toàn có thể bỏ sót những biến cố chưa từng có tiền lệ (như đại dịch toàn cầu hoặc chiến tranh địa chính trị bất ngờ).
  - *Tâm lý đối phó:* Các ngân hàng học vẹt cách vượt qua đề thi của cơ quan quản lý thay vì thực sự nâng cao sức chống chịu rủi ro thực tế.
- **Cạm bẫy tư duy:** Tưởng rằng vượt qua Stress Test đồng nghĩa với việc ngân hàng không bao giờ phá sản. Kết quả kiểm tra chỉ có giá trị đối với các giả định cụ thể của kịch bản đó; nếu thực tế xảy ra một cú sốc đi theo hướng khác (ví dụ: rút tiền kỹ thuật số siêu tốc như vụ SVB), ngân hàng vẫn có thể đổ vỡ.

### 5.6. Liên kết khái niệm
- [Bank Stress Test](file:///Users/ductri0981/Documents/Studying/Studying-Economic/03_Money_Banking_and_Financial_Systems/03_Banking_Systems/07_Prudential_Ratios_Stress_Testing_and_Basel.md) (Khái niệm cơ bản từ góc nhìn ngân hàng)
- [Financial Supervision](file:///Users/ductri0981/Documents/Studying/Studying-Economic/03_Money_Banking_and_Financial_Systems/06_Financial_Regulation_and_Stability/01_Regulatory_Architecture_and_Supervision.md#2-financial-supervision-giam-sat-tai-chinh) (Cơ quan giám sát đứng ra tổ chức bài thi)
- [Capital Requirements](file:///Users/ductri0981/Documents/Studying/Studying-Economic/03_Money_Banking_and_Financial_Systems/06_Financial_Regulation_and_Stability/03_Prudential_Safeguards_and_Moral_Hazard.md#2-capital-requirements-yeu-cau-von) (Chỉ số đích mà Stress Test kiểm tra)

---

## Câu hỏi tự kiểm tra (Self-Quiz)
1. Theo mô hình định giá quyền chọn của Robert Merton (1977), tại sao sự hiện diện của bảo hiểm tiền gửi hoặc bảo lãnh cứu trợ của chính phủ lại khuyến khích các ngân hàng gia tăng mức độ rủi ro ($\sigma$) của danh mục tài sản?
2. Trình bày sự khác biệt căn bản giữa Vốn Cấp 1 Cốt lõi (CET1) và Vốn Cấp 2 (Tier 2 Capital) về chức năng hấp thụ tổn thất tài chính của ngân hàng?
3. Phân biệt mục tiêu và khoảng thời gian đo lường giữa hai chỉ số an toàn thanh khoản theo Basel III: Tỷ lệ đảm bảo khả năng thanh khoản (LCR) và Tỷ lệ tạo vốn ổn định thuần (NSFR)?
4. Tại sao Ủy ban Basel lại đưa ra chỉ tiêu Giới hạn đòn bẩy (*Leverage Ratio*) phi trọng số rủi ro bên cạnh các chỉ tiêu an toàn vốn dựa trên tài sản có rủi ro (RWA)?
5. Quy trình thực hiện một cuộc kiểm tra sức chịu đựng (*Stress Testing*) ngân hàng vĩ mô bao gồm những bước cơ bản nào?

---

## Ghi chú nguồn tham khảo
- Merton, R. C. (1977). *An analytic derivation of the cost of deposit insurance and loan guarantees an application of modern option pricing theory*. Journal of Banking & Finance, 1(1), 3-11.
- Basel Committee on Banking Supervision. (2013). *Basel III: The Liquidity Coverage Ratio and liquidity risk monitoring tools*. BIS.
- Admati, A., & Hellwig, M. (2014). *The Bankers' New Clothes: What's Wrong with Banking and What to Do About It*. Princeton University Press.
- Federal Reserve Board. (2023). *Dodd-Frank Act Stress Testing (DFAST) Results*.
- Ngân hàng Nhà nước Việt Nam: *Thông tư 41/2016/TT-NHNN* và *Thông tư 22/2019/TT-NHNN*.
