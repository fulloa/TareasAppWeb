var cont = 0;
var miJSON={
	"A1":{"user":"usuario 1", "name":"name 1", "lastName":"apellido 1"},
	"A2":{"user":"usuario 2", "name":"name 2", "lastName":"apellido 2"},
	"A3":{"user":"usuario 3", "name":"name 3", "lastName":"apellido 3"},
}

$(document).ready(function(){
	$.each(miJSON, function(i,item){
		var fila='<tr id="'+cont+'" onclick="mostrar_seleccionados(this.id)"><td>'+miJSON[i].user+'</td><td>'+miJSON[i].name+'</td><td>'+miJSON[i].lastName+'</td>'+'</tr>';
		$('#datos_tabla').append(fila);
	})
})
//Agregar una fila con los datos de los inputs 
$('#btn_agregar').click(function() {
	if ($('#user').val() || $('#nombre').val() || $('#apellido').val()) {
		cont++;
		var user= $('#user').val();
		var nombre= $('#nombre').val();
		var apellido= $('#apellido').val();
		//creo una nueva fila
		var fila='<tr id="'+cont+'" onclick="mostrar_seleccionados(this.id)"><td>'+user+'</td><td>'+nombre+'</td><td>'+apellido+'</td>'+'</tr>';
		//añado fila a la tabla
		$('#datos_tabla').append(fila);
		$('#user').val("");
		$('#nombre').val("");
		$('#apellido').val("");
	} else {
		alert("Debe llenar todos los campos");
	}
});

//Al hacer click muesra los datos de la fila seleccionada
function mostrar_seleccionados (id_fila) {
	var dato= $('#'+id_fila+' td');
	dato.each(function(index, elemento) {
		console.log(elemento.textContent);	
	});
}