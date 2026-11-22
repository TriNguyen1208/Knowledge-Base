# Chuyên đề 4.6.2: Giá trị Thời gian của Tiền và Định giá Tài chính

Chuyên đề này đi sâu vào nguyên lý nền tảng tối thượng của toàn bộ nền kinh tế học tài chính thế giới: Giá trị thời gian của tiền (Time Value of Money - TVM), Giá trị tương lai (Future Value - FV), Giá trị hiện tại (Present Value - PV), Giá trị hiện tại thuần (Net Present Value - NPV), và Tỷ suất chiết khấu (Discount Rate).

> Câu hỏi xuyên suốt: Tại sao một đồng tiền nằm trong tay bạn ngày hôm nay luôn luôn có giá trị cao hơn một đồng tiền được hứa hẹn sẽ trả cho bạn vào ngày mai, và làm thế nào để quy đổi mọi dòng tiền tương lai về một thước đo duy nhất của hiện tại?

---

## 1. Giá Trị Thời Gian của Tiền (Time Value of Money - TVM)

**1. Là gì?**
Giá trị thời gian của tiền là nguyên lý tài chính cốt lõi khẳng định rằng: một khoản tiền nhất định nhận được trong tay ở thời điểm hiện tại luôn có giá trị kinh tế cao hơn chính khoản tiền đó nhận được trong tương lai. Ba nguyên nhân kinh tế căn bản tạo nên hiện tượng này bao gồm: (1) Chi phí cơ hội của việc đầu tư (tiền có sẵn hôm nay có thể mang đi gửi tiết kiệm hoặc đầu tư để sinh thêm lãi), (2) Sức mua bị xói mòn bởi lạm phát (giá cả hàng hóa tương lai có xu hướng tăng cao hơn hôm nay), và (3) Rủi ro bất định (khoản tiền trong tương lai luôn đi kèm rủi ro đối tác không trả được nợ hoặc bạn không còn sống để nhận). Nếu chỉ nhớ một điều: **Thời gian là tiền bạc theo nghĩa đen toán học; thời gian có thể sinh ra tiền, và tiền tệ bị chiết khấu giá trị theo dòng chảy của thời gian.**

**2. Hoạt động thế nào?**
- Hai chiều vận động đối xứng của dòng tiền:
  1. Chiều xuôi (Compounding - Tích lũy về tương lai): Đưa một khoản tiền ở hiện tại tiến về tương lai bằng cách nhân với thừa số tích lũy $(1 + r)^t \rightarrow$ Tìm ra Giá trị tương lai ($FV$).
  2. Chiều ngược (Discounting - Chiết khấu về hiện tại): Kéo một dòng tiền dự kiến nhận được trong tương lai quay trở về thời điểm hôm nay bằng cách chia cho thừa số chiết khấu $(1 + r)^t \rightarrow$ Tìm ra Giá trị hiện tại ($PV$).
- Cơ sở của mọi quyết định tài chính: Mọi quyết định mua bảo hiểm, định giá cổ phiếu, mua nhà trả góp, lựa chọn phương án nhận lương hưu một lần hay nhận lương hưu hàng tháng đều là các bài toán so sánh dựa trên nguyên lý TVM.

**3. Công thức & mô hình**
Trục thời gian dòng tiền (Timeline of Cash Flows):

$$
PV \xleftrightarrow[\text{Chiết khấu (Discounting)} \div (1+r)^t]{\text{Ghép lãi (Compounding)} \times (1+r)^t} FV
$$

Thừa số lãi suất tích lũy (Future Value Factor):

$$
FVIF(r, t) = (1 + r)^t
$$

Thừa số giá trị hiện tại (Present Value Factor / Discount Factor):

$$
PVIF(r, t) = \frac{1}{(1 + r)^t}
$$

**4. Ví dụ**
- Lựa chọn kinh điển: Bạn trúng xổ số và được quyền chọn: (A) Nhận ngay 1 tỷ đồng tiền mặt hôm nay, hoặc (B) Nhận 1,3 tỷ đồng sau 3 năm nữa. Bạn nên chọn phương án nào? Giả định lãi suất đầu tư an toàn trên thị trường là 10%/năm (số liệu minh họa):
  - Tính Giá trị tương lai của phương án A sau 3 năm:
    $$
    FV_A = 1.000.000.000 \times (1 + 0,10)^3 = 1,331 \text{ tỷ đồng.}
    $$
  - So sánh: $1,331 \text{ tỷ} > 1,300 \text{ tỷ}$. Nhận 1 tỷ hôm nay đem đi đầu tư sẽ thu về 1,331 tỷ sau 3 năm, có lợi hơn 31 triệu đồng so với việc đợi 3 năm để nhận 1,3 tỷ.
  - Kết luận: Chọn nhận tiền ngay hôm nay!
- Thực tế hợp đồng thương mại: Khi các doanh nghiệp cho phép khách hàng trả chậm 1 năm mà không tính lãi, thực chất doanh nghiệp đã giảm giá gián tiếp cho khách hàng đúng bằng giá trị thời gian của tiền trong 1 năm đó.
- Counterfactual: Nếu lãi suất thị trường chỉ là 5%/năm, $FV_A = 1 \times (1 + 0,05)^3 = 1,157$ tỷ $\rightarrow$ Lúc này phương án nhận 1,3 tỷ sau 3 năm lại trở thành lựa chọn vượt trội hơn.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Nền móng cho việc định giá tài sản tài chính, thẩm định dự án đầu tư vốn, thiết kế kế hoạch tiết kiệm hưu trí.
- Ưu/nhược điểm: Thước đo toán học thống nhất chuẩn xác nhất; nhược điểm là kết quả so sánh phụ thuộc rất nhạy cảm vào việc lựa chọn tỷ suất chiết khấu $r$.
- Lỗi thường gặp: Đem cộng gộp các dòng tiền phát sinh ở các năm khác nhau lại với nhau mà không quy đổi chúng về cùng một thời điểm (vi phạm nguyên tắc bất khả cộng của dòng tiền không cùng kỳ hạn).

**6. Liên kết**
- [Giá trị hiện tại](#2-giá-trị-hiện-tại-present-value---pv) · [Giá trị tương lai](#3-giá-trị-tương-lai-future-value---fv) · [Tỷ suất chiết khấu](#5-tỷ-suất-chiết-khấu-discount-rate)

---

## 2. Giá Trị Hiện Tại (Present Value - PV)

**1. Là gì?**
Giá trị hiện tại (PV) là giá trị tương đương được quy đổi về thời điểm ngày hôm nay của một khoản tiền hoặc một chuỗi các dòng tiền dự kiến sẽ nhận được (hoặc phải chi trả) trong tương lai, sau khi đã chiết khấu theo một tỷ suất sinh lời (hoặc tỷ suất chiết khấu) xác định phản ánh chi phí cơ hội của vốn và rủi ro lạm phát. PV trả lời cho câu hỏi: "Khoản tiền được hứa trả trong tương lai kia thực sự đáng giá bao nhiêu tiền tươi thóc thật trong túi tôi ngay lúc này?". Nếu chỉ nhớ một điều: **Giá trị hiện tại là tấm gương lột bỏ chiếc áo khoác hào nhoáng của những lời hứa hẹn tiền bạc tương lai.**

**2. Hoạt động thế nào?**
- Quy luật nghịch đảo của chiết khấu:
  - Thời gian nhận tiền càng xa trong tương lai ($t \uparrow$), Giá trị hiện tại càng teo tóp lại ($PV \downarrow$).
  - Tỷ suất chiết khấu càng cao ($r \uparrow$), Giá trị hiện tại càng nhỏ bé ($PV \downarrow$).
- Ứng dụng trong việc mua bảo hiểm và lập kế hoạch hưu trí: Khi công ty bảo hiểm quảng cáo: "Sau 30 năm nữa bạn sẽ nhận được một khoản tiền đáo hạn khổng lồ 2 tỷ đồng", người có kiến thức tài chính lập tức bấm máy tính tính Giá trị hiện tại của 2 tỷ đó. Nếu chiết khấu theo lạm phát 5%/năm, 2 tỷ của 30 năm sau thực chất chỉ đáng giá khoảng 462 triệu đồng tiền hôm nay!

**3. Công thức & mô hình**
Công thức tính Giá trị hiện tại của một khoản tiền đơn lẻ:

$$
PV = \frac{FV}{(1 + r)^t}
$$

Giá trị hiện tại của một chuỗi dòng tiền không đều trong tương lai ($CF_1, CF_2, \dots, CF_n$):

$$
PV = \sum_{t=1}^{n} \frac{CF_t}{(1 + r)^t}
$$

Giá trị hiện tại của chuỗi dòng tiền đều vĩnh viễn (Perpetuity):

$$
PV_{\text{perpetuity}} = \frac{C}{r}
$$

**4. Ví dụ**
- Một đối tác kinh doanh đề nghị mua lại bản quyền phần mềm của bạn với lời hứa sẽ trả cho bạn đúng 500 triệu đồng sau 5 năm nữa. Tỷ suất lợi nhuận kỳ vọng của bạn trên thị trường là 9%/năm (số liệu minh họa):
  - Giá trị hiện tại thực tế của khoản tiền 500 triệu đó là:
    $$
    PV = \frac{500.000.000}{(1 + 0,09)^5} = \frac{500.000.000}{1,5386} \approx 324.970.000 \text{ đồng.}
    $$
  - Ý nghĩa kinh tế: Lời hứa 500 triệu sau 5 năm thực chất chỉ đáng giá đúng gần 325 triệu đồng ngày hôm nay. Nếu đối tác đồng ý trả ngay 350 triệu tiền mặt hôm nay, bạn nên nhận ngay 350 triệu thay vì đợi 5 năm.
- Định giá cổ phiếu chi trả cổ tức đều đặn: Một cổ phiếu cam kết trả cổ tức tiền mặt cố định 2.000 đồng/cổ phiếu mỗi năm vĩnh viễn, với tỷ suất lợi nhuận yêu cầu của nhà đầu tư là 10%/năm $\rightarrow$ Giá trị nội tại hợp lý của cổ phiếu đó là: $PV = 2.000 / 0,10 = 20.000$ đồng/cổ phiếu.
- Counterfactual: Nếu tỷ suất chiết khấu tăng lên 15%/năm, giá trị hiện tại của 500 triệu sau 5 năm sẽ sụt giảm thảm hại chỉ còn 248 triệu đồng.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Định giá trái phiếu, thẩm định giá trị nội tại của cổ phiếu, so sánh các gói hợp đồng bảo hiểm trọn đời.
- Ưu/nhược điểm: Công cụ định lượng chuẩn xác nhất; nhược điểm là giả định tỷ suất chiết khấu $r$ cố định trong suốt kỳ hạn có thể không phản ánh đúng thực tế lãi suất biến động.
- Lỗi thường gặp: Bỏ qua rủi ro tín dụng của bên cam kết trả tiền trong tương lai (tính PV mà quên đưa phần bù rủi ro vào tỷ suất chiết khấu).

**6. Liên kết**
- [Giá trị tương lai](#3-giá-trị-tương-lai-future-value---fv) · [Giá trị hiện tại thuần](#4-giá-trị-hiện-tại-thuần-net-present-value---npv) · [Tỷ suất chiết khấu](#5-tỷ-suất-chiết-khấu-discount-rate)

---

## 3. Giá Trị Tương Lai (Future Value - FV)

**1. Là gì?**
Giá trị tương lai (FV) là tổng số tiền mà một khoản đầu tư hiện tại (hoặc một chuỗi các khoản tiền đầu tư định kỳ) sẽ tăng trưởng và tích lũy đạt được tại một thời điểm xác định trong tương lai, sau khi đã cộng dồn toàn bộ tiền lãi kép sinh ra theo một mức tỷ suất sinh lời nhất định qua từng thời kỳ. FV trả lời cho câu hỏi: "Nếu tôi kiên định đầu tư số tiền này từ hôm nay, trong tương lai tôi sẽ có chính xác bao nhiêu tiền trong tay?". Nếu chỉ nhớ một điều: **Giá trị tương lai là bức tranh định lượng sự giàu có của bạn nếu bạn có đủ kỷ luật kiên nhẫn để cỗ máy lãi kép vận hành.**

**2. Hoạt động thế nào?**
- Hai trường hợp tính toán FV kinh điển:
  1. Khoản đầu tư một lần (Lump-sum): Đem một số vốn $P$ đầu tư một lần duy nhất hôm nay và để mặc cho nó tự sinh sôi nảy nở theo thời gian.
  2. Chuỗi niên kim tích lũy định kỳ (Ordinary Annuity): Đều đặn trích một số tiền cố định $PMT$ mỗi tháng hoặc mỗi năm để nạp thêm vào tài khoản đầu tư (chiến lược tiết kiệm đầu tư điển hình của người làm công ăn lương).
- Sức mạnh khuếch đại của số mũ: Ở những năm đầu, FV tăng trưởng chậm; nhưng khi số kỳ hạn $t$ vượt qua 15–20 năm, hàm số mũ $(1 + r)^t$ sẽ đẩy FV tăng vọt theo phương thẳng đứng.

**3. Công thức & mô hình**
Giá trị tương lai của một khoản tiền đơn lẻ:

$$
FV = PV \times (1 + r)^t
$$

Giá trị tương lai của chuỗi niên kim tích lũy định kỳ (Future Value of Ordinary Annuity):

$$
FV_{\text{annuity}} = PMT \times \frac{(1 + r)^t - 1}{r}
$$

Trong đó $PMT$ là số tiền đầu tư định kỳ mỗi kỳ, $r$ là tỷ suất sinh lời định kỳ, và $t$ là tổng số kỳ đầu tư.

**4. Ví dụ**
- Bạn 25 tuổi, quyết định trích đều đặn 3 triệu đồng mỗi tháng (36 triệu/năm, tương đương $PMT = 36.000.000$) đầu tư vào quỹ chỉ số cổ phiếu sinh lời bình quân 10%/năm ($r = 0,10$). Bạn kiên trì thực hiện suốt 35 năm cho đến khi nghỉ hưu ở tuổi 60 ($t = 35$) (số liệu minh họa):
  - Áp dụng công thức tính Giá trị tương lai của chuỗi niên kim:
    $$
    FV = 36.000.000 \times \frac{(1 + 0,10)^{35} - 1}{0,10} = 36.000.000 \times \frac{28,1024 - 1}{0,10} \approx 9,756 \text{ tỷ đồng!}
    $$
  - Phân tích kinh tế:
    - Tổng số vốn thực tế bạn tự bỏ tiền túi ra là: $36 \times 35 = 1,26$ tỷ đồng.
    - Tổng tiền lãi kép sinh ra: $9,756 - 1,26 \approx 8,496$ tỷ đồng (tiền lãi gấp gần 7 lần tiền gốc!).
    - Bạn chính thức trở thành triệu phú tài chính ở tuổi nghỉ hưu.
- Ứng dụng trong việc tính toán trượt giá lạm phát: Một bát phở hiện nay giá 50.000đ. Với lạm phát bình quân 4%/năm, giá của bát phở sau 30 năm nữa sẽ là: $FV = 50.000 \times (1 + 0,04)^{30} \approx 162.000$ đồng.
- Counterfactual: Nếu tỷ suất sinh lời giảm từ 10% xuống 5% (chỉ gửi tiết kiệm), $FV$ sau 35 năm sẽ sụt giảm từ 9,75 tỷ xuống chỉ còn 3,25 tỷ đồng (bốc hơi mất hơn 6,5 tỷ đồng của cải tích lũy).

**5. Ứng dụng & tranh luận**
- Ứng dụng: Xác định số tiền cần tiết kiệm hàng tháng để đạt các mục tiêu mua nhà, mua xe, nghỉ hưu; tính toán quỹ học phí đại học tương lai cho con cái.
- Ưu/nhược điểm: Tạo động lực hành động mạnh mẽ; nhược điểm là con số FV danh nghĩa lớn trong tương lai có thể gây ảo tưởng nếu không quy đổi về sức mua thực tế sau lạm phát.
- Lỗi thường gặp: Dùng tỷ suất sinh lời phi thực tế (như kỳ vọng 25–30%/năm liên tục suốt 30 năm) dẫn đến việc ước tính FV bị phóng đại quá mức.

**6. Liên kết**
- [Giá trị hiện tại](#2-giá-trị-hiện-tại-present-value---pv) · [Lãi kép](01_Mathematics_of_Compounding_and_Interest.md) · [Mục tiêu tài chính dài hạn](../01_Personal_Finance_Foundations/06_Financial_Goals_and_Time_Horizons.md)

---

## 4. Giá Trị Hiện Tại Thuần (Net Present Value - NPV)

**1. Là gì?**
Giá trị hiện tại thuần (NPV) là thước đo tài chính kinh điển và quyền lực nhất trong phân tích thẩm định đầu tư, được tính bằng tổng giá trị hiện tại (PV) của toàn bộ các dòng tiền mặt dự kiến thu về trong tương lai trừ đi tổng chi phí vốn đầu tư ban đầu phải bỏ ra ở thời điểm hiện tại. NPV đại diện cho phần của cải thặng dư ròng thực tế mà một quyết định đầu tư, kinh doanh hoặc mua sắm tài sản sẽ đóng góp thêm vào Giá trị tài sản ròng của bạn tính theo thời giá hôm nay. Nếu chỉ nhớ một điều: **Quy tắc vàng của đầu tư: Chỉ thực hiện những quyết định có NPV > 0; kiên quyết từ chối những dự án có NPV < 0.**

**2. Hoạt động thế nào?**
- Quy tắc ra quyết định theo NPV (Decision Rule):
  - $NPV > 0$: Quyết định đầu tư tạo ra giá trị gia tăng thặng dư ròng cho bạn $\rightarrow$ CHẤP THUẬN (Accept).
  - $NPV = 0$: Dự án chỉ vừa đủ hòa vốn chi phí cơ hội; bạn nhận lại đúng mức lợi suất kỳ vọng $r$ mà không có thặng dư thêm.
  - $NPV < 0$: Quyết định đầu tư phá hủy của cải của bạn; mức sinh lời thực tế thấp hơn chi phí cơ hội thay thế $\rightarrow$ TỪ CHỐI (Reject).
- Ưu thế vượt trội của NPV: NPV vượt trội hơn hẳn phương pháp "Thời gian hoàn vốn" (Payback Period) vì NPV tính đến toàn bộ các dòng tiền trong suốt vòng đời dự án và chiết khấu đầy đủ theo giá trị thời gian của tiền.

**3. Công thức & mô hình**
Phương trình Giá trị hiện tại thuần (NPV):

$$
NPV = \sum_{t=1}^{n} \frac{CF_t}{(1 + r)^t} - C_0
$$

Trong đó $C_0$ là chi phí vốn đầu tư ban đầu ở năm 0, $CF_t$ là dòng tiền ròng thu về ở năm $t$, $r$ là tỷ suất chiết khấu (chi phí cơ hội của vốn), và $n$ là vòng đời của dự án.

Mối quan hệ với Tỷ suất hoàn vốn nội bộ (IRR):

$$
NPV = 0 \iff r = IRR
$$

**4. Ví dụ**
- Đánh giá quyết định đầu tư mở một cửa hàng giặt là tự động (số liệu minh họa):
  - Chi phí đầu tư máy móc và mặt bằng ban đầu ($C_0$): 200 triệu đồng.
  - Dự phóng dòng tiền lợi nhuận ròng thu về đều đặn trong 3 năm: Năm 1 (80 triệu), Năm 2 (90 triệu), Năm 3 (100 triệu).
  - Tỷ suất chiết khấu chi phí cơ hội của bạn là 10%/năm ($r = 0,10$).
  - Tính toán PV của các dòng tiền tương lai:
    $$
    PV = \frac{80}{(1 + 0,10)^1} + \frac{90}{(1 + 0,10)^2} + \frac{100}{(1 + 0,10)^3} = 72,73 + 74,38 + 75,13 = 222,24 \text{ triệu đồng.}
    $$
  - Tính toán NPV:
    $$
    NPV = 222,24 - 200 = +22,24 \text{ triệu đồng.}
    $$
  - Kết luận: Vì $NPV = +22,24 \text{ triệu} > 0$, dự án này tạo ra giá trị thặng dư ròng cho bạn sau khi đã bù đắp đầy đủ 10% chi phí cơ hội vốn $\rightarrow$ Nên tiến hành đầu tư!
- Ứng dụng trong quyết định mua nhà hay thuê nhà: Bằng cách lập mô hình NPV dòng tiền của 2 phương án suốt 20 năm (tính cả tiền thuê, tiền lãi vay, thuế, sửa chữa và giá trị thanh lý nhà), cá nhân có thể đưa ra câu trả lời khách quan dựa trên số liệu toán học chứ không dựa vào cảm tính.
- Counterfactual: Nếu đối tác kinh doanh vẽ ra một dự án thu về 250 triệu sau 3 năm nhưng khi chiết khấu về hiện tại với lãi suất thị trường 12%, NPV bị âm 15 triệu $\rightarrow$ Quyết định đầu tư đó thực chất sẽ làm bạn nghèo đi.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Tiêu chuẩn vàng thẩm định mua bất động sản cho thuê, mở cơ sở kinh doanh, quyết định đầu tư học văn bằng hai.
- Ưu/nhược điểm: Thước đo tạo lập của cải chính xác nhất; nhược điểm là đòi hỏi phải dự phóng dòng tiền tương lai đáng tin cậy.
- Lỗi thường gặp: Lạc quan tếu khi ước tính dòng tiền vào ($CF_t$) và chọn tỷ suất chiết khấu $r$ quá thấp để làm đẹp con số NPV.

**6. Liên kết**
- [Giá trị hiện tại](#2-giá-trị-hiện-tại-present-value---pv) · [Tỷ suất chiết khấu](#5-tỷ-suất-chiết-khấu-discount-rate) · [Tài sản năng suất](04_Asset_Classification_and_Allocation.md)

---

## 5. Tỷ Suất Chiết Khấu (Discount Rate)

**1. Là gì?**
Tỷ suất chiết khấu là lãi suất hoặc tỷ lệ phần trăm được sử dụng để quy đổi các dòng tiền tương lai quay trở về giá trị hiện tại ngày hôm nay. Trong tài chính cá nhân và đầu tư, tỷ suất chiết khấu phản ánh ba yếu tố cốt lõi: (1) Chi phí cơ hội của việc sử dụng vốn (tỷ suất sinh lời của kênh đầu tư thay thế tốt nhất có cùng mức độ rủi ro), (2) Tỷ lệ lạm phát kỳ vọng làm mất giá sức mua, và (3) Phần bù rủi ro (Risk Premium) bù đắp cho sự bất định và nguy cơ dòng tiền tương lai không được thanh toán. Nếu chỉ nhớ một điều: **Tỷ suất chiết khấu là chiếc thước đo sự khắt khe của bạn đối với tương lai; dự án càng rủi ro thì tỷ suất chiết khấu bắt buộc phải càng cao.**

**2. Hoạt động thế nào?**
- Cơ chế tác động ngược chiều lên định giá:
  - Tỷ suất chiết khấu cao $\rightarrow$ Dòng tiền tương lai bị "ép giá" co nhỏ lại $\rightarrow$ Định giá tài sản giảm xuống.
  - Tỷ suất chiết khấu thấp (thời kỳ tiền tệ rẻ, lãi suất ngân hàng 0%) $\rightarrow$ Dòng tiền tương lai trở nên cực kỳ giá trị $\rightarrow$ Thúc đẩy bong bóng tăng giá của cổ phiếu công nghệ và bất động sản.
- Cấu trúc xác định tỷ suất chiết khấu chuẩn:
  - Lãi suất phi rủi ro ($r_f$): Thường lấy lãi suất trái phiếu chính phủ kỳ hạn 10 năm.
  - Phần bù lạm phát kỳ vọng ($\pi^e$).
  - Phần bù rủi ro thanh khoản và rủi ro tín dụng đối tác ($\theta$).

**3. Công thức & mô hình**
Mô hình Định giá Tài sản Vốn (CAPM - Capital Asset Pricing Model) để xác định tỷ suất chiết khấu vốn chủ sở hữu ($r_e$):

$$
r = r_f + \beta \times (r_m - r_f)
$$

Trong đó $r_f$ là lãi suất phi rủi ro, $\beta$ là hệ số đo lường rủi ro hệ thống của tài sản, và $(r_m - r_f)$ là phần bù rủi ro thị trường.

Quy tắc chiết khấu theo mức độ rủi ro cá nhân:

$$
\text{Discount Rate} = \text{Lãi suất tiền gửi an toàn} + \text{Phần bù rủi ro dự án (Risk Premium } 3\text{–}8\%)
$$

**4. Ví dụ**
- Định giá một lời hứa trả 100 triệu đồng sau 3 năm trong 2 hoàn cảnh rủi ro khác biệt (số liệu minh họa):
  - Hoàn cảnh 1 (Rủi ro cực thấp): Khoản tiền này do Kho bạc Nhà nước cam kết chi trả qua Trái phiếu Chính phủ. Tỷ suất chiết khấu an toàn là 5%/năm:
    $$
    PV_1 = \frac{100.000.000}{(1 + 0,05)^3} \approx 86.380.000 \text{ đồng.}
    $$
  - Hoàn cảnh 2 (Rủi ro rất cao): Khoản tiền này do một người bạn mở quán ăn khởi nghiệp cam kết trả (rủi ro vỡ nợ cao). Tỷ suất chiết khấu đòi hỏi phải là 18%/năm (gồm 5% an toàn + 13% phần bù rủi ro):
    $$
    PV_2 = \frac{100.000.000}{(1 + 0,18)^3} \approx 60.860.000 \text{ đồng.}
    $$
  - Nhận xét: Cùng là lời hứa 100 triệu sau 3 năm, nhưng lời hứa rủi ro của người bạn chỉ đáng giá gần 61 triệu, rẻ hơn rất nhiều so với lời hứa 86,4 triệu của chính phủ!
- Biến động của thị trường chứng khoán toàn cầu năm 2022: Khi Fed tăng lãi suất từ 0% lên hơn 5%, tỷ suất chiết khấu toàn cầu tăng vọt, khiến định giá PV của các công ty công nghệ tương lai sụt giảm từ 30% đến 60%.
- Counterfactual: Nếu áp dụng tỷ suất chiết khấu quá thấp (ví dụ lấy lãi suất tiết kiệm 5% để chiết khấu cho một dự án tiền ảo mạo hiểm), bạn sẽ định giá dự án đó cao hơn thực tế gấp nhiều lần và đưa ra quyết định đầu tư sai lầm thảm khốc.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Xác định ngưỡng lợi nhuận đòi hỏi (Hurdle Rate) khi đầu tư kinh doanh, thẩm định mua tài sản.
- Ưu/nhược điểm: Khung lý thuyết hoàn chỉnh nhất để định lượng rủi ro; tranh luận nảy sinh quanh việc xác định chính xác con số phần bù rủi ro mang tính chủ quan cao.
- Lỗi thường gặp: Dùng chung một mức tỷ suất chiết khấu cho tất cả các loại tài sản khác nhau (đánh đồng rủi ro của bất động sản mặt phố với rủi ro của một quán cà phê mới mở).

**6. Liên kết**
- [Giá trị thời gian của tiền](#1-giá-trị-thời-gian-của-tiền-time-value-of-money---tvm) · [NPV](#4-giá-trị-hiện-tại-thuần-net-present-value---npv) · [Lãi suất danh nghĩa vs thực](03_Rates_of_Return_and_Inflation.md)

---

## Câu hỏi tự kiểm tra

1. Trình bày ba nguyên nhân kinh tế căn bản tạo nên hiện tượng Giá trị thời gian của tiền (Time Value of Money).
2. Phân biệt sự khác nhau giữa Giá trị hiện tại (PV) và Giá trị tương lai (FV) qua sơ đồ trục thời gian dòng tiền.
3. Trình bày Quy tắc ra quyết định theo Giá trị hiện tại thuần (NPV) và giải thích tại sao một dự án có $NPV < 0$ lại phá hủy của cải của nhà đầu tư.
4. Tỷ suất chiết khấu (Discount Rate) phản ánh những yếu tố cấu thành nào và tại sao các tài sản có mức độ rủi ro cao bắt buộc phải áp dụng tỷ suất chiết khấu cao hơn?

---

## Ghi chú nguồn

Khung lý thuyết Giá trị thời gian của tiền và Chiết khấu dòng tiền tham chiếu The Theory of Interest của Irving Fisher (1930) và giáo trình Principles of Corporate Finance của Brealey, Myers & Allen. Mô hình CAPM tham chiếu công trình của William Sharpe (Nobel Kinh tế 1990).
