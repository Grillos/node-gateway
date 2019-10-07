# README #

Gateway + Microserviço em NodeJs
### O que contem na Aplicação? ###

* Aplicação utiliza express-gateway, node-restful, mongoose, docker-compose
* 1.0


### Como rodar as aplicações? ###

* clone o repositorio
* abra um terminal e execute o comando docker-compose up


### Como usar as aplicações? ###

* execute o comando abaixo para criar um usuario no mongodb:

curl -X POST \
  http://localhost:3000/users \
  -H 'Content-Type: application/json' \
  -d '{
	"name":"firstname lastname",
	"username":"firstname.lastname",
	"password":"*****"
}'

* execute o comando abaixo para criar um questionario no mongodb:

curl -X POST \
  http://localhost:3001/quizes \
  -H 'Content-Type: application/json' \
  -d '{
	"question":"Como foi seu dia?",
	"answers":["1-Maravilhoso!", "2-Bom", "3-Normal", "4-Ruim"]
}'

* execute o comando abaixo para o gateway exibir os usuarios salvos

curl -X GET \
  http://localhost:8080/users 

* execute o comando abaixo para o gateway exibir os questionarios salvos

curl -X GET \
  http://localhost:8080/quizes 


