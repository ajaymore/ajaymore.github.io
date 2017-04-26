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
function test_html($str)
{
    return !strpos($str,'.html');
}
$dirs = array_filter(glob('*'), 'is_dir');
$dirs = array_values($dirs);
$dirs = array_diff($dirs, array('_site', 'assets', 'sass', 'node_modules', 'nbproject', 'build'));
createJsonFile("subjects", $dirs);
foreach ($dirs as $dir)
{
	$files = scandir($dir);
	$files = array_diff($files, array('.', '..'));
	$files = array_map('removeExtension', $files);
    $files = array_filter($files,"test_html");
	createJsonFile($dir, $files);
}