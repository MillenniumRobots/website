// Obtém elementos HTML pelo ID e atribui-os a variáveis
var cab = document.getElementById('cabeca'); // Obtém o elemento com o ID 'cabeca' (cabeçalho)
var navigation = document.getElementById('navigation'); // Obtém o elemento com o ID 'navigation' (barra de navegação)
var conteudo = document.getElementById('site'); // Obtém o elemento com o ID 'site' (conteúdo principal)
var showSidebar; // Variável que controla o estado da barra lateral

// Função para alternar a exibição da barra lateral
function toggleSidebar() {
    showSidebar = !showSidebar; // Inverte o estado da barra lateral (mostrar/ocultar)
    
    if (showSidebar) {
        // Se a barra lateral deve ser exibida
        navigation.style.marginLeft = '-15vw'; // Define a margem esquerda da barra de navegação para ocultá-la
        navigation.style.animationName = 'showsidebar'; // Aplica uma animação de exibição à barra de navegação
        conteudo.style.filter = 'blur(2px)'; // Aplica um efeito de desfoque ao conteúdo principal
    } else {
        // Se a barra lateral deve ser ocultada
        navigation.style.marginLeft = '-100vw'; // Define a margem esquerda da barra de navegação para ocultá-la completamente
        navigation.style.animationName = ''; // Remove a animação da barra de navegação
        conteudo.style.filter = ''; // Remove o efeito de desfoque do conteúdo principal
    }
}

// Função para fechar a barra lateral
function closeSideBar() {
    showSidebar = !showSidebar; // Inverte o estado da barra lateral (mostrar/ocultar)
    
    if (showSidebar) {
        toggleSidebar(); // Chama a função toggleSidebar() para fechar a barra lateral
    }
}

// Evento de redimensionamento da janela do navegador
window.addEventListener('resize', function(event) {
    if (window.innerWidth > 768 && showSidebar) {
        toggleSidebar(); // Se a largura da janela for maior que 768 pixels e a barra lateral estiver aberta, fecha a barra lateral
    }
});
