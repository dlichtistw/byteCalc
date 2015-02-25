// byteCalc - Calculator for file sizes
// Copyright (C) 2015 David Lichti <dlichtistw@gmx.de>\n\
// This prgram is distributed under the BSD 3-Clause license


// Configuration options
var conf = {
	'ver': '1.0.0',
	'dec': 6 // Decimals in scientific notation
};
	
// Messages for output
var msg = {
	'error': 'Could not process input. (type h for help)\n',
	'res': 'Data volume: ',
	'reb': '            ', // used for alignment after msg.res
	'help': '\
Allowed operations are:\n\
      bytes   Initialize with [bytes]\n\
    + bytes   add [bytes]\n\
    - bytes   subtract [bytes]\n\
    * number  multiply with [number]\n\
    / number  divide by [number]\n\
    =         result without units\n\
    c bytes   convert [bytes] to pleasant form\n\
\n\
    h         Show this help\n\
    l         Show license\n\
    q         Quit program\n\
\n\
Allowed units are:\n\
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
byteCalc ' + conf.ver + ' - Calculator for file sizes\n\
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
