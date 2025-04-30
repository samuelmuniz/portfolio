function copiarEmail() {
    const email = "samuelmunizsilva@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      const msg = document.getElementById('mensagemSucesso');
      msg.style.display = 'block';
      setTimeout(() => msg.style.display = 'none', 3000);
    });
    alert("E-mail copiado para a área de transferência!");  
}