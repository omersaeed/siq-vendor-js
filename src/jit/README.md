# StoredIQ Custom JavaScript InvoVis Toolkit

The only thing we use the JIT for right now is the treemap.  Downloaded from
here:

    http://thejit.org/builder/

And we only checked the 'TreeMap' option.


The 'jit-master.js' in ths project came from a forked version of the github 
project following the build steps in the README.md found there.

    https://github.com/philogb/jit.git
    
    Hash: 5be83bcfa7693ee245a59eb11ff474540a483db5
    
This forked version included a divide be zero fix that was necessary for our treemap.

WHOOT! 
The pull request for this forked version has been accepted so 'jit-master.js' can be 
rolled back to the default project when the time is convenient.