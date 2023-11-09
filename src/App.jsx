import { useState } from 'react'
import  AverageRating from './components/averageRating'
import Sidebar from './components/Sidebar' 
import Reviews from './components/Reviews'
import SentimentAnalysis from './components/sentimentAnalysis' 
import  WebsiteVisitors from './components/websiteVisitors' 

import './styles.css'


function App() {
  const [count, setCount] = useState(0)
  
    

  return (
    
      
       <div className = "flex-container">
    <Sidebar />  
      <Reviews Reviews= '1,281' /> 
     <AverageRating averaRating ='1,281'/>
   <SentimentAnalysis sentmentAnalysis ='960' />
     <WebsiteVisitors websiteVisitors='821'/>
    
    

        
        </div>
        
  )
}

export default App
