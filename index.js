function increase(arr) {
    console.log(arr);
    for ( i=1; arr[i-1]<arr[i]; i++)

        if (arr[i]>=arr[i+1]) {
            return false;
        }
        else
        return true;
    }

function bai1() {

    const btn =document.querySelector('.bai1 button');
    const input = document.querySelector('.bai1 input');
    let value
    let result =document.querySelector('.bai1 .result');
    btn.addEventListener('click',function() {
        value = increase(input.value);
        result.innerText = value;
    })
        
    }
bai1();
        

function longest(arr) {
    var words = arr.split(' ');
    var maxLength = '';
    for (var i = 0; i < words.length; i++) 
    {
        if (words[i].length > maxLength.length)
        {
        maxLength = words[i];
        }
    }
  return maxLength;
}

function bai4() {

    const btn =document.querySelector('.bai4 button');
    const input = document.querySelector('.bai4 input');
    let value
    let result =document.querySelector('.bai4 .result');
    btn.addEventListener('click',function() {
        value = longest(input.value);
        result.innerText = value;
    })
        
    }
bai4();

function secondLong(arr) {
    var words = arr.split(' ');
    var maxLength = '';
    var secondLength = '';
    for (var i = 0; i < words.length; i++) 
    {
        if (words[i].length > maxLength.length)
        {
        secondLength = maxLength;
        maxLength = words[i];
        }
    }
  return secondLength;
}

function bai5() {

    const btn =document.querySelector('.bai5 button');
    const input = document.querySelector('.bai5 input');
    let value
    let result =document.querySelector('.bai5 .result');
    btn.addEventListener('click',function() {
        value = secondLong(input.value);
        result.innerText = value;
    })
        
    }
bai5();

function checkPositive(number) {
    return number >=0;
}

function positive(arr) {
    var result = arr.filter(checkPositive);
}



