export interface Airport {
  code: string
  city: string
  cityEn: string
  country: string
}

export const airports: Airport[] = [
  { code: 'BGW', city: 'بغداد', cityEn: 'Baghdad', country: 'العراق' },
  { code: 'BSR', city: 'البصرة', cityEn: 'Basra', country: 'العراق' },
  { code: 'EBL', city: 'أربيل', cityEn: 'Erbil', country: 'العراق' },
  { code: 'ISU', city: 'السليمانية', cityEn: 'Sulaymaniyah', country: 'العراق' },
  { code: 'NJF', city: 'النجف', cityEn: 'Najaf', country: 'العراق' },
  { code: 'KIK', city: 'كركوك', cityEn: 'Kirkuk', country: 'العراق' },
  { code: 'IST', city: 'اسطنبول', cityEn: 'Istanbul', country: 'تركيا' },
  { code: 'DXB', city: 'دبي', cityEn: 'Dubai', country: 'الامارات' },
  { code: 'SHJ', city: 'الشارقة', cityEn: 'Sharjah', country: 'الامارات' },
  { code: 'IKA', city: 'طهران', cityEn: 'Tehran', country: 'ايران' },
  { code: 'MHD', city: 'مشهد', cityEn: 'Mashhad', country: 'ايران' },
  { code: 'AMM', city: 'عمان', cityEn: 'Amman', country: 'الاردن' },
  { code: 'BEY', city: 'بيروت', cityEn: 'Beirut', country: 'لبنان' },
  { code: 'CAI', city: 'القاهرة', cityEn: 'Cairo', country: 'مصر' },
  { code: 'JED', city: 'جدة', cityEn: 'Jeddah', country: 'السعودية' },
  { code: 'RUH', city: 'الرياض', cityEn: 'Riyadh', country: 'السعودية' },
  { code: 'KUL', city: 'كوالالمبور', cityEn: 'Kuala Lumpur', country: 'ماليزيا' },
  { code: 'BKK', city: 'بانكوك', cityEn: 'Bangkok', country: 'تايلاند' },
  { code: 'TBS', city: 'تبليسي', cityEn: 'Tbilisi', country: 'جورجيا' },
  { code: 'EVN', city: 'يريفان', cityEn: 'Yerevan', country: 'ارمينيا' },
]

export const popularRoutes = [
  { from: 'KIK', to: 'IST', price: 185 },
  { from: 'BGW', to: 'DXB', price: 210 },
  { from: 'EBL', to: 'IST', price: 165 },
  { from: 'BSR', to: 'IKA', price: 120 },
  { from: 'NJF', to: 'MHD', price: 145 },
  { from: 'BGW', to: 'AMM', price: 175 },
  { from: 'EBL', to: 'DXB', price: 195 },
  { from: 'KIK', to: 'IKA', price: 110 },
]
