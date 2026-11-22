# Chuyên đề 6.2.6: Chọn Mẫu Nghiên cứu, Sai lệch Mẫu, Thiết kế Bảng câu hỏi và Thu thập Dữ liệu

Chuyên đề này đi sâu vào "trục xương sống kỹ thuật" quyết định tính chính xác và độ tin cậy của toàn bộ dự án nghiên cứu thị trường: nghệ thuật lựa chọn một nhóm nhỏ đại diện cho toàn thể xã hội (Chọn mẫu nghiên cứu), nhận diện và triệt tiêu các bẫy sai số chết người (Sai lệch chọn mẫu), kỹ thuật xây dựng công cụ khảo sát khoa học (Thiết kế bảng câu hỏi), và quy trình triển khai hiện trường chuẩn mực (Thu thập dữ liệu).

> Câu hỏi xuyên suốt: Tại sao một cuộc khảo sát 100.000 người vẫn có thể đưa ra kết luận hoàn toàn sai lệch, trong khi một cuộc khảo sát chỉ 1.200 người lại dự đoán chính xác kết quả bầu cử tổng thống?

---

## 1. Chọn Mẫu Nghiên cứu (Research Sampling)

**1. Là gì?**
Chọn mẫu nghiên cứu là quá trình lựa chọn một số lượng cá thể, hộ gia đình hoặc tổ chức (gọi là Mẫu - Sample) từ một tổng thể xác định (Tổng thể mục tiêu - Target Population), sao cho các đặc tính thống kê của mẫu phản ánh trung thực và có khả năng đại diện cho các đặc tính của toàn bộ tổng thể đó. Nếu chỉ nhớ một điều: **chọn mẫu nghiên cứu là việc nếm thử một thìa súp nhỏ để biết chính xác độ mặn ngọt của cả một nồi súp khổng lồ**.

**2. Hoạt động thế nào?**
- Tiết kiệm chi phí và thời gian: Không một doanh nghiệp nào có đủ tiền và nhân lực để đi phỏng vấn toàn bộ 100 triệu dân Việt Nam; một mẫu chuẩn từ 500 đến 1.500 người là đủ cho độ tin cậy 95%.
- Hai trường phái chọn mẫu kinh điển:
  1. *Chọn mẫu theo xác suất (Probability Sampling):* Mọi cá thể đều có cơ hội được chọn xác định lớn hơn 0. Cho phép tính toán chính xác sai số mẫu và ngoại suy ra tổng thể. Gồm: Ngẫu nhiên đơn giản (Simple Random), Hệ thống (Systematic), Phân tầng (Stratified - chia theo nhóm tuổi/thu nhập rồi lấy ngẫu nhiên trong từng nhóm), và Theo cụm (Cluster - chọn ngẫu nhiên các quận/huyện).
  2. *Chọn mẫu phi xác suất (Non-probability Sampling):* Dựa trên sự thuận tiện hoặc phán đoán của người nghiên cứu. Không thể tính sai số mẫu chuẩn nhưng chi phí rẻ. Gồm: Tiện lợi (Convenience), Định ngạch (Quota - khống chế tỷ lệ 50% nam, 50% nữ), Phán đoán (Purposive), và Quả cầu tuyết (Snowball - nhờ người này giới thiệu người kia).
- Cần xác định khung chọn mẫu (Sampling Frame) rõ ràng: danh sách thực tế của các đối tượng mà từ đó mẫu được rút ra.

**3. Công thức & mô hình**
Công thức tính cỡ mẫu đại diện cho tổng thể lớn (với tỷ lệ ước lượng $p = 0,5$ để đạt phương sai tối đa):

$$
n = \frac{Z_{\alpha/2}^2 \cdot p(1 - p)}{e^2}
$$

Với độ tin cậy 95% ($Z = 1,96$), sai số biên cho phép $e = 0,03$ ($\pm 3\%$):

$$
n = \frac{(1,96)^2 \cdot 0,5 \cdot 0,5}{(0,03)^2} = \frac{3,8416 \cdot 0,25}{0,0009} \approx 1.067\text{ người}
$$

Nếu quy mô tổng thể $N$ nhỏ ($N < 10.000$), áp dụng hệ số hiệu chỉnh tổng thể hữu hạn (Finite Population Correction): $n_{adj} = \frac{n}{1 + \frac{n - 1}{N}}$.

**4. Ví dụ**
- Ví dụ số: Khảo sát mức độ hài lòng của 50.000 sinh viên tại một đại học quốc gia: Để đạt độ tin cậy 95% với sai số $\pm 4\%$ ($e = 0,04$):
  $$n = \frac{1,96^2 \cdot 0,5 \cdot 0,5}{0,04^2} = \frac{0,9604}{0,0016} \approx 600\text{ sinh viên}$$
  Áp dụng hiệu chỉnh tổng thể hữu hạn:
  $$n_{adj} = \frac{600}{1 + \frac{599}{50.000}} = \frac{600}{1,012} \approx 593\text{ sinh viên}$$
  Nhóm nghiên cứu áp dụng chọn mẫu phân tầng theo tỷ lệ sinh viên từng khoa để chọn ra 593 sinh viên khảo sát (số liệu minh họa).
- Thực tế Việt Nam: Cuộc Khảo sát Mức sống Dân cư (VHLSS) do Tổng cục Thống kê (GSO) thực hiện định kỳ 2 năm một lần sử dụng phương pháp chọn mẫu phân tầng đa giai đoạn (Stratified Multi-stage Sampling) trên khoảng 46.995 hộ gia đình, đại diện chính xác cho toàn bộ 63 tỉnh thành và khu vực thành thị/nông thôn Việt Nam (Báo cáo VHLSS GSO 2024).
- Counterfactual: Nếu GSO chỉ chọn mẫu tiện lợi bằng cách ra bờ hồ Hoàn Kiếm và chợ Bến Thành phỏng vấn người đi đường, toàn bộ số liệu về tỷ lệ nghèo đa chiều và thu nhập bình quân cả nước sẽ bị sai lệch hoàn toàn.

**5. Ứng dụng & tranh luận**
- Nền tảng của các cuộc thăm dò dư luận xã hội, kiểm định chất lượng sản phẩm (AQL Sampling), nghiên cứu thị phần và thói quen tiêu dùng.
- Trade-off: Chọn mẫu xác suất cho kết quả khoa học tuyệt đối nhưng chi phí tuyển mẫu rất cao; chọn mẫu phi xác suất tiện lợi nhưng rủi ro sai lệch mẫu cực lớn.
- Lỗi thường gặp: Lầm tưởng rằng cứ tăng số lượng mẫu lên càng nhiều là kết quả sẽ càng chính xác mà không quan tâm đến phương pháp chọn mẫu có bị thiên lệch hay không.

**6. Liên kết**
- [Sai lệch chọn mẫu](#2-sai-lệch-chọn-mẫu-sampling-bias) · [Thu thập dữ liệu](#4-thu-thập-dữ-liệu-data-collection) · [Nghiên cứu định lượng](01_Market_Research_Primary_Secondary_Qual_Quant.md#5-nghiên-cứu-định-lượng-quantitative-research)

---

## 2. Sai lệch Chọn Mẫu (Sampling Bias)

**1. Là gì?**
Sai lệch chọn mẫu (hay thiên lệch mẫu) là một lỗi hệ thống (systematic error) xảy ra trong quá trình chọn mẫu khiến cho một số thành viên trong tổng thể mục tiêu có xác suất được lựa chọn cao hơn hoặc thấp hơn các thành viên khác mà không được kiểm soát, làm cho mẫu nghiên cứu không còn tính đại diện cho tổng thể và dẫn đến các kết luận sai lệch nghiêm trọng. Nếu chỉ nhớ một điều: **sai lệch mẫu là việc bạn chỉ phỏng vấn những người đang ở trong rạp chiếu phim để kết luận rằng 100% người dân đều thích xem phim**.

**2. Hoạt động thế nào?**
- Các dạng sai lệch chọn mẫu phổ biến nhất trong thực tế:
  1. *Thiên lệch Tự chọn (Self-selection / Volunteer Bias):* Chỉ những người có cảm xúc cực đoan (rất yêu thích hoặc rất căm ghét sản phẩm) mới chủ động tham gia điền khảo sát, bỏ sót nhóm trung lập thầm lặng.
  2. *Thiên lệch Người sống sót (Survivorship Bias):* Chỉ khảo sát những khách hàng còn đang ở lại sử dụng dịch vụ mà không khảo sát những người đã rời bỏ (churned customers).
  3. *Thiên lệch Khung mẫu (Undercoverage / Coverage Bias):* Sử dụng danh bạ điện thoại cố định hoặc khảo sát online trên mạng xã hội, vô tình loại trừ hoàn toàn người nghèo, người già và người dân vùng sâu vùng xa không có internet.
  4. *Thiên lệch Không phản hồi (Non-response Bias):* Những người từ chối trả lời khảo sát có đặc điểm nhân khẩu học hoặc hành vi khác biệt căn bản so với những người đồng ý trả lời.
- Sai lệch này không thể tự triệt tiêu bằng cách tăng quy mô mẫu; mẫu sai phương pháp dù có khảo sát 1 triệu người thì kết quả vẫn hoàn toàn sai.

**3. Công thức & mô hình**
Sai số toàn phần của ước lượng (Total Error):

$$
\text{Total Error} = \text{Sampling Error (Sai số ngẫu nhiên)} + \text{Systematic Bias (Sai lệch hệ thống)}
$$

$$
\text{Bias} = E(\hat{\theta}) - \theta \neq 0
$$

Trong khi Sai số ngẫu nhiên hội tụ về 0 khi cỡ mẫu $n \to \infty$ theo Luật số lớn ($\frac{\sigma}{\sqrt{n}} \to 0$), thì Sai lệch hệ thống ($Bias$) **không đổi** bất kể mẫu lớn đến đâu.

**4. Ví dụ**
- Ví dụ số: Một khảo sát online trên diễn đàn công nghệ hỏi: "Bạn chi bao nhiêu tiền mua máy tính chơi game?". Có 2.000 người trả lời, mức chi trung bình là 35 triệu VNĐ. Nhà nghiên cứu kết luận: "Giới trẻ Việt Nam chi trung bình 35 triệu cho PC". Đây là sai lệch chọn mẫu kinh điển (Undercoverage & Self-selection): Mẫu bị lệch hoàn toàn vào nhóm game thủ chuyên nghiệp, không đại diện cho thanh niên nói chung (số liệu minh họa).
- Thực tế Lịch sử & Quốc tế: Bài học huyền thoại năm 1936 của tạp chí *Literary Digest*: Khảo sát 2,3 triệu người qua danh bạ điện thoại và danh sách sở hữu ô tô, dự đoán Alf Landon sẽ thắng cử tổng thống Mỹ. Kết quả: Franklin D. Roosevelt thắng áp đảo với 60,8% phiếu. Lý do: Giữa thời kỳ Đại suy thoái, chỉ người giàu mới có điện thoại và ô tô, khiến mẫu bị thiên lệch nghiêm trọng về phía đảng Cộng hòa (Case Study Gallup 1936).
- Counterfactual: Nếu Gallup năm đó cũng dùng danh sách 2 triệu người giàu đó thay vì chọn mẫu ngẫu nhiên phân tầng khoa học 50.000 người, Gallup đã không thể trở thành tượng đài ngành thăm dò dư luận thế giới.

**5. Ứng dụng & tranh luận**
- Nhận diện và loại trừ các "bẫy dữ liệu" khi phân tích khảo sát trực tuyến, thẩm định tính khách quan của các báo cáo nghiên cứu truyền thông.
- Kỹ thuật khắc phục: Sử dụng phương pháp gán trọng số sau chọn mẫu (Post-stratification Weighting) dựa trên cơ cấu dân số chuẩn của Tổng cục Thống kê để bù trừ cho các nhóm bị thiếu mẫu.
- Lỗi thường gặp: Tự hào khoe khảo sát có hàng trăm nghìn lượt trả lời trên mạng xã hội mà không biết rằng tập dữ liệu đó hoàn toàn bị ô nhiễm bởi thiên lệch mẫu.

**6. Liên kết**
- [Chọn mẫu nghiên cứu](#1-chọn-mẫu-nghiên-cứu-research-sampling) · [Thu thập dữ liệu](#4-thu-thập-dữ-liệu-data-collection) · [Nghiên cứu định lượng](01_Market_Research_Primary_Secondary_Qual_Quant.md#5-nghiên-cứu-định-lượng-quantitative-research)

---

## 3. Thiết kế Bảng câu hỏi (Questionnaire Design)

**1. Là gì?**
Thiết kế bảng câu hỏi là quá trình xây dựng một tập hợp có cấu trúc logic gồm các câu hỏi, thang đo và chỉ dẫn được tiêu chuẩn hóa, nhằm thu thập các dữ liệu định tính và định lượng chính xác từ người trả lời, đảm bảo dữ liệu thu về đáp ứng đầy đủ mục tiêu nghiên cứu và có thể lượng hóa để phân tích thống kê. Nếu chỉ nhớ một điều: **bảng câu hỏi là chiếc cầu nối phiên dịch bài toán kinh doanh của doanh nghiệp thành ngôn ngữ đời thường mà khách hàng hiểu và trả lời trung thực**.

**2. Hoạt động thế nào?**
- Tuân theo cấu trúc dòng chảy tâm lý (Funnel Approach):
  1. *Phần mở đầu:* Lời chào, mục đích nghiên cứu, cam kết bảo mật danh tính, và câu hỏi sàng lọc (Screener Questions) để loại người không thuộc đối tượng mục tiêu.
  2. *Khởi động (Warm-up):* Các câu hỏi tổng quan, dễ trả lời, tạo sự thoải mái (như thói quen giải trí).
  3. *Nội dung trọng tâm:* Các câu hỏi sâu về hành vi mua sắm, nhận thức thương hiệu, đánh giá tính năng.
  4. *Chủ đề nhạy cảm:* Câu hỏi về thu nhập, học vấn, thông tin cá nhân luôn đặt ở cuối cùng khi đã xây dựng được sự tin tưởng.
- Các loại thang đo chuẩn hóa: Thang đo định danh (Nominal), Thang đo thứ bậc (Ordinal), Thang đo khoảng cách Likert (1 - Rất không đồng ý đến 5 - Rất đồng ý), và Thang đo vi phân ngữ nghĩa (Semantic Differential).
- Tránh các lỗi câu hỏi chết người: Tránh câu hỏi kép (Double-barreled: "Bạn thấy sản phẩm này vừa ngon vừa rẻ không?"), tránh câu hỏi dẫn dắt (Leading question: "Bạn có đồng ý rằng sản phẩm của chúng tôi rất tốt không?"), và tránh dùng thuật ngữ chuyên môn gây khó hiểu.

**3. Công thức & mô hình**
Kiểm định độ tin cậy nhất quán nội tại của thang đo bằng Hệ số Cronbach's Alpha ($\alpha$):

$$
\alpha = \frac{k}{k - 1} \left( 1 - \frac{\sum_{i=1}^{k} \sigma_{y_i}^2}{\sigma_x^2} \right)
$$

Trong đó $k$ là số lượng biến quan sát (câu hỏi thành phần) trong một khái niệm, $\sigma_{y_i}^2$ là phương sai của biến thứ $i$, $\sigma_x^2$ là phương sai của tổng điểm thang đo. Thang đo đạt chuẩn tin cậy khi $0,7 \le \alpha < 0,95$.

**4. Ví dụ**
- Ví dụ số: Xây dựng thang đo Likert 5 điểm đo lường "Ý định mua xe điện" gồm 3 câu hỏi:
  - Q1: "Tôi có kế hoạch mua xe điện trong 12 tháng tới".
  - Q2: "Tôi sẽ ưu tiên cân nhắc xe điện khi đổi xe mới".
  - Q3: "Tôi sẵn sàng giới thiệu bạn bè mua xe điện".
  - Dữ liệu thử nghiệm trên 50 người cho hệ số Cronbach's Alpha $\alpha = 0,86$. Thang đo này đạt độ tin cậy thống kê cao và sẵn sàng đưa vào khảo sát chính thức (số liệu minh họa).
- Thực tế Việt Nam: Trong các cuộc khảo sát đo lường sức khỏe thương hiệu bia tại Việt Nam, các công ty nghiên cứu như Kantar hay Cimigo không bao giờ hỏi trực tiếp "Bạn có hay uống say không?", mà sử dụng thang đo gián tiếp về tần suất tụ tập bạn bè cuối tuần và số lon bia trung bình trong một bữa tiệc để tránh sự phòng thủ tâm lý của người trả lời (Cimigo Research Guide).
- Counterfactual: Nếu bảng câu hỏi thiết kế quá dài dòng (trên 40 câu hỏi phức tạp), tỷ lệ bỏ dở giữa chừng (Drop-out Rate) sẽ vượt quá 60%, biến các dữ liệu thu về thành dữ liệu rác.

**5. Ứng dụng & tranh luận**
- Xây dựng khảo sát trực tuyến trên Google Forms, Typeform, SurveyMonkey, Qualtrics; thiết kế phiếu đánh giá dịch vụ khách hàng.
- Quy tắc vàng: Bắt buộc phải chạy thử nghiệm trước (Pre-test / Pilot test) trên một nhóm nhỏ từ 15 đến 30 người để phát hiện các câu hỏi tối nghĩa trước khi in hàng loạt.
- Lỗi thường gặp: Đặt câu hỏi vượt quá khả năng ghi nhớ của con người (ví dụ: "Trong 3 năm qua bạn đã mua bao nhiêu gói dầu gội?").

**6. Liên kết**
- [Thu thập dữ liệu](#4-thu-thập-dữ-liệu-data-collection) · [Khảo sát khách hàng](02_Research_Types_and_Survey_Methods.md#5-khảo-sát-khách-hàng-customer-survey) · [Nghiên cứu định lượng](01_Market_Research_Primary_Secondary_Qual_Quant.md#5-nghiên-cứu-định-lượng-quantitative-research)

---

## 4. Thu thập Dữ liệu (Data Collection)

**1. Là gì?**
Thu thập dữ liệu là giai đoạn thực thi hiện trường trong quy trình nghiên cứu thị trường, bao gồm việc tiếp cận các đối tượng nghiên cứu đã được chọn mẫu, quản lý và sử dụng các công cụ khảo sát để ghi nhận một cách có hệ thống, chính xác và trung thực các thông tin thô, sau đó mã hóa và lưu trữ vào cơ sở dữ liệu để phục vụ cho khâu xử lý và phân tích. Nếu chỉ nhớ một điều: **thu thập dữ liệu là khâu hiện thực hóa kế hoạch trên giấy thành những con số thực tế ngoài chiến trường**.

**2. Hoạt động thế nào?**
- Được triển khai thông qua nhiều phương thức công nghệ khác nhau:
  1. *PAPI (Paper and Pencil Interviewing):* Phỏng vấn trên giấy truyền thống (hiện nay ít dùng do dễ gian lận và tốn công nhập liệu).
  2. *CAPI (Computer-Assisted Personal Interviewing):* Điều tra viên cầm máy tính bảng/smartphone có định vị GPS đến gặp trực tiếp người trả lời, dữ liệu đồng bộ ngay lập tức về máy chủ.
  3. *CATI (Computer-Assisted Telephone Interviewing):* Phỏng vấn qua điện thoại có hệ thống máy tính tự động quay số và ghi âm cuộc gọi.
  4. *CAWI (Computer-Assisted Web Interviewing):* Khảo sát trực tuyến qua email, website hoặc cộng đồng người dùng (Panel).
- Kiểm soát chất lượng thực địa (Fieldwork Quality Control): Kiểm tra ngẫu nhiên ít nhất 10-20% số phiếu bằng cách gọi điện phúc tra lại (Back-check), kiểm tra tọa độ GPS và thời gian trả lời phiếu (loại bỏ các phiếu làm quá nhanh - Speeders).

**3. Công thức & mô hình**
Tỷ lệ hoàn thành phiếu hợp lệ (Completion Rate):

$$
Completion\ Rate = \frac{N_{valid}}{N_{contacted} - N_{ineligible}} \times 100\%
$$

Chỉ số phát hiện gian lận dựa trên phân tích thời gian làm bài (Speeding Detection Threshold):

$$
Time_{threshold} = \frac{Median(Duration)}{2}
$$

Mọi phiếu khảo sát có thời gian hoàn thành $Duration < Time_{threshold}$ đều bị thuật toán tự động gắn cờ gian lận và loại bỏ.

**4. Ví dụ**
- Ví dụ số: Một dự án khảo sát thị trường nước giặt tại Đà Nẵng: Mục tiêu thu thập 500 phiếu hợp lệ. Đội ngũ tiếp cận 800 người; 150 người không thuộc đối tượng (không giặt đồ); 150 người từ chối tham gia. Còn lại 500 phiếu thu về. Qua kiểm tra chất lượng (Back-check): Phát hiện 30 phiếu điền bừa (thời gian làm dưới 3 phút trong khi chuẩn là 10 phút) và 20 phiếu có tọa độ GPS trùng lặp tại cùng một quán cafe do điều tra viên tự điền. Loại bỏ 50 phiếu rác, yêu cầu điều tra viên đi làm bù 50 phiếu mới nghiêm túc (số liệu minh họa).
- Thực tế Việt Nam: Trong cuộc Tổng điều tra Dân số và Nhà ở Việt Nam năm 2019 và các cuộc khảo sát kinh tế sau đó, GSO đã chuyển đổi 100% từ giấy (PAPI) sang sử dụng máy tính bảng (CAPI) kết hợp định vị bản đồ số, rút ngắn thời gian công bố kết quả sơ bộ từ 1 năm xuống chỉ còn vài tháng và loại bỏ hoàn toàn tình trạng "ngồi nhà khai khống phiếu" (Báo cáo Đổi mới Phương pháp Thống kê GSO).
- Counterfactual: Nếu tiếp tục sử dụng phiếu giấy thủ công, chi phí in ấn, vận chuyển hàng triệu tờ phiếu và thuê hàng nghìn người nhập liệu thủ công sẽ tiêu tốn thêm hàng chục tỷ đồng ngân sách với nguy cơ sai sót gõ nhầm dữ liệu rất cao.

**5. Ứng dụng & tranh luận**
- Giai đoạn quyết định tính toàn vẹn của dữ liệu trong các dự án nghiên cứu thị trường, kiểm tra tồn kho tại điểm bán lẻ, thu thập phản hồi khách hàng sau mua.
- Thách thức đạo đức: Bảo mật dữ liệu cá nhân theo Nghị định 13/2023/NĐ-CP của Việt Nam (phải có sự đồng thuận rõ ràng của người được khảo sát trước khi thu thập số điện thoại, vị trí).
- Lỗi thường gặp: Buông lỏng khâu giám sát điều tra viên thực địa, dẫn đến việc nhận về toàn bộ dữ liệu giả mạo do điều tra viên tự tích để kịp tiến độ.

**6. Liên kết**
- [Thiết kế bảng câu hỏi](#3-thiết-kế-bảng-câu-hỏi-questionnaire-design) · [Sai lệch chọn mẫu](#2-sai-lệch-chọn-mẫu-sampling-bias) · [Phân tích nghiên cứu](07_Research_Analysis_Reporting_and_Benchmarking.md#1-phân-tích-nghiên-cứu-research-analysis)

---

## Câu hỏi tự kiểm tra

1. Phân biệt rõ sự khác nhau giữa Chọn mẫu xác suất (Probability Sampling) và Chọn mẫu phi xác suất (Non-probability Sampling). Trường hợp nào một startup nên chấp nhận sử dụng mẫu phi xác suất?
2. Hãy chỉ ra 3 lỗi sai nghiêm trọng trong câu hỏi khảo sát sau: *"Bạn có đồng ý rằng việc sử dụng xe máy điện VinFast vừa giúp bảo vệ môi trường trong sạch vừa tiết kiệm chi phí xăng dầu vượt trội so với xe máy xăng không?"*
3. Nêu hiện tượng "Thiên lệch người sống sót" (Survivorship Bias) trong nghiên cứu thị trường và lấy một ví dụ về việc một doanh nghiệp bị phá sản do chỉ đi khảo sát những khách hàng còn đang mua hàng.
4. Trình bày các kỹ thuật kiểm soát chất lượng thực địa (Fieldwork Quality Control) bằng công nghệ CAPI để ngăn chặn tình trạng điều tra viên gian lận tự điền phiếu khảo sát.

---

## Ghi chú nguồn

- Dillman, D. A., Smyth, J. D., & Christian, L. M. (2014). *Internet, Phone, Mail, and Mixed-Mode Surveys: The Tailored Design Method*. Wiley.
- Sổ tay Nghiệp vụ Điều tra Thống kê - Tổng cục Thống kê (GSO) Việt Nam.
- Nghị định 13/2023/NĐ-CP về Bảo vệ Dữ liệu Cá nhân - Chính phủ Việt Nam.
- ESOMAR International Code on Market, Opinion and Social Research and Data Analytics.
