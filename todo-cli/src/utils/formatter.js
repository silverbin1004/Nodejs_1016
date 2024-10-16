import chalk from 'chalk';

function displayTodos(todos){
  if(todos.length === 0){
    console.log(chalk.yellow('등록된 할 일이 없습니다.'));
    return;
  }

  console.log(chalk.green('\n할 일 목록:'));
  todos.forEach((todo, index)=>{
    const status = todo.completed ? chalk.green('⭕️완료') : chalk.red('❌미완료');
    console.log(`${chalk.blue(index + 1 + '.')} ${todo.title} - ${status}`);
    if(todo.description){
      console.log(`설명: ${todo.description}`);
    }
  });
}

export {displayTodos};