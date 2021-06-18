import React, {useState, useEffect} from 
'react'
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./Image/newsimg.jpg";
import NavBar from "./Components/NavBar"

 
const  App = () => {
  const [articles, setArticles] = useState([])
  const [term, setTerm] = useState('everything')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() =>{
    const fetchArticles = async () => {
    try{
     
        const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=We3y0NgvYixCffsT10ZjWWyOxjoC8UOU`
        )
        const articles = await res.json()
        console.log(articles.response.docs)
        setArticles(articles.response.docs)
      } catch (error){
        console.error(error);
    } 
    }
   fetchArticles()
  
  }, [])

 
  return (
    <>
    <NavBar></NavBar>
    
   <section className="all_news">
 
     {articles.map((article) =>{
     const {abstract,
       headline: {main},
        byline:{original},
        lead_paragraph,
        pub_date,
        web_url,
        _id} = article
     return (

      <div className="news">
      <ReactRoundedImage image={MyPhoto} roundedSize="0"  imageWidth="110" imageHeight="110" />
      <hr></hr>
       <article key={_id}>
       <h2>{main}</h2>
       <p>{pub_date}</p>
       <p> {original}</p>
       <a href= {web_url} target="_blank">Read more</a>
        
       </article>
      
       </div>
     )
     })}
   </section>
   
   <section>
 
   </section>

   
    </>
  );
}

export default App;
