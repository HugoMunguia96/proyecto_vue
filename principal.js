var app = new Vue({
   // Identificador en el DOM
   el: '#app',
   
   // Variables
   data: {
       apellido: 'Hugo Munguia',
       nombre: '',
       nota1: 0,
       nota2: 0,
       nota3: 0,
       lista: []
   },
   methods: {
      // Método para agregar las notas y el promedio a la lista
      agregarNotas: function() {
         if (this.nombre !== '' && this.nota1 !== '' && this.nota2 !== '' && this.nota3 !== '') {
            let promedio = this.calcularPromedio(this.nota1, this.nota2, this.nota3);
            
            this.lista.push({
               nombre: this.nombre,
               nota1: parseFloat(this.nota1),
               nota2: parseFloat(this.nota2),
               nota3: parseFloat(this.nota3),
               promedio: promedio.toFixed(2) // Redondea a 2 decimales
            });
            
            // Reiniciar los campos
            this.nombre = '';
            this.nota1 = 0;
            this.nota2 = 0;
            this.nota3 = 0;
         } else {
            alert('Debe ingresar todos los datos');
         }
      },
      
      // Método separado para calcular el promedio
      calcularPromedio: function(nota1, nota2, nota3) {
         return (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
      }
   }
});