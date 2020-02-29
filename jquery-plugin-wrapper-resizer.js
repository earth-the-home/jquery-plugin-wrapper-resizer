(function ( global ) {

//to resize parent/wrapper/container width so that all childs are covered
$.fn.wrapChilds = function(){
	console.log("called");
widthResizer($(this));//adjust parent width based on child widths
return this;
};

function widthResizer($this){
console.log("width resizer")
let prev = 0;
let updated = 1;
while(prev!=updated){
prev=$this[0].scrollWidth;
$this.width($this[0].scrollWidth+"px");
updated=$this[0].scrollWidth;
}
}


})(this);



