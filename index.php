<?php

    $lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
    $acceptLang = ['es', 'en']; 
    $lang = in_array($lang, $acceptLang) ? $lang : 'en';
   require_once "main_{$lang}.html"; 
    
?>
