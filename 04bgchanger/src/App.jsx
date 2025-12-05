import { useState } from "react";

function App() {
  // Initialize state with an initial image URL
  const [image, setImage] = useState("https://images.pexels.com/photos/16439397/pexels-photo-16439397/free-photo-of-cobblestone-alley-in-old-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");

  return (
    <div 
      className="w-full h-screen duration-200" 
      style={{ 
        backgroundImage: `url(${image})`, 
        // backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-9">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button
            onClick={() => setImage("https://images.pexels.com/photos/28806714/pexels-photo-28806714/free-photo-of-silhouette-of-a-person-walking-by-historic-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black & White
          </button>

          <button
            onClick={() => setImage("https://images.pexels.com/photos/27200214/pexels-photo-27200214/free-photo-of-a-view-of-a-valley-with-mountains-and-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "teal" }}
          >
            Teal
          </button>

          <button
            onClick={() => setImage("https://images.pexels.com/photos/16439397/pexels-photo-16439397/free-photo-of-cobblestone-alley-in-old-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "brown" }}
          >
            Original
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
