// IMPORT IMAGES // 
import animate1 from "../assets/design/Untitled-3.png";
import animate2 from "../assets/design/Untitled-4.png";
import animate3 from "../assets/design/Untitled-6.png";
import animate4 from "../assets/design/Untitled-9.png";
import Sketch1 from "../assets/design/wire2.png";
import Sketch2 from "../assets/design/wire1.png";
import Sketch3 from "../assets/design/urte.png";
import Sketch4 from "../assets/design/info.png";
import Sketch5 from "../assets/design/spid.png";
import Sketch6 from "../assets/design/desk.png";
import model1 from "../assets/design/one.png";
import model2 from "../assets/design/two.png";
import model3 from "../assets/design/three.png";
import model4 from "../assets/design/four.png";


export default function DesignPage() {
    return(
        <section>
            <section id="design3d">
                <h2 className="uppercase" > 3D Animations </h2>
                <p> 3D animations, crafted using software like Adobe Illustrator, 
                    are gaining prominence in the graphic design industry. 
                    <br></br>
                    They offer dynamic and immersive experiences, making them 
                    essential for engaging audiences. From web design to 
                    advertising and gaming, 3D animations are versatile tools.
                    <br></br><br></br>
                    Look through my animation library beneath. 
                </p>
            </section>
            
        <section className="Flexbox relative">
            
            <p className="uppercase absolut" id="ScrollText">scroll left</p>
            <div className="scroll-container">
                <img  src={animate1} alt="image of balls" width="1000" height="600" />
                <img  src={animate2} alt="image of balls" width="1000" height="600" />
                <img  src={animate3} alt="image of balls" width="1000" height="600" />
                <img  src={animate4} alt="image of balls" width="1000" height="600" />
            </div>
        </section>

            <section id="sketches">
                <div>
                    <h2 className="uppercase" > Sketching </h2>
                    <p> Sketching helps you visualize your design concepts 
                        in a rough, low-fidelity form. 
                        <br></br>It's a way to 
                        translate abstract ideas into tangible visual 
                        representations, making it easier to understand 
                        and communicate your vision. 
                    </p>
                </div>
               
            </section>

              <div id="sketch" className="Flexbox">
                <img  src={Sketch1} alt="image of balls" width="38%" height="38%" />
                <img  src={Sketch2} alt="image of balls" width="20%" height="20%" />
            </div>
            <div id="sketch2" className="Flexbox">
                <img  src={Sketch3} alt="image of balls" width="40%" height="40%" />
                <img  src={Sketch4} alt="image of balls" width="50%" height="50%" />
            </div>
            <div id="sketch3" className="Flexbox">
                <img  src={Sketch5} alt="image of balls" width="35%" height="35%" />
                <img  src={Sketch6} alt="image of balls" width="35%" height="35%" />
            </div>

            <section className="Flexbox relative">
            
            <p className="uppercase absolut" id="ScrollTextmodels">scroll left to see different models</p>
            <div className="scroll-container" id="scrollmodels">
                <img  src={model1} alt="image of balls" width="450" height="350" />
                <img  src={model2} alt="image of balls" width="580" height="350" />
                <img  src={model3} alt="image of balls" width="550" height="350" />
                <img  src={model4} alt="image of balls" width="550" height="350" />
            </div>
        </section>










        </section>
    )
}