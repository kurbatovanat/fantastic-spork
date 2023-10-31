//use strict; не работает

function kramer2( a, b)
{
     //use strict; не работает

     let det = a[0][0] * a[1][1] - a[0][1] * a[1][0];
     let x;
     let d1, d2;
     d1 = b[0] * a[1][1] - b[1] * a[0][1];
     d2 = a[0][0] * b[1] - b[0] * a[1][0];
     if ( det != 0 )
     {
          x = Array( 2);
          x[0] = d1 / det;
          x[1] = d2 / det;
     }
     else
     {
          if ( ( d1 == 0) && ( d2 == 0))
          {
               x = Array( 2);
          }
     }
     return x;
}

// main

const af = [ [ 2, 3  ], [ 4, 5  ] ],
      bf = [ 18, -8 ];
const xf = kramer2( af, bf);
if ( xf != undefined )
{
     if ( xf[0] != undefined )
     {
          console.log( `x1= ${xf[0]}, x2 = ${xf[1] }`);
     }
     else
     {
           console.log("Система имеет бесконечное множество решений");
     }
}
else
{
     console.log( "Система уравнений не имеет решений.");
}
// решение системы линейных уравнений методом Крамера 
// описано на страние по адресу:
 //  https://f