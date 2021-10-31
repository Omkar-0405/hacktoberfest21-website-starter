import * as React from "react";
// import { AiOutlineHeart } from "react-icons/ai";
// import { AiFillHeart } from "react-icons/ai";
import "./card.css";
import {
  ParallaxProvider,
  ParallaxBanner,
  Parallax,
} from "react-scroll-parallax";

const initialState = {
  slideIndex: 0,
};

const slides = [
  {
    title: "Machu Picchu",
    description: "Adventure is never far away",
    image: "https://i.imgur.com/3dVUxiW.jpeg",
  },
  {
    title: "Chamonix",
    description: "the spooky dangers lurking ",
    image:
      "https://cdn.discordapp.com/attachments/902584923372810350/904458901582405673/haloween_boy.jpg",
  },
  {
    title: "Mimisa Rocks",
    description: "It's all just a bunch of hocus pocus",
    image: "https://i.imgur.com/8ll4qZl.jpeg",
  },
  {
    title: "Wild wi",
    description:
      "When witches go riding, and black cats are seen, the moon laughs and whispers, ‘tis near Halloween.",
    image: "https://images.pexels.com/photos/3318614/pexels-photo-3318614.jpeg",
  },
  {
    title: "Fives",
    description: "It's Halloween; everyone's entitled to one good scare.",
    image:
      "https://cdn.discordapp.com/attachments/902584923372810350/904458886277373982/168-horror-dress-38-kaku-fancy-dresses-216-original-imaeymkvehkqpzhs.jpeg",
  },
];

const slidesReducer = (state, event) => {
  const midNumber = Math.round((slides.length - 1) / 2);
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex:
        state.slideIndex < midNumber ? state.slideIndex + 1 : -1 * midNumber,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex > -1 * midNumber ? state.slideIndex - 1 : midNumber,
    };
  }
};

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          {/* <h3 className="slideSubtitle">{slide.subtitle}</h3> */}
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

const Cards = () => {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);
  const midNumber = Math.round((slides.length - 1) / 2);
  return (
    <div
      style={{
        top: "0",
        left: "0",
      }}
    >
      <div
        className="slide-container"
        onDoubleClick={console.log("clicked doble")}
      >
        <div className="slides">
          <button onClick={() => dispatch({ type: "PREV" })}>‹</button>{" "}
          {slides.map((slide, i) => {
            let offset = -1 * (midNumber + (state.slideIndex - i));
            return <Slide slide={slide} offset={offset} key={i} />;
          })}
          <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
