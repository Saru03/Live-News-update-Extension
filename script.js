const apiKey = 'pub_36888ffcc55623be73076b30fc124796dc978';
const apiUrl = 'https://newsdata.io/api/1/news';


const newsContainer = document.querySelector('#news-container');
const newsHeadline = document.querySelector('#headline');
const newsDescription = document.querySelector('#description');
const newsUrl = document.querySelector('#url');
const newsImage = document.querySelector('#img');
const newsError = document.querySelector('#error');

async function getNews() {
  const response = await fetch(`${apiUrl}?language=en&apiKey=${apiKey}`);
  const data=await response.json(); 
  console.log('API Response:', data);
  if (data.results) {
  const article = data.results[0];
  newsHeadline.textContent=article.title;
  newsDescription.textContent=article.description;
  newsUrl.textContent=`Article link ${article.link}`;
  newsImage.src=article.image_url;
  } 
  else{
  newsError.textContent="No articles found";
  }
}
window.addEventListener("load", () =>{ 
  getNews(); 
})
