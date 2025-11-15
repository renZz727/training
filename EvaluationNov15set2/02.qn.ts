export function checkSameWeek(date1: string, date2: string): boolean {
  const nDate1: Date = new Date(date1);
  const nDate2: Date = new Date(date2);

  const startOfdate1 = new Date(nDate1.getFullYear(), 0, 1);
  const startOfdate2 = new Date(nDate2.getFullYear(), 0, 1);

  const daysUptoDate1 = (nDate1 - startOfdate1) / (1000 * 60 * 60 * 24);
  const daysUptoDate2 = (nDate2 - startOfdate2) / (1000 * 60 * 60 * 24);

  let weekNumber1 = Math.floor(daysUptoDate1 / 7);
  let weekNumber2 = Math.floor(daysUptoDate2 / 7);
  // if (const nDate1.getDay() > 3) weekNumber1 = Math.floor(daysUptoDate1 / 7) + 1;
  // else weekNumber1 = Math.floor(daysUptoDate1 / 7);
  // if (const nDate2.getDay() < 3) weekNumber2 = Math.floor(daysUptoDate2 / 7) + 1;
  // else weekNumber2 = Math.floor(daysUptoDate1 / 7);

  return weekNumber1 === weekNumber2;
}
