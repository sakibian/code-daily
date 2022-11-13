const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

console.log(materials.map(material => material.length));

// Traditional anonymous function

(function(a) {
    return a + 100;
});

//1. Remove the word function
(a) => {
    return a + 100;
}

//2. Remove the body braces and word return - the return is implied (suggested not direct order)
(a) => a + 100;

//3. Remove the parameter parentheses 

a => a + 100;



