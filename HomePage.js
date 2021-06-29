
// HomePage reveal elements


function insertAndfetchReveal(){

    document.getElementById('insertAndfetchReveal').style.display = "block";
    document.getElementById('containerfetchRecord').style.display = 'none';
    document.getElementById('containerInsertRecord').style.display = 'none';
    
}

function insertReveal(){

    document.getElementById('insertAndfetchReveal').style.display = "none";
    document.getElementById('containerHome').style.display = "none";
    document.getElementById('containerfetchRecord').style.display = 'block';
    document.getElementById('containerInsertRecord').style.display = 'none';
    
}

function fetchReveal(){

    document.getElementById('insertAndfetchReveal').style.display = "none";
    document.getElementById('containerHome').style.display = "none";
    document.getElementById('containerfetchRecord').style.display = 'none';
    document.getElementById('containerInsertRecord').style.display = 'block';
}