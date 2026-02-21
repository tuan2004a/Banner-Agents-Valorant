# Valorant Agents Banner

**Trang web này cho phép bạn xem danh sách các đặc vụ trong Valorant, bao gồm thông tin chi tiết về từng nhân vật và bộ kỹ năng của họ.

---

## Mục lục

- [Công nghệ sử dụng](#công-nghệ-sử-dụng)
- [Yêu cầu môi trường](#yêu-cầu-môi-trường)
- [Cài đặt & chạy dự án](#cài-đặt--chạy-dự-án)
- [Cấu trúc thư mục](#cấu-trúc-thư-mục)
- [Preview Video](#preview-video)
- [Lưu ý khi phát triển](#lưu-ý-khi-phát-triển)
- [License](#license)
- [Contact](#contact)
---

## Công nghệ sử dụng

- **React 19**: Xây UI dạng component, type-safe, dễ bảo trì.
- **Vite**: Công cụ build và dev server nhanh, hỗ trợ HMR.
- **Axios**: Client HTTP để gọi API, xử lý request/response linh hoạt.
- **Zustand** - Thư viện quản lý state nhẹ và đơn giản
- **TailwindCSS 4**: Utility-first CSS framework để tạo UI nhanh chóng.
- **JSON Server**: Dựng API giả lập từ file JSON, dùng cho môi trường dev.
---

## Yêu cầu môi trường

- **Node.js**: Khuyến nghị >= 20.x
```bash
node -v
```
- **pnpm**: Khuyến nghị >= 10.x
```bash
pnpm -v
```
---

## Cài đặt & chạy dự án

### 1. Clone project

```bash
git clone <your-repo-url>
cd banner-agents-valorant
```

### 2. Cài đặt dependencies

```bash
pnpm install
```

### 3. Chạy JSON Server (mock API)

```bash
pnpm json
```

> **Lưu ý**: Trong `package.json` đã cấu hình script và chạy JSON Server ở port `3001`.
---

### 4. Chạy môi trường phát triển

```bash
pnpm dev
```
> **Lưu ý**: Mặc định Vite sẽ chạy ở `http://localhost:5173`
---

## Cấu trúc thư mục

> **Lưu ý**: Tổ chức file/folder theo Components-based architecture, đây là mô tả khái quát:

```
src/
├── assets/                     # Tài nguyên tĩnh (images, icons, v.v.)
├── components/                 # Các component React
│   ├── common/                 # Các component dùng chung
│   │   ├── Button.jsx
│   │   └── SystemMessage.jsx
│   ├── Card.jsx                # Component hiển thị Light Cone card
│   ├── Information.jsx         # Component hiển thị thông tin chi tiết
│   ├── NavBar.jsx              # Component thanh điều hướng
│   ├── ShowBgCard.jsx          # Component hiển thị background card
│   └── SideBar.jsx             # Component sidebar
├── config/                     # Cấu hình ứng dụng
├── context/                    # React Context providers
├── db/                         # JSON Server database
├── hooks/                      # Custom React hooks
├── page/                       # Các page components
├── service/                    # Service layer cho API calls
└── store/                      # Zustand state management
    └── slices/                 # Store slices
```
---

## Preview Video



https://github.com/user-attachments/assets/7faa1063-fda8-49e7-a072-2cfa57aa09fd

---

## Lưu ý khi phát triển

- **Chạy JSON Server song song**: Hãy luôn đảm bảo `pnpm json` đang chạy khi bạn dev, nếu không axios sẽ bị lỗi gọi API.
- **Port xung đột**:
  - Vite: thường ở `5173`
  - JSON Server: `3001`
  - Nếu port đã được dùng, hãy đổi port hoặc tắt service đang chiếm port.
- **Cấu hình Axios**:
  - Đảm bảo `baseURL` trỏ đúng tới `http://localhost:3001` (hoặc port bạn cấu hình).
  - Nếu bạn build production và deploy, cần thay đổi `baseURL` phù hợp backend thực tế.
- **Tailwind v4**:
  - Ở file `src/index.css` có dòng `@import "tailwindcss";` theo style mới của Tailwind v4.
  - Nên tránh override global quá nhiều để không bị xung đột class.
---

## License
Dự án này được phát hành dưới MIT License. Bạn có thể tự do sử dụng, chỉnh sửa và chia sẻ, nhưng không được sử dụng cho mục đích thương mại dưới bất kỳ hình thức nào.

---
## Contact

* Author: Trantuan07a
* Email: dev.lamtuan@gmail.com
* GitHub: [@Trantuan07a](https://github.com/Trantuan07a)

---

<div align="center">

**✨ Được tạo nên với niềm đam mê dành cho cộng đồng Valorant ✨**

</div> 
