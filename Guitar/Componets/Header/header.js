class Header {
    handleOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
            <div class="header-container">
                <div class="header-counter" onclick="headerPage.handleOpenShoppingPage();">
                   <div class = "header-guitar"> <img class = "header-img" src="/Guitar/Componets/Header/guitar-playing.png" /> Guitar Shop</div> 👾 ${count}
                </div>
            </div>
            
        `
        Root_Header.innerHTML = html;
    }
}

const headerPage = new Header();
