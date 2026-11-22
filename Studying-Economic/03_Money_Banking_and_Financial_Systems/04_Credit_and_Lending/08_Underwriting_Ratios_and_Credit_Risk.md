# Chuyên đề 4.8: Các Chỉ số Thẩm định Tín dụng và Quản trị Rủi ro Tín dụng

Chuyên đề này phân tích bộ ba chỉ số thẩm định tín dụng sống còn được mọi ngân hàng trên thế giới áp dụng: DTI (tính trên thu nhập cá nhân), LTV (tính trên giá trị tài sản bảo đảm), DSCR (tính trên dòng tiền kinh doanh của doanh nghiệp), cùng bản chất kinh tế của Tình trạng chậm trả (Delinquency) và Rủi ro vỡ nợ (Default Risk).

> Câu hỏi xuyên suốt: Bằng cách nào các chuyên viên thẩm định rủi ro ngân hàng sử dụng ba chỉ số DTI, LTV và DSCR để sàng lọc và "chặn đứng" các khoản nợ xấu ngay từ trước khi đặt bút ký hợp đồng giải ngân?

---

## 1. Tỷ lệ Nợ trên Thu nhập (Debt-to-Income Ratio - DTI)

**1. Là gì?**
Tỷ lệ Nợ trên Thu nhập (Debt-to-Income Ratio - DTI) là chỉ số tài chính cá nhân chuẩn mực đo lường tỷ lệ phần trăm giữa **tổng số tiền phải trả nợ định kỳ hàng tháng của tất cả các khoản vay** (bao gồm vay mua nhà, vay mua ô tô, nợ thẻ tín dụng, vay tiêu dùng) so với **tổng thu nhập gộp (hoặc thu nhập ròng) hàng tháng** của người đi vay. DTI đo lường mức độ đè nặng của các nghĩa vụ nợ lên thu nhập hàng tháng và là tiêu chuẩn cốt lõi để ngân hàng đánh giá khả năng thanh toán thực tế của khách hàng cá nhân. Nếu chỉ nhớ một điều: **DTI cho biết bao nhiêu phần trăm tiền lương hàng tháng của bạn bị bốc hơi để trả nợ cho các ngân hàng.**

**2. Hoạt động thế nào?**
- Hai cấp độ tính toán DTI trong thẩm định cho vay mua nhà:
  1. **DTI đầu trước (Front-End DTI):** Chỉ tính riêng chi phí liên quan đến căn nhà đang vay mua (Gốc + Lãi khoản vay nhà + Thuế bất động sản + Phí bảo hiểm nhà) chia cho tổng thu nhập. Ngưỡng an toàn thường là **$\le 28\%$**.
  2. **DTI đầu sau (Back-End DTI - DTI toàn diện):** Tính toàn bộ chi phí căn nhà cộng với tất cả các nghĩa vụ nợ khác (thẻ tín dụng, vay mua xe, vay tiêu dùng) chia cho tổng thu nhập. Ngưỡng an toàn chuẩn mực thường là **$\le 36\% - 43\%$**.
- Quy tắc thẩm định: Nếu chỉ số DTI của người nộp đơn vượt quá $45\%–50\%$, hồ sơ vay vốn sẽ bị hệ thống tự động từ chối hoặc bị yêu cầu phải giảm bớt số tiền muốn vay, vì ngân hàng nhận định người vay sẽ không còn đủ tiền trang trải các chi phí sinh hoạt tối thiểu của gia đình (ăn uống, học hành, y tế) và rất dễ vỡ nợ khi có biến cố.

**3. Công thức & mô hình**
Công thức tính Tỷ lệ DTI toàn diện (Back-End DTI):

$$
\text{DTI} = \frac{\sum \text{Khoản thanh toán nợ bắt buộc hàng tháng}}{\text{Tổng thu nhập hàng tháng (Gross / Net Income)}} \times 100\%
$$

Khung đánh giá chuẩn mực quốc tế:
- $\text{DTI} \le 36\%$: Mức lý tưởng, tài chính rất lành mạnh, dễ dàng được duyệt vay lãi suất tốt.
- $37\% \le \text{DTI} \le 43\%$: Mức chấp nhận được, vẫn đủ điều kiện vay mua nhà (Qualified Mortgage).
- $44\% \le \text{DTI} \le 50\%$: Mức báo động nguy hiểm, khả năng dự phòng tài chính kém.
- $\text{DTI} > 50\%$: Nguy cơ vỡ nợ cực cao, đa số ngân hàng từ chối cấp tín dụng mới.

**4. Ví dụ**
- Ví dụ số minh họa: Anh An có thu nhập ròng chuyển khoản là 30 triệu VND/tháng. Hàng tháng anh đang phải trả nợ:
  - Trả góp xe máy: 2 triệu VND.
  - Trả tối thiểu thẻ tín dụng: 1 triệu VND.
  - Tổng nợ hiện tại: 3 triệu VND/tháng.
  - Anh An muốn vay ngân hàng mua căn hộ chung cư với số tiền phải đóng gốc và lãi mỗi tháng là 12 triệu VND.
  - Tổng nghĩa vụ nợ mới hàng tháng sẽ là: $3 + 12 = 15$ triệu VND.
  - Chỉ số $\text{DTI} = (15 / 30) \times 100\% = \mathbf{50\%}$.
  - Kết luận: Chỉ số DTI chạm ngưỡng tối đa cho phép. Để được duyệt hồ sơ, ngân hàng có thể yêu cầu anh An tất toán dứt điểm khoản trả góp xe máy hoặc kéo dài kỳ hạn vay mua nhà từ 15 năm lên 20 năm để hạ số tiền đóng hàng tháng xuống 9 triệu VND (đưa DTI về mức an toàn $40\%$).

**5. Ứng dụng & tranh luận**
- Ứng dụng: Tiêu chí lọc rủi ro then chốt nhất trong các quy định cấp tín dụng tiêu dùng có trách nhiệm (Responsible Lending) trên toàn cầu.
- Tranh luận: DTI có thể không công bằng đối với những người có thu nhập siêu cao; một người kiếm được 500 triệu/tháng thì dù DTI có lên tới 60% (trả nợ 300 triệu), họ vẫn còn dư 200 triệu tiền mặt để sinh hoạt dư dả, trong khi người có thu nhập 10 triệu/tháng thì DTI 40% (trả nợ 4 triệu) đã khiến họ rơi vào cảnh túng thiếu.
- Lỗi thường gặp: Chỉ tính các khoản nợ chính thức mà quên tính các khoản nợ người thân hoặc các nghĩa vụ bảo lãnh nợ cho người khác; ngân hàng kiểm tra dữ liệu CIC sẽ phát hiện toàn bộ các nghĩa vụ nợ phát sinh.

**6. Liên kết**
- [Khoản vay thế chấp nhà (Mortgage)](05_Consumer_and_Commercial_Loan_Types.md) · [Tỷ lệ LTV](#2-tỷ-lệ-khoản-vay-trên-giá-trị-tài-sản-loan-to-value-ratio---ltv) · [Hệ số DSCR](#3-hệ-số-khả-năng-trả-nợ-debt-service-coverage-ratio---dscr)

---

## 2. Tỷ lệ Khoản vay trên Giá trị Tài sản (Loan-to-Value Ratio - LTV)

**1. Là gì?**
Tỷ lệ Khoản vay trên Giá trị Tài sản (Loan-to-Value Ratio - LTV) là chỉ số thẩm định rủi ro tài chính đo lường tỷ lệ phần trăm giữa **số tiền cho vay của ngân hàng** so với **giá trị thẩm định thực tế của tài sản được sử dụng làm vật thế chấp bảo đảm** cho khoản vay đó (chủ yếu là bất động sản hoặc ô tô). LTV đo lường mức độ bảo vệ an toàn vốn của ngân hàng và xác định tỷ lệ vốn tự có đối ứng (Down payment) mà người đi vay bắt buộc phải tự bỏ ra. Nếu chỉ nhớ một điều: **LTV cho biết ngân hàng cho vay bao nhiêu phần trăm giá trị của căn nhà: LTV càng cao thì rủi ro cho ngân hàng càng lớn.**

**2. Hoạt động thế nào?**
- Ý nghĩa của LTV đối với hai bên:
  - *Đối với ngân hàng:* LTV xác lập "tấm đệm an toàn vốn" chống đỡ sự sụt giá của tài sản thế chấp. Nếu ngân hàng cho vay với $\text{LTV} = 70\%$, điều đó có nghĩa là ngay cả khi giá bất động sản trên thị trường bị giảm giá tới $30\%$, ngân hàng khi phát mại tài sản vẫn có khả năng thu hồi đủ $100\%$ số nợ gốc đã cho vay.
  - *Đối với người đi vay:* Phần chênh lệch $(100\% - \text{LTV})$ chính là số tiền vốn tự có mà người mua nhà phải tự tích lũy để trả trước.
- Mối liên hệ với lãi suất và điều kiện vay:
  - Khoản vay có $\text{LTV} \le 70\%$: Mức rủi ro thấp, người vay được hưởng lãi suất ưu đãi thấp nhất và thủ tục xét duyệt nhanh.
  - Khoản vay có $\text{LTV} > 80\%$: Rủi ro cao, ngân hàng bắt buộc người vay phải mua thêm **Bảo hiểm thế chấp tư nhân (PMI - Private Mortgage Insurance)** hàng tháng để bảo vệ cho phần rủi ro vượt mức này.

**3. Công thức & mô hình**
Công thức tính Tỷ lệ LTV:

$$
\text{LTV} = \frac{\text{Số tiền nợ vay giải ngân}}{\text{Giá trị thẩm định thị trường của Tài sản thế chấp}} \times 100\%
$$

Hiện tượng "Nợ âm vốn chủ sở hữu" (Underwater Mortgage / Negative Equity):
Phát sinh khi thị trường bất động sản đóng băng sụp đổ, khiến giá trị thị trường của căn nhà $V_t$ rớt xuống thấp hơn số dư nợ còn lại $D_t$:

$$
\text{LTV}_t = \frac{D_t}{V_t} > 100\% \iff \text{Equity} = V_t - D_t < 0
$$

Trong tình huống này, người vay mất hết động lực trả nợ và dễ dàng chấp nhận vứt bỏ căn nhà cho ngân hàng siết nợ.

**4. Ví dụ**
- Bạn mua một căn nhà có giá thỏa thuận là 2,5 tỷ VND. Công ty định giá của ngân hàng thẩm định căn nhà có giá trị thị trường chuẩn xác là 2,4 tỷ VND.
  - Quy định của ngân hàng áp dụng mức trần $\text{LTV} = 75\%$.
  - Số tiền tối đa ngân hàng giải ngân cho bạn là: $2,4 \times 75\% = \mathbf{1,8}$ tỷ VND.
  - Số tiền vốn tự có bạn bắt buộc phải có để thanh toán cho người bán nhà là: $2,5 - 1,8 = \mathbf{700}$ triệu VND (tương đương 28% giá mua).
- Bài học khủng hoảng 2008 tại Mỹ: Nhiều ngân hàng cạnh tranh bẩn đã tung ra các gói cho vay mua nhà với $\text{LTV} = 100\%$ (thậm chí $105\%$ bao gồm cả tiền thuế phí, người mua không cần bỏ ra một đồng vốn tự có nào); khi giá nhà giảm 20%, toàn bộ các khoản vay này lập tức bị âm vốn chủ sở hữu và kích hoạt làn sóng vỡ nợ hàng loạt lớn nhất lịch sử.
- Quy định tại Việt Nam: Ngân hàng Nhà nước gián tiếp kiểm soát tỷ lệ LTV thông qua việc quy định hệ số rủi ro áp dụng cho các khoản vay mua bất động sản có LTV cao (hệ số rủi ro tăng vọt lên tới 150% nếu cho vay bất động sản có LTV cao kết hợp giá trị lớn).

**5. Ứng dụng & tranh luận**
- Ứng dụng: Công cụ chính sách an toàn vĩ mô (Macroprudential tool) hàng đầu được các Ngân hàng Trung ương sử dụng để hạ nhiệt các cơn sốt đất (ví dụ: hạ trần LTV từ 80% xuống 60% để siết dòng vốn đầu cơ bất động sản).
- Tranh luận: Việc siết chặt trần LTV quá thấp (như chỉ cho vay 50–60%) khiến những người trẻ có thu nhập cao nhưng chưa kịp tích lũy đủ vốn ban đầu bị tước đoạt cơ hội mua nhà.
- Lỗi thường gặp: Tính LTV dựa trên giá người mua tự thỏa thuận; ngân hàng luôn tính LTV dựa trên **Giá trị do tổ chức thẩm định giá độc lập xác định**, con số này thường thấp hơn giá thị trường từ 10% đến 20% để bảo đảm an toàn.

**6. Liên kết**
- [Khoản vay thế chấp nhà (Mortgage)](05_Consumer_and_Commercial_Loan_Types.md) · [Tài sản bảo đảm](04_Loan_Structures_and_Collateral.md) · [Tỷ lệ DTI](#1-tỷ-lệ-nợ-trên-thu-nhập-debt-to-income-ratio---dti)

---

## 3. Hệ số Khả năng Trả nợ (Debt Service Coverage Ratio - DSCR)

**1. Là gì?**
Hệ số Khả năng Trả nợ (Debt Service Coverage Ratio - DSCR) là chỉ số tài chính doanh nghiệp chuẩn mực đo lường tỷ lệ giữa **dòng tiền thuần từ hoạt động kinh doanh (hoặc lợi nhuận hoạt động ròng - Net Operating Income / EBITDA)** mà một doanh nghiệp hoặc một dự án tạo ra so với **tổng toàn bộ nghĩa vụ dịch vụ nợ bắt buộc phải trả (bao gồm cả tiền nợ gốc và tiền lãi)** trong cùng kỳ hạn đó. Trong khi DTI là thước đo cho cá nhân, thì DSCR là **thước đo sinh tử số 1 cho các khoản vay doanh nghiệp và tài trợ dự án**. Nếu chỉ nhớ một điều: **DSCR cho biết dòng tiền kinh doanh làm ra có gấp bao nhiêu lần số tiền nợ gốc và lãi phải trả cho ngân hàng.**

**2. Hoạt động thế nào?**
- Phân tích các ngưỡng giá trị của DSCR:
  - **$\text{DSCR} < 1,0$ (Báo động đỏ):** Dòng tiền kinh doanh tạo ra không đủ để trả nợ. Doanh nghiệp bị thiếu hụt dòng tiền thuần (âm dòng tiền trả nợ) và bắt buộc phải lấy tiền tiết kiệm cũ, bán bớt tài sản hoặc đi vay nợ mới để trả nợ cũ.
  - **$\text{DSCR} = 1,0$ (Ranh giới hòa vốn):** Dòng tiền làm ra vừa khít 100% để trả nợ, không còn dư một đồng nào để tái đầu tư hay dự phòng rủi ro.
  - **$\text{DSCR} \ge 1,25 - 1,50$ (Vùng an toàn chuẩn mực):** Dòng tiền kinh doanh vượt từ $25\%$ đến $50\%$ nghĩa vụ nợ, tạo một vùng đệm an toàn (Buffer) vững chắc giúp doanh nghiệp vẫn trả đủ nợ cho ngân hàng ngay cả khi doanh thu bị sụt giảm.
- Điều khoản ràng buộc duy trì DSCR (DSCR Covenant): Các ngân hàng luôn đưa điều khoản bắt buộc doanh nghiệp phải duy trì $\text{DSCR} \ge 1,20$ trong suốt thời gian vay; nếu báo cáo tài chính kiểm toán cuối năm cho thấy DSCR tụt xuống dưới ngưỡng này, ngân hàng có quyền yêu cầu doanh nghiệp phải nộp thêm tài sản thế chấp hoặc thu hồi nợ trước hạn.

**3. Công thức & mô hình**
Công thức tính Hệ số DSCR cho doanh nghiệp và dự án:

$$
\text{DSCR} = \frac{\text{Lợi nhuận hoạt động ròng (NOI) hoặc EBITDA}}{\text{Nghĩa vụ dịch vụ nợ (Debt Service)}} = \frac{\text{NOI}}{\text{Trả nợ gốc trong kỳ} + \text{Chi phí trả lãi vay}}
$$

Đối với dự án bất động sản cho thuê:
$$
\text{NOI} = \text{Tổng doanh thu tiền thuê tiềm năng} - \text{Tổn thất trống phòng} - \text{Chi phí vận hành tòa nhà}
$$

**4. Ví dụ**
- Ví dụ thẩm định dự án cho vay khách sạn: Một khách sạn tại Đà Nẵng nộp hồ sơ xin vay vốn ngân hàng:
  - Doanh thu kinh doanh phòng và dịch vụ sau chi phí vận hành (NOI) dự kiến đạt: 15 tỷ VND/năm.
  - Nghĩa vụ trả nợ ngân hàng hàng năm: Nợ gốc 8 tỷ + Tiền lãi 2 tỷ = Tổng nghĩa vụ nợ 10 tỷ VND/năm.
  - Hệ số $\text{DSCR} = 15 / 10 = \mathbf{1,50}$.
  - Kết luận: Dự án có dòng tiền trả nợ rất an toàn, ngân hàng phê duyệt giải ngân.
- Tình huống khủng hoảng đại dịch COVID-19: Khi hoạt động du lịch tê liệt, NOI của khách sạn giảm xuống chỉ còn 6 tỷ VND trong khi nợ phải trả vẫn là 10 tỷ VND. Hệ số $\text{DSCR} = 6 / 10 = \mathbf{0,60} < 1,0$. Khách sạn bị mất khả năng trả nợ, buộc phải xin ngân hàng cơ cấu lại thời hạn trả nợ.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Tiêu chí cốt lõi trong tài trợ vốn dự án (Project Finance), cho vay mua lại có đòn bẩy (LBO) và phát hành trái phiếu doanh nghiệp.
- Tranh luận: Việc sử dụng EBITDA để tính DSCR có thể bị thổi phồng do bỏ qua các khoản chi phí vốn đầu tư bảo trì tài sản cố định (Capex) và thuế thu nhập doanh nghiệp bắt buộc; nhiều ngân hàng thận trọng yêu cầu sử dụng Dòng tiền tự do (Free Cash Flow - FCF) thay cho EBITDA.
- Lỗi thường gặp: Chỉ nhìn vào Lợi nhuận kế toán (Net Income) để đánh giá khả năng trả nợ; lợi nhuận kế toán có thể rất cao nhưng tiền thực tế đang bị kẹt ở các khoản phải thu khách hàng chưa thu được tiền mặt, khiến doanh nghiệp vẫn bị vỡ nợ dù trên sổ sách báo lãi lớn.

**6. Liên kết**
- [Khoản vay doanh nghiệp](05_Consumer_and_Commercial_Loan_Types.md) · [Điều khoản ràng buộc nợ (Covenants)](09_Loan_Covenants_Refinancing_and_Restructuring.md) · [Rủi ro vỡ nợ](#4-rủi-ro-vỡ-nợ-default-risk)

---

## 4. Rủi ro Vỡ nợ (Default Risk)

**1. Là gì?**
Rủi ro Vỡ nợ (Default Risk / Credit Risk) là xác suất hoặc khả năng xảy ra biến cố tiêu cực mà trong đó bên đi vay (cá nhân, doanh nghiệp hoặc chính phủ phát hành công cụ nợ) **không có khả năng hoặc cố tình không thực hiện đầy đủ và đúng hạn các cam kết thanh toán nợ gốc hoặc tiền lãi** theo các điều khoản đã thỏa thuận trong hợp đồng tín dụng. Khi biến cố vỡ nợ xảy ra, bên cho vay phải đối mặt với nguy cơ bị tổn thất một phần hoặc toàn bộ số vốn đã giải ngân. Nếu chỉ nhớ một điều: **Rủi ro vỡ nợ là nguy cơ con nợ "bùng nợ" hoặc phá sản không trả lại tiền cho bạn.**

**2. Hoạt động thế nào?**
- Hai hình thức vỡ nợ:
  1. *Vỡ nợ kỹ thuật (Technical Default):* Người vay vi phạm một điều khoản ràng buộc trong hợp đồng tín dụng (như không duy trì đủ tỷ số DSCR hoặc tỷ lệ đòn bẩy cam kết) dù họ vẫn đang trả đủ tiền lãi hàng tháng.
  2. *Vỡ nợ thanh toán (Payment Default):* Người vay thực sự không còn tiền để thanh toán nợ gốc hoặc lãi khi đến hạn (nghiêm trọng nhất).
- Tổn thất dự kiến (Expected Loss - EL) trong quản trị rủi ro ngân hàng:
  Ngân hàng lượng hóa rủi ro vỡ nợ thông qua tích số của 3 biến lượng chuẩn mực:
  - **PD (Probability of Default):** Xác suất người vay sẽ vỡ nợ trong vòng 1 năm tới (tính theo %).
  - **EAD (Exposure at Default):** Tổng số dư nợ chịu rủi ro tại thời điểm người vay vỡ nợ.
  - **LGD (Loss Given Default):** Tỷ lệ tổn thất thực tế sau khi đã phát mại tài sản bảo đảm thu hồi vốn.

**3. Công thức & mô hình**
Phương trình tính Tổn thất Tín dụng Dự kiến (Expected Credit Loss - ECL):

$$
\text{ECL} = \text{PD} \times \text{EAD} \times \text{LGD}
$$

Mô hình Khoảng cách đến Vỡ nợ của Merton (Merton's Distance to Default):

$$
DD = \frac{\ln(V_0 / D) + (\mu - \sigma_V^2/2)T}{\sigma_V \sqrt{T}}
$$

Xác suất vỡ nợ lý thuyết: $PD = \mathcal{N}(-DD)$. Khoảng cách $DD$ càng nhỏ thì nguy cơ vỡ nợ của doanh nghiệp càng cao.

**4. Ví dụ**
- Vỡ nợ trái phiếu doanh nghiệp tại Việt Nam (2022–2023): Nhiều tập đoàn bất động sản lớn không thể thu xếp được dòng tiền thanh toán nợ gốc và lãi cho các lô trái phiếu đến hạn, buộc phải công bố chậm thanh toán và xin đàm phán gia hạn kỳ hạn trái phiếu theo Nghị định 08/2023/NĐ-CP của Chính phủ.
- Vỡ nợ Quốc gia (Sovereign Default): Argentina là "kỷ lục gia" vỡ nợ quốc gia với 9 lần tuyên bố vỡ nợ trong lịch sử, gần đây nhất là năm 2020 khi không thể thanh toán khoản nợ trái phiếu quốc tế trị giá 65 tỷ USD.
- Phí phòng ngừa rủi ro vỡ nợ (Credit Default Swap - CDS): Thị trường tài chính giao dịch các hợp đồng bảo hiểm rủi ro vỡ nợ CDS; khi rủi ro vỡ nợ của một chính phủ hoặc tập đoàn tăng cao, giá hợp đồng CDS sẽ tăng vọt tương ứng.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Định giá lãi suất cho vay (khoản vay rủi ro vỡ nợ càng cao thì lãi suất càng đắt), xác định hạn mức cấp tín dụng và trích lập quỹ dự phòng rủi ro theo chuẩn mực IFRS 9.
- Tranh luận: Vỡ nợ chiến lược (Strategic Default) - Khi giá trị căn nhà giảm sâu dưới số nợ còn lại (nợ âm vốn), người vay dù vẫn có thừa tiền trong tài khoản nhưng chủ động chọn giải pháp vỡ nợ, vứt bỏ căn nhà cho ngân hàng vì tính toán thấy việc tiếp tục trả nợ gây thiệt hại tài chính lớn hơn.
- Lỗi thường gặp: Đánh đồng rủi ro vỡ nợ với tổn thất mất trắng 100%; ngay cả khi con nợ vỡ nợ hoàn toàn, ngân hàng vẫn có thể thu hồi lại được phần lớn vốn thông qua việc phát mại tài sản thế chấp (tỷ lệ thu hồi Recovery Rate).

**6. Liên kết**
- [Tình trạng chậm trả](#5-tình-trạng-chậm-trả--quá-hạn-nợ-delinquency) · [Xếp hạng tín nhiệm](07_Credit_Assessment_and_Scoring.md) · [Dự phòng rủi ro](../03_Banking_Systems/05_Profitability_Credit_Quality_and_Cost_of_Funds.md)

---

## 5. Tình trạng Chậm trả / Quá hạn Nợ (Delinquency)

**1. Là gì?**
Tình trạng Chậm trả / Quá hạn Nợ (Delinquency) là trạng thái mà một người đi vay **chưa thanh toán số tiền nợ gốc hoặc tiền lãi tối thiểu bắt buộc vào đúng ngày đến hạn thanh toán (Payment Due Date)** theo thỏa thuận trong hợp đồng tín dụng, nhưng **chưa đến mức bị coi là vỡ nợ hoàn toàn (Default)**. Chậm trả là phát súng cảnh báo sớm đầu tiên về sự suy giảm sức khỏe tài chính của người vay. Nếu chỉ nhớ một điều: **Chậm trả là việc bạn đóng tiền trễ hạn: mới chỉ là vi phạm lịch trình chứ chưa phải là mất trắng khoản nợ.**

**2. Hoạt động thế nào?**
- Phân loại mức độ chậm trả theo "Xô quá hạn" (Delinquency Buckets) chuẩn mực quốc tế:
  - *Quá hạn 1–30 ngày (30 DPD - Days Past Due):* Thường do sơ suất quên ngày thanh toán; ngân hàng gửi tin nhắn SMS, gọi điện nhắc nợ nhẹ nhàng và áp mức phí phạt chậm thanh toán (Late fee).
  - *Quá hạn 31–60 ngày (60 DPD):* Bắt đầu có dấu hiệu khó khăn tài chính thực sự; điểm tín dụng bị trừ điểm nặng, ngân hàng chuyển hồ sơ sang bộ phận xử lý nợ sớm.
  - *Quá hạn 61–90 ngày (90 DPD):* Mức độ cảnh báo nghiêm trọng; ngân hàng khóa toàn bộ hạn mức thẻ tín dụng và ngừng cấp tín dụng mới.
  - *Quá hạn trên 90 ngày (90+ DPD):* Chuyển hóa chính thức từ "Chậm trả" (Delinquency) thành **"Nợ xấu / Vỡ nợ" (Default / NPL)**; ngân hàng khởi động quy trình thu hồi nợ pháp lý hoặc phát mại tài sản thế chấp.
- Hệ quả đối với người vay: Bị tính lãi phạt quá hạn (thường bằng $150\%$ lãi suất trong hạn đối với phần gốc chậm trả theo luật định) và bị ghi nhận thông tin tiêu cực lên hệ thống CIC.

**3. Công thức & mô hình**
Lãi phạt chậm trả nợ gốc quá hạn theo quy định pháp luật Việt Nam (Thông tư 39/2016/TT-NHNN):

$$
i_{\text{quá hạn}} = 150\% \times i_{\text{trong hạn hợp đồng}}
$$

Tỷ lệ nợ chậm trả toàn hệ thống (Delinquency Rate):

$$
\text{Delinquency Rate} = \frac{\text{Tổng dư nợ các khoản vay quá hạn từ 30 ngày trở lên}}{\text{Tổng dư nợ toàn bộ danh mục cho vay}} \times 100\%
$$

Đây là chỉ báo dẫn dắt (Leading Indicator) xuất hiện trước khi tỷ lệ nợ xấu (NPL) bùng phát từ 2 đến 3 tháng.

**4. Ví dụ**
- Ví dụ thanh toán thẻ tín dụng: Ngày đến hạn thanh toán là ngày 5 hàng tháng. Đến ngày 6 bạn vẫn chưa nộp tiền.
  - Ngày 6: Khoản vay của bạn chính thức rơi vào trạng thái "Chậm trả 1 ngày". Ngân hàng áp ngay mức phí phạt chậm trả (thường khoảng 4–5% số tiền chậm trả, tối thiểu 100.000–200.000 VND).
  - Nếu đến ngày 16 (chậm 10 ngày) bạn mới nộp tiền: Khoản nợ bị chuyển từ Nợ nhóm 1 sang Nợ nhóm 2 (Nợ cần chú ý) trên hệ thống CIC, ảnh hưởng trực tiếp đến uy tín tín dụng trong 12 tháng tiếp theo.
- Tỷ lệ nợ chậm trả vay mua ô tô tại Mỹ: Đầu năm 2024, tỷ lệ nợ vay mua ô tô quá hạn trên 60 ngày tại Mỹ tăng lên mức kỷ lục 2,2% (cao nhất kể từ cuộc khủng hoảng tài chính 2008) do lạm phát bào mòn thu nhập của người lao động có thu nhập thấp.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Chỉ báo cảnh báo sớm (Early Warning Signal) để các ngân hàng chủ động liên hệ cơ cấu lại nợ cho khách hàng trước khi khoản vay biến thành nợ xấu mất vốn.
- Tranh luận: Phí phạt chậm trả quá cao - Chính quyền Tổng thống Mỹ Joe Biden năm 2024 đã thông qua quy định hạn chế mức phí phạt chậm trả thẻ tín dụng tối đa chỉ còn 8 USD (thay vì mức 32 USD trước đây) để bảo vệ người tiêu dùng nghèo.
- Lỗi thường gặp: Đồng nhất chậm trả với vỡ nợ; một khoản vay chậm trả 5 ngày chỉ cần thanh toán đầy đủ cả gốc, lãi và phí phạt thì khoản vay sẽ ngay lập tức trở lại trạng thái bình thường mà không bị coi là vỡ nợ.

**6. Liên kết**
- [Rủi ro vỡ nợ](#4-rủi-ro-vỡ-nợ-default-risk) · [Nợ xấu (NPL)](../03_Banking_Systems/05_Profitability_Credit_Quality_and_Cost_of_Funds.md) · [Tái cơ cấu nợ](09_Loan_Covenants_Refinancing_and_Restructuring.md)

---

## Câu hỏi tự kiểm tra

1. Phân biệt sự khác nhau giữa Tỷ lệ DTI đầu trước (Front-End) và DTI đầu sau (Back-End) trong thẩm định khoản vay mua nhà cá nhân.
2. Tại sao tỷ lệ LTV càng cao thì rủi ro mất vốn của ngân hàng càng lớn? Hiện tượng "Nợ âm vốn chủ sở hữu" (Negative Equity) phát sinh khi nào?
3. Trình bày công thức tính Hệ số Khả năng Trả nợ (DSCR) cho một doanh nghiệp. Ý nghĩa của ngưỡng an toàn DSCR $\ge 1,25$ là gì?
4. Tổn thất Tín dụng Dự kiến (ECL) được tính toán dựa trên ba tham số PD, EAD và LGD như thế nào theo chuẩn mực quản trị rủi ro hiện đại?
5. Phân biệt ranh giới giữa Tình trạng Chậm trả (Delinquency) và Biến cố Vỡ nợ (Default). Các mốc thời gian quá hạn nào có tính chất quyết định?

---

## Ghi chú nguồn

- Basel Committee on Banking Supervision (BCBS): *International Convergence of Capital Measurement and Capital Standards (Credit Risk Parameters)*.
- Consumer Financial Protection Bureau (CFPB): *Ability-to-Repay and Qualified Mortgage Rule (ATR/QM Rule)*.
- Ngân hàng Nhà nước Việt Nam: Thông tư số 39/2016/TT-NHNN và Thông tư số 11/2021/TT-NHNN.
- Altman, E. I. (1968). "Financial Ratios, Discriminant Analysis and the Prediction of Corporate Bankruptcy", *The Journal of Finance*.