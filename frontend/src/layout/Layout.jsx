import React from 'react' 
import Navbar from '../components/Navbar'

const Main = ({ children }) => {
    return (
        <div >
            <Navbar/>
          <div>{children}</div>
          {/* <Footer /> */}
        </div>
      );
}

export default Main;