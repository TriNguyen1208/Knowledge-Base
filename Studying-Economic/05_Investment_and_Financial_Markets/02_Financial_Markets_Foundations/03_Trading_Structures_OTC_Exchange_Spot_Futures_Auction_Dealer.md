# Chuyên đề 5.2.3: Các Cấu trúc và Cơ chế Giao dịch: OTC, Sở, Giao ngay, Tương lai, Đấu giá và Nhà buôn

Chuyên đề này phân tích kiến trúc vận hành bên dưới của các sàn tài chính: sự đối lập giữa thị trường tự do đàm phán (OTC) và sân chơi tập trung chuẩn hóa (Sở), sự khác biệt giữa thời điểm thực hiện (Giao ngay vs Tương lai), cùng hai cỗ máy khớp lệnh cốt lõi của thế giới: Đấu giá sổ lệnh và Mạng lưới nhà buôn tạo lập.

> Câu hỏi xuyên suốt: Làm thế nào mà lệnh mua bán của bạn được khớp trong tích tắc đằng sau các thuật toán và hệ thống đại lý tài chính toàn cầu?

---

## 1. Thị trường phi tập trung (Over-the-Counter Market (OTC))

**1. Là gì?**
Thị trường OTC là mạng lưới thị trường tài chính không có địa điểm giao dịch vật lý tập trung, nơi các giao dịch mua bán tài sản (cổ phiếu chưa niêm yết, trái phiếu, hoán đổi, ngoại hối) được đàm phán và thỏa thuận trực tiếp hoặc thông qua mạng lưới điện tử giữa hai bên đối tác. Nếu chỉ nhớ một điều: **OTC là chợ tự do đàm phán riêng tư giữa các bên mua và bán, hợp đồng 'may đo' theo nhu cầu chứ không bị đóng khung trong chuẩn mực của sở.**

**2. Hoạt động thế nào?**
- Không có cơ chế khớp lệnh tự động tập trung của một sở giao dịch duy nhất; giao dịch thực hiện qua điện thoại, mạng máy tính (Bloomberg, Reuters), hoặc hệ thống đại lý (dealers).
- Tính linh hoạt cao: Các điều khoản về quy mô, ngày đáo hạn, giá cả có thể tùy biến linh hoạt theo nhu cầu riêng của hai bên.
- Rủi ro đối tác (Counterparty risk) cao hơn nhiều do không có trung tâm thanh toán bù trừ bắt buộc đứng ra bảo lãnh giao dịch.

**3. Công thức & mô hình**
$$\text{Counterparty Default Risk} = P(\text{Default}) \times \text{Loss Given Default (LGD)}$$

**4. Ví dụ**
- Một nhà đầu tư tại TP.HCM mua thỏa thuận 50.000 cổ phần của một công ty công nghệ chưa lên sàn chứng khoán từ một cổ đông sáng lập thông qua hợp đồng chuyển nhượng viết tay có công chứng (số liệu minh họa).
- Thực tế tại Việt Nam: Thị trường UPCoM (Unlisted Public Company Market) tại Sở GDCK Hà Nội (HNX) được lập ra như một bước đệm chuẩn hóa có tổ chức cho các cổ phiếu OTC nhằm tăng cường minh bạch thông tin.
- Counterfactual: Nếu một trong hai bên phá sản hoặc quỵt nợ trước khi chuyển tiền, bên kia sẽ phải tự gánh chịu toàn bộ thiệt hại và đưa vụ việc ra tòa án dân sự kéo dài.

**5. Ứng dụng & tranh luận**
- Giao dịch trái phiếu doanh nghiệp, các hợp đồng phái sinh hoán đổi lãi suất phức tạp, mua bán cổ phần doanh nghiệp tiền IPO.
- Trade-off: Tính tùy biến và bảo mật cao nhưng thanh khoản thấp, thiếu tính minh bạch về giá và rủi ro quỵt nợ lớn.
- Lỗi thường gặp: Mua cổ phiếu OTC qua lời giới thiệu trên mạng xã hội mà không kiểm tra tình trạng sổ cổ đông và tính pháp lý của doanh nghiệp.

**6. Liên kết**
[Thị trường tập trung qua sở](#2-thị-trường-giao-dịch-tập-trung-exchange-traded-market) · [Thị trường nhà buôn](#6-thị-trường-nhà-buôn-dealer-market) · [Rủi ro đối tác](../15_Investment_Risk_Management/02_Macro_and_Institutional_Risks_Inflation_Currency_Concentration_Counterparty_Operational.md)

---

## 2. Thị trường giao dịch tập trung (Exchange-Traded Market)

**1. Là gì?**
Thị trường giao dịch tập trung là thị trường tài chính được tổ chức chặt chẽ tại một địa điểm vật lý hoặc hệ thống điện tử trung tâm (sở giao dịch chứng khoán), nơi mọi chứng khoán niêm yết đều được chuẩn hóa nghiêm ngặt và mọi lệnh mua bán được khớp tự động theo các thuật toán công khai. Nếu chỉ nhớ một điều: **Thị trường tập trung là sân chơi có trọng tài, luật chơi minh bạch và mọi người đều nhìn thấy cùng một mức giá niêm yết trên bảng điện.**

**2. Hoạt động thế nào?**
- Tất cả các bên tham gia bắt buộc phải tuân thủ quy chế giao dịch của sở: bước giá, biên độ dao động giá trần/sàn, quy định về lô giao dịch (lô chẵn 100 cổ phiếu).
- Hệ thống bù trừ thanh toán trung tâm (Central Counterparty - CCP) đứng ở giữa làm người mua của mọi người bán và người bán của mọi người mua, triệt tiêu hoàn toàn rủi ro đối tác.
- Tính minh bạch thông tin cao: Doanh nghiệp niêm yết bắt buộc phải công bố báo cáo tài chính kiểm toán và các thông tin bất thường kịp thời.

**3. Công thức & mô hình**
Cơ chế khớp lệnh theo mức giá ưu tiên và thời gian (Price-Time Priority):
$$\text{Match Rule: } P_{\text{buy}} \ge P_{\text{sell}} \implies \text{Khớp lệnh tại mức giá ưu tiên trước, theo thứ tự thời gian nhập lệnh.}$$

**4. Ví dụ**
- Trên sàn HOSE, lệnh mua 500 cổ phiếu VCB giá 92.000 đ của bạn được hệ thống máy tính tự động khớp tức thì với lệnh bán của một người hoàn toàn xa lạ ở Đà Nẵng, giao dịch hoàn tất trong 0,01 giây (số liệu minh họa).
- Thực tế: Các sở giao dịch lớn như New York Stock Exchange (NYSE), Tokyo Stock Exchange (TSE), và HOSE xử lý hàng chục triệu lệnh giao dịch mỗi ngày với độ chính xác và bảo mật tuyệt đối.
- Counterfactual: Nếu không có sở giao dịch tập trung, bạn sẽ phải tự mình đăng báo tìm kiếm xem ai ở Việt Nam đang muốn bán 500 cổ phiếu VCB và mặc cả giá từng người một.

**5. Ứng dụng & tranh luận**
- Giao dịch chứng khoán, chứng chỉ quỹ đóng, hợp đồng tương lai chỉ số của công chúng.
- Trade-off: Thanh khoản cực cao, an toàn pháp lý tuyệt đối; nhưng các công cụ bị đóng khung chuẩn hóa, không thể tùy biến theo nhu cầu cá biệt.
- Lỗi thường gặp: Kỳ vọng có thể đàm phán riêng về giá hoặc điều khoản khi giao dịch trên sàn tập trung.

**6. Liên kết**
[Thị trường phi tập trung](#1-thị-trường-phi-tập-trung-over-the-counter-market-otc) · [Sở giao dịch chứng khoán](../03_Stock_Market_and_Equity_Investing/02_Shareholder_Role_Shareholder_Rights_Voting_Dividend_StockExchange.md) · [Thanh toán và bù trừ](10_Post_Trade_Infrastructure_Settlement_Clearing_Custody.md)

---

## 3. Thị trường giao ngay (Spot Market)

**1. Là gì?**
Thị trường giao ngay (Spot Market hay Cash Market) là nơi các tài sản tài chính hoặc hàng hóa được mua bán và thanh toán tiền mặt với việc chuyển giao quyền sở hữu diễn ra ngay lập tức 'tại chỗ' hoặc trong một khoảng thời gian thanh toán chuẩn ngắn (thường là $T+0, T+1, T+2$). Nếu chỉ nhớ một điều: **Thị trường giao ngay là tiền trao cháo múc ngay lập tức theo mức giá hiện tại của ngày hôm nay.**

**2. Hoạt động thế nào?**
- Giá giao dịch được gọi là Giá giao ngay (Spot Price).
- Khác với hợp đồng phái sinh cam kết chuyển giao trong tương lai; tại thị trường giao ngay, người mua trả toàn bộ tiền và người bán chuyển giao ngay tài sản.
- Phổ biến trong mua bán vàng vật chất, ngoại tệ tại quầy ngân hàng, và cổ phiếu niêm yết trên các sàn chứng khoán.

**3. Công thức & mô hình**
$$\text{Settlement Time: } T_{\text{settle}} \le T+2 \text{ ngày làm việc}$$
$$\text{Value: } P = S_0 \text{ (Spot Price)}$$

**4. Ví dụ**
- Bạn mang 80 triệu đồng tiền mặt ra tiệm vàng Mi Hồng hoặc Bảo Tín Minh Châu mua 1 lượng vàng nhẫn 9999: Bạn trả tiền và cầm vàng vật chất về nhà ngay trong 5 phút (số liệu minh họa).
- Thị trường dầu mỏ giao ngay (Spot Crude): Các nhà máy lọc dầu mua trực tiếp các lô dầu thô được bốc dỡ ngay lên tàu tại các cảng biển theo giá dầu Brent giao ngay ngày hôm đó.
- Counterfactual: Nếu mua theo hợp đồng tương lai giao sau 6 tháng, bạn chưa cần trả hết tiền ngay mà chỉ cần ký quỹ và chỉ nhận dầu sau nửa năm.

**5. Ứng dụng & tranh luận**
- Tiêu dùng hàng hóa thực tế, tích lũy vàng miếng, giao dịch cổ phiếu cơ sở.
- Trade-off: Chắc chắn sở hữu tài sản ngay nhưng đòi hỏi phải chuẩn bị 100% lượng tiền mặt khả dụng (không có đòn bẩy tự nhiên như thị trường tương lai).
- Lỗi thường gặp: Nhầm lẫn giữa giá hợp đồng tương lai của tháng sau với giá mua bán giao ngay tại thời điểm hiện tại.

**6. Liên kết**
[Thị trường tương lai](#4-thị-trường-tương-lai-futures-market) · [Giá giao ngay](../10_Commodities_and_Precious_Metals/05_Pricing_and_Markets_SpotPrice_FuturesPrice_CommoditySpot_CommodityFutures.md) · [Chu kỳ thanh toán](10_Post_Trade_Infrastructure_Settlement_Clearing_Custody.md)

---

## 4. Thị trường tương lai (Futures Market)

**1. Là gì?**
Thị trường tương lai là nơi các bên tham gia mua bán các hợp đồng tương lai chuẩn hóa, cam kết sẽ mua hoặc bán một tài sản cơ sở xác định tại một mức giá thỏa thuận hôm nay nhưng việc thanh toán và chuyển giao sẽ diễn ra vào một ngày cụ thể trong tương lai. Nếu chỉ nhớ một điều: **Thị trường tương lai là nơi bạn chốt mức giá của ngày hôm nay cho một giao dịch sẽ hoàn tất vào ngày mai.**

**2. Hoạt động thế nào?**
- Toàn bộ hợp đồng được chuẩn hóa tuyệt đối bởi sở giao dịch về khối lượng, phẩm chất, ngày đáo hạn.
- Nhà đầu tư chỉ cần ký quỹ một khoản tiền nhỏ (Initial Margin, thường từ 5% - 15% giá trị hợp đồng) thay vì phải trả 100% tiền mua.
- Hàng ngày, tài khoản được hạch toán lãi lỗ thực tế theo giá thị trường (Mark-to-Market). Đa số các hợp đồng được đóng vị thế trước ngày đáo hạn bằng giao dịch đối ứng chứ không thực sự chuyển giao tài sản vật chất.

**3. Công thức & mô hình**
$$\text{Leverage} = \frac{\text{Contract Value}}{\text{Initial Margin}} = \frac{1}{\text{Margin Rate}}$$
Nếu tỷ lệ ký quỹ là 10%, đòn bẩy tài chính tương đương 10 lần ($10\times$).

**4. Ví dụ**
- Một doanh nghiệp xuất khẩu cá tra ký hợp đồng tương lai bán 100.000 USD kỳ hạn 3 tháng với tỷ giá 25.500 VND/USD trên thị trường tương lai tiền tệ: Bất kể 3 tháng sau tỷ giá trên thị trường biến động thế nào, doanh nghiệp chắc chắn nhận được 2,55 tỷ đồng (số liệu minh họa).
- Thực tế tại Việt Nam: Thị trường phái sinh hợp đồng tương lai chỉ số VN30 tại HNX cho phép nhà đầu tư kiếm lời từ cả hai chiều thị trường tăng (Long) và giảm (Short) với tỷ lệ đòn bẩy khoảng 5-6 lần.
- Counterfactual: Nếu không có cơ chế gọi ký quỹ bổ sung (Margin Call) hàng ngày, bên chịu lỗ nặng có thể bỏ trốn khi giá thị trường đi ngược quá xa so với giá hợp đồng tương lai.

**5. Ứng dụng & tranh luận**
- Phòng ngừa rủi ro giá cả (Hedging) cho doanh nghiệp, đầu cơ lướt sóng đòn bẩy cao.
- Trade-off: Tỷ suất sinh lời tính trên vốn ký quỹ rất cao; nhưng rủi ro cháy sạch tài khoản trong thời gian ngắn nếu quản trị vị thế sai lầm.
- Lỗi thường gặp: Để vị thế qua ngày đáo hạn mà không hiểu quy chế tất toán tiền mặt hay chuyển giao hiện vật của sở.

**6. Liên kết**
[Thị trường giao ngay](#3-thị-trường-giao-ngay-spot-market) · [Hợp đồng tương lai](../11_Derivatives_and_Hedging/01_Derivatives_Foundations_Derivatives_Contracts_Forward_Futures.md) · [Ký quỹ phái sinh](../11_Derivatives_and_Hedging/05_Margin_Mechanics_Margin_InitialMargin_MaintenanceMargin_MarginCall_MarkToMarket.md)

---

## 5. Thị trường đấu giá (Auction Market)

**1. Là gì?**
Thị trường đấu giá (hay Order-Driven Market) là cơ chế thị trường nơi tất cả người mua và người bán tập hợp lại tại một sàn giao dịch trung tâm để công khai chào mức giá mà họ sẵn sàng mua (Bid) hoặc bán (Ask), và giao dịch chỉ xảy ra khi mức giá mua cao nhất gặp được mức giá bán thấp nhất. Nếu chỉ nhớ một điều: **Thị trường đấu giá không có đại lý trung gian đứng ra mua bán hộ; người mua và người bán tự cạnh tranh trực tiếp với nhau để tìm ra mức giá khớp lệnh.**

**2. Hoạt động thế nào?**
- Hai hình thức đấu giá chính:
  1. Đấu giá định kỳ (Call Auction): Gom toàn bộ lệnh trong một khoảng thời gian (như phiên ATO, ATC trên sàn HOSE) và xác định một mức giá duy nhất có khối lượng khớp lệnh lớn nhất.
  2. Đấu giá liên tục (Continuous Auction): Các lệnh được đưa vào sổ lệnh liên tục và khớp ngay lập tức theo nguyên tắc ưu tiên giá và thời gian.
- Sổ lệnh công khai minh bạch độ sâu thị trường cho tất cả các bên tham gia cùng quan sát.

**3. Công thức & mô hình**
Điều kiện xác định giá khớp lệnh trong phiên đấu giá định kỳ (Call Auction):
$$P^* = \arg\max_P \left[ \min(Q_{\text{buy}}(P), Q_{\text{sell}}(P)) \right]$$
Mức giá $P^*$ là giá tối đa hóa tổng khối lượng giao dịch được thực hiện.

**4. Ví dụ**
- Trong phiên khớp lệnh định kỳ đóng cửa (ATC) từ 14h30 đến 14h45 trên sàn HOSE, hệ thống gom toàn bộ lệnh mua và bán của cổ phiếu SSI. Thuật toán xác định mức giá 35.500 đ là mức giá giúp khớp được số lượng cổ phiếu lớn nhất (2,5 triệu cổ phiếu), và mức giá này trở thành giá đóng cửa chính thức của phiên (số liệu minh họa).
- Thực tế: Sàn giao dịch chứng khoán New York (NYSE) kết hợp giữa đấu giá liên tục điện tử và các nhà tạo lập thị trường chỉ định (Designated Market Makers - DMMs) để điều phối phiên mở cửa và đóng cửa.
- Counterfactual: Nếu không có đấu giá định kỳ lúc mở cửa, các tin tức dồn ứ sau một đêm có thể khiến giá cổ phiếu nhảy múa hỗn loạn và tạo ra những khoảng trống giá (gap) bất thường.

**5. Ứng dụng & tranh luận**
- Khớp lệnh trên các sở giao dịch chứng khoán hàng đầu thế giới, đấu thầu trái phiếu chính phủ, cổ phần hóa doanh nghiệp nhà nước.
- Trade-off: Tính minh bạch và công bằng cao nhất; nhưng nếu một cổ phiếu không có ai quan tâm mua bán thì thị trường đấu giá sẽ hoàn toàn mất thanh khoản.
- Lỗi thường gặp: Đặt lệnh mua giá quá thấp hoặc lệnh bán giá quá cao trong phiên đấu giá liên tục và bị bỏ lại khi thị trường chạy mất.

**6. Liên kết**
[Thị trường nhà buôn](#6-thị-trường-nhà-buôn-dealer-market) · [Sổ lệnh](05_Price_Mechanics_Bid_Ask_Spread_OrderBook_MarketDepth_TradingVolume.md) · [Phiên ATO/ATC](../03_Stock_Market_and_Equity_Investing/02_Shareholder_Role_Shareholder_Rights_Voting_Dividend_StockExchange.md)

---

## 6. Thị trường nhà buôn (Dealer Market)

**1. Là gì?**
Thị trường nhà buôn (hay Quote-Driven Market) là cơ chế thị trường nơi các nhà buôn (Dealers hay Market Makers) đóng vai trò trung gian chủ động, liên tục yết cả hai mức giá: giá họ sẵn sàng mua (Bid) và giá họ sẵn sàng bán (Ask) bằng chính nguồn vốn và kho tài sản của mình. Nếu chỉ nhớ một điều: **Trong thị trường nhà buôn, bạn không giao dịch với các nhà đầu tư khác; bạn luôn mua từ kho của nhà buôn hoặc bán tài sản lại cho chính nhà buôn.**

**2. Hoạt động thế nào?**
- Nhà buôn kiếm lợi nhuận từ mức chênh lệch giữa giá bán và giá mua (Bid-Ask Spread), không thu phí môi giới thuần túy.
- Nhà buôn chịu rủi ro tồn kho (Inventory risk): Nắm giữ tài sản trong tài khoản tự doanh và có thể bị lỗ nếu thị trường bất ngờ giảm giá mạnh trước khi kịp bán ra cho khách hàng khác.
- Cực kỳ phổ biến trên thị trường ngoại hối (Forex), thị trường trái phiếu doanh nghiệp, và sàn giao dịch công nghệ Nasdaq (Mỹ).

**3. Công thức & mô hình**
$$\text{Gross Dealer Profit} = Q \times (P_{\text{ask}} - P_{\text{bid}}) - \text{Inventory Holding Costs}$$

**4. Ví dụ**
- Một tiệm vàng lớn trên phố Trần Nhân Tông (Hà Nội) yết bảng giá vàng SJC: Mua vào 88 triệu đồng/lượng - Bán ra 90 triệu đồng/lượng. Tiệm vàng là một nhà buôn điển hình: Khách hàng muốn mua thì tiệm lấy vàng trong két ra bán giá 90 triệu, khách muốn bán thì tiệm bỏ 88 triệu tiền mặt ra thu mua ngay tức thì, ăn chênh lệch 2 triệu đồng/lượng (số liệu minh họa).
- Sàn Nasdaq: Ban đầu là thị trường hoàn toàn do mạng lưới hàng trăm nhà buôn kết nối qua màn hình máy tính (NASD Automated Quotation), nơi mỗi cổ phiếu luôn có ít nhất 2 đến 10 nhà buôn cạnh tranh yết giá để đảm bảo thanh khoản liên tục cho khách hàng.
- Counterfactual: Nếu các nhà buôn đồng loạt ngừng yết giá mua vì hoảng loạn, thị trường sẽ lập tức đóng băng thanh khoản và khách hàng không thể bán được tài sản dù chấp nhận hạ giá.

**5. Ứng dụng & tranh luận**
- Thị trường trái phiếu toàn cầu, kinh doanh vàng miếng, thị trường ngoại hối liên ngân hàng.
- Trade-off: Đảm bảo luôn có thanh khoản tức thời cho khách hàng; nhưng chênh lệch giá mua bán (spread) thường rộng hơn thị trường đấu giá thuần túy.
- Lỗi thường gặp: Bỏ qua chi phí ẩn từ chênh lệch bid-ask spread rộng của các nhà buôn khi thực hiện các giao dịch quy mô lớn.

**6. Liên kết**
[Thị trường đấu giá](#5-thị-trường-đấu-giá-auction-market) · [Nhà tạo lập thị trường](04_Market_Participants_Electronic_Trading_Retail_Institutional_MarketMakers_Brokers_Dealers_LiquidityProviders.md) · [Chênh lệch Bid-Ask](05_Price_Mechanics_Bid_Ask_Spread_OrderBook_MarketDepth_TradingVolume.md)

---

## Câu hỏi tự kiểm tra

1. So sánh sự khác nhau căn bản giữa Thị trường Đấu giá (Order-Driven) và Thị trường Nhà buôn (Quote-Driven) về cơ chế khớp lệnh và nguồn gốc thanh khoản.
2. Phân tích ưu điểm và rủi ro cố hữu của Thị trường Phi tập trung (OTC) so với Thị trường Giao dịch Tập trung qua Sở (Exchange-Traded).
3. Tại sao các nhà buôn (Dealers) trên thị trường trái phiếu và ngoại tệ lại yêu cầu một mức chênh lệch Bid-Ask Spread rộng hơn trong những giai đoạn thị trường biến động dữ dội?

---

## Ghi chú nguồn

Dựa trên các nghiên cứu cấu trúc vi mô thị trường (Market Microstructure) của Maureen O'Hara, giáo trình CFA Level 1 (Market Organization and Structure), và quy chế hoạt động của sàn Nasdaq.
