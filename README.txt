FSize.js
===============================================================================
This is a library providing two methods for parsing file sizes and printing them in a pleasant format. It is (almost, see comment in source) stand alone. It should also be portable on most platforms supporting JavaScript. (Although I only tested it in Firefox 36, WSH 5.7 and WSH 5.8.)


byteCalc.wsf
===============================================================================
This script is a command line interface for the library. It allows some simple calculations with file sizes while presenting the output in a pleasant format. It depends on the library FSize.js and also loads a resource file strings.js. 

NOTE: This is a command line script. It will crash if executed with wscript.exe (which is the default environment). Make sure to run it using 'cscript byteCalc.js' or to set the default engine to cscript.exe with 'cscript //H:CScript' before launching it.

When the script is launched, it will keep asking for commands until terminated.

Allowed operations are:
      bytes   Initialize with [bytes]
    + bytes   add [bytes]
    - bytes   subtract [bytes]
    * number  multiply with [number]
    / number  divide by [number]
    =         result without units
    c bytes   convert [bytes] to pleasant form

    h         Show this help
    l         Show license
    q         Quit program

Allowed units are:
    kB        1024^1 byte (Kilobyte)
    MB        1024^2 byte (Megabyte)
    GB        1024^3 byte (Gigabyte)
    TB        1024^4 byte (Terabyte)
    PB        1024^5 byte (Petabyte)
    EB        1024^6 byte (Exabyte)
    ZB        1024^7 byte (Zettabyte)
    YB        1024^8 byte (Yottabyte)


strings.js
===============================================================================
This file contains all strings used for the UI in byteCalc.wsf (and some options which might be used in FSize.js). If you want to localize output strings for byteCalc, then this is the place to start.

And, of course, if you want to contribute back your translation, then you are more than welcome to do so.


License
===============================================================================
This project is published under the BSD 3-Clause license. See LICENSE.txt for the exact terms.

Contributions of improvements are welcome, but not mandatory.
