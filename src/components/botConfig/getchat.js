import react from 'react';
import { WEATHER_API_KEY } from '@env'
import Tabs from '../Tabs';
import { Configuration, OpenAIApi } from "openai";

export const useGetWeather = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    const fetchChatData = async() => {
        try {
            //attempts to get a chat value from the user
          const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
          const data = await res.json
          setWeather[data]
          
        }
        catch (error) {
          setError('Could not fetch feedback')
        }
        finally {
          setLoading(false)
        }
    
      }
}