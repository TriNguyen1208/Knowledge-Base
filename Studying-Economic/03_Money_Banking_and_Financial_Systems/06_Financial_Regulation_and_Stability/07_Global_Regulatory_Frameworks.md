# Chuyên đề: Các Khung Khổ Điều Tiết Toàn Cầu (Global Regulatory Frameworks)

Tài liệu này nghiên cứu chuyên sâu về các thiết chế điều phối và tiêu chuẩn hóa tài chính tối cao trên phạm vi toàn cầu, bao gồm quá trình tiến hóa của Khung khổ Basel, vai trò giám sát rủi ro hệ thống của Hội đồng Ổn định Tài chính (FSB) và chuẩn mực kế toán tài chính quốc tế IFRS (đặc biệt là IFRS 9).

---

## 1. Basel Framework (Khung khổ Basel)

### 1. Là gì?
- **Định nghĩa học thuật:** Khung khổ Basel (*Basel Framework*) là hệ thống toàn diện các hiệp ước, nguyên tắc và tiêu chuẩn an toàn vốn, thanh khoản và quản trị rủi ro ngân hàng do Ủy ban Basel về Giám sát Ngân hàng (*Basel Committee on Banking Supervision - BCBS*) ban hành tại trụ sở Ngân hàng Thanh toán Quốc tế (BIS), Basel, Thụy Sĩ, nhằm tăng cường khả năng chống chịu của hệ thống ngân hàng toàn cầu và tạo lập một sân chơi cạnh tranh bình đẳng quốc tế.
- **Bản chất trực giác:** Hãy tưởng tượng nếu các hãng hàng không trên thế giới mỗi nước tự đặt ra một tiêu chuẩn an toàn riêng: nước thì yêu cầu 2 động cơ, nước chỉ cần 1 động cơ; nước yêu cầu bảo dưỡng sau 100 giờ bay, nước thì để 1.000 giờ. Thảm họa rơi máy bay sẽ xảy ra liên tục. Khung khổ Basel chính là "Quy chuẩn an toàn hàng không toàn cầu" cho ngành ngân hàng: quy định độ dày vỏ máy bay (vốn tự có), lượng nhiên liệu dự phòng khẩn cấp (thanh khoản) và quy trình huấn luyện phi công (quản trị rủi ro).
- **Nếu chỉ nhớ một điều:** Khung khổ Basel là "Kinh thánh an toàn" của hệ thống ngân hàng thế giới, tiến hóa qua 4 thập kỷ (Basel I, II, III, và Basel III Endgame/IV) dựa trên cấu trúc 3 Trụ cột kinh điển.

### 2. Hoạt động thế nào?
1. **Lịch sử tiến hóa của các Hiệp ước Basel:**
   - **Basel I (1988):** Giới thiệu khái niệm Vốn tự có và Tài sản Có Rủi ro (RWA). Yêu cầu tỷ lệ an toàn vốn tối thiểu $\text{CAR} \ge 8\%$. Nhược điểm: Phân loại rủi ro quá thô sơ (áp trọng số rủi ro đồng đều cho mọi doanh nghiệp là 100%).
   - **Basel II (2004):** Giới thiệu cấu trúc **3 Trụ cột (Three Pillars)**:
     - *Trụ cột 1 (Pillar 1 - Yêu cầu vốn tối thiểu):* Bổ sung rủi ro thị trường và rủi ro hoạt động, cho phép ngân hàng lớn sử dụng mô hình xếp hạng nội bộ (IRB) để tự tính rủi ro.
     - *Trụ cột 2 (Pillar 2 - Quy trình giám sát của nhà chức trách):* Đánh giá mức độ đủ vốn nội bộ (ICAAP).
     - *Trụ cột 3 (Pillar 3 - Kỷ luật thị trường):* Minh bạch hóa và công bố thông tin chi tiết ra công chúng.
   - **Basel III (2010 - hậu khủng hoảng 2008):** Tái định nghĩa chất lượng vốn (tập trung vào CET1 $\ge 4.5\%$), bổ sung hai bộ đệm vốn (CCB và CCyB), đưa ra tiêu chuẩn thanh khoản ngắn hạn (LCR) và dài hạn (NSFR), và thiết lập Giới hạn đòn bẩy phi rủi ro (Leverage Ratio $\ge 3\%$).
   - **Basel III Endgame / Basel IV (2017–2025):** Áp dụng sàn rủi ro tổng hợp (*Output Floor* ở mức $72.5\%$), thu hẹp quyền tự tính toán rủi ro của các mô hình nội bộ nhằm ngăn chặn việc "lách luật làm đẹp số liệu".

### 3. Công thức & Mô hình toán học
Quy chuẩn Vốn tối thiểu theo Trụ cột 1 của Basel III:
$$\text{Total Capital Ratio} = \frac{\text{CET1} + \text{AT1} + \text{Tier 2}}{\text{RWA}_{\text{Credit}} + \text{RWA}_{\text{Market}} + \text{RWA}_{\text{Operational}}} \ge 8.0\%$$

Quy tắc Sàn rủi ro tổng hợp (*Output Floor*) theo Basel III Endgame:
$$\text{RWA}_{\text{Final}} = \max \left( \text{RWA}_{\text{Internal Models}}, \ 72.5\% \times \text{RWA}_{\text{Standardised Approach}} \right)$$
*Ý nghĩa:* Dù ngân hàng có dùng thuật toán AI hay mô hình nội bộ tinh vi đến đâu để chứng minh danh mục của mình là an toàn, mức RWA tính toán cuối cùng không bao giờ được phép thấp hơn $72.5\%$ mức tính toán theo phương pháp chuẩn hóa thông thường của cơ quan quản lý.

### 4. Ví dụ
- **Ví dụ số học:** Ngân hàng E sử dụng mô hình nội bộ tiên tiến (A-IRB) và tính ra $\text{RWA}_{\text{IRB}} = 50$ tỷ USD. Tuy nhiên, nếu áp dụng phương pháp chuẩn hóa (Standardised Approach) của Basel, tổng tài sản rủi ro phải là $\text{RWA}_{\text{SA}} = 100$ tỷ USD.
  Theo quy định Sàn rủi ro $72.5\%$:
  $$\text{Sàn RWA} = 72.5\% \times 100 = 72.5 \text{ tỷ USD}$$
  Ngân hàng E bắt buộc phải sử dụng con số $72.5$ tỷ USD (thay vì 50 tỷ USD) để tính vốn tự có. Với CAR $8\%$, vốn tự có tối thiểu phải tăng từ $4.0$ tỷ USD lên $5.8$ tỷ USD ($72.5 \times 8\%$), ngăn chặn việc ngân hàng thổi phồng độ an toàn giả tạo.
- **Thực tế Việt Nam:** Ngân hàng Nhà nước Việt Nam đã ban hành Thông tư 41/2016/TT-NHNN triển khai Trụ cột 1 của Basel II và Thông tư 13/2018/TT-NHNN triển khai Trụ cột 2 (hệ thống kiểm soát nội bộ và ICAAP). Tính đến nay, hầu hết các NHTM hàng đầu (Vietcombank, Techcombank, VPBank, MB, ACB, TPBank) đã hoàn thành cả 3 trụ cột Basel II và một số tiên phong thí điểm triển khai các cấu phần của Basel III (như LCR và NSFR).
- **Kịch bản phản thực tế (Counterfactual):** Trong giai đoạn 2007–2008, nếu Basel II đã có quy chuẩn về thanh khoản (LCR/NSFR) và Giới hạn đòn bẩy (Leverage Ratio) như trong Basel III, các ngân hàng đầu tư phố Wall như Lehman Brothers hay Bear Stearns đã không thể sử dụng đòn bẩy 33:1 dựa trên nguồn vốn vay nóng ngắn hạn, và cuộc đại suy thoái tài chính toàn cầu đã được ngăn chặn từ sớm.

### 5. Ứng dụng & Tranh luận
- **Ứng dụng thực tiễn:** Khung tham chiếu tối cao để các ngân hàng trung ương xây dựng luật ngân hàng quốc gia, cơ sở xếp hạng sức khỏe định chế tín dụng, công cụ định giá rủi ro tín dụng.
- **Tranh luận & Đánh đổi:** 
  - *Tính chu kỳ thuận (Procyclicality):* Khi kinh tế suy thoái, nợ xấu tăng làm RWA tăng vọt, buộc các ngân hàng phải co cụm tín dụng đúng lúc nền kinh tế cần vốn nhất để phục hồi. Basel III đã cố gắng sửa lỗi này bằng Bộ đệm vốn phản chu kỳ (CCyB).
  - *Sự phân hóa quy mô:* Các ngân hàng nhỏ gặp bất lợi lớn vì không đủ kinh phí đầu tư hàng chục triệu USD cho hệ thống CNTT để triển khai mô hình nội bộ như các siêu ngân hàng lớn.
- **Cạm bẫy tư duy:** Tưởng rằng đạt chuẩn Basel là ngân hàng hoàn toàn "miễn nhiễm" với phá sản. Basel là khung quản trị dựa trên xác suất; sự sụp đổ chớp nhoáng của Credit Suisse và Silicon Valley Bank (SVB) năm 2023 – cả hai đều là những định chế báo cáo đạt chuẩn Basel rất cao – cho thấy sai lầm trong giám sát thực tế vẫn có thể đánh sập một ngân hàng chuẩn Basel.

### 6. Liên kết khái niệm
- [Capital Adequacy Ratio](file:///Users/ductri0981/Documents/Studying/Studying-Economic/03_Money_Banking_and_Financial_Systems/03_Banking_Systems/07_Prudential_Ratios_Stress_Testing_and_Basel.md) (Chỉ số cốt lõi của Trụ cột 1 Basel)
- [Liquidity Coverage Ratio](file:///Users/ductri0981/Documents/Studying/Studying-Economic/03_Money_Banking_and_Financial_Systems/03_Banking_Systems/07_Prudential_Ratios_Stress_Testing_and_Basel.md) (Quy chuẩn thanh khoản ngắn hạn của Basel III)
- [Bank for International Settlements (BIS)](file:///Users/ductri0981/Documents/Studying/Studying-Economic/03_Money_Banking_and_Financial_Systems/05_Financial_Institutions/06_Development_Banks_and_Global_Institutions.md#5-bank-for-international-settlements-bis-ngan-hang-thanh-toan-quoc-te) (Nơi khai sinh và đặt ban thư ký của Basel)

---

## 2. Financial Stability Board (FSB) (Hội đồng Ổn định Tài chính)

### 2.1. Là gì?
- **Định nghĩa học thuật:** Hội đồng Ổn định Tài chính (*Financial Stability Board - FSB*) là một định chế quốc tế được Hội nghị Thượng đỉnh Nhóm các nền kinh tế lớn G20 thành lập vào tháng 4 năm 2009 (tiền thân là Diễn đàn Ổn định Tài chính - FSF), có trụ sở tại Basel (Thụy Sĩ). FSB đóng vai trò là "Nhạc trưởng điều phối" tối cao theo dõi và đưa ra các khuyến nghị về hệ thống tài chính toàn cầu, thúc đẩy sự phối hợp giữa các cơ quan quản lý tài chính quốc gia và các cơ quan thiết lập tiêu chuẩn quốc tế.
- **Bản chất trực giác:** Nếu thế giới tài chính có nhiều cơ quan ban hành tiêu chuẩn độc lập (Basel quản lý ngân hàng, IOSCO quản lý chứng khoán, IAIS quản lý bảo hiểm, IASB quản lý kế toán), ai sẽ là người đứng trên đỉnh tháp để nhìn bao quát toàn bộ bức tranh rủi ro xuyên biên giới? Đó chính là FSB. FSB là "Bộ Tổng Tham mưu" tập hợp các Bộ trưởng Tài chính, Thống đốc NHTW của G20 và lãnh đạo các tổ chức quốc tế để ngăn chặn các cuộc khủng hoảng tài chính toàn cầu tái diễn.
- **Nếu chỉ nhớ một điều:** FSB là cơ quan điều phối chính sách tài chính vĩ mô cao nhất của nhóm G20, chịu trách nhiệm xác định danh sách các định chế có tầm quan trọng hệ thống toàn cầu (G-SIBs/G-SIIs) và bịt các lỗ hổng rủi ro của hệ thống tài chính bóng tối (*Shadow Banking*).

### 2.2. Hoạt động thế nào?
1. **Các chức năng trọng yếu:**
   - **Đánh giá rủi ro dễ tổn thương của hệ thống tài chính toàn cầu:** Định kỳ báo cáo lên các nhà lãnh đạo G20 về các điểm nóng rủi ro (bong bóng nợ, tài sản mã hóa, rủi ro địa chính trị).
   - **Xác định các định chế G-SIBs:** Phối hợp cùng Ủy ban Basel công bố danh sách cập nhật hàng năm khoảng 30 ngân hàng có tầm quan trọng hệ thống toàn cầu (như JPMorgan, BNP Paribas, HSBC, ICBC) và ấn định mức phụ phí đệm vốn an toàn bắt buộc bổ sung từ $1.0\%$ đến $2.5\%$.
   - **Quy chuẩn năng lực hấp thụ tổn thất tổng thể (TLAC - Total Loss-Absorbing Capacity):** Bắt buộc các ngân hàng G-SIBs phải phát hành một lượng trái phiếu thứ cấp đủ lớn để sẵn sàng xóa nợ hoặc chuyển thành vốn cổ phần khi ngân hàng đổ vỡ (*Bail-in*), nhằm triệt tiêu việc phải dùng tiền thuế của dân giải cứu (*Bailout*).
   - **Giám sát Ngân hàng bóng tối (Non-Bank Financial Intermediation - NBFI):** Đưa ra các quy chuẩn kiểm soát rủi ro thanh khoản của các quỹ tương hỗ thị trường tiền tệ (MMFs), quỹ đầu cơ (Hedge Funds) và các nền tảng cho vay ngang hàng.

### 2.3. Công thức & Mô hình toán học
Quy định tỷ lệ năng lực hấp thụ tổn thất tối thiểu **TLAC (Total Loss-Absorbing Capacity Ratio) cho các ngân hàng G-SIBs:**
$$\text{TLAC Ratio}_{\text{RWA}} = \frac{\text{CET1} + \text{Eligible Unsecured Long-term Debt}}{\text{RWA}} \ge 18.0\%$$
$$\text{TLAC Leverage Ratio} = \frac{\text{Eligible TLAC}}{\text{Total Exposure}} \ge 6.75\%$$

*Ý nghĩa:* Trong trường hợp ngân hàng G-SIB sụp đổ, khoản nợ trái phiếu thứ cấp dài hạn (*Eligible Debt*) này sẽ tự động bị cắt giảm giá trị danh nghĩa hoặc chuyển thành cổ phần phổ thông để cứu sống ngân hàng từ bên trong mà chính phủ không cần phải chi một đồng tiền ngân sách nào.

### 2.4. Ví dụ
- **Ví dụ số học:** Ngân hàng toàn cầu H có $\text{RWA} = 500$ tỷ USD. Theo chuẩn FSB TLAC $\ge 18\%$, ngân hàng H bắt buộc phải duy trì tổng dung lượng vốn tự có và trái phiếu thứ cấp có thể xóa nợ tối thiểu là:
  $$\text{TLAC Required} = 18\% \times 500 \text{ tỷ USD} = 90 \text{ tỷ USD}$$
  Nếu ngân hàng gặp khoản lỗ khổng lồ 40 tỷ USD, toàn bộ số lỗ này sẽ được hấp thụ bởi vốn của các cổ đông và trái chủ mua trái phiếu TLAC, bảo đảm người gửi tiền bình thường không bị mất tiền và chính phủ không phải can thiệp.
- **Thực tế Quốc tế:** Trong thương vụ giải cứu ngân hàng Credit Suisse tháng 3/2023, cơ quan quản lý Thụy Sĩ (FINMA - thành viên FSB) đã kích hoạt điều khoản hợp đồng xóa sạch toàn bộ 17 tỷ USD trái phiếu AT1 (Additional Tier 1) của các nhà đầu tư tổ chức về 0 đồng. Đây là ví dụ thực tế điển hình nhất về việc áp dụng nguyên tắc hấp thụ tổn thất nội bộ theo định hướng của FSB.
- **Kịch bản phản thực tế (Counterfactual):** Nếu G20 không thành lập FSB năm 2009 với nhiệm vụ thống nhất quy chuẩn giải cứu ngân hàng toàn cầu, các quốc gia sẽ tiếp tục hành động đơn phương: một quốc gia đóng cửa chi nhánh ngân hàng nước ngoài, giữ lại toàn bộ tài sản trong nước, kích hoạt chiến tranh pháp lý xuyên biên giới và khiến hệ thống ngân hàng quốc tế bị phân mảnh vỡ vụn.

### 2.5. Ứng dụng & Tranh luận
- **Ứng dụng thực tiễn:** Điều phối phản ứng chính sách vĩ mô giữa Fed, ECB, BOJ; thúc đẩy quy chế quản lý tài sản mã hóa (Crypto-assets) và Stablecoin toàn cầu (khung FSB High-level Recommendations 2023).
- **Tranh luận & Đánh đổi:** 
  - *Quyền lực mềm và Sự thiếu ràng buộc pháp lý:* Tương tự BIS, các quyết định của FSB không phải là hiệp ước quốc tế có tính cưỡng chế tư pháp; hiệu lực thực thi phụ thuộc hoàn toàn vào ý chí chính trị của các nước thành viên G20.
  - *Tính đại diện hẹp:* Dù đại diện cho 85% GDP toàn cầu của nhóm G20, FSB bị chỉ trích là bỏ quên tiếng nói và lợi ích của hơn 170 quốc gia đang phát triển còn lại.
- **Cạm bẫy tư duy:** Đồng nhất FSB với một cơ quan thanh tra đi kiểm tra từng ngân hàng. FSB là cơ quan hoạch định chiến lược và điều phối chính sách cấp cao (*Macro Policy Coordinator*), không thực hiện thanh tra trực tiếp bất kỳ tổ chức tín dụng nào.

### 2.6. Liên kết khái niệm
- [Systemic Risk](file:///Users/ductri0981/Documents/Studying/Studying-Economic/03_Money_Banking_and_Financial_Systems/06_Financial_Regulation_and_Stability/02_Systemic_Risk_and_Financial_Stability.md#2-systemic-risk-rui-ro-he-thong) (Mục tiêu cốt lõi mà FSB sinh ra để kiềm chế)
- [Too Big to Fail](file:///Users/ductri0981/Documents/Studying/Studying-Economic/03_Money_Banking_and_Financial_Systems/06_Financial_Regulation_and_Stability/02_Systemic_Risk_and_Financial_Stability.md#4-too-big-to-fail-qua-lon-de-sup-do) (FSB là cơ quan chỉ định danh sách G-SIBs)
- [Basel Framework](file:///Users/ductri0981/Documents/Studying/Studying-Economic/03_Money_Banking_and_Financial_Systems/06_Financial_Regulation_and_Stability/07_Global_Regulatory_Frameworks.md#1-basel-framework-khung-kho-basel) (Ủy ban Basel là thành viên trụ cột của FSB)

---

## 3. International Financial Reporting Standards (IFRS) (Chuẩn mực Báo cáo Tài chính Quốc tế)

### 3.1. Là gì?
- **Định nghĩa học thuật:** Chuẩn mực Báo cáo Tài chính Quốc tế (*International Financial Reporting Standards - IFRS*) là bộ các nguyên tắc kế toán chuẩn hóa toàn cầu do Hội đồng Chuẩn mực Kế toán Quốc tế (*International Accounting Standards Board - IASB*) ban hành, nhằm bảo đảm rằng báo cáo tài chính của các doanh nghiệp và định chế tài chính trên toàn thế giới có tính nhất quán, minh bạch, có thể so sánh được và phản ánh đúng bản chất kinh tế của các giao dịch.
- **Bản chất trực giác:** Nếu mỗi quốc gia dùng một ngôn ngữ riêng để làm kế toán: một mảnh đất mua 10 năm trước ở nước này được ghi nhận theo giá mua ban đầu (Giá gốc - Historical Cost), ở nước kia lại được ghi nhận theo giá thị trường hiện tại (Giá trị hợp lý - Fair Value). Nhà đầu tư quốc tế sẽ hoàn toàn mù tịt khi so sánh hai công ty. IFRS chính là "ngôn ngữ tiếng Anh chung toàn cầu" của ngành kế toán tài chính.
- **Nếu chỉ nhớ một điều:** Trong lĩnh vực ngân hàng và tài chính, chuẩn mực **IFRS 9 (Công cụ tài chính)** là cuộc cách mạng lớn nhất: chuyển đổi mô hình dự phòng nợ xấu từ "Tổn thất đã phát sinh" (*Incurred Loss*) sang "Tổn thất tín dụng kỳ vọng" (*Expected Credit Loss - ECL*), buộc các ngân hàng phải dự báo và trích lập dự phòng từ tương lai.

### 3.2. Hoạt động thế nào?
1. **Phân loại Tài sản Tài chính theo IFRS 9 dựa trên 2 bài kiểm tra:**
   - **Bài kiểm tra Mô hình Kinh doanh (Business Model Test):** Mục đích nắm giữ tài sản là để thu dòng tiền theo hợp đồng (*Hold to Collect*), hay để vừa thu dòng tiền vừa bán (*Hold to Collect and Sell*), hay để giao dịch mua bán ngắn hạn kiếm lời (*Trading*).
   - **Bài kiểm tra Đặc tính Dòng tiền (SPPI Test - Solely Payments of Principal and Interest):** Dòng tiền theo hợp đồng tại các ngày xác định có hoàn toàn chỉ là thanh toán tiền gốc và tiền lãi trên dư nợ gốc hay không.
2. **Ba mô hình đo lường giá trị tài sản tài chính:**
   - **Giá trị phân bổ (Amortised Cost):** Áp dụng phương pháp lãi suất thực tế ($EIR$).
   - **Giá trị hợp lý thông qua Thu nhập toàn diện khác (FVOCI):** Biến động giá ghi nhận vào vốn chủ sở hữu (vốn OCI).
   - **Giá trị hợp lý thông qua Báo cáo Kết quả Kinh doanh (FVTPL):** Mọi biến động giá cổ phiếu, phái sinh được phản ánh ngay lập tức vào lợi nhuận trong kỳ.
3. **Mô hình Ba Giai đoạn (Three-Stage Staging Model) của IFRS 9 ECL:**
   - **Giai đoạn 1 (Stage 1 - Chưa có dấu hiệu suy giảm đáng kể):** Trích lập dự phòng cho tổn thất kỳ vọng trong vòng **12 tháng tới (12-month ECL)**.
   - **Giai đoạn 2 (Stage 2 - Rủi ro tín dụng gia tăng đáng kể - SICR):** Bắt buộc trích lập dự phòng cho toàn bộ **vòng đời khoản nợ (Lifetime ECL)**.
   - **Giai đoạn 3 (Stage 3 - Đã suy giảm giá trị tín dụng / Nợ xấu thực tế):** Trích lập theo Lifetime ECL và chỉ được tính thu nhập lãi trên dư nợ ròng (đã trừ dự phòng).

### 3.3. Công thức & Mô hình toán học
Công thức tính toán **Tổn thất Tín dụng Kỳ vọng (Expected Credit Loss - ECL) theo IFRS 9:**
$$\text{ECL} = \sum_{t=1}^{T} \frac{PD_t \times LGD_t \times EAD_t}{(1 + EIR)^t}$$

Trong đó:
- $PD_t$: Xác suất vỡ nợ dự báo hướng về tương lai (*Forward-looking Probability of Default*) kết hợp các kịch bản kinh tế vĩ mô (tỷ lệ lạm phát, tăng trưởng GDP).
- $LGD_t$: Tỷ lệ tổn thất khi vỡ nợ (*Loss Given Default*).
- $EAD_t$: Dư nợ chịu rủi ro tại thời điểm $t$.
- $EIR$: Lãi suất thực tế của hợp đồng tín dụng dùng để chiết khấu dòng tiền về hiện tại.
- Đối với Stage 1: $T = 12 \text{ tháng}$. Đối với Stage 2 và Stage 3: $T = \text{Thời hạn còn lại của hợp đồng nợ}$.

### 3.4. Ví dụ
- **Ví dụ số học:** Ngân hàng F có khoản cho vay doanh nghiệp 100 tỷ VND, thời hạn 5 năm, lãi suất $EIR = 8\%/\text{năm}$.
  - Năm thứ 1: Doanh nghiệp trả nợ tốt (Stage 1). Xác suất vỡ nợ 12 tháng $PD_{12m} = 1\%$, tỷ lệ tổn thất dự kiến $LGD = 40\%$.
    $$\text{ECL}_{\text{Stage 1}} = 1\% \times 40\% \times 100 \text{ tỷ} = 0.4 \text{ tỷ VND (400 triệu VND)}$$
  - Năm thứ 2: Doanh nghiệp bị mất hợp đồng xuất khẩu lớn, chậm trả nợ quá hạn 35 ngày (kích hoạt SICR $\Rightarrow$ chuyển sang Stage 2). Ngân hàng buộc phải tính dự phòng cho trọn đời 4 năm còn lại với tổng xác suất vỡ nợ lũy kế $PD_{\text{lifetime}} = 15\%$.
    $$\text{ECL}_{\text{Stage 2}} = 15\% \times 40\% \times 100 \text{ tỷ} = 6.0 \text{ tỷ VND}$$
  Ngân hàng F phải lập tức trích lập thêm $6.0 - 0.4 = 5.6$ tỷ VND từ lợi nhuận vào chi phí dự phòng trong năm đó, mặc dù món nợ chưa chính thức trở thành nợ xấu nhóm 5.
- **Thực tế Việt Nam:** Bộ Tài chính đã phê duyệt Đề án áp dụng Chuẩn mực Báo cáo Tài chính Quốc tế tại Việt Nam (Quyết định 345/QĐ-BTC). Hiện tại, hệ thống ngân hàng Việt Nam vẫn chủ yếu áp dụng Chuẩn mực Kế toán Việt Nam (VAS) và phân loại nợ theo Thông tư 11/2021/TT-NHNN (mô hình tổn thất đã phát sinh). Tuy nhiên, các ngân hàng tiên phong như Techcombank, VPBank, MB, VIB đã chủ động lập báo cáo tài chính song song theo chuẩn IFRS để phục vụ việc phát hành trái phiếu quốc tế và thu hút nhà đầu tư chiến lược nước ngoài.
- **Kịch bản phản thực tế (Counterfactual):** Theo chuẩn mực kế toán cũ IAS 39 (Incurred Loss Model), ngân hàng chỉ được phép trích lập dự phòng khi có một "sự kiện tổn thất" đã thực sự diễn ra (như khách hàng đã chậm trả nợ). Điều này khiến trong cuộc khủng hoảng 2008, các ngân hàng nhận ra nợ xấu "quá muộn và quá ít" (*Too little, too late*), dẫn tới tình trạng lợi nhuận trên giấy tờ vẫn cao chót vót cho đến tận ngày ngân hàng tuyên bố sụp đổ.

### 3.5. Ứng dụng & Tranh luận
- **Ứng dụng thực tiễn:** Thu hút vốn FDI và dòng vốn đầu tư gián tiếp FII từ các quỹ quốc tế, xóa bỏ rào cản bất đồng ngôn ngữ tài chính khi niêm yết chéo trên các sàn chứng khoán nước ngoài (NYSE, LSE, SGX).
- **Tranh luận & Đánh đổi:** 
  - *Sự phức tạp và biến động lợi nhuận:* Việc áp dụng mô hình định giá theo giá trị thị trường (Fair Value / Mark-to-Market) và mô hình dự báo kinh tế vĩ mô tương lai cho IFRS 9 khiến bảng kết quả kinh doanh của ngân hàng biến động rất mạnh theo từng quý, gây khó khăn cho việc lập kế hoạch tài chính.
  - *Chi phí chuyển đổi hệ thống:* Một ngân hàng tầm trung phải chi từ 5 đến 15 triệu USD để nâng cấp phần mềm Core Banking, mua dữ liệu mô hình kinh tế lượng và thuê các công ty Big 4 tư vấn chuyển đổi từ kế toán địa phương sang IFRS.
- **Cạm bẫy tư duy:** Tưởng rằng áp dụng IFRS sẽ làm cho lợi nhuận của doanh nghiệp luôn cao hơn hoặc thấp hơn. IFRS không làm thay đổi bản chất dòng tiền thực tế của doanh nghiệp; nó chỉ phân bổ và phản ánh thời điểm ghi nhận doanh thu, chi phí và tổn thất một cách khách quan và khoa học hơn.

### 3.6. Liên kết khái niệm
- [Loan Loss Provision](file:///Users/ductri0981/Documents/Studying/Studying-Economic/03_Money_Banking_and_Financial_Systems/03_Banking_Systems/05_Profitability_Credit_Quality_and_Cost_of_Funds.md) (Đối tượng trích lập mà IFRS 9 chi phối)
- [Basel Framework](file:///Users/ductri0981/Documents/Studying/Studying-Economic/03_Money_Banking_and_Financial_Systems/06_Financial_Regulation_and_Stability/07_Global_Regulatory_Frameworks.md#1-basel-framework-khung-kho-basel) (Ủy ban Basel sử dụng số liệu kế toán IFRS làm đầu vào tính vốn điều tiết)
- [Financial Stability Board (FSB)](file:///Users/ductri0981/Documents/Studying/Studying-Economic/03_Money_Banking_and_Financial_Systems/06_Financial_Regulation_and_Stability/07_Global_Regulatory_Frameworks.md#2-financial-stability-board-fsb-hoi-dong-on-dinh-tai-chinh) (Cơ quan bảo trợ việc chuẩn hóa báo cáo tài chính toàn cầu)

---

## Câu hỏi tự kiểm tra (Self-Quiz)
1. Trình bày cấu trúc "Ba Trụ cột" (*Three Pillars*) của Hiệp ước Basel II và phân tích tại sao việc chỉ tập trung vào Trụ cột 1 là chưa đủ để bảo đảm an toàn hệ thống ngân hàng?
2. Quy định Sàn rủi ro tổng hợp (*Output Floor*) ở mức $72.5\%$ trong cải cách Basel III Endgame (Basel IV) được thiết kế nhằm khắc phục lỗ hổng nào của phương pháp mô hình nội bộ (Internal Models)?
3. Phân biệt sự khác nhau giữa cơ chế Giải cứu từ bên ngoài (*Bailout*) và cơ chế Cứu trợ nội bộ (*Bail-in*) thông qua công cụ Năng lực Hấp thụ Tổn thất Tổng thể (TLAC) do Hội đồng Ổn định Tài chính (FSB) ban hành?
4. So sánh sự khác biệt căn bản giữa mô hình "Tổn thất đã phát sinh" (*Incurred Loss Model* theo IAS 39) và mô hình "Tổn thất tín dụng kỳ vọng" (*Expected Credit Loss Model* theo IFRS 9)?
5. Tại sao việc chuyển đổi từ Chuẩn mực Kế toán Việt Nam (VAS) sang IFRS lại là điều kiện tiên quyết mang tính chiến lược đối với các doanh nghiệp và ngân hàng Việt Nam muốn phát hành trái phiếu quốc tế hoặc nâng hạng thị trường chứng khoán?

---

## Ghi chú nguồn tham khảo
- Basel Committee on Banking Supervision. (2017). *Basel III: Finalising post-crisis reforms*. Bank for International Settlements.
- Financial Stability Board (FSB). (2015). *Principles on Loss-absorbing and Recapitalisation Capacity of G-SIBs in Resolution: Total Loss-absorbing Capacity (TLAC) Term Sheet*.
- International Accounting Standards Board (IASB). (2014). *IFRS 9 Financial Instruments*. IFRS Foundation.
- Bộ Tài chính Việt Nam: *Quyết định số 345/QĐ-BTC ngày 16/3/2020 phê duyệt Đề án áp dụng Chuẩn mực Báo cáo tài chính quốc tế tại Việt Nam*.
- Ngân hàng Nhà nước Việt Nam: *Thông tư 41/2016/TT-NHNN* và *Thông tư 13/2018/TT-NHNN*.
