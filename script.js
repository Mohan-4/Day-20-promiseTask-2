let accessKey ="E0YIus2HqoHRiio8khaukx7idivNeYUPMcq7tgW8ntQ"

let form=document.querySelector("form")
let input=document.getElementById("search_input")
let searchResults=document.getElementById("search_result")
let lastbtn=document.getElementById("lastbtn")


let inputdata=""
console.log()
let page= 1



async function searchimage(){
    inputdata=input.value
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accessKey}&per_page=12`
    const responce= await fetch(url,{method : "GET"})
    const data =await responce.json()
    var results =data.results
    //console.log(results)

    

    results.forEach((result)=>{
      const image=document.createElement("img");
      image.src=result.urls.small;
      const imagelink=document.createElement("a");
      imagelink.href=result.links.html;
      imagelink.target="_blank";
      
      
      
      imagelink.appendChild(image);
      searchResults.appendChild(imagelink);
      
      
      
    })
    

}

form.addEventListener("submit",(events)=>{
    events.preventDefault()
    page=1
    searchimage()
})

lastbtn.addEventListener("click",()=>{
  page++
  searchimage();
})


function img(){
  document.getElementById("para").style.display= "none"
  document.getElementById("lastbtn").style.display= "block"
}