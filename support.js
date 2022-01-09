
const queries=[
  {
    query:"What is this payment problem",
    solution:"This is the solution",
    type:"payment"
  },
  {
    query:"What is this shipping problem",
    solution:"This is the solution",
    type:"shipping"
  },
  {
    query:"What is this payment problem",
    solution:"This is the solution",
    type:"payment"
  },
  {
    query:"What is this tracking problem",
    solution:"This is the solution",
    type:"tracking"
  },
  {
    query:"What is this pricing problem",
    solution:"This is the solution",
    type:"pricing"
  },
  {
    query:"What is this payment problem",
    solution:"This is the solution",
    type:"payment"
  },
  {
    query:"What is this shipping problem",
    solution:"This is the solution",
    type:"shipping"
  },
  {
    query:"What is this pricing problem",
    solution:"This is the solution",
    type:"pricing"
  },
  {
    query:"What is this tracking problem",
    solution:"This is the solution",
    type:"tracking"
  },
  {
    query:"What is this payment problem",
    solution:"This is the solution",
    type:"payment"
  },
  {
    query:"What is this pricing problem",
    solution:"This is the solution",
    type:"pricing"
  },
  {
    query:"What is this shipping problem",
    solution:"This is the solution",
    type:"shipping"
  },
  {
    query:"What is this payment problem",
    solution:"This is the solution",
    type:"payment"
  },
  {
    query:"What is this pricing problem",
    solution:"This is the solution",
    type:"pricing"
  }
]


const filterBtns= document.querySelectorAll('button');
for(let i=0;i<filterBtns.length;i++){
  filterBtns[i].addEventListener('click',(e)=>{

   removeCurrentActive();
   e.currentTarget.classList.add('active');
  })
}
function removeCurrentActive(){
  for(let i=0;i<filterBtns.length;i++){
    filterBtns[i].classList.remove('active')
  }
}




function render(filterType){
  filtermiddleware(filterType);
}


function filtermiddleware(filterType){

  const accordion = document.querySelector('.accordion');
  accordion.innerHTML="";
  for (i=0; i<queries.length; i++) {
    if(filterType=='all'||filterType==queries[i].type){
      let container=document.createElement("div");
      container.innerHTML=`<div class="label">${queries[i].query}</div>
      <div class="content">${queries[i].solution}</div><hr>`;
      container.classList.add('container');
      container.addEventListener('click', function () {
        this.classList.toggle('active')
      })
      accordion.appendChild(container);
    }
    
  }
}
render('all');
//sidebar news code 
fetch("https://newsapi.org/v2/everything?q=maersk&apiKey=a1f181aa894c4ebcbf3a17b37a4d9c5f")
.then(res => res.json())
.then((res)=>{
  processNewsResponse(res);
  console.log(res)
    console.log(res["articles"][0]["title"]);
})
.catch((e)=>{
    console.log(e);
})

function processNewsResponse(res){
  let sidebar=document.querySelector(".sidebar");
  for(let i=0;i<25;i++){
    let newsTile=document.createElement('div');
    newsTile.classList.add("newsContainer");
    newsTile.innerHTML=`<div>${res["articles"][i]["title"]}</div>`;
   
    sidebar.appendChild(newsTile);
   }
}

document.querySelector('.chatdiv').addEventListener('click',(e)=>{
  document.querySelector('.chatbox').classList.toggle("active");
})







