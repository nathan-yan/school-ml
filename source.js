try{
    // WRITE CODE HERE

    var dl = deeplearn;

    var math = new dl.NDArrayMathGPU();
    var a = dl.Array4D.new([2, 2, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    var b = dl.Scalar.new(2);

    var diff = math.sub(a, b);

    print(diff, "diff");
    print(a, 'a');
    print(a, 'a');

    for (i = 0; i < 10; i++){
        print("11/" + i + " = " + 11/i);
    }

    print("hello");
    print("text");
    print('test')
}catch(e){
    document.getElementById('output').innerHTML += "<span style = 'color: b71c1c'>" + e.toString() + '<br><br/></span>';
}s
