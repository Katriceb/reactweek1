import { useState } from 'react'
import  AverageRating from './components/AverageRating'
import Sidebar from './components/Sidebar' 
import Reviews from './components/Reviews'
import SentimentAnalysis from './components/SentimentAnalysis' 
import  WebsiteVisitors from './components/WebsiteVisitors' 

import './styles.css'


function App() {
  const [count, setCount] = useState(0)
  
    

  return (
    
      <div>
       <div className = "flex-container"></div>
     <div> <Sidebar /> </div>
     <div> <Reviews /> </div>
      <div><SentimentAnalysis /></div>
     <div><WebsiteVisitors/></div>
     <div><AverageRating/></div>
    

        
        </div>
        
  )
}

export default App
