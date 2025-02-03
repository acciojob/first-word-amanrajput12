function firstWord(s) {
   // your code here
 //    const value = s.split(" ")[0];
	// if(value=="" || value==''){
	// 	return value+"if"
	// }
	// else{
	// return value+s[s.length-1]+"else";
	// }
	// return s.charCodeAt(0)
	let value="";
	for(let i=0;i<s.length-1;i++){
         if(s.charCodeAt(i)==32){
          break;
		 }
		else{
            value=value+s[i];
		}
	}
	return value+s[s.length-1];
}
// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));


