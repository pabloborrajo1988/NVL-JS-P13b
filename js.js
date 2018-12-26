frasedevuelta="";
function palindromo(frase){
cantidadblancos=frase.split(" ").length-1;
for(var i=0;i<cantidadblancos;i++)
    frase=frase.replace(" ","");
  frase=frase.toLowerCase();
  longitud=frase.length;
  cadenareversa="";

  for(var i=longitud-1;i>-1;i--)
      cadenareversa=cadenareversa+frase[i];

   if(cadenareversa==frase)
     frasedevuelta="tu frase es palindromo";

   else
     frasedevuelta="tu frase no es palindromo";
}
palindromo("amar da drama");
console.log(frasedevuelta);
palindromo("tigre");
console.log(frasedevuelta);
