import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import p5 from "p5";
import "../styles/Header.css";

function Header() {
  const sketchRef = useRef();
  const navigate = useNavigate(); // Initialize navigation hook

  useEffect(() => {
    const sketch = (p) => {
      let symmetry = 8;
      let angle = 360 / symmetry;
      let t = 0;
      let brandColors;

      p.setup = () => {
        // Initial canvas size
        p.createCanvas(550, 700);
        p.angleMode(p.DEGREES);
        p.colorMode(p.RGB, 255);
        p.background(255);
        p.noFill();

        brandColors = [
          p.color("#FF0000"),
          p.color("#FFFF00"),
          p.color("#0000FF"),
        ];
      };

      p.draw = () => {
        p.fill(255, 45);
        p.noStroke();
        p.rect(0, 0, p.width, p.height);

        p.translate(p.width / 2, p.height / 2);

        let x1 = ((p.noise(t) - 0.5) * p.width) / 1.2;
        let y1 = ((p.noise(t + 10) - 0.5) * p.height) / 1.2;
        let x2 = ((p.noise(t + 0.05) - 0.5) * p.width) / 1.2;
        let y2 = ((p.noise(t + 10 + 0.05) - 0.5) * p.height) / 1.2;

        t += 0.01;

        let totalColors = brandColors.length;
        let colorSpeed = 0.5;
        let tNorm = (t * colorSpeed) % totalColors;
        let colorIndex = Math.floor(tNorm);
        let tColor = tNorm - colorIndex;
        let colFrom = brandColors[colorIndex];
        let colTo = brandColors[(colorIndex + 1) % totalColors];
        let col = p.lerpColor(colFrom, colTo, tColor);

        for (let i = 0; i < symmetry; i++) {
          p.rotate(angle);

          p.stroke(col);
          p.strokeWeight(20);

          p.line(x1, y1, x2, y2);

          p.push();
          p.scale(1, -1);
          p.line(x1, y1, x2, y2);
          p.pop();
        }
      };

      p.windowResized = () => {
        // Adjust the canvas size based on window width but maintain previous positioning
        const newWidth = Math.min(600, p.windowWidth);
        const newHeight = Math.min(700, p.windowHeight);
        p.resizeCanvas(newWidth, newHeight);
      };
    };

    const p5Instance = new p5(sketch, sketchRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return (
    <header>
      <div className="headerContainer">
        <div className="headerEnglish off-grid">
          <h1>
            New <br />
            Information
          </h1>
        </div>
        <div className="headerFrench off-grid">
          <h1>
            NOUVELLES <br />
            INFORMATIONS
          </h1>
        </div>
        <div className="headerText off-grid">
          <h4>
            → Transforming information into impactful innovation, the iSchool
            fosters a community where education, research, and technology
            converge to shape a better future.
          </h4>
        </div>
        <div className="buttonContainer">
          <button
            className="infoButton"
            onClick={() => navigate("/shapeGeneratorTool")}
          >
            <span>?</span>
          </button>
        </div>
        <div ref={sketchRef}></div>
      </div>
    </header>
  );
}

export default Header;
