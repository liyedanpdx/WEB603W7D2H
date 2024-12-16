import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  Outlet
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";



export default function App() {
  //Insert router, links here
  const TVAPPS ={
    'Netflix':{
      image_url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
    },
    'HBOmax':{
      image_url: "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg"
    },
    'Hulu':{
      image_url: "https://upload.wikimedia.org/wikipedia/commons/2/20/Hulu_2019.svg"
    },
    'PrimeVideo':{
      image_url: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png"
    }
  }
  return(
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <h3>TV APPS</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              {Object.entries(TVAPPS).map(([slug, { image_url }]) => (
                <div key = {slug}>
                  <Link to={`/${slug}`} style={{ padding: 5 }}>
                    <img src={image_url} alt={slug}/>         
                  </Link>
                </div>
              ))}
            </div>
            <Outlet />
          </div>}>
          <Route path=":id" element={<Child/>}/>
        </Route>
        
      </Routes>
    </Router>
  )
}

function Child() {

  // Below this comment, there's one major key script missing
  const { id } = useParams();

  return (
    <div>
      <h3>You Selected:<span>{id}</span></h3>
    </div>
  );
}
