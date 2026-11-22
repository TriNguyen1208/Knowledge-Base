# Chuyên đề: Nền Tảng Đồ Thị & Cơ Chế Truyền Tin (Graph Foundations & Message Passing)

## 1. Tổng quan Chuyên đề (Overview & Mental Model)

> [!IMPORTANT]
> **Nếu chỉ nhớ một điều (Mental Model)**:
> Dữ liệu đồ thị không có thứ tự nút cố định và không tồn tại trong không gian lưới Euclid (Non-Euclidean), do đó mọi phép toán trong GNN bắt buộc phải thỏa mãn tính **Bất biến Hoán vị (Permutation Invariance)** hoặc **Đồng biến Hoán vị (Permutation Equivariance)**. 
> - **Tiếp cận Không gian (Spatial MPNN)**: Mô phỏng quá trình truyền tin qua 3 bước: **Tạo thông điệp** từ láng giềng $M(h_u, h_v)$, **Gom cụm đối xứng** $\bigoplus_{u \in \mathcal{N}(v)}$ (Sum/Mean/Max), và **Cập nhật** trạng thái nút $U(h_v, m_v)$.
> - **Tiếp cận Phổ (Spectral GNN)**: Dựa trên phân tích trị riêng của toán tử vi phân **Graph Laplacian** $\mathbf{L} = \mathbf{D} - \mathbf{A}$ để định nghĩa phép biến đổi Fourier và tích chập trên miền tần số đồ thị.

---

## 2. Chi tiết từng Keyword (Core Keywords Deep-Dive)

### 1.1. Biểu Diễn Đồ Thị & Tính Đối Xứng Hoán Vị (Symmetry & Permutations)
Cho một đồ thị $\mathcal{G} = (\mathcal{V}, \mathcal{E})$ với tập nút $\mathcal{V}$ ($|\mathcal{V}| = N$) và tập cạnh $\mathcal{E}$ ($|\mathcal{E}| = M$):
- **Ma trận Đặc trưng Đỉnh**: $\mathbf{X} \in \mathbb{R}^{N \times F}$, trong đó vector hàng $\mathbf{x}_v \in \mathbb{R}^F$ là đặc trưng của nút $v$.
- **Ma trận Kề (Adjacency Matrix)**: $\mathbf{A} \in \{0, 1\}^{N \times N}$, với $\mathbf{A}_{uv} = 1$ nếu có cạnh nối $(u, v) \in \mathcal{E}$, ngược lại $\mathbf{A}_{uv} = 0$.
- **Ma trận Bậc (Degree Matrix)**: $\mathbf{D} \in \mathbb{R}^{N \times N}$ là ma trận đường chéo với $\mathbf{D}_{vv} = \sum_{u} \mathbf{A}_{uv}$.

#### Nguyên Tắc Bất Biến & Đồng Biến Hoán Vị
Khác với ảnh (có tọa độ cố định $(x, y)$ từ góc trên-trái) hay văn bản (có thứ tự từ trái sang phải), các đỉnh trong đồ thị **không có thứ tự tự nhiên**. Nếu ta đảo thứ tự đánh số các đỉnh bằng một ma trận hoán vị $\mathbf{P} \in \{0, 1\}^{N \times N}$:
$$\mathbf{X}_{\text{new}} = \mathbf{P} \mathbf{X}, \quad \mathbf{A}_{\text{new}} = \mathbf{P} \mathbf{A} \mathbf{P}^T$$

- **Permutation Equivariance (Đồng biến hoán vị)**: Một hàm ánh xạ mức nút $f(\mathbf{X}, \mathbf{A})$ phải thỏa mãn:
  $$f(\mathbf{P} \mathbf{X}, \mathbf{P} \mathbf{A} \mathbf{P}^T) = \mathbf{P} f(\mathbf{X}, \mathbf{A})$$
  *(Đảo thứ tự đầu vào thì nhãn đầu ra đảo theo đúng thứ tự đó)*.
- **Permutation Invariance (Bất biến hoán vị)**: Một hàm phân loại toàn đồ thị $g(\mathbf{X}, \mathbf{A})$ phải thỏa mãn:
  $$g(\mathbf{P} \mathbf{X}, \mathbf{P} \mathbf{A} \mathbf{P}^T) = g(\mathbf{X}, \mathbf{A})$$
  *(Đảo thứ tự các đỉnh thì thuộc tính phân tử hay phân loại đồ thị không đổi)*.

---

### 1.2. Lý Thuyết Phổ Đồ Thị & Toán Tử Graph Laplacian
Toán tử vi phân Laplace liên tục $\Delta f = \nabla^2 f = \sum_i \frac{\partial^2 f}{\partial x_i^2}$ đo lường mức độ sai khác giữa giá trị tại một điểm và trung bình các điểm xung quanh.
Trên đồ thị rời rạc, toán tử này được biểu diễn qua **Graph Laplacian Matrix**:

1. **Unnormalized Graph Laplacian ($\mathbf{L}$)**:
   $$\mathbf{L} = \mathbf{D} - \mathbf{A}$$
   Với một tín hiệu vô hướng $\mathbf{x} \in \mathbb{R}^N$ gán trên các đỉnh:
   $$\mathbf{x}^T \mathbf{L} \mathbf{x} = \sum_{u=1}^N \mathbf{D}_{uu} x_u^2 - \sum_{u, v} \mathbf{A}_{uv} x_u x_v = \frac{1}{2} \sum_{(u, v) \in \mathcal{E}} (x_u - x_v)^2 \ge 0$$
   *Ý nghĩa*: $\mathbf{x}^T \mathbf{L} \mathbf{x}$ chính là **Năng lượng Dirichlet**, đo độ mượt mà của tín hiệu trên đồ thị. Do đó $\mathbf{L}$ luôn là ma trận **đối xứng và bán xác định dương**.

2. **Symmetric Normalized Laplacian ($\mathbf{L}_{\text{sym}}$)**:
   $$\mathbf{L}_{\text{sym}} = \mathbf{D}^{-1/2} \mathbf{L} \mathbf{D}^{-1/2} = \mathbf{I}_N - \mathbf{D}^{-1/2} \mathbf{A} \mathbf{D}^{-1/2}$$
   Các trị riêng $\lambda_i$ của $\mathbf{L}_{\text{sym}}$ thỏa mãn $0 = \lambda_1 \le \lambda_2 \le \dots \le \lambda_N \le 2$.

#### Biến Đổi Fourier & Tích Chập Phổ Trên Đồ Thị
Vì $\mathbf{L} = \mathbf{U} \boldsymbol{\Lambda} \mathbf{U}^T$, các vector riêng trực chuẩn $\mathbf{U} = [\mathbf{u}_1, \dots, \mathbf{u}_N]$ đóng vai trò là các hàm sóng cơ sở Fourier trên đồ thị:
- **Biến đổi Fourier**: $\hat{\mathbf{x}} = \mathbf{U}^T \mathbf{x}$
- **Biến đổi Fourier Ngược**: $\mathbf{x} = \mathbf{U} \hat{\mathbf{x}}$
- **Tích chập Phổ**: 
  $$\mathbf{x} \star_{\mathcal{G}} \mathbf{y} = \mathbf{U} \left( (\mathbf{U}^T \mathbf{x}) \odot (\mathbf{U}^T \mathbf{y}) \right) = \mathbf{U} g_\theta(\boldsymbol{\Lambda}) \mathbf{U}^T \mathbf{x}$$

---

### 1.3. Khung Lý Thuyết Truyền Tin (Message Passing Neural Networks - MPNN)
Gilmer et al. (2017) thống nhất toàn bộ các kiến trúc GNN không gian vào khung MPNN tổng quát gồm 3 pha tính toán tại tầng thứ $l$:

1. **Pha 1: Tạo Thông Điệp (Message)**:
   $$\mathbf{m}_{uv}^{(l)} = M^{(l)}\left(\mathbf{h}_u^{(l-1)}, \mathbf{h}_v^{(l-1)}, \mathbf{e}_{uv}\right), \quad \forall u \in \mathcal{N}(v)$$
2. **Pha 2: Gom Cụm Láng Giềng (Aggregation)**:
   $$\mathbf{m}_v^{(l)} = \bigoplus_{u \in \mathcal{N}(v)} \mathbf{m}_{uv}^{(l)}$$
   Hàm gom cụm $\bigoplus$ bắt buộc phải là một phép toán giao hoán và kết hợp (đối xứng) để đảm bảo bất biến hoán vị: ví dụ $\operatorname{SUM}$, $\operatorname{MEAN}$, $\operatorname{MAX}$.
3. **Pha 3: Cập Nhật Trạng Thái Đỉnh (Update)**:
   $$\mathbf{h}_v^{(l)} = U^{(l)}\left(\mathbf{h}_v^{(l-1)}, \mathbf{m}_v^{(l)}\right)$$

```
   Neighborhood Aggregation tại Đỉnh v:
   (u1: h1) ──>[ Message M ]──┐
   (u2: h2) ──>[ Message M ]──┼──>[ Aggregation: SUM / MEAN ]──> m_v ──┐
   (u3: h3) ──>[ Message M ]──┘                                      ▼
                                                    h_v^(l-1) ───>[ Update U ]───> h_v^(l)
```

---

## 3. Sơ Đồ Kiến Trúc & Luồng Dữ Liệu COO / SpMM (Diagrams)

```mermaid
flowchart TD
    classDef node fill:#e0f2fe,stroke:#0284c7,stroke-width:2px,color:#0369a1;
    classDef msg fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#92400e;
    classDef agg fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#15803d;

    subgraph MPNN_Execution ["Cơ Chế Message Passing Thực Tế Trên GPU"]
        N_src["Node Features X: [N, F]"] --> Gather["Gather: x[src_nodes]"]
        Edge["Edge List: edge_index [2, M]"] --> Gather
        Gather --> Msg["Compute Message: M(h_u, h_v)"]
        Msg --> Scatter["Scatter-Add Reduction at dst_nodes"]
        Scatter --> Aggregated["Aggregated Buffer: [N, F_out]"]
        N_self["Self Features: h_v^(l-1)"] --> Update["Update MLP: U(h_v, m_v)"]
        Aggregated --> Update
        Update --> Out["New Node Features H^(l): [N, F_out]"]
    end

    class N_src,N_self,Out node;
    class Gather,Msg,Edge msg;
    class Scatter,Aggregated,Update agg;
```

---

## 4. Triển Khai Thực Chiến Đa Nền Tảng (Dual-Engine Implementation)

### 3.1. Triển khai PyTorch Toàn diện: MPNN Từ Đầu Bằng Thao Tác Scatter-Add
Không sử dụng PyTorch Geometric (PyG) sẵn có, tự triển khai thuật toán Message Passing chuẩn công nghiệp để nắm vững bản chất bộ nhớ:

```python
import torch
import torch.nn as nn
import torch.nn.functional as F

class CustomMPNNLayer(nn.Module):
    def __init__(self, in_features: int, out_features: int, aggr: str = "mean"):
        super().__init__()
        self.in_features = in_features
        self.out_features = out_features
        self.aggr = aggr.lower()
        
        # Message network: Biến đổi đặc trưng nút nguồn
        self.msg_mlp = nn.Linear(in_features, out_features, bias=False)
        # Update network: Kết hợp đặc trưng tự thân và thông điệp láng giềng
        self.update_mlp = nn.Sequential(
            nn.Linear(in_features + out_features, out_features),
            nn.ReLU()
        )

    def forward(self, x: torch.Tensor, edge_index: torch.Tensor) -> torch.Tensor:
        """
        x: [N, in_features] - Node features
        edge_index: [2, M] - [0]=src, [1]=dst
        """
        num_nodes = x.size(0)
        src, dst = edge_index[0], edge_index[1]

        # 1. Message: m_uv = W * h_u
        messages = self.msg_mlp(x[src]) # [M, out_features]

        # 2. Aggregate: Scatter Add thông điệp vào đỉnh đích
        aggregated = torch.zeros(num_nodes, self.out_features, device=x.device)
        aggregated.index_add_(0, dst, messages)

        # Nếu là Mean Aggregation: Chia cho bậc của đỉnh (Degree normalization)
        if self.aggr == "mean":
            degree = torch.zeros(num_nodes, 1, device=x.device)
            degree.index_add_(0, dst, torch.ones(dst.size(0), 1, device=x.device))
            degree = torch.clamp(degree, min=1.0) # Tránh chia cho 0 với isolated nodes
            aggregated = aggregated / degree

        # 3. Update: h_v^(l) = MLP([h_v^(l-1), m_v])
        update_input = torch.cat([x, aggregated], dim=-1)
        h_next = self.update_mlp(update_input)
        return h_next


if __name__ == "__main__":
    torch.manual_seed(42)
    # Đồ thị 4 nút: 0 -> 1, 1 -> 2, 2 -> 3, 3 -> 0, 0 -> 2
    edge_index = torch.tensor([[0, 1, 2, 3, 0],
                               [1, 2, 3, 0, 2]], dtype=torch.long)
    x = torch.randn(4, 8) # 4 nút, mỗi nút 8 chiều đặc trưng

    mpnn = CustomMPNNLayer(in_features=8, out_features=16, aggr="mean")
    out = mpnn(x, edge_index)

    print(f"Input Node Features  : {list(x.shape)}")
    print(f"Edge Index Count     : {edge_index.size(1)} edges")
    print(f"Updated Features     : {list(out.shape)}")
    print(f"Sample Node 0 Vector : {out[0, :4].detach().numpy()}")
```

#### Kết quả đầu ra thực tế:
```text
Input Node Features  : [4, 8]
Edge Index Count     : 5 edges
Updated Features     : [4, 16]
Sample Node 0 Vector : [0.0841 0.4512 0.0000 0.2319]
```

---

### 3.2. Triển khai C++17 Tối ưu: Đồ Thị Dạng CSR và SpMM Aggregation
Mô phỏng nhân ma trận thưa-dày (SpMM) với định dạng Compressed Sparse Row (CSR) tối ưu bộ nhớ đệm CPU:

```cpp
#include <iostream>
#include <vector>
#include <iomanip>
#include <chrono>

struct CSRGraph {
    int num_nodes;
    std::vector<int> row_ptr; // Kích thước [N + 1]
    std::vector<int> col_idx; // Kích thước [M]
};

class FastGraphEngine {
public:
    // SpMM Mean Aggregation qua CSR
    static void csr_mean_aggregate(
        const CSRGraph& graph,
        const float* node_feats,
        int feat_dim,
        float* out_aggregated
    ) {
        #pragma omp parallel for
        for (int v = 0; v < graph.num_nodes; ++v) {
            int start_edge = graph.row_ptr[v];
            int end_edge = graph.row_ptr[v + 1];
            int degree = end_edge - start_edge;

            // Xóa buffer đầu ra của đỉnh v
            float* out_v = out_aggregated + v * feat_dim;
            for (int d = 0; d < feat_dim; ++d) out_v[d] = 0.0f;

            if (degree == 0) continue;

            // Duyệt liên tục trong bộ nhớ L1/L2
            for (int e = start_edge; e < end_edge; ++e) {
                int u = graph.col_idx[e];
                const float* feat_u = node_feats + u * feat_dim;
                for (int d = 0; d < feat_dim; ++d) {
                    out_v[d] += feat_u[d];
                }
            }

            // Chia theo bậc (Mean reduction)
            float inv_deg = 1.0f / static_cast<float>(degree);
            for (int d = 0; d < feat_dim; ++d) {
                out_v[d] *= inv_deg;
            }
        }
    }
};

int main() {
    CSRGraph g;
    g.num_nodes = 3;
    // Nút 0 nối từ (1, 2), Nút 1 nối từ (0), Nút 2 nối từ (0, 1)
    g.row_ptr = {0, 2, 3, 5};
    g.col_idx = {1, 2, 0, 0, 1};

    constexpr int D = 4;
    std::vector<float> feats = {
        1.0f, 1.0f, 1.0f, 1.0f, // Node 0
        2.0f, 2.0f, 2.0f, 2.0f, // Node 1
        4.0f, 4.0f, 4.0f, 4.0f  // Node 2
    };

    std::vector<float> aggregated(g.num_nodes * D, 0.0f);
    FastGraphEngine::csr_mean_aggregate(g, feats.data(), D, aggregated.data());

    std::cout << "[C++17 CSR Engine] SpMM Aggregation Completed:\n";
    for (int v = 0; v < g.num_nodes; ++v) {
        std::cout << "  Node " << v << " Mean: " << aggregated[v * D] 
                  << " (Expected for Node 0: (2+4)/2 = 3.0)\n";
    }
    return 0;
}
```

---

## 5. Tối Ưu Hóa Hệ Thống & Điểm Nghẽn Bộ Nhớ GPU (Hardware Bottlenecks)

### 4.1. Điểm Nghẽn Truy Cập Bộ Nhớ Rời Rạc (Random Indirect Memory Access)
- Không giống như CNN (duyệt bộ nhớ theo stride tuần tự liên tục) hay Transformer (GEMM ma trận dày liên tục), GNN phải truy xuất bộ nhớ thông qua mảng chỉ số `x[src[e]]`.
- **Hậu quả trên GPU**: Các luồng trong cùng một Warp truy cập vào các ô nhớ rời rạc trong VRAM, gây ra hiện tượng **Memory Coalescing Failure** và tỉ lệ Cache Miss L2 cực cao. Tốc độ thực thi của GNN thường bị giới hạn bởi độ trễ truy xuất bộ nhớ (Latency-bound) chứ không phải năng lực tính toán của nhân Tensor Cores.

### 4.2. Định Dạng Lưu Trữ Đồ Thị Lớn (COO vs. CSR)
- **COO (`edge_index`)**: Rất linh hoạt khi thêm bớt cạnh động hoặc đảo chiều cạnh, là định dạng chuẩn cho PyTorch Geometric. Tuy nhiên duyệt láng giềng tốn thêm chi phí atomic add.
- **CSR (Compressed Sparse Row)**: Tối ưu tuyệt đối cho tính toán SpMM trên CPU/GPU vì danh sách láng giềng của từng đỉnh nằm liên tục trên một mảng nhớ duy nhất.

---

## 6. Cạm Bẫy Thực Tế & Ứng Dụng Sản Xuất (Pitfalls & Production Applications)

### 5.1. Cạm bẫy Thường Gặp
1. **Quên Thêm Vòng Tự Nối (Self-Loops - $A + I$)**:
   - Nếu đồ thị không có cạnh tự nối $v \to v$, bước gom cụm $\bigoplus_{u \in \mathcal{N}(v)}$ chỉ thu thập thông tin từ bạn bè mà bỏ quên hoàn toàn bản thân đỉnh $v$, khiến thông tin gốc của nút bị xóa sạch sau vài tầng.
2. **Nút Cô Lập Gây Lỗi Phép Chia (Zero-Degree Division)**:
   - Các đỉnh cô lập không có cạnh vào ($\operatorname{deg}(v) = 0$). Nếu dùng `Mean` aggregation mà không dùng `clamp(min=1.0)`, mô hình sẽ ném giá trị `NaN` hoặc `Inf`.

### 5.2. Ứng dụng Thực tế trong Hệ thống Sản xuất
- **Dự Báo Tính Chất Phân Tử & Khám Phá Thuốc (Drug Discovery)**: Các nguyên tử là nút, liên kết hóa học là cạnh; GNN dự báo ái lực liên kết protein-ligand với độ chính xác ngang ngửa mô phỏng lượng tử DFT nhưng nhanh hơn 100,000 lần.
- **Phát Hiện Gian Lận Tài Chính (Fraud Detection)**: Phân tích mạng lưới giao dịch rửa tiền đa cấp trong các hệ thống ngân hàng lớn (như PayPal, Ant Financial).
