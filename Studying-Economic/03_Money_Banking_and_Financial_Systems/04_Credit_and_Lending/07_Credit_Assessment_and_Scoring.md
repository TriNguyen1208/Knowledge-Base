# Chuyên đề 4.7: Thẩm định Tín dụng, Điểm số và Xếp hạng Tín nhiệm

Chuyên đề này phân tích toàn bộ hệ thống đánh giá uy tín tín dụng của con người và doanh nghiệp trong nền kinh tế hiện đại: từ khái niệm cốt lõi Uy tín tín dụng (Creditworthiness), Lịch sử và Báo cáo tín dụng (CIC / Equifax), mô hình thuật toán Điểm tín dụng (FICO Score), cho đến thang Xếp hạng tín nhiệm quốc tế (Moody's, S&P, Fitch).

> Câu hỏi xuyên suốt: Tại sao một con số duy nhất từ 300 đến 850 (Điểm tín dụng) lại có quyền năng quyết định việc bạn có mua được nhà, mua được ô tô hay thậm chí là được tuyển dụng vào các tập đoàn lớn hay không?

---

## 1. Mức độ Uy tín Tín dụng (Creditworthiness)

**1. Là gì?**
Mức độ Uy tín Tín dụng (Creditworthiness) là sự đánh giá tổng hợp mang tính định lượng và định tính của một tổ chức cho vay về **khả năng thực tế và thiện chí đạo đức của một người đi vay (cá nhân hoặc doanh nghiệp) trong việc hoàn trả đầy đủ, đúng hạn toàn bộ các nghĩa vụ nợ gốc và lãi** theo cam kết hợp đồng. Uy tín tín dụng là "tấm thẻ căn cước tài chính" quyết định xem bạn có được ngân hàng cho vay tiền hay không, được vay bao nhiêu và phải chịu mức lãi suất đắt hay rẻ. Nếu chỉ nhớ một điều: **Uy tín tín dụng là câu trả lời của ngân hàng cho câu hỏi: Người này có đáng tin để cho mượn tiền hay không?**

**2. Hoạt động thế nào?**
- Được đánh giá thông qua sự kết hợp của 3 yếu tố nền tảng:
  1. *Khả năng tài chính (Financial Ability):* Thu nhập ròng, tính ổn định của dòng tiền kinh doanh, tỷ lệ nợ trên thu nhập (DTI), giá trị tài sản ròng.
  2. *Thiện chí và thói quen trả nợ (Willingness to Pay):* Thể hiện qua lịch sử thanh toán trong quá khứ; người có thu nhập rất cao nhưng có thói quen chây ì, trễ hạn hóa đơn vẫn bị xếp vào diện uy tín tín dụng kém.
  3. *Tài sản bảo đảm dự phòng (Collateral):* Nguồn thu hồi vốn thứ cấp khi có biến cố bất khả kháng.
- Định giá dựa trên mức độ uy tín (Risk-based Pricing): Người có uy tín tín dụng xuất sắc sẽ được ngân hàng săn đón, cấp hạn mức vay lớn với lãi suất ưu đãi thấp nhất; người có uy tín kém sẽ bị từ chối thẳng thừng hoặc chỉ được vay với lãi suất "cắt cổ" kèm điều kiện thế chấp ngặt nghèo.

**3. Công thức & mô hình**
Xác suất vỡ nợ (Probability of Default - $PD$):

$$
\text{Creditworthiness} \propto \frac{1}{\text{Probability of Default (PD)}}
$$

Mô hình hồi quy Logistic chuẩn hóa ước tính xác suất trả nợ thành công ($p$):

$$
\ln\left(\frac{p}{1 - p}\right) = \beta_0 + \beta_1 (\text{Income}) + \beta_2 (\text{Credit History}) - \beta_3 (\text{Debt-to-Income}) + \epsilon
$$

**4. Ví dụ**
- Một bác sĩ công tác 10 năm tại bệnh viện công lập lớn, không nợ nần, sở hữu nhà riêng: Có mức uy tín tín dụng cực cao; mọi ngân hàng đều sẵn sàng phê duyệt khoản vay 1–2 tỷ đồng giải ngân trong ngày.
- Ngược lại, một cá nhân có thu nhập 50 triệu/tháng nhưng thường xuyên bị phạt chậm trả thẻ tín dụng và từng có một khoản nợ quá hạn 120 ngày bị ghi nhận trên hệ thống CIC: Mức uy tín tín dụng bị đánh giá là rất tồi tệ; hồ sơ vay mua nhà sẽ bị ngân hàng từ chối ngay lập tức bất chấp thu nhập hiện tại cao.
- Trái phiếu quốc tế: Khi Chính phủ Việt Nam hoặc các tập đoàn lớn phát hành trái phiếu ra thị trường quốc tế, mức độ uy tín tín dụng quốc gia sẽ quyết định mức lãi suất phát hành mà Việt Nam phải trả cho các nhà đầu tư nước ngoài.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Tiêu chí lọc rủi ro đầu vào của toàn bộ ngành ngân hàng, bảo hiểm, cho thuê nhà và phát hành thẻ tín dụng.
- Tranh luận: Rủi ro phân biệt đối xử và định kiến thuật toán (Algorithmic Bias) - Các mô hình chấm điểm tự động có thể vô tình phân biệt đối xử với người nghèo, người dân tộc thiểu số hoặc lao động tự do trong nền kinh tế phi chính thức do họ không có sao kê bảng lương chuẩn mực.
- Lỗi thường gặp: Tưởng rằng không bao giờ vay nợ ai thì uy tín tín dụng sẽ cao nhất; người chưa từng vay nợ bao giờ được gọi là "Hồ sơ tín dụng trắng" (Thin file), ngân hàng không có dữ liệu lịch sử để đánh giá nên uy tín tín dụng thực tế lại bị xếp ở mức trung bình thấp.

**6. Liên kết**
- [Lịch sử tín dụng](#3-lịch-sử-tín-dụng-credit-history) · [Điểm tín dụng](#2-điểm-tín-dụng-credit-score) · [Xếp hạng tín nhiệm](#5-xếp-hạng-tín-nhiệm-credit-rating)

---

## 2. Điểm Tín dụng (Credit Score)

**1. Là gì?**
Điểm Tín dụng (Credit Score) là một chỉ số số học ba chữ số (thường dao động trong thang đo chuẩn từ **300 đến 850 điểm**) do các cơ quan báo cáo tín dụng hoặc thuật toán tài chính chuyên trách tính toán, nhằm biểu thị cô đọng mức độ rủi ro tín dụng và xác suất một cá nhân sẽ thanh toán các nghĩa vụ nợ đúng hạn trong tương lai. Mô hình chấm điểm tín dụng phổ biến và quyền lực nhất thế giới hiện nay là **Điểm FICO (FICO Score)** do tập đoàn Fair Isaac Corporation phát minh năm 1989. Nếu chỉ nhớ một điều: **Điểm tín dụng là "điểm số hạnh kiểm tài chính" của bạn: điểm càng cao thì vay tiền càng dễ và lãi suất càng rẻ.**

**2. Hoạt động thế nào?**
- Cơ cấu 5 thành phần cấu tạo nên Điểm FICO chuẩn mực quốc tế:
  1. **Lịch sử thanh toán (Payment History - 35%):** Bạn có thanh toán các hóa đơn và khoản vay đúng hạn hay không; có khoản nợ nào bị trễ hạn, thu hồi nợ hay phá sản không (yếu tố quan trọng nhất).
  2. **Tỷ lệ sử dụng hạn mức tín dụng (Amounts Owed / Credit Utilization - 30%):** Bạn đang sử dụng bao nhiêu % hạn mức thẻ tín dụng có sẵn (càng tiêu ít điểm càng cao).
  3. **Độ dài lịch sử tín dụng (Length of Credit History - 15%):** Các tài khoản tín dụng của bạn đã mở được bao lâu (tài khoản mở càng lâu đời điểm càng cao).
  4. **Các loại hình tín dụng đang sử dụng (Credit Mix - 10%):** Danh mục tín dụng đa dạng và lành mạnh (kết hợp cả thẻ tín dụng, vay trả góp mua xe, vay mua nhà).
  5. **Tín dụng mới mở (New Credit / Inquiries - 10%):** Tần suất bạn nộp đơn xin mở thẻ hoặc vay tiền mới gần đây (mở quá nhiều thẻ cùng một lúc sẽ bị trừ điểm).
- Phân tầng xếp hạng điểm tín dụng:
  - *800 – 850 (Xuất sắc - Exceptional):* Lãi suất rẻ nhất thị trường.
  - *740 – 799 (Rất tốt - Very Good).*
  - *670 – 739 (Tốt / Trung bình - Good).*
  - *580 – 669 (Kém / Dưới chuẩn - Fair).*
  - *300 – 579 (Rất kém / Rủi ro cao - Poor):* Hầu hết bị từ chối cấp tín dụng.

**3. Công thức & mô hình**
Hàm trọng số cấu trúc của mô hình FICO:

$$
\text{FICO Score} = 0,35 \cdot S_{\text{Payment}} + 0,30 \cdot S_{\text{Utilization}} + 0,15 \cdot S_{\text{Length}} + 0,10 \cdot S_{\text{Mix}} + 0,10 \cdot S_{\text{New}}
$$

Tại Việt Nam, Trung tâm Thông tin Tín dụng Quốc gia (CIC) chấm điểm tín dụng cá nhân trên thang điểm từ **403 đến 706 điểm**, chia thành 5 phân nhóm khách hàng từ Rủi ro rất thấp đến Rủi ro rất cao.

**4. Ví dụ**
- Tác động thực tế của điểm tín dụng lên khoản vay mua nhà 300.000 USD tại Mỹ:
  - Người có điểm FICO 760+: Được duyệt lãi suất ưu đãi 6,5%/năm $\rightarrow$ Tiền đóng hàng tháng: 1.896 USD.
  - Người có điểm FICO 620: Bị áp lãi suất rủi ro 8,1%/năm $\rightarrow$ Tiền đóng hàng tháng: 2.223 USD.
  - Chênh lệch: Chỉ vì điểm tín dụng thấp hơn, người thứ hai phải trả thêm **327 USD mỗi tháng**, tương đương tổn thất thêm hơn **117.000 USD (hơn 2,8 tỷ VND) tiền lãi** trong suốt 30 năm vay mua nhà!
- Điểm tín dụng tại Việt Nam: Ứng dụng "CIC Mobile" cho phép mỗi công dân tự tra cứu điểm tín dụng cá nhân miễn phí định kỳ hàng năm để biết xếp hạng rủi ro của mình trước khi đi vay ngân hàng.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Tự động hóa quy trình phê duyệt thẻ tín dụng và khoản vay tiêu dùng trong vài giây mà không cần sự can thiệp thủ công của con người.
- Tranh luận: Điểm tín dụng tại Mỹ bị lạm dụng sang cả các lĩnh vực phi tài chính: chủ nhà từ chối cho thuê nhà, công ty bảo hiểm tăng phí bảo hiểm ô tô, và nhà tuyển dụng từ chối tuyển nhân sự chỉ vì điểm tín dụng thấp.
- Lỗi thường gặp: Kiểm tra điểm tín dụng cá nhân làm giảm điểm; việc bạn tự tra cứu điểm số của mình (Soft Inquiry) hoàn toàn không làm giảm điểm; chỉ khi các ngân hàng gửi yêu cầu thẩm định hồ sơ vay mới (Hard Inquiry) thì điểm số mới bị trừ nhẹ 3–5 điểm.

**6. Liên kết**
- [Lịch sử tín dụng](#3-lịch-sử-tín-dụng-credit-history) · [Báo cáo tín dụng](#4-báo-cáo-tín-dụng-credit-report) · [Tỷ lệ sử dụng tín dụng](06_Credit_Cards_and_Revolving_Lines.md)

---

## 3. Lịch sử Tín dụng (Credit History)

**1. Là gì?**
Lịch sử Tín dụng (Credit History) là một bản hồ sơ lưu trữ toàn diện theo trình tự thời gian về toàn bộ các hành vi tài chính liên quan đến nợ vay của một cá nhân hoặc doanh nghiệp, bao gồm: tất cả các tài khoản thẻ tín dụng và khoản vay từng mở trong quá khứ, hạn mức được cấp, số dư nợ theo từng tháng, và quan trọng nhất là **hồ sơ theo dõi việc thanh toán đúng hạn hay trễ hạn đối với từng khoản nợ đó**. Lịch sử tín dụng chính là cuốn "nhật ký tài chính" ghi lại sự trung thực và tính kỷ luật tiền bạc của bạn. Nếu chỉ nhớ một điều: **Lịch sử tín dụng là bằng chứng thực tế cho thấy trong quá khứ bạn có phải là người giữ đúng lời hứa trả nợ hay không.**

**2. Hoạt động thế nào?**
- Cơ chế thu thập dữ liệu tự động: Hàng tháng, toàn bộ các ngân hàng thương mại, công ty tài chính, tổ chức tín dụng vi mô bắt buộc phải gửi dữ liệu giao dịch chi tiết của toàn bộ khách hàng về cho Cơ quan Thông tin Tín dụng Quốc gia (CIC tại Việt Nam) hoặc các cơ quan tín dụng tư nhân (Credit Bureaus: Experian, Equifax, TransUnion tại Mỹ).
- Thời gian lưu vết lịch sử:
  - Các thông tin thanh toán tốt: Thường được lưu giữ vĩnh viễn hoặc trong nhiều năm để xây dựng uy tín.
  - Các vết nhơ tiêu cực (Chậm trả, nợ quá hạn, nợ xấu nhóm 3–5): Bị "giam vết" trên hệ thống từ **3 đến 5 năm** (tại Việt Nam) hoặc **7 đến 10 năm** (đối với phá sản cá nhân tại Mỹ) kể từ ngày con nợ thanh toán xong toàn bộ số nợ quá hạn.
- Tính liên thông toàn quốc: Bạn không thể "trốn nợ" từ ngân hàng này sang vay ngân hàng khác; chỉ cần một lần trễ hạn tại một công ty tài chính nhỏ, toàn bộ các ngân hàng khác đều lập tức nhìn thấy vết nhơ đó trên màn hình máy tính của họ.

**3. Công thức & mô hình**
Không có công thức toán học riêng; lịch sử tín dụng được mã hóa thành các chuỗi dữ liệu trạng thái tài khoản hàng tháng:

$$
\text{Chuỗi lịch sử thanh toán 24 tháng} = [C, C, C, 30, C, C, 60, 90, \dots]
$$

Trong đó:
- $C$ (Current): Trả nợ đúng hạn.
- $30, 60, 90$: Số ngày quá hạn thanh toán tương ứng.

**4. Ví dụ**
- Một sinh viên tại TP. Hồ Chí Minh vay trả góp mua điện thoại 10 triệu đồng qua công ty tài chính, do chủ quan quên đóng tiền đợt cuối 500.000 đồng quá hạn 120 ngày (rơi vào Nợ nhóm 3). Năm năm sau khi ra trường đi làm có lương 30 triệu/tháng và muốn vay ngân hàng mua nhà, hồ sơ lập tức bị ngân hàng từ chối vì vết nhơ nợ xấu 500.000 đồng từ thời sinh viên vẫn còn lưu trên lịch sử tín dụng CIC.
- Xây dựng lịch sử tín dụng từ sớm: Tại các nước phát triển, phụ huynh thường hướng dẫn con mở thẻ tín dụng bảo đảm (Secured Credit Card) ngay từ năm 18 tuổi, chỉ quẹt vài đồng tiền xăng mỗi tháng và trả đúng hạn để tích lũy lịch sử tín dụng dày dạn, giúp ích cho việc mua nhà sau này.
- Sai sót dữ liệu lịch sử tín dụng: Trường hợp cá nhân bị kẻ gian đánh cắp thông tin căn cước công dân để mở thẻ vay tiền qua app bùng nợ; nạn nhân bị dính nợ xấu "oan" trên hệ thống CIC và phải làm thủ tục khiếu nại, xác minh với công an để xóa vết nhơ lịch sử tín dụng.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Loại bỏ hoàn toàn chi phí thẩm định thủ công rườm rà, ngăn chặn hành vi vay mượn đa ngân hàng để lừa đảo chiếm đoạt tài sản.
- Quyền được lãng quên (Right to be Forgotten): Tranh cãi về việc lưu giữ vết nhơ nợ xấu quá lâu có thể triệt tiêu cơ hội làm lại cuộc đời của những người từng lầm lỡ hoặc gặp biến cố phá sản do bệnh tật, dịch bệnh khách quan.
- Lỗi thường gặp: Nghĩ rằng cứ trả hết nợ xấu là thông tin sẽ biến mất ngay; sau khi tất toán nợ xấu, hệ thống CIC vẫn lưu vết thông tin tiêu cực đó trong vòng 5 năm tiếp theo trước khi chính thức xóa trắng hoàn toàn.

**6. Liên kết**
- [Báo cáo tín dụng](#4-báo-cáo-tín-dụng-credit-report) · [Điểm tín dụng](#2-điểm-tín-dụng-credit-score) · [Nợ quá hạn (Delinquency)](08_Underwriting_Ratios_and_Credit_Risk.md)

---

## 4. Báo cáo Tín dụng (Credit Report)

**1. Là gì?**
Báo cáo Tín dụng (Credit Report) là một văn bản điện tử hoặc bản in chính thức do cơ quan thông tin tín dụng (như CIC tại Việt Nam hoặc Equifax, Experian, TransUnion tại quốc tế) xuất bản, tổng hợp chi tiết và toàn diện toàn bộ lịch sử vay mượn, thông tin định danh cá nhân, các khoản nợ hiện tại và quá khứ, tình trạng nợ xấu, tài sản bảo đảm và danh sách các định chế tài chính từng tra cứu thông tin của một người đi vay cụ thể. Báo cáo tín dụng là **tài liệu pháp lý gốc** mà các thuật toán sử dụng để tính ra Điểm tín dụng và các chuyên viên ngân hàng dùng để thẩm định hồ sơ vay vốn. Nếu chỉ nhớ một điều: **Báo cáo tín dụng là bản "học bạ tài chính" chi tiết từng dòng phản ánh toàn bộ các món nợ của bạn.**

**2. Hoạt động thế nào?**
Bốn phần cấu thành chuẩn mực của một Bản Báo cáo Tín dụng:
1. **Thông tin định danh cá nhân (Personal Information):** Họ tên, số căn cước công dân/hộ chiếu, ngày tháng năm sinh, địa chỉ thường trú và nơi làm việc hiện tại.
2. **Lịch sử quan hệ tín dụng và Dư nợ hiện tại:** Danh sách tất cả các hợp đồng vay và thẻ tín dụng đang mở tại từng ngân hàng; dư nợ gốc, hạn mức tín dụng, kỳ hạn và nhóm nợ phân loại (từ Nhóm 1 đến Nhóm 5).
3. **Lịch sử thanh toán nợ xấu và tranh chấp pháp lý:** Chi tiết các lần bị quá hạn nợ trong 3–5 năm gần nhất, các khoản nợ đã bán cho VAMC hoặc các bản án phá sản, thế chấp tài sản tại tòa án.
4. **Lịch sử tra cứu thông tin (Inquiries):** Danh sách các ngân hàng hoặc tổ chức tín dụng đã thực hiện tra cứu báo cáo tín dụng của bạn trong 1–2 năm qua (tra cứu xin vay mới).

**3. Công thức & mô hình**
Không sử dụng công thức toán học; đây là một hệ thống cơ sở dữ liệu quan hệ (Relational Database) chuẩn hóa. Sơ đồ luồng dữ liệu thông tin tín dụng quốc gia:

$$
\text{Tổ chức Tín dụng (NHTM, FinTech)} \xrightarrow{\text{Báo cáo dữ liệu hàng tháng}} \textbf{Trung tâm Thông tin Tín dụng (CIC / Credit Bureau)} \xrightarrow{\text{Xuất Báo cáo Tín dụng}} \text{Cán bộ Thẩm định Tín dụng}
$$

**4. Ví dụ**
- Báo cáo tín dụng CIC cá nhân tại Việt Nam: Bản báo cáo thể hiện rõ: Mã khách hàng CIC, tình trạng quan hệ tín dụng (ví dụ: đang vay tại MB 500 triệu nợ nhóm 1, có thẻ tín dụng tại Techcombank hạn mức 50 triệu dư nợ 10 triệu nợ nhóm 1; không có nợ cần chú ý và nợ xấu trong 5 năm gần nhất); kết luận: Khách hàng đủ điều kiện cấp tín dụng thông thường.
- Vụ rò rỉ dữ liệu lịch sử tại Equifax (Mỹ, 2017): Vụ tấn công mạng chấn động thế giới làm lộ thông tin cá nhân và báo cáo tín dụng của hơn 147 triệu người dân Mỹ, dẫn đến việc công ty phải bồi thường hàng trăm triệu USD.
- Quyền lợi công dân: Theo Luật, mỗi công dân Việt Nam đều có quyền yêu cầu CIC cung cấp bản Báo cáo tín dụng về chính bản thân mình định kỳ hàng năm và có quyền khiếu nại yêu cầu chỉnh sửa nếu phát hiện thông tin bị ghi nhận sai lệch.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Bắt buộc phải có trong 100% hồ sơ xin vay vốn ngân hàng, mở thẻ tín dụng hoặc xin bảo lãnh tài chính.
- Tranh luận: Rủi ro lộ lọt bí mật đời tư tài chính và nguy cơ thông tin tín dụng bị mua bán trái phép cho các công ty quảng cáo rác, dịch vụ đòi nợ thuê.
- Lỗi thường gặp: Không kiểm tra báo cáo tín dụng trước khi nộp hồ sơ vay mua nhà; bạn nên chủ động kiểm tra báo cáo CIC của mình trước vài tháng để phát hiện và xử lý kịp thời các khoản nợ thẻ tín dụng cũ bị bỏ quên hoặc sai sót dữ liệu.

**6. Liên kết**
- [Lịch sử tín dụng](#3-lịch-sử-tín-dụng-credit-history) · [Điểm tín dụng](#2-điểm-tín-dụng-credit-score) · [CIC và giám sát tín dụng](../06_Financial_Regulation_and_Stability/01_Regulatory_Architecture_and_Supervision.md)

---

## 5. Xếp hạng Tín nhiệm (Credit Rating)

**1. Là gì?**
Xếp hạng Tín nhiệm (Credit Rating) là ý kiến đánh giá chuyên nghiệp, độc lập và có tính chuẩn hóa quốc tế của một Tổ chức Xếp hạng Tín nhiệm (Credit Rating Agency - CRA) về **khả năng và xác suất thực hiện đầy đủ nghĩa vụ nợ tài chính của một thực thể phát hành (Chính phủ quốc gia, Chính quyền địa phương, Ngân hàng, Tập đoàn doanh nghiệp)** hoặc đối với một công cụ nợ cụ thể (Trái phiếu, chứng chỉ tiền gửi). Khác với Điểm tín dụng (FICO Score) dành cho cá nhân, Xếp hạng tín nhiệm được đo lường bằng hệ thống các ký tự chữ cái (từ AAA, AA, A, BBB đến C, D) và áp dụng cho các **chủ thể phát hành nợ lớn trên thị trường vốn toàn cầu**. Nếu chỉ nhớ một điều: **Xếp hạng tín nhiệm là con dấu đo độ uy tín của trái phiếu và chính phủ trên thị trường tài chính quốc tế.**

**2. Hoạt động thế nào?**
- "Bộ Ba Quyền lực" (Big Three) thống trị hơn 85% thị trường xếp hạng tín nhiệm toàn cầu:
  1. **Moody's Investors Service.**
  2. **Standard & Poor's (S&P Global Ratings).**
  3. **Fitch Ratings.**
- Thang đo xếp hạng chia làm hai nhóm ranh giới sống còn:
  - **Hạng Đầu tư (Investment Grade - từ AAA đến BBB- của S&P/Fitch; từ Aaa đến Baa3 của Moody's):** Độ an toàn cao, xác suất vỡ nợ rất thấp; hầu hết các quỹ hưu trí và quỹ đầu tư tổ chức quốc tế theo luật chỉ được phép mua trái phiếu thuộc nhóm này.
  - **Hạng Đầu cơ / Rác (Speculative Grade / Non-Investment Grade / High Yield / Junk Bonds - từ BB+ trở xuống đến D):** Rủi ro vỡ nợ cao, nhà đầu tư đòi hỏi lãi suất rất đắt để bù đắp rủi ro. Mức xếp hạng **D** biểu thị thực thể đã chính thức vỡ nợ (Default).

**3. Công thức & mô hình**
Bảng ma trận quy đổi xếp hạng tín nhiệm chuẩn quốc tế:

$$
\begin{array}{|c|c|c|l|}
\hline
\textbf{Moody's} & \textbf{S\&P} & \textbf{Fitch} & \textbf{Ý nghĩa mức độ rủi ro} \\
\hline
\text{Aaa} & \text{AAA} & \text{AAA} & \text{Chất lượng cao nhất, rủi ro vỡ nợ gần như bằng 0 (Mỹ, Đức, Úc)} \\
\text{Aa1–Aa3} & \text{AA+–AA-} & \text{AA+–AA-} & \text{Chất lượng rất cao, rủi ro cực thấp} \\
\text{A1–A3} & \text{A+–A-} & \text{A+–A-} & \text{Chất lượng trên trung bình, năng lực tài chính mạnh} \\
\text{Baa1–Baa3} & \text{BBB+–BBB-} & \text{BBB+–BBB-} & \text{Chất lượng trung bình, ranh giới cuối cùng của Hạng Đầu tư} \\
\hline
\multicolumn{4}{|c|}{\textbf{--- RANH GIỚI TRÁI PHIẾU RÁC (JUNK BOND LINE) ---}} \\
\hline
\text{Ba1–Ba3} & \text{BB+–BB-} & \text{BB+–BB-} & \text{Có tính đầu cơ, nhạy cảm với biến động kinh tế (Việt Nam: Ba2 / BB+)} \\
\text{B1–B3} & \text{B+–B-} & \text{B+–B-} & \text{Đầu cơ cao, năng lực tài chính yếu} \\
\text{Caa–C} & \text{CCC–C} & \text{CCC–C} & \text{Rất dễ vỡ nợ, phụ thuộc vào điều kiện bên ngoài} \\
\text{D} & \text{D} & \text{D} & \text{Đã chính thức vỡ nợ hoàn toàn} \\
\hline
\end{array}
$$

**4. Ví dụ**
- Xếp hạng tín nhiệm Quốc gia của Việt Nam (năm 2023–2024):
  - S&P xếp hạng Việt Nam ở mức **BB+** (Triển vọng Ổn định) - chỉ cách Hạng Đầu tư (Investment Grade) đúng 1 bậc.
  - Moody's xếp hạng ở mức **Ba2** (Triển vọng Ổn định).
  - Fitch Ratings nâng hạng tín nhiệm của Việt Nam lên mức **BB+** vào tháng 12/2023 nhờ dòng vốn FDI mạnh mẽ và nợ công được kiểm soát tốt (dưới 40% GDP).
- Sự kiện Mỹ bị hạ bậc tín nhiệm: Tháng 8/2011, S&P lần đầu tiên trong lịch sử tước bỏ xếp hạng AAA hoàn hảo của nước Mỹ (hạ xuống AA+) do bế tắc trần nợ công; tháng 8/2023, Fitch tiếp tục hạ bậc tín nhiệm của Mỹ từ AAA xuống AA+, kích hoạt một đợt bán tháo tài sản tài chính trên toàn cầu.
- Tổ chức xếp hạng nội địa tại Việt Nam: FiinRatings và Saigon Ratings được Bộ Tài chính cấp phép nhằm thúc đẩy tính minh bạch cho thị trường trái phiếu doanh nghiệp trong nước.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Tiêu chuẩn bắt buộc để phát hành trái phiếu quốc tế và định giá chi phí vay nợ của các chính phủ và tập đoàn đa quốc gia.
- Vụ bê bối xung đột lợi ích trong khủng hoảng 2008: Mô hình "Người phát hành trả tiền" (Issuer-pays Model) - Các ngân hàng đầu tư trả tiền thuê Moody's và S&P chấm điểm, tạo ra xung đột lợi ích khổng lồ: các tổ chức này đã dễ dãi chấm điểm AAA cho các chứng khoán nợ rác dưới chuẩn (MBS, CDO) để giữ chân khách hàng, góp phần châm ngòi cho cuộc sụp đổ tài chính 2008.
- Lỗi thường gặp: Đồng nhất xếp hạng tín nhiệm với lời khuyên đầu tư; xếp hạng tín nhiệm chỉ đo lường rủi ro vỡ nợ tín dụng của công cụ nợ, không đo lường biến động giá thị trường hay tính hấp dẫn sinh lời của cổ phiếu.

**6. Liên kết**
- [Mức độ uy tín tín dụng](#1-mức-độ-uy-tín-tín-dụng-creditworthiness) · [Rủi ro vỡ nợ](08_Underwriting_Ratios_and_Credit_Risk.md) · [Trái phiếu](../05_Financial_Institutions/04_Market_Intermediaries_and_Infrastructure.md)

---

## Câu hỏi tự kiểm tra

1. Phân biệt sự khác nhau giữa Điểm tín dụng cá nhân (Credit Score) và Xếp hạng tín nhiệm tổ chức (Credit Rating).
2. Trình bày 5 thành phần cấu tạo nên Điểm FICO chuẩn mực quốc tế và trọng số phần trăm tương ứng của từng thành phần.
3. Báo cáo tín dụng (Credit Report) gồm những nội dung cốt lõi nào? Người dân có thể tra cứu thông tin tín dụng của mình qua đâu tại Việt Nam?
4. Tại sao một người chưa từng vay nợ ngân hàng bao giờ (Hồ sơ tín dụng trắng) lại không mặc nhiên được chấm điểm tín dụng cao nhất?
5. Ranh giới giữa "Hạng Đầu tư" (Investment Grade) và "Hạng Rác" (Junk Bond) trong thang đo xếp hạng tín nhiệm quốc tế có tầm quan trọng sống còn như thế nào đối với các doanh nghiệp phát hành trái phiếu?

---

## Ghi chú nguồn

- Fair Isaac Corporation (FICO): *FICO Score Educational Guidelines and Weightings*.
- Moody's Investors Service / S&P Global Ratings: *Rating Definitions and Default Studies (2023–2024)*.
- Trung tâm Thông tin Tín dụng Quốc gia Việt Nam (CIC): Quy định chấm điểm và phân loại tín dụng thể nhân.
- Bộ Tài chính Việt Nam: Thông tin xếp hạng tín nhiệm quốc gia của Việt Nam do Fitch Ratings công bố năm 2023.