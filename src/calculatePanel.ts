/**
 * Calcula la cantidad máxima de paneles solares que caben en un techo.
 * @param roofWidth - Ancho del techo
 * @param roofHeight - Alto del techo
 * @param panelWidth - Ancho del panel solar
 * @param panelHeight - Alto del panel solar
 * @returns Número máximo de paneles que caben
 */

export function calcularPanel(
roofWidth: number,     // Ancho del techo
roofHeight: number,    // Alto del techo
panelWidth: number,    // Ancho del panel solar
panelHeight: number   // Alto del panel solar
  ): number {
    let maximo = 0;
  
    // Pruebo ambas orientaciones: normal y rotada
    const orientaciones = [
      { pw: panelWidth, ph: panelHeight }, // orientación original 
      { pw: panelHeight, ph: panelWidth } // orientación rotada 90° (panel acostado)
    ];
   
    //calculo las filas que entran en el techo
    for (const { pw, ph } of orientaciones) {
      const maxFilas = Math.floor(roofHeight / ph);
    
      // pruebo con 0,1,2, hasta maxFilas
      for (let filas = 0; filas <= maxFilas; filas++) {

        //Calculo espacio usado y el que queda libre
        const altoUsado = filas * ph;
        const altoRestante = roofHeight - altoUsado;
        
        // Paneles que entran horizontalmente
        const panelesNormales = filas * Math.floor(roofWidth / pw);
        
        // Paneles que entran en el espacio que sobró, si los pongo girados
        const panelesRotados = Math.floor(altoRestante / pw) * Math.floor(roofWidth / ph);
  
        const total = panelesNormales + panelesRotados;
  
        maximo = Math.max(maximo, total);
      }
    }
  
    return maximo;
  }
  