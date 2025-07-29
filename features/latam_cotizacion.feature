Feature: Cotización de vuelo en LATAM Airlines

  Scenario: Como usuario, quiero cotizar un vuelo de Santiago de Chile a Miami

    Given Estoy en la página principal de LATAM Airlines
    When Selecciono Santiago de Chile como origen
    And Selecciono Miami como destino
    And Selecciono el 5 de agosto como fecha de ida
    And Hago clic en el botón de búsqueda
    Then Debería ver los resultados de vuelos disponibles
    And Debería poder filtrar por precio