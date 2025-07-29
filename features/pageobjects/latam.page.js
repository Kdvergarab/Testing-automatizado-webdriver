const { $ } = require('@wdio/globals');
const Page = require('./page');

/**
 * Page object para la página principal de LATAM Airlines
 */
class LatamPage extends Page {
    /**
     * Selectores para los elementos de la página
     */
    get origenInput() { return $('//input[@placeholder="Desde"]'); }
    get destinoInput() { return $('//input[@placeholder="Hacia"]'); }
    get fechaIdaInput() { return $('//input[@placeholder="Ida"]'); }
    get buscarButton() { return $('//button[contains(text(), "Buscar")]'); }
    get resultadosVuelos() { return $('//div[contains(@class, "flight-results")]'); }
    get filtrarPrecioButton() { return $('//button[contains(text(), "Precio")]'); }
    
    /**
     * Métodos para interactuar con la página
     */
    async seleccionarOrigen(origen) {
        await this.origenInput.click();
        await this.origenInput.setValue(origen);
        await $(`//li[contains(text(), "${origen}")]`).click();
    }

    async seleccionarDestino(destino) {
        await this.destinoInput.click();
        await this.destinoInput.setValue(destino);
        await $(`//li[contains(text(), "${destino}")]`).click();
    }

    async seleccionarFechaIda(fecha) {
        await this.fechaIdaInput.click();
        // Formato esperado: DD/MM/YYYY
        const [dia, mes, anio] = fecha.split('/');
        await $(`//div[contains(@class, "calendar")]//button[text()="${dia}"]`).click();
    }

    async buscarVuelos() {
        await this.buscarButton.click();
    }

    async filtrarPorPrecio() {
        await this.filtrarPrecioButton.click();
    }

    /**
     * Abre la página principal de LATAM Airlines
     */
    open() {
        return super.open('https://www.latamairlines.com/cl/es');
    }
}

module.exports = new LatamPage();