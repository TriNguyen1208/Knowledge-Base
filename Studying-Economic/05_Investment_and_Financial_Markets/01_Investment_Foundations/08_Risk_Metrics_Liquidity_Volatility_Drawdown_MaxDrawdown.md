# Chuyên đề 5.1.8: Bộ Tứ Thước đo Rủi ro: Thanh khoản, Biến động và Sụt giảm Vốn

Chuyên đề này phân tích chi tiết bốn chỉ số đo lường rủi ro quan trọng bậc nhất giúp nhà đầu tư định vị mối nguy hiểm trên thị trường: khả năng chuyển đổi tiền mặt (Thanh khoản), mức rung lắc của giá (Biến động), và chiều sâu của các đợt sụt giảm tài khoản (Drawdown và Maximum Drawdown).

> Câu hỏi xuyên suốt: Làm thế nào để đo lường chính xác mức độ tổn thương của danh mục trước khi các cơn bão tài chính quét qua tài sản của bạn?

---

## 1. Tính thanh khoản (Liquidity)

**1. Là gì?**
Tính thanh khoản là khả năng một tài sản tài chính có thể được chuyển đổi nhanh chóng thành tiền mặt mà giá thị trường của nó bị suy giảm không đáng kể. Nếu chỉ nhớ một điều: **Tài sản có thanh khoản cao là thứ bạn có thể bán ngay lập tức trong vòng vài giây mà không phải chịu hạ giá sâu.**

**2. Hoạt động thế nào?**
- Tiền mặt là tài sản có thanh khoản tuyệt đối (chuẩn mực tham chiếu).
- Phụ thuộc vào độ sâu thị trường (Market depth), khối lượng giao dịch bình quân và số lượng người mua bán sẵn sàng tham gia.
- Rủi ro thanh khoản xuất hiện khi thị trường đóng băng: nhà đầu tư muốn bán nhưng không có ai mua, buộc phải giảm giá 20-50% (bán tống bán tháo) để thu tiền về.

**3. Công thức & mô hình**
Tỷ lệ chênh lệch giá mua - bán (Bid-Ask Spread):
$$\text{Spread Ratio} = \frac{P_{\text{ask}} - P_{\text{bid}}}{P_{\text{mid}}} \times 100\%$$
Chênh lệch spread càng hẹp biểu thị thanh khoản càng cao.

**4. Ví dụ**
- Bạn sở hữu 1 tỷ đồng cổ phiếu HPG niêm yết trên sàn HOSE: chỉ mất 2 giây bấm lệnh là tiền khớp ngay với chênh lệch giá 0,1%. Nếu bạn sở hữu mảnh đất vườn ở vùng sâu trị giá 1 tỷ, bạn có thể mất 6 tháng đến 1 năm mới tìm được người mua nếu không chấp nhận giảm giá 30% (số liệu minh họa).
- Thực tế: Trong các đợt siết tín dụng bất động sản năm 2022-2023 tại Việt Nam, nhiều nhà đầu tư sở hữu danh mục đất đai hàng chục tỷ nhưng vẫn vỡ nợ do không thể thanh lý kịp thời để trả lãi ngân hàng hàng tháng.
- Counterfactual: Nếu thị trường bất động sản có cơ chế giao dịch tập trung và thanh khoản tức thời như chứng khoán, hiện tượng bán cắt lỗ 40-50% sẽ ít xảy ra đột ngột hơn.

**5. Ứng dụng & tranh luận**
- Xây dựng quỹ khẩn cấp, quản trị rủi ro thanh khoản ngân hàng theo hiệp ước Basel III.
- Trade-off: Tài sản thanh khoản cao thường có mức sinh lời thấp hơn (phần bù thanh khoản - Liquidity Premium bù đắp cho tài sản kém thanh khoản).
- Lỗi thường gặp: Đầu tư toàn bộ tiền vào các tài sản kém thanh khoản dài hạn mà không giữ lại lượng tiền mặt dự phòng.

**6. Liên kết**
[Mức độ biến động](#2-mức-độ-biến-động-volatility) · [Mức sụt giảm vốn](#3-mức-sụt-giảm-vốn-drawdown) · [Rủi ro thanh khoản](../15_Investment_Risk_Management/01_Core_Market_Risks_InvestmentRisk_MarketRisk_CreditRisk_LiquidityRisk_InterestRateRisk.md)

---

## 2. Mức độ biến động (Volatility)

**1. Là gì?**
Mức độ biến động là thước đo thống kê phản ánh biên độ dao động và tốc độ phân tán của giá cả hoặc tỷ suất sinh lời của một tài sản quanh mức giá trị trung bình của nó trong một khoảng thời gian nhất định. Nếu chỉ nhớ một điều: **Biến động là thước đo nhịp đập cảm xúc của thị trường; biên độ dao động càng lớn thì độ bất định và rủi ro ngắn hạn càng cao.**

**2. Hoạt động thế nào?**
- Đo lường phổ biến bằng độ lệch chuẩn (Standard Deviation - $\sigma$) hoặc phương sai của chuỗi lợi nhuận theo ngày, tuần hoặc tháng.
- Phân loại: Biến động lịch sử (Historical Volatility) dựa trên dữ liệu quá khứ, và Biến động ngụ ý (Implied Volatility - IV) phản ánh kỳ vọng tương lai từ giá hợp đồng quyền chọn.
- Trong tài chính hiện đại, biến động thường được coi là đồng nghĩa với rủi ro, dù trên thực tế biến động theo chiều tăng là điều mọi nhà đầu tư đều mong muốn.

**3. Công thức & mô hình**
Độ lệch chuẩn mẫu của tỷ suất sinh lời:
$$\sigma = \sqrt{\frac{1}{n-1} \sum_{t=1}^{n} (R_t - \bar{R})^2}$$
Biến động quy năm (Annualized Volatility):
$$\sigma_{\text{ann}} = \sigma_{\text{daily}} \times \sqrt{252}$$ (với 252 ngày giao dịch trong năm).

**4. Ví dụ**
- Cổ phiếu A có tỷ suất sinh lời trung bình 10%/năm với $\sigma = 5\%$; giá của nó dao động rất êm đềm trong khoảng 5% đến 15%. Cổ phiếu B cũng có mức sinh lời trung bình 10%/năm nhưng $\sigma = 35\%$; nó có thể tăng 45% ở năm này rồi giảm 25% ở năm sau (số liệu minh họa).
- Chỉ số biến động VIX (CBOE Volatility Index) thường được gọi là 'Thước đo nỗi sợ hãi của Phố Wall': Khi thị trường hoảng loạn (như đại dịch Covid-19 tháng 3/2020), chỉ số VIX vọt lên trên 80 điểm.
- Counterfactual: Nếu một cổ phiếu không có biến động giá nào cả (giá đứng im tuyệt đối), các nhà giao dịch ngắn hạn sẽ không có cơ hội kiếm lời từ chênh lệch giá.

**5. Ứng dụng & tranh luận**
- Định giá quyền chọn (Black-Scholes), tính toán tỷ số Sharpe, quản trị rủi ro danh mục MPT.
- Trade-off: Chấp nhận biến động lớn là điều kiện bắt buộc để có cơ hội đạt được mức sinh lời bứt phá.
- Lỗi thường gặp: Hoảng sợ và bán tháo tài sản tốt chỉ vì những đợt rung lắc biến động giá thông thường của thị trường.

**6. Liên kết**
[Tính thanh khoản](#1-tính-thanh-khoản-liquidity) · [Drawdown](#3-mức-sụt-giảm-vốn-drawdown) · [Tỷ số Sharpe](../14_Portfolio_Management/05_Risk_Adjusted_Ratios_Sharpe_Sortino_Treynor_InformationRatio_JensensAlpha_Beta_Alpha_RiskAdjusted.md)

---

## 3. Mức sụt giảm vốn (Drawdown)

**1. Là gì?**
Drawdown là mức suy giảm giá trị danh mục đầu tư được đo từ điểm đỉnh cao nhất (peak) đến điểm đáy thấp nhất tiếp theo (trough) trước khi một đỉnh cao mới được thiết lập. Thước đo này phản ánh trải nghiệm thua lỗ thực tế mà nhà đầu tư phải nếm trải trong quá trình nắm giữ tài sản. Nếu chỉ nhớ một điều: **Drawdown đo lường độ sâu của chiếc hố tài chính mà bạn phải leo qua trước khi tài khoản quay trở lại mức đỉnh cũ.**

**2. Hoạt động thế nào?**
- Bắt đầu tính khi tài khoản đạt đỉnh mới và bắt đầu đi xuống; kết thúc khi giá trị danh mục phục hồi vượt đỉnh cũ (giai đoạn Recovery).
- Thời gian sụt giảm (Drawdown Duration) đo lường xem nhà đầu tư phải 'gồng lỗ' trong bao lâu (vài tháng hay vài năm).
- Rất quan trọng với tâm lý học đầu tư vì con người chịu nỗi đau mất tiền gấp đôi niềm vui kiếm được tiền (Loss Aversion).

**3. Công thức & mô hình**
$$\text{Drawdown}_t = \frac{\text{Peak}_t - V_t}{\text{Peak}_t} \times 100\%$$
Trong đó: $\text{Peak}_t = \max_{s \le t} (V_s)$ là giá trị cao nhất danh mục từng đạt được từ trước đến thời điểm $t$, và $V_t$ là giá trị danh mục tại thời điểm $t$.

**4. Ví dụ**
- Tài khoản của bạn ban đầu 100 triệu, tăng lên 150 triệu (đỉnh mới). Sau đó thị trường điều chỉnh khiến tài khoản rơi xuống 105 triệu. Mức Drawdown là $\frac{150 - 105}{150} \times 100\% = 30\%$. Dù bạn vẫn đang lãi 5% so với vốn gốc ban đầu, về mặt tâm lý bạn cảm thấy mình vừa bị mất 45 triệu đồng (số liệu minh họa).
- Thực tế: Chỉ số VN-Index lập đỉnh 1.528 điểm vào tháng 1/2022 và rơi về đáy 873 điểm vào tháng 11/2022, tạo ra mức Drawdown lên tới gần 43% cho toàn thị trường.
- Counterfactual: Nếu không có các công cụ phòng vệ hoặc quản trị vị thế, một đợt drawdown sâu 50% sẽ đòi hỏi tài khoản phải tăng trưởng lại 100% chỉ để hòa vốn.

**5. Ứng dụng & tranh luận**
- Đánh giá năng lực kiểm soát rủi ro của robot giao dịch tự động (EA) và nhà quản lý quỹ phòng hộ.
- Trade-off: Giới hạn mức drawdown tối đa đòi hỏi phải sử dụng các lệnh cắt lỗ hoặc giảm quy mô vị thế, đôi khi làm bỏ lỡ các nhịp phục hồi chữ V.
- Lỗi thường gặp: Bỏ cuộc đúng vào điểm đáy sâu nhất của đợt drawdown vì không chịu nổi áp lực tâm lý.

**6. Liên kết**
[Mức sụt giảm tối đa](#4-mức-sụt-giảm-vốn-tối-đa-maximum-drawdown) · [Mức độ biến động](#2-mức-độ-biến-động-volatility) · [Tâm lý sợ thua lỗ](../16_Investment_Psychology_and_Behavioral_Finance/01_Foundations_and_Prospect_Theory_BehavioralFinance_LossAversion_ProspectTheory_RegretAversion.md)

---

## 4. Mức sụt giảm vốn tối đa (Maximum Drawdown (MDD))

**1. Là gì?**
Maximum Drawdown (MDD) là mức sụt giảm phần trăm lớn nhất từ đỉnh xuống đáy được ghi nhận trong toàn bộ lịch sử hoạt động của một khoản đầu tư, quỹ hoặc chiến lược giao dịch. Đây là kịch bản xấu nhất về mức độ mất tiền liên tục mà một nhà đầu tư có thể phải gánh chịu nếu không may mua vào đúng ngay đỉnh cao nhất lịch sử. Nếu chỉ nhớ một điều: **MDD cho bạn biết cú đấm đau đớn nhất mà danh mục đầu tư từng phải hứng chịu trong quá khứ.**

**2. Hoạt động thế nào?**
- Quét toàn bộ lịch sử chuỗi dữ liệu giá trị tài sản để tìm cặp (Đỉnh - Đáy) có mức chênh lệch phần trăm lớn nhất.
- Là chỉ số quan trọng bậc nhất để kiểm tra độ an toàn trước khi rót tiền vào các quỹ đầu cơ hoặc hệ thống giao dịch tự động.
- Dùng làm mẫu số cho tỷ số Calmar (Lợi nhuận kép chia cho MDD) để đo lường mức sinh lời trên mỗi đơn vị rủi ro sụt giảm cực đại.

**3. Công thức & mô hình**
$$\text{MDD} = \max_{t \in (0, T)} \left( \max_{s \in (0, t)} \frac{V_s - V_t}{V_s} \right)$$
$$\text{Calmar Ratio} = \frac{\text{CAGR}}{\text{MDD}}$$

**4. Ví dụ**
- Một quỹ đầu cơ có lợi nhuận bình quân 25%/năm nhưng có MDD trong lịch sử là 60%. Một quỹ khác có lợi nhuận 18%/năm nhưng MDD chỉ là 15%. Phần lớn các nhà đầu tư tổ chức sẽ chọn quỹ thứ hai vì tỷ số Calmar cao hơn ($18/15 = 1,2 > 25/60 = 0,416$) và an toàn hơn nhiều (số liệu minh họa).
- Khủng hoảng tài chính toàn cầu 2008: Chỉ số S&P 500 ghi nhận MDD lên tới 56,8% (từ tháng 10/2007 đến tháng 3/2009) và phải mất hơn 4 năm sau mới phục hồi hoàn toàn về đỉnh cũ.
- Counterfactual: Nếu nhà đầu tư biết danh mục có MDD 60%, họ sẽ không bao giờ sử dụng đòn bẩy vay nợ (margin) 1:1, vì chỉ cần thị trường giảm 50% là tài khoản đã bị giải chấp xóa sổ sạch vốn.

**5. Ứng dụng & tranh luận**
- Thiết lập ngưỡng cắt lỗ chiến lược cho danh mục, kiểm định sức chịu tải của quỹ đầu tư (Stress Testing).
- Trade-off: Giảm thiểu MDD đòi hỏi phải đa dạng hóa sang các lớp tài sản ít tương quan (vàng, trái phiếu chính phủ), làm giảm bớt tỷ suất sinh lời tối đa trong thị trường giá lên.
- Lỗi thường gặp: Nhà đầu tư nhìn vào biểu đồ lợi nhuận tăng trưởng đẹp mắt mà không kiểm tra chỉ số MDD, đến khi gặp đợt sụt giảm lớn thì bị sốc tâm lý.

**6. Liên kết**
[Mức sụt giảm vốn](#3-mức-sụt-giảm-vốn-drawdown) · [Bảo toàn vốn](09_Wealth_Goals_Preservation_Appreciation_Diversification.md) · [Quản trị rủi ro](../15_Investment_Risk_Management/01_Core_Market_Risks_InvestmentRisk_MarketRisk_CreditRisk_LiquidityRisk_InterestRateRisk.md)

---

## Câu hỏi tự kiểm tra

1. Một tài sản có tỷ suất sinh lời kỳ vọng 20%/năm nhưng tính thanh khoản rất thấp. Nhà đầu tư phải đối mặt với những loại rủi ro nào khi phân bổ tỷ trọng lớn vào tài sản này?
2. Giải thích mối quan hệ toán học bất đối xứng giữa tỷ lệ thua lỗ (Drawdown) và tỷ lệ sinh lời cần thiết để hòa vốn (Ví dụ: lỗ 20% cần lãi bao nhiêu %, lỗ 50% cần lãi bao nhiêu %?).
3. Tại sao các nhà quản lý quỹ định lượng chuyên nghiệp lại quan tâm đến chỉ số Calmar Ratio (CAGR/MDD) hơn là nhìn vào tỷ suất sinh lời thuần túy?

---

## Ghi chú nguồn

Dựa trên các nghiên cứu định lượng của Nassim Nicholas Taleb (The Black Swan, Antifragile), lý thuyết rủi ro của Benoit Mandelbrot, và chuẩn mực quản lý rủi ro của GARP (Global Association of Risk Professionals).
