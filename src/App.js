
import React from "react";
import Header from "./Header";
import Article from "./Article";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Article
          title="On the Street in Brooklyn"
          imgSrc="./blog-image-1"
          imgAlt="Description of image 1"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nulla ut libero mollis facilisis."
        />
        <Article
          title="Vintage in Vogue"
          imgSrc="./blog-image-2"
          imgAlt="Description of image 2"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nulla ut libero mollis facilisis."
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
