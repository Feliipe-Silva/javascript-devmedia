//

const verifica_data = (data, data_inicio, data_fim, tipo_comparacao) => {
    
    if (tipo_comparacao == "and") {
        
        return (data >= data_inicio && data <= data_fim)    // OUTRA MANEIRA DE ACESSA COLEÇÃO DE OBJETOS 
        
    } else if (tipo_comparacao == "or") {
        
        return (data >= data_inicio || data <= data_fim)    // OUTRA MANEIRA DE ACESSA COLEÇÃO DE OBJETOS 
    };
};

const retorna_signos = (array_signos, data) => {      // FUNC. ARROW
    
    let ano = data.getFullYear();
    
    for (let signo of array_signos) {     // LOOP (leitura dos objetos -> array_signos) PELO FOR, OF
    
        let data_inicio = new Date(ano + "-" + signo["DataInicio"] + " 00:00:00");
        let data_fim = new Date(ano + "-" + signo["DataFim"] + " 23:59:50");
        
        let tipo_comparacao = signo["DataInicio"] == "12-22" ? "or" : "and";
        
        if(verifica_data(data, data_inicio, data_fim, tipo_comparacao)) {
            return signo["Nome"];
        };
    };
};

export default retorna_signos;