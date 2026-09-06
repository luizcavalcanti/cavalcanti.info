build:
	cd static_site && hugo

develop:
	cd static_site && hugo server

deploy: build
	docker compose down
	docker compose up -d
