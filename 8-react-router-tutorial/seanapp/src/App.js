import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import {
  Route,
  Routes,
  useHistory
} from 'react-router-dom';
import {
  useState, 
  useEffect
} from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      {/* Routes is a component that renders different components based on the URL path */}
      <Routes> 
        <Route path="/post" element={<NewPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<PostPage />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
