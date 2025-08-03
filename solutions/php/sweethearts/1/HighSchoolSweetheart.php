<?php

class HighSchoolSweetheart
{
    public function firstLetter(string $name): string
    {   trim($name);
        return substr($name, 0, 1);
    }

    public function initial(string $name): string
    {
        $first_letter = HighSchoolSweetheart::firstLetter($name);
        return strtoupper($first_letter) . ".";
    }
    public function initials(string $fullname): string
    {
        $names = explode(" ", $fullname);

        $init_first = HighSchoolSweetheart::initial($names[0]);
        $init_last = HighSchoolSweetheart::initial($names[1]);
        $inits_full = $init_first . " " . $init_last . "";
        return $inits_full;
    }

    public function pair(string $sweetheart_a, string $sweetheart_b): string
    {
        $initials_a = HighSchoolSweetheart::initials($sweetheart_a);
        $initials_b = HighSchoolSweetheart::initials($sweetheart_b);
        $couple = "{$initials_a}  +  {$initials_b}";

        $sweethearts =
"     ******       ******
   **      **   **      **
 **         ** **         **
**            *            **
**                         **
**     {$couple}     **
 **                       **
   **                   **
     **               **
       **           **
         **       **
           **   **
             ***
              *";
// echo $sweethearts;
return $sweethearts;
    }
}
