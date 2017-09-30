

// Write a function called deepClone which takes an object and creates a copy of it. e.g. {name: "Paddy", address: {town: "Lerum", country: "Sweden"}} -> {name: "Paddy", address: {town: "Lerum", country: "Sweden"}}

let clone;


function deepClone(original){
	 clone = JSON.parse(JSON.stringify(original)); 
	//console.log("this is the original  ", original);
	//console.log("this is the clone ", clone);
	return(clone);
}

const cat = {name: "Checkers", color: "black and white", cuteness: "very high", playfullness: 6, laziness:9};


deepClone(cat);

//Test that clone and original are equal 
function equalTest(x, y) {
  const ok = Object.keys, tx = typeof x, ty = typeof y;
  return x && y && tx === 'object' && tx === ty ? (
    ok(x).length === ok(y).length &&
      ok(x).every(key => equalTest(x[key], y[key]))
  ) : (x === y);
}

equalTest(cat, clone);
//returns true.


