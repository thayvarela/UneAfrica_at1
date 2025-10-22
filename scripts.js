document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('cadastroForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      if(form.checkValidity()){
        alert('Obrigada! Cadastro enviado (simulado).');
        form.reset();
      } else {
        form.reportValidity();
      }
    });
  }
});