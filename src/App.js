
import { Routes, Route} from "react-router-dom";
import Home from "./layouts/GuestUsers_Public/Home";
import About from "./layouts/GuestUsers_Public/About";
import Blogs from "./layouts/GuestUsers_Public/Blogs";
import Companies from "./layouts/GuestUsers_Public/Companies";
import Jobs from "./layouts/GuestUsers_Public/Jobs";
import Contact from "./layouts/GuestUsers_Public/Contact";
import Pricing from "./layouts/GuestUsers_Public/Pricing";
import Services from "./layouts/GuestUsers_Public/Services";

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>          
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/companies" element={<Companies/>}/>
          <Route path="/jobs" element={<Jobs/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
    </div>
  );
}

export default App;
