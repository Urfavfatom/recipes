
let data = []
async function getmeals(meal){
    let response = await fetch (`https://forkify-api.herokuapp.com/api/search?q=${meal}`);
    let finalResponse = await response.json();
    data = finalResponse.recipes;
    displayData()


}
getmeals("pizza")
var links = document.querySelectorAll('.nav-link')
for(var i=0; i<links.length;i++){
    links[i].addEventListener('click' , function(e){
        var currentmeal=e.target.innerHTML
        getmeals(currentmeal)
    })
}

function displayData(){
    var cartona="";
    for(var i = 0 ; i < data.length;i++)
    cartona+=`
    <div class="col-md-4 g-2 h-100">
        <div class="card">
            <img src="${data[i].image_url}" class="card-img-top" height="200"  alt="">
            <div class="card-body">
            
              <h5>${data[i].title}</h5>
              <a target="_blank" href="${data[i].source_url}" class="btn btn-warning">source</a>
            </div>

        </div>

    </div>

`
document.getElementById("cols_body").innerHTML=cartona;
}
