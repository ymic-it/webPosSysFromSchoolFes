<?php
$url = "https://script.google.com/a/gn.iwasaki.ac.jp/macros/s/AKfycbzbSjNJVCaBidaHAAMKcFySwyd4nsahb4O7OJY14hlCqtJSJA/exec";
$data = $_POST;
$content = http_build_query($data);
$options = array('http' => array(
    'method' => 'POST',
    'content' => $content
));
// var_dump($_POST);
// echo file_get_contents($url, false, stream_context_create($options));

$json = json_encode($_POST);
echo $json;
$ch = curl_init();
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch,CURLOPT_FOLLOWLOCATION,true);
curl_setopt($ch,CURLOPT_MAXREDIRS,10);
curl_setopt($ch,CURLOPT_AUTOREFERER,true);
$result=curl_exec($ch);
echo 'RETURN:'.$result;
curl_close($ch);
