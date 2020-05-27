función  esprimo ( num )
{
  var  cuantos = 0 ;
    
    para ( var  i = 2 ; i <= num ; i ++ )
    {
      si ( num % i == 0 )
        {
          
          if (  ++ cuantos > 1 )
            devuelve  falso ;
        }
    }
   volver  verdadero ;
}
función  nprimo ( total )
{
  var  j  =  1 ;
  para ( var  i = 1 ; i <= ( total * 10 ) ; i ++ )
  {
   if (  esprimo ( i )  &&  j <= total  )
   {
      consola . log ( i ) ;
      j ++ ;
   }
  }
}
nprimo ( 6 ) ;
