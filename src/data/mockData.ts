import { KimchiProduct, BlogPost, ReviewItem } from '../types';
import geotjeoriImage from '../assets/images/regenerated_image_1786430829060.jpg';
import pogiKimchiImage from '../assets/images/regenerated_image_1786432951072.jpg';
import chonggakKimchiImage from '../assets/images/regenerated_image_1786432958340.jpg';
import kkakdugiImage from '../assets/images/regenerated_image_1786432964067.jpg';

import pillarFarmingImage from '../assets/images/regenerated_image_1786432977894.jpg';
import pillarChiliImage from '../assets/images/regenerated_image_1786432986212.jpg';
import pillarColdStorageImage from '../assets/images/regenerated_image_1786432970441.jpg';
import pillarLogisticsImage from '../assets/images/regenerated_image_1786432992038.jpg';

export const COMPANY_INFO = {
  companyName: "농업회사법인 양지원식품(주)",
  brandName: "백가원",
  ceo: "백두현",
  privacyOfficer: "김솔잎",
  address: "충남 천안시 서북구 성환읍 율금1길 187",
  phone: "041-588-0557",
  bizNumber: "312-86-59034",
  eCommerceNumber: "제2018-충남천안-1057호",
  establishedYear: 2002,
  naverStoreUrl: "https://smartstore.naver.com/baekgawon",
};

export const BRAND_VISION = {
  slogan: "백년을 이어가는 전통식품, 오늘도 정직하게 만듭니다.",
  corePillar: "2002년부터 쌓아온 신뢰와 자체 영농, 고춧가루 생산, 저온 보관, 직영 유통 인프라로 완성하는 대한민국의 맛",
  detailIntro: "백가원은 단순한 판매점을 넘어 자체 농업생산 역량과 식품 제조 기술을 갖춘 전통식품 제조기업입니다. 위생적인 HACCP 생산 라인과 정직한 재료 선택으로 국내외 고객의 식탁에 깊은 감동을 전합니다."
};

export const BRAND_PHILOSOPHY = {
  title: "백년을 이어가는 전통식품, 백가원",
  subtitle: "2002년부터 이어온 정직한 한길. 백가원은 원재료부터 생산과 유통까지 직접 관리합니다.",
  pillars: [
    {
      number: "01",
      title: "자체 영농 및 안정적 원재료",
      description: "직접 운영하는 영농사업을 통해 최상급 농산물 수급 역량을 높이고 안정적인 생산 기반을 가꿉니다.",
      iconName: "Sprout",
      image: pillarFarmingImage
    },
    {
      number: "02",
      title: "자체 고춧가루 생산시설",
      description: "고춧가루 전용 공장을 직접 운영하여 원료를 엄밀히 확인하고 제품 특성에 맞는 고품질 고춧가루를 생산합니다.",
      iconName: "Sparkles",
      image: pillarChiliImage
    },
    {
      number: "03",
      title: "콜드체인 저온 보관시설",
      description: "원재료와 제품의 최상 신선도를 안정적으로 유지하도록 현대적 저온 및 냉장 보관 클린 단지를 갖추고 있습니다.",
      iconName: "ThermometerSnowflake",
      image: pillarColdStorageImage
    },
    {
      number: "04",
      title: "경기남부·충남·대전 직영 유통망",
      description: "자체 신선 물류 차량을 바탕으로 수도권 남부 및 충청권 전역에 정시에 신선한 제품을 안정적으로 공급합니다.",
      iconName: "ShieldCheck",
      image: pillarLogisticsImage
    }
  ]
};

export const CORE_COMPETENCIES = [
  {
    id: "comp1",
    title: "자체 영농",
    description: "직접 운영하는 영농사업을 통해 원재료 수급 역량을 높이고 안정적인 생산 기반을 만들어 갑니다.",
    icon: "Sprout",
    tag: "원재료 혁신"
  },
  {
    id: "comp2",
    title: "고춧가루 생산",
    description: "자체 고춧가루 생산시설을 운영하며 원료를 직접 확인하고 제품에 적합한 고춧가루를 생산합니다.",
    icon: "Flame",
    tag: "직영 공장"
  },
  {
    id: "comp3",
    title: "저온 보관시설",
    description: "원재료와 제품의 신선도를 안정적으로 관리할 수 있도록 냉장·저온 보관시설을 운영합니다.",
    icon: "Snowflake",
    tag: "신선 보관"
  },
  {
    id: "comp4",
    title: "자체 유통망",
    description: "경기 남부와 충남, 대전 지역을 중심으로 자체 유통망을 운영하며 제품을 안정적으로 공급합니다.",
    icon: "Truck",
    tag: "직영 콜드체인"
  },
  {
    id: "comp5",
    title: "연구와 제품개발",
    description: "고객과 시장의 요구를 반영한 제품을 지속해서 연구하고 기술과 레시피를 개발합니다.",
    icon: "Microscope",
    tag: "R&D 노하우"
  },
  {
    id: "comp6",
    title: "국내외 유통",
    description: "국내 B2B·B2C 판매를 넘어 중국, 홍콩 등 해외시장에도 백가원의 전통식품을 소개하고 있습니다.",
    icon: "Globe",
    tag: "글로벌 수출"
  }
];

export const HISTORY_TIMELINE = [
  { year: "2002", title: "대성종합식품으로 출발", desc: "전통식품 유통 및 농산물 제조 사업 시작" },
  { year: "2007", title: "김치 전문 양지원식품 설립", desc: "체계적인 김치 제조 전문 라인 구축 및 공급 확대" },
  { year: "2012", title: "고춧가루 공장 설립 & HACCP 인증", desc: "자체 고춧가루 제조라인 신설 및 위생인증 획득" },
  { year: "2013", title: "백가원 브랜드 출시 & 법인 전환", desc: "농업회사법인 양지원식품(주) 출범 및 '백가원' 브랜드 정식 출시" },
  { year: "2017", title: "국산 김치 해외 중국 수출", desc: "엄격한 품질기준으로 글로벌 시장 진출 가속화" },
  { year: "2018", title: "인터넷 판매 및 이커머스 개시", desc: "소비자 직거래 온라인 유통망 전격 확대" },
  { year: "2019", title: "백가원 자사몰 오픈 & 캔 김치 출시", desc: "혁신 포장 캔 김치 라인 및 자체 보급망 구축" },
  { year: "현재", title: "국내외 100년 전통식품 선도기업", desc: "전국 식자재 유통 및 해외 수출을 통한 전통식품 가치 전파" }
];

export const KIMCHI_PRODUCTS: KimchiProduct[] = [
  {
    id: "p1",
    name: "포기김치",
    englishName: "Baekgawon Whole Cabbage Kimchi",
    category: "signature",
    categoryLabel: "대표 시그니처",
    tagline: "배추 사이사이에 양념을 정성스럽게 채운 백가원의 대표 김치입니다.",
    price: 45000,
    weightOptions: ["3kg", "5kg", "10kg"],
    spiciness: 3,
    crunchiness: 5,
    umami: 5,
    fermentation: "저온 숙성 / 깊고 시원한 깊은 맛",
    ingredients: ["국내산 배추 100%", "자체 방아 고춧가루", "신안 천일염", "광천 새우젓", "국산 마늘"],
    image: pogiKimchiImage,
    description: "배추 사이사이에 백가원 특제 양념을 정성스럽게 채워 넣은 대표 시그니처 포기김치입니다. 시간 지나도 무르지 않고 깊고 깔끔한 맛을 선사합니다.",
    isBest: true,
    originInfo: "배추(국산 100%), 고춧가루(국산 100%), 무(국산 100%), 마늘(국산 100%)",
    awards: ["HACCP 인증", "전통식품 품질인증"]
  },
  {
    id: "p2",
    name: "겉절이",
    englishName: "Fresh Fresh-picked Cabbage Kimchi",
    category: "signature",
    categoryLabel: "아삭한 생김치",
    tagline: "아삭한 배추와 갓 버무린 양념의 생생한 맛을 즐길 수 있습니다.",
    price: 46000,
    weightOptions: ["5kg (46,000원)", "10kg (50,000원)"],
    spiciness: 3,
    crunchiness: 5,
    umami: 4,
    fermentation: "당일 버무림 / 신선한 식감",
    ingredients: ["국내산 절임배추", "갓 방아 찧은 고춧가루", "남해 마늘", "국산 생강", "특제 매실청"],
    image: geotjeoriImage,
    description: "갓 수확한 싱싱한 배추에 아삭한 양념을 바로 버무려 상큼하고 생생한 식감을 극대화한 백가원 대표 겉절이입니다. 칼국수나 보쌈과 환상의 조합을 이룹니다.",
    isBest: true,
    originInfo: "배추(국산 100%), 고춧가루(국산 100%)",
    awards: ["인기 상차림 베스트"]
  },
  {
    id: "p3",
    name: "총각김치 (알타리)",
    englishName: "Crispy Altari Radish Kimchi",
    category: "signature",
    categoryLabel: "아삭 알타리",
    tagline: "아삭한 총각무와 깊이 있는 양념이 조화롭게 어우러집니다.",
    price: 42000,
    weightOptions: ["3kg", "5kg", "10kg"],
    spiciness: 3,
    crunchiness: 5,
    umami: 4,
    fermentation: "숙성시 알싸하고 매콤달콤한 맛",
    ingredients: ["국산 총각무 100%", "국산 고춧가루", "멸치액젓", "새우젓", "마늘"],
    image: chonggakKimchiImage,
    description: "손질된 싱싱한 국산 총각무를 비법 천일염으로 절여 아삭함이 독보적인 총각김치입니다. 씹을수록 무의 감칠맛과 양념의 조화가 뛰어납니다.",
    isBest: true,
    originInfo: "총각무(국산 100%), 고춧가루(국산 100%)"
  },
  {
    id: "p4",
    name: "깍두기",
    englishName: "Diced Radish Kimchi",
    category: "signature",
    categoryLabel: "시원 아삭",
    tagline: "시원하고 아삭한 무의 식감으로 다양한 국물 요리와 잘 어울립니다.",
    price: 36000,
    weightOptions: ["3kg", "5kg", "10kg"],
    spiciness: 2,
    crunchiness: 5,
    umami: 4,
    fermentation: "시원하고 소화에 좋은 발효 유산균",
    ingredients: ["국산 무 100%", "국산 고춧가루", "새우젓", "대파", "생강"],
    image: kkakdugiImage,
    description: "달고 단단한 단단한 가을·겨울 국산 무를 깍둑썰기하여 맑고 시원한 청량감을 자랑하는 깍두기입니다. 설렁탕, 곰탕, 라면 등 완벽한 반찬이 되어줍니다.",
    isBest: true,
    originInfo: "무(국산 100%), 고춧가루(국산 100%)"
  }
];

export const OTHER_KIMCHI_LIST = [
  { name: "맛김치", desc: "먹기 좋게 자른 배추에 속양념을 고루 버무린 편리한 김치" },
  { name: "열무김치", desc: "여름철 입맛을 돋우는 청량하고 아삭한 제철 열무김치" },
  { name: "석박지", desc: "큼직하게 썰어 국밥 및 비빔밥과 어울리는 깊은 풍미의 무김치" },
  { name: "백김치", desc: "고춧가루 없이 맑고 개운하게 국물을 낸 아이·어르신 안심 백김치" },
  { name: "나박김치", desc: "알록달록 채소와 깔끔한 물김치 국물이 일품인 국물김치" },
  { name: "백나박김치", desc: "맵지 않고 담백하여 상차림 격식을 높여주는 한정식용 나박김치" },
  { name: "동치미", desc: "겨울철 시원한 사이다 탄산 유산균이 톡 쏘는 전통 항아리 동치미" },
  { name: "쪽파김치", desc: "알싸한 쪽파 알갱이에 남도 생젓 양념을 입힌 별미 파김치" },
  { name: "오이소박이", desc: "아삭한 오이에 부추 양념 속을 정성스럽게 채운 봄여름 특선" }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title: "백가원이 전하는 20년 전통 김치 맛의 비결",
    subtitle: "자체 영농과 직접 방아 찧은 고춧가루 공장의 고집스러운 이야기",
    category: "story",
    categoryLabel: "브랜드 스토리",
    coverImage: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=1200",
    author: {
      name: "백승원 이사",
      role: "백가원 생산 총괄",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
    },
    date: "2026.04.12",
    readTime: "4분 읽기",
    likes: 342,
    summary: "2002년 대성종합식품에서 시작하여 2013년 백가원 브랜드를 출범하기까지, 양지원식품이 지켜온 정직한 원재료와 HACCP 기반 생산 환경 이야기를 전해드립니다.",
    content: {
      introduction: "좋은 음식은 좋은 원재료에서 시작됩니다. 백가원의 아침은 자체 영농단지 및 계약 농가와의 긴밀한 소통으로 열립니다. 일교차가 큰 산지에서 단단하게 자란 배추와 직접 방아를 찧는 고춧가루 공장의 원칙을 소개합니다.",
      keyPoints: [
        "자체 영농단지를 통한 안정적이고 우수한 무·배추 수급",
        "자체 고춧가루 공장에서 직접 품질을 확인하여 빻아낸 태양초",
        "경기 남부·충남·대전 직영 콜드체인 유통망으로 최상의 신선도 보장"
      ],
      bodySections: [
        {
          title: "오늘도 정직하게 만드는 백가원의 다짐",
          paragraph: "백가원은 2002년부터 쌓아온 식품 제조 기술을 바탕으로 중국, 홍콩 등 해외 시장까지 한국 전통 김치의 뛰어난 우수성을 증명하고 있습니다."
        }
      ]
    },
    featured: true,
    tags: ["백가원스토리", "양지원식품", "전통식품", "HACCP"]
  }
];

export const CLIENT_REVIEWS: ReviewItem[] = [
  {
    id: "r1",
    author: "천안 한정식 명가 대표",
    role: "B2B 납품 고객 (5년 연계 거래)",
    rating: 5,
    content: "백가원 포기김치와 겉절이는 배추 염도와 양념 맛이 연중 내내 흐트러지지 않고 균일합니다. 손님들이 김치 구매 문의를 항상 하실 정도로 맛의 깊이가 훌륭합니다.",
    date: "2026.03.30",
    verifiedPurchase: true,
    productName: "백가원 업소용 포기김치 & 겉절이 10kg"
  },
  {
    id: "r2",
    author: "수원 영통 가정 정기구독 고객",
    role: "네이버 스토어 구매 고객",
    rating: 5,
    content: "시중 다른 김치는 조미료 맛이 강해 금방 무르거나 물리는데, 백가원은 고춧가루 공장을 직접 하셔서 그런지 고깔이 밝고 칼칼하면서 뒷맛이 시원합니다.",
    date: "2026.04.05",
    verifiedPurchase: true,
    productName: "백가원 포기김치 5kg + 깍두기 3kg"
  },
  {
    id: "r3",
    author: "대전 단체급식 총괄 영양사",
    role: "B2B 대량납품 기업",
    rating: 5,
    content: "HACCP 기준 위생 생산 라인이 철저하고 경기남부 및 대전 지역 직영 물류차량으로 지정 시간에 맞춰 신선 배송되므로 가장 믿음직스럽습니다.",
    date: "2026.03.18",
    verifiedPurchase: true,
    productName: "백가원 B2B 맞춤 김치 컬렉션"
  }
];
