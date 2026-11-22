# Chuyên đề 4.4: Cấu trúc Tín dụng và Biện pháp Bảo đảm Tiền vay

Chuyên đề này phân tích hai cặp cấu trúc tín dụng đối lập cốt lõi định hình thị trường tài chính: Khoản vay trả góp đóng (Installment Loan) vs Tín dụng tuần hoàn mở (Revolving Credit), và Khoản vay có bảo đảm (Secured Loan) vs Khoản vay tín chấp (Unsecured Loan), cùng vai trò pháp lý kinh tế của Tài sản bảo đảm (Collateral).

> Câu hỏi xuyên suốt: Tại sao các khoản vay tín chấp không có tài sản bảo đảm lại có lãi suất cao gấp 3–4 lần so với khoản vay có tài sản thế chấp, và cơ chế xử lý tài sản bảo đảm vận hành như thế nào khi con nợ vỡ nợ?

---

## 1. Khoản vay Trả góp (Installment Loan)

**1. Là gì?**
Khoản vay Trả góp (Installment Loan / Closed-end Credit) là cấu trúc tín dụng đóng mà trong đó người đi vay nhận được toàn bộ số tiền nợ gốc một lần duy nhất tại thời điểm giải ngân ban đầu, và cam kết hoàn trả số nợ đó thông qua một **chuỗi các khoản thanh toán định kỳ cố định (hàng tháng hoặc hàng quý) được xác định chính xác từ trước** trong suốt một khoảng thời gian cụ thể. Sau khi người vay thanh toán hết nợ gốc và lãi theo lịch trình, tài khoản vay sẽ được đóng vĩnh viễn; nếu muốn vay thêm, khách hàng phải nộp hồ sơ xin phê duyệt một hợp đồng vay hoàn toàn mới. Nếu chỉ nhớ một điều: **Khoản vay trả góp là vay một cục ban đầu và chia nhỏ ra trả đều đặn mỗi tháng cho đến khi hết nợ.**

**2. Hoạt động thế nào?**
- Đặc điểm vận hành:
  - Số tiền vay, lãi suất, kỳ hạn và số tiền phải trả mỗi tháng đều được cố định rõ ràng ngay từ ngày ký hợp đồng.
  - Phù hợp hoàn hảo cho các nhu cầu mua sắm tài sản có giá trị lớn, sử dụng lâu dài: Vay mua nhà ở, mua ô tô, mua đồ điện máy gia dụng hoặc trang trải học phí đại học.
  - Mỗi lần trả nợ đều làm giảm số dư nợ gốc thực tế theo bảng lịch khấu hao nợ.
- Tính kỷ luật tài chính cao: Do có lịch trình trả nợ cứng nhắc hàng tháng, người vay bắt buộc phải có kế hoạch quản lý thu nhập chi tiêu nghiêm túc để không bị quá hạn.

**3. Công thức & mô hình**
Số tiền trả góp hàng tháng ($EMI$ - Equated Monthly Installment):

$$
EMI = P_0 \times \frac{r(1+r)^n}{(1+r)^n - 1}
$$

Trong đó $P_0$ là số tiền giải ngân một lần ban đầu, $r$ là lãi suất tháng, và $n$ là tổng số kỳ trả góp.

Đặc tính dòng tiền:
$$
\text{Dòng tiền giải ngân: } +P_0 \text{ tại } t=0 \quad \longrightarrow \quad \text{Dòng tiền trả nợ: } -EMI \text{ tại } t = 1, 2, \dots, n
$$

**4. Ví dụ**
- Mua xe ô tô trả góp: Bạn mua chiếc xe trị giá 800 triệu VND; bạn có vốn tự có 300 triệu, vay ngân hàng Techcombank 500 triệu VND trả góp trong 5 năm (60 tháng) với lãi suất 9%/năm. Số tiền bạn phải đóng cố định hàng tháng (cả gốc và lãi) là khoảng 10,38 triệu VND/tháng. Sau 60 tháng, bạn trả hết nợ và nhận lại giấy tờ xe gốc.
- Vay trả góp đồ điện máy 0% lãi suất: Mua iPhone trị giá 30 triệu đồng tại chuỗi Thế Giới Di Động qua công ty tài chính, chia đều trả trong 12 tháng, mỗi tháng đóng 2,5 triệu đồng (thực chất nhà bán lẻ đã chiết khấu giảm giá cho công ty tài chính để bù đắp tiền lãi).
- Khác biệt với thẻ tín dụng: Bạn không thể dùng số tiền đã trả góp tháng này để tiếp tục quẹt mua sắm món đồ khác; nợ gốc chỉ đi theo một chiều giảm dần về 0.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Công cụ kích cầu tiêu dùng hàng hóa lâu bền và tài trợ nhà ở cá nhân chủ lực của toàn xã hội.
- Tranh luận: Phí phạt tất toán trước hạn (Prepayment penalty) - Người vay muốn gom tiền trả hết nợ sớm thường bị ngân hàng phạt từ 1% đến 3% trên số nợ gốc còn lại để bù đắp phần lãi suất dự kiến bị mất.
- Lỗi thường gặp: Nhầm lẫn giữa vay trả góp và tín dụng tuần hoàn; vay trả góp là hợp đồng tín dụng đóng một chiều, không tự động tái cấp hạn mức.

**6. Liên kết**
- [Tín dụng tuần hoàn](#2-tín-dụng-tuần-hoàn--thấu-chi-revolving-credit) · [Khấu hao nợ](03_Yields_APR_APY_and_Loan_Terms.md) · [Vay mua ô tô](05_Consumer_and_Commercial_Loan_Types.md)

---

## 2. Tín dụng Tuần hoàn / Thấu chi (Revolving Credit)

**1. Là gì?**
Tín dụng Tuần hoàn (Revolving Credit / Open-end Credit) là cấu trúc tín dụng mở linh hoạt mà trong đó ngân hàng cấp cho khách hàng một **hạn mức tín dụng tối đa (Credit Limit)** được phê duyệt sẵn; khách hàng có quyền tự do rút vốn, chi tiêu hoặc quẹt thẻ nhiều lần tùy ý trong phạm vi hạn mức đó, và **khi người vay hoàn trả lại số tiền đã sử dụng thì hạn mức khả dụng sẽ tự động được khôi phục lại (tuần hoàn)** để tiếp tục sử dụng mà không cần phải làm lại thủ tục xin vay. Tiền lãi chỉ phát sinh trên số tiền thực tế đã rút ra sử dụng và theo số ngày thực tế sử dụng. Hai hình thức phổ biến nhất là Thẻ tín dụng (Credit Card) và Hạn mức thấu chi tài khoản (Overdraft). Nếu chỉ nhớ một điều: **Tín dụng tuần hoàn là "chiếc ví dự phòng" có sẵn tiền: rút ra dùng bao nhiêu thì trả bấy nhiêu, trả xong hạn mức lại đầy như cũ.**

**2. Hoạt động thế nào?**
- Quy trình tuần hoàn dòng vốn:
  1. Ngân hàng phê duyệt hạn mức tín dụng 100 triệu đồng.
  2. Khách hàng quẹt chi tiêu 30 triệu $\rightarrow$ Hạn mức khả dụng còn lại là 70 triệu đồng.
  3. Đến kỳ sao kê, khách hàng nộp trả lại 20 triệu $\rightarrow$ Hạn mức khả dụng lập tức tự động hồi phục lên thành $70 + 20 = 90$ triệu đồng.
- Không có kỳ hạn trả nợ cố định cho từng món rút: Người vay chỉ cần thanh toán **Số tiền tối thiểu hàng tháng (Minimum Payment)** (thường từ 2% đến 5% dư nợ) để không bị phạt quá hạn; phần dư nợ còn lại được phép chuyển sang kỳ sau và chịu lãi suất theo thỏa thuận.
- Cực kỳ thuận tiện để tài trợ vốn lưu động linh hoạt cho doanh nghiệp (hạn mức tín dụng duy trì 1 năm) hoặc chi tiêu sinh hoạt đột xuất của cá nhân.

**3. Công thức & mô hình**
Hạn mức tín dụng khả dụng tại thời điểm $t$ ($CL_{\text{available}}$):

$$
CL_{\text{available}} = CL_{\text{approved}} - \text{Dư nợ thực tế đang sử dụng} (D_t)
$$

Tiền lãi phát sinh trong chu kỳ thanh toán $T$ ngày:

$$
\text{Tiền lãi} = \sum_{k=1}^{T} D_k \times \frac{r_{\text{annual}}}{365}
$$

Trong đó $D_k$ là số dư nợ thực tế cuối ngày thứ $k$. Nếu $D_k = 0$, khách hàng hoàn toàn không mất một đồng tiền lãi nào dù hạn mức phê duyệt là hàng tỷ đồng.

**4. Ví dụ**
- Thẻ tín dụng cá nhân: Bạn có thẻ tín dụng hạn mức 50 triệu VND. Tháng này bạn quẹt mua vé máy bay và ăn uống hết 15 triệu VND. Sau đó bạn nhận lương nộp trả lại đủ 15 triệu VND trong thời gian miễn lãi 45 ngày: Bạn không mất một đồng tiền lãi nào và hạn mức khả dụng lại trở về mốc 50 triệu VND.
- Hạn mức thấu chi (Overdraft) cho doanh nghiệp: Công ty may mặc được ngân hàng cấp hạn mức thấu chi 5 tỷ VND trên tài khoản thanh toán. Vào ngày trả lương công nhân, tài khoản công ty chỉ có 2 tỷ, ngân hàng tự động cho thấu chi thêm 3 tỷ VND. 5 ngày sau khi đối tác thanh toán tiền hàng đổ về tài khoản, khoản thấu chi 3 tỷ được tự động bù trừ dứt điểm và công ty chỉ phải trả tiền lãi cho đúng 5 ngày sử dụng 3 tỷ đó.
- Cạm bẫy trả tối thiểu (Minimum Payment Trap): Nếu nợ thẻ tín dụng 50 triệu và mỗi tháng chỉ trả mức tối thiểu 5%, bạn có thể mất tới 15–20 năm và số tiền lãi phải trả sẽ gấp đôi số nợ gốc ban đầu.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Cung cấp nguồn đệm thanh khoản khẩn cấp tức thời cho cá nhân và tối ưu hóa chi phí vốn lưu động cho doanh nghiệp.
- Tranh luận: Lãi suất của tín dụng tuần hoàn thường rất cao (từ 18% đến 36%/năm); cơ chế trả góp tối thiểu dễ khiến người tiêu dùng trẻ rơi vào vòng xoáy nợ nần không lối thoát.
- Lỗi thường gặp: Nghĩ rằng cứ được cấp hạn mức tín dụng là bị tính lãi ngay; ngân hàng chỉ bắt đầu tính lãi khi bạn thực tế quẹt thẻ hoặc rút tiền mặt ra khỏi hạn mức đó.

**6. Liên kết**
- [Khoản vay trả góp](#1-khoản-vay-trả-góp-installment-loan) · [Thẻ tín dụng](06_Credit_Cards_and_Revolving_Lines.md) · [Hạn mức tín dụng](06_Credit_Cards_and_Revolving_Lines.md)

---

## 3. Khoản vay có Bảo đảm (Secured Loan)

**1. Là gì?**
Khoản vay có Bảo đảm (Secured Loan / Collateralized Loan) là loại hình hợp đồng tín dụng mà trong đó bên đi vay cam kết gán nợ hoặc thế chấp một tài sản có giá trị hợp pháp cụ thể (gọi là Tài sản bảo đảm - Collateral, như bất động sản, ô tô, sổ tiết kiệm, cổ phiếu niêm yết) cho bên cho vay để bảo đảm cho việc thực hiện nghĩa vụ trả nợ. Nếu người đi vay bị mất khả năng thanh toán hoặc vi phạm hợp đồng nghiêm trọng (vỡ nợ), bên cho vay có toàn quyền pháp lý **tịch thu, phát mại và bán đấu giá tài sản bảo đảm đó để ưu tiên thu hồi toàn bộ số nợ gốc và lãi**. Nhờ có sự bảo đảm an toàn bằng tài sản thật, các khoản vay có bảo đảm luôn có **hạn mức vay lớn, thời hạn vay dài và mức lãi suất ưu đãi thấp hơn nhiều** so với vay tín chấp. Nếu chỉ nhớ một điều: **Khoản vay có bảo đảm là vay tiền có "vật thế thân": không trả được nợ thì mất tài sản thế chấp.**

**2. Hoạt động thế nào?**
- Quy trình quản trị giao dịch bảo đảm theo luật định:
  1. *Định giá tài sản bảo đảm:* Ngân hàng hoặc công ty thẩm định giá độc lập xác định giá trị thị trường thực tế của tài sản.
  2. *Áp dụng tỷ lệ cho vay trên giá trị (LTV - Loan-to-Value):* Để phòng ngừa rủi ro giá tài sản sụt giảm, ngân hàng chỉ cho vay từ $60\%$ đến $80\%$ giá trị thẩm định của bất động sản.
  3. *Đăng ký biện pháp bảo đảm:* Thực hiện công chứng hợp đồng thế chấp và đăng ký giao dịch bảo đảm tại cơ quan nhà nước có thẩm quyền (Văn phòng Đăng ký Đất đai đối với nhà đất, hoặc Cục Đăng ký Giao dịch Bảo đảm đối với động sản). Việc đăng ký này xác lập quyền ưu tiên thanh toán số 1 của ngân hàng trước mọi chủ nợ khác.
  4. *Quản lý tài sản:* Bên vay vẫn được quyền chiếm hữu và sử dụng tài sản (ở trong nhà, lái xe đi lại) nhưng ngân hàng giữ giấy tờ gốc (Sổ đỏ, Giấy đăng ký xe).

**3. Công thức & mô hình**
Tỷ lệ Cho vay trên Giá trị Tài sản Bảo đảm (Loan-to-Value Ratio - LTV):

$$
\text{LTV} = \frac{\text{Số tiền được vay}}{\text{Giá trị định giá của Tài sản Bảo đảm}} \times 100\% \le \text{Trần an toàn } (70\% - 80\%)
$$

Xác định tổn thất khi vỡ nợ (Loss Given Default - LGD):
$$
\text{LGD} = 1 - \text{Tỷ lệ thu hồi (Recovery Rate)} = 1 - \frac{\text{Giá trị phát mại tài sản sau chi phí}}{\text{Tổng dư nợ khi vỡ nợ}} \approx 0 - 20\%
$$

Nhờ có tài sản bảo đảm, tỷ lệ tổn thất thực tế của ngân hàng thấp hơn rất nhiều so với cho vay tín chấp (vốn có $\text{LGD} \approx 80\%–100\%$).

**4. Ví dụ**
- Bạn sở hữu một căn nhà được ngân hàng BIDV thẩm định giá 4 tỷ VND. Ngân hàng áp dụng tỷ lệ $\text{LTV} = 70\%$, cho phép bạn vay tối đa là: $4 \times 70\% = 2,8$ tỷ VND với lãi suất ưu đãi 7,5%/năm thời hạn 20 năm để kinh doanh. Ngân hàng giữ Sổ hồng gốc; nếu bạn vỡ nợ, ngân hàng sẽ phát mại căn nhà để thu hồi nợ.
- Vay cầm cố Sổ tiết kiệm: Bạn có sổ tiết kiệm 500 triệu chưa đến ngày đáo hạn, cần tiền gấp 400 triệu trong 1 tháng. Bạn mang sổ đến ngân hàng cầm cố để vay ngay 400 triệu với lãi suất chỉ chênh lệch khoảng 1% so với lãi suất tiết kiệm mà không bị mất lãi sổ tiết kiệm cũ.
- Khủng hoảng tịch thu nhà: Trong cuộc khủng hoảng tài chính Mỹ 2008, khi giá nhà sụp đổ vượt quá giá trị khoản nợ (LTV > 100% - nợ bị âm vốn chủ sở hữu), hàng triệu căn nhà đã bị các ngân hàng phát mại tịch thu (Foreclosure).

**5. Ứng dụng & tranh luận**
- Ứng dụng: Trụ cột của các khoản vay mua nhà (Mortgage), tài trợ đầu tư cơ sở hạ tầng, mua sắm máy móc thiết bị và cấp hạn mức vốn kinh doanh lớn cho doanh nghiệp.
- Tranh luận: "Tâm lý ỷ lại vào tài sản thế chấp" (Collateral-based lending) - Các ngân hàng tại các nước đang phát triển quá phụ thuộc vào đất đai làm tài sản thế chấp, dẫn đến việc bỏ rơi các doanh nghiệp công nghệ, dịch vụ đổi mới sáng tạo chỉ có tài sản trí tuệ và dòng tiền tốt nhưng không sở hữu đất đai.
- Lỗi thường gặp: Nghĩ rằng ngân hàng muốn tịch thu tài sản của khách hàng; thực tế phát mại tài sản bảo đảm là biện pháp vạn bất đắc dĩ vì thủ tục kiện tụng bán đấu giá kéo dài nhiều năm tốn kém chi phí, ngân hàng luôn mong muốn người vay làm ăn có lãi để trả nợ bằng tiền mặt.

**6. Liên kết**
- [Khoản vay tín chấp](#4-khoản-vay-tín-chấp--không-bảo-đảm-unsecured-loan) · [Tài sản bảo đảm](#5-tài-sản-bảo-đảm--thế-chấp-collateral) · [Tỷ lệ LTV](08_Underwriting_Ratios_and_Credit_Risk.md)

---

## 4. Khoản vay Tín chấp / Không bảo đảm (Unsecured Loan)

**1. Là gì?**
Khoản vay Tín chấp (Unsecured Loan / Signature Loan) là loại hình hợp đồng tín dụng mà trong đó bên cho vay giải ngân vốn cho bên đi vay hoàn toàn **dựa trên uy tín tín dụng cá nhân (Creditworthiness), mức thu nhập ổn định và lịch sử trả nợ của người vay mà không yêu cầu bất kỳ tài sản bảo đảm hay tài sản thế chấp nào**. Nếu bên đi vay bị vỡ nợ, bên cho vay không có quyền ưu tiên phát mại bất kỳ tài sản cụ thể nào của người vay mà chỉ có tư cách như một chủ nợ không có bảo đảm thông thường trước tòa án. Để bù đắp cho rủi ro mất trắng vốn rất cao này, các khoản vay tín chấp luôn có **hạn mức vay nhỏ hơn, thời hạn vay ngắn hơn và mức lãi suất đắt hơn nhiều lần** so với vay có bảo đảm. Nếu chỉ nhớ một điều: **Vay tín chấp là vay bằng "chữ tín" và danh dự của bạn, không cần tài sản thế chấp nhưng phải chịu lãi suất cao.**

**2. Hoạt động thế nào?**
- Quy trình thẩm định tự động và khắt khe về dòng tiền:
  1. *Kiểm tra lịch sử tín dụng:* Soát xét toàn bộ lịch sử trả nợ trên hệ thống thông tin tín dụng quốc gia (như CIC tại Việt Nam); nếu khách hàng từng có nợ chú ý hoặc nợ xấu (từ nhóm 2 đến nhóm 5), hồ sơ sẽ lập tức bị hệ thống từ chối tự động.
  2. *Chứng minh thu nhập ổn định:* Kiểm tra sao kê bảng lương qua ngân hàng 3–6 tháng gần nhất, hợp đồng lao động, bảo hiểm xã hội hoặc hóa đơn tiền điện nước.
  3. *Chấm điểm tín dụng (Credit Scoring):* Áp dụng thuật toán tính toán xác suất vỡ nợ (Probability of Default - PD).
- Các sản phẩm vay tín chấp điển hình: Vay tiêu dùng theo lương, thẻ tín dụng, các khoản vay trả góp mua sắm điện máy và các khoản vay nhanh qua ứng dụng di động.

**3. Công thức & mô hình**
Mô hình Định giá Khoản vay Tín chấp dựa trên Rủi ro (Risk-based Pricing):

$$
r_{\text{unsecured}} = r_{\text{cost of funds}} + \text{Operating Costs} + \text{Expected Loss} + \text{Profit Margin}
$$

Trong đó Tổn thất Dự kiến (Expected Loss - $EL$):

$$
EL = \text{PD} \times \text{EAD} \times \text{LGD}
$$

Vì cho vay tín chấp không có tài sản thu hồi nên tỷ lệ tổn thất khi vỡ nợ $\text{LGD} \approx 90\%–100\%$, kéo theo $EL$ rất lớn, buộc ngân hàng phải áp mức lãi suất $r_{\text{unsecured}}$ lên tới **$18\%–35\%$/năm** để bù đắp cho những trường hợp khách hàng quỵt nợ.

**4. Ví dụ**
- Một nhân viên văn phòng có thu nhập chuyển khoản 20 triệu/tháng tại TP. Hồ Chí Minh: Ngân hàng VPBank hoặc Shinhan Bank cấp cho vay tín chấp tiêu dùng hạn mức gấp 10 lần lương (200 triệu VND) thời hạn 3 năm, không cần thế chấp nhà đất, giải ngân sau 24 giờ với lãi suất 18%/năm.
- Thẻ tín dụng: Toàn bộ hạn mức thẻ tín dụng mà bạn được cấp (ví dụ 50 triệu đồng) đều là tín dụng tín chấp thuần túy dựa trên uy tín và hồ sơ mở thẻ ban đầu.
- Rủi ro đối với người vay bùng nợ: Nếu cố tình quỵt nợ khoản vay tín chấp, người vay sẽ bị ghi nhận vết nhơ "Nợ nhóm 5" trên toàn bộ hệ thống CIC quốc gia, vĩnh viễn bị từ chối cấp tín dụng, mở thẻ hoặc vay mua nhà tại mọi ngân hàng thương mại trên toàn lãnh thổ Việt Nam.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Giải quyết các nhu cầu tài chính cấp bách tức thời (khám chữa bệnh, mua sắm đồ dùng gia đình), thúc đẩy tài chính toàn diện cho những người lao động không sở hữu bất động sản.
- Tranh luận: Hoạt động đòi nợ khủng bố tinh thần của một số công ty tài chính tiêu dùng và ứng dụng cho vay trực tuyến (gọi điện đe dọa người thân, bôi nhọ trên mạng xã hội) gây bức xúc dư luận, đòi hỏi cơ quan công an và NHNN phải liên tục thanh kiểm tra và xử lý hình sự.
- Lỗi thường gặp: Cho rằng vay tín chấp thì "không có tài sản nên ngân hàng không làm gì được"; ngân hàng hoàn toàn có quyền khởi kiện dân sự ra tòa án, yêu cầu cơ quan thi hành án cưỡng chế trích lương từ tài khoản hoặc kê biên tài sản hợp pháp của con nợ để thi hành bản án.

**6. Liên kết**
- [Khoản vay có bảo đảm](#3-khoản-vay-có-bảo-đảm-secured-loan) · [Thẻ tín dụng](06_Credit_Cards_and_Revolving_Lines.md) · [Điểm tín dụng (Credit Score)](07_Credit_Assessment_and_Scoring.md)

---

## 5. Tài sản Bảo đảm / Thế chấp (Collateral)

**1. Là gì?**
Tài sản Bảo đảm (Collateral / Tài sản thế chấp) là bất kỳ tài sản cụ thể nào có giá trị kinh tế, thuộc quyền sở hữu hoặc sử dụng hợp pháp của bên đi vay (hoặc của bên thứ ba bảo lãnh), được đem ra cam kết và cầm cố, thế chấp cho bên cho vay theo quy định pháp luật để bảo đảm cho việc thực hiện toàn bộ nghĩa vụ tài chính của khoản nợ. Nếu người đi vay vi phạm nghĩa vụ trả nợ, bên cho vay có quyền pháp lý phát mại xử lý tài sản này để trừ nợ. Tài sản bảo đảm đóng vai trò là **"nguồn trả nợ thứ hai" (Secondary source of repayment)** giúp triệt tiêu rủi ro mất vốn cho định chế tài chính. Nếu chỉ nhớ một điều: **Tài sản bảo đảm là vật có giá trị đặt cọc cho ngân hàng: con nợ không trả được tiền thì ngân hàng bán tài sản đó để lấy lại vốn.**

**2. Hoạt động thế nào?**
- Các loại tài sản bảo đảm chuẩn mực được các ngân hàng chấp nhận:
  1. *Bất động sản:* Đất ở, nhà ở, căn hộ chung cư có Giấy chứng nhận quyền sở hữu (Sổ đỏ, Sổ hồng) hợp pháp, không có tranh chấp (loại tài sản bảo đảm được ưa chuộng nhất tại Việt Nam).
  2. *Phương tiện vận tải:* Ô tô, tàu thủy, máy bay có đăng ký chính chủ.
  3. *Giấy tờ có giá:* Sổ tiết kiệm, chứng chỉ tiền gửi, trái phiếu chính phủ, cổ phiếu của các công ty niêm yết lớn trên sàn chứng khoán.
  4. *Quyền tài sản và tài sản hình thành trong tương lai:* Hợp đồng mua bán căn hộ hình thành trong tương lai, quyền đòi nợ từ hợp đồng kinh tế.
  5. *Hàng tồn kho và máy móc thiết bị nhà xưởng.*
- Yêu cầu đối với một tài sản bảo đảm tốt: Tính pháp lý minh bạch tuyệt đối, giá trị tương đối ổn định theo thời gian, dễ bảo quản định giá và có tính thanh khoản cao (dễ bán lại trên thị trường).

**3. Công thức & mô hình**
Giá trị tài sản bảo đảm được khấu trừ khi trích lập dự phòng theo quy định của NHNN (Thông tư 11/2021/TT-NHNN):

$$
C = V_{\text{thẩm định}} \times \text{Tỷ lệ khấu trừ tối đa} (r_c)
$$

Bảng tỷ lệ khấu trừ tối đa chuẩn mực:
- Tiền gửi bằng VND, Trái phiếu Chính phủ: $r_c = 100\%$.
- Tiền gửi bằng ngoại tệ: $r_c = 95\%$.
- Bất động sản nhà ở: $r_c = 50\%$.
- Bất động sản khác (đất nông nghiệp, thương mại): $r_c = 35\%–40\%$.
- Phương tiện vận tải: $r_c = 30\%$.

**4. Ví dụ**
- Bạn vay ngân hàng Techcombank 2 tỷ VND để mua căn hộ chung cư; căn hộ này được ngân hàng thẩm định giá là 3 tỷ VND. Bạn ký hợp đồng thế chấp chính căn hộ đó cho ngân hàng và đăng ký thế chấp tại Văn phòng Đăng ký Đất đai. Căn hộ này chính là Tài sản bảo đảm cho khoản vay 2 tỷ của bạn.
- Cầm cố cổ phiếu: Một đại gia bất động sản mang 10 triệu cổ phiếu niêm yết trên sàn HoSE (thị giá 30.000 đ/cổ phiếu = 300 tỷ VND) đến thế chấp tại công ty chứng khoán để vay gói Margin 150 tỷ VND. Nếu giá cổ phiếu rơi xuống dưới mức giá giải chấp (Call Margin), công ty chứng khoán có quyền tự động bán khớp lệnh số cổ phiếu này trên sàn để thu hồi nợ.
- Rủi ro định giá thổi phồng tài sản: Vụ án Ngân hàng SCB và Tập đoàn Vạn Thịnh Phát tại Việt Nam: Cán bộ ngân hàng cấu kết với các công ty thẩm định giá nâng khống giá trị các khu đất dự án lên gấp hàng chục lần so với giá trị thực tế để rút ruột hàng trăm nghìn tỷ đồng tiền gửi của người dân, gây ra hậu quả đặc biệt nghiêm trọng.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Giảm chi phí lãi vay cho người dân, bảo vệ an toàn bảng cân đối kế toán của toàn hệ thống ngân hàng thương mại.
- Tranh luận: Khó khăn trong việc xử lý và thu hồi tài sản bảo đảm tại Việt Nam; Nghị quyết 42/2017/QH14 của Quốc hội về thí điểm xử lý nợ xấu từng trao quyền thu giữ tài sản bảo đảm cho các ngân hàng, nhưng khi nghị quyết hết hiệu lực, việc xử lý tài sản bảo đảm vẫn gặp nhiều vướng mắc tại cơ quan thi hành án dân sự.
- Lỗi thường gặp: Nghĩ rằng hễ có tài sản thế chấp là ngân hàng sẽ cho vay ngay lập tức; ngân hàng chỉ cho vay khi người vay chứng minh được dòng tiền trả nợ từ thu nhập, ngân hàng không kinh doanh bất động sản nên không muốn nhận tài sản thế chấp về để bán.

**6. Liên kết**
- [Khoản vay có bảo đảm](#3-khoản-vay-có-bảo-đảm-secured-loan) · [Tỷ lệ LTV](08_Underwriting_Ratios_and_Credit_Risk.md) · [Dự phòng rủi ro tín dụng](../03_Banking_Systems/05_Profitability_Credit_Quality_and_Cost_of_Funds.md)

---

## Câu hỏi tự kiểm tra

1. Phân biệt sự khác nhau căn bản giữa Khoản vay trả góp đóng (Installment Loan) và Tín dụng tuần hoàn mở (Revolving Credit) về dòng tiền và tính chất hạn mức.
2. Tại sao Lãi suất của Khoản vay tín chấp (Unsecured Loan) luôn cao hơn rất nhiều so với Khoản vay có bảo đảm (Secured Loan)?
3. Trình bày quy trình 4 bước quản trị và đăng ký giao dịch bảo đảm đối với một tài sản thế chấp bất động sản tại ngân hàng.
4. "Bẫy thanh toán tối thiểu" (Minimum Payment Trap) trong việc sử dụng thẻ tín dụng vận hành như thế nào để bào mòn tài chính của người vay?
5. Trình bày các tiêu chuẩn cốt lõi để một tài sản được ngân hàng chấp nhận làm Tài sản bảo đảm tốt.

---

## Ghi chú nguồn

- Quốc hội Việt Nam: Bộ luật Dân sự số 91/2015/QH13 (Chương XVI về Biện pháp bảo đảm thực hiện nghĩa vụ).
- Ngân hàng Nhà nước Việt Nam: Thông tư số 39/2016/TT-NHNN quy định về hoạt động cho vay của tổ chức tín dụng.
- Ngân hàng Nhà nước Việt Nam: Thông tư số 11/2021/TT-NHNN quy định tỷ lệ khấu trừ tối đa của các loại tài sản bảo đảm.
- Federal Trade Commission (FTC): *Consumer Understanding of Closed-end vs. Open-end Credit*.