# Chuyên đề 3.6: Khủng hoảng Niềm tin, Đột biến Rút tiền, Đổ vỡ và Cơ chế Tái cấu trúc Ngân hàng

Chuyên đề này phân tích động lực tâm lý học hành vi và lý thuyết trò chơi đằng sau các cuộc tháo chạy rút tiền (Bank Runs), nguyên nhân dẫn đến đổ vỡ ngân hàng (Bank Failure), vai trò của Bảo hiểm tiền gửi, và sự lựa chọn khó khăn giữa hai phương án giải quyết: dùng tiền ngân sách cứu trợ (Bailout) hay thực hiện tái cấu trúc can thiệp tự giải cứu (Bank Resolution / Bail-in).

> Câu hỏi xuyên suốt: Tại sao một ngân hàng hoàn toàn khỏe mạnh vẫn có thể sụp đổ chỉ vì một tin đồn thất thiệt trên mạng xã hội, và nhà nước nên cứu hay để cho ngân hàng đó phá sản?

---

## 1. Đột biến Rút tiền / Tháo chạy Tiền gửi (Bank Runs)

**1. Là gì?**
Đột biến Rút tiền (Bank Run / Tháo chạy tiền gửi) là hiện tượng kinh tế hoảng loạn tâm lý tập thể, trong đó một số lượng khổng lồ khách hàng gửi tiền cùng đồng loạt kéo đến ngân hàng rút tiền mặt hoặc thực hiện lệnh chuyển tiền điện tử tẩu tán số dư cùng một lúc vì lo sợ rằng ngân hàng này sắp mất khả năng thanh toán hoặc phá sản. Do hoạt động theo mô hình dự trữ phân đoạn (không giữ 100% tiền mặt), ngay cả ngân hàng có tài sản tốt nhất thế giới cũng không thể đáp ứng được dòng tiền rút ồ ạt này và sẽ nhanh chóng sụp đổ nếu không có sự can thiệp cứu trợ. Nếu chỉ nhớ một điều: **Bank Run là một lời tiên tri tự ứng nghiệm: người ta xếp hàng rút tiền vì sợ ngân hàng phá sản, và chính hành động xếp hàng đó khiến ngân hàng phá sản thật.**

**2. Hoạt động thế nào?**
- Mô hình Kinh điển Diamond-Dybvig (Douglas Diamond & Philip Dybvig, Nobel Kinh tế 2022):
  - Phân tích Bank Run dưới góc độ Lý thuyết Trò chơi (Game Theory).
  - Có hai trạng thái cân bằng Nash (Multiple Equilibria):
    1. *Cân bằng tốt (Good Equilibrium):* Mọi người tin ngân hàng an toàn, chỉ rút tiền khi thực sự cần tiêu dùng, ngân hàng vận hành trơn tru.
    2. *Cân bằng xấu / Hoảng loạn (Bad Equilibrium / Panic):* Người gửi tiền A tin rằng những người khác sắp đi rút tiền. Vì quy tắc ngân hàng là "Phục vụ người đến trước" (First-come, first-served), ai đến sau sẽ không còn tiền để rút. Do đó, lựa chọn hợp lý nhất của người A là phải chạy ngay đến ngân hàng để rút trước những người khác, bất kể ngân hàng đó có thực sự làm ăn thua lỗ hay không.
- Kỷ nguyên số ("Digital Bank Run"): Nếu như trước đây người dân phải mất thời gian ra xếp hàng vật lý trước cửa chi nhánh (giúp ngân hàng có thời gian xoay sở thanh khoản), ngày nay với ứng dụng Mobile Banking và mạng xã hội X (Twitter), hàng chục tỷ USD có thể bị rút sạch chỉ bằng vài thao tác quẹt màn hình trong vòng vài giờ.

**3. Công thức & mô hình**
Ma trận chi trả của người gửi tiền trong mô hình Diamond-Dybvig:

$$
\begin{array}{c|c|c}
& \textbf{Người khác giữ tiền} & \textbf{Người khác đi rút tiền} \\
\hline
\textbf{Tôi giữ tiền} & (R, R) \quad \text{Lợi suất cao nhất} & (0, r_1) \quad \text{Mất trắng!} \\
\hline
\textbf{Tôi đi rút tiền} & (r_1, R) & (r_1/2, r_1/2) \quad \text{Còn vớt vát được} \\
\end{array}
$$

Khi tâm lý bất an xuất hiện, chiến lược "Đi rút tiền ngay" trở thành chiến lược thống trị (Dominant Strategy), kích hoạt làn sóng tháo chạy tập thể.

**4. Ví dụ**
- Silicon Valley Bank (SVB, Mỹ, tháng 3/2023): Vụ "Digital Bank Run" lớn nhất và nhanh nhất lịch sử tài chính nhân loại. Sau các dòng tweet lan truyền trên mạng xã hội của các quỹ đầu tư mạo hiểm (Peter Thiel's Founders Fund), các startup công nghệ đã rút kỷ lục 42 tỷ USD chỉ trong 10 tiếng đồng hồ ngày thứ Năm và chuẩn bị rút tiếp 100 tỷ USD vào sáng thứ Sáu, đánh sập ngân hàng 40 năm tuổi chỉ trong 36 giờ.
- Northern Rock (Anh, 2007): Vụ Bank Run kinh điển thời hiện đại đầu tiên tại Anh sau hơn 140 năm; hình ảnh hàng nghìn người dân xếp hàng dài cả cây số trước các chi nhánh rút tiền đã gây chấn động toàn cầu.
- Việt Nam (tháng 10/2022): Sự cố tin đồn tại Ngân hàng TMCP Sài Gòn (SCB) khiến hàng nghìn người dân đổ xô đến các chi nhánh rút tiền tiết kiệm; sự việc chỉ được dập tắt khi Thống đốc NHNN phát đi thông điệp chính thức khẳng định an toàn tiền gửi và cam kết thanh khoản đầy đủ.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Thiết kế mạng lưới an toàn tài chính (Bảo hiểm tiền gửi, quy định tỷ lệ LCR, người cho vay cứu cánh LOLR) nhằm triệt tiêu trạng thái cân bằng xấu của mô hình Diamond-Dybvig.
- Tranh luận: Tốc độ lan truyền của mạng xã hội đòi hỏi NHTW phải tái định nghĩa lại các kịch bản kiểm tra sức chịu đựng thanh khoản; thời gian phản ứng chính sách phải tính bằng phút thay vì bằng tuần như trước.
- Lỗi thường gặp: Đổ lỗi hoàn toàn cho người dân là thiếu hiểu biết; dưới góc độ cá nhân, việc đi rút tiền khi thấy người khác rút là một quyết định tối ưu hóa tài sản hoàn toàn hợp lý (Rational Choice) để tự bảo vệ mình.

**6. Liên kết**
- [Bảo hiểm tiền gửi](#3-bảo-hiểm-tiền-gửi-deposit-insurance) · [Đổ vỡ ngân hàng](#2-sự-đổ-vỡ--phá-sản-ngân-hàng-bank-failure) · [LOLR](../02_Central_Banking/05_Lender_of_Last_Resort_and_Liquidity_Support.md)

---

## 2. Sự Đổ vỡ / Phá sản Ngân hàng (Bank Failure)

**1. Là gì?**
Sự Đổ vỡ / Phá sản Ngân hàng (Bank Failure) là trạng thái mà một ngân hàng thương mại không còn khả năng thực hiện các nghĩa vụ tài chính đối với người gửi tiền và các chủ nợ, buộc cơ quan quản lý tiền tệ nhà nước phải can thiệp chính thức bằng cách đình chỉ hoạt động, thu hồi giấy phép kinh doanh, đặt vào diện kiểm soát đặc biệt hoặc tuyên bố đóng cửa để tiến hành thanh lý hoặc tái cấu trúc. Sự đổ vỡ của một ngân hàng nguy hiểm gấp nhiều lần sự phá sản của một doanh nghiệp thông thường do hiệu ứng domino lây lan sang toàn bộ hệ thống tài chính. Nếu chỉ nhớ một điều: **Đổ vỡ ngân hàng xảy ra khi ngân hàng hết sạch tiền mặt để trả nợ hoặc tài sản thực tế bị âm so với nợ phải trả.**

**2. Hoạt động thế nào?**
Hai nguyên nhân gốc rễ dẫn đến đổ vỡ ngân hàng:
1. **Đổ vỡ do Thanh khoản (Liquidity Failure):** Bị rút tiền ồ ạt đột ngột trong khi không có ai hỗ trợ cho vay thanh khoản, ngân hàng cạn sạch tiền mặt buộc phải đóng cửa dù tài sản về dài hạn vẫn lớn hơn nợ.
2. **Đổ vỡ do Khả năng thanh toán (Insolvency Failure):** Tỷ lệ nợ xấu tăng vọt, các dự án cho vay bị vỡ nợ hàng loạt hoặc các danh mục đầu tư chứng khoán sụt giảm giá trị nghiêm trọng, làm vốn chủ sở hữu bị xóa sạch hoàn toàn ($\text{Equity} < 0$).
- Quá trình can thiệp của nhà nước: Khi phát hiện ngân hàng đứng trước bờ vực đổ vỡ, cơ quan thanh tra ngân hàng trung ương sẽ cử đoàn tiếp quản, phong tỏa toàn bộ ban điều hành cũ và kích hoạt mạng lưới bảo vệ quyền lợi người gửi tiền.

**3. Công thức & mô hình**
Chỉ số Z-Score của Altman cho ngân hàng (Bank Z-score) đo lường khoảng cách đến phá sản:

$$
Z = \frac{\text{ROA} + \text{CAR}}{\sigma(\text{ROA})}
$$

Trong đó $\text{ROA}$ là tỷ suất sinh lời trên tài sản, $\text{CAR} = \text{Equity}/\text{Assets}$ là tỷ lệ vốn chủ sở hữu trên tài sản, và $\sigma(\text{ROA})$ là độ lệch chuẩn của ROA. Chỉ số $Z$ càng thấp thì xác suất ngân hàng bị đổ vỡ phá sản càng cao.

**4. Ví dụ**
- Vụ phá sản của Ngân hàng Lehman Brothers (tháng 9/2008): Vụ đổ vỡ ngân hàng lớn nhất trong lịch sử nước Mỹ với quy mô tài sản hơn 600 tỷ USD, kích hoạt cuộc khủng hoảng tài chính toàn cầu 2008.
- Ba ngân hàng Mỹ sụp đổ liên tiếp vào đầu năm 2023: Silvergate Bank, Silicon Valley Bank (SVB) và Signature Bank; hai tháng sau đó là First Republic Bank (tài sản 229 tỷ USD) bị chính phủ Mỹ tịch thu và bán lại cho JPMorgan Chase.
- Việt Nam: Ngân hàng Nhà nước đã từng xử lý các ngân hàng đổ vỡ âm vốn nghiêm trọng (OceanBank, GPBank, CB) bằng biện pháp "mua lại bắt buộc với giá 0 đồng" vào năm 2015 để bảo đảm an toàn toàn hệ thống và giữ nguyên vẹn tiền gửi cho người dân.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Thiết lập các khung khổ quy định can thiệp sớm (Early Intervention) nhằm chẩn đoán và xử lý các khối u tài chính trước khi ngân hàng đổ vỡ hoàn toàn.
- Tranh luận: Chi phí xã hội khổng lồ - Đổ vỡ ngân hàng không chỉ làm người gửi tiền lo sợ mà còn làm cắt đứt dòng vốn tín dụng nuôi sống các doanh nghiệp địa phương, gây ra làn sóng sa thải công nhân và suy thoái kinh tế.
- Lỗi thường gặp: Tưởng rằng ngân hàng lớn thì không thể bị đổ vỡ; lịch sử tài chính chứng minh những ngân hàng hàng trăm năm tuổi (như Barings Bank sụp đổ năm 1995, Lehman Brothers 2008, Credit Suisse 2023) đều có thể sụp đổ chỉ sau một chuỗi sai lầm quản trị rủi ro.

**6. Liên kết**
- [Đột biến rút tiền](#1-đột-biến-rút-tiền--tháo-chạy-tiền-gửi-bank-runs) · [Bảo hiểm tiền gửi](#3-bảo-hiểm-tiền-gửi-deposit-insurance) · [Xử lý ngân hàng (Resolution)](#5-xử-lý-và-tái-cơ-cấu-ngân-hàng-đổ-vỡ-bank-resolution)

---

## 3. Bảo hiểm Tiền gửi (Deposit Insurance)

**1. Là gì?**
Bảo hiểm Tiền gửi (Deposit Insurance) là một định chế và cơ chế bảo vệ tài chính do chính phủ thiết lập (thường thông qua một cơ quan bảo hiểm tiền gửi quốc gia độc lập), cam kết bảo đảm hoàn trả toàn bộ hoặc một phần tiền gửi (gồm cả gốc và lãi) cho người gửi tiền cá nhân hợp pháp trong hạn mức quy định khi một tổ chức tín dụng tham gia bảo hiểm bị mất khả năng chi trả hoặc phá sản. Đây là **mảnh ghép quan trọng nhất của mạng lưới an toàn tài chính**, được thiết kế để triệt tiêu tận gốc tâm lý hoang mang rút tiền hàng loạt. Nếu chỉ nhớ một điều: **Bảo hiểm tiền gửi bảo đảm rằng dù ngân hàng có phá sản, người dân gửi tiền vẫn lấy lại được tiền của mình theo luật định.**

**2. Hoạt động thế nào?**
- Nguồn tài chính: Không lấy từ ngân sách nhà nước thông thường mà hình thành từ Quỹ bảo hiểm tiền gửi do các ngân hàng thương mại bắt buộc phải nộp phí định kỳ hàng năm (thường tính theo tỷ lệ % trên số dư tiền gửi huy động hoặc tính theo mức độ rủi ro CAMELS của từng ngân hàng).
- Cơ chế giải quyết hoảng loạn: Người gửi tiền biết rằng khoản tiền tiết kiệm của mình đã được nhà nước bảo hiểm 100% trong hạn mức, do đó khi nghe tin đồn ngân hàng gặp khó khăn, họ không có lý do gì phải hoảng loạn chen lấn đi rút tiền, giúp triệt tiêu hoàn toàn hiện tượng Bank Run.
- Hạn mức bảo hiểm (Insurance Limit): Hầu hết các quốc gia áp dụng hạn mức bảo hiểm tối đa trên mỗi người gửi tiền tại một ngân hàng để vừa bảo vệ đại đa số người gửi tiền nhỏ lẻ, vừa buộc những người gửi tiền lớn có trách nhiệm tự giám sát ngân hàng.

**3. Công thức & mô hình**
Tỷ lệ bao phủ người gửi tiền (Coverage Ratio):

$$
\text{Tỷ lệ người gửi tiền được bảo vệ 100\%} = \frac{\text{Số lượng tài khoản có số dư } \le \text{Hạn mức bảo hiểm}}{\text{Tổng số lượng tài khoản tiền gửi toàn hệ thống}} \times 100\%
$$

Chuẩn mực quốc tế của Hiệp hội Bảo hiểm Tiền gửi Quốc tế (IADI) khuyến nghị hạn mức bảo hiểm nên bao phủ được từ **90% đến 95% tổng số người gửi tiền** trong nền kinh tế.

**4. Ví dụ**
- Hoa Kỳ: Tổng công ty Bảo hiểm Tiền gửi Liên bang (FDIC - thành lập năm 1933 sau Đại Khủng hoảng) áp dụng hạn mức bảo hiểm tiêu chuẩn là **250.000 USD** cho mỗi người gửi tiền trên mỗi ngân hàng. Kể từ khi FDIC ra đời, không một người gửi tiền nào tại Mỹ bị mất một đồng tiền gửi nằm trong hạn mức bảo hiểm.
- Châu Âu: Các nước thuộc Liên minh Châu Âu áp dụng hạn mức bảo hiểm tiền gửi đồng nhất là **100.000 Euro**.
- Việt Nam: Bảo hiểm Tiền gửi Việt Nam (DIV) hoạt động theo Luật Bảo hiểm tiền gửi 2012. Theo Quyết định số 32/2021/QĐ-TTg của Thủ tướng Chính phủ, hạn mức trả tiền bảo hiểm tối đa hiện nay là **125 triệu đồng** cho một cá nhân tại một tổ chức tín dụng (đang có đề xuất nâng lên mức 300–400 triệu đồng để phù hợp hơn với tăng trưởng thu nhập GDP bình quân đầu người).

**5. Ứng dụng & tranh luận**
- Ứng dụng: Duy trì niềm tin công chúng vào toàn bộ hệ thống ngân hàng và thúc đẩy huy động tiết kiệm xã hội.
- Tác dụng phụ - Rủi ro đạo đức (Moral Hazard): Người gửi tiền ỷ lại vào bảo hiểm nên không thèm quan tâm ngân hàng kinh doanh lành mạnh hay liều lĩnh, chỉ chăm chăm chọn ngân hàng nào trả lãi suất cao nhất để gửi; bản thân ngân hàng cũng liều lĩnh đầu cơ hơn vì biết đã có bảo hiểm gánh đỡ.
- Lỗi thường gặp: Tưởng rằng bảo hiểm tiền gửi áp dụng cho mọi đối tượng; các khoản tiền gửi của ban lãnh đạo ngân hàng, cổ đông lớn hoặc tiền gửi của các định chế tài chính khác thường bị loại trừ khỏi phạm vi bảo hiểm.

**6. Liên kết**
- [Đột biến rút tiền](#1-đột-biến-rút-tiền--tháo-chạy-tiền-gửi-bank-runs) · [Đổ vỡ ngân hàng](#2-sự-đổ-vỡ--phá-sản-ngân-hàng-bank-failure) · [Rủi ro đạo đức](../06_Financial_Regulation_and_Stability/03_Prudential_Safeguards_and_Moral_Hazard.md)

---

## 4. Cứu trợ Ngân hàng từ Ngân sách (Bank Bailout)

**1. Là gì?**
Cứu trợ Ngân hàng từ Ngân sách (Bank Bailout) là hành động mà trong đó chính phủ hoặc cơ quan công quyền sử dụng trực tiếp các nguồn lực công (tiền thuế của người dân, quỹ dự trữ ngân sách quốc gia, hoặc phát hành thêm trái phiếu chính phủ) để bơm vốn trực tiếp, mua lại các khoản nợ xấu hoặc bảo lãnh nghĩa vụ nợ nhằm cứu sống một ngân hàng lớn đang đứng trước bờ vực sụp đổ phá sản. Bailout được thực hiện khi cơ quan quản lý nhận định rằng ngân hàng này thuộc diện "Quá lớn để sụp đổ" (Too Big to Fail) và sự đổ vỡ của nó sẽ kéo sập toàn bộ nền kinh tế quốc gia. Nếu chỉ nhớ một điều: **Bailout là việc chính phủ lấy tiền thuế của dân để cứu các ngân hàng phá sản nhằm ngăn ngừa thảm họa kinh tế.**

**2. Hoạt động thế nào?**
Các hình thức Bailout phổ biến:
1. **Bơm vốn chủ sở hữu (Equity Injection):** Chính phủ dùng tiền ngân sách mua cổ phần ưu đãi hoặc cổ phần phổ thông của ngân hàng gặp nạn, biến ngân hàng thành doanh nghiệp có sở hữu nhà nước tạm thời (Quốc hữu hóa một phần/toàn phần).
2. **Mua lại tài sản độc hại (Bad Bank Model):** Chính phủ thành lập một "Ngân hàng xấu" (Bad Bank) bằng tiền công để mua lại toàn bộ danh mục nợ xấu bất động sản của ngân hàng theo mức giá được hỗ trợ, giúp ngân hàng sạch bảng cân đối kế toán.
3. **Bảo lãnh toàn diện (Blanket Guarantee):** Chính phủ tuyên bố bảo lãnh vô điều kiện 100% mọi khoản nợ và tiền gửi của ngân hàng, bất kể vượt trần bảo hiểm tiền gửi.

**3. Công thức & mô hình**
Chi phí tài khóa ròng của gói cứu trợ Bailout (Fiscal Cost):

$$
\text{Tổn thất ngân sách ròng} = \text{Tổng tiền ngân sách bỏ ra cứu trợ} - \text{Giá trị thu hồi sau này khi bán lại cổ phần/tài sản}
$$

Tại nhiều cuộc khủng hoảng, chi phí Bailout có thể chiếm từ $5\%$ đến $30\%$ GDP của quốc gia, làm nợ công tăng vọt.

**4. Ví dụ**
- Chương trình Cứu trợ Tài sản Độc hại của Mỹ (TARP, 2008): Quốc hội Mỹ đã thông qua gói ngân sách lịch sử 700 tỷ USD để bơm vốn trực tiếp vào các ngân hàng Phố Wall (Citigroup, Bank of America) và tập đoàn bảo hiểm AIG nhằm ngăn chặn sự sụp đổ của hệ thống tài chính toàn cầu.
- Châu Âu trong khủng hoảng nợ công: Chính phủ Ireland đã phải chi hàng chục tỷ Euro để cứu trợ hệ thống ngân hàng tư nhân vỡ nợ bất động sản; hành động này đã đẩy thâm hụt ngân sách của Ireland lên mức kỷ lục 32% GDP năm 2010 và biến khủng hoảng ngân hàng thành khủng hoảng nợ công quốc gia.
- Sự kiện SVB (tháng 3/2023): Dù Fed và FDIC tuyên bố không dùng tiền thuế của dân để cứu ban lãnh đạo và cổ đông SVB (cổ đông mất trắng), nhưng việc kích hoạt điều khoản rủi ro hệ thống để chi trả 100% tiền gửi không được bảo hiểm thực chất vẫn là một hình thức can thiệp cứu trợ ngầm.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Biện pháp khẩn cấp tối hậu để dập tắt cơn hỏa hoạn tài chính, ngăn ngừa hiệu ứng domino hủy diệt hàng loạt doanh nghiệp và người lao động.
- Sự phẫn nộ xã hội sâu sắc: Tạo ra hiện tượng bất công tột cùng: **"Tư nhân hóa lợi nhuận, xã hội hóa thua lỗ" (Privatizing profits and socializing losses)** - Khi kinh tế thịnh vượng, các chủ ngân hàng chia nhau tiền thưởng hàng triệu USD; khi kinh tế khủng hoảng thua lỗ, người dân đóng thuế lại phải gánh nợ thay cho họ; dung dưỡng rủi ro đạo đức nghiêm trọng.
- Lỗi thường gặp: Nghĩ rằng Bailout lúc nào cũng làm mất trắng tiền ngân sách; trong nhiều trường hợp (như chương trình TARP tại Mỹ), sau khi hệ thống ổn định, chính phủ đã thoái vốn cổ phần và thu hồi lại được gần như toàn bộ số tiền gốc kèm một khoản lãi nhỏ nộp về kho bạc.

**6. Liên kết**
- [Tái cấu trúc tự giải cứu (Bail-in)](#5-xử-lý-và-tái-cơ-cấu-ngân-hàng-đổ-vỡ-bank-resolution) · [Quá lớn để sụp đổ (TBTF)](07_Prudential_Ratios_Stress_Testing_and_Basel.md) · [Rủi ro đạo đức](../06_Financial_Regulation_and_Stability/03_Prudential_Safeguards_and_Moral_Hazard.md)

---

## 5. Xử lý và Tái cơ cấu Ngân hàng Đổ vỡ (Bank Resolution)

**1. Là gì?**
Xử lý và Tái cơ cấu Ngân hàng Đổ vỡ (Bank Resolution) là một khung khổ pháp lý và quy trình kỹ thuật đặc biệt cho phép cơ quan quản lý (NHTW, Cơ quan Xử lý Ngân hàng) can thiệp, cơ cấu lại hoặc giải thể một ngân hàng đang trên bờ vực phá sản một cách có trật tự, nhằm bảo vệ các chức năng huyết mạch sống còn của ngân hàng đó mà **không làm đổ vỡ thị trường tài chính và không phải dùng tiền thuế của người dân để cứu trợ**. Trọng tâm của khuôn khổ hiện đại hậu 2008 là cơ chế **"Tự giải cứu nội bộ" (Bail-in)**: bắt chính các cổ đông và chủ nợ của ngân hàng phải gánh chịu tổn thất trước tiên. Nếu chỉ nhớ một điều: **Bank Resolution là cơ chế xử lý phá sản ngân hàng có kiểm soát, bắt người đầu tư ngân hàng phải chịu lỗ thay vì bắt người dân đóng thuế gánh hộ.**

**2. Hoạt động thế nào?**
Các công cụ xử lý ngân hàng chuẩn mực theo khuyến nghị của FSB (Financial Stability Board):
1. **Cơ chế Tự giải cứu (Bail-in Tool):** Xóa nợ hoặc chuyển đổi các khoản trái phiếu thứ cấp, nợ không bảo đảm thành cổ phiếu mới của ngân hàng; cổ đông cũ bị xóa sổ hoặc pha loãng tối đa; ngân hàng được tái tạo nguồn vốn mới từ chính túi tiền của các chủ nợ mà không cần tiền chính phủ.
2. **Mua lại và Tiếp nhận (Purchase & Assumption - P&A):** Cơ quan quản lý đứng ra bán lại danh mục tiền gửi tốt và tài sản lành mạnh của ngân hàng vỡ nợ cho một ngân hàng khỏe mạnh khác tiếp quản ngay trong kỳ nghỉ cuối tuần.
3. **Thành lập Ngân hàng Cầu nối (Bridge Bank):** Nhà nước lập một pháp nhân ngân hàng tạm thời để duy trì các giao dịch thanh toán thiết yếu cho khách hàng trong khi tìm kiếm người mua dài hạn.
4. **Cách ly tài sản (Asset Separation):** Chuyển nợ xấu sang công ty quản lý tài sản chuyên trách (AMC).

**3. Công thức & mô hình**
Trình tự hấp thụ tổn thất theo nguyên tắc "Không chủ nợ nào bị đối xử tệ hơn khi thanh lý" (No Creditor Worse Off - NCWO):

$$
\text{Thứ tự gánh chịu tổn thất:} \quad \text{Cổ phiếu phổ thông (CET1)} \longrightarrow \text{Trái phiếu AT1 (CoCos)} \longrightarrow \text{Trái phiếu Cấp 2} \longrightarrow \text{Nợ không bảo đảm lớn} \longrightarrow \text{Tiền gửi không bảo hiểm}
$$

Tiền gửi được bảo hiểm của cá nhân luôn được đặt ở vị trí ưu tiên tối cao và hoàn toàn miễn nhiễm với cơ chế Bail-in.

**4. Ví dụ**
- Thương vụ xử lý Credit Suisse (tháng 3/2023): Cơ quan quản lý Thụy Sĩ đã kích hoạt quy trình Resolution trong vòng 48 giờ cuối tuần, xóa sổ hoàn toàn 17 tỷ USD trái phiếu AT1 của các nhà đầu tư tổ chức (Bail-in) và tổ chức thương vụ sáp nhập khẩn cấp vào UBS với giá 3,25 tỷ USD, bảo vệ toàn vẹn người gửi tiền và ngăn ngừa khủng hoảng toàn cầu.
- Vụ ngân hàng Silicon Valley Bank (Mỹ, 2023): FDIC thành lập một Ngân hàng Cầu nối (Silicon Valley Bridge Bank, N.A.) để tiếp quản toàn bộ hoạt động vào sáng thứ Hai, sau đó tổ chức đấu thầu bán lại toàn bộ tài sản cho First Citizens Bank.
- Việt Nam: Luật Các tổ chức tín dụng 2024 quy định chi tiết 5 phương án cơ cấu lại tổ chức tín dụng được kiểm soát đặc biệt: (1) Phương án phục hồi; (2) Phương án sáp nhập, hợp nhất, chuyển nhượng toàn bộ phần vốn góp; (3) Phương án chuyển giao bắt buộc; (4) Phương án giải thể; (5) Phương án phá sản.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Tiêu chuẩn toàn cầu mới ngăn chặn triệt để tình trạng "Quá lớn để sụp đổ" và chấm dứt kỷ nguyên dùng tiền ngân sách cứu ngân hàng (End of Bailouts).
- Tranh luận: Việc kích hoạt Bail-in có thể gây hoảng loạn trên thị trường trái phiếu ngân hàng (như vụ tranh chấp kiện tụng sau khi trái phiếu AT1 của Credit Suisse bị xóa sổ); các chủ nợ tổ chức có thể bán tháo chứng khoán của các ngân hàng khác do lo sợ bị vạ lây.
- Lỗi thường gặp: Lo sợ rằng cơ chế Bail-in sẽ lấy tiền gửi tiết kiệm của dân nghèo; tiền gửi tiết kiệm cá nhân trong hạn mức bảo hiểm luôn được luật pháp bảo vệ tuyệt đối và không bao giờ bị mang ra làm công cụ Bail-in.

**6. Liên kết**
- [Bảo hiểm tiền gửi](#3-bảo-hiểm-tiền-gửi-deposit-insurance) · [Cứu trợ ngân sách (Bailout)](#4-cứu-trợ-ngân-hàng-từ-ngân-sách-bank-bailout) · [Ngân hàng có tầm quan trọng hệ thống (SIBs)](07_Prudential_Ratios_Stress_Testing_and_Basel.md)

---

## Câu hỏi tự kiểm tra

1. Phân tích hiện tượng Đột biến Rút tiền (Bank Run) dưới góc độ Lý thuyết Trò chơi qua Mô hình Diamond-Dybvig. Tại sao nó lại là "lời tiên tri tự ứng nghiệm"?
2. Khái niệm "Digital Bank Run" trong kỷ nguyên mạng xã hội và ngân hàng di động khác gì so với các cuộc Bank Run truyền thống? Lấy ví dụ về vụ sụp đổ của Silicon Valley Bank (SVB).
3. Bảo hiểm Tiền gửi vận hành như thế nào để triệt tiêu động cơ rút tiền hoảng loạn của người gửi tiền?
4. Phân biệt sự khác nhau căn bản giữa Cứu trợ từ ngân sách (Bailout) và Tự giải cứu nội bộ (Bail-in).
5. Trình bày các phương án cơ cấu lại ngân hàng bị kiểm soát đặc biệt theo quy định của Luật Các tổ chức tín dụng Việt Nam năm 2024.

---

## Ghi chú nguồn

- Diamond, D. W., & Dybvig, P. H. (1983). "Bank Runs, Deposit Insurance, and Liquidity", *Journal of Political Economy*, 91(3).
- Financial Stability Board (FSB): *Key Attributes of Effective Resolution Regimes for Financial Institutions*.
- Federal Deposit Insurance Corporation (FDIC): *Managing the Crisis: The FDIC and RTC Experience*.
- Quốc hội Việt Nam: Luật Bảo hiểm tiền gửi số 06/2012/QH13 và Luật Các tổ chức tín dụng số 32/2024/QH15.
- Thủ tướng Chính phủ Việt Nam: Quyết định số 32/2021/QĐ-TTg về hạn mức trả tiền bảo hiểm tiền gửi.