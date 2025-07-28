# Calculadora de Paneles Solares (TypeScript + Jest)

Este proyecto resuelve un desafío y que calcula cuántos paneles solares pueden instalarse en un techo rectangular, considerando diferentes orientaciones posibles. La solución está escrita en TypeScript y cuenta con pruebas automatizadas mediante Jest.

---

##  Descripción del problema

Se desea determinar la **cantidad máxima de paneles solares** que se pueden ubicar sobre un techo rectangular. Cada panel tiene un ancho y un alto fijo, y puede colocarse en dos orientaciones:

- **Original (vertical)**: sin rotar.
- **Rotada 90° (horizontal)**: ancho y alto intercambiados.

La meta es maximizar el número total de paneles dentro del techo disponible.

---

##  Lógica 

La función `calcularPanel` explora todas las combinaciones posibles en que se pueden colocar los paneles:

1. Se prueban ambas orientaciones (vertical y rotada).
2. Para cada orientación:
   - Se calcula cuántas **filas completas** entran con esa orientación.
   - Luego, se calcula cuántos paneles más se pueden colocar en el **espacio sobrante** si se usan paneles rotados.
3. Se evalúa todas las combinaciones posibles y se guarda el **máximo total de paneles**.


Siempre se obtiene la mejor disposición posible.

---




## Para ejecutar

### 1. Clonar repositorio
git clone https://github.com/tu-usuario/calculate_panel_ts.git
cd calculate_panel_ts

### 2. Instalar dependencias
npm install

### 3. Ejecutar pruebas
npm test

Se ejecutarán:

Un test automatizado con Jest.
Pruebas por consola para visualizar distintos casos.

 Ejemplos de uso
ts
calcularPanel(3, 5, 1, 2); // → 7 paneles
calcularPanel(2, 2, 1, 10); // → 0 paneles
calcularPanel(4, 4, 2, 2); // → 4 paneles
calcularPanel(5, 5, 2, 3); // → 7 paneles

⚙️ Tecnologías utilizadas
TypeScript: Tipado estático y claridad en el código.
Jest: Framework de testing para verificar la lógica.
Node.js: Entorno de ejecución.

Elegî una solución que sea de iteración, fácil de entender y mantener. Evalué otras estrategias más complejas pero dado que el problema tiene una estructura simple (espacio rectangular y solo dos posibles orientaciones), una solución iterativa fue más clara, para el desafío. 


📁 Estructura del proyecto
calculate_panel_ts/
├── src/
│   └── calculatePanel.ts         Función principal
├── test/
│   └── test.ts                   Test con Jest y pruebas manuales
├── jest.config.mjs               Configuración de Jest con soporte para ES Modules y TypeScript
├── tsconfig.json                 Configuración de compilador TypeScript
├── package.json                  Scripts y dependencias



Una posible evolución podrîa incluir variables del mundo real como por ejemplo:

Cambio de orientaciones del panelen este caso solo había horizontal y vertical.
Inclinación del techo
Orientación con respecto al sol
Tipo de material de la superficie, para decidir si es compatible con un montaje x.
Altitud o pendiente, que podría limitar ciertas configuraciones.
Restricciones geométricas adicionales como obstáculos, formas irregulares, etc.

Estas extensiones permitirían adaptar la lógica a condiciones reales de instalación, volviéndolo útil en escenarios productivos o integraciones con software de simulación solar.





