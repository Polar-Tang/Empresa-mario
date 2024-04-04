  import React from 'react'
  
  export function filter () {
    return(
        <section className='filter'>
          <div>
            <label htmlFor='price'>
              <input type="range"
              id='price' 
              min=' 0'
              max='500000'
              />
            </label>
          </div>
          </section>
    )
  }
  