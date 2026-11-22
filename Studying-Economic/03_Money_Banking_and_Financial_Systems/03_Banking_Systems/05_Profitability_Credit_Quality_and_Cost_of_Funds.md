# Chuyên đề 3.5: Khả năng Sinh lời, Chi phí Vốn và Chất lượng Tín dụng Ngân hàng

Chuyên đề này phân tích các chỉ số tài chính sống còn quyết định hiệu quả kinh doanh và độ an toàn của một ngân hàng thương mại: từ cơ chế đòn bẩy của hệ thống dự trữ phân đoạn, Thu nhập lãi thuần (NII), Biên lãi ròng (NIM), Chi phí vốn (COF), cho đến thước đo rủi ro cốt tử: Nợ xấu (NPL) và Dự phòng rủi ro cho vay.

> Câu hỏi xuyên suốt: Bằng cách nào một ngân hàng thương mại có thể tối ưu hóa biên lãi ròng (NIM) mà không phải đánh đổi bằng sự gia tăng nguy hiểm của tỷ lệ nợ xấu (NPL)?

---

## 1. Ngân hàng Dự trữ Phân đoạn dưới góc độ Tác nghiệp (Fractional Reserve Banking)

**1. Là gì?**
Ngân hàng Dự trữ Phân đoạn (Fractional Reserve Banking - xét dưới góc độ quản trị tác nghiệp của ngân hàng thương mại) là mô hình kinh doanh mà ngân hàng chỉ duy trì một phần nhỏ tổng tài sản nhận gửi dưới dạng tiền mặt thanh khoản, trong khi phân bổ phần lớn nguồn vốn huy động vào các tài sản sinh lời kém thanh khoản hơn (như các hợp đồng cho vay dài hạn và chứng khoán đầu tư). Mô hình này tạo ra sự **mất cân xứng kỳ hạn (Maturity Mismatch)** có chủ đích: chuyển hóa nguồn vốn tiền gửi ngắn hạn thành các khoản tài trợ dài hạn để hưởng mức chênh lệch lãi suất kỳ hạn cao. Nếu chỉ nhớ một điều: **Dự trữ phân đoạn là cỗ máy tạo ra lợi nhuận cho ngân hàng nhờ chấp nhận rủi ro mất cân xứng kỳ hạn giữa huy động và cho vay.**

**2. Hoạt động thế nào?**
- Ngân hàng tính toán xác suất rút tiền hàng ngày của người gửi tiền dựa trên quy luật số lớn (Law of Large Numbers): Khi có hàng triệu khách hàng, dòng tiền người nộp vào và người rút ra có xu hướng tự triệt tiêu lẫn nhau, chỉ cần giữ lại một tỷ lệ dự trữ phân đoạn nhỏ (3–10%) là đủ đáp ứng biến động thông thường.
- Phần vốn còn lại (90–97%) được đem cho vay với lãi suất cao hơn nhiều so với lãi suất huy động.
- Lợi ích: Cung cấp nguồn vốn dồi dào, giá rẻ cho nền kinh tế, thúc đẩy đầu tư vốn cố định.
- Điểm yếu cố hữu: Nếu giả định "người gửi tiền hành động độc lập" bị phá vỡ (khi có tin đồn hoảng loạn khiến mọi người cùng hành động đồng loạt), mô hình dự trữ phân đoạn sẽ lập tức bị gãy đổ thanh khoản.

**3. Công thức & mô hình**
Khoảng lệch kỳ hạn bình quân (Duration Gap) phản ánh mức độ rủi ro mất cân xứng kỳ hạn:

$$
\text{Duration Gap} = D_A - \left(\frac{L}{A}\right) D_L
$$

Trong đó $D_A$ là thời lượng bình quân của tài sản có (cho vay 5–20 năm), $D_L$ là thời lượng của nợ phải trả (tiền gửi 3–12 tháng), và $L/A$ là tỷ lệ nợ trên tài sản. Khi $\text{Duration Gap} > 0$, nếu lãi suất thị trường tăng lên, giá trị thị trường của vốn chủ sở hữu ngân hàng sẽ sụt giảm mạnh.

**4. Ví dụ**
- Một ngân hàng huy động 100.000 tỷ VND tiền gửi tiết kiệm có kỳ hạn bình quân 6 tháng với lãi suất 5%/năm. Ngân hàng giữ lại 3.000 tỷ VND (3%) dự trữ thanh khoản, đem 97.000 tỷ VND còn lại cho vay mua nhà kỳ hạn bình quân 15 năm với lãi suất 9%/năm.
- Ngân hàng hưởng khoản chênh lệch lãi suất hấp dẫn 4%/năm trên 97.000 tỷ VND dư nợ.
- Tình huống rủi ro: Nếu sau 6 tháng lãi suất thị trường tăng vọt lên 8%, người gửi tiền rút ra yêu cầu lãi suất mới, trong khi các khoản cho vay mua nhà kỳ hạn 15 năm chưa thể thu hồi vốn và khó tăng lãi suất cho vay ngay lập tức, đẩy ngân hàng vào tình trạng căng thẳng dòng tiền.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Thiết kế các chiến lược quản trị Tài sản - Nợ (ALM - Asset Liability Management) và xây dựng kế hoạch dự phòng thanh khoản.
- Tranh luận: Nhiều nhà kinh tế học phê phán mô hình này là cội nguồn của mọi cuộc khủng hoảng kinh tế chu kỳ; tuy nhiên nếu không có dự trữ phân đoạn, nền kinh tế sẽ bị thiếu hụt vốn nghiêm trọng và chi phí vay vốn đầu tư sẽ cực kỳ đắt đỏ.
- Lỗi thường gặp: Cho rằng ngân hàng giấu giếm việc đem tiền gửi đi cho vay; đây là nguyên lý hoạt động hợp pháp và công khai được toàn bộ hệ thống luật pháp quốc tế công nhận và bảo vệ.

**6. Liên kết**
- [Bảng cân đối ngân hàng](04_Bank_Balance_Sheet_Reserves_and_Capital.md) · [Đột biến rút tiền](06_Bank_Runs_Failures_and_Resolution.md) · [Chi phí vốn (COF)](#4-chi-phí-vốn-huy-động-cost-of-funds---cof)

---

## 2. Thu nhập Lãi thuần (Net Interest Income - NII)

**1. Là gì?**
Thu nhập Lãi thuần (Net Interest Income - NII) là chỉ tiêu lợi nhuận tuyệt đối đo lường chênh lệch giữa tổng thu nhập từ lãi mà ngân hàng thu được từ các tài sản sinh lời (cho vay khách hàng, đầu tư trái phiếu, tiền gửi liên ngân hàng) và tổng chi phí trả lãi mà ngân hàng phải thanh toán cho các nguồn vốn huy động (tiền gửi của người dân, nợ vay liên ngân hàng, giấy tờ có giá phát hành). Đối với hầu hết các ngân hàng thương mại, NII chiếm từ **70% đến 85% tổng thu nhập hoạt động**, là cỗ máy kiếm tiền chủ đạo của toàn bộ hệ thống. Nếu chỉ nhớ một điều: **Thu nhập lãi thuần là số tiền lãi ròng còn lại sau khi lấy toàn bộ tiền lãi thu về trừ đi tiền lãi phải trả.**

**2. Hoạt động thế nào?**
- NII tăng trưởng dựa trên hai động lực chính:
  1. *Quy mô tài sản sinh lời mở rộng:* Dư nợ tín dụng tăng trưởng mạnh, ngân hàng cho vay được nhiều tiền hơn.
  2. *Chênh lệch lãi suất nới rộng:* Ngân hàng cho vay với lãi suất cao trong khi duy trì được chi phí huy động vốn thấp (nhờ tỷ lệ CASA cao).
- Rủi ro đối với NII: Khi nền kinh tế suy thoái, nợ xấu tăng cao khiến ngân hàng không thu được lãi cho vay (phải thoái thu lãi), trong khi vẫn bắt buộc phải trả đủ tiền lãi cho người gửi tiền, làm NII bị sụt giảm nghiêm trọng.

**3. Công thức & mô hình**
Công thức xác định Thu nhập Lãi thuần:

$$
\text{NII} = \text{Thu nhập từ lãi (Interest Income)} - \text{Chi phí trả lãi (Interest Expense)}
$$

Chi tiết:

$$
\text{NII} = \sum_{j} A_j \cdot r_{A,j} - \sum_{k} L_k \cdot r_{L,k}
$$

Trong đó $A_j$ là các loại tài sản sinh lời có lợi suất $r_{A,j}$; $L_k$ là các khoản nợ chịu lãi với chi phí $r_{L,k}$.

**4. Ví dụ**
- Báo cáo kết quả kinh doanh của Vietcombank năm 2023:
  - Thu nhập từ lãi và các khoản thu nhập tương tự: ~110.000 tỷ VND.
  - Chi phí trả lãi và các chi phí tương tự: ~56.000 tỷ VND.
  - Thu nhập lãi thuần (NII): $110.000 - 56.000 = 54.000$ tỷ VND (đóng góp hơn 79% trong tổng thu nhập hoạt động của ngân hàng).
- Ví dụ số minh họa: Nếu ngân hàng tăng trưởng dư nợ cho vay thêm $10\%$ (từ 100.000 tỷ lên 110.000 tỷ VND) với lãi suất cho vay không đổi 9%, trong khi chi phí huy động giữ nguyên, NII sẽ tăng thêm: $10.000 \times 9\% = 900$ tỷ VND.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Chỉ tiêu cốt lõi để phân tích tăng trưởng doanh thu của ngân hàng trong các báo cáo phân tích tài chính.
- Tranh luận: Xu hướng phụ thuộc quá lớn vào NII khiến các ngân hàng thương mại dễ bị tổn thương khi chu kỳ lãi suất đảo chiều; các cơ quan quản lý luôn khuyến khích ngân hàng tăng tỷ trọng thu nhập từ phí dịch vụ phi tín dụng (Non-interest income) để danh mục lợi nhuận bền vững hơn.
- Lỗi thường gặp: Nhầm NII với Lợi nhuận trước thuế; từ NII ngân hàng còn phải trừ đi chi phí hoạt động (CIR) và chi phí trích lập dự phòng rủi ro tín dụng thì mới ra lợi nhuận thuần trước thuế.

**6. Liên kết**
- [Biên lãi ròng (NIM)](#3-biên-lãi-ròng-net-interest-margin---nim) · [Chi phí vốn (COF)](#4-chi-phí-vốn-huy-động-cost-of-funds---cof) · [Dự phòng rủi ro](#6-dự-phòng-rủi-ro-tín-dụng-loan-loss-provision)

---

## 3. Biên Lãi ròng (Net Interest Margin - NIM)

**1. Là gì?**
Biên Lãi ròng (Net Interest Margin - NIM) là chỉ số tương đối đo lường tỷ lệ phần trăm giữa Thu nhập lãi thuần (NII) mà ngân hàng tạo ra trên tổng quy mô Tài sản sinh lời bình quân (Average Earning Assets) trong một chu kỳ kế toán (thường là 1 năm). NIM là thước đo quan trọng nhất phản ánh **hiệu quả sử dụng vốn, năng lực định giá cho vay và khả năng tối ưu hóa chi phí huy động** của ban điều hành ngân hàng. Nếu chỉ nhớ một điều: **NIM cho biết trên 100 đồng tài sản sinh lời, ngân hàng kiếm được bao nhiêu đồng lãi ròng sau khi đã trừ chi phí vốn.**

**2. Hoạt động thế nào?**
- Các yếu tố quyết định NIM:
  1. *Lợi suất sinh lời của tài sản (Yield on Assets - YEA):* Khẩu vị rủi ro của ngân hàng; cho vay bán lẻ tiêu dùng và SME thường có lợi suất cao hơn cho vay tập đoàn nhà nước lớn.
  2. *Chi phí vốn huy động (Cost of Funds - COF):* Ngân hàng có tỷ lệ tiền gửi không kỳ hạn (CASA) cao sẽ có COF thấp, giúp mở rộng NIM.
  3. *Chu kỳ lãi suất vĩ mô:* Trong giai đoạn lãi suất giảm, nếu lãi suất cho vay giảm chậm hơn lãi suất huy động, NIM sẽ tạm thời nới rộng; ngược lại khi lãi suất tăng mà ngân hàng không thể chuyển hết chi phí sang khách hàng vay, NIM sẽ bị bóp nghẹt.
- Cạnh tranh thị trường: Khi các ngân hàng cạnh tranh gay gắt hạ lãi suất cho vay để giành giật khách hàng tốt, NIM toàn ngành sẽ chịu áp lực sụt giảm.

**3. Công thức & mô hình**
Công thức tính Biên Lãi ròng (NIM):

$$
\text{NIM} = \frac{\text{Thu nhập lãi thuần (NII)}}{\text{Tài sản sinh lời bình quân (Earning Assets)}} \times 100\%
$$

Phân rã thành chênh lệch lợi suất:

$$
\text{NIM} \approx \text{Yield on Earning Assets} - \text{Cost of Funds} = \frac{\text{Interest Income}}{\text{Earning Assets}} - \frac{\text{Interest Expense}}{\text{Funding Liabilities}}
$$

**4. Ví dụ**
- Bức tranh NIM tại hệ thống ngân hàng Việt Nam (2022–2023):
  - Nhóm ngân hàng có NIM cao nhất (trên $4,5\% - 5,5\%$): VPBank, MB, HDBank, Techcombank nhờ chiến lược tập trung mạnh vào tín dụng tiêu dùng, bán lẻ và duy trì tỷ lệ CASA vượt trội.
  - Nhóm ngân hàng quốc doanh (Big 4): Duy trì NIM khiêm tốn hơn, dao động quanh mức $2,8\% - 3,3\%$ do chủ yếu cho vay các doanh nghiệp lớn, dự án trọng điểm quốc gia với lãi suất ưu đãi.
- Ví dụ số minh họa: Một ngân hàng có Tài sản sinh lời bình quân 200.000 tỷ VND, tạo ra NII là 7.000 tỷ VND trong năm. Chỉ số $\text{NIM} = 7.000 / 200.000 = 3,5\%$. Nếu NIM năm sau giảm xuống $3,0\%$ do phải hạ lãi suất cho vay hỗ trợ khách hàng, NII của ngân hàng sẽ mất ngay 1.000 tỷ VND.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Chỉ báo hàng đầu để các quỹ đầu tư định giá và lựa chọn cổ phiếu ngành ngân hàng.
- Tranh luận: Đánh đổi giữa NIM cao và Rủi ro nợ xấu - Ngân hàng có thể dễ dàng tăng NIM bằng cách đẩy mạnh cho vay tiêu dùng tín chấp dưới chuẩn hoặc cho vay các dự án bất động sản rủi ro cao với lãi suất 14–16%; nhưng khi kinh tế suy thoái, nợ xấu bùng nổ sẽ xóa sạch mọi khoản lãi có được từ NIM cao.
- Lỗi thường gặp: So sánh trực tiếp NIM giữa các ngân hàng có mô hình kinh doanh khác nhau; không thể so sánh trực tiếp NIM của một ngân hàng thuần bán buôn (như VCB) với một ngân hàng có công ty tài chính tiêu dùng (như VPBank với FE Credit).

**6. Liên kết**
- [Thu nhập lãi thuần (NII)](#2-thu-nhập-lãi-thuần-net-interest-income---nii) · [Chi phí vốn (COF)](#4-chi-phí-vốn-huy-động-cost-of-funds---cof) · [Nợ xấu (NPL)](#5-nợ-xấu-ngân-hàng-non-performing-loans---npl)

---

## 4. Chi phí Vốn Huy động (Cost of Funds - COF)

**1. Là gì?**
Chi phí Vốn Huy động (Cost of Funds - COF) là tỷ lệ phần trăm đo lường mức chi phí lãi suất bình quân mà một ngân hàng thương mại phải chi trả để huy động và duy trì các nguồn vốn nợ phục vụ cho hoạt động kinh doanh (bao gồm tiền gửi của người dân, tiền gửi doanh nghiệp, vay mượn thị trường liên ngân hàng và phát hành giấy tờ có giá). COF phản ánh trực tiếp năng lực cạnh tranh về nguồn vốn đầu vào của ngân hàng. Nếu chỉ nhớ một điều: **COF là "giá vốn hàng bán" đầu vào của ngân hàng; COF càng thấp thì ngân hàng càng có lợi thế cạnh tranh áp đảo.**

**2. Hoạt động thế nào?**
- COF chịu tác động bởi 3 yếu tố cốt lõi:
  1. *Mặt bằng lãi suất điều hành của Ngân hàng Trung ương:* Khi NHTW nới lỏng hạ lãi suất, lãi suất huy động toàn thị trường giảm kéo theo COF giảm.
  2. *Cơ cấu nguồn vốn huy động:* Tỷ trọng tiền gửi không kỳ hạn (CASA) có lãi suất gần bằng 0% càng cao thì COF càng thấp. Ngân hàng phụ thuộc nhiều vào chứng chỉ tiền gửi lãi suất cao hoặc vay liên ngân hàng sẽ có COF đắt đỏ.
  3. *Uy tín thương hiệu và mạng lưới chi nhánh:* Các ngân hàng quốc doanh lớn có uy tín thương hiệu vững chắc nên người dân sẵn sàng gửi tiền với lãi suất thấp hơn ngân hàng nhỏ từ 0,5% đến 1,5%/năm, giúp họ sở hữu COF rất thấp.

**3. Công thức & mô hình**
Công thức tính Chi phí Vốn Huy động:

$$
\text{COF} = \frac{\text{Tổng chi phí trả lãi (Interest Expenses)}}{\text{Tổng nguồn vốn nợ chịu lãi bình quân (Average Interest-bearing Liabilities)}} \times 100\%
$$

Cơ cấu phân rã tỷ trọng nguồn vốn ($w_i$):

$$
\text{COF} = \sum_{i=1}^{n} w_i \times r_i = w_{\text{CASA}} \cdot r_{\text{CASA}} + w_{\text{Term}} \cdot r_{\text{Term}} + w_{\text{CDs}} \cdot r_{\text{CDs}} + w_{\text{Interbank}} \cdot r_{\text{Interbank}}
$$

**4. Ví dụ**
- Năm 2023 tại Việt Nam:
  - Vietcombank duy trì mức COF thấp nhất toàn hệ thống (khoảng 3,2%–3,6%) nhờ uy tín thương hiệu và tỷ lệ CASA cao.
  - Các ngân hàng thương mại cổ phần nhỏ thiếu lợi thế mạng lưới phải huy động tiền gửi kỳ hạn dài với lãi suất cao có mức COF lên tới 6,5%–7,5%.
- Do có COF rẻ hơn 3%, Vietcombank có thể sẵn sàng cho các tập đoàn lớn vay vốn với lãi suất 6%/năm mà vẫn có lãi; trong khi ngân hàng nhỏ nếu cho vay lãi suất 6% sẽ bị lỗ nặng so với giá vốn đầu vào.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Giúp phòng Quản lý Nguồn vốn (ALM / Treasury) xây dựng biểu giá chuyển nhượng vốn nội bộ (Funds Transfer Pricing - FTP) định giá khoản vay cho các chi nhánh.
- Tranh luận: Xu hướng số hóa và cạnh tranh khốc liệt khiến người gửi tiền dễ dàng so sánh lãi suất trên điện thoại để chuyển tiền sang nơi có lãi suất cao hơn, làm giảm độ trung thành của nguồn vốn tiền gửi giá rẻ.
- Lỗi thường gặp: Nhầm COF với lãi suất huy động niêm yết tại quầy; lãi suất niêm yết tại quầy chỉ là giá của tiền gửi có kỳ hạn mới, còn COF là chi phí bình quân gia quyền của toàn bộ các khoản nợ cũ và mới, bao gồm cả lượng tiền gửi không kỳ hạn CASA khổng lồ.

**6. Liên kết**
- [CASA](03_Bank_Types_and_Deposit_Instruments.md) · [Tiền gửi có kỳ hạn](03_Bank_Types_and_Deposit_Instruments.md) · [Biên lãi ròng (NIM)](#3-biên-lãi-ròng-net-interest-margin---nim)

---

## 5. Nợ xấu Ngân hàng (Non-Performing Loans - NPL)

**1. Là gì?**
Nợ xấu Ngân hàng (Non-Performing Loans - NPL) là các khoản tín dụng cấp cho khách hàng mà người đi vay đã vi phạm nghĩa vụ thanh toán hợp đồng (quá hạn trả nợ gốc hoặc lãi) từ một số ngày nhất định (theo chuẩn quốc tế thường là quá hạn từ **90 ngày trở lên**) hoặc được ngân hàng đánh giá là có khả năng tổn thất cao không thu hồi được đầy đủ. NPL là phong vũ biểu quan trọng nhất phản ánh chất lượng tài sản và mức độ rủi ro tín dụng của ngân hàng. Nếu chỉ nhớ một điều: **Nợ xấu là những khoản tiền ngân hàng cho vay ra nhưng con nợ không chịu trả hoặc không còn khả năng trả.**

**2. Hoạt động thế nào?**
- Hệ thống phân loại nợ 5 nhóm chuẩn mực tại Việt Nam (theo Thông tư 11/2021/TT-NHNN):
  - **Nhóm 1 (Nợ đủ tiêu chuẩn):** Quá hạn dưới 10 ngày (trích dự phòng chung $0,75\%$).
  - **Nhóm 2 (Nợ cần chú ý):** Quá hạn từ 10 đến 90 ngày (báo động sớm).
  - **Nhóm 3 (Nợ dưới tiêu chuẩn):** Quá hạn từ 91 đến 180 ngày (chính thức tính vào NPL, trích dự phòng cụ thể $20\%$).
  - **Nhóm 4 (Nợ nghi ngờ):** Quá hạn từ 181 đến 360 ngày (trích dự phòng cụ thể $50\%$).
  - **Nhóm 5 (Nợ có khả năng mất vốn):** Quá hạn trên 360 ngày (trích dự phòng cụ thể $100\%$).
- Tác hại của NPL:
  - Ngân hàng bị ngừng ghi nhận lãi dự thu (phải thoái thu lãi làm giảm doanh thu).
  - Buộc phải trích một lượng tiền khổng lồ từ lợi nhuận vào quỹ dự phòng rủi ro tín dụng để chuẩn bị bù đắp tổn thất.
  - Làm ứ đọng dòng vốn xã hội và suy giảm tỷ lệ an toàn vốn (CAR).

**3. Công thức & mô hình**
Tỷ lệ Nợ xấu nội bảng (NPL Ratio):

$$
\text{Tỷ lệ NPL} = \frac{\text{Nợ nhóm 3} + \text{Nợ nhóm 4} + \text{Nợ nhóm 5}}{\text{Tổng dư nợ cho vay khách hàng}} \times 100\%
$$

Theo quy định của Ngân hàng Nhà nước Việt Nam, các ngân hàng thương mại phải kiểm soát tỷ lệ NPL nội bảng ở mức **dưới 3,0%**.

Tỷ lệ Nợ xấu gộp (Bao gồm nợ tiềm ẩn rủi ro):

$$
\text{NPL gộp} = \frac{\text{NPL nội bảng} + \text{Nợ đã bán cho VAMC chưa xử lý} + \text{Nợ cơ cấu lại thời hạn giữ nguyên nhóm nợ}}{\text{Tổng dư nợ}} \times 100\%
$$

**4. Ví dụ**
- Một ngân hàng có tổng dư nợ cho vay 500.000 tỷ VND. Tổng nợ từ nhóm 3 đến nhóm 5 là 10.000 tỷ VND. Tỷ lệ $\text{NPL} = 10.000 / 500.000 = 2,0\%$ (nằm trong ngưỡng an toàn cho phép dưới 3%).
- Tác động của suy thoái bất động sản 2022–2023 tại Việt Nam: Nợ xấu toàn hệ thống tăng mạnh do nhiều doanh nghiệp địa ốc mất thanh khoản; Thông tư 02/2023/TT-NHNN đã cho phép các tổ chức tín dụng cơ cấu lại thời hạn trả nợ và giữ nguyên nhóm nợ để hỗ trợ khách hàng vượt qua giai đoạn khó khăn.
- Khủng hoảng nợ xấu ngân hàng tại Ý và Hy Lạp sau khủng hoảng nợ công Châu Âu: Tỷ lệ NPL từng vọt lên trên 15%–40%, làm tê liệt hoàn toàn năng lực cấp tín dụng của hệ thống ngân hàng trong gần một thập kỷ.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Tiêu chí xếp loại tổ chức tín dụng của cơ quan thanh tra giám sát và điều kiện tiên quyết để được cấp hạn mức tăng trưởng tín dụng mới.
- Tranh luận: Kỹ thuật "Đảo nợ / Giấu nợ xấu" (Evergreening loans) - Ngân hàng cho khách hàng vay khoản mới để trả nợ cũ nhằm tránh bị nhảy nhóm nợ xấu trên báo cáo; hành vi này làm méo mó số liệu thực và tích tụ rủi ro bùng nổ trong tương lai.
- Lỗi thường gặp: Chỉ nhìn vào con số NPL nội bảng trên báo cáo tài chính; nhà đầu tư chuyên nghiệp luôn phải cộng thêm nợ nhóm 2 (nợ cận nợ xấu) và các khoản nợ được giãn hoãn theo chính sách để đánh giá đúng chất lượng tài sản thực tế.

**6. Liên kết**
- [Dự phòng rủi ro tín dụng](#6-dự-phòng-rủi-ro-tín-dụng-loan-loss-provision) · [Phân loại nợ](../04_Credit_and_Lending/08_Underwriting_Ratios_and_Credit_Risk.md) · [Tỷ lệ CAR](07_Prudential_Ratios_Stress_Testing_and_Basel.md)

---

## 6. Dự phòng Rủi ro Tín dụng (Loan Loss Provision)

**1. Là gì?**
Dự phòng Rủi ro Tín dụng (Loan Loss Provision) là khoản chi phí tài chính mà ngân hàng thương mại bắt buộc phải trích lập và ghi nhận vào chi phí hoạt động kinh doanh trong kỳ để tạo lập một quỹ tiền tệ dự phòng (Loan Loss Reserves) dùng để bù đắp cho các tổn thất thực tế có thể phát sinh khi các khoản nợ vay của khách hàng bị mất khả năng thu hồi. Dự phòng rủi ro tín dụng đóng vai trò là chiếc van an toàn giúp ngân hàng chủ động "dọn dẹp" nợ xấu mà không làm tổn hại đột ngột đến vốn chủ sở hữu. Nếu chỉ nhớ một điều: **Dự phòng rủi ro là số tiền ngân hàng trích từ lợi nhuận để dành sẵn một quỹ tiền đền bù cho các món nợ xấu.**

**2. Hoạt động thế nào?**
Cấu trúc trích lập dự phòng gồm hai loại:
1. **Dự phòng cụ thể (Specific Provision):** Được trích lập cho từng khoản nợ cụ thể dựa trên mức độ quá hạn và giá trị tài sản bảo đảm đã được khấu trừ. Tỷ lệ trích lập tăng dần theo mức độ rủi ro: Nhóm 1 (0%), Nhóm 2 (5%), Nhóm 3 (20%), Nhóm 4 (50%), Nhóm 5 (100%).
2. **Dự phòng chung (General Provision):** Được trích lập để dự phòng cho những tổn thất chưa thể xác định được đối với toàn bộ danh mục cho vay (tại Việt Nam quy định trích lập $0,75\%$ trên tổng số dư nợ từ Nhóm 1 đến Nhóm 4).
- Tỷ lệ bao phủ nợ xấu (Loan Loss Coverage Ratio - LLR): Đo lường sự thận trọng và độ dày của quỹ dự phòng so với tổng quy mô nợ xấu.

**3. Công thức & mô hình**
Số tiền trích lập Dự phòng cụ thể ($R_{\text{specific}}$) cho một khoản nợ dư nợ $A$ có giá trị tài sản bảo đảm đã chiết khấu $C$:

$$
R_{\text{specific}} = \max(0, A - C) \times r_{\text{nhóm nợ}}
$$

Tỷ lệ Bao phủ Nợ xấu (LLR):

$$
\text{LLR} = \frac{\text{Số dư quỹ dự phòng rủi ro lũy kế}}{\text{Tổng nợ xấu (Nhóm 3 + 4 + 5)}} \times 100\%
$$

Nếu $\text{LLR} > 100\%$: Quỹ dự phòng lớn hơn tổng nợ xấu; ngay cả khi toàn bộ nợ xấu mất trắng 100%, ngân hàng vẫn có đủ tiền bù đắp mà không bị ảnh hưởng đến lợi nhuận tương lai.

**4. Ví dụ**
- Tỷ lệ bao phủ nợ xấu kỷ lục tại Vietcombank: Trong giai đoạn 2021–2023, Vietcombank duy trì tỷ lệ LLR lên tới $200\%–350\%$, mức cao kỷ lục trong hệ thống ngân hàng Việt Nam; có nghĩa là cứ 1 đồng nợ xấu thì VCB đã chuẩn bị sẵn tới 3,5 đồng tiền dự phòng để xóa nợ.
- Ví dụ số minh họa: Ngân hàng cho vay 10 tỷ VND thuộc Nợ nhóm 4 (tỷ lệ trích 50%), tài sản bảo đảm là bất động sản định giá khấu trừ hợp lệ là 6 tỷ VND.
  - Giá trị chịu dự phòng: $10 - 6 = 4$ tỷ VND.
  - Dự phòng cụ thể phải trích: $4 \times 50\% = 2$ tỷ VND.
  - Khoản 2 tỷ VND này được ghi thẳng vào chi phí hoạt động của ngân hàng, làm giảm lợi nhuận trước thuế tương ứng 2 tỷ VND.
- Xử lý nợ xấu: Khi khoản nợ nhóm 5 bị xác định mất trắng hoàn toàn, ngân hàng dùng quỹ dự phòng này để "xóa nợ nội bảng" (Write-off); khách hàng vẫn có nghĩa vụ trả nợ và ngân hàng tiếp tục đòi nợ ngoại bảng để hoàn nhập dự phòng làm tăng lợi nhuận sau này.

**5. Ứng dụng & tranh luận**
- Ứng dụng: "Của để dành" của ngân hàng; khi kinh tế thuận lợi, ngân hàng trích lập dự phòng dày sẽ tạo bộ đệm an toàn vững chắc, khi kinh tế khó khăn có thể giảm trích lập hoặc hoàn nhập dự phòng để duy trì lợi nhuận ổn định (Income Smoothing).
- Tranh luận: Chuẩn mực IFRS 9 quốc tế chuyển từ mô hình "Tổn thất đã phát sinh" (Incurred Loss) sang mô hình "Tổn thất tín dụng kỳ vọng" (Expected Credit Loss - ECL), đòi hỏi ngân hàng phải trích dự phòng ngay từ khi giải ngân khoản vay dựa trên mô hình kinh tế lượng dự báo tương lai.
- Lỗi thường gặp: Nghĩ rằng xóa nợ bằng dự phòng là "tha nợ" cho con nợ; xóa nợ chỉ là nghiệp vụ kỹ thuật kế toán chuyển khoản nợ ra theo dõi ngoài sổ sách, ngân hàng vẫn tiếp tục siết nợ và phát mại tài sản thế chấp bình thường.

**6. Liên kết**
- [Nợ xấu (NPL)](#5-nợ-xấu-ngân-hàng-non-performing-loans---npl) · [Thu nhập lãi thuần (NII)](#2-thu-nhập-lãi-thuần-net-interest-income---nii) · [Chuẩn mực IFRS 9](../06_Financial_Regulation_and_Stability/07_Global_Regulatory_Frameworks.md)

---

## Câu hỏi tự kiểm tra

1. Mô hình ngân hàng dự trữ phân đoạn (Fractional Reserve Banking) tạo ra sự mất cân xứng kỳ hạn (Maturity Mismatch) như thế nào để tạo ra lợi nhuận?
2. Phân tích công thức xác định Thu nhập Lãi thuần (NII) và Biên Lãi ròng (NIM). Yếu tố nào giúp một ngân hàng duy trì được NIM cao bền vững?
3. Trình bày các thành phần quyết định Chi phí Vốn Huy động (COF). Tại sao tỷ lệ CASA cao lại giúp ngân hàng hạ thấp COF?
4. Trình bày hệ thống phân loại nợ 5 nhóm tại Việt Nam theo Thông tư 11/2021/TT-NHNN. Các nhóm nợ nào được chính thức tính vào Nợ xấu (NPL)?
5. Tỷ lệ Bao phủ Nợ xấu (LLR) là gì? Ý nghĩa của việc một ngân hàng duy trì tỷ lệ LLR vượt trên 100% là gì?

---

## Ghi chú nguồn

- Basel Committee on Banking Supervision (BCBS): *Sound credit risk assessment and valuation for loans*.
- Ngân hàng Nhà nước Việt Nam: Thông tư số 11/2021/TT-NHNN về phân loại tài sản có, mức trích, phương pháp trích lập dự phòng rủi ro.
- Ngân hàng Nhà nước Việt Nam: Thông tư số 02/2023/TT-NHNN về cơ cấu lại thời hạn trả nợ và giữ nguyên nhóm nợ.
- Báo cáo tài chính kiểm toán năm 2023 của các NHTM Việt Nam: Vietcombank, MB, VPBank, Techcombank.