import './App.css'


import {Homepage} from "./layout/sections/homepage/Homepage.tsx";

import {Logos} from "./layout/sections/logos/Logos.tsx";
import {Fiture} from "./layout/sections/fiture/Fiture.tsx";
import {Testimonial} from "./layout/sections/testimonial/Testimonial.tsx";

function App() {
    return (
        <div className="App">
            <Homepage />
            <Logos />
            <Fiture/>
            <Testimonial />
        </div>
    )
}

export default App

