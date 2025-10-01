# Valorant Agents Banner

Trang web này cho phép bạn xem danh sách các agents trong Valorant, bao gồm thông tin chi tiết về từng nhân vật và bộ kỹ năng (skill set) của họ.

## Tính năng
- Xem danh sách agents Valorant
- Xem thông tin chi tiết từng nhân vật
- Xem bộ kỹ năng của từng agent

## Công nghệ sử dụng
- **Frontend:** React.js, TailwindCSS, Axios
- **Backend:** json-server (giả lập API từ file JSON)

## Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js >= 14
- npm >= 6

### Các bước cài đặt

1. **Clone dự án:**
   ```bash
   git clone <repo-url>
   cd Valorant-Agents-Banner
   ```

2. **Cài đặt dependencies:**
   ```bash
   npm install
   ```

3. **Chạy backend (json-server):**
   ```bash
   npx json-server --watch src/db/db.json --port 3001
   ```

4. **Chạy frontend:**
   ```bash
   npm run dev
   ```

5. **Truy cập website:**
   - Frontend: http://localhost:5173/
   - Backend API: http://localhost:3001/

## Ghi chú
- Đảm bảo json-server luôn chạy để frontend có thể lấy dữ liệu agents.
- Có thể tùy chỉnh dữ liệu agents trong file `src/db/db.json`.
