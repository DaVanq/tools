window.onload = function(){
	var typeNames = Object.getOwnPropertyNames(window.equipment)
	for (var i in typeNames) {
		let item = window.equipment[typeNames[i]]
		let option = document.createElement("option")
		option.textContent = item.description
		document.getElementById("type-selector").appendChild(option)
	}
	for (var i in window.equipment.sword.name) {
		let option = document.createElement("option")
		option.textContent = window.equipment.sword.name[i]
		document.getElementById("item-selector").appendChild(option)
	}
	document.getElementById("type-selector").addEventListener("change", function(e){
		let stuff = window.equipment[e.target.value.toLowerCase()]
		while (document.getElementById("item-selector").children.length !== 0) {
			document.getElementById("item-selector").children[0].remove()
		}
		for (var i in stuff.name) {
			if (typeof stuff.lvl[i] === "undefined") return
			let option = document.createElement("option")
			option.textContent = stuff.name[i]
			document.getElementById("item-selector").appendChild(option);
		}
		updateList();
	});
	document.getElementById("item-selector").addEventListener("change", updateList);
};

var updateList = function(e) {
	if (typeof e === "undefined") e ={target: document.getElementById("item-selector")};
	try {
		let equip = window.equipment[document.getElementById("type-selector").value.toLowerCase()];
		var level = equip.lvl[equip.name.indexOf(e.target.value)];
		let statNames = Object.getOwnPropertyNames(equip.stats);
		let chance = 1;
		for (var i in statNames) {
			let stats = equip.stats[statNames[i]];
			if (typeof stats.base === "undefined") chance*=Math.round((stats.float)?((level*(stats.multi*stats.high))-(level*(stats.multi*stats.low))).toFixed(1)/0.1:Math.ceil((level*(stats.multi*stats.high))-(level*(stats.multi*stats.low))))
			else chance*=Math.round((stats.float)?((level*(stats.multi*stats.high)+stats.base)-(level*(stats.multi*stats.low)+stats.base)).toFixed(1)/0.1:Math.ceil((level*(stats.multi*stats.high)+stats.base)-(level*(stats.multi*stats.low)+stats.base)))
		}
		if (chance === 0) chance = 1;
		// document.getElementById("result-text").textContent = "There is a 1 in "+chance+" chance that the next "+e.target.value+" you pick up will have perfect stats."
		document.getElementById("result-text").style.display = "none";
		document.getElementById("result-name").textContent = e.target.value;
		document.getElementById("class").textContent = (typeof equip.class === "undefined")? "Equippable by all classes": "Requires: "+equip.class.join(" or ")
		document.getElementById("minlevel").textContent = "Requires level: "+level;
		
		document.getElementById("item-image").remove();
		var image = document.createElement("img");
		image.src = "https://hordes.io/data/items/"+((typeof equip.url === "undefined")?equip.description.toLowerCase():equip.url)+equip.name.indexOf(e.target.value)+".png"
		image.id = "item-image";
		document.getElementById("imageholder").appendChild(image);
		document.getElementById("imageholder").style.display = "";
		
		let thead = document.createElement("thead");
		let tr = document.createElement("tr");
		let tbody = document.createElement("tbody");
		let trbody = document.createElement("tr");
		thead.appendChild(tr);
		tbody.appendChild(trbody);
		
		for (var i in statNames) {
			let stats = equip.stats[statNames[i]];
			
			let th = document.createElement("th");
			th.textContent = statNames[i];
			tr.appendChild(th);
			
			let low = Math.round((stats.float)?((level*(stats.multi*stats.low))).toFixed(1)/0.1:Math.ceil((level*(stats.multi*stats.low))))
			let high = Math.round((stats.float)?((level*(stats.multi*stats.high))).toFixed(1)/0.1:Math.ceil((level*(stats.multi*stats.high))))
			let td = document.createElement("td");
			td.textContent = low+"-"+high
			trbody.appendChild(td)
		}

		var tablestuff = document.getElementById("stats-table");
		while (tablestuff.firstChild) {
		    tablestuff.removeChild(tablestuff.firstChild);
		}
		
		document.getElementById("stats-table").appendChild(thead)
		document.getElementById("stats-table").appendChild(tbody)
		document.getElementById("tablecontainer").style.display = ""
	}catch(e){console.log(e)}
}