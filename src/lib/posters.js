// src/lib/posters.js

export const startDate = new Date(2025, 7, 15, 12, 0, 0);
 // 2025-12-01 (월=0부터, 11=12월)
const descMap = {
  "001": "여기에 ODOP 001 소개글", 
  "002": "여기에 ODOP 002 소개글",
  "003": "여기에 ODOP 003 소개글",
};

export const posters = Array.from({ length: 129 }).map((_, i) => {
  const no = i + 1;
  const no3 = String(no).padStart(3, "0");

  const d = new Date(startDate);
  d.setDate(d.getDate() + i);

  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const dateISO = `${yyyy}-${mm}-${dd}`;

  return {
    id: `p-${no}`,
    no,
    no3,
    title: `ODOP ${no3}`,
    date: dateISO,
     desc: "", // <- 기본값
    thumb: `/thumbs/odop${no3}.webp`,
    img: `/posters/odop${no3}.webp`,
desc: descMap[no3] ?? "",

  };
});
