var knex = require('knex');

var db = knex({

	client:'mysql',
	connection:{
		host:'127.0.0.1',
		user:'root',
		database:'musics'
	}
});
module.exports = db;

/*

CREATE TABLE `musics`.`musicas` (
`id` INT NOT NULL AUTO_INCREMENT ,
`nome` VARCHAR(30) NOT NULL ,
`artista` VARCHAR(30) NOT NULL ,
`estrelas` INT NOT NULL ,
PRIMARY KEY (`id`)
) ENGINE = InnoDB;

*/