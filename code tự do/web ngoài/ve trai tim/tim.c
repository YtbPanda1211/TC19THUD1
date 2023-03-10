// ve trai tim = dau sao kich thuoc 7x7 ;
int main ()
{
    int m , n ;
    cout << "nhap m va n = " ;
    cin >> m >> n ;
    for(i=1 ; i <7 ; i++)
    {
        for(j=1;j<=7:j++)
        {
            if (!(( i==1 && (j==1 || j==4 || j==7)))
            || (i==4 && (j==1 || j ==7))
            || (i==5 && (j==2 || j >= 6))
            || (i==6 && (j==3 || j >= 5))
            )){
                cout << " * " ;
            }else{
                cout << "   " ;
            }
            }
            cout << endl ;
        }
    }
    return 0 ;
}