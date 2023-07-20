import simpleGit from 'simple-git';
import random from 'random';
import moment from 'moment';
import jsonfile from 'jsonfile';

let filePath='./edit.json';
const makeCommit= n =>{
    if(n===0){
        console.log('commiting');
        return simpleGit().push();
    }
    const x=random.int(0, 54);
    const y=random.int(0, 6);
    const date=moment().subtract(1, 'y').add(1, 'd').add(x, 'w').add(y, 'd').format();
    const data={
        date: date
    }
    console.log(date);
    jsonfile.writeFile(filePath, data, ()=>{
        simpleGit().add([filePath]).commit(date, {'--date': date}, makeCommit.bind(this, --n));
    });
}


makeCommit(50);