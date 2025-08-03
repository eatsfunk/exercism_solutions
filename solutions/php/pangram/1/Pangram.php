<?php

declare(strict_types=1);

function isPangram(string $string): bool
{ 
    $lowstr = strtolower($string);
    $char = 'a';
    while (str_contains($lowstr, $char)) {
        $char = ++$char;
        if ($char === 'aa') { return true; }
    }
    return false;
}
