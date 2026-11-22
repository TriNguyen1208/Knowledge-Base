# Chuyên đề 4.2: Các Phương pháp Tính Lãi và Cấu trúc Lãi suất

Chuyên đề này phân tích cơ chế toán học của hai phương pháp tính lãi căn bản (Lãi đơn vs Lãi kép — kỳ quan thứ 8 của nhân loại), cùng ba cấu trúc lãi suất chủ đạo điều chỉnh dòng tiền trong các hợp đồng tín dụng: lãi suất cố định, lãi suất thả nổi và lãi suất biến đổi.

> Câu hỏi xuyên suốt: Tại sao Albert Einstein lại gọi lãi kép là "kỳ quan thứ tám của thế giới", và người đi vay mua nhà nên chọn lãi suất cố định hay lãi suất thả nổi trong một môi trường kinh tế bất định?

---

## 1. Lãi đơn (Simple Interest)

**1. Là gì?**
Lãi đơn (Simple Interest) là phương pháp tính tiền lãi mà trong đó tiền lãi phát sinh của mỗi kỳ thanh toán **chỉ được tính toán dựa trên số tiền nợ gốc ban đầu** và không bao giờ được cộng dồn vào nợ gốc để tính lãi cho các kỳ kế tiếp. Toàn bộ các khoản tiền lãi sinh ra ở các kỳ trước hoàn toàn độc lập và không tự sản sinh thêm bất kỳ đồng tiền lãi nào mới. Nếu chỉ nhớ một điều: **Lãi đơn là tiền lãi cố định chỉ tính trên số tiền gốc đầu tiên, lãi không sinh ra lãi.**

**2. Hoạt động thế nào?**
- Đặc điểm vận hành:
  - Số tiền lãi nhận được (hoặc phải trả) trong mỗi năm hoặc mỗi tháng luôn là một con số cố định và không đổi trong suốt toàn bộ thời gian của hợp đồng.
  - Phù hợp và phổ biến nhất trong các giao dịch tín dụng ngắn hạn (dưới 1 năm), chiết khấu thương phiếu, tín phiếu kho bạc hoặc các khoản cho vay tiêu dùng cầm đồ đơn giản.
- Quy luật tăng trưởng: Tăng trưởng giá trị tài sản theo phương pháp lãi đơn là **tăng trưởng tuyến tính theo đường thẳng (Linear Growth)**:
  $$
  V_t = P_0 + t \times (P_0 \cdot r)
  $$
- Hạn chế kinh tế: Trong dài hạn, phương pháp lãi đơn bỏ qua giá trị thời gian của các dòng tiền lãi đã phát sinh, làm suy giảm hiệu quả sinh lời thực tế của người đầu tư so với lãi kép.

**3. Công thức & mô hình**
Số tiền lãi đơn phát sinh ($I$) sau thời gian $t$ với lãi suất hàng năm $r$:

$$
I = P_0 \times r \times t
$$

Tổng giá trị cả gốc và lãi tích lũy được sau thời gian $t$ ($FV$):

$$
FV = P_0 + I = P_0 \times (1 + r \times t)
$$

Trong đó:
- $P_0$: Số tiền gốc ban đầu (Principal).
- $r$: Lãi suất danh nghĩa hàng năm (%/năm).
- $t$: Thời gian gửi hoặc vay (tính bằng năm; nếu tính theo ngày thì $t = \text{Số ngày} / 365$).

**4. Ví dụ**
- Ví dụ số minh họa: Bạn cho vay 100 triệu VND với lãi suất đơn 8%/năm trong thời gian 5 năm.
  - Tiền lãi mỗi năm cố định là: $100 \times 8\% = 8$ triệu VND/năm.
  - Sau 5 năm, tổng số tiền lãi thu được là: $8 \times 5 = 40$ triệu VND.
  - Tổng số tiền bạn nhận về sau 5 năm là: $100 + 40 = 140$ triệu VND.
- Đầu tư Tín phiếu Kho bạc Nhà nước: Mua tín phiếu kho bạc kỳ hạn 91 ngày mệnh giá 1 tỷ đồng với lãi suất đơn 3,65%/năm. Số tiền lãi nhận được khi đáo hạn là: $1.000 \times 3,65\% \times (91 / 365) = 9,1$ triệu VND.
- So sánh: Nếu cùng số tiền và lãi suất trên nhưng tính theo lãi kép, kết quả sau 5 năm sẽ là 146,93 triệu VND (lãi kép mang lại thêm gần 7 triệu VND tiền lãi phát sinh từ lãi).

**5. Ứng dụng & tranh luận**
- Ứng dụng: Giao dịch thị trường tiền tệ ngắn hạn, tính tiền phạt trả chậm vi phạm hợp đồng dân sự.
- Tranh luận: Một số hợp đồng vay tiêu dùng ghi lãi suất đơn tính theo tháng (ví dụ 1,5%/tháng) khiến người vay nhầm tưởng là rẻ, nhưng thực tế quy đổi theo năm đã lên tới 18%/năm.
- Lỗi thường gặp: Áp dụng công thức lãi đơn cho các kế hoạch tiết kiệm tích lũy hoặc đầu tư dài hạn 10–20 năm; điều này sẽ làm sai lệch hoàn toàn mô hình dự báo tài chính vì bỏ qua sức mạnh tích lũy của lãi kép.

**6. Liên kết**
- [Lãi kép](#2-lãi-kép-compound-interest) · [Tiền lãi](01_Credit_Fundamentals_and_Mechanics.md) · [Lãi suất](01_Credit_Fundamentals_and_Mechanics.md)

---

## 2. Lãi kép (Compound Interest)

**1. Là gì?**
Lãi kép (Compound Interest) là phương pháp tính tiền lãi mà trong đó số tiền lãi phát sinh ở mỗi kỳ thanh toán được **tự động cộng gộp trực tiếp vào số dư nợ gốc ban đầu** để làm cơ sở tính tiền lãi cho kỳ tiếp theo (quá trình này gọi là "Nhập gốc" hay "Tái đầu tư lãi"). Nhờ cơ chế này, tiền lãi của kỳ sau không chỉ sinh ra từ tiền gốc ban đầu mà còn sinh ra từ chính số tiền lãi của các kỳ trước đó ("Lãi mẹ đẻ lãi con"). Albert Einstein từng đưa ra câu châm ngôn nổi tiếng: *"Lãi kép là kỳ quan thứ tám của thế giới. Ai hiểu được nó, sẽ kiếm được nó; ai không hiểu, sẽ phải trả nó."* Nếu chỉ nhớ một điều: **Lãi kép là sự cộng dồn tiền lãi vào tiền gốc để biến lãi thành vốn mới tiếp tục sinh lời theo cấp số nhân.**

**2. Hoạt động thế nào?**
- Quy luật tăng trưởng: Tăng trưởng tài sản theo phương pháp lãi kép là **tăng trưởng theo hàm số mũ (Exponential Growth)**.
- Hai biến số quyền lực nhất định hình sức mạnh của lãi kép:
  1. *Thời gian ($t$):* Thời gian tích lũy càng dài, đường cong lãi kép càng uốn cong dựng đứng; phần lớn thành quả khổng lồ của lãi kép chỉ bùng nổ trong những năm cuối của chu kỳ.
  2. *Tần suất ghép lãi ($m$):* Tiền lãi được ghép càng thường xuyên (hàng năm $\rightarrow$ nửa năm $\rightarrow$ hàng quý $\rightarrow$ hàng tháng $\rightarrow$ hàng ngày $\rightarrow$ liên tục), số tiền lãi tích lũy cuối cùng càng lớn.
- Lãi kép là vũ khí tích lũy tài sản vĩ đại nhất của người tiết kiệm và đầu tư dài hạn, nhưng đồng thời cũng là "vòng xoáy hủy diệt tài chính" đối với những người đi vay nợ thẻ tín dụng hoặc nợ lãi suất cao.

**3. Công thức & mô hình**
Công thức tính giá trị tương lai ($FV$) với tần suất ghép lãi $m$ lần trong một năm:

$$
FV = P_0 \times \left(1 + \frac{r}{m}\right)^{m \times t}
$$

Trong trường hợp ghép lãi liên tục ($m \rightarrow \infty$):

$$
FV = P_0 \times e^{r \times t}
$$

Quy tắc 72 (Rule of 72) - Ước lượng nhanh số năm cần thiết để nhân đôi số tiền đầu tư với lãi suất $r$ (%/năm):

$$
\text{Số năm nhân đôi vốn} \approx \frac{72}{r}
$$

**4. Ví dụ**
- Ví dụ số minh họa sức mạnh thời gian: Một người trẻ 20 tuổi bắt đầu tiết kiệm đầu tư 5 triệu VND mỗi tháng với tỷ suất lợi nhuận kép bình quân 10%/năm. Đến năm 60 tuổi (sau 40 năm), tổng số tiền gốc thực nộp vào chỉ là $5 \times 12 \times 40 = 2,4$ tỷ VND, nhưng nhờ sức mạnh của lãi kép, tổng tài sản tích lũy được sẽ lên tới hơn **31,6 tỷ VND** (gấp hơn 13 lần số vốn bỏ ra).
- Ứng dụng Quy tắc 72: Nếu bạn gửi tiền với lãi suất kép 6%/năm, số tiền của bạn sẽ nhân đôi sau khoảng: $72 / 6 = 12$ năm. Nếu lãi suất là 9%/năm, số tiền sẽ nhân đôi chỉ sau: $72 / 9 = 8$ năm.
- Mặt trái của lãi kép đối với nợ thẻ tín dụng: Nợ thẻ tín dụng 50 triệu đồng với lãi suất 30%/năm ghép lãi hàng tháng. Nếu bạn chỉ trả số tiền tối thiểu và không thanh toán dứt điểm, sau 5 năm tổng số nợ tích lũy theo lãi kép sẽ vọt lên tới hơn **222 triệu VND**.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Nền tảng cốt lõi của mọi quyết định đầu tư tài chính, hoạch định hưu trí, định giá tài sản và quản trị danh mục đầu tư.
- Tranh luận: Thói quen tiêu dùng ngắn hạn của con người hiện đại có xu hướng chiết khấu quá mức tương lai (Hyperbolic Discounting), khiến đa số mọi người không đủ kiên nhẫn để chờ đợi thành quả của lãi kép phát huy tác dụng.
- Lỗi thường gặp: Bắt đầu đầu tư quá muộn; trong công thức lãi kép, việc bắt đầu sớm hơn 5–10 năm mang lại sức mạnh tài sản khủng khiếp hơn nhiều so với việc cố gắng kiếm lãi suất cao hơn một vài %.

**6. Liên kết**
- [Lãi đơn](#1-lãi-đơn-simple-interest) · [Lãi suất thực tế / APY](03_Yields_APR_APY_and_Loan_Terms.md) · [Tiết kiệm tích lũy](01_Credit_Fundamentals_and_Mechanics.md)

---

## 3. Lãi suất Cố định (Fixed Interest Rate)

**1. Là gì?**
Lãi suất Cố định (Fixed Interest Rate) là mức lãi suất được thỏa thuận và khóa cứng ở một tỷ lệ phần trăm cụ thể không đổi trong suốt toàn bộ thời hạn vay hoặc trong một giai đoạn cố định xác định trước theo hợp đồng tín dụng, **bất chấp mọi biến động lên xuống của lãi suất trên thị trường tài chính hay các quyết định điều chỉnh của Ngân hàng Trung ương**. Nếu chỉ nhớ một điều: **Lãi suất cố định giúp người đi vay biết chính xác 100% số tiền lãi phải trả mỗi tháng từ đầu cho đến cuối kỳ hạn.**

**2. Hoạt động thế nào?**
- Phân bổ rủi ro lãi suất giữa hai bên:
  - *Người đi vay (Borrower):* Được bảo vệ an toàn tuyệt đối trước nguy cơ lãi suất thị trường tăng vọt; dễ dàng lập kế hoạch chi tiêu ngân sách cố định hàng tháng mà không sợ rủi ro giật cục.
  - *Ngân hàng cho vay (Lender):* Gánh chịu toàn bộ rủi ro lãi suất (Interest Rate Risk). Nếu lãi suất huy động trên thị trường tăng cao, ngân hàng vẫn buộc phải cho khách hàng vay theo mức lãi suất cố định thấp đã ký, làm biên lợi nhuận của ngân hàng bị xói mòn.
- Định giá phần bù rủi ro: Do ngân hàng phải gánh rủi ro thay cho người vay, **mức lãi suất cố định ban đầu luôn được định giá cao hơn** so với lãi suất thả nổi tại cùng thời điểm phát hành (khoản chênh lệch này gọi là phần bù rủi ro lãi suất).
- Thường áp dụng phổ biến cho: Vay mua nhà ở dài hạn (tại các nước phát triển như Mỹ), vay mua ô tô trả góp, và phát hành trái phiếu chính phủ/trái phiếu doanh nghiệp.

**3. Công thức & mô hình**
Số tiền thanh toán niên kim cố định hàng tháng ($PMT$) cho khoản vay gốc $P_0$, kỳ hạn $n$ tháng với lãi suất cố định tháng $r = i_{\text{fixed}} / 12$:

$$
PMT = P_0 \times \frac{r(1 + r)^n}{(1 + r)^n - 1} = \text{Hằng số không đổi suốt } n \text{ kỳ}
$$

Phương trình này bảo đảm tổng tiền gốc và lãi trả hàng tháng luôn là một con số cố định.

**4. Ví dụ**
- Hoa Kỳ: Khoản vay thế chấp mua nhà phổ biến nhất là kỳ hạn 30 năm lãi suất cố định (30-Year Fixed-Rate Mortgage). Hàng triệu gia đình Mỹ vay mua nhà vào năm 2020–2021 đã khóa cứng được mức lãi suất kỷ lục 2,8%–3,0%/năm suốt 30 năm; ngay cả khi Fed tăng lãi suất đẩy lãi suất thị trường năm 2023 lên 7,5%, số tiền họ đóng ngân hàng mỗi tháng vẫn không tăng dù chỉ 1 xu.
- Tại Việt Nam: Các ngân hàng thường chỉ áp dụng lãi suất cố định trong một khoảng thời gian ưu đãi ban đầu (Fixed Period) ngắn hạn, ví dụ: "Cố định 6,5%/năm trong 12 tháng đầu tiên hoặc 24 tháng đầu tiên", sau giai đoạn ưu đãi này khoản vay sẽ tự động chuyển sang chế độ lãi suất thả nổi.
- Counterfactual: Nếu bạn chọn lãi suất cố định 9%/năm trong 5 năm, và sau đó nền kinh tế suy thoái khiến lãi suất thị trường giảm sâu về 5%/năm, bạn sẽ bị thiệt hại vì phải tiếp tục trả mức lãi 9% đắt đỏ (trừ khi làm thủ tục tái tài trợ nợ - Refinancing).

**5. Ứng dụng & tranh luận**
- Ứng dụng: Lựa chọn tối ưu cho những người có thu nhập cố định, ghét rủi ro, và trong giai đoạn thị trường đang ở vùng đáy lãi suất dự báo sắp bước vào chu kỳ tăng lãi suất.
- Tranh luận: Chi phí trả nợ trước hạn - Để bù đắp rủi ro cố định lãi suất, ngân hàng thường áp dụng mức phí phạt trả trước hạn rất nặng nếu khách hàng muốn tất toán khoản vay sớm khi lãi suất giảm.
- Lỗi thường gặp: Nhầm gói "cố định ưu đãi 12 tháng đầu" với "cố định suốt đời khoản vay"; nhiều người vay mua nhà tại Việt Nam đã bị vỡ mộng và sốc tài chính khi hết thời gian cố định ưu đãi 1 năm, lãi suất thả nổi bật tăng thêm 4–5%.

**6. Liên kết**
- [Lãi suất thả nổi](#4-lãi-suất-thả-nổi-floating-interest-rate) · [Lãi suất biến đổi](#5-lãi-suất-biến-đổi-variable-interest-rate) · [Khoản vay thế chấp nhà (Mortgage)](05_Consumer_and_Commercial_Loan_Types.md)

---

## 4. Lãi suất Thả nổi (Floating Interest Rate)

**1. Là gì?**
Lãi suất Thả nổi (Floating Interest Rate) là cấu trúc lãi suất trong đó mức lãi suất của khoản vay không cố định mà được **tự động điều chỉnh định kỳ** (thường là 3 tháng, 6 tháng hoặc 12 tháng một lần) căn cứ vào sự biến động của một mức **Lãi suất Tham chiếu chuẩn trên thị trường (Benchmark / Reference Rate) cộng với một biên độ cố định (Margin / Spread)** đã được thỏa thuận trong hợp đồng tín dụng. Đây là mô hình cho vay trung và dài hạn phổ biến nhất tại hệ thống ngân hàng thương mại Việt Nam. Nếu chỉ nhớ một điều: **Lãi suất thả nổi lên xuống theo nhịp thở của thị trường: thị trường tăng thì lãi vay tăng, thị trường giảm thì lãi vay giảm.**

**2. Hoạt động thế nào?**
- Cơ chế xác định minh bạch theo công thức hai thành phần:
  1. *Lãi suất Tham chiếu (Base Rate):* Thường là lãi suất tiền gửi tiết kiệm 12 tháng trả sau bình quân của nhóm ngân hàng lớn (như Big 4 tại Việt Nam) hoặc lãi suất liên ngân hàng chuẩn (SOFR, EURIBOR). Thành phần này biến động theo thị trường.
  2. *Biên độ cố định (Margin / Spread):* Mức % cố định không đổi trong suốt thời hạn hợp đồng (ví dụ: $+3,5\%$/năm), phản ánh chi phí vận hành và phần bù rủi ro tín dụng của người vay.
- Chuyển giao rủi ro: Ngân hàng đã chuyển toàn bộ rủi ro biến động lãi suất thị trường sang cho người đi vay gánh chịu. Khi chi phí huy động vốn của ngân hàng tăng lên, ngân hàng lập tức tăng lãi suất cho vay tương ứng để bảo toàn biên lãi ròng (NIM).
- Kỳ điều chỉnh lãi suất (Reset Period): Vào ngày điều chỉnh, hệ thống ngân hàng tự động cập nhật lại mức lãi suất mới và gửi thông báo lịch trả nợ mới cho khách hàng.

**3. Công thức & mô hình**
Công thức toán học xác định Lãi suất Thả nổi tại kỳ điều chỉnh $t$:

$$
i_{\text{floating}, t} = \text{Benchmark Rate}_t + \text{Margin}
$$

Trong đó:
- $\text{Benchmark Rate}_t$: Lãi suất tham chiếu tại ngày chốt lãi suất.
- $\text{Margin}$: Biên độ cố định ghi trong hợp đồng tín dụng.

**4. Ví dụ**
- Hợp đồng vay mua nhà tại Việt Nam: Khách hàng vay 1 tỷ VND thời hạn 15 năm tại BIDV.
  - Hợp đồng quy định: Lãi suất thả nổi sau ưu đãi = *Lãi suất tiền gửi tiết kiệm cá nhân 12 tháng của BIDV + Biên độ 3,5%/năm*, điều chỉnh 3 tháng/lần.
  - Trường hợp 1: Khi lãi suất tiết kiệm 12 tháng là 5,0%/năm $\rightarrow$ Lãi suất vay là: $5,0\% + 3,5\% = 8,5\%$/năm.
  - Trường hợp 2 (Lãi suất thị trường tăng sốc cuối năm 2022): Khi lãi suất tiết kiệm 12 tháng tăng lên 7,5%/năm $\rightarrow$ Lãi suất vay lập tức bật tăng lên: $7,5\% + 3,5\% = 11,0\%$/năm, khiến số tiền lãi hàng tháng người vay phải trả tăng thêm hàng triệu đồng.
- Chuẩn quốc tế: Các hợp đồng tín dụng quốc tế (như các khoản vay hợp vốn bằng USD) áp dụng công thức: Lãi suất = $\text{SOFR} + 2,0\%$/năm.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Giúp ngân hàng bảo vệ an toàn bảng cân đối kế toán trước các cú sốc lạm phát và lãi suất vĩ mô; cho phép người vay được hưởng lợi ngay lập tức khi nền kinh tế bước vào chu kỳ giảm lãi suất.
- Rủi ro đối với người vay (Payment Shock): Khi lãi suất thị trường tăng vọt, số tiền phải trả hàng tháng tăng quá khả năng chi trả của người vay, có thể đẩy người vay vào tình trạng vỡ nợ hàng loạt.
- Lỗi thường gặp: Không đọc kỹ quy định về "Lãi suất tham chiếu" trong hợp đồng; một số ngân hàng mập mờ sử dụng "Lãi suất cơ sở do ngân hàng tự công bố nội bộ" thay vì lãi suất tiết kiệm công khai, khiến người vay chịu thiệt thòi khi ngân hàng neo lãi suất cơ sở ở mức cao.

**6. Liên kết**
- [Lãi suất cố định](#3-lãi-suất-cố-định-fixed-interest-rate) · [Lãi suất biến đổi](#5-lãi-suất-biến-đổi-variable-interest-rate) · [Biên lãi ròng (NIM)](05_Profitability_Credit_Quality_and_Cost_of_Funds.md)

---

## 5. Lãi suất Biến đổi (Variable Interest Rate)

**1. Là gì?**
Lãi suất Biến đổi (Variable Interest Rate / Adjustable-rate) là thuật ngữ mang tính bao quát chỉ bất kỳ cấu trúc lãi suất nào có khả năng thay đổi mức phần trăm trong suốt vòng đời của hợp đồng tín dụng. Thuật ngữ này thường được dùng thay thế cho Lãi suất thả nổi (Floating Rate), nhưng trong quản trị tài chính chuyên sâu, Lãi suất biến đổi còn bao gồm các thỏa thuận có điều kiện ràng buộc bổ sung tinh vi hơn, như: **Lãi suất có khung trần - sàn (Caps and Floors)**, lãi suất điều chỉnh theo bậc thang thời gian định sẵn (Step-up rate), hoặc lãi suất điều chỉnh theo sự thay đổi của xếp hạng tín nhiệm của người đi vay. Nếu chỉ nhớ một điều: **Lãi suất biến đổi là lãi suất có thể thay đổi theo thời gian nhưng thường được cài thêm van giới hạn an toàn trần và sàn.**

**2. Hoạt động thế nào?**
Các cấu trúc phái sinh đi kèm lãi suất biến đổi nhằm bảo vệ các bên:
1. **Trần lãi suất (Interest Rate Cap):** Mức lãi suất tối đa mà bên cho vay được phép thu; bảo vệ người đi vay không bị vỡ nợ khi lãi suất thị trường bùng nổ quá cao.
2. **Sàn lãi suất (Interest Rate Floor):** Mức lãi suất tối thiểu mà bên cho vay chắc chắn nhận được; bảo vệ ngân hàng không bị lỗ vốn khi lãi suất thị trường giảm sâu về 0%.
3. **Biên độ dao động mỗi kỳ (Periodic Adjustment Cap):** Giới hạn mức tăng tối đa trong một lần điều chỉnh (ví dụ: mỗi kỳ điều chỉnh không được tăng quá $1\%–2\%$ so với kỳ liền trước) để người vay không bị sốc dòng tiền.
- Hợp đồng Vay mua nhà Lãi suất Điều chỉnh tại Mỹ (ARM - Adjustable Rate Mortgage): Ví dụ gói "5/1 ARM" nghĩa là cố định lãi suất trong 5 năm đầu tiên, sau đó biến đổi hàng năm (1 năm điều chỉnh 1 lần) kèm theo giới hạn trần - sàn.

**3. Công thức & mô hình**
Khoảng biến thiên của Lãi suất Biến đổi có gắn công cụ Collar (kết hợp Cap và Floor):

$$
i_{\text{floor}} \le i_{\text{variable}, t} = \min\left(i_{\text{cap}}, \quad \max(i_{\text{floor}}, \quad \text{Benchmark}_t + \text{Margin})\right) \le i_{\text{cap}}
$$

Giới hạn bước nhảy chu kỳ:
$$
|i_{\text{variable}, t} - i_{\text{variable}, t-1}| \le \Delta_{\text{max}}
$$

**4. Ví dụ**
- Gói vay 5/1 ARM tại Mỹ: Khoản vay có lãi suất ban đầu 4,0%, kèm cấu trúc giới hạn "2/2/5":
  - Số 2 đầu tiên: Lần điều chỉnh đầu tiên ở năm thứ 6 không được tăng quá 2% (tối đa lên 6,0%).
  - Số 2 thứ hai: Các năm tiếp theo mỗi năm không được tăng quá 2%.
  - Số 5 cuối cùng: Suốt 30 năm vay, lãi suất không bao giờ được phép vượt quá mức trần tối đa là $4,0\% + 5\% = 9,0\%$ (Interest Rate Cap).
- Khủng hoảng Subprime 2007–2008: Hàng triệu người vay nghèo tại Mỹ đã ký các hợp đồng vay ARM với lãi suất ưu đãi ban đầu siêu rẻ ("Teaser Rate" 1–2%), sau 2 năm lãi suất biến đổi tăng vọt lên 8–10% trong khi không có trần bảo vệ hiệu quả, dẫn đến làn sóng vỡ nợ và bị tịch thu nhà hàng loạt.
- Doanh nghiệp Việt Nam phát hành trái phiếu: Nhiều doanh nghiệp phát hành trái phiếu thả nổi có cam kết: "Lãi suất bằng lãi suất tiền gửi Big 4 cộng biên độ 4,0%/năm, nhưng không thấp hơn sàn 9,5%/năm" để thu hút nhà đầu tư.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Cung cấp giải pháp linh hoạt dung hòa lợi ích và chia sẻ rủi ro giữa người đi vay và bên cho vay.
- Tranh luận: Tính phức tạp của hợp đồng có thể bị lạm dụng để bẫy những khách hàng cá nhân thiếu kiến thức tài chính; đòi hỏi cơ quan quản lý phải tăng cường minh bạch thông tin hợp đồng mẫu.
- Lỗi thường gặp: Đồng nhất hoàn toàn Variable Rate và Floating Rate; trên thị trường tài chính quốc tế, Floating Rate thường neo cứng vào một chỉ số thị trường đơn thuần (như SOFR), trong khi Variable Rate thường có thêm các điều kiện tùy biến trần/sàn và chu kỳ riêng biệt.

**6. Liên kết**
- [Lãi suất thả nổi](#4-lãi-suất-thả-nổi-floating-interest-rate) · [Lãi suất cố định](#3-lãi-suất-cố-định-fixed-interest-rate) · [Phái sinh lãi suất](../05_Financial_Institutions/04_Market_Intermediaries_and_Infrastructure.md)

---

## Câu hỏi tự kiểm tra

1. So sánh sự khác nhau về bản chất và tốc độ tăng trưởng tài sản giữa phương pháp Lãi đơn (Simple Interest) và Lãi kép (Compound Interest).
2. Quy tắc 72 vận hành như thế nào? Tính số năm cần thiết để một khoản đầu tư nhân đôi giá trị nếu lãi suất kép là 8%/năm.
3. Phân tích ưu và nhược điểm của Lãi suất cố định và Lãi suất thả nổi dưới góc độ của người đi vay mua nhà cá nhân.
4. Trình bày công thức hai thành phần cấu thành nên Lãi suất Thả nổi phổ biến tại các ngân hàng thương mại Việt Nam.
5. Cơ chế "Trần lãi suất" (Cap) và "Sàn lãi suất" (Floor) trong hợp đồng tín dụng lãi suất biến đổi có vai trò bảo vệ các bên như thế nào?

---

## Ghi chú nguồn

- Brealey, R. A., Myers, S. C., & Allen, F. (2020). *Principles of Corporate Finance*, McGraw-Hill Education.
- Consumer Financial Protection Bureau (CFPB): *Consumer Handbook on Adjustable-Rate Mortgages (CHARM booklet)*.
- Ngân hàng Nhà nước Việt Nam: Các văn bản hướng dẫn về cách tính lãi trong hoạt động nhận tiền gửi và cho vay (Thông tư 14/2017/TT-NHNN).
- Federal Reserve Bank of St. Louis: Historical Mortgage Rates Data (FRED).