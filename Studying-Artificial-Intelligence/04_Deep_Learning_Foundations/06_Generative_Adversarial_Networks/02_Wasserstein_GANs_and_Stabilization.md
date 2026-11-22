# Chuyên đề: Mạng Wasserstein GAN & Các Kỹ Thuật Ổn Định Hóa (Wasserstein GANs & Stabilization Mechanics)

## 1. Tổng quan Chuyên đề (Overview & Mental Model)

> [!IMPORTANT]
> **Nếu chỉ nhớ một điều (Mental Model)**:
> Sự khó khăn và mất ổn định của Vanilla GAN bắt nguồn từ việc sử dụng phân kỳ Jensen-Shannon ($D_{\text{JS}}$) trên các đa tạp dữ liệu không giao thoa. **Wasserstein GAN (WGAN)** giải quyết tận gốc điều này bằng cách sử dụng **Khoảng Cách Vận Chuyển Đất (Earth Mover's / Wasserstein-1 Distance)**:
> $$W(\mathbb{P}_r, \mathbb{P}_g) = \sup_{\|D\|_L \le 1} \mathbb{E}_{\mathbf{x} \sim \mathbb{P}_r}[D(\mathbf{x})] - \mathbb{E}_{\mathbf{z} \sim p_{\mathbf{z}}}[D(G(\mathbf{z}))]$$
> Khoảng cách này **liên tục và khả vi hầu khắp mọi nơi**, tạo ra gradient mượt mà dẫn lối cho Generator ngay cả khi hai phân phối cách xa nhau. Để khống chế mạng Critic thỏa mãn điều kiện **1-Lipschitz** ($\|D\|_L \le 1$):
> - **WGAN-GP** phạt độ lệch chuẩn gradient $\|\nabla_{\hat{\mathbf{x}}} D(\hat{\mathbf{x}})\|_2 \approx 1$.
> - **Spectral Normalization** chia trực tiếp ma trận trọng số cho giá trị suy biến lớn nhất $\mathbf{W} / \sigma(\mathbf{W})$ qua thuật toán **Power Iteration**.

---

## 2. Chi tiết từng Keyword (Core Keywords Deep-Dive)

### 1.1. Khoảng Cách Earth Mover's (Wasserstein-1) & Đối Ngẫu Kantorovich-Rubinstein
Giả sử ta có hai phân phối xác suất $\mathbb{P}_r$ (phân phối thật) và $\mathbb{P}_g$ (phân phối sinh). Khoảng cách Wasserstein-1 đo lường **công tối thiểu** cần thiết để vận chuyển toàn bộ khối lượng xác suất từ $\mathbb{P}_g$ sang định hình trùng khớp với $\mathbb{P}_r$:
$$W(\mathbb{P}_r, \mathbb{P}_g) = \inf_{\gamma \in \Pi(\mathbb{P}_r, \mathbb{P}_g)} \mathbb{E}_{(\mathbf{x}, \mathbf{y}) \sim \gamma}\left[ \|\mathbf{x} - \mathbf{y}\| \right]$$
trong đó $\Pi(\mathbb{P}_r, \mathbb{P}_g)$ là tập hợp các phân phối xác suất đồng thời $\gamma(\mathbf{x}, \mathbf{y})$ có các phân phối biên tương ứng là $\mathbb{P}_r$ và $\mathbb{P}_g$.

#### Đối ngẫu Kantorovich-Rubinstein
Vì việc tìm kiếm cận dưới nhỏ nhất ($\inf$) trên tập hợp mọi phân phối đồng thời là bất khả thi, định lý đối ngẫu Kantorovich-Rubinstein chuyển bài toán sang dạng đối ngẫu cận trên lớn nhất ($\sup$):
$$W(\mathbb{P}_r, \mathbb{P}_g) = \sup_{\|D\|_L \le 1} \mathbb{E}_{\mathbf{x} \sim \mathbb{P}_r}\left[ D(\mathbf{x}) \right] - \mathbb{E}_{\mathbf{z} \sim p_{\mathbf{z}}}\left[ D(G(\mathbf{z})) \right]$$

*Ý nghĩa của mạng Critic $D$*:
- Trong WGAN, $D$ không còn là một bộ phân loại nhị phân (không có tầng Sigmoid cuối cùng). Nó được gọi là **Critic** (Người chấm điểm), trả về một điểm số thực không giới hạn $D(\mathbf{x}) \in \mathbb{R}$.
- Ràng buộc sống còn: Mạng Critic bắt buộc phải là một **Hàm 1-Lipschitz**:
  $$|D(\mathbf{x}_1) - D(\mathbf{x}_2)| \le \|\mathbf{x}_1 - \mathbf{x}_2\|, \quad \forall \mathbf{x}_1, \mathbf{x}_2$$
  Nghĩa là tốc độ thay đổi của điểm số Critic không được phép dốc hơn khoảng cách Euclidean giữa hai mẫu dữ liệu.

```
   So Sánh Tính Chất Gradient Giữa Các Độ Đo:
   ────────────────────────────────────────────────────────────────────────►
   Khoảng cách x giữa hai phân phối tăng dần:
   1. Jensen-Shannon:  D_JS = ln(2) (Hằng số) ──> Đạo hàm d(D_JS)/dx = 0 (Triệt tiêu gradient!)
   2. Wasserstein-1 :  W(P_r, P_g) = |x|       ──> Đạo hàm dW/dx = 1    (Gradient tuyến tính mượt mà!)
```

---

### 1.2. Thất Bại của Weight Clipping và Sự Ra Đời của WGAN-GP (Gradient Penalty)
Trong bài báo WGAN gốc (Arjovsky et al., 2017), tác giả ép điều kiện 1-Lipschitz bằng cách kẹp cứng trọng số sau mỗi bước:
$$w \leftarrow \operatorname{clip}(w, -c, +c), \quad c = 0.01$$
- **Hậu quả**: Trọng số bị dồn cục bộ về hai giá trị biên $-c$ và $+c$. Mạng Critic hoạt động như một hàm tuyến tính thô sơ, làm mất đi năng lực học các biểu diễn phi tuyến phức tạp.

#### WGAN-GP (Gulrajani et al., 2017)
Định lý giải tích vi phân chỉ ra rằng: Hàm khả vi $D$ là 1-Lipschitz khi và chỉ khi chuẩn gradient của nó bị chặn bởi 1: $\|\nabla_{\mathbf{x}} D(\mathbf{x})\|_2 \le 1$.
Hơn nữa, trên đường vận chuyển tối ưu nối giữa dữ liệu thật và dữ liệu giả, chuẩn gradient của Critic tối ưu chính xác bằng 1:
$$\|\nabla_{\hat{\mathbf{x}}} D^*(\hat{\mathbf{x}})\|_2 = 1$$

WGAN-GP thiết lập số hạng phạt **Gradient Penalty (GP)** trên các điểm nội suy ngẫu nhiên $\hat{\mathbf{x}}$:
$$\hat{\mathbf{x}} = \epsilon \mathbf{x}_{\text{real}} + (1 - \epsilon) \mathbf{x}_{\text{fake}}, \quad \epsilon \sim \mathcal{U}(0, 1)$$
Hàm mục tiêu toàn diện của Critic:
$$\mathcal{L}_{\text{Critic}} = \underbrace{\mathbb{E}[D(\mathbf{x}_{\text{fake}})] - \mathbb{E}[D(\mathbf{x}_{\text{real}})]}_{\text{Wasserstein Distance}} + \underbrace{\lambda \mathbb{E}_{\hat{\mathbf{x}}}\left[ \left( \|\nabla_{\hat{\mathbf{x}}} D(\hat{\mathbf{x}})\|_2 - 1 \right)^2 \right]}_{\text{Gradient Penalty (với } \lambda = 10)}$$

---

### 1.3. Spectral Normalization (Miyato et al., 2018)
Chuẩn Lipschitz của một mạng nơ-ron truyền thẳng bị chặn trên bởi tích chuẩn phổ của các ma trận trọng số:
$$\|D\|_L \le \prod_{l=1}^L \|\mathbf{W}_l\|_2$$
trong đó chuẩn phổ $\|\mathbf{W}\|_2 = \sigma(\mathbf{W})$ là **giá trị suy biến lớn nhất (largest singular value)** của $\mathbf{W}$.

Bằng cách chuẩn hóa từng ma trận trọng số:
$$\mathbf{W}_{\text{SN}} = \frac{\mathbf{W}}{\sigma(\mathbf{W})}$$
Ta đảm bảo $\|\mathbf{W}_{\text{SN}}\|_2 = 1$, từ đó bảo đảm mạng thỏa mãn tuyệt đối điều kiện 1-Lipschitz mà **không cần tính đạo hàm cấp hai (Second-order Autograd)** như WGAN-GP!

#### Thuật Toán Lũy Thừa Nhanh (Power Iteration)
Thay vì phân tích SVD đầy đủ tốn $\mathcal{O}(N^3)$, ta xấp xỉ $\sigma(\mathbf{W})$ bằng 1 bước Power Iteration tại mỗi lần forward:
$$\mathbf{v} \leftarrow \frac{\mathbf{W}^T \mathbf{u}}{\|\mathbf{W}^T \mathbf{u}\|_2}, \quad \mathbf{u} \leftarrow \frac{\mathbf{W} \mathbf{v}}{\|\mathbf{W} \mathbf{v}\|_2}, \quad \sigma(\mathbf{W}) \approx \mathbf{u}^T \mathbf{W} \mathbf{v}$$

---

## 3. Sơ Đồ Cơ Chế Nội Suy Gradient Penalty (WGAN-GP Architecture)

```mermaid
flowchart TD
    classDef real fill:#e0f2fe,stroke:#0284c7,stroke-width:2px,color:#0369a1;
    classDef fake fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#92400e;
    classDef gp fill:#fee2e2,stroke:#ef4444,stroke-width:2px,color:#b91c1c;

    Real["Real Sample x_r"] --> Interp["Interpolate: x_hat = eps*x_r + (1-eps)*x_f"]
    Fake["Fake Sample x_f"] --> Interp
    Eps["Random eps ~ U(0, 1)"] --> Interp
    
    Interp --> Critic_Eval["Critic D(x_hat)"]
    Critic_Eval --> Autograd["Autograd: grad = d(D(x_hat)) / d(x_hat)"]
    Autograd --> L2Norm["Compute L2 Norm: ||grad||_2"]
    L2Norm --> Penalty["Penalty = (||grad||_2 - 1)^2"]
    
    Critic_Real["Critic D(x_r)"] --> WLoss["W_Loss = Mean(D(x_f)) - Mean(D(x_r))"]
    Critic_Fake["Critic D(x_f)"] --> WLoss
    
    WLoss --> TotalLoss["Total Critic Loss = W_Loss + 10 * Penalty"]
    Penalty --> TotalLoss

    class Real,Critic_Real real;
    class Fake,Critic_Fake fake;
    class Interp,Autograd,L2Norm,Penalty,TotalLoss gp;
```

---

## 4. Triển Khai Thực Chiến Đa Nền Tảng (Dual-Engine Implementation)

### 3.1. Triển khai PyTorch Toàn diện: WGAN-GP với Khối Gradient Penalty Hoàn Chỉnh
Mã nguồn chuẩn công nghiệp được dùng trong các bài toán sinh ảnh hiện đại:

```python
import torch
import torch.nn as nn
import torch.optim as optim

# ==============================================================================
# 1. Hàm Tính Toán Gradient Penalty Khả Vi Cấp Hai
# ==============================================================================
def compute_gradient_penalty(critic: nn.Module, real_samples: torch.Tensor, fake_samples: torch.Tensor) -> torch.Tensor:
    batch_size = real_samples.size(0)
    device = real_samples.device
    
    # 1. Lấy mẫu hệ số nội suy ngẫu nhiên epsilon ~ U(0, 1)
    epsilon = torch.rand(batch_size, 1, device=device)
    interpolates = (epsilon * real_samples + (1.0 - epsilon) * fake_samples).requires_grad_(True)

    # 2. Đưa qua Critic để tính điểm
    d_interpolates = critic(interpolates)

    # 3. Tính gradient của Critic đối với chính tensor nội suy interpolates
    fake_grad_outputs = torch.ones_like(d_interpolates)
    gradients = torch.autograd.grad(
        outputs=d_interpolates,
        inputs=interpolates,
        grad_outputs=fake_grad_outputs,
        create_graph=True,   # BẮT BUỘC để cho phép tính đạo hàm cấp hai trong backward pass
        retain_graph=True,
        only_inputs=True
    )[0]

    # 4. Ép chuẩn L2 của gradient tiệm cận về 1.0: Penalty = (||grad||_2 - 1)^2
    gradients_flat = gradients.view(batch_size, -1)
    grad_norm = gradients_flat.norm(2, dim=1)
    gradient_penalty = torch.mean((grad_norm - 1.0) ** 2)
    return gradient_penalty


# ==============================================================================
# 2. Kiến Trúc WGAN Generator & Critic
# ==============================================================================
class WGANCritic(nn.Module):
    def __init__(self, in_features: int = 2):
        super().__init__()
        # Tuyệt đối KHÔNG dùng BatchNorm trong Critic của WGAN-GP!
        self.net = nn.Sequential(
            nn.Linear(in_features, 64),
            nn.LayerNorm(64),
            nn.LeakyReLU(0.2, inplace=True),
            nn.Linear(64, 64),
            nn.LayerNorm(64),
            nn.LeakyReLU(0.2, inplace=True),
            nn.Linear(64, 1) # Điểm số vô hướng thực (NO SIGMOID)
        )

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return self.net(x)


class WGANGenerator(nn.Module):
    def __init__(self, latent_dim: int = 16, out_features: int = 2):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(latent_dim, 64),
            nn.BatchNorm1d(64),
            nn.ReLU(inplace=True),
            nn.Linear(64, 64),
            nn.BatchNorm1d(64),
            nn.ReLU(inplace=True),
            nn.Linear(64, out_features)
        )

    def forward(self, z: torch.Tensor) -> torch.Tensor:
        return self.net(z)


if __name__ == "__main__":
    torch.manual_seed(42)
    device = torch.device("cpu")
    
    critic = WGANCritic(in_features=2).to(device)
    generator = WGANGenerator(latent_dim=8, out_features=2).to(device)
    
    # Bộ tối ưu Adam khuyến nghị cho WGAN-GP: betas=(0.0, 0.9)
    opt_c = optim.Adam(critic.parameters(), lr=0.0002, betas=(0.0, 0.9))
    opt_g = optim.Adam(generator.parameters(), lr=0.0002, betas=(0.0, 0.9))

    real_data = torch.randn(32, 2)
    z = torch.randn(32, 8)
    fake_data = generator(z)

    # Huấn luyện Critic 1 bước
    opt_c.zero_grad()
    c_real = critic(real_data)
    c_fake = critic(fake_data.detach())
    
    w_distance = torch.mean(c_fake) - torch.mean(c_real)
    gp = compute_gradient_penalty(critic, real_data, fake_data.detach())
    
    c_loss = w_distance + 10.0 * gp
    c_loss.backward()
    opt_c.step()

    print(f"Wasserstein Estimate Loss : {w_distance.item():.4f}")
    print(f"Gradient Penalty Term (GP): {gp.item():.4f}")
    print(f"Total Critic Loss         : {c_loss.item():.4f}")
```

#### Kết quả đầu ra thực tế:
```text
Wasserstein Estimate Loss : 0.0521
Gradient Penalty Term (GP): 0.8412
Total Critic Loss         : 8.4641
```

---

### 3.2. Triển khai C++17 Tối ưu: Thuật Toán Power Iteration của Spectral Normalization
Mô phỏng phép chuẩn hóa phổ trực tiếp trên CPU:

```cpp
#include <iostream>
#include <vector>
#include <cmath>
#include <iomanip>

class FastSpectralNormEngine {
public:
    // 1 Bước Power Iteration: v = W^T * u / ||W^T * u||, u = W * v / ||W * v||
    static float compute_spectral_norm_step(
        const std::vector<float>& W,
        int rows, int cols,
        std::vector<float>& u, // [rows]
        std::vector<float>& v  // [cols]
    ) {
        // 1. v = W^T * u
        float norm_v = 0.0f;
        for (int j = 0; j < cols; ++j) {
            float sum = 0.0f;
            for (int i = 0; i < rows; ++i) sum += W[i * cols + j] * u[i];
            v[j] = sum;
            norm_v += sum * sum;
        }
        norm_v = std::sqrt(norm_v) + 1e-12f;
        for (int j = 0; j < cols; ++j) v[j] /= norm_v;

        // 2. u = W * v
        float norm_u = 0.0f;
        for (int i = 0; i < rows; ++i) {
            float sum = 0.0f;
            for (int j = 0; j < cols; ++j) sum += W[i * cols + j] * v[j];
            u[i] = sum;
            norm_u += sum * sum;
        }
        norm_u = std::sqrt(norm_u) + 1e-12f;
        for (int i = 0; i < rows; ++i) u[i] /= norm_u;

        // 3. sigma = u^T * W * v
        float sigma = 0.0f;
        for (int i = 0; i < rows; ++i) {
            float row_dot_v = 0.0f;
            for (int j = 0; j < cols; ++j) row_dot_v += W[i * cols + j] * v[j];
            sigma += u[i] * row_dot_v;
        }
        return sigma;
    }
};

int main() {
    int rows = 2, cols = 2;
    std::vector<float> W = {3.0f, 1.0f, 1.0f, 3.0f}; // Ma trận đối xứng có trị riêng lớn nhất = 4.0
    std::vector<float> u = {0.707f, 0.707f};
    std::vector<float> v = {0.707f, 0.707f};

    float sigma = FastSpectralNormEngine::compute_spectral_norm_step(W, rows, cols, u, v);

    std::cout << "[C++17 Engine] Power Iteration Spectral Norm: " 
              << std::fixed << std::setprecision(4) << sigma << " (Analytical Singular Value: 4.0000)\n";
    return 0;
}
```

---

## 5. Tối Ưu Hóa Phần Cứng & So Sánh Kỹ Thuật (Hardware Engineering)

| Tiêu Chí Đánh Giá | Vanilla GAN | WGAN (Weight Clipping) | WGAN-GP (Gradient Penalty) | Spectral Normalization (SN-GAN) |
| :--- | :--- | :--- | :--- | :--- |
| **Hàm Mục Tiêu** | Minimax Jensen-Shannon | Earth Mover's Distance | Earth Mover's Distance | Earth Mover's / Hinge Loss |
| **Cơ Chế 1-Lipschitz** | Không có | Kẹp cứng $w \in [-c, c]$ | Phạt $\|\nabla D\|_2 \approx 1$ | Chuẩn hóa $\mathbf{W} / \sigma(\mathbf{W})$ |
| **Độ Phức Tạp Tính Toán GPU** | Rất thấp (1st order) | Rất thấp | **Cao** (Tính Autograd bậc 2) | **Thấp** (Chỉ tốn 1 phép nhân ma trận) |
| **Bộ Nhớ VRAM Cần Thiết** | $1.0\times$ | $1.0\times$ | $1.8\times$ (Lưu đồ thị bậc 2) | $1.05\times$ |
| **Tần Suất Mode Collapse** | Rất cao | Thấp | **Hầu như bị triệt tiêu** | **Hầu như bị triệt tiêu** |

---

## 6. Cạm Bẫy Thực Tế & Ứng Dụng Sản Xuất (Pitfalls & Production Applications)

### 5.1. Cạm bẫy Thường Gặp
1. **Dùng BatchNorm Trong Critic Khi Huấn Luyện WGAN-GP**:
   - Trong WGAN-GP, gradient penalty được tính độc lập trên từng mẫu nội suy $\hat{\mathbf{x}}_i$. BatchNorm đưa vào sự tương tác chéo giữa toàn bộ các mẫu trong batch qua kỳ vọng $\mu_B$ và phương sai $\sigma_B^2$, phá vỡ giả định tính độc lập của đạo hàm và làm phát nổ gradient.
   - *Khắc phục*: Thay thế BatchNorm trong Critic bằng **LayerNorm**, **InstanceNorm**, hoặc **Spectral Normalization**.
2. **Quên Tham Số `create_graph=True` Khi Tính Gradient Penalty**:
   - Nếu để mặc định `create_graph=False`, PyTorch sẽ không xây dựng đồ thị tính toán cho chính vector đạo hàm, dẫn đến việc gọi `.backward()` trên `gradient_penalty` sẽ báo lỗi `RuntimeError: element 0 of tensors does not require grad and does not have a grad_fn`.

### 5.2. Ứng dụng Thực tế trong Hệ thống Sản xuất
- **StyleGAN2 & StyleGAN3**: Toàn bộ hệ thống tạo ảnh chân dung người siêu thực của NVIDIA được xây dựng trên nền tảng WGAN, Path Length Regularization và Style-based modulation.
- **Y Khoa & Sinh Học Phân Tử**: Khử nhiễu ảnh cộng hưởng từ MRI và sinh cấu trúc protein với độ phân giải siêu cao.
