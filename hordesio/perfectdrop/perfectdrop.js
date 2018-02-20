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
			document.getElementById("item-selector").appendChild(option)
		}
	})
	document.getElementById("item-selector").addEventListener("change", function(e){
		try {
		let equip = window.equipment[document.getElementById("type-selector").value.toLowerCase()]
		var level = equip.lvl[equip.name.indexOf(e.target.value)]
		let statNames = Object.getOwnPropertyNames(equip.stats)
		let chance = 1
		for (var i in statNames) {
			let stats = equip.stats[statNames[i]]
			if (typeof stats.base === "undefined") chance*=Math.round((stats.float)?((level*(stats.multi*stats.high))-(level*(stats.multi*stats.low))).toFixed(1)/0.1:Math.ceil((level*(stats.multi*stats.high))-(level*(stats.multi*stats.low))))
			else chance*=Math.round((stats.float)?((level*(stats.multi*stats.high)+stats.base)-(level*(stats.multi*stats.low)+stats.base)).toFixed(1)/0.1:Math.ceil((level*(stats.multi*stats.high)+stats.base)-(level*(stats.multi*stats.low)+stats.base)))
		}
		if (chance === 0) chance = 1
		document.getElementById("result-text").textContent = "There is a 1 in "+chance+" chance that the next "+e.target.value+" you pick up will have perfect stats."
		}catch(e){alert(e)}
	})
}