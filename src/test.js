/*global test, asyncTest, ok, equal, deepEqual, start, module, notEqual */
define([
    'vendor/jquery',
    'vendor/underscore',
    'vendor/jquery-ui',
    'vendor/moment',
    'vendor/t',
    'vendor/json2',
    'vendor/jit',
    'vendor/spin'
], function($, _, jquery_ui, moment, t, json2, $jit, spin) {
    test('jquery loads', function() {
        ok($);
		$('<div class=my-vendor-js-test-div>').appendTo('#qunit-fixture');
		equal($('.my-vendor-js-test-div').length, 1);
    });
    test('underscore loads', function() {
        ok(_);
		equal(_.reduce([1, 2, 3], function(sum, i) {
			return sum + i;
		}), 1 + 2 + 3);
    });
    test('jquery-ui loads', function() {
		var $hw = $('<h1>hello world</h1>')
			.css({display: 'inline-block'})
			.appendTo($('#qunit-fixture'));
		equal($hw.css('left'), 'auto');
		$hw.position({
			my: 'right top',
			at: 'right top',
			of: $('#qunit-testresult')
		});
		ok(/\d+px/.test($hw.css('left')));
    });
	test('moment loads', function() {
        ok(moment());
        ok(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
    });
    test('t loads', function() {
		var visited = [],
			tree = {
				name: 'a',
				children: [
					{name: 'b'},
					{name: 'c'}
				]
			};
		t.dfs(tree, function() { visited.push(this.name); });
        deepEqual(visited, ['a', 'b', 'c']);
    });
    test('json2 loads', function() {
        var o = {a: 1, b: 2}, stringified, parsed;
        ok(json2);
        stringified = json2.stringify(o);
        ok(stringified);
        parsed = json2.parse(stringified);
        deepEqual(parsed, {a: 1, b: 2});
        notEqual(parsed, o);
    });
    test('$jit loads', function() {
        ok($jit);
    });
    test('spin loads', function() {
        ok(Spinner());
    });
    start();
});
