import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//DB(file,local)
const filePath = path.join(__dirname, '../../data/todos.json');

async function loadTodos(){
  try{
    const exists = await fs.pathExists(filePath);
    if(!exists){
      await fs.writeJson(filePath, []);
    }
    return await fs.readJson(filePath);
  } catch (error){
    console.error('할 일 데이터를 로드하는 중 오류 발생: ', error);
    return [];
  }
}

async function saveTodos(todos){
  try{
    await fs.writeJson(filePath, todos,{spaces: 2});
  } catch (error){
    console.error('할 일 데이터를 저장하는 중 오류 발생: ', error);
  }
}

export {loadTodos, saveTodos};