# Dự báo Ngay, Dự phóng và Đánh giá Chất lượng Dự báo (Nowcasting, Projections & Quality)

Chuyên đề này phân tích các kỹ thuật dự báo hiện đại theo thời gian thực và phương pháp kiểm chứng chất lượng dự báo: kỹ thuật Nowcasting, các báo cáo dự phóng kinh tế vĩ mô, dự báo đồng thuận thị trường (Consensus), sai số dự báo và các định kiến nhận thức trong dự báo.

---

### Dự báo ngay (Nowcasting)

**1. Là gì?**
- Nowcasting (viết tắt của "Now-Forecasting" - Dự báo hiện tại theo thời gian thực) là kỹ thuật dự báo kinh tế lượng hiện đại nhằm ước tính và cập nhật liên tục trạng thái hiện tại (hoặc tương lai rất gần trong vòng 1 tháng/quý) của các biến số vĩ mô then chốt (như GDP thực tế) **ngay tại thời điểm hiện tại**, trước khi các cơ quan thống kê chính thức hoàn tất việc thu thập và công bố dữ liệu.
- Ra đời để giải quyết vấn đề "Độ trễ công bố dữ liệu" (Publication Lag): Dữ liệu GDP quý thường chỉ được công bố sau khi quý đó đã kết thúc từ 1 đến 2 tháng.
- Nếu chỉ nhớ một điều: **Nowcasting là chiếc máy đo nhịp tim liên tục theo từng ngày để biết GDP quý này đang tăng trưởng bao nhiêu ngay cả khi quý này chưa kết thúc.**

**2. Hoạt động thế nào?**
- **Nguyên lý dòng chảy dữ liệu tần suất cao:**
  - GDP được công bố theo quý (tần suất thấp).
  - Nhưng trong suốt 3 tháng của quý đó, hàng loạt dữ liệu kinh tế tần suất cao khác liên tục được công bố hàng tuần, hàng ngày: việc làm, doanh số bán lẻ, xuất nhập khẩu, chỉ số PMI, sản lượng điện thoại, tiêu thụ điện.
  - Mô hình Nowcasting tự động "hấp thụ" từng mảnh ghép dữ liệu mới này ngay khi chúng vừa xuất hiện trên bảng tin để cập nhật lại ước tính GDP.
- **Kỹ thuật toán học:** Sử dụng Mô hình Chuỗi thời gian hỗn hợp tần suất (MIDAS - Mixed-Data Sampling) và Mô hình Nhân tố động (Dynamic Factor Models).

**3. Công thức & mô hình**
- Mô hình hồi quy MIDAS:
  $$Y_t = \beta_0 + \beta_1 B(L^{1/m}; \theta) X_t^{(m)} + \epsilon_t$$
  Cho phép hồi quy biến số quý $Y_t$ trực tiếp trên chuỗi dữ liệu tháng hoặc ngày $X_t^{(m)}$ mà không cần gộp mẫu làm mất thông tin.

**4. Ví dụ**
- *Ví dụ số:* Đầu quý 1, mô hình Nowcasting ước tính GDP quý 1 tăng $5,0\%$. Giữa tháng 2, báo cáo doanh số bán lẻ công bố tăng vọt $\implies$ mô hình tự động nâng ước tính lên $5,3\%$. Đến cuối tháng 3, số liệu xuất khẩu bị giảm $\implies$ mô hình hạ ước tính về $5,1\%$. Khi cơ quan thống kê công bố số liệu chính thức vào tháng 4 là $5,15\%$, sai số gần như bằng 0.
- *Ví dụ thực tế:* Mô hình Atlanta Fed GDPNow và New York Fed Staff Nowcast là hai công cụ Nowcasting nổi tiếng nhất toàn cầu, được các quỹ đầu tư Phố Wall sử dụng để điều chỉnh vị thế giao dịch hàng tuần.
- *Counterfactual:* Nếu không có kỹ thuật Nowcasting, các nhà hoạch định chính sách sẽ phải "lái xe nhìn qua gương chiếu hậu": đưa ra quyết định lãi suất trong sương mù mà không biết cỗ xe kinh tế quý này đang tăng tốc hay chết máy.

**5. Ứng dụng & tranh luận**
- **Ứng dụng:** Trợ thủ đắc lực cho các cuộc họp điều hành chính sách tiền tệ khẩn cấp của ngân hàng trung ương; giao dịch tài chính thuật toán.
- **Trade-off:** Dữ liệu Nowcasting có thể biến động giật cục mạnh mẽ vào đầu quý khi lượng dữ liệu thu thập được còn quá ít.
- **Tranh luận / Lỗi thường gặp:** Lầm tưởng Nowcasting có thể dự báo được tương lai xa 2–3 năm. Nowcasting thuần túy là công cụ chụp ảnh thời gian thực (chỉ áp dụng cho quý hiện tại).

**6. Liên kết**
- Đọc trước: [GDP Forecasting](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/01_Forecasting_Basics.md#du-bao-gdp-gdp-forecasting).
- Mở rộng: [Economic Projections](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/02_Nowcasting_Projections_and_Forecast_Quality.md#du-phong-kinh-te-economic-projections).

---

### Dự phóng kinh tế (Economic Projections)

**1. Là gì?**
- Dự phóng kinh tế là các ước tính và kịch bản lượng hóa có điều kiện về quỹ đạo tương lai của các biến số kinh tế vĩ mô trong trung và dài hạn (thường từ 2 đến 10 năm), được xây dựng dựa trên một tập hợp các **giả định chính sách và bối cảnh cụ thể** (như giả định lãi suất không đổi, chính sách thuế được giữ nguyên, hoặc giá dầu giữ ở mức cố định).
- Khác với "Dự báo" (Forecast - nhận định về những gì *chắc chắn sẽ xảy ra*), "Dự phóng" (Projection) trả lời câu hỏi: "Nếu chính sách và điều kiện này được thực thi, thì bức tranh kinh tế *sẽ trông như thế nào*?"
- Nếu chỉ nhớ một điều: **Dự phóng là bản phác thảo tương lai có điều kiện: "nếu làm thế này thì kết quả sẽ ra thế kia".**

**2. Hoạt động thế nào?**
- **Bản tóm tắt Dự phóng Kinh tế của Fed (SEP - Summary of Economic Projections):**
  - Công bố 4 lần/năm (vào các tháng 3, 6, 9, 12).
  - Cung cấp dự phóng về 4 biến số cốt lõi: Tăng trưởng GDP thực tế, Tỷ lệ thất nghiệp, Lạm phát PCE, Lạm phát PCE lõi, và Lãi suất Fed Funds mục tiêu trong 3 năm tới và dài hạn.
- **Dự phóng nợ công và tài khóa của CBO:** Văn phòng Ngân sách Quốc hội Mỹ (CBO) định kỳ công bố bản Dự phóng Ngân sách và Kinh tế 10 năm (10-year Budget Projections) theo luật định hiện hành để cảnh báo lộ trình nợ công quốc gia.

**3. Công thức & mô hình**
- Mô hình mô phỏng chính sách (Counterfactual Policy Simulation):
  $$\hat{Y}_{t+h} = f(\text{Dữ liệu quá khứ}, \text{Giả định Chính sách } X_{t+h})$$

**4. Ví dụ**
- *Ví dụ số:* Bản dự phóng kinh tế SEP tháng 12/2023 của Fed dự phóng: Tăng trưởng GDP Mỹ năm 2024 đạt $1,4\%$, tỷ lệ thất nghiệp nhích lên $4,1\%$, lạm phát PCE giảm về $2,4\%$, và lãi suất chính sách sẽ hạ dần về mức $4,6\%$ vào cuối năm 2024.
- *Ví dụ thực tế:* Báo cáo Viễn cảnh Kinh tế Toàn cầu (Global Economic Prospects) của Ngân hàng Thế giới (WB) cung cấp các dự phóng tăng trưởng kinh tế trung hạn cho tất cả các nhóm nước đang phát triển, giúp định hướng dòng vốn viện trợ phát triển quốc tế.
- *Counterfactual:* Nếu Quốc hội Mỹ thông qua một gói cắt giảm thuế đột xuất trị giá 2.000 tỷ USD, toàn bộ bản dự phóng ngân sách 10 năm của CBO sẽ lập tức bị vô hiệu hóa và phải chạy lại mô hình từ đầu.

**5. Ứng dụng & tranh luận**
- **Ứng dụng:** Định hướng kỳ vọng thị trường (Forward Guidance); đánh giá tính bền vững tài khóa dài hạn và hoạch định chính sách an sinh xã hội cho dân số già hóa.
- **Trade-off:** Dự phóng càng dài hạn (5–10 năm) thì độ chính xác càng suy giảm nghiêm trọng.
- **Tranh luận / Lỗi thường gặp:** Coi dự phóng là lời cam kết thực thi của nhà nước. Dự phóng chỉ là các kịch bản tham khảo dưới các giả định nền tảng.

**6. Liên kết**
- Đọc trước: [Nowcasting](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/02_Nowcasting_Projections_and_Forecast_Quality.md#du-bao-ngay-nowcasting).
- Mở rộng: [Consensus Forecast](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/02_Nowcasting_Projections_and_Forecast_Quality.md#du-bao-dong-thuan-consensus-forecast).

---

### Dự báo đồng thuận (Consensus Forecast)

**1. Là gì?**
- Dự báo đồng thuận (Consensus Forecast) là giá trị trung bình cộng hoặc trung vị (median) được tổng hợp từ các kết quả dự báo độc lập của hàng chục chuyên gia kinh tế, ngân hàng đầu tư, viện nghiên cứu và tổ chức tài chính hàng đầu trên thị trường.
- Dựa trên nguyên lý triết học và toán học về "Trí tuệ của đám đông" (Wisdom of Crowds): việc kết hợp dự báo của nhiều bộ óc độc lập hầu như luôn cho kết quả chuẩn xác hơn bất kỳ một chuyên gia đơn lẻ xuất sắc nào.
- Nếu chỉ nhớ một điều: **Dự báo đồng thuận là điểm số trung bình của cả lớp chuyên gia kinh tế, đại diện cho kỳ vọng chung của toàn bộ thị trường.**

**2. Hoạt động thế nào?**
- **Quy trình thu thập định kỳ:**
  - Các hãng truyền thông và phân tích tài chính lớn (Bloomberg, Reuters, Consensus Economics, FactSet) tiến hành khảo sát định kỳ hàng tuần/hàng tháng đối với các nhà kinh tế trưởng của các định chế tài chính (Goldman Sachs, JPMorgan, Morgan Stanley, HSBC...).
  - Tập hợp các con số dự báo và công bố giá trị trung vị (Consensus Median).
- **Điểm chuẩn của thị trường:** Con số đồng thuận này chính là "mức kỳ vọng của thị trường" (Priced-in expectations). Mọi biến động giá trên sàn chứng khoán hay ngoại hối sau khi số liệu thực tế công bố đều phụ thuộc vào việc thực tế cao hơn hay thấp hơn con số Consensus này.

**3. Công thức & mô hình**
- Công thức tính trung vị hoặc trung bình đồng thuận:
  $$\hat{Y}_{Consensus} = \operatorname{Median}\{\hat{Y}_1, \hat{Y}_2, \dots, \hat{Y}_N\}$$
  Sử dụng trung vị giúp loại bỏ ảnh hưởng của các dự báo cực đoan (Outliers).

**4. Ví dụ**
- *Ví dụ số:* Khảo sát 50 chuyên gia về tăng trưởng GDP quý: 10 người đoán $5,8\%$, 20 người đoán $6,0\%$, 15 người đoán $6,2\%$, 5 người đoán $6,5\%$.
  - Mức dự báo đồng thuận trung vị của thị trường là: $6,0\%$.
  - Nếu kết quả thực tế công bố đạt $6,4\%$, thị trường sẽ xem đây là một cú bứt phá tích cực vượt đồng thuận.
- *Ví dụ thực tế:* Tại Việt Nam, trước mỗi kỳ họp công bố số liệu kinh tế vĩ mô của Tổng cục Thống kê, các hãng tin quốc tế như Bloomberg và Reuters luôn công bố kết quả khảo sát đồng thuận về GDP, CPI và xuất khẩu của Việt Nam từ các ngân hàng lớn (Standard Chartered, UOB, VinaCapital, SSI).
- *Counterfactual:* Nếu một chuyên gia đơn lẻ may mắn đoán trúng một sự kiện bất thường năm nay, họ thường có xu hướng dự báo sai lệch lớn vào các năm sau do tâm lý chủ quan; việc dựa vào dự báo đồng thuận giúp nhà đầu tư tránh được rủi ro "chuyên gia bốc đồng" này.

**5. Ứng dụng & tranh luận**
- **Ứng dụng:** Chuẩn mực tham chiếu để định giá cổ phiếu, tiền tệ; căn cứ tính toán Chỉ số Bất ngờ Kinh tế (CESI).
- **Trade-off:** Dễ rơi vào hội chứng "Tâm lý bầy đàn" (Herding Behavior): các nhà kinh tế sợ bị mất mặt nếu dự báo khác người, nên có xu hướng co cụm dự báo quanh con số của nhau.
- **Tranh luận / Lỗi thường gặp:** Lầm tưởng dự báo đồng thuận là không bao giờ sai. Khi xảy ra các bước ngoặt chu kỳ đột ngột hoặc khủng hoảng thiên nga đen, toàn bộ đám đông đồng thuận thường cùng nhau đoán sai tập thể.

**6. Liên kết**
- Đọc trước: [Economic Surprise Index](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/12_Economic_Indicators/01_Cyclical_and_Sentiment_Indicators.md#chi-so-bat-ngo-kinh-te-economic-surprise-index).
- Mở rộng: [Forecast Error](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/02_Nowcasting_Projections_and_Forecast_Quality.md#sai-so-du-bao-forecast-error).

---

### Sai số dự báo (Forecast Error)

**1. Là gì?**
- Sai số dự báo là khoảng cách chênh lệch số học giữa giá trị thực tế của biến số kinh tế khi được công bố so với giá trị mà mô hình hoặc chuyên gia đã dự báo từ trước đó.
- Là thước đo chuẩn mực cốt lõi để đánh giá độ chính xác, độ tin cậy và chất lượng khoa học của một mô hình kinh tế lượng hoặc năng lực của nhà dự báo.
- Nếu chỉ nhớ một điều: **Sai số dự báo đo xem người dự báo đã đoán lệch bao nhiêu điểm phần trăm so với thực tế diễn ra.**

**2. Hoạt động thế nào?**
- **Các nguồn gốc sinh ra sai số:**
  1. *Sai số mô hình:* Mô hình bỏ sót các biến số quan trọng hoặc giả định sai dạng hàm tuyến tính.
  2. *Cú sốc ngẫu nhiên không thể dự báo:* Thiên tai, xung đột quân sự, phát minh công nghệ đột phá.
  3. *Sai số dữ liệu quá khứ:* Dữ liệu đầu vào bị sửa đổi hồi tố sau này.
- **Quy tắc kiểm định tính duy lý:** Một dự báo được coi là tối ưu và duy lý nếu chuỗi sai số dự báo qua thời gian là một quá trình **nhiễu trắng (White Noise)**: có kỳ vọng bằng 0 và không có tự tương quan (nghĩa là không lặp lại cùng một sai lầm trong quá khứ).

**3. Công thức & mô hình**
- Sai số cơ bản tại kỳ $t$:
  $$e_t = Y_t - \hat{Y}_t$$
- Các chỉ số đo lường chất lượng dự báo tổng hợp:
  1. Sai số tuyệt đối trung bình (MAE - Mean Absolute Error):
     $$MAE = \frac{1}{n} \sum_{t=1}^n |Y_t - \hat{Y}_t|$$
  2. Căn bậc hai của sai số bình phương trung bình (RMSE - Root Mean Squared Error - phạt nặng các sai số lớn):
     $$RMSE = \sqrt{\frac{1}{n} \sum_{t=1}^n (Y_t - \hat{Y}_t)^2}$$
  3. Sai số phần trăm tuyệt đối trung bình (MAPE):
     $$MAPE = \frac{1}{n} \sum_{t=1}^n \left| \frac{Y_t - \hat{Y}_t}{Y_t} \right| \times 100\%$$

**4. Ví dụ**
- *Ví dụ số:* Dự báo lạm phát 3 năm qua và thực tế:
  - Năm 1: Dự báo $3\%$, thực tế $3,5\% \implies e_1 = +0,5\%$.
  - Năm 2: Dự báo $4\%$, thực tế $3,8\% \implies e_2 = -0,2\%$.
  - Năm 3: Dự báo $3,5\%$, thực tế $4,1\% \implies e_3 = +0,6\%$.
  - Sai số tuyệt đối trung bình:
    $$MAE = \frac{0,5 + 0,2 + 0,6}{3} = \frac{1,3}{3} \approx 0,43\%$$
- *Ví dụ thực tế:* Cục Dự trữ Liên bang Mỹ (Fed) định kỳ công bố tài liệu đánh giá sai số lịch sử của các dự báo vĩ mô (Historical Forecast Errors) để xác định độ rộng của biểu đồ cánh quạt độ tin cậy $70\%$ cho các dự phóng trong tương lai.
- *Counterfactual:* Nếu chuỗi sai số dự báo luôn luôn mang dấu âm ($e_t < 0$, nghĩa là thực tế luôn thấp hơn dự báo), mô hình đang mắc phải lỗi "Định kiến lạc quan thái quá" (Forecast Bias) và cần phải được hiệu chỉnh lại ngay lập tức.

**5. Ứng dụng & tranh luận**
- **Ứng dụng:** Lựa chọn và tinh chỉnh mô hình kinh tế lượng tối ưu; kiểm định tính vững (Backtesting) của các thuật toán giao dịch tài chính.
- **Trade-off:** Cố gắng giảm sai số trong mẫu khảo sát (In-sample error) bằng cách thêm vào quá nhiều biến số phức tạp thường dẫn đến hiện tượng quá khớp (Overfitting), khiến sai số khi dự báo thực tế ngoài mẫu (Out-of-sample error) tăng vọt.
- **Tranh luận / Lỗi thường gặp:** Đánh giá mô hình chỉ dựa trên sai số bình quân (Mean Error). Nếu năm nay đoán thừa 5% và năm sau đoán thiếu 5%, sai số bình quân bằng đúng 0% nhưng thực chất mô hình hoàn toàn vô dụng.

**6. Liên kết**
- Đọc tiếp: [Forecast Bias](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/02_Nowcasting_Projections_and_Forecast_Quality.md#dinh-kien-du-bao-forecast-bias).
- Mở rộng: [Consensus Forecast](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/02_Nowcasting_Projections_and_Forecast_Quality.md#du-bao-dong-thuan-consensus-forecast).

---

### Định kiến dự báo (Forecast Bias)

**1. Là gì?**
- Định kiến dự báo (Forecast Bias) là xu hướng sai lệch có tính hệ thống, lặp đi lặp lại theo một hướng nhất định (thường xuyên đoán quá cao hoặc thường xuyên đoán quá thấp) của các kết quả dự báo so với thực tế diễn ra qua nhiều chu kỳ.
- Một dự báo không bị định kiến (Unbiased forecast) phải có giá trị trung bình của các sai số dự báo bằng 0 trong dài hạn ($E[e_t] = 0$).
- Nếu chỉ nhớ một điều: **Định kiến dự báo là căn bệnh thiên lệch cố hữu: lúc nào cũng nhìn đời bằng kính màu hồng lạc quan hoặc lúc nào cũng nhìn đời bằng kính màu đen bi quan.**

**2. Hoạt động thế nào?**
- **Hai hình thái định kiến phổ biến nhất:**
  1. *Định kiến lạc quan (Optimism Bias - phổ biến nhất):* Các tổ chức chính phủ và tổ chức quốc tế thường xuyên dự báo tăng trưởng GDP cao hơn thực tế và dự báo nợ công thấp hơn thực tế nhằm trấn an công chúng và cử tri.
  2. *Định kiến thận trọng (Conservatism / Anchoring Bias):* Các nhà dự báo neo quá chặt vào số liệu quá khứ, ngần ngại đưa ra các dự báo đột phá vì sợ bị coi là lập dị nếu sai lầm.
- **Động cơ kinh tế - chính trị:**
  - Áp lực từ cấp trên: Các chuyên gia kinh tế thuộc bộ phận phân tích của các ngân hàng đầu tư chịu áp lực từ bộ phận kinh doanh không được đưa ra dự báo quá bi quan về thị trường để tránh làm phật lòng khách hàng mua cổ phiếu.

**3. Công thức & mô hình**
- Thước đo định kiến trung bình (Mean Forecast Error - MFE):
  $$Bias = \frac{1}{n} \sum_{t=1}^n (Y_t - \hat{Y}_t)$$
- Kiểm định tính không chệch Mincer-Zarnowitz:
  $$Y_t = \alpha + \beta \hat{Y}_t + \epsilon_t$$
  Dự báo không bị định kiến khi và chỉ khi đồng thời thỏa mãn: $\alpha = 0$ và $\beta = 1$.

**4. Ví dụ**
- *Ví dụ số:* Trong 5 năm liên tiếp, một cơ quan dự báo GDP lần lượt là: $7\%, 7\%, 6,8\%, 6,5\%, 6,5\%$. Thực tế GDP chỉ đạt: $6,2\%, 6,0\%, 5,8\%, 5,5\%, 5,5\%$.
  - Sai số từng năm: $-0,8\%, -1,0\%, -1,0\%, -1,0\%, -1,0\%$.
  - Định kiến trung bình:
    $$Bias = \frac{-0,8 - 1,0 - 1,0 - 1,0 - 1,0}{5} = -0,96\%$$
  - Cơ quan này bị mắc bệnh định kiến lạc quan có hệ thống: năm nào cũng đoán phóng đại tăng trưởng kinh tế cao hơn thực tế gần $1$ điểm phần trăm.
- *Ví dụ thực tế:* Nghiên cứu độc lập của Văn phòng Kiểm toán Độc lập IMF (IEO) từng chỉ ra rằng các dự báo tăng trưởng của IMF trong các chương trình cho vay cấu trúc thường có định kiến lạc quan đáng kể, nhằm làm cho bài toán bền vững nợ của các nước đi vay trông có vẻ khả thi trên giấy tờ.
- *Counterfactual:* Nếu các cơ quan dự báo áp dụng cơ chế đánh giá độc lập mù (Blind review) và thưởng phạt dựa trên sai số thực tế thay vì làm hài lòng cấp trên, mức độ định kiến dự báo sẽ giảm xuống rõ rệt.

**5. Ứng dụng & tranh luận**
- **Ứng dụng:** Giúp các nhà đầu tư thông minh tự động "trừ hao" định kiến lạc quan của các báo cáo phân tích trước khi ra quyết định đầu tư vốn; cải thiện tính minh bạch thống kê.
- **Trade-off:** Khử bỏ hoàn toàn định kiến đòi hỏi sự độc lập tuyệt đối về mặt chính trị của các cơ quan thống kê và nghiên cứu kinh tế.
- **Tranh luận / Lỗi thường gặp:** Nhầm lẫn giữa "Độ chính xác kém" và "Định kiến". Một người có thể đoán chệch rất xa nhưng nếu các lần đoán sai phân bổ đều đặn hai phía thì họ không bị định kiến; còn người đoán chệch ít nhưng 10 lần đều đoán lệch về một phía thì người đó bị định kiến nặng nề.

**6. Liên kết**
- Đọc trước: [Forecast Error](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/02_Nowcasting_Projections_and_Forecast_Quality.md#sai-so-du-bao-forecast-error).
- Mở rộng: [Consensus Forecast](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/02_Nowcasting_Projections_and_Forecast_Quality.md#du-bao-dong-thuan-consensus-forecast).

---

## Câu hỏi tự kiểm tra

1. Kỹ thuật Nowcasting giải quyết vấn đề "Độ trễ công bố dữ liệu" (Publication Lag) của GDP như thế nào?
2. Phân biệt sự khác nhau căn bản giữa một bản Dự báo kinh tế (Forecast) và một bản Dự phóng kinh tế (Projection)?
3. Nguyên lý "Trí tuệ của đám đông" (Wisdom of Crowds) trong Dự báo đồng thuận (Consensus Forecast) hoạt động theo cơ chế nào?
4. Trình bày công thức tính chỉ số Sai số tuyệt đối trung bình (MAE) và Căn bậc hai sai số bình phương trung bình (RMSE) trong đánh giá chất lượng dự báo?
5. Phương trình kiểm định Mincer-Zarnowitz xác định một dự báo không có định kiến (Unbiased) dựa trên hai điều kiện toán học nào?

---

## Ghi chú nguồn
- Banbura, M., Giannone, D., Modugno, M., & Reichlin, L. (2013). *Now-casting and the Real-Time Data Flow*. Handbook of Economic Forecasting, Vol. 2, 195-237.
- Mincer, J. A., & Zarnowitz, V. (1969). *The Evaluation of Economic Forecasts*. Economic Forecasts and Expectations, NBER.
- Federal Reserve Bank of Atlanta. *GDPNow Model Methodology*.
