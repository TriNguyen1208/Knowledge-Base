# Chuyên đề 8.3.2: Hoạch định Ngân sách Vốn và Kỷ luật Phân bổ Vốn Chiến lược

Chuyên đề này đi sâu vào chức năng quan trọng nhất của một Tổng Giám đốc (CEO) và Giám đốc Tài chính (CFO): Hoạch định Ngân sách Vốn (Capital Budgeting) – quy trình khoa học để đánh giá và lựa chọn các dự án đầu tư dài hạn; Ma trận Phân bổ Vốn (Capital Allocation) – việc quyết định rót từng đồng vốn thặng dư vào đâu trong số các phương án cạnh tranh; Kỷ luật Phân bổ Vốn (Capital Allocation Discipline) – phẩm chất phân biệt giữa các nhà điều hành vĩ đại và những kẻ phá hủy tài sản; cùng vai trò của Chi tiêu Vốn Chiến lược (CapEx).

> Câu hỏi xuyên suốt: Tại sao Warren Buffett lại khẳng định rằng năng lực phân bổ vốn mới là phẩm chất tối thượng của một CEO xuất sắc, và làm thế nào để tránh rơi vào cái bẫy "đốt tiền" vào các dự án mở rộng quy mô kém hiệu quả?

---

## 1. Hoạch định Ngân sách Vốn (Capital Budgeting)

**1. Là gì?**
Hoạch định Ngân sách Vốn (Thẩm định dự án đầu tư / Capital Budgeting) là quy trình toàn diện nhằm nhận diện, phân tích, đánh giá định lượng và ra quyết định phê duyệt các khoản đầu tư dài hạn có quy mô vốn lớn (như xây dựng nhà máy mới, mua sắm máy móc tự động hóa, phát triển dòng sản phẩm mới, hoặc thâu tóm M&A). Vì các khoản đầu tư này liên quan đến các dòng tiền chi ra khổng lồ không thể đảo ngược trong ngắn hạn, hoạch định ngân sách vốn quyết định sự sống còn và vị thế tương lai của doanh nghiệp. Nếu chỉ nhớ một điều: **Hoạch định ngân sách vốn là việc quyết định đem khối tiền mặt lớn của hôm nay đi cược vào dự án nào cho 10 năm tới.**

**2. Hoạt động thế nào?**
- Quy trình 4 bước chuẩn mực:
  1. Đề xuất dự án và ước tính các dòng tiền tăng thêm (Incremental Cash Flows): Bóc tách riêng dòng tiền thực tế phát sinh DO dự án mang lại, loại bỏ chi phí chìm (Sunk costs) và tính đến chi phí cơ hội cùng tác động ăn lấn thị phần (Cannibalization).
  2. Xác định Chi phí Vốn của dự án (Hurdle Rate / Project Cost of Capital): Tỷ suất sinh lời tối thiểu mà dự án bắt buộc phải đạt được để bù đắp rủi ro.
  3. Áp dụng các tiêu chí thẩm định định lượng:
     - Giá trị Hiện tại Ròng (Net Present Value - NPV): Tiêu chuẩn vàng tối cao về mặt lý thuyết.
     - Tỷ suất Hoàn vốn Nội bộ (Internal Rate of Return - IRR): Lãi suất làm cho NPV bằng 0.
     - Thời gian Hoàn vốn (Payback Period): Thời gian cần thiết để dòng tiền thu hồi đủ vốn gốc ban đầu.
     - Chỉ số Khả năng Sinh lời (Profitability Index - PI): Tỷ lệ giữa giá trị hiện tại dòng tiền vào trên vốn đầu tư.
  4. Phê duyệt, theo dõi tiến độ và đánh giá hậu kiểm (Post-audit).

**3. Công thức & mô hình**
Giá trị Hiện tại Ròng (Net Present Value - NPV):

$$
\text{NPV} = \sum_{t=1}^{n} \dfrac{\text{CF}_t}{(1 + r)^t} - \text{CF}_0
$$

Quy tắc quyết định: Phê duyệt dự án nếu $\text{NPV} > 0$; từ chối nếu $\text{NPV} < 0$.

Tỷ suất Hoàn vốn Nội bộ (IRR):
$$
\sum_{t=1}^{n} \dfrac{\text{CF}_t}{(1 + \text{IRR})^t} - \text{CF}_0 = 0
$$
Quy tắc: Phê duyệt nếu $\text{IRR} > r$ (Chi phí sử dụng vốn / Hurdle rate).

**4. Ví dụ**
- Một doanh nghiệp may mặc cân nhắc đầu tư $100$ tỷ VND ($\text{CF}_0$) vào dây chuyền cắt vải tự động bằng laser:
  - Dự án có vòng đời 4 năm, mỗi năm tạo ra dòng tiền thuần tăng thêm là $35$ tỷ VND.
  - Chi phí vốn của công ty là $10\%$/năm ($r = 0,10$).
  - Tính toán giá trị hiện tại của dòng tiền:
    $$\text{PV} = \dfrac{35}{1,1} + \dfrac{35}{1,1^2} + \dfrac{35}{1,1^3} + \dfrac{35}{1,1^4} \approx 31,82 + 28,93 + 26,30 + 23,91 = 110,96 \text{ tỷ VND}$$
  - $\text{NPV} = 110,96 - 100 = +10,96$ tỷ VND.
  - $\text{IRR} \approx 14,96\%$ (cao hơn chi phí vốn $10\%$).
  - Kết luận: Dự án làm tăng thêm gần $11$ tỷ VND giá trị thặng dư kinh tế cho cổ đông, công ty quyết định phê duyệt đầu tư (số liệu minh họa).
- Counterfactual: Nếu chi phí vốn của công ty tăng lên $16\%$ do thị trường thắt chặt tiền tệ, $\text{IRR} = 14,96\% < 16\%$ và $\text{NPV}$ sẽ chuyển sang số âm $-2,1$ tỷ VND $\rightarrow$ Công ty bắt buộc phải dừng dự án.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Lựa chọn giữa các dự án loại trừ lẫn nhau (Mutually exclusive projects), định giá mua sắm tài sản công nghiệp.
- Xung đột giữa NPV và IRR: Khi hai dự án có quy mô vốn khác nhau hoặc dòng tiền phân bổ ngược nhau, IRR có thể đưa ra kết luận xếp hạng sai lầm do giả định tái đầu tư phi thực tế (IRR giả định dòng tiền được tái đầu tư ở mức lãi suất IRR, trong khi NPV giả định tái đầu tư ở mức chi phí vốn thực tế). Trong mọi trường hợp xung đột, **NPV luôn luôn là tiêu chuẩn tối cao**.
- Lỗi thường gặp: Đưa chi phí chìm đã lỡ chi trong quá khứ (như tiền thuê đất nghiên cứu khả thi đã chi năm ngoái) vào bài toán thẩm định, hoặc bỏ quên chi phí vốn lưu động bổ sung cần thiết để vận hành dự án.

**6. Liên kết**
- [Phân bổ Vốn](#2-phân-bổ-vốn-capital-allocation) · [CapEx Chiến lược](#4-chi-tiêu-vốn-chiến-lược-capital-expenditure---capex) · [WACC](../03_Corporate_Finance_Foundations/05_Cost_of_Capital_and_WACC.md)

---

## 2. Phân bổ Vốn (Capital Allocation)

**1. Là gì?**
Phân bổ Vốn (Capital Allocation) là quy trình chiến lược mà theo đó ban lãnh đạo cấp cao của doanh nghiệp đưa ra các quyết định phân phối và tái phân bổ nguồn vốn thặng dư tích lũy được (từ dòng tiền hoạt động kinh doanh, nợ vay mới hoặc phát hành cổ phiếu) vào các kênh sử dụng vốn cạnh tranh nhau nhằm mục đích tối đa hóa lợi nhuận dài hạn trên mỗi cổ phần. Nếu kế toán là việc ghi nhận tiền đã đi đâu, thì phân bổ vốn là nghệ thuật quyết định tiền sẽ đi về đâu. Nếu chỉ nhớ một điều: **Phân bổ vốn là nhiệm vụ quan trọng số 1 của CEO, quyết định sự thành bại lâu dài của một tập đoàn.**

**2. Hoạt động thế nào?**
- 5 phương án sử dụng dòng tiền thặng dư cốt lõi của một CEO:
  1. Tái đầu tư mở rộng kinh doanh cốt lõi (Organic Growth / CapEx): Xây thêm nhà máy, mở thêm chi nhánh, đầu tư nghiên cứu phát triển R&D.
  2. Mua bán và sáp nhập (M&A / Inorganice Growth): Thâu tóm các đối thủ cạnh tranh hoặc mua lại các công nghệ bổ trợ bên ngoài.
  3. Chi trả nợ gốc ngân hàng hoặc mua lại trái phiếu: Giảm đòn bẩy tài chính, tăng độ an toàn và giải phóng chi phí lãi vay.
  4. Chi trả cổ tức bằng tiền mặt (Cash Dividends): Trả lại tiền mặt cho cổ đông tự tìm kiếm cơ hội đầu tư khác.
  5. Mua lại cổ phiếu của chính mình (Share Repurchase / Buyback): Thu hẹp lượng cổ phiếu lưu hành, gia tăng tỷ lệ sở hữu và EPS cho các cổ đông còn lại.
- Nguyên tắc cơ bản: Mỗi đồng vốn chỉ nên được giữ lại tái đầu tư nếu ban lãnh đạo tin tưởng chắc chắn rằng nó sẽ tạo ra giá trị thị trường lớn hơn 1 đồng trong tương lai (Quy tắc 1 Dollar của Warren Buffett).

**3. Công thức & mô hình**
Ma trận 5 cửa Phân bổ Vốn:

```text
                        DÒNG TIỀN TỰ DO THẶNG DƯ (FCF)
                                      │
            ┌─────────────────────────┼─────────────────────────┐
            │                         │                         │
            ▼                         ▼                         ▼
   [Tái đầu tư Nội bộ]         [Thâu tóm M&A]           [Giảm Nợ vay]
   - R&D & Sản phẩm mới        - Mua công ty con        - Trả nợ ngân hàng
   - Mở rộng nhà máy (CapEx)   - Mở rộng chuỗi giá trị  - Mua lại trái phiếu
            │                         │
            └────────────┬────────────┘
                         │ (Nếu không có dự án đạt Hurdle Rate)
                         ▼
             [HOÀN TIỀN CHO CỔ ĐÔNG]
             ├── Chi trả Cổ tức Tiền mặt (Dividends)
             └── Mua lại Cổ phiếu Quỹ (Share Buybacks)
```

**4. Ví dụ**
- Tập đoàn Apple dưới sự lãnh đạo của Tim Cook là một bậc thầy về phân bổ vốn: Mỗi năm cỗ máy iPhone tạo ra dòng tiền tự do khổng lồ $90 - $100$ tỷ USD. Apple không thâu tóm các tập đoàn khổng lồ bừa bãi mà phân bổ vốn cực kỳ khoa học: Rót khoảng $30$ tỷ cho R&D và CapEx máy móc; chi khoảng $15$ tỷ trả cổ tức tiền mặt đều đặn; và dành phần lớn còn lại (hơn $70$ tỷ USD/năm) để mua lại cổ phiếu của chính mình trên sàn, giúp số lượng cổ phiếu lưu hành giảm gần $40\%$ trong 10 năm qua, đẩy giá cổ phiếu tăng vọt.
- Ngược lại, nhiều tập đoàn nhà nước và doanh nghiệp tư nhân tại Việt Nam trong giai đoạn 2007–2011 đã thất bại thảm hại trong việc phân bổ vốn khi mang dòng tiền thặng dư từ hoạt động cốt lõi đi đầu tư dàn trải sang bất động sản, chứng khoán, ngân hàng và đóng tàu, dẫn tới các khoản lỗ hàng nghìn tỷ đồng.
- Counterfactual: Nếu ban lãnh đạo cố tình giữ lại toàn bộ tiền mặt gửi tiết kiệm ngân hàng lấy lãi suất $5\%$/năm trong khi chi phí vốn của công ty là $12\%$, công ty đang phá hủy giá trị của cổ đông và nên trả lại số tiền đó cho cổ đông.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Thiết lập chiến lược phân bổ nguồn lực của HĐQT, đánh giá năng lực của CEO trong các cuốn sách kinh điển (như cuốn sách gối đầu giường của Warren Buffett: "The Outsiders" của William Thorndike).
- Tranh luận: Chi trả cổ tức vs. Mua lại cổ phiếu: Mua lại cổ phiếu có lợi thế về thuế thu nhập cá nhân hơn cổ tức tiền mặt tại Mỹ, nhưng nếu mua lại cổ phiếu khi thị giá đang ở đỉnh bong bóng thì lại là hành vi thiêu hủy tiền của cổ đông.
- Lỗi thường gặp: Ban lãnh đạo coi việc giữ lại tiền mặt tái đầu tư là miễn phí, quên mất rằng vốn cổ phần có chi phí cơ hội rất cao.

**6. Liên kết**
- [Kỷ luật Phân bổ Vốn](#3-kỷ-luật-phân-bổ-vốn-capital-allocation-discipline) · [Chính sách Cổ tức](../03_Corporate_Finance_Foundations/04_Debt_Equity_Financing_and_Payout_Policy.md) · [Mua lại Cổ phiếu](../03_Corporate_Finance_Foundations/04_Debt_Equity_Financing_and_Payout_Policy.md)

---

## 3. Kỷ luật Phân bổ Vốn (Capital Allocation Discipline)

**1. Là gì?**
Kỷ luật Phân bổ Vốn (Capital Allocation Discipline) là sự kiên định, chuẩn mực và tính nguyên tắc khắt khe của ban điều hành trong việc từ chối các cơ hội đầu tư kém hiệu quả, không chạy theo phong trào tăng trưởng quy mô ảo, kiên quyết yêu cầu mọi khoản chi tiêu vốn phải vượt qua rào cản chi phí vốn (Hurdle Rate), và sẵn sàng trả lại tiền mặt cho cổ đông khi không tìm thấy dự án có NPV dương thực sự. Kỷ luật phân bổ vốn là tấm khiên vững chắc nhất bảo vệ cổ đông khỏi sự ngạo mạn và thói bành trướng của ban lãnh đạo. Nếu chỉ nhớ một điều: **Kỷ luật phân bổ vốn là lòng dũng cảm nói "KHÔNG" với 99 dự án hào nhoáng để chỉ chọn duy nhất 1 dự án thực sự sinh lời.**

**2. Hoạt động thế nào?**
- Các nguyên tắc của một nhà phân bổ vốn có kỷ luật sắt thép:
  1. Không bao giờ hạ thấp ngưỡng sinh lời tối thiểu (Hurdle Rate) chỉ để hợp thức hóa một dự án yêu thích của ban giám đốc.
  2. Đo lường thành công bằng Lợi nhuận trên mỗi cổ phần (EPS) và Tỷ suất sinh lời trên vốn (ROIC), tuyệt đối không đo lường bằng quy mô doanh thu hay số lượng nhân viên.
  3. Nhận thức sâu sắc về Chi phí cơ hội: Mỗi đồng chi vào dự án này đồng nghĩa với việc không thể chi trả cổ tức hay mua lại cổ phiếu đang bị định giá rẻ.
  4. Sẵn sàng cắt lỗ và thoái vốn (Divestiture): Dũng cảm khai tử các mảng kinh doanh thua lỗ kéo dài, bán thanh lý tài sản để thu hồi vốn tái phân bổ vào mảng cốt lõi sinh lời cao.
  5. Kháng cự lại "Áp lực thể chế" (The Institutional Imperative): Kháng cự lại xu hướng bắt chước các đối thủ cạnh tranh một cách mù quáng (ví dụ thấy đối thủ lao vào làm bất động sản, tiền số cũng lao theo).

**3. Công thức & mô hình**
Quy tắc kiểm tra 1 Dollar của Warren Buffett:

$$
\Delta \text{Giá trị Vốn hóa Thị trường trong 5 năm} \ge \sum \text{Lợi nhuận Giữ lại trong 5 năm đó}
$$

Ý nghĩa: Đối với mỗi $1$ đồng lợi nhuận mà công ty giữ lại không chia cho cổ đông, ban lãnh đạo bắt buộc phải tạo ra ít nhất $1$ đồng giá trị thị trường thặng dư tương ứng cho các cổ đông.

**4. Ví dụ**
- Trong giai đoạn tái cấu trúc 2022–2023, Ban lãnh đạo Tập đoàn Thế Giới Di Động (MWG) thể hiện kỷ luật phân bổ vốn nghiêm ngặt: Dũng cảm đóng cửa hoàn toàn chuỗi bán lẻ điện máy Bluetronics tại Campuchia và thu hẹp hàng trăm cửa hàng Bách Hóa Xanh hoạt động không đạt điểm hòa vốn, kiên quyết dồn toàn bộ nguồn lực và dòng tiền mặt vào việc tối ưu hóa hiệu quả của từng mét vuông cửa hàng hiện hữu.
- Ngược lại, nhiều tập đoàn lớn trên thế giới trong kỷ nguyên tiền tệ nới lỏng (lãi suất gần bằng 0) đã đánh mất hoàn toàn kỷ luật phân bổ vốn, rót hàng chục tỷ USD vào các dự án vũ trụ ảo metaverse hoặc xe điện tự hành chưa có mô hình kinh doanh khả thi, dẫn tới việc phải xóa sổ tài sản hàng loạt khi chu kỳ thắt chặt tiền tệ ập đến.
- Counterfactual: Nếu ban lãnh đạo thiếu kỷ luật phân bổ vốn, họ sẽ bị cuốn vào các cuộc chiến tranh giành thị phần bằng cách đốt tiền khuyến mại bừa bãi, khiến biên lợi nhuận ròng rơi tự do về 0 và dòng tiền cạn kiệt.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Tiêu chí hàng đầu để các nhà đầu tư giá trị (Value Investors) lựa chọn ban lãnh đạo để ủy thác vốn dài hạn.
- Tranh luận: Kỷ luật quá mức có biến thành sự bảo thủ cực đoan? Nếu doanh nghiệp quá khắt khe với tỷ lệ hoàn vốn ngắn hạn, họ có thể bỏ lỡ các công nghệ đột phá có tính rủi ro cao nhưng tiềm năng vô hạn trong giai đoạn đầu (như Amazon đầu tư vào AWS thuở sơ khai).
- Lỗi thường gặp: Ban lãnh đạo duy trì kỷ luật phân bổ vốn khi thị trường bình thường, nhưng lại đánh mất hoàn toàn kỷ luật khi thị trường hưng phấn ở đỉnh bong bóng.

**6. Liên kết**
- [Phân bổ Vốn](#2-phân-bổ-vốn-capital-allocation) · [Hoạch định Ngân sách Vốn](#1-hoạch-định-ngân-sách-vốn-capital-budgeting) · [Tái cấu trúc Doanh nghiệp](../03_Corporate_Finance_Foundations/07_Corporate_Restructuring_MA_and_Valuation.md)

---

## 4. Chi tiêu Vốn Chiến lược (Capital Expenditure - CapEx)

**1. Là gì?**
Chi tiêu Vốn Chiến lược (Strategic CapEx) là việc phân bổ các nguồn lực tài chính dài hạn vào việc hình thành, hiện đại hóa và mở rộng các tài sản cố định cốt lõi nhằm trực tiếp hiện thực hóa các lợi thế cạnh tranh dài hạn và chiến lược kinh doanh của doanh nghiệp. Trong tài chính doanh nghiệp, CapEx không chỉ là con số hạch toán kế toán trên Báo cáo Lưu chuyển Tiền tệ mà là sự cam kết hữu hình hóa tầm nhìn chiến lược của ban lãnh đạo vào thế giới vật chất. Nếu chỉ nhớ một điều: **CapEx chiến lược là việc đặt cược những đồng tiền lớn nhất của doanh nghiệp vào việc xây dựng "con hào kinh tế" không thể xuyên thủng.**

**2. Hoạt động thế nào?**
- Phân định hai dòng CapEx chiến lược:
  1. CapEx phòng thủ / duy trì (Defensive / Maintenance CapEx): Đầu tư để không bị tụt lại phía sau đối thủ (ví dụ: nâng cấp hệ thống phần mềm bảo mật, thay thế linh kiện máy bay cũ theo chuẩn an toàn hàng không).
  2. CapEx tấn công / mở rộng (Offensive / Growth CapEx): Đầu tư để tạo khoảng cách áp đảo đối thủ hoặc chiếm lĩnh thị trường mới (ví dụ: xây dựng tổ hợp luyện cán thép khép kín, đầu tư nhà máy bán dẫn).
- Đánh đổi rủi ro kỳ hạn (Maturity Mismatch Risk): CapEx thường có độ trễ lớn (thời gian xây dựng kéo dài 2–5 năm), dòng tiền ra xảy ra ngay lập tức trong khi dòng tiền thu về phụ thuộc vào thị trường tương lai; nếu dự báo sai lệch về nhu cầu, CapEx sẽ trở thành gánh nặng nợ vay và chi phí khấu hao đè bẹp công ty.

**3. Công thức & mô hình**
Tỷ số Cường độ Chi tiêu Vốn (CapEx Intensity Ratio):

$$
\text{CapEx Intensity} = \dfrac{\text{CapEx}}{\text{Doanh thu thuần (Net Revenue)}} \times 100\%
$$

Đo lường Hiệu quả của CapEx Tăng thêm (Incremental Return on Invested Capital - RONIC):
$$
\text{RONIC} = \dfrac{\Delta \text{NOPAT}}{\text{Net CapEx} + \Delta \text{Working Capital}}
$$
Nếu $\text{RONIC} > \text{WACC}$: Các khoản CapEx chiến lược mới đang thực sự tạo ra giá trị kinh tế vượt trội cho doanh nghiệp.

**4. Ví dụ**
- Quyết định đầu tư Dự án Khu liên hợp Gang thép Dung Quất 2 với tổng mức CapEx hơn $85.000$ tỷ VND của Tập đoàn Hòa Phát (HPG): Đây là khoản CapEx chiến lược mang tính sống còn nhằm đưa công suất thép thô của Hòa Phát lên $14$ triệu tấn/năm, tập trung vào sản phẩm thép cuộn cán nóng (HRC) chất lượng cao để thay thế hàng nhập khẩu, định hình vị thế dẫn đầu tuyệt đối của Hòa Phát trong ngành công nghiệp nặng Việt Nam.
- Counterfactual: Nếu Hòa Phát ngần ngại không dám giải ngân CapEx xây Dung Quất 2 vì sợ rủi ro thị trường, công ty sẽ duy trì lượng tiền mặt an toàn trong ngắn hạn, nhưng sẽ nhanh chóng chạm trần công suất tối đa và đánh mất thị phần thép HRC vào tay các nhà sản xuất nước ngoài.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Dự phóng chu kỳ mở rộng công suất trong các báo cáo phân tích ngành, thiết kế phương án huy động vốn vay dự án.
- Tranh luận: Mô hình thâm dụng vốn (CapEx-heavy) vs. Mô hình tài sản nhẹ (Asset-light): Các doanh nghiệp tài sản nhẹ (như Airbnb, Grab) tự hào về việc tăng trưởng không cần CapEx; nhưng các doanh nghiệp sở hữu CapEx chiến lược khổng lồ (như TSMC trong ngành bán dẫn) lại sở hữu rào cản gia nhập ngành (Barriers to entry) kiên cố mà không đối thủ nào có thể bắt chước được.
- Lỗi thường gặp: Sa đà vào bẫy "CapEx vượt dự toán" (Cost Overruns) và chậm tiến độ thi công, khiến chi phí lãi vay bị đội lên gấp nhiều lần.

**6. Liên kết**
- [Hoạch định Ngân sách Vốn](#1-hoạch-định-ngân-sách-vốn-capital-budgeting) · [Kỷ luật Phân bổ Vốn](#3-kỷ-luật-phân-bổ-vốn-capital-allocation-discipline) · [CapEx trên CFS](../02_Financial_Statements/05_Cash_Flow_Statement_Metrics.md)

---

## Câu hỏi tự kiểm tra

1. Tại sao trong các tiêu chí thẩm định dự án đầu tư của Hoạch định Ngân sách Vốn, Giá trị Hiện tại Ròng (NPV) luôn được xem là tiêu chuẩn tối cao so với Tỷ suất Hoàn vốn Nội bộ (IRR) và Thời gian Hoàn vốn?
2. Trình bày ma trận 5 phương án phân bổ dòng tiền tự do thặng dư (Capital Allocation) của một CEO xuất sắc. Làm thế nào để ban giám đốc biết được khi nào nên trả cổ tức và khi nào nên tái đầu tư?
3. Phân tích "Quy tắc kiểm tra 1 Dollar" của Warren Buffett trong việc đánh giá Kỷ luật Phân bổ Vốn của một ban điều hành công ty đại chúng.
4. Tại sao các CEO thường có xu hướng tâm lý thiên kiến muốn mở rộng quy mô công ty bằng các thương vụ thâu tóm M&A bừa bãi (Empire building) thay vì duy trì Kỷ luật Phân bổ Vốn?
5. Sự khác biệt giữa CapEx phòng thủ (Maintenance CapEx) và CapEx mở rộng (Growth CapEx) có ý nghĩa như thế nào trong việc đánh giá tính bền vững của dòng tiền tự do trong mô hình định giá DCF?
