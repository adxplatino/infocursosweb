function vmodal(e){
var video = ["/",
"https://ok.ru/videoembed/2353575824107",
"https://ok.ru/videoembed/2353593649899",
"https://ok.ru/videoembed/2353613310699",
"https://ok.ru/videoembed/2353625303787",
"https://ok.ru/videoembed/2353646471915",
"https://ok.ru/videoembed/2353666984683",
"https://ok.ru/videoembed/2353673734891",
"https://ok.ru/videoembed/2353674455787",
"https://ok.ru/videoembed/2353675438827",
"https://ok.ru/videoembed/2353675963115"];

function ads(){
var externalScript   = document.createElement("script");
externalScript.type  = "text/javascript";
externalScript.setAttribute('async',"");
externalScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
document.getElementById('adsContenedor').appendChild(externalScript);

var comment = document.createComment(" infocursosweb_modal ");
document.getElementById('adsContenedor').appendChild(comment);

var ins   = document.createElement("ins");
ins.setAttribute('class','adsbygoogle');
ins.setAttribute('style','display:inline-block;width:300px;height:250px');
ins.setAttribute('data-ad-client','ca-pub-6799779205978679');
ins.setAttribute('data-ad-slot','8107674249');
document.getElementById('adsContenedor').appendChild(ins);

var inlineScript   = document.createElement("script");
inlineScript.type  = "text/javascript";
inlineScript.text  = '(adsbygoogle = window.adsbygoogle || []).push({});'  
document.getElementById('adsContenedor').appendChild(inlineScript); 
}
  
var titulomodal = document.getElementById("titulomodal");
  titulomodal.innerHTML = "Curso Básico De Ingles</br>Lección " + [e];

var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div class='iframe-container'><iframe id='modalVideo' src="+video[e]+" width='100%' height='480' frameborder='0' allowfullscreen></iframe></div></br><p style='text-align: center'>Aprenda inglés online fácil hoy mismo con este curso de inglés gratuito.</p><center><div id='adsContenedor'></div></center></br>";
ads();
}
function cerrarmodal(){
  $("#modalVideo").attr('src', '');
}
