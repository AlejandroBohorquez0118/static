var idCarga; // Guarda el Id del elemento cuando se da click en el botón cargar

function editar(){

    var elemento={
        "id": idCarga,
        "name":$("#name").val(),
        "description":$("#description").val()
    };
    
    var dataToSend=JSON.stringify(elemento);
    $.ajax({    

        dataType : 'JSON',
       
        data: dataToSend,
        
<<<<<<< HEAD
        url: 'http://129.151.116.109:7070/api/Specialty/update',
=======
        url: 'http://129.151.116.109:1010/api/Specialty/update',
>>>>>>> ad31b26fac3adecf0fc3cb23c4b0258ea7407079
        
        type: 'PUT',
        contentType:'application/json',
        
        
        success : function(json, textStatus, xhr) {
         
                console.log(json);
        },
        
        
        complete : function(xhr, status) {
            //alert('Petición realizada '+xhr.status);
            limpiarFormulario();
            consultar();
            idCarga=null;
        }
    });
}

function eliminar(idElemento){
    var elemento={
        "id":idElemento
      };
      console.log("mirar id de elemento"+ idElemento);
      
      var dataToSend=JSON.stringify(elemento);
    $.ajax({    
        
        dataType : 'JSON',
       
        data : dataToSend,
        
       
<<<<<<< HEAD
        url : "http://129.151.116.109:7070/api/Specialty/"+idElemento,
=======
        url : "http://129.151.116.109:1010/api/Specialty/"+idElemento,
>>>>>>> ad31b26fac3adecf0fc3cb23c4b0258ea7407079
        type: 'DELETE',
        contentType:'application/json',
        success : function(json, textStatus, xhr) {
          
                console.log(idElemento);
                
        },
        
        complete : function(xhr, status) {
           //lert('Petición realizada '+xhr.status);
            //limpiarFormulario();
            consultar();
        }
    });
}

function cargar(idItem){
    $.ajax({    
<<<<<<< HEAD
        url : "http://129.151.116.109:7070/api/Specialty/"+idItem,
=======
        url : "http://129.151.116.109:1010/api/Specialty/"+idItem,
>>>>>>> ad31b26fac3adecf0fc3cb23c4b0258ea7407079
        type : 'GET',
        dataType : 'json',        
        
        success : function(json) {               
                console.log(json);

  
          $("#name").val(json.name);
          $("#description").val(json.description);
          idCarga = idItem;
          console.log("idCarga es " +idCarga);

        }
    });
}

//////------------------

function consultar(){
    $.ajax({
<<<<<<< HEAD
        url:"http://129.151.116.109:7070/api/Specialty/all",
=======
        url:"http://129.151.116.109:1010/api/Specialty/all",
>>>>>>> ad31b26fac3adecf0fc3cb23c4b0258ea7407079
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}
//consultar();

function pintarRespuesta(respuesta){

    let myTable=`<div class="container" style="width: 100%;"><div class="row" >`;
    for(i=0; i<respuesta.length; i++) {
        myTable+=`
            <div class="card m-2" style="width: 20rem;" id="Card">
                <div class="card-body">
                    <h5 class="card-title">${respuesta[i].name}</h5>
                    <p>${respuesta[i].description}</p>
                    <div align="centre">
                        <button class="btn btn-danger" onclick="eliminar(${respuesta[i].id})">Borrar</button>
                        <button class="btn btn-info" onclick="cargar(${respuesta[i].id})">Cargar</button>
                    </div>
                </div>
            </div>`;   
         
    }
    myTable+=`</div></div>`;
    $("#resultados").html(myTable);
}

function guardar(){
    let var2 = {
        name:$("#name").val(),
        description:$("#description").val()
    };
    $.ajax({
        type:'POST',
        contentType:"application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
<<<<<<< HEAD
        url:"http://129.151.116.109:7070/api/Specialty/save",
=======
        url:"http://129.151.116.109:1010/api/Specialty/save",
>>>>>>> ad31b26fac3adecf0fc3cb23c4b0258ea7407079
        success:function(respose) {
            console.log("Se guardó correctamente");
            //alert("Se guardó correctametne..");
            //window.location.reload();
            limpiarFormulario();
            consultar();
        },
        error:function(jqXHR, textStatus, errorTrown){
            //window.location.reload();
            console.log("No se guardó");
            alert("No se guardó correctamente");
        }
    });
}

function limpiarFormulario(){
    $("#name").val("");
    $("#description").val("");
    
}

$(document).ready(function(){
    consultar();
});


<<<<<<< HEAD


=======
>>>>>>> ad31b26fac3adecf0fc3cb23c4b0258ea7407079
