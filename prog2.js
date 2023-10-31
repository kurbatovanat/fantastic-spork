// Количество простых чисел в заданном интервале.

function simple( num)
{
     if ( num < 4) { return true}
     for ( let i = 3; i <= Math.sqrt( num); i += 2)
     {
          if ( num % i === 0)
          {
               return false;
          }
     }
     return true;
}

let m = Number( process.argv[2]), 
     n = Number( process.argv[3]);
if (( m <= 0) || ( n <= 0) || ( n < m))
{
     console.log( "допустимы положительные числа m<n");
     exit();
}

let k = 0, num;
if ( m <= 2) { k++} // 2 - простое
if ( m % 2 === 0) { m++}
for ( num = m; num <= n; num += 2)
{
    if ( simple( num)) { k++}
     console.log( num, simple( num), k);
}
console.log( `На интервале от ${m} до ${n} найдено ${k} простых чисел.`)

// Запускать: node prog2.js 12