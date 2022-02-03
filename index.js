

const randomArr = document.querySelector('#btn');
randomArr.addEventListener("click", function () {
    let array = [];
    min = Math.ceil(-10);
    max = Math.floor(10);
    for (i = 0; i < 10; i++) {
        array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    document.getElementById("random").innerHTML = array;

    let max2 = Math.max.apply(null, array);
    let min2 = Math.min.apply(null, array);
    document.getElementById("min").innerHTML = min2;
    document.getElementById("max").innerHTML = max2;

    let sum = 0;
    let multi = 1;
    for (i = 0; i < 10; i++) {
        sum += array[i];
        multi *= array[i];
    }
    let av = sum / array.length;
    document.getElementById("average").innerHTML = av;
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("multi").innerHTML = multi;
});

