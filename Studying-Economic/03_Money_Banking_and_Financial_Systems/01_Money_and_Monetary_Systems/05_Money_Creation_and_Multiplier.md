# Chuyên đề 1.5: Quá trình Tạo tiền, Tạo lập Tín dụng, Số nhân và Vòng quay Tiền tệ

Chuyên đề này đi sâu vào cơ chế tạo tiền và tạo lập tín dụng nội sinh của hệ thống ngân hàng thương mại hiện đại, dẫn xuất công thức số nhân tiền tệ toàn diện, và giải thích vai trò của tốc độ lưu thông (vòng quay) tiền tệ trong nền kinh tế.

> Câu hỏi xuyên suốt: Tiền tệ sinh ra từ đâu trong nền kinh tế hiện đại — do máy in của Ngân hàng Trung ương hay do cú nhấp chuột giải ngân khoản vay của Ngân hàng Thương mại?

---

## 1. Quá trình Tạo tiền (Money Creation)

**1. Là gì?**
Quá trình tạo tiền (Money Creation) là quá trình làm gia tăng lượng cung tiền trong một nền kinh tế, bao gồm việc Ngân hàng Trung ương phát hành tiền cơ sở và hệ thống ngân hàng thương mại tạo ra tiền gửi thanh toán thông qua hoạt động giải ngân cho vay. Trong hệ thống tài chính hiện đại, tiền phần lớn không được tạo ra từ việc in giấy bạc vật lý mà được tạo ra dưới dạng bút tệ (ghi sổ điện tử) mỗi khi một khoản vay ngân hàng mới được thiết lập. Nếu chỉ nhớ một điều: **Khoản vay tạo ra tiền gửi (Loans create deposits), chứ không phải tiền gửi tạo ra khoản vay.**

**2. Hoạt động thế nào?**
- Báo cáo kinh điển của Ngân hàng Trung ương Anh (Bank of England, 2014) xác nhận quan điểm tiền tệ nội sinh: Khi ngân hàng chấp thuận giải ngân khoản vay 1 tỷ đồng cho khách hàng, ngân hàng không lấy tiền mặt của người khác đưa cho khách hàng, mà đơn giản là ghi Nợ tài khoản "Cho vay" và ghi Có tài khoản "Tiền gửi thanh toán" của khách hàng đó.
- Cung tiền của nền kinh tế lập tức tăng thêm 1 tỷ đồng chỉ bằng một bút toán kế toán.
- Quá trình này không phải vô hạn mà bị giới hạn bởi: Quy định an toàn vốn (Capital Adequacy Ratio - CAR), rủi ro tín dụng của người vay, tính thanh khoản dự trữ liên ngân hàng và nhu cầu vay vốn của nền kinh tế.
- Khi khách hàng trả nợ gốc, quy trình diễn ra ngược lại: Tiền gửi bị xóa bỏ và cung tiền của nền kinh tế co hẹp lại (Money destruction).

**3. Công thức & mô hình**
Bảng cân đối kế toán của NHTM khi tạo tiền qua khoản vay mới:

$$
\begin{array}{|l|l|}
\hline
\textbf{Tài sản (Assets)} & \textbf{Nguồn vốn (Liabilities)} \\
\hline
\text{Khoản cho vay khách hàng: } +L & \text{Tiền gửi thanh toán của khách hàng: } +D \\
\hline
\end{array}
$$

Tổng cung tiền tăng một lượng: $\Delta M = +D$.

**4. Ví dụ**
- Bạn vay ngân hàng 2 tỷ VND để mua căn hộ. Ngân hàng kiểm tra hồ sơ, phê duyệt và bấm lệnh chuyển 2 tỷ VND vào tài khoản thanh toán của bạn. Tại thời điểm đó, 2 tỷ VND tiền mới đã được tạo ra trong khối $M_1/M_2$ của nền kinh tế mà không cần NHTW in thêm một tờ tiền polymer nào.
- Sau đại dịch 2020, gói kích thích tài khóa và tín dụng toàn cầu đã tạo ra lượng tiền kỷ lục, thúc đẩy thanh khoản thị trường chứng khoán và bất động sản toàn cầu tăng vọt.
- Khi một cuộc khủng hoảng xảy ra (như 2008), các ngân hàng siết chặt tiêu chuẩn tín dụng, khách hàng ồ ạt trả nợ và không dám vay mới, dẫn đến cung tiền suy giảm nghiêm trọng.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Giúp các nhà phân tích vĩ mô hiểu rõ mối liên hệ trực tiếp giữa tăng trưởng tín dụng ngân hàng và tăng trưởng cung tiền.
- Tranh luận: Mô hình truyền thống trong sách giáo khoa cũ (Intermediation model - ngân hàng chỉ là trung gian gom tiền tiết kiệm rồi đem cho vay) đã bị bác bỏ bởi các NHTW hàng đầu thế giới; mô hình tạo tiền nội sinh (Credit creation theory) mới phản ánh thực tế hoạt động ngân hàng.
- Lỗi thường gặp: Nghĩ rằng ngân hàng phải chờ có người đến gửi tiền tiết kiệm thì mới có vốn để cho người khác vay.

**6. Liên kết**
- [Tạo lập tín dụng](#2-sự-tạo-lập-tín-dụng-credit-creation) · [Số nhân tiền tệ](#3-số-nhân-tiền-tệ-money-multiplier) · [Bảng cân đối ngân hàng](../03_Banking_Systems/04_Bank_Balance_Sheet_Reserves_and_Capital.md)

---

## 2. Sự tạo lập tín dụng (Credit Creation)

**1. Là gì?**
Sự tạo lập tín dụng (Credit Creation) là khả năng của toàn bộ hệ thống ngân hàng thương mại trong việc mở rộng quy mô tín dụng và các khoản phải thu vượt xa lượng tiền mặt cơ sở ban đầu mà họ tiếp nhận. Tín dụng là quyền sử dụng vốn tạm thời được cấp cho người đi vay dựa trên cam kết hoàn trả trong tương lai có kèm lãi suất. Nếu chỉ nhớ một điều: **Tín dụng là huyết mạch của nền kinh tế thị trường, chuyển giao sức mua từ tương lai về hiện tại để phục vụ đầu tư và tiêu dùng.**

**2. Hoạt động thế nào?**
- Hệ thống ngân hàng đánh giá uy tín tín dụng (creditworthiness), tài sản bảo đảm và phương án kinh doanh của khách hàng để quyết định cấp hạn mức tín dụng.
- Hoạt động tạo lập tín dụng thúc đẩy đầu tư vốn cố định (nhà xưởng, máy móc) và tài trợ vốn lưu động cho chuỗi cung ứng.
- Khi nền kinh tế hưng phấn, tín dụng mở rộng dễ dãi, dẫn đến đầu cơ tài sản và tích lũy nợ xấu.
- Ngân hàng Trung ương điều tiết quy mô tín dụng thông qua hạn mức tăng trưởng tín dụng (room tín dụng tại Việt Nam) hoặc điều chỉnh lãi suất chính sách để làm tăng/giảm chi phí vay vốn.

**3. Công thức & mô hình**
Tăng trưởng dư nợ tín dụng hàng năm:

$$
g_{\text{Credit}} = \frac{\text{Credit}_t - \text{Credit}_{t-1}}{\text{Credit}_{t-1}} \times 100\%
$$

Tỷ lệ Tín dụng trên GDP (Credit-to-GDP Ratio):

$$
\text{Credit-to-GDP} = \frac{\text{Tổng dư nợ tín dụng toàn hệ thống}}{\text{GDP danh nghĩa}}
$$

Chỉ số "Khoảng cách Tín dụng/GDP" (Credit-to-GDP Gap) là chỉ báo cảnh báo sớm rủi ro bong bóng hệ thống tài chính theo tiêu chuẩn Basel.

**4. Ví dụ**
- Tại Việt Nam, tăng trưởng tín dụng toàn hệ thống năm 2023 đạt khoảng 13,71% (nguồn: NHNN), bơm hàng triệu tỷ đồng vốn tín dụng vào nền kinh tế để hỗ trợ doanh nghiệp phục hồi sản xuất.
- Ví dụ số minh họa: Một nền kinh tế có GDP danh nghĩa 10.000 nghìn tỷ VND và dư nợ tín dụng là 13.000 nghìn tỷ VND. Tỷ lệ Credit-to-GDP là $130\%$. Nếu tín dụng tăng vọt lên $150\%$ trong 2 năm, rủi ro nợ xấu hệ thống sẽ bị cảnh báo đỏ.
- Khủng hoảng Subprime Mỹ (2007–2008): Tín dụng thứ cấp được tạo lập dễ dãi cho những người đi vay không có việc làm, không thu nhập (khoản vay NINJA - No Income, No Job, No Assets) đã làm sụp đổ toàn bộ chuỗi chứng khoán hóa nợ.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Điều phối dòng vốn xã hội, ngăn ngừa suy thoái và kiểm soát rủi ro hệ thống.
- Trade-off: Mở rộng tín dụng kích thích tăng trưởng kinh tế ngắn hạn nhưng làm tăng tỷ lệ đòn bẩy tài chính và rủi ro nợ xấu trong dài hạn.
- Lỗi thường gặp: Đồng nhất tín dụng với vốn chủ sở hữu; tín dụng là nợ phải hoàn trả, tạo ra áp lực trả nợ cố định bất chấp kết quả kinh doanh.

**6. Liên kết**
- [Quá trình tạo tiền](#1-quá-trình-tạo-tiền-money-creation) · [Rủi ro tín dụng](../04_Credit_and_Lending/08_Underwriting_Ratios_and_Credit_Risk.md) · [Hạn mức tín dụng](../02_Central_Banking/03_Interest_Rates_and_Operating_Targets.md)

---

## 3. Số nhân tiền tệ (Money Multiplier)

**1. Là gì?**
Số nhân tiền tệ (Money Multiplier - ký hiệu $m$) là hệ số đo lường mức độ mở rộng của tổng cung tiền ($M$) từ một đơn vị tiền cơ sở ($MB$) do Ngân hàng Trung ương đưa vào hệ thống. Số nhân phản ánh khả năng khuếch đại tiền tệ của toàn bộ hệ thống tài chính dựa trên thói quen giữ tiền mặt của người dân và tỷ lệ dự trữ của các ngân hàng. Nếu chỉ nhớ một điều: **Số nhân tiền tệ cho biết 1 đồng tiền cơ sở của NHTW sẽ sinh ra bao nhiêu đồng cung tiền trong nền kinh tế.**

**2. Hoạt động thế nào?**
- Số nhân tiền tệ thực tế không chỉ phụ thuộc vào tỷ lệ dự trữ bắt buộc của NHTW mà còn phụ thuộc vào hai hành vi tự chủ:
  1. Hành vi của công chúng: Quyết định tỷ lệ giữ tiền mặt so với tiền gửi thanh toán ($c = C/D$). Người dân càng giữ nhiều tiền mặt (rò rỉ tiền mặt ngoài ngân hàng), số nhân càng nhỏ.
  2. Hành vi của ngân hàng thương mại: Quyết định tỷ lệ dự trữ vượt mức ($e = ER/D$). Ngân hàng càng giữ nhiều dự trữ đề phòng rủi ro mà không cho vay, số nhân càng giảm.
- Trong thời kỳ bất ổn kinh tế, người dân rút tiền mặt và ngân hàng siết chặt cho vay tích trữ tiền mặt khiến số nhân sụt giảm mạnh.

**3. Công thức & mô hình**
Công thức toán học đầy đủ của số nhân tiền tệ ($m$):

$$
m = \frac{M}{MB} = \frac{C + D}{C + R} = \frac{\frac{C}{D} + 1}{\frac{C}{D} + \frac{R}{D}} = \frac{c + 1}{c + rr + e}
$$

Trong đó:
- $c = C/D$: Tỷ lệ tiền mặt trên tiền gửi.
- $rr = RR/D$: Tỷ lệ dự trữ bắt buộc theo quy định của NHTW.
- $e = ER/D$: Tỷ lệ dự trữ vượt mức của ngân hàng thương mại.

Nếu $c = 0$ và $e = 0$ (mô hình lý thuyết giản đơn), số nhân đạt cực đại: $m_{\text{max}} = \frac{1}{rr}$.

**4. Ví dụ**
- Ví dụ số minh họa: Cho biết tỷ lệ dự trữ bắt buộc $rr = 5\%$, tỷ lệ dự trữ vượt mức $e = 3\%$, và tỷ lệ tiền mặt trên tiền gửi $c = 12\%$.
  $$
  m = \frac{0,12 + 1}{0,12 + 0,05 + 0,03} = \frac{1,12}{0,20} = 5,6
  $$
  Như vậy, nếu NHTW bơm 1.000 tỷ VND tiền cơ sở qua nghiệp vụ OMO, tổng cung tiền sẽ tăng thêm: $\Delta M = 5,6 \times 1.000 = 5.600$ tỷ VND.
- Hoa Kỳ trong Đại Khủng hoảng (1929–1933): Do hàng nghìn ngân hàng phá sản, người dân ồ ạt rút tiền mặt ($c \uparrow$) và ngân hàng tích trữ dự trữ ($e \uparrow$), khiến số nhân tiền tệ sụp đổ hơn 30%, làm co cụm cung tiền và khiến kinh tế rơi vào vòng xoáy giảm phát thảm khốc.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Giúp NHTW tính toán chính xác liều lượng tiền cơ sở cần bơm/hút để đạt được mục tiêu tăng trưởng cung tiền kỳ vọng.
- Tranh luận: Nhiều nhà kinh tế học hiện đại cho rằng số nhân tiền tệ là một khái niệm tĩnh kém hữu dụng trong thực tế điều hành, vì ngày nay các NHTW điều hành vĩ mô thông qua mục tiêu lãi suất chứ không kiểm soát cứng tiền cơ sở.
- Lỗi thường gặp: Áp dụng công thức $1/rr$ một cách máy móc mà bỏ qua hành vi giữ tiền mặt của công chúng và dự trữ thanh khoản của NHTM.

**6. Liên kết**
- [Cung tiền](04_Money_Supply_and_Monetary_Base.md) · [Tiền cơ sở](04_Money_Supply_and_Monetary_Base.md) · [Dự trữ bắt buộc](../02_Central_Banking/04_Policy_Tools_and_Balance_Sheet.md)

---

## 4. Vòng quay tiền tệ (Velocity of Money)

**1. Là gì?**
Vòng quay tiền tệ (Velocity of Money - ký hiệu $V$) là số lần trung bình mà một đơn vị tiền tệ chuyển từ tay người này sang tay người khác để thanh toán cho các hàng hóa và dịch vụ cuối cùng trong một khoảng thời gian nhất định (thường là một năm). Vòng quay tiền tệ đo lường tần suất hoạt động và tốc độ lưu thông của dòng máu tiền tệ trong cơ thể nền kinh tế. Nếu chỉ nhớ một điều: **Vòng quay tiền tệ đo lường một đồng tiền được tiêu dùng bao nhiêu lần trong một năm để tạo ra GDP.**

**2. Hoạt động thế nào?**
- Vòng quay tiền tệ phụ thuộc vào: Tần suất trả lương, mức độ phát triển của công nghệ thanh toán (thẻ, quét mã QR, chuyển khoản tức thì làm tăng $V$), lãi suất và kỳ vọng lạm phát.
- Khi người dân kỳ vọng lạm phát cao, họ có xu hướng tiêu tiền thật nhanh để tránh mất giá, làm vòng quay tiền tệ $V$ tăng vọt.
- Ngược lại, khi nền kinh tế bi quan, người dân và doanh nghiệp găm giữ tiền mặt phòng thủ, không dám chi tiêu hay đầu tư, khiến $V$ sụt giảm mạnh (bẫy thanh khoản - Liquidity Trap).
- Tác động vĩ mô: Nếu NHTW bơm tiền ồ ạt nhưng vòng quay tiền tệ $V$ giảm tương ứng, tổng chi tiêu danh nghĩa và lạm phát vẫn có thể không tăng.

**3. Công thức & mô hình**
Dẫn xuất từ Phương trình trao đổi của Irving Fisher:

$$
V = \frac{P \times Y}{M} = \frac{\text{GDP danh nghĩa}}{\text{Cung tiền } M}
$$

Trong đó $P$ là chỉ số giá, $Y$ là sản lượng thực tế (GDP thực tế), $P \times Y$ là GDP danh nghĩa, và $M$ là khối lượng cung tiền ($M_1$ hoặc $M_2$).

**4. Ví dụ**
- Ví dụ số minh họa: Một nền kinh tế nhỏ chỉ có 3 người (Nông dân, Thợ may, Bác sĩ) và đúng một tờ 500.000 đồng. Nông dân dùng 500.000 đ mua áo của thợ may; thợ may dùng 500.000 đ đi khám bệnh của bác sĩ; bác sĩ dùng 500.000 đ mua gạo của nông dân. Tổng giá trị hàng hóa tạo ra (GDP) là 1.500.000 đồng, trong khi lượng tiền chỉ có 500.000 đồng. Vòng quay tiền tệ là $V = 1.500.000 / 500.000 = 3$ vòng/năm.
- Tại Mỹ: Vòng quay cung tiền $M_2$ từng đạt đỉnh hơn 2,1 vào năm 1997, nhưng sau khủng hoảng 2008 và đại dịch 2020 đã giảm xuống dưới 1,1–1,2 do xu hướng tích lũy tiền gửi an toàn tăng vọt.
- Việt Nam: Công nghệ thanh toán số bùng nổ (chuyển tiền 24/7 NAPAS, ví điện tử) giúp dòng tiền luân chuyển tức thì giữa các tài khoản, nâng cao hiệu quả thanh toán toàn xã hội.

**5. Ứng dụng & tranh luận**
- Ứng dụng: Đánh giá hiệu quả của chính sách kích thích tiền tệ và dự báo lạm phát.
- Tranh luận: Phái Tiền tệ cổ điển (Monetarists) giả định $V$ tương đối ổn định trong ngắn hạn; tuy nhiên dữ liệu thực nghiệm hiện đại cho thấy $V$ biến động mạnh và bất ổn định, khiến việc kiểm soát lạm phát thông qua mục tiêu cung tiền thuần túy trở nên kém chính xác.
- Lỗi thường gặp: Tưởng rằng vòng quay tiền tệ là một biến số mà NHTW có thể áp đặt; thực tế $V$ hoàn toàn là kết quả nội sinh từ tâm lý chi tiêu và công nghệ thanh toán của xã hội.

**6. Liên kết**
- [Thuyết số lượng tiền tệ](06_Quantity_Theory_and_Transmission.md) · [Cung tiền](04_Money_Supply_and_Monetary_Base.md) · [Hệ thống thanh toán tức thời](../07_Payment_Systems_and_Financial_Technology/01_Payment_Systems_Infrastructure_and_Clearing.md)

---

## Câu hỏi tự kiểm tra

1. Tại sao các nghiên cứu hiện đại của Bank of England khẳng định: "Các khoản vay tạo ra tiền gửi, chứ không phải tiền gửi tạo ra các khoản vay"?
2. Phân tích 3 yếu tố cốt lõi quyết định quy mô của số nhân tiền tệ ($m$).
3. Nếu tỷ lệ giữ tiền mặt của công chúng ($c$) tăng mạnh, số nhân tiền tệ và tổng cung tiền sẽ biến động như thế nào? Vì sao?
4. Trình bày công thức tính vòng quay tiền tệ ($V$) từ Phương trình trao đổi.
5. Giải thích tại sao trong bối cảnh bẫy thanh khoản (Liquidity Trap), NHTW dù bơm rất nhiều tiền nhưng nền kinh tế vẫn rơi vào nguy cơ giảm phát.

---

## Ghi chú nguồn

- McLeay, M., Radia, A., & Thomas, R. (2014). "Money creation in the modern economy", *Bank of England Quarterly Bulletin*, Q1.
- Fisher, I. (1911). *The Purchasing Power of Money*, Macmillan.
- Federal Reserve Bank of St. Louis (FRED): Velocity of M2 Money Stock.
- Ngân hàng Nhà nước Việt Nam: Báo cáo tổng kết hoạt động ngân hàng năm 2023.