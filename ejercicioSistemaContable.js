class Empleado {
  //Propiedades
  nombre = "";
  edad = 0;
  rfc = "";
  diasTrabajados = 0;
  sueldoPorDia = 0;

  //Constructor
  constructor(nombre, edad, rfc, diasTrabajados, sueldoPorDia) {
    this.nombre = nombre;
    this.edad = edad;
    this.rfc = rfc;
    this.diasTrabajados = diasTrabajados;
    this.sueldoPorDia = sueldoPorDia;
  }
  //Calcular sueldo
  calcularSueldoBruto() {
    const sueldoMensual = this.sueldoPorDia * 30;
    return (this.diasTrabajados / 30) * sueldoMensual;
  }

  calcularSueldoNeto() {
    const sueldoBruto = this.calcularSueldoBruto();
    const isr = sueldoBruto * 0.31;
    return sueldoBruto - isr;
  }

  calcularSueldoQuincenaBruto() {
    const sueldoMensual = this.sueldoPorDia * 30;
    const sueldoQuincenal = ((this.diasTrabajados / 30) * sueldoMensual) / 2;
    return sueldoQuincenal;
  }

  calcularSueldoQuincenaNeto() {
    return this.calcularSueldoNeto() / 2;
  }

  //Metodos
  imprimirInformacion() {
    console.log("Información del empleado:");
    console.log("Nombre:", this.nombre);
    console.log("Edad:", this.edad);
    console.log("RFC:", this.rfc);
    console.log("Días trabajados:", this.diasTrabajados);
    console.log("Sueldo por día:", this.sueldoPorDia);
  }
}

// Crear instancias de empleados
const empleado1 = new Empleado("Juan Perez", 30, "PEJU900101", 7, 156.78);
const empleado2 = new Empleado("María García", 35, "GAMA850512", 10, 156.78);
const empleado3 = new Empleado("Pedro Lopez", 28, "LOPE931017", 15, 156.78);
const empleado4 = new Empleado("Ana Torres", 32, "TOAN890203", 20, 156.78);
const empleado5 = new Empleado("Carlos Ramirez", 27, "RACA940722", 12, 156.78);

// Imprimir información
empleado1.imprimirInformacion();
console.log("RFC:", empleado1.rfc);
console.log("Sueldo mensual bruto:", empleado1.calcularSueldoBruto());
console.log("Sueldo mensual neto:", empleado1.calcularSueldoNeto());
console.log("Sueldo quincenal bruto:", empleado1.calcularSueldoQuincenaBruto());
console.log("Sueldo quincenal neto:", empleado1.calcularSueldoQuincenaNeto());
console.log("---------------------------------------");

empleado2.imprimirInformacion();
console.log("RFC:", empleado2.rfc);
console.log("Sueldo mensual bruto:", empleado2.calcularSueldoBruto());
console.log("Sueldo mensual neto:", empleado2.calcularSueldoNeto());
console.log("Sueldo quincenal bruto:", empleado2.calcularSueldoQuincenaBruto());
console.log("Sueldo quincenal neto:", empleado2.calcularSueldoQuincenaNeto());
console.log("---------------------------------------");

empleado3.imprimirInformacion();
console.log("RFC:", empleado3.rfc);
console.log("Sueldo mensual bruto:", empleado3.calcularSueldoBruto());
console.log("Sueldo mensual neto:", empleado3.calcularSueldoNeto());
console.log("Sueldo quincenal bruto:", empleado3.calcularSueldoQuincenaBruto());
console.log("Sueldo quincenal neto:", empleado3.calcularSueldoQuincenaNeto());
console.log("---------------------------------------");

empleado4.imprimirInformacion();
console.log("RFC:", empleado4.rfc);
console.log("Sueldo mensual bruto:", empleado4.calcularSueldoBruto());
console.log("Sueldo mensual neto:", empleado4.calcularSueldoNeto());
console.log("Sueldo quincenal bruto:", empleado4.calcularSueldoQuincenaBruto());
console.log("Sueldo quincenal neto:", empleado4.calcularSueldoQuincenaNeto());
console.log("---------------------------------------");

empleado5.imprimirInformacion();
console.log("RFC:", empleado5.rfc);
console.log("Sueldo mensual bruto:", empleado5.calcularSueldoBruto());
console.log("Sueldo mensual neto:", empleado5.calcularSueldoNeto());
console.log("Sueldo quincenal bruto:", empleado5.calcularSueldoQuincenaBruto());
console.log("Sueldo quincenal neto:", empleado5.calcularSueldoQuincenaNeto());
console.log("---------------------------------------");
