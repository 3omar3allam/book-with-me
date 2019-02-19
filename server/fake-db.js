const Rental = require('./models/rental');

class FakeDb{
  constructor() {
    this.rentals = [
      {
        title: "Nice view on ocean",
        city: "San Francisco",
        street: "Main street",
        category: "condo",
        image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
        bedrooms: 4,
        description: "Very nice apartment in center of the city.",
        dailyRate: 43,
        shared: true,
      },
      {
        title: "Modern apartment in center",
        city: "New York",
        street: "Time Square",
        category: "apartment",
        image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
        bedrooms: 1,
        description: "Very nice apartment in center of the city.",
        dailyRate: 11,
        shared: false,
        createdAt: new Date('2/14/2019'),
      },
      {
        title: "Old house in nature",
        city: "Spisska Nova Ves",
        street: "Banicka 1",
        category: "house",
        image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
        bedrooms: 5,
        description: "Very nice apartment in center of the city.",
        dailyRate: 23,
        shared: true,
        createdAt: new Date('12/20/2018'),
      },
      {
        title: 'Central Apartment 4',
        city: 'Berlin',
        street: 'Haupt strasse',
        category: 'house',
        image: 'https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg',
        bedrooms: 9,
        description: 'Very nice apartment',
        dailyRate: 33,
        shared: true,
        createdAt: new Date('12/24/2017'),
      }
    ];
  }

  async cleanDb() {
    await Rental.deleteMany({});
  }

  pushRentals(){
    this.rentals.forEach((rental) => {
      const newRental = new Rental(rental);
      newRental.save();
    });
  }

  seedDb(){
    this.cleanDb();
    this.pushRentals()
  }
}

module.exports = FakeDb;
