class Spinner {
    
    handleClear() {
        Root_Spinner.innerHTML = ``;
    }

    render() {
        const html = `
            <div class = "spinner-container">
                <img class = "spinner__img" src ="/Guitar/Componets/Spinner/img/spinner.svg" />
            </div>
        `;

        Root_Spinner.innerHTML = html;
    }
}

const spinnerPage = new Spinner();