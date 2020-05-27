función  p ( n )
{  let  t1 = 0
  dejar  t2 = 1
  para ( sea  i = 1 ; i < n ; i ++ ) {
	si ( i == 1 )
	    consola . log ( t1 ) ;
	
    	si ( i == 2 )
	    consola . log ( t2 ) ;
	
  siguiente = t1 + t2 ;
  t1 = t2
      t2 = siguiente
      consola . log ( siguiente )
      
  }
}
consola . log ( p ( 10 ) )
