import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { useState } from 'react';
import { Passward_generator } from './components/Passward_generator';

    // Components for News Monkey ===> 
// import Navbar from './components/NavBar';
// import { News } from './components/News';
// import LoadingBar from 'react-top-loading-bar'
// import { Routes, Route } from 'react-router-dom';

      // <=====




function App() {
  // const [progress, setprogress] = useState(0);


  return (
    <>

 {/* Components for News Monkey ===>  */}


       {/* <Navbar/>
     <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      /> */}
     {/* <Routes>

      <Route exact path={'/'} element={ <News setprogress={setprogress} key='general' category='general'/>}/>  
      <Route exact path={'/business'} element={ <News setprogress={setprogress} key='business' category='business'/>}/>  
      <Route exact path={'/entertainment'} element={ <News setprogress={setprogress} key='entertainment' category='entertainment'/>}/>  
      <Route exact path={'/general'} element={ <News setprogress={setprogress} key='general' category='general'/>}/>  
      <Route exact path={'/health'} element={ <News setprogress={setprogress} key='health' category='health'/>}/>  
      <Route exact path={'/science'} element={ <News setprogress={setprogress} key='science' category='science'/>}/>  
      <Route exact path={'/sports'} element={ <News setprogress={setprogress} key='sports' category='sports'/>}/>  
      <Route exact path={'/technology'} element={ <News setprogress={setprogress} key='technology' category='technology'/>}/>  
     
     </Routes> */}



        {/* <===== */}






        <Passward_generator/>
    </>
  );
}

export default App;
