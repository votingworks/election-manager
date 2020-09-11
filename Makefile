
# a phony dependency that can be used as a dependency to force builds
FORCE:

build: FORCE
	yarn --cwd apps/client install && yarn --cwd apps/client build && yarn --cwd apps/prodserver install

run:
	cd apps/prodserver && node index.js
