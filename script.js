//your JS code here. If required.
function flatten(value) {
	let res = []
	for(let i = 0 ;i<value.length;i++){
		if(Array.isArray(value[i])){
			let flat = flatten(arr[i])
			res.push(...flat)
		}else{
			res.push(value[i])
		}
	}

	return res
 
}

module.exports=flatten;
