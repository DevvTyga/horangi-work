import { SeriesInfo } from "../interfaces/series-info";

export const seriesList: SeriesInfo[] = [
  {
    id: "style",
    name: "취향표 생성기",
    projects: [
      {
        id: "svt-style",
        name: "세븐틴",
        href: "https://svt-style.vercel.app/",
        color: 1,
      },
      {
        id: "skz-style",
        name: "스트레이 키즈",
        href: "https://skz-style.vercel.app/",
        color: 1,
      },
      {
        id: "tbz-style",
        name: "더보이즈",
        href: "https://tbz-style.vercel.app/",
        color: 1,
      },
      {
        id: "nct-style",
        name: "엔시티",
        href: "https://nct-style.vercel.app/",
        color: 2,
      },
    ],
  },
  {
    id: "image-generator",
    name: "이미지 생성",
    projects: [
      {
        id: "heart",
        name: "트친 인장 하트",
        href: "",
        color: 5,
      },
    ],
  },
  {
    id: "market",
    name: "굿즈 거래",
    projects: [
      {
        id: "choiaemarket",
        name: "최애마켓",
        href: "https://twitter.com/choiaemarket",
        color: 4,
      },
    ],
  },
];
