// Initialize your app
var myApp = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'My App',
	dialog: {
		title: 'My App',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/inicio/',
    	url: 'index.html',
    	name: '/inicio/',
  		},
		
		{
		path: '/destinos/',
    	url: 'destinos.html',
    	name: 'destinos',
		},
		
		{
		path: '/santa-tecla/',
    	url: 'santa-tecla.html',
    	name: 'santa-tecla',
		},
		
		{
		path: '/comayagua/',
    	url: 'comayagua.html',
    	name: 'comayagua',
		},
		
		{
		path: '/san-jose/',
    	url: 'san-jose.html',
    	name: 'san-jose',
		},
		
		{
		path: '/san-salvador/',
    	url: 'san-salvador.html',
    	name: 'san-salvador',
		},
		
		{
		path: '/roatan/',
    	url: 'roatan.html',
    	name: 'roatan',
  		},
		
		{
		path: '/lima/',
    	url: 'lima.html',
    	name: 'lima',
  		},
		
		{
		path: '/buenos-aires/',
    	url: 'buenos-aires.html',
    	name: 'buenos-aires',
  		},
		
		
		{
		path: '/promociones/',
    	url: 'promociones.html',
    	name: 'promociones',
  		},
		
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		
		
		
		
		
	]
});

// Export selectors engine
var $$ = Dom7;

var notificationOrden = myApp.notification.create({

icon: '<span class="material-icons">shopping_backet</span>',
title: 'Solicitud de Compras y Gestión de Citas',
titleRightText: '',
subtitle:'',
text:'Su solicitud ha sido aceptada',
closeTimeout: 5000,	
});

$$(document).on('click','#btnComprar', function (e) {
	myApp.dialog.alert('Tu compra fue realizada correctamente !');
	notificationOrden.open();
});



$$('#btnConfirmar').on('click', function () {
  myApp.dialog.confirm('¿Seguro desea procesar su compra?', function () {
    myApp.dialog.alert('¡ Tu compra fue realizada correctamente !');
  });
});


$$('#btnLogin').on('click', function () {
	var Usuario = $$('#username').val();
	var Password = $$('#password').val();
	
  	if(Usuario == "jframos" && Password == "123"){
		myApp.dialog.alert('¡ Welcome to /Bienvenido a ITravel App !');
		myApp.loginScreen.close(".modal-login");
		
	}else{
		myApp.dialog.alert('Lo sentimos, sus datos son incorrectos / Wrong Data');
	}
	
	
});





