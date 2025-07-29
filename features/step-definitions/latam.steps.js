const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');

const LatamPage = require('../pageobjects/latam.page');

Given(/^Estoy en la página principal de LATAM Airlines$/, async () => {
    await LatamPage.open();
});

When(/^Selecciono Santiago de Chile como origen$/, async () => {
    await LatamPage.seleccionarOrigen('Santiago de Chile');
});

When(/^Selecciono Miami como destino$/, async () => {
    await LatamPage.seleccionarDestino('Miami');
});

When(/^Selecciono el 5 de agosto como fecha de ida$/, async () => {
    await LatamPage.seleccionarFechaIda('05/08/2024');
});

When(/^Hago clic en el botón de búsqueda$/, async () => {
    await LatamPage.buscarVuelos();
});

Then(/^Debería ver los resultados de vuelos disponibles$/, async () => {
    await expect(LatamPage.resultadosVuelos).toBeExisting();
});

Then(/^Debería poder filtrar por precio$/, async () => {
    await LatamPage.filtrarPorPrecio();
    // Aquí podríamos agregar una verificación adicional para confirmar que el filtro se aplicó correctamente
});