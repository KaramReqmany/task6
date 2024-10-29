fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
    .then(res => res.json())
    .then(res =>f(res))
    let Div = document.querySelector('.root')
    let Popularbooks=document.querySelector('.popular-books')
    function f(res) {
        
        for (let index = res.length-4; index < res.length; index++) {
            Div.innerHTML += `
        <div class="col-lg-3 col-md-6 col-sm-12>
            <div class="card ">
                
                <img style="width:100%; background-color:rgb(251, 246, 244)" src="${res[index].simple_thumb}" class="p-4"/>
                <h3 class="m-3 text-warning-emphasis fs-4">${res[index].title}</h2>
                <p class="text-body-secondary">${res[index].author}</p>
            </div>
        </div>

    
    
         `
         
            
            
        }
        for (let index = 0; index < 8; index++) {
            Popularbooks.innerHTML += `
            <div class="col-lg-3 col-md-6 col-sm-12>
                <div class="card">
                    
                    <img class="p-4" style="width:100%; background-color:rgb(251, 246, 244)" src="${res[index].simple_thumb}"/>
                    <h3 class="m-3 fs-4 text-warning-emphasis">${res[index].title}</h3>
                    <p class="text-body-secondary">${res[index].author}</p>
                </div>
            </div>
    
        
        
             `


            
            
        }
    
    }
fetch('https://wolnelektury.pl/api/books/studnia-i-wahadlo')
    .then(x => x.json())
    .then(x =>f2(x))
let BestBook=document.querySelector('.best-book')
function f2(x)
{
    BestBook.innerHTML=`
    <img style="width=300px" src="${x.simple_thumb}" class="m-5 border border-white border-5 h-25 p-2 bg-white"/>
    <div style="width:400px;" class="m-5 ">
        <h1 class="my-5">Best Selling Book</h1>
        <p>by ${x.authors[0].name}</p>
        <h3 class="my-5">${x.title}</h3>
        ${x.fragment_data.html}
        <p class=" my-2 mx-auto"><a href="#" class="text-decoration-none text-dark"><strong>shop it now </strong></a></p>
    </div>



    
    
    
    `
}


