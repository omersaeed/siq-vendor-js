# test: node_modules test/static/components/vendor
test: node_modules
	bin/test || true

# test/static/components/vendor:
# 	cp -rf src/ test/static/components/

node_modules:
	npm install

clean:
	rm -rf test/static/components/vendor

distclean: clean
	rm -rf node_modules

.PHONY: clean distclean
