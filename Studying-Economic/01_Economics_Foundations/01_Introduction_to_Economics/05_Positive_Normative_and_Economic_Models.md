# Chuyên đề 1.5: Kinh tế học Thực chứng, Chuẩn tắc, Mô tả, Quy phạm và Mô hình Kinh tế

Năm keyword là năm lớp của cùng một ngành khoa học: **mô tả** dữ liệu → **thực chứng** (giải thích, kiểm chứng) → **chuẩn tắc** (đánh giá) → **quy phạm** (khuyến nghị hành động); **mô hình** là công cụ xuyên suốt cả bốn lớp.

> Câu hỏi xuyên suốt: Đâu là sự kiện, đâu là giá trị, và đâu là khuyến nghị?

---

## 1. Kinh tế học Thực chứng (Positive Economics)

**1. Là gì?**
Kinh tế học thực chứng là nhánh mô tả, giải thích và dự báo hiện tượng kinh tế bằng các mệnh đề có thể kiểm chứng bằng dữ liệu, không đưa ra phán xét giá trị. Nó trả lời "điều gì đang xảy ra và vì sao"; khác **chuẩn tắc** ("nên là gì") và **quy phạm** ("nên làm gì"). Nếu chỉ nhớ một điều: **positive economics hỏi "nếu X xảy ra thì Y thế nào?" và trả lời bằng bằng chứng, không bằng mong muốn**.

**2. Hoạt động thế nào?**
- Quy trình: giả thuyết → mô hình → dữ liệu → ước lượng → kiểm định → diễn giải.
- Công cụ nhận dạng nhân quả: RCT, DID, biến công cụ (IV), hồi quy gián đoạn (RDD).
- Nguyên tắc: khả chứng (falsifiability), ceteris paribus, phân biệt tương quan với nhân quả, tính vững, tái lập.
- Việc chọn vấn đề và thước đo vẫn có thể mang giá trị, nên positive không trung lập tuyệt đối.

**3. Công thức & mô hình**
Hồi quy tuyến tính:

$$
Y_i = \alpha + \beta X_i + \varepsilon_i
$$

với $\beta$ là tác động ước lượng và $\varepsilon_i$ là sai số. Differences-in-Differences:

$$
Y_{it} = \alpha + \beta (T_i \times Post_t) + \gamma_i + \delta_t + \varepsilon_{it}
$$

$\beta$ là tác động nhân quả nếu giả định xu hướng song song đúng. Các giả định then chốt: exogeneity, parallel trends (DID), exclusion restriction (IV).

**4. Ví dụ**
- DID lương tối thiểu (số liệu minh họa): nhóm A tăng 5,0 → 5,5 triệu đồng/tháng; nhóm B tăng 7,0 → 7,2 triệu. $\Delta_A = 0{,}5$, $\Delta_B = 0{,}2$, tác động ước lượng $= 0{,}3$ triệu/tháng.
- Việt Nam: GSO công bố CPI hằng tháng; nhiều nghiên cứu đánh giá tác động tăng lương tối thiểu vùng đến việc làm và thu nhập.
- Counterfactual: nếu không có chính sách, nhóm A có thể chỉ tăng 0,2 triệu như nhóm B; tác động thực là 0,3 triệu.
- Case kinh điển: Card & Krueger (1994) không thấy giảm việc làm đáng kể ở New Jersey, thách thức dự đoán lý thuyết đơn giản.

**5. Ứng dụng & tranh luận**
- Dùng trong đánh giá chính sách, dự báo, nghiên cứu thị trường, tài chính, y tế, giáo dục.
- Ưu: bằng chứng khách quan, kiểm chứng và tái lập được; nền tảng của chính sách dựa trên bằng chứng.
- Nhược: không trả lời câu hỏi giá trị; dữ liệu và thiết kế nhận dạng có thể yếu.
- Rủi ro: tương quan giả, biến bỏ sót, nội sinh, p-hacking, thiên lệch công bố.

**6. Liên kết**
- [Kinh tế học chuẩn tắc](#2-kinh-tế-học-chuẩn-tắc-normative-economics) · [Kinh tế học mô tả](#3-kinh-tế-học-mô-tả-descriptive-economics) · [Mô hình kinh tế](#5-mô-hình-kinh-tế-economic-models) · [Tương quan và nhân quả](06_Economic_Methodology/02_Correlation_Causation_and_Causal_Inference.md)

---

## 2. Kinh tế học Chuẩn tắc (Normative Economics)

**1. Là gì?**
Kinh tế học chuẩn tắc là nhánh đưa ra phán xét giá trị về điều gì tốt, công bằng, hiệu quả hoặc nên được thực hiện. Nó trả lời "điều gì nên xảy ra"; khác **thực chứng** ("đang xảy ra") và **quy phạm** (công cụ, lộ trình cụ thể). Nếu chỉ nhớ một điều: **normative economics không thể được chứng minh chỉ bằng dữ liệu, vì nó dựa trên giá trị**.

**2. Hoạt động thế nào?**
- Xác định giá trị ưu tiên: công bằng, hiệu quả, tự do, bền vững, phẩm giá.
- Chọn hàm phúc lợi xã hội để gán trọng số cho các nhóm.
- Đánh giá chính sách theo tiêu chuẩn đã chọn; tranh luận công khai và thể chế dân chủ giải quyết xung đột giá trị.
- Khi giá trị xã hội thay đổi, kết luận chuẩn tắc thay đổi theo.

**3. Công thức & mô hình**
Utilitarian: $W = \sum_i U_i$; Rawlsian: $W = \min_i U_i$; CES: $W = \left(\sum_i U_i^\rho\right)^{1/\rho}$; có trọng số: $W = \sum_i \theta_i U_i$. Đường Lorenz và hệ số Gini đo bất bình đẳng. Giả định gây tranh cãi: so sánh được mức thỏa dụng giữa các cá nhân.

**4. Ví dụ**
- Thuế lũy tiến (số liệu minh họa): nhóm A thu nhập 10 triệu, thuế 5%; nhóm B 50 triệu, thuế 20%. Thuế thu $0{,}5 + 10 = 10{,}5$ triệu; chuyển 5 triệu cho A: A còn $10 - 0{,}5 + 5 = 14{,}5$ triệu, B còn $50 - 10 - 5 = 35$ triệu.
- Đây là lựa chọn chuẩn tắc: phân phối lại bao nhiêu? Positive chỉ ước lượng tác động đến động cơ làm việc.
- Việt Nam: giảm nghèo đa chiều, giá điện bậc thang hỗ trợ hộ nghèo, cam kết net zero 2050.
- Counterfactual: nếu xã hội ưu tiên hiệu quả hơn, có thể chọn thuế thấp và ít chuyển giao hơn.

**5. Ứng dụng & tranh luận**
- Dùng trong thiết kế thuế, an sinh, y tế, giáo dục, đánh giá dự án có trọng số phân phối, trách nhiệm xã hội doanh nghiệp.
- Ưu: định hướng chính sách, làm rõ xung đột giá trị, thúc đẩy tranh luận dân chủ.
- Nhược: không kiểm chứng bằng dữ liệu; dễ bị nhóm mạnh áp đặt giá trị; có thể bỏ qua ràng buộc thực tế.
- Rủi ro: ngụy biện tự nhiên (đang xảy ra = nên xảy ra), paternalism, lợi ích nhóm.

**6. Liên kết**
- [Kinh tế học thực chứng](#1-kinh-tế-học-thực-chứng-positive-economics) · [Kinh tế học quy phạm](#4-kinh-tế-học-quy-phạmkhuyến-nghị-prescriptive-economics) · [Công bằng kinh tế](02_Choice_Tradeoffs_and_Opportunity_Cost.md) · [Phúc lợi kinh tế](06_Assumptions_Variables_Equilibrium_and_Welfare.md)

---

## 3. Kinh tế học Mô tả (Descriptive Economics)

**1. Là gì?**
Kinh tế học mô tả là nhánh thu thập, tổ chức, phân loại và trình bày dữ liệu kinh tế để mô tả cấu trúc và diễn biến của nền kinh tế. Nó "vẽ bức tranh": ai sản xuất gì, bao nhiêu, ở đâu, cho ai; ít tập trung vào kiểm định nhân quả hơn thực chứng. Nếu chỉ nhớ một điều: **descriptive economics cung cấp "bản đồ dữ liệu" trước khi phân tích nhân quả**.

**2. Hoạt động thế nào?**
- Thu thập: điều tra, báo cáo hành chính, hải quan, ngân hàng, dữ liệu vệ tinh.
- Phân loại ngành/khu vực; tính giá trị gia tăng, chỉ số giá, tỷ lệ, tốc độ tăng.
- Kiểm tra chất lượng: nhất quán, đối chiếu chéo, xử lý ngoại lai; công bố phương pháp và sai số.
- Cập nhật: sửa đổi, tái cơ sở (rebasing), điều chỉnh mùa vụ.

**3. Công thức & mô hình**
Đồng nhất thức GDP: $Y = C + I + G + NX$. Theo phương pháp sản xuất: $GDP = \sum_i VA_i + \text{thuế} - \text{trợ cấp}$.

$$
CPI_t = \frac{\sum_i p_{it} q_{i0}}{\sum_i p_{i0} q_{i0}} \times 100
$$

$$u = \frac{\text{số người thất nghiệp}}{\text{lực lượng lao động}} \times 100\%$$

**4. Ví dụ**
- Cơ cấu GDP Việt Nam (số liệu minh họa): nông – lâm – thủy sản 11,5%; công nghiệp – xây dựng 37,5%; dịch vụ 42,0%; thuế sản phẩm trừ trợ cấp 9,0%.
- CPI 2023 = 100, CPI 2024 = 103,63 → lạm phát $= 3{,}63\%$ (mô tả, chưa giải thích nguyên nhân).
- Việt Nam: GSO công bố GDP, CPI, việc làm; SBV công bố tiền tệ, tín dụng; Hải quan công bố xuất nhập khẩu.
- Counterfactual: nếu rổ hàng hóa CPI thay đổi, so sánh giữa các năm có thể bị lệch.

**5. Ứng dụng & tranh luận**
- Dùng trong theo dõi vĩ mô, phân tích thị trường, đầu tư, nghiên cứu và báo cáo kinh tế.
- Ưu: nền tảng cho mọi phân tích; nhận diện xu hướng, cấu trúc, bất thường.
- Nhược: thiếu lý thuyết dễ thành "dữ liệu không nói gì"; chất lượng phụ thuộc nguồn; khó đo khu vực phi chính thức.
- Rủi ro: sai số đo lường, thiên lệch mẫu, thay đổi định nghĩa, cherry-picking.
- Case: GSO tái cơ sở GDP năm 2020, điều chỉnh quy mô giai đoạn 2010–2017, ảnh hưởng các chỉ tiêu như nợ công/GDP.

**6. Liên kết**
- [Kinh tế học thực chứng](#1-kinh-tế-học-thực-chứng-positive-economics) · [Biến số kinh tế](06_Assumptions_Variables_Equilibrium_and_Welfare.md) · [Chỉ số](07_Basic_Economic_Mathematics/04_Annuities_Perpetuities_Real_Nominal_and_Index.md) · [Tài khoản quốc gia](02_Macroeconomics/01_National_Accounts_and_Measurement/01_GDP_GNP_and_Value_Added.md)

---

## 4. Kinh tế học Quy phạm/Khuyến nghị (Prescriptive Economics)

**1. Là gì?**
Kinh tế học quy phạm/khuyến nghị là nhánh đưa ra đề xuất hành động cụ thể cho chính phủ, doanh nghiệp hoặc cá nhân, dựa trên phân tích thực chứng và mục tiêu chuẩn tắc. Nó trả lời "nên làm gì, làm thế nào, khi nào"; normative xác định mục tiêu, prescriptive đề xuất công cụ và lộ trình. Nếu chỉ nhớ một điều: **khuyến nghị tốt không chỉ đúng mà còn khả thi, được chấp nhận và có cơ chế giám sát**.

**2. Hoạt động thế nào?**
- Bảy bước: chẩn đoán → mục tiêu → phương án → đánh giá (CBA, cost-effectiveness) → lựa chọn → thực thi → giám sát và điều chỉnh.
- Cân nhắc hiệu quả, công bằng, khả thi về thể chế/ngân sách, mức độ chấp nhận chính trị.
- Nếu năng lực thực thi yếu, tham nhũng hoặc phản ứng xã hội mạnh, khuyến nghị có thể thất bại dù phân tích đúng.

**3. Công thức & mô hình**
$$NPV = \sum_{t=0}^{T} \frac{B_t - C_t}{(1+r)^t}$$

$$CER = \frac{\text{Chi phí}}{\text{Hiệu quả}} \quad \text{(ví dụ: chi phí/người được điều trị)}$$

Tối ưu hóa chính sách: $\max_x W(x)$ với ràng buộc ngân sách, thể chế, chính trị.

**4. Ví dụ**
- Thuế carbon (số liệu minh họa): phát thải 500 triệu tấn CO₂/năm, thuế 20 USD/tấn → thu 10 tỷ USD/năm. Nếu thuế làm chi phí năng lượng tăng 10% và độ co giãn phát thải là $-0{,}3$, phát thải giảm khoảng 3% $= 15$ triệu tấn/năm.
- Khuyến nghị: áp thuế theo lộ trình, hoàn lại một phần cho hộ thu nhập thấp, đầu tư năng lượng sạch, giám sát việc làm.
- Việt Nam: điều hành giá xăng dầu qua quỹ bình ổn và giảm thuế bảo vệ môi trường năm 2022; SBV cân nhắc lãi suất, tỷ giá, tín dụng.
- Counterfactual: nếu không tăng giá điện, EVN lỗ, giảm đầu tư hoặc phải bù đắp từ ngân sách; dài hạn có thể thiếu điện.

**5. Ứng dụng & tranh luận**
- Dùng trong chính sách tài khóa, tiền tệ, thuế, an sinh, môi trường; chiến lược doanh nghiệp; khuyến nghị của IMF, World Bank, ADB.
- Ưu: biến phân tích thành hành động, ra quyết định có cấu trúc, tạo cơ sở giám sát.
- Nhược: phụ thuộc giả định và dữ liệu; dễ bỏ qua ràng buộc chính trị, văn hóa; khó dự báo phản ứng hành vi.
- Rủi ro: quá tự tin, bỏ qua thực thi, thiên lệch chính trị, tác dụng phụ, truyền thông kém.
- Case: IMF Article IV định kỳ đánh giá và khuyến nghị chính sách; khuyến nghị có thể xung đột với ưu tiên quốc gia.

**6. Liên kết**
- [Kinh tế học chuẩn tắc](#2-kinh-tế-học-chuẩn-tắc-normative-economics) · [Kinh tế học thực chứng](#1-kinh-tế-học-thực-chứng-positive-economics) · [Phân tích chi phí – lợi ích](04_Marginal_Analysis_and_Cost_Benefit.md) · [Mô hình kinh tế](#5-mô-hình-kinh-tế-economic-models)

---

## 5. Mô hình Kinh tế (Economic Models)

**1. Là gì?**
Mô hình kinh tế là biểu diễn đơn giản hóa của thực tế kinh tế, dùng biến, phương trình, giả định và cơ chế để giải thích hoặc dự báo hiện tượng. Nó là "bản đồ" của nền kinh tế — không phải lãnh thổ nhưng giúp định hướng. Phân loại: lý thuyết (cung–cầu, Solow, IS–LM, Nash) và thực nghiệm (hồi quy, VAR, DSGE, CGE); tĩnh/động; vi mô/vĩ mô. Nếu chỉ nhớ một điều: **mọi mô hình đều sai, nhưng một số hữu ích — nếu bạn biết giả định của nó**.

**2. Hoạt động thế nào?**
- Xác định câu hỏi → chọn biến nội sinh/ngoại sinh → đặt giả định → xây phương trình → giải cân bằng, so sánh tĩnh → ước lượng/kiểm định → dự báo, mô phỏng → đánh giá độ nhạy.
- Nguyên tắc: ceteris paribus, tối ưu hóa, cân bằng, tiết kiệm (parsimony), minh bạch, kiểm chứng.
- Nếu giả định bị phá vỡ, kết quả có thể không còn đúng.

**3. Công thức & mô hình**
Cung–cầu: $Q_d = a - bP$, $Q_s = c + dP$ → $P^* = \dfrac{a-c}{b+d}$, $Q^* = a - bP^*$. Mô hình Solow: $Y = A K^\alpha L^{1-\alpha}$, $\dot{K} = sY - \delta K$. IS–LM: $Y = C(Y-T) + I(r) + G + NX$; $\dfrac{M}{P} = L(Y,r)$.

**4. Ví dụ**
- Cầu cà phê $Q_d = 100 - 2P$, cung $Q_s = 20 + 3P$ → $100 - 2P = 20 + 3P$ → $P^* = 16$, $Q^* = 68$.
- Nếu thu nhập tăng, cầu thành $Q_d = 120 - 2P$ → $P^* = 20$, $Q^* = 80$: giá và lượng cùng tăng.
- Việt Nam: SBV, Bộ Kế hoạch và Đầu tư và các viện nghiên cứu dùng VAR, DSGE, CGE để dự báo lạm phát, tăng trưởng và mô phỏng chính sách.
- Counterfactual: nếu cung cũng tăng, giá có thể ổn định hơn thay vì tăng mạnh.
- Case: nhiều dự báo COVID-19 sai vì cú sốc cấu trúc và thay đổi hành vi; cần kịch bản và cập nhật.

**5. Ứng dụng & tranh luận**
- Dùng trong dự báo, mô phỏng chính sách, chiến lược doanh nghiệp, định giá tài sản, quản lý rủi ro, kiểm định lý thuyết.
- Ưu: hiểu cơ chế phức tạp, dự báo và mô phỏng, làm rõ giả định và đánh đổi.
- Nhược: đơn giản hóa có thể bỏ sót; kết quả phụ thuộc giả định; dễ tạo cảm giác chính xác giả tạo.
- Rủi ro: sai mô hình (misspecification), overfitting, giả định sai, dữ liệu kém, dùng sai phạm vi, tự tin quá mức.

**6. Liên kết**
- [Giả định kinh tế](06_Assumptions_Variables_Equilibrium_and_Welfare.md) · [Biến số kinh tế](06_Assumptions_Variables_Equilibrium_and_Welfare.md) · [Cân bằng kinh tế](06_Assumptions_Variables_Equilibrium_and_Welfare.md) · [Kinh tế học thực chứng](#1-kinh-tế-học-thực-chứng-positive-economics)

---

## Câu hỏi tự kiểm tra

1. Phân biệt positive, normative và prescriptive bằng một ví dụ về giá điện.
2. Vì sao một mệnh đề positive vẫn có thể mang giá trị ngầm?
3. DID cần giả định gì để ước lượng tác động nhân quả?
4. Kể tên hai cách đo bất bình đẳng và ý nghĩa của chúng.
5. Vì sao không nên dùng một mô hình ngoài phạm vi giả định của nó?

---

## Ghi chú nguồn

Các số liệu minh họa được ghi rõ; số liệu thực tế cần đối chiếu GSO, SBV, Bộ Tài chính, IMF, World Bank. Các nhận định chính sách mang tính phân tích, không phải khuyến nghị đầu tư.
