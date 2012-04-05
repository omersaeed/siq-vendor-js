test: node_modules test/static/vendor
	bin/test || true

test/static/vendor: static/vendor
	cp -rf $< test/static/

node_modules:
	npm install

clean:
	rm -rf test/static/vendor

distclean: clean
	rm -rf node_modules

.PHONY: clean node_modules/requirejs-path
