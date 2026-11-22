# Phân tích Kịch bản Kinh tế (Scenario Analysis)

Chuyên đề này phân tích phương pháp tư duy và công cụ hoạch định chiến lược kinh tế trong môi trường bất định: bản chất phân tích kịch bản, cấu trúc kịch bản cơ sở (Base Case), kịch bản thuận lợi (Bull Case), kịch bản bất lợi (Bear Case), và phương pháp gán trọng số xác suất cho các kịch bản.

---

### Phân tích kịch bản (Scenario Analysis)

**1. Là gì?**
- Phân tích kịch bản là phương pháp lập kế hoạch chiến lược và phân tích kinh tế vĩ mô có cấu trúc, trong đó người phân tích xây dựng một tập hợp nhiều câu chuyện tương lai khác nhau (thường từ 3 đến 4 kịch bản khả dĩ) có tính mạch lạc, hợp lý và nhất quán nội tại về cách thức các biến số kinh tế, địa chính trị và công nghệ có thể tương tác và tiến hóa.
- Khác với phương pháp dự báo điểm duy nhất (Point forecast), phân tích kịch bản thừa nhận sự bất định cố hữu của tương lai và chuẩn bị sẵn các phương án hành động thích ứng cho mọi tình huống.
- Nếu chỉ nhớ một điều: **Phân tích kịch bản là việc không đặt toàn bộ trứng vào một giỏ dự đoán duy nhất, mà vạch sẵn nhiều kịch bản: nếu trời nắng làm gì, trời mưa làm gì, bão tố làm gì.**

**2. Hoạt động thế nào?**
- **Quy trình 4 bước xây dựng kịch bản:**
  1. *Xác định các động lực bất định then chốt (Key Uncertainties):* Giá dầu thế giới, lãi suất Fed, xung đột địa chính trị, tốc độ phục hồi của thị trường bất động sản.
  2. *Thiết lập ma trận kịch bản:* Thường dựa trên 2 trục bất định quan trọng nhất để tạo ra 4 góc kịch bản.
  3. *Lượng hóa các kịch bản bằng mô hình vĩ mô:* Chạy mô hình để tính toán các con số cụ thể về GDP, lạm phát, tỷ giá tương ứng với từng câu chuyện.
  4. *Xây dựng chiến lược phản ứng (Contingency Plans):* Kế hoạch hành động cụ thể cho từng kịch bản.

**3. Công thức & mô hình**
- Giá trị kỳ vọng tổng hợp của biến số kinh tế qua các kịch bản:
  $$E(Y) = \sum_{k=1}^m p_k \cdot Y_k \quad \text{với} \quad \sum p_k = 1$$
  Trong đó $p_k$ là xác suất của kịch bản $k$, $Y_k$ là giá trị của biến số trong kịch bản đó.

**4. Ví dụ**
- *Ví dụ số:* Một tập đoàn kinh tế xây dựng kế hoạch kinh doanh năm mới với 3 kịch bản:
  - Kịch bản Cơ sở (xác suất $60\%$): Doanh thu đạt 100 tỷ VNĐ.
  - Kịch bản Thuận lợi (xác suất $20\%$): Doanh thu đạt 130 tỷ VNĐ.
  - Kịch bản Thách thức (xác suất $20\%$): Doanh thu đạt 70 tỷ VNĐ.
  - Doanh thu kỳ vọng toán học:
    $$E = 0,6(100) + 0,2(130) + 0,2(70) = 60 + 26 + 14 = 100 \text{ tỷ VNĐ}$$
- *Ví dụ thực tế:* Tập đoàn dầu khí Shell nổi tiếng toàn cầu là đơn vị tiên phong ứng dụng xuất sắc phương pháp phân tích kịch bản từ thập niên 1970 (Shell Scenario Planning): nhờ vạch sẵn kịch bản giá dầu tăng vọt, Shell là tập đoàn phương Tây duy nhất chuẩn bị sẵn sàng và vươn lên mạnh mẽ sau Cú sốc dầu mỏ năm 1973.
- *Counterfactual:* Nếu một doanh nghiệp chỉ lập kế hoạch duy nhất trên giả định giá USD ổn định, khi tỷ giá bất ngờ biến động mạnh $10\%$, doanh nghiệp sẽ hoàn toàn bị động và đối mặt với nguy cơ thua lỗ nặng nề do tỷ giá.

**5. Ứng dụng & tranh luận**
- **Ứng dụng:** Hoạch định chính sách kinh tế - xã hội của Chính phủ; quản trị rủi ro doanh nghiệp và định giá danh mục đầu tư tài chính.
- **Trade-off:** Xây dựng nhiều kịch bản đòi hỏi nhiều nguồn lực nghiên cứu và có thể gây lúng túng cho các nhà lãnh đạo nếu không có kịch bản cơ sở rõ ràng để điều hành hàng ngày.
- **Tranh luận / Lỗi thường gặp:** Xây dựng các kịch bản phi lý hoặc mâu thuẫn nội tại (ví dụ: vẽ kịch bản kinh tế bùng nổ quá nhiệt nhưng lạm phát bằng 0 và lãi suất siêu thấp). Các biến số trong mỗi kịch bản bắt buộc phải tuân theo các quy luật cân bằng kinh tế vĩ mô.

**6. Liên kết**
- Đọc tiếp: [Base Case Scenario](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/03_Scenario_Analysis.md#kich-ban-co-so-base-case-scenario).
- Mở rộng: [Stress Testing](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/04_Stress_Testing_and_Uncertainty.md#kiem-tra-suc-chiu-dung-stress-testing).

---

### Kịch bản cơ sở (Base Case Scenario)

**1. Là gì?**
- Kịch bản cơ sở (hay kịch bản trung tâm - Baseline Scenario) là kịch bản được đánh giá là **có xác suất xảy ra cao nhất**, phản ánh kỳ vọng hợp lý nhất về hướng đi của nền kinh tế dựa trên việc ngoại suy các xu hướng hiện tại và các chính sách hiện hành không có sự thay đổi đột biến.
- Đóng vai trò là "mỏ neo chuẩn mực" để các cơ quan nhà nước xây dựng dự toán ngân sách và các doanh nghiệp lập kế hoạch kinh doanh chính thức hàng năm.
- Nếu chỉ nhớ một điều: **Kịch bản cơ sở là phương án trung tâm có khả năng xảy ra cao nhất nếu mọi việc tiếp tục diễn ra bình thường theo đúng quỹ đạo.**

**2. Hoạt động thế nào?**
- **Các giả định nền tảng của kịch bản cơ sở:**
  - Chính sách tài khóa và tiền tệ tiếp tục được thực thi theo đúng lộ trình đã công bố.
  - Các đối tác thương mại lớn tăng trưởng quanh mức tiềm năng dài hạn.
  - Không có các cú sốc địa chính trị hay thiên tai thảm khốc bất thường mới phát sinh.
- **Trọng số phân bổ:** Kịch bản cơ sở thường được các tổ chức gán trọng số xác suất từ $50\%$ đến $70\%$.

**3. Công thức & mô hình**
- Thể hiện trạng thái trung vị của mô hình phân phối xác suất:
  $$\hat{Y}_{Base} = \operatorname{Mode}(Y) \quad \text{hoặc} \quad \operatorname{Median}(Y)$$

**4. Ví dụ**
- *Ví dụ số:* Kế hoạch phát triển kinh tế của một nước xây dựng Kịch bản cơ sở (xác suất $60\%$): Tăng trưởng GDP đạt $6,0\%$, Lạm phát CPI bình quân $3,5\%$, Tăng trưởng tín dụng $14\%$, Tỷ giá USD/VND mất giá nhẹ trong biên độ $2-3\%$.
- *Ví dụ thực tế:* Trong các Báo cáo Triển vọng Kinh tế (World Economic Outlook), Quỹ Tiền tệ Quốc tế (IMF) luôn trình bày Kịch bản cơ sở chi tiết cho toàn cầu và từng quốc gia làm trung tâm thảo luận, sau đó mới phân tích các rủi ro lệch về phía tiêu cực (Downside risks).
- *Counterfactual:* Nếu tình hình thực tế diễn biến lệch quá xa khỏi kịch bản cơ sở ngay trong quý đầu tiên, ban lãnh đạo bắt buộc phải kích hoạt quy trình điều chỉnh kế hoạch năm và chuyển trọng tâm sang các kịch bản phụ.

**5. Ứng dụng & tranh luận**
- **Ứng dụng:** Trình Quốc hội phê chuẩn các chỉ tiêu pháp lệnh hàng năm; làm cơ sở giao chỉ tiêu kế hoạch kinh doanh (KPI) cho các khối phòng ban doanh nghiệp.
- **Trade-off:** Quá tập trung vào kịch bản cơ sở dễ ru ngủ các nhà quản trị, tạo ra tâm lý chủ quan khi có cú sốc bất lợi bất ngờ ập đến.
- **Tranh luận / Lỗi thường gặp:** Lẫn lộn giữa kịch bản cơ sở (những gì có khả năng xảy ra nhất) và kịch bản mục tiêu mong muốn (những gì chính phủ khao khát đạt được). Kịch bản cơ sở phải dựa trên phân tích khách quan thực tế chứ không phải dựa trên ý chí chính trị.

**6. Liên kết**
- Đọc tiếp: [Bull Case Scenario](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/03_Scenario_Analysis.md#kich-ban-thuan-loi-bull-case-scenario), [Bear Case Scenario](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/03_Scenario_Analysis.md#kich-ban-bat-loi-bear-case-scenario).
- Mở rộng: [Scenario Analysis](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/03_Scenario_Analysis.md#phan-tich-kich-ban-scenario-analysis).

---

### Kịch bản thuận lợi (Bull Case Scenario)

**1. Là gì?**
- Kịch bản thuận lợi (kịch bản lạc quan - Upside / Bull Case Scenario) là kịch bản kinh tế mô tả tình huống trong đó hàng loạt các yếu tố thuận lợi đồng thời xuất hiện vượt quá kỳ vọng thông thường, thúc đẩy tăng trưởng kinh tế bứt phá mạnh mẽ, doanh thu lợi nhuận bùng nổ và các rủi ro vĩ mô suy giảm xuống mức tối thiểu.
- Thuật ngữ "Bull" bắt nguồn từ hình tượng con bò tót húc sừng lên trời, biểu tượng kinh điển của thị trường tài chính thăng hoa.
- Nếu chỉ nhớ một điều: **Kịch bản thuận lợi là kịch bản màu hồng khi thiên thời địa lợi nhân hòa đều ủng hộ, kinh tế bứt phá rực rỡ vượt mọi chỉ tiêu.**

**2. Hoạt động thế nào?**
- **Các giả định kích hoạt kịch bản thuận lợi:**
  - Nhu cầu từ các thị trường xuất khẩu bùng nổ mạnh mẽ hơn dự kiến.
  - Các cải cách thể chế đột phá giúp giải phóng nguồn lực tư nhân, thu hút dòng vốn FDI kỷ lục.
  - Lạm phát toàn cầu hạ nhiệt nhanh chóng cho phép các ngân hàng trung ương hạ mạnh lãi suất, dòng vốn rẻ tràn vào thị trường.
  - Tiến bộ công nghệ số và AI được ứng dụng nhanh chóng, nâng cao năng suất lao động vượt bậc.
- **Mục tiêu hoạch định:** Giúp doanh nghiệp sẵn sàng phương án huy động vốn nhanh, mở rộng công suất nhà xưởng để không bị "nghẽn đơn hàng" khi thị trường bùng nổ.

**3. Công thức & mô hình**
- Thường được thiết lập ở phân vị cao (ví dụ phân vị thứ 90 - 90th percentile) của phân phối dự báo:
  $$Y_{Bull} = Q_{0,90}(Y)$$

**4. Ví dụ**
- *Ví dụ số:* Kịch bản thuận lợi (xác suất $20\%$): GDP tăng trưởng vượt bậc $+7,5\%$, xuất khẩu tăng $+15\%$, lạm phát giữ ở mức thấp $2,8\%$, tỷ giá ổn định tuyệt đối.
- *Ví dụ thực tế:* Năm 2022 tại Việt Nam, sự mở cửa dồn dập sau đại dịch cùng với làn sóng dịch chuyển chuỗi cung ứng toàn cầu đã đưa tăng trưởng GDP thực tế đạt mức kỳ tích $8,02\%$ (vượt xa kịch bản cơ sở ban đầu của Quốc hội đề ra là 6,0–6,5%), biến năm 2022 thành một kịch bản thuận lợi rực rỡ ngoài mong đợi.
- *Counterfactual:* Nếu doanh nghiệp không chuẩn bị kịch bản thuận lợi và không dự phòng sẵn sàng nguồn cung nguyên liệu, khi thị trường bùng nổ bất ngờ, doanh nghiệp sẽ bị "cháy hàng" và đánh mất thị phần vào tay các đối thủ cạnh tranh linh hoạt hơn.

**5. Ứng dụng & tranh luận**
- **Ứng dụng:** Lập kế hoạch mở rộng công suất tối đa, kế hoạch phát hành thêm cổ phiếu tăng vốn và đầu tư các dự án chiến lược dài hạn.
- **Trade-off:** Say sưa trong kịch bản thuận lợi dễ sinh ra sự tự mãn, chủ quan trong quản trị đòn bẩy tài chính.
- **Tranh luận / Lỗi thường gặp:** Lầm tưởng kịch bản thuận lợi là chuyện hoang đường không bao giờ xảy ra. Lịch sử kinh tế cho thấy các đợt bùng nổ công nghệ thường xuyên tạo ra những cú nhảy vọt vượt xa mọi kịch bản cơ sở của các nhà phân tích.

**6. Liên kết**
- Đọc trước: [Base Case Scenario](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/03_Scenario_Analysis.md#kich-ban-co-so-base-case-scenario).
- Mở rộng: [Bear Case Scenario](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/03_Scenario_Analysis.md#kich-ban-bat-loi-bear-case-scenario).

---

### Kịch bản bất lợi (Bear Case Scenario)

**1. Là gì?**
- Kịch bản bất lợi (kịch bản bi quan - Downside / Bear Case Scenario) là kịch bản kinh tế mô tả tình huống trong đó các cú sốc tiêu cực nghiêm trọng đồng thời ập đến, đẩy nền kinh tế vào trạng thái suy giảm tốc độ tăng trưởng nghiêm trọng, suy thoái kinh tế hoặc khủng hoảng tài chính.
- Thuật ngữ "Bear" bắt nguồn từ hình tượng con gấu tát móng vuốt xuống đất, biểu tượng của thị trường tài chính suy thoái và ảm đạm.
- Nếu chỉ nhớ một điều: **Kịch bản bất lợi là kịch bản ngày mưa bão khi những điều tồi tệ nhất ập đến, giúp bạn biết cách thắt lưng buộc bụng để sống sót qua mùa đông kinh tế.**

**2. Hoạt động thế nào?**
- **Các giả định kích hoạt kịch bản bất lợi:**
  - Xung đột địa chính trị lan rộng làm gián đoạn chuỗi cung ứng năng lượng, giá dầu thế giới vọt lên trên 120 USD/thùng.
  - Các thị trường xuất khẩu chủ lực rơi vào suy thoái sâu làm đơn hàng bị hủy bỏ hàng loạt.
  - Lạm phát kéo dài buộc các ngân hàng trung ương duy trì lãi suất cao kỷ lục trong thời gian dài.
  - Thị trường bất động sản đóng băng kéo dài làm gia tăng nợ xấu hệ thống ngân hàng.
- **Mục tiêu hoạch định:** Giúp doanh nghiệp chuẩn bị "kế hoạch sinh tồn": tối ưu hóa dòng tiền mặt, cắt giảm chi phí cố định, tái cơ cấu nợ và bảo vệ thanh khoản.

**3. Công thức & mô hình**
- Thường được thiết lập ở phân vị thấp (ví dụ phân vị thứ 10 - 10th percentile) của phân phối dự báo:
  $$Y_{Bear} = Q_{0,10}(Y)$$

**4. Ví dụ**
- *Ví dụ số:* Kịch bản bất lợi (xác suất $20\%$): GDP tăng trưởng chậm lại chỉ còn $+3,5\%$, lạm phát vọt lên $5,5\%$, xuất khẩu giảm $-8\%$, tỷ giá chịu áp lực mất giá mạnh $5-6\%$.
- *Ví dụ thực tế:* Đầu năm 2020, khi đại dịch COVID-19 bùng phát toàn cầu, các định chế tài chính quốc tế đã lập tức kích hoạt Kịch bản bất lợi: dự báo GDP toàn cầu tăng trưởng âm sâu, ngành hàng không và du lịch đóng băng hoàn toàn. Nhờ có kịch bản này, các hãng hàng không đã kịp thời đàm phán tái cấu trúc nợ và nhận các gói hỗ trợ thanh khoản của chính phủ để tránh phá sản.
- *Counterfactual:* Nếu một tập đoàn sử dụng đòn bẩy tài chính quá đà và không chuẩn bị kịch bản bất lợi, khi một cú sốc suy thoái bất ngờ ập đến, dòng tiền sẽ bị đứt gãy tức khắc và đẩy tập đoàn vào bờ vực phá sản.

**5. Ứng dụng & tranh luận**
- **Ứng dụng:** Trọng tâm của công tác quản trị rủi ro doanh nghiệp (Enterprise Risk Management); lập kế hoạch dự phòng vốn cho các ngân hàng thương mại.
- **Trade-off:** Quá bi quan và tập trung vào kịch bản bất lợi sẽ làm tê liệt tinh thần kinh doanh, khiến doanh nghiệp không dám đầu tư nắm bắt cơ hội.
- **Tranh luận / Lỗi thường gặp:** Lẫn lộn giữa Kịch bản bất lợi (Bear Case) và Kiểm tra sức chịu đựng (Stress Testing). Bear Case mô tả một kịch bản xấu nhưng vẫn có xác suất xảy ra tương đối hợp lý (ví dụ 10–20%); trong khi Stress Test mô phỏng những kịch bản thảm họa cực đoan cực hiếm gặp (xác suất 1%).

**6. Liên kết**
- Đọc tiếp: [Probability-weighted Scenarios](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/03_Scenario_Analysis.md#kich-ban-gan-trong-so-xac-suat-probability-weighted-scenarios).
- Mở rộng: [Stress Testing](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/04_Stress_Testing_and_Uncertainty.md#kiem-tra-suc-chiu-dung-stress-testing).

---

### Kịch bản gán trọng số xác suất (Probability-weighted Scenarios)

**1. Là gì?**
- Kịch bản gán trọng số xác suất là phương pháp phân tích định lượng kết hợp toàn bộ các kịch bản độc lập (Kịch bản cơ sở, Thuận lợi, Bất lợi) bằng cách gán cho mỗi kịch bản một **tỷ lệ phần trăm xác suất xảy ra khách quan hoặc chủ quan** (sao cho tổng xác suất của tất cả các kịch bản bằng đúng $100\%$).
- Cho phép người ra quyết định tính toán được **giá trị kỳ vọng toán học (Expected Value)** và độ lệch chuẩn rủi ro của các quyết định kinh doanh hoặc chính sách.
- Nếu chỉ nhớ một điều: **Kịch bản gán trọng số xác suất là việc tính điểm trung bình có tính đến độ chắc ăn của từng kịch bản để ra quyết định đầu tư an toàn nhất.**

**2. Hoạt động thế nào?**
- **Quy trình tính toán:**
  1. Xây dựng chi tiết các kịch bản kinh tế $S_1, S_2, \dots, S_m$.
  2. Dùng ý kiến chuyên gia hoặc mô hình kinh tế lượng để gán xác suất $p_1, p_2, \dots, p_m$ (với $\sum p_k = 1$).
  3. Tính giá trị kỳ vọng toán học (Expected Value) của chỉ tiêu tài chính.
  4. Tính phương sai và độ lệch chuẩn để đo lường mức độ rủi ro bất định.
- **Mô phỏng Monte Carlo (Monte Carlo Simulation):** Cho máy tính chạy hàng nghìn kịch bản ngẫu nhiên dựa trên các phân phối xác suất đầu vào để xuất ra biểu đồ phân phối xác suất hoàn chỉnh của kết quả đầu ra.

**3. Công thức & mô hình**
- Giá trị kỳ vọng:
  $$E(X) = \sum_{k=1}^m p_k \cdot X_k$$
- Độ lệch chuẩn (Rủi ro của kịch bản):
  $$\sigma = \sqrt{\sum_{k=1}^m p_k \cdot [X_k - E(X)]^2}$$

**4. Ví dụ**
- *Ví dụ số:* Định giá một dự án đầu tư nhà máy năng lượng mặt trời:
  - Kịch bản Thuận lợi ($p_1 = 25\%$): Lợi nhuận NPV là 200 tỷ VNĐ.
  - Kịch bản Cơ sở ($p_2 = 50\%$): Lợi nhuận NPV là 100 tỷ VNĐ.
  - Kịch bản Bất lợi ($p_3 = 25\%$): Lợi nhuận NPV là $-20$ tỷ VNĐ.
  - Giá trị kỳ vọng gán trọng số xác suất:
    $$E(NPV) = 0,25(200) + 0,50(100) + 0,25(-20) = 50 + 50 - 5 = 95 \text{ tỷ VNĐ}$$
  - Phương sai: $\sigma^2 = 0,25(200 - 95)^2 + 0,5(100 - 95)^2 + 0,25(-20 - 95)^2 = 2.756 + 12,5 + 3.306 = 6.075 \implies \sigma \approx 77,9$ tỷ VNĐ.
- *Ví dụ thực tế:* Chuẩn mực kế toán tài chính quốc tế IFRS 9 bắt buộc các ngân hàng thương mại khi trích lập dự phòng tổn thất tín dụng kỳ vọng (ECL - Expected Credit Loss) phải sử dụng mô hình gán trọng số xác suất đa kịch bản vĩ mô (kết hợp cả kịch bản cơ sở, thuận lợi và suy thoái) chứ không được chỉ dùng một kịch bản duy nhất.
- *Counterfactual:* Nếu ngân hàng chỉ trích lập dự phòng dựa trên duy nhất một kịch bản cơ sở màu hồng ($p_{base} = 100\%$), khi nền kinh tế rơi vào kịch bản bất lợi, hệ thống ngân hàng sẽ bị thiếu hụt dự phòng trầm trọng và đối mặt với rủi ro mất an toàn vốn.

**5. Ứng dụng & tranh luận**
- **Ứng dụng:** Trích lập dự phòng rủi ro nợ xấu theo chuẩn IFRS 9; định giá dự án đầu tư M&A và quản trị danh mục vốn đầu tư mạo hiểm.
- **Trade-off:** Việc gán xác suất (ví dụ tại sao là 60% mà không phải 50%) thường mang tính chủ quan của hội đồng chuyên gia (Subjective probability).
- **Tranh luận / Lỗi thường gặp:** Lầm tưởng giá trị kỳ vọng gán xác suất ($95$ tỷ) là một con số chắc chắn sẽ xảy ra trong thực tế. Trong thực tế, chỉ có một kịch bản duy nhất sẽ diễn ra (hoặc 200, hoặc 100, hoặc -20 tỷ); con số 95 tỷ chỉ là điểm tựa toán học trung bình để quản trị rủi ro.

**6. Liên kết**
- Đọc trước: [Scenario Analysis](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/03_Scenario_Analysis.md#phan-tich-kich-ban-scenario-analysis).
- Mở rộng: [Stress Testing](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/04_Stress_Testing_and_Uncertainty.md#kiem-tra-suc-chiu-dung-stress-testing).

---

## Câu hỏi tự kiểm tra

1. Phân tích sự khác biệt căn bản giữa phương pháp Phân tích kịch bản (Scenario Analysis) và phương pháp Dự báo điểm duy nhất (Point Forecast)?
2. Trình bày các yếu tố cốt lõi cấu thành nên một Kịch bản cơ sở (Base Case) trong kế hoạch phát triển kinh tế vĩ mô?
3. Tại sao trong quản trị doanh nghiệp, việc chuẩn bị Kịch bản bất lợi (Bear Case) lại quan trọng hơn việc say sưa với Kịch bản thuận lợi (Bull Case)?
4. Trình bày công thức tính Giá trị kỳ vọng toán học và Độ lệch chuẩn trong phương pháp Phân tích kịch bản gán trọng số xác suất?
5. Chuẩn mực báo cáo tài chính quốc tế IFRS 9 áp dụng phương pháp kịch bản đa chiều như thế nào trong việc trích lập dự phòng tổn thất tín dụng kỳ vọng (ECL)?

---

## Ghi chú nguồn
- Schwartz, P. (1996). *The Art of the Long View: Planning for the Future in an Uncertain World*. Currency Doubleday.
- International Accounting Standards Board (IASB). *IFRS 9 Financial Instruments - Expected Credit Loss Framework*.
- Shell Global. *The Shell Scenarios Framework and Methodology*.
