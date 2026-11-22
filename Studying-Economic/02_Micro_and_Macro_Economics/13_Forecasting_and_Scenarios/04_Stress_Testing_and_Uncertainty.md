# Kiểm tra Sức chịu đựng và Bất định Kinh tế (Stress Testing & Uncertainty)

Chuyên đề này phân tích các công cụ quản trị rủi ro vĩ mô đỉnh cao: phương pháp Kiểm tra sức chịu đựng (Stress Testing), Phân tích độ nhạy (Sensitivity Analysis), khái niệm Bất định kinh tế (Economic Uncertainty) theo quan điểm Frank Knight, và Hệ thống các Chỉ báo Cảnh báo Sớm (Early Warning Indicators).

---

### Kiểm tra sức chịu đựng (Stress Testing)

**1. Là gì?**
- Kiểm tra sức chịu đựng (Stress Testing / Bài kiểm tra căng thẳng) là kỹ thuật mô phỏng định lượng được thiết kế nhằm đánh giá khả năng chống đỡ, sức bền tài chính và tính an toàn của một ngân hàng, định chế tài chính hoặc toàn bộ hệ thống kinh tế quốc gia khi đối mặt với các **kịch bản khủng hoảng giả định cực kỳ khắc nghiệt, tồi tệ nhưng vẫn có thể xảy ra**.
- Trả lời cho câu hỏi sinh tử: "Nếu xảy ra thảm họa kinh tế tồi tệ nhất, liệu ngân hàng có bị phá sản và nhà nước có sụp đổ tài chính không?"
- Nếu chỉ nhớ một điều: **Kiểm tra sức chịu đựng là việc đem hệ thống tài chính vào phòng thí nghiệm bão tố để kiểm tra xem khi bị đấm mạnh nhất thì nó có đứng vững được không.**

**2. Hoạt động thế nào?**
- **Khung kiểm tra sức chịu đựng ngân hàng của Cục Dự trữ Liên bang Mỹ (CCAR / DFAST):**
  - Hàng năm, Fed ban hành một kịch bản giả định "Cực kỳ bất lợi" (Severely Adverse Scenario): ví dụ GDP sụt giảm $-8\%$, tỷ lệ thất nghiệp vọt lên $10\%$, thị trường chứng khoán bốc hơi $50\%$, và giá bất động sản thương mại giảm $40\%$.
  - Toàn bộ các ngân hàng thương mại lớn bắt buộc phải nạp kịch bản thảm họa này vào bảng cân đối tài sản của mình để tính toán xem Tỷ lệ an toàn vốn (CET1) có còn duy trì được trên ngưỡng an toàn tối thiểu theo chuẩn Basel III hay không.
  - Ngân hàng nào trượt bài kiểm tra sẽ bị cấm chia cổ tức và cấm mua lại cổ phiếu.
- **Hai hình thức kiểm tra:**
  1. *Kiểm tra vi mô (Microprudential Stress Test):* Đánh giá sức khỏe của từng ngân hàng đơn lẻ.
  2. *Kiểm tra an toàn vĩ mô (Macroprudential Stress Test):* Đánh giá rủi ro lan truyền và đổ vỡ dây chuyền của toàn bộ hệ thống tài chính quốc gia.

**3. Công thức & mô hình**
- Tiêu chí an toàn vốn tối thiểu sau cú sốc:
  $$CET1_{sau\_stress} = \frac{\text{Vốn cấp 1 sau tổn thất}}{\text{Tổng tài sản có rủi ro sau điều chỉnh (RWA)}} \ge 4,5\% \text{ (hoặc 8\%) }$$

**4. Ví dụ**
- *Ví dụ số:* Một ngân hàng có tỷ lệ vốn CET1 hiện tại là $11,5\%$. Trong kịch bản kiểm tra căng thẳng cực đoan, nợ xấu tăng vọt làm ngân hàng chịu tổn thất dự phòng 20.000 tỷ VNĐ. Tỷ lệ vốn CET1 bị bào mòn rơi xuống mức $6,2\%$. Do $6,2\% > 4,5\%$ (ngưỡng sàn pháp lý), ngân hàng được xếp loại vượt qua bài kiểm tra sức chịu đựng thành công.
- *Ví dụ thực tế:* Đạo luật Dodd-Frank năm 2010 tại Mỹ bắt buộc định kỳ hàng năm các ngân hàng thương mại lớn (JPMorgan, Bank of America, Citigroup) phải vượt qua kỳ kiểm tra sức chịu đựng CCAR của Fed. Tại Việt Nam, Ngân hàng Nhà nước (SBV) và Ngân hàng Thế giới đang từng bước triển khai các bài kiểm tra sức chịu đựng toàn hệ thống ngân hàng theo chuẩn mực Basel II và Basel III.
- *Counterfactual:* Nếu các ngân hàng châu Âu trước năm 2008 tiến hành kiểm tra sức chịu đựng thực chất đối với kịch bản giá nhà đất Mỹ sụp đổ, họ đã không mù quáng đầu tư hàng trăm tỷ USD vào các chứng khoán nợ dưới chuẩn độc hại (CDO).

**5. Ứng dụng & tranh luận**
- **Ứng dụng:** Trụ cột quản trị rủi ro của các ngân hàng trung ương toàn cầu; điều kiện bắt buộc để phê duyệt kế hoạch chia cổ tức ngân hàng.
- **Trade-off:** Chi phí tuân thủ và xây dựng mô hình kiểm tra sức chịu đựng rất tốn kém; kịch bản mô phỏng dù khắc nghiệt đến đâu vẫn có thể bỏ sót những rủi ro mới trong thực tế (như rủi ro rút tiền hàng loạt qua mạng xã hội của SVB năm 2023).
- **Tranh luận / Lỗi thường gặp:** Lầm tưởng kiểm tra sức chịu đựng là một bản dự báo kinh tế. Kịch bản Stress Test hoàn toàn không phải là một dự báo về những gì sẽ xảy ra; nó là một bài tập kiểm tra giả định tình huống tồi tệ nhất.

**6. Liên kết**
- Đọc trước: [Bear Case Scenario](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/03_Scenario_Analysis.md#kich-ban-bat-loi-bear-case-scenario).
- Mở rộng: [Sensitivity Analysis](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/04_Stress_Testing_and_Uncertainty.md#phan-tich-do-nhay-sensitivity-analysis), [Economic Resilience](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/10_Growth_and_Business_Cycles/05_Growth_Theories_and_Resilience.md#kha-nang-chong-chiu-kinh-te-economic-resilience).

---

### Phân tích độ nhạy (Sensitivity Analysis)

**1. Là gì?**
- Phân tích độ nhạy (Sensitivity Analysis / Phân tích "Nếu - Thì" - What-If Analysis) là kỹ thuật định lượng đo lường **mức độ biến động của kết quả đầu ra** (như Lợi nhuận ròng, Giá trị hiện tại thuần NPV, Tỷ lệ nợ xấu) khi **chỉ có duy nhất một biến số đầu vào** (như Lãi suất, Tỷ giá, Giá nguyên vật liệu) thay đổi một lượng nhất định, trong điều kiện giữ nguyên tất cả các biến số khác không đổi (Ceteris paribus).
- Trả lời cho câu hỏi: "Mô hình hoặc dự án của chúng ta nhạy cảm nhất với biến số nào?"
- Nếu chỉ nhớ một điều: **Phân tích độ nhạy là việc rung lắc từng chiếc ốc vít của mô hình để xem chiếc ốc nào lỏng là chiếc máy gặp nguy hiểm nhất.**

**2. Hoạt động thế nào?**
- **Phương pháp thực hiện:**
  - Thay đổi biến số đầu vào mục tiêu theo các mức tăng/giảm phần trăm (ví dụ: lãi suất tăng $+100$ bps, $+200$ bps, $+300$ bps; hoặc giá bán giảm $-5\%$, $-10\%$, $-15\%$).
  - Ghi nhận mức độ thay đổi tương ứng của biến số đầu ra.
- **Biểu đồ lốc xoáy (Tornado Diagram):**
  - Sắp xếp các biến số đầu vào theo thứ tự mức độ tác động từ lớn nhất đến nhỏ nhất lên kết quả đầu ra.
  - Hình dạng biểu đồ trông giống một cơn lốc xoáy: thanh trên cùng rộng nhất là biến số có độ nhạy cao nhất, thanh dưới cùng hẹp nhất là biến số ít ảnh hưởng nhất.

**3. Công thức & mô hình**
- Hệ số co giãn độ nhạy:
  $$S_{X}^{Y} = \frac{\partial Y / Y}{\partial X / X} = \frac{\% \Delta Y}{\% \Delta X}$$
  Hệ số $|S| > 1$ cho thấy kết quả $Y$ cực kỳ nhạy cảm với biến số $X$.

**4. Ví dụ**
- *Ví dụ số:* Một dự án đầu tư có NPV dự kiến là 50 tỷ VNĐ. Phân tích độ nhạy cho thấy:
  - Nếu Lãi suất chiết khấu tăng thêm $+1\% \implies$ NPV giảm $-8$ tỷ (giảm $16\%$).
  - Nếu Giá bán sản phẩm giảm $-5\% \implies$ NPV giảm $-35$ tỷ (giảm tới $70\%$).
  - Biểu đồ lốc xoáy chỉ ra rằng dự án nhạy cảm nhất với Giá bán sản phẩm, do đó nhà đầu tư phải tập trung phòng ngừa rủi ro trượt giá bán hàng đầu.
- *Ví dụ thực tế:* Các doanh nghiệp xuất khẩu dệt may, thủy sản Việt Nam định kỳ lập bảng phân tích độ nhạy tỷ giá USD/VND: nếu tỷ giá biến động $1\%$, lợi nhuận ròng sau thuế của công ty sẽ thay đổi bao nhiêu tỷ đồng để đưa ra quyết định có nên mua hợp đồng phái sinh kỳ hạn (Forward) để phòng hộ tỷ giá hay không.
- *Counterfactual:* Nếu người phân tích thay đổi tất cả các biến số cùng một lúc (lãi suất đổi, giá bán đổi, sản lượng đổi), phân tích đó đã chuyển thành Phân tích kịch bản (Scenario Analysis), không còn là Phân tích độ nhạy đơn biến nữa.

**5. Ứng dụng & tranh luận**
- **Ứng dụng:** Thẩm định dự án đầu tư vốn (Feasibility Study); quản trị rủi ro tài chính doanh nghiệp.
- **Trade-off:** Giả định "các yếu tố khác không đổi" là phi thực tế trong thế giới thực, vì khi tỷ giá biến động thì lãi suất và lạm phát thường cùng chuyển động dây chuyền.
- **Tranh luận / Lỗi thường gặp:** Bỏ qua sự bất đối xứng. Độ nhạy của lợi nhuận khi giá tăng $10\%$ chưa chắc đã bằng độ nhạy khi giá giảm $10\%$ do các rào cản chi phí cố định phi tuyến tính.

**6. Liên kết**
- Đọc trước: [Stress Testing](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/04_Stress_Testing_and_Uncertainty.md#kiem-tra-suc-chiu-dung-stress-testing).
- Mở rộng: [Scenario Analysis](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/03_Scenario_Analysis.md#phan-tich-kich-ban-scenario-analysis).

---

### Bất định kinh tế (Economic Uncertainty)

**1. Là gì?**
- Bất định kinh tế là trạng thái trong đó các chủ thể kinh tế (doanh nghiệp, người tiêu dùng, chính phủ) **không thể biết trước hoặc không thể gán một phân phối xác suất toán học đáng tin cậy** cho các sự kiện và kết quả có thể xảy ra trong tương lai.
- Nhà kinh tế học lỗi lạc Frank Knight trong tác phẩm kinh điển "Rủi ro, Bất định và Lợi nhuận" (1921) đã phân biệt rạch ròi giữa hai khái niệm:
  - **Rủi ro (Risk / Knightian Risk):** Tương lai chưa biết nhưng *có thể đo lường và tính toán được phân phối xác suất* (như tung đồng xu xác suất 50/50, chơi bài roulette). Có thể mua bảo hiểm để phòng ngừa.
  - **Bất định (Uncertainty / Knightian Uncertainty):** Tương lai hoàn toàn *không thể gán được bất kỳ phân phối xác suất nào* (như đại dịch toàn cầu mới, xung đột địa chính trị đột ngột, công nghệ AI thay đổi cấu trúc xã hội). Hoàn toàn không thể mua bảo hiểm.
- Nếu chỉ nhớ một điều: **Rủi ro là khi bạn biết tỷ lệ cược thắng thua; còn bất định là khi bạn thậm chí không biết luật chơi và những gì sắp xảy ra.**

**2. Hoạt động thế nào?**
- **Hiệu ứng "Chờ đợi và Quan sát" (Wait-and-See Effect của Nicholas Bloom):**
  - Khi mức độ bất định kinh tế tăng vọt, các doanh nghiệp và người dân rơi vào trạng thái "tê liệt quyết định".
  - Do các khoản đầu tư nhà máy và quyết định tuyển dụng nhân sự có tính bất khả đảo (Irreversible investment - một khi đã rót tiền thì không lấy lại được), giá trị của việc "chờ đợi thêm thông tin" trở nên cực kỳ đắt giá.
  - Hậu quả: Toàn bộ nền kinh tế đồng loạt đóng băng đầu tư và tuyển dụng $\implies$ gây ra sự sụt giảm tức thì trong hoạt động sản xuất kinh doanh tương đương một cuộc suy thoái sâu.
- **Thước đo bất định:** Chỉ số Bất định Chính sách Kinh tế (Economic Policy Uncertainty Index - EPU của Baker, Bloom, & Davis) đo lường tần suất xuất hiện của các từ khóa bất định trên các bài báo kinh tế hàng đầu.

**3. Công thức & mô hình**
- Chỉ số EPU:
  $$EPU_t = \text{Chuẩn hóa tần suất xuất hiện các bài báo chứa bộ ba từ khóa: [Kinh tế - Không chắc chắn - Chính sách]}$$
- Chỉ số biến động thị trường tài chính VIX (CBOE Volatility Index - "Chỉ số đo nỗi sợ hãi của Phố Wall"): Tính toán từ giá quyền chọn chỉ số S&P 500.

**4. Ví dụ**
- *Ví dụ số:* Khi chỉ số đo nỗi sợ hãi VIX dao động dưới 15 điểm, thị trường tài chính ở trạng thái yên bình và tự tin; khi VIX nhảy vọt lên trên 40–80 điểm (như khủng hoảng 2008 hoặc tháng 3/2020), trạng thái bất định kinh tế bao trùm toàn cầu.
- *Ví dụ thực tế:* Sự kiện cử tri Anh bỏ phiếu rời khỏi Liên minh Châu Âu (Brexit) năm 2016 đã tạo ra một thời kỳ bất định chính sách kinh tế kéo dài nhiều năm tại Anh: các tập đoàn đa quốc gia đình chỉ toàn bộ các dự án đầu tư mở rộng nhà máy tại Anh để chờ đợi khung pháp lý thương mại mới được đàm phán xong.
- *Counterfactual:* Nếu chính phủ duy trì một khung khổ pháp lý minh bạch, nhất quán và có tính dự báo cao, mức độ bất định kinh tế sẽ được triệt tiêu, kích hoạt dòng vốn đầu tư dài hạn của tư nhân cất cánh.

**5. Ứng dụng & tranh luận**
- **Ứng dụng:** Giải thích nguyên nhân của các đợt sụt giảm đầu tư đột ngột mà lãi suất thấp không giải quyết được; định giá quyền chọn thực (Real Options).
- **Trade-off:** Cố gắng xóa bỏ hoàn toàn bất định là ảo tưởng; quản trị bất định đòi hỏi xây dựng năng lực chống chịu linh hoạt (Resilience) và chiến lược danh mục đa dạng hóa.
- **Tranh luận / Lỗi thường gặp:** Nhầm lẫn giữa Rủi ro và Bất định. Áp dụng các mô hình xác suất toán học thông thường để xử lý những sự kiện bất định Knightian là sai lầm nguy hiểm dẫn tới sự sụp đổ của nhiều quỹ đầu cơ tài chính.

**6. Liên kết**
- Đọc trước: [Economic Resilience](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/10_Growth_and_Business_Cycles/05_Growth_Theories_and_Resilience.md#kha-nang-chong-chiu-kinh-te-economic-resilience).
- Mở rộng: [Early Warning Indicators](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/04_Stress_Testing_and_Uncertainty.md#chi-bao-canh-bao-som-early-warning-indicators).

---

### Chỉ báo cảnh báo sớm (Early Warning Indicators)

**1. Là gì?**
- Chỉ báo cảnh báo sớm (Early Warning Indicators / Early Warning System - EWS) là hệ thống các biến số kinh tế vĩ mô và tài chính được thiết lập với các **ngưỡng an toàn định lượng cụ thể**, phát đi các tín hiệu báo động đỏ trước từ 12 đến 24 tháng về nguy cơ bùng phát của một cuộc khủng hoảng tài chính, khủng hoảng ngân hàng, khủng hoảng nợ công hoặc khủng hoảng cán cân thanh toán/tiền tệ.
- Đóng vai trò như hệ thống còi báo động khẩn cấp giúp các cơ quan quản lý nhà nước kịp thời áp dụng các biện pháp can thiệp phòng ngừa trước khi thảm họa thực sự xảy ra.
- Nếu chỉ nhớ một điều: **Chỉ báo cảnh báo sớm là chiếc còi báo động cháy hụ còi từ xa trước khi ngọn lửa khủng hoảng bùng lên thiêu rụi nền kinh tế.**

**2. Hoạt động thế nào?**
- **Phương pháp tiếp cận tín hiệu của Kaminsky, Lizondo, & Reinhart (KLR Signal Approach):**
  - Giám sát một danh mục các biến số nhạy cảm.
  - Khi một biến số vượt qua ngưỡng tới hạn (Critical Threshold) trong phân phối lịch sử của nó $\implies$ một "tín hiệu cảnh báo" (Signal) được kích hoạt.
  - Nếu nhiều biến số cùng đồng loạt phát tín hiệu cảnh báo trong một khoảng thời gian $\implies$ xác suất bùng phát khủng hoảng nhảy vọt lên mức báo động đỏ.
- **Các chỉ báo cảnh báo sớm hiệu quả nhất thế giới:**
  1. *Chênh lệch Tín dụng trên GDP (Credit-to-GDP Gap của BIS):* Khi tỷ lệ tín dụng/GDP cao hơn xu thế dài hạn trên $10$ điểm phần trăm.
  2. *Tốc độ tăng trưởng giá bất động sản thực tế:* Cơn sốt đất phình to bất thường.
  3. *Tỷ giá hối đoái thực tế bị định giá quá cao (Real Exchange Rate Overvaluation).*
  4. *Tỷ lệ Dự trữ ngoại hối trên Nợ nước ngoài ngắn hạn.*
  5. *Tỷ lệ thâm hụt cán cân vãng lai trên GDP vượt quá $-4\%$.*

**3. Công thức & mô hình**
- Ma trận phân loại tín hiệu cảnh báo:
  - *Tín hiệu đúng (Good Signal):* Báo động và khủng hoảng xảy ra thật trong 24 tháng.
  - *Báo động giả (False Alarm / Lỗi loại I):* Báo động nhưng không có khủng hoảng.
  - *Bỏ sót khủng hoảng (Missed Crisis / Lỗi loại II):* Không báo động nhưng khủng hoảng vẫn nổ ra.
- Tỷ số Tín hiệu trên Nhiễu (Noise-to-Signal Ratio - NSR):
  $$NSR = \frac{\text{Tỷ lệ Báo động Giả}}{\text{Tỷ lệ Tín hiệu Đúng}}$$
  Mục tiêu tối ưu là chọn ngưỡng sao cho $NSR$ đạt mức nhỏ nhất.

**4. Ví dụ**
- *Ví dụ số:* Ngân hàng Thanh toán Quốc tế (BIS) tính toán Credit-to-GDP Gap của một quốc gia là $+14,5\%$ (vượt xa ngưỡng cảnh báo $+10\%$). Tín hiệu này cảnh báo rằng hệ thống ngân hàng của nước này đang tăng trưởng tín dụng quá nóng và có nguy cơ cao bùng phát khủng hoảng nợ xấu trong vòng 2 năm tới.
- *Ví dụ thực tế:* Tại các nước châu Á trước Khủng hoảng tài chính 1997 (Thái Lan, Indonesia, Hàn Quốc): Hệ thống EWS hồi cứu cho thấy hàng loạt còi báo động đã réo rắt từ năm 1995: nợ nước ngoài ngắn hạn gấp nhiều lần dự trữ ngoại hối, thâm hụt vãng lai vượt $-8\%$ GDP, và tỷ giá đồng Baht bị neo quá cứng ở mức đắt đỏ phi lý, nhưng chính quyền đã phớt lờ cho đến khi khủng hoảng nổ ra.
- *Counterfactual:* Nếu hệ thống cảnh báo sớm phát tín hiệu và Ngân hàng Trung ương kịp thời kích hoạt các công cụ chính sách an toàn vĩ mô (siết hạn mức tín dụng bất động sản, tăng tỷ lệ dự trữ an toàn vốn), ngòi nổ khủng hoảng sẽ được tháo ngòi êm ái mà không gây đổ vỡ hệ thống.

**5. Ứng dụng & tranh luận**
- **Ứng dụng:** Trọng tâm của khung giám sát ổn định tài chính của IMF, BIS và các Ủy ban Giám sát Tài chính Quốc gia.
- **Trade-off:** Hạ ngưỡng cảnh báo quá nhạy sẽ dẫn đến quá nhiều báo động giả (False Alarms) gây hoang mang dư luận; nâng ngưỡng quá cao sẽ bỏ sót các cuộc khủng hoảng chết người.
- **Tranh luận / Lỗi thường gặp:** Hiệu ứng Cassandra (Lời nguyền báo trước nhưng không ai tin): Hệ thống cảnh báo sớm dù chính xác đến đâu cũng trở nên vô dụng nếu các nhà lãnh đạo chính trị phớt lờ cảnh báo vì không muốn làm gián đoạn bữa tiệc tăng trưởng kinh tế ngắn hạn.

**6. Liên kết**
- Đọc trước: [Stress Testing](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/04_Stress_Testing_and_Uncertainty.md#kiem-tra-suc-chiu-dung-stress-testing).
- Mở rộng: [Credit Growth](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/12_Economic_Indicators/06_Money_Supply_and_Credit.md#tang-truong-tin-dung-credit-growth), [Recession Forecasting](file:///Users/ductri0981/Documents/Studying/Studying-Economic/02_Micro_and_Macro_Economics/13_Forecasting_and_Scenarios/01_Forecasting_Basics.md#du-bao-suy-thoai-recession-forecasting).

---

## Câu hỏi tự kiểm tra

1. Phân biệt sự khác nhau căn bản giữa Kiểm tra sức chịu đựng (Stress Testing) và Phân tích kịch bản thông thường (Scenario Analysis)?
2. Biểu đồ lốc xoáy (Tornado Diagram) trong Phân tích độ nhạy (Sensitivity Analysis) có công dụng gì trong việc quản trị rủi ro dự án đầu tư?
3. Trình bày sự phân biệt kinh điển của nhà kinh tế Frank Knight giữa Rủi ro (Risk) và Bất định (Uncertainty)?
4. Hiệu ứng "Chờ đợi và Quan sát" (Wait-and-See Effect) giải thích thế nào về sự sụp đổ của tổng đầu tư tư nhân khi mức độ bất định kinh tế tăng cao?
5. Phương pháp tiếp cận tín hiệu KLR (Signal Approach) xây dựng hệ thống Chỉ báo cảnh báo sớm (Early Warning Indicators) dựa trên nguyên tắc nào?

---

## Ghi chú nguồn
- Knight, F. H. (1921). *Risk, Uncertainty and Profit*. Houghton Mifflin.
- Bloom, N. (2009). *The Impact of Uncertainty Shocks*. Econometrica, 77(3), 623-685.
- Kaminsky, G., Lizondo, S., & Reinhart, C. M. (1998). *Leading Indicators of Currency Crises*. IMF Staff Papers, 45(1), 1-48.
- Basel Committee on Banking Supervision (BCBS). *Stress testing principles*.
