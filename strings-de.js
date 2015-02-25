// byteCalc - Calculator for file sizes
// Copyright (C) 2015 David Lichti <dlichtistw@gmx.de>
// This prgram is distributed under the BSD 3-Clause license


// Messages for output
var msg = {
	'error': 'Eingabe konnte nicht verarbeitet werden. (h für Hilfe)\n',
	'res': 'Datenmenge: ',
	'reb': '           ', // used for alignment after msg.res, should be all spaces and msg.res.length - 1 long
	'help': '\
Erlaubte Operationen sind:\n\
      Byte    Initialisiere Berechnung mit [Byte]\n\
    + Byte    Addiere [Byte]\n\
    - Byte    Subtrahiere [Byte]\n\
    * Zahl    Multipliziere mit [Zahl]\n\
    / Zahl    Dividiere durch [Zahl]\n\
    =         Ergebnis ohne Präfix\n\
    c Bytes   Konvertiere [Byte] in ein schönes Format\n\
\n\
    h         Diese Hilfe anzeigen\n\
    l         Lizenz anzeigen\n\
    q         Programm beenden\n\
\n\
Erlubte Einheiten sind:\n\
    kB        1024^1 byte (Kilobyte)\n\
    MB        1024^2 byte (Megabyte)\n\
    GB        1024^3 byte (Gigabyte)\n\
    TB        1024^4 byte (Terabyte)\n\
    PB        1024^5 byte (Petabyte)\n\
    EB        1024^6 byte (Exabyte)\n\
    ZB        1024^7 byte (Zettabyte)\n\
    YB        1024^8 byte (Yottabyte)\n\
',
	'header': '\
byteCalc ' + conf.ver + ' - Rechner für Datenmengen\n\
Copyright (C) 2015 David Lichti <dlichtistw@gmx.de>\n\
',
	'license': '\
Copyright (c) 2015, David Lichti <dlichtistw@gmx.de>\n\
All rights reserved.\n\
\n\
Redistribution and use in source and binary forms, with or without\n\
modification, are permitted provided that the following conditions are met:\n\
\n\
* Redistributions of source code must retain the above copyright notice, this\n\
  list of conditions and the following disclaimer.\n\
\n\
* Redistributions in binary form must reproduce the above copyright notice,\n\
  this list of conditions and the following disclaimer in the documentation\n\
  and/or other materials provided with the distribution.\n\
\n\
* Neither the name of [project] nor the names of its\n\
  contributors may be used to endorse or promote products derived from\n\
  this software without specific prior written permission.\n\
\n\
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"\n\
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE\n\
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE\n\
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE\n\
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL\n\
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR\n\
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER\n\
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,\n\
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n\
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n\
'};
