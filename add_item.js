// Coloquei tudo dentro de um evento do DOM pra não dar erro do js, js e paia as vezes da uns erroos de DOM.

// usei arrow function () => {}, pra simplificar, pra não precisar escrever um monte de funçoes pra eventos de click 

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos .item-pedido, header e .menu-mobile, são containers html, tem algumas containers com a mesma class
    const itemsPedidos = document.querySelectorAll('.item-pedido');
    const itemsHeader = document.querySelectorAll('header');
    const mobileMenu = document.querySelector('.menu-mobile');

    
    // logica do Menu Hanburger, a logica e pegar todos os elementos/tag dentro do container, para não dar erros se tiver dois elemnetos com a mesma class
    itemsHeader.forEach(tag =>{
        icon_menu = tag.querySelector('.menu-humburge');

        // uso de arrow function () => {}, evento de clique, alterna o estilo do menu 
        icon_menu.addEventListener('click', () => {
            mobileMenu.classList.toggle('menu-header-show')

        })
    } )
    
    
    itemsPedidos.forEach(item => {
        const bnt_add = item.querySelector('.add');
        const menu_item = item.querySelector('.add-item');
        const removeIcon = menu_item.querySelector('.remove-icon');
        const addIcon = menu_item.querySelector('.add-icon');
        const itemCount = menu_item.querySelector('.item-count');

        let count = parseInt(itemCount.textContent);

        bnt_add.addEventListener('click', () => {
            menu_item.style.display = 'flex';
            bnt_add.style.display = 'none';
        });

        // logica toda fudida kkk, fiz com preguiça, evento de click Desecrementa , se for menor que 5 some com o menu 
        removeIcon.addEventListener('click', () => {
            count -= 5;
            if (count < 5) {
                count = 5;
                menu_item.style.display = 'none';
                bnt_add.style.display = 'flex';
            }
            itemCount.textContent = count;
        });

        // mesma merda so que incrementa, não tem limites mais poderia ter
        addIcon.addEventListener('click', () => {
            count += 5;
            itemCount.textContent = count;
        });
    });
});
