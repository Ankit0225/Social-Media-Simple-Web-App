

$(() => {
    
    $('#navbar').load('./components/navbar.html', login)
    $('#footer').load('./components/footer.html')
   
    
  
})

function login(){

    // function updateUsernameNavbar(username){
    //     $(`.nav-user`).text(username)
    // }
    window.loginuser = window.localStorage.users ? JSON.parse(window.localStorage.users) : null
    // console.log(loginuser);
    if(!loginuser) {
        $.post('/api/users', {} , (users) => {
       
            if(users) {
                // console.log('Login as ' + users.username);
                window.localStorage.users = JSON.stringify(users)
                loginuser = users
                // console.log($('.nav-user'));
                $(`.nav-user`).text(loginuser.username)
            }
        })
    }else {
        // console.log('Resuming login as ' + loginuser.username);
        // console.log($('.nav-user'));
        $(`.nav-user`).text(loginuser.username)
    }
}