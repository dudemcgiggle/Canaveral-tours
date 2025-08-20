import { useState, useEffect } from 'react'
import { Calendar, ChevronLeft, ChevronRight, Clock, Users, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import toursData from '@/data/tours.json'

interface TourEvent {
  date_human: string
  date_iso: string
  tour_name: string
  duration_hours: number
  time_label: string
  time_24h: string
  status: string
  spots_left: number | null
  waitlist: boolean
}

interface Month {
  month: string
  events: TourEvent[]
}

export default function TourCalendar() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0)
  const [selectedTour, setSelectedTour] = useState<TourEvent | null>(null)
  
  const months: Month[] = toursData.months
  const currentMonth = months[currentMonthIndex]

  const navigateMonth = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentMonthIndex > 0) {
      setCurrentMonthIndex(currentMonthIndex - 1)
    } else if (direction === 'next' && currentMonthIndex < months.length - 1) {
      setCurrentMonthIndex(currentMonthIndex + 1)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'Sold Out':
        return 'bg-red-100 text-red-800 border-red-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getAvailabilityProgress = (spotsLeft: number | null, totalSpots: number = 10) => {
    if (spotsLeft === null) return 0
    return ((totalSpots - spotsLeft) / totalSpots) * 100
  }

  const getTourPrice = (tourName: string) => {
    if (tourName.includes('Premier')) return 89
    if (tourName.includes('Missile')) return 65
    return 45
  }

  return (
    <div className="w-full space-y-6">
      <Card className="bg-white shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-2xl font-bold text-gray-900">
              <Calendar className="h-6 w-6 text-blue-600" />
              Tour Calendar - {toursData.year}
            </CardTitle>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => navigateMonth('prev')}
                disabled={currentMonthIndex === 0}
                className="h-10 w-10"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="min-w-[120px] text-center">
                <h2 className="text-lg font-semibold text-gray-900">
                  {currentMonth?.month}
                </h2>
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => navigateMonth('next')}
                disabled={currentMonthIndex === months.length - 1}
                className="h-10 w-10"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-4">
            {currentMonth?.events.map((event, index) => (
              <Card 
                key={`${event.date_iso}-${event.time_24h}-${index}`}
                className={`transition-all duration-200 hover:shadow-md cursor-pointer border ${
                  selectedTour === event ? 'ring-2 ring-blue-500 border-blue-200' : 'border-gray-200'
                }`}
                onClick={() => setSelectedTour(selectedTour === event ? null : event)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-lg font-semibold text-gray-900">
                          {event.date_human}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(event.status)}`}>
                          {event.status}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {event.tour_name}
                      </h3>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {event.time_label} ({event.duration_hours}h)
                        </div>
                        {event.spots_left !== null && (
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            {event.spots_left} spots left
                          </div>
                        )}
                      </div>
                      
                      {event.spots_left !== null && event.status === 'Available' && (
                        <div className="mb-4">
                          <div className="flex justify-between text-xs text-gray-600 mb-2">
                            <span>Availability</span>
                            <span>{event.spots_left}/10 spots remaining</span>
                          </div>
                          <Progress 
                            value={getAvailabilityProgress(event.spots_left)} 
                            className="h-2"
                          />
                        </div>
                      )}
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        ${getTourPrice(event.tour_name)}
                      </div>
                      <div className="text-sm text-gray-500">per person</div>
                    </div>
                  </div>
                  
                  {selectedTour === event && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Tour Details</h4>
                          <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              Duration: {event.duration_hours} hours
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              Cape Canaveral Space Force Station
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              Small group experience
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-end justify-end">
                          <Button 
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                            disabled={event.status === 'Sold Out'}
                          >
                            {event.status === 'Sold Out' ? 'Sold Out' : 'Book This Tour'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
            
            {!currentMonth?.events.length && (
              <div className="text-center py-12 text-gray-500">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p className="text-lg">No tours scheduled for this month.</p>
                <p className="text-sm">Please check other months or contact us for availability.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}