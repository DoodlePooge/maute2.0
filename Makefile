# Removes all installed packages and dev builds
clean:
	rm -rf ./node_modules ./dist ./.next

# Installs everything required for the environment
install:
	@npm install -g cspell@latest
	@npm install

# Checks for some general code clarity and issues
lint:
	npm run lint

# Checks all files for misspelled words
spellcheck:
	cspell .

# Keeps the files literally "prettier" by formatting them consistently
prettier:
	npx prettier . --write --no-semi --trailing-comma none

# Builds the project in production format
build:
	npm run build

# Runs the application locally to be able to view the website as it would in production based on the current code
run:
	npm run dev

# Automates the actions needed to commit and push changes, this should only be used when you are confident in the changes being pushed
# syntax: make git-commit message='update content'
git-commit:
	@git add .
	@git status
	@git commit -m "$(message)"
	@git push