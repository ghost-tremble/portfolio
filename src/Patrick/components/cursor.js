import React, { useRef } from "react";

const Cursor = () => {
  const cursor = useRef(null);

  // custom cursor  anonymois function calls it self
  (function () {
    let init, mouseX, mouseY, positionElement, timer;

    mouseX = (event) => {
      return event.clientX;
    };

    mouseY = (event) => {
      return event.clientY;
    };

    positionElement = (event) => {
      let mouse;
      mouse = {
        x: mouseX(event),
        y: mouseY(event),
      };
      cursor.current.style.top = mouse.y + "px";
      return (cursor.current.style.left = mouse.x + "px");
    };

    timer = false;

    window.onmousemove = init = (event) => {
      let _event;
      _event = event;
      return (timer = setTimeout(() => {
        return positionElement(_event);
      }, 1));
    };
  }.call(this));

  return (
    <div>
      <div ref={cursor} class="follower"></div>
    </div>
  );
};

export default Cursor;

//#
