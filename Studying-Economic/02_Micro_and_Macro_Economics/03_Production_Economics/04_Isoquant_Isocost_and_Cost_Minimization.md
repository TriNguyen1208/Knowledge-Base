# Chuyên đề 3.4: Đường Đẳng lượng, Đường Đẳng phí và Cực tiểu hóa Chi phí

Ba keyword dưới đây xây dựng nên mô hình hình học chuẩn tắc tương đương với mô hình bàng quan - ngân sách của người tiêu dùng, nhưng áp dụng cho nhà sản xuất: **đường đẳng lượng (isoquant)** thể hiện mong muốn kỹ thuật, **đường đẳng phí (isocost)** thể hiện giới hạn chi phí tài chính, và điểm tiếp xúc giữa chúng là lời giải cho bài toán **cực tiểu hóa chi phí sản xuất**.

> Câu hỏi xuyên suốt: Khi đối mặt với giá cả lao động và máy móc trên thị trường, doanh nghiệp lựa chọn tỷ lệ phối hợp nào để làm ra sản phẩm với chi phí rẻ nhất?

---

## 1. Đường Đẳng lượng (Isoquant)

**1. Là gì?**
Đường đẳng lượng (hay đường đồng sản lượng) là đường đồ thị biểu diễn tất cả các kết hợp khác nhau giữa các yếu tố đầu vào (thường là Vốn $K$ và Lao động $L$) có thể tạo ra **cùng một mức sản lượng đầu ra** $Q_0$ duy nhất, với một trình độ công nghệ cho trước. Đây là "người anh em song sinh" với đường bàng quan trong lý thuyết tiêu dùng. Nếu chỉ nhớ một điều: **mọi điểm trên cùng một đường đẳng lượng đều làm ra số lượng sản phẩm y hệt nhau**.

**2. Hoạt động thế nào?**
- 4 đặc điểm cốt lõi:
  1. Dốc xuống từ trái sang phải: Muốn bớt máy móc mà vẫn giữ nguyên sản lượng, bắt buộc phải thuê thêm lao động để bù đắp.
  2. Nằm càng xa gốc tọa độ thì sản lượng làm ra càng lớn ($Q_2 > Q_1$).
  3. Các đường đẳng lượng không bao giờ cắt nhau.
  4. Lồi về phía gốc tọa độ: Phản ánh quy luật Tỷ lệ thay thế kỹ thuật biên giảm dần ($MRTS$).
- Độ dốc tại một điểm cho biết tỷ lệ mà doanh nghiệp có thể đánh đổi giữa vốn và lao động về mặt công nghệ mà không làm sụt giảm sản lượng.

**3. Công thức & mô hình**
Phương trình đường đẳng lượng mức $Q_0$:

$$
F(K, L) = Q_0
$$

Lấy vi phân toàn phần: $dQ = \dfrac{\partial Q}{\partial L} dL + \dfrac{\partial Q}{\partial K} dK = MP_L dL + MP_K dK = 0$.
Độ dốc của đường đẳng lượng (Tỷ lệ thay thế kỹ thuật biên - Marginal Rate of Technical Substitution):

$$
MRTS_{LK} = -\left.\frac{dK}{dL}\right|_{Q=\text{const}} = \frac{MP_L}{MP_K}
$$

**4. Ví dụ**
- Dọn dẹp vệ sinh một tòa nhà văn phòng cao tầng (số liệu minh họa):
  - Doanh nghiệp có thể chọn: 20 lao động dùng chổi và cây lau nhà thủ công ($K$ thấp, $L$ cao); hoặc 2 máy chà sàn công nghiệp tự động và 2 người lái ($K$ cao, $L$ thấp).
  - Cả hai phương án này đều làm sạch đúng 1 tòa nhà ($Q = 1$) và cùng nằm trên một đường đẳng lượng.
- Các dạng đặc biệt:
  - Hàm Leontief (công nghệ cố định): Máy bay và phi công (đường đẳng lượng hình chữ L).
  - Thay thế hoàn hảo: Robot hàn và thợ hàn cơ khí (đường đẳng lượng là đoạn thẳng dốc xuống).
- Counterfactual: Nếu năng suất của robot tăng vọt, đường đẳng lượng sẽ xoay theo hướng cần ít robot hơn cho cùng mức sản lượng.

**5. Ứng dụng & tranh luận**
- Quyết định chiến lược "thay thế lao động bằng máy móc" (Automation/Capital deepening) khi tiền lương lao động trong nước tăng cao.
- Lỗi thường gặp: Nhầm lẫn giữa đường đẳng lượng (mặt phẳng $K-L$) với đường PPF (mặt phẳng hàng hóa $X-Y$).

**6. Liên kết**
- [Đường đẳng phí](#2-đường-đẳng-phí-isocost-line) · [Cực tiểu hóa chi phí](#3-cực-tiểu-hóa-chi-phí-cost-minimization) · [Hàm sản xuất](01_Production_Function_and_Time_Horizon.md)

---

## 2. Đường Đẳng phí (Isocost Line)

**1. Là gì?**
Đường đẳng phí (hay đường đồng chi phí) là đường đồ thị biểu diễn tất cả các kết hợp khác nhau giữa các yếu tố đầu vào sản xuất (Vốn $K$ và Lao động $L$) mà doanh nghiệp có thể thuê hoặc mua được với **cùng một mức tổng chi phí** $TC$ cho trước, tại mức giá các yếu tố đầu vào ($w, r$) xác định. Đây là đường ngân sách của nhà sản xuất. Nếu chỉ nhớ một điều: **mọi điểm trên cùng một đường đẳng phí đều tiêu tốn của chủ xưởng đúng từng đấy tiền**.

**2. Hoạt động thế nào?**
- Doanh nghiệp có ngân sách chi phí sản xuất $TC$.
- Giá thuê 1 đơn vị lao động là tiền lương $w$; giá thuê 1 đơn vị vốn/máy móc là $r$.
- Độ dốc của đường đẳng phí là tỷ giá tương đối khách quan của các yếu tố đầu vào: $-\frac{w}{r}$.
- Khi tiền lương lao động $w$ tăng lên (giá vốn $r$ không đổi): Đường đẳng phí sẽ dốc hơn (xoay vào trong quanh điểm cắt trục tung $K$).
- Khi tổng chi phí $TC$ tăng: Đường đẳng phí dịch chuyển song song ra xa gốc tọa độ.

**3. Công thức & mô hình**
Phương trình tổng chi phí:

$$
TC = w \cdot L + r \cdot K
$$

Rút gọn theo $K$ để vẽ đồ thị:

$$
K = \frac{TC}{r} - \frac{w}{r} \cdot L
$$

Độ dốc của đường đẳng phí: $\text{Slope} = -\frac{w}{r}$.

**4. Ví dụ**
- Xưởng may có ngân sách chi phí $TC = 100.000.000$ đồng/tháng (số liệu minh họa):
  - Tiền lương công nhân $w = 5.000.000$ đồng/tháng; Tiền thuê máy may $r = 2.000.000$ đồng/máy/tháng.
  - Điểm cắt trục $L$: $100tr / 5tr = 20$ công nhân (nếu không thuê máy nào).
  - Điểm cắt trục $K$: $100tr / 2tr = 50$ máy may (nếu không thuê người nào).
  - Tỷ giá đầu vào: $-\frac{w}{r} = -\frac{5}{2} = -2,5$ (tiền lương 1 công nhân tương đương chi phí thuê 2,5 chiếc máy may).
- Thực tế: Tiền lương lao động tại các thành phố lớn của Việt Nam ngày càng tăng khiến độ dốc đường đẳng phí $-\frac{w}{r}$ tăng lên, thúc đẩy các nhà máy may chuyển hướng đầu tư mua thêm máy tự động.
- Counterfactual: Nếu cả tiền lương $w$ và tiền thuê máy $r$ cùng tăng 20%, đường đẳng phí sẽ dịch chuyển song song vào phía trong.

**5. Ứng dụng & tranh luận**
- Phân tích độ nhạy của chi phí doanh nghiệp trước sự biến động của lãi suất ngân hàng ($r$) và chính sách lương tối thiểu ($w$).
- Lỗi thường gặp: Quên rằng độ dốc đường đẳng phí hoàn toàn không phụ thuộc vào mức tổng chi phí $TC$ mà chỉ phụ thuộc vào tỷ giá $w/r$.

**6. Liên kết**
- [Đường đẳng lượng](#1-đường-đẳng-lượng-isoquant) · [Cực tiểu hóa chi phí](#3-cực-tiểu-hóa-chi-phí-cost-minimization) · [Tổng chi phí](../../04_Cost_Economics/01_Cost_Concepts_and_Opportunity_Cost.md)

---

## 3. Cực tiểu hóa Chi phí (Cost Minimization)

**1. Là gì?**
Cực tiểu hóa chi phí là quá trình doanh nghiệp lựa chọn tổ hợp tối ưu giữa các yếu tố đầu vào (Vốn $K^*$ và Lao động $L^*$) sao cho có thể sản xuất ra một mức sản lượng mục tiêu $Q_0$ cho trước với **mức tổng chi phí thấp nhất có thể**, hoặc ngược lại, làm ra sản lượng tối đa với một mức ngân sách chi phí cho trước. Về mặt hình học, điểm tối ưu xảy ra tại tiếp điểm duy nhất giữa đường đẳng lượng mục tiêu và đường đẳng phí thấp nhất. Nếu chỉ nhớ một điều: **cực tiểu hóa chi phí là tìm cách phối hợp người và máy sao cho sản xuất vừa đúng chỉ tiêu mà tốn ít tiền nhất**.

**2. Hoạt động thế nào?**
- Doanh nghiệp phải tuân thủ nguyên lý cân bằng biên của các yếu tố sản xuất: Tỷ số năng suất biên trên giá của mỗi yếu tố phải bằng nhau:
  $$\frac{MP_L}{w} = \frac{MP_K}{r}$$
- Cơ chế tự điều chỉnh:
  - Nếu $\frac{MP_L}{w} > \frac{MP_K}{r}$: Một đồng bỏ ra thuê lao động mang lại nhiều sản lượng hơn một đồng bỏ ra thuê máy móc $\rightarrow$ doanh nghiệp khôn ngoan sẽ thuê thêm người và giảm bớt máy.
  - Quá trình điều chỉnh dừng lại khi tỷ số này cân bằng.
- Tập hợp tất cả các tiếp điểm tối ưu khi mở rộng sản lượng tạo thành **Đường phát triển sản xuất (Expansion Path)** trong dài hạn của doanh nghiệp.

**3. Công thức & mô hình**
Điều kiện tiếp xúc tại nghiệm nội biên:

$$
MRTS_{LK} = \frac{MP_L}{MP_K} = \frac{w}{r}
$$

Thiết lập hàm Lagrange giải bài toán:

$$
\min_{K, L} TC = wL + rK \quad \text{s.t.} \quad F(K, L) = Q_0
$$

$$\mathcal{L} = wL + rK - \lambda [F(K, L) - Q_0]$$
Nghiệm của bài toán cho ra các hàm cầu yếu tố sản xuất có điều kiện: $L^*(w, r, Q_0)$ và $K^*(w, r, Q_0)$.

**4. Ví dụ**
- Cho hàm sản xuất $Q = 2 \sqrt{K \cdot L}$. Mục tiêu sản xuất $Q_0 = 100$ sản phẩm. Giá đầu vào $w = 10$, $r = 40$ (số liệu minh họa):
  - Ta có: $MP_L = \frac{\sqrt{K}}{\sqrt{L}}$ và $MP_K = \frac{\sqrt{L}}{\sqrt{K}}$.
  - Tỷ lệ thay thế kỹ thuật biên: $MRTS = \frac{MP_L}{MP_K} = \frac{K}{L}$.
  - Cân bằng chi phí: $\frac{K}{L} = \frac{w}{r} = \frac{10}{40} = \frac{1}{4} \Rightarrow L = 4K$.
  - Thay vào hàm sản lượng: $100 = 2 \sqrt{K \cdot (4K)} = 4K \Rightarrow K^* = 25$ máy.
  - Số lao động tối ưu: $L^* = 4(25) = 100$ công nhân.
  - Tổng chi phí tối thiểu: $TC_{\min} = 10(100) + 40(25) = 1.000 + 1.000 = 2.000$ đồng.
- Thực tế: Các nhà máy may mặc chuyển dịch từ Trung Quốc sang Việt Nam và Bangladesh do chi phí lao động $w$ rẻ hơn, giúp tối ưu hóa tổng chi phí toàn cầu của các hãng thời trang như Nike, Adidas.
- Counterfactual: Nếu giá thuê máy $r$ giảm một nửa do công nghệ rẻ đi, tỷ lệ $w/r$ tăng lên, doanh nghiệp sẽ cơ cấu lại tổ hợp đầu vào: sử dụng nhiều máy $K$ hơn và giảm bớt lao động $L$.

**5. Ứng dụng & tranh luận**
- Nền tảng cốt lõi để xây dựng hàm tổng chi phí dài hạn $LTC(Q)$ của doanh nghiệp.
- Lỗi thường gặp: Quên rằng điểm cực tiểu hóa chi phí thay đổi ngay lập tức khi giá của các yếu tố đầu vào ($w, r$) biến động, dù công nghệ sản xuất không đổi.

**6. Liên kết**
- [Đường đẳng lượng](#1-đường-đẳng-lượng-isoquant) · [Đường đẳng phí](#2-đường-đẳng-phí-isocost-line) · [Tối đa hóa lợi nhuận](05_Profit_Maximization_and_Efficiency.md)

---

## Câu hỏi tự kiểm tra

1. Viết công thức tính tỷ lệ thay thế kỹ thuật biên ($MRTS$) và nêu ý nghĩa hình học của nó trên đường đẳng lượng.
2. Nêu điều kiện đại số để một doanh nghiệp đạt điểm cực tiểu hóa chi phí sản xuất.
3. Nếu $\frac{MP_L}{w} < \frac{MP_K}{r}$, doanh nghiệp nên điều chỉnh cơ cấu sử dụng lao động và vốn như thế nào để giảm chi phí?
4. Đường phát triển sản xuất (Expansion path) là gì? Nó liên hệ như thế nào với đường chi phí trung bình dài hạn?

---

## Ghi chú nguồn

Mô hình đẳng lượng - đẳng phí được khởi xướng bởi Ragnar Frisch (1935) và Erich Schneider (1934), hoàn thiện trong lý thuyết sản xuất vi mô tân cổ điển.
