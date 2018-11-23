<?php
  require_once('backend/lib/db.php');
  $htmlresult='';
  if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $ip = $_SERVER['HTTP_CLIENT_IP'];
  }
  elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
  }
  else {
    $ip = $_SERVER['REMOTE_ADDR'];
  }
  $tipo=$_POST['param1'];
  if($tipo==1)
  {
    $cads;
    $idprom=$_POST['promo'];
    $val=validafechas($cads,$idprom);
    if($val[0]>0.000001&&$val[1]<0.00000001)
    {
      //echo "SI";
      validalista($idprom,$ip);
    }
    else
    {
      //echo $val[0].' '.$cads[0];
      if ($val[0]<0.000001) {  // no ha comenzado
        echo '<nav id="menu" class="flexDisplay trans7">
           <h1 id="pepsilogopatch">
             <a href="index.php">
               <img src="ui/img/logo-pepsi-80.svg" class="trans3" alt="Pepsi ®" title="Pepsi ®" width="60px" height="60px">
             </a>
           </h1>
           <p id="stateText"></p>
           <div id="blk" class="flexDisplay" style="background-image:url("ui/img/blank.png")"></div>
         </nav>
        <div id="main">
          <p>La promoción comienza en</p>
          <ul class="countdown">
            <li>
                <span class="days">00</span>
                <p class="days_ref">Días</p>
            </li>
            <li class="seperator">.</li>
            <li>
                <span class="hours">00</span>
                <p class="hours_ref">Horas</p>
            </li>
            <li class="seperator">:</li>
            <li>
                <span class="minutes">00</span>
                <p class="minutes_ref">Minutos</p>
            </li>
            <li class="seperator">:</li>
            <li>
                <span class="seconds">00</span>
                <p class="seconds_ref">Segundos</p>
            </li>
          </ul>
        </div>
        <link rel="stylesheet" href="countdown/count.min.css">
        <script type="text/javascript" src="./countdown/jquery.downCount.js"></script>

        <script type="text/javascript">
            $(\'.countdown\').downCount({
                date: \''.str_replace("-","/",$cads[0]).'\',
                offset: -6
            }, function () {
                location.reload();
            });
        </script>';

      }
      else {  // ya finalizo
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
        <p style="width:80%">¡Esta promo ya se terminó! <br><br>
          <span style="font-family:"Sofia Regular", sans serif">Pero aún puedes redimir los cupones que tienes guardados.</span>
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
}
else if($tipo==2)
{
  $idClient = $_POST['codigo'];
  $idprom=$_POST['promo'];
  getcupon($ip,$idClient,$idprom);
}

?>
