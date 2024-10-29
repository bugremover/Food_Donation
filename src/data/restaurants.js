// src/data/restaurants.js

export const restaurants = [
    {
      id: 1,
      name: "Taj Hotel Restaurant",
      address: "Apollo Bunder, Colaba, Mumbai, Maharashtra 400001",
      cuisine: "Indian Fine Dining",
      rating: 4.8,
      position: { lat: 18.9217, lng: 72.8332 },
      availableFood: [
        { id: 1, name: "Mixed Vegetable Curry", quantity: "5 portions", expiry: "2 hours" },
        { id: 2, name: "Dal Makhani", quantity: "3 kg", expiry: "3 hours" }
      ],
      donationTime: "6:00 PM - 8:00 PM",
      image: "https://unsplash.com/s/photos/restaurant"
    },
    {
      id: 2,
      name: "Paradise Biryani",
      address: "Begumpet, Hyderabad, Telangana 500016",
      cuisine: "Hyderabadi",
      rating: 4.6,
      position: { lat: 17.4344, lng: 78.4677 },
      availableFood: [
        { id: 3, name: "Vegetable Biryani", quantity: "10 portions", expiry: "4 hours" }
      ],
      donationTime: "3:00 PM - 5:00 PM",
      image: "https://unsplash.com/s/photos/restaurants"
    },
    {
      id: 3,
      name: "Bengali Sweet House",
      address: "Karol Bagh, New Delhi, Delhi 110005",
      cuisine: "Bengali",
      rating: 4.5,
      position: { lat: 28.6529, lng: 77.1923 },
      availableFood: [
        { id: 4, name: "Mixed Sweets", quantity: "2 kg", expiry: "5 hours" },
        { id: 5, name: "Bengali Thali", quantity: "8 portions", expiry: "2 hours" }
      ],
      donationTime: "7:00 PM - 9:00 PM",
      image: "https://www.zomato.com/chennai/dank-t-nagar"
    }
  ];
  