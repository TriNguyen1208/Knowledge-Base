# Chuyên đề 2.3: Các Loại Lãi suất Điều hành và Thị trường Liên ngân hàng

Chuyên đề này phân tích bộ khung các mức lãi suất điều hành của Ngân hàng Trung ương — bao gồm lãi suất chính sách, lãi suất tái cấp vốn, lãi suất tái chiết khấu — và cơ chế hình thành lãi suất liên ngân hàng ngắn hạn trong khuôn khổ hành lang lãi suất.

> Câu hỏi xuyên suốt: Bằng cách nào Ngân hàng Trung ương có thể kiểm soát và dẫn dắt lãi suất giao dịch tự do giữa các ngân hàng thương mại trên thị trường liên ngân hàng?

---

## 1. Lãi suất Chính sách (Policy Interest Rate)

**1. Là gì?**
Lãi suất chính sách (Policy Interest Rate / Benchmark Rate) là mức lãi suất chuẩn do Ngân hàng Trung ương công bố chính thức nhằm mục tiêu thiết lập lập trường chính sách tiền tệ và đóng vai trò là mốc tham chiếu định hình toàn bộ cơ cấu lãi suất trong nền kinh tế. Tùy thuộc vào thiết kế hệ thống tiền tệ của từng quốc gia, lãi suất chính sách có thể là một mức lãi suất mục tiêu cụ thể (như Fed Funds Target Rate tại Mỹ), một dải mục tiêu (Target Range), hoặc lãi suất của một cơ sở cho vay/gửi tiền chủ đạo. Nếu chỉ nhớ một điều: **Lãi suất chính sách là ngọn hải đăng báo hiệu định hướng tiền tệ thắt chặt hay nới lỏng của Ngân hàng Trung ương.**

**2. Hoạt động thế nào?**
- Được công bố ngay sau các phiên họp định kỳ của Hội đồng Chính sách Tiền tệ.
- Khi NHTW nâng lãi suất chính sách (Hiking cycle): Báo hiệu chi phí vay mượn ngắn hạn giữa các ngân hàng sẽ đắt hơn, buộc các ngân hàng phải tăng lãi suất cho vay thương mại và tăng lãi suất huy động tiền gửi từ công chúng.
- Khi NHTW hạ lãi suất chính sách (Cutting cycle): Dẫn dắt mặt bằng lãi suất thị trường giảm xuống, kích thích các hoạt động vay nợ tiêu dùng và đầu tư.
- NHTW thực hiện các nghiệp vụ thị trường mở (OMO) hàng ngày để đảm bảo lãi suất giao dịch thực tế trên thị trường bán buôn bám sát mức lãi suất chính sách này.

**3. Công thức & mô hình**
Khoảng lệch giữa lãi suất thị trường thực tế ($i_{\text{actual}}$) và lãi suất chính sách mục tiêu ($i^*$):

$$
\text{Spread} = i_{\text{actual}} - i^*
$$

Mục tiêu tác nghiệp của bàn giao dịch thị trường mở (Open Market Desk) là tối thiểu hóa khoảng lệch này:

$$
\min \mathbb{E}\left[(i_{\text{actual}} - i^*)^2\right]
$$

Bằng cách bơm thanh khoản nếu $i_{\text{actual}} > i^*$, hoặc hút bớt thanh khoản nếu $i_{\text{actual}} < i^*$.

**4. Ví dụ**
- Quyết định nâng lãi suất của Fed: Từ tháng 3/2022 đến tháng 7/2023, Fed đã tăng lãi suất quỹ liên bang từ 0,00%–0,25% lên 5,25%–5,50%. Lãi suất thế chấp mua nhà kỳ hạn 30 năm tại Mỹ lập tức vọt từ 3% lên trên 7,5%.
- Tại Ngân hàng Trung ương Châu Âu (ECB): Lãi suất của Cơ sở Tiền gửi (Deposit Facility Rate) được coi là lãi suất chính sách chủ đạo, được nâng từ -0,5% lên 4,0% trong chu kỳ thắt chặt 2022–2023.
- Việt Nam: Quyết định điều chỉnh các mức lãi suất điều hành của NHNN (như Quyết định 1124/QĐ-NHNN ngày 16/6/2023) phát đi tín hiệu nới lỏng mạnh mẽ để kéo giảm mặt bằng lãi suất huy động và cho vay của toàn hệ thống ngân hàng thương mại.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Xác định chi phí vốn rủi ro phi tín dụng (Risk-free rate) trong các mô hình định giá tài sản tài chính (CAPM, DCF).
- Tranh luận: Việc thay đổi lãi suất chính sách có thể gây ra hiện tượng méo mó định giá nếu thị trường tài chính không hoàn hảo hoặc các ngân hàng thương mại thỏa thuận ngầm giữ mặt bằng lãi suất cho vay cao.
- Lỗi thường gặp: Nhầm lãi suất chính sách với lãi suất tiền gửi ngân hàng thông thường; lãi suất chính sách chỉ là mục tiêu điều hành giữa NHTW và các tổ chức tín dụng.

**6. Liên kết**
- [Lãi suất tái cấp vốn](#2-lãi-suất-tái-cấp-vốn-refinancing-rate) · [Lãi suất liên ngân hàng](#4-lãi-suất-liên-ngân-hàng-interbank-interest-rate) · [Cơ chế truyền dẫn](../01_Money_and_Monetary_Systems/06_Quantity_Theory_and_Transmission.md)

---

## 2. Lãi suất Tái cấp vốn (Refinancing Rate)

**1. Là gì?**
Lãi suất tái cấp vốn (Refinancing Rate) là mức lãi suất mà Ngân hàng Trung ương áp dụng khi cấp tín dụng (cho vay) bổ sung nguồn vốn ngắn hạn cho các ngân hàng thương mại nhằm đáp ứng nhu cầu thanh toán và mở rộng tín dụng của họ. Khoản vay này thường có kỳ hạn dài hơn và điều kiện linh hoạt hơn so với cửa sổ chiết khấu thông thường. Tại Việt Nam, đây là mức lãi suất điều hành có tính dẫn dắt và tầm ảnh hưởng cao nhất. Nếu chỉ nhớ một điều: **Lãi suất tái cấp vốn là "giá bán buôn vốn" mà NHTW cung cấp cho các ngân hàng thương mại để tài trợ thanh khoản.**

**2. Hoạt động thế nào?**
- Ngân hàng thương mại nộp hồ sơ xin vay tái cấp vốn tại NHTW kèm theo danh mục tài sản bảo đảm (trái phiếu chính phủ, tín phiếu, trái phiếu được chính phủ bảo lãnh hoặc hồ sơ tín dụng đủ chuẩn).
- NHTW thẩm định, giải ngân bằng cách ghi Có vào tài khoản tiền gửi thanh toán của NHTM mở tại NHTW.
- Khi NHTW hạ lãi suất tái cấp vốn: Giảm chi phí tiếp cận vốn dự phòng của hệ thống ngân hàng, khuyến khích các ngân hàng mở rộng cho vay doanh nghiệp.
- Khi NHTW tăng lãi suất tái cấp vốn: Nâng cao chi phí vay vốn trung ương, buộc các ngân hàng phải cẩn trọng hơn trong quản lý thanh khoản và hạn chế mở rộng tín dụng rủi ro.

**3. Công thức & mô hình**
Số tiền lãi mà ngân hàng thương mại phải trả cho khoản vay tái cấp vốn giá trị $V_0$, kỳ hạn $n$ ngày với lãi suất tái cấp vốn $r_{\text{ref}}$:

$$
\text{Tiền lãi} = V_0 \times r_{\text{ref}} \times \frac{n}{365}
$$

Trong hệ thống hành lang trần - sàn (Corridor System), lãi suất tái cấp vốn thường nằm ở trần trên hoặc sát trần của hành lang lãi suất.

**4. Ví dụ**
- Việt Nam: Quyết định 1124/QĐ-NHNN (có hiệu lực từ ngày 19/6/2023) đã giảm lãi suất tái cấp vốn từ mức 5,0%/năm xuống 4,5%/năm. Đây là lần giảm thứ 4 liên tiếp trong năm 2023 nhằm quyết liệt hỗ trợ tăng trưởng kinh tế.
- Châu Âu: Nghiệp vụ Tái cấp vốn Chính (Main Refinancing Operations - MRO) của ECB cung cấp phần lớn thanh khoản cho hệ thống ngân hàng Eurozone thông qua đấu thầu hàng tuần với kỳ hạn 1 tuần.
- Tái cấp vốn đặc biệt: Khi các ngân hàng thương mại gặp khủng hoảng rút tiền cục bộ (như SCB năm 2022), các khoản cho vay tái cấp vốn đặc biệt của NHTW là chiếc phao cứu sinh thanh khoản trực tiếp.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Công cụ bơm thanh khoản theo chỉ đạo chiến lược và điều tiết chi phí vốn đầu vào của toàn hệ thống ngân hàng.
- Tranh luận: Nếu hạ lãi suất tái cấp vốn quá thấp trong khi lạm phát tiềm ẩn có thể dẫn đến tình trạng vốn giá rẻ bị đầu cơ vào thị trường bất động sản thay vì sản xuất thực tế.
- Lỗi thường gặp: Nhầm lãi suất tái cấp vốn với lãi suất chiết khấu; tái cấp vốn thường áp dụng cho nhiều loại hình hồ sơ bảo đảm hơn và có tính chất cung ứng vốn phát triển, trong khi chiết khấu gắn chặt với việc mua đứt có kỳ hạn các giấy tờ có giá cụ thể.

**6. Liên kết**
- [Lãi suất tái chiết khấu](#3-lãi-suất-tái-chiết-khấu-discount-rate) · [Lãi suất liên ngân hàng](#4-lãi-suất-liên-ngân-hàng-interbank-interest-rate) · [Hỗ trợ khẩn cấp (ELA)](05_Lender_of_Last_Resort_and_Liquidity_Support.md)

---

## 3. Lãi suất Tái chiết khấu (Discount Rate)

**1. Là gì?**
Lãi suất tái chiết khấu (Discount Rate / Rediscount Rate) là mức lãi suất do Ngân hàng Trung ương áp dụng khi thực hiện chiết khấu lại (mua lại trước hạn) các công cụ chuyển nhượng và giấy tờ có giá ngắn hạn đủ điều kiện (như thương phiếu, hối phiếu được ngân hàng chấp nhận, tín phiếu kho bạc) từ các ngân hàng thương mại. Mức lãi suất này thường được ấn định thấp hơn lãi suất tái cấp vốn do giấy tờ chiết khấu có độ an toàn và tính thanh khoản rất cao. Nếu chỉ nhớ một điều: **Lãi suất tái chiết khấu là tỷ lệ chiết trừ giá trị khi ngân hàng mang giấy tờ có giá an toàn đến bán sớm cho NHTW để lấy tiền mặt.**

**2. Hoạt động thế nào?**
- Ngân hàng thương mại trước đó đã chiết khấu thương phiếu cho các doanh nghiệp thương mại. Khi cần vốn gấp, ngân hàng mang các chứng từ nợ này đến nộp tại Cửa sổ chiết khấu của NHTW để xin "tái chiết khấu".
- NHTW khấu trừ ngay tiền lãi tính theo lãi suất tái chiết khấu từ mệnh giá của giấy tờ có giá và chuyển phần tiền còn lại cho ngân hàng thương mại.
- Khi đến ngày đáo hạn của giấy tờ có giá, NHTW sẽ xuất trình để thu hồi đủ 100% mệnh giá từ người có nghĩa vụ trả tiền (doanh nghiệp phát hành hoặc bên bảo lãnh).
- Biện pháp này giúp khơi thông thị trường thương phiếu doanh nghiệp và hỗ trợ vốn lưu động trực tiếp cho hoạt động sản xuất kinh doanh xuất nhập khẩu.

**3. Công thức & mô hình**
Giá trị thanh toán nhận được ($P$) khi tái chiết khấu công cụ nợ có mệnh giá $F$, thời gian còn lại đến ngày đáo hạn là $t$ ngày với lãi suất tái chiết khấu $d_{\text{rediscount}}$:

$$
P = F \times \left(1 - d_{\text{rediscount}} \times \frac{t}{365}\right)
$$

Tỷ suất sinh lời thực tế tương đương (Yield equivalent - $y$):

$$
y = \frac{F - P}{P} \times \frac{365}{t} = \frac{d_{\text{rediscount}}}{1 - d_{\text{rediscount}} \times \frac{t}{365}} > d_{\text{rediscount}}
$$

**4. Ví dụ**
- Ví dụ số minh họa: Ngân hàng TMCP X nắm giữ một thương phiếu xuất khẩu có mệnh giá 50 tỷ VND còn đúng 60 ngày nữa là đến hạn thanh toán. Ngân hàng mang đến NHNN tái chiết khấu với mức lãi suất 3,0%/năm.
  - Số tiền chiết khấu bị trừ: $50 \times 3\% \times (60 / 365) \approx 0,246$ tỷ VND (246 triệu VND).
  - Số tiền mặt NHNN giải ngân ngay vào tài khoản NHTM: $50 - 0,246 = 49,754$ tỷ VND.
- Tại Việt Nam: Theo Quyết định số 1124/QĐ-NHNN ngày 16/6/2023, lãi suất tái chiết khấu được điều chỉnh giảm từ 3,5%/năm xuống 3,0%/năm, duy trì khoảng chênh lệch 1,5% so với lãi suất tái cấp vốn (4,5%/năm).
- Hoa Kỳ: Cửa sổ chiết khấu của Fed (Primary Credit Rate) đóng vai trò là mức lãi suất tái chiết khấu cho các ngân hàng thương mại có xếp hạng an toàn vốn cao.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Cung cấp thanh khoản nhanh chóng dựa trên tài sản chuẩn hóa, phát triển thị trường công cụ nợ ngắn hạn và hỗ trợ doanh nghiệp thương mại.
- Tranh luận: Tại nhiều quốc gia đang phát triển, thị trường thương phiếu và hối phiếu chưa phát triển mạnh nên công cụ tái chiết khấu có doanh số thực tế thấp hơn nhiều so với nghiệp vụ tái cấp vốn hoặc thị trường mở (OMO).
- Lỗi thường gặp: Tính toán tiền chiết khấu dựa trên số tiền nhận về; công thức chiết khấu chuẩn luôn tính % dựa trên mệnh giá tương lai ($F$).

**6. Liên kết**
- [Lãi suất tái cấp vốn](#2-lãi-suất-tái-cấp-vốn-refinancing-rate) · [Cửa sổ chiết khấu](../01_Money_and_Monetary_Systems/08_Monetary_Tools_and_Central_Bank_Framework.md) · [Hành lang lãi suất](#4-lãi-suất-liên-ngân-hàng-interbank-interest-rate)

---

## 4. Lãi suất Liên ngân hàng (Interbank Interest Rate)

**1. Là gì?**
Lãi suất liên ngân hàng (Interbank Interest Rate) là mức lãi suất mà các ngân hàng thương mại áp dụng để vay mượn vốn lẫn nhau trên thị trường liên ngân hàng (thị trường 2) nhằm bù đắp sự thiếu hụt thanh khoản tạm thời hoặc sử dụng nguồn vốn nhàn rỗi ngắn hạn (từ kỳ hạn qua đêm - Overnight, 1 tuần, 1 tháng đến 1 năm). Đây là mức lãi suất nhạy cảm nhất, phản ánh trung thực và tức thời trạng thái dư thừa hay khan hiếm thanh khoản của toàn bộ hệ thống tài chính. Nếu chỉ nhớ một điều: **Lãi suất liên ngân hàng là phong vũ biểu đo lường "độ khát tiền" hàng ngày của hệ thống ngân hàng.**

**2. Hoạt động thế nào?**
- Cuối mỗi ngày giao dịch, do dòng tiền rút ra nộp vào của hàng triệu khách hàng chuyển khoản qua lại, sẽ có ngân hàng bị thiếu hụt tiền dự trữ bắt buộc tại NHTW, trong khi ngân hàng khác lại thừa dự trữ không sinh lời.
- Các ngân hàng tự động kết nối giao dịch cho vay tín chấp (hoặc có thế chấp qua Repo) với nhau qua hệ thống giao dịch điện tử liên ngân hàng.
- Cơ chế hành lang lãi suất của NHTW:
  - **Trần hành lang:** Lãi suất tái cấp vốn/chiết khấu của NHTW (ngân hàng không bao giờ đi vay bạn với lãi suất cao hơn mức vay được từ NHTW).
  - **Sàn hành lang:** Lãi suất tiền gửi dự trữ tại NHTW (ngân hàng không bao giờ cho bạn vay với lãi suất thấp hơn mức gửi an toàn tại NHTW).
  - Lãi suất liên ngân hàng tự do dao động lên xuống giữa sàn và trần tùy thuộc vào cung cầu vốn hàng ngày.

**3. Công thức & mô hình**
Hành lang lãi suất chuẩn mực (Interest Rate Corridor):

$$
i_{\text{floor}} \le i_{\text{interbank}} \le i_{\text{ceiling}}
$$

Tỷ giá lãi suất qua đêm chuẩn hóa quốc tế:
- Mỹ: SOFR (Secured Overnight Financing Rate - dựa trên giao dịch Repo trái phiếu kho bạc, thay thế cho LIBOR cũ).
- Châu Âu: €STR (Euro Short-Term Rate).
- Việt Nam: Lãi suất bình quân liên ngân hàng qua đêm (Overnight VND Interbank Rate do NHNN công bố hàng ngày).

**4. Ví dụ**
- Trạng thái thanh khoản bình thường tại Việt Nam: Lãi suất liên ngân hàng kỳ hạn qua đêm duy trì ở mức thấp và ổn định khoảng 0,5% – 1,5%/năm, cho thấy dòng tiền trong hệ thống rất dồi dào.
- Sự kiện căng thẳng thanh khoản (tháng 10/2022): Khi xảy ra sự cố rút tiền tại SCB và tỷ giá căng thẳng, lãi suất liên ngân hàng qua đêm có thời điểm vọt lên tới 8% – 10%/năm, phản ánh các ngân hàng găm giữ tiền mặt phòng thủ và hạn chế cho nhau vay tín chấp.
- Cuộc khủng hoảng tài chính 2008: Lãi suất liên ngân hàng LIBOR tăng vọt kỷ lục (chênh lệch TED Spread giãn rộng) do các ngân hàng mất niềm tin hoàn toàn vào khả năng thanh toán của nhau, làm đóng băng thị trường tín dụng toàn cầu.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Chỉ báo hàng đầu để các định chế tài chính xác định lãi suất cho vay thả nổi (Floating rate = Lãi suất tham chiếu liên ngân hàng + Biên độ cố định).
- Tranh luận: Vụ bê bối thao túng lãi suất LIBOR (năm 2012) tại các ngân hàng lớn ở London đã buộc cộng đồng tài chính quốc tế phải xóa bỏ hoàn toàn hệ thống khảo sát LIBOR chủ quan để chuyển sang các mức lãi suất giao dịch thực tế có bảo đảm như SOFR.
- Lỗi thường gặp: Đồng nhất lãi suất liên ngân hàng với lãi suất huy động dân cư; lãi suất liên ngân hàng là giao dịch bán buôn vốn lớn giữa các định chế tài chính chuyên nghiệp với chi phí vận hành thấp hơn rất nhiều so với mở chi nhánh huy động lẻ từ người dân.

**6. Liên kết**
- [Lãi suất chính sách](#1-lãi-suất-chính-sách-policy-interest-rate) · [Nghiệp vụ thị trường mở](../01_Money_and_Monetary_Systems/08_Monetary_Tools_and_Central_Bank_Framework.md) · [Thanh khoản ngân hàng](../03_Banking_Systems/04_Bank_Balance_Sheet_Reserves_and_Capital.md)

---

## Câu hỏi tự kiểm tra

1. Phân biệt Lãi suất chính sách (Policy Rate) và Lãi suất liên ngân hàng (Interbank Rate). Mối quan hệ tương tác giữa chúng là gì?
2. So sánh đối tượng, tài sản bảo đảm và tính chất hoạt động của Lãi suất tái cấp vốn và Lãi suất tái chiết khấu.
3. Trình bày cơ chế trần - sàn của "Hành lang lãi suất" (Interest Rate Corridor) trong việc ổn định lãi suất liên ngân hàng ngắn hạn.
4. Tại sao mức lãi suất liên ngân hàng qua đêm lại được coi là phong vũ biểu nhạy cảm nhất đo lường thanh khoản của hệ thống ngân hàng?
5. Lý do gì đã khiến hệ sinh thái tài chính toàn cầu quyết định xóa bỏ hoàn toàn lãi suất tham chiếu LIBOR và thay thế bằng SOFR?

---

## Ghi chú nguồn

- Federal Reserve Bank of New York: Transition from LIBOR to SOFR Documentation.
- Ngân hàng Nhà nước Việt Nam: Thống kê doanh số và lãi suất bình quân liên ngân hàng bằng VND (công bố hàng ngày).
- Ngân hàng Nhà nước Việt Nam: Quyết định số 1124/QĐ-NHNN ngày 16/6/2023.
- European Central Bank: Key ECB interest rates framework.