export interface Tour {
  id: number
  destination: string
  title: string
  price: number
  currency: string
  perPerson: string
  image: string
  gradient: string
}

export const tours: Tour[] = [
  {
    id: 1,
    destination: 'شمال ايران',
    title: 'شمـــال ايــــران',
    price: 390,
    currency: '$',
    perPerson: 'للشخص',
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=600&q=80',
    gradient: 'from-emerald-600/80 to-teal-800/80',
  },
  {
    id: 2,
    destination: 'ايران',
    title: 'شمـال ايـران + مـشـهد',
    price: 450,
    currency: '$',
    perPerson: 'للشخص',
    image: 'https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?w=600&q=80',
    gradient: 'from-blue-600/80 to-indigo-800/80',
  },
  {
    id: 3,
    destination: 'ماليزيا',
    title: 'كوالالمبور',
    price: 1420,
    currency: '$',
    perPerson: 'للشخص',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80',
    gradient: 'from-purple-600/80 to-pink-800/80',
  },
  {
    id: 4,
    destination: 'ايران',
    title: 'شـمال ايـران بـري',
    price: 225000,
    currency: '$',
    perPerson: 'للشخص',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80',
    gradient: 'from-orange-600/80 to-red-800/80',
  },
  {
    id: 5,
    destination: 'لبنان - بيروت',
    title: 'بيروت',
    price: 379,
    currency: '$',
    perPerson: 'للشخص',
    image: 'https://images.unsplash.com/photo-1579606032821-4e6161c81571?w=600&q=80',
    gradient: 'from-red-600/80 to-rose-800/80',
  },
  {
    id: 6,
    destination: 'تركيا',
    title: 'اسـطـنـبـول',
    price: 515,
    currency: '$',
    perPerson: 'للشخص',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80',
    gradient: 'from-sky-600/80 to-blue-800/80',
  },
  {
    id: 7,
    destination: 'دبي',
    title: 'دبــي',
    price: 565,
    currency: '$',
    perPerson: 'للشخص',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
    gradient: 'from-amber-600/80 to-yellow-800/80',
  },
]
