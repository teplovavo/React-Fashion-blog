import React from "react";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import "./App.css";
import blogImage1 from "./components/blog-image-1.jpg";
import blogImage2 from "./components/blog-image-2.jpg";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Article
          title="On the Street in Brooklyn"
          imgSrc={blogImage1} // Используем импортированное изображение
          imgAlt="Description of image 1"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nulla ut libero mollis facilisis."
        />
        <Article
          title="Vintage in Vogue"
          imgSrc={blogImage2} // Используем импортированное изображение
          imgAlt="Description of image 2"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nulla ut libero mollis facilisis."
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
