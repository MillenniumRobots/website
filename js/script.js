var cab = document.getElementById('cabeca');
var navigation = document.getElementById('navigation')
var conteudo = document.getElementById('site')
var showSidebar

function toggleSidebar(){
    showSidebar = !showSidebar;
    
    if(showSidebar){
        navigation.style.marginLeft = '-15vw'
        navigation.style.animationName = 'showsidebar'
        conteudo.style.filter = 'blur(2px)'
    }
    else {
        navigation.style.marginLeft = '-100vw'
        navigation.style.animationName = ''
        conteudo.style.filter = ''
    }
}

function closeSideBar(){
    showSidebar = !showSidebar;
    
    if(showSidebar){
        toggleSidebar()   
    }
}

window.addEventListener('resize', function(event){
    if(window.innerWidth > 768 && showSidebar)
    {
        toggleSidebar();
    }
});
