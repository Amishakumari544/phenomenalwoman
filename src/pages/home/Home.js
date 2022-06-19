import React from "react";
import home from "../../image/hackathonhome.svg"
function Home() {
  return (
    <div>
      <div class="  flex">
        {/* text */}
       
        <div class="flex-1 w-64 py-28 px-16">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 text-8xl  font-bold">Welcome sisters,<br />start your job searching<br /> at one place
         </h1>
        
        </div>
        <div class="flex-1 w-32">
            <img src={home} alt=""  className="mt-12 pr-12"/>
        </div>
      </div>
      <footer class=" "></footer>
      {/* <img className="fixed" src={wave} alt="Svg"/> */}
    </div>
  );
}

export default Home;
