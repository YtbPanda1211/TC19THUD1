<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>
 	<?php
	$firstNumber  = 4;
$secondNumber = 29;
$operator     = '+';

switch($operator){
    case '+':
    {
        $result = $firstNumber + $secondNumber;        
        break;
    }
    case '-':
    {
        $result = $firstNumber - $secondNumber;        
        break;
    }
    case '*':
    {
        $result = $firstNumber * $secondNumber;        
        break;
    }
    case '/':
    {
        $result = $firstNumber / $secondNumber;        
        break;
    }
    case '%':
    {
        $result = $firstNumber % $secondNumber;        
        break;
    }
    default:
    {
        echo('Phép toán chưa được khởi tạo');
        echo ('<br /> -------------------------------------- End Ex1. <br />');
    }
}

echo("Kết quả của phép tính: $firstNumber $operator $secondNumber = $result");
echo ('<br /> -------------------------------------- End Ex4. <br />');

/**
 *  1. Bài toán xây dựng câu hỏi thi trắc nghiệm  
 *  Input :  
 *         + Khai báo yourAnswer
 *  Output:
 *         + Thông báo kết quả của câu hỏi
 */

echo('Câu hỏi : 3 * 7 = ? <br />' );
echo('a. 21 <br />' );
echo('b. 18 <br />' );
echo('c. 4 <br />' );
echo('d. 29 <br />' );

$yourAnswer =  'a';

switch($yourAnswer){
    case 'a':{
        echo('Đáp án a là đáp án đúng ');
        echo ('<br /> -------------------------------------- End Ex2. <br />');
        break;
    }
    case 'b':{
        echo('Đáp án b không chính xác');
        echo ('<br /> -------------------------------------- End Ex2. <br />');
        break;
    }
    case 'c':{
        echo('Đáp án c không chính xác');
        echo ('<br /> -------------------------------------- End Ex2. <br />');
        break;
    }
    case 'd':{
        echo('Đáp án d không chính xác');
        echo ('<br /> -------------------------------------- End Ex2. <br />');
        break;
    }
    default:{
        echo('Không có đáp án này');
        echo ('<br /> -------------------------------------- End Ex2. <br />');
        break;
    }
}

	?>
			
</body>
</html>