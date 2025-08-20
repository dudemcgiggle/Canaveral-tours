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
  const [isAnimating, setIsAnimating] = useState(false)
  
  const months: Month[] = toursData.months
  const currentMonth = months[currentMonthIndex]

  const navigateMonth = (direction: 'prev' | 'next') => {
    if (isAnimating) return
    
    setIsAnimating(true)
    
    setTimeout(() => {
      if (direction === 'prev' && currentMonthIndex > 0) {
        setCurrentMonthIndex(currentMonthIndex - 1)
      } else if (direction === 'next' && currentMonthIndex < months.length - 1) {
        setCurrentMonthIndex(currentMonthIndex + 1)
      }
      setIsAnimating(false)
    }, 150)
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

  return (
    <div className="w-full space-y-4">
      <Card className="bg-white shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-2xl font-bold text-gray-900">
              <Calendar className="h-6 w-6 text-blue-600" />
              Tour Calendar
            </CardTitle>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => navigateMonth('prev')}
                disabled={currentMonthIndex === 0 || isAnimating}
                className="nav-btn nav-prev"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="min-w-[120px] text-center">
                <h2 className="text-lg font-semibold text-gray-900">
                  {currentMonth?.month} {toursData.year}
                </h2>
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => navigateMonth('next')}
                disabled={currentMonthIndex === months.length - 1 || isAnimating}
                className="nav-btn nav-next"
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
                className={`transition-all duration-200 hover:shadow-md cursor-pointer ${
                  selectedTour === event ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedTour(selectedTour === event ? null : event)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-gray-600">
                          {event.date_human}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(event.status)}`}>
                          {event.status}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {event.tour_name}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {event.time_label} ({event.duration_hours}h)
                        </div>
                        {event.spots_left !== null && (
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {event.spots_left} spots left
                          </div>
                        )}
                      </div>
                      
                      {event.spots_left !== null && event.status === 'Available' && (
                        <div className="mt-3">
                          <div className="flex justify-between text-xs text-gray-600 mb-1">
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
                      <div className="text-lg font-semibold text-emerald-600">
                        ${event.tour_name.includes('Premier') ? '89' : 
                          event.tour_name.includes('Missile') ? '65' : '45'}
                      </div>
                      <div className="text-xs text-gray-500">per person</div>
                    </div>
                  </div>
                  
                  {selectedTour === event && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Tour Details</h4>
                          <div className="space-y-1 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              Duration: {event.duration_hours} hours
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              Cape Canaveral Launch Complex
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-end justify-end">
                          <Button 
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                            disabled={event.status === 'Sold Out'}
                          >
                            {event.status === 'Sold Out' ? 'Sold Out' : 'Book Now'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
            
            {!currentMonth?.events.length && (
              <div className="text-center py-8 text-gray-500">
                No tours scheduled for this month.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}