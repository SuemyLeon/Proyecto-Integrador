function generarVenta(día) {
    if (Math.random() < .21) {return;}
    let saborines = (día.clima-.70)/.30*10*((Math.random()*.20)+.80);
    saborines = generarSaborines(Math.ceil(saborines));
    
    let carlotas = (((1-día.clima)/.25*5)+5)*((Math.random()*.30)+.70);
    carlotas = generarCarlotas(Math.ceil(carlotas));
    
    let gomitas = 5*((Math.random()*.50)+.50);
    gomitas = generarGomitas(Math.round(gomitas));

    let especial = {nombre: '', precio: 0, cantidad: 0};
    if (día.fecha.getDay() == 1) {
        let rand = Math.random();
        especial.nombre = rand > .5 ? 
            'Manzana con Chamoy' : 
            'Napolitano';
        especial.precio = rand > .5 ?
            25 :
            30;
        especial.cantidad = Math.round(
            Math.random()*3 + 1);
    }
    
    let productos = saborines.concat(carlotas, gomitas, especial);
    let total = 0;
    productos.forEach(p => total += p.cantidad * p.precio);
    let venta = {
        fecha: día.fecha.toLocaleDateString(),
        total: total,
        productos: productos.filter(p => p.cantidad > 0)
    }
    return venta;
}

function addDays(date, days) {
    let next = new Date(date);
    next.setDate(date.getDate() + days);
    return next;
}

function generarSaborines(cantidad) {
    let saborines = [
        {
            nombre: "Saborin Oreo",
            precio: 15,
            cantidad: 0
        },
        {
            nombre: "Saborin Mazapan",
            precio: 15,
            cantidad: 0
        },
        {
            nombre: "Saborin Mamut",
            precio: 15,
            cantidad: 0
        },
        {
            nombre: "Saborin Coco",
            precio: 15,
            cantidad: 0
        }
    ];
    for (let i=0; i<cantidad; i++) {
        let n = Math.round(Math.random()*3);
        saborines[n].cantidad++;
    }
    return saborines.filter(s => s.cantidad > 0);
}

for (let i=0; siguiente < fin; i++) {
    let fecha = siguiente;
    siguiente = addDays(siguiente, 1);
    let mes = fecha.getMonth();
    let día = fecha.getDate();
    let climas = [clima[mes], clima[mes+1] ?? .8];
    días.push({
        fecha: fecha,
        clima: día < 15 ? climas[0] : (climas[0] + climas[1])/2,
        inflación: (mes * .0037)
    });
}
