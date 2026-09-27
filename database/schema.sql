CREATE DATABASE task_board;
USE task_board;


CREATE Table Tasks (
    id int auto_increment primary key,
    title varchar(255) not null,
    status enum('todo', 'in-progress', 'done') default 'todo',
    created_at timestamp default current_timestamp
);