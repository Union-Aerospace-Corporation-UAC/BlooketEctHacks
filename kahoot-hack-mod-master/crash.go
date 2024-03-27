package main

import (
	"fmt"
	"github.com/padnezz/kahoot-hack-mod/kahoot"
	"os"
)

func main() {
	var pin string
	var nickname string
	var crash string
	fmt.Print("Padnezz Kahoot-hack-mod")
	fmt.Print("Enter game pin: ")
	fmt.Scanln(&pin)
	fmt.Print("Enter nickname: ")
	fmt.Scanln(&nickname)
	fmt.Println("Connecting...")
	conn, err := kahoot.NewConnection(pin)
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}
	if err := conn.Register(nickname); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	fmt.Println("Enter to start crash:")
        fmt.Scanln(&crash)
		fmt.Println("CRASHING!")
		conn.SendCrashAnswer()
}
