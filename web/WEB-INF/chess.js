//获得画板
var chess=document.getElementById("canvas");
//获得画笔（上下文）
var context=chess.getContext("2d");
//true为白棋,false为黑棋
var me=false;
//棋盘数组，0代表没有棋子，1代表白棋，2代表黑棋
var chessBorad=[];
for(var i=0;i<15;i++){
    chessBorad[i]=[];
    for(var j=0;j<15;j++){
        chessBorad[i][j]=0;
    }
}
//获得按钮
var restart=document.getElementById("restart");


//绘画棋盘的方法
function drawChessBorad(){
    context.strokeStyle="#4d4d4d";//改变线条的颜色
    for(var i=0;i<15;i++){
        //棋盘的竖线
        context.moveTo(15+i*30,15);//起点
        context.lineTo(15+i*30,435);//终点
        context.stroke();//连线
        //棋盘的横线
        context.moveTo(15,15+i*30);//起点
        context.lineTo(435,15+i*30);//终点
        context.stroke();
    }
}

window.onload=function(){
    drawChessBorad();
}