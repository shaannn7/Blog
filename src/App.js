import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { createContext, useState } from 'react';
import Blog from './Blog/Blog'
import Blogs from './Blog/Blogs';
import CreateBlog from './Blog/CreateBlog';
import 'bootstrap/dist/css/bootstrap.min.css';

export const myContext = createContext()
function App() {
  const navigate = useNavigate()
  const [blogData, setblogData] = useState([{}])
  const handleChange = (title, body) => {
    const storage = [...blogData, { title: title, body: body }]
    setblogData(storage)
    navigate('/')
  }

  return (
    <div className="App">
      <myContext.Provider value={blogData}>
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/CreateBlog" element={<CreateBlog handleChange={handleChange} />} />
          <Route path="/Blog/:id" element={<Blog />} />
        </Routes>
      </myContext.Provider>

    </div>
  );
}

export default App;