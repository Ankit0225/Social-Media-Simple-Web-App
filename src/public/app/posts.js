
function articlesonload(){
    
    $.get('/api/posts', (posts) => {
     for(let p of posts){
        //  console.log(p);
        $('#postbox').append(
            $(`
            <div class="col-4">
                <div class="card m-2" style="width: 18rem; height: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${p.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                <p class="card-text">
                ${p.body.substr(0, 180)} 
                 <a href="#"> ...Read More</a></p>
                <a href="#" class="card-link text-info">Comment</a>
                <a href="#" class="card-link text-danger">Like <i class="far fa-thumbs-up"></i></a>
                </div>
               </div>
             </div>
            `)
        )
     }
    })
}