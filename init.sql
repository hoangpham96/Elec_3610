DROP TABLE IF EXISTS usergamelist ;
DROP TABLE IF EXISTS transactionDetail ;
DROP TABLE IF EXISTS user ;
DROP TABLE IF EXISTS game ;

CREATE TABLE user (
	id int(11) NOT NULL AUTO_INCREMENT,
	username varchar(30) DEFAULT NULL,
	password varchar(100) DEFAULT NULL,
	firstname varchar(30) DEFAULT NULL,
	lastname varchar(30) DEFAULT NULL,
	gender char(1) DEFAULT NULL,
	address varchar(200) DEFAULT NULL,
	email varchar(100) DEFAULT NULL,
	PRIMARY KEY (id),
	CONSTRAINT unique_user UNIQUE (username)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE game (
	id int(11) NOT NULL AUTO_INCREMENT,
	name varchar(30) NOT NULL,
	imgID varchar(10) NOT NULL,
	PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE transactionDetail(
	userid int(11) NOT NULL,
	transactionType char(4) NOT NULL,
	cardNum varchar(16),
	cardExp varchar(5),
	cardCCV int(3),
	FOREIGN KEY (userid)
        REFERENCES user(id)
        ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE usergamelist (
	userid int(11) NOT NULL,
	gameid int(11) NOT NULL,
	FOREIGN KEY (userid)
        REFERENCES user(id)
        ON DELETE CASCADE,
    FOREIGN KEY (gameid)
        REFERENCES game(id)
        ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO user() VALUES(NULL, "test", "test", "Testy", "McTest", "M", "address goes here", "test@test.com");
INSERT INTO user() VALUES(NULL, "gmike", "1234", "George", "Michael", "M", "1 George St, Sydney, NSW 2000", "GM@gmail.com");

INSERT INTO game() VALUES(NULL, "Storm Blood", "u28");
INSERT INTO game() VALUES(NULL, "MotoGp17", "u30");
INSERT INTO game() VALUES(NULL, "DIRT4", "u32");
INSERT INTO game() VALUES(NULL, "MORROWIND", "u34");
INSERT INTO game() VALUES(NULL, "TEKKEN7", "u38");
INSERT INTO game() VALUES(NULL, "TEKKEN7pc", "u36");
INSERT INTO game() VALUES(NULL, "Batman", "u68");
INSERT INTO game() VALUES(NULL, "Battlegrounds", "u72");
INSERT INTO game() VALUES(NULL, "Nightmares", "u70");
INSERT INTO game() VALUES(NULL, "Prey", "u74");
INSERT INTO game() VALUES(NULL, "Dawn of War", "u78");
INSERT INTO game() VALUES(NULL, "Rising Storm", "u76");

INSERT INTO transactionDetail() VALUES(1, "AMEX", "1234567812345678", "04-19", 693);
INSERT INTO transactionDetail() VALUES(2, "MAST", "5213467864123465", "06-18", 751);
INSERT INTO transactionDetail() VALUES(2, "VISA", "6572132463132156", "12-21", 252);

INSERT INTO usergamelist() VALUES(1,1);

