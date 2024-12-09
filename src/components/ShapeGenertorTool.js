import React, { useRef, useEffect, useState } from "react";
import p5 from "p5";
import "../styles/ShapeGeneratorTool.css";

function ShapeGeneratorTool() {
  const sketchRef = useRef();
  const [symmetry, setSymmetry] = useState(8);
  const [colorSpeed, setColorSpeed] = useState(0.5);
  const [strokeWeight, setStrokeWeight] = useState(20);
  const [backgroundOpacity, setBackgroundOpacity] = useState(45);
  const [lineLength, setLineLength] = useState(1.2);
  const [animationSpeed, setAnimationSpeed] = useState(0.01);
  const [lineCount, setLineCount] = useState(1);

  useEffect(() => {
    const sketch = (p) => {
      let angle;
      let t = 0;
      let brandColors;
      let canvasParentWidth, canvasParentHeight;

      p.setup = () => {
        const canvas = p.createCanvas(650, 650);
        canvas.class("shapeCanvas");
        canvasParentWidth = canvas.parent().clientWidth;
        canvasParentHeight = canvas.parent().clientHeight;
        p.resizeCanvas(canvasParentWidth, canvasParentHeight);
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
        p.fill(255, backgroundOpacity);
        p.noStroke();
        p.rect(0, 0, p.width, p.height);

        p.translate(p.width / 2, p.height / 2);

        angle = 360 / symmetry;

        let totalColors = brandColors.length;
        let tNorm = (t * colorSpeed) % totalColors;
        let colorIndex = Math.floor(tNorm);
        let tColor = tNorm - colorIndex;
        let colFrom = brandColors[colorIndex];
        let colTo = brandColors[(colorIndex + 1) % totalColors];
        let col = p.lerpColor(colFrom, colTo, tColor);

        for (let i = 0; i < symmetry; i++) {
          p.rotate(angle);

          for (let j = 0; j < lineCount; j++) {
            let x1 = ((p.noise(t + j * 0.1) - 0.5) * p.width) / lineLength;
            let y1 =
              ((p.noise(t + 10 + j * 0.1) - 0.5) * p.height) / lineLength;
            let x2 =
              ((p.noise(t + 0.05 + j * 0.1) - 0.5) * p.width) / lineLength;
            let y2 =
              ((p.noise(t + 10 + 0.05 + j * 0.1) - 0.5) * p.height) /
              lineLength;

            p.stroke(col);
            p.strokeWeight(strokeWeight);
            p.line(x1, y1, x2, y2);

            p.push();
            p.scale(1, -1);
            p.line(x1, y1, x2, y2);
            p.pop();
          }
        }

        t += animationSpeed;
      };

      p.windowResized = () => {
        canvasParentWidth = p.select(".shapeCanvas").parent().clientWidth;
        canvasParentHeight = p.select(".shapeCanvas").parent().clientHeight;
        p.resizeCanvas(canvasParentWidth, canvasParentHeight);
      };
    };

    const p5Instance = new p5(sketch, sketchRef.current);

    return () => {
      p5Instance.remove();
    };
  }, [
    symmetry,
    colorSpeed,
    strokeWeight,
    backgroundOpacity,
    lineLength,
    animationSpeed,
    lineCount,
  ]);

  const resetSliders = () => {
    setSymmetry(8);
    setColorSpeed(0.5);
    setStrokeWeight(20);
    setBackgroundOpacity(45);
    setLineLength(1.2);
    setAnimationSpeed(0.01);
    setLineCount(1);
  };

  const randomizeSliders = () => {
    setSymmetry(Math.floor(Math.random() * 19) + 2); // 2 to 20
    setColorSpeed(Number((Math.random() * 1.9 + 0.1).toFixed(2))); // 0.1 to 2
    setStrokeWeight(Math.floor(Math.random() * 50) + 1); // 1 to 50
    setBackgroundOpacity(Math.floor(Math.random() * 256)); // 0 to 255
    setLineLength(Number((Math.random() * 2.5 + 0.5).toFixed(1))); // 0.5 to 3
    setAnimationSpeed(Number((Math.random() * 0.049 + 0.001).toFixed(3))); // 0.001 to 0.05
    setLineCount(Math.floor(Math.random() * 10) + 1); // 1 to 10
  };

  const saveCanvas = () => {
    const canvas = document.querySelector(".shapeCanvas");
    if (canvas) {
      const link = document.createElement("a");
      link.download = "shapeGeneratorTool.jpg";
      link.href = canvas.toDataURL("image/jpeg", 1.0);
      link.click();
    }
  };

  return (
    <div className="shape-generator-tool">
      <div className="controls">
        <label>
          Symmetry: {symmetry}
          <input
            type="range"
            min="2"
            max="20"
            value={symmetry}
            onChange={(e) => setSymmetry(Number(e.target.value))}
          />
        </label>
        <label>
          Color Speed: {colorSpeed.toFixed(2)}
          <input
            type="range"
            min="0.1"
            max="2"
            step="0.1"
            value={colorSpeed}
            onChange={(e) => setColorSpeed(Number(e.target.value))}
          />
        </label>
        <label>
          Stroke Weight: {strokeWeight}
          <input
            type="range"
            min="1"
            max="50"
            value={strokeWeight}
            onChange={(e) => setStrokeWeight(Number(e.target.value))}
          />
        </label>
        <label>
          Background Opacity: {backgroundOpacity}
          <input
            type="range"
            min="0"
            max="255"
            value={backgroundOpacity}
            onChange={(e) => setBackgroundOpacity(Number(e.target.value))}
          />
        </label>
        <label>
          Line Length: {lineLength.toFixed(2)}
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.1"
            value={lineLength}
            onChange={(e) => setLineLength(Number(e.target.value))}
          />
        </label>
        <label>
          Animation Speed: {animationSpeed.toFixed(3)}
          <input
            type="range"
            min="0.001"
            max="0.05"
            step="0.001"
            value={animationSpeed}
            onChange={(e) => setAnimationSpeed(Number(e.target.value))}
          />
        </label>
        <label>
          Line Count: {lineCount}
          <input
            type="range"
            min="1"
            max="10"
            value={lineCount}
            onChange={(e) => setLineCount(Number(e.target.value))}
          />
        </label>

        <div className="buttons">
          <button onClick={resetSliders}>Reset</button>
          <button onClick={randomizeSliders}>Randomize</button>
          <button onClick={saveCanvas}>Save Canvas +</button>
        </div>
      </div>

      <div className="canvas-container" ref={sketchRef}></div>
    </div>
  );
}

export default ShapeGeneratorTool;
