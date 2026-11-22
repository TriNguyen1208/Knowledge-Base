# Chuyên đề 5.1.5: Các Phương pháp Tính toán Lợi nhuận Chuyên sâu

Chuyên đề này phân tích bốn trụ cột tính toán lợi nhuận kinh điển: tỷ suất sinh lời cơ bản (ROI), hoàn vốn nội bộ (IRR), và sự phân định then chốt giữa hiệu quả của tài sản/nhà quản lý quỹ (TWR) với hiệu quả túi tiền thực tế của nhà đầu tư cá nhân (MWR).

> Câu hỏi xuyên suốt: Tại sao một quỹ đầu tư công bố sinh lời dương nhưng nhà đầu tư mua chứng chỉ quỹ đó lại có thể bị thua lỗ thực tế trong tài khoản?

---

## 1. Tỷ suất sinh lời trên vốn đầu tư (Return on Investment (ROI))

**1. Là gì?**
ROI là tỷ số tài chính đo lường tỷ lệ phần trăm giữa lợi nhuận ròng thu được so với tổng chi phí vốn bỏ ra ban đầu cho một khoản đầu tư. Đây là thước đo trực giác, đơn giản và phổ biến nhất để kiểm tra tính hiệu quả của một quyết định tài chính. Nếu chỉ nhớ một điều: **ROI cho bạn biết mỗi đồng vốn bỏ ra đem về bao nhiêu đồng tiền lời ròng, không kể thời gian dài hay ngắn.**

**2. Hoạt động thế nào?**
- Lấy tổng doanh thu hoặc giá trị thanh lý trừ đi toàn bộ chi phí phát sinh, sau đó chia cho chi phí vốn gốc ban đầu.
- Dùng để so sánh hiệu quả sinh lời giữa các tài sản hoặc dự án độc lập.
- Hạn chế lớn nhất: ROI không tính đến yếu tố giá trị thời gian của tiền (Time Value of Money), khiến một khoản lời 50% sau 10 năm trông có vẻ tương đương với khoản lời 50% sau 1 năm.

**3. Công thức & mô hình**
$$\text{ROI} = \frac{\text{Lợi nhuận ròng}}{\text{Tổng chi phí đầu tư}} \times 100\% = \frac{\text{Giá trị thu hồi} - \text{Vốn ban đầu}}{\text{Vốn ban đầu}} \times 100\%$$

**4. Ví dụ**
- Bạn mua một căn hộ chung cư giá 2 tỷ đồng, cải tạo nội thất hết 200 triệu (tổng vốn 2,2 tỷ). Sau 2 năm bán lại với giá 2,75 tỷ đồng. Lợi nhuận ròng là $2,75 - 2,2 = 0,55$ tỷ đồng. Tỷ suất $\text{ROI} = \frac{0,55}{2,2} \times 100\% = 25\%$ (số liệu minh họa).
- Thực tế tại các startup công nghệ Việt Nam: Các nhà đầu tư thiên thần đo lường ROI trên từng thương vụ đầu tư giai đoạn hạt giống để bù đắp cho tỷ lệ thất bại 80-90% của danh mục.
- Counterfactual: Nếu thương vụ bán được 2,75 tỷ nhưng mất 10 năm nắm giữ, ROI vẫn là 25% nhưng hiệu quả thực tế mỗi năm chỉ chưa đầy 2,3%, thấp hơn gửi tiết kiệm ngân hàng.

**5. Ứng dụng & tranh luận**
- Đánh giá nhanh chiến dịch kinh doanh, đầu tư bất động sản, tiếp thị và nâng cấp máy móc thiết bị.
- Trade-off: Dễ hiểu, dễ tính nhưng bỏ qua yếu tố thời gian và rủi ro thanh khoản.
- Lỗi thường gặp: Chỉ tính vốn mua tài sản mà quên cộng các chi phí giao dịch, thuế, bảo trì và lãi vay vào mẫu số.

**6. Liên kết**
[Tỷ suất hoàn vốn nội bộ](#2-tỷ-suất-hoàn-vốn-nội-bộ-internal-rate-of-return-irr) · [TWR](#3-lợi-nhuận-bình-quân-theo-thời-gian-time-weighted-return-twr) · [CAGR](04_Return_Metrics_Expected_Realized_Total_Annualized_CAGR.md)

---

## 2. Tỷ suất hoàn vốn nội bộ (Internal Rate of Return (IRR))

**1. Là gì?**
IRR là tỷ suất chiết khấu mà tại đó giá trị hiện tại ròng (NPV) của tất cả các dòng tiền vào và ra trong tương lai của một dự án hoặc khoản đầu tư bằng đúng bằng 0. Đây là tỷ suất sinh lời nội tại hàng năm mà bản thân khoản đầu tư tự tạo ra. Nếu chỉ nhớ một điều: **IRR là mức lãi suất hòa vốn tối đa mà một dự án có thể chịu đựng được khi đi vay vốn.**

**2. Hoạt động thế nào?**
- Khắc phục nhược điểm của ROI bằng cách tính đầy đủ yếu tố thời điểm của từng dòng tiền phát sinh (bỏ vốn nhiều đợt, nhận thu nhập nhiều kỳ).
- Quy tắc ra quyết định: Nếu $IRR > \text{Chi phí sử dụng vốn (WACC)}$, dự án có lãi kinh tế và nên được chấp thuận đầu tư.
- Giả định ngầm định quan trọng: Mọi dòng tiền mặt thu được trong suốt vòng đời dự án đều có thể tái đầu tư ở mức tỷ suất sinh lời đúng bằng IRR.

**3. Công thức & mô hình**
$$\text{NPV} = \sum_{t=0}^{n} \frac{CF_t}{(1 + \text{IRR})^t} = 0$$
Trong đó: $CF_t$ là dòng tiền thuần tại kỳ $t$, $CF_0$ thường là số âm (vốn bỏ ra ban đầu), và $n$ là tuổi thọ dự án.

**4. Ví dụ**
- Bạn đầu tư 100 triệu ($CF_0 = -100$). Năm 1 thu về 30 triệu ($CF_1 = 30$), Năm 2 thu về 40 triệu ($CF_2 = 40$), Năm 3 thu về 60 triệu ($CF_3 = 60$). Giải phương trình NPV = 0 tìm được $\text{IRR} \approx 13,1\%/năm$. Nếu bạn đi vay ngân hàng với lãi suất 9% để làm dự án này, bạn tạo ra thặng dư kinh tế (số liệu minh họa).
- Thực tế: Các quỹ đầu tư tư nhân (Private Equity) tại Việt Nam như Mekong Capital hay VinaCapital luôn sử dụng chuẩn IRR (thường đặt mục tiêu tối thiểu 20-25%/năm) để quyết định rót vốn vào các doanh nghiệp chưa niêm yết.
- Counterfactual: Nếu chi phí lãi vay tăng vọt lên 14%/năm, dự án có IRR 13,1% sẽ biến thành gánh nặng thua lỗ thực tế.

**5. Ứng dụng & tranh luận**
- Thẩm định dự án bất động sản, mua bán sáp nhập doanh nghiệp (M&A), đầu tư điện mặt trời, hạ tầng.
- Trade-off: Đo lường chính xác dòng tiền phức tạp nhưng giả định tái đầu tư với lãi suất IRR có thể phi thực tế nếu IRR quá cao.
- Lỗi thường gặp: Gặp trường hợp dự án có nhiều nghiệm IRR (Multiple IRRs) khi dòng tiền đổi dấu âm dương nhiều lần.

**6. Liên kết**
[ROI](#1-tỷ-suất-sinh-lời-trên-vốn-đầu-tư-return-on-investment-roi) · [MWR](#4-lợi-nhuận-bình-quân-theo-dòng-tiền-money-weighted-return-mwr) · [WACC](../05_Stock_Valuation_Methods/06_Discount_Rates_WACC_CostOfEquity_CostOfDebt_DiscountRate.md)

---

## 3. Lợi nhuận bình quân theo thời gian (Time-Weighted Return (TWR))

**1. Là gì?**
TWR là phương pháp đo lường tỷ suất sinh lời kép của một danh mục đầu tư bằng cách chia nhỏ toàn bộ chu kỳ đầu tư thành các chu kỳ con dựa trên thời điểm có phát sinh dòng tiền nộp thêm hoặc rút bớt vốn, qua đó loại bỏ hoàn toàn tác động của quy mô dòng tiền ra vào. Nếu chỉ nhớ một điều: **TWR là thước đo công bằng nhất để đánh giá năng lực của nhà quản lý quỹ vì nó loại trừ yếu tố hên xui do khách hàng nộp hay rút tiền.**

**2. Hoạt động thế nào?**
- Mỗi khi có khách hàng nộp thêm tiền hoặc rút vốn, danh mục được định giá lại để chốt tỷ suất sinh lời của chu kỳ con đó.
- Nhân liên hoàn các tỷ suất sinh lời của các chu kỳ con để tính tỷ suất tổng thể.
- Tiêu chuẩn bắt buộc toàn cầu theo Chuẩn mực Thực hành Đo lường Hiệu quả Đầu tư Toàn cầu (GIPS) đối với các quỹ đầu tư đại chúng.

**3. Công thức & mô hình**
$$\text{TWR} = \left[ (1 + R_1) \times (1 + R_2) \times \dots \times (1 + R_n) \right] - 1$$
Trong đó: $R_i = \frac{V_{i, \text{end}} - (V_{i, \text{begin}} + \text{Dòng tiền nộp/rút})}{V_{i, \text{begin}}}$ là tỷ suất sinh lời trong chu kỳ con thứ $i$.

**4. Ví dụ**
- Đầu năm quỹ có 10 tỷ, giữa năm tăng 20% thành 12 tỷ ($R_1 = 20\%$). Đúng lúc đó khách hàng nộp thêm 88 tỷ (tổng thành 100 tỷ). Cuối năm do thị trường giảm, quỹ lỗ 10% còn 90 tỷ ($R_2 = -10\%$). Lợi nhuận theo TWR của quỹ là $(1 + 0,2) \times (1 - 0,1) - 1 = 1,2 \times 0,9 - 1 = +8\%$. Nhà quản lý quỹ thực sự đã tạo ra mức sinh lời dương 8% theo năng lực chọn danh mục (số liệu minh họa).
- Thực tế: Báo cáo thường niên của các quỹ mở chứng khoán Việt Nam (như VEOF, DCDS, VESAF) luôn công bố hiệu quả dựa trên TWR để nhà đầu tư đánh giá chính xác năng lực điều hành của ban điều hành quỹ.
- Counterfactual: Nếu không dùng TWR mà nhìn vào số tiền mặt tuyệt đối (lãi 2 tỷ đợt 1 nhưng lỗ 10 tỷ đợt 2 $\to$ lỗ ròng 8 tỷ), người ta sẽ nhầm lẫn rằng nhà quản lý đầu tư tồi tệ, trong khi bản chất là do dòng tiền khách hàng nộp vào quá lớn đúng ngay trước đợt giảm của thị trường.

**5. Ứng dụng & tranh luận**
- So sánh năng lực giữa các nhà quản lý quỹ, công bố hiệu quả quỹ tương hỗ (Mutual Funds).
- Trade-off: Phản ánh trung thực kỹ năng chọn cổ phiếu nhưng không phản ánh số tiền lãi lỗ thực tế trong ví của từng cá nhân cụ thể.
- Lỗi thường gặp: Khách hàng cá nhân tự đánh giá tài khoản của mình bằng TWR mà không hiểu tại sao ví tiền của mình vẫn bị âm.

**6. Liên kết**
[MWR](#4-lợi-nhuận-bình-quân-theo-dòng-tiền-money-weighted-return-mwr) · [CAGR](04_Return_Metrics_Expected_Realized_Total_Annualized_CAGR.md) · [Chỉ số đo chuẩn](../14_Portfolio_Management/09_Governance_and_Review_IPS_Benchmark_PerformanceAttribution_PortfolioMonitoring.md)

---

## 4. Lợi nhuận bình quân theo dòng tiền (Money-Weighted Return (MWR))

**1. Là gì?**
MWR (về bản chất toán học chính là IRR của danh mục cá nhân) là phương pháp đo lường tỷ suất sinh lời thực tế của một tài khoản đầu tư có tính đến cả quy mô và thời điểm của các đợt nộp thêm hoặc rút bớt vốn của chính nhà đầu tư đó. Nếu chỉ nhớ một điều: **MWR cho bạn biết chính xác hiệu quả túi tiền của riêng bạn, phản ánh cả kỹ năng chọn tài sản lẫn kỹ năng chọn thời điểm nộp/rút tiền (market timing).**

**2. Hoạt động thế nào?**
- Coi ngày bắt đầu và các đợt nộp tiền là các dòng tiền âm ($CF < 0$), các đợt rút tiền và giá trị danh mục cuối kỳ là các dòng tiền dương ($CF > 0$).
- Tìm tỷ suất chiết khấu làm cho giá trị hiện tại của các dòng tiền này cân bằng về 0.
- Nếu nhà đầu tư nộp rất nhiều tiền đúng đỉnh thị trường rồi rút tiền ở đáy, MWR sẽ thấp hơn rất nhiều so với TWR của thị trường.

**3. Công thức & mô hình**
$$\sum_{t=0}^{T} \frac{CF_t}{(1 + \text{MWR})^t} = 0$$
Trong đó: $CF_t$ là dòng tiền nộp vào (dấu âm), rút ra (dấu dương), hoặc giá trị thanh lý cuối kỳ tại thời điểm $t$.

**4. Ví dụ**
- Tiếp tục ví dụ ở mục TWR: Ban đầu bạn có 10 triệu, lãi 20% thành 12 triệu. Giữa năm bạn hưng phấn vay mượn nộp thêm 88 triệu (tổng 100 triệu). Nửa cuối năm thị trường giảm 10%, bạn còn 90 triệu và bán hết rút ra. Lợi nhuận TWR là $+8\%$, nhưng MWR của bạn là số âm nặng (bạn bỏ vào tổng cộng $10 + 88 = 98$ triệu, chỉ rút về 90 triệu, lỗ ròng 8 triệu đồng) (số liệu minh họa).
- Báo cáo nổi tiếng 'Mind the Gap' của Morningstar: Trong hầu hết các giai đoạn 10 năm, MWR của nhà đầu tư cá nhân luôn thấp hơn TWR của chính các quỹ họ mua từ 1,5% đến 2,5%/năm do hành vi mua đuổi đỉnh và bán tháo đáy.
- Counterfactual: Nếu nhà đầu tư duy trì kỷ luật DCA nộp tiền đều đặn thay vì dồn cục tiền lớn nộp đúng đỉnh, MWR của họ sẽ tiệm cận hoặc thậm chí vượt TWR của thị trường.

**5. Ứng dụng & tranh luận**
- Báo cáo tài chính cá nhân, đánh giá tác động của hành vi nộp/rút tiền đối với túi tiền của nhà đầu tư.
- Trade-off: Đo lường chính xác trải nghiệm tài chính cá nhân nhưng không thể dùng để so sánh công bằng năng lực giữa các nhà quản lý quỹ.
- Lỗi thường gặp: Trách móc người quản lý quỹ khi thấy tài khoản của mình bị lỗ (MWR âm) mà không nhận ra nguyên nhân do chính mình đã nộp tiền ồ ạt đúng đỉnh.

**6. Liên kết**
[TWR](#3-lợi-nhuận-bình-quân-theo-thời-gian-time-weighted-return-twr) · [IRR](#2-tỷ-suất-hoàn-vốn-nội-bộ-internal-rate-of-return-irr) · [Tài chính hành vi](../16_Investment_Psychology_and_Behavioral_Finance/01_Foundations_and_Prospect_Theory_BehavioralFinance_LossAversion_ProspectTheory_RegretAversion.md)

---

## Câu hỏi tự kiểm tra

1. So sánh sự khác nhau căn bản giữa TWR và MWR. Khi nào hai chỉ số này cho kết quả bằng nhau?
2. Tại sao các nghiên cứu của Morningstar chỉ ra rằng MWR của nhà đầu tư cá nhân thường xuyên thấp hơn TWR của quỹ đầu tư mà họ nắm giữ?
3. Nêu ưu và nhược điểm của chỉ số Tỷ suất hoàn vốn nội bộ (IRR) trong việc đánh giá dự án bất động sản có dòng tiền kéo dài nhiều năm.

---

## Ghi chú nguồn

Dựa trên Chuẩn mực GIPS của CFA Institute, báo cáo Morningstar Investor Return Study ('Mind the Gap'), và giáo trình Tài chính Doanh nghiệp của Brealey, Myers, Allen.
