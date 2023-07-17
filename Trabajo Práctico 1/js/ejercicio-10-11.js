let numeroDivisible = parseInt(prompt("Escriba un número entero para saber si es divisible por 2, 3, 5 o 7.  Nota: Si ingresa un número decimal, sera convertido en uno entero por truncamiento."));

if (isNaN(numeroDivisible)) {
    alert("No ha ingresado un número entero.");
    numeroDivisible = parseInt(prompt("Escriba un número entero para saber si es divisible por 2, 3, 5 o 7.  Nota: Si ingresa un número decimal, sera convertido en uno entero por truncamiento."));
} else {
    if (numeroDivisible % 2 == 0 || numeroDivisible % 3 == 0 || numeroDivisible % 5 == 0 || numeroDivisible % 7 == 0) {
        document.write(`El número ${numeroDivisible} es divisible por `);
    } else {
        document.write(`El número ${numeroDivisible} NO es divisible por 2, 3, 5 o 7.`);
        };
    if (numeroDivisible % 2 == 0) {
        document.write(`2`);
    };
    if (numeroDivisible % 2 == 0 && numeroDivisible % 3 == 0 && (numeroDivisible % 5 == 0 || numeroDivisible % 7 == 0)) {
        document.write(`, por `);
    };
    if (numeroDivisible % 2 == 0 && numeroDivisible % 3 == 0 && numeroDivisible % 5 != 0 && numeroDivisible % 7 != 0 ) {
        document.write (` y por `);
    };
    if (numeroDivisible % 3 == 0) {
        document.write(`3`);
    };
    if ((numeroDivisible % 2 == 0 || numeroDivisible % 3 == 0) && numeroDivisible % 5 == 0 && numeroDivisible % 7 == 0) {
        document.write(`, por `);
    };
    if ((numeroDivisible % 2 == 0 || numeroDivisible % 3 == 0 ) && numeroDivisible % 5 == 0 && numeroDivisible % 7 != 0 ) {
        document.write (` y por `);
    };
    if (numeroDivisible % 5 == 0) {
        document.write(`5`);
    };
    if ((numeroDivisible % 2 == 0 || numeroDivisible % 3 == 0 || numeroDivisible % 5 == 0 ) && numeroDivisible % 7 == 0) {
        document.write(` y por `);
    };
    if (numeroDivisible % 7 == 0) {
        document.write(`7`);
    };
    if (numeroDivisible % 2 == 0 || numeroDivisible % 3 == 0 || numeroDivisible % 5 == 0 || numeroDivisible % 7 == 0) {
        document.write(`.`);
    };
    }




//Método más largo
/*
if (isNaN(numeroDivisible) || parseFloat(numeroDivisible)) {
    
    alert("No ha ingresado un número entero.");
    
    numeroDivisible = parseInt(prompt("Escriba un número entero para saber si es divisible por 2, 3, 5 o 7."));
    
} else {
    if (numeroDivisible % 2 == 0 && numeroDivisible % 3 != 0 && numeroDivisible % 5 != 0 && numeroDivisible % 7 != 0) {
        document.write(`El número ${numeroDivisible} es divisible en 2.`);
    } else {
        if (numeroDivisible % 2 != 0 && numeroDivisible % 3 == 0 && numeroDivisible % 5 != 0 && numeroDivisible % 7 != 0) {
            document.write(`El número ${numeroDivisible} es divisible en 3.`);
        } else {
            if (numeroDivisible % 2 != 0 && numeroDivisible % 3 != 0 && numeroDivisible % 5 == 0 && numeroDivisible % 7 != 0) {
                document.write(`El número ${numeroDivisible} es divisible en 5.`);
            } else {
                if (numeroDivisible % 2 != 0 && numeroDivisible % 3 != 0 && numeroDivisible % 5 != 0 && numeroDivisible % 7 == 0) {
                    document.write(`El número ${numeroDivisible} es divisible en 7.`);
                } else {
                    if (numeroDivisible % 2 == 0 && numeroDivisible % 3 == 0 && numeroDivisible % 5 != 0 && numeroDivisible % 7 != 0) {
                        document.write(`El número ${numeroDivisible} es divisible en 2 y 3.`);
                    } else {
                        if (numeroDivisible % 2 == 0 && numeroDivisible % 3 != 0 && numeroDivisible % 5 == 0 && numeroDivisible % 7 != 0) {
                            document.write(`El número ${numeroDivisible} es divisible en 2 y 5.`);
                        } else {
                            if (numeroDivisible % 2 == 0 && numeroDivisible % 3 != 0 && numeroDivisible % 5 != 0 && numeroDivisible % 7 == 0) {
                                document.write(`El número ${numeroDivisible} es divisible en 2 y 7.`);
                            } else {
                                if (numeroDivisible % 2 != 0 && numeroDivisible % 3 == 0 && numeroDivisible % 5 == 0 && numeroDivisible % 7 != 0) {
                                    document.write(`El número ${numeroDivisible} es divisible en 3 y 5.`);
                                } else {
                                    if (numeroDivisible % 2 != 0 && numeroDivisible % 3 == 0 && numeroDivisible % 5 != 0 && numeroDivisible % 7 == 0) {
                                        document.write(`El número ${numeroDivisible} es divisible en 3 y 7.`);
                                    } else {
                                        if (numeroDivisible % 2 != 0 && numeroDivisible % 3 != 0 && numeroDivisible % 5 == 0 && numeroDivisible % 7 == 0) {
                                            document.write(`El número ${numeroDivisible} es divisible en 5 y 7.`);
                                        } else {
                                            if (numeroDivisible % 2 == 0 && numeroDivisible % 3 == 0 && numeroDivisible % 5 == 0 && numeroDivisible % 7 != 0) {
                                                document.write(`El número ${numeroDivisible} es divisible en 2, 3 y 5.`);
                                            } else {
                                                if (numeroDivisible % 2 == 0 && numeroDivisible % 3 == 0 && numeroDivisible % 5 != 0 && numeroDivisible % 7 == 0) {
                                                    document.write(`El número ${numeroDivisible} es divisible en 2, 3 y 7.`);
                                                } else {
                                                    if (numeroDivisible % 2 == 0 && numeroDivisible % 3 != 0 && numeroDivisible % 5 == 0 && numeroDivisible % 7 == 0) {
                                                        document.write(`El número ${numeroDivisible} es divisible en 2, 5 y 7.`);
                                                    } else {
                                                        if (numeroDivisible % 2 != 0 && numeroDivisible % 3 == 0 && numeroDivisible % 5 == 0 && numeroDivisible % 7 == 0) {
                                                            document.write(`El número ${numeroDivisible} es divisible en 3, 5 y 7.`);
                                                        } else {
                                                            if (numeroDivisible % 2 == 0 && numeroDivisible % 3 == 0 && numeroDivisible % 5 == 0 && numeroDivisible % 7 == 0) {
                                                                document.write(`El número ${numeroDivisible} es divisible en 2, 3, 5 y 7.`);
                                                            } else {
                                                                document.write(`El número ${numeroDivisible} NO es divisible por 2, 3, 5 o 7.`);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
*/


//Método con do while
/*
do
if (isNaN(numeroDivisible) || parseFloat(numeroDivisible)) {
    
    alert("No ha ingresado un número entero.");
    
    numeroDivisible = parseInt(prompt("Escriba un número entero para saber si es divisible por 2, 3, 5 o 7."));

} while (isNaN(numeroDivisible)) {
    if (numeroDivisible % 2 == 0 || numeroDivisible % 3 == 0 || numeroDivisible % 5 == 0 || numeroDivisible % 7 == 0) {
        document.write(`El número ${numeroDivisible} es divisible por `);
    } else {
        document.write(`El número ${numeroDivisible} NO es divisible por 2, 3, 5 o 7`);
        };
    if (numeroDivisible % 2 == 0) {
        document.write(`2`);
    };
    if (numeroDivisible % 2 == 0 && numeroDivisible % 3 == 0 && (numeroDivisible % 5 == 0 || numeroDivisible % 7 == 0)) {
        document.write(`, por `);
    };
    if (numeroDivisible % 2 == 0 && numeroDivisible % 3 == 0 && numeroDivisible % 5 != 0 && numeroDivisible % 7 != 0 ) {
        document.write (` y por `);
    };
    if (numeroDivisible % 3 == 0) {
        document.write(`3`);
    };
    if ((numeroDivisible % 2 == 0 || numeroDivisible % 3 == 0) && numeroDivisible % 5 == 0 && numeroDivisible % 7 == 0) {
        document.write(`, por `);
    };
    if ((numeroDivisible % 2 == 0 || numeroDivisible % 3 == 0 ) && numeroDivisible % 5 == 0 && numeroDivisible % 7 != 0 ) {
        document.write (` y por `);
    };
    if (numeroDivisible % 5 == 0) {
        document.write(`5`);
    };
    if ((numeroDivisible % 2 == 0 || numeroDivisible % 3 == 0 || numeroDivisible % 5 == 0 ) && numeroDivisible % 7 == 0) {
        document.write(` y por `);
    };
    if (numeroDivisible % 7 == 0) {
        document.write(`7`);
    };
    if (numeroDivisible % 2 == 0 || numeroDivisible % 3 == 0 || numeroDivisible % 5 == 0 || numeroDivisible % 7 == 0) {
        document.write(`.`);
    };
    }
*/