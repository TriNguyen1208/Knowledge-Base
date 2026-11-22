# Chuyên đề 7.2.4: Khám phá Khách hàng, Phỏng vấn Thực địa và Lý thuyết JTBD

Xây dựng một doanh nghiệp thành công không xuất phát từ việc ngồi trong văn phòng tưởng tượng về người dùng, mà đòi hỏi hành động "bước ra ngoài tòa nhà" (Get out of the building). Chuyên đề này phân tích phương pháp Khám phá khách hàng, mô hình tổng thể Phát triển khách hàng (Customer Development), kỹ nghệ phỏng vấn thực địa không thiên lệch và khung lý thuyết Việc cần làm (Jobs to Be Done - JTBD).

> Câu hỏi xuyên suốt: Khách hàng mua sản phẩm thực sự vì những tính năng công nghệ bóng bẩy hay vì họ đang "thuê" một giải pháp để giúp họ tiến bộ trong một hoàn cảnh cụ thể?

---

## 1. Khám phá khách hàng (Customer Discovery)

**1. Là gì?**
Khám phá khách hàng là bước đầu tiên trong mô hình Phát triển Khách hàng của Steve Blank, nhằm biến các giả định chủ quan của người sáng lập về bài toán, nhu cầu và thị trường thành các sự thật khách quan thông qua các tương tác trực tiếp với khách hàng tiềm năng. Mục tiêu không phải là bán hàng hay tìm kiếm sự đồng tình, mà là học hỏi và thấu hiểu sâu sắc thế giới quan của người dùng. Nếu chỉ nhớ một điều: **Khám phá khách hàng là việc bước ra ngoài tòa nhà để kiểm tra xem liệu có ai ngoài kia thực sự quan tâm đến vấn đề bạn đang giải quyết hay không**.

**2. Hoạt động thế nào?**
- Bắt đầu bằng việc viết ra bảng giả định mô hình kinh doanh trên một trang giấy (Business Model Canvas).
- Người sáng lập trực tiếp ra ngoài gặp gỡ khách hàng, không ủy quyền cho nhân viên cấp dưới hay thuê công ty nghiên cứu thị trường làm thay.
- Lắng nghe để phát hiện: Ai là người chịu nỗi đau lớn nhất? Họ đang giải quyết nó bằng cách nào? Ngân sách họ dành cho việc đó là bao nhiêu?
- Nếu các giả định bị thực tế bác bỏ, người sáng lập thực hiện bước xoay trục (Pivot) giả định và tiếp tục vòng lặp khám phá.

**3. Công thức & mô hình**
Vòng lặp Khám phá khách hàng của Steve Blank:
1. Phát biểu giả thuyết (State hypotheses)
2. Kiểm tra giả thuyết với khách hàng (Test hypotheses)
3. Kiểm tra giải pháp đề xuất (Test product concept)
4. Xác minh và quyết định: Tiếp tục hay Pivot (Verify and Pivot)

Tỷ lệ giả định bị bác bỏ lành mạnh:

$$
r_{\text{invalidation}} = \frac{\text{Số giả định bị sửa đổi/hủy bỏ}}{\text{Tổng số giả định ban đầu}} \ge 40\% - 60\%
$$

Một quy trình khám phá trung thực thường làm thay đổi căn bản ít nhất một nửa các giả định ban đầu của người sáng lập.

**4. Ví dụ**
- Khi xây dựng phần mềm quản lý nhà hàng, nhóm sáng lập dành 2 tuần làm phụ việc bưng bê và thu ngân tại 5 quán ăn ở phố cổ Hà Nội. Nhờ đó, họ khám phá ra rằng người phục vụ không thích dùng máy tính bảng vì tay họ thường xuyên dính dầu mỡ hoặc nước đá, mà họ chỉ muốn thao tác bằng các phím bấm vật lý siêu bền hoặc điện thoại chống nước giá rẻ.
- Các nhà sáng lập Airbnb nhận thấy các chủ nhà ở New York đăng ảnh chụp phòng quá xấu, mờ và tối tăm khiến khách không dám đặt. Họ đích thân bay từ San Francisco đến New York, gõ cửa từng nhà và mang theo máy ảnh chuyên nghiệp chụp lại từng căn phòng. Doanh thu của New York tăng gấp đôi ngay trong tuần sau đó.
- Counterfactual: Nếu nhóm sáng lập chỉ ngồi trong văn phòng làm bản khảo sát Google Form gửi vào các nhóm Facebook, họ sẽ không bao giờ biết được chi tiết "tay nhân viên bị dính mỡ" và sẽ tạo ra một phần mềm cảm ứng đắt đỏ vô dụng.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Giai đoạn tiền đầu tư (Pre-seed), định hình lộ trình tính năng cho sản phẩm đầu tiên.
- Ưu/Nhược điểm: Giúp tránh thảm họa xây dựng sản phẩm không ai cần, nhưng tốn nhiều thời gian và đòi hỏi người sáng lập phải vượt qua nỗi sợ bị người lạ từ chối.
- Lỗi thường gặp: Biến buổi phỏng vấn khám phá thành một buổi thuyết trình bán hàng (Pitching) cố nài nỉ khách hàng khen ngợi ý tưởng của mình.

**6. Liên kết**
- [Phát triển khách hàng](#2-phát-triển-khách-hàng-customer-development) · [Phỏng vấn khách hàng](#3-phỏng-vấn-khách-hàng-customer-interviews) · [Xác định vấn đề](../01_Entrepreneurship_Foundations/04_Innovation_Creativity_and_Problem_Fit.md#3-xác-định-vấn-đề-problem-identification)

---

## 2. Phát triển khách hàng (Customer Development)

**1. Là gì?**
Phát triển khách hàng là một phương pháp luận quản trị khởi nghiệp do doanh nhân kiêm giáo sư Steve Blank sáng tạo ra, song hành và cân bằng với quy trình Phát triển sản phẩm (Product Development). Phương pháp này lập luận rằng hầu hết các startup thất bại không phải vì không làm ra được sản phẩm, mà vì không tìm được khách hàng cho sản phẩm đó. Do đó, quy trình tìm kiếm và thấu hiểu khách hàng phải được tiến hành nghiêm ngặt, có cấu trúc và có tính lặp lại. Nếu chỉ nhớ một điều: **Đừng chỉ phát triển sản phẩm một cách mù quáng; hãy phát triển khách hàng song song với từng tính năng sản phẩm**.

**2. Hoạt động thế nào?**
- Vận hành qua 4 bước nối tiếp chia làm 2 giai đoạn lớn:
  - *Giai đoạn Tìm kiếm (Search)*: (1) Khám phá khách hàng (Customer Discovery) -> (2) Xác thực khách hàng (Customer Validation). Giai đoạn này linh hoạt và liên tục xoay trục (Pivot).
  - *Giai đoạn Thực thi (Execution)*: (3) Tạo dựng khách hàng (Customer Creation) -> (4) Xây dựng tổ chức (Company Building). Giai đoạn này tập trung vào mở rộng quy mô khi mô hình đã được chứng minh.
- Phối hợp chặt chẽ với phương pháp phát triển phần mềm linh hoạt (Agile/Scrum): kỹ thuật phát triển sản phẩm theo từng bước nhỏ dựa trên phản hồi của quy trình phát triển khách hàng.

**3. Công thức & mô hình**
Mô hình 4 bước của Steve Blank:

$$
\text{Customer Discovery} \longleftrightarrow \text{Customer Validation} \xrightarrow{\text{PMF Achieved}} \text{Customer Creation} \longrightarrow \text{Company Building}
$$

Trong đó mũi tên hai chiều $(\longleftrightarrow)$ thể hiện vòng lặp học hỏi liên tục giữa Discovery và Validation cho đến khi tìm thấy sự phù hợp.

**4. Ví dụ**
- Base.vn tại Việt Nam trong giai đoạn 2016-2018 tập trung toàn lực vào 2 bước đầu tiên của Customer Development: Nhà sáng lập Phạm Kim Hùng và đội ngũ trực tiếp làm việc với từng doanh nghiệp tiên phong để hoàn thiện từng ứng dụng quản trị nhỏ (Base Request, Base Wework) cho đến khi đạt tỷ lệ giữ chân khách hàng cao, trước khi bước sang giai đoạn Customer Creation mở rộng đội ngũ bán hàng ồ ạt năm 2019.
- Fab.com (Mỹ) huy động hơn 300 triệu USD nhưng bỏ qua giai đoạn Customer Validation nghiêm ngặt, vội vã đổ tiền vào Customer Creation (quảng cáo truyền hình, mở kho bãi châu Âu) khi chưa rõ tệp khách hàng cốt lõi trung thành, dẫn tới sụp đổ năm 2014.
- Counterfactual: Nếu một công ty tuyển dụng ngay 50 nhân viên bán hàng và thuê văn phòng hạng A khi sản phẩm vẫn đang trong giai đoạn Customer Discovery, họ sẽ cạn kiệt quỹ tiền mặt (Burn rate quá cao) trước khi tìm ra đối tượng khách hàng thực sự.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Khung quản trị chuẩn cho mọi vườn ươm khởi nghiệp trên thế giới, tích hợp trong phương pháp Lean LaunchPad.
- Ưu/Nhược điểm: Giảm thiểu tối đa rủi ro vốn cho nhà đầu tư mạo hiểm, nhưng đòi hỏi sự kỷ luật sắt đá và sự kiên nhẫn mà nhiều người sáng lập thiếu hụt.
- Lỗi thường gặp: Chuyển sang giai đoạn Customer Creation (bơm tiền quảng cáo) quá sớm khi các chỉ số giữ chân khách hàng (Retention) còn đang lẹt đẹt.

**6. Liên kết**
- [Khám phá khách hàng](#1-khám-phá-khách-hàng-customer-discovery) · [Xác thực khách hàng](03_Validation_Dimensions_and_Problem_Fit.md#4-xác-thực-khách-hàng-customer-validation) · [Khởi nghiệp tinh gọn](05_Lean_Startup_Hypothesis_and_RAT.md#1-khởi-nghiệp-tinh-gọn-lean-startup)

---

## 3. Phỏng vấn khách hàng (Customer Interviews)

**1. Là gì?**
Phỏng vấn khách hàng là kỹ thuật thu thập dữ liệu định tính thông qua các cuộc trò chuyện trực tiếp 1-1 có cấu trúc mở với người dùng mục tiêu, nhằm tìm hiểu sâu về hành vi thực tế, các khó khăn trong quá khứ, quy trình ra quyết định và bối cảnh sống/làm việc của họ. Đây là công cụ thu thập thông tin sắc bén nhất trong giai đoạn khám phá khách hàng. Nếu chỉ nhớ một điều: **Phỏng vấn khách hàng không phải là bán hàng hay khảo sát ý kiến tương lai; đó là cuộc điều tra như một thám tử về hành vi trong quá khứ của người dùng**.

**2. Hoạt động thế nào?**
- Tuân thủ các nguyên tắc vàng:
  - Nói ít hơn 20% thời gian, để khách hàng nói hơn 80% thời gian.
  - Luôn hỏi về các sự kiện cụ thể đã xảy ra trong quá khứ ("Lần gần nhất bạn gặp rắc rối này là khi nào? Bạn đã xử lý ra sao?").
  - Tránh các câu hỏi giả định về tương lai ("Bạn có sẵn sàng mua một ứng dụng như thế này không?").
  - Đào sâu cảm xúc: "Tại sao điều đó lại khiến bạn bực bội?", "Điều tồi tệ nhất xảy ra là gì?".
- Ghi âm và ghi chép trung thực các từ ngữ chính xác mà khách hàng sử dụng (Verbatim) để dùng cho việc viết thông điệp tiếp thị sau này.

**3. Công thức & mô hình**
Quy tắc bão hòa thông tin trong nghiên cứu định tính (Data Saturation Point):

$$
N_{\text{interviews}} \approx 15 - 30 \text{ cuộc phỏng vấn trên mỗi phân khúc khách hàng}
$$

Khi người sáng lập tiến hành đến cuộc phỏng vấn thứ 20 mà không còn nghe thấy bất kỳ điểm đau hoặc hành vi mới mẻ nào (thông tin bắt đầu lặp lại $100\%$), mẫu khảo sát đã đạt điểm bão hòa.

**4. Ví dụ**
- Phỏng vấn sai: "Chúng tôi đang làm app giao đồ ăn thông minh bằng AI, anh có thích không?". Khách hàng: "Ồ hay đấy, nghe rất hiện đại" (Phản hồi vô giá trị).
- Phỏng vấn đúng: "Tuần trước anh gọi đồ ăn trưa mấy lần? Lần gần nhất có chuyện gì không ổn? Anh đã làm gì khi quán giao thiếu món? Anh mất bao lâu để giải quyết?". Khách hàng: "Hôm thứ Ba tôi gọi cơm cho cả phòng, quán giao thiếu 2 suất, tôi phải gọi lên tổng đài mất 15 phút nghe nhạc chờ, đồng nghiệp thì đói gắt gỏng, tôi bực mình tự đi bộ ra ngoài mua bù" (Phát hiện điểm đau nhức nhối về dịch vụ hỗ trợ khi giao thiếu món).
- Counterfactual: Nếu người phỏng vấn cố tình giải thích và cãi lại khi khách hàng chê một tính năng ("Không phải đâu anh, tính năng này tiện lắm tại anh chưa quen đấy thôi"), cuộc phỏng vấn coi như bị hủy hoại hoàn toàn.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Thiết kế trải nghiệm người dùng (UX Research), xây dựng bản đồ hành trình khách hàng (Customer Journey Map).
- Ưu/Nhược điểm: Mang lại sự thấu hiểu đồng cảm sâu sắc, nhưng dễ bị sai lệch nếu người phỏng vấn vô tình đặt câu hỏi mớm cung (Leading questions).
- Lỗi thường gặp: Chỉ phỏng vấn người thân quen trong gia đình hoặc bạn bè bè phái (những người không bao giờ dám nói thật sự thật mất lòng).

**6. Liên kết**
- [Khám phá khách hàng](#1-khám-phá-khách-hàng-customer-discovery) · [Lý thuyết việc cần làm](#4-khung-lý-thuyết-công-việc-cần-hoàn-thành-jobs-to-be-done) · [Khám phá vấn đề](01_Ideation_Brainstorming_and_Design_Thinking.md#5-khám-phá-vấn-đề-problem-discovery)

---

## 4. Khung lý thuyết công việc cần hoàn thành (Jobs to Be Done - JTBD)

**1. Là gì?**
Lý thuyết Công việc cần hoàn thành (Jobs to Be Done - JTBD) do cố giáo sư Clayton Christensen (Trường Kinh doanh Harvard) phát triển, lập luận rằng con người không đơn thuần mua một sản phẩm hay dịch vụ, mà họ "thuê" (hire) sản phẩm đó để hoàn thành một công việc cụ thể giúp họ đạt được sự tiến bộ trong một bối cảnh nhất định. Theodore Levitt từng tóm tắt: "Người ta không muốn mua một mũi khoan một phần tư inch; người ta muốn có một cái lỗ một phần tư inch trên tường". Nếu chỉ nhớ một điều: **Tập trung vào sự tiến bộ mà khách hàng muốn đạt được (Job), thay vì tập trung vào chính sản phẩm hay các đặc điểm nhân khẩu học của họ**.

**2. Hoạt động thế nào?**
- Phân tách một "Job" thành 3 chiều kích cấu thành:
  1. *Khía cạnh chức năng (Functional Job)*: Nhiệm vụ kỹ thuật thực tế cần giải quyết.
  2. *Khía cạnh cảm xúc (Emotional Job)*: Khách hàng muốn cảm thấy thế nào khi làm xong việc đó (an tâm, tự tin, không lo sợ).
  3. *Khía cạnh xã hội (Social Job)*: Khách hàng muốn người khác nhìn nhận mình ra sao khi sử dụng giải pháp đó (đẳng cấp, chuyên nghiệp, tiến bộ).
- Khám phá 4 lực lượng tác động đến quyết định thay đổi giải pháp (Forces of Progress): Lực đẩy của vấn đề hiện tại (Push) + Lực hút của giải pháp mới (Pull) đối trọng với Nỗi sợ sự mới mẻ (Anxiety) + Thói quen gắn bó với cái cũ (Habit).

**3. Công thức & mô hình**
Phương trình chuyển đổi hành vi theo JTBD (Switching Equation):

$$
\text{Quyết định chuyển đổi (Switch)} \iff (\text{Push} + \text{Pull}) > (\text{Habit} + \text{Anxiety})
$$

Cấu trúc câu phát biểu Job Story chuẩn mực:
> *Khi [Bối cảnh / Hoàn cảnh cụ thể], tôi muốn [Động lực / Hành động cụ thể], để tôi có thể [Kỳ vọng tiến bộ / Kết quả mong ước].*

**4. Ví dụ**
- Nghiên cứu kinh điển về Sữa lắc (Milkshake) của Clayton Christensen cho một chuỗi đồ ăn nhanh: Hãng phát hiện hơn 40% lượng sữa lắc được bán vào trước 8h30 sáng cho những người đi xe một mình. Khách hàng không mua sữa lắc vì nhân khẩu học hay vì thích vị sô cô la; họ "thuê" một ly sữa lắc đặc, nhiều năng lượng để giải quyết công việc: một tay lái xe an toàn trên đường cao tốc dài nhàm chán, và không bị đói cồn cào lúc 10h sáng. Đối thủ cạnh tranh thực sự của sữa lắc không phải là sữa lắc của hãng khác, mà là chuối, bánh quy hoặc thanh kẹo sô cô la.
- Một sinh viên tại Việt Nam mua khóa học tiếng Anh IELTS không chỉ để lấy chứng chỉ (Functional), mà để cảm thấy tự hào trước gia đình (Social) và bớt hoang mang khi tốt nghiệp ra trường (Emotional).
- Counterfactual: Nếu chuỗi đồ ăn nhanh chỉ khảo sát khách hàng muốn đổi vị dâu hay vị vani (cải tiến tính năng sản phẩm) mà không hiểu "công việc buổi sáng", doanh số bán sữa lắc sẽ không bao giờ tăng trưởng đột phá.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Định hình chiến lược sản phẩm, định vị thương hiệu, xác định đối thủ cạnh tranh gián tiếp trong cùng một "Job".
- Ưu/Nhược điểm: Giúp nhìn xuyên qua các phân khúc nhân khẩu học hời hợt, nhưng đòi hỏi sự tinh tế tâm lý rất lớn để bóc tách được khía cạnh cảm xúc và xã hội tiềm ẩn.
- Lỗi thường gặp: Phát biểu "Job" gắn chặt vào giải pháp hiện hữu (ví dụ: "Job của khách hàng là dùng app di động để gọi xe" - sai, Job thực sự là "đi từ điểm A đến điểm B an toàn và nhanh chóng").

**6. Liên kết**
- [Phỏng vấn khách hàng](#3-phỏng-vấn-khách-hàng-customer-interviews) · [Nỗi đau của khách hàng](02_Pain_Points_Unmet_Needs_and_Market_Gaps.md#1-nỗi-đau-của-khách-hàng-customer-pain-points) · [Tuyên bố giá trị](../01_Entrepreneurship_Foundations/04_Innovation_Creativity_and_Problem_Fit.md#5-tuyên-bố-giá-trị-value-proposition)

---

## Câu hỏi tự kiểm tra

1. Tại sao Steve Blank lại nhấn mạnh nguyên lý "Get out of the building" trong giai đoạn Khám phá khách hàng (Customer Discovery)?
2. Trình bày 4 bước cốt lõi trong mô hình Phát triển Khách hàng (Customer Development) và phân tích sự chuyển giao giữa giai đoạn Tìm kiếm (Search) sang giai đoạn Thực thi (Execution)?
3. Phân tích sự khác biệt giữa câu hỏi phỏng vấn định hướng hành vi trong quá khứ và câu hỏi phỏng vấn thăm dò ý kiến tương lai? Cho ví dụ minh họa?
4. Trình bày bài học kinh điển về "Nghiên cứu sữa lắc" (Milkshake study) của Clayton Christensen và phân tích 3 khía cạnh (Chức năng, Cảm xúc, Xã hội) của một Job to Be Done?
5. Bốn lực lượng trong mô hình "Forces of Progress" của JTBD tương tác như thế nào để một khách hàng quyết định từ bỏ giải pháp cũ và chuyển sang sử dụng một sản phẩm khởi nghiệp mới?

---

## Ghi chú nguồn

- Blank, S. (2005). *The Four Steps to the Epiphany*. K&S Ranch Publishing.
- Christensen, C. M., Hall, T., Dillon, K., & Duncan, D. S. (2016). *Competing Against Chance: The Story of Innovation and Customer Choice*. HarperBusiness.
- Moesta, B. (2020). *Demand-Side Sales 101: Stop Selling and Help Your Customers Make Progress*. Lioncrest Publishing.
