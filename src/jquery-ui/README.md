# StoredIQ Custom jQueryUI

We only use jquery-ui for the `position` plugin.  This was downloaded by going
to the jQueryUI download builder page, checking only the 'core' and 'position'
plugins, and downloading (no theme).

You can also download a `.zip` file with the following:

	$ curl -d "download=true&files%5B%5D=ui.core.js&files%5B%5D=ui.position.js&them=none&scope=&t-name=no-theme&ui-version=current" http://jqueryui.com/download > jquery-ui.zip

You may specify a versin by changing 'current' to 'x.x.x'.  Note that the
resulting Javascript is minified, so the two files in the `development/ui`
directory (`jquery.ui.core.js` and `jquery.ui.position.js`) were just
concatenated to make our custom file, since we perform our own minification.

---
name: jQuery UI
website: http://jqueryui.com/
purpose: positioning user-interface elements on the screen

