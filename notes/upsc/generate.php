<?php 
array_map('unlink', glob("assets/*.json"));
function createJsonFile($fileName, $array){	
	$fp = fopen( 'assets/' . $fileName . '.json', 'w');
	fwrite($fp, json_encode($array));
	fclose($fp);
}
function removeExtension($str){
	return str_replace('.md','',$str);
}
$dirs = array_filter(glob('*'), 'is_dir');
$dirs = array_values($dirs);
$dirs = array_diff($dirs, array('_site', 'assets', 'sass'));
createJsonFile("subjects", $dirs);
foreach ($dirs as $dir)
{
	$files = scandir($dir);
	$files = array_diff($files, array('.', '..'));
	$files = array_map('removeExtension', $files);
	createJsonFile($dir, $files);
}