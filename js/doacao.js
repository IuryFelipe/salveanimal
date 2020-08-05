function a(){
    console.log("chamou função")
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var sobrevoce = document.getElementById('sobrevoce').value;
    console.log(nome)
    if(nome==null || nome==undefined || nome=="" || email==null || email==undefined || email=="" || sobrevoce==null || sobrevoce==undefined || sobrevoce==""){
        alert("Preencha todos os campos!");
    }else{
        alert("Solicitação enviada com sucesso, "+nome+" :)");
        
    }
   
}

function doar(){    
    alert("Obrigado! Sua doação foi realizada com sucesso!"+valor);
}