// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){    

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // seletor de tag 

    let items = $('.featured-item') // seletor de classe
    
    let destaques = $('#featured')  // seletor de id 
    
    console.log(titulos.first());   // busca primeiro elemento

    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').start('<span class="badge"')  
    //$('.featured-item:first h4').addClass('active') // adiciona uma classe ativa
    //$('.featured-item:first h4').removeClass('active') //remove classe ativa
    //$('.featured-item:first h4').hide() //adiciona display none no elemento
    //$('.featured-item:first h4').show() // dá um display block no elemento
    //$('.featured-item:first h4').fadeIn(5000) // .fadeIn ou fadeout(2000)transição adiciona uma transição ao elemento
    //$('.featured-item:first h4').css('color', '#ff0000') altera css diretamente em 1 parametro
    
    /* $('.featured-item:first h4').css({
      'color': '#f00',
        'background': '#ff0',
        'font-weight': '100'
    }) altera css em várias propriedades do css 


     $('.featured-item').mouseenter(function(){
       console.log($(this).find('h6').text());
     })  seleciona o elemento quando o mouse sai do elemento


     $('.featured-item').mouseleave(function(){
       console.log($(this).find('h4').text());
     })  seleciona o elemento que está dentro do this (.featured-item) quando passa mouse sobre ele */ 

    $('.featured-item h4').dblclick(function(){
        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-wheight': '100'
        })
    });

    /* $('.featured-item').hover(
        function(){
            console.log($(this).find('h4').text());
        },
        function(){
            console.log($(this).find('h4').text() + ' - ' + $(this).find('h6').text());
        }
     )     chama o primeiro elemento no hover e depois concatena o segundo elemento */

    $('.featured-item a').on('click', function(event){

        event.preventDefault();//remove a ação do link ao invés de seguir o link segue a função]
        
        alert('Produto esgotado')

        

    }) 

})

