function vmodal(e){
var video = ["/",
"https://drive.google.com/file/d/1a6ASsWBSl5PFlrESuGMyMf11dY_3MofJ/preview",
"https://drive.google.com/file/d/1We840Vgoz6zd2Fl1A3c0h-1GcNn7KlFt/preview",
               
"https://drive.google.com/file/d/1MAF1Uw60xm8sTJf7DFGvzvg3HFJKaCGf/preview",
"https://drive.google.com/file/d/189s96G7zTTO9Trdj6-WytZcGAPl7ZhK1/preview",
               
"https://drive.google.com/file/d/1E0AKERwonVnvcA2XAlNRjDGQcT6RGDMu/preview",
"https://drive.google.com/file/d/1YaUqjkp2ZkvwoSwpC2id9BrK4atk-OP7/preview",
"https://drive.google.com/file/d/1skYvT6WzrMzJIAgXJxBI8DNPE29oK9L7/preview",
"https://drive.google.com/file/d/1jFvkImFIQvA00TWPoMmuNxrA6yu0B3FY/preview",
"https://drive.google.com/file/d/1snK6Psue08NjSVWlRxX3dq8EgFbAgO32/preview",
               
"https://drive.google.com/file/d/1HIgSbbyOkABBsmJaeTPtJC7K5HRh_wTU/preview",
"https://drive.google.com/file/d/1POrJtTXzWH_peRgb_5WBJie5zyt2qcnV/preview",
               
"https://drive.google.com/file/d/1zUSl-VMx0k00z-wZd8Isw5XgUKgAndM8/preview",
"https://drive.google.com/file/d/1WWPXTtGZg5r-fLOhQVILQMpHuyfcRmUr/preview"];
  
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
  titulomodal.innerHTML = "CURSO ELECTRONICA</br>LECCIÓN " + [e];

var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div class='iframe-container'><iframe id='modalVideo' src="+video[e]+" width='100%' height='480' frameborder='0' allowfullscreen></iframe></div></br><center><div id='adsContenedor'></div></center></br>";
ads();
}
function cerrarmodal(){
  $("#modalVideo").attr('src', '');
}
