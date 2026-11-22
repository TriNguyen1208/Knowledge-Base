# Chuyên đề 8.3.5: Chi phí Vốn và Chi phí Vốn Bình quân Gia quyền (WACC)

Chuyên đề này đi sâu vào "ngưỡng cản sinh lời tối thiểu" (Hurdle Rate) định đoạt mọi quyết định tài chính doanh nghiệp và định giá: Chi phí Vốn (Cost of Capital) – chi phí cơ hội của việc sử dụng nguồn lực tài chính; Chi phí Vốn Vay Nợ (Cost of Debt) có tính đến lá chắn thuế; Chi phí Vốn Cổ phần (Cost of Equity) đo lường qua mô hình Định giá Tài sản Vốn (CAPM); và Chi phí Vốn Bình quân Gia quyền (Weighted Average Cost of Capital - WACC) – tỷ lệ chiết khấu tối cao của toàn bộ dòng tiền doanh nghiệp.

> Câu hỏi xuyên suốt: Bằng công thức nào mà một giám đốc tài chính có thể đo lường chính xác tỷ suất sinh lời tối thiểu mà các cổ đông và chủ nợ đòi hỏi ở doanh nghiệp, và WACC quyết định sự sống còn của một dự án đầu tư ra sao?

---

## 1. Chi phí Vốn (Cost of Capital)

**1. Là gì?**
Chi phí Vốn (Cost of Capital / Hurdle Rate) là tỷ suất sinh lời tối thiểu mà một doanh nghiệp hoặc một dự án đầu tư bắt buộc phải tạo ra từ các tài sản của mình để có thể thỏa mãn được mức lợi nhuận kỳ vọng của tất cả các nhà cung cấp vốn (bao gồm cả các chủ nợ cho vay và các cổ đông sở hữu vốn). Về bản chất kinh tế học, chi phí vốn không phải là một khoản chi phí bằng tiền mặt được hạch toán trên sổ sách kế toán, mà là một **Chi phí cơ hội (Opportunity Cost)**: tỷ suất sinh lời mà các nhà đầu tư có thể kiếm được từ một cơ hội đầu tư khác trên thị trường tài chính có cùng mức độ rủi ro. Nếu chỉ nhớ một điều: **Chi phí vốn là rào cản sinh lời tối thiểu; nếu không nhảy qua rào cản này, doanh nghiệp đang làm nghèo đi các cổ đông của mình.**

**2. Hoạt động thế nào?**
- Quy luật rủi ro - lợi nhuận (Risk-Return Tradeoff):
  - Rủi ro càng cao $\rightarrow$ Nhà đầu tư đòi hỏi tỷ suất sinh lời bù đắp rủi ro càng lớn $\rightarrow$ Chi phí vốn của doanh nghiệp càng đắt đỏ.
  - Một công ty điện lực nhà nước có dòng tiền ổn định sẽ có chi phí vốn rất thấp ($7\% - 8\%$), trong khi một startup trí tuệ nhân tạo (AI) có rủi ro thất bại cao sẽ có chi phí vốn lên tới $25\% - 35\%$.
- Ứng dụng làm Tỷ lệ Chiết khấu (Discount Rate):
  - Dùng để quy đổi các dòng tiền tương lai về giá trị hiện tại (PV).
  - Tỷ lệ chiết khấu càng cao thì giá trị hiện tại của doanh nghiệp càng teo tóp.
- Phân biệt giữa Chi phí Vốn Doanh nghiệp (Company Cost of Capital) và Chi phí Vốn Dự án (Project Cost of Capital): Chi phí vốn phải phản ánh rủi ro của CHÍNH DỰ ÁN được đầu tư, không phải rủi ro trung bình hiện tại của công ty mẹ.

**3. Công thức & mô hình**
Điều kiện tạo giá trị thặng dư kinh tế:

$$
\text{Tạo giá trị (Value Creation)} \iff \text{ROIC (Tỷ suất sinh lời trên vốn)} > \text{Cost of Capital (Chi phí vốn)}
$$

$$
\text{Spread (Biên giá trị thặng dư)} = \text{ROIC} - \text{WACC}
$$

Nếu $\text{Spread} > 0$: Doanh nghiệp tạo ra của cải thực sự. Nếu $\text{Spread} < 0$: Doanh nghiệp đang thiêu hủy giá trị kinh tế.

**4. Ví dụ**
- Một doanh nghiệp đầu tư $100$ tỷ VND vào một dự án mở rộng:
  - Chi phí vốn (Hurdle rate) được xác định là $12\%$/năm.
  - Dự án tạo ra lợi nhuận thuần sau thuế từ hoạt động kinh doanh (NOPAT) là $15$ tỷ VND/năm $\rightarrow \text{ROIC} = 15\%$.
  - Do $\text{ROIC} (15\%) > \text{Cost of Capital} (12\%)$, dự án tạo ra biên thặng dư $+3\%$/năm (tương đương $+3$ tỷ VND giá trị thặng dư kinh tế EVA mỗi năm) (số liệu minh họa).
- Counterfactual: Nếu dự án chỉ tạo ra $\text{ROIC} = 9\%$, mặc dù trên sổ sách kế toán doanh nghiệp vẫn báo lãi $9$ tỷ VND, nhưng thực chất doanh nghiệp đang làm mất của các nhà đầu tư $3$ tỷ VND mỗi năm so với việc đem $100$ tỷ đó đi đầu tư vào các cơ hội khác có cùng rủi ro trên thị trường.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Tiêu chuẩn phê duyệt dự án trong Capital Budgeting, định giá chiết khấu dòng tiền (DCF), tính toán chỉ số EVA.
- Sai lầm áp dụng phổ biến: Sử dụng một mức Chi phí vốn duy nhất của công ty mẹ cho tất cả các phòng ban và dự án khác nhau: khiến các dự án an toàn bị từ chối oan uổng (vì chi phí vốn tính quá cao) và các dự án mạo hiểm nguy hiểm bị phê duyệt sai lầm (vì chi phí vốn tính quá thấp).
- Lỗi thường gặp: Nhầm lẫn chi phí vốn với lãi suất đi vay ngân hàng, bỏ qua chi phí vốn cổ phần.

**6. Liên kết**
- [Chi phí Vốn Cổ phần](#2-chi-phí-vốn-cổ-phần-cost-of-equity) · [Chi phí Vốn Vay Nợ](#3-chi-phí-vốn-vay-nợ-cost-of-debt) · [WACC](#4-chi-phí-vốn-bình-quân-gia-quyền-wacc)

---

## 2. Chi phí Vốn Cổ phần (Cost of Equity)

**1. Là gì?**
Chi phí Vốn Cổ phần ($r_e$ / Cost of Equity) là tỷ suất sinh lời tối thiểu mà các cổ đông phổ thông đòi hỏi khi bỏ vốn đầu tư vào cổ phiếu của doanh nghiệp, nhằm bù đắp cho việc trì hoãn tiêu dùng hiện tại và gánh chịu rủi ro biến động giá cổ phiếu so với các kênh đầu tư an toàn khác. Không giống như nợ vay có ghi rõ lãi suất trên hợp đồng, Chi phí vốn cổ phần là một **khoản chi phí ẩn ngầm định** không thể quan sát trực tiếp, bắt buộc phải được ước tính thông qua các mô hình định giá rủi ro tài chính. Nếu chỉ nhớ một điều: **Vốn cổ phần không bao giờ là tiền miễn phí; cổ đông luôn đòi hỏi phần thưởng sinh lời cao nhất để bù đắp cho rủi ro chịu mất trắng.**

**2. Hoạt động thế nào?**
- Tại sao Chi phí Vốn Cổ phần luôn cao hơn Chi phí Vốn Nợ?
  - Vì cổ đông là người chịu rủi ro cuối cùng (Residual claim): Khi doanh nghiệp làm ăn bết bát hoặc phá sản, chủ nợ được thanh toán nợ trước; cổ đông chỉ được nhận phần còn lại cuối cùng hoặc mất trắng toàn bộ vốn.
  - Cổ tức không được bảo đảm cố định và giá cổ phiếu biến động rất mạnh trên thị trường.
- Mô hình Định giá Tài sản Vốn (Capital Asset Pricing Model - CAPM): Công cụ chuẩn mực được thừa nhận rộng rãi nhất thế giới để lượng hóa Chi phí vốn cổ phần dựa trên:
  1. Lãi suất phi rủi ro (Risk-Free Rate - $r_f$): Lợi suất trái phiếu chính phủ kỳ hạn dài (5 năm hoặc 10 năm).
  2. Hệ số Beta ($\beta$): Thước đo rủi ro hệ thống, phản ánh mức độ nhạy cảm của biến động giá cổ phiếu so với biến động của toàn bộ thị trường chung.
  3. Phần bù Rủi ro Thị trường (Equity Risk Premium - ERP): Mức sinh lời vượt trội mà nhà đầu tư đòi hỏi khi đầu tư vào cổ phiếu thay vì giữ trái phiếu chính phủ an toàn.

**3. Công thức & mô hình**
Phương trình Mô hình Định giá Tài sản Vốn (CAPM):

$$
r_e = r_f + \beta \times (\mathbb{E}[r_m] - r_f)
$$

Trong đó:
- $r_e$: Chi phí Vốn Cổ phần kỳ vọng.
- $r_f$: Lãi suất phi rủi ro (Risk-free rate - thường lấy lợi suất Trái phiếu Chính phủ Việt Nam 10 năm, khoảng $3\% - 4\%$).
- $\mathbb{E}[r_m] - r_f$: Phần bù rủi ro thị trường cổ phiếu (ERP - tại Việt Nam thường từ $6\% - 8\%$).
- $\beta$: Hệ số rủi ro hệ thống của cổ phiếu:
  - $\beta = 1,0$: Cổ phiếu biến động cùng nhịp với thị trường chung (VN-Index).
  - $\beta > 1,0$: Cổ phiếu có tính rủi ro cao hơn thị trường (chứng khoán, bất động sản).
  - $\beta < 1,0$: Cổ phiếu có tính phòng thủ ổn định hơn thị trường (điện nước, dược phẩm, sữa).

Mô hình Tăng trưởng Cổ tức Gordon (Dividend Discount Model):
$$
r_e = \dfrac{D_1}{P_0} + g
$$
Trong đó $D_1$ là cổ tức năm tới, $P_0$ là giá cổ phiếu hiện tại, $g$ là tốc độ tăng trưởng cổ tức bền vững.

**4. Ví dụ**
- Ước tính Chi phí vốn cổ phần của một công ty sản xuất tiêu dùng niêm yết trên sàn HOSE:
  - Lợi suất Trái phiếu Chính phủ 10 năm: $r_f = 3,5\%$.
  - Phần bù rủi ro thị trường cổ phiếu Việt Nam: $\text{ERP} = 7,0\%$.
  - Hệ số Beta của cổ phiếu qua phân tích dữ liệu lịch sử 3 năm: $\beta = 0,85$ (ngành hàng thiết yếu phòng thủ, ít biến động hơn thị trường).
  - Áp dụng mô hình CAPM:
    $$r_e = 3,5\% + 0,85 \times 7,0\% = 3,5\% + 5,95\% = 9,45\%/\text{năm}$$
  - Kết luận: Các cổ đông đòi hỏi tỷ suất sinh lời tối thiểu là $9,45\%$/năm khi đầu tư vào cổ phiếu này (số liệu minh họa).
- Counterfactual: Nếu đây là một công ty môi giới chứng khoán có tính chu kỳ cao với hệ số $\beta = 1,6$, Chi phí vốn cổ phần sẽ tăng vọt lên: $r_e = 3,5\% + 1,6 \times 7,0\% = 14,7\%$/năm, phản ánh rủi ro thị trường lớn hơn nhiều.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Cấu phần trọng yếu tính WACC, chiết khấu dòng tiền tự do cho cổ đông (FCFE), mô hình định giá DDM.
- Tranh luận về CAPM: CAPM dựa trên giả định thị trường hiệu quả (EMH) và giả định Beta ổn định trong quá khứ phản ánh đúng rủi ro tương lai; nhiều chuyên gia (như Eugene Fama và Kenneth French) đã chỉ ra Beta không giải thích đầy đủ sự chênh lệch lợi nhuận và phát triển mô hình Fama-French 3 nhân tố (bổ sung quy mô vốn hóa Size và giá trị P/B).
- Lỗi thường gặp: Lấy lãi suất tiền gửi ngân hàng ngắn hạn làm lãi suất phi rủi ro $r_f$, hoặc dùng Beta ngắn hạn bị nhiễu động bởi đầu cơ.

**6. Liên kết**
- [Chi phí Vốn Vay Nợ](#3-chi-phí-vốn-vay-nợ-cost-of-debt) · [WACC](#4-chi-phí-vốn-bình-quân-gia-quyền-wacc) · [Huy động Vốn Cổ phần](../03_Corporate_Finance_Foundations/04_Debt_Equity_Financing_and_Payout_Policy.md)

---

## 3. Chi phí Vốn Vay Nợ (Cost of Debt)

**1. Là gì?**
Chi phí Vốn Vay Nợ ($r_d$ / Cost of Debt) là tỷ suất sinh lời hiệu dụng mà các chủ nợ (ngân hàng, trái chủ) đòi hỏi khi cung cấp các khoản vốn vay ngắn hạn và dài hạn cho doanh nghiệp, phản ánh mức lãi suất thị trường hiện hành mà doanh nghiệp sẽ phải trả nếu đi vay thêm một khoản nợ mới ở thời điểm hiện tại. Trong tài chính doanh nghiệp chuẩn mực, Chi phí vốn vay nợ luôn luôn được đo lường trên cơ sở **Sau Thuế (After-Tax Cost of Debt)** để phản ánh hiệu ứng tiết kiệm tiền thuế từ lá chắn thuế của lãi vay. Nếu chỉ nhớ một điều: **Chi phí nợ vay là lãi suất đi vay thực tế sau khi đã được nhà nước "trợ giá" thông qua việc giảm thuế TNDN.**

**2. Hoạt động thế nào?**
- Hai cách xác định Chi phí Nợ vay Trước Thuế ($r_{d, \text{pre-tax}}$):
  1. Đối với doanh nghiệp phát hành trái phiếu niêm yết: Lấy Lợi suất đáo hạn (Yield to Maturity - YTM) của các trái phiếu đang lưu hành trên thị trường.
  2. Đối với doanh nghiệp vay ngân hàng: Lấy Lãi suất phi rủi ro cộng với Phần bù rủi ro tín dụng (Credit Default Spread) dựa trên mức xếp hạng tín nhiệm của doanh nghiệp (AAA, AA, BBB, Junk).
- Hiệu ứng Lá chắn thuế: Vì chi phí lãi vay được hạch toán vào chi phí hợp lý được trừ trước thuế, Nhà nước gián tiếp tài trợ một phần chi phí vay vốn cho doanh nghiệp:
  $$r_{d, \text{after-tax}} = r_{d, \text{pre-tax}} \times (1 - t_c)$$
- Khi nào lá chắn thuế mất tác dụng? Nếu doanh nghiệp liên tục kinh doanh thua lỗ (không có thu nhập chịu thuế để khấu trừ) hoặc nợ vay vượt trần quy định của pháp luật (như trần lãi vay $30\%$ EBITDA tại Việt Nam), chi phí vốn nợ sau thuế sẽ bằng đúng chi phí trước thuế.

**3. Công thức & mô hình**
Chi phí Vốn Nợ Sau Thuế:

$$
r_d = r_{d, \text{pre-tax}} \times (1 - t_c)
$$

Xác định Lãi suất vay nợ trước thuế theo mô hình Xếp hạng Tín nhiệm:
$$
r_{d, \text{pre-tax}} = r_f + \text{Credit Spread}
$$

Trong đó: Credit Spread càng lớn nếu doanh nghiệp có hệ số đòn bẩy $D/E$ cao, hệ số thanh toán lãi vay ICR thấp.

**4. Ví dụ**
- Một doanh nghiệp xây dựng phát hành một lô trái phiếu doanh nghiệp thời hạn 3 năm:
  - Lợi suất đáo hạn thị trường (lãi suất trước thuế) là $10,5\%$/năm.
  - Thuế suất thuế TNDN hiện hành là $t_c = 20\%$.
  - Chi phí vốn nợ sau thuế của doanh nghiệp:
    $$r_d = 10,5\% \times (1 - 0,20) = 10,5\% \times 0,80 = 8,4\%/\text{năm}$$
  - Nhờ có lá chắn thuế, chi phí sử dụng vốn nợ thực tế của doanh nghiệp giảm được $2,1\%$ mỗi năm (số liệu minh họa).
- Counterfactual: Nếu doanh nghiệp kinh doanh lỗ triền miên trong 3 năm tới và không có bất kỳ khoản thu nhập chịu thuế nào để khấu trừ, công ty không tận dụng được lá chắn thuế và chi phí sử dụng nợ vay thực tế sẽ đội lên đúng bằng mức $10,5\%$/năm.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Cấu phần nợ trong WACC, đánh giá khả năng chịu đựng chi phí tài chính, ra quyết định tái cơ cấu nợ hoặc đảo nợ (Debt Refinancing).
- Tranh luận: Chi phí vốn nợ thấp có phải lúc nào cũng tốt? Chi phí nợ vay danh nghĩa rẻ cám dỗ doanh nghiệp vay nợ thật nhiều, nhưng việc vay nợ nhiều sẽ làm tăng rủi ro tài chính, đẩy hệ số Beta lên cao, khiến Chi phí vốn cổ phần ($r_e$) tăng vọt và làm tăng nguy cơ kiệt quệ tài chính.
- Lỗi thường gặp: Lấy tỷ số giữa Tổng chi phí lãi vay trên P&L chia cho Tổng nợ trên Bảng Cân đối (lãi suất lịch sử) để làm Chi phí nợ vay, thay vì lấy lãi suất thị trường biên tế (Marginal cost of debt) của các khoản vay mới hiện tại.

**6. Liên kết**
- [Chi phí Vốn Cổ phần](#2-chi-phí-vốn-cổ-phần-cost-of-equity) · [WACC](#4-chi-phí-vốn-bình-quân-gia-quyền-wacc) · [Huy động Vốn Nợ](../03_Corporate_Finance_Foundations/04_Debt_Equity_Financing_and_Payout_Policy.md)

---

## 4. Chi phí Vốn Bình quân Gia quyền (Weighted Average Cost of Capital - WACC)

**1. Là gì?**
Chi phí Vốn Bình quân Gia quyền (WACC / Weighted Average Cost of Capital) là tỷ suất sinh lời bình quân gia quyền mà doanh nghiệp phải chi trả cho tất cả các nguồn vốn tài trợ của mình (bao gồm nợ vay, cổ phiếu ưu đãi và vốn cổ phần phổ thông), trong đó quyền số của mỗi nguồn vốn được tính theo tỷ trọng giá trị thị trường của nó trong tổng cấu trúc vốn của công ty. WACC là tỷ lệ chiết khấu phổ biến và quan trọng nhất trong toàn bộ nền tài chính doanh nghiệp hiện đại, được sử dụng để định giá toàn bộ Giá trị Doanh nghiệp (Enterprise Value) và làm ngưỡng cản sinh lời tối thiểu (Hurdle Rate) để đánh giá các dự án mở rộng công suất. Nếu chỉ nhớ một điều: **WACC là giá vốn bình quân tổng hợp của toàn bộ tiền nợ và tiền vốn cổ đông mà doanh nghiệp đang gánh trên vai.**

**2. Hoạt động thế nào?**
- Cơ chế vận hành của WACC:
  - Doanh nghiệp sử dụng cả Vốn Nợ (chi phí thấp nhờ lá chắn thuế) và Vốn Cổ phần (chi phí cao hơn do rủi ro lớn hơn).
  - WACC là mức giá vốn tổng hợp bình quân được tính dựa trên tỷ trọng của từng loại vốn.
  - Tối ưu hóa cấu trúc vốn (Capital Structure Optimization) thực chất là quá trình tìm kiếm tỷ lệ nợ/vốn cổ phần ($D/E$) sao cho **WACC đạt mức thấp nhất có thể**, từ đó tối đa hóa Giá trị Doanh nghiệp ($V = \text{FCFF} / \text{WACC}$).
- Nguyên tắc vàng khi tính toán quyền số WACC:
  - Bắt buộc phải sử dụng **Giá trị Thị trường (Market Value)** của Nợ và Vốn Cổ phần, TUYỆT ĐỐI không sử dụng Giá trị Sổ sách Kế toán (Book Value) vì giá trị sổ sách chỉ phản ánh chi phí lịch sử trong quá khứ.

**3. Công thức & mô hình**
Phương trình WACC kinh điển:

$$
\text{WACC} = \left( \dfrac{E}{V} \times r_e \right) + \left( \dfrac{D}{V} \times r_d \times (1 - t_c) \right)
$$

Trong đó:
- $E$: Giá trị thị trường của Vốn cổ phần (Vốn hóa thị trường = Thị giá cổ phiếu $\times$ Số lượng cổ phiếu).
- $D$: Giá trị thị trường của Nợ vay có lãi.
- $V = E + D$: Tổng giá trị thị trường của toàn bộ cấu trúc vốn doanh nghiệp.
- $r_e$: Chi phí Vốn Cổ phần (tính theo CAPM).
- $r_d$: Chi phí Vốn Nợ vay trước thuế.
- $t_c$: Thuế suất thuế Thu nhập Doanh nghiệp.

Mối quan hệ hình chữ U giữa WACC và Tỷ lệ Đòn bẩy Nợ:

```text
Chi phí Vốn (%)
   ▲
   │         Chi phí Vốn Cổ phần (re) ────────► (Tăng liên tục khi nợ tăng)
   │               /
   │              /
   │   WACC ──┐  /     ┌── WACC tăng lại do nguy cơ phá sản
   │          └───●───┘
   │            WACC tối thiểu (Cấu trúc vốn tối ưu)
   │
   │   Chi phí Nợ sau thuế [rd x (1 - tc)] ───► (Tăng vọt khi nợ quá cao)
   └─────────────────────────────────────────────► Tỷ lệ Nợ / Tổng Vốn (D/V)
```

**4. Ví dụ**
- Tính toán WACC cho một tập đoàn niêm yết có các thông số tài chính:
  - Vốn hóa thị trường cổ phiếu: $E = 6.000$ tỷ VND.
  - Tổng nợ vay tài chính: $D = 4.000$ tỷ VND.
  - Tổng giá trị cấu trúc vốn: $V = 6.000 + 4.000 = 10.000$ tỷ VND.
  - Tỷ trọng vốn: $E/V = 60\%$; $D/V = 40\%$.
  - Chi phí vốn cổ phần (tính theo CAPM): $r_e = 13\%$/năm.
  - Lãi suất nợ vay trước thuế: $r_{d, \text{pre-tax}} = 8\%$/năm; Thuế TNDN $t_c = 20\% \rightarrow r_d \text{ sau thuế} = 8\% \times (1 - 0,2) = 6,4\%$.
  - Áp dụng công thức WACC:
    $$\text{WACC} = (60\% \times 13\%) + (40\% \times 6,4\%) = 7,8\% + 2,56\% = 10,36\%/\text{năm}$$
  - Kết luận: Bất kỳ dự án đầu tư nào của tập đoàn bắt buộc phải tạo ra tỷ suất sinh lời vượt qua $10,36\%$/năm mới được phê duyệt (số liệu minh họa).
- Counterfactual: Nếu ban lãnh đạo muốn giảm WACC bằng cách tăng tỷ trọng nợ vay $D/V$ từ $40\%$ lên $80\%$, ban đầu WACC có thể giảm nhẹ nhờ nợ rẻ, nhưng sau đó rủi ro vỡ nợ tăng vọt khiến chủ nợ đòi lãi suất $14\%$ và cổ đông đòi $22\%$, đẩy WACC nhảy vọt lên $15\%$, làm sụt giảm nghiêm trọng giá trị vốn hóa của doanh nghiệp.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Tỷ lệ chiết khấu trong định giá chiết khấu dòng tiền tự do cho doanh nghiệp (FCFF Model), tính EVA, thẩm định M&A.
- Tranh luận: WACC tĩnh vs. WACC động: WACC không phải là một con số bất biến mà thay đổi liên tục theo biến động lãi suất thị trường, tỷ giá và giá cổ phiếu trên sàn, đòi hỏi nhà phân tích phải cập nhật định kỳ.
- Lỗi thường gặp cốt tử: Sử dụng WACC của công ty để chiết khấu dòng tiền tự do cho cổ đông (FCFE), hoặc dùng WACC để thẩm định một dự án đầu tư có mức độ rủi ro hoàn toàn khác biệt với hoạt động kinh doanh hiện tại của công ty.

**6. Liên kết**
- [Chi phí Vốn](#1-chi-phí-vốn-cost-of-capital) · [Chi phí Vốn Cổ phần](#2-chi-phí-vốn-cổ-phần-cost-of-equity) · [Cấu trúc Vốn Tối ưu](../03_Corporate_Finance_Foundations/06_Capital_Structure_Leverage_and_Financial_Distress.md) · [Định giá DCF](../08_Business_Valuation/03_Income_Approach_and_DCF.md)

---

## Câu hỏi tự kiểm tra

1. Tại sao Chi phí Vốn (Cost of Capital) lại được xem là một "Chi phí cơ hội" thay vì là một khoản chi phí kế toán thực tế bằng tiền mặt?
2. Trình bày các biến số trong Mô hình Định giá Tài sản Vốn (CAPM). Hệ số Beta ($\beta$) phản ánh loại rủi ro nào và tại sao các rủi ro phi hệ thống lại bị loại bỏ trong mô hình này?
3. Tại sao trong công thức tính Chi phí Vốn Bình quân Gia quyền (WACC), Chi phí Vốn Nợ lại được nhân với thừa số $(1 - t_c)$ trong khi Chi phí Vốn Cổ phần thì không?
4. Giải thích tại sao việc tính toán tỷ trọng nợ ($D/V$) và vốn cổ phần ($E/V$) trong công thức WACC bắt buộc phải sử dụng Giá trị Thị trường (Market Value) thay vì Giá trị Sổ sách (Book Value).
5. Phân tích đồ thị hình chữ U của WACC: Tại sao việc gia tăng tỷ lệ nợ vay ban đầu giúp hạ thấp WACC, nhưng nếu lạm dụng nợ vay quá mức sẽ làm WACC tăng vọt trở lại?
