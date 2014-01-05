// Copyright 2008 the V8 project authors. All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
//       copyright notice, this list of conditions and the following
//       disclaimer in the documentation and/or other materials provided
//       with the distribution.
//     * Neither the name of Google Inc. nor the names of its
//       contributors may be used to endorse or promote products derived
//       from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


var base_dir = '';
load(base_dir + 'base.js');

/*
// --- Load the RegExp.JS library. ---
// Define a fake window variable, which is then used by browserify to put the 
// |require| function onto.
var window = {};

// Include the browserify compiled RegExpJS source.
load(base_dir + 'regexpjs/browser.js');

// Put the RegExpJS in the global namespace.
var RegExpJS = window.require('/index.js').RegExpJS;
*/

function RegExpJS(reg) {
}

RegExpJS.prototype.exec = function(str) {
  if (str[0] == 'b' && str[1] == 'a') {
    return ['ba'];
  } else {
    return false;
  }
}

load(base_dir + 'regexp.js');

var success = true;

function PrintResult(name, result) {
  print(name + ': ' + result);
}


function PrintError(name, error) {
  PrintResult(name, error);
  success = false;
}


var scores = [];

function PrintScore(score) {
  if (success) {
    print('----');
    print('Score (version ' + BenchmarkSuite.version + '): ' + score);
  }

  scores.push(score);
}

for (var i = 0; i < 10; i++) {
  BenchmarkSuite.RunSuites({ NotifyResult: PrintResult,
                             NotifyError: PrintError,
                             NotifyScore: PrintScore });
}

print(scores.join('\n'));

