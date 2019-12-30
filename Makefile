migration:
	npx sequelize migration:create --name=$(NAME)

migrate:
	npx sequelize db:migrate

undo-migrate:
	npx sequelize db:migrate:undo

create:
	npx sequelize db:create

destroy:
	npx sequelize db:drop

pr-accepted:
	git checkout develop
	git pull
	git branch -d $(NAME)
	git remote prune origin
