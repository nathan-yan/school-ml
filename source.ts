{
    // WRITE CODE HERE
	const g = new dl.Graph();
	
	const input = g.placeholder('inp', []);
	const target = g.placeholder('target', []);
	
	const multiplier = g.variable("weight", Scalar.randNormal([1]));
	
	const result = g.multiply(input, multiplier);
	
	// compute square distance loss 
	const square_distance = g.reduceSum(g.square(g.subtract(result, target), 2));

	const learning_rate = 0.1;
	const batch_size = 3;
	
	const session = new dl.Session(g, math);
	const optimizer = new dl.SGDOptimizer(learning_rate);
	
	for (var i = 0; i < 100; i++){
		const val = Math.random();
		const input_ = [Scalar.new(val)];
        const target_ = [Scalar.new(val * 3)];
        
        const shuffledInputProviderBuilder = new dl.InCPUMemoryShuffledInputProviderBuilder([input_, target_]);
        const [x, y] = shuffledInputProviderBuilder.getInputProviders();

		const cost = session.train(square_distance,[{tensor:input, data: x},{ tensor:target , data: y}], 1, optimizer, dl.CostReduction.MEAN);
        }
    
        const val = Math.random();

        const input_ = [Scalar.new(val)];
        const target_ = [Scalar.new(val * 2)];

        const shuffledInputProviderBuilder = new dl.InCPUMemoryShuffledInputProviderBuilder([input_, target_]);
        const [x, y] = shuffledInputProviderBuilder.getInputProviders();
    
        const mul = session.evalAll([multiplier, result], [{tensor:input, data: x},{ tensor:target , data: y}]);
        print(mul[0], 'mul');
	
}//catch(e){
//    document.getElementById('output').innerHTML += "<span style = 'color: b71c1c'>" + e.toString() + '<br><br/></span>';
//}