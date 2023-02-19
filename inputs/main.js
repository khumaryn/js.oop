function color() {
    let b = document.getElementById("inp").value;
    document.body.style.backgroundColor = b;
}

function plus() {
    let original_number = document.getElementById("input2").value;
    let h1_number=document.getElementById('numberh1')
    let number = parseInt(original_number)+1;
    h1_number.innerText = number;
  }

  function minus() {
    let original_number = document.getElementById("input2").value;
    let h1_number=document.getElementById('numberh1')
    let number = parseInt(original_number)-1;
    h1_number.innerText = number;
  
  }

  function multiply(){
    let h1_hasil=document.getElementById("hasil")
    let a=document.getElementById('firstnum').value
    let b=document.getElementById('secondnum').value
    let hasils = 1;
    for (let i = a; i <= b; i++) {
      hasils *= i;
    }
    h1_hasil.innerText= hasils;
    
  }

