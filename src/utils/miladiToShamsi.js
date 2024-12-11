// export const miladiToShamsi = (gy, gm, gd) => {
//   const g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
//   let jy = gy <= 1600 ? 0 : 979;
//   gy -= gy <= 1600 ? 621 : 1600;
//   const gy2 = gm > 2 ? gy + 1 : gy;
//   let days =
//     365 * gy +
//     Math.floor((gy2 + 3) / 4) -
//     Math.floor((gy2 + 99) / 100) +
//     Math.floor((gy2 + 399) / 400) -
//     80 +
//     gd +
//     g_d_m[gm - 1];
//   jy += 33 * Math.floor(days / 12053);
//   days %= 12053;
//   jy += 4 * Math.floor(days / 1461);
//   days %= 1461;
//   jy += Math.floor((days - 1) / 365);
//   if (days > 365) days = (days - 1) % 365;
//   const jm =
//     days < 186 ? 1 + Math.floor(days / 31) : 7 + Math.floor((days - 186) / 30);
//   const jd = 1 + (days < 186 ? days % 31 : (days - 186) % 30);
//   return { jy, jm, jd };
// };

// export const convertToJalali = (gregorianDate) => {
//   const [gy, gm, gd] = gregorianDate.split("-").map(Number);
//   const { jy, jm, jd } = miladiToShamsi(gy, gm, gd);
//   return `${jy}/${jm}/${jd}`;
// };
