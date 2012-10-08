# StoredIQ Custom jQueryUI

We only use jquery-ui for the `position` plugin.  This was downloaded by going
to the jQueryUI download builder page, checking only the 'core' and 'position'
plugins, and downloading (no theme).

You can also download a `.zip` file with the following:

	$ curl -d "download=true&files%5B%5D=ui.core.js&files%5B%5D=ui.position.js&them=none&scope=&t-name=no-theme&ui-version=current" http://jqueryui.com/download > jquery-ui.zip

Specify a versin by changing 'current' to 'x.x.x'.  Note that the resulting
Javascript is minified, and we perform our own minification, so instead of
grabbing the `jquery-ui-custom.min.js` in the root directory of the zip, the
`development-bundle/ui/jquery-ui-.custom.js` file was used (which is just a
concatenation of the `jquery-ui.core.js` and `jquery-ui.position.js` in the
same directory).


---
name: jQuery UI
website: http://jqueryui.com/
purpose: positioning user-interface elements on the screen

