import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [city, setCity] = useState([])
  const [search, setSearch] = useState("Jhelum")
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=6c1aa1d2144fa1d4f2c4c1416d12f340`

      const response = await fetch(url)
      const jsonData = response.json()
      setCity(jsonData)
      console.log(jsonData);

      // -----------not find name----------------
      console.log(jsonData.name)
    }
    fetchApi()
  }, [])

  return (
    <>
      <div className="main">
        <div className="search">
          <input type='search' placeholder='Enter City Name' onChange={(e) => {
            setSearch(e.target.value)
          }} />
        </div>

        <div className="card">
          <div className="img">
            <img src="data:image/jpeg;base64,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" alt="" />
          </div>
          {!city?(
            <p></p>
          ):(
          <div className="text">
            <p className='textFirst'>Today</p>
            <h1>New York </h1>

            <p>Temperture: {} C</p>
            <p>Clear Sky</p>
          </div>
          )}
        </div>

        <div className="cardSmall">
          <div className='daysweather'>
            <h4>Friday</h4>
            <img src="https://e7.pngegg.com/pngimages/377/861/png-clipart-jacobs-jacobs-sun-sun-illustration-orange-sunflower.png" alt="" />
            <p>24 C</p>
          </div>
          <div className='daysweather'>
            <h4>Friday</h4>
            <img src="https://e7.pngegg.com/pngimages/377/861/png-clipart-jacobs-jacobs-sun-sun-illustration-orange-sunflower.png" alt="" />
            <p>24 C</p>
          </div>
          <div className='daysweather'>
            <h4>Friday</h4>
            <img src="https://e7.pngegg.com/pngimages/377/861/png-clipart-jacobs-jacobs-sun-sun-illustration-orange-sunflower.png" alt="" />
            <p>24 C</p>
          </div>
          <div className='daysweather'>
            <h4>Friday</h4>
            <img src="https://e7.pngegg.com/pngimages/377/861/png-clipart-jacobs-jacobs-sun-sun-illustration-orange-sunflower.png" alt="" />
            <p>24 C</p>
          </div>
          <div className='daysweather'>
            <h4>Friday</h4>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuVD9o1NzU5Rgz2P-nr-UHDrnLER5TcstTy4ka2-tv6WoUqxIu0udqszdtbuJinu--qo&usqp=CAU" alt="" />
            <p>24 C</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
