# Chuyên đề 5.2.5: Cơ chế Khớp lệnh và Đo lường Vi mô: Bid, Ask, Spread, Sổ lệnh, Độ sâu và Khối lượng

Chuyên đề này đi sâu vào cơ chế vi mô cốt lõi hình thành nên từng mức giá trên sàn chứng khoán: sự tương tác đối kháng giữa Giá mua (Bid) và Giá bán (Ask), chi phí ẩn của Chênh lệch (Spread), cấu trúc giải phẫu của Sổ lệnh (Order Book), sức chịu tải của Độ sâu thị trường và nhiên liệu vận hành mang tên Khối lượng giao dịch (Trading Volume).

> Câu hỏi xuyên suốt: Làm thế nào để đọc vị ý chí của dòng tiền lớn đằng sau từng bước giá và thanh khối lượng nhảy múa trên bảng điện?

---

## 1. Giá mua chào sàn (Bid Price)

**1. Là gì?**
Giá mua chào sàn (Bid Price) là mức giá cao nhất mà một người mua tiềm năng trên thị trường sẵn sàng trả tại một thời điểm xác định để mua một cổ phiếu hoặc tài sản tài chính. Nếu chỉ nhớ một điều: **Nếu bạn muốn bán tháo tài sản ra tiền mặt ngay lập tức, Bid Price chính là mức giá tốt nhất mà bạn có thể nhận được.**

**2. Hoạt động thế nào?**
- Được xếp thành hàng chờ trong sổ lệnh theo thứ tự ưu tiên: Mức giá chào mua cao nhất luôn được xếp ở vị trí đầu tiên (Best Bid).
- Phản ánh lực cầu chủ động đang chờ sẵn trên thị trường.
- Khi có một người bán chấp nhận 'bán khớp lệnh thị trường' (Market Sell Order), giao dịch sẽ lập tức khớp tại mức Bid cao nhất này.

**3. Công thức & mô hình**
$$\text{Best Bid} = \max_{i} (P_{\text{buy}, i})$$

**4. Ví dụ**
- Trên bảng điện cổ phiếu VNM: Cột dư mua hiển thị mức Giá 1 là 68.500 đ (khối lượng 50.000 cp), Giá 2 là 68.400 đ, Giá 3 là 68.300 đ. Mức giá 68.500 đ chính là Best Bid hiện tại (số liệu minh họa).
- Thực tế tại các phiên giao dịch hoảng loạn: Cột Bid Price có thể bị quét sạch hoàn toàn (trắng bên mua), dẫn đến việc cổ phiếu bị rơi vào trạng thái giảm sàn mà không có thanh khoản đối ứng.
- Counterfactual: Nếu không có ai đặt lệnh Bid, người nắm giữ cổ phiếu sẽ hoàn toàn không thể bán tài sản ra tiền mặt theo giá thị trường.

**5. Ứng dụng & tranh luận**
- Theo dõi lực cầu thị trường, đặt lệnh giới hạn (Limit Order), phân tích vi mô dòng tiền sổ lệnh.
- Trade-off: Chờ khớp ở mức Bid cao giúp bán được giá tốt nhưng có thể không bao giờ khớp nếu giá thị trường quay đầu đi xuống.
- Lỗi thường gặp: Đặt lệnh bán với giá thấp hơn Best Bid và vô tình chịu thiệt thòi về mặt giá trị.

**6. Liên kết**
[Giá bán chào sàn](#2-giá-bán-chào-sàn-ask-price) · [Chênh lệch Bid-Ask](#3-chênh-lệch-giá-mua-bán-bid-ask-spread) · [Sổ lệnh](#4-sổ-lệnh-giao-dịch-order-book)

---

## 2. Giá bán chào sàn (Ask Price)

**1. Là gì?**
Giá bán chào sàn (Ask Price hay Offer Price) là mức giá thấp nhất mà một người bán tiềm năng trên thị trường sẵn sàng chấp nhận để nhượng lại cổ phiếu hoặc tài sản tài chính của mình tại thời điểm đó. Nếu chỉ nhớ một điều: **Nếu bạn muốn mua tài sản ngay lập tức bằng mọi giá, Ask Price chính là mức giá thấp nhất mà bạn buộc phải trả.**

**2. Hoạt động thế nào?**
- Được xếp trong sổ lệnh theo thứ tự ưu tiên: Mức giá chào bán thấp nhất luôn được hiển thị ở vị trí ưu tiên hàng đầu (Best Ask).
- Phản ánh lực cung cổ phiếu đang chờ bán ra trên thị trường.
- Khi có một nhà đầu tư đặt lệnh 'mua khớp lệnh thị trường' (Market Buy Order), giao dịch sẽ ngay lập tức được lấp đầy tại mức Best Ask này.

**3. Công thức & mô hình**
$$\text{Best Ask} = \min_{j} (P_{\text{sell}, j})$$
Điều kiện thị trường thông thường không bao giờ có sự giao thoa: $\text{Best Ask} > \text{Best Bid}$.

**4. Ví dụ**
- Trên bảng điện cổ phiếu HPG: Cột dư bán hiển thị Giá 1 là 28.200 đ (khối lượng 100.000 cp), Giá 2 là 28.300 đ, Giá 3 là 28.400 đ. Mức giá 28.200 đ chính là Best Ask hiện tại (số liệu minh họa).
- Thực tế: Trong các phiên bùng nổ hưng phấn, toàn bộ các mức Ask Price bị quét sạch trong nháy mắt (trắng bên bán), cổ phiếu tăng trần cứng ngắc mà người mua cầm tiền không thể mua nổi.
- Counterfactual: Nếu bạn đặt lệnh mua với giá thấp hơn Ask Price (ví dụ đặt mua 28.000 đ), lệnh của bạn sẽ phải đứng xếp hàng chờ bên cột Bid và chưa được khớp ngay.

**5. Ứng dụng & tranh luận**
- Định giá chi phí vào lệnh ngay lập tức, xác định điểm vào lệnh mua cho nhà đầu tư chủ động.
- Trade-off: Chấp nhận khớp ngay ở Ask Price giúp bắt kịp sóng tăng nhưng phải chịu mua ở mức giá đắt nhất hiện có.
- Lỗi thường gặp: Mua đuổi theo các mức Ask Price cao ngất ngưởng trong các cây nến hưng phấn xanh mạnh của phiên giao dịch.

**6. Liên kết**
[Giá mua chào sàn](#1-giá-mua-chào-sàn-bid-price) · [Chênh lệch Bid-Ask](#3-chênh-lệch-giá-mua-bán-bid-ask-spread) · [Sổ lệnh](#4-sổ-lệnh-giao-dịch-order-book)

---

## 3. Chênh lệch giá mua bán (Bid-Ask Spread)

**1. Là gì?**
Chênh lệch giá mua bán là khoảng cách số học hoặc tỷ lệ phần trăm giữa mức giá chào bán thấp nhất (Best Ask) và mức giá chào mua cao nhất (Best Bid) hiện có trên thị trường. Thước đo này phản ánh chi phí giao dịch tiềm ẩn và là thước đo trực tiếp nhất về mức độ thanh khoản của một tài sản. Nếu chỉ nhớ một điều: **Spread càng hẹp thì thanh khoản càng cao và chi phí bạn phải trả cho thị trường càng rẻ; spread càng rộng bạn càng dễ bị 'mất tiền oan' ngay khi vừa vào lệnh.**

**2. Hoạt động thế nào?**
- Trong thị trường cực kỳ thanh khoản: Spread chỉ là 1 bước giá tối thiểu (ví dụ 0,05% đối với cổ phiếu blue-chip hoặc 0,1 pip đối với cặp tiền EUR/USD).
- Trong thị trường kém thanh khoản hoặc tài sản phi tập trung: Spread có thể rộng tới 2%, 5% hoặc thậm chí 10% (như vàng miếng trong các đợt sốt giá hoặc cổ phiếu penny thanh khoản èo uột).
- Là nguồn thu nhập cốt lõi bù đắp rủi ro cho các nhà tạo lập thị trường và nhà buôn tự doanh.

**3. Công thức & mô hình**
$$\text{Absolute Spread} = P_{\text{ask}} - P_{\text{bid}}$$
$$\text{Relative Spread (\%)} = \frac{P_{\text{ask}} - P_{\text{bid}}}{P_{\text{mid}}} \times 100\% \quad \text{với} \quad P_{\text{mid}} = \frac{P_{\text{ask}} + P_{\text{bid}}}{2}$$

**4. Ví dụ**
- Cổ phiếu HPG có Best Bid 28.150 đ và Best Ask 28.200 đ: Spread chỉ là 50 đồng (khoảng 0,17%). Bạn mua xong bán lại ngay chỉ mất 0,17%. Nhưng ở một cổ phiếu penny rác, Best Bid là 3.000 đ còn Best Ask là 3.300 đ: Spread lên tới 10%. Vừa bấm mua xong, tài sản của bạn đã lập tức lỗ ngay 10% trên giấy nếu muốn bán lại ra tiền mặt (số liệu minh họa).
- Thực tế thị trường vàng Việt Nam: Trong những giai đoạn giá vàng thế giới biến động dữ dội, các doanh nghiệp vàng trong nước thường chủ động nới rộng chênh lệch mua - bán từ 500.000 đ lên tới 2-3 triệu đồng/lượng để đẩy toàn bộ rủi ro biến động cho người mua.
- Counterfactual: Nếu sàn giao dịch hạ bước giá tối thiểu (Tick size) từ 100 đồng xuống 10 đồng, biên độ spread tương đối sẽ được thu hẹp lại, giúp giảm chi phí cho toàn bộ nhà đầu tư tham gia.

**5. Ứng dụng & tranh luận**
- Đánh giá chất lượng thanh khoản, tối ưu hóa thuật toán thực thi lệnh lớn của các quỹ đầu tư.
- Trade-off: Giúp bảo vệ nhà tạo lập thị trường khỏi rủi ro biến động giá; nhưng là rào cản chi phí ma sát đối với các nhà giao dịch tần suất cao.
- Lỗi thường gặp: Bỏ qua chênh lệch spread khi giao dịch các tài sản kém thanh khoản dẫn đến việc bị trượt giá nặng nề.

**6. Liên kết**
[Giá mua chào sàn](#1-giá-mua-chào-sàn-bid-price) · [Giá bán chào sàn](#2-giá-bán-chào-sàn-ask-price) · [Độ sâu thị trường](#5-độ-sâu-thị-trường-market-depth)

---

## 4. Sổ lệnh giao dịch (Order Book)

**1. Là gì?**
Sổ lệnh giao dịch là một danh sách điện tử được cập nhật theo thời gian thực (real-time) hiển thị toàn bộ các lệnh giới hạn (Limit Orders) đang chờ mua và chờ bán của một chứng khoán xác định, được sắp xếp thứ tự theo mức giá và thời gian gửi lệnh. Nếu chỉ nhớ một điều: **Sổ lệnh là chiếc máy quét X-quang cho bạn nhìn thấy bức tranh chiến sự thực tế giữa phe mua và phe bán đằng sau mức giá hiện tại.**

**2. Hoạt động thế nào?**
- Chia làm hai nửa đối xứng: Bên Mua (Bids) xếp từ giá cao nhất xuống thấp dần; Bên Bán (Asks) xếp từ giá thấp nhất lên cao dần.
- Độ sâu hiển thị: Trên bảng điện thông thường tại Việt Nam hiển thị 3 mức giá tốt nhất (Level 2 data); các phần mềm chuyên nghiệp hiển thị toàn bộ độ sâu 10 đến 20 mức giá (Full Order Book / Depth of Market - DOM).
- Lệnh khớp tự động: Khi một lệnh thị trường xuất hiện, nó sẽ ăn khớp trực tiếp vào các lệnh đang chờ sẵn trong sổ lệnh.

**3. Công thức & mô hình**
$$\text{Order Book} = \left\{ (P_i^{\text{bid}}, Q_i^{\text{bid}})_{i=1}^{m}, (P_j^{\text{ask}}, Q_j^{\text{ask}})_{j=1}^{n} \right\}$$

**4. Ví dụ**
- Bảng điện sàn HOSE hiển thị sổ lệnh 3 mức giá của cổ phiếu SSI: Bên mua chờ giá 36.000 (100k cp), 35.950 (150k cp), 35.900 (200k cp). Bên bán chờ giá 36.050 (80k cp), 36.100 (120k cp), 36.150 (300k cp) (số liệu minh họa).
- Thực tế: Các thuật toán giao dịch tần suất cao (HFT) theo dõi sự thay đổi của sổ lệnh hàng triệu lần mỗi giây để phát hiện các tín hiệu lệnh giả (Spoofing) hoặc sự mất cân bằng giữa lệnh mua và lệnh bán.
- Counterfactual: Nếu không có sổ lệnh công khai minh bạch, nhà đầu tư nhỏ lẻ sẽ hoàn toàn mù tịt về việc có bao nhiêu người đang thực sự muốn mua hay muốn bán ở các mức giá quanh thị trường.

**5. Ứng dụng & tranh luận**
- Đọc băng chuyền giá (Tape reading), phân tích cấu trúc vi mô thị trường, xác định các ngưỡng hỗ trợ và kháng cự ngắn hạn.
- Trade-off: Cung cấp dữ liệu minh bạch tuyệt vời; nhưng các lệnh hiển thị trên sổ lệnh có thể bị hủy bất cứ lúc nào trước khi khớp lệnh (lệnh ảo của các 'tay to').
- Lỗi thường gặp: Tin tưởng tuyệt đối vào các khối lượng chờ mua/bán khổng lồ trên sổ lệnh mà không biết rằng đó có thể là chiêu trò 'kê lệnh ảo' để dụ nhỏ lẻ vào bẫy.

**6. Liên kết**
[Chênh lệch Bid-Ask](#3-chênh-lệch-giá-mua-bán-bid-ask-spread) · [Độ sâu thị trường](#5-độ-sâu-thị-trường-market-depth) · [Khối lượng giao dịch](#6-khối-lượng-giao-dịch-trading-volume)

---

## 5. Độ sâu thị trường (Market Depth)

**1. Là gì?**
Độ sâu thị trường (Market Depth hay Depth of Market - DOM) là khả năng của một thị trường chứng khoán trong việc hấp thụ các lệnh giao dịch có quy mô khối lượng tương đối lớn mà không làm biến động hay xáo trộn đáng kể mức giá thị trường hiện tại. Nếu chỉ nhớ một điều: **Thị trường có độ sâu lớn giống như một hồ nước sâu thẳm—bạn ném một tảng đá lớn xuống hồ thì mặt nước chỉ hơi gợn sóng nhẹ; thị trường nông giống như vũng nước—ném viên sỏi nhỏ cũng làm nước bắn tung tóe.**

**2. Hoạt động thế nào?**
- Được đo lường bằng tổng khối lượng cổ phiếu đang được đặt chờ mua và chờ bán ở các mức giá ngay sát mức giá thị trường hiện tại.
- Thị trường có độ sâu lớn: Có hàng trăm nghìn hoặc hàng triệu cổ phiếu đặt chờ ở từng bước giá, cho phép các quỹ tổ chức lớn giải ngân hoặc thoái vốn mà không làm giá bị trượt.
- Thị trường nông (mỏng): Khối lượng chờ ở mỗi bước giá rất ít (chỉ vài trăm đến vài nghìn cổ phiếu); chỉ cần một lệnh bán vài chục nghìn cổ phiếu là có thể đạp giá rơi tự do qua nhiều bước giá.

**3. Công thức & mô hình**
$$\text{Market Depth (Bids)} = \sum_{k=1}^{L} Q_k^{\text{bid}} \quad \text{và} \quad \text{Market Depth (Asks)} = \sum_{k=1}^{L} Q_k^{\text{ask}}$$
Trong đó: $L$ là số lượng bước giá lân cận được khảo sát.

**4. Ví dụ**
- Cổ phiếu HPG có độ sâu thị trường cực lớn: mỗi bước giá luôn có từ 500.000 đến 1.000.000 cổ phiếu chờ sẵn; một nhà đầu tư lớn bán ra 200.000 cổ phiếu chỉ làm giá dao động đúng 1 bước giá (50 đồng). Ngược lại, một mã cổ phiếu nhỏ thanh khoản yếu chỉ có 1.000 cổ phiếu chờ mỗi bước giá; lệnh bán 50.000 cổ phiếu sẽ quét sạch toàn bộ các mức giá chờ và ép cổ phiếu giảm kịch sàn (số liệu minh họa).
- Thực tế: Tiêu chí hàng đầu của các quỹ đầu tư ngoại khi rót vốn vào thị trường chứng khoán Việt Nam là 'Độ sâu thanh khoản'—họ chỉ chọn nhóm VN30 vì chỉ có nhóm này mới đủ độ sâu để họ ra vào lệnh quy mô hàng triệu USD.
- Counterfactual: Nếu thị trường cổ phiếu ngân hàng bị suy giảm độ sâu đột ngột trong kỳ nghỉ lễ, một lệnh bán vô tình của một nhà đầu tư cá nhân cũng có thể kích hoạt đợt giảm giá mạnh không đáng có.

**5. Ứng dụng & tranh luận**
- Lựa chọn danh mục cho dòng vốn lớn, thiết kế thuật toán chia nhỏ lệnh tự động (TWAP, VWAP).
- Trade-off: Cổ phiếu có độ sâu lớn thường tăng giảm đầm chắc, ít khi có cơ hội tăng trần liên tiếp bằng lần như các cổ phiếu nông vốn hóa nhỏ.
- Lỗi thường gặp: Dùng dòng vốn lớn mua vào các cổ phiếu có độ sâu thị trường quá mỏng, đến khi muốn bán ra thì rơi vào cảnh kẹp hàng không có thanh khoản thoát lui.

**6. Liên kết**
[Sổ lệnh](#4-sổ-lệnh-giao-dịch-order-book) · [Khối lượng giao dịch](#6-khối-lượng-giao-dịch-trading-volume) · [Thanh khoản thị trường](06_Market_Valuation_Cap_FreeFloat_MarketLiquidity_PriceDiscovery.md)

---

## 6. Khối lượng giao dịch (Trading Volume)

**1. Là gì?**
Khối lượng giao dịch là tổng số lượng đơn vị cổ phiếu, hợp đồng hoặc đơn vị tiền tệ được trao tay chuyển nhượng thành công giữa bên mua và bên bán trên thị trường trong một khoảng thời gian nhất định (thường tính theo một phiên giao dịch hàng ngày). Nếu chỉ nhớ một điều: **Khối lượng giao dịch là nhiên liệu thúc đẩy cỗ máy giá cả; giá tăng mà không có khối lượng ủng hộ chỉ là sự tăng giá mong manh và giả tạo.**

**2. Hoạt động thế nào?**
- Mỗi một giao dịch khớp lệnh thành công được tính một lần vào khối lượng giao dịch (1 người mua 100 cp từ 1 người bán $\to$ Volume = 100 cp, không tính nhân đôi thành 200).
- Phản ánh mức độ quan tâm, sự đồng thuận và cường độ tham gia của dòng tiền lớn (Smart Money) vào cổ phiếu.
- Quy tắc xác nhận phân tích kỹ thuật: Một đợt bứt phá (Breakout) vượt đỉnh giá chỉ được coi là hợp lệ khi đi kèm với sự bùng nổ vượt trội của khối lượng giao dịch (Volume cao gấp 1,5 đến 2 lần trung bình 20 phiên).

**3. Công thức & mô hình**
$$\text{Trading Volume}_t = \sum_{i=1}^{M} q_i$$
Giá trị giao dịch (Turnover Value):
$$\text{Trading Value}_t = \sum_{i=1}^{M} q_i \times p_i$$

**4. Ví dụ**
- Trong phiên giao dịch ngày 15/11, cổ phiếu HPG ghi nhận khối lượng giao dịch đạt 35 triệu cổ phiếu, với tổng giá trị giao dịch đạt gần 1.000 tỷ đồng, dẫn đầu thanh khoản toàn sàn chứng khoán HOSE (số liệu minh họa).
- Thực tế: Khi VN-Index lập đỉnh lịch sử năm 2021, giá trị giao dịch toàn thị trường chạm mốc kỷ lục hơn 2 tỷ USD/phiên (hơn 50.000 tỷ đồng); ngược lại trong giai đoạn thị trường tạo đáy thanh đạm cuối năm 2022, giá trị giao dịch chỉ còn lẹt đẹt 8.000 - 10.000 tỷ đồng/phiên.
- Counterfactual: Nếu giá một cổ phiếu tăng trần 7% nhưng khối lượng giao dịch chỉ vẻn vẹn vài trăm cổ phiếu, đó chỉ là hiện tượng 'kéo giá trộm' không có sự tham gia của dòng tiền lớn và rất dễ sụp đổ ngay phiên sau.

**5. Ứng dụng & tranh luận**
- Xác nhận xu hướng giá, phân tích chỉ báo VSA (Volume Spread Analysis), định giá thanh khoản cổ phiếu.
- Trade-off: Giúp kiểm chứng độ bền của xu hướng giá; nhưng khối lượng có thể bị làm méo mó bởi các giao dịch tay phải đảo sang tay trái của các đội lái (Wash trading).
- Lỗi thường gặp: Chỉ quan sát biến động tăng giảm của đường giá mà bỏ qua hoàn toàn thanh khối lượng giao dịch bên dưới biểu đồ.

**6. Liên kết**
[Độ sâu thị trường](#5-độ-sâu-thị-trường-market-depth) · [Sổ lệnh](#4-sổ-lệnh-giao-dịch-order-book) · [Phân tích khối lượng VWAP](../06_Technical_Analysis/07_Fibonacci_and_Volume_Profile_FibRetracement_FibExtension_VolumeProfile_VWAP.md)

---

## Câu hỏi tự kiểm tra

1. Giải thích mối quan hệ giữa Best Bid, Best Ask và Bid-Ask Spread trên sổ lệnh giao dịch của một cổ phiếu.
2. Tại sao các nhà đầu tư tổ chức quản lý quỹ hàng trăm triệu USD lại bắt buộc phải quan sát kỹ lưỡng chỉ số Độ sâu thị trường (Market Depth) trước khi thực hiện lệnh giải ngân?
3. Phân tích câu nói kinh điển của các nhà phân tích kỹ thuật: 'Khối lượng giao dịch luôn đi trước đường giá (Volume precedes price)'. Nêu ý nghĩa của khối lượng bùng nổ trong một phiên bứt phá vượt đỉnh.

---

## Ghi chú nguồn

Dựa trên giáo trình Market Microstructure của Larry Harris (Trading and Exchanges: Market Microstructure for Practitioners), quy chế giao dịch của Sở GDCK TP.HCM (HOSE), và lý thuyết Wyckoff về giá và khối lượng.
