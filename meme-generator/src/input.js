import React, { useEffect, useState } from "react";

const Input = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  });

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme(() => {
      return { topText: "", bottomText: "", randomImage: url };
    });
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  };

  return (
    <div className="input-container">
      <section className="input-text-container">
        <input
          name="topText"
          type="text"
          placeholder="Enter Top Text"
          onChange={changeHandler}
          value={meme.topText}
          className="top-text meme-input"
        ></input>
        <input
          name="bottomText"
          type="text"
          placeholder="Enter Bottom Text"
          onChange={changeHandler}
          value={meme.bottomText}
          className="bottom-text meme-input"
        ></input>
      </section>
      <button className="input-btn" type="submit" onClick={getMemeImage}>
        Get A New Meme Image
      </button>
      <div className="meme-display">
        <h2 className="t-text">{meme.topText}</h2>
        <img
          src={meme.randomImage}
          alt="Not Rendering"
          className="meme-image"
        />
        <h2 className="b-text">{meme.bottomText}</h2>
      </div>
    </div>
  );
};

export default Input;
