<?php
date_default_timezone_set('America/Mexico_City');

require_once('conexion.php');
require_once('funciones.php');
require_once('barcode.php');


//mysql_set_charset('utf8');
//Inicio Gatorade
function validafechas(&$cad,$promo)
{
  $reg;
  $contador=0;
  $link=connect();
  $consulta = "select 'fecha_inicio',fecha_inicio,NOW(),TIME_TO_SEC(TIMEDIFF(NOW(), fecha_inicio)) valor from gtrd_promociones where id=".$promo." union select 'fecha_fin',fecha_fin,NOW(),TIME_TO_SEC(TIMEDIFF(NOW(), fecha_fin)) valor from gtrd_promociones where id=".$promo;
  if ($resultado = mysqli_query($link, $consulta)) {
   while ($fila = mysqli_fetch_row($resultado)) {
     $reg[$contador]=$fila[3];
     $cad[$contador]=$fila[1];
     $contador++;
    }
   /* liberar el conjunto de resultados */
    mysqli_free_result($resultado);
  }
  Close($link);
  return $reg;
}
function validaregion($idprom,$ip,$link)
{
  $count=0;
  $consulta = "SELECT * from gtrd_promociones_estados where id_promo=".$idprom.";";
  if ($resultado = mysqli_query($link, $consulta)) {
    while ($fila = mysqli_fetch_row($resultado)) {
        $count++;
     }
     if($count<1)
     {
       //getcupon($link,$ip,$idClient,$idprom);
       //Es valido
       echo "SI";
     } else {
        promvalidestado($ip,$idprom,$link);
     }
  }
  else {
    echo 'ERROR';
  }
}
function validalista($idprom,$ip)
{
  $count=0;
  $link=connect();
  $consulta = "SELECT * from gtrd_listanegra where ip='".$ip."';";
  if ($resultado = mysqli_query($link, $consulta)) {
    while ($fila = mysqli_fetch_row($resultado)) {
        $count++;
        echo '<div id="loading" class="standarWindow"></div>
        <div id="scratch" class="standarWindow">
          <div id="left_top"></div>
          <div id="right_bottom"></div>
          <div id="center" class="backCointain"></div>
        </div>
        <nav class="flexDisplay">
          <a href="#"><img src="ui/img/logo-pepsi-80.svg"></a>
          <img src="ui/img/oxxo_logotipo.png">
        </nav>
        <div id="mensaje" class="flexDisplay" style="height:70%">
          <img src="ui/img/logo-pepsi-80.svg" width="140">
          <p style="width:80%">¡La promocion no es valida! <br><br>
            <span style="font-family:"Sofia Regular", sans serif">para tu ubicacion.</span>
          </p>
          <div id="social">
            <a href="#" target="_blank"><img src="ui/img/social/fb.svg" width="40"></a>
            <a href="#" target="_blank"><img src="ui/img/social/ig.svg" width="40"></a>
            <a href="#" target="_blank"><img src="ui/img/social/tw.svg" width="40"></a>
            <a href="#" target="_blank"><img src="ui/img/social/yt.svg" width="40"></a>
          </div>
        </div>
        <footer class="flexDisplay">
          <h5>Esta También Es Tu Pepsi <img src="ui/img/logo-pepsi-80.svg" width="13"></h5>
          <h6 id="haz">Haz Ejercicio</h6>
          <h6><span id="hazmob">Haz Ejercicio.</span> <a href="#">Consulta bases términos y condiciones.</a> <span id="marca">® Marca Registrada</span></h6>
        </footer>';
     }
     if($count<1)
     {
       //getcupon($link,$ip,$idClient,$idprom);
       //Es valido
       validaregion($idprom,$ip,$link);
     }
  }
  else {
    echo 'ERROR';
  }
  Close($link);
}
function promvalidestado($ip,$idprom,$link)
{
  $salida          = 0;
  $country_code    = '';
  $ip_address      = $ip;
  $country_name         = 'Local';
  $country_city    = '';
  $country_region  = '';
  $estado='';
  $codpais='';
  $count=0;
  //$salida = get_country_local($country_code,$ip_address,$lang,$country_name,$id_group); // busqueda en BD local
  //if ($salida==0) {
  $salida = get_country_api($country_code,$ip_address,$country_region,$codpais); // busqueda en api de google
  $estado=$country_region;//equivalencia_estados_api($country_code,$region);
  //$query2 = "SELECT * from gtrd_promociones_estados where id_promo=".$promo." and estado='".$estado."' and  pais='".$country_code."';";
  $query2="select * from gtrd_promociones_estados a inner join gtrd_estados b on a.id_estado=b.id where (b.codigo_estado='".$estado."' or b.codigo_estado='ALL') and b.pais='".$codpais."' and id_promo=".$idprom.";";
  if ($resultado = mysqli_query($link, $query2)) {
    while ($fila = mysqli_fetch_row($resultado)) {
      $count++;
      //getcupon($link,$ip,$idClient,$idprom);
      //Es valido
      echo "SI";
    }
    if($count<1)
    {

      $date= date("Y-m-d H:i:s");
      $comple='IP:['.$ip.'] PAIS:['.$codpais.']  ESTADO:['.$country_region.']  Fecha['.$date.'] Ejecucion:[La promoción no es válida para tu ubicación]';
      writelog($comple);

      echo '<div id="loading" class="standarWindow"></div>
      <div id="scratch" class="standarWindow">
        <div id="left_top"></div>
        <div id="right_bottom"></div>
        <div id="center" class="backCointain"></div>
      </div>
      <nav class="flexDisplay">
        <a href="#"><img src="ui/img/logo-pepsi-80.svg"></a>
        <img src="ui/img/oxxo_logotipo.png">
      </nav>
      <div id="mensaje" class="flexDisplay" style="height:70%">
        <img src="ui/img/logo-pepsi-80.svg" width="140">
        <p style="width:80%">¡La promocion no es valida! <br><br>
          <span style="font-family:"Sofia Regular", sans serif">para tu ubicacion.</span>
        </p>
        <div id="social">
          <a href="#" target="_blank"><img src="ui/img/social/fb.svg" width="40"></a>
          <a href="#" target="_blank"><img src="ui/img/social/ig.svg" width="40"></a>
          <a href="#" target="_blank"><img src="ui/img/social/tw.svg" width="40"></a>
          <a href="#" target="_blank"><img src="ui/img/social/yt.svg" width="40"></a>
        </div>
      </div>
      <footer class="flexDisplay">
        <h5>Esta También Es Tu Pepsi <img src="ui/img/logo-pepsi-80.svg" width="13"></h5>
        <h6 id="haz">Haz Ejercicio</h6>
        <h6><span id="hazmob">Haz Ejercicio.</span> <a href="#">Consulta bases términos y condiciones.</a> <span id="marca">® Marca Registrada</span></h6>
      </footer>';
    }
  }
  else {
     echo 'ERROR';
  }
}
function getcupon($client,$idClient,$promo)
{
  $count=0;
  $link=connect();
  $query1 = "SELECT ((TIME_TO_SEC(TIMEDIFF(NOW(), fecha_entregado))>(1*1*1)) and ('".$client."'  not in (select ip from gtrd_listanegra))) Entregar,TIMEDIFF(NOW(), fecha_entregado) TiempoTranscurrido,TIMEDIFF( TIMEDIFF('2018-08-01 00:00:00', '2018-07-31 00:00:00'),TIMEDIFF(NOW(), fecha_entregado)) TiempoRestante from gtrd_cupones where estatus=1 and ip='".$client."' and huella_digital='".$idClient."' and id_promo=".$promo." order by fecha_entregado desc LIMIT 1;";
  //echo $query1;
  if ($resultado = mysqli_query($link, $query1)) {
    while ($fila = mysqli_fetch_row($resultado)) {
        $count++;
        if($fila[0]=='1')
        {
          getcodigo($link,$promo,$client,$idClient);
        }
        else
        {
        	echo 'VUELVE';
        }
     }
     if($count<1)
     {
       getcodigo($link,$promo,$client,$idClient);
     }
  }
  else {
     echo 'ERROR';
  }
}
function getcodigo($link,$promo,$ip,$huella)
{
  $count=0;
  mysqli_autocommit($link, FALSE);
  $query2= "SELECT codigo FROM gtrd_cupones where estatus=0 and id_promo=".$promo." LIMIT 1 FOR UPDATE;";
  if ($resultado = mysqli_query($link, $query2)) {
    while ($fila = mysqli_fetch_row($resultado)) {
      $count++;
      $filepath = "";
      $text ="".$fila[0]."";
      $size = "450";
      $orientation = "horizontal";
      $code_type = "code128";
      $print = true;
      $sizefactor = "3";
      $ismob = true;
      barcode( $filepath, $text, $size, $orientation, $code_type, $print, $sizefactor,$ismob);
      update_codigos($fila[0],$ip,$huella,$link);
      echo $fila[0];

    }
    if($count<1)
    {
      echo 'AGOTADO';
    }
  }
  else {
     echo 'ERROR';
  }
  if (!mysqli_commit($link)) {
    //echo "Falló la consignación de la transacción<br>";
    exit();
  }
  else
  {

  }

}
function update_codigos($codigo,$client,$idClient,$link)
{

  $salida          = 0;
  $country_code    = '';
  $ip_address      = $client;
  $country_name    = 'Local';
  $country_city    = '';
  $country_region  = '';
  $estado='';
  $codpais='';
  $count=0;
  //$salida = get_country_local($country_code,$ip_address,$lang,$country_name,$id_group); // busqueda en BD local
  //if ($salida==0) {
  $salida = get_country_api($country_code,$ip_address,$country_region,$codpais);

	//$query ="UPDATE  bdlt_registro SET fecha_update =CURRENT_TIMESTAMP WHERE usuario = '".$usuario."' or idfb='".$idfb."'";
  $query ="UPDATE  gtrd_cupones SET estatus = 1,ip='".$client."',pais='".$codpais."',estado='".$country_region."',huella_digital='".$idClient."',fecha_entregado=NOW() WHERE codigo = '".$codigo."'";
  $ip=$client;
  $date= date("Y-m-d H:i:s");
  $comple='IP:['.$ip.'] PAIS:['.$codpais.'] ESTADO:['.$country_region.'] Fecha['.$date.'] Ejecucion:['.$query.']';
  writelog($comple);
  if (mysqli_query($link, $query)) {
    //echo "Updated record successfully<br>";
  }
  if (!mysqli_commit($link)) {
    //echo "Falló la consignación de la transacción<br>";
    exit();
  }
}
?>
