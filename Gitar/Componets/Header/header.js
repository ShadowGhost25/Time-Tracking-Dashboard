class Header {

    render() {
        const html = `
            <div class="header-container">
                <div class="header-counter">
                    👾 77
                </div>
            </div>
        `
        Root_Header.innerHTML = html;
    }
}

const headerPage = new Header();
headerPage.render();