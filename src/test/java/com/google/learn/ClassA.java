package com.google.learn;

public class ClassA {
	public void sum(int a,int b)
	{
		int c =a+b;
		System.out.println(c);
	}
	public void sum(int a,int b,int d)
	{
		int c =a+b+d;
		System.out.println(c);
	}
	
	public static void main(String[] args) {
		System.out.println("Hello World");
		ClassA A = new ClassA();
		A.sum(20, 30);
		A.sum(30,50,10);
	}

}
