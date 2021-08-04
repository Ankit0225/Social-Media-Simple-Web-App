let navlink = $('.navbar-nav .nav-link')

navlink.click((e) => {
    // console.log($(e.target).attr('data-values'));

    let Componentlink = `./components/${$(e.target).attr('data-values')}.html`
    $('#content').load(Componentlink)
})