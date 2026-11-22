# Chuyên đề 4.3: Các Đường Chi phí Trung bình và Chi phí Biên

Năm keyword dưới đây cấu thành hệ thống đồ thị chi phí kinh điển của kinh tế vi mô: ba đại lượng chi phí đơn vị (**chi phí cố định trung bình - AFC**, **chi phí biến đổi trung bình - AVC**, **tổng chi phí trung bình - ATC**), đại lượng quyết định ở ranh giới (**chi phí biên - MC**), và tổng thể bức tranh tương tác giữa chúng (**các đường chi phí**).

> Câu hỏi xuyên suốt: Tại sao các đường chi phí trung bình lại có hình chữ U và đường chi phí biên luôn đâm xuyên qua điểm đáy của chúng như một mũi tên chỉ đường?

---

## 1. Chi phí Cố định Trung bình (Average Fixed Cost - AFC)

**1. Là gì?**
Chi phí cố định trung bình (AFC) là chi phí cố định tính trên mỗi một đơn vị sản phẩm đầu ra được sản xuất. AFC được tính bằng cách lấy tổng chi phí cố định chia cho tổng số lượng sản phẩm làm ra ($AFC = FC / Q$). Vì $FC$ là một số không đổi, nên khi sản lượng đầu ra càng mở rộng, $AFC$ sẽ liên tục giảm dần và tiệm cận về 0. Nếu chỉ nhớ một điều: **sản xuất càng nhiều thì tiền thuê nhà bổ đầu từng món hàng càng bé tí hon**.

**2. Hoạt động thế nào?**
- Về mặt hình học: Đường $AFC$ là một đường cong hyperbol góc phương trục, liên tục dốc xuống từ trái sang phải nhưng không bao giờ chạm vào trục hoành hay trục tung.
- Hiện tượng "pha loãng định phí" (Spreading overhead):
  - Khi sản xuất 1 sản phẩm: 1 sản phẩm đó phải gánh toàn bộ $FC$.
  - Khi sản xuất 1.000.000 sản phẩm: $FC$ được chia nhỏ cho 1 triệu món, làm chi phí cố định trên mỗi món trở nên không đáng kể.
- Khoảng cách thẳng đứng giữa đường $ATC$ và đường $AVC$ tại mọi mức sản lượng chính là giá trị của $AFC$: vì $AFC$ giảm dần nên đường $ATC$ và đường $AVC$ ngày càng xích lại gần nhau khi $Q$ tăng.

**3. Công thức & mô hình**
Công thức tính:

$$
AFC(Q) = \frac{FC}{Q}
$$

Đạo hàm luôn mang dấu âm: $\frac{d(AFC)}{dQ} = -\frac{FC}{Q^2} < 0$. Giới hạn tiệm cận: $\lim_{Q \to \infty} AFC(Q) = 0$.

**4. Ví dụ**
- Một xưởng đóng giày có chi phí cố định thuê nhà xưởng $FC = 100.000.000$ đồng/tháng (số liệu minh họa):
  - Nếu đóng 100 đôi giày/tháng: $AFC = 100tr / 100 = 1.000.000$ đồng/đôi (tiền nhà đè nặng lên giá thành).
  - Nếu đóng 1.000 đôi giày/tháng: $AFC = 100tr / 1.000 = 100.000$ đồng/đôi.
  - Nếu đẩy công suất lên 10.000 đôi giày/tháng: $AFC = 100tr / 10.000 = 10.000$ đồng/đôi (tiền nhà chỉ còn chiếm một phần rất nhỏ trong giá bán).
- Thực tế: Ngành sản xuất chip bán dẫn đầu tư hàng chục tỷ USD cho nhà máy sản xuất (Fab); họ buộc phải sản xuất hàng trăm triệu con chip để ép $AFC$ xuống mức vài cent mỗi con chip.
- Counterfactual: Nếu sản lượng giảm về 0, $AFC$ sẽ tiến tới vô cùng.

**5. Ứng dụng & tranh luận**
- Động lực cốt lõi để các doanh nghiệp tìm mọi cách tăng công suất sử dụng nhà máy nhằm giảm giá thành đơn vị.
- Lỗi thường gặp: Nghĩ rằng đường $AFC$ sẽ có lúc dốc ngược lên (AFC KHÔNG BAO GIỜ dốc lên, nó luôn luôn giảm).

**6. Liên kết**
- [Chi phí cố định](01_Cost_Concepts_and_Opportunity_Cost.md) · [Tổng chi phí trung bình](#3-tổng-chi-phí-trung-bình-average-total-cost---atc) · [Chi phí biến đổi trung bình](#2-chi-phí-biến-đổi-trung-bình-average-variable-cost---avc)

---

## 2. Chi phí Biến đổi Trung bình (Average Variable Cost - AVC)

**1. Là gì?**
Chi phí biến đổi trung bình (AVC) là chi phí biến đổi tính trên mỗi một đơn vị sản phẩm đầu ra được sản xuất. AVC được tính bằng cách lấy tổng chi phí biến đổi chia cho tổng sản lượng ($AVC = VC / Q$). Đường AVC có dạng hình chữ U nông, ban đầu giảm xuống do năng suất tăng, sau đó đạt cực tiểu rồi dốc ngược lên do quy luật năng suất biên giảm dần. Nếu chỉ nhớ một điều: **AVC là chi phí nguyên vật liệu và nhân công trực tiếp đổ vào mỗi chiếc bánh**.

**2. Hoạt động thế nào?**
- Mối quan hệ tương hỗ ngược chiều với năng suất trung bình của lao động ($AP_L$):
  $$AVC = \frac{VC}{Q} = \frac{w \cdot L}{Q} = \frac{w}{AP_L}$$
- Khi $AP_L$ tăng lên (công nhân làm việc hiệu quả hơn): $AVC$ sẽ **giảm xuống**.
- Khi $AP_L$ đạt cực đại: $AVC$ đạt **điểm cực tiểu** (đáy chữ U).
- Khi $AP_L$ suy giảm: $AVC$ sẽ **dốc ngược lên trên**.
- Điểm cực tiểu của $AVC$ chính là **Điểm đóng cửa (Shutdown Point)** của doanh nghiệp trong ngắn hạn.

**3. Công thức & mô hình**
Công thức tính:

$$
AVC(Q) = \frac{VC(Q)}{Q}
$$

Mối quan hệ cắt nhau: Đường chi phí biên $MC$ luôn cắt đường $AVC$ tại điểm cực tiểu của $AVC$:

$$
\frac{d(AVC)}{dQ} = 0 \quad \iff \quad MC = AVC
$$

**4. Ví dụ**
- Quán phở (số liệu minh họa):
  - Bán 50 bát phở đầu tiên: Chi phí xương thịt, bánh phở, phụ bếp bình quân $AVC = 25.000$đ/bát.
  - Bán từ bát 51 đến 200: Quy trình nhịp nhàng, mua sỉ thịt rẻ hơn, $AVC$ giảm xuống đáy cực tiểu là 20.000đ/bát.
  - Bán từ bát 201 trở lên: Bếp quá tải, phải trả lương phụ bếp làm thêm giờ gấp đôi, mua vét thịt ngoài chợ giá cao, $AVC$ tăng ngược lên 28.000đ/bát.
- Thực tế: Các doanh nghiệp sản xuất thép theo dõi sát sao $AVC$ (chủ yếu là giá than cốc và quặng sắt) để quyết định có nhận các đơn hàng xuất khẩu giá rẻ trong thời kỳ đóng băng xây dựng hay không.
- Counterfactual: Nếu mức giá bán trên thị trường rơi xuống dưới 20.000đ/bát (thấp hơn đáy $AVC$), quán phở nên đóng cửa nghỉ bán ngay lập tức.

**5. Ứng dụng & tranh luận**
- Xác định đường cung ngắn hạn của doanh nghiệp cạnh tranh hoàn hảo (chính là nhánh đường $MC$ nằm phía trên điểm cực tiểu của $AVC$).
- Lỗi thường gặp: Nhầm lẫn đáy của $AVC$ với đáy của $ATC$ (đáy của $AVC$ luôn nằm ở mức sản lượng nhỏ hơn và thấp hơn đáy của $ATC$).

**6. Liên kết**
- [Tổng chi phí trung bình](#3-tổng-chi-phí-trung-bình-average-total-cost---atc) · [Chi phí biên](#4-chi-phí-biên-marginal-cost---mc) · [Điểm đóng cửa](05_Pricing_Break_Even_and_Shutdown.md)

---

## 3. Tổng Chi phí Trung bình (Average Total Cost - ATC)

**1. Là gì?**
Tổng chi phí trung bình (ATC hay AC) là tổng chi phí sản xuất tính trên mỗi một đơn vị sản phẩm đầu ra hoàn thành. ATC bằng tổng chi phí chia cho sản lượng ($ATC = TC / Q$), hoặc bằng tổng của chi phí cố định trung bình và chi phí biến đổi trung bình ($ATC = AFC + AVC$). Đường ATC có dạng **hình chữ U** rõ rệt và là chỉ số then chốt để xác định lãi lỗ của doanh nghiệp. Nếu chỉ nhớ một điều: **ATC chính là giá thành sản xuất trọn gói của một món hàng – bán trên giá này là có lãi, bán dưới giá này là chịu lỗ**.

**2. Hoạt động thế nào?**
- Tại sao đường $ATC$ có hình chữ U?
  - Ở mức sản lượng thấp: $AFC$ giảm rất nhanh và chiếm ưu thế áp đảo, kéo $ATC$ dốc mạnh xuống dưới.
  - Khi sản lượng tiếp tục tăng: Tốc độ giảm của $AFC$ chậm lại, trong khi $AVC$ bắt đầu tăng vọt do năng suất biên giảm dần.
  - Điểm giằng co: Tại một mức sản lượng tối ưu nhất định, hai lực này cân bằng nhau, tạo ra **đáy cực tiểu của ATC** (Quy mô sản xuất hiệu quả - Efficient Scale).
  - Vượt qua mức sản lượng này: Lực kéo tăng của $AVC$ thắng thế, kéo $ATC$ dốc ngược lên trên.
- So sánh với giá bán thị trường $P$:
  - $P > ATC$: Doanh nghiệp thu được **lợi nhuận kinh tế dương** (siêu ngạch).
  - $P = \min ATC$: Doanh nghiệp đạt **Điểm hòa vốn (Break-Even Point)**.
  - $P < ATC$: Doanh nghiệp bị **thua lỗ**.

**3. Công thức & mô hình**
Đẳng thức cấu thành:

$$
ATC(Q) = \frac{TC(Q)}{Q} = AFC(Q) + AVC(Q)
$$

Giao điểm cực trị: Đường $MC$ luôn cắt đường $ATC$ tại đúng điểm cực tiểu của $ATC$:

$$
\frac{d(ATC)}{dQ} = \frac{MC - ATC}{Q} = 0 \quad \iff \quad MC = ATC
$$

**4. Ví dụ**
- Một xưởng in sách (số liệu minh họa):
  - In 1.000 cuốn sách: $TC = 50$ triệu đồng $\rightarrow ATC = 50.000$ đồng/cuốn.
  - In 5.000 cuốn sách: $TC = 125$ triệu đồng $\rightarrow ATC = 25.000$ đồng/cuốn (đạt đáy chi phí tối ưu).
  - In 10.000 cuốn sách: Máy móc quá tải hỏng hóc, $TC = 320$ triệu đồng $\rightarrow ATC$ tăng lên $32.000$ đồng/cuốn.
  - Nếu giá bán thị trường là 40.000đ/cuốn: Ở mức 5.000 cuốn xưởng lãi đậm $40k - 25k = 15k$/cuốn; ở mức 10.000 cuốn lãi bị co lại còn $8k$/cuốn.
- Thực tế: Doanh nghiệp sản xuất ô tô VinFast hoặc Tesla liên tục tối ưu hóa quy trình lắp ráp để kéo đường $ATC$ của mỗi chiếc xe điện xuống ngang bằng hoặc thấp hơn xe xăng.
- Counterfactual: Nếu chi phí cố định $FC$ tăng gấp đôi, đường $ATC$ sẽ bị nhấc bổng lên cao hơn tại mọi mức sản lượng, đẩy điểm hòa vốn lên mức sản lượng cao hơn.

**5. Ứng dụng & tranh luận**
- Xác định giá thành sản phẩm (Cost of Goods Sold - COGS) làm cơ sở cho chính sách định giá cộng lãi (Cost-plus pricing).
- Lỗi thường gặp: Nhầm lẫn rằng doanh nghiệp tối đa hóa lợi nhuận tại điểm đáy $\min ATC$ (doanh nghiệp tối đa hóa tổng lợi nhuận tại $MR = MC$, điểm này thường nằm lệch sang bên phải của điểm $\min ATC$).

**6. Liên kết**
- [Chi phí biến đổi trung bình](#2-chi-phí-biến-đổi-trung-bình-average-variable-cost---avc) · [Chi phí biên](#4-chi-phí-biên-marginal-cost---mc) · [Điểm hòa vốn](05_Pricing_Break_Even_and_Shutdown.md)

---

## 4. Chi phí Biên (Marginal Cost - MC)

**1. Là gì?**
Chi phí biên (MC) là sự gia tăng trong tổng chi phí khi doanh nghiệp sản xuất thêm **một đơn vị sản phẩm đầu ra duy nhất**. MC trả lời cho câu hỏi sống còn của nhà quản trị: "Nếu tôi làm thêm đúng 1 cái bánh này nữa, ví tiền của công ty sẽ phải chi thêm bao nhiêu tiền?". Vì chi phí cố định không đổi khi tăng sản lượng, nên chi phí biên cũng chính là sự gia tăng của chi phí biến đổi. Nếu chỉ nhớ một điều: **chi phí biên là cái giá phải trả để nhào nặn thêm một sản phẩm cuối cùng**.

**2. Hoạt động thế nào?**
- Mối quan hệ tương hỗ nghịch đảo với năng suất biên của lao động ($MP_L$):
  $$MC = \frac{\Delta TC}{\Delta Q} = \frac{\Delta VC}{\Delta Q} = \frac{w \cdot \Delta L}{\Delta Q} = \frac{w}{MP_L}$$
- Khi $MP_L$ tăng (công nhân làm thêm rất năng suất): Chi phí biên $MC$ **giảm dần**.
- Khi quy luật năng suất biên giảm dần bắt đầu phát huy tác dụng: $MC$ bắt đầu **dốc ngược lên trên**.
- Vai trò dẫn dắt của $MC$ đối với các đường chi phí trung bình:
  - Khi $MC < ATC$: $MC$ kéo $ATC$ **đi xuống**.
  - Khi $MC > ATC$: $MC$ kéo $ATC$ **đi lên**.
  - Do đó, $MC$ bắt buộc phải đâm xuyên qua điểm đáy cực tiểu của cả $AVC$ và $ATC$ từ dưới lên.

**3. Công thức & mô hình**
Đạo hàm bậc nhất của hàm tổng chi phí:

$$
MC(Q) = \frac{d(TC)}{dQ} = \frac{d(VC)}{dQ}
$$

Đồ thị: Đường $MC$ có dạng hình dấu tích (Nike swoosh) hoặc hình chữ U dốc đứng.

**4. Ví dụ**
- Cho hàm tổng chi phí: $TC = 100 + 10Q + 2Q^2$ (số liệu minh họa):
  - Chi phí biên là đạo hàm: $MC = \frac{d(TC)}{dQ} = 10 + 4Q$.
  - Đơn vị thứ 1 ($Q = 1$): $MC_1 = 10 + 4(1) = 14$ đồng.
  - Đơn vị thứ 5 ($Q = 5$): $MC_5 = 10 + 4(5) = 30$ đồng.
  - Đơn vị thứ 10 ($Q = 10$): $MC_{10} = 10 + 4(10) = 50$ đồng.
  - Ta thấy rõ: Càng sản xuất nhiều, chi phí làm thêm 1 đơn vị càng đắt đỏ.
- Thực tế: Trong ngành điện lực, khi nhu cầu sử dụng điện tăng vọt vào trưa hè nắng nóng, EVN phải huy động các nhà máy nhiệt điện chạy dầu diesel có $MC$ rất đắt (lên tới 4.000 - 5.000đ/kWh) để bù tải.
- Counterfactual: Trong nền kinh tế số (phần mềm, âm nhạc trực tuyến), chi phí biên để tải thêm 1 bài hát MP3 hoặc cấp thêm 1 tài khoản app là xấp xỉ bằng đúng 0 ($MC \approx 0$).

**5. Ứng dụng & tranh luận**
- Trọng tâm của quy tắc tối đa hóa lợi nhuận ($MR = MC$) và quy tắc định giá hiệu quả xã hội ($P = MC$).
- Lỗi thường gặp: Quên rằng $MC$ hoàn toàn độc lập với chi phí cố định $FC$ (đạo hàm của hằng số $FC$ bằng 0).

**6. Liên kết**
- [Tổng chi phí trung bình](#3-tổng-chi-phí-trung-bình-average-total-cost---atc) · [Năng suất biên](../../03_Production_Economics/02_Product_Curves_and_Marginal_Product.md) · [Tối đa hóa lợi nhuận](../../03_Production_Economics/05_Profit_Maximization_and_Efficiency.md)

---

## 5. Các Đường Chi phí (Cost Curves)

**1. Là gì?**
Các đường chi phí là tập hợp đồ thị trực quan hóa toàn bộ hành vi của các đại lượng chi phí ($TC, FC, VC, ATC, AVC, AFC, MC$) trên cùng một hệ tọa độ phẳng với trục hoành là Sản lượng ($Q$) và trục tung là Chi phí ($C$). Bức tranh tổng thể này mô tả sự tương tác cơ học hoàn hảo giữa các đại lượng chi phí, tạo thành nền tảng hình học cho toàn bộ các mô hình cấu trúc thị trường của kinh tế vi mô. Nếu chỉ nhớ một điều: **các đường chi phí là bản đồ địa hình giúp doanh nghiệp nhìn rõ điểm hòa vốn, điểm đóng cửa và điểm lãi đậm**.

**2. Hoạt động thế nào?**
- Hệ thống đồ thị thường được chia thành 2 tầng tương ứng:
  - **Tầng trên (Tổng chi phí):** Các đường $TC, VC, FC$. Đường $FC$ nằm ngang, đường $VC$ dốc lên từ gốc tọa độ, đường $TC$ song song phía trên đường $VC$.
  - **Tầng dưới (Chi phí đơn vị & biên):** Các đường $MC, ATC, AVC, AFC$.
- Các quy luật hình học bất biến:
  1. Đường $AFC$ liên tục dốc xuống tiệm cận trục hoành.
  2. Khoảng cách thẳng đứng giữa $ATC$ và $AVC$ thu hẹp dần theo $Q$.
  3. Đường $MC$ luôn cắt $AVC$ tại điểm cực tiểu của $AVC$.
  4. Đường $MC$ luôn cắt $ATC$ tại điểm cực tiểu của $ATC$.
  5. Đáy của $AVC$ luôn đạt được ở mức sản lượng thấp hơn đáy của $ATC$.

**3. Công thức & mô hình**
Bảng tóm tắt liên kết giải tích giữa các đường:

$$
\begin{aligned}
TC &= FC + VC \\[1ex]
ATC &= AFC + AVC = \frac{FC}{Q} + \frac{VC}{Q} \\[1ex]
MC &= \frac{d(TC)}{dQ} = \frac{d(VC)}{dQ}
\end{aligned}
$$

**4. Ví dụ**
- Bảng chi phí ngắn hạn hoàn chỉnh (số liệu minh họa với $FC = 100$):
  - $Q = 1$: $VC = 50 \rightarrow TC = 150 \rightarrow AFC = 100, AVC = 50, ATC = 150, MC = 50$.
  - $Q = 2$: $VC = 80 \rightarrow TC = 180 \rightarrow AFC = 50, AVC = 40, ATC = 90, MC = 30$.
  - $Q = 3$: $VC = 120 \rightarrow TC = 220 \rightarrow AFC = 33,3, AVC = 40, ATC = 73,3, MC = 40$ (tại đây $MC = AVC = 40$, đạt đáy $AVC$!).
  - $Q = 4$: $VC = 180 \rightarrow TC = 280 \rightarrow AFC = 25, AVC = 45, ATC = 70, MC = 60$.
  - $Q = 5$: $VC = 250 \rightarrow TC = 350 \rightarrow AFC = 20, AVC = 50, ATC = 70, MC = 70$ (tại đây $MC = ATC = 70$, đạt đáy $ATC$!).
  - $Q = 6$: $VC = 360 \rightarrow TC = 460 \rightarrow AFC = 16,7, AVC = 60, ATC = 76,7, MC = 110$.
- Đồ thị vẽ từ bảng số liệu trên thể hiện chuẩn xác 100% các tính chất lý thuyết của họ đường chi phí.
- Counterfactual: Nếu giá nguyên liệu đầu vào tăng, cả đường $VC, TC, AVC, ATC$ và $MC$ đều bị dịch chuyển lên trên, trong khi đường $FC$ và $AFC$ giữ nguyên vị trí.

**5. Ứng dụng & tranh luận**
- Công cụ giảng dạy và phân tích cấu trúc thị trường (cạnh tranh, độc quyền, độc quyền nhóm).
- Tranh luận thực nghiệm: Nhiều nghiên cứu thực tế cho thấy trong các nhà máy công nghiệp hiện đại, đường $MC$ thường nằm ngang phẳng lì trong một dải công suất rất rộng trước khi dốc đứng lên.
- Lỗi thường gặp: Vẽ đường $MC$ cắt đường $ATC$ tại vị trí bất kỳ chứ không cắt qua điểm đáy cực tiểu.

**6. Liên kết**
- [Tổng chi phí trung bình](#3-tổng-chi-phí-trung-bình-average-total-cost---atc) · [Chi phí biên](#4-chi-phí-biên-marginal-cost---mc) · [Cạnh tranh hoàn hảo](../../05_Market_Structures/01_Perfect_and_Monopolistic_Competition.md)

---

## Câu hỏi tự kiểm tra

1. Chứng minh bằng giải tích tại sao đường chi phí biên ($MC$) luôn cắt đường tổng chi phí trung bình ($ATC$) tại điểm cực tiểu của $ATC$.
2. Tại sao khoảng cách thẳng đứng giữa đường $ATC$ và đường $AVC$ lại ngày càng thu hẹp lại khi sản lượng gia tăng?
3. Nếu chính phủ đánh một khoản thuế cố định hàng năm (như thuế môn bài) vào doanh nghiệp, những đường chi phí nào sẽ bị dịch chuyển? Đường $MC$ có bị dịch chuyển không?
4. Vẽ đồ thị hoàn chỉnh gồm 4 đường: $MC, ATC, AVC, AFC$ và chỉ rõ các điểm đặc biệt.

---

## Ghi chú nguồn

Hệ thống đồ thị các đường chi phí dạng chữ U tiêu chuẩn được hoàn thiện bởi Jacob Viner (Cost Curves and Supply Curves, 1931).
