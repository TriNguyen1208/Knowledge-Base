# Nền tảng Dự báo Kinh tế (Forecasting Basics)

Chuyên đề này phân tích các trụ cột của công tác dự báo kinh tế vĩ mô: bản chất và phương pháp luận dự báo kinh tế, dự báo tăng trưởng GDP, dự báo quỹ đạo lạm phát, dự báo xu hướng lãi suất điều hành và mô hình dự báo xác suất suy thoái kinh tế.

---

### Dự báo kinh tế (Economic Forecasting)

**1. Là gì?**
- Dự báo kinh tế là quá trình khoa học sử dụng các mô hình thống kê, kinh tế lượng, dữ liệu lịch sử và phán đoán chuyên gia nhằm ước tính và đưa ra những nhận định có căn cứ về trạng thái tương lai của các biến số kinh tế (như GDP, lạm phát, thất nghiệp, tỷ giá).
- Nhà kinh tế học lỗi lạc John Kenneth Galbraith từng đưa ra câu châm biếm sâu sắc: "Chức năng duy nhất của dự báo kinh tế là làm cho môn chiêm tinh học trông có vẻ đáng kính hơn."
- Nếu chỉ nhớ một điều: **Dự báo kinh tế là việc dùng toán học và dữ liệu quá khứ để phác thảo bức tranh khả dĩ nhất về tương lai của nền kinh tế.**

**2. Hoạt động thế nào?**
- **Các phương pháp luận dự báo chính:**
  1. *Mô hình chuỗi thời gian (Time Series Models):* ARIMA, VAR, VECM – dự báo tương lai dựa thuần túy trên quy luật vận động nội tại trong quá khứ của chuỗi số liệu.
  2. *Mô hình cấu trúc kinh tế vĩ mô (Structural Macroeconomic Models / DSGE):* Dựa trên các nền tảng vi mô tối ưu hóa của hộ gia đình và doanh nghiệp.
  3. *Mô hình Học máy và Trí tuệ nhân tạo (Machine Learning & AI):* Random Forest, mạng nơ-ron LSTM xử lý các mối quan hệ phi tuyến phức tạp từ dữ liệu lớn (Big Data).
  4. *Khảo sát ý kiến chuyên gia (Expert Judgment):* Phương pháp Delphi, tổng hợp quan điểm của các chuyên gia đầu ngành.

**3. Công thức & mô hình**
- Mô hình tự hồi quy tích hợp trung bình trượt cơ bản (ARIMA $(p, d, q)$):
  $$\Delta^d Y_t = c + \sum_{i=1}^p \phi_i \Delta^d Y_{t-i} + \epsilon_t + \sum_{j=1}^q \theta_j \epsilon_{t-j}$$
- Dự báo điểm (Point Forecast) đi kèm Khoảng tin cậy (Confidence Interval / Fan Chart):
  $$\hat{Y}_{t+h} \pm z_{\alpha/2} \cdot \sigma_{h}$$

**4. Ví dụ**
- *Ví dụ số:* Một mô hình chuỗi thời gian dự báo tăng trưởng quý tới là $\hat{g} = 6,2\%$. Với sai số chuẩn của mô hình là $\sigma = 0,5\%$, khoảng tin cậy $95\%$ cho dự báo là:
  $$6,2\% \pm 1,96 \times 0,5\% = [5,22\%; 7,18\%]$$
- *Ví dụ thực tế:* Bản Báo cáo Triển vọng Kinh tế Thế giới (World Economic Outlook - WEO) của Quỹ Tiền tệ Quốc tế (IMF) công bố định kỳ vào tháng 4 và tháng 10 hàng năm là tài liệu dự báo kinh tế toàn cầu có tầm ảnh hưởng lớn nhất thế giới, định hình kế hoạch tài chính của hàng trăm chính phủ và tập đoàn đa quốc gia.
- *Counterfactual:* Nếu các nhà kinh tế có thể dự báo tương lai chính xác $100\%$ không có sai số, toàn bộ chu kỳ kinh doanh bất ngờ sẽ bị triệt tiêu vì các tác nhân thị trường đã phòng ngừa hoàn hảo mọi rủi ro từ trước.

**5. Ứng dụng & tranh luận**
- **Ứng dụng:** Giúp chính phủ lập kế hoạch ngân sách và chỉ tiêu kinh tế - xã hội; doanh nghiệp lập kế hoạch sản xuất kinh doanh và quản trị dòng tiền.
- **Trade-off:** Dự báo kinh tế luôn đối mặt với vấn đề bất định cơ bản (Fundamental Uncertainty): tương lai không phải là sự lặp lại đơn giản của quá khứ, các cú sốc "Thiên nga đen" (dịch bệnh, chiến tranh) luôn nằm ngoài tầm với của các mô hình toán.
- **Tranh luận / Lỗi thường gặp:** Lầm tưởng một con số dự báo điểm duy nhất là sự thật tuyệt đối. Mọi dự báo khoa học bắt buộc phải đi kèm với khoảng tin cậy sai số và các giả định bối cảnh rõ ràng.

**6. Liên kết**
- Đọc tiếp: [Macroeconomic Forecasting](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/01_Forecasting_Basics.md#du-bao-kinh-te-vi-mo-macroeconomic-forecasting).
- Mở rộng: [Scenario Analysis](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/03_Scenario_Analysis.md#phan-tich-kich-ban-scenario-analysis).

---

### Dự báo kinh tế vĩ mô (Macroeconomic Forecasting)

**1. Là gì?**
- Dự báo kinh tế vĩ mô là phân ngành dự báo tập trung chuyên sâu vào các biến số tổng thể ở cấp độ quốc gia và toàn cầu: Tổng sản phẩm quốc nội (GDP), Tỷ lệ lạm phát (CPI), Tỷ lệ thất nghiệp, Lãi suất chính sách, Cán cân thanh toán và Tỷ giá hối đoái.
- Xem xét toàn diện mối quan hệ tác động qua lại, đan xen đa chiều giữa các thị trường hàng hóa, thị trường lao động và thị trường tài chính trong một hệ thống cân bằng chung.
- Nếu chỉ nhớ một điều: **Dự báo kinh tế vĩ mô là việc dự đoán bức tranh sức khỏe toàn diện của một quốc gia trong 1–5 năm tới.**

**2. Hoạt động thế nào?**
- **Mô hình Cân bằng Tổng thể Động Ngẫu nhiên (DSGE - Dynamic Stochastic General Equilibrium):**
  - Khung mô hình chuẩn mực được Fed, ECB và các ngân hàng trung ương hiện đại sử dụng.
  - Tích hợp 3 khối hành vi: Hộ gia đình tối đa hóa thỏa dụng liên thời gian, Doanh nghiệp tối đa hóa lợi nhuận trong điều kiện giá cả kết dính, và Ngân hàng Trung ương điều hành lãi suất theo Quy tắc Taylor.
  - Mô phỏng cách thức toàn bộ nền kinh tế phản ứng trước các cú sốc công nghệ, cú sốc chính sách tiền tệ và cú sốc chi tiêu chính phủ.

**3. Công thức & mô hình**
- Hệ phương trình Tân Keynes tuyến tính hóa quanh trạng thái dừng:
  1. Phương trình đường IS động:
     $$x_t = E_t(x_{t+1}) - \frac{1}{\sigma} (i_t - E_t \pi_{t+1} - r_t^n)$$
  2. Phương trình đường cong Phillips Tân Keynes (NKPC):
     $$\pi_t = \beta E_t(\pi_{t+1}) + \kappa x_t + \epsilon_t^\pi$$
  3. Quy tắc chính sách tiền tệ Taylor:
     $$i_t = \phi_\pi \pi_t + \phi_x x_t + \epsilon_t^i$$

**4. Ví dụ**
- *Ví dụ số:* Một mô hình DSGE vĩ mô dự báo rằng nếu Ngân hàng Trung ương tăng lãi suất điều hành thêm 100 điểm cơ bản trong Quý 1: Sau 4 quý, khoảng bù sản lượng $x$ sẽ giảm $-0,6\%$ và lạm phát $\pi$ sẽ hạ nhiệt $-0,4\%$.
- *Ví dụ thực tế:* Tại Việt Nam, Trung tâm Thông tin và Dự báo Kinh tế - Xã hội Quốc gia (NCIF thuộc Bộ Kế hoạch và Đầu tư) và Viện Nghiên cứu Quản lý Kinh tế Trung ương (CIEM) định kỳ công bố các kịch bản dự báo kinh tế vĩ mô Việt Nam hàng quý để tham mưu cho Chính phủ ban hành các nghị quyết điều hành.
- *Counterfactual:* Nếu các nhà dự báo bỏ qua sự phụ thuộc lẫn nhau giữa lạm phát và lãi suất trong mô hình cân bằng chung, họ sẽ đưa ra những dự báo đơn lẻ sai lệch hoàn toàn về mặt chính sách.

**5. Ứng dụng & tranh luận**
- **Ứng dụng:** Xây dựng Kế hoạch Phát triển Kinh tế - Xã hội 5 năm của Chính phủ; định hướng phân bổ ngân sách và chiến lược kinh doanh của các tập đoàn lớn.
- **Trade-off:** Các mô hình DSGE phức tạp thường giả định con người có "kỳ vọng duy lý hoàn hảo", dễ bị sụp đổ trước những biến cố hoảng loạn tâm lý bầy đàn thực tế.
- **Tranh luận / Lỗi thường gặp:** Phê phán của Lucas (Lucas Critique): Không thể sử dụng các mối quan hệ thống kê trong quá khứ để dự báo tác động của một chính sách mới, vì khi chính sách thay đổi, người dân sẽ tự động thay đổi hành vi và làm biến dạng các tham số cũ của mô hình.

**6. Liên kết**
- Đọc tiếp: [GDP Forecasting](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/01_Forecasting_Basics.md#du-bao-gdp-gdp-forecasting).
- Mở rộng: [Inflation Forecasting](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/01_Forecasting_Basics.md#du-bao-lam-phat-inflation-forecasting).

---

### Dự báo GDP (GDP Forecasting)

**1. Là gì?**
- Dự báo GDP là hoạt động lượng hóa và ước tính tốc độ tăng trưởng Tổng sản phẩm quốc nội thực tế của một nền kinh tế trong các quý hoặc năm tiếp theo.
- Là chỉ tiêu cốt lõi và được quan tâm nhiều nhất trong toàn bộ hệ thống dự báo kinh tế vì nó phản ánh tốc độ mở rộng tổng thể của toàn bộ của cải vật chất làm ra của quốc gia.
- Nếu chỉ nhớ một điều: **Dự báo GDP cho biết nền kinh tế năm tới sẽ tăng trưởng bao nhiêu phần trăm để cả xã hội cùng chuẩn bị kế hoạch.**

**2. Hoạt động thế nào?**
- **Hai phương pháp tiếp cận chủ đạo:**
  1. *Phương pháp Tổng cầu (Expenditure Approach):* Dự báo độc lập từng cấu phần $C, I, G, X, M$ rồi cộng lại:
     $$\hat{Y} = \hat{C} + \hat{I} + \hat{G} + (\hat{X} - \hat{M})$$
  2. *Phương pháp Sản xuất (Production Approach):* Dự báo theo 3 khu vực lớn của nền kinh tế: Nông - Lâm - Thủy sản, Công nghiệp - Xây dựng, và Dịch vụ.
- **Biểu đồ cánh quạt (Fan Chart):** Thay vì đưa ra một con số cứng nhắc, Ngân hàng Trung ương Anh (BoE) tiên phong vẽ biểu đồ dải màu xác suất xòe rộng ra theo thời gian để phản ánh mức độ bất định tăng dần của tương lai.

**3. Công thức & mô hình**
- Mô hình nhân tố động (Dynamic Factor Model - DFM): Rút trích một vài nhân tố chung không quan sát được ($F_t$) từ hàng trăm chỉ báo kinh tế tần suất cao:
  $$X_{i, t} = \lambda_i F_t + e_{i, t}$$
  $$GDP_{t} = \beta F_t + \epsilon_t$$

**4. Ví dụ**
- *Ví dụ số:* Đầu năm 2024, Ngân hàng Thế giới (World Bank) dự báo tăng trưởng GDP của Việt Nam năm 2024 đạt $5,5\%$; Ngân hàng Phát triển Châu Á (ADB) dự báo $6,0\%$; trong khi mục tiêu Quốc hội Việt Nam đề ra là $6,0\% - 6,5\%$.
- *Ví dụ thực tế:* Mô hình GDPNow của Cục Dự trữ Liên bang chi nhánh Atlanta (Atlanta Fed) là công cụ dự báo GDP theo thời gian thực nổi tiếng nhất thế giới: cập nhật liên tục ước tính tăng trưởng GDP của Mỹ ngay khi có bất kỳ dữ liệu mới nào về bán lẻ, thương mại hay việc làm được công bố.
- *Counterfactual:* Nếu một chính phủ lập dự toán ngân sách dựa trên con số dự báo GDP quá lạc quan ($8\%$) trong khi thực tế chỉ đạt $4\%$, nguồn thu ngân sách sẽ bị hụt thu nghiêm trọng, đẩy chính phủ vào tình trạng vỡ kế hoạch tài khóa.

**5. Ứng dụng & tranh luận**
- **Ứng dụng:** Căn cứ tối thượng để Quốc hội thông qua dự toán thu chi ngân sách nhà nước, kế hoạch tuyển dụng lao động và mục tiêu tăng trưởng tín dụng.
- **Trade-off:** Dự báo GDP hàng năm thường có xu hướng bám sát vào mức trung bình quá khứ (Mean-reversion) và hầu như luôn bỏ sót các điểm đảo chiều chu kỳ suy thoái đột ngột.
- **Tranh luận / Lỗi thường gặp:** Lẫn lộn giữa dự báo GDP danh nghĩa và GDP thực tế. Dự toán ngân sách cần dùng GDP danh nghĩa (vì số thu thuế tính theo tiền mặt hiện hành); trong khi đánh giá tăng trưởng kinh tế bắt buộc phải dùng GDP thực tế (đã trừ lạm phát).

**6. Liên kết**
- Đọc trước: [Macroeconomic Forecasting](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/01_Forecasting_Basics.md#du-bao-kinh-te-vi-mo-macroeconomic-forecasting).
- Mở rộng: [Nowcasting](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/02_Nowcasting_Projections_and_Forecast_Quality.md#du-bao-ngay-nowcasting).

---

### Dự báo lạm phát (Inflation Forecasting)

**1. Là gì?**
- Dự báo lạm phát là hoạt động ước tính và lượng hóa tốc độ gia tăng của chỉ số giá tiêu dùng (CPI) hoặc chỉ số giảm phát GDP trong các khoảng thời gian tương lai.
- Là "kim chỉ nam sống còn" cho các Ngân hàng Trung ương vận hành theo khuôn khổ Mục tiêu lạm phát (Inflation Targeting), vì chính sách tiền tệ có độ trễ truyền dẫn từ 12 đến 24 tháng: ngân hàng trung ương phải tăng hay giảm lãi suất hôm nay dựa trên **dự báo lạm phát của 1–2 năm tới**, chứ không phải dựa vào lạm phát của ngày hôm nay.
- Nếu chỉ nhớ một điều: **Dự báo lạm phát cho biết vật giá năm sau sẽ leo thang nhanh hay chậm để Ngân hàng Trung ương quyết định tăng hay hạ lãi suất từ bây giờ.**

**2. Hoạt động thế nào?**
- **Các nhân tố đầu vào chính:**
  1. *Đường cong Phillips:* Dự báo áp lực lạm phát cầu kéo dựa trên khoảng bù sản lượng ($Y - Y^*$) và độ thắt chặt của thị trường lao động.
  2. *Giá hàng hóa thế giới:* Dự báo giá dầu thô, khí đốt, phân bón, lương thực quốc tế truyền dẫn vào chi phí đẩy.
  3. *Tỷ giá hối đoái:* Dự báo mức độ mất giá của đồng nội tệ truyền dẫn sang lạm phát nhập khẩu.
  4. *Kỳ vọng lạm phát:* Khảo sát tâm lý người dân và thị trường trái phiếu hòa vốn (TIPS).

**3. Công thức & mô hình**
- Mô hình đường cong Phillips mở rộng kỳ vọng lai (Hybrid New Keynesian Phillips Curve):
  $$\pi_t = \gamma_b \pi_{t-1} + \gamma_f E_t(\pi_{t+1}) + \lambda (y_t - y_t^*) + \epsilon_t$$
  Kết hợp cả lạm phát quá khứ (tính kết dính) và lạm phát kỳ vọng tương lai.

**4. Ví dụ**
- *Ví dụ số:* Mô hình dự báo CPI của một nước: Lạm phát nền là $2,5\%$. Giá dầu thế giới dự báo tăng $20\%$ làm lạm phát chi phí đẩy tăng thêm $+0,6\%$. Áp lực tăng lương đẩy thêm $+0,4\%$. Dự báo lạm phát cả năm là:
  $$\hat{\pi} = 2,5\% + 0,6\% + 0,4\% = 3,5\%$$
  Nằm trong trần mục tiêu kiểm soát $4\%$.
- *Ví dụ thực tế:* Ngân hàng Trung ương Anh (BoE) và Fed công bố Báo cáo Lạm phát (Monetary Policy Report) hàng quý với biểu đồ cánh quạt xác suất lạm phát 3 năm tới làm căn cứ giải trình trước Quốc hội.
- *Counterfactual:* Nếu ngân hàng trung ương đợi đến khi CPI thực tế vọt lên $8\%$ mới bắt đầu tăng lãi suất, họ đã hành động quá trễ và lạm phát kỳ vọng đã kịp ăn sâu vào tâm lý thị trường, buộc phải hạ cánh cứng để giải quyết.

**5. Ứng dụng & tranh luận**
- **Ứng dụng:** Trọng tâm hoạch định chính sách lãi suất và tỷ giá của Ngân hàng Trung ương; căn cứ định giá trái phiếu chính phủ.
- **Trade-off:** Dự báo lạm phát rất dễ bị sai lệch nghiêm trọng trước các cú sốc nguồn cung bất ngờ từ thời tiết (mất mùa làm giá gạo tăng) hoặc xung đột địa chính trị.
- **Tranh luận / Lỗi thường gặp:** Dự báo CPI toàn phần mà quên bóc tách Lạm phát lõi (Core Inflation). Phản ứng chính sách tiền tệ chạy theo các biến động thất thường của giá thịt lợn hay giá xăng dầu ngắn hạn là sai lầm phổ biến.

**6. Liên kết**
- Đọc trước: [Inflation Targeting](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/08_Inflation_and_Deflation/04_Interest_Rates_Policy_and_Hedging.md#muc-tieu-lam-phat-inflation-targeting).
- Mở rộng: [Core Inflation](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/08_Inflation_and_Deflation/02_Measuring_Inflation.md#lam-phat-loi-core-inflation).

---

### Dự báo lãi suất (Interest Rate Forecasting)

**1. Là gì?**
- Dự báo lãi suất là hoạt động ước tính và dự đoán hướng đi, biên độ và thời điểm thay đổi của các mức lãi suất chính sách của Ngân hàng Trung ương (như Fed Funds Rate, lãi suất tái cấp vốn) và cấu trúc đường cong lợi suất trên thị trường tài chính trong tương lai.
- Là biến số tài chính có tính chi phối bao trùm toàn bộ thị trường chứng khoán, bất động sản, thị trường nợ và tỷ giá tiền tệ toàn cầu.
- Nếu chỉ nhớ một điều: **Dự báo lãi suất cho biết Ngân hàng Trung ương sắp sửa tăng lãi suất để siết tiền hay hạ lãi suất để bơm tiền ra thị trường.**

**2. Hoạt động thế nào?**
- **Hai công cụ dự báo chuẩn mực Phố Wall:**
  1. *Biểu đồ Dot Plot của Fed:* Công bố hàng quý, ghi lại ẩn danh dự đoán của từng thành viên Ủy ban Thị trường Mở Liên bang (FOMC) về mức lãi suất thích hợp vào cuối mỗi năm trong 3 năm tới.
  2. *Hợp đồng tương lai lãi suất Fed Funds (CME FedWatch Tool):* Tính toán xác suất tăng/giảm lãi suất theo thời gian thực dựa trên giá giao dịch thực tế của các hợp đồng tương lai tại Sàn Giao dịch Hàng hóa Chicago (CME).
- **Hàm phản ứng chính sách:** Dự đoán lãi suất dựa trên việc đưa các dự báo về khoảng bù sản lượng và lạm phát vào Quy tắc Taylor.

**3. Công thức & mô hình**
- Phương trình Quy tắc Taylor mở rộng có tính trễ:
  $$i_t = \rho i_{t-1} + (1 - \rho) [r^* + \pi_t + \alpha_\pi (\pi_t - \pi^*) + \alpha_y (y_t - y^*)] + \epsilon_t$$
  Hệ số $\rho \approx 0,8$ phản ánh việc các ngân hàng trung ương có xu hướng điều chỉnh lãi suất từ từ từng bước (Interest rate smoothing) chứ không giật cục.

**4. Ví dụ**
- *Ví dụ số:* Công cụ CME FedWatch ghi nhận giá hợp đồng tương lai ngụ ý xác suất $85\%$ Fed sẽ cắt giảm lãi suất 25 điểm cơ bản tại cuộc họp tháng 9, và chỉ có $15\%$ xác suất giữ nguyên lãi suất.
- *Ví dụ thực tế:* Tại Việt Nam, các công ty chứng khoán và quỹ đầu tư theo dõi sát sao chênh lệch lãi suất USD-VND trên thị trường liên ngân hàng và chỉ đạo của Chính phủ để dự báo xu hướng điều chỉnh lãi suất điều hành của Ngân hàng Nhà nước.
- *Counterfactual:* Nếu thị trường dự báo Fed sẽ hạ lãi suất $100\%$ nhưng Fed bất ngờ tăng lãi suất, một cú sốc thanh khoản đột ngột sẽ lập tức xóa sổ hàng trăm tỷ USD giá trị vốn hóa của thị trường chứng khoán toàn cầu.

**5. Ứng dụng & tranh luận**
- **Ứng dụng:** Giúp các giám đốc tài chính (CFO) quyết định thời điểm phát hành trái phiếu doanh nghiệp cố định hay thả nổi; chiến lược quản trị kỳ hạn của các ngân hàng thương mại.
- **Trade-off:** Dự báo lãi suất phụ thuộc hoàn toàn vào các phát biểu định hướng chính sách (Forward Guidance) của lãnh đạo Ngân hàng Trung ương, vốn có thể thay đổi nhanh chóng theo các dữ liệu kinh tế mới xuất hiện.
- **Tranh luận / Lỗi thường gặp:** Lầm tưởng biểu đồ Dot Plot là lời cam kết bất di bất dịch của Fed. Dot Plot chỉ là ảnh chụp nhanh suy nghĩ của các quan chức tại thời điểm khảo sát, không phải là một hợp đồng pháp lý cam kết hành động.

**6. Liên kết**
- Đọc trước: [Nominal Interest Rate](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/08_Inflation_and_Deflation/04_Interest_Rates_Policy_and_Hedging.md#lai-suat-danh-nghia-nominal-interest-rate).
- Mở rộng: [Yield Curve](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/12_Economic_Indicators/07_Yields_Commodities_and_Spreads.md#duong-cong-loi-suat-yield-curve).

---

### Dự báo suy thoái (Recession Forecasting)

**1. Là gì?**
- Dự báo suy thoái là việc sử dụng các mô hình xác suất thống kê và các chỉ báo cảnh báo sớm nhằm ước tính khả năng (tính theo phần trăm xác suất từ 0% đến 100%) nền kinh tế sẽ rơi vào một cuộc suy thoái trong một khoảng thời gian nhất định (thường là trong vòng 12 tháng tới).
- Là nhiệm vụ khó khăn và thách thức bậc nhất trong toàn bộ khoa học kinh tế học thực nghiệm.
- Nếu chỉ nhớ một điều: **Dự báo suy thoái tính toán xem xác suất nền kinh tế bị ngã quỵ trong 12 tháng tới là bao nhiêu phần trăm.**

**2. Hoạt động thế nào?**
- **Các mô hình dự báo xác suất kinh điển:**
  1. *Mô hình Probit đường cong lợi suất của New York Fed:* Sử dụng chênh lệch lợi suất trái phiếu Kho bạc 10 năm trừ đi 3 tháng ($Y_{10Y} - Y_{3M}$) để tính xác suất suy thoái:
     $$P(\text{Suy thoái}_{t+12} = 1) = \Phi(\beta_0 + \beta_1 \cdot Spread_t)$$
     Khi xác suất vượt qua ngưỡng $30\% - 40\%$, cuộc suy thoái hầu như chắc chắn sẽ xảy ra.
  2. *Quy tắc Sahm (Sahm Rule):* Nhận diện suy thoái theo thời gian thực dựa trên đà tăng của tỷ lệ thất nghiệp trung bình 3 tháng so với đáy 12 tháng trước.
- **Tính phi đối xứng:** Các cuộc suy thoái thường ập đến rất nhanh và đột ngột (rơi tự do như thang máy), trong khi các giai đoạn phục hồi lại diễn ra từ từ chậm chạp (leo từng bước cầu thang bộ).

**3. Công thức & mô hình**
- Mô hình chuyển trạng thái Markov (Markov-Switching Model của James Hamilton):
  Mô tả nền kinh tế chuyển động qua lại giữa hai trạng thái ẩn: Trạng thái Mở rộng ($S_t = 0$) và Trạng thái Suy thoái ($S_t = 1$) với ma trận xác suất chuyển trạng thái $p_{ij}$.

**4. Ví dụ**
- *Ví dụ số:* Mô hình Probit của NY Fed tính toán chênh lệch lợi suất âm sâu $-150$ bps, cho ra xác suất suy thoái kinh tế Mỹ trong 12 tháng tới là $68\%$. Đây là mức xác suất cực kỳ nguy hiểm, thúc giục các quỹ đầu tư hạ tỷ trọng cổ phiếu xuống mức tối thiểu.
- *Ví dụ thực tế:* Khảo sát các nhà kinh tế trưởng của Bloomberg (Bloomberg Recession Probability Survey) tập hợp dự báo của hơn 70 chuyên gia kinh tế độc lập hàng tháng để đưa ra xác suất suy thoái đồng thuận cho từng quốc gia lớn.
- *Counterfactual:* Nếu một cuộc suy thoái được mọi người dự báo trước với xác suất $100\%$, các doanh nghiệp sẽ đồng loạt sa thải nhân viên và cắt đầu tư ngay lập tức để phòng thủ, và chính hành vi đó sẽ biến cuộc suy thoái thành sự thật tức khắc (tiên tri tự hoàn tất).

**5. Ứng dụng & tranh luận**
- **Ứng dụng:** Giúp các ngân hàng thương mại tăng cường trích lập dự phòng rủi ro nợ xấu; kích hoạt kế hoạch kinh doanh phòng thủ của các tập đoàn.
- **Trade-off:** Dự báo suy thoái sai (báo động giả) có thể khiến doanh nghiệp co cụm bỏ lỡ những cơ hội kinh doanh vàng trong các pha mở rộng.
- **Tranh luận / Lỗi thường gặp:** Lời nguyền "Chưa từng dự báo đúng suy thoái" - giới kinh tế học thường xuyên bị chỉ trích vì hầu như không bao giờ dự báo chính xác được thời điểm bùng phát của các cuộc khủng hoảng lớn trước khi chúng thực sự xảy ra.

**6. Liên kết**
- Đọc trước: [Recession](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/10_Growth_and_Business_Cycles/02_Business_Cycle_and_Phases.md#suy-thoai-recession).
- Mở rộng: [Early Warning Indicators](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/04_Stress_Testing_and_Uncertainty.md#chi-bao-canh-bao-som-early-warning-indicators).

---

## Câu hỏi tự kiểm tra

1. Tại sao các nhà kinh tế học hiện đại thường công bố dự báo dưới dạng "Biểu đồ cánh quạt" (Fan Chart) thay vì một con số dự báo điểm duy nhất?
2. Trình bày nội dung chính của Phê phán Lucas (Lucas Critique) đối với việc sử dụng các mô hình kinh tế lượng truyền thống để dự báo chính sách?
3. Mô hình Cân bằng Tổng thể Động Ngẫu nhiên (DSGE) kết hợp 3 khối hành vi vi mô nào trong việc dự báo vĩ mô?
4. Tại sao Ngân hàng Trung ương phải điều hành chính sách tiền tệ dựa trên "Dự báo lạm phát tương lai" chứ không phải lạm phát hiện tại?
5. Mô hình Probit của Cục Dự trữ Liên bang New York sử dụng biến số tài chính nào để tính toán xác suất suy thoái kinh tế?

---

## Ghi chú nguồn
- Hamilton, J. D. (1989). *A New Approach to the Economic Analysis of Nonstationary Time Series and the Business Cycle*. Econometrica, 57(2), 357-384.
- Lucas, R. E. (1976). *Econometric Policy Evaluation: A Critique*. Carnegie-Rochester Conference Series on Public Policy.
- Federal Reserve Bank of New York. *The Yield Curve as a Leading Indicator*.
