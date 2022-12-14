var gettablinks = document.getElementsByClassName('tablinks'); //HTML Coll:
var gettabpanes = document.getElementsByClassName('tab-pane'); //HTML Coll:
//console.log(gettabpanes);
var getbtnclose = document.querySelectorAll('.btn-close'); //NodeList

var tabpanes = Array.from(gettabpanes);

function gettab(evn,linkid){

	//console.log(evn.target);
	//console.log(linkid);

	tabpanes.forEach(function(tabpanes){
		tabpanes.style.display = "none";
	});

	for(var x=0; x<gettablinks.length; x++){
		gettablinks[x].className = gettablinks[x].className.replace(' active','');

		getbtnclose[x].addEventListener('click',function(){
			this.parentElement.style.display = 'none';
		});
	}

	document.getElementById(linkid).style.display = "block";

	// evn.target.className += 'active';
	// evn.target.className = evn.target.className.replacr('tablinks','tablinks active');
	// evn.target.classList.add('active');

	// console.log(evn);
	// console.log(evn.target);
	// console.log(evn.currentTarget);
	evn.currentTarget.className += ' active';
}

document.getElementById('autoclick').click();