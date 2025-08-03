<?php

class LuckyNumbers
{
    function sumUp(array $digitsOfNumber1, array $digitsOfNumber2): int
    {
        $cue = fn (int|string $carry, int $item) => (int) ((string) $carry . (string) $item);
        return array_reduce($digitsOfNumber1, $cue, '') + array_reduce($digitsOfNumber2, $cue, '');
    }

    public function isPalindrome(int $number): bool
    {
        return (string) $number === strrev((string) $number);
    }

    public function validate(string $input): string
    {
        return $input === '' ? 'Required field' : ((int) $input < 1 || (float) $input % 1 !== 0 ? 'Must be a whole number larger than 0' : '');
    }
}
