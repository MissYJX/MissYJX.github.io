function showNumberWithAnimation(i,j,randNummber){
    var numberCell=$('#number-cell-'+i+'-'+j);
    numberCell.css("background-color",getNumberBackgroundColor(randNummber));
    numberCell.css("color",getNumberColor(randNummber));
    numberCell.text(randNummber);

    numberCell.animate({
        width:"100px",
        height:"100px",
        top:getPosTop(i,j),
        left:getPosLeft(i,j)
    },50)
}

function showMoveAnimation(fromx,fromy,tox,toy){
    var numberCell=$('#number-cell-'+fromx+'-'+fromy);
    numberCell.animate({
        top:getPosTop(tox,toy),
        left:getPosLeft(tox,toy)
    },200);
}

function updateScore(score){
    $("#score").text(score);
}