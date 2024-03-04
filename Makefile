clean:
	rm -rf ./node_modules ./dist ./.next

install:
	npm install

lint:
	npm run lint

spellcheck:
	cspell .

prettier:
	npx prettier . --write

build:
	npm run build

run:
	npm run dev