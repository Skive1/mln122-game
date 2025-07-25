export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

export const question: Question[] = [
  {
    id: 1,
    question: "Cách mạng công nghiệp là gì?",
    options: [
      "A. Sự phát triển mạnh mẽ của ngành thương mại và dịch vụ",
      "B. Sự chuyển đổi xã hội từ nông nghiệp sang công nghiệp",
      "C. Những bước nhảy vọt về sản xuất xã hội nhờ vào các phát minh khoa học – kỹ thuật",
      "D. Sự mở rộng lãnh thổ và thuộc địa"
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Công nghiệp hóa là gì?",
    options: [
      "A. Quá trình phát triển ngành công nghiệp nặng",
      "B. Quá trình chuyển từ lao động thủ công sang sản xuất cơ giới hóa, hiện đại",
      "C. Quá trình tăng tỷ trọng xuất khẩu hàng công nghiệp",
      "D. Quá trình tăng dân số ở khu vực thành thị"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Tính tất yếu khách quan của công nghiệp hóa – hiện đại hóa ở Việt Nam KHÔNG bao gồm yếu tố nào sau đây?",
    options: [
      "A. Nâng cao đời sống nhân dân",
      "B. Đảm bảo an ninh – quốc phòng",
      "C. Giữ gìn tập quán truyền thống",
      "D. Nâng cao năng lực cạnh tranh quốc gia"
    ],
    correctAnswer: 2  
  },
  {
    id: 4,
    question: "Nội dung nào sau đây thuộc về mục tiêu CNH – HĐH nông nghiệp, nông thôn?",
    options: [
      "A. Tăng dân số lao động thủ công",
      "B. Phát triển nông nghiệp dựa trên cơ giới hóa, sản xuất hàng hóa lớn",
      "C. Tăng tỷ lệ sử dụng sức người trong sản xuất",
      "D. Giảm xuất khẩu nông sản"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Vì sao cần bảo tồn ngành nghề truyền thống trong quá trình CNH – HĐH?",
    options: [
      "A. Vì các ngành nghề này không cần hiện đại hóa",
      "B. Vì chúng mang tính biểu tượng và không ảnh hưởng đến kinh tế",
      "C. Vì chúng góp phần bảo tồn văn hóa dân tộc, tạo việc làm, thúc đẩy du lịch và xuất khẩu",
      "D. Vì nhà nước yêu cầu giữ lại để phục vụ lễ hội truyền thống"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "Giải pháp nào sau đây giúp kết hợp giữa phát triển công nghiệp hiện đại và bảo tồn ngành nghề truyền thống?",
    options: [
      "A. Đóng cửa các làng nghề để tránh ô nhiễm môi trường",
      "B. Tập trung sản xuất công nghiệp, bỏ qua ngành nghề cũ",
      "C. Đầu tư công nghệ cao và xây dựng mô hình làng nghề du lịch sáng tạo",
      "D. Chuyển toàn bộ nghệ nhân sang làm công nghiệp"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "Trong hội nhập kinh tế quốc tế, việc phát triển nguồn nhân lực cần gắn với điều gì?",
    options: [
      "A. Phong trào khởi nghiệp cá nhân",
      "B. Tăng lương và phúc lợi xã hội",
      "C. Nhu cầu của thị trường lao động và kỹ năng toàn cầu",
      "D. Học tiếng Anh là đủ để hội nhập"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Phát triển kinh tế bền vững trong thời kỳ CNH – HĐH cần gắn với yếu tố nào sau đây?",
    options: [
      "A. Gia tăng khai thác tài nguyên",
      "B. Tăng trưởng kinh tế bằng mọi giá",
      "C. Tăng nhập khẩu máy móc hiện đại",
      "D. Bảo vệ môi trường, phát triển kinh tế xanh và tuần hoàn"
    ],
    correctAnswer: 3
  },
  {
    id: 1,
    question: "Cách mạng công nghiệp là gì?",
    options: [
      "A. Sự phát triển mạnh mẽ của ngành thương mại và dịch vụ",
      "B. Sự chuyển đổi xã hội từ nông nghiệp sang công nghiệp",
      "C. Những bước nhảy vọt về sản xuất xã hội nhờ vào các phát minh khoa học – kỹ thuật",
      "D. Sự mở rộng lãnh thổ và thuộc địa"
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Công nghiệp hóa là gì?",
    options: [
      "A. Quá trình phát triển ngành công nghiệp nặng",
      "B. Quá trình chuyển từ lao động thủ công sang sản xuất cơ giới hóa, hiện đại",
      "C. Quá trình tăng tỷ trọng xuất khẩu hàng công nghiệp",
      "D. Quá trình tăng dân số ở khu vực thành thị"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Tính tất yếu khách quan của công nghiệp hóa – hiện đại hóa ở Việt Nam KHÔNG bao gồm yếu tố nào sau đây?",
    options: [
      "A. Nâng cao đời sống nhân dân",
      "B. Đảm bảo an ninh – quốc phòng",
      "C. Giữ gìn tập quán truyền thống",
      "D. Nâng cao năng lực cạnh tranh quốc gia"
    ],
    correctAnswer: 2  
  },
  {
    id: 4,
    question: "Nội dung nào sau đây thuộc về mục tiêu CNH – HĐH nông nghiệp, nông thôn?",
    options: [
      "A. Tăng dân số lao động thủ công",
      "B. Phát triển nông nghiệp dựa trên cơ giới hóa, sản xuất hàng hóa lớn",
      "C. Tăng tỷ lệ sử dụng sức người trong sản xuất",
      "D. Giảm xuất khẩu nông sản"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Vì sao cần bảo tồn ngành nghề truyền thống trong quá trình CNH – HĐH?",
    options: [
      "A. Vì các ngành nghề này không cần hiện đại hóa",
      "B. Vì chúng mang tính biểu tượng và không ảnh hưởng đến kinh tế",
      "C. Vì chúng góp phần bảo tồn văn hóa dân tộc, tạo việc làm, thúc đẩy du lịch và xuất khẩu",
      "D. Vì nhà nước yêu cầu giữ lại để phục vụ lễ hội truyền thống"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "Giải pháp nào sau đây giúp kết hợp giữa phát triển công nghiệp hiện đại và bảo tồn ngành nghề truyền thống?",
    options: [
      "A. Đóng cửa các làng nghề để tránh ô nhiễm môi trường",
      "B. Tập trung sản xuất công nghiệp, bỏ qua ngành nghề cũ",
      "C. Đầu tư công nghệ cao và xây dựng mô hình làng nghề du lịch sáng tạo",
      "D. Chuyển toàn bộ nghệ nhân sang làm công nghiệp"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "Trong hội nhập kinh tế quốc tế, việc phát triển nguồn nhân lực cần gắn với điều gì?",
    options: [
      "A. Phong trào khởi nghiệp cá nhân",
      "B. Tăng lương và phúc lợi xã hội",
      "C. Nhu cầu của thị trường lao động và kỹ năng toàn cầu",
      "D. Học tiếng Anh là đủ để hội nhập"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Phát triển kinh tế bền vững trong thời kỳ CNH – HĐH cần gắn với yếu tố nào sau đây?",
    options: [
      "A. Gia tăng khai thác tài nguyên",
      "B. Tăng trưởng kinh tế bằng mọi giá",
      "C. Tăng nhập khẩu máy móc hiện đại",
      "D. Bảo vệ môi trường, phát triển kinh tế xanh và tuần hoàn"
    ],
    correctAnswer: 3
  },
  {
    id: 1,
    question: "Hiện đại hóa khác công nghiệp hóa ở điểm nào sau đây?",
    options: [
      "A. Chỉ tập trung vào sản xuất công nghiệp nặng",
      "B. Chú trọng vào cải tiến công nghệ, quản lý và tổ chức sản xuất hiện đại",
      "C. Không cần đầu tư cơ sở vật chất kỹ thuật",
      "D. Chỉ áp dụng trong lĩnh vực nông nghiệp"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Một đặc điểm nổi bật của cách mạng công nghiệp 4.0 là gì?",
    options: [
      "A. Ứng dụng điện khí hóa trong sản xuất",
      "B. Phát minh ra động cơ hơi nước",
      "C. Sử dụng trí tuệ nhân tạo và kết nối vạn vật (IoT)",
      "D. Mở rộng ngành khai khoáng và đóng tàu"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "Mục tiêu cuối cùng của công nghiệp hóa – hiện đại hóa là gì?",
    options: [
      "A. Tăng trưởng kinh tế và xuất khẩu hàng hóa",
      "B. Nâng cao vị thế quốc gia trên trường quốc tế",
      "C. Giữ gìn tập quán truyền thống",
      "D. Phát triển toàn diện đất nước, nâng cao đời sống nhân dân"
    ],
    correctAnswer: 2  
  },
  {
    id: 4,
    question: "Ngành nghề truyền thống KHÔNG mang lại giá trị nào sau đây?",
    options: [
      "A. Tạo việc làm cho người lao động nông thôn",
      "B. Bảo tồn bản sắc văn hóa dân tộc",
      "C. Giảm nguồn thu ngân sách nhà nước",
      "D. Mở rộng giao lưu văn hóa quốc tế"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Phương thức nào giúp tăng khả năng cạnh tranh quốc tế của ngành nghề truyền thống?",
    options: [
      "A. Sản xuất theo kiểu tự phát",
      "B. Giữ nguyên mẫu mã cũ, không thay đổi",
      "C. Kết hợp tiến bộ kỹ thuật với thiết kế sáng tạo, đạt chuẩn quốc tế",
      "D. Giảm chi phí bằng cách dùng nguyên liệu thô rẻ tiền"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "Khi tham gia các hiệp định kinh tế quốc tế (WTO, CPTPP, EVFTA...), Việt Nam cần chú trọng điều gì?",
    options: [
      "A. Bỏ ngành nông nghiệp để tập trung công nghiệp hóa",
      "B. Tăng nhập khẩu sản phẩm công nghệ cao",
      "C. Nâng cao năng lực cạnh tranh nội tại và chuẩn hóa sản phẩm",
      "D. Giảm thuế cho toàn bộ hàng hóa trong nước"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "Một nội dung quan trọng trong công nghiệp hóa nông nghiệp là gì?",
    options: [
      "A. Tăng cường trồng lúa nước theo phương pháp truyền thống",
      "B. Giảm tỷ trọng cơ giới hóa",
      "C. Ứng dụng công nghệ cao và sản xuất hàng hóa lớn",
      "D. Khuyến khích sản xuất nhỏ lẻ theo hộ gia đình"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Kinh tế tri thức trong CNH – HĐH được hiểu là gì?",
    options: [
      "A. Kinh tế dựa trên sản xuất số lượng lớn",
      "B. Kinh tế dựa trên công nghệ điện – nước – than",
      "C. Kinh tế sử dụng tri thức, sáng tạo, và tài năng con người làm động lực chính",
      "D. Kinh tế dựa hoàn toàn vào tài nguyên thiên nhiên"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "Mô hình làng nghề du lịch sáng tạo mang lại lợi ích gì?",
    options: [
      "A. Giảm áp lực cho ngành dịch vụ",
      "B. Gắn sản xuất với khai thác giá trị văn hóa và phát triển du lịch",
      "C. Chuyển nghề truyền thống sang sản xuất đại trà",
      "D. Tăng xuất khẩu lương thực ra nước ngoài"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Giải pháp bảo vệ môi trường cho làng nghề truyền thống là gì?",
    options: [
      "A. Giảm sản lượng sản xuất",
      "B. Tăng thuế với các hộ sản xuất nhỏ",
      "C. Đầu tư xử lý chất thải và phát triển làng nghề xanh",
      "D. Di dời toàn bộ làng nghề ra khu công nghiệp"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Yếu tố nào sau đây đóng vai trò quyết định trong nâng cao năng lực nội tại khi hội nhập kinh tế quốc tế?",
    options: [
      "A. Tăng số lượng hàng hóa nhập khẩu",
      "B. Tăng dân số lao động phổ thông",
      "C. Ứng dụng khoa học công nghệ và phát triển nguồn nhân lực chất lượng cao",
      "D. Giảm chi tiêu công"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "Vì sao phải kết hợp CNH–HĐH với phát triển bền vững?",
    options: [
      "A. Để giảm chi phí đầu tư ban đầu",
      "B. Để phát triển nhanh chóng bằng mọi giá",
      "C. Để đảm bảo sự cân bằng giữa tăng trưởng, môi trường và văn hóa",
      "D. Để hạn chế cạnh tranh với quốc tế"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "Mục tiêu của việc phát triển nguồn nhân lực chất lượng cao là gì?",
    options: [
      "A. Tăng tỷ lệ người dân biết sử dụng máy tính",
      "B. Tạo ra lao động giá rẻ cho doanh nghiệp",
      "C. Đào tạo lực lượng có khả năng tiếp thu, làm chủ và sáng tạo công nghệ",
      "D. Đảm bảo có nhiều người tham gia lao động chân tay"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Nội dung nào sau đây KHÔNG thuộc phương hướng hội nhập kinh tế quốc tế ở Việt Nam?",
    options: [
      "A. Tham gia các hiệp định thương mại tự do",
      "B. Xây dựng mô hình kinh tế khép kín, độc lập với quốc tế",
      "C. Tận dụng lợi thế ngành nghề truyền thống",
      "D. Phát triển nguồn nhân lực thích ứng toàn cầu hóa"
    ],
    correctAnswer: 1
  },
] 