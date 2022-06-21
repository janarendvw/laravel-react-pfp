
up:
	./vendor/bin/sail up -d && ./vendor/bin/sail npm run watch
down:
	./vendor/bin/sail down
refresh_db:
	./vendor/bin/sail artisan migrate\:refresh
watch:
	./vendor/bin/sail npm run watch
