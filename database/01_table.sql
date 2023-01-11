USE own_project;

DROP TABLE IF EXISTS User;

/* -------------------------------------------- */

USE own_project;

/* --- CREATE TABLES --- */

CREATE TABLE IF NOT EXISTS User (
id			INTEGER 		NOT NULL AUTO_INCREMENT,
first_name 	VARCHAR(50)		NOT NULL,
last_name	VARCHAR(50)		NOT NULL,
phone_num	VARCHAR(14) 	NOT NULL,
email		VARCHAR(100)	NOT NULL,
job_title	VARCHAR(50)		NOT NULL,
job_desc	VARCHAR(255),	
username	VARCHAR(80)		NOT NULL,
password	VARCHAR(10)		NOT NULL,
start_date	DATE 			NOT NULL,
PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

/* -------------------------------------------- */

/* --- INSERTS --- */

INSERT INTO User (first_name, last_name, phone_num, email, job_title, job_desc, username, password, start_date) VALUES
("Mary", "Varga", "+358 503144556", "mary.varga@company.com", "Marketing specialist", "-", "mary.varga", "Xx66yy88cc", '2001-08-21' ),
("John", "Smith", "+358 508347996", "john.smith@company.com", "Marketing specialist", "-", "john.smith", "Kh66fl88pp", '2010-10-11' ),
("Daniel", "Rivera", "+358 505649056", "daniel.rivera@company.com", "Customer service", "-", "daniel.rivera", "Ha60gg65kc", '2008-09-13' ),
("Ellie", "Kingsley", "+358 405679436", "ellie.kingsley@company.com", "Customer service", "-", "ellie.kingsley", "Fa50we45qr", '2008-09-13' );