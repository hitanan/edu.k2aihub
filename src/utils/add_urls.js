/*
usage
cd /c/_me/education/education && node src/utils/add_urls.js
*/
import fs from 'fs';

// Read the cities.ts file
let content = fs.readFileSync('src/data/cities.ts', 'utf8');

// Define additional tourist attraction URLs mapping for the remaining attractions
const additionalAttractionUrls = {
  // Tuyên Quang
  'Khu Di tích Tân Trào': 'https://vi.wikipedia.org/wiki/T%C3%A2n_Tr%C3%A0o',
  'Hồ Na Hang': 'https://vi.wikipedia.org/wiki/H%E1%BB%93_Na_Hang',
  'Công viên địa chất Đồng Văn':
    'https://vi.wikipedia.org/wiki/C%C3%B4ng_vi%C3%AAn_%C4%91%E1%BB%8Ba_ch%E1%BA%A5t_%C4%90%E1%BB%93ng_V%C4%83n',
  'Lũng Cú': 'https://vi.wikipedia.org/wiki/L%C5%A9ng_C%C3%BA',

  // Điện Biên
  'Thung lũng Mường Thanh':
    'https://vi.wikipedia.org/wiki/M%C6%B0%E1%BB%9Dng_Thanh',
  'Bản Phủ': 'https://vi.wikipedia.org/wiki/B%E1%BA%A3n_Ph%E1%BB%A7',

  // Lai Châu
  'Đỉnh Pu Si Lung': 'https://vi.wikipedia.org/wiki/Pu_Si_Lung',
  'Bản Phố': 'https://vi.wikipedia.org/wiki/B%E1%BA%A3n_Ph%E1%BB%91',
  'Hồ Nước Trong':
    'https://vi.wikipedia.org/wiki/H%E1%BB%93_N%C6%B0%E1%BB%9Bc_Trong',
  'Suối nước nóng Pha Luông': 'https://vi.wikipedia.org/wiki/Pha_Lu%C3%B4ng',

  // Hà Giang
  'Cột cờ Lũng Cú': 'https://vi.wikipedia.org/wiki/L%C5%A9ng_C%C3%BA',
  'Đèo Mã Pí Lèng':
    'https://vi.wikipedia.org/wiki/%C4%90%C3%A8o_M%C3%A3_P%C3%AD_L%C3%A8ng',
  'Dinh thự Vua Mèo':
    'https://vi.wikipedia.org/wiki/Dinh_th%E1%BB%B1_Vua_M%C3%A8o',
  'Sông Nho Quế': 'https://vi.wikipedia.org/wiki/S%C3%B4ng_Nho_Qu%E1%BA%BF',

  // Sơn La
  'Nhà tù Sơn La': 'https://vi.wikipedia.org/wiki/Nh%C3%A0_t%C3%B9_S%C6%A1n_La',
  'Suối nước nóng':
    'https://vi.wikipedia.org/wiki/Su%E1%BB%91i_n%C6%B0%E1%BB%9Bc_n%C3%B3ng_S%C6%A1n_La',
  'Cầu Mường Lay':
    'https://vi.wikipedia.org/wiki/C%E1%BA%A7u_M%C6%B0%E1%BB%9Dng_Lay',
  'Bản Hua Tạt': 'https://vi.wikipedia.org/wiki/Hua_T%E1%BA%A1t',

  // Lào Cai
  'Ruộng bậc thang Mù Cang Chải':
    'https://vi.wikipedia.org/wiki/M%C3%B9_Cang_Ch%E1%BA%A3i',
  'Làng Cát Cát': 'https://vi.wikipedia.org/wiki/C%C3%A1t_C%C3%A1t',
  'Cầu kính rồng vàng':
    'https://vi.wikipedia.org/wiki/C%E1%BA%A7u_k%C3%ADnh_r%E1%BB%93ng_v%C3%A0ng',

  // Ninh Bình
  'Hang Múa': 'https://vi.wikipedia.org/wiki/Hang_M%C3%BAa',

  // Thanh Hóa
  'Làng Sen - Kim Liên': 'https://vi.wikipedia.org/wiki/Kim_Li%C3%AAn',
  'Động Hoa Tiên':
    'https://vi.wikipedia.org/wiki/%C4%90%E1%BB%99ng_Hoa_Ti%C3%AAn',

  // Nghệ An
  'Làng Sen': 'https://vi.wikipedia.org/wiki/L%C3%A0ng_Sen',
  'Bãi biển Cửa Lò': 'https://vi.wikipedia.org/wiki/C%E1%BB%ADa_L%E1%BB%9D',
  'Núi Cột Cờ': 'https://vi.wikipedia.org/wiki/N%C3%BAi_C%E1%BB%99t_C%E1%BB%9D',
  'Khu di tích Truông Bồn':
    'https://vi.wikipedia.org/wiki/Tru%C3%B4ng_B%E1%BB%93n',

  // Quảng Bình
  'Động Thiên Đường':
    'https://vi.wikipedia.org/wiki/%C4%90%E1%BB%99ng_Thi%C3%AAn_%C4%90%C6%B0%E1%BB%9Dng',
  'Suối Moọc': 'https://vi.wikipedia.org/wiki/Su%E1%BB%91i_Mo%E1%BB%8Dc',
  'Bãi biển Nhật Lệ': 'https://vi.wikipedia.org/wiki/Nh%E1%BA%ADt_L%E1%BB%87',

  // Thừa Thiên Huế
  'Lăng Tự Đức':
    'https://vi.wikipedia.org/wiki/L%C4%83ng_T%E1%BB%B1_%C4%90%E1%BB%A9c',
  'Chùa Linh Mụ': 'https://vi.wikipedia.org/wiki/Ch%C3%B9a_Linh_M%E1%BB%A5',
  'Đồi Vọng Cảnh':
    'https://vi.wikipedia.org/wiki/%C4%90%E1%BB%93i_V%E1%BB%8Dng_C%E1%BA%A3nh',
  'Lăng Minh Mạng': 'https://vi.wikipedia.org/wiki/L%C4%83ng_Minh_M%E1%BA%A1ng',

  // Quảng Nam
  'Mỹ Sơn': 'https://vi.wikipedia.org/wiki/M%E1%BB%B9_S%C6%A1n',
  'Cù Lao Chàm': 'https://vi.wikipedia.org/wiki/C%C3%B9_Lao_Ch%C3%A0m',

  // Quảng Ngãi
  'Sa Huỳnh': 'https://vi.wikipedia.org/wiki/Sa_Hu%E1%BB%B3nh',
  'Chùa Thiên An': 'https://vi.wikipedia.org/wiki/Ch%C3%B9a_Thi%C3%AAn_An',

  // Bình Định
  'Quy Nhon': 'https://vi.wikipedia.org/wiki/Quy_Nhon',
  'Tháp Chăm':
    'https://vi.wikipedia.org/wiki/Th%C3%A1p_Ch%C4%83m_B%C3%ACnh_%C4%90%E1%BB%8Bnh',
  'Kỳ Co': 'https://vi.wikipedia.org/wiki/K%E1%BB%B3_Co',
  'Eo Gió': 'https://vi.wikipedia.org/wiki/Eo_Gi%C3%B3',

  // Phú Yên
  'Gành Đá Đĩa':
    'https://vi.wikipedia.org/wiki/G%C3%A0nh_%C4%90%C3%A1_%C4%90%C4%A9a',
  'Bãi Môn': 'https://vi.wikipedia.org/wiki/B%C3%A3i_M%C3%B4n',
  'Mũi Điện': 'https://vi.wikipedia.org/wiki/M%C5%A9i_%C4%90i%E1%BB%87n',
  'Vịnh Vũng Rô':
    'https://vi.wikipedia.org/wiki/V%E1%BB%8Bnh_V%C5%A9ng_R%C3%B4',

  // Khánh Hòa
  'Vinpearl Land': 'https://vi.wikipedia.org/wiki/Vinpearl',
  'Suối Hoa Lan': 'https://vi.wikipedia.org/wiki/Su%E1%BB%91i_Hoa_Lan',

  // Lâm Đồng
  'Chợ Đêm Đà Lạt':
    'https://vi.wikipedia.org/wiki/Ch%E1%BB%A3_%C4%91%C3%AAm_%C4%90%C3%A0_L%E1%BA%A1t',
  'Thung lũng Tình yêu':
    'https://vi.wikipedia.org/wiki/Thung_l%C5%A9ng_T%C3%ACnh_y%C3%AAu',
  'Đồi chè Cầu Đất':
    'https://vi.wikipedia.org/wiki/%C4%90%E1%BB%93i_ch%C3%A8_C%E1%BA%A7u_%C4%90%E1%BA%A5t',
  'Vườn Hoa Thành phố':
    'https://vi.wikipedia.org/wiki/V%C6%B0%E1%BB%9Dn_hoa_th%C3%A0nh_ph%E1%BB%91_%C4%90%C3%A0_L%E1%BA%A1t',

  // Bình Thuận
  'Đồi cát Mũi Né': 'https://vi.wikipedia.org/wiki/M%C5%A9i_N%C3%A9',
  'Suối Tiên':
    'https://vi.wikipedia.org/wiki/Su%E1%BB%91i_Ti%C3%AAn_M%C5%A9i_N%C3%A9',
  'Làng chài Mũi Né':
    'https://vi.wikipedia.org/wiki/L%C3%A0ng_ch%C3%A0i_M%C5%A9i_N%C3%A9',
  'Tháp Chăm Po Shanu': 'https://vi.wikipedia.org/wiki/Th%C3%A1p_Po_Shanu',

  // Hồ Chí Minh City
  'Chùa Jade Emperor': 'https://vi.wikipedia.org/wiki/Ch%C3%B9a_Ngọc_Hoàng',
  'Chợ Bình Tây':
    'https://vi.wikipedia.org/wiki/Ch%E1%BB%A3_B%C3%ACnh_T%C3%A2y',
  'Địa đạo Củ Chi':
    'https://vi.wikipedia.org/wiki/%C4%90%E1%BB%8Ba_%C4%91%E1%BA%A1o_C%E1%BB%A7_Chi',
  'Khu phố Tây Balo':
    'https://vi.wikipedia.org/wiki/Ph%E1%BB%91_%C4%91i_b%E1%BB%99_Bui_Vien',

  // Đồng Tháp
  'Vườn quốc gia Tràm Chim':
    'https://vi.wikipedia.org/wiki/V%C6%B0%E1%BB%9Dn_qu%E1%BB%91c_gia_Tr%C3%A0m_Chim',
  'Làng hoa Sa Đéc': 'https://vi.wikipedia.org/wiki/Sa_%C4%90%C3%A9c',
  'Chợ nổi Sa Đéc':
    'https://vi.wikipedia.org/wiki/Ch%E1%BB%A3_n%E1%BB%95i_Sa_%C4%90%C3%A9c',
  'Cánh đồng hoa sen':
    'https://vi.wikipedia.org/wiki/C%C3%A1nh_%C4%91%E1%BB%93ng_hoa_sen',

  // An Giang
  'Chùa Bà Chúa Xứ':
    'https://vi.wikipedia.org/wiki/Ch%C3%B9a_B%C3%A0_Ch%C3%BAa_X%E1%BB%A9',
  'Rừng tràm Trà Sư':
    'https://vi.wikipedia.org/wiki/R%E1%BB%ABng_tr%C3%A0m_Tr%C3%A0_S%C6%B0',

  // Cần Thơ
  'Chùa Khmer':
    'https://vi.wikipedia.org/wiki/Ch%C3%B9a_Khmer_C%E1%BA%A7n_Th%C6%A1',
  'Nhà cổ Bình Thủy':
    'https://vi.wikipedia.org/wiki/Nh%C3%A0_c%E1%BB%95_B%C3%ACnh_Th%E1%BB%A7y',

  // Kiên Giang
  'Cáp treo Hòn Thơm':
    'https://vi.wikipedia.org/wiki/C%C3%A1p_treo_H%C3%B2n_Th%C6%A1m',
  'Dinh Cậu': 'https://vi.wikipedia.org/wiki/Dinh_C%E1%BA%ADu',

  // Bắc Ninh
  'Đền Đô': 'https://vi.wikipedia.org/wiki/%C4%90%E1%BB%81n_%C4%90%C3%B4',
  'Làng Quan họ Bắc Ninh':
    'https://vi.wikipedia.org/wiki/Quan_h%E1%BB%8D_B%E1%BA%AFc_Ninh',
  'Chùa Bút Tháp': 'https://vi.wikipedia.org/wiki/Ch%C3%B9a_B%C3%BAt_Th%C3%A1p',
  'Đền Kiếp Bạc':
    'https://vi.wikipedia.org/wiki/%C4%90%E1%BB%81n_Ki%E1%BA%BFp_B%E1%BA%A1c',

  // Hải Phòng
  'Bãi Cháy': 'https://vi.wikipedia.org/wiki/B%C3%A3i_Ch%C3%A1y',
  'Đền Trần': 'https://vi.wikipedia.org/wiki/%C4%90%E1%BB%81n_Tr%C3%A2n',
  'Chùa Hang':
    'https://vi.wikipedia.org/wiki/Ch%C3%B9a_Hang_H%E1%BA%A3i_Ph%C3%B2ng',
  'Khu di tích Bạch Đằng Giang':
    'https://vi.wikipedia.org/wiki/B%E1%BA%A1ch_%C4%90%E1%BA%B1ng_Giang',

  // Vĩnh Phúc
  'Tam Đảo': 'https://vi.wikipedia.org/wiki/Tam_%C4%90%E1%BA%A3o',
  'Đền Hùng': 'https://vi.wikipedia.org/wiki/%C4%90%E1%BB%81n_H%C3%B9ng',
  'Chùa Tây Phương':
    'https://vi.wikipedia.org/wiki/Ch%C3%B9a_T%C3%A2y_Ph%C6%B0%C6%A1ng',
  'Suối khoáng nóng':
    'https://vi.wikipedia.org/wiki/Su%E1%BB%91i_kho%C3%A1ng_n%C3%B3ng_V%C4%A9nh_Ph%C3%BAc'
};

// Function to add URL to an attraction
function addUrlToAttraction(content, attractionName, url) {
  // More precise pattern that handles line breaks properly
  const escapedName = attractionName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Pattern to match tourist attraction block without URL
  const pattern = new RegExp(
    `(name: '${escapedName}',\\s*description:[\\s\\S]*?location: '[^']*')(?!,\\s*url:)`,
    'g'
  );

  return content.replace(pattern, (match) => {
    // Only add URL if it doesn't already exist
    return match + `,\n        url: '${url}'`;
  });
}

// Add URLs for all remaining attractions
let updatedContent = content;
let addedCount = 0;

for (const [attractionName, url] of Object.entries(additionalAttractionUrls)) {
  const before = updatedContent;
  updatedContent = addUrlToAttraction(updatedContent, attractionName, url);
  if (updatedContent !== before) {
    addedCount++;
    console.log(`Added URL for: ${attractionName}`);
  }
}

// Write the updated content back
fs.writeFileSync('src/data/cities.ts', updatedContent);
console.log(`Successfully added URLs to ${addedCount} tourist attractions!`);
