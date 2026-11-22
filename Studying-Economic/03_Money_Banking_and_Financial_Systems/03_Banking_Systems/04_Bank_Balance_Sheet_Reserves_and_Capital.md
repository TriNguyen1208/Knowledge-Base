# Chuyên đề 3.4: Bảng Cân đối Kế toán, Dự trữ, Vốn tự có và Khả năng Thanh toán của Ngân hàng

Chuyên đề này đi sâu vào giải phẫu Bảng cân đối kế toán của một Ngân hàng Thương mại, phân tích cấu trúc của các tầng dự trữ thanh khoản, vai trò của vốn tự có (vốn chủ sở hữu), và phân biệt sự khác nhau mang tính sống còn giữa Tính thanh khoản (Liquidity) và Khả năng thanh toán (Solvency).

> Câu hỏi xuyên suốt: Tại sao một ngân hàng có tổng tài sản vượt trội so với tổng nợ (vẫn hoàn toàn đủ khả năng thanh toán) lại có thể bị sụp đổ phá sản chỉ sau một đêm do thiếu hụt thanh khoản?

---

## 1. Bảng Cân đối Kế toán Ngân hàng (Bank Balance Sheet)

**1. Là gì?**
Bảng Cân đối Kế toán Ngân hàng (Bank Balance Sheet) là báo cáo tài chính phản ánh toàn bộ trạng thái tài sản có (Assets - ngân hàng sở hữu hoặc cho ai vay gì) và nguồn vốn nợ cùng vốn chủ sở hữu (Liabilities & Equity - ngân hàng huy động vốn từ đâu) tại một thời điểm nhất định. Không giống như bảng cân đối kế toán của doanh nghiệp phi tài chính, tài sản của ngân hàng phần lớn là các tài sản tài chính vô hình (các khoản cho vay và trái phiếu), còn nguồn vốn phần lớn là tiền gửi của khách hàng. Nếu chỉ nhớ một điều: **Khoản cho vay của ngân hàng là Tài sản (Asset), còn Tiền gửi của người dân là Nợ phải trả (Liability).**

**2. Hoạt động thế nào?**
Cấu trúc cơ bản hai bên của Bảng cân đối kế toán ngân hàng thương mại:
- **Tài sản (Assets - Sử dụng vốn):**
  1. *Tiền mặt và dự trữ (Cash & Reserves):* Tiền mặt tại quỹ chi nhánh, ATM và tiền gửi thanh toán tại Ngân hàng Trung ương (thanh khoản cao nhất, lợi suất 0% hoặc rất thấp).
  2. *Chứng khoán đầu tư:* Tín phiếu kho bạc, trái phiếu chính phủ (đóng vai trò là tài sản dự phòng thanh khoản thứ cấp có sinh lời) và trái phiếu doanh nghiệp.
  3. *Cho vay khách hàng (Loans):* Khoản mục lớn nhất và sinh lời chủ yếu của ngân hàng (cho vay mua nhà, cho vay tiêu dùng, vốn lưu động doanh nghiệp).
  4. *Tài sản cố định và tài sản khác:* Nhà xưởng chi nhánh, hệ thống máy chủ công nghệ.
- **Nguồn vốn (Liabilities & Equity - Nguồn huy động vốn):**
  1. *Tiền gửi khách hàng (Deposits):* Chiếm tỷ trọng áp đảo (70–80% tổng nguồn vốn).
  2. *Vay mượn từ các định chế tài chính:* Vay thị trường liên ngân hàng, hợp đồng Repo, vay tái cấp vốn từ NHTW.
  3. *Giấy tờ có giá phát hành:* Trái phiếu ngân hàng, chứng chỉ tiền gửi.
  4. *Vốn chủ sở hữu (Bank Capital / Equity):* Vốn điều lệ do cổ đông góp, thặng dư vốn cổ phần, các quỹ dự trữ tài chính và lợi nhuận giữ lại chưa phân phối (thường chỉ chiếm 8–12% tổng nguồn vốn).

**3. Công thức & mô hình**
Đồng nhất thức kế toán bắt buộc:

$$
\text{Tổng tài sản (Total Assets)} = \text{Tổng nợ phải trả (Liabilities)} + \text{Vốn chủ sở hữu (Equity)}
$$

Chỉ số Tỷ lệ Cho vay trên Tiền gửi (Loan-to-Deposit Ratio - LDR) đo lường mức độ sử dụng tiền gửi huy động được để cho vay:

$$
\text{LDR} = \frac{\text{Tổng dư nợ cho vay khách hàng}}{\text{Tổng số dư tiền gửi huy động}} \times 100\%
$$

Tại Việt Nam, NHNN quy định trần an toàn tỷ lệ LDR của các ngân hàng thương mại không được vượt quá $85\%$.

**4. Ví dụ**
- Bảng cân đối kế toán của Vietcombank (VCB, số liệu làm tròn năm 2023):
  - Tổng tài sản: ~1.839 nghìn tỷ VND.
  - Cho vay khách hàng: ~1.270 nghìn tỷ VND (~69% tổng tài sản).
  - Đầu tư chứng khoán và dự trữ: ~400 nghìn tỷ VND.
  - Tiền gửi của khách hàng: ~1.395 nghìn tỷ VND (~76% tổng nguồn vốn).
  - Vốn chủ sở hữu: ~145 nghìn tỷ VND (~7,9% tổng tài sản).
- Phân tích rủi ro: Nếu một ngân hàng có vốn chủ sở hữu 10 tỷ đồng và tài sản cho vay 100 tỷ đồng (đòn bẩy 10 lần). Chỉ cần danh mục cho vay bị mất trắng $11\%$ do nợ xấu vỡ nợ ($11$ tỷ đồng), vốn chủ sở hữu sẽ bị âm hoàn toàn (-1 tỷ đồng) và ngân hàng mất khả năng thanh toán.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Bức tranh toàn cảnh để Ngân hàng Trung ương giám sát rủi ro hệ thống và các nhà đầu tư định giá cổ phiếu ngân hàng qua chỉ số Giá trên Giá trị sổ sách ($P/B$).
- Tranh luận: Kế toán theo giá thị trường (Mark-to-market) so với Kế toán theo giá gốc (Held-to-maturity); nếu bắt buộc hạch toán toàn bộ trái phiếu theo giá thị trường khi lãi suất tăng cao, vốn chủ sở hữu của nhiều ngân hàng sẽ bốc hơi ngay lập tức.
- Lỗi thường gặp: Nhầm lẫn giữa "tiền mặt" và "vốn chủ sở hữu"; vốn chủ sở hữu là một con số kế toán tính toán giá trị tài sản ròng, không phải là một đống tiền mặt cất trong kho.

**6. Liên kết**
- [Dự trữ ngân hàng](#2-dự-trữ-ngân-hàng-bank-reserves) · [Vốn chủ sở hữu ngân hàng](#3-vốn-chủ-sở-hữu-ngân-hàng-bank-capital) · [Thanh khoản vs Thanh toán](#4-tính-thanh-khoản-ngân-hàng-bank-liquidity)

---

## 2. Dự trữ Ngân hàng (Bank Reserves)

**1. Là gì?**
Dự trữ Ngân hàng (Bank Reserves) là tổng lượng tài sản tiền mặt có tính thanh khoản tức thời tối cao mà một ngân hàng thương mại nắm giữ để đáp ứng các nghĩa vụ chi trả rút tiền hàng ngày của người gửi tiền và thực hiện thanh toán bù trừ liên ngân hàng với các ngân hàng khác. Dự trữ ngân hàng gồm hai cấu phần vật lý: tiền mặt thực tế cất trữ tại các kho quỹ chi nhánh/ATM (Vault Cash) và số dư tiền gửi thanh khoản ký gửi tại Ngân hàng Trung ương. Nếu chỉ nhớ một điều: **Dự trữ ngân hàng là "kho tiền mặt đệm" sẵn sàng chi trả ngay lập tức khi khách hàng yêu cầu rút tiền.**

**2. Hoạt động thế nào?**
- Dự trữ ngân hàng được chia thành hai phần theo quy định pháp lý:
  1. **Dự trữ bắt buộc (Required Reserves - $RR$):** Tỷ lệ phần trăm tối thiểu do Ngân hàng Trung ương ấn định theo luật, ngân hàng buộc phải duy trì và không được đem ra cho vay.
  2. **Dự trữ vượt mức / Thặng dư (Excess Reserves - $ER$):** Số tiền dự trữ vượt trên mức bắt buộc mà ngân hàng tự nguyện giữ lại để phòng ngừa rủi ro thanh khoản đột xuất trong ngày hoặc chờ cơ hội giải ngân tốt.
- Sự đánh đổi kinh tế (Trade-off):
  - Giữ nhiều dự trữ: Ngân hàng cực kỳ an toàn về thanh khoản, nhưng bị thiệt hại về lợi nhuận vì tiền dự trữ không sinh lãi hoặc lãi suất rất thấp.
  - Giữ ít dự trữ: Ngân hàng tối đa hóa được số tiền cho vay sinh lãi cao, nhưng đối mặt với rủi ro bị phạt hoặc vỡ nợ nếu có làn sóng rút tiền lớn đột ngột.

**3. Công thức & mô hình**
Tổng dự trữ ngân hàng ($R$):

$$
R = \text{Vault Cash} + \text{Deposits at Central Bank} = RR + ER
$$

Tỷ lệ dự trữ thực tế của ngân hàng ($r_{\text{bank}}$):

$$
r_{\text{bank}} = \frac{R}{D} = \frac{RR + ER}{D} = rr + e
$$

Trong đó $rr$ là tỷ lệ dự trữ bắt buộc pháp định và $e$ là tỷ lệ dự trữ vượt mức tự nguyện do ngân hàng quyết định dựa trên lãi suất chiết khấu và lãi suất liên ngân hàng.

**4. Ví dụ**
- Ví dụ số minh họa: Ngân hàng A huy động được 50.000 tỷ VND tiền gửi. NHNN quy định tỷ lệ dự trữ bắt buộc $rr = 3\%$.
  - Mức dự trữ bắt buộc pháp định: $RR = 50.000 \times 3\% = 1.500$ tỷ VND.
  - Ngân hàng duy trì thực tế 1.800 tỷ VND trên tài khoản tại NHNN và 400 tỷ VND tiền mặt tại các cây ATM.
  - Tổng dự trữ: $R = 1.800 + 400 = 2.200$ tỷ VND.
  - Dự trữ vượt mức: $ER = 2.200 - 1.500 = 700$ tỷ VND.
- Hoa Kỳ sau khủng hoảng 2008: Nhờ chính sách QE của Fed, dự trữ vượt mức của các ngân hàng thương mại Mỹ tăng vọt từ dưới 2 tỷ USD (trước 2008) lên tới hơn 2.700 tỷ USD vào năm 2014, tạo ra trạng thái thanh khoản dồi dào kỷ lục.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Quản trị thanh khoản ngân quỹ hàng ngày (Treasury management) và bảo đảm thông suốt cho hệ thống thanh toán quốc gia.
- Tranh luận: Chính sách trả lãi trên dự trữ vượt mức (Interest on Excess Reserves - IOER / IORB) của NHTW; nếu NHTW trả lãi dự trữ quá cao, các ngân hàng sẽ chọn cách gửi tiền an toàn tại NHTW thay vì cho vay nền kinh tế thực.
- Lỗi thường gặp: Tưởng rằng toàn bộ dự trữ ngân hàng là tiền đóng băng không được dùng; phần dự trữ vượt mức ($ER$) hoàn toàn có thể được dùng để cho vay hoặc mua chứng khoán bất cứ lúc nào.

**6. Liên kết**
- [Tiền cơ sở](../01_Money_and_Monetary_Systems/04_Money_Supply_and_Monetary_Base.md) · [Dự trữ bắt buộc](../02_Central_Banking/04_Policy_Tools_and_Balance_Sheet.md) · [Thanh khoản ngân hàng](#4-tính-thanh-khoản-ngân-hàng-bank-liquidity)

---

## 3. Vốn Chủ sở hữu Ngân hàng (Bank Capital)

**1. Là gì?**
Vốn Chủ sở hữu Ngân hàng (Bank Capital / Bank Equity) là giá trị tài sản thuần của ngân hàng, được tính bằng tổng giá trị tài sản có trừ đi toàn bộ các nghĩa vụ nợ phải trả. Vốn chủ sở hữu đóng vai trò là **"chiếc đệm hấp thụ tổn thất tối hậu" (Loss-absorbing Cushion)** của ngân hàng: khi người đi vay vỡ nợ hoặc giá trị chứng khoán sụt giảm, tổn thất sẽ được trừ trực tiếp vào vốn chủ sở hữu trước tiên, giúp bảo vệ toàn vẹn tiền gửi của người dân không bị xâm phạm. Nếu chỉ nhớ một điều: **Vốn chủ sở hữu là tấm khiên bảo vệ người gửi tiền trước mọi rủi ro thua lỗ nợ xấu của ngân hàng.**

**2. Hoạt động thế nào?**
- Phân tầng cấu trúc vốn theo chuẩn mực Basel quốc tế:
  1. **Vốn Cấp 1 cốt lõi (Common Equity Tier 1 - CET1):** Vốn có chất lượng hấp thụ tổn thất cao nhất, gồm vốn cổ phần phổ thông do cổ đông đóng góp, thặng dư vốn và lợi nhuận giữ lại chưa phân phối.
  2. **Vốn Cấp 1 bổ sung (Additional Tier 1 - AT1):** Các công cụ nợ lai ghép có thể chuyển đổi thành cổ phiếu hoặc bị xóa nợ khi ngân hàng gặp nguy hiểm (như trái phiếu CoCos).
  3. **Vốn Cấp 2 (Tier 2 Capital):** Vốn bổ sung gồm trái phiếu thứ cấp dài hạn và dự phòng tổn thất chung.
- Cơ chế hấp thụ tổn thất: Khi nợ xấu phát sinh, ngân hàng trích dự phòng làm giảm lợi nhuận; nếu tổn thất vượt quá lợi nhuận, nó sẽ ăn trực tiếp vào vốn chủ sở hữu. Miễn là vốn chủ sở hữu vẫn dương ($\text{Equity} > 0$), ngân hàng vẫn an toàn về mặt thanh toán.

**3. Công thức & mô hình**
Phương trình tính vốn chủ sở hữu:

$$
\text{Bank Capital} = \text{Total Assets} - \text{Total Liabilities}
$$

Tỷ lệ An toàn Vốn (Capital Adequacy Ratio - CAR) theo hiệp ước Basel:

$$
\text{CAR} = \frac{\text{Vốn tự có (Tier 1 + Tier 2)}}{\text{Tổng tài sản có rủi ro (Risk-Weighted Assets - RWA)}} \ge 8\% \text{ (hoặc } 10,5\% \text{ có bộ đệm)}
$$

**4. Ví dụ**
- Ví dụ số minh họa: Một ngân hàng có Tổng tài sản 100.000 tỷ VND và Nợ phải trả là 91.000 tỷ VND. Vốn chủ sở hữu của ngân hàng là: $100.000 - 91.000 = 9.000$ tỷ VND (chiếm 9% tài sản).
  - Giả sử thị trường bất động sản đóng băng làm ngân hàng bị mất trắng 5.000 tỷ VND tiền cho vay.
  - Sau tổn thất: Tài sản giảm xuống còn 95.000 tỷ VND; Nợ phải trả (tiền gửi người dân) vẫn giữ nguyên 91.000 tỷ VND.
  - Vốn chủ sở hữu giảm xuống còn: $95.000 - 91.000 = 4.000$ tỷ VND.
  - Kết luận: Ngân hàng bị suy yếu vốn nghiêm trọng nhưng **người gửi tiền vẫn an toàn 100%** không mất một đồng nào nhờ tấm khiên vốn chủ sở hữu đã gánh chịu toàn bộ 5.000 tỷ VND tổn thất đó.
- Vụ xóa sổ trái phiếu AT1 của Credit Suisse (tháng 3/2023): Khi Credit Suisse đứng trước nguy cơ sụp đổ, cơ quan giám sát tài chính Thụy Sĩ (FINMA) đã kích hoạt điều khoản xóa trắng 17 tỷ USD trái phiếu AT1 của ngân hàng này để cứu vãn cấu trúc vốn chủ sở hữu bảo vệ người gửi tiền.
- Tăng vốn tại Việt Nam: Các NHTM như VPBank (bán 15% vốn cho SMBC thu về gần 1,5 tỷ USD), MB, Techcombank liên tục tăng vốn điều lệ để củng cố tỷ lệ CAR vượt trên 12–14%, nằm trong nhóm ngân hàng có bộ đệm vốn vững chắc nhất hệ thống.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Thước đo sinh tử số 1 được các cơ quan quản lý (NHTW, Basel) dùng để cấp phép hoạt động, xếp hạng tín nhiệm và giao room tín dụng.
- Tranh luận: Đòi hỏi ngân hàng giữ vốn chủ sở hữu quá cao (yêu cầu tăng tỷ lệ CAR) sẽ làm giảm hệ số đòn bẩy $EM$, kéo giảm chỉ số $ROE$ của cổ đông và có thể khiến ngân hàng phải thu hẹp quy mô cho vay nền kinh tế.
- Lỗi thường gặp: Nhầm vốn điều lệ với tổng tài sản; vốn điều lệ chỉ là một phần cấu thành của vốn chủ sở hữu, và vốn chủ sở hữu chỉ chiếm một phần rất nhỏ trong tổng tài sản của ngân hàng.

**6. Liên kết**
- [Bảng cân đối ngân hàng](#1-bảng-cân-đối-kế-toán-ngân-hàng-bank-balance-sheet) · [Tỷ lệ an toàn vốn (CAR)](07_Prudential_Ratios_Stress_Testing_and_Basel.md) · [Khả năng thanh toán](#5-khả-năng-thanh-toán-ngân-hàng-bank-solvency)

---

## 4. Tính Thanh khoản Ngân hàng (Bank Liquidity)

**1. Là gì?**
Tính Thanh khoản Ngân hàng (Bank Liquidity) là khả năng của một ngân hàng thương mại trong việc đáp ứng đầy đủ, tức thời và thông suốt mọi nghĩa vụ chi trả tiền mặt và các cam kết thanh toán tài chính phát sinh hàng ngày (cho khách hàng rút tiền gửi, giải ngân hạn mức vay đã cam kết, bù trừ liên ngân hàng) mà không phải chịu tổn thất chi phí quá mức không thể chấp nhận được. Thanh khoản là bài toán của **dòng tiền trong ngắn hạn**. Nếu chỉ nhớ một điều: **Thanh khoản là việc ngân hàng có sẵn tiền mặt ngay lúc này để trả cho người gửi tiền đến rút.**

**2. Hoạt động thế nào?**
- Nguồn cung cấp thanh khoản:
  1. *Thanh khoản nội sinh (Asset Liquidity):* Bán hoặc đem thế chấp các tài sản thanh khoản cao (tiền mặt tại quỹ, dự trữ tại NHTW, tín phiếu kho bạc, trái phiếu chính phủ).
  2. *Thanh khoản ngoại sinh (Liability Liquidity):* Vay mượn khẩn cấp từ các ngân hàng bạn trên thị trường liên ngân hàng, phát hành chứng chỉ tiền gửi hoặc tìm đến Cửa sổ chiết khấu của NHTW.
- Rủi ro thanh khoản (Liquidity Risk): Phát sinh khi có một lượng tiền gửi bị rút ra đột ngột vượt xa dự tính (Bank Run), trong khi các tài sản của ngân hàng (các khoản cho vay mua nhà, vay doanh nghiệp) có kỳ hạn dài và không thể chuyển đổi thành tiền mặt ngay lập tức nếu không chấp nhận bán tống bán tháo (Fire-sale) với mức chiết khấu lỗ nặng.

**3. Công thức & mô hình**
Tỷ lệ Đảm bảo Khả năng Thanh khoản (Liquidity Coverage Ratio - LCR theo chuẩn Basel III):

$$
\text{LCR} = \frac{\text{Tổng tài sản thanh khoản chất lượng cao (HQLA)}}{\text{Tổng dòng tiền rút ròng trong kịch bản căng thẳng 30 ngày}} \ge 100\%
$$

Trong đó $\text{HQLA}$ (High-Quality Liquid Assets) bao gồm tiền mặt, dự trữ tại NHTW và trái phiếu chính phủ có thể đổi thành tiền mặt ngay lập tức mà hầu như không mất giá trị.

**4. Ví dụ**
- Vụ sụp đổ chớp nhoáng của Silicon Valley Bank (SVB, tháng 3/2023): SVB sở hữu tổng tài sản hơn 210 tỷ USD và hoàn toàn có lãi. Tuy nhiên, khi khách hàng công nghệ ồ ạt rút 42 tỷ USD chỉ trong một ngày thứ Năm và đăng ký rút tiếp 100 tỷ USD vào sáng thứ Sáu, SVB cạn kiệt tài sản thanh khoản tức thời và không thể vay thêm tiền từ ai, dẫn đến việc bị cơ quan chức năng đóng cửa ngay lập tức vì mất thanh khoản.
- Tại Việt Nam: NHNN quy định các tỷ lệ an toàn thanh khoản nghiêm ngặt qua Thông tư 22/2019/TT-NHNN: Tỷ lệ dự trữ thanh khoản tối thiểu đạt 8%, và Tỷ lệ khả năng chi trả trong 30 ngày (LCR) đối với VND tối thiểu đạt 50%.
- Bán tống bán tháo (Fire-sale): Khi ngân hàng kẹt thanh khoản phải bán gấp các khoản trái phiếu dài hạn trong bối cảnh thị trường đang giảm giá, khoản lỗ thanh khoản thực tế sẽ ăn thẳng vào vốn chủ sở hữu và biến một cuộc khủng hoảng thanh khoản thành cuộc khủng hoảng phá sản.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Thiết lập các kịch bản kiểm tra căng thẳng thanh khoản (Liquidity Stress Testing) định kỳ hàng tuần.
- Đánh đổi (Trade-off): Tài sản có tính thanh khoản càng cao (như tiền mặt, trái phiếu chính phủ ngắn hạn) thì lợi suất sinh lời càng thấp; ngân hàng giữ quá nhiều tài sản thanh khoản sẽ bị suy giảm mạnh hiệu quả sinh lời tổng thể.
- Lỗi thường gặp: Cho rằng ngân hàng có nhiều vốn chủ sở hữu thì không thể mất thanh khoản; một ngân hàng có vốn rất dày nhưng toàn bộ tài sản nằm ở các dự án bất động sản dở dang 10 năm vẫn có thể phá sản sau 2 ngày nếu bị người gửi tiền đồng loạt kéo đến rút tiền mặt.

**6. Liên kết**
- [Khả năng thanh toán](#5-khả-năng-thanh-toán-ngân-hàng-bank-solvency) · [Dự trữ ngân hàng](#2-dự-trữ-ngân-hàng-bank-reserves) · [Tỷ lệ LCR](07_Prudential_Ratios_Stress_Testing_and_Basel.md)

---

## 5. Khả năng Thanh toán Ngân hàng (Bank Solvency)

**1. Là gì?**
Khả năng Thanh toán Ngân hàng (Bank Solvency) là trạng thái lành mạnh tài chính căn bản trong dài hạn của ngân hàng, trong đó tổng giá trị thị trường thực tế của toàn bộ các tài sản có của ngân hàng luôn lớn hơn tổng toàn bộ các nghĩa vụ nợ phải trả cho người gửi tiền và các chủ nợ khác, bảo đảm rằng vốn chủ sở hữu của ngân hàng luôn là một số dương ($\text{Equity} > 0$). Ngược lại, khi tổng tài sản thực tế giảm xuống thấp hơn tổng nợ phải trả, ngân hàng rơi vào trạng thái **mất khả năng thanh toán (Insolvency / Âm vốn)** và đã phá sản về mặt kinh tế. Nếu chỉ nhớ một điều: **Khả năng thanh toán là việc tổng tài sản của ngân hàng có đủ để trang trải toàn bộ số nợ hay không.**

**2. Hoạt động thế nào?**
So sánh bản chất giữa Thanh khoản (Liquidity) và Khả năng thanh toán (Solvency):
- **Thanh khoản (Liquidity):** Vấn đề thời gian và dòng tiền ngắn hạn (Cash flow issue). Ngân hàng có tài sản tốt nhưng không đổi thành tiền mặt ngay được. Tình trạng này có thể được cứu chữa bằng việc NHTW bơm vốn cứu cánh (LOLR).
- **Khả năng thanh toán (Solvency):** Vấn đề tài sản thực tế và cơ cấu vốn dài hạn (Balance sheet hole issue). Tài sản bị mất trắng do nợ xấu hoặc đầu tư thua lỗ nặng nề, nợ phải trả vượt quá tài sản. Trạng thái này không thể cứu bằng cho vay thanh khoản thông thường, mà đòi hỏi phải có tiền ngân sách rót vốn tái cấp (Bailout) hoặc tiến hành đóng cửa, xử lý phá sản (Resolution).
- Mối liên hệ vòng xoáy: Thiếu hụt thanh khoản kéo dài buộc ngân hàng phải bán tháo tài sản giá rẻ, tạo ra thua lỗ lớn và cuối cùng biến thành mất khả năng thanh toán.

**3. Công thức & mô hình**
Điều kiện cần và đủ để duy trì khả năng thanh toán (Solvency condition):

$$
\text{Solvency Index} = \text{Giá trị thanh lý thực tế của Tài sản} - \text{Nợ phải trả} = \text{Equity} > 0
$$

Xác suất vỡ nợ theo Mô hình Cấu trúc Merton (Merton's Structural Credit Risk Model):
Một ngân hàng bị mất khả năng thanh toán tại thời điểm đáo hạn $T$ khi giá trị tài sản ngân hàng $V_T$ thấp hơn giá trị danh nghĩa của nợ phải trả $D$:

$$
P(\text{Insolvency}) = \mathbb{P}(V_T < D) = \mathcal{N}(-d_2)
$$

Trong đó $d_2 = \frac{\ln(V_0/D) + (\mu - \sigma_V^2/2)T}{\sigma_V \sqrt{T}}$.

**4. Ví dụ**
- Lehman Brothers (tháng 9/2008): Không chỉ bị mất thanh khoản ngắn hạn mà thực chất đã bị mất khả năng thanh toán (Insolvent) do nắm giữ hàng chục tỷ USD chứng khoán độc hại dưới chuẩn không ai mua, khiến Fed và Bộ Tài chính Mỹ quyết định không giải cứu mà để cho phá sản theo luật.
- Trường hợp Ngân hàng SCB tại Việt Nam (2022): Thanh tra sau đó cho thấy một lượng tiền gửi khổng lồ đã bị rút ruột cho vay các công ty sân sau không có tài sản bảo đảm khả thi, dẫn đến việc tài sản thực tế của ngân hàng bị thâm hụt nghiêm trọng so với nợ phải trả tiền gửi của dân, buộc NHNN phải đặt vào tình trạng kiểm soát đặc biệt và lên phương án cơ cấu lại toàn diện.
- Counterfactual: Nếu một ngân hàng hoàn toàn khỏe mạnh về khả năng thanh toán (cho vay toàn dự án tốt, nợ xấu bằng 0) nhưng bị tin đồn thất thiệt làm người dân hoảng loạn rút tiền, NHTW chỉ cần can thiệp cho vay thanh khoản 100% trong vài tuần là ngân hàng sẽ trở lại hoạt động bình thường mà không tốn một đồng thuế của nhà nước.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Tiêu chuẩn vàng để NHTW quyết định nên cứu (nếu chỉ thiếu thanh khoản) hay nên đóng cửa xử lý phá sản (nếu đã mất khả năng thanh toán) theo đúng Nguyên tắc Bagehot.
- Tranh luận: Khó khăn tột cùng trong việc định giá tài sản trong khủng hoảng; trong cơn bão tài chính, rất khó để biết một tài sản bị giảm giá là do thị trường hoảng loạn tạm thời (thiếu thanh khoản) hay do doanh nghiệp vay vốn đã chết thật sự (mất khả năng thanh toán).
- Lỗi thường gặp: Đồng nhất hai khái niệm này với nhau; một ngân hàng mất thanh khoản chưa chắc đã mất khả năng thanh toán, nhưng một ngân hàng mất khả năng thanh toán thì sớm muộn cũng sẽ mất sạch thanh khoản.

**6. Liên kết**
- [Tính thanh khoản ngân hàng](#4-tính-thanh-khoản-ngân-hàng-bank-liquidity) · [Vốn chủ sở hữu](#3-vốn-chủ-sở-hữu-ngân-hàng-bank-capital) · [Phá sản ngân hàng](06_Bank_Runs_Failures_and_Resolution.md)

---

## Câu hỏi tự kiểm tra

1. Trình bày chi tiết cơ cấu bên Tài sản và bên Nguồn vốn trên Bảng cân đối kế toán của một Ngân hàng Thương mại.
2. Tại sao các khoản cho vay khách hàng lại nằm ở bên Tài sản, trong khi Tiền gửi của người dân lại nằm ở bên Nguồn vốn nợ của ngân hàng?
3. Phân biệt Dự trữ bắt buộc (Required Reserves) và Dự trữ vượt mức (Excess Reserves). Ngân hàng phải đánh đổi điều gì khi nắm giữ quá nhiều dự trữ vượt mức?
4. Phân tích vai trò của Vốn chủ sở hữu (Bank Capital) như một "chiếc đệm hấp thụ tổn thất" bảo vệ người gửi tiền trước rủi ro nợ xấu.
5. So sánh sự khác nhau căn bản giữa Nguy cơ Thiếu thanh khoản (Illiquidity) và Mất khả năng thanh toán (Insolvency). Ngân hàng Trung ương ứng xử với hai trường hợp này như thế nào?

---

## Ghi chú nguồn

- Mishkin, F. S. (2018). *The Economics of Money, Banking, and Financial Markets*, Pearson.
- Basel Committee on Banking Supervision (BCBS): *Basel III: The Liquidity Coverage Ratio and liquidity risk monitoring tools*.
- Ngân hàng Nhà nước Việt Nam: Thông tư số 22/2019/TT-NHNN quy định các giới hạn, tỷ lệ bảo đảm an toàn trong hoạt động của ngân hàng.
- Báo cáo tài chính kiểm toán năm 2023 của Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank).