# Chuyên đề 7.2: GDP, GNP, GNI và Hệ thống Hạch toán Quốc gia

Năm keyword dưới đây là bảng chữ cái của đo lường kinh tế vĩ mô: chỉ số quốc dân quyền lực nhất hành tinh (**tổng sản phẩm quốc nội - GDP**), chỉ số đo lường theo nguồn gốc công dân (**tổng sản phẩm quốc dân - GNP**), thu nhập thuộc về quốc gia (**tổng thu nhập quốc dân - GNI**), sản lượng sau khi trừ khấu hao hao mòn (**sản phẩm quốc dân ròng - NNP**), cùng bộ khung chuẩn tắc quốc tế thống nhất (**hệ thống hạch toán thu nhập quốc dân**).

> Câu hỏi xuyên suốt: Một nhà máy của tập đoàn Samsung đặt tại Bắc Ninh làm ra hàng tỷ USD mỗi năm thì số tiền đó được tính vào GDP của Việt Nam hay GDP của Hàn Quốc?

---

## 1. Tổng Sản phẩm Quốc nội (Gross Domestic Product - GDP)

**1. Là gì?**
Tổng sản phẩm quốc nội (GDP) là tổng giá trị thị trường của **tất cả các hàng hóa và dịch vụ cuối cùng** được sản xuất ra **bên trong phạm vi lãnh thổ địa lý của một quốc gia** trong một khoảng thời gian nhất định (thường là một quý hoặc một năm), bất kể người tạo ra sản phẩm đó là công dân trong nước hay nhà đầu tư nước ngoài. Đây là thước đo quy mô kinh tế phổ biến và quan trọng bậc nhất của mọi quốc gia trên thế giới. Nếu chỉ nhớ một điều: **GDP tính theo nguyên tắc lãnh thổ – cứ làm ra trên mảnh đất hình chữ S thì đều được tính vào GDP Việt Nam**.

**2. Hoạt động thế nào?**
- 3 nguyên tắc hạch toán cốt lõi:
  1. **Giá trị thị trường:** Dùng tiền tệ làm thước đo chung để cộng dồn lúa gạo, ô tô, cắt tóc.
  2. **Hàng hóa và dịch vụ cuối cùng:** Loại bỏ hoàn toàn hàng hóa trung gian (như thép dùng để đúc vỏ xe) để tránh bẫy **tính trùng hai lần (Double counting)**.
  3. **Nguyên tắc lãnh thổ (Domestic):** Nhà máy FDI của Intel hay Foxconn tại Việt Nam tạo ra giá trị thì tính vào GDP Việt Nam; kỹ sư Việt Nam làm việc tại Nhật Bản không được tính vào GDP Việt Nam.
- 3 phương pháp tính GDP luôn cho ra cùng một kết quả:
  - Phương pháp chi tiêu: $GDP = C + I + G + NX$.
  - Phương pháp thu nhập: $GDP = w + r + i + \pi + \text{Thuế gián thu ròng} + \text{Khấu hao}$.
  - Phương pháp giá trị gia tăng (sản xuất): $GDP = \sum \text{Giá trị gia tăng (VA)}$.

**3. Công thức & mô hình**
Phương trình GDP theo phương pháp chi tiêu:

$$
GDP = C + I + G + (X - M)
$$

Giá trị gia tăng của từng khâu:

$$
VA = \text{Giá trị sản lượng đầu ra (Doanh thu)} - \text{Chi phí đầu vào trung gian}
$$

**4. Ví dụ**
- Chuỗi sản xuất một chiếc bánh mì kẹp thịt (số liệu minh họa):
  - Bác nông dân trồng lúa mì bán cho nhà máy bột giá 5.000đ ($VA_1 = 5.000đ$).
  - Nhà máy xay bột bán cho lò bánh mì giá 8.000đ ($VA_2 = 8.000 - 5.000 = 3.000đ$).
  - Lò bánh mì làm vỏ bánh bán cho quán ăn giá 12.000đ ($VA_3 = 12.000 - 8.000 = 4.000đ$).
  - Quán ăn kẹp thịt bán cho thực khách với giá cuối cùng 25.000đ ($VA_4 = 25.000 - 12.000 - 3.000 \text{ thịt} = 10.000đ$).
  - Đóng góp vào GDP bằng đúng giá trị của sản phẩm cuối cùng: $25.000$ đồng (hoặc bằng tổng giá trị gia tăng các khâu: $5k + 3k + 4k + 3k + 10k = 25.000đ$). Tuyệt đối không cộng dồn doanh thu các khâu ($5+8+12+25 = 50k$) vì sẽ bị tính trùng gấp đôi!
- Thực tế: Quy mô GDP danh nghĩa của Việt Nam năm 2024 ước đạt khoảng 470 tỷ USD (theo số liệu IMF và GSO).
- Counterfactual: Các hoạt động tự cung tự cấp (nội trợ nấu cơm quét nhà) hoặc kinh tế ngầm phi chính thức (chợ đen) không có hóa đơn giao dịch thị trường sẽ bị bỏ sót không được tính vào GDP.

**5. Ứng dụng & tranh luận**
- Thước đo sức khỏe kinh tế và căn cứ ấn định trần nợ công quốc gia.
- Hạn chế: GDP không đo lường hạnh phúc, không đo thời gian nhàn rỗi, không phản ánh bất bình đẳng giàu nghèo và không trừ đi chi phí hủy hoại môi trường ("GDP xanh").
- Lỗi thường gặp: Lấy doanh thu mua đi bán lại nhà đất cũ tính vào GDP (chỉ tính phí môi giới dịch vụ mới phát sinh, không tính giá trị căn nhà cũ vì căn nhà đó đã được tính vào GDP của năm nó được xây dựng).

**6. Liên kết**
- [GNP / GNI](#2-tổng-sản-phẩm-quốc-dân-gross-national-product---gnp) · [GDP danh nghĩa và thực tế](03_Nominal_Real_Measures_and_GDP_Deflator.md) · [Hạch toán thu nhập quốc dân](#5-hạch-toán-thu-nhập-quốc-dân-national-income-accounting)

---

## 2. Tổng Sản phẩm Quốc dân (Gross National Product - GNP)

**1. Là gì?**
Tổng sản phẩm quốc dân (GNP) là tổng giá trị thị trường của tất cả các hàng hóa và dịch vụ cuối cùng do **các công dân và doanh nghiệp có quốc tịch của một quốc gia sản xuất ra** trong một khoảng thời gian nhất định, **bất kể hoạt động sản xuất đó diễn ra ở trong nước hay ở nước ngoài**. Ngược lại với GDP lấy ranh giới địa lý làm gốc, GNP lấy **quyền sở hữu quốc tịch của con người và nguồn vốn** làm gốc. Nếu chỉ nhớ một điều: **GNP tính theo quốc tịch – cứ là người Việt Nam kiếm ra tiền thì dù ở Mỹ hay Nhật cũng được tính vào GNP Việt Nam**.

**2. Hoạt động thế nào?**
- Mối quan hệ chuyển đổi cốt lõi giữa GDP và GNP thông qua **Thu nhập nhân tố ròng từ nước ngoài (Net Factor Income from Abroad - NFIFA)**:
  $$GNP = GDP + NFIFA$$
- Cấu phần của NFIFA:
  $$NFIFA = \text{Thu nhập của công dân trong nước làm ra ở nước ngoài} - \text{Thu nhập của người nước ngoài làm ra trong nước}$$
- So sánh cơ cấu giữa các quốc gia:
  - Các nước phát triển sở hữu nhiều tập đoàn đa quốc gia đầu tư ra toàn cầu (như Mỹ, Nhật Bản, Đức): Thu nhập từ nước ngoài gửi về rất lớn $\rightarrow NFIFA > 0 \Rightarrow GNP > GDP$.
  - Các nước đang phát triển thu hút lượng vốn FDI khổng lồ (như Việt Nam, Ireland): Phần lớn lợi nhuận do các nhà máy FDI (Samsung, Intel) tạo ra sẽ được chuyển về nước mẹ $\rightarrow NFIFA < 0 \Rightarrow GNP < GDP$.

**3. Công thức & mô hình**
Đẳng thức tính toán:

$$
GNP = GDP + (INCOME_{\text{nhận về}} - INCOME_{\text{chuyển đi}})
$$

Trong các chuẩn mực thống kê quốc tế hiện đại (SNA 1993/2008), khái niệm GNP đã được đổi tên chính thức thành **Tổng thu nhập quốc dân (GNI)**.

**4. Ví dụ**
- Giải phẫu trường hợp nhà máy Samsung tại Bắc Ninh và kiều hối của kiều bào (số liệu minh họa):
  - Tập đoàn Samsung (Hàn Quốc) tạo ra 5 tỷ USD giá trị gia tăng tại nhà máy ở Bắc Ninh: 5 tỷ USD này được tính trọn vẹn vào **GDP của Việt Nam**, nhưng lại được tính vào **GNP/GNI của Hàn Quốc**.
  - Một kỹ sư phần mềm Việt Nam làm việc tại Singapore gửi 50.000 USD về nước: Khoản tiền này được tính vào **GDP của Singapore**, nhưng lại được tính vào **GNP của Việt Nam**.
- Thực tế tại Việt Nam: GDP của Việt Nam luôn lớn hơn GNP/GNI khoảng 5-7% do dòng lợi nhuận chuyển về nước của khối doanh nghiệp FDI lớn hơn dòng thu nhập người Việt ở nước ngoài gửi về.
- Counterfactual: Nếu kiều bào ở nước ngoài gửi về lượng kiều hối và lợi nhuận đầu tư vượt trội hơn toàn bộ lợi nhuận của khối FDI mang đi, GNP của Việt Nam sẽ lớn hơn GDP.

**5. Ứng dụng & tranh luận**
- GNP/GNI phản ánh chân thực hơn về sức mua và mức sống thực tế của người dân một quốc gia so với GDP thuần túy.
- Lỗi thường gặp: Nhầm lẫn giữa GDP và GNP/GNI khi phân tích thu nhập của các quốc gia có tỷ trọng FDI lớn.

**6. Liên kết**
- [GDP](#1-tổng-sản-phẩm-quốc-nội-gross-domestic-product---gdp) · [GNI](#3-tổng-thu-nhập-quốc-dân-gross-national-income---gni) · [NNP](#4-sản-phẩm-quốc-dân-ròng-net-national-product---nnp)

---

## 3. Tổng Thu nhập Quốc dân (Gross National Income - GNI)

**1. Là gì?**
Tổng thu nhập quốc dân (GNI) là tổng số thu nhập nguyên phát từ tiền lương, tiền công, tiền thuê tài sản, lợi tức đầu tư và lợi nhuận kinh doanh mà **tất cả các cư dân của một quốc gia nhận được** trong một khoảng thời gian xác định. Về mặt số học và bản chất kinh tế, GNI chính là phiên bản định danh thu nhập của Tổng sản phẩm quốc dân (GNP), được hệ thống tài khoản quốc gia Liên Hợp Quốc (UN SNA) chính thức chuẩn hóa để thay thế thuật ngữ GNP. GNI đo lường chính xác lượng tiền thực tế nằm lại trong túi của công dân một nước để tiêu dùng và tiết kiệm. Nếu chỉ nhớ một điều: **GNI là tổng số tiền thật sự chảy vào túi của người dân và doanh nghiệp nước mình**.

**2. Hoạt động thế nào?**
- Được tính bằng GDP cộng với các khoản thu nhập sơ cấp ròng (thu nhập từ lao động và sở hữu tài sản) từ nước ngoài gửi về:
  $$GNI = GDP + NFIFA$$
- Là chỉ số chuẩn mực được Ngân hàng Thế giới (World Bank) sử dụng độc quyền để **phân loại các nền kinh tế trên thế giới** thành 4 nhóm theo mức thu nhập bình quân đầu người (GNI per capita):
  1. Thu nhập thấp (Low income): $\le 1.145$ USD.
  2. Thu nhập trung bình thấp (Lower-middle income): 1.146 - 4.515 USD.
  3. Thu nhập trung bình cao (Upper-middle income): 4.516 - 14.005 USD.
  4. Thu nhập cao (High income): $> 14.005$ USD.
- Đóng vai trò quyết định trong việc xác định hạn mức đóng góp niên liễm của quốc gia cho Liên Hợp Quốc và điều kiện vay vốn ưu đãi (ODA) từ các tổ chức tài chính quốc tế.

**3. Công thức & mô hình**
Phương pháp chuyển đổi Atlas của World Bank (loại trừ biến động tỷ giá):

$$
GNI_{\text{Atlas}} = \frac{1}{3} \left[ GNI_t + GNI_{t-1} \left( \frac{e_t}{e_{t-1}} \right) \left( \frac{P_t^{\text{US}}}{P_{t-1}^{\text{US}}} \right) + GNI_{t-2} \left( \frac{e_t}{e_{t-2}} \right) \left( \frac{P_t^{\text{US}}}{P_{t-2}^{\text{US}}} \right) \right]
$$

**4. Ví dụ**
- Phân loại thu nhập của Việt Nam theo World Bank (số liệu 2024):
  - GNI bình quân đầu người của Việt Nam đạt khoảng 4.300 - 4.500 USD/người/năm, đưa Việt Nam nằm sát ngưỡng trên của nhóm "Thu nhập trung bình thấp" và chuẩn bị chính thức bước chân vào nhóm các quốc gia "Thu nhập trung bình cao".
- Hiện tượng Ireland: GDP của Ireland cực kỳ cao do hàng loạt tập đoàn công nghệ Mỹ (Apple, Google) đặt trụ sở để tránh thuế, nhưng phần lớn lợi nhuận này không thuộc về người dân Ireland; do đó GNI của Ireland nhỏ hơn GDP tới 30-40%!
- Counterfactual: Nếu các doanh nghiệp Việt Nam đầu tư mạnh ra nước ngoài (như Viettel Global tại 10 thị trường quốc tế) chuyển hàng tỷ USD lợi nhuận ròng về nước, GNI của Việt Nam sẽ tăng trưởng nhanh hơn tốc độ tăng của GDP.

**5. Ứng dụng & tranh luận**
- Đánh giá bẫy thu nhập trung bình (Middle-Income Trap).
- Lỗi thường gặp: Dùng GDP bình quân đầu người để xếp hạng tiêu chuẩn nước phát triển của World Bank (tiêu chuẩn chuẩn xác của WB là dùng GNI bình quân đầu người tính theo phương pháp Atlas).

**6. Liên kết**
- [GDP](#1-tổng-sản-phẩm-quốc-nội-gross-domestic-product---gdp) · [GNP](#2-tổng-sản-phẩm-quốc-dân-gross-national-product---gnp) · [GDP bình quân đầu người](03_Nominal_Real_Measures_and_GDP_Deflator.md)

---

## 4. Sản phẩm Quốc dân Ròng (Net National Product - NNP)

**1. Là gì?**
Sản phẩm quốc dân ròng (NNP) là tổng giá trị của toàn bộ hàng hóa và dịch vụ cuối cùng do công dân một nước sản xuất ra sau khi đã **trừ đi phần hao mòn và khấu hao của tài sản cố định (Depreciation / Capital Consumption Allowance)** trong kỳ. Nếu như GNP đo lường tổng sản lượng thô bao gồm cả phần máy móc bị hao mòn rỉ sét, thì NNP bóc tách phần hao mòn đó ra để phản ánh đúng phần của cải ròng thực sự tăng thêm mà nền kinh tế có thể tiêu dùng mà không làm suy giảm năng lực sản xuất của thế hệ tương lai. Nếu chỉ nhớ một điều: **NNP là quả ngọt thực sự giữ lại sau khi đã trích tiền sửa chữa máy móc bị hư hao**.

**2. Hoạt động thế nào?**
- Trong quá trình sản xuất hàng năm, máy móc, nhà xưởng, đường sá cầu cống liên tục bị cũ kỹ, hỏng hóc, hao mòn cơ học.
- Một phần sản lượng làm ra trong năm bắt buộc phải được dùng để sửa chữa, thay thế các máy móc cũ đó (gọi là Đầu tư thay thế / Khấu hao).
- Chỉ có phần sản lượng còn lại vượt lên trên mức khấu hao mới được coi là **Sản phẩm ròng**:
  $$NNP = GNP - \text{Khấu hao tài sản cố định}$$
- NNP phản ánh mức tiêu dùng bền vững: Một quốc gia chỉ có thể tiêu thụ tối đa bằng mức NNP mà vẫn bảo tồn được nguyên vẹn trữ lượng tư bản cho tương lai.

**3. Công thức & mô hình**
Đẳng thức tính toán:

$$
NNP = GNP - D \quad \text{hoặc} \quad NDP = GDP - D
$$

Trong đó $D$ là Khấu hao (Depreciation).
Mối liên hệ với Thu nhập quốc dân (NI): $NI = NNP - \text{Thuế gián thu ròng}$.

**4. Ví dụ**
- Một doanh nghiệp vận tải có 10 chiếc xe tải (số liệu minh họa):
  - Năm nay chạy xe làm ra doanh thu thô 10 tỷ đồng ($GNP$).
  - Nhưng sau 1 năm cày ải, dàn xe tải bị hao mòn trị giá 2 tỷ đồng tiền khấu hao ($D$).
  - Giá trị ròng thực tế doanh nghiệp kiếm thêm được: $NNP = 10 - 2 = 8$ tỷ đồng. Doanh nghiệp chỉ được chia cổ tức tối đa 8 tỷ; nếu chia hết 10 tỷ thì năm sau không có tiền mua xe mới thay thế xe hỏng.
- Thực tế: Khấu hao tài sản cố định thường chiếm khoảng 10-15% tổng GDP/GNP của một quốc gia công nghiệp hóa.
- Counterfactual: Nếu một nền kinh tế có đầu tư gộp bằng đúng mức khấu hao ($I = D$), đầu tư ròng bằng 0 ($I_{\text{ròng}} = 0$) và trữ lượng vốn quốc gia đứng yên không tăng trưởng.

**5. Ứng dụng & tranh luận**
- Khái niệm cầu nối quan trọng để tính toán Thu nhập quốc dân (National Income - NI) phân phối cho các tầng lớp lao động.
- Tranh luận kinh tế xanh: NNP xanh (Green NNP) đòi hỏi phải trừ thêm cả phần "khấu hao tài nguyên thiên nhiên và suy thoái môi trường" (rừng bị chặt, dầu mỏ bị hút cạn) để đo lường tính bền vững thực chất.
- Lỗi thường gặp: Bỏ qua khấu hao khi đánh giá thành quả tăng trưởng của các dự án công (dự án làm ra doanh thu lớn nhưng máy móc khấu hao quá nhanh thì thực chất giá trị ròng rất thấp).

**6. Liên kết**
- [GNP](#2-tổng-sản-phẩm-quốc-dân-gross-national-product---gnp) · [Thu nhập quốc dân](04_Potential_Output_and_Income_Concepts.md) · [Đầu tư](05_Expenditure_Components_and_Circular_Flow.md)

---

## 5. Hạch toán Thu nhập Quốc dân (National Income Accounting)

**1. Là gì?**
Hạch toán thu nhập quốc dân là một **hệ thống quy tắc, chuẩn mực và phương pháp kế toán thống kê toàn diện** được các chính phủ và tổ chức quốc tế áp dụng để đo lường, ghi chép và tổng hợp toàn bộ các dòng chu chuyển hoạt động kinh tế, sản xuất, thu nhập và chi tiêu của một quốc gia trong một khoảng thời gian nhất định. Hệ thống này được chuẩn hóa toàn cầu theo **Hệ thống Tài khoản Quốc gia của Liên Hợp Quốc (System of National Accounts - SNA)**. Được coi là một trong những phát minh vĩ đại nhất của thế kỷ 20, hệ thống hạch toán quốc gia biến toàn bộ nền kinh tế hỗn độn thành các con số vĩ mô minh bạch có thể so sánh được. Nếu chỉ nhớ một điều: **hạch toán quốc dân là cuốn sổ cái kế toán ghi chép lại mọi dòng tiền và của cải của cả một đất nước**.

**2. Hoạt động thế nào?**
- Được xây dựng trên nền tảng của Mô hình dòng chu chuyển kinh tế (Circular flow of income).
- Cung cấp mạng lưới các tài khoản liên kết chặt chẽ:
  1. Tài khoản sản xuất: Đo lường giá trị gia tăng và GDP.
  2. Tài khoản phân phối thu nhập: Đo lường tiền lương, địa tô, lợi nhuận và GNI.
  3. Tài khoản sử dụng thu nhập: Đo lường tiêu dùng $C$ và tiết kiệm $S$.
  4. Tài khoản vốn và tài chính: Đo lường đầu tư $I$, vay nợ và tài sản tài chính.
  5. Bảng cân đối vào - ra (Input-Output Table - mô hình I-O của Wassily Leontief): Mô tả chi tiết dòng giao dịch hàng hóa trung gian giữa hàng chục ngành kinh tế với nhau.
- Cơ quan thực thi: Tại Việt Nam là Cục Thống kê (Tổng cục Thống kê - Bộ Kế hoạch và Đầu tư).

**3. Công thức & mô hình**
Các đồng nhất thức cơ bản trong hệ thống SNA:

$$
\begin{aligned}
GDP &= C + I + G + NX \\\\[1ex]
GNI &= GDP + NFIFA \\\\[1ex]
NNP &= GNI - \text{Khấu hao} \\\\[1ex]
NI &= NNP - \text{Thuế gián thu ròng} \\\\[1ex]
PI &= NI - \text{Lợi nhuận giữ lại} - \text{Bảo hiểm xã hội} + \text{Chi chuyển nhượng} \\\\[1ex]
DI &= PI - \text{Thuế thu nhập cá nhân} = C + S
\end{aligned}
$$

**4. Ví dụ**
- Công bố số liệu kinh tế - xã hội định kỳ của Tổng cục Thống kê Việt Nam (GSO):
  - Định kỳ vào cuối mỗi quý và cuối năm, GSO tổ chức họp báo công bố Báo cáo tình hình kinh tế - xã hội dựa trên chuẩn mực SNA 2008: Công bố tốc độ tăng trưởng GDP, cơ cấu kinh tế theo ngành (Nông nghiệp, Công nghiệp - Xây dựng, Dịch vụ), cán cân thương mại và tích lũy tài sản.
- Đợt Tổng điều tra đánh giá lại quy mô GDP của Việt Nam giai đoạn 2010-2017: GSO rà soát và bổ sung hàng vạn doanh nghiệp mới vào hệ thống tài khoản quốc gia, làm quy mô GDP tăng thêm khoảng 25,4% mỗi năm (số liệu thống kê chính thức).
- Counterfactual: Nếu không có hệ thống hạch toán thu nhập quốc dân, các nhà lãnh đạo chính phủ sẽ như "người phi công bay trong đêm mà bảng điều khiển bị hỏng hoàn toàn", không biết nền kinh tế đang hạ cánh hay sắp đâm đầu vào núi.

**5. Ứng dụng & tranh luận**
- Kim chỉ nam duy nhất để hoạch định chiến lược phát triển kinh tế 5 năm và 10 năm của quốc gia.
- Hạn chế: Khó hạch toán chính xác khu vực kinh tế chưa được quan sát (Khu vực phi chính thức, hộ kinh tế gia đình tự cung tự cấp, kinh tế số xuyên biên giới).
- Lỗi thường gặp: So sánh số liệu GDP giữa hai nước mà không kiểm tra xem hai nước có dùng cùng một phiên bản chuẩn mực SNA (SNA 1993 hay SNA 2008) hay không.

**6. Liên kết**
- [GDP](#1-tổng-sản-phẩm-quốc-nội-gross-domestic-product---gdp) · [GNI](#3-tổng-thu-nhập-quốc-dân-gross-national-income---gni) · [Dòng chu chuyển kinh tế](06_Purchasing_Power_and_PPP.md)

---

## Câu hỏi tự kiểm tra

1. Phân biệt sự khác nhau căn bản giữa GDP (nguyên tắc lãnh thổ) và GNP/GNI (nguyên tắc quốc tịch). Cho ví dụ thực tế minh họa.
2. Trình bày 3 phương pháp tính GDP (chi tiêu, thu nhập, giá trị gia tăng). Tại sao ba phương pháp này luôn cho ra cùng một kết quả?
3. Tại sao khi tính GDP, người ta chỉ tính giá trị của hàng hóa và dịch vụ cuối cùng mà loại trừ toàn bộ hàng hóa trung gian?
4. Viết chuỗi công thức chuyển đổi từ GDP sang Thu nhập khả dụng (DI).

---

## Ghi chú nguồn

Hệ thống tài khoản quốc gia (SNA) do Simon Kuznets (Nobel Kinh tế 1971) và Richard Stone (Nobel Kinh tế 1984) phát triển dưới sự bảo trợ của Liên Hợp Quốc và Ngân hàng Thế giới.
