# Chuyên đề 7.2.6: Tiền nguyên mẫu, Nguyên mẫu thử nghiệm, MVP và PoC

Quá trình hữu hình hóa một ý tưởng kinh doanh là một hành trình đi từ trừu tượng đến cụ thể, từ bản vẽ thô sơ đến sản phẩm thương mại hoàn chỉnh. Chuyên đề này phân biệt rạch ròi 4 cấp độ hiện thực hóa: Tiền nguyên mẫu (Pretotyping), Nguyên mẫu thử nghiệm (Prototyping), Sản phẩm khả dụng tối thiểu (MVP) và Bằng chứng khái niệm khả thi (PoC).

> Câu hỏi xuyên suốt: Khi nào bạn chỉ cần một bản mô phỏng bằng bìa các tông trong 2 giờ, khi nào cần một PoC kỹ thuật trong phòng thí nghiệm, và khi nào bắt buộc phải đưa một MVP ra thị trường thực?

---

## 1. Tiền nguyên mẫu (Pretotyping)

**1. Là gì?**
Pretotyping (thuật ngữ do cựu Giám đốc Kỹ thuật của Google Alberto Savoia sáng tạo từ "pretend" + "prototype") là kỹ thuật tạo ra các phiên bản mô phỏng giả lập cực kỳ đơn giản, nhanh chóng và rẻ tiền của một ý tưởng sản phẩm mới, nhằm trả lời câu hỏi cốt tử: *"Liệu chúng ta có nên làm sản phẩm này không?"* (Make sure you are building the right it before you build it right). Nó kiểm tra sự quan tâm thực tế của thị trường trước khi bỏ công sức làm ra một nguyên mẫu hoạt động được. Nếu chỉ nhớ một điều: **Pretotyping là nghệ thuật giả vờ như sản phẩm đã tồn tại để xem có ai thực sự muốn nó hay không**.

**2. Hoạt động thế nào?**
- Tuân thủ quy tắc 4I: Inexpensive (không tốn kém), Immediate (làm ngay trong vài giờ), Informative (đem lại dữ liệu hành vi thực tế), và Incomplete (cố tình chưa hoàn thiện).
- Áp dụng các hình thức: "Bản vẽ trên giấy" (Paper pretotype), "Bằng gỗ hoặc bìa các tông" (Wooden pretotype), "Đóng thế con người" (Mechanical Turk), hoặc "Trang web giả lập" (Fake door).
- Thu thập "Dữ liệu da thịt" (YODA - Your Own Data) - dữ liệu thực nghiệm do chính mình tạo ra thay vì dựa vào ý kiến của người khác (OPINION - Other People's Info, Numbers and Ideas).

**3. Công thức & mô hình**
Tỷ lệ thành công tiền nguyên mẫu (Skin-in-the-game Caliber):

$$
\text{Data Caliber} = \frac{\text{Số người cam kết đặt cọc tiền / dữ liệu nhạy cảm}}{\text{Tổng số người tiếp cận Pretotyping}}
$$

Quy tắc Savoia về thời gian và chi phí: Thử nghiệm pretotyping phải được hoàn thành trong vòng tối đa $48$ giờ với chi phí dưới $100$ USD.

**4. Ví dụ**
- Palm Pilot (thiết bị kỹ thuật số cá nhân PDA đầu tiên trên thế giới): Nhà sáng lập Jeff Hawkins đẽo một miếng gỗ có kích thước đúng bằng chiếc máy dự kiến, vẽ các nút bấm lên đó và nhét vào túi áo ngực. Trong suốt nhiều tuần, mỗi khi cần ghi chú hay xem lịch, ông rút miếng gỗ ra, giả vờ bấm bút gỗ lên đó. Qua đó ông kiểm chứng được thói quen sử dụng thực tế và kích thước lý tưởng trước khi các kỹ sư bắt đầu thiết kế vi mạch.
- Một nhóm bạn trẻ tại TP.HCM muốn làm tủ bán sách tự động thông minh: Họ không vội mua tủ lạnh cải tiến tốn 50 triệu VNĐ. Họ kê một chiếc kệ gỗ ở sảnh chung cư, dán mã QR tài khoản ngân hàng và ghi: "Sách tự chọn 50.000 đ/cuốn, vui lòng chuyển khoản tự giác". Sau 1 tuần, 95% số sách bị lấy đi đều được chuyển khoản đầy đủ. Giả định về sự trung thực của cư dân và nhu cầu đọc sách được xác thực bằng tiền nguyên mẫu 500.000 đ (số liệu minh họa).
- Counterfactual: Nếu Jeff Hawkins đầu tư ngay 500.000 USD chế tạo khuôn mẫu kim loại trong 6 tháng rồi mới phát hiện kích thước quá to không vừa túi áo, dự án sẽ cạn sạch vốn.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Xác thực ý tưởng giai đoạn ngày đầu tiên (Day 0), sàng lọc nhanh danh mục ý tưởng trong các cuộc thi Hackathon.
- Ưu/Nhược điểm: Tốc độ tối thượng và chi phí tiệm cận 0, nhưng không đo lường được trải nghiệm sử dụng sản phẩm lâu dài (Retention).
- Lỗi thường gặp: Bị cuốn vào việc trau chuốt thẩm mỹ của bản pretotype mà quên đi mục tiêu duy nhất là đo lường hành vi người dùng.

**6. Liên kết**
- [Tạo nguyên mẫu thử nghiệm](#2-tạo-nguyên-mẫu-thử-nghiệm-prototyping) · [Thử nghiệm cánh cửa giả](07_Validation_Testing_Techniques.md#5-thử-nghiệm-cánh-cửa-giả-fake-door-test) · [Xác thực ý tưởng](03_Validation_Dimensions_and_Problem_Fit.md#2-xác-thực-ý-tưởng-idea-validation)

---

## 2. Tạo nguyên mẫu thử nghiệm (Prototyping)

**1. Là gì?**
Tạo nguyên mẫu (Prototyping) là quá trình xây dựng một mô hình vật lý hoặc kỹ thuật số hoạt động được ở mức độ nhất định của sản phẩm, nhằm mục đích trả lời câu hỏi: *"Sản phẩm này sẽ trông như thế nào, hoạt động ra sao và trải nghiệm người dùng có mượt mà hay không?"*. Đây là bước hiện thực hóa để kiểm tra tính khả thi kỹ thuật, hình thái thiết kế (Form factor) và sự tương tác công thái học (Ergonomics). Nếu chỉ nhớ một điều: **Một nguyên mẫu thử nghiệm đáng giá hơn một nghìn cuộc họp thảo luận lý thuyết suông**.

**2. Hoạt động thế nào?**
- Phân cấp theo độ chân thực (Fidelity):
  - *Low-fidelity (Độ chân thực thấp)*: Khung dây trên giấy (Wireframes), mô hình bìa các tông, dùng để kiểm tra cấu trúc luồng người dùng (User Flow).
  - *High-fidelity (Độ chân thực cao)*: Bản thiết kế tương tác có thể bấm chuyển trang trên Figma, hoặc sản phẩm in 3D có gắn động cơ chạy thử, mô phỏng gần như $90\%$ sản phẩm thật.
- Cho người dùng mục tiêu cầm, bấm, trải nghiệm trực tiếp trong phòng quan sát (Usability Lab) để phát hiện các lỗi thao tác ngớ ngẩn mà nhà thiết kế không lường trước.

**3. Công thức & mô hình**
Chỉ số hiệu quả kiểm thử nguyên mẫu (Usability Problem Discovery Rate theo Nielsen & Landauer):

$$
U(n) = N \left(1 - (1 - L)^n \right)
$$

Trong đó:
- $U(n)$: Số lượng lỗi trải nghiệm được phát hiện khi kiểm thử với $n$ người dùng.
- $N$: Tổng số lỗi trải nghiệm thực tế tồn tại trong sản phẩm.
- $L$: Tỷ lệ lỗi được phát hiện bởi một người dùng thông thường (thường $L \approx 31\%$).
- Quy tắc 5 người: Chỉ cần kiểm thử nguyên mẫu trên $n = 5$ người dùng là có thể phát hiện được hơn $85\%$ tổng số lỗi trải nghiệm cốt lõi.

**4. Ví dụ**
- Bản nguyên mẫu Figma của ứng dụng ngân hàng số Timo hoặc Cake: Người dùng có thể bấm chuyển màn hình, quét vân tay giả lập và nhập số tiền thử nghiệm trên điện thoại thật mà không cần bất kỳ hệ thống máy chủ (Back-end) hay kết nối ngân hàng trung ương nào phía sau.
- James Dyson làm 5.127 nguyên mẫu máy hút bụi bằng nhựa và bìa các tông trong suốt 15 năm để hoàn thiện cơ chế tách bụi ly tâm khí động học.
- Counterfactual: Nếu lập trình hoàn thiện toàn bộ mã nguồn ứng dụng ngân hàng rồi mới cho người dùng thử và phát hiện họ không tìm thấy nút "Chuyển tiền", chi phí viết lại mã nguồn sẽ tốn kém gấp 20 lần so với việc sửa trên bản vẽ Figma.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Kiểm thử khả năng sử dụng (Usability Testing), trình bày nguyên mẫu trước các nhà đầu tư hạt giống (Demo Day).
- Ưu/Nhược điểm: Tối ưu hóa trải nghiệm người dùng trước khi sản xuất hàng loạt, nhưng nguyên mẫu không phải là sản phẩm có thể mở rộng quy mô chịu tải hàng triệu người dùng.
- Lỗi thường gặp: Quá cầu toàn, biến nguyên mẫu thành sản phẩm hoàn chỉnh khiến thời gian đưa ra thị trường bị chậm trễ nghiêm trọng.

**6. Liên kết**
- [Tiền nguyên mẫu](#1-tiền-nguyên-mẫu-pretotyping) · [Sản phẩm khả dụng tối thiểu](#3-sản-phẩm-khả-dụng-tối-thiểu-minimum-viable-product-mvp) · [Kiểm thử khả năng sử dụng](../05_Product_Development/05_Prototyping_Testing_and_QA.md#5-kiểm-thử-khả-năng-sử-dụng-usability-testing)

---

## 3. Sản phẩm khả dụng tối thiểu (Minimum Viable Product - MVP)

**1. Là gì?**
Theo định nghĩa của Eric Ries, Sản phẩm khả dụng tối thiểu (MVP) là phiên bản của một sản phẩm mới cho phép một nhóm khởi nghiệp thu thập được số lượng tối đa các bài học có giá trị kiểm chứng về khách hàng với nỗ lực và chi phí tối thiểu. Khác với Prototype (chỉ dùng để xem và bấm thử nội bộ), MVP là một sản phẩm thực thụ được đưa ra thị trường thực, nơi khách hàng thực sự thực hiện giao dịch, trả tiền hoặc trao đổi dữ liệu. Nếu chỉ nhớ một điều: **MVP không phải là sản phẩm lỗi hay sản phẩm nửa vời; nó là giải pháp nhỏ nhất nhưng hoàn chỉnh một vòng trải nghiệm giá trị cốt lõi**.

**2. Hoạt động thế nào?**
- Phải thỏa mãn đồng thời 4 lát cắt mỏng của một sản phẩm: Khả thi (Feasible) - Đáng tin cậy (Reliable) - Sử dụng được (Usable) - Có cảm xúc yêu thích (Delightful), thay vì chỉ làm phần dưới đáy chức năng cẩu thả.
- Cắt bỏ mọi tính năng râu ria, chỉ giữ lại duy nhất 1 tính năng "sát thủ" (Killer Feature) giải quyết trực diện điểm đau nghiêm trọng nhất của khách hàng.
- Theo dõi các hành vi sử dụng thực tế: khách hàng có quay lại ngày hôm sau không? họ có giới thiệu cho bạn bè không? họ phàn nàn về điều gì nhiều nhất?

**3. Công thức & mô hình**
Mô hình bánh cưới cắt lát (Cupcake vs Wedding Cake):
Đừng làm 1 chiếc bánh cưới bằng cách đưa ra từng lớp bánh sống; hãy làm một chiếc bánh cupcake nhỏ hoàn chỉnh (có cốt bánh ngon, có kem phủ đẹp) để khách ăn thử và thấy ngon miệng.

Công thức đánh giá tính tối thiểu và khả dụng của MVP:

$$
\text{MVP Efficiency} = \frac{\text{Giá trị bài học kiểm chứng thu về}}{\text{Thời gian phát triển (tuần)} \times \text{Chi phí nhân lực}} \longrightarrow \max
$$

**4. Ví dụ**
- MVP của Uber năm 2010 (UberCab): Ban đầu chỉ hoạt động ở San Francisco, chỉ dành cho 3 chiếc xe Mercedes màu đen của bạn bè nhà sáng lập, chỉ có tính năng nhắn tin SMS/bấm nút trên iPhone 3GS để gọi xe và tự trừ tiền vào thẻ tín dụng. Không có chia sẻ giá cước, không có bản đồ theo dõi xe di chuyển thời gian thực, không có xe máy, không có tiền mặt. Nhưng nó giải quyết hoàn hảo bài toán: gọi xe riêng sang trọng nhanh chóng chỉ bằng một nút bấm.
- MVP của chuỗi cà phê The Coffee House: Bắt đầu từ một cửa hàng đầu tiên tại phố Cao Thắng (TP.HCM) với thực đơn đồ uống cơ bản, tập trung kiểm chứng trải nghiệm không gian làm việc rộng rãi, wifi cực mạnh và thái độ phục vụ thân thiện trước khi nhân bản ra hàng trăm cửa hàng.
- Counterfactual: Nếu Uber dành 3 năm để phát triển toàn bộ hệ sinh thái (xe máy, giao đồ ăn, thanh toán tiền mặt, định vị toàn cầu) trước khi ra mắt thị trường, đối thủ khác sẽ chiếm lĩnh thị trường và Uber có thể đã phá sản vì cạn vốn.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Cột mốc chính thức ra mắt thị trường (Public Launch), bắt đầu giai đoạn đo lường Product-Market Fit.
- Tranh luận: Nhiều chuyên gia sản phẩm cho rằng khái niệm MVP ngày nay đã lỗi thời do kỳ vọng người dùng quá cao; họ đề xuất chuyển sang SLC (Simple, Lovable, Complete) hoặc MAP (Minimum Awesome Product).
- Lỗi thường gặp: Làm một sản phẩm thiếu hụt các tiêu chuẩn an toàn hoặc trải nghiệm quá tệ hại khiến người dùng tẩy chay vĩnh viễn và không bao giờ quay lại.

**6. Liên kết**
- [Tạo nguyên mẫu thử nghiệm](#2-tạo-nguyên-mẫu-thử-nghiệm-prototyping) · [Bằng chứng khái niệm khả thi](#4-bằng-chứng-khái-niệm-khả-thi-proof-of-concept-poc) · [Độ phù hợp sản phẩm - thị trường](../05_Product_Development/02_Product_Lifecycle_and_Market_Fit.md#2-độ-phù-hợp-sản-phẩm---thị-trường-product-market-fit-pmf)

---

## 4. Bằng chứng khái niệm khả thi (Proof of Concept - PoC)

**1. Là gì?**
Bằng chứng khái niệm khả thi (PoC) là một cuộc thử nghiệm kỹ thuật quy mô nhỏ trong phòng thí nghiệm hoặc môi trường có kiểm soát, nhằm mục đích chứng minh rằng một lý thuyết công nghệ, một thuật toán mới hoặc một nguyên lý khoa học nhất định hoàn toàn có khả năng triển khai được trong thế giới thực. PoC không quan tâm đến thị trường hay người dùng thích hay không; nó chỉ trả lời câu hỏi: *"Công nghệ này có hoạt động được về mặt vật lý, hóa học hoặc toán học hay không?"*. Nếu chỉ nhớ một điều: **PoC kiểm tra tính khả thi của công nghệ; MVP kiểm tra tính khả thi của mô hình kinh doanh**.

**2. Hoạt động thế nào?**
- Được thực hiện trong các dự án công nghệ sâu (Deeptech), y sinh, trí tuệ nhân tạo hoặc năng lượng mới.
- Đặt ra các tiêu chuẩn kỹ thuật ngưỡng (Threshold benchmarks): ví dụ độ trễ xử lý dưới 50ms, độ chính xác nhận diện hình ảnh đạt trên 95%, hoặc pin sạc đầy trong 10 phút mà không phát nổ.
- Nếu PoC thất bại về mặt kỹ thuật, dự án bị hủy bỏ hoặc phải quay lại nghiên cứu cơ bản; nếu PoC thành công, dự án mới được cấp vốn để phát triển sản phẩm thương mại.

**3. Công thức & mô hình**
Hệ thống Thang đo mức độ sẵn sàng của công nghệ (Technology Readiness Level - TRL của NASA):
- TRL 1-2: Nghiên cứu nguyên lý cơ bản.
- TRL 3: Nghiên cứu thực nghiệm chứng minh khái niệm (PoC giai đoạn phòng lab).
- TRL 4: Thử nghiệm xác thực thành phần trong môi trường phòng thí nghiệm.
- TRL 6-7: Thử nghiệm nguyên mẫu trong môi trường hoạt động thực tế.
- TRL 9: Hệ thống hoàn chỉnh đã được chứng minh qua các nhiệm vụ thành công.

Điều kiện thành công của PoC:

$$
\text{PoC Success} \iff \text{Thông số kỹ thuật thực nghiệm } \ge \text{Tiêu chuẩn thiết kế kỹ thuật } (\tau^*)
$$

**4. Ví dụ**
- Một nhóm nghiên cứu tại Đại học Bách Khoa muốn làm startup pin xe điện sạc siêu nhanh bằng vật liệu Graphene: Họ làm một PoC trên một cell pin kích thước bằng đồng xu trong phòng thí nghiệm. Kết quả đo được: sạc từ 0 lên 80% trong 5 phút ở nhiệt độ phòng mà không suy giảm tuổi thọ sau 1.000 chu kỳ. PoC thành công rực rỡ, chứng minh tính khả thi khoa học.
- Một công ty AI tại Việt Nam phát triển mô hình OCR nhận diện chữ viết tay trên hóa đơn đỏ cũ nát: Họ chạy PoC trên tập dữ liệu 5.000 mẫu hóa đơn để chứng minh độ chính xác đạt 98,5% trước khi đi chào bán giải pháp cho các ngân hàng.
- Counterfactual: Nếu không làm PoC kiểm tra pin trong phòng lab mà mang ra lắp ráp ngay vào xe máy để bán ra thị trường, nguy cơ cháy nổ sẽ gây thiệt hại nhân mạng và dẫn tới kiện tụng hình sự phá sản doanh nghiệp.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Nhận các khoản tài trợ nghiên cứu của chính phủ (như quỹ NAFOSTED), các vòng gọi vốn đầu tư mạo hiểm công nghệ sâu (Deeptech VC).
- Ưu/Nhược điểm: Giảm thiểu rủi ro kỹ thuật chết người, nhưng một công nghệ thành công trong phòng lab có thể mất hàng chục năm và hàng trăm triệu USD mới có thể sản xuất đại trà với giá thành cạnh tranh.
- Lỗi thường gặp: Ngộ nhận rằng có một PoC kỹ thuật xuất sắc trong phòng lab đồng nghĩa với việc đã có một doanh nghiệp thành công ngoài thương trường.

**6. Liên kết**
- [Sản phẩm khả dụng tối thiểu](#3-sản-phẩm-khả-dụng-tối-thiểu-minimum-viable-product-mvp) · [Tạo nguyên mẫu thử nghiệm](#2-tạo-nguyên-mẫu-thử-nghiệm-prototyping) · [Đổi mới sáng tạo](../01_Entrepreneurship_Foundations/04_Innovation_Creativity_and_Problem_Fit.md#1-đổi-mới-sáng-tạo-innovation)

---

## Câu hỏi tự kiểm tra

1. So sánh sự khác nhau căn bản giữa Tiền nguyên mẫu (Pretotyping) và Nguyên mẫu thử nghiệm (Prototyping) về mục đích, thời gian và chi phí thực hiện?
2. Trình bày quy tắc kiểm thử nguyên mẫu trên 5 người dùng của Nielsen & Landauer? Tại sao không cần thiết phải thử nghiệm trên 50 người trong giai đoạn này?
3. Phân tích mô hình "Bánh Cupcake" trong việc thiết kế Sản phẩm khả dụng tối thiểu (MVP)? Một MVP đúng nghĩa phải đáp ứng 4 lát cắt nào của trải nghiệm người dùng?
4. Phân biệt sự khác nhau giữa Bằng chứng khái niệm khả thi (PoC) và Sản phẩm khả dụng tối thiểu (MVP)? Cho ví dụ cụ thể trong lĩnh vực Trí tuệ nhân tạo (AI)?
5. Trình bày thang đo mức độ sẵn sàng của công nghệ (TRL) của NASA và chỉ ra vị trí của PoC trong thang đo này?

---

## Ghi chú nguồn

- Savoia, A. (2019). *The Right It: Why So Many Ideas Fail and How to Make Sure Yours Succeed*. HarperOne.
- Nielsen, J., & Landauer, T. K. (1993). A mathematical model of the finding of usability problems. *Proceedings of the INTERACT'93 and CHI'93 conference on Human factors in computing systems*, 206-213.
- Mankins, J. C. (1995). *Technology Readiness Levels: A White Paper*. NASA, Office of Space Access and Technology.
