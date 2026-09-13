export interface Hotel {
  id: number
  name: string
  location: string
  stars: number
  price: number
  currency: string
  image: string
  amenities: string[]
}

export const hotels: Hotel[] = [
  {
    id: 1,
    name: 'فندق اسپيناس بالاس',
    location: 'طهران، ايران',
    stars: 5,
    price: 120,
    currency: '$',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
    amenities: ['واي فاي', 'مسبح', 'سبا', 'مطعم'],
  },
  {
    id: 2,
    name: 'فندق پارسيان آزادي',
    location: 'طهران، ايران',
    stars: 5,
    price: 95,
    currency: '$',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80',
    amenities: ['واي فاي', 'مسبح', 'صالة رياضة', 'مطعم'],
  },
  {
    id: 3,
    name: 'فندق هما',
    location: 'مشهد، ايران',
    stars: 4,
    price: 75,
    currency: '$',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
    amenities: ['واي فاي', 'مطعم', 'موقف سيارات'],
  },
  {
    id: 4,
    name: 'فندق داريوش',
    location: 'كيش، ايران',
    stars: 5,
    price: 150,
    currency: '$',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80',
    amenities: ['واي فاي', 'مسبح', 'شاطئ خاص', 'سبا'],
  },
  {
    id: 5,
    name: 'فندق عباسي',
    location: 'اصفهان، ايران',
    stars: 5,
    price: 110,
    currency: '$',
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80',
    amenities: ['واي فاي', 'حديقة', 'مطعم', 'تاريخي'],
  },
  {
    id: 6,
    name: 'فندق ليليوم',
    location: 'كيش، ايران',
    stars: 4,
    price: 85,
    currency: '$',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80',
    amenities: ['واي فاي', 'مسبح', 'مطعم'],
  },
]
