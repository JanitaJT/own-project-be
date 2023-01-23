USE own_project;

DROP TABLE IF EXISTS Task;
DROP TABLE IF EXISTS User;

/* -------------------------------------------- */

USE own_project;

/* --- CREATE TABLES --- */

CREATE TABLE IF NOT EXISTS User (
id			INTEGER 		NOT NULL AUTO_INCREMENT,
first_name 	VARCHAR(50)		NOT NULL,
last_name	VARCHAR(50)		NOT NULL,
phone_num	VARCHAR(14) 	NOT NULL,
email		VARCHAR(100)	UNIQUE NOT NULL,
username	VARCHAR(80)		UNIQUE NOT NULL,
password	VARCHAR(100)		NOT NULL,
start_date	DATE 			NOT NULL,
PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS Task (
id			INTEGER 		NOT NULL AUTO_INCREMENT,
assigned 	DATETIME		NOT NULL,
name		VARCHAR(100)	NOT NULL,
description	VARCHAR(255), 	
completed	BOOLEAN			NOT NULL,
dl			DATETIME		NOT NULL,
user_id		INTEGER,
PRIMARY KEY (id),
CONSTRAINT FOREIGN KEY (user_id) REFERENCES User(id)
ON DELETE SET NULL
ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


/* -------------------------------------------- */

/* --- INSERTS --- */

INSERT INTO User (first_name, last_name, phone_num, email, username, password, salt, start_date) VALUES
("Mary", "Varga", "+358 503144556", "mary.varga@company.com", "mary.varga", "Xx66yy88cc", '2001-08-21' ),
("John", "Smith", "+358 508347996", "john.smith@company.com", "john.smith","Kh66fl88pp" '2010-10-11' ),
("Daniel", "Rivera", "+358 505649056", "daniel.rivera@company.com", "daniel.rivera", "Ha60gg65kc" '2008-09-13' ),
("Ellie", "Kingsley", "+358 405679436", "ellie.kingsley@company.com", "ellie.kingsley","Fa50we45qr", '2008-09-13' );

INSERT INTO Task(assigned, name, description, completed, dl, user_id) VALUES
("2023-01-16 11:00", "First task", "Get this into frontend", false, "2023-01-18 17:00", 1);

/* --- UPDATES --- */

UPDATE USER
SET password = "$2b$10$1ggiyAklQr3sNJsghop8H../rCBgStgErEi71UviOiSX1rSsT8LtK"
WHERE id = 1;

UPDATE USER
SET password = "$2b$10$uRBeTcn7mpa2ZRZL6RVvV.qe4hzN4zawOrHxtGX70Z1SNcqRi10YS"
WHERE id = 2;

UPDATE USER
SET password = "$2b$10$xzM6XAaBJxOiuX4ZxrZMk.gx.IvuyOKq06q7wx/RpYhFazj.oM2Uu"
WHERE id = 3;

UPDATE USER
SET password = "$2b$10$6whZmqws7SHD2rJhFpoX1uHdiQivzkbOlIAwcW0ln.3Jh.HAZntb6"
WHERE id = 4;
