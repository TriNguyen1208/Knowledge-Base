# Chuyên đề 3.2: Các Đường Sản phẩm và Năng suất Biên

Năm keyword dưới đây cấu thành bộ công cụ đo lường năng suất cốt lõi trong ngắn hạn: **tổng sản phẩm (TP)**, **năng suất trung bình (AP)**, **năng suất biên (MP)**, cùng hai đại diện chuyên biệt cho từng nhân tố là **năng suất biên của lao động (MPL)** và **năng suất biên của vốn (MPK)**.

> Câu hỏi xuyên suốt: Khi tuyển thêm một công nhân vào xưởng, sản lượng tăng thêm là bao nhiêu và làm sao biết công nhân đó đang đóng góp tích cực hay chỉ làm vướng chân người khác?

---

## 1. Tổng Sản phẩm (Total Product)

**1. Là gì?**
Tổng sản phẩm (TP hay $Q$) là toàn bộ số lượng sản phẩm đầu ra hoàn chỉnh mà doanh nghiệp sản xuất được trong một khoảng thời gian nhất định từ việc kết hợp một số lượng đầu vào biến đổi nhất định (thường là lao động) với quy mô đầu vào cố định sẵn có. Nếu chỉ nhớ một điều: **tổng sản phẩm là tổng số hàng đếm được khi hết giờ làm việc**.

**2. Hoạt động thế nào?**
- Đồ thị đường tổng sản phẩm $TP_L$ theo số lượng lao động $L$ trải qua 3 giai đoạn đặc trưng:
  1. Giai đoạn tăng với tốc độ tăng dần: Độ dốc ngày càng dựng đứng, nhờ hiệu quả của sự phân công lao động và chuyên môn hóa.
  2. Giai đoạn tăng với tốc độ giảm dần: $TP$ vẫn tiếp tục tăng lên nhưng chậm dần lại do bắt đầu xuất hiện sự hạn chế của máy móc cố định.
  3. Giai đoạn đạt cực đại và suy giảm: $TP$ đạt đỉnh tại điểm $MP = 0$. Nếu tiếp tục nhồi thêm người, công nhân vướng chỗ nhau, làm hỏng máy móc, khiến $TP$ bị kéo tụt xuống ($MP < 0$).

**3. Công thức & mô hình**
Hàm tổng sản lượng:

$$
TP = Q = F(L \mid \bar{K})
$$

Mối quan hệ cực trị: $TP$ đạt giá trị lớn nhất khi đạo hàm bậc nhất bằng 0:

$$
\frac{d(TP)}{dL} = MP_L = 0
$$

**4. Ví dụ**
- Xưởng gia công đồ gỗ mỹ nghệ (số liệu minh họa):
  - 0 thợ mộc: $TP = 0$ chiếc ghế/ngày.
  - 1 thợ mộc: $TP = 10$ chiếc/ngày.
  - 2 thợ mộc: $TP = 25$ chiếc/ngày (tăng thêm 15 chiếc nhờ chia người cưa người đánh bóng).
  - 3 thợ mộc: $TP = 35$ chiếc/ngày (tăng thêm 10 chiếc).
  - 4 thợ mộc: $TP = 38$ chiếc/ngày (tăng thêm 3 chiếc, máy cưa bị quá tải).
  - 5 thợ mộc: $TP = 36$ chiếc/ngày (thừa người cản trở nhau, sản lượng giảm).
- Thực tế: Năng suất thu hoạch thanh long của các nhà vườn tại Việt Nam tăng mạnh khi tăng nhân công thu hái, nhưng nếu thuê quá đông người trên cùng một mảnh vườn thì cây bị giẫm nát làm hỏng trái.
- Counterfactual: Nếu đầu tư thêm máy móc nhà xưởng gấp đôi, đường tổng sản phẩm $TP$ sẽ dịch chuyển tịnh tiến lên trên ở mọi mức lao động.

**5. Ứng dụng & tranh luận**
- Doanh nghiệp xác định công suất trần tối đa ngắn hạn để không nhận đơn hàng vượt quá khả năng sản xuất.
- Lỗi thường gặp: Nhầm tưởng rằng chỉ cần thuê thêm người thì tổng sản phẩm sẽ luôn luôn tăng mãi mãi.

**6. Liên kết**
- [Năng suất trung bình](#2-năng-suất-trung-bình-average-product) · [Năng suất biên](#3-năng-suất-biên-marginal-product) · [Hàm sản xuất](01_Production_Function_and_Time_Horizon.md)

---

## 2. Năng suất Trung bình (Average Product)

**1. Là gì?**
Năng suất trung bình (AP) là số lượng sản phẩm đầu ra tính bình quân trên mỗi một đơn vị yếu tố đầu vào được sử dụng trong quá trình sản xuất. Thông thường nhất là Năng suất trung bình của lao động ($AP_L$), phản ánh mức sản lượng mà một công nhân làm ra được tính bình quân đầu người. Nếu chỉ nhớ một điều: **năng suất trung bình là sản lượng bình quân đầu người của xưởng**.

**2. Hoạt động thế nào?**
- Về mặt hình học: $AP_L$ tại một điểm bất kỳ trên đường tổng sản phẩm chính là độ dốc của đường thẳng nối từ gốc tọa độ $(0,0)$ tới điểm đó.
- Mối quan hệ sống còn giữa $AP$ và $MP$:
  - Khi $MP > AP$: Năng suất biên đang kéo năng suất trung bình **tăng lên** ($AP$ dốc lên).
  - Khi $MP < AP$: Năng suất biên đang kéo năng suất trung bình **giảm xuống** ($AP$ dốc xuống).
  - Khi $MP = AP$: Năng suất trung bình đạt **giá trị cực đại** (điểm đỉnh của $AP$).
- Tương tự như điểm số học tập: Nếu điểm thi môn tiếp theo ($MP$) cao hơn điểm trung bình tích lũy ($AP$), điểm tích lũy của bạn sẽ tăng lên!

**3. Công thức & mô hình**
Công thức năng suất trung bình của lao động và của vốn:

$$
AP_L = \frac{TP}{L} = \frac{Q}{L}, \quad AP_K = \frac{TP}{K} = \frac{Q}{K}
$$

Điều kiện cực đại của $AP_L$:

$$
\frac{d(AP_L)}{dL} = \frac{MP_L - AP_L}{L} = 0 \quad \iff \quad MP_L = AP_L
$$

**4. Ví dụ**
- Trong ví dụ xưởng mộc ở trên:
  - Thuê 1 thợ: $TP = 10 \Rightarrow AP_L = 10 / 1 = 10$ chiếc/người.
  - Thuê 2 thợ: $TP = 25 \Rightarrow AP_L = 25 / 2 = 12,5$ chiếc/người (AP tăng vì $MP_2 = 15 > 10$).
  - Thuê 3 thợ: $TP = 35 \Rightarrow AP_L = 35 / 3 = 11,67$ chiếc/người (AP giảm vì $MP_3 = 10 < 12,5$).
  - Thuê 4 thợ: $TP = 38 \Rightarrow AP_L = 38 / 4 = 9,5$ chiếc/người.
- Thực tế: Năng suất lao động bình quân của toàn bộ nền kinh tế Việt Nam năm 2024 ước đạt khoảng 200 triệu đồng/lao động (theo số liệu Tổng cục Thống kê), được tính bằng GDP chia cho tổng số người có việc làm.
- Counterfactual: Nếu đưa robot hỗ trợ tự động hóa vào dây chuyền, sản lượng bình quân đầu người của mỗi công nhân có thể tăng gấp 3-4 lần.

**5. Ứng dụng & tranh luận**
- Thước đo chủ yếu để so sánh mức sống và năng lực cạnh tranh quốc gia giữa các nền kinh tế.
- Lỗi thường gặp: Đánh giá thành tích của nhân viên dựa trên $AP$ thay vì $MP$ (người quản lý nhầm lẫn thành tích bình quân với đóng góp tăng thêm thực sự của người mới vào).

**6. Liên kết**
- [Tổng sản phẩm](#1-tổng-sản-phẩm-total-product) · [Năng suất biên](#3-năng-suất-biên-marginal-product) · [Năng suất lao động](../../09_Unemployment_and_Labor/04_Wages_Productivity_and_Skill_Premium.md)

---

## 3. Năng suất Biên (Marginal Product)

**1. Là gì?**
Năng suất biên (MP) là sự thay đổi trong tổng sản lượng đầu ra khi doanh nghiệp sử dụng thêm **một đơn vị** của một yếu tố đầu vào sản xuất, trong khi giữ nguyên số lượng của tất cả các yếu tố đầu vào khác. Đây là khái niệm quan trọng bậc nhất để doanh nghiệp ra quyết định tuyển dụng thêm hay sa thải bớt nhân công. Nếu chỉ nhớ một điều: **năng suất biên là người làm thêm tạo ra thêm được mấy cái bánh**.

**2. Hoạt động thế nào?**
- Về mặt hình học: Năng suất biên chính là độ dốc của tiếp tuyến tại từng điểm trên đường tổng sản phẩm $TP$.
- Tuân theo Quy luật Năng suất biên giảm dần: Ban đầu $MP$ tăng lên nhờ lợi thế phân công lao động, sau đó đạt đỉnh và bắt đầu giảm dần đều.
- Các mốc ranh giới then chốt:
  - Khi $MP > 0$: Tổng sản phẩm $TP$ còn tiếp tục tăng.
  - Khi $MP = 0$: Tổng sản phẩm $TP$ đạt mức cực đại (đỉnh cao nhất).
  - Khi $MP < 0$: Tổng sản phẩm $TP$ bị suy giảm (thuê thêm người gây hại).

**3. Công thức & mô hình**
Công thức biến thiên rời rạc và vi phân liên tục:

$$
MP = \frac{\Delta TP}{\Delta X} \quad \text{hoặc} \quad MP = \frac{d(TP)}{dX}
$$

Với hàm sản xuất 2 biến $Q = F(K, L)$, năng suất biên của từng yếu tố là đạo hàm riêng:

$$
MP_L = \frac{\partial Q}{\partial L}, \quad MP_K = \frac{\partial Q}{\partial K}
$$

**4. Ví dụ**
- Tiếp tục ví dụ xưởng gỗ:
  - Người thứ 1: Làm được 10 cái $\rightarrow MP_1 = 10$.
  - Người thứ 2: Làm tổng 25 cái $\rightarrow MP_2 = 25 - 10 = 15$ (MP tăng).
  - Người thứ 3: Làm tổng 35 cái $\rightarrow MP_3 = 35 - 25 = 10$ (MP bắt đầu giảm).
  - Người thứ 4: Làm tổng 38 cái $\rightarrow MP_4 = 38 - 35 = 3$.
  - Người thứ 5: Làm tổng 36 cái $\rightarrow MP_5 = 36 - 38 = -2$ (MP âm, làm vướng víu).
- Thực tế: Trong một nhà hàng, thuê thêm đầu bếp thứ 2 giúp phụ bếp ra món cực nhanh; nhưng nhét đến đầu bếp thứ 5 vào căn bếp 10m² thì chỉ chen lấn va quẹt làm đổ vỡ đồ ăn.
- Counterfactual: Nếu xưởng mộc mua thêm 2 chiếc máy cưa và bàn làm việc mới, $MP$ của người thợ thứ 3 và thứ 4 sẽ tăng vọt trở lại.

**5. Ứng dụng & tranh luận**
- Nguyên tắc tuyển dụng tối ưu: Doanh nghiệp chỉ nên tuyển thêm lao động chừng nào giá trị của năng suất biên ($VMP_L = P \times MP_L$) còn lớn hơn hoặc bằng mức tiền lương phải trả ($w$).
- Lỗi thường gặp: Nghĩ rằng năng suất biên giảm dần là do công nhân đến sau lười biếng hoặc dốt hơn công nhân trước (thực chất các công nhân đều có trình độ giỏi như nhau, $MP$ giảm thuần túy do họ phải chia sẻ một lượng máy móc cố định có hạn).

**6. Liên kết**
- [Năng suất biên của lao động](#4-năng-suất-biên-của-lao-động-marginal-product-of-labor) · [Quy luật năng suất biên giảm dần](03_Diminishing_Returns_and_Returns_to_Scale.md) · [Chi phí biên](../../04_Cost_Economics/03_Average_and_Marginal_Cost_Curves.md)

---

## 4. Năng suất Biên của Lao động (Marginal Product of Labor - MPL)

**1. Là gì?**
Năng suất biên của lao động ($MP_L$) là số lượng sản phẩm đầu ra tăng thêm khi doanh nghiệp sử dụng thêm **một đơn vị lao động** (1 giờ làm việc hoặc 1 công nhân), trong khi giữ nguyên lượng vốn và các đầu vào khác không đổi. $MP_L$ là cơ sở trực tiếp để xây dựng đường cầu lao động của doanh nghiệp. Nếu chỉ nhớ một điều: **MPL cho biết một giờ làm thêm của công nhân đóng góp thêm bao nhiêu hàng hóa cho công ty**.

**2. Hoạt động thế nào?**
- Phản ánh đóng góp biên của yếu tố con người vào quy trình sản xuất.
- Với hàm sản xuất Cobb-Douglas $Q = A K^\alpha L^\beta$:
  - $MP_L$ tỷ lệ thuận với lượng vốn $K$ sẵn có: Công nhân được trang bị máy móc hiện đại và nhiều vốn sẽ có $MP_L$ vượt trội so với công nhân dùng công cụ thô sơ.
  - $MP_L$ tỷ lệ nghịch với lượng lao động $L$: Càng nhiều lao động cùng chia nhau một lượng vốn cố định thì $MP_L$ của từng người càng sụt giảm.

**3. Công thức & mô hình**
Đạo hàm riêng theo lao động $L$:

$$
MP_L = \frac{\partial Q}{\partial L} = \beta A K^\alpha L^{\beta - 1} = \beta \frac{Q}{L} = \beta \cdot AP_L
$$

Giá trị sản phẩm biên của lao động (Value of Marginal Product of Labor):

$$
VMP_L = P \cdot MP_L
$$

Trong thị trường cạnh tranh, đường cầu lao động của doanh nghiệp chính là đường $VMP_L$ dốc xuống.

**4. Ví dụ**
- Cho hàm sản xuất $Q = 10 K^{0,5} L^{0,5}$ với vốn cố định $K = 4$ máy (số liệu minh họa):
  - Hàm sản xuất trở thành: $Q = 10 (2) L^{0,5} = 20 L^{0,5}$.
  - Năng suất biên của lao động: $MP_L = \frac{dQ}{dL} = 10 L^{-0,5} = \frac{10}{\sqrt{L}}$.
  - Khi thuê 1 lao động ($L = 1$): $MP_L = 10 / \sqrt{1} = 10$ sản phẩm.
  - Khi thuê 4 lao động ($L = 4$): $MP_L = 10 / \sqrt{4} = 5$ sản phẩm.
  - Khi thuê 9 lao động ($L = 9$): $MP_L = 10 / \sqrt{9} = 3,33$ sản phẩm.
- Thực tế: Lao động ngành công nghệ thông tin tại Việt Nam có $MP_L$ rất cao nhờ được trang bị máy tính mạnh, hạ tầng đám mây và công cụ AI hỗ trợ, do đó nhận được mức lương cao hơn lao động thủ công.
- Counterfactual: Nếu cắt giảm toàn bộ máy tính và bắt lập trình viên viết code trên giấy, $MP_L$ sẽ tụt dốc thê thảm về gần 0.

**5. Ứng dụng & tranh luận**
- Giải thích nguyên nhân chênh lệch tiền lương giữa các ngành và các quốc gia: Nước giàu trả lương cao hơn nước nghèo vì công nhân của họ có $MP_L$ cao hơn nhờ lượng vốn và công nghệ dồi dào.
- Lỗi thường gặp: Cho rằng tăng lương sẽ tự động làm tăng $MP_L$ (nguyên lý đúng là $MP_L$ cao mới là nền tảng bền vững để trả lương cao).

**6. Liên kết**
- [Năng suất biên của vốn](#5-năng-suất-biên-của-vốn-marginal-product-of-capital) · [Cầu lao động](../../09_Unemployment_and_Labor/05_Labor_Market_and_Mobility.md) · [Tiền lương thực tế](../../09_Unemployment_and_Labor/04_Wages_Productivity_and_Skill_Premium.md)

---

## 5. Năng suất Biên của Vốn (Marginal Product of Capital - MPK)

**1. Là gì?**
Năng suất biên của vốn ($MP_K$) là số lượng sản phẩm đầu ra tăng thêm khi doanh nghiệp đầu tư sử dụng thêm **một đơn vị vốn** (1 chiếc máy móc, 1 dây chuyền sản xuất, hoặc 1 tỷ đồng thiết bị), trong khi giữ nguyên số lượng lao động và các yếu tố khác. $MP_K$ quyết định động lực đầu tư tài sản cố định của doanh nghiệp và lãi suất hoàn vốn. Nếu chỉ nhớ một điều: **MPK cho biết lắp thêm một cái máy mới sẽ nhả thêm được bao nhiêu sản phẩm**.

**2. Hoạt động thế nào?**
- Tương tự như lao động, vốn cũng chịu quy luật năng suất biên giảm dần:
  - Chiếc máy tính đầu tiên đem lại bước nhảy vọt khổng lồ cho công ty.
  - Chiếc máy tính thứ 10 cho 10 nhân viên tiếp tục hữu ích.
  - Nhưng sắm đến chiếc máy tính thứ 50 trong khi công ty chỉ có 10 nhân viên thì máy móc nằm đắp chiếu, $MP_K$ rơi về 0!
- $MP_K$ tỷ lệ thuận với số lượng lao động: Càng có nhiều công nhân lành nghề vận hành thì hiệu quả tăng thêm của việc mua máy mới càng lớn.

**3. Công thức & mô hình**
Đạo hàm riêng theo vốn $K$:

$$
MP_K = \frac{\partial Q}{\partial K} = \alpha A K^{\alpha - 1} L^\beta = \alpha \frac{Q}{K} = \alpha \cdot AP_K
$$

Điều kiện thuê vốn tối ưu của doanh nghiệp:

$$
P \cdot MP_K = r
$$

Trong đó $r$ là chi phí sử dụng vốn (Rental rate of capital / lãi suất vay vốn).

**4. Ví dụ**
- Một công ty vận tải hành khách có 20 tài xế ($L = 20$) (số liệu minh họa):
  - Khi đang có 10 chiếc xe khách: Mua thêm chiếc xe thứ 11 giúp tận dụng tài xế còn nhàn rỗi, phục vụ thêm được 5.000 lượt khách/năm ($MP_K = 5.000$).
  - Khi đã có đủ 20 chiếc xe: Mua thêm chiếc xe thứ 21 thì không có tài xế lái, xe chỉ để trong bãi làm xe dự phòng, lượng khách tăng thêm chỉ là 200 lượt/năm ($MP_K = 200$).
- Thực tế: Các nước đang phát triển như Việt Nam có tỷ lệ vốn trên lao động ($K/L$) thấp nên $MP_K$ ban đầu rất cao, tạo sức hút mãnh liệt đối với dòng vốn đầu tư trực tiếp nước ngoài (FDI).
- Counterfactual: Nếu lãi suất ngân hàng tăng vọt lên 15%/năm khiến chi phí vốn $r$ quá đắt, doanh nghiệp sẽ ngừng mua máy mới vì $P \cdot MP_K < r$.

**5. Ứng dụng & tranh luận**
- Nền tảng của mô hình tăng trưởng kinh tế tân cổ điển Solow: Sự tích tụ vốn chỉ giúp tăng trưởng nhanh trong giai đoạn đầu; khi đạt trạng thái dừng (steady state), $MP_K$ giảm dần và tăng trưởng dài hạn chỉ còn dựa vào tiến bộ công nghệ.
- Lỗi thường gặp: Nhầm lẫn giữa năng suất biên của vốn ($MP_K$ tính bằng hiện vật sản phẩm) với tỷ suất sinh lời tài chính của vốn (ROE, ROI tính bằng tiền tệ).

**6. Liên kết**
- [Năng suất biên của lao động](#4-năng-suất-biên-của-lao-động-marginal-product-of-labor) · [Tích lũy vốn](../../10_Growth_and_Business_Cycles/04_Sources_of_Growth.md) · [Mô hình Solow](../../10_Growth_and_Business_Cycles/05_Growth_Theories_and_Resilience.md)

---

## Câu hỏi tự kiểm tra

1. Vẽ đồ thị biểu diễn mối quan hệ hình học giữa đường $TP$, đường $AP$ và đường $MP$. Nêu 3 điểm đặc biệt trên đồ thị.
2. Tại sao đường năng suất biên ($MP$) luôn cắt đường năng suất trung bình ($AP$) tại điểm cực đại của $AP$?
3. Giải thích tại sao một quốc gia có nhiều máy móc hiện đại thì mức tiền lương của người lao động lại có xu hướng cao hơn.
4. Một chủ xưởng nhận thấy tổng sản lượng bắt đầu giảm khi tuyển thêm thợ thứ 10. Hãy giải thích điều này dưới góc độ kinh tế học vi mô.

---

## Ghi chú nguồn

Quy luật năng suất biên giảm dần xuất phát từ David Ricardo (1817) trong phân tích địa tô đất đai và được Clark, Wicksteed khái quát hóa cho mọi yếu tố sản xuất.
