var cont = 0;
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
		$('tbody').append(fila);
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