    import input from 'readline-sync';

let valor_divida = input.question("Valor total da sua divida: ");


/* function atraso(info) {
    if(dias_atraso == 0){
        var info = "**Parabéns, fatura sem atrasos!**" 
    } else {
        info = "******* ALERTA(Contém atraso!!) *******"
        
        let juros = 0;
        let juros_impreso = "";
        if(dias_atraso > 15){
            juros = Number(0.10);
            console.log("Taxa de juros: 10%");
        } else {
            juros = Number(0.05);
            console.log("Taxa de juros: 05%");
        }
        
        let resul_juros = (juros * Number(valor_divida)) + Number(valor_divida);
        
        console.log("\n"+"Valor da sua dívida: R$"+valor_divida);
        console.log("Dias de atrasos: "+dias_atraso+ " dias.");
        // console.log("Taxa de juros: "+juros);
        console.log("Valor com juros: R$"+resul_juros);
    }
    return info;
}
console.log(atraso()); */

if(valor_divida <= 0) {
    console.log('O valor da fatura deve ser maior que 0!');
    //
} else {
    let dias_atraso = input.question("Quantos dias de atrasos: ");
    //
    if(dias_atraso <= 0){
        console.log("**Parabéns, fatura sem atrasos!**");
        //
    } else {
        let juros = 0;
        let juros_impreso = "";
        
        if(dias_atraso > 15){
            juros = Number(0.10);
            juros_impreso = "10%";
            //
        } else {
            juros = Number(0.05);
            juros_impreso = "05%";
        }
        
        let resul_juros = (juros * Number(valor_divida)) + Number(valor_divida);
        
        console.log("\n"+"Valor da sua dívida: R$"+valor_divida);
        console.log("Dias de atrasos: "+dias_atraso+ " dias.");
        console.log("Taxa de juros: "+juros_impreso);
        console.log("Valor com juros: R$"+resul_juros);
    }
}