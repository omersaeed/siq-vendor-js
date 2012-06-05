/*global test, asyncTest, ok, equal, deepEqual, start, module, notEqual */
require([
    'vendor/jquery-ui'
], function($) {
    test('jquery was loaded when only jquery-ui was required', function() {
        ok($);

        // since we're not passing a dependency list, this will throw an error
        // if vendor/jquery hasn't been loaded
        ok(require('vendor/jquery'));
    });
    start();
});
