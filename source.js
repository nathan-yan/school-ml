try{
    // WRITE CODE HERE
	const g = new dl.Graph();
	
	const input = g.placeholder('inp', [1]);
	const target = g.placeholder('target', [1]);
	
	const multiplier = g.variable("weight", Scalar.randNormal([1]));
	
	var result = g.multiply(input, multiplier);
	
	// compute square distance loss 
	var square_distance = g.reduceSum(g.square(g.subtract(result, target), 2));

	const learning_rate = 0.001;
	const batch_size = 3;
	
	const session = new dl.Session(g, math);
	const optimizer = new dl.SGDOptimizer(learning_rate);
	
	for (i = 0; i < 100; i++){
		var val = Math.random();
		var input_ = Matrix.new([1, 1], [val]);
		var target_ = Matrix.new([1, 1], [val * 2]);
		
		const feedEntries = dl.FeedEntry[]([

		]

		const cost = session.train(square_distance,[{input : input_, target : target_}], 1, optimizer, dl.CostReduction.MEAN);
		
		print(cost);
	}
	
}catch(e){
    document.getElementById('output').innerHTML += "<span style = 'color: b71c1c'>" + e.toString() + '<br><br/></span>';
}