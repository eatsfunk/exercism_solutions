<?php

declare(strict_types=1);

class ListOps
{
    public function append(array $list1, array $list2): array
    {
        foreach($list2 as $item) {
        	$list1[] = $item;
        }
        return $list1;
    }

    public function concat(array $list1, array ...$listn): array
    {
        foreach($listn as $list) {
        	foreach($list as $item) {
        		$list1[] = $item;
        	}
        }
        return $list1;
    }

    public function filter(callable $predicate, array $list): array
    {
        $items = [];
    	foreach ($list as $item)
        if ($predicate($item) === true) {
        	$items[] = $item;
        }
        return $items;
    }

    public function length(array $list): int
    {
        $i = 0;
    	foreach ($list as $item) {
    		$i++;
    	}
    	return $i;
    }

    public function map(callable $function, array $list): array
    {
        $res = [];
        foreach ($list as $item) {
        	$res[] = $function($item);
        }
        return $res;
    }

    public function foldl(callable $function, array $list, $accumulator)
    {
        foreach ($list as $el) {
    		$accumulator = $function($accumulator, $el);
    	}
    	return $accumulator;
    }

    public function foldr(callable $function, array $list, $accumulator)
    {
        rsort($list);
        foreach ($list as $el) {
    		$accumulator = $function($accumulator, $el);
    	}
    	return $accumulator;
    }

    public function reverse(array $list): array
    {
        $rlist = [];
        for($i = $this->length($list) -1; $i >= 0; $i--) {
        	$rlist[] = $list[$i]; 
        }
        return $rlist;
    }
}
