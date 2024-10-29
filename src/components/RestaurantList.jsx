// src/components/RestaurantList.jsx

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Star } from 'lucide-react';
import { restaurants } from '../data/restaurants.js';

const RestaurantList = ({ searchQuery }) => {
  const filteredRestaurants = restaurants.filter(restaurant => 
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    restaurant.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {filteredRestaurants.map(restaurant => (
        <Card key={restaurant.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold">{restaurant.name}</h3>
                <p className="text-sm text-gray-600">{restaurant.address}</p>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm font-medium">{restaurant.rating}</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium text-green-600 mb-2">Available Food</h4>
              <div className="space-y-2">
                {restaurant.availableFood.map(item => (
                  <div key={item.id} className="bg-gray-50 p-2 rounded-lg">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="text-sm text-gray-600">{item.quantity}</span>
                    </div>
                    <div className="text-xs text-gray-500">Expires in: {item.expiry}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-500">{restaurant.donationTime}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RestaurantList;
