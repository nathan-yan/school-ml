try{
    // WRITE CODE HERE
	const g = new dl.Graph();
	
	const input = g.placeholder('inp', [1]);
	const target = g.placeholder('target', [1]);
	
	const multiplier = g.variable("weight", Scalar.randNormal([1]));
	
	var result = g.multiply(input, multiplier);
	
	// compute square distance loss 
	var square_distance = g.square(g.subtract(result, target), 2);

	const learning_rate = 0.001;
	const batch_size = 3;
	
	const session = new dl.Session(g, math);
	const optimizer = new SGDOptimizer(learning_rate);
	
	for (i = 0; i < 100; i++){
		var val = Math.rand();
		var input = Matrix.new([1, 1], [val]);
		var target = Matrix.new([1, 1], [val * 2]);
		
		const cost = session.train(square_distance, {'inp' : input, 'target' : target}, 1, optimizer, CostReduction.MEAN);
		
		print(cost);
	}
	
}catch(e){
    document.getElementById('output').innerHTML += "<span style = 'color: b71c1c'>" + e.toString() + '<br><br/></span>';
}