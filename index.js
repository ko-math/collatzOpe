const button = document.querySelector('#but');
but.addEventListener('click',function(){
  const N = document.querySelector('#inp').value;
  const col = document.querySelector('#col');
  for(let n = 1;n <= N;n++){
    const arrays = Collatz(n);
    const p = document.createElement('p'); 
    let arr = '';
    for(let i = 0;i < arrays[0].length;i++){
      const add = arrays[0][i];
      if(arrays[1].includes(add)){
        arr += '<b style="color: red;">' + add + '</b>';
      } else {
        arr += add;
      }
      arr += ',';
    }
    p.innerHTML = arr;
    col.append(p);
  }
});

function Collatz(N){
    const Seq = [N];
    const Mer = [];
    let n = N;
    while(1){
        if(n === 1) break;
        if(n % 2 === 0){
            n /= 2;
        } else {
            n = (3 * n + 1) / 2;
        }
        Seq.push(n);
        if(Math.ceil(Math.log2(n + 1)) === Math.log2(n + 1)) Mer.push(n);
    }
    return [Seq,Mer];
}
