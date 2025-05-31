import {BrowserRouter, Link, Routes, Route} from 'react-router';
function ReactRouter(){
  return(
    <>
    <BrowserRouter >
    <Link to="/">Home</Link>
        <Link to="/about">about</Link>
            <Link to="/details">details</Link>
    <Routes>
    <Route path="/" element={<h1>home</h1>} />
    <Route path="/about" element={<h1>about</h1>} />
    <Route path="/details" element={<h1>details</h1>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}


export default ReactRouter;