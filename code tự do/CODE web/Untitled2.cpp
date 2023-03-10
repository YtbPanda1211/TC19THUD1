#include<conio.h>
#include<stdio.h>
#include<math.h>
#include<iostream.h>
int songuyento(int m)
{ int i;
if(m<=1) return -1;
if((m==2)||(m==3)) return 1;
if(m>3)
{
for(i=2;i<m;i++)
if(m%2==0) return -1;
return 1;
} }
int sochinhphuong(int m)
{
int i;
if(m<1) return -1;
if(m>=1)
{
i=sqrt(m);
if(i*i==m) return 1;
else return -1;} }
int songuyenhoantoan(int m)
{
int i,S;
if(m<6) return -1;
if(m>=6)
{S=0;
for(i=1;i<m;i++)
if(m%i==0)
S=S+i;
if(S==m) return 1;
else return -1;
} }
int sochan(int m)
{
if(m%2==0) return 1;
else return -1;
}
int sole(int m)
{
if(m%2==0) return -1;else return 1;
}
int main()
{
int n,chon;
cout<<"1. SO NGUYEN TO"<<endl;
cout<<"2. SO CHINH PHUONG"<<endl;
cout<<"3. SO NGUYEN HOAN TOAN"<<endl;
cout<<"4. SO CHAN"<<endl;
cout<<"5. SO LE"<<endl;
cout<<"6. THOAT CHUONG TRINH"<<endl;
printf("\n You must enter a number\n");
scanf("%d",&n);
while(getch()!=27)
{
printf("\n Ban muon thuc hien hanh dong gi ?");
scanf("%d",&chon);
switch(chon)
{case 1: if((songuyento(n)==1))
cout<<"\n "<<n<< " la so nguyen to";
else cout<<"\n "<<n<< " khong la so nguyen to";
break;case 2: if((sochinhphuong(n)==1))
cout<<"\n "<<n<< " la so chinh phuong";
else cout<<"\n "<<n<< " khong la so chinh phuong";
break;
case 3: if((songuyenhoantoan(n)==1))
cout<<"\n "<<n<< " la so nguyen hoan toan";
else cout<<"\n "<<n<< " khong la so nguyen hoan toan";
break;
case 4: if((sochan(n)==1))
cout<<"\n "<<n<< " la so chan";
else cout<<"\n "<<n<< " khong la so chan";
break;
case 5: if((sole(n)==1))
cout<<"\n "<<n<< " la so le";
else cout<<"\n "<<n<< " khong la so le";
break;
default: break;
}
cout<<"\n Ban muon thoat thi nhan ESC ";
cout<<"\n" ;
}
return 0;}