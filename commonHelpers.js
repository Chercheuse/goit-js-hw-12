import{a as u,i as y,S as h}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function p(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=p(e);fetch(e.href,t)}})();const m=document.querySelector("#form"),i=document.querySelector(".loader"),f=document.querySelector(".gallery"),a=document.querySelector(".load-btn");let l=1,g=15,c="";const b={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250,widthRatio:.9,scaleImageToRatio:!0};i.style.display="none";a.style.display="none";document.addEventListener("DOMContentLoaded",()=>{m.addEventListener("submit",async e=>{if(e.preventDefault(),c=document.getElementById("search").value.trim(),!!c){i.style.display="inline-block",a.style.display="block",f.innerHTML="";try{const r=(await u.get(`https://pixabay.com/api/?key=42026920-e619b387ca2127f1aff40b8e2&q=${c}&image_type=photo&orientation=horizontal&safesearch=true&page=${l}&per_page=15`)).data;n(r)}catch(t){console.error("Error fetching data:",t)}finally{i.style.display="none"}}}),a.addEventListener("click",d);async function d(){l+=1,i.style.display="inline-block";try{const t=(await u.get(`https://pixabay.com/api/?key=42026920-e619b387ca2127f1aff40b8e2&q=${c}&image_type=photo&orientation=horizontal&safesearch=true&page=${l}&per_page=${g}`)).data;n(t),p(),l*g>=t.totalHits&&(hideLoadMoreButton(),s())}catch(e){console.error("Error fetching data:",e)}finally{i.style.display="none"}}function s(){a.style.display="none",y.error({title:"",backgroundColor:"#EF4040",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}function p(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}function n(e){if(e.hits.length===0)a.style.display="none",y.error({title:"",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else{const t=e.hits.map(o=>`<li class="gallery-item"><a href="${o.webformatURL}">
          <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}"></a>
          <div class='comments'>
          <p><b>Likes: </b>${o.likes}</p>
          <p><b>Views: </b>${o.views}</p>
          <p><b>Comments: </b>${o.comments}</p>
          <p><b>Downloads: </b>${o.downloads}</p>
          </div>
          </li>`).join("");f.insertAdjacentHTML("beforeend",t),new h(".gallery a",b).refresh(),m.reset()}}});
//# sourceMappingURL=commonHelpers.js.map
