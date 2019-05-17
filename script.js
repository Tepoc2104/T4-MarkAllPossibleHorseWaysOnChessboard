var mainBlock = document.querySelector('.main-block');
var block;
var flag=true; // Проверка на черное/белое поле
var ChessX = 8;
var ChessY = 8;
var alphabet=65; // Для кода букв алфавита
var Chess = [];
var temporaryclicker; // Для корректного сохранения значений и их переноса в id div'ов
for ( var i = 0; i < ChessX; i++ ) {//Заполняем двумерный массив значениями шахматной доски
    Chess[i] = [];
    for (var j=0; j<ChessY; j++){
        temporaryclicker=j+1;
        Chess[i][j]=""+String.fromCharCode(alphabet)+temporaryclicker;
    }
    alphabet++;
}

temporaryclicker=7;
for (var i=0; i<ChessX; i++){
    for(var j=0; j<ChessY;j++){
        if (j==0) flag=!flag;
        block = document.createElement('div');
        block.onclick ='CheckPossibleWay()';
        if (flag) block.className = "block black";
        else block.className = "block white";
        //Присваеваем каждому блоку ID со значением из массива. Т.к. построение массива идет не так как
        //построение  блоков, используем специальную переменную
        block.setAttribute('id', Chess[j][temporaryclicker]);
        block.setAttribute("onclick","CheckPossibleWay(id)");

        mainBlock.appendChild(block);
        flag = !flag;

    }
    temporaryclicker--;
}


function CheckPossibleWay(pos) { //Функция проверки возможных ходов с их отображением на доске
    startpos = pos;
    var result;
    // Обновляем рисунок доски
    flag = false;
    for (var i=0; i<ChessX; i++){
        for(var j=0; j<ChessY;j++){
            result = document.getElementById(Chess[i][j]);
            if (j==0) flag=!flag;
            if (flag) result.className = "block black";
            else result.className = "block white";
            flag = !flag;
        }
    }

    //Подсвечиваем возможные ходы коня

    for (var i=0; i<ChessX; i++){
        for(var j=0; j<ChessY;j++){
            if (Chess[i][j]==startpos)
            {
                if(i<6 && j>0){ // вправо вниз
                    result = document.getElementById(Chess[i+2][j-1]);
                    result.className = "block green";
                }
                if(i<6 && j<7){ // вправо вверх
                    result = document.getElementById(Chess[i+2][j+1]);
                    result.className = "block green";
                }
                if(i>1 && j>0){ // влево вниз
                    result = document.getElementById(Chess[i-2][j-1]);
                    result.className = "block green";
                }
                if(i>1 && j<7){ // влево вверх
                    result = document.getElementById(Chess[i-2][j+1]);
                    result.className = "block green";
                }
                if(j>2 && i<7){ // вниз вправо
                    result = document.getElementById(Chess[i+1][j-2]);
                    result.className = "block green";
                }
                if(j<6 && i<7){ // вверх вправо
                    result = document.getElementById(Chess[i+1][j+2]);
                    result.className = "block green";
                }
                if(j>1 && i>0) { // вниз влево
                    result = document.getElementById(Chess[i-1][j-2]);
                    result.className = "block green";
                }
                if(j<6 && i>0){ // вверх влево
                    result = document.getElementById(Chess[i-1][j+2]);
                    result.className = "block green";
                }
            }
        }
    }
    startpos = document.getElementById(pos);
    startpos.className = "block blue";
}

