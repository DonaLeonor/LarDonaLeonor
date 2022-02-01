function imprimir() {
  window.print();


  };
  function clean() {
    let n = document.getElementById("name");
    let e = document.getElementById("remedio");
    let m = document.getElementById("recebido");
    let a = document.getElementById("pedido");
    let o = document.getElementById("note");
    let d = document.getElementById("data");
  
    n.value = "";
    e.value = "";
    m.value = "";
    a.value = "";
    o.value = "";
    d.value = "";
  
    clearForm();
  }
  
